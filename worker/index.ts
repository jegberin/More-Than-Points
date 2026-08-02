export interface Env {
  ASSETS: Fetcher;
  MAILCHIMP_API_KEY: string;
  MAILCHIMP_AUDIENCE_ID: string;
  RESEND_API_KEY?: string;
  /** Optional override, e.g. "More Than Points <info@morethanpoints.ie>". */
  GUIDE_FROM_EMAIL?: string;
}

interface MailchimpContactPayload {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  newsletterOptIn?: boolean;
  honey?: string;
}

interface GuideSubscribePayload {
  firstName?: string;
  email?: string;
  consent?: boolean;
  source?: string;
  profile?: { V: number; A: number; R: number; K: number };
  honey?: string;
}

type MailchimpStatus = "subscribed" | "transactional";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GUIDE_SOURCE_TAGS: Record<string, string> = {
  "learning-styles-guide": "Guide: Learning Styles",
  "learning-style-quiz": "Quiz: Completed",
  "parents-guide": "Guide: Parent's Guide",
};

const DEFAULT_FROM = "More Than Points <info@morethanpoints.ie>";
const REPLY_TO = "info@morethanpoints.ie";
/** Where website enquiries are delivered. */
const ENQUIRY_INBOX = "info@morethanpoints.ie";

/**
 * Which PDF each capture form delivers. The quiz form offers the learning
 * styles guide, so it maps to the same file.
 */
const GUIDE_DELIVERY: Record<string, { title: string; filename: string }> = {
  "learning-styles-guide": {
    title: "Discover Your Learning Style",
    filename: "more-than-points-learning-styles-guide.pdf",
  },
  "learning-style-quiz": {
    title: "Discover Your Learning Style",
    filename: "more-than-points-learning-styles-guide.pdf",
  },
  "parents-guide": {
    title: "Beyond the Points: A Parent's Guide to Your Teenager's Next Step",
    filename: "more-than-points-parents-guide.pdf",
  },
};

async function md5Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest({ name: "MD5" }, new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function splitName(full: string): { first: string; last: string } {
  const trimmed = full.trim().replace(/\s+/g, " ");
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) {
    // Single-word name: never send an empty LNAME, some audiences require it.
    return { first: trimmed || "Friend", last: trimmed || "Friend" };
  }
  return { first: trimmed.slice(0, spaceIndex), last: trimmed.slice(spaceIndex + 1) };
}

function mailchimpBase(env: Env): { origin: string; auth: string } {
  const serverPrefix = env.MAILCHIMP_API_KEY.split("-").pop();
  return {
    origin: `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_AUDIENCE_ID}`,
    auth: `Basic ${btoa(`anystring:${env.MAILCHIMP_API_KEY}`)}`,
  };
}

async function mailchimpUpsert(
  env: Env,
  email: string,
  statusIfNew: MailchimpStatus,
  mergeFields: Record<string, string>,
): Promise<string> {
  const hash = await md5Hex(email);
  const { origin, auth } = mailchimpBase(env);

  const res = await fetch(`${origin}/members/${hash}`, {
    method: "PUT",
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: JSON.stringify({
      email_address: email,
      status_if_new: statusIfNew,
      merge_fields: mergeFields,
    }),
  });

  if (!res.ok) {
    throw new Error(`Mailchimp upsert failed ${res.status}: ${await res.text().catch(() => "")}`);
  }
  return hash;
}

async function mailchimpTag(env: Env, hash: string, tagName: string): Promise<void> {
  const { origin, auth } = mailchimpBase(env);
  const res = await fetch(`${origin}/members/${hash}/tags`, {
    method: "POST",
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: JSON.stringify({ tags: [{ name: tagName, status: "active" }] }),
  });
  if (!res.ok) {
    throw new Error(`Mailchimp tag failed ${res.status}: ${await res.text().catch(() => "")}`);
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function guideEmailHtml(firstName: string, guideTitle: string, downloadUrl: string): string {
  const name = escapeHtml(firstName);
  const title = escapeHtml(guideTitle);
  return `<!doctype html>
<html lang="en"><body style="margin:0;padding:0;background-color:#fcf9f2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fcf9f2;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;padding:40px 32px;font-family:Helvetica,Arial,sans-serif;">
        <tr><td>
          <p style="margin:0 0 24px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4d6451;">More Than Points</p>
          <h1 style="margin:0 0 20px;font-size:26px;line-height:1.25;color:#1c1c18;">Here's your guide, ${name}</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#434842;">
            Thanks for asking for <strong>${title}</strong>. It's attached to this email as a PDF, so you can read it whenever suits — or print it out if that's easier.
          </p>
          <p style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#434842;">
            If the attachment doesn't come through, you can download it here instead:
          </p>
          <p style="margin:0 0 32px;">
            <a href="${downloadUrl}" style="display:inline-block;background-color:#4d6451;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:9999px;font-size:16px;font-weight:700;">Download the guide</a>
          </p>
          <hr style="border:none;border-top:1px solid #e5e2db;margin:0 0 24px;" />
          <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#434842;">
            If you'd like to talk any of it through, I offer a free 15-minute Discovery Call — a relaxed conversation about where things stand, with no obligation to book anything further.
          </p>
          <p style="margin:0 0 28px;">
            <a href="https://morethanpoints.ie/book-session" style="color:#4d6451;font-weight:700;">Book a free Discovery Call →</a>
          </p>
          <p style="margin:0;font-size:15px;line-height:1.7;color:#434842;">Angela O'Sullivan<br /><span style="color:#545f72;">More Than Points — Coaching for Life Beyond the Points</span></p>
        </td></tr>
      </table>
      <p style="max-width:560px;margin:20px auto 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#8a8a8a;text-align:center;">
        You're receiving this because you asked for this guide on morethanpoints.ie.
      </p>
    </td></tr>
  </table>
</body></html>`;
}

function guideEmailText(firstName: string, guideTitle: string, downloadUrl: string): string {
  return [
    `Here's your guide, ${firstName}`,
    "",
    `Thanks for asking for "${guideTitle}". It's attached to this email as a PDF, so you can read it whenever suits — or print it out if that's easier.`,
    "",
    `If the attachment doesn't come through, you can download it here instead: ${downloadUrl}`,
    "",
    "If you'd like to talk any of it through, I offer a free 15-minute Discovery Call — a relaxed conversation about where things stand, with no obligation to book anything further.",
    "https://morethanpoints.ie/book-session",
    "",
    "Angela O'Sullivan",
    "More Than Points — Coaching for Life Beyond the Points",
    "",
    "You're receiving this because you asked for this guide on morethanpoints.ie.",
  ].join("\n");
}

function enquiryEmailHtml(
  name: string,
  email: string,
  topic: string,
  message: string,
  newsletterOptIn: boolean,
): string {
  const rows = [
    ["Name", escapeHtml(name)],
    ["Email", `<a href="mailto:${escapeHtml(email)}" style="color:#4d6451;">${escapeHtml(email)}</a>`],
    ["Topic", escapeHtml(topic || "Not specified")],
    ["Newsletter opt-in", newsletterOptIn ? "Yes" : "No"],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 16px 8px 0;font-size:14px;color:#545f72;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:8px 0;font-size:15px;color:#1c1c18;">${value}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="en"><body style="margin:0;padding:0;background-color:#fcf9f2;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fcf9f2;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;padding:32px;font-family:Helvetica,Arial,sans-serif;">
        <tr><td>
          <p style="margin:0 0 20px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4d6451;">New website enquiry</p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 24px;">${rows}</table>
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#4d6451;">Message</p>
          <div style="background-color:#f6f3ec;border-radius:8px;padding:16px;font-size:15px;line-height:1.7;color:#1c1c18;white-space:pre-wrap;">${escapeHtml(message)}</div>
          <p style="margin:24px 0 0;font-size:13px;color:#8a8a8a;">Hit reply to respond directly to ${escapeHtml(name)}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

/**
 * Emails a contact-form enquiry to Angela. Reply-to is set to the enquirer so a
 * plain "Reply" reaches the person who got in touch.
 */
async function sendEnquiryEmail(
  env: Env,
  name: string,
  email: string,
  topic: string,
  message: string,
  newsletterOptIn: boolean,
): Promise<boolean> {
  if (!env.RESEND_API_KEY) {
    console.error("Resend not configured: RESEND_API_KEY missing — enquiry email NOT sent");
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.GUIDE_FROM_EMAIL || DEFAULT_FROM,
      to: [ENQUIRY_INBOX],
      reply_to: email,
      subject: `New enquiry from ${name}${topic ? ` — ${topic}` : ""}`,
      html: enquiryEmailHtml(name, email, topic, message, newsletterOptIn),
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic || "Not specified"}`,
        `Newsletter opt-in: ${newsletterOptIn ? "Yes" : "No"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend enquiry send failed ${res.status}: ${await res.text().catch(() => "")}`);
  }
  return true;
}

/**
 * Emails the requested guide via Resend, attaching the PDF by remote URL so the
 * Worker never has to buffer or base64-encode a multi-megabyte file.
 */
async function sendGuideEmail(
  env: Env,
  origin: string,
  source: string,
  firstName: string,
  email: string,
): Promise<boolean> {
  if (!env.RESEND_API_KEY) {
    console.warn("Resend not configured: RESEND_API_KEY missing — guide email skipped");
    return false;
  }

  const guide = GUIDE_DELIVERY[source];
  if (!guide) {
    console.error("No guide delivery mapping for source", source);
    return false;
  }

  const downloadUrl = `${origin}/${guide.filename}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.GUIDE_FROM_EMAIL || DEFAULT_FROM,
      to: [email],
      reply_to: REPLY_TO,
      subject: `Your guide: ${guide.title}`,
      html: guideEmailHtml(firstName, guide.title, downloadUrl),
      text: guideEmailText(firstName, guide.title, downloadUrl),
      attachments: [{ filename: guide.filename, path: downloadUrl }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend send failed ${res.status}: ${await res.text().catch(() => "")}`);
  }
  return true;
}

function envReady(env: Env): boolean {
  if (env.MAILCHIMP_API_KEY && env.MAILCHIMP_AUDIENCE_ID) return true;
  console.error(
    "Mailchimp env not configured:",
    `MAILCHIMP_API_KEY ${env.MAILCHIMP_API_KEY ? "present" : "MISSING"},`,
    `MAILCHIMP_AUDIENCE_ID ${env.MAILCHIMP_AUDIENCE_ID ? "present" : "MISSING"}`,
  );
  return false;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let payload: MailchimpContactPayload | null;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (!payload) return Response.json({ ok: false }, { status: 400 });

  // Honeypot: bots fill this hidden field. Accept and discard silently.
  if (payload.honey) return Response.json({ ok: true });

  const email = (payload.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return Response.json({ ok: false }, { status: 400 });

  const name = (payload.name ?? "").trim();
  const topic = payload.topic ?? "";
  const message = payload.message ?? "";
  const optIn = !!payload.newsletterOptIn;

  // Delivering the enquiry to Angela is the promise made to the visitor, and
  // there is no fallback channel — so this decides the response. The CRM sync
  // below is bookkeeping and must never cost someone their enquiry.
  let emailed = false;
  try {
    emailed = await sendEnquiryEmail(env, name || "Someone", email, topic, message, optIn);
  } catch (err) {
    console.error("Enquiry email failed", err);
  }

  if (envReady(env)) {
    try {
      const { first, last } = splitName(name);
      await mailchimpUpsert(env, email, optIn ? "subscribed" : "transactional", {
        FNAME: first,
        LNAME: last,
        TOPIC: topic,
        MESSAGE: message.slice(0, 255),
      });
    } catch (err) {
      console.error("Mailchimp contact sync failed", err);
    }
  }

  return Response.json({ ok: emailed }, { status: emailed ? 200 : 502 });
}

async function handleGuideSubscribe(request: Request, env: Env): Promise<Response> {
  if (!envReady(env)) return Response.json({ ok: false }, { status: 503 });

  let payload: GuideSubscribePayload | null;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (!payload) return Response.json({ ok: false }, { status: 400 });

  if (payload.honey) return Response.json({ ok: true });

  const email = (payload.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return Response.json({ ok: false }, { status: 400 });

  const source = payload.source ?? "";
  const mergeFields: Record<string, string> = {
    FNAME: (payload.firstName ?? "").trim() || "Friend",
    LNAME: "",
    SOURCE: source,
  };

  const p = payload.profile;
  if (p) mergeFields.PROFILE = `V:${p.V}% A:${p.A}% R:${p.R}% K:${p.K}%`;

  const firstName = mergeFields.FNAME;

  // The CRM sync and the guide email are independent. Someone who asked for a
  // guide should still receive it if Mailchimp is down, and vice versa.
  let synced = false;
  try {
    const hash = await mailchimpUpsert(env, email, payload.consent ? "subscribed" : "transactional", mergeFields);
    synced = true;

    const tag = GUIDE_SOURCE_TAGS[source];
    if (tag) {
      try {
        await mailchimpTag(env, hash, tag);
      } catch (err) {
        console.error("Mailchimp tag failed", err);
      }
    }
  } catch (err) {
    console.error("Mailchimp guide-subscribe sync failed", err);
  }

  let emailed = false;
  let emailFailed = false;
  try {
    emailed = await sendGuideEmail(env, new URL(request.url).origin, source, firstName, email);
  } catch (err) {
    emailFailed = true;
    console.error("Guide email send failed", err);
  }

  // The page always offers a direct download, so the visitor gets the guide
  // either way. Only a genuine send failure is worth flagging as an error —
  // an unconfigured mail service is a deliberate state, not a fault.
  const status = emailFailed ? 502 : 200;
  return Response.json({ ok: !emailFailed, emailed, synced }, { status });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "POST") {
      // /api/mailchimp-contact is the legacy path, kept so a visitor running a
      // cached copy of the old bundle still gets their enquiry delivered.
      if (url.pathname === "/api/contact" || url.pathname === "/api/mailchimp-contact") {
        try {
          return await handleContact(request, env);
        } catch (err) {
          console.error("Unhandled contact error", err);
          return Response.json({ ok: false }, { status: 500 });
        }
      }

      if (url.pathname === "/api/guide-subscribe") {
        try {
          return await handleGuideSubscribe(request, env);
        } catch (err) {
          console.error("Unhandled guide-subscribe error", err);
          return Response.json({ ok: false }, { status: 500 });
        }
      }
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

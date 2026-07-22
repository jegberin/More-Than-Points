export interface Env {
  ASSETS: Fetcher;
  MAILCHIMP_API_KEY: string;
  MAILCHIMP_AUDIENCE_ID: string;
}

interface MailchimpContactPayload {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  newsletterOptIn?: boolean;
  honey?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

async function handleMailchimpContact(request: Request, env: Env): Promise<Response> {
  let payload: MailchimpContactPayload | null;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (!payload) return Response.json({ ok: false }, { status: 400 });

  // Honeypot: bots fill this hidden field. Silently no-op, mirroring formsubmit.co's own convention.
  if (payload.honey) return Response.json({ ok: true });

  const email = (payload.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return Response.json({ ok: false }, { status: 400 });

  const { first, last } = splitName(payload.name ?? "");
  const hash = await md5Hex(email);
  const serverPrefix = env.MAILCHIMP_API_KEY.split("-").pop();

  try {
    const mcRes = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_AUDIENCE_ID}/members/${hash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Basic ${btoa(`anystring:${env.MAILCHIMP_API_KEY}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: payload.newsletterOptIn ? "subscribed" : "transactional",
          merge_fields: {
            FNAME: first,
            LNAME: last,
            TOPIC: payload.topic ?? "",
            MESSAGE: (payload.message ?? "").slice(0, 255),
          },
        }),
      },
    );

    if (!mcRes.ok) {
      console.error("Mailchimp API error", mcRes.status, await mcRes.text().catch(() => ""));
      return Response.json({ ok: false }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Mailchimp request failed", err);
    return Response.json({ ok: false }, { status: 502 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/mailchimp-contact" && request.method === "POST") {
      try {
        return await handleMailchimpContact(request, env);
      } catch (err) {
        console.error("Unhandled mailchimp-contact error", err);
        return Response.json({ ok: false }, { status: 500 });
      }
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

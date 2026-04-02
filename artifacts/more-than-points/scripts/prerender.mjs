/**
 * Pre-render script: generates flat static HTML files for each route.
 * Run after the Vite client build and SSR build complete.
 *
 * Output: docs/index.html, docs/how-it-works.html, docs/for-parents.html, etc.
 * GitHub Pages serves *.html files at clean URLs without the extension.
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = resolve(__dirname, "../../../docs");
const serverEntry = resolve(__dirname, "../dist/server/entry-server.js");

const { render } = await import(serverEntry);

const template = readFileSync(join(docsDir, "index.html"), "utf-8");

const routes = [
  {
    path: "/",
    file: "index.html",
    title: "Educational Coaching for Teens & Parents Ireland | More Than Points",
    description:
      "Expert educational coaching for teens (16-19) and parents in Ireland. Find alternative pathways, rebuild confidence, and navigate life beyond the Leaving Cert.",
  },
  {
    path: "/how-it-works",
    file: "how-it-works.html",
    title: "How Our Teen Coaching Process Works | More Than Points",
    description:
      "Discover our 5-step coaching framework for Irish teenagers. We move beyond standard school guidance to build confidence, uncover strengths, and plan real pathways.",
  },
  {
    path: "/coaching-options",
    file: "coaching-options.html",
    title: "Coaching Options | More Than Points",
    description:
      "Explore tailored coaching options for Irish teens and parents. From Next-Step Planning to Confidence building, find the right educational support for your family.",
  },
  {
    path: "/for-parents",
    file: "for-parents.html",
    title: "For Parents | More Than Points",
    description:
      "Support for parents of teenagers facing school pressure, uncertainty, and next-step decisions. Learn how coaching can help your family move forward.",
  },
  {
    path: "/for-teens",
    file: "for-teens.html",
    title: "For Teens | More Than Points",
    description:
      "Supportive coaching for teens aged 16–19 who feel stressed, stuck, unmotivated, or unsure about what comes next after school in Ireland.",
  },
  {
    path: "/about",
    file: "about.html",
    title: "About Angela | Teen Education & Career Coach Ireland | More Than Points",
    description:
      "With 25 years of experience in Irish adult education, Angela provides practical, person-led coaching for teenagers and families navigating the Leaving Cert chaos.",
  },
  {
    path: "/faq",
    file: "faq.html",
    title: "FAQ | More Than Points",
    description:
      "Answers to common questions about educational coaching, sessions, confidentiality, pricing, and how to support your teenager through the Leaving Cert years.",
  },
  {
    path: "/testimonials",
    file: "testimonials.html",
    title: "Testimonials | More Than Points",
    description:
      "Read what parents and young people say about working with More Than Points. Real experiences from Irish families navigating school pressure and next steps.",
  },
  {
    path: "/book-session",
    file: "book-session.html",
    title: "Book a Coaching Session | Secure Online Booking | More Than Points",
    description:
      "Book a secure online coaching session. Choose from a free intro call, a single clarity session, or a growth package. No pressure, just honest conversation.",
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact Us | Questions & Inquiries | More Than Points",
    description:
      "Get in touch with More Than Points. Send a confidential message, ask questions about our coaching, and receive a reply within 24 hours.",
  },
  {
    path: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy | More Than Points",
    description:
      "How More Than Points collects, uses, and protects your personal data under Irish and EU GDPR law.",
    noindex: true,
  },
  {
    path: "/terms-of-service",
    file: "terms-of-service.html",
    title: "Terms of Service | More Than Points",
    description:
      "Terms and conditions governing More Than Points coaching sessions, payments, cancellations, and your rights under Irish consumer law.",
    noindex: true,
  },
  {
    path: "/cookie-policy",
    file: "cookie-policy.html",
    title: "Cookie Policy | More Than Points",
    description:
      "How More Than Points uses cookies and similar technologies to improve your browsing experience, with full consent controls.",
    noindex: true,
  },
];

let successCount = 0;
const errors = [];

for (const { path, file, title, description, noindex } of routes) {
  try {
    const appHtml = render(path);

    const canonicalHref = `https://morethanpoints.ie${path === "/" ? "/" : path}`;

    let html = template
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${title}</title>`
      )
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${description}" />`
      )
      .replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${canonicalHref}" />`
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

    if (noindex) {
      html = html.replace(
        /<link rel="canonical"[^>]*>/,
        `<meta name="robots" content="noindex, follow" />\n    <link rel="canonical" href="${canonicalHref}" />`
      );
    }

    writeFileSync(join(docsDir, file), html, "utf-8");
    console.log(`  ✓ ${file}`);
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`);
    errors.push({ file, error: err });
  }
}

// 404.html: SPA shell without pre-rendered content — handles truly unknown URLs
writeFileSync(join(docsDir, "404.html"), template, "utf-8");
console.log(`  ✓ 404.html (SPA fallback)`);

if (errors.length > 0) {
  console.error(`\n❌ Pre-rendering failed: ${errors.length} page(s) did not render.`);
  for (const { file, error } of errors) {
    console.error(`   ${file}: ${error.message}`);
  }
  process.exit(1);
}

console.log(
  `\n✅ Pre-rendering complete: ${successCount}/${routes.length} pages fully rendered.`
);

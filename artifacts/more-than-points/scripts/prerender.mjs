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
    title: "More Than Points | Coaching for Teens and Parents in Ireland",
    description:
      "Calm, practical coaching for Irish teens and parents dealing with school pressure, confidence, Leaving Cert stress, and uncertainty about what comes next.",
  },
  {
    path: "/how-it-works",
    file: "how-it-works.html",
    title: "How It Works | More Than Points",
    description:
      "Learn what happens before, during, and after a coaching session with More Than Points.",
  },
  {
    path: "/coaching-options",
    file: "coaching-options.html",
    title: "Coaching Options | More Than Points",
    description:
      "Explore coaching options for teens, parents, confidence, motivation, and next-step planning.",
  },
  {
    path: "/for-parents",
    file: "for-parents.html",
    title: "For Parents | More Than Points",
    description:
      "Support for parents of teenagers facing school pressure, uncertainty, and next-step decisions.",
  },
  {
    path: "/for-teens",
    file: "for-teens.html",
    title: "For Teens | More Than Points",
    description:
      "Supportive coaching for teens who feel stressed, stuck, unmotivated, or unsure about what comes next.",
  },
  {
    path: "/about",
    file: "about.html",
    title: "About | More Than Points",
    description:
      "Learn more about the thinking behind More Than Points and the coaching approach.",
  },
  {
    path: "/faq",
    file: "faq.html",
    title: "FAQ | More Than Points",
    description:
      "Answers to common questions about coaching, sessions, confidentiality, and support.",
  },
  {
    path: "/testimonials",
    file: "testimonials.html",
    title: "Testimonials | More Than Points",
    description:
      "Read what parents and young people say about working with More Than Points.",
  },
  {
    path: "/book-session",
    file: "book-session.html",
    title: "Book a Session | More Than Points",
    description:
      "Book a coaching session with More Than Points for practical, supportive guidance.",
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact | More Than Points",
    description:
      "Get in touch with More Than Points to ask a question or arrange support.",
  },
  {
    path: "/privacy-policy",
    file: "privacy-policy.html",
    title: "Privacy Policy | More Than Points",
    description:
      "How More Than Points collects, uses, and protects your personal data.",
  },
  {
    path: "/terms-of-service",
    file: "terms-of-service.html",
    title: "Terms of Service | More Than Points",
    description: "Service terms for More Than Points coaching sessions.",
  },
  {
    path: "/cookie-policy",
    file: "cookie-policy.html",
    title: "Cookie Policy | More Than Points",
    description:
      "How More Than Points uses cookies and similar technologies.",
  },
];

let successCount = 0;

for (const { path, file, title, description } of routes) {
  try {
    const appHtml = render(path);

    const html = template
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${title}</title>`
      )
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${description}" />`
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

    writeFileSync(join(docsDir, file), html, "utf-8");
    console.log(`  ✓ ${file}`);
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${file}: ${err.message}`);
    // Fall back to plain shell so the page still works via client-side rendering
    const shellHtml = template
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${description}" />`
      );
    writeFileSync(join(docsDir, file), shellHtml, "utf-8");
    console.log(`    → written as shell fallback`);
  }
}

// 404.html: SPA shell without pre-rendered content — handles truly unknown URLs
writeFileSync(join(docsDir, "404.html"), template, "utf-8");
console.log(`  ✓ 404.html (SPA fallback)`);

console.log(
  `\n✅ Pre-rendering complete: ${successCount}/${routes.length} pages fully rendered.`
);

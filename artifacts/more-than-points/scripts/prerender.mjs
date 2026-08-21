/**
 * Pre-render script: generates flat static HTML files for each route.
 * Run after the Vite client build and SSR build complete.
 *
 * Output: docs/index.html, docs/how-it-works.html, docs/for-parents.html, etc.
 * GitHub Pages serves *.html files at clean URLs without the extension.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = resolve(__dirname, "../../../docs");
const serverEntry = resolve(__dirname, "../dist/server/entry-server.js");

const SITE_ORIGIN = "https://morethanpoints.ie";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/opengraph.jpg`;

const { render, ARTICLES_NEWEST_FIRST } = await import(pathToFileURL(serverEntry).href);

// Fail loudly: a tree-shaken export would silently produce zero article pages
// AND a sitemap missing them — the exact failure this derivation prevents.
if (!Array.isArray(ARTICLES_NEWEST_FIRST) || ARTICLES_NEWEST_FIRST.length === 0) {
  console.error(
    "Prerender: entry-server.js exported no ARTICLES_NEWEST_FIRST array.",
    "Check that src/entry-server.tsx re-exports it and the SSR build kept it."
  );
  process.exit(1);
}

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Records any social placeholder missing from index.html so a future tidy-up
// of that file cannot silently revert every page to the site-wide preview.
const missingPlaceholders = new Set();

/** Rewrite <meta {attr}="{key}" ...> in place. */
function setMeta(html, attr, key, content) {
  const re = new RegExp(`<meta ${attr}="${key}"[^>]*>`);
  if (!re.test(html)) {
    missingPlaceholders.add(`${attr}="${key}"`);
    return html;
  }
  return html.replace(re, `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`);
}

const template = readFileSync(join(docsDir, "index.html"), "utf-8");

const staticRoutes = [
  {
    path: "/",
    file: "index.html",
    lastmod: "2026-03-23",
    priority: 1.0,
    title: "Educational Coaching for Teens & Parents Ireland | More Than Points",
    description:
      "Expert educational coaching for teens (16-19) and parents in Ireland. Find alternative pathways, rebuild confidence, and navigate life beyond the Leaving Cert.",
  },
  {
    path: "/how-it-works",
    file: "how-it-works.html",
    lastmod: "2026-03-23",
    priority: 0.8,
    title: "How Our Teen Coaching Process Works | More Than Points",
    description:
      "Discover our 5-step coaching framework for Irish teenagers. We move beyond standard school guidance to build confidence, uncover strengths, and plan real pathways.",
  },
  {
    path: "/coaching-options",
    file: "coaching-options.html",
    lastmod: "2026-03-23",
    priority: 0.8,
    title: "Coaching Options | More Than Points",
    description:
      "Explore tailored coaching options for Irish teens and parents. From Next-Step Planning to Confidence building, find the right educational support for your family.",
  },
  {
    path: "/for-parents",
    file: "for-parents.html",
    lastmod: "2026-03-23",
    priority: 0.8,
    title: "For Parents | More Than Points",
    description:
      "Support for parents of teenagers facing school pressure, uncertainty, and next-step decisions. Learn how coaching can help your family move forward.",
  },
  {
    path: "/for-teens",
    file: "for-teens.html",
    lastmod: "2026-03-23",
    priority: 0.8,
    title: "For Teens | More Than Points",
    description:
      "Supportive coaching for teens aged 16–19 who feel stressed, stuck, unmotivated, or unsure about what comes next after school in Ireland.",
  },
  {
    path: "/about",
    file: "about.html",
    lastmod: "2026-03-23",
    priority: 0.7,
    title: "About Angela | Teen Education & Career Coach Ireland | More Than Points",
    description:
      "With 25 years of experience in Irish adult education, Angela provides practical, person-led coaching for teenagers and families navigating the Leaving Cert chaos.",
  },
  {
    path: "/faq",
    file: "faq.html",
    lastmod: "2026-03-23",
    priority: 0.7,
    title: "FAQ | More Than Points",
    description:
      "Answers to common questions about educational coaching, sessions, confidentiality, pricing, and how to support your teenager through the Leaving Cert years.",
  },
  {
    path: "/testimonials",
    file: "testimonials.html",
    lastmod: "2026-03-23",
    priority: 0.6,
    title: "Testimonials | More Than Points",
    description:
      "Read what parents and young people say about working with More Than Points. Real experiences from Irish families navigating school pressure and next steps.",
  },
  {
    path: "/book-session",
    file: "book-session.html",
    lastmod: "2026-03-23",
    priority: 0.9,
    title: "Book a Coaching Session | Secure Online Booking | More Than Points",
    description:
      "Book a secure online coaching session. Choose from a free intro call, a single clarity session, or a growth package. No pressure, just honest conversation.",
  },
  {
    path: "/contact",
    file: "contact.html",
    lastmod: "2026-08-02",
    priority: 0.7,
    title: "Contact Us | Questions & Inquiries | More Than Points",
    description:
      "Get in touch with More Than Points. Send a confidential message, ask questions about our coaching, and receive a reply within 24 hours.",
  },
  {
    path: "/guides/discover-your-learning-style",
    file: "guides/discover-your-learning-style.html",
    lastmod: "2026-08-02",
    priority: 0.8,
    title: "Discover Your Learning Style: A Guide for Irish Students",
    description:
      "How do you learn best? A free guide for students and parents — how to spot your study preferences and the techniques that actually work for each.",
  },
  {
    path: "/guides/learning-style-quiz",
    file: "guides/learning-style-quiz.html",
    lastmod: "2026-08-02",
    priority: 0.8,
    title: "What's My Learning Style? Free Quiz for Students",
    description:
      "Find out how you learn best in 3 minutes. A free 12-question quiz for Irish students, with study strategies matched to your results.",
  },
  {
    path: "/guides/parents-guide-beyond-the-points",
    file: "guides/parents-guide-beyond-the-points.html",
    lastmod: "2026-08-02",
    priority: 0.8,
    title: "Beyond the Points: A Parent's Guide to Your Teen's Next Step",
    description:
      "Worried about what comes after the Leaving Cert? A free guide for Irish parents — the pathways available, and how to support your teenager without adding pressure.",
  },
  {
    path: "/articles",
    file: "articles.html",
    title: "Articles for Parents & Teens | More Than Points",
    description:
      "Practical, calm articles for Irish parents and teenagers — Leaving Cert results, CAO offers, and the pathways that come next.",
    lastmod: ARTICLES_NEWEST_FIRST[0].updatedDate ?? ARTICLES_NEWEST_FIRST[0].publishDate,
    changefreq: "weekly",
    priority: 0.7,
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

// Article routes and their sitemap entries are derived from the manifest, so
// publishing an article never requires editing this file.
const articleRoutes = ARTICLES_NEWEST_FIRST.map((article) => ({
  path: `/articles/${article.slug}`,
  file: `articles/${article.slug}.html`,
  title: article.title,
  description: article.description,
  ogType: "article",
  ogImage: article.image ? `${SITE_ORIGIN}${article.image}` : DEFAULT_OG_IMAGE,
  lastmod: article.updatedDate ?? article.publishDate,
  changefreq: "monthly",
  priority: 0.9,
  noindex: article.noindex,
}));

const routes = [...staticRoutes, ...articleRoutes];

let successCount = 0;
const errors = [];

for (const { path, file, title, description, noindex, ogType = "website", ogImage = DEFAULT_OG_IMAGE } of routes) {
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
      );

    html = setMeta(html, "property", "og:type", ogType);
    html = setMeta(html, "property", "og:title", title);
    html = setMeta(html, "property", "og:description", description);
    html = setMeta(html, "property", "og:url", canonicalHref);
    html = setMeta(html, "property", "og:image", ogImage);
    html = setMeta(html, "name", "twitter:title", title);
    html = setMeta(html, "name", "twitter:description", description);
    html = setMeta(html, "name", "twitter:image", ogImage);

    // Must stay last: everything above scans <head> with regexes that would
    // otherwise run over the rendered app markup.
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    if (noindex) {
      html = html.replace(
        /<link rel="canonical"[^>]*>/,
        `<meta name="robots" content="noindex, follow" />\n    <link rel="canonical" href="${canonicalHref}" />`
      );
    }

    const outPath = join(docsDir, file);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
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

// A missing placeholder means index.html lost its social meta tags and every
// page would silently fall back to the site-wide preview.
if (missingPlaceholders.size > 0) {
  console.error(
    "Prerender: index.html is missing social meta placeholders:",
    [...missingPlaceholders].join(", ")
  );
  process.exit(1);
}

// sitemap.xml is generated, never hand-edited: the defaults below mean a route
// added without SEO fields still gets listed rather than silently omitted.
const LF = String.fromCharCode(10);

const sitemapUrls = routes
  .filter((route) => !route.noindex)
  .map((route) => ({
    loc: `${SITE_ORIGIN}${route.path === "/" ? "/" : route.path}`,
    lastmod: route.lastmod ?? new Date().toISOString().slice(0, 10),
    changefreq: route.changefreq ?? "monthly",
    priority: (route.priority ?? 0.7).toFixed(1),
  }));

const sitemapBody = sitemapUrls
  .map(
    ({ loc, lastmod, changefreq, priority }) =>
      `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join(LF);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  GENERATED FILE - do not edit by hand.
  Written by artifacts/more-than-points/scripts/prerender.mjs from its route
  table plus ARTICLES_NEWEST_FIRST (src/lib/articles.ts).
  noindex routes are excluded automatically.
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapBody}
</urlset>
`;

writeFileSync(join(docsDir, "sitemap.xml"), sitemap, "utf-8");
console.log(`  ✓ sitemap.xml (${sitemapUrls.length} URLs)`);

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

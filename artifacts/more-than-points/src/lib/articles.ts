export type ArticleSlug = "leaving-cert-results-2026";

export type Article = {
  slug: ArticleSlug;
  /** <title> and og:title. May be longer than the on-page H1. */
  title: string;
  /** On-page H1. */
  h1: string;
  /** meta description and og:description. */
  description: string;
  /** Card blurb on /articles. Falls back to `description`. */
  excerpt?: string;
  /** Pill above the H1, e.g. "For Parents". */
  eyebrow: string;
  /** ISO yyyy-mm-dd. */
  publishDate: string;
  /** ISO yyyy-mm-dd. Set only when an article is materially revised. */
  updatedDate?: string;
  tags?: string[];
  /** Root-relative OG image override, e.g. "/og-leaving-cert.jpg". */
  image?: string;
  noindex?: boolean;
};

export const ARTICLES: Record<ArticleSlug, Article> = {
  "leaving-cert-results-2026": {
    slug: "leaving-cert-results-2026",
    title: "Leaving Cert Results 2026: A Parent's Guide to What Happens Next",
    h1: "Leaving Cert Results 2026: A Parent's Guide to What Happens Next",
    description:
      "Results are out and CAO Round One offers land on 26 August. A calm guide for Irish parents — what happens next, what to do if the points fall short, and the pathways beyond the CAO.",
    excerpt:
      "Results are in and Round One offers arrive on Wednesday. What actually happens next, what to do if the points fall short, and the routes worth knowing about.",
    eyebrow: "For Parents",
    publishDate: "2026-08-22",
    tags: ["Leaving Cert", "CAO", "For Parents"],
  },
};

/**
 * Newest first, ties broken by slug so the order is stable between the
 * prerender and the browser.
 */
export const ARTICLES_NEWEST_FIRST: Article[] = Object.values(ARTICLES).sort((a, b) =>
  a.publishDate === b.publishDate
    ? a.slug < b.slug
      ? -1
      : 1
    : a.publishDate < b.publishDate
      ? 1
      : -1,
);

export function articlePath(slug: ArticleSlug): string {
  return `/articles/${slug}`;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * "2026-08-22" -> "22 August 2026".
 *
 * Deliberately string-only. `new Date("2026-08-22")` parses as UTC midnight and
 * reports 21 August in any timezone behind UTC, and `toLocaleDateString` can
 * differ between Node's ICU build and the browser's — either would produce a
 * prerender/hydration mismatch.
 */
export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

import { Link } from "wouter";
import { ARTICLES_NEWEST_FIRST, articlePath, type ArticleSlug } from "@/lib/articles";
import { GUIDES, GUIDE_ORDER } from "@/lib/guides";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  surfaceContainerLow: "#f6f3ec",
  onSurface: "#1c1c18",
};

type CrossLinkItem = { to: string; label: string };

type ArticleCrossLinksProps = {
  current: ArticleSlug;
  heading?: string;
  /** Overrides the default list (other articles, then the guides). */
  items?: CrossLinkItem[];
};

/**
 * "Keep reading" — other articles first, then the guides. Degrades gracefully
 * while there is only one article, and grows useful as more are published.
 */
export default function ArticleCrossLinks({ current, heading = "Keep reading", items }: ArticleCrossLinksProps) {
  const resolved: CrossLinkItem[] =
    items ??
    [
      ...ARTICLES_NEWEST_FIRST.filter((a) => a.slug !== current).map((a) => ({
        to: articlePath(a.slug),
        label: a.h1,
      })),
      ...GUIDE_ORDER.map((id) => ({ to: GUIDES[id].to, label: GUIDES[id].label })),
    ];

  if (resolved.length === 0) return null;

  return (
    <section
      style={{
        backgroundColor: colors.surfaceContainerLow,
        borderRadius: "1rem",
        padding: "2rem",
        margin: "3rem 0 0",
      }}
    >
      <h2
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: colors.onSurface,
          marginBottom: "1.25rem",
        }}
      >
        {heading}
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {resolved.map(({ to, label }) => (
          <li key={to} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
              style={{ color: colors.primary, fontSize: "1.25rem", marginTop: "0.125rem", flexShrink: 0 }}
            >
              arrow_forward
            </span>
            <Link
              to={to}
              style={{
                color: colors.secondary,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

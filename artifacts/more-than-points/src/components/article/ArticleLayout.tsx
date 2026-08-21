import { useEffect, type ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuthorSignature from "@/components/article/AuthorSignature";
import ArticleCrossLinks from "@/components/article/ArticleCrossLinks";
import ArticleSchema from "@/components/article/ArticleSchema";
import { setPageMeta } from "@/lib/pageMeta";
import { ARTICLES, articlePath, formatArticleDate, type ArticleSlug } from "@/lib/articles";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  tertiary: "#775a19",
  surface: "#fcf9f2",
  onSurface: "#1c1c18",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
};

/**
 * Every article's chrome: hero, byline, prose styling, sign-off, cross-links,
 * page meta and BlogPosting schema. Article files supply only the body, so a
 * new article cannot forget any of this.
 */
export default function ArticleLayout({ slug, children }: { slug: ArticleSlug; children: ReactNode }) {
  const article = ARTICLES[slug];

  useEffect(() => {
    setPageMeta(article.title, article.description, articlePath(slug));
  }, [slug, article.title, article.description]);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <style>{`
        .article-prose a {
          color: #4d6451;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: opacity 0.2s;
        }
        .article-prose a:hover { opacity: 0.75; }
        .article-prose strong { color: #1c1c18; font-weight: 700; }
      `}</style>

      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <article className="article-prose" style={{ maxWidth: "52rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <header style={{ marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.375rem 1rem",
                borderRadius: "9999px",
                backgroundColor: colors.secondaryContainer,
                color: colors.onSecondaryContainer,
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              {article.eyebrow}
            </span>

            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              {article.h1}
            </h1>

            <p
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: colors.tertiary,
              }}
            >
              <time dateTime={article.publishDate}>{formatArticleDate(article.publishDate)}</time>
              {article.updatedDate && article.updatedDate !== article.publishDate && (
                <>
                  {" · Updated "}
                  <time dateTime={article.updatedDate}>{formatArticleDate(article.updatedDate)}</time>
                </>
              )}
            </p>
          </header>

          {children}

          <AuthorSignature />
          <ArticleCrossLinks current={slug} />
        </article>
      </main>

      <Footer />
      <ArticleSchema slug={slug} />
    </div>
  );
}

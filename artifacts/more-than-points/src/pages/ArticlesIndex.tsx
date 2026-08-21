import { useEffect } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";
import { ARTICLES_NEWEST_FIRST, articlePath, formatArticleDate } from "@/lib/articles";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  tertiary: "#775a19",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  onSurface: "#1c1c18",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
};

export default function ArticlesIndex() {
  useEffect(() => {
    setPageMeta(
      "Articles for Parents & Teens | More Than Points",
      "Practical, calm articles for Irish parents and teenagers — Leaving Cert results, CAO offers, and the pathways that come next.",
      "/articles",
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <header style={{ marginBottom: "3rem" }}>
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
              Articles
            </span>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Articles
            </h1>
            <p style={{ fontSize: "1.25rem", color: colors.secondary, lineHeight: 1.7, maxWidth: "40rem" }}>
              Practical, unhurried writing for parents and teenagers navigating the Leaving Cert years — and
              everything that comes after them.
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {ARTICLES_NEWEST_FIRST.map((article) => (
              <Link key={article.slug} to={articlePath(article.slug)} style={{ textDecoration: "none" }}>
                <article
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    borderRadius: "1rem",
                    padding: "1.75rem",
                    boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(28,28,24,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(28,28,24,0.05)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: colors.tertiary,
                      marginBottom: "0.75rem",
                    }}
                  >
                    <time dateTime={article.publishDate}>{formatArticleDate(article.publishDate)}</time>
                  </p>

                  <h2
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: colors.onSurface,
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {article.h1}
                  </h2>

                  <p style={{ color: colors.secondary, fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {article.excerpt ?? article.description}
                  </p>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: colors.primary,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                    }}
                  >
                    Read the article
                    <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: "1.125rem" }}>
                      arrow_forward
                    </span>
                  </span>
                </article>
              </Link>
            ))}
          </div>

          <p style={{ marginTop: "3rem", color: colors.secondary, fontSize: "1rem", lineHeight: 1.75, maxWidth: "40rem" }}>
            If something here raises a question about your own teenager,{" "}
            <Link to="/coaching-options" style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              have a look at the coaching options
            </Link>{" "}
            or{" "}
            <Link to="/book-session" style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              book a free 15-minute Discovery Call
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import type { ReactNode } from "react";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  onSurface: "#1c1c18",
};

/** Body prose column. Supplies vertical rhythm so plain <p> needs no margins. */
const proseStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1.25rem",
  color: colors.secondary,
  fontSize: "1.0625rem",
  lineHeight: 1.8,
  maxWidth: "44rem",
};

function slugifyHeading(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

/** A top-level article section. Renders an <h2> with a deep-linkable id. */
export function ArticleSection({ id, title, children }: SectionProps) {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2
        id={id ?? slugifyHeading(title)}
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: colors.onSurface,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          marginBottom: "1.25rem",
        }}
      >
        {title}
      </h2>
      <div style={proseStyle}>{children}</div>
    </section>
  );
}

/** A sub-section within an ArticleSection. Renders an <h3>. */
export function ArticleSubsection({ id, title, children }: SectionProps) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3
        id={id ?? slugifyHeading(title)}
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "1.3125rem",
          fontWeight: 700,
          color: colors.onSurface,
          lineHeight: 1.3,
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h3>
      <div style={proseStyle}>{children}</div>
    </div>
  );
}

/** The opening paragraphs, set larger than body copy. */
export function Standfirst({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        color: colors.secondary,
        fontSize: "1.1875rem",
        lineHeight: 1.75,
        maxWidth: "44rem",
        marginBottom: "3rem",
      }}
    >
      {children}
    </div>
  );
}

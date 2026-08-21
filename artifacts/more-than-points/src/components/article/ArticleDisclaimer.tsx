import type { ReactNode } from "react";

const colors = {
  onSurfaceVariant: "#434842",
  outlineVariant: "#c3c8c0",
};

/** Small-print note at the foot of an article. Wording is article-specific. */
export default function ArticleDisclaimer({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        borderTop: `1px solid ${colors.outlineVariant}`,
        paddingTop: "1.25rem",
        marginTop: "2.5rem",
        fontSize: "0.9375rem",
        fontStyle: "italic",
        lineHeight: 1.7,
        color: colors.onSurfaceVariant,
        maxWidth: "44rem",
      }}
    >
      {children}
    </p>
  );
}

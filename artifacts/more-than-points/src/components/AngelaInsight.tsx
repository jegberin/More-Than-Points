import type { ReactNode } from "react";

const colors = {
  primary: "#4d6451",
  surfaceContainerLow: "#f6f3ec",
  onSurfaceVariant: "#434842",
};

type AngelaInsightProps = {
  label?: string;
  children: ReactNode;
};

export default function AngelaInsight({ label = "Angela's Insight", children }: AngelaInsightProps) {
  return (
    <aside
      style={{
        backgroundColor: colors.surfaceContainerLow,
        borderLeft: `4px solid ${colors.primary}`,
        borderRadius: "0.75rem",
        padding: "1.5rem 1.75rem",
        margin: "2rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: "0.6875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.primary,
          margin: 0,
        }}
      >
        {label}
      </p>
      <div style={{ color: colors.onSurfaceVariant, lineHeight: 1.75, fontSize: "1rem" }}>{children}</div>
    </aside>
  );
}

import type { ReactNode } from "react";
import AngelaInsight from "@/components/AngelaInsight";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  tertiary: "#775a19",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
};

type LearningStyleSectionProps = {
  id: string;
  eyebrow: string;
  icon: string;
  title: string;
  tagline: string;
  intro: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
  subjects: string[];
  signs: string[];
  quote?: { text: string; author: string };
  insight: ReactNode;
};

function List({ heading, items, icon }: { heading: string; items: string[]; icon: string }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.primary,
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: "1.125rem" }}>
          {icon}
        </span>
        {heading}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((item) => (
          <li
            key={item}
            style={{ display: "flex", gap: "0.5rem", color: colors.onSurfaceVariant, fontSize: "0.9375rem", lineHeight: 1.6 }}
          >
            <span aria-hidden="true" style={{ color: colors.primary, flexShrink: 0 }}>
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LearningStyleSection({
  id,
  eyebrow,
  icon,
  title,
  tagline,
  intro,
  strengths,
  challenges,
  tips,
  subjects,
  signs,
  quote,
  insight,
}: LearningStyleSectionProps) {
  return (
    <section id={id} style={{ marginBottom: "4rem", scrollMarginTop: "7rem" }}>
      <span
        style={{
          display: "inline-block",
          padding: "0.375rem 1rem",
          borderRadius: "9999px",
          backgroundColor: colors.secondaryContainer,
          color: colors.onSecondaryContainer,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {eyebrow}
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "9999px",
            backgroundColor: colors.surfaceContainerHighest,
            color: colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: colors.onSurface,
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
      </div>

      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "1.0625rem",
          fontWeight: 600,
          color: colors.primary,
          fontStyle: "italic",
          marginBottom: "1rem",
        }}
      >
        {tagline}
      </p>

      <p style={{ color: colors.secondary, fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "44rem" }}>
        {intro}
      </p>

      <div
        style={{
          backgroundColor: colors.surfaceContainerLowest,
          borderRadius: "1rem",
          padding: "clamp(1.5rem, 3vw, 2rem)",
          boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
          <List heading="Where you're strong" items={strengths} icon="star" />
          <List heading="Where it gets harder" items={challenges} icon="filter_drama" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
          <List heading="Study tips to try" items={tips} icon="lightbulb" />
          <List heading="Subjects that often click" items={subjects} icon="school" />
        </div>

        <div
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderRadius: "0.75rem",
            padding: "1.5rem",
          }}
        >
          <List heading="Signs this might be you" items={signs} icon="check_circle" />
        </div>
      </div>

      {quote && (
        <blockquote
          style={{
            borderLeft: `4px solid ${colors.tertiary}`,
            paddingLeft: "1.5rem",
            margin: "2rem 0",
            fontStyle: "italic",
            color: colors.secondary,
            fontSize: "1.125rem",
            lineHeight: 1.6,
          }}
        >
          "{quote.text}"
          <footer
            style={{
              marginTop: "0.75rem",
              fontStyle: "normal",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.tertiary,
            }}
          >
            — {quote.author}
          </footer>
        </blockquote>
      )}

      <AngelaInsight>{insight}</AngelaInsight>
    </section>
  );
}

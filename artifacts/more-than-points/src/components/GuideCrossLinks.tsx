import { Link } from "wouter";
import { GUIDES, GUIDE_ORDER, type GuideSource } from "@/lib/guides";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  surfaceContainerLow: "#f6f3ec",
  onSurface: "#1c1c18",
};

type GuideCrossLinksProps = {
  current: GuideSource;
};

export default function GuideCrossLinks({ current }: GuideCrossLinksProps) {
  const others = GUIDE_ORDER.filter((id) => id !== current);

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
          marginBottom: "1rem",
        }}
      >
        Keep reading
      </h2>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {others.map((id) => (
          <li key={id} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
              style={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0 }}
            >
              arrow_forward
            </span>
            <Link
              to={GUIDES[id].to}
              style={{ color: colors.secondary, textDecoration: "underline", textUnderlineOffset: "3px", fontSize: "1rem" }}
            >
              {GUIDES[id].label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

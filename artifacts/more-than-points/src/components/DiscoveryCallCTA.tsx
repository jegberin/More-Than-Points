import type { ReactNode } from "react";
import { Link } from "wouter";
import type { GuideSource } from "@/lib/guides";

declare function gtag(...args: unknown[]): void;

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  primaryFixed: "#cfe9d1",
};

type DiscoveryCallCTAProps = {
  heading: string;
  source: GuideSource;
  buttonLabel?: string;
  footnote?: string;
  children: ReactNode;
};

export default function DiscoveryCallCTA({
  heading,
  source,
  buttonLabel = "Book a free 15-minute Discovery Call",
  footnote,
  children,
}: DiscoveryCallCTAProps) {
  const trackClick = () => {
    if (typeof gtag !== "undefined") gtag("event", "discovery_call_click", { source });
  };

  return (
    <section
      style={{
        backgroundColor: colors.primary,
        color: colors.onPrimary,
        borderRadius: "1.5rem",
        padding: "clamp(2rem, 5vw, 3rem)",
        margin: "3rem 0",
      }}
    >
      <h2
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "1.25rem",
          lineHeight: 1.2,
        }}
      >
        {heading}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          opacity: 0.95,
          lineHeight: 1.75,
          marginBottom: "2rem",
          maxWidth: "44rem",
        }}
      >
        {children}
      </div>

      <Link to="/book-session" style={{ textDecoration: "none" }} onClick={trackClick}>
        <button
          style={{
            backgroundColor: "#ffffff",
            color: colors.primary,
            padding: "1rem 2rem",
            borderRadius: "9999px",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 700,
            fontSize: "1.0625rem",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primaryFixed}`)}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          {buttonLabel}
        </button>
      </Link>

      {footnote && (
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", opacity: 0.8 }}>{footnote}</p>
      )}
    </section>
  );
}

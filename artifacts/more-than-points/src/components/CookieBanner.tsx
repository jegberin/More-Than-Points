import { useState, useEffect } from "react";
import { Link } from "wouter";

declare function gtag(...args: unknown[]): void;

const STORAGE_KEY = "cookieConsent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#fcf9f2",
        borderTop: "1px solid #e5e2db",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        boxShadow: "0 -4px 24px rgba(28,28,24,0.08)",
      }}
    >
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.875rem",
          color: "#545f72",
          maxWidth: "52rem",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        We use cookies to understand how visitors use our site. No data is collected until you accept.{" "}
        <Link
          href="/cookie-policy"
          style={{ color: "#4d6451", textDecoration: "underline", textUnderlineOffset: "2px", whiteSpace: "nowrap" }}
        >
          Cookie Policy
        </Link>
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            padding: "0.625rem 1.25rem",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: "#ebe8e1",
            color: "#545f72",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e5e2db")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ebe8e1")}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding: "0.625rem 1.25rem",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: "#4d6451",
            color: "#ffffff",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "box-shadow 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(77,100,81,0.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

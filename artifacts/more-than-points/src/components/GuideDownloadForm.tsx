import { useState } from "react";
import { Link } from "wouter";
import { pdfUrl, type GuideSource, type VarkProfile } from "@/lib/guides";

declare function gtag(...args: unknown[]): void;

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  error: "#ba1a1a",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type GuideDownloadFormProps = {
  source: GuideSource;
  pdfFilename: string;
  profile?: VarkProfile;
  heading?: string;
  description?: string;
};

export default function GuideDownloadForm({
  source,
  pdfFilename,
  profile,
  heading = "Take the guide with you",
  description = "Prefer to read it later, or print it out? Send yourself the full illustrated guide as a PDF.",
}: GuideDownloadFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const downloadHref = pdfUrl(pdfFilename);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: { firstName?: string; email?: string } = {};
    if (!firstName.trim()) nextErrors.firstName = "Add your first name so we know who to address it to.";
    if (!EMAIL_RE.test(email.trim())) nextErrors.email = "That email address doesn't look right — check it and try again.";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Best-effort CRM sync. The PDF is delivered by the link below either way, so a
    // Mailchimp outage must never stop someone getting the guide they asked for.
    try {
      await fetch("/api/guide-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim(), consent, source, profile, honey }),
      });
    } catch (err) {
      console.error("Guide subscribe failed", err);
    }

    if (typeof gtag !== "undefined") gtag("event", "pdf_requested", { source });
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = (hasError?: boolean) => ({
    width: "100%",
    backgroundColor: colors.surfaceContainerLowest,
    border: hasError ? `2px solid ${colors.error}` : `1px solid ${colors.surfaceContainerHighest}`,
    borderRadius: "0.75rem",
    padding: "0.875rem 1.125rem",
    outline: "none",
    color: colors.onSurface,
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    transition: "box-shadow 0.2s, border-color 0.2s",
  });

  return (
    <section
      style={{
        backgroundColor: colors.surfaceContainerLow,
        borderRadius: "1.5rem",
        padding: "clamp(1.75rem, 4vw, 2.5rem)",
        margin: "3rem 0",
      }}
    >
      <h2
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
          fontWeight: 700,
          color: colors.onSurface,
          marginBottom: "0.75rem",
        }}
      >
        {heading}
      </h2>

      {submitted ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
            <strong style={{ color: colors.primary }}>On its way.</strong> Check your inbox in the next few minutes — and
            your spam folder if it hasn't landed.
          </p>
          <div>
            <a
              href={downloadHref}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: colors.primary,
                color: colors.onPrimary,
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: "1.25rem" }}>
                download
              </span>
              Download it now
            </a>
            <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant, marginTop: "0.75rem" }}>
              No need to wait for the email — you can open the PDF straight away.
            </p>
          </div>
        </div>
      ) : (
        <>
          <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "40rem" }}>
            {description}
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }} noValidate>
            <input
              type="text"
              name="_honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              style={{ display: "none" }}
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem" }}>
              <div>
                <label
                  htmlFor={`guide-first-name-${source}`}
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: colors.primary,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  First name
                </label>
                <input
                  id={`guide-first-name-${source}`}
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={inputStyle(!!errors.firstName)}
                  onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`)}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                {errors.firstName && (
                  <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.firstName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor={`guide-email-${source}`}
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: colors.primary,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  Email
                </label>
                <input
                  id={`guide-email-${source}`}
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle(!!errors.email)}
                  onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`)}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                {errors.email && (
                  <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.email}</p>
                )}
              </div>
            </div>

            <label
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                fontSize: "0.875rem",
                color: colors.onSurfaceVariant,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: "0.2rem", flexShrink: 0 }}
              />
              <span>
                Email me occasional guidance on study, subject choices and pathways. You can unsubscribe any time.
              </span>
            </label>

            <div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  padding: "1rem 2rem",
                  borderRadius: "9999px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}40`)}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                {loading ? "Sending…" : "Send me the guide"}
              </button>
            </div>

            <p style={{ fontSize: "0.75rem", color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
              We'll only use your email to send the guide and, if you tick the box, occasional guidance. Never shared.
              See our{" "}
              <Link to="/privacy-policy" style={{ color: colors.primary, textDecoration: "underline" }}>
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </>
      )}
    </section>
  );
}

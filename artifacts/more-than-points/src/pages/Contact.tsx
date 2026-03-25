import { useState, useEffect } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainer: "#f1eee7",
  surfaceContainerHigh: "#ebe8e1",
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  tertiary: "#775a19",
  tertiaryFixedDim: "#e9c176",
  error: "#ba1a1a",
  outline: "#737972",
};

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/hello@morethanpoints.ie";

export default function Contact() {
  useEffect(() => {
    setPageMeta(
      "Contact Us | Questions & Inquiries | More Than Points",
      "Get in touch with More Than Points. Send a confidential message, ask questions about our coaching, and receive a reply within 24 hours."
    );
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honey, setHoney] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address";
    }
    if (name === "message" && !value.trim()) return "Please write a message";
    return "";
  };

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    for (const [key, val] of Object.entries(form)) {
      const err = validateField(key, val);
      if (err) errs[key] = err;
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New contact from More Than Points website",
          _honey: honey,
          _captcha: "false",
        }),
      });
      if (!res.ok) {
        setSubmitError("Something went wrong. Please try again or email hello@morethanpoints.ie directly.");
        return;
      }
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again or email hello@morethanpoints.ie directly.");
      }
    } catch {
      setSubmitError("Could not send your message — please check your connection and try again, or email hello@morethanpoints.ie directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (hasError?: boolean) => ({
    width: "100%",
    backgroundColor: colors.surfaceContainerLow,
    border: hasError ? `2px solid ${colors.error}` : "none",
    borderRadius: "0.75rem",
    padding: "1rem 1.25rem",
    outline: "none",
    color: colors.onSurface,
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    transition: "background-color 0.2s, box-shadow 0.2s",
  });

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "4rem", alignItems: "flex-start" }}>
            {/* Left Column */}
            <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.375rem 1rem",
                    backgroundColor: colors.secondaryContainer,
                    color: colors.onSecondaryContainer,
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  Get in Touch
                </span>
                <h1
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    color: colors.primary,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Get in Touch
                </h1>
                <h2
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "1.375rem",
                    fontWeight: 600,
                    color: colors.secondary,
                    lineHeight: 1.35,
                  }}
                >
                  Not sure where to start? Just say hello.
                </h2>
                <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "28rem" }}>
                  You don't need to have everything figured out before getting in touch. Whether you're a parent with
                  questions, a teenager unsure what coaching involves, or a family at a crossroads — I'm here to listen.
                </p>
                <p style={{ color: colors.secondary, fontSize: "1rem", lineHeight: 1.7, maxWidth: "28rem" }}>
                  Send a message using the form and Angela will reply within 24 hours to start the conversation.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  padding: "2rem",
                  borderRadius: "0.75rem",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div style={{ position: "absolute", right: "-2rem", bottom: "-2rem", opacity: 0.1 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "6rem", color: colors.primary }}>energy_savings_leaf</span>
                </div>
                {[
                  { icon: "forum", title: "Authentic Connection", desc: "Real conversations that go beyond academic scores and daily pressures." },
                  { icon: "psychology", title: "Grounded Guidance", desc: "Tailored coaching strategies rooted in empathy and modern psychological insight." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", position: "relative" }}>
                    <div
                      style={{
                        padding: "0.75rem",
                        backgroundColor: colors.surfaceContainerHighest,
                        borderRadius: "9999px",
                        color: colors.primary,
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: colors.onSurface, marginBottom: "0.25rem" }}>{title}</h3>
                      <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  padding: "clamp(2rem, 5vw, 3rem)",
                  borderRadius: "2rem",
                  boxShadow: "0 32px 64px rgba(28,28,24,0.05)",
                  position: "relative",
                }}
              >
                {submitted ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "24rem", textAlign: "center" }}>
                    <div
                      style={{
                        width: "5rem",
                        height: "5rem",
                        backgroundColor: `${colors.primary}1A`,
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "2.5rem", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem", color: colors.primary }}>
                      Message Sent!
                    </h2>
                    <p style={{ color: colors.onSurfaceVariant, maxWidth: "24rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                      Thank you for reaching out, {form.name}. Angela will reply within 24 hours to start the conversation.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); setErrors({}); }}
                      style={{
                        backgroundColor: colors.surfaceContainerLow,
                        color: colors.secondary,
                        padding: "0.75rem 1.5rem",
                        borderRadius: "9999px",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: "2.5rem" }}>
                      <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, color: colors.onSurface, letterSpacing: "-0.015em", marginBottom: "0.75rem" }}>
                        Send a Message
                      </h2>
                      <p style={{ color: colors.secondary, lineHeight: 1.7 }}>
                        You're not committing to anything — this is a first step to start the conversation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} noValidate>
                      <input type="text" name="_honey" value={honey} onChange={(e) => setHoney(e.target.value)} style={{ display: "none" }} aria-hidden="true" tabIndex={-1} autoComplete="off" />
                      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", padding: "0 0.25rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Alex Murphy"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            style={inputStyle(!!errors.name)}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          />
                          {errors.name && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.name}</p>}
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", padding: "0 0.25rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            placeholder="alex@example.com"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            style={inputStyle(!!errors.email)}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          />
                          {errors.email && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", padding: "0 0.25rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                          How can I help? *
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Tell me a bit about what's on your mind..."
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
                          onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                          onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                        />
                        {errors.message && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.message}</p>}
                      </div>

                      {submitError && (
                        <p style={{ color: colors.error, fontSize: "0.875rem", textAlign: "center", lineHeight: 1.6 }}>
                          {submitError}
                        </p>
                      )}

                      <div style={{ paddingTop: "1rem" }}>
                        <button
                          type="submit"
                          disabled={loading}
                          style={{
                            width: "100%",
                            backgroundColor: loading ? colors.outline : colors.primary,
                            color: colors.onPrimary,
                            padding: "1.25rem",
                            borderRadius: "9999px",
                            fontWeight: 700,
                            fontSize: "1.125rem",
                            border: "none",
                            cursor: loading ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                            transition: "box-shadow 0.2s, background-color 0.2s",
                            fontFamily: "Plus Jakarta Sans, sans-serif",
                          }}
                          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.boxShadow = "0 10px 30px rgba(77,100,81,0.3)"; }}
                          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                        >
                          <span>{loading ? "Sending…" : "Send Message"}</span>
                          {!loading && <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>arrow_forward</span>}
                        </button>
                      </div>
                    </form>

                    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                      {[
                        { icon: "verified_user", text: "100% Confidential" },
                        { icon: "schedule", text: "Reply within 24h" },
                      ].map(({ icon, text }) => (
                        <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: colors.secondary }}>
                          <span className="material-symbols-outlined" style={{ color: colors.tertiary, fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Route to booking page */}
                    <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9375rem", color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
                      Ready to book?{" "}
                      <Link to="/book-session" style={{ color: colors.primary, fontWeight: 600, textDecoration: "underline" }}>
                        Go straight to the booking form →
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

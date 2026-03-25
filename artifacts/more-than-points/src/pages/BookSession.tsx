import { useState, useEffect } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  onSecondary: "#ffffff",
  tertiary: "#775a19",
  onTertiary: "#ffffff",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainer: "#f1eee7",
  surfaceContainerHigh: "#ebe8e1",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  primaryFixed: "#cfe9d1",
  primaryContainer: "#8fa892",
  tertiaryContainer: "#c19c56",
  error: "#ba1a1a",
  outlineVariant: "#c3c8c0",
};

const sessionTypes = [
  { value: "intro", label: "Free 15-Min Intro Call" },
  { value: "single", label: "Single Clarity Session (€85)" },
  { value: "growth", label: "Growth Journey Package (4–6 Sessions)" },
];

const SESSION_LABELS: Record<string, string> = {
  intro: "Free 15-Min Intro Call",
  single: "Single Clarity Session (€85)",
  growth: "Growth Journey Package (4–6 Sessions)",
};

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/hello@morethanpoints.ie";

export default function BookSession() {
  useEffect(() => {
    document.title = "Book a Coaching Session | Secure Online Booking | More Than Points";
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honey, setHoney] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    teenAge: "",
    sessionType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.teenAge) errs.teenAge = "Please select your teen's age";
    if (!form.sessionType) errs.sessionType = "Please select a session type";
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
          phone: form.phone || "Not provided",
          "teen's age": `${form.teenAge} years old`,
          "session type": SESSION_LABELS[form.sessionType] ?? form.sessionType,
          message: form.message || "No additional message provided",
          _subject: "New booking request — More Than Points",
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
      setSubmitError("Could not send your request — please check your connection and try again, or email hello@morethanpoints.ie directly.");
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

      <main style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        {/* Hero + Two-column layout */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "4rem", alignItems: "flex-start" }}>

            {/* Left column — value proposition */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
                Book a Session
              </span>
              <h1
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  color: colors.primary,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                The first step is just a conversation.
              </h1>
              <p style={{ fontSize: "1.125rem", color: colors.secondary, lineHeight: 1.7 }}>
                Booking a session doesn't mean you have everything figured out — it means you're ready to start. Fill in
                the form and Angela will be in touch within 24 hours to confirm the details.
              </p>

              {/* Session options summary */}
              <div
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1rem", color: colors.primary, marginBottom: "0.25rem" }}>
                  Session Options
                </h2>
                {[
                  { icon: "call", label: "Free 15-Min Intro Call", desc: "A no-commitment conversation to find the right fit." },
                  { icon: "lightbulb", label: "Single Clarity Session — €85", desc: "One focused session to gain perspective and a plan." },
                  { icon: "trending_up", label: "Growth Journey Package", desc: "4–6 sessions of sustained, relational support." },
                ].map(({ icon, label, desc }) => (
                  <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "1.25rem", marginTop: "0.125rem", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: colors.onSurface }}>{label}</p>
                      <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust reassurances */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { icon: "payments", text: "Secure payment link sent by Angela after confirmation" },
                  { icon: "event_available", text: "Sessions can be rescheduled up to 24 hours in advance" },
                  { icon: "verified_user", text: "All sessions are confidential" },
                  { icon: "schedule", text: "Response within 24 hours" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span className="material-symbols-outlined" style={{ color: colors.tertiary, fontSize: "1.25rem", flexShrink: 0 }}>{icon}</span>
                    <span style={{ fontSize: "0.9375rem", color: colors.onSurfaceVariant }}>{text}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "1rem", color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
                Sessions are online via video call, available to families anywhere in Ireland. There's no pressure, no
                commitment beyond what you choose — just a grounded, honest conversation about what comes next.
              </p>
            </div>

            {/* Right column — booking form */}
            <div>
              <div
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderRadius: "2rem",
                  padding: "clamp(2rem, 5vw, 3rem)",
                  boxShadow: "0 4px 12px rgba(28,28,24,0.04)",
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
                      Request Received!
                    </h2>
                    <p style={{ color: colors.onSurfaceVariant, maxWidth: "28rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                      Thank you for reaching out, {form.name}. Angela will be in touch within 24 hours to confirm your
                      session and provide payment details.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", teenAge: "", sessionType: "", message: "" }); }}
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
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ paddingBottom: "1.5rem", borderBottom: `1px solid ${colors.surfaceContainer}`, marginBottom: "1.75rem" }}>
                      <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: colors.primary }}>
                        Book a Coaching Session
                      </h2>
                      <p style={{ color: colors.secondary, fontSize: "0.875rem", marginTop: "0.25rem" }}>Fill in your details and Angela will confirm your booking.</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      <input type="text" name="_honey" value={honey} onChange={(e) => setHoney(e.target.value)} style={{ display: "none" }} aria-hidden="true" tabIndex={-1} autoComplete="off" />

                      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Alex Murphy"
                            value={form.name}
                            onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: "" }); }}
                            style={inputStyle(!!errors.name)}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          />
                          {errors.name && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.name}</p>}
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            placeholder="alex@example.com"
                            value={form.email}
                            onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: "" }); }}
                            style={inputStyle(!!errors.email)}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          />
                          {errors.email && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+353 87 123 4567"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            style={inputStyle()}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Teen's Age *
                          </label>
                          <select
                            value={form.teenAge}
                            onChange={(e) => { setForm({ ...form, teenAge: e.target.value }); if (errors.teenAge) setErrors({ ...errors, teenAge: "" }); }}
                            style={{ ...inputStyle(!!errors.teenAge), appearance: "none", cursor: "pointer" }}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          >
                            <option value="">Select age...</option>
                            {[16, 17, 18, 19].map((age) => (
                              <option key={age} value={String(age)}>{age} years old</option>
                            ))}
                          </select>
                          {errors.teenAge && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.teenAge}</p>}
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            Session Type *
                          </label>
                          <select
                            value={form.sessionType}
                            onChange={(e) => { setForm({ ...form, sessionType: e.target.value }); if (errors.sessionType) setErrors({ ...errors, sessionType: "" }); }}
                            style={{ ...inputStyle(!!errors.sessionType), appearance: "none", cursor: "pointer" }}
                            onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                            onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                          >
                            <option value="">Select a session type...</option>
                            {sessionTypes.map(({ value, label }) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                          </select>
                          {errors.sessionType && <p style={{ color: colors.error, fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.sessionType}</p>}
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                          Tell me about your situation (Optional)
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell me a bit about what you're hoping to achieve..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          style={{ ...inputStyle(), resize: "vertical" }}
                          onFocus={(e) => { e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`; e.target.style.backgroundColor = "#fff"; }}
                          onBlur={(e) => { e.target.style.boxShadow = "none"; e.target.style.backgroundColor = colors.surfaceContainerLow; }}
                        />
                      </div>

                      {submitError && (
                        <p style={{ color: colors.error, fontSize: "0.875rem", textAlign: "center", lineHeight: 1.6 }}>
                          {submitError}
                        </p>
                      )}

                      <div style={{ paddingTop: "0.5rem" }}>
                        <button
                          type="submit"
                          disabled={loading}
                          style={{
                            width: "100%",
                            backgroundColor: loading ? "#737972" : colors.primary,
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
                          <span>{loading ? "Sending…" : "Request Booking"}</span>
                          {!loading && <span className="material-symbols-outlined">calendar_today</span>}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

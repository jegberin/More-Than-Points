import { useState } from "react";
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
  onTertiaryContainer: "#4a3400",
  error: "#ba1a1a",
  outlineVariant: "#c3c8c0",
};

const sessionTypes = [
  { value: "single", label: "Single Clarity Session (€85)" },
  { value: "growth", label: "Growth Journey Package (4–6 Sessions)" },
  { value: "intro", label: "Free 15-Min Intro Call" },
];

const faqs = [
  {
    q: "How do payments work?",
    a: "We use Stripe to process all transactions securely. You will be prompted to enter your payment details after selecting your preferred session time. We accept all major credit cards and digital wallets.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Sessions can be cancelled or rescheduled free of charge up to 24 hours in advance. Late cancellations may incur a small processing fee.",
  },
  {
    q: "What should I expect from the first session?",
    a: "Our initial call is about discovery. We focus on understanding your current challenges, setting clear objectives, and outlining a tailored roadmap for your journey.",
  },
  {
    q: "Is my information private?",
    a: "Absolutely. Confidentiality is the cornerstone of our coaching relationship. All sessions are private and conducted in a secure virtual environment.",
  },
];

export default function BookSession() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
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
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "3rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
                Scheduling
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
                Take the first step towards a clearer path.
              </h1>
              <p style={{ fontSize: "1.125rem", color: colors.secondary, lineHeight: 1.7, maxWidth: "28rem" }}>
                Our coaching sessions are designed to be a sanctuary for growth. Secure your time below and begin the
                journey to grounded success.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "1rem" }}>
                <div style={{ display: "flex" }}>
                  {[colors.surfaceContainer, colors.surfaceContainerHigh].map((bg, i) => (
                    <div
                      key={i}
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "9999px",
                        border: `2px solid ${colors.surface}`,
                        backgroundColor: bg,
                        marginLeft: i > 0 ? "-0.75rem" : 0,
                      }}
                    />
                  ))}
                </div>
                <p style={{ fontSize: "0.875rem", fontWeight: 500, color: colors.onSurfaceVariant }}>
                  Trusted by 500+ families
                </p>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-1rem", backgroundColor: `${colors.primaryContainer}33`, borderRadius: "2rem", filter: "blur(2rem)", transition: "background-color 0.7s" }} />
              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "2rem", overflow: "hidden", backgroundColor: colors.surfaceContainer, boxShadow: "0 25px 50px rgba(28,28,24,0.12)" }}>
                <img
                  alt="Coaching session environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWBtjDM_HXk-9P5XFwTMUU4cbbGpu5i37uAuyajMdFw_2XErfAIbZtRjwXVGwYOjVoCjX2yzZE7rx3LQXsC50hIJTEIiSkvFOLHhcWK1zrrUxNB8a3P_ILTY03CduEJuZh30QiditCDRy9UNN9LyapMBaQNHTbsABbsPHTnDhru5MU4-C2ICrdLsqiveukkkm1zAwzG2FTIPt7SjUjbborVgvPYlYz_pmJQVc3BCvRsu5qX0Q_WaoCv2RQVBQldhrOtu50hCNap-Q"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(77,100,81,0.4), transparent)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-form" style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div
            style={{
              backgroundColor: colors.surfaceContainerLow,
              borderRadius: "2.5rem",
              padding: "0.25rem",
            }}
          >
            <div
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "2rem",
                padding: "clamp(2rem, 5vw, 3rem)",
                minHeight: "28rem",
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
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem", color: colors.primary }}>
                    Request Received!
                  </h3>
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
                  <div style={{ paddingBottom: "2rem", borderBottom: `1px solid ${colors.surfaceContainer}`, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: colors.primary }}>
                        Book a Coaching Session
                      </h3>
                      <p style={{ color: colors.secondary, fontSize: "0.875rem", marginTop: "0.25rem" }}>Fill in your details and Angela will confirm your booking.</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: colors.primary, fontWeight: 600 }}>
                      <span className="material-symbols-outlined">schedule</span>
                      <span>60 min</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: colors.primary, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Alex Murphy"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                          onChange={(e) => setForm({ ...form, teenAge: e.target.value })}
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
                          onChange={(e) => setForm({ ...form, sessionType: e.target.value })}
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

                    <div style={{ paddingTop: "0.5rem" }}>
                      <button
                        type="submit"
                        style={{
                          width: "100%",
                          backgroundColor: colors.primary,
                          color: colors.onPrimary,
                          padding: "1.25rem",
                          borderRadius: "9999px",
                          fontWeight: 700,
                          fontSize: "1.125rem",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.75rem",
                          transition: "box-shadow 0.2s",
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(77,100,81,0.3)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                      >
                        <span>Request Booking</span>
                        <span className="material-symbols-outlined">calendar_today</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Trust Features */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 8rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>
            {[
              { icon: "payments", color: colors.secondary, title: "Secure Payments", desc: "Fully integrated with Stripe for secure, industry-standard payment processing." },
              { icon: "verified_user", color: colors.primary, title: "Flexible Policies", desc: "Life happens. Easily reschedule up to 24 hours before your session starts." },
              { icon: "psychology", color: colors.tertiary, title: "Expert Guidance", desc: "Every session is led by a certified coach specialising in teen development." },
            ].map(({ icon, color, title, desc }) => (
              <div
                key={title}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  boxShadow: `0 4px 12px rgba(28,28,24,0.06)`,
                  border: `1px solid ${colors.outlineVariant}1A`,
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: `${color}1A`,
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color }}>{icon}</span>
                </div>
                <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem" }}>{title}</h4>
                <p style={{ color: colors.secondary, fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem 8rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: colors.primary, marginBottom: "1rem" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: colors.secondary }}>Everything you need to know before we begin.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: colors.surfaceContainer,
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", textAlign: "left" }}>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, color: colors.onSurface }}>{q}</span>
                  <span className="material-symbols-outlined" style={{ color: colors.primary, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>add</span>
                </div>
                {openFaq === i && (
                  <div style={{ marginTop: "1rem", color: colors.onSurfaceVariant, fontSize: "0.875rem", lineHeight: 1.7 }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              backgroundColor: colors.primary,
              borderRadius: "3rem",
              padding: "clamp(3rem, 8vw, 5rem)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "16rem", height: "16rem", backgroundColor: `${colors.primaryContainer}33`, borderRadius: "9999px", transform: "translate(50%, -50%)", filter: "blur(3rem)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "24rem", height: "24rem", backgroundColor: `${colors.secondary}1A`, borderRadius: "9999px", transform: "translate(-50%, 50%)", filter: "blur(3rem)" }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: "32rem", margin: "0 auto" }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700, color: colors.onPrimary, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Ready to begin your modern journey?
              </h2>
              <p style={{ color: colors.primaryFixed, fontSize: "1.125rem", marginBottom: "2.5rem", opacity: 0.9 }}>
                Join hundreds of others who have found clarity through our grounded approach.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <a href="#booking-form" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: colors.tertiaryContainer,
                      color: colors.onTertiaryContainer,
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    View Available Times
                  </button>
                </a>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: colors.onPrimary,
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                  >
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

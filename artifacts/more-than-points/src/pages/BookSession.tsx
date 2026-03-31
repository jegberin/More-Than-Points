import { useEffect } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

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

const FAQ_ITEMS = [
  {
    q: "How do payments work?",
    a: "After Angela confirms your booking by email, she will send you a secure payment link. We accept all major credit and debit cards.",
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

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jEPaz5bcYcxgir6BTaSpRTI5QkLw46R6TDwrVgrj5Qn7Ox7TwR8FJ-JQPttcGzDWs2FhhCWPS?gv=true";

export default function BookSession() {
  useEffect(() => {
    setPageMeta(
      "Book a Coaching Session | Secure Online Booking | More Than Points",
      "Book a free 15-minute intro call with Angela. Pick a time that suits you and receive instant confirmation — no commitment required."
    );
  }, []);

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
                Booking a session doesn't mean you have everything figured out — it means you're ready to start. Pick a
                time that suits you and you'll receive an instant confirmation. No waiting, no pressure.
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
                  { icon: "call", label: "Free 15-Min Intro Call", desc: "A no-commitment conversation to find the right fit — book instantly below." },
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
                  { icon: "bolt", text: "Instant booking confirmation via Google Calendar" },
                  { icon: "payments", text: "Secure payment link sent by Angela after your call" },
                  { icon: "event_available", text: "Sessions can be rescheduled up to 24 hours in advance" },
                  { icon: "verified_user", text: "All sessions are confidential" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span className="material-symbols-outlined" style={{ color: colors.tertiary, fontSize: "1.25rem", flexShrink: 0 }}>{icon}</span>
                    <span style={{ fontSize: "0.9375rem", color: colors.onSurfaceVariant }}>{text}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "1rem", color: colors.onSurfaceVariant, lineHeight: 1.7 }}>
                Sessions are online via video call, available to families anywhere in Ireland. The intro call is where we
                get to know each other and figure out what kind of support would help most.
              </p>
            </div>

            {/* Right column — Google Calendar embed */}
            <div>
              <div
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderRadius: "2rem",
                  padding: "clamp(2rem, 5vw, 3rem)",
                  boxShadow: "0 4px 12px rgba(28,28,24,0.04)",
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    paddingBottom: "1.25rem",
                    borderBottom: `1px solid ${colors.surfaceContainer}`,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: colors.primary,
                      fontSize: "1.5rem",
                      marginTop: "0.25rem",
                      flexShrink: 0,
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    calendar_month
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: colors.primary,
                        margin: 0,
                      }}
                    >
                      Book Your Free 15-Min Intro Call
                    </h2>
                    <p style={{ color: colors.secondary, fontSize: "0.875rem", marginTop: "0.25rem" }}>
                      Pick a time that suits you — no commitment required.
                    </p>
                  </div>
                </div>

                {/* Google Calendar iframe */}
                <iframe
                  src={CALENDAR_URL}
                  style={{ border: 0, display: "block", borderRadius: "0.75rem" }}
                  width="100%"
                  height="600"
                  frameBorder={0}
                  title="Book a free 15-minute intro call with Angela"
                />

                {/* Footer note */}
                <p
                  style={{
                    marginTop: "1.25rem",
                    fontSize: "0.8125rem",
                    color: colors.onSurfaceVariant,
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  Interested in a single session or package?{" "}
                  <Link
                    to="/contact"
                    style={{
                      color: colors.primary,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      fontWeight: 600,
                    }}
                  >
                    Contact Angela →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <h2
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Common Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "52rem", margin: "0 auto" }}>
            {FAQ_ITEMS.map(({ q, a }) => (
              <details
                key={q}
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: colors.onSurface,
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {q}
                  <span className="material-symbols-outlined" style={{ color: colors.primary, flexShrink: 0 }}>expand_more</span>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem" }}>
                  <p style={{ color: colors.onSurfaceVariant, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

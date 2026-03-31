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
    a: "After your intro call, Angela will propose a bespoke coaching plan and send you a quote by email. Once agreed, a secure payment link is sent via PayPal or Revolut. Payment is required before sessions begin.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Sessions can be cancelled or rescheduled free of charge up to 24 hours in advance. Late cancellations may incur a small processing fee.",
  },
  {
    q: "What should I expect from the first session?",
    a: "Your first paid 60-minute session builds on the intro call. We work through the plan together — identifying strengths, clarifying goals, and mapping out practical next steps.",
  },
  {
    q: "Is my information private?",
    a: "Absolutely. Confidentiality is the cornerstone of the coaching relationship. All sessions are private and conducted in a secure virtual environment.",
  },
];

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jEPaz5bcYcxgir6BTaSpRTI5QkLw46R6TDwrVgrj5Qn7Ox7TwR8FJ-JQPttcGzDWs2FhhCWPS?gv=true";

const STEPS = [
  {
    step: "1",
    icon: "call",
    title: "Free 15-Min Intro Call",
    desc: "Book a relaxed, no-commitment call. We figure out together what support makes the most sense for your family.",
  },
  {
    step: "2",
    icon: "forum",
    title: "Agree on the Approach",
    desc: "You and Angela decide together on the coaching focus and the number of sessions that feels right.",
  },
  {
    step: "3",
    icon: "description",
    title: "Bespoke Plan & Quote",
    desc: "Angela proposes a personalised coaching plan and sends a quote by email — no hidden fees, no surprises.",
  },
  {
    step: "4",
    icon: "payments",
    title: "Secure Payment",
    desc: "Pay easily via a secure PayPal or Revolut link. Payment is required before sessions begin.",
  },
  {
    step: "5",
    icon: "video_call",
    title: "Your Personalised Sessions",
    desc: "Angela sends your unique session link. Each 60-minute session runs online, accessible from anywhere in Ireland.",
  },
];

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

        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 4rem", textAlign: "center" }}>
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
              marginBottom: "1.5rem",
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
              marginBottom: "1.25rem",
            }}
          >
            The first step is just a conversation.
          </h1>
          <p style={{ fontSize: "1.125rem", color: colors.secondary, lineHeight: 1.7, maxWidth: "42rem", margin: "0 auto" }}>
            Booking doesn't mean you have everything figured out — it means you're ready to start. Pick a time below
            and Angela will be in touch to take things from there.
          </p>
        </section>

        {/* How It Works — 5 steps */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 process-timeline"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "1.5rem",
            }}
          >
            {STEPS.map(({ step, icon, title, desc }) => (
              <li
                key={step}
                style={{
                  backgroundColor: colors.surfaceContainerLow,
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "9999px",
                      backgroundColor: colors.primary,
                      color: colors.onPrimary,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    {step}
                  </span>
                  <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "1.375rem" }}>{icon}</span>
                </div>
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1rem", color: colors.onSurface, margin: 0 }}>
                  {title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: colors.onSurfaceVariant, lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing overview */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <div
            style={{
              backgroundColor: colors.surfaceContainerLow,
              borderRadius: "1.5rem",
              padding: "2.5rem",
            }}
          >
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.375rem", color: colors.primary, marginBottom: "1.75rem" }}>
              Session Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.25rem" }}>
              {[
                { icon: "call", label: "Free 15-Min Intro Call", price: "Free", note: "No commitment. Book below." },
                { icon: "psychology", label: "Teen Coaching", price: "€255 – €510", note: "3 to 6 sessions" },
                { icon: "self_improvement", label: "Confidence & Motivation", price: "€255 – €510", note: "3 to 6 sessions" },
                { icon: "family_history", label: "Parent Support", price: "€255 – €510", note: "3 to 6 sessions" },
                { icon: "map", label: "Next-Step Planning", price: "€340 – €680", note: "4 to 8 sessions" },
                { icon: "sync_saved_locally", label: "Follow-Up Sessions", price: "On request", note: "For past clients" },
              ].map(({ icon, label, price, note }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    backgroundColor: colors.surfaceContainerLowest,
                    borderRadius: "0.875rem",
                    padding: "1.125rem 1.25rem",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0 }}>{icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: colors.onSurface, margin: 0 }}>{label}</p>
                    <p style={{ fontSize: "0.8125rem", color: colors.onSurfaceVariant, margin: 0 }}>{note}</p>
                  </div>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: colors.primary, flexShrink: 0, textAlign: "right" }}>{price}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: colors.onSurfaceVariant, lineHeight: 1.65 }}>
              Exact package size and price are proposed by Angela after your free intro call, based on your family's specific needs.
              Payment is made securely via PayPal or Revolut.
            </p>
          </div>
        </section>

        {/* Google Calendar embed — full width */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div
            style={{
              backgroundColor: colors.surfaceContainerLowest,
              borderRadius: "2rem",
              padding: "clamp(2rem, 5vw, 3rem)",
              boxShadow: "0 4px 12px rgba(28,28,24,0.04)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                paddingBottom: "1.25rem",
                borderBottom: `1px solid ${colors.surfaceContainer}`,
                marginBottom: "1.75rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: colors.primary, fontSize: "1.5rem", marginTop: "0.25rem", flexShrink: 0, fontVariationSettings: "'FILL' 1" }}
              >
                calendar_month
              </span>
              <div>
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.375rem", color: colors.primary, margin: 0 }}>
                  Book Your Free 15-Min Intro Call
                </h2>
                <p style={{ color: colors.secondary, fontSize: "0.9375rem", marginTop: "0.375rem" }}>
                  Pick a time that suits you — no commitment required. Angela will confirm by email.
                </p>
              </div>
            </div>

            <iframe
              src={CALENDAR_URL}
              style={{ border: 0, display: "block", borderRadius: "0.75rem" }}
              width="100%"
              height="600"
              frameBorder={0}
              title="Book a free 15-minute intro call with Angela"
            />

            <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
              {[
                { icon: "bolt", text: "Instant booking confirmation" },
                { icon: "payments", text: "Secure payment via PayPal or Revolut" },
                { icon: "event_available", text: "Reschedulable up to 24h in advance" },
                { icon: "verified_user", text: "100% confidential" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: colors.secondary }}>
                  <span className="material-symbols-outlined" style={{ color: colors.tertiary, fontSize: "1.125rem", flexShrink: 0 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: colors.onSurfaceVariant, textAlign: "center", lineHeight: 1.6 }}>
              Looking for follow-up sessions or have a specific question?{" "}
              <Link to="/contact" style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}>
                Contact Angela →
              </Link>
            </p>
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

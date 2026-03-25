import { useEffect } from "react";
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
  primaryContainer: "#8fa892",
  primaryFixed: "#cfe9d1",
  tertiaryContainer: "#c19c56",
  tertiary: "#775a19",
  outlineVariant: "#c3c8c0",
};

export default function ForTeens() {
  useEffect(() => {
    setPageMeta(
      "For Teens | More Than Points",
      "Supportive coaching for teens aged 16–19 who feel stressed, stuck, unmotivated, or unsure about what comes next after school in Ireland."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <div style={{ maxWidth: "52rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.375rem 1rem",
                borderRadius: "9999px",
                backgroundColor: colors.secondaryContainer,
                color: colors.onSecondaryContainer,
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              For Teens
            </span>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
                lineHeight: 1.1,
              }}
            >
              This is a space{" "}
              <span style={{ color: colors.primary, fontStyle: "italic" }}>just for you</span>.
            </h1>
            <p style={{ fontSize: "1.25rem", color: colors.secondary, lineHeight: 1.7, maxWidth: "42rem" }}>
              No grades. No judgement. No pressure to have it all figured out. Just an honest conversation about who you
              are, what you're good at, and what you actually want from life — not what everyone else thinks you should
              want.
            </p>
          </div>
        </section>

        {/* I Get It */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "center" }}>
              <div>
                <h2
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    color: colors.onSurface,
                    marginBottom: "2rem",
                    lineHeight: 1.2,
                  }}
                >
                  I understand what you're going through
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: colors.onSurfaceVariant, lineHeight: 1.7, fontSize: "1.0625rem" }}>
                  <p>
                    The Leaving Cert system was built a long time ago — and it wasn't designed for everyone. If you feel
                    like you're being forced into a box that doesn't quite fit, you're not wrong. You're just different
                    from what the system expects. And different is not a flaw.
                  </p>
                  <p>
                    Maybe you're stressed and overwhelmed. Maybe you couldn't care less about points but everyone around
                    you is obsessed with them. Maybe you have big ideas but no idea how to turn them into a plan. Maybe
                    you feel like you're letting people down.
                  </p>
                  <p>
                    Whatever is going on for you — I've heard it before, and I won't try to fix you. Because you're not
                    broken.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    icon: "lock",
                    title: "Everything is confidential",
                    desc: "What you say in our sessions stays between us. The only exception is if I'm worried about your safety — and even then, I'll always talk to you about it first.",
                  },
                  {
                    icon: "sentiment_satisfied",
                    title: "No right answers",
                    desc: "There's no test here. No correct career to choose. We figure out together what genuinely makes sense for you.",
                  },
                  {
                    icon: "devices",
                    title: "Online, on your terms",
                    desc: "Sessions are online via video call. No commute, no waiting room. Just you, me, and a proper conversation.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      backgroundColor: colors.surfaceContainerLowest,
                      padding: "2rem",
                      borderRadius: "1rem",
                      display: "flex",
                      gap: "1.25rem",
                      boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "9999px",
                        backgroundColor: colors.primaryFixed,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: colors.primary }}>{icon}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h3>
                      <p style={{ color: colors.secondary, lineHeight: 1.6, fontSize: "0.9375rem" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We'll Explore */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: colors.onSurface,
                  marginBottom: "1rem",
                }}
              >
                What we might talk about
              </h2>
              <p style={{ color: colors.secondary, maxWidth: "36rem", margin: "0 auto", fontSize: "1.125rem" }}>
                Coaching looks different for every person. Here are some of the things teens bring to our sessions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
              {[
                { icon: "psychology", title: "Figuring out what you actually want", desc: "Not what your school, your parents, or the CAO system wants for you — what genuinely interests you and where you want to go." },
                { icon: "self_improvement", title: "Managing stress and pressure", desc: "Practical strategies to handle exam anxiety, overwhelm, or the weight of everyone's expectations." },
                { icon: "alt_route", title: "Exploring non-traditional paths", desc: "Apprenticeships, creative industries, gap years, entrepreneurship — options that schools rarely put on the table." },
                { icon: "build", title: "Building self-confidence", desc: "Reconnecting with your strengths, especially if school has made you feel like you don't have any." },
                { icon: "map", title: "Planning your next steps", desc: "Whether that's CAO choices, a PLC course, or something entirely different — making a plan that actually makes sense for you." },
                { icon: "people", title: "Navigating relationships and pressure", desc: "Friends going different directions, family expectations, social pressure. We can talk about any of it." },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: colors.surfaceContainerLow,
                    padding: "2rem",
                    borderRadius: "1rem",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: colors.primary, marginBottom: "1rem", display: "block" }}>{icon}</span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.625rem" }}>{title}</h3>
                  <p style={{ color: colors.secondary, lineHeight: 1.7, fontSize: "0.9375rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section style={{ backgroundColor: colors.primary, padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: colors.primaryFixed, marginBottom: "2rem", display: "block" }}>format_quote</span>
            <p
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                color: colors.onPrimary,
                lineHeight: 1.4,
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              "I didn't realise I had options until Angela showed me what was actually out there. For the first time in
              years, I felt like I could breathe."
            </p>
            <p style={{ color: colors.primaryFixed, fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "0.9375rem" }}>— Past client, age 17</p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: colors.onSurface,
                marginBottom: "1rem",
              }}
            >
              Ready to have a different kind of conversation?
            </h2>
            <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
              You can book a session yourself, or ask a parent to help you get started. Either way, the first step is
              just saying hello.
            </p>
            <Link to="/book-session" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  padding: "1.25rem 2.5rem",
                  borderRadius: "9999px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Book a Session
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

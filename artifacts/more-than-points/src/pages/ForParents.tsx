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
  outlineVariant: "#c3c8c0",
};

export default function ForParents() {
  useEffect(() => {
    setPageMeta(
      "For Parents | More Than Points",
      "Support for parents of teenagers facing school pressure, uncertainty, and next-step decisions. Learn how coaching can help your family move forward."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <div style={{ maxWidth: "48rem" }}>
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
              For Parents
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
              You know your child is{" "}
              <span style={{ color: colors.primary, fontStyle: "italic" }}>capable</span>. So do I.
            </h1>
            <p style={{ fontSize: "1.25rem", color: colors.secondary, lineHeight: 1.7, maxWidth: "40rem" }}>
              Watching your teenager struggle with the pressures of the Leaving Cert — or disengage entirely — is one of
              the hardest things a parent can face. You want to help, but you don't always know how. That's where I come
              in.
            </p>
          </div>
        </section>

        {/* What You're Feeling */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "6rem 1.5rem" }}>
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
                You're not alone in this
              </h2>
              <p style={{ color: colors.secondary, maxWidth: "36rem", margin: "0 auto", fontSize: "1.125rem" }}>
                Many parents come to me carrying one or more of these concerns:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
              {[
                {
                  icon: "mood_bad",
                  title: "They've lost their spark",
                  desc: "The curious, motivated child you raised seems unreachable right now. School pressure has taken the joy out of learning.",
                },
                {
                  icon: "warning",
                  title: "Anxiety is taking over",
                  desc: "Exam stress, social pressure, and fear of the future are affecting their sleep, mood, and daily life.",
                },
                {
                  icon: "forum",
                  title: "Communication has broken down",
                  desc: "Conversations about school turn into arguments. You want to support them, but they won't let you in.",
                },
                {
                  icon: "help_outline",
                  title: "You don't know what they want",
                  desc: "They don't know what course to pick, what career suits them, or what direction to go. And that uncertainty is frightening for everyone.",
                },
                {
                  icon: "school",
                  title: "College feels like the only option",
                  desc: "Everyone around them is talking about the CAO, but you quietly wonder if there's a better fit out there — and feel guilty for thinking it.",
                },
                {
                  icon: "favorite",
                  title: "You just want them to be okay",
                  desc: "Points and courses feel secondary. Deep down, you want your teenager to feel confident, settled, and ready for what comes next.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: colors.primary, marginBottom: "1rem", display: "block" }}>{icon}</span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem" }}>{title}</h3>
                  <p style={{ color: colors.secondary, lineHeight: 1.7, fontSize: "0.9375rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Support Parents */}
        <section style={{ padding: "6rem 1.5rem" }}>
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
                  How I support you as a parent
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {[
                    {
                      icon: "hearing",
                      title: "I listen to your teen — not just you",
                      desc: "Sessions with your teenager are confidential and non-judgmental. This creates a space where they feel safe enough to be honest about what's really going on.",
                    },
                    {
                      icon: "handshake",
                      title: "I bridge the gap between you",
                      desc: "With parent sessions available alongside teen coaching, I help translate what your teenager is feeling into language that brings your family closer together.",
                    },
                    {
                      icon: "alt_route",
                      title: "I open up alternative pathways",
                      desc: "College is not the only route to a fulfilling life. I help your family explore apprenticeships, PLCs, gap years, and other options that the school system rarely highlights.",
                    },
                    {
                      icon: "psychology",
                      title: "I rebuild confidence — theirs and yours",
                      desc: "Coaching isn't just for your teen. Parents often feel lost too. I provide grounded guidance so you can show up for your child with clarity instead of anxiety.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{ display: "flex", gap: "1.5rem" }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "9999px",
                          backgroundColor: colors.surfaceContainerHigh,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ color: colors.primary }}>{icon}</span>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h4>
                        <p style={{ color: colors.secondary, lineHeight: 1.7 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    padding: "2.5rem",
                    borderRadius: "1.5rem",
                    boxShadow: "0 20px 40px rgba(77,100,81,0.15)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>format_quote</span>
                  <p style={{ fontSize: "1.25rem", fontStyle: "italic", lineHeight: 1.7, opacity: 0.95, marginBottom: "1.5rem" }}>
                    "I didn't realise how much of my anxiety I was projecting onto my son until Angela helped me see it.
                    She helped him — and she helped me."
                  </p>
                  <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.875rem", opacity: 0.8 }}>— Parent of a 17-year-old</p>
                </div>

                <div
                  style={{
                    backgroundColor: colors.primaryFixed,
                    padding: "2rem",
                    borderRadius: "1rem",
                  }}
                >
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: colors.primary, marginBottom: "1rem" }}>
                    What a session looks like
                  </h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none" }}>
                    {[
                      "Online via video call — accessible anywhere in Ireland",
                      "60-minute sessions with room to breathe",
                      "No homework, no pressure — just honest conversation",
                      "Practical takeaways after every session",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "1.125rem", marginTop: "0.125rem", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span style={{ color: colors.onSurfaceVariant, lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center" }}>
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
              Ready to take that first step?
            </h2>
            <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 3rem" }}>
              Whether you want to understand the process first, or you're ready to book straight away — I'm here.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link to="/book-session" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    padding: "1rem 2rem",
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
              <Link to="/how-it-works" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.surfaceContainerHigh,
                    color: colors.onSurface,
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHighest)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHigh)}
                >
                  See How It Works
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

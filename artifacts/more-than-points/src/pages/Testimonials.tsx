import { useEffect } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  primaryFixed: "#cfe9d1",
  tertiary: "#775a19",
  tertiaryFixed: "#ffdea5",
};

const testimonials = [
  {
    quote:
      "My son had completely shut down about school. He refused to talk to us about it. After a few sessions with Angela, he started opening up — not just to her, but to us too. I don't know what she said to him, but whatever it was, it worked.",
    author: "Parent of a 17-year-old",
    tag: "Parent",
    bg: colors.surfaceContainerLow,
  },
  {
    quote:
      "I thought I had to go to college or I'd basically failed at life. Angela helped me realise that's just not true. I'm doing a PLC course now and I actually enjoy getting up in the morning.",
    author: "Past client, age 18",
    tag: "Teen",
    bg: colors.primary,
    light: true,
  },
  {
    quote:
      "The pressure of the Leaving Cert was destroying our family. Angela gave us a place to breathe. She helped my daughter see her own strengths — and helped me step back and trust the process.",
    author: "Parent of a 16-year-old",
    tag: "Parent",
    bg: colors.surfaceContainerLow,
  },
  {
    quote:
      "I didn't realise I had options until Angela showed me what was actually out there. For the first time in years, I felt like I could breathe. I'm now doing an apprenticeship I love.",
    author: "Past client, age 17",
    tag: "Teen",
    bg: colors.secondaryContainer,
  },
  {
    quote:
      "Angela doesn't just tell you what to do. She helps you figure out what you actually want — which is something school never taught me. I feel like myself again.",
    author: "Past client, age 19",
    tag: "Teen",
    bg: colors.surfaceContainerLowest,
  },
  {
    quote:
      "As a parent, you feel so helpless watching your child struggle. Angela gave me the tools to support my daughter without adding to the pressure. That's priceless.",
    author: "Parent of an 18-year-old",
    tag: "Parent",
    bg: colors.primaryFixed,
  },
];

export default function Testimonials() {
  useEffect(() => {
    document.title = "Testimonials | More Than Points";
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem", textAlign: "center" }}>
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
            Stories of Change
          </span>
          <h1
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: colors.onSurface,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Families who found{" "}
            <span style={{ color: colors.primary, fontStyle: "italic" }}>a different way</span>
          </h1>
          <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
            These are real words from real people. No scripts, no statistics — just honest accounts of what coaching can
            look like when it fits.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
            {testimonials.map(({ quote, author, tag, bg, light }, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: bg,
                  padding: "2.5rem",
                  borderRadius: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "2rem",
                  boxShadow: light ? "0 20px 40px rgba(77,100,81,0.15)" : "0 4px 12px rgba(28,28,24,0.05)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        backgroundColor: light ? "rgba(255,255,255,0.2)" : colors.secondaryContainer,
                        color: light ? colors.onPrimary : colors.onSecondaryContainer,
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                    <div style={{ display: "flex", gap: "0.25rem" }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined"
                          style={{ color: colors.tertiary, fontSize: "1.125rem", fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p
                    style={{
                      fontStyle: "italic",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                      color: light ? "rgba(255,255,255,0.95)" : colors.onSurfaceVariant,
                    }}
                  >
                    "{quote}"
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: light ? "rgba(255,255,255,0.75)" : colors.secondary,
                  }}
                >
                  — {author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: colors.surfaceContainerLow,
            padding: "6rem 1.5rem",
          }}
        >
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
              Your story could be next
            </h2>
            <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "34rem", margin: "0 auto 2.5rem" }}>
              The first step is just a conversation. Let's find out what's possible for your family.
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

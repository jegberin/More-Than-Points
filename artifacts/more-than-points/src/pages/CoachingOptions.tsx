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
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  primaryContainer: "#8fa892",
  primaryFixed: "#cfe9d1",
  tertiaryContainer: "#c19c56",
  tertiaryFixed: "#ffdea5",
  tertiaryFixedDim: "#e9c176",
};

const options = [
  {
    icon: "psychology",
    title: "Teen Coaching",
    audience: "For teens",
    pricing: "3–6 sessions · €255–€510",
    desc: "One-to-one sessions for teenagers aged 16–19. A confidential space to talk through pressure, explore strengths, and figure out what comes next — on their terms.",
    who: "For teens who feel lost, overwhelmed, or simply unsure about the future.",
    cta: "Book Teen Coaching",
    to: "/book-session",
    featured: false,
  },
  {
    icon: "family_history",
    title: "Parent Support",
    audience: "For parents",
    pricing: "3–6 sessions · €255–€510",
    desc: "Coaching for parents who want to understand their teenager better and show up without adding pressure. Practical guidance on how to listen, communicate, and let go of the things you can't control.",
    who: "For parents who feel helpless or like they're always getting it wrong.",
    cta: "Book Parent Support",
    to: "/book-session",
    featured: false,
  },
  {
    icon: "map",
    title: "Next-Step Planning",
    audience: "For teens & parents",
    pricing: "4–8 sessions · €340–€680",
    desc: "A focused session (or series) dedicated to mapping out what comes after school. CAO choices, PLC options, apprenticeships, gap years — we look at everything and build a plan that actually makes sense.",
    who: "For teens and parents who need clarity on post-secondary options.",
    cta: "Book Next-Step Planning",
    to: "/book-session",
    featured: true,
  },
  {
    icon: "self_improvement",
    title: "Confidence & Motivation",
    audience: "For teens",
    pricing: "3–6 sessions · €255–€510",
    desc: "For young people who have lost their drive — or never felt they had it. This coaching strand focuses on rebuilding self-belief from the ground up, using real strengths, not empty encouragement.",
    who: "For teens who describe themselves as lazy, unmotivated, or not good enough.",
    cta: "Book Confidence Coaching",
    to: "/book-session",
    featured: false,
  },
  {
    icon: "sync_saved_locally",
    title: "Follow-Up Sessions",
    audience: "For past clients",
    pricing: "€85 per session",
    desc: "Already done some coaching and want to check back in? Follow-up sessions are available to revisit goals, update plans, and stay supported as life moves forward.",
    who: "For past clients who want to continue the journey.",
    cta: "Get in Touch",
    to: "/contact",
    featured: false,
  },
];

export default function CoachingOptions() {
  useEffect(() => {
    setPageMeta(
      "Coaching Options | More Than Points",
      "Explore tailored coaching options for Irish teens and parents. From Next-Step Planning to Confidence building, find the right educational support for your family."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", marginBottom: "2rem" }}>
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
            What's Available
          </span>
          <h1
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: colors.primary,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Coaching options built{" "}
            <span style={{ color: colors.secondary, fontStyle: "italic" }}>for your situation.</span>
          </h1>
          <p style={{ maxWidth: "40rem", margin: "0 auto", color: colors.onSurfaceVariant, fontSize: "1.125rem", lineHeight: 1.6 }}>
            No two families are the same. These five options cover the most common starting points — and if yours is
            different, just get in touch.
          </p>
        </section>

        {/* Intro call highlight box */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", marginBottom: "4rem" }}>
          <div
            style={{
              backgroundColor: `${colors.primary}0D`,
              borderRadius: "1rem",
              padding: "1.75rem 2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "2rem", flexShrink: 0 }}>call</span>
            <div style={{ flex: 1, minWidth: "16rem" }}>
              <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primary, fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                Not sure where to start? Try a free 15-minute introductory call.
              </p>
              <p style={{ color: colors.onSurfaceVariant, fontSize: "0.9375rem" }}>
                A quick introductory call with no commitment and no pressure — we figure out together what kind of support makes the most sense for your family.
              </p>
            </div>
            <Link to="/book-session" style={{ textDecoration: "none", flexShrink: 0 }}>
              <button
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "0.9375rem",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Book Free Intro Call
              </button>
            </Link>
          </div>
        </section>

        {/* Options Grid */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", marginBottom: "5rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
            {options.map(({ icon, title, audience, pricing, desc, who, cta, to, featured }) => (
              <div
                key={title}
                style={{
                  backgroundColor: featured ? colors.onSurface : colors.surfaceContainerLow,
                  color: featured ? colors.surfaceContainerLowest : colors.onSurface,
                  padding: "2.5rem",
                  borderRadius: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: featured ? "0 25px 50px rgba(28,28,24,0.18)" : "none",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {featured && (
                  <div style={{ position: "absolute", top: 0, right: 0, padding: "1rem" }}>
                    <span
                      style={{
                        backgroundColor: colors.tertiary,
                        color: colors.onTertiary,
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: featured ? `${colors.tertiary}33` : `${colors.primaryContainer}33`,
                      color: featured ? colors.tertiaryFixedDim : colors.primary,
                      borderRadius: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: featured ? colors.tertiaryFixedDim : colors.secondary,
                      marginBottom: "0.5rem",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {audience}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
                      {title}
                    </h2>
                    {pricing && (
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.625rem",
                          borderRadius: "9999px",
                          backgroundColor: featured ? `${colors.tertiary}33` : `${colors.primary}18`,
                          color: featured ? colors.tertiaryFixedDim : colors.primary,
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {pricing}
                      </span>
                    )}
                  </div>
                  <p style={{ color: featured ? `${colors.surfaceContainerLowest}B3` : colors.onSurfaceVariant, marginBottom: "1.5rem", lineHeight: 1.7 }}>
                    {desc}
                  </p>
                  <div
                    style={{
                      backgroundColor: featured ? "rgba(255,255,255,0.07)" : colors.surfaceContainer,
                      padding: "0.875rem 1rem",
                      borderRadius: "0.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <p style={{ fontSize: "0.8125rem", color: featured ? `${colors.surfaceContainerLowest}80` : colors.secondary, fontStyle: "italic", lineHeight: 1.5 }}>
                      {who}
                    </p>
                  </div>
                </div>
                <Link to={to} style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: featured ? colors.tertiary : colors.primary,
                      color: colors.onPrimary,
                      padding: "1rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "1rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.92")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Every session includes — full-width banner */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", marginBottom: "8rem" }}>
          <div
            style={{
              backgroundColor: colors.surfaceContainerLow,
              borderRadius: "1.5rem",
              padding: "3rem 2rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: colors.secondary, marginBottom: "2rem" }}>
              Every session includes:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1.5rem" }}>
              {[
                { icon: "visibility", label: "Clarity" },
                { icon: "verified_user", label: "Confidence" },
                { icon: "north_east", label: "Direction" },
                { icon: "step_into", label: "Next Steps" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: colors.primary }}>check_circle</span>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, color: colors.primary }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure Which Section */}
        <section style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: `${colors.primary}0D`,
              borderRadius: "3rem",
              padding: "clamp(3rem, 8vw, 5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              alignItems: "center",
            }}
            className="md:flex-row"
          >
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: colors.primary, marginBottom: "1.5rem" }}>
                Not sure which option fits?
              </h2>
              <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                That's completely normal — most families aren't sure where to start. A quick introductory call can help
                us figure out what kind of support makes the most sense for your teenager right now. There's no
                commitment, and no pressure.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.onSecondary,
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Get in Touch
                    <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>call</span>
                  </button>
                </Link>
                <Link to="/for-parents" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: colors.surfaceContainerHigh,
                      color: colors.onSurface,
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHighest)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHigh)}
                  >
                    Info for Parents
                  </button>
                </Link>
                <Link to="/for-teens" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: colors.surfaceContainerHigh,
                      color: colors.onSurface,
                      padding: "1rem 2rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHighest)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHigh)}
                  >
                    Info for Teens
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ flex: 1, width: "100%", aspectRatio: "16/9", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 25px 50px rgba(28,28,24,0.1)" }}>
              <img
                alt="Serene landscape showing a path through Irish hills at sunset"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZvQpvSrzCa2txIX5Vkzod9Lbmey1po8hgTW5hUAcvTHIYrst1-vvwir46hFjnNWF_sJkQr8hMYBSCe2DgcgLnaST2s55Q0Xmq-b38lDpZUqVg6DxPgt92IYvC2qcBTrPj-6KsXYXmWIgy_1-QGWMKOc6BIKHHd9hPeV6oqYgZFJfeHykYFGWrUdVnEptbuC3ns8f9dGfTfN6yN4560KsUFNcCT8wQv6F16c-FnI-ccz7pIjdZIZWulx-A1tjt4a6JwIyfbdJSXjg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

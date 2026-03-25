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
  secondaryFixed: "#d8e3fa",
  secondaryFixedDim: "#bcc7dd",
  primaryContainer: "#8fa892",
  primaryFixed: "#cfe9d1",
  tertiary: "#775a19",
  tertiaryContainer: "#c19c56",
  tertiaryFixed: "#ffdea5",
  onTertiaryFixed: "#261900",
  onTertiaryContainer: "#4a3400",
  error: "#ba1a1a",
  outline: "#737972",
  outlineVariant: "#c3c8c0",
};

const steps = [
  {
    num: "01",
    icon: "hearing",
    title: "Getting to Know You",
    desc: "The first session is about listening. We explore what's going on right now — the pressures, the worries, the things that aren't being said at home or in school. There's no agenda. Just space to speak honestly.",
    tagline: "No agenda. Just a real conversation.",
    bg: colors.surfaceContainerLow,
    textColor: colors.onSurface,
    numColor: colors.primaryContainer,
    tagColor: colors.primary,
    tagBg: colors.primaryFixed,
  },
  {
    num: "02",
    icon: "search",
    title: "Uncovering Strengths",
    desc: "We move beneath the surface to identify what the young person is genuinely good at — skills and qualities that exam grades don't reflect. This is where self-awareness begins to shift.",
    tagline: "Beneath the surface, where real strengths live.",
    bg: colors.secondary,
    textColor: "#ffffff",
    numColor: colors.secondaryFixedDim,
    tagColor: colors.secondaryFixed,
    tagBg: `${colors.secondaryFixed}33`,
  },
  {
    num: "03",
    icon: "explore",
    title: "Exploring Pathways",
    desc: "College, apprenticeships, PLCs, gap years, creative industries, entrepreneurship — we map out real options without the pressure of having to choose right now.",
    tagline: "Real options, no pressure to choose yet.",
    bg: colors.tertiaryContainer,
    textColor: colors.onTertiaryContainer,
    numColor: colors.tertiary,
    tagColor: colors.onTertiaryContainer,
    tagBg: `${colors.tertiary}1A`,
  },
  {
    num: "04",
    icon: "self_improvement",
    title: "Rebuilding Confidence",
    desc: "For many teens, the system has quietly eroded their belief in themselves. We work to undo that — not with empty affirmations, but by reconnecting them with evidence of who they genuinely are and what they're capable of.",
    tagline: "Real evidence. Real belief.",
    bg: colors.surfaceContainerHighest,
    textColor: colors.onSurface,
    numColor: colors.primary,
    tagColor: colors.primary,
    tagBg: colors.surfaceContainer,
  },
  {
    num: "05",
    icon: "task_alt",
    title: "Making a Plan",
    desc: "Coaching ends with clarity, not just conversation. Together we build a practical, realistic plan for what comes next — whether that's CAO choices, a PLC application, or a completely different direction altogether. Follow-up sessions are available to stay on track as life unfolds.",
    tagline: "A real plan. Real steps.",
    bg: colors.primary,
    textColor: colors.onPrimary,
    numColor: colors.primaryFixed,
    tagColor: colors.primaryFixed,
    tagBg: `${colors.primaryFixed}33`,
  },
];

export default function HowItWorks() {
  useEffect(() => {
    setPageMeta(
      "How Our Teen Coaching Process Works | More Than Points",
      "Discover our 5-step coaching framework for Irish teenagers. We move beyond standard school guidance to build confidence, uncover strengths, and plan real pathways."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "6rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem 5rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
              borderRadius: "9999px",
              backgroundColor: colors.secondaryContainer,
              color: colors.onSecondaryContainer,
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            The Process
          </div>
          <h1
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: colors.onSurface,
              letterSpacing: "-0.025em",
              marginBottom: "2rem",
              maxWidth: "48rem",
              margin: "0 auto 2rem",
              lineHeight: 1.1,
            }}
          >
            How Our Coaching Process Works: A Grounded Path to Clarity
          </h1>
          <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.6 }}>
            Every young person's journey is different. This process isn't a fixed script — it's a framework that
            flexes around the person. Here's how a typical coaching journey unfolds.
          </p>
        </section>

        {/* 5-Step Process — one <li> per step */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <ol className="process-timeline" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map(({ num, icon, title, desc, tagline, bg, textColor, numColor, tagColor, tagBg }) => (
              <li key={num}>
                <div
                  style={{
                    backgroundColor: bg,
                    color: textColor,
                    padding: "clamp(2rem, 5vw, 3rem)",
                    borderRadius: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <span
                      style={{
                        fontSize: "2.5rem",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        color: numColor,
                        opacity: 0.4,
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </span>
                    <span className="material-symbols-outlined" style={{ fontSize: "2rem", opacity: 0.6 }}>{icon}</span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {title}
                  </h2>
                  <p style={{ lineHeight: 1.7, opacity: 0.9, maxWidth: "52rem", margin: 0 }}>{desc}</p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: tagBg,
                      padding: "0.5rem 1rem",
                      borderRadius: "9999px",
                      alignSelf: "flex-start",
                      marginTop: "0.5rem",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: tagColor, fontSize: "1rem" }}>check_circle</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: tagColor }}>{tagline}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Comparison Section */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
                How this differs from standard guidance
              </h2>
              <p style={{ color: colors.onSurfaceVariant, maxWidth: "40rem", margin: "0 auto" }}>
                The school guidance counsellor plays an important role — but coaching goes further.
              </p>
            </div>

            <div className="grid md:grid-cols-2" style={{ gap: "3rem", alignItems: "stretch" }}>
              <div
                style={{
                  backgroundColor: colors.surface,
                  padding: "2.5rem",
                  borderRadius: "1rem",
                  borderLeft: `4px solid ${colors.outlineVariant}4D`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                  <span className="material-symbols-outlined" style={{ color: colors.outline }}>school</span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.25rem", fontWeight: 700, color: colors.outline }}>
                    School Guidance Counsellor
                  </h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none", padding: 0 }}>
                  {[
                    { title: "CAO-Focused", desc: "Primary function is helping students navigate college applications and course choices." },
                    { title: "Points-Driven", desc: "Recommendations are often shaped by predicted grade outcomes." },
                    { title: "Time-Limited", desc: "Short sessions focused on immediate tasks within a school context." },
                  ].map(({ title, desc }) => (
                    <li key={title} style={{ display: "flex", gap: "1rem" }}>
                      <span className="material-symbols-outlined" style={{ color: colors.error, marginTop: "0.25rem" }}>close</span>
                      <div>
                        <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{title}</p>
                        <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "2.5rem",
                  borderRadius: "1rem",
                  boxShadow: "0 20px 40px rgba(77,100,81,0.05)",
                  borderLeft: `4px solid ${colors.primary}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, padding: "1rem" }}>
                  <span
                    style={{
                      backgroundColor: colors.tertiaryFixed,
                      color: colors.onTertiaryFixed,
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    More Than Points
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                  <span className="material-symbols-outlined" style={{ color: colors.primary }}>psychology</span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.25rem", fontWeight: 700, color: colors.primary }}>
                    Angela's Coaching Approach
                  </h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none", padding: 0 }}>
                  {[
                    { title: "Whole-Person Development", desc: "Focus on long-term fulfilment, emotional wellbeing, and genuine self-knowledge." },
                    { title: "Strengths-Led", desc: "Identifying unique qualities that points can't quantify or capture." },
                    { title: "Relational and Sustained", desc: "A proper coaching relationship with space to go deep, at a pace that works." },
                  ].map(({ title, desc }) => (
                    <li key={title} style={{ display: "flex", gap: "1rem" }}>
                      <span className="material-symbols-outlined" style={{ color: colors.primary, marginTop: "0.25rem" }}>check_circle</span>
                      <div>
                        <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{title}</p>
                        <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: "56rem", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: `${colors.secondaryContainer}4D`,
              borderRadius: "1.5rem",
              padding: "clamp(3rem, 8vw, 5rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: "-2.5rem", right: "-2.5rem", width: "10rem", height: "10rem", backgroundColor: `${colors.primary}1A`, borderRadius: "9999px", filter: "blur(3rem)" }} />
            <div style={{ position: "absolute", bottom: "-2.5rem", left: "-2.5rem", width: "10rem", height: "10rem", backgroundColor: `${colors.tertiary}1A`, borderRadius: "9999px", filter: "blur(3rem)" }} />
            <h2
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: colors.onSecondaryContainer,
                position: "relative",
              }}
            >
              Ready to take the first step?
            </h2>
            <p style={{ color: `${colors.onSecondaryContainer}CC`, fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "32rem", margin: "0 auto 2.5rem", position: "relative" }}>
              A single session can shift a lot. Let's find out what's possible for your teenager.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", position: "relative" }}>
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
                  }}
                >
                  Book a Session
                </button>
              </Link>
              <Link to="/coaching-options" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    color: colors.primary,
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  View Coaching Options
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

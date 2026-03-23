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

export default function HowItWorks() {
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
            The Journey
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
            A structured path to{" "}
            <span style={{ color: colors.primary, fontStyle: "italic" }}>inner clarity.</span>
          </h1>
          <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
            We move beyond the metrics of exams to discover the character and calling of the student. Our framework is
            designed to ground the journey in reality and empathy.
          </p>
        </section>

        {/* 5-Step Framework */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "1.5rem" }}>
            {/* Step 1 */}
            <div
              className="md:col-span-7"
              style={{
                backgroundColor: colors.surfaceContainerLow,
                padding: "clamp(2rem, 5vw, 3rem)",
                borderRadius: "0.75rem",
                position: "relative",
              }}
            >
              <span style={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primaryContainer, opacity: 0.4, marginBottom: "1rem", display: "block" }}>01</span>
              <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>Assessment</h3>
              <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.6, maxWidth: "28rem" }}>
                We begin with a deep dive into interests, values, and personality styles. It's not about what they can do,
                but who they are becoming.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  className="material-symbols-outlined"
                  style={{ color: colors.primary, backgroundColor: colors.primaryFixed, padding: "0.75rem", borderRadius: "9999px" }}
                >
                  assignment
                </span>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: colors.primary }}>Self-discovery audit</span>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="md:col-span-5"
              style={{
                backgroundColor: colors.secondary,
                color: "#ffffff",
                padding: "clamp(2rem, 5vw, 3rem)",
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.secondaryFixedDim, opacity: 0.4, marginBottom: "1rem", display: "block" }}>02</span>
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>Listening</h3>
                <p style={{ color: colors.secondaryFixed, lineHeight: 1.6 }}>
                  Creating a safe space for the unspoken. We listen to the anxieties and the aspirations that don't fit
                  into a CV.
                </p>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem" }}>hearing</span>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="md:col-span-4"
              style={{
                backgroundColor: colors.tertiaryContainer,
                color: colors.onTertiaryContainer,
                padding: "clamp(2rem, 5vw, 3rem)",
                borderRadius: "0.75rem",
              }}
            >
              <span style={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.tertiary, opacity: 0.4, marginBottom: "1rem", display: "block" }}>03</span>
              <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>Exploration</h3>
              <p style={{ lineHeight: 1.6, marginBottom: "2rem" }}>
                Mapping potential futures without the pressure of finality. Identifying pathways that resonate with the soul.
              </p>
              <div
                style={{
                  height: "8rem",
                  borderRadius: "0.5rem",
                  backgroundColor: `${colors.tertiary}1A`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px dashed ${colors.tertiary}33`,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem" }}>explore</span>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className="md:col-span-8"
              style={{
                backgroundColor: colors.surfaceContainerHighest,
                padding: "clamp(2rem, 5vw, 3rem)",
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primary, opacity: 0.4, marginBottom: "1rem", display: "block" }}>04</span>
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>Confidence Rebuilding</h3>
                <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
                  Dismantling the "points-only" mindset. We reinforce the student's inherent value regardless of academic
                  outcome, building resilience for the road ahead.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 8px rgba(28,28,24,0.06)",
                  width: "100%",
                  maxWidth: "20rem",
                }}
              >
                {[75, 50, 100].map((w, i) => (
                  <div key={i} style={{ height: "0.5rem", backgroundColor: colors.surfaceContainer, borderRadius: "9999px", overflow: "hidden", marginBottom: i < 2 ? "1rem" : 0 }}>
                    <div style={{ height: "100%", backgroundColor: colors.primary, width: `${w}%`, borderRadius: "9999px" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Step 5 */}
            <div
              className="md:col-span-12"
              style={{
                backgroundColor: colors.primary,
                padding: "clamp(2rem, 6vw, 4rem)",
                borderRadius: "0.75rem",
                color: colors.onPrimary,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
                <div style={{ maxWidth: "36rem" }}>
                  <span style={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primaryFixed, opacity: 0.4, marginBottom: "1rem", display: "block" }}>05</span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "2.25rem", fontWeight: 700, marginBottom: "1rem" }}>Sustained Follow-up</h3>
                  <p style={{ color: colors.primaryFixed, fontSize: "1.125rem", lineHeight: 1.6 }}>
                    Coaching doesn't end when the session does. We provide ongoing touchpoints to ensure the student feels
                    supported as they take their first steps into their new horizon.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      backgroundColor: colors.primaryContainer,
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#273d2c",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "2.5rem" }}>sync_saved_locally</span>
                  </div>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700 }}>Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
                The More Than Points Difference
              </h2>
              <p style={{ color: colors.onSurfaceVariant, maxWidth: "40rem", margin: "0 auto" }}>
                While traditional guidance focuses on the destination, we focus on the traveler.
              </p>
            </div>

            <div className="grid md:grid-cols-2" style={{ gap: "3rem", alignItems: "stretch" }}>
              {/* Traditional */}
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
                  <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.25rem", fontWeight: 700, color: colors.outline }}>
                    Guidance Counsellor
                  </h4>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none" }}>
                  {[
                    { title: "CAO-Centric", desc: "Primary focus is on ticking boxes for course applications." },
                    { title: "Metric Driven", desc: "Recommendations based strictly on predicted points." },
                    { title: "Transactional", desc: "Short sessions focused on immediate administrative needs." },
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

              {/* Angela's Process */}
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
                    Our Way
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                  <span className="material-symbols-outlined" style={{ color: colors.primary }}>psychology</span>
                  <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.25rem", fontWeight: 700, color: colors.primary }}>
                    Angela's Personal Process
                  </h4>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", listStyle: "none" }}>
                  {[
                    { title: "Holistic Development", desc: "Focus on long-term fulfilment and emotional well-being." },
                    { title: "Character Discovery", desc: "Identifying unique strengths that points can't measure." },
                    { title: "Relational & Practical", desc: "Deep coaching relationship paired with actionable steps." },
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
              Ready to start the conversation?
            </h2>
            <p style={{ color: `${colors.onSecondaryContainer}CC`, fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "32rem", margin: "0 auto 2.5rem", position: "relative" }}>
              Every journey begins with a single, grounded step. Let's explore what's possible for your student's future.
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
                  Schedule a Consultation
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
                  View Options
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

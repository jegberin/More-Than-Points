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
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  primaryContainer: "#8fa892",
  primaryFixed: "#cfe9d1",
  tertiaryContainer: "#c19c56",
  tertiaryFixed: "#ffdea5",
  secondaryFixed: "#d8e3fa",
  outlineVariant: "#c3c8c0",
};

export default function About() {
  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "3rem", alignItems: "center" }}>
            <div style={{ gridColumn: "span 7" }}>
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
                Meet Angela
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
                A calm voice amid{" "}
                <span style={{ color: colors.primary, fontStyle: "italic" }}>Leaving Cert</span> pressure.
              </h1>
              <p style={{ fontSize: "1.25rem", color: colors.onSurfaceVariant, lineHeight: 1.7, maxWidth: "38rem", fontFamily: "Inter, sans-serif" }}>
                With over 25 years in adult learning and further education, Angela provides the steady hand parents and
                students need to navigate the high-stakes journey of the modern education system.
              </p>
            </div>

            <div style={{ gridColumn: "span 5", position: "relative" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderTopLeftRadius: "7.5rem",
                  borderBottomRightRadius: "7.5rem",
                  overflow: "hidden",
                  boxShadow: "0 32px 64px -12px rgba(28,28,24,0.08)",
                  backgroundColor: colors.surfaceContainerHighest,
                  position: "relative",
                }}
              >
                <img
                  alt="Angela, educational coach at More Than Points"
                  src={`${import.meta.env.BASE_URL}angela.png`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(77,100,81,0.2), transparent)" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", width: "8rem", height: "8rem", backgroundColor: colors.tertiaryContainer, borderRadius: "9999px", opacity: 0.2, filter: "blur(2rem)" }} />
            </div>
          </div>
        </section>

        {/* Story Bento Grid */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
            {/* Large Story Card */}
            <div
              className="md:col-span-2"
              style={{
                backgroundColor: colors.surfaceContainerLow,
                padding: "2.5rem",
                borderRadius: "0.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="material-symbols-outlined" style={{ color: colors.primary, fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>auto_stories</span>
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                  Twenty-Five Years of Guidance
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: colors.onSurfaceVariant, lineHeight: 1.7, fontSize: "1.125rem" }}>
                  <p>
                    Angela's career has been dedicated to the evolution of the learner. From the halls of further
                    education to the intimate spaces of one-on-one coaching, she has witnessed the shifting landscape of
                    Irish education.
                  </p>
                  <p>
                    She understands that "More Than Points" isn't just a name—it's a philosophy. It's about recognising
                    the human being behind the exam number and ensuring that the path to a career is paved with
                    resilience, not just results.
                  </p>
                </div>
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, width: "16rem", height: "16rem", backgroundColor: `${colors.primary}0D`, borderRadius: "9999px", transform: "translate(50%, -50%)" }} />
            </div>

            {/* Expertise Card */}
            <div
              style={{
                backgroundColor: colors.primary,
                color: colors.onPrimary,
                padding: "2.5rem",
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className="material-symbols-outlined" style={{ color: `${colors.onPrimary}99`, fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>workspace_premium</span>
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Educational Authority
                </h3>
                <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                  Expertise rooted in decades of navigating the complexities of adult learning and vocational training
                  pathways.
                </p>
              </div>
              <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: `1px solid ${colors.onPrimary}1A` }}>
                <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Focus Areas
                </p>
                <ul style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem", opacity: 0.8, listStyle: "none" }}>
                  <li>• Leaving Cert Strategy</li>
                  <li>• Adult Education Pathways</li>
                  <li>• Parental Support Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "3rem", alignItems: "center", padding: "5rem 0" }}>
            <div className="md:col-span-5 order-2 md:order-1">
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    aspectRatio: "1",
                    backgroundColor: colors.surfaceContainerHighest,
                    borderRadius: "9999px",
                    overflow: "hidden",
                    boxShadow: "0 32px 64px -12px rgba(28,28,24,0.08)",
                  }}
                >
                  <img
                    alt="A misty morning in the Irish countryside"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCY66McndCaV_qYCgsff1cM7c4RlqXq4dzZXafEGK-7eCcPXZgG9ypDFQ-OaKHFyaVW2tiiCxYGJVuaUlp45MStgNdM9at2_2zB4_HaTDOGJadGrZjF82rywvG-ZJ2JKA-Oe4RD5mUL58gbI5KGYwGi5URFeG-zDiiqpThQQ7L-JINe_30aLB7NJ2R-XiCotTXHe7Rgbsa1zDOZAxOGyORG2miEg0bYSfrHXgtRtd29uNzPiHI6De8Zcya___O68ab0PLMvwFULJw"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%) sepia(10%)" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-1rem",
                    right: "-1rem",
                    backgroundColor: colors.tertiary,
                    padding: "1.5rem",
                    borderRadius: "9999px",
                    color: colors.onTertiary,
                    boxShadow: "0 32px 64px -12px rgba(28,28,24,0.08)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1.875rem" }}>psychology_alt</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: colors.secondary, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Grounded in the Reality of Growth.
              </h2>
              <p style={{ fontSize: "1.25rem", color: colors.onSurfaceVariant, lineHeight: 1.7, marginBottom: "2rem", fontStyle: "italic" }}>
                "The pressure of the points system often masks the potential of the person. My role is to peel back that
                pressure and rediscover the path that actually fits the student."
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: "spa", title: "The Calm Approach", desc: "Coaching that reduces anxiety and replaces it with actionable clarity." },
                  { icon: "groups", title: "Human Connection", desc: "A mentor who listens first and advises second, ensuring every session is bespoke." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: "flex", gap: "1rem" }}>
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        flexShrink: 0,
                        borderRadius: "9999px",
                        backgroundColor: colors.surfaceContainer,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ color: colors.primary }}>{icon}</span>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, marginBottom: "0.25rem" }}>{title}</h4>
                      <p style={{ color: colors.onSurfaceVariant }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "6rem 0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
                A Journey of Expertise
              </h2>
              <div style={{ width: "6rem", height: "0.25rem", backgroundColor: colors.tertiary, margin: "0 auto", borderRadius: "9999px" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "1rem", alignItems: "center" }}>
              {[
                {
                  tag: "The Foundation",
                  title: "Further Education",
                  desc: "Leading curriculum design for adult learners across Ireland.",
                  bg: colors.surfaceContainerLowest,
                  textColor: colors.onSurface,
                  tagColor: colors.tertiary,
                  descColor: colors.onSurfaceVariant,
                  radius: "2.5rem",
                  mt: 0,
                },
                {
                  tag: "The Expansion",
                  title: "Policy & Impact",
                  desc: "Influencing educational standards at a national level for over a decade.",
                  bg: colors.primary,
                  textColor: colors.onPrimary,
                  tagColor: colors.primaryFixed,
                  descColor: `${colors.onPrimary}CC`,
                  radius: "3rem",
                  mt: "3rem",
                },
                {
                  tag: "The Pivot",
                  title: "Coaching Practice",
                  desc: "Specialising in high-performance coaching for families in transition.",
                  bg: colors.surfaceContainerLowest,
                  textColor: colors.onSurface,
                  tagColor: colors.tertiary,
                  descColor: colors.onSurfaceVariant,
                  radius: "2.5rem",
                  mt: 0,
                },
                {
                  tag: "Today",
                  title: "More Than Points",
                  desc: "Dedicated support for the modern Leaving Cert journey.",
                  bg: colors.secondary,
                  textColor: colors.onSecondary,
                  tagColor: colors.secondaryFixed,
                  descColor: `${colors.onSecondary}CC`,
                  radius: "3.75rem",
                  mt: "2rem",
                },
              ].map(({ tag, title, desc, bg, textColor, tagColor, descColor, radius, mt }) => (
                <div
                  key={title}
                  style={{
                    padding: "2rem",
                    backgroundColor: bg,
                    color: textColor,
                    borderRadius: radius,
                    textAlign: "center",
                    boxShadow: "0 32px 64px -12px rgba(28,28,24,0.08)",
                    marginTop: mt,
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-0.5rem)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "Plus Jakarta Sans, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: tagColor, display: "block", marginBottom: "1rem" }}>
                    {tag}
                  </span>
                  <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.5rem" }}>{title}</h3>
                  <p style={{ fontSize: "0.875rem", color: descColor }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ maxWidth: "56rem", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: colors.surface,
              padding: "3rem",
              borderRadius: "1.5rem",
              border: `1px solid ${colors.outlineVariant}1A`,
              boxShadow: "0 32px 64px -12px rgba(28,28,24,0.05)",
            }}
          >
            <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Ready to find your calm?
            </h2>
            <p style={{ fontSize: "1.125rem", color: colors.onSurfaceVariant, marginBottom: "2.5rem", maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
              Whether you're a parent feeling the weight or a student looking for a clear direction, let's have a
              conversation about the path forward.
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
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(77,100,81,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  Book a Strategy Call
                </button>
              </Link>
              <Link to="/coaching-options" style={{ textDecoration: "none" }}>
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

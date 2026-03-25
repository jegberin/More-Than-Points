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

export default function Home() {
  useEffect(() => {
    setPageMeta(
      "Educational Coaching for Teens & Parents Ireland | More Than Points",
      "Expert educational coaching for teens (16-19) and parents in Ireland. Find alternative pathways, rebuild confidence, and navigate life beyond the Leaving Cert."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      {/* Hero Section */}
      <section style={{ position: "relative", paddingTop: "8rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div style={{ gridColumn: "span 7" }}>
              {/* Above-the-fold trust element */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
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
                  Teen &amp; Parent Coaching · Ireland
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    backgroundColor: `${colors.tertiary}18`,
                    color: colors.tertiary,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }}>verified</span>
                  Over 25 years in education
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  color: colors.onSurface,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "2rem",
                }}
              >
                <span className="visually-hidden">Teen Educational Coaching Ireland: </span>
                There is{" "}
                <span style={{ color: colors.primary, fontStyle: "italic" }}>life beyond the points</span>. Let's find it together.
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: colors.secondary,
                  lineHeight: 1.7,
                  maxWidth: "38rem",
                  marginBottom: "2.5rem",
                }}
              >
                Grounded coaching for teenagers aged 16–19 and the parents navigating this journey beside them. Whether
                your teen is struggling, disengaged, or simply unsure what comes next — there is a way through, and it
                doesn't have to look like everyone else's path.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
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
                      boxShadow: "0 32px 64px rgba(28,28,24,0.05)",
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
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHighest)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surfaceContainerHigh)}
                  >
                    See How It Works
                  </button>
                </Link>
              </div>
            </div>

            <div style={{ gridColumn: "span 5", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  boxShadow: "0 32px 64px rgba(28,28,24,0.08)",
                }}
              >
                <img
                  alt="Calm morning pathway through a misty forest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi3Z-c5kCbuqxIcRx0I7vDE8GCyaCaIsuwz6eJYaeQqM3bd6CClQXXMdPnxcZMvVjhcElXfNGntl6b2gJDE2tLwRZndgrP8bVa6g_GZ7BQ0cdTl6hrq3XSTgvxhGGpWYGeeWcyNA1o_rbx2w-Lr0BJf2n4G19LoYTJef-3uFLUCcMj_OXeZZI_5sckTazqKmWarzHS-PRP4yKvYTptWq6Dtraa9qaagAsVIfWHugNBLAXwB9FpGOLFvfLST-MUlJ2f8JaHkzrtILs"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Glass Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-3rem",
                  backgroundColor: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  padding: "2rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 32px 64px rgba(28,28,24,0.08)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  maxWidth: "18rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span className="material-symbols-outlined" style={{ color: colors.tertiary, fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                    Compassionate Support
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: colors.secondary, fontWeight: 500, fontStyle: "italic", lineHeight: 1.6 }}>
                  "A space where potential isn't measured in points, but in purpose."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help */}
      <section style={{ padding: "6rem 0", backgroundColor: colors.surfaceContainerLow }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
                color: colors.onSurface,
              }}
            >
              Who I work with
            </h2>
            <p style={{ color: colors.secondary, maxWidth: "36rem", margin: "0 auto", fontSize: "1.125rem" }}>
              Coaching built for the pivotal 16–19 years, when traditional education often feels most restrictive.
            </p>
          </div>

          {/* Two-column grid for teens and parents */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem", marginBottom: "1.5rem" }}>
            {/* Teens Card */}
            <div
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                padding: "2.5rem",
                borderRadius: "1rem",
                boxShadow: "0 32px 64px rgba(28,28,24,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: colors.primary, marginBottom: "1.5rem", display: "block" }}>psychology</span>
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Teenagers aged 16–19
                </h3>
                <p style={{ color: colors.secondary, lineHeight: 1.7, fontSize: "1.125rem" }}>
                  Coaching for teens who feel lost, overwhelmed, or like the system doesn't quite fit them. A
                  confidential space to explore who they are and what they actually want from life.
                </p>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: `1px solid ${colors.outlineVariant}30`,
                }}
              >
                <Link to="/for-teens" style={{ textDecoration: "none" }}>
                  <span style={{ fontSize: "0.875rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primary, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Read more for teens →
                  </span>
                </Link>
              </div>
            </div>

            {/* Parents Card */}
            <div
              style={{
                backgroundColor: colors.primary,
                color: colors.onPrimary,
                padding: "2.5rem",
                borderRadius: "1rem",
                boxShadow: "0 32px 64px rgba(28,28,24,0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>family_history</span>
                <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Parents &amp; Families
                </h3>
                <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                  Support for parents who want to help without adding to the pressure. I bridge the gap between what
                  your teen is feeling and what you need to understand.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <Link to="/for-parents" style={{ textDecoration: "none" }}>
                    <span style={{ fontSize: "0.875rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.primaryFixed, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Read more for parents →
                    </span>
                  </Link>
                </div>
              </div>
              <div style={{ position: "absolute", right: "-1rem", bottom: "-1rem", opacity: 0.1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: "6rem" }}>favorite</span>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div
            style={{
              backgroundColor: "#f1eee7",
              padding: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              borderLeft: `8px solid ${colors.primary}`,
              borderTopLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
              borderTopRightRadius: "0.75rem",
              borderBottomLeftRadius: "0.75rem",
            }}
          >
            <div>
              <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.5rem", fontWeight: 700, fontStyle: "italic", marginBottom: "1rem" }}>
                "My teen was drowning in points; now they're swimming in possibilities."
              </p>
              <p style={{ color: colors.onSurfaceVariant, fontWeight: 500 }}>— A relieved parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: "1rem", color: colors.onSurface }}>
            Not sure which path is right for your family?
          </h2>
          <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 2rem" }}>
            Explore the coaching options available and find the right fit — from a single clarity session to a full
            growth package. Together we look at{" "}
            <Link to="/coaching-options" style={{ color: colors.primary, textDecoration: "underline" }}>apprenticeships</Link>,{" "}
            <Link to="/coaching-options" style={{ color: colors.primary, textDecoration: "underline" }}>PLCs</Link>, and{" "}
            <Link to="/coaching-options" style={{ color: colors.primary, textDecoration: "underline" }}>gap years</Link> as real, valid paths.
          </p>
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
      </section>

      {/* What Makes This Different */}
      <section style={{ padding: "6rem 0", overflow: "hidden", backgroundColor: colors.surfaceContainerLow }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ height: "12rem", borderRadius: "0.75rem", backgroundColor: colors.surfaceContainer, overflow: "hidden" }}>
                    <img
                      alt="Zen stones stacked in balance"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyus8TFGxiN5oGyCyFvopsom-BnlnKohutxtBVkAFEBgFiG6SW7KRw07E0ANknnbUJip6CBcK5UanlvP-d4MruaY_lSJ40YmKw4fVcMeMsVuYj3qvSArAJjUxPkHNwcO2nnOmah5DPXYatSBrb4VARR6_9ltSWHB8QK9SfpZ4hZfzbMVSHnXapqXW9em9hojLVfcWQan_k_wB2Kx0wTCyIZQtCeZpbtlGKKAjjzCNzAlZkxh9A7RN4viOCshwkaRJvrD_vdK5lfVo"
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) opacity(0.7)" }}
                    />
                  </div>
                  <div
                    style={{
                      height: "16rem",
                      borderRadius: "0.75rem",
                      backgroundColor: colors.primaryContainer,
                      padding: "1.5rem",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <span style={{ color: "#fff", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "2.5rem" }}>25+</span>
                  </div>
                </div>
                <div style={{ paddingTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div
                    style={{
                      height: "16rem",
                      borderRadius: "0.75rem",
                      backgroundColor: colors.secondaryContainer,
                      padding: "1.5rem",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: colors.primary }}>verified</span>
                    <p style={{ marginTop: "1rem", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.onSecondaryContainer }}>
                      Years of Educational Experience
                    </p>
                  </div>
                  <div style={{ height: "12rem", borderRadius: "0.75rem", backgroundColor: colors.surfaceContainer, overflow: "hidden" }}>
                    <img
                      alt="Open book on table"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZLa8Fz7ASR4saqkq10piA9yAFPsD1R0p5SC_xnWUwQyvGOtmrQYLB1MZpftHBu3G5r7R930Nws8bh3ihHxMSozR49emXBUsbsMSyzX_fZB5EpBp8viltEFHfNahCavrVZnK-0W6bjqSctn2KBiEX7zeVDVqaEovfkNAi_fviHTHb2xlqJvca27nSvJnsmWc1NFTyp7wtu8mu0NlmQli7IMVAtUsLxT-ESAErJg_Sf11woZwV6BGUjrh-BJjbWEbGTR2aHKH0Rrz4"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  marginBottom: "2rem",
                }}
              >
                What makes this different
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {[
                  { icon: "history_edu", title: "Over 25 years in education", desc: "With deep roots in further education and adult learning, I understand exactly where the Irish education system falls short for so many young people." },
                  { icon: "alt_route", title: "Alternatives, not just CAO", desc: "College is one option — not the only one. Together we explore apprenticeships, PLCs, gap years, portfolio careers, and the paths schools rarely mention." },
                  { icon: "favorite", title: "Grounded, non-judgmental support", desc: "No pressure, no performance. Just a calm, steady presence helping your family find clarity in the midst of one of the most stressful periods of life." },
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
                      <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h3>
                      <p style={{ color: colors.secondary, lineHeight: 1.7 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: colors.primary,
              color: colors.onPrimary,
              padding: "clamp(3rem, 8vw, 5rem)",
              borderRadius: "3rem",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, pointerEvents: "none" }}>
              <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50%", height: "100%", backgroundColor: "#ffffff", borderRadius: "50%", filter: "blur(100px)" }} />
              <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50%", height: "100%", backgroundColor: colors.tertiaryContainer, borderRadius: "50%", filter: "blur(100px)" }} />
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.025em",
                }}
              >
                Ready to find a way through?
              </h2>
              <p style={{ fontSize: "1.25rem", opacity: 0.9, marginBottom: "3rem", maxWidth: "32rem", margin: "0 auto 3rem" }}>
                The first step is just a conversation. Let's find out what's possible for your teenager — and your family.
              </p>
              <Link to="/book-session" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.primary,
                    padding: "1.25rem 2.5rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 32px 64px rgba(28,28,24,0.05)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.surface)}
                >
                  Book a Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

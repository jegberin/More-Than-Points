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
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  primaryContainer: "#8fa892",
  tertiaryContainer: "#c19c56",
  tertiaryFixed: "#ffdea5",
  tertiaryFixedDim: "#e9c176",
  onTertiaryFixedDim: "#e9c176",
};

export default function CoachingOptions() {
  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", marginBottom: "5rem" }}>
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
            Tailored Coaching for <br />
            <span style={{ color: colors.secondary, fontStyle: "italic" }}>Every Journey.</span>
          </h1>
          <p style={{ maxWidth: "36rem", margin: "0 auto", color: colors.onSurfaceVariant, fontSize: "1.125rem", lineHeight: 1.6 }}>
            Whether you need a quick clarity check or a deeper transformation, our grounded approach provides the space
            to grow.
          </p>
        </section>

        {/* Pricing Cards */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", marginBottom: "8rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem", alignItems: "stretch" }}>
            {/* Single Session */}
            <div
              style={{
                backgroundColor: colors.surfaceContainerLow,
                padding: "clamp(2.5rem, 5vw, 3.5rem)",
                borderRadius: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: `${colors.primaryContainer}33`,
                    color: colors.primary,
                    borderRadius: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span className="material-symbols-outlined">energy_savings_leaf</span>
                </div>
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Single Clarity Session
                </h2>
                <p style={{ color: colors.onSurfaceVariant, marginBottom: "2rem", fontSize: "1.125rem" }}>
                  Ideal for tackling a specific challenge or gaining immediate perspective.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "2.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, color: colors.primary, fontFamily: "Plus Jakarta Sans, sans-serif" }}>€85</span>
                  <span style={{ color: colors.onSurfaceVariant, fontSize: "0.875rem", fontWeight: 500 }}>/ 60-minute session</span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: colors.secondary, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
                    What's included
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem", listStyle: "none" }}>
                    {[
                      "Immediate clarity on one core issue",
                      "Personalised confidence audit",
                      "Actionable next steps report",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span className="material-symbols-outlined" style={{ color: colors.tertiary }}>check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <Link to="/book-session" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: colors.primary,
                      color: colors.onPrimary,
                      padding: "1rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.92")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Growth Journey Package */}
            <div
              style={{
                backgroundColor: colors.onSurface,
                color: colors.surfaceContainerLowest,
                padding: "clamp(2.5rem, 5vw, 3.5rem)",
                borderRadius: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(28,28,24,0.18)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ position: "absolute", top: "-2.5rem", right: "-2.5rem", width: "10rem", height: "10rem", backgroundColor: `${colors.tertiary}1A`, borderRadius: "9999px", filter: "blur(3rem)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: `${colors.tertiary}33`,
                      color: colors.tertiaryFixedDim,
                      borderRadius: "0.75rem",
                    }}
                  >
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
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
                    Most Transformative
                  </span>
                </div>
                <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Growth Journey Package
                </h2>
                <p style={{ color: `${colors.surfaceContainerLowest}B3`, marginBottom: "2rem", fontSize: "1.125rem" }}>
                  Sustained support to build lasting habits and navigating long-term transitions.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "2.5rem" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, color: colors.tertiaryFixedDim, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    4–6 Sessions
                  </span>
                  <span style={{ color: `${colors.surfaceContainerLowest}80`, fontSize: "0.875rem", fontWeight: 500 }}>Custom tailored schedule</span>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: colors.tertiaryFixedDim, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
                    The Transformation
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem", listStyle: "none" }}>
                    {[
                      { icon: "explore", text: "Clear direction & long-term vision" },
                      { icon: "shield_with_heart", text: "Deeply rooted self-confidence" },
                      { icon: "insights", text: "Strategic next steps for every phase" },
                      { icon: "support", text: "Unlimited email/messaging support" },
                    ].map(({ icon, text }) => (
                      <li key={text} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span className="material-symbols-outlined" style={{ color: colors.tertiaryFixedDim }}>{icon}</span>
                        <span style={{ color: colors.surfaceContainerLowest }}>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: "3rem", position: "relative", zIndex: 1 }}>
                <Link to="/book-session" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: colors.tertiary,
                      color: colors.onTertiary,
                      padding: "1rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.tertiaryContainer)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.tertiary)}
                  >
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center", marginBottom: "10rem" }}>
          <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1.875rem", fontWeight: 700, color: colors.secondary, marginBottom: "3rem" }}>
            The More Than Points Promise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1rem" }}>
            {[
              { icon: "visibility", label: "Clarity", bg: colors.surfaceContainer },
              { icon: "verified_user", label: "Confidence", bg: colors.surfaceContainerHigh },
              { icon: "north_east", label: "Direction", bg: colors.surfaceContainer },
              { icon: "step_into", label: "Next Steps", bg: colors.surfaceContainerHigh },
            ].map(({ icon, label, bg }) => (
              <div
                key={label}
                style={{
                  backgroundColor: bg,
                  padding: "2rem",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: colors.primary, marginBottom: "1rem" }}>{icon}</span>
                <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, color: colors.primary }}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
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
              <h4 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: colors.primary, marginBottom: "1.5rem" }}>
                Not sure which path to take?
              </h4>
              <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Coaching is a personal journey. If you're undecided between a single session and a package, let's have a
                15-minute exploratory chat to see what fits your current needs best.
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
                    Schedule Intro Call
                    <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>call</span>
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

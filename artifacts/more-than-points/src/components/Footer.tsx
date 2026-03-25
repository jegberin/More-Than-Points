import { Link } from "wouter";

const logo = `${import.meta.env.BASE_URL}logo-morethanpoints.png`;

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Coaching Options", to: "/coaching-options" },
  { label: "For Parents", to: "/for-parents" },
  { label: "For Teens", to: "/for-teens" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
  { label: "Book a Session", to: "/book-session" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];

const linkStyle: React.CSSProperties = {
  color: "#545f72",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.8125rem",
  textDecoration: "none",
  transition: "color 0.2s",
};

const colOneLinks = quickLinks.slice(0, 3);
const colTwoLinks = quickLinks.slice(3, 6);
const colThreeLinks = quickLinks.slice(6, 9);

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f1eee7",
        width: "100%",
        padding: "3rem 1.5rem 2rem",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: "3rem",
          maxWidth: "80rem",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Brand / Logo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="More Than Points"
              style={{ height: "66px", width: "auto" }}
            />
          </Link>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", lineHeight: "1.6", color: "#545f72", maxWidth: "18rem" }}>
            © 2026 More Than Points. All rights reserved.<br />
            Grounded Coaching for the Modern Journey.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#8a8a8a", marginTop: "0.25rem" }}>
            Website design by{" "}
            <a
              href="https://digital.crettyard.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8a8a8a",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4d6451")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8a8a")}
            >
              digital.crettyard.com
            </a>
          </p>
        </div>

        {/* Quick Links — 3 columns */}
        <div>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#4d6451",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "0.5rem 2.5rem", justifyContent: "start" }}>
            {[colOneLinks, colTwoLinks, colThreeLinks].map((col, ci) => (
              <ul key={ci} style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {col.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      style={linkStyle}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4d6451")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#545f72")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Legal — right-aligned, small, no underline */}
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#4d6451",
              marginBottom: "1rem",
            }}
          >
            Legal
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {legalLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  style={{ ...linkStyle, fontSize: "0.75rem", color: "#7a7a7a" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4d6451")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a7a7a")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

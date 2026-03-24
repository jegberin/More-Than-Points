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
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "2rem",
          maxWidth: "80rem",
          margin: "0 auto",
        }}
        className="md:grid-cols-3"
      >
        {/* Column 1: Brand / Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textAlign: "center" }} className="md:items-start md:text-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="More Than Points"
              style={{ height: "88px", width: "auto" }}
            />
          </Link>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", lineHeight: "1.6", color: "#545f72" }}>
            © 2026 More Than Points. Grounded Coaching for the Modern Journey.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ textAlign: "center" }} className="md:text-left">
          <p
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#4d6451",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  style={{
                    color: "#545f72",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4d6451")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#545f72")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal + Designer Credit */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", textAlign: "center" }} className="md:text-left md:items-end md:ml-auto">
          <p
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#4d6451",
              marginBottom: "0.375rem",
            }}
          >
            Legal
          </p>
          {legalLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              style={{
                color: "#545f72",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                textDecoration: "underline",
                textDecorationColor: "#775a19",
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4d6451")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#545f72")}
            >
              {label}
            </Link>
          ))}
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#8a8a8a", marginTop: "1rem" }}>
            Website design by{" "}
            <a
              href="https://digital.crettyard.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#545f72",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4d6451")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#545f72")}
            >
              digital.crettyard.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

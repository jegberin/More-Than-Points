import { Link } from "wouter";

const logo = `${import.meta.env.BASE_URL}logo-morethanpoints.png`;

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
          alignItems: "center",
          textAlign: "center",
        }}
        className="md:grid-cols-3 md:text-left"
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }} className="md:items-start">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="More Than Points"
              style={{ height: "44px", width: "auto" }}
            />
          </Link>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", lineHeight: "1.6", color: "#545f72" }}>
            © 2026 More Than Points. Grounded Coaching for the Modern Journey.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
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
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="md:justify-end">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#8a8a8a" }}>
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

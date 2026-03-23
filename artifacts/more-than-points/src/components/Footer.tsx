export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f1eee7",
        width: "100%",
        padding: "3rem 1.5rem",
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
        <div>
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "#4d6451",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              marginBottom: "0.5rem",
            }}
          >
            More Than Points
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: "1.6", color: "#545f72" }}>
            © 2024 More Than Points. Grounded Coaching for the Modern Journey.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
            <a
              key={link}
              href="#"
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
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4d6451")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#545f72")}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }} className="md:justify-end">
          {["Instagram", "LinkedIn", "Twitter"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#545f72",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4d6451")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#545f72")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

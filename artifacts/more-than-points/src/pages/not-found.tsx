import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "#fcf9f2", color: "#1c1c18", fontFamily: "Inter, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div style={{ textAlign: "center", maxWidth: "32rem", padding: "0 1.5rem" }}>
          <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "6rem", fontWeight: 800, color: "#4d6451", lineHeight: 1, marginBottom: "1rem" }}>404</p>
          <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Page not found</h1>
          <p style={{ color: "#545f72", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            The page you're looking for doesn't exist. It may have moved or the link might be incorrect.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#4d6451",
              color: "#ffffff",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.9375rem",
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

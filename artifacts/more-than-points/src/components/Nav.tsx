import { Link, useLocation } from "wouter";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Coaching Options", to: "/coaching-options" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-sm"
      style={{ backgroundColor: "rgba(252, 249, 242, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#4d6451",
              letterSpacing: "-0.025em",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              cursor: "pointer",
            }}
          >
            More Than Points
          </span>
        </Link>

        <div className="hidden md:flex items-center" style={{ gap: "2rem" }}>
          {navLinks.map(({ label, to }) => {
            const isActive = location === to;
            return (
              <Link key={to} to={to} style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.875rem",
                    letterSpacing: "-0.01em",
                    color: isActive ? "#4d6451" : "#545f72",
                    borderBottom: isActive ? "2px solid #4d6451" : "2px solid transparent",
                    paddingBottom: "0.25rem",
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        <Link to="/book-session" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#4d6451",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Book a Session
          </button>
        </Link>

        <button
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#4d6451" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div style={{ backgroundColor: "#fcf9f2", padding: "1rem 1.5rem 1.5rem" }}>
          {navLinks.map(({ label, to }) => (
            <div key={to} style={{ paddingBottom: "0.75rem" }}>
              <Link to={to} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: location === to ? 600 : 400,
                    color: location === to ? "#4d6451" : "#545f72",
                    fontSize: "1rem",
                  }}
                >
                  {label}
                </span>
              </Link>
            </div>
          ))}
          <div style={{ marginTop: "1rem" }}>
            <Link to="/book-session" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
              <button
                style={{
                  backgroundColor: "#4d6451",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Book a Session
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

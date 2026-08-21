import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import { GUIDES, GUIDE_ORDER } from "@/lib/guides";

const logo = `${import.meta.env.BASE_URL}logo-morethanpoints.webp`;

const guideLinks = [
  ...GUIDE_ORDER.map((id) => ({ label: GUIDES[id].shortLabel, to: GUIDES[id].to })),
  { label: "Articles", to: "/articles" },
];

type NavLink = { label: string; to: string; children?: typeof guideLinks };

const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Coaching Options", to: "/coaching-options" },
  { label: "For Parents", to: "/for-parents" },
  { label: "For Teens", to: "/for-teens" },
  { label: "Resources", to: "/guides", children: guideLinks },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const onGuidesRoute = location.startsWith("/guides/") || location.startsWith("/articles");

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  useEffect(() => {
    if (!resourcesOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) setResourcesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setResourcesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [resourcesOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-sm"
      style={{ backgroundColor: "rgba(252, 249, 242, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt="More Than Points"
            width={162}
            height={60}
            fetchPriority="high"
            style={{ height: "60px", width: "auto", display: "block" }}
          />
        </Link>

        <div className="hidden md:flex items-center" style={{ gap: "1.5rem" }}>
          {navLinks.map(({ label, to, children }) => {
            if (children) {
              const isActive = onGuidesRoute;
              return (
                <div key={to} ref={resourcesRef} style={{ position: "relative" }}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={resourcesOpen}
                    aria-controls="nav-resources-menu"
                    onClick={() => setResourcesOpen((open) => !open)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.125rem",
                      background: "none",
                      border: "none",
                      padding: 0,
                      paddingBottom: "0.25rem",
                      cursor: "pointer",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "0.8125rem",
                      letterSpacing: "-0.01em",
                      color: isActive ? "#4d6451" : "#545f72",
                      borderBottom: isActive ? "2px solid #4d6451" : "2px solid transparent",
                      transition: "color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(77,100,81,0.25)")}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    {label}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.125rem",
                        transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      expand_more
                    </span>
                  </button>

                  {resourcesOpen && (
                    <div
                      id="nav-resources-menu"
                      role="menu"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 0.75rem)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: "16rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.75rem",
                        boxShadow: "0 20px 40px rgba(28,28,24,0.12)",
                        padding: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.125rem",
                      }}
                    >
                      {children.map((child) => {
                        const childActive = location === child.to;
                        return (
                          <Link
                            key={child.to}
                            to={child.to}
                            role="menuitem"
                            onClick={() => setResourcesOpen(false)}
                            style={{
                              display: "block",
                              padding: "0.625rem 0.875rem",
                              borderRadius: "0.5rem",
                              textDecoration: "none",
                              fontFamily: "Plus Jakarta Sans, sans-serif",
                              fontSize: "0.875rem",
                              fontWeight: childActive ? 600 : 500,
                              color: childActive ? "#4d6451" : "#545f72",
                              backgroundColor: childActive ? "#f1eee7" : "transparent",
                              transition: "background-color 0.15s, color 0.15s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f6f3ec")}
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor = childActive ? "#f1eee7" : "transparent")
                            }
                            onFocus={(e) => (e.currentTarget.style.backgroundColor = "#f6f3ec")}
                            onBlur={(e) =>
                              (e.currentTarget.style.backgroundColor = childActive ? "#f1eee7" : "transparent")
                            }
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location === to;
            return (
              <Link key={to} to={to} style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.8125rem",
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

        <Link to="/book-session" style={{ textDecoration: "none" }} className="hidden md:block">
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
          {navLinks.map(({ label, to, children }) => {
            if (children) {
              return (
                <div key={to} style={{ paddingBottom: "0.75rem" }}>
                  <button
                    type="button"
                    aria-expanded={mobileResourcesOpen}
                    aria-controls="mobile-resources-menu"
                    onClick={() => setMobileResourcesOpen((open) => !open)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: onGuidesRoute ? 600 : 400,
                      color: onGuidesRoute ? "#4d6451" : "#545f72",
                      fontSize: "1rem",
                    }}
                  >
                    {label}
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.25rem",
                        transform: mobileResourcesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      expand_more
                    </span>
                  </button>

                  {mobileResourcesOpen && (
                    <div
                      id="mobile-resources-menu"
                      style={{
                        marginTop: "0.75rem",
                        paddingLeft: "1rem",
                        borderLeft: "2px solid #e5e2db",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      {children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          style={{ textDecoration: "none" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span
                            style={{
                              fontFamily: "Plus Jakarta Sans, sans-serif",
                              fontWeight: location === child.to ? 600 : 400,
                              color: location === child.to ? "#4d6451" : "#545f72",
                              fontSize: "0.9375rem",
                            }}
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
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

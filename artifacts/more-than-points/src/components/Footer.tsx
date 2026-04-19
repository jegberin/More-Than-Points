import { Link } from "wouter";

const logo = `${import.meta.env.BASE_URL}logo-morethanpoints.webp`;
const crettyardFavicon = `${import.meta.env.BASE_URL}favicon-crettyard.png`;

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

const colOneLinks = quickLinks.slice(0, 3);
const colTwoLinks = quickLinks.slice(3, 6);
const colThreeLinks = quickLinks.slice(6, 9);

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background-color: #f1eee7;
          width: 100%;
          padding: 3rem 1.5rem 2rem;
          margin-top: 5rem;
        }
        .footer-grid {
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-section-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #4d6451;
          margin-bottom: 1rem;
        }
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 0.5rem 2rem;
          justify-content: start;
        }
        .footer-legal {
          text-align: left;
        }
        .footer-link {
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          color: #545f72;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #4d6451; }
        .footer-legal-link {
          font-family: Inter, sans-serif;
          font-size: 0.75rem;
          color: #7a7a7a;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal-link:hover { color: #4d6451; }
        .footer-credit-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #8a8a8a;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
          vertical-align: middle;
        }
        .footer-credit-link:hover { color: #4d6451; }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: auto 1fr auto;
            gap: 3rem;
            align-items: start;
          }
          .footer-links-grid {
            grid-template-columns: repeat(3, auto);
          }
          .footer-legal {
            text-align: right;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-grid">

          {/* Brand / Logo */}
          <div className="footer-brand">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="More Than Points"
                width={178}
                height={66}
                loading="lazy"
                style={{ height: "66px", width: "auto" }}
              />
            </Link>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", lineHeight: 1.6, color: "#545f72", maxWidth: "18rem" }}>
              © 2026 More Than Points. All rights reserved.<br />
              Grounded Coaching for the Modern Journey.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#8a8a8a", marginTop: "0.25rem" }}>
              Website design by{" "}
              <a
                href="https://crettyarddigital.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                <img
                  src={crettyardFavicon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: "14px", height: "14px", borderRadius: "2px", display: "inline-block", flexShrink: 0 }}
                />
                crettyarddigital.ie
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-section-label">Quick Links</p>
            <div className="footer-links-grid">
              {[colOneLinks, colTwoLinks, colThreeLinks].map((col, ci) => (
                <ul key={ci} style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {col.map(({ label, to }) => (
                    <li key={label}>
                      <Link to={to} className="footer-link">{label}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="footer-legal">
            <p className="footer-section-label">Legal</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {legalLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="footer-legal-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}

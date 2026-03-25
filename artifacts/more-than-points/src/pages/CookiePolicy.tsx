import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  surface: "#fcf9f2",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  surfaceContainerLow: "#f6f3ec",
  outlineVariant: "#c3c8c0",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: colors.primary,
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>
      <div style={{ color: colors.secondary, lineHeight: 1.8, fontFamily: "Inter, sans-serif", fontSize: "0.9375rem" }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "1rem", color: colors.primary, marginBottom: "0.4rem" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <main id="top" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                backgroundColor: colors.surfaceContainerLow,
                color: colors.secondary,
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Legal
            </span>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: colors.primary,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              Cookie Policy
            </h1>
            <p style={{ color: colors.secondary, fontSize: "0.9375rem" }}>
              Effective date: 10/03/2026
            </p>
          </div>

          <div
            style={{
              borderBottom: `1px solid ${colors.outlineVariant}`,
              marginBottom: "2.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.8 }}>
              This Cookie Policy explains how More Than Points uses cookies and similar technologies on our website. By continuing to use our website, you may consent to the use of cookies where permitted by law. Where required, we will request your consent before placing non-essential cookies on your device.
            </p>
          </div>

          <Section title="1. Who we are">
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li><strong>Business name:</strong> More Than Points</li>
              <li><strong>Location:</strong> Ireland</li>
              <li><strong>Email:</strong> <a href="mailto:hello@morethanpoints.ie" style={{ color: colors.primary }}>hello@morethanpoints.ie</a></li>
            </ul>
          </Section>

          <Section title="2. What are cookies?">
            <p>Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, improve performance, and collect information about how visitors use the site. Some cookies are set by us, and others may be set by third-party services that appear on or support the website.</p>
          </Section>

          <Section title="3. Types of cookies we may use">
            <SubSection title="A. Strictly necessary cookies">
              <p>These cookies are essential for the website to function properly and do not usually require consent. They may be used for basic site operation, security, spam prevention, and form handling.</p>
            </SubSection>

            <SubSection title="B. Analytics cookies">
              <p style={{ marginBottom: "0.5rem" }}>These cookies help us understand how visitors use the website so we can improve content and performance. They may include:</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Google Analytics</li>
              </ul>
              <p style={{ marginTop: "0.5rem" }}>Analytics cookies may collect information such as pages visited, time spent on pages, device and browser type, and general usage behaviour.</p>
            </SubSection>

            <SubSection title="C. Functional cookies">
              <p style={{ marginBottom: "0.5rem" }}>These cookies help enable enhanced website features. They may include:</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Calendly (calendly.com) — used for session scheduling. May set cookies to manage booking flows</li>
                <li>Embedded video content (e.g. YouTube)</li>
              </ul>
            </SubSection>

            <SubSection title="D. Security and anti-spam cookies">
              <p>We may use tools such as Google reCAPTCHA or similar services to protect forms and prevent spam or abuse.</p>
            </SubSection>
          </Section>

          <Section title="4. Third-party cookies">
            <p style={{ marginBottom: "0.5rem" }}>Some cookies on our website may be placed by third-party providers. We do not control these cookies directly. Their use is governed by the privacy policies of those third parties. Third-party services used on our website may include:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Google Analytics</li>
              <li>Google reCAPTCHA</li>
              <li>Calendly (calendly.com) — session scheduling tool. See <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }}>calendly.com/privacy</a> for their cookie and privacy policy</li>
              <li>YouTube embeds, where used</li>
            </ul>
          </Section>

          <Section title="5. Why we use cookies">
            <p style={{ marginBottom: "0.5rem" }}>We use cookies and similar technologies to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Make the website function properly</li>
              <li>Improve site performance and usability</li>
              <li>Understand how visitors use the website</li>
              <li>Provide embedded features and content</li>
              <li>Help protect forms and the website from spam and abuse</li>
            </ul>
          </Section>

          <Section title="6. Your choices">
            <p>You can control or delete cookies through your browser settings. Please note that disabling some cookies may affect how the website functions. Where required by law, we will ask for your consent before using non-essential cookies such as analytics or certain third-party functional cookies.</p>
          </Section>

          <Section title="7. Changes to this Cookie Policy">
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
          </Section>

          <Section title="8. Contact">
            <p>
              If you have any questions about this Cookie Policy, please contact:<br /><br />
              <strong>More Than Points</strong><br />
              Ireland<br />
              Email: <a href="mailto:hello@morethanpoints.ie" style={{ color: colors.primary }}>hello@morethanpoints.ie</a>
            </p>
          </Section>

          <div style={{ paddingTop: "1rem", textAlign: "right" }}>
            <a href="#top" style={{ color: colors.primary, fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
              ↑ Back to top
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

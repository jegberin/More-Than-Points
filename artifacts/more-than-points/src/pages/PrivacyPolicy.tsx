import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

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

export default function PrivacyPolicy() {
  useEffect(() => {
    setPageMeta(
      "Privacy Policy | More Than Points",
      "How More Than Points collects, uses, and protects your personal data under Irish and EU GDPR law."
    );
  }, []);

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
              Privacy Policy
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
              More Than Points respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website or contact us.
            </p>
          </div>

          <Section title="1. Who we are">
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li><strong>Business name:</strong> More Than Points</li>
              <li><strong>Business type:</strong> Educational coaching — sole trader</li>
              <li><strong>Location:</strong> Ireland</li>
              <li><strong>Email:</strong> <a href="mailto:hello@morethanpoints.ie" style={{ color: colors.primary }}>hello@morethanpoints.ie</a></li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              For the purposes of data protection law, More Than Points is the data controller of the personal data described in this policy.
            </p>
          </Section>

          <Section title="2. What personal data we collect">
            <p style={{ marginBottom: "0.5rem" }}>We may collect and process the following personal data:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Information about your teen (age, educational stage, areas of concern)</li>
              <li>Any information you include in a contact form or message</li>
              <li>Technical and usage data collected through cookies and similar technologies</li>
            </ul>
          </Section>

          <Section title="3. How we collect your data">
            <p style={{ marginBottom: "0.5rem" }}>We collect data:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>When you complete and submit a contact or booking form on this website</li>
              <li>When you contact us by email</li>
              <li>When you book a coaching session via email confirmation or through Calendly (calendly.com), our online session-scheduling tool</li>
              <li>Automatically through cookies and similar technologies</li>
            </ul>
          </Section>

          <Section title="4. How we use your data">
            <p style={{ marginBottom: "0.5rem" }}>We use your personal data to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Respond to enquiries</li>
              <li>Arrange and deliver coaching sessions</li>
              <li>Provide information about our coaching programmes</li>
              <li>Communicate with clients and prospective clients</li>
              <li>Improve the website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="5. Legal basis for processing">
            <p style={{ marginBottom: "0.5rem" }}>We process your personal data on one or more of the following legal bases:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Your consent</li>
              <li>To take steps at your request before entering into a contract</li>
              <li>Our legitimate interests in operating our coaching business and responding to enquiries</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </Section>

          <Section title="6. Cookies and similar technologies">
            <p>
              Our website may use cookies and similar technologies to support website functionality, analytics, and spam prevention. Where required by law, we will request your consent before placing non-essential cookies on your device. See our <a href="/cookie-policy" style={{ color: colors.primary, textDecoration: "underline" }}>Cookie Policy</a> for full details.
            </p>
          </Section>

          <Section title="7. Sharing your data">
            <p style={{ marginBottom: "0.5rem" }}>We may share personal data with trusted third-party service providers where necessary to operate the website or deliver coaching services. These may include:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Website hosting providers</li>
              <li>Analytics providers</li>
              <li>Email service providers</li>
              <li>Calendly (calendly.com) — used for session scheduling. Calendly processes booking data in accordance with their own privacy policy at <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }}>calendly.com/privacy</a></li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>We do not sell your personal data.</p>
          </Section>

          <Section title="8. International transfers">
            <p>Some third-party providers may process data outside Ireland or the European Economic Area. Where this happens, we will take reasonable steps to ensure appropriate safeguards are in place as required by applicable law.</p>
          </Section>

          <Section title="9. Data retention">
            <p>We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, delivering coaching services, maintaining business records, and complying with legal obligations.</p>
          </Section>

          <Section title="10. Your rights">
            <p style={{ marginBottom: "0.5rem" }}>Subject to applicable law, you may have the right to:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Request restriction of processing</li>
              <li>Object to certain processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              To exercise any of these rights, please contact us at <a href="mailto:hello@morethanpoints.ie" style={{ color: colors.primary }}>hello@morethanpoints.ie</a>. You also have the right to make a complaint to the Data Protection Commission in Ireland.
            </p>
          </Section>

          <Section title="11. Third-party websites">
            <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those sites.</p>
          </Section>

          <Section title="12. Security">
            <p>We take reasonable technical and organisational measures to protect personal data, but no method of transmission over the internet or electronic storage is completely secure.</p>
          </Section>

          <Section title="13. Changes to this policy">
            <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.</p>
          </Section>

          <Section title="14. Contact us">
            <p>If you have any questions about this Privacy Policy or how your personal data is handled, please contact:</p>
            <p style={{ marginTop: "0.75rem" }}>
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

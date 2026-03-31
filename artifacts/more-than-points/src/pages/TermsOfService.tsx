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

export default function TermsOfService() {
  useEffect(() => {
    setPageMeta(
      "Terms of Service | More Than Points",
      "Terms and conditions governing More Than Points coaching sessions, payments, cancellations, and your rights under Irish consumer law."
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
              Terms of Service
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
              These Terms of Service govern your use of the More Than Points website and any engagement with our coaching services. By using this website, contacting us, or engaging our services, you agree to these Terms.
            </p>
          </div>

          <Section title="1. About us">
            <p>More Than Points is an educational coaching service based in Ireland, supporting teens aged 16–19 and their families in navigating post-primary education, subject and career choices, and the personal challenges of that journey.</p>
            <p style={{ marginTop: "0.75rem" }}>
              <strong>Contact:</strong> <a href="mailto:info@morethanpoints.ie" style={{ color: colors.primary }}>info@morethanpoints.ie</a>
            </p>
          </Section>

          <Section title="2. Website use">
            <p>You agree to use this website only for lawful purposes. You must not use the website in any way that may damage, disable, or overburden it, or interfere with any other party's use. You must not attempt to gain unauthorised access to any part of the website or connected systems.</p>
          </Section>

          <Section title="3. Information on this website">
            <p>The content on this website is provided for general information only. While we aim to keep information accurate and up to date, we make no guarantees regarding the completeness or accuracy of any content. Any reliance you place on information on this website is at your own risk.</p>
          </Section>

          <Section title="4. Coaching services">
            <p style={{ marginBottom: "0.5rem" }}>More Than Points provides one-to-one educational coaching sessions and bespoke programmes for teens aged 16–19 and their families in Ireland. Services include:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Free 15-minute introductory call — no commitment, no pressure</li>
              <li>Teen Coaching — 3 to 6 sessions (€255–€510)</li>
              <li>Confidence &amp; Motivation Coaching — 3 to 6 sessions (€255–€510)</li>
              <li>Parent Support — 3 to 6 sessions (€255–€510)</li>
              <li>Next-Step Planning — 4 to 8 sessions (€340–€680)</li>
              <li>Follow-Up Sessions — available to past clients on request</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Session packages are proposed by Angela following the introductory call, based on the individual needs of the client. All services are subject to availability.</p>
          </Section>

          <Section title="5. Bookings">
            <p>A coaching session is confirmed once both parties have agreed the date, time, and session type, and any required payment has been made. Booking requests submitted through the website are not confirmed until you receive a confirmation from us by email.</p>
          </Section>

          <Section title="6. Client responsibilities">
            <p style={{ marginBottom: "0.5rem" }}>The client (parent or guardian, where the teen is under 18) is responsible for:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Providing accurate information and clear context for the coaching relationship</li>
              <li>Attending sessions at the agreed time, or giving adequate notice to reschedule</li>
              <li>Ensuring they have parental or guardian consent where required</li>
              <li>Making their own decisions on whether to act on any guidance or recommendation provided</li>
            </ul>
          </Section>

          <Section title="7. Nature of coaching">
            <p>Coaching provided by More Than Points is offered in a supportive, educational capacity. It is not a substitute for professional psychological, medical, therapeutic, or legal advice. The client remains fully responsible for their own decisions, the student's wellbeing, and any actions taken as a result of coaching conversations.</p>
          </Section>

          <Section title="8. Confidentiality">
            <p>We treat all information shared during coaching sessions with strict confidentiality. We will not disclose personal information to third parties without consent, except where required to do so by law or where there is a concern for the safety of the student or others.</p>
          </Section>

          <Section title="9. Payments">
            <p style={{ marginBottom: "0.5rem" }}>Session fees are based on the bespoke coaching plan proposed by Angela after the initial introductory call. Unless otherwise agreed:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Payment is due before sessions begin</li>
              <li>A secure payment link will be sent by email via PayPal or Revolut once the plan is agreed</li>
              <li>Late or unpaid sessions may result in future bookings being withheld</li>
            </ul>
          </Section>

          <Section title="10. Cancellation and rescheduling">
            <p style={{ marginBottom: "0.5rem" }}>Sessions can be cancelled or rescheduled free of charge with at least 24 hours' notice. For cancellations made with less than 24 hours' notice:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>A cancellation fee may apply</li>
              <li>Package sessions cancelled without adequate notice may be forfeited</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>We reserve the right to cancel or reschedule a session in exceptional circumstances. In such cases, we will notify you as early as possible and offer an alternative date.</p>
          </Section>

          <Section title="11. Limitation of liability">
            <p>To the fullest extent permitted by law, More Than Points shall not be liable for any indirect, incidental, special, consequential, or similar losses arising from your use of the website or coaching services, or from any advice or recommendations provided. Nothing in these Terms excludes liability where it cannot lawfully be excluded.</p>
          </Section>

          <Section title="12. No guarantees">
            <p>We do not guarantee specific educational outcomes, exam results, CAO points, school performance, or any other measurable results. Coaching supports the individual's development and decision-making, but outcomes depend on many factors outside our control.</p>
          </Section>

          <Section title="13. Intellectual property">
            <p>All content on this website, including text, images, and design, is the property of More Than Points unless otherwise indicated. You may not reproduce or distribute any content without prior written permission.</p>
          </Section>

          <Section title="14. Links to third-party websites">
            <p>This website may contain links to third-party websites for convenience only. We do not endorse and are not responsible for the content or practices of any third-party websites.</p>
          </Section>

          <Section title="15. Privacy">
            <p>Use of this website is also subject to our <a href="/privacy-policy" style={{ color: colors.primary, textDecoration: "underline" }}>Privacy Policy</a>.</p>
          </Section>

          <Section title="16. Governing law">
            <p>These Terms of Service are governed by the laws of Ireland. Any dispute arising in connection with these Terms shall be subject to the exclusive jurisdiction of the Irish courts.</p>
          </Section>

          <Section title="17. Changes to these terms">
            <p>We may update these Terms from time to time. The latest version will be published on this page with the updated effective date.</p>
          </Section>

          <Section title="18. Contact">
            <p>
              <strong>More Than Points</strong><br />
              Ireland<br />
              Email: <a href="mailto:info@morethanpoints.ie" style={{ color: colors.primary }}>info@morethanpoints.ie</a>
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

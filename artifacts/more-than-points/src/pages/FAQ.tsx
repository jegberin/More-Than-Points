import { useEffect, useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainer: "#f1eee7",
  surfaceContainerHigh: "#ebe8e1",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  primaryFixed: "#cfe9d1",
  tertiary: "#775a19",
  outlineVariant: "#c3c8c0",
};

const faqs = [
  {
    q: "Who is coaching suitable for?",
    a: "Coaching is suitable for teenagers aged 16–19 who are navigating the Leaving Cert, feeling uncertain about their next steps, or struggling with the pressure and expectations of the education system. It's also suitable for parents who want support in understanding and helping their teenager through this time.",
  },
  {
    q: "Is coaching confidential?",
    a: "Sessions are confidential. Limits apply where there is a concern for the safety of the young person, which will always be handled sensitively. This means your teenager can speak openly, knowing that what they share won't automatically be reported back to parents.",
  },
  {
    q: "Are sessions online or in person?",
    a: "Yes, sessions are offered online via video call, making them accessible anywhere in Ireland. This also means your teenager can join from the comfort and privacy of their own home, without the stress of travelling to a new place.",
  },
  {
    q: "How long does a session last?",
    a: "Each session runs for 60 minutes. This gives enough time to have a real, meaningful conversation without feeling rushed. For multi-session work, sessions follow a customised schedule tailored to your needs.",
  },
  {
    q: "How many sessions will we need?",
    a: "This depends on what you're working through. A single session is ideal for tackling one specific challenge or gaining a clearer perspective. For deeper work — building confidence over time, exploring pathways in detail, or developing a longer-term plan — multiple sessions tend to give the best results. There are five coaching formats available to suit different needs. We can discuss what feels right during an initial chat.",
  },
  {
    q: "What's the difference between coaching and therapy?",
    a: "Coaching is forward-focused. It's about clarifying goals, identifying strengths, exploring options, and building practical next steps. It's not a form of therapy or counselling, and it doesn't aim to diagnose or treat mental health conditions. If a young person needs clinical support, I can point families in the right direction.",
  },
  {
    q: "How do payments work?",
    a: "After confirming your coaching plan by email, Angela will send you a secure payment link via PayPal or Revolut. Payment is required before sessions begin. Sessions can be cancelled or rescheduled free of charge up to 24 hours in advance.",
  },
  {
    q: "What if my teenager is resistant to coaching?",
    a: "This is very common, and it's okay. Sometimes a short introductory call — just a relaxed, no-pressure chat — is enough to ease the worry. Coaching works best when the young person feels like it's their choice, not something being done to them. I'm experienced in meeting teenagers where they are.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setPageMeta(
      "FAQ | More Than Points",
      "Answers to common questions about educational coaching, sessions, confidentiality, pricing, and how to support your teenager through the Leaving Cert years."
    );

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem" }}>
        {/* Hero */}
        <section style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 5rem", textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              backgroundColor: colors.secondaryContainer,
              color: colors.onSecondaryContainer,
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Common Questions
          </span>
          <h1
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: colors.onSurface,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: colors.primary, fontStyle: "italic" }}>Questions</span>
          </h1>
          <p style={{ color: colors.onSurfaceVariant, fontSize: "1.125rem", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.6 }}>
            Everything you want to know before getting started. If you don't find your answer here, feel free to get in
            touch.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map(({ q, a }, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: isOpen ? colors.surfaceContainerLowest : colors.surfaceContainerLow,
                    borderRadius: "1rem",
                    border: isOpen ? `2px solid ${colors.primary}33` : `2px solid transparent`,
                    overflow: "hidden",
                    transition: "border-color 0.2s, background-color 0.2s",
                    boxShadow: isOpen ? "0 8px 24px rgba(77,100,81,0.08)" : "none",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1.5rem 2rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "1rem",
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: isOpen ? colors.primary : colors.onSurface,
                        lineHeight: 1.4,
                      }}
                    >
                      {q}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: colors.primary,
                        fontSize: "1.5rem",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 2rem 1.75rem" }}>
                      <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.75, fontSize: "1rem" }}>{a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Still Have Questions */}
        <section style={{ backgroundColor: colors.surfaceContainerLow, padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: colors.onSurface,
                marginBottom: "1rem",
              }}
            >
              Still have questions?
            </h2>
            <p style={{ color: colors.secondary, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "34rem", margin: "0 auto 2.5rem" }}>
              Don't hesitate to reach out. There's no obligation — a quick message is all it takes to get the answers you
              need.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.onPrimary,
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Get in Touch
                </button>
              </Link>
              <Link to="/book-session" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    padding: "1rem 2rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Book a Session
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

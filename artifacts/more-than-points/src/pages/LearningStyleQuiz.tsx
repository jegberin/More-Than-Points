import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GuideDownloadForm from "@/components/GuideDownloadForm";
import DiscoveryCallCTA from "@/components/DiscoveryCallCTA";
import GuideCrossLinks from "@/components/GuideCrossLinks";
import { setPageMeta } from "@/lib/pageMeta";
import { GUIDES, type VarkKey, type VarkProfile } from "@/lib/guides";
import { QUESTIONS, STYLES, VARK_ORDER } from "@/lib/quizData";

declare function gtag(...args: unknown[]): void;

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  tertiary: "#775a19",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHigh: "#ebe8e1",
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
  tertiaryFixed: "#ffdea5",
};

type Phase = "intro" | "questions" | "results";

export default function LearningStyleQuiz() {
  useEffect(() => {
    setPageMeta(
      "What's My Learning Style? Free Quiz for Students",
      "Find out how you learn best in 3 minutes. A free 12-question quiz for Irish students, with study strategies matched to your results."
    );
  }, []);

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(VarkKey | undefined)[]>([]);

  const tally = useMemo<VarkProfile>(() => {
    const t: VarkProfile = { V: 0, A: 0, R: 0, K: 0 };
    for (const key of answers) if (key) t[key] += 1;
    return t;
  }, [answers]);

  const results = useMemo(() => {
    const ranked = [...VARK_ORDER].sort((a, b) => tally[b] - tally[a]);
    const [top, second] = ranked;
    const topCount = tally[top];
    const isEven = topCount - tally[ranked[3]] <= 2;
    const isTied = tally[second] === topCount;

    let headline: string;
    let subhead: string;
    if (isEven) {
      headline = "You're an even mix";
      subhead =
        "No single way of learning dominates for you — you pull roughly equally from all four. That's genuinely useful: it means you can switch approach depending on the subject rather than being stuck with one.";
    } else if (isTied) {
      headline = `${STYLES[top].name} and ${STYLES[second].name.toLowerCase()}`;
      subhead =
        "Two ways of taking information in came out level for you. Combining them — for example turning something into a diagram and then explaining it out loud — will usually beat either on its own.";
    } else {
      headline = `You lean towards ${STYLES[top].name.toLowerCase()}`;
      subhead =
        "That's your strongest preference, but look at the bars below — you use all four. The point isn't to only study one way. It's to lead with what comes easily and use the rest to back it up.";
    }

    const percentages = Object.fromEntries(
      VARK_ORDER.map((k) => [k, Math.round((tally[k] / QUESTIONS.length) * 100)])
    ) as VarkProfile;

    return { ranked, isEven, headline, subhead, percentages, picks: isEven ? ranked.slice(0, 2) : [top, second] };
  }, [tally]);

  const start = () => {
    setIndex(0);
    setAnswers([]);
    setPhase("questions");
    if (typeof gtag !== "undefined") gtag("event", "quiz_started", { source: "learning-style-quiz" });
  };

  const choose = (key: VarkKey) => {
    const next = [...answers];
    next[index] = key;
    setAnswers(next);

    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1);
    } else {
      setPhase("results");
      if (typeof gtag !== "undefined") gtag("event", "quiz_completed", { source: "learning-style-quiz" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const restart = () => {
    setIndex(0);
    setAnswers([]);
    setPhase("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const question = QUESTIONS[index];
  const progress = (index / QUESTIONS.length) * 100;

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem" }}>
          {phase === "intro" && (
            <>
              <header style={{ marginBottom: "2rem" }}>
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
                  Free · 12 questions · about 3 minutes
                </span>
                <h1
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                    fontWeight: 800,
                    color: colors.onSurface,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                  }}
                >
                  What's my learning style?
                </h1>
                <p style={{ fontSize: "1.25rem", color: colors.secondary, lineHeight: 1.7 }}>
                  Answer honestly about how you <em>actually</em> study — not how you think you should. You'll get a
                  profile of how you take information in, and study strategies matched to it.
                </p>
              </header>

              <aside
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderLeft: `4px solid ${colors.tertiary}`,
                  borderRadius: "0.75rem",
                  padding: "1.75rem",
                  marginBottom: "2.5rem",
                  boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: colors.onSurface,
                    marginBottom: "0.875rem",
                  }}
                >
                  A note on learning styles
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", color: colors.onSurfaceVariant, lineHeight: 1.75 }}>
                  <p>
                    You'll hear people talk about being "a visual learner" or "an auditory learner", as if it's a fixed
                    type. It isn't. Almost everyone uses all of these ways of learning, just in different amounts — and
                    the research is clear that nobody should limit themselves to one.
                  </p>
                  <p>
                    What <em>is</em> useful is knowing which approaches come most easily to you, so studying feels less
                    like a fight. That's what this quiz is for: a starting point, not a label.
                  </p>
                </div>
              </aside>

              <button
                type="button"
                onClick={start}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  padding: "1.125rem 2.5rem",
                  borderRadius: "9999px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary}40`)}
                onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Start the quiz
              </button>

              <div style={{ marginTop: "3rem" }}>
                <GuideCrossLinks current="learning-style-quiz" />
              </div>
            </>
          )}

          {phase === "questions" && (
            <section aria-live="polite">
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: colors.primary,
                    }}
                  >
                    Question {index + 1} of {QUESTIONS.length}
                  </span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => setIndex(index - 1)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8125rem",
                        color: colors.secondary,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      ← Back
                    </button>
                  )}
                </div>
                <div style={{ height: "4px", backgroundColor: colors.surfaceContainerHighest, borderRadius: "9999px", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      backgroundColor: colors.primary,
                      transition: "width 0.35s ease",
                    }}
                  />
                </div>
              </div>

              <h1
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 2.125rem)",
                  fontWeight: 700,
                  color: colors.onSurface,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.75rem",
                }}
              >
                {question.q}
              </h1>

              <div role="group" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {question.a.map((opt) => {
                  const chosen = answers[index] === opt.k;
                  return (
                    <button
                      key={opt.t}
                      type="button"
                      onClick={() => choose(opt.k)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        color: colors.onSurface,
                        backgroundColor: chosen ? colors.surfaceContainerHigh : colors.surfaceContainerLowest,
                        border: `1px solid ${colors.surfaceContainerHighest}`,
                        borderLeft: `4px solid ${chosen ? colors.primary : "transparent"}`,
                        borderRadius: "0.75rem",
                        padding: "1.125rem 1.25rem",
                        transition: "border-color 0.18s, background-color 0.18s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = colors.tertiary)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderLeftColor = chosen ? colors.primary : "transparent")
                      }
                      onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}40`)}
                      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                      {opt.t}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {phase === "results" && (
            <section>
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
                  marginBottom: "1.25rem",
                }}
              >
                Your results
              </span>
              <h1
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 800,
                  color: colors.onSurface,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                {results.headline}
              </h1>
              <p style={{ fontSize: "1.125rem", color: colors.secondary, lineHeight: 1.75, marginBottom: "2.5rem" }}>
                {results.subhead}
              </p>

              {/* The mix */}
              <div
                style={{
                  backgroundColor: colors.surfaceContainerLowest,
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  marginBottom: "2.5rem",
                  boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {results.ranked.map((k, i) => {
                  const pct = results.percentages[k];
                  const isTop = i === 0 && !results.isEven;
                  return (
                    <div key={k}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                        <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, color: colors.onSurface }}>
                          {STYLES[k].name}
                        </span>
                        <span style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant, fontVariantNumeric: "tabular-nums" }}>
                          {pct}%
                        </span>
                      </div>
                      <div style={{ height: "10px", backgroundColor: colors.surfaceContainerHighest, borderRadius: "9999px", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: `${pct}%`,
                            backgroundColor: isTop ? colors.tertiary : colors.primary,
                            borderRadius: "9999px",
                            transition: "width 0.8s cubic-bezier(0.2,0.7,0.3,1)",
                          }}
                        />
                      </div>
                      <p style={{ fontSize: "0.875rem", color: colors.onSurfaceVariant, marginTop: "0.5rem", lineHeight: 1.6 }}>
                        {STYLES[k].desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Strategies for the top two */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                {results.picks.map((k) => (
                  <div
                    key={k}
                    style={{
                      backgroundColor: colors.surfaceContainerLow,
                      borderRadius: "1rem",
                      padding: "1.75rem",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: colors.onSurface,
                        marginBottom: "1rem",
                      }}
                    >
                      Try these for {STYLES[k].name.toLowerCase()}
                    </h2>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {STYLES[k].strategies.map((s) => (
                        <li key={s} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                          <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                            style={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0, marginTop: "0.125rem" }}
                          >
                            check_circle
                          </span>
                          <span style={{ color: colors.onSurfaceVariant, lineHeight: 1.7, fontSize: "0.9375rem" }}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Universal advice */}
              <div
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.875rem",
                  }}
                >
                  Three things that work for everyone
                </h2>
                <p style={{ opacity: 0.9, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
                  Whatever your mix looks like, these three make the biggest difference to how much you actually
                  remember — and they're worth more than any single style-matched technique.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    ["Test yourself instead of re-reading.", "Close the book and write down what you remember, then check. It feels harder and works far better."],
                    ["Spread it out.", "Four thirty-minute sessions across a week beat one two-hour cram, every time."],
                    ["Mix topics up.", "Switching between subjects in a session feels messier but sticks better than doing one topic to death."],
                  ].map(([term, detail]) => (
                    <li key={term} style={{ opacity: 0.95, lineHeight: 1.7, fontSize: "0.9375rem" }}>
                      <strong>{term}</strong> {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <GuideDownloadForm
                source="learning-style-quiz"
                pdfFilename={GUIDES["learning-styles-guide"].pdfFilename!}
                profile={results.percentages}
                heading="Get the full guide"
                description="Send yourself Discover Your Learning Style — the complete guide, with study strategies, common blockers and how to use all of this in the run-up to exams."
              />

              <DiscoveryCallCTA
                heading="Want to go further than a quiz?"
                source="learning-style-quiz"
                footnote="Fifteen minutes, free, no obligation to book anything."
              >
                <p>
                  Knowing how you learn is a start. Working out what to do with it — subjects, pathways, what happens
                  after the Leaving Cert — usually takes a proper conversation with someone outside the family.
                </p>
                <p>That's what a Discovery Call is for.</p>
              </DiscoveryCallCTA>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={restart}
                  style={{
                    backgroundColor: "transparent",
                    color: colors.secondary,
                    padding: "0.875rem 1.75rem",
                    borderRadius: "9999px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    border: `1px solid ${colors.surfaceContainerHighest}`,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = colors.surfaceContainerHighest)}
                >
                  Take the quiz again
                </button>
                <Link
                  to={GUIDES["learning-styles-guide"].to}
                  style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 600 }}
                >
                  Read the full guide →
                </Link>
              </div>

              <GuideCrossLinks current="learning-style-quiz" />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

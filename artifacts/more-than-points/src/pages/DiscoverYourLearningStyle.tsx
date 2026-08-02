import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AngelaInsight from "@/components/AngelaInsight";
import LearningStyleSection from "@/components/LearningStyleSection";
import GuideDownloadForm from "@/components/GuideDownloadForm";
import DiscoveryCallCTA from "@/components/DiscoveryCallCTA";
import GuideCrossLinks from "@/components/GuideCrossLinks";
import { setPageMeta } from "@/lib/pageMeta";
import { GUIDES } from "@/lib/guides";

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

const overview = [
  { icon: "visibility", title: "Seeing", desc: "Diagrams, colour, layout — anything you can picture." },
  { icon: "hearing", title: "Hearing", desc: "Talking it through, explaining, listening back." },
  { icon: "edit_note", title: "Reading & Writing", desc: "Words on a page — notes, lists, rewriting." },
  { icon: "directions_run", title: "Doing", desc: "Practice, movement, working it through yourself." },
];

const strugglePrompts = [
  { q: "I can't follow what is being said.", a: "You might take more in when you can see something, read it, or have time to process it at your own pace." },
  { q: "I'm not taking in all the information.", a: "One pass often isn't enough. Seeing it, hearing it and doing it together tends to stick far better than any one on its own." },
  { q: "I keep forgetting what happened in class.", a: "This is usually about memory and revision technique, not ability — and technique is something you can change." },
  { q: "I don't know how to study.", a: "There is no one 'right' way to study. There is only the way that works for you — and it's worth experimenting to find it." },
  { q: "I get easily distracted.", a: "You might need movement, shorter bursts, breaks, or a calmer space to focus properly." },
];

const whatHelps = [
  { term: "Know how you prefer to learn.", detail: "It helps you understand which approaches come most easily to you." },
  { term: "Use strategies that suit you.", detail: "Everyone learns differently. Find what helps you remember, focus and understand." },
  { term: "Take small steps.", detail: "Don't try to change everything at once. One small step can make a big difference." },
  { term: "Be patient with yourself.", detail: "You've probably been trying to learn in ways that don't suit you for a long time." },
  { term: "Ask for help.", detail: "A good teacher, tutor, friend or coach can help you find the right tools." },
];

const otherLenses = [
  {
    icon: "calculate",
    title: "Logical",
    desc: "You like things to make sense. Patterns, systems and problem-solving appeal to you, and you'd rather work something out than memorise it. You tend to ask 'why' until the answer is satisfying.",
    tips: ["Break information into clear steps", "Use charts, tables and flowcharts", "Work through practice problems", "Look for the pattern connecting things"],
  },
  {
    icon: "self_improvement",
    title: "Solitary",
    desc: "You do your best thinking alone, at your own pace, without interruptions. You're self-motivated and reflective — though it's worth remembering that asking for help isn't a weakness.",
    tips: ["Create a quiet space for focused work", "Set your own goals and deadlines", "Keep a journal to reflect on ideas", "Take regular breaks to recharge"],
  },
  {
    icon: "groups",
    title: "Social",
    desc: "You think best out loud and with other people. Discussion, teamwork and explaining things to others help ideas land — the trick is making sure the study actually happens alongside the talking.",
    tips: ["Join a study group or discussion circle", "Teach others what you've learned", "Discuss topics out loud", "Share ideas and ask for feedback"],
  },
];

function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
        fontWeight: 700,
        color: colors.onSurface,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        marginBottom: "1.25rem",
        scrollMarginTop: "7rem",
      }}
    >
      {children}
    </h2>
  );
}

export default function DiscoverYourLearningStyle() {
  useEffect(() => {
    setPageMeta(
      "Discover Your Learning Style: A Guide for Irish Students",
      "How do you learn best? A free guide for students and parents — how to spot your study preferences and the techniques that actually work for each."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Hero */}
          <header style={{ marginBottom: "2.5rem" }}>
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
              Free Guide · Resource 1
            </span>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Discover Your Learning Style
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontSize: "1.125rem",
                color: colors.secondary,
                lineHeight: 1.75,
              }}
            >
              <p style={{ fontStyle: "italic", color: colors.primary, fontWeight: 600 }}>
                Have you ever found yourself thinking… "Why does everyone else seem to understand this so easily?"
                "Why can't I remember what I've studied?" "Maybe I'm just not academic enough…"
              </p>
              <p>You're certainly not alone.</p>
              <p>
                The truth is, there is no such thing as a brain that can't learn. There are simply different ways that
                people process information. Some people think in pictures. Some remember conversations. Some need to
                write everything down. Others learn best by doing.
              </p>
              <p>
                Once you understand how you naturally take information in, studying becomes less frustrating, confidence
                begins to grow, and learning becomes something you can enjoy rather than fear.
              </p>
            </div>
          </header>

          {/* Required reframing callout */}
          <aside
            style={{
              backgroundColor: colors.surfaceContainerLowest,
              borderLeft: `4px solid ${colors.tertiary}`,
              borderRadius: "0.75rem",
              padding: "1.75rem",
              marginBottom: "3rem",
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
                type. It isn't. Almost everyone uses all of these ways of learning, just in different amounts — and the
                research is clear that nobody should limit themselves to one.
              </p>
              <p>
                What <em>is</em> useful is knowing which approaches come most easily to you, so studying feels less like
                a fight. That's what this guide is for: a starting point, not a label.
              </p>
            </div>
          </aside>

          {/* Overview */}
          <section style={{ marginBottom: "3.5rem" }}>
            <SectionHeading>The four main ways of learning</SectionHeading>
            <p style={{ color: colors.secondary, fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "44rem" }}>
              Most of us pull from all four of these, usually with one or two that feel more natural. Understanding
              which ones come easily helps you recognise your strengths, find study techniques that actually work, and
              learn with less stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem" }}>
              {overview.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: colors.surfaceContainerLow,
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "9999px",
                      backgroundColor: colors.surfaceContainerHighest,
                      color: colors.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ color: colors.onSurfaceVariant, fontSize: "0.9375rem", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                I often meet young people who believe they are not good at learning because traditional methods don't
                work for them. When we work out which approaches suit them, everything changes. They stop fighting
                themselves and start using strategies that fit.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                You are not here to learn in the same way as everyone else. You are here to learn in your way.
              </p>
            </AngelaInsight>
          </section>

          {/* The four merged sections */}
          <LearningStyleSection
            id="seeing"
            eyebrow="1 of 4"
            icon="visibility"
            title="Seeing"
            tagline="See it. Understand it. Remember it."
            intro="If you lean towards learning by seeing, you'll take in and hold onto information best when you can look at it. You probably think in pictures, notice detail, and have a strong visual imagination."
            strengths={[
              "Strong memory for images, diagrams and layouts",
              "Notice details others miss",
              "Good at reading maps, charts and graphs",
              "Good at visualising concepts before they exist",
              "Creative and imaginative",
              "Enjoy colour, design and layout",
            ]}
            challenges={[
              "Remembering things heard once, without anything to look at",
              "Getting pulled off track by visual detail or busy surroundings",
              "Following long verbal explanations",
              "Note-taking can take longer, and poorly presented material is harder work",
            ]}
            tips={[
              "Use mind maps and diagrams",
              "Colour-code by meaning, not decoration",
              "Highlight key information and use symbols",
              "Watch videos and visual explanations",
              "Draw what you learn to help it stick",
              "Turn a topic into a single-page visual summary",
            ]}
            subjects={[
              "Art & Design",
              "Geography",
              "Science",
              "Biology",
              "Architecture",
              "Photography",
              "Graphic Design",
              "Engineering",
              "Film & Animation",
            ]}
            signs={[
              "You prefer pictures, diagrams or videos over long explanations",
              "You use colours, symbols or doodles when you study",
              "You remember where things were on a page more than the words",
              "You enjoy drawing, design or creative activities",
              "You find maps, charts and graphs easier to follow",
              "You often 'see' the big picture, or think in images",
            ]}
            quote={{
              text: "The best thing about a picture is that it never changes, even when the people in it do.",
              author: "Andy Warhol",
            }}
            insight={
              <>
                <p style={{ marginBottom: "0.75rem" }}>
                  People who lean this way often doubt themselves, because school doesn't always teach visually. But
                  once they bring in pictures, colour and visual tools, confidence tends to grow quickly.
                </p>
                <p style={{ fontWeight: 700, color: colors.onSurface }}>
                  Seeing the bigger picture is a genuine strength. Use it — and back it up with the other approaches
                  too.
                </p>
              </>
            }
          />

          <LearningStyleSection
            id="hearing"
            eyebrow="2 of 4"
            icon="hearing"
            title="Hearing"
            tagline="Hear it. Discuss it. Understand it."
            intro="If you lean towards learning by hearing, information tends to land when you listen to it, say it, or talk it through with someone. Discussion isn't a distraction for you — it's often where the understanding actually happens."
            strengths={[
              "Good listening skills and attention",
              "Remember spoken information well",
              "Enjoy discussions and debates",
              "Good at explaining things to others",
              "Pick up tone, pace and meaning in conversation",
            ]}
            challenges={[
              "Long stretches of silent reading",
              "Background noise can be more disruptive than for others",
              "May need information repeated before it settles",
              "Details that were never talked about can slip away",
            ]}
            tips={[
              "Listen to podcasts, audiobooks or recorded explanations",
              "Record key points and listen back on the bus or a walk",
              "Discuss topics with friends or family",
              "Read tricky passages out loud rather than silently",
              "Teach someone else what you've learned — where you stumble is what you don't know yet",
            ]}
            subjects={["Music", "Languages", "Drama", "History", "Psychology", "Politics", "Radio & Broadcasting", "Teaching"]}
            signs={[
              "You'd rather listen than read",
              "You enjoy discussions and group conversations",
              "You remember spoken information more easily than written",
              "You like music, songs or spoken stories",
              "You benefit from talking things through",
              "You often 'hear' the answer in your head",
            ]}
            quote={{ text: "The art of communication is the language of leadership.", author: "James Humes" }}
            insight={
              <>
                <p style={{ marginBottom: "0.75rem" }}>
                  People who learn this way often think deeply and enjoy meaningful conversations. They may not always
                  shine in written assignments, but they have a powerful way with words and ideas.
                </p>
                <p style={{ fontWeight: 700, color: colors.onSurface }}>
                  When you're encouraged to speak, listen and share, confidence builds and your real potential shows.
                </p>
              </>
            }
          />

          <LearningStyleSection
            id="reading-writing"
            eyebrow="3 of 4"
            icon="edit_note"
            title="Reading & Writing"
            tagline="Write it down. Read it. Make it yours."
            intro="If you lean towards learning through words, reading and writing things down is where it clicks. You probably like lists, structure and clear instructions — and putting something in your own words is how you know you've understood it."
            strengths={[
              "Strong vocabulary and written expression",
              "Remember information well once it's written down",
              "Enjoy lists, notes and structure",
              "Good at following written instructions",
              "Enjoy storytelling, essays or journaling",
              "Remember names, details and facts",
            ]}
            challenges={[
              "Large amounts of text can feel overwhelming",
              "Spoken information may take longer to process",
              "Easy to get lost in detail",
              "Summarising concisely can be harder than writing at length",
            ]}
            tips={[
              "Take clear notes, then rewrite them shorter each time — the compression is the revision",
              "Use lists, bullet points and headings",
              "Summarise information in your own words, not the textbook's",
              "Use flashcards for key terms",
              "Write your own practice questions and full answers",
              "Careful: neat notes can feel like progress without being it — close the book and write from memory too",
            ]}
            subjects={[
              "English & Literature",
              "Languages",
              "History",
              "Law",
              "Journalism",
              "Teaching",
              "Communications",
              "Writing & Publishing",
            ]}
            signs={[
              "You enjoy reading books, articles or information",
              "You prefer written instructions over verbal ones",
              "You take lots of notes in class",
              "You like using lists, planners or to-do lists",
              "You remember things better when you write them down",
              "You enjoy writing stories, poems or journals",
              "You like clear structure and organisation",
            ]}
            quote={{ text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" }}
            insight={
              <>
                <p style={{ marginBottom: "0.75rem" }}>
                  People who learn this way sometimes underestimate themselves because they don't always speak up in
                  discussion. But when they express their thinking in writing, their understanding shines through.
                </p>
                <p style={{ fontWeight: 700, color: colors.onSurface }}>
                  Your ability to think deeply and express yourself in words is a strength. Trust your process — your
                  words have power.
                </p>
              </>
            }
          />

          <LearningStyleSection
            id="doing"
            eyebrow="4 of 4"
            icon="directions_run"
            title="Doing"
            tagline="Do it. Feel it. Understand it."
            intro="If you lean towards learning by doing, understanding tends to arrive through your hands and your body — by trying, moving, building and experiencing. Sitting still through theory is usually the hardest part."
            strengths={[
              "Learn quickly through hands-on experience",
              "Good at practical tasks and problem solving",
              "Strong coordination and physical skills",
              "Adapt well to changing situations",
              "Thrive in active learning environments",
            ]}
            challenges={[
              "Sitting still for long periods",
              "Too much theory before any practice can feel frustrating",
              "Details that weren't experienced can be harder to recall",
              "Passive learning situations are easy to drift out of",
            ]}
            tips={[
              "Go to past papers early — at the start of revision, to find out what you can't do yet",
              "Study in short blocks with real movement breaks",
              "Use practical examples and real-life situations",
              "Use role play, simulations and activities",
              "Turn abstract topics into something physical — cards to sort, a model, a walk-through",
              "Teach or show others what you've learned",
            ]}
            subjects={[
              "Physical Education",
              "Science (experiments)",
              "Engineering",
              "Drama",
              "Design & Technology",
              "Outdoor Education",
              "Healthcare",
              "Cooking & Nutrition",
            ]}
            signs={[
              "You prefer learning through activities, experiments or real-life examples",
              "You find it difficult to sit still for long periods",
              "You need breaks or movement to stay focused",
              "You remember things better when you've done them",
              "You enjoy building, fixing, creating or being outdoors",
              "You learn best when you're actively involved",
            ]}
            quote={{ text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" }}
            insight={
              <>
                <p style={{ marginBottom: "0.75rem" }}>
                  People who learn this way are often full of energy, curiosity and creativity. They can get frustrated
                  in classrooms that limit movement and hands-on work.
                </p>
                <p style={{ fontWeight: 700, color: colors.onSurface }}>
                  When they're given freedom to move, explore and create, they come alive — and the learning lasts
                  longer.
                </p>
              </>
            }
          />

          {/* Chapter 7 — given prominence */}
          <section
            style={{
              backgroundColor: colors.surfaceContainerLow,
              borderRadius: "1.5rem",
              padding: "clamp(1.75rem, 4vw, 3rem)",
              margin: "1rem 0 4rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.375rem 1rem",
                borderRadius: "9999px",
                backgroundColor: colors.tertiaryFixed,
                color: "#4a3400",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Read this bit
            </span>
            <SectionHeading id="why-its-hard">Why it's hard to learn the way I do</SectionHeading>
            <p
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "1.125rem",
                fontWeight: 600,
                fontStyle: "italic",
                color: colors.primary,
                marginBottom: "1.5rem",
              }}
            >
              It's not you. It's how you're being asked to learn.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: colors.secondary, fontSize: "1.0625rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              <p>
                Sometimes school feels hard, confusing or overwhelming. That often happens when the way you take
                information in isn't the way it's being delivered in the classroom. It can lead to frustration, stress
                and self-doubt.
              </p>
              <p>
                The good news is that once you understand which approaches work for you, you can start studying in a way
                that finally makes sense.
              </p>
            </div>

            <h3
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: colors.onSurface,
                marginBottom: "1.25rem",
              }}
            >
              Do these sound familiar?
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {strugglePrompts.map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    borderRadius: "0.875rem",
                    padding: "1.375rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 700,
                      color: colors.onSurface,
                      marginBottom: "0.5rem",
                      fontSize: "1.0625rem",
                    }}
                  >
                    "{q}"
                  </p>
                  <p style={{ color: colors.onSurfaceVariant, lineHeight: 1.7, fontSize: "0.9375rem" }}>{a}</p>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: colors.onSurface,
                marginBottom: "1.25rem",
              }}
            >
              What can help
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {whatHelps.map(({ term, detail }) => (
                <li key={term} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0, marginTop: "0.2rem" }}
                  >
                    check_circle
                  </span>
                  <span style={{ color: colors.secondary, lineHeight: 1.7 }}>
                    <strong style={{ color: colors.onSurface }}>{term}</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>

            <AngelaInsight label="A note from Angela">
              <p style={{ marginBottom: "0.75rem" }}>I have heard these struggles from so many young people.</p>
              <p style={{ marginBottom: "0.75rem" }}>
                They are not lazy. They are not not trying. They are not stupid. They are learning in a way that doesn't
                work for them.
              </p>
              <p style={{ marginBottom: "0.75rem" }}>
                When you understand how you learn best, things start to make sense. And when things make sense, you can
                finally move forward with confidence.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                You are not "bad" at learning. You've just been learning in a way that doesn't suit you — and that can
                change.
              </p>
            </AngelaInsight>
          </section>

          {/* Other lenses */}
          <section style={{ marginBottom: "4rem" }}>
            <SectionHeading id="other-lenses">Other ways people describe how they learn</SectionHeading>
            <p style={{ color: colors.secondary, fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "44rem" }}>
              Beyond the four above, you'll come across other descriptions of learning preferences. These aren't extra
              "types" to be sorted into — think of them as additional lenses that might describe something useful about
              how you like to work.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {otherLenses.map(({ icon, title, desc, tips }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    borderRadius: "1rem",
                    padding: "1.75rem",
                    boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "9999px",
                        backgroundColor: colors.surfaceContainerHighest,
                        color: colors.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: "1.375rem" }}>
                        {icon}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}>
                      {title}
                    </h3>
                  </div>
                  <p style={{ color: colors.secondary, lineHeight: 1.75, marginBottom: "1rem" }}>{desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {tips.map((tip) => (
                      <li
                        key={tip}
                        style={{
                          backgroundColor: colors.surfaceContainerLow,
                          color: colors.onSurfaceVariant,
                          padding: "0.4375rem 0.875rem",
                          borderRadius: "9999px",
                          fontSize: "0.8125rem",
                        }}
                      >
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Quiz CTA */}
          <section
            style={{
              backgroundColor: colors.surfaceContainerHigh,
              borderRadius: "1.5rem",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
                fontWeight: 700,
                color: colors.onSurface,
                marginBottom: "0.875rem",
              }}
            >
              Not sure which of these sounds like you?
            </h2>
            <p style={{ color: colors.secondary, lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "34rem", margin: "0 auto 1.75rem" }}>
              Answer twelve quick questions and get a profile of how you take information in, with study strategies
              matched to it. Takes about three minutes.
            </p>
            <Link to={GUIDES["learning-style-quiz"].to} style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                  padding: "1rem 2.25rem",
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
                Take the quiz
              </button>
            </Link>
          </section>

          {/* Keep growing — condensed synthesis */}
          <section style={{ marginBottom: "1rem" }}>
            <SectionHeading id="keep-growing">Keep growing, keep going</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: colors.secondary, fontSize: "1.0625rem", lineHeight: 1.8, maxWidth: "44rem", marginBottom: "2rem" }}>
              <p>
                Learning is a journey, not a race. Everyone's path looks different, and the most important thing is to
                keep moving forward — staying curious, trying new approaches, and being kind to yourself when progress
                feels slow.
              </p>
              <p>
                Set goals that genuinely interest you. Mix up your subjects and methods. Celebrate small wins. Take
                breaks when you need them. And remember that asking for help is a strength, not a weakness.
              </p>
            </div>

            <div
              style={{
                backgroundColor: colors.surfaceContainerLow,
                borderRadius: "1rem",
                padding: "1.75rem",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.primary,
                  marginBottom: "1rem",
                }}
              >
                Life skills you're building
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Communication",
                  "Time Management",
                  "Decision Making",
                  "Problem Solving",
                  "Adaptability",
                  "Leadership",
                  "Teamwork",
                  "Confidence",
                  "Self-Awareness",
                  "Critical Thinking",
                  "Resilience",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: colors.surfaceContainerLowest,
                      color: colors.secondary,
                      padding: "0.4375rem 0.875rem",
                      borderRadius: "9999px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <AngelaInsight label="Angela's final word">
              <p style={{ marginBottom: "0.75rem" }}>
                For over twenty years, I've worked with young people who believed they weren't capable enough. Time and
                time again, I've watched those same young people flourish — not because they suddenly became more
                intelligent, but because they finally understood themselves.
              </p>
              <p style={{ marginBottom: "0.75rem" }}>
                Every learner has strengths. Every learner has potential. Sometimes all that's needed is someone to help
                uncover it.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>Remember — you are far more than your points.</p>
            </AngelaInsight>
          </section>

          <GuideDownloadForm
            source="learning-styles-guide"
            pdfFilename={GUIDES["learning-styles-guide"].pdfFilename!}
          />

          <DiscoveryCallCTA
            heading="Want a hand putting this into practice?"
            source="learning-styles-guide"
            footnote="A relaxed conversation about where you are now and where you'd like to be. No obligation."
          >
            <p>
              Knowing how you learn best is a real start. Turning that into subject choices, a revision plan, or a
              decision about what comes after school is usually easier with someone in your corner.
            </p>
            <p>
              That's what a Discovery Call is for — fifteen minutes, free, with no pressure to book anything further.
              Just a chance to talk honestly about what's going on and what might help.
            </p>
          </DiscoveryCallCTA>

          <GuideCrossLinks current="learning-styles-guide" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

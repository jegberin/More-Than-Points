import { useEffect } from "react";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AngelaInsight from "@/components/AngelaInsight";
import GuideDownloadForm from "@/components/GuideDownloadForm";
import DiscoveryCallCTA from "@/components/DiscoveryCallCTA";
import GuideCrossLinks from "@/components/GuideCrossLinks";
import { setPageMeta } from "@/lib/pageMeta";
import { GUIDES } from "@/lib/guides";

const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  tertiary: "#775a19",
  surface: "#fcf9f2",
  surfaceContainerLow: "#f6f3ec",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerHighest: "#e5e2db",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#434842",
  secondaryContainer: "#d5e0f7",
  onSecondaryContainer: "#586376",
};

function Chapter({
  number,
  title,
  subtitle,
  children,
}: {
  number: number;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <span
        style={{
          display: "inline-block",
          padding: "0.375rem 1rem",
          borderRadius: "9999px",
          backgroundColor: colors.secondaryContainer,
          color: colors.onSecondaryContainer,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        Chapter {number}
      </span>
      <h2
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: colors.onSurface,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.primary,
          marginBottom: "1.5rem",
        }}
      >
        {subtitle}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          color: colors.secondary,
          fontSize: "1.0625rem",
          lineHeight: 1.8,
          maxWidth: "44rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote
      style={{
        borderLeft: `4px solid ${colors.tertiary}`,
        paddingLeft: "1.5rem",
        margin: "1rem 0",
        fontStyle: "italic",
        color: colors.secondary,
        fontSize: "1.125rem",
        lineHeight: 1.6,
      }}
    >
      "{text}"
      <footer
        style={{
          marginTop: "0.75rem",
          fontStyle: "normal",
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.tertiary,
        }}
      >
        — {author}
      </footer>
    </blockquote>
  );
}

function PointList({ items }: { items: { term: string; detail: string }[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
      {items.map(({ term, detail }) => (
        <li key={term} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ color: colors.primary, fontSize: "1.25rem", flexShrink: 0, marginTop: "0.2rem" }}
          >
            check_circle
          </span>
          <span>
            <strong style={{ color: colors.onSurface }}>{term}</strong> {detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Emphasis({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontWeight: 700, color: colors.onSurface, fontSize: "1.125rem", lineHeight: 1.6 }}>{children}</p>
  );
}

const pathways = [
  "University",
  "PLC Course",
  "Apprenticeship",
  "Traineeship",
  "Employment",
  "Entrepreneurship",
  "Travel & Gap Year",
  "Creative Paths",
  "Volunteering",
];

const myths = [
  { myth: "University is the only path to success.", truth: "There are many respected, rewarding careers that don't require a degree." },
  { myth: "Good points are everything.", truth: "Confidence, skills and experience matter just as much to employers." },
  { myth: "Apprenticeships are only for academic underachievers.", truth: "Apprenticeships build real skills, earn while you learn and lead to excellent careers." },
  { myth: "Once you choose a path, you're stuck.", truth: "People change direction all the time — it's a sign of growth, not failure." },
  { myth: "Everyone else knows what they're doing.", truth: "Many young people feel unsure — you're not alone." },
];

export default function ParentsGuideBeyondThePoints() {
  useEffect(() => {
    setPageMeta(
      "Beyond the Points: A Parent's Guide to Your Teen's Next Step",
      "Worried about what comes after the Leaving Cert? A free guide for Irish parents — the pathways available, and how to support your teenager without adding pressure."
    );
  }, []);

  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: "Inter, sans-serif" }}>
      <Nav />

      <main style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Hero */}
          <header style={{ marginBottom: "3rem" }}>
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
              Free Guide for Parents
            </span>
            <h1
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                fontWeight: 800,
                color: colors.onSurface,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Beyond the Points: A Parent's Guide to Your Teenager's Next Step
            </h1>
            <p style={{ fontSize: "1.25rem", color: colors.secondary, lineHeight: 1.7 }}>
              Watching your teenager face the end of school — and all the decisions that come with it — is one of the
              hardest parts of parenting. This guide walks through the pathways available in Ireland today, the myths
              worth letting go of, and how to support your teen without adding to the pressure.
            </p>
          </header>

          <Chapter number={1} title="The Changing World of Education" subtitle="Why looking beyond the CAO matters">
            <p>
              When many of us were in school, the pathway ahead often felt simple: work hard, get good points, go to
              university and build a career. That route worked for many people and it still does.
            </p>
            <p>
              But today's world is very different. New industries are emerging, technology is transforming the way we
              work and the skills employers need are constantly evolving.
            </p>
            <p>There are now more opportunities than ever before — and not all of them begin with a traditional degree.</p>
            <p>
              The CAO is just one option among many. Apprenticeships, PLC courses, traineeships, work experience,
              further training and direct employment can all lead to rewarding and successful careers.
            </p>
            <p>
              What matters most is finding the pathway that suits your teenager's strengths, interests and goals — not
              simply following the path that others expect.
            </p>
            <Emphasis>Because the most successful journeys are the ones that reflect who your child really is.</Emphasis>
            <Quote text="The future belongs to those who believe in the beauty of their dreams." author="Eleanor Roosevelt" />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Many parents worry that if their teenager doesn't go to university, they will miss out on a successful
                future. The truth is, there are many ways to build a fulfilling life.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                My role is to help families see all the possibilities — and find the one that feels right for them.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={2} title="Explore the Many Pathways" subtitle="There is more than one way to succeed">
            <p>
              Gone are the days when a university degree was seen as the only route to a successful future. Today, there
              are many recognised and respected pathways that can lead to rewarding careers and fulfilling lives.
            </p>
            <p>
              The key is understanding the options available so your teenager can make informed choices that suit their
              strengths, interests and goals.
            </p>
            <p>
              Every pathway offers unique benefits and opportunities. Some provide hands-on experience early. Some
              combine learning with paid work. Others offer flexible routes into further study.
            </p>
            <p>There isn't a "best" pathway — only the one that's best for your child.</p>

            <div
              style={{
                backgroundColor: colors.surfaceContainerLowest,
                borderRadius: "1rem",
                padding: "1.75rem",
                boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
              }}
            >
              <p
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
                Pathways worth knowing about
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {pathways.map((p) => (
                  <span
                    key={p}
                    style={{
                      backgroundColor: colors.surfaceContainerLow,
                      color: colors.secondary,
                      padding: "0.5rem 1rem",
                      borderRadius: "9999px",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <Emphasis>
              When young people understand their options, they can choose with confidence and take ownership of their
              future.
            </Emphasis>
            <Quote text="The beautiful thing about learning is that no one can take it away from you." author="B.B. King" />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Too many teenagers don't realise the full range of opportunities available to them. My role is to open
                the door to those possibilities and help them see a future that excites and motivates them.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                Sometimes, it just takes the right conversation to spark a new idea and a brighter future.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={3} title="Communication Makes a Difference" subtitle="How to have conversations that help, not hinder">
            <p>
              Talking about the future can feel daunting for both parents and teenagers. It's easy for conversations to
              turn into debates or place pressure on your teenager to have all the answers.
            </p>
            <p>
              The goal isn't to push them towards a particular path — it's to create a supportive space where they feel
              comfortable exploring their options.
            </p>
            <p>
              Start by listening. Ask open questions. Show genuine interest in their thoughts, ideas and concerns.
            </p>
            <p>
              Avoid jumping in with your own solutions. Instead, guide them to think about what matters to them.
            </p>
            <p>
              When teenagers feel heard, they are more likely to open up, build confidence and make decisions that
              reflect who they truly are.
            </p>
            <Emphasis>Good conversations today can lead to confident decisions tomorrow.</Emphasis>
            <Quote text="The most important thing in communication is hearing what isn't said." author="Peter Drucker" />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                The best conversations happen when we create space for our teenagers to share their thoughts without
                fear of judgement. You might not always agree with their ideas — and that's okay.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                Your role is to listen, support and help them explore the possibilities, not to choose for them.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={4} title="Breaking the Myths That Hold Us Back" subtitle="Let's leave old beliefs behind">
            <p>Many of the decisions we make for our teenagers are shaped by beliefs we grew up with.</p>
            <p>
              Some of those beliefs were helpful in the past — but today they can limit our children's choices and
              create unnecessary pressure.
            </p>
            <p>
              By letting go of outdated myths, we can open the door to new possibilities and help our teenagers build
              futures that are right for them.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {myths.map(({ myth, truth }) => (
                <div
                  key={myth}
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    borderRadius: "0.875rem",
                    padding: "1.5rem",
                    boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: colors.tertiary,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Myth
                  </p>
                  <p style={{ color: colors.onSurface, fontWeight: 600, marginBottom: "1rem", fontSize: "1.0625rem" }}>
                    {myth}
                  </p>
                  <p
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: colors.primary,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Truth
                  </p>
                  <p style={{ color: colors.secondary, fontSize: "1rem", lineHeight: 1.7 }}>{truth}</p>
                </div>
              ))}
            </div>

            <Emphasis>
              When we challenge these myths, we give our teenagers the freedom to explore, discover and create their own
              path.
            </Emphasis>
            <Quote
              text="Sometimes the biggest thing we can do for our children is to stop living our dreams through them — and start believing in theirs."
              author="Steve Maraboli"
            />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Old myths can keep us feeling stuck. New possibilities begin the moment we choose to see our teenagers
                for who they are — not who we thought they should be.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                Believe in their potential, not your expectations.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={5} title="Supporting Your Teen Without Pushing" subtitle="The power of encouragement and trust">
            <p>
              As parents, it's natural to want the best for our children. We want to guide them, protect them from
              mistakes and help them make the right decisions.
            </p>
            <p>
              But when it comes to choosing a pathway after school, too much pressure can have the opposite effect.
            </p>
            <p>
              Teenagers need space to explore, make choices and learn from the process — with your support, not your
              expectations.
            </p>
            <PointList
              items={[
                { term: "Encourage, don't pressure.", detail: "Let them know you believe in them no matter what path they choose." },
                { term: "Ask, don't assume.", detail: "Ask questions to understand their interests, worries and dreams." },
                { term: "Listen with an open mind.", detail: "Avoid judgement and show respect for their ideas, even if they're different from yours." },
                { term: "Focus on strengths, not weaknesses.", detail: "Help them recognise what they're good at and what they enjoy." },
                { term: "Build their confidence.", detail: "Remind them that setbacks are part of the journey." },
                { term: "Be their safe space.", detail: "Let them know they can come to you, without fear of criticism." },
              ]}
            />
            <Emphasis>
              When we support with trust and understanding, our teenagers gain the confidence to follow their own path.
            </Emphasis>
            <Quote text="A teenager who feels supported will always go further than one who feels pushed." author="Unknown" />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                The most valuable thing we can give our teenagers is not the perfect plan — it's the confidence to
                believe in themselves. Your support helps them feel safe to explore, make decisions and create a future
                that feels right for them.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                You don't have to have all the answers — you just have to be their biggest cheerleader.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={6} title="Building Confidence in Your Teen" subtitle="Helping them believe in their own potential">
            <p>
              Confidence is one of the most powerful tools a teenager can have. It helps them take risks, try new things
              and keep going when challenges arise.
            </p>
            <p>
              Many teenagers doubt themselves, especially when they feel pressure to follow someone else's path or
              compare themselves to their peers.
            </p>
            <p>
              As parents, we can help build their confidence by recognising their strengths and reminding them of their
              potential.
            </p>
            <PointList
              items={[
                { term: "Celebrate their strengths.", detail: "Notice what they are good at and acknowledge their efforts." },
                { term: "Praise the process, not just the result.", detail: "Focus on effort, learning and improvement, not perfection." },
                { term: "Encourage them to take small steps.", detail: "Small wins build momentum and belief." },
                { term: "Be their biggest cheerleader.", detail: "Your belief in them can make all the difference." },
                { term: "Allow them to learn from mistakes.", detail: "Mistakes are part of growth and help build resilience." },
              ]}
            />
            <Emphasis>When teenagers believe in themselves, they are more likely to believe in their future.</Emphasis>
            <Quote text="You are braver than you believe, stronger than you seem and smarter than you think." author="A.A. Milne" />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Teenagers don't need perfect parents. They need parents who notice their potential, encourage their
                dreams and remind them that they are capable of amazing things.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                Your encouragement today can become the confidence they carry with them for life.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={7} title="Working With a Coach" subtitle="Why support and guidance can change everything">
            <p>
              Making decisions about the future can feel overwhelming for teenagers. There are so many options, so much
              information and so much pressure to get it "right".
            </p>
            <p>
              A coach provides a safe, supportive space where your teen can explore their strengths, identify what
              matters to them and create a plan for the future that feels right.
            </p>
            <p>
              Coaching isn't about telling them what to do — it's about empowering them to discover their own answers.
            </p>
            <PointList
              items={[
                { term: "Gain clarity.", detail: "Understand their options and what aligns with their strengths, interests and values." },
                { term: "Build confidence.", detail: "Feel more self-assured about their abilities and future choices." },
                { term: "Set meaningful goals.", detail: "Create realistic, inspiring goals that give direction and purpose." },
                { term: "Make informed decisions.", detail: "Explore all pathways and pick the one that's right for them, not someone else." },
                { term: "Overcome obstacles.", detail: "Develop resilience and problem-solving skills to handle challenges." },
                { term: "Feel supported every step of the way.", detail: "Know they have someone in their corner who listens and believes in them." },
              ]}
            />
            <Emphasis>
              With the right support, your teenager can move forward with confidence, clarity and excitement for their
              future.
            </Emphasis>
            <Quote
              text="A coach doesn't walk the path for you. They walk beside you, helping you discover the path that's right for you."
              author="Unknown"
            />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Sometimes teenagers just need space to think, someone to listen and the right questions to help them see
                what's possible. Coaching can be the turning point that helps them step into their future with
                confidence and purpose.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                You don't have to have all the answers — a coach can help them find theirs.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={8} title="Creating a Roadmap for Your Teen's Future" subtitle="Turning ideas into action with confidence">
            <p>
              Once your teen has explored their interests, strengths and pathways, the next step is to put it all
              together and create a clear, practical plan for their future.
            </p>
            <p>
              A roadmap gives them focus, motivation and the confidence to take the next steps — knowing they are
              working towards a future that truly suits them.
            </p>
            <p>
              This isn't about rushing them into a decision, but about helping them see the possibilities, build a plan
              and feel supported as they move towards their goals.
            </p>
            <PointList
              items={[
                { term: "Reflect on their goals.", detail: "Help your teen clarify what they want for their future — work, study or a combination." },
                { term: "Explore their options.", detail: "Research different pathways and opportunities, from university and apprenticeships to enterprise and creative careers." },
                { term: "Set short, medium and long-term goals.", detail: "Break the journey into smaller steps so it feels achievable." },
                { term: "Take action.", detail: "Create a plan together with clear next steps, dates and resources for support." },
                { term: "Review and adjust.", detail: "Life changes and interests evolve — keep the plan flexible and open to new opportunities." },
              ]}
            />
            <Quote
              text="A good roadmap doesn't limit your teen's choices — it helps them see where they can go and how to get there."
              author="Angela O'Sullivan"
            />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                When your teen has a clear roadmap, they feel more in control, more motivated and much more confident in
                their decisions. It's about giving them the space to dream, the tools to plan and the encouragement to
                take action — at their own pace.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                Your support can make all the difference in turning their potential into reality.
              </p>
            </AngelaInsight>
          </Chapter>

          <Chapter number={9} title="Taking Action Together" subtitle="Practical steps to move forward as a team">
            <p>
              Once you have explored options, challenged myths and uncovered strengths and interests, it's time to take
              action.
            </p>
            <p>A plan brings clarity, reduces overwhelm and helps turn ideas into real steps forward.</p>
            <p>
              Remember — it's not about having everything figured out today. It's about taking the next right step.
            </p>
            <PointList
              items={[
                { term: "Reflect on what matters most.", detail: "Look back at what they enjoy, what they're good at and what's important to them." },
                { term: "Research the options.", detail: "Explore the pathways that match their interests and values — ask questions, attend events, visit websites." },
                { term: "Talk to people in the field.", detail: "Encourage them to speak with people doing the work — real conversations bring real insight." },
                { term: "Make a simple action plan.", detail: "Break big goals into small, manageable steps. Write down what they'll do first." },
                { term: "Take the first step.", detail: "Action builds momentum. Even small steps create movement and confidence." },
                { term: "Review and adjust.", detail: "Check in regularly, celebrate wins and be open to changes along the way." },
              ]}
            />
            <Emphasis>
              When parents and teens work together as a team, plans become progress and dreams become possible.
            </Emphasis>
            <Quote
              text="The best plans aren't about having all the answers today. They're about taking the next step — together."
              author="Unknown"
            />
            <AngelaInsight>
              <p style={{ marginBottom: "0.75rem" }}>
                Action doesn't have to be big and dramatic. The most powerful changes come from small, consistent steps
                taken with courage and support.
              </p>
              <p style={{ fontWeight: 700, color: colors.onSurface }}>
                You don't have to do it all at once. You just have to start.
              </p>
            </AngelaInsight>
          </Chapter>

          <DiscoveryCallCTA
            heading="When the conversation keeps going in circles"
            source="parents-guide"
            footnote="A relaxed conversation about where things stand. No obligation to book anything further."
          >
            <p>
              You've read the options. You know the pressure isn't helping. And still, every attempt to talk about it at
              home turns into the same stand-off.
            </p>
            <p>
              That's not a failure of parenting. It's that you're too close to it — you have a stake in the answer, and
              your teenager knows it, so every question lands as pressure however carefully you phrase it.
            </p>
            <p>
              A neutral third party changes that completely. Coaching gives a young person space to work out what they
              actually want, with someone who isn't invested in the answer. Most families find the temperature at home
              drops within a few weeks.
            </p>
            <p>It isn't therapy, and it isn't a replacement for your school's guidance counsellor. It works alongside both.</p>
          </DiscoveryCallCTA>

          <GuideDownloadForm
            source="parents-guide"
            pdfFilename={GUIDES["parents-guide"].pdfFilename!}
            description="Prefer to read it later, or print it out? Send yourself the full illustrated guide as a PDF."
          />

          <GuideCrossLinks current="parents-guide" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

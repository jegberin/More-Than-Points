import { Link } from "wouter";
import { ArticleSection, ArticleSubsection, Standfirst } from "@/components/article/ArticleSection";
import KeyDates from "@/components/article/KeyDates";
import QuestionBlock from "@/components/article/QuestionBlock";
import DiscoveryCallCTA from "@/components/DiscoveryCallCTA";
import ArticleDisclaimer from "@/components/article/ArticleDisclaimer";

export default function LeavingCertResults2026() {
  return (
    <>
      <Standfirst>
        <p>
          Leaving Cert results are released on Friday, 21 August 2026. For many families, it will be a day of
          celebration, but for others it may bring disappointment, uncertainty and a lot of questions about what
          happens next.
        </p>
        <p>
          If your teenager does not get the results or CAO points they were hoping for, it can feel as though the plan
          they had has suddenly disappeared. It hasn't, but they may need a little time before they are ready to hear
          that. They could be disappointed, embarrassed, worried about what their friends are doing, or afraid that
          they have let you down.
        </p>
        <p>
          As a parent, your instinct may be to start looking for solutions straight away. You may want to check points,
          courses and alternative options immediately, but that does not always need to be the first conversation. Give
          them time to take in their results and let them know that you are there to help when they are ready. There
          will be time to work through the options properly.
        </p>
      </Standfirst>

      <ArticleSection title="What happens after Leaving Cert results?">
        <p>There are a few days between Leaving Cert results and the first main round of CAO offers.</p>

        <KeyDates
          heading="The week ahead"
          items={[
            { date: "Fri 21 Aug", isoDate: "2026-08-21", label: "Leaving Cert results are released" },
            { date: "Wed 26 Aug", isoDate: "2026-08-26", label: "CAO Round One offers", detail: "Released at 2pm." },
            {
              date: "Tue 1 Sep",
              isoDate: "2026-09-01",
              label: "Deadline for accepting Round One offers",
              detail: "3pm. Further rounds continue throughout September.",
            },
          ]}
        />

        <p>
          This means that the results your teenager receives today do not tell them exactly what course they will or
          will not be offered. The few days between results and Round One are a good opportunity to understand where
          things stand and look at the options without rushing into decisions.
        </p>
      </ArticleSection>

      <ArticleSection title="What if my teenager doesn't get the CAO points they need?">
        <p>
          This is one of the biggest concerns for parents at this time of year, but it is important to remember that
          last year's points are only a guide. They do not guarantee what the points will be for a course in 2026.
        </p>
        <p>
          CAO points are based on supply and demand, so being below last year's figure does not automatically mean your
          teenager will miss out on a place. It is worth waiting for the actual offers before assuming the worst.
        </p>
        <p>
          If they do not receive the course they wanted in Round One, there may still be offers in later rounds. At the
          same time, this is a good point to start looking at some of the other routes available, particularly if the
          original plan is no longer looking realistic or if your teenager is beginning to question whether it was the
          right choice in the first place.
        </p>
      </ArticleSection>

      <ArticleSection title="The CAO is not the only option">
        <p>
          For many parents, the route after school was presented as fairly straightforward: Leaving Cert, CAO,
          university and then a career. That is still the right route for many young people, but there are now far more
          options available.
        </p>
        <p>
          Depending on what your teenager wants to do, they may be able to choose from university, PLC courses,
          apprenticeships, traineeships, further education, tertiary degree programmes or direct employment.
        </p>
        <p>
          Rather than focusing only on whether they can get into university, it is worth looking at what they are
          interested in, how they learn, what they are good at and what they actually want to do afterwards. A course
          can look good on paper and still be completely wrong for the person taking it.
        </p>

        <ArticleSubsection title="University">
          <p>
            University is a good option for students who enjoy academic learning and for careers where a degree is
            required, but getting enough points for a course does not automatically make it the right choice.
          </p>
          <p>
            Before accepting a place, encourage your teenager to think about whether they are genuinely interested in
            the subject, whether they can see themselves studying it for several years and whether it leads towards
            something they actually want to do.
          </p>
          <p>
            Students sometimes choose a course because they have the points for it, because their friends are going, or
            because university feels like the expected next step. Those are understandable reasons, but they are not
            always enough to sustain someone through three or four years of study.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="PLC courses">
          <p>
            Post-Leaving Certificate courses can be a very useful option for students who did not get the points they
            hoped for or who are still unsure about what they want to study.
          </p>
          <p>
            A PLC gives a young person the chance to explore an area they are interested in, gain a qualification and,
            depending on the course, potentially progress into higher education afterwards. For some students, that
            extra year also gives them more confidence and a much clearer idea of what they want to do next.
          </p>
          <p>
            If your teenager is considering a PLC, check the progression options attached to the individual course.
            They vary, so it is important to understand exactly what opportunities the course may open up afterwards.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="Apprenticeships">
          <p>
            For a young person who learns better by doing, an apprenticeship may suit them much better than spending
            several more years mainly in a classroom or lecture hall.
          </p>
          <p>
            Apprenticeships combine employment with structured learning and lead to recognised qualifications. They are
            also no longer limited to the traditional trades, with options now available across a much wider range of
            industries and professions.
          </p>
          <p>
            This is where it can be useful to think beyond school results and consider how your teenager actually
            learns. Someone who struggled with classroom-based learning may do very well when they can apply what they
            are learning in a practical setting.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="Traineeships and further education">
          <p>
            Traineeships and other further-education programmes can offer another route into employment or further
            study. They often combine learning with practical or workplace experience and can help young people build
            specific skills before deciding what they want to do next.
          </p>
          <p>
            For someone who is not ready to commit to a three or four-year degree, a shorter programme may be a much
            better fit. It gives them the chance to gain experience, build confidence and make a more informed decision
            about what comes next.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="Tertiary degree programmes">
          <p>
            Tertiary degree programmes are another option worth knowing about, particularly for students who want to
            work towards a degree but may not have the CAO points they expected.
          </p>
          <p>
            These programmes allow students to begin their studies in a further-education setting and then progress to
            a higher-education institution as part of the programme. They can therefore provide another route towards a
            degree without relying solely on the traditional CAO points route.
          </p>
          <p>
            The entry requirements and progression arrangements vary by programme, so families should check the details
            carefully before applying.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="Going directly into employment">
          <p>
            Going straight into work does not mean giving up on education. For some young people, working first can
            help them understand what they enjoy, what they are good at and what kind of career they might want.
          </p>
          <p>
            They can build practical experience, confidence and workplace skills, and return to education or training
            later if that makes sense for them. There is no requirement to complete every qualification straight after
            school, and plenty of people return to education, retrain or change direction later in life.
          </p>
        </ArticleSubsection>

        <ArticleSubsection title="Entrepreneurship and other career paths">
          <p>
            Some young people are naturally creative, independent or entrepreneurial and may be interested in a path
            that does not fit neatly into the traditional university route.
          </p>
          <p>
            That does not mean education or training is irrelevant. It may simply mean that they need a different
            combination of qualifications, practical experience, mentoring and support. The important thing is to
            understand what they want to work towards and what they will realistically need to get there.
          </p>
        </ArticleSubsection>
      </ArticleSection>

      <ArticleSection title="If the original plan changes">
        <p>
          Not getting a particular CAO course can feel like a major setback, especially when friends are receiving
          offers and seem to know exactly what they are doing. It is easy for a young person to feel that they are
          being left behind.
        </p>
        <p>
          In reality, people reach the same careers in very different ways. Someone may start with a PLC and later
          progress to university. Another person may discover that an apprenticeship suits them far better. Someone
          else may work for a year before deciding what they want to study.
        </p>
        <p>
          A change of plan can still lead to the same career, or it may lead to something that suits them better than
          the original choice. If it would help to have the options laid out in one place, my free guide{" "}
          <Link to="/guides/parents-guide-beyond-the-points">
            Beyond the Points: A Parent's Guide to Your Teenager's Next Step
          </Link>{" "}
          walks through the pathways, and the conversations around them, in more detail.
        </p>
      </ArticleSection>

      <ArticleSection title="Five questions worth asking">
        <p>
          If your teenager is unsure what to do next, it can help to move the conversation away from points and course
          lists for a while and focus on a few more useful questions.
        </p>

        <QuestionBlock number={1} question="What do you genuinely enjoy?">
          <p>
            Not just which subjects gave them the highest grades. What actually interests them? What do they enjoy
            doing, reading about or spending time on?
          </p>
        </QuestionBlock>

        <QuestionBlock number={2} question="What are you good at?">
          <p>
            Think beyond academic results. They may be strong at communication, organisation, practical tasks,
            problem-solving, technology, creativity or working with people.
          </p>
        </QuestionBlock>

        <QuestionBlock number={3} question="How do you prefer to learn?">
          <p>
            Do they enjoy studying and researching, or do they learn better by doing? Would they prefer a practical
            setting, a workplace, a classroom, or a mix of different approaches?
          </p>
          <p>
            If they are not sure, the free{" "}
            <Link to="/guides/learning-style-quiz">learning style quiz</Link> takes about three minutes and gives them
            a starting point to talk from.
          </p>
        </QuestionBlock>

        <QuestionBlock number={4} question="What kind of setting brings out the best in you?">
          <p>
            Some young people thrive in academic environments. Others are much more confident when learning is
            practical and connected to real work.
          </p>
        </QuestionBlock>

        <QuestionBlock number={5} question="What matters to you?">
          <p>
            That might be job security, creativity, helping people, independence, travel, earning while learning or
            eventually running a business.
          </p>
        </QuestionBlock>

        <p>
          These answers can give you a much clearer sense of which options are worth exploring than a points total on
          its own.
        </p>
      </ArticleSection>

      <ArticleSection title="Supporting your teenager without making the decision for them">
        <p>
          Parents naturally want to help, especially when their child is disappointed or unsure. You can help them
          research the options, ask questions and understand what each choice actually involves, but they also need to
          feel that the decision is theirs.
        </p>
        <p>
          Listen to what they are worried about and what they are interested in, even if their idea of a successful
          future looks different from the one you had imagined for them. Help them recognise their strengths and make
          sure they know that being unsure or changing their mind is not a problem.
        </p>
        <p>
          They do not need to have their entire future decided this week. They just need to work out what the next
          sensible step is. There is more on this in the{" "}
          <Link to="/for-parents">guidance for parents</Link>.
        </p>
      </ArticleSection>

      <ArticleSection title="Practical CAO dates for 2026">
        <p>If your teenager has applied through CAO, the main dates to keep in mind are:</p>

        <KeyDates
          items={[
            { date: "21 Aug", isoDate: "2026-08-21", label: "Leaving Cert results" },
            { date: "26 Aug", isoDate: "2026-08-26", label: "CAO Round One offers", detail: "2pm" },
            { date: "1 Sep", isoDate: "2026-09-01", label: "Round One acceptance deadline", detail: "3pm" },
            { date: "7 Sep", isoDate: "2026-09-07", label: "CAO Round Two offers", detail: "2pm" },
            { date: "9 Sep", isoDate: "2026-09-09", label: "Round Two acceptance deadline", detail: "3pm" },
          ]}
          footnote="Further rounds continue during September, with the 2026 CAO offer season scheduled to finish on 1 October. Always check the CAO website directly before acting on a deadline, as dates and arrangements can change."
        />
      </ArticleSection>

      <ArticleSection title="A final word to parents">
        <p>
          If your teenager has not received the results they hoped for, give them a little time before trying to solve
          everything. Once the initial disappointment has settled, start looking properly at what is available.
        </p>
        <p>
          There may be another route into the career they are interested in. A PLC, apprenticeship, tertiary programme
          or further-education course may suit them better than the original plan. They may decide to work for a while,
          or they may discover an option they had not considered before.
        </p>
      </ArticleSection>

      <DiscoveryCallCTA
        heading="Worried about what comes next for your teenager?"
        source="leaving-cert-results-2026"
        footnote="A relaxed conversation about where things stand. No obligation to book anything further."
      >
        <p>
          At More Than Points, I work with young people and their parents to look at their strengths, interests,
          learning style and the options available, so they can make a decision that feels realistic and right for
          them.
        </p>
        <p>
          If you are worried about what comes next for your teenager and would like some guidance, please get in touch.
          I would be happy to talk through the options with you and see how I may be able to help.
        </p>
      </DiscoveryCallCTA>

      <ArticleDisclaimer>
        This article provides general guidance. CAO dates and procedures should always be checked directly with the
        CAO, and individual course entry and progression requirements should be confirmed with the relevant education
        or training provider.
      </ArticleDisclaimer>
    </>
  );
}

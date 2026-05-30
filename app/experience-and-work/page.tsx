import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "How Early Experiences Shape Work",
  description:
    "Understand how early life experiences can influence workplace behavior, trust, and stress responses — with hope and trusted sources.",
};

export default function ExperienceAndWorkPage() {
  return (
    <>
      <PageHeader
        title="How Early Experiences Shape Work"
        description="Understanding the connection between your roots and workplace life — with context, encouragement, and trusted sources."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="What are early life experiences?"
          index={0}
          sources={[
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
            {
              name: "CDC — ACE Study",
              url: "https://www.cdc.gov/violenceprevention/aces/index.html",
            },
          ]}
        >
          <p>
            Early life experiences are events from childhood that can shape how we
            respond to stress later on — including relationships with parents,
            caregivers, teachers, and other adults who held power over us. Research on
            childhood experiences (often called ACEs in studies) looks at hardships,
            family changes, neglect, loss, and other difficult events before age 18.
          </p>
          <p>
            The CDC-Kaiser ACE Study showed how common these experiences are. More
            than six in ten adults report at least one. Nearly one in six report four
            or more. These numbers tell us something important: if hard things happened
            when you were young, you are in vast company — not alone on the margins.
          </p>
          <p>
            Your past does not define your future. Many people build fulfilling careers
            with the right support and self-understanding. What happened is part of
            your story. It is not the whole story.
          </p>
        </ContentSection>

        <ContentSection
          title="Why work can feel different for you"
          index={1}
          source={{
            name: "NCTSN",
            url: "https://www.nctsn.org/",
          }}
        >
          <p>
            Workplaces run on hierarchy, evaluation, and social rules. For someone
            whose early years included unpredictable adults, harsh punishment, or
            emotional absence, these structures can touch something deep.
          </p>
          <p>
            A performance review might feel like a report card that determines your
            worth. A manager who cancels meetings without notice might remind you of
            adults who disappeared when you needed them. A crowded open office might
            leave you constantly scanning for danger, the way you did at home.
          </p>
          <p>
            None of this means you cannot succeed at work. It means your nervous system
            learned lessons early — lessons about staying safe — and those lessons still
            run in the background. Naming that connection is the first step toward
            working with it instead of against it.
          </p>
        </ContentSection>

        <ContentSection
          title="How experiences with authority figures can show up at work"
          index={2}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Building trust with supervisors</strong> — when past
              relationships with authority figures were uneven, it can take time to
              believe a manager is on your side. You might watch for signs of betrayal
              before you watch for signs of support.
            </li>
            <li>
              <strong>Heightened awareness in hierarchical settings</strong> —
              paying close attention in meetings, reviews, or email tone. Reading
              between every line. This vigilance kept you safe once. At work, it can
              be exhausting.
            </li>
            <li>
              <strong>Pausing during conflict</strong> — feedback or disagreement may
              lead to needing space, stepping back, or strong emotions before you
              regroup. This is not defiance. It is your system asking for time to feel
              safe again.
            </li>
            <li>
              <strong>High standards and self-questioning</strong> — wanting to do
              excellent work or prove your capabilities, sometimes to the point of
              burnout. You may hold yourself to rules no one else can see.
            </li>
            <li>
              <strong>Difficulty accepting praise</strong> — when kindness from
              authority figures was rare or came with strings attached, a genuine
              compliment can feel suspicious rather than good.
            </li>
            <li>
              <strong>People-pleasing or overworking</strong> — learning early that
              your safety depended on keeping adults happy can turn into saying yes to
              everything at work, even when you are already stretched thin.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="The science behind it — in plain language"
          index={3}
          source={{
            name: "NCBI / PubMed",
            url: "https://www.ncbi.nlm.nih.gov/",
          }}
        >
          <p>
            When children face ongoing stress or danger, their brains and bodies adapt.
            The parts of the brain that watch for threats become more active. The parts
            that help with planning, focus, and calming down can become less active
            during stress. This is not damage — it is adaptation. Your brain did what
            it needed to do to help you survive.
          </p>
          <p>
            In a workplace, this can show up as a strong reaction to feedback, needing
            quiet time under pressure, difficulty concentrating after a tense
            interaction, or feeling drained after social situations that others seem
            to handle easily.
          </p>
          <p>
            The good news: brains are flexible. New safe experiences — a kind manager,
            a supportive coworker, a job where you feel respected — can gradually
            teach your system that not every authority figure is a threat. This takes
            time, and it is not linear. But it is real.
          </p>
        </ContentSection>

        <ContentSection
          title="What your body might be telling you"
          index={4}
          sources={[
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
            { name: "Psychology Today", url: "https://www.psychologytoday.com/" },
          ]}
        >
          <p>
            Your body often knows something is wrong before your mind puts words to
            it. Learning to notice physical signals can help you take care of yourself
            at work before things escalate.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Tight chest or shallow breathing during meetings</li>
            <li>Stomach aches on Sunday night or before work</li>
            <li>Difficulty sleeping after a difficult interaction with a manager</li>
            <li>Headaches that appear during stressful weeks</li>
            <li>Feeling disconnected from your body — as if you are watching yourself from far away</li>
            <li>Sudden exhaustion after tasks that seem simple to others</li>
          </ul>
          <p>
            These signals are not weakness. They are communication. When you notice
            them, you can step away, breathe, reach out to someone you trust, or use
            the grounding tools described on our{" "}
            <a
              href="/getting-back-to-work"
              className="font-medium text-root-coral hover:underline"
            >
              Getting Back to Work
            </a>{" "}
            page.
          </p>
        </ContentSection>

        <ContentSection
          title="You are not alone — the numbers"
          index={5}
          source={{
            name: "CDC — Childhood Experiences Research",
            url: "https://www.cdc.gov/violenceprevention/aces/index.html",
          }}
        >
          <p>
            Research from the original ACE Study found that challenging early
            experiences are far more common than many people assume. A large portion
            of the population has at least one — yet millions of people with varied
            backgrounds build successful, meaningful careers.
          </p>
          <p>
            Supportive workplaces, thoughtful managers, and personal coping tools all
            make a measurable difference. You are capable. You are adapting. Growth is
            always possible — not because you need to become someone else, but because
            you are already someone worth investing in.
          </p>
        </ContentSection>

        <ContentSection
          title="What helps — starting today"
          index={6}
          sources={[
            { name: "NCTSN", url: "https://www.nctsn.org/" },
            { name: "CTIPP Toolkit", url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces" },
          ]}
        >
          <p>
            Understanding the connection between your early years and your work life
            is powerful — but understanding alone is not the whole journey. Here are
            practical starting points:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Notice your patterns without judging them. Awareness is the foundation
              everything else builds on.
            </li>
            <li>
              Seek workplaces that value clear communication, respect, and
              predictability. You deserve that.
            </li>
            <li>
              Build a support network outside of work — friends, counselors, mentors,
              or groups where you can be honest about hard days.
            </li>
            <li>
              Learn a few grounding techniques and practice them when you are calm, so
              they are available when you are not.
            </li>
            <li>
              Read our guides for{" "}
              <a href="/for-individuals" className="font-medium text-root-coral hover:underline">
                job seekers
              </a>{" "}
              and explore{" "}
              <a href="/common-questions" className="font-medium text-root-coral hover:underline">
                common questions
              </a>{" "}
              when you are ready.
            </li>
          </ul>
        </ContentSection>
      </div>
    </>
  );
}

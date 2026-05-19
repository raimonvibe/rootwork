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
            caregivers, and other adults. Research on childhood experiences (often
            called ACEs in studies) looks at hardships, family changes, and other
            events before age 18.
          </p>
          <p>
            The CDC-Kaiser ACE Study showed how common these experiences are and how
            they can influence health, relationships, and life outcomes over time.
            Your past does not define your future — many people build fulfilling
            careers with the right support and self-understanding.
          </p>
        </ContentSection>

        <ContentSection
          title="How experiences with authority figures can show up at work"
          index={1}
          source={{
            name: "WorkforceGPS & Psychology Today",
            url: "https://workforcegps.org/",
          }}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Building trust with supervisors</strong> — when past
              relationships with authority figures were uneven, it can take time to
              believe a manager is on your side.
            </li>
            <li>
              <strong>Heightened awareness in hierarchical settings</strong> —
              paying close attention in meetings, reviews, or email tone.
            </li>
            <li>
              <strong>Pausing during conflict</strong> — feedback or disagreement may
              lead to needing space, stepping back, or strong emotions before you
              regroup.
            </li>
            <li>
              <strong>High standards and self-questioning</strong> — wanting to do
              excellent work or prove your capabilities.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="The science behind it"
          index={2}
          source={{
            name: "NCBI / PubMed",
            url: "https://www.ncbi.nlm.nih.gov/",
          }}
        >
          <p>
            Early experiences can influence how the brain&apos;s stress-response
            system works — particularly areas involved in awareness, emotion
            regulation, and memory. In a workplace, this may show up as a strong
            reaction to feedback, needing focus time under pressure, or tiredness
            after social interactions.
          </p>
          <p>
            These responses are natural adaptations, not personal failings.
            Understanding them is often the first step toward choosing strategies
            that help you feel steadier and more capable at work.
          </p>
        </ContentSection>

        <ContentSection
          title="You are not alone — the numbers"
          index={3}
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
            Supportive workplaces, thoughtful managers, and personal coping tools
            all make a measurable difference. You are capable — you are adapting,
            and growth is always possible.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

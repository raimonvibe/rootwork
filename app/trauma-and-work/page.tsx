import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "How Trauma Affects Employment",
  description:
    "Understand how youth trauma and adverse childhood experiences shape workplace behavior and stress responses.",
};

export default function TraumaAndWorkPage() {
  return (
    <>
      <PageHeader
        title="How Trauma Affects Employment"
        description="Understanding the connection between early experiences and workplace challenges — with hope, context, and trusted sources."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="What is youth trauma?"
          index={0}
          source={{
            name: "SAMHSA & CDC ACE Study",
            url: "https://www.cdc.gov/violenceprevention/aces/index.html",
          }}
        >
          <p>
            Trauma refers to experiences that overwhelm a person&apos;s ability to
            cope — often leaving lasting effects on how the brain and body respond
            to stress. Adverse Childhood Experiences (ACEs) include abuse, neglect,
            household dysfunction, and other events that occur before age 18.
          </p>
          <p>
            The CDC-Kaiser ACE Study showed how common these experiences are and how
            they can affect health, relationships, and life outcomes over time. Having
            ACEs does not define your future — many people build fulfilling careers
            with the right support and self-understanding.
          </p>
        </ContentSection>

        <ContentSection
          title="How authority trauma specifically affects work"
          index={1}
          source={{
            name: "WorkforceGPS & Psychology Today",
            url: "https://workforcegps.org/",
          }}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Difficulty trusting supervisors</strong> — past harm from
              authority figures can make it hard to believe a manager has your best
              interests at heart.
            </li>
            <li>
              <strong>Hypervigilance in hierarchical settings</strong> — scanning for
              danger or criticism in meetings, reviews, or email tone.
            </li>
            <li>
              <strong>Freeze or flight during conflict</strong> — feedback or
              disagreement may trigger shutdown, avoidance, or sudden anger.
            </li>
            <li>
              <strong>Self-doubt and perfectionism</strong> — imposter feelings or
              overworking to prove worthiness.
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
            Trauma can change how the brain&apos;s stress-response system works —
            particularly areas involved in threat detection, emotion regulation, and
            memory. In a workplace, this may show up as a strong reaction to perceived
            criticism, difficulty concentrating under pressure, or exhaustion after
            social interactions.
          </p>
          <p>
            These responses are biological adaptations, not character flaws.
            Understanding them is often the first step toward choosing strategies
            that help you feel safer and more capable at work.
          </p>
        </ContentSection>

        <ContentSection
          title="You are not alone — the numbers"
          index={3}
          source={{
            name: "CDC Violence Prevention — ACEs",
            url: "https://www.cdc.gov/violenceprevention/aces/index.html",
          }}
        >
          <p>
            Research from the original ACE Study found that adverse childhood
            experiences are far more common than many people assume. A large portion
            of the population has at least one ACE — yet millions of people with
            trauma histories build successful, meaningful careers.
          </p>
          <p>
            Supportive workplaces, trauma-informed managers, and personal coping tools
            all make a measurable difference. You are not broken — you are adapting,
            and adaptation can change.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

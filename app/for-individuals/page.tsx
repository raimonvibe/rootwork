import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Practical strategies for navigating interviews, managers, and workplace dynamics with confidence.",
};

export default function ForIndividualsPage() {
  return (
    <>
      <PageHeader
        title="For Job Seekers"
        description="Practical guidance for navigating work when authority, feedback, or unpredictability need extra care and planning."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection title="Recognizing your stress points at work" index={0}>
          <p>
            Common workplace moments that deserve extra awareness include: unexpected
            meetings with managers, performance reviews, being cc&apos;d on critical
            emails, busy or noisy environments, and unclear expectations.
          </p>
          <p>
            Self-awareness tools — journaling after demanding days, noticing physical
            sensations (tight chest, racing thoughts), and identifying patterns — help
            you prepare and respond with intention when strong feelings arise.
          </p>
        </ContentSection>

        <ContentSection title="Practical strategies" index={1}>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Interviews:</strong> Request format details in advance, practice
              grounding (slow breath, feet on floor), and remember you are evaluating
              them too.
            </li>
            <li>
              <strong>Communicating needs:</strong> You can ask for written agendas,
              24-hour notice for feedback meetings, or quiet workspace — without
              sharing more than you choose.
            </li>
            <li>
              <strong>Building trust with supervisors:</strong> Start small — reliable
              follow-through on low-stakes tasks before sharing more personal context
              if you want to.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Strengths-based framing"
          index={2}
          source={{
            name: "National Fund for Workforce Solutions",
            url: "https://nationalfund.org/",
          }}
        >
          <p>
            Life experience can also build real strengths: resilience under pressure,
            empathy for colleagues, adaptability when things shift, and deep commitment
            when you feel psychologically safe. Framing your story as context — not a
            limitation — shifts how you show up in interviews and on the job.
          </p>
        </ContentSection>

        <ContentSection
          title="Support programs"
          index={3}
          sources={[
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
            { name: "NYEC", url: "https://nyec.org/" },
          ]}
        >
          <p>
            Programs like Mobility Mentoring (Center for Working Families), the
            National Youth Employment Coalition, and WorkforceGPS offer supportive
            workforce development resources. Explore our{" "}
            <a href="/resources" className="font-medium text-root-coral hover:underline">
              trusted sources page
            </a>{" "}
            for direct links.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

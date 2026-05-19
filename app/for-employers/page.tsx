import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "For Employers & HR",
  description:
    "Guidance on building welcoming hiring practices and supportive workplace cultures.",
};

export default function ForEmployersPage() {
  return (
    <>
      <PageHeader
        title="For Employers & HR"
        description="Creating workplaces where people from all backgrounds can contribute fully — and why it benefits your organization."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="What is a supportive workplace?"
          index={0}
          sources={[
            { name: "CTIPP", url: "https://ctipp.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            A supportive workplace recognizes that many employees bring varied life
            experiences that shape how they relate to hierarchy, feedback, and stress.
            SAMHSA&apos;s six principles — safety, trustworthiness, peer support,
            collaboration, empowerment, and cultural humility — provide a framework
            for policy and daily practice.
          </p>
          <p>
            The CTIPP Supportive Workplaces Toolkit (2025) offers actionable guidance
            for leaders implementing these ideas organization-wide.
          </p>
        </ContentSection>

        <ContentSection
          title="Welcoming hiring practices"
          index={1}
          source={{
            name: "NCBI Bookshelf — Supportive Workforce",
            url: "https://www.ncbi.nlm.nih.gov/books/",
          }}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>Reduce unnecessary power imbalances in interviews — explain the process upfront.</li>
            <li>Offer clear timelines and predictable next steps.</li>
            <li>Favor clear, respectful conversation over high-pressure formats when possible.</li>
            <li>Provide written job expectations and onboarding schedules from day one.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Supporting employees day-to-day" index={2}>
          <p>
            Psychological safety means people can ask questions, learn from mistakes,
            and raise concerns with confidence. Deliver feedback in private, focus on
            specific behaviors, and allow time to process before expecting immediate
            agreement.
          </p>
          <p>
            Harsh or discouraging criticism can shut people down and reduce
            performance — while clear, respectful feedback builds loyalty and growth.
          </p>
        </ContentSection>

        <ContentSection
          title="The business case"
          index={3}
          source={{
            name: "BSR",
            url: "https://www.bsr.org/",
          }}
        >
          <p>
            Supportive workplace practices correlate with reduced turnover, higher
            employee engagement, and access to a broader, more diverse talent pool.
            Investing in psychological safety is not only thoughtful — it is
            strategically sound.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

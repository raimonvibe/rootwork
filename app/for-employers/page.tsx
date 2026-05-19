import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "For Employers & HR",
  description:
    "Guidance on building trauma-informed hiring practices and supportive workplace cultures.",
};

export default function ForEmployersPage() {
  return (
    <>
      <PageHeader
        title="For Employers & HR"
        description="Creating workplaces where people with trauma histories can contribute fully — and why it benefits your organization."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="What is a trauma-informed workplace?"
          index={0}
          source={{
            name: "CTIPP & SAMHSA",
            url: "https://ctipp.org/",
          }}
        >
          <p>
            A trauma-informed workplace recognizes that many employees carry histories
            that affect how they experience hierarchy, feedback, and stress. SAMHSA&apos;s
            six principles — safety, trustworthiness, peer support, collaboration,
            empowerment, and cultural humility — provide a framework for policy and
            daily practice.
          </p>
          <p>
            The CTIPP Trauma-Informed Workplaces Toolkit (2025) offers actionable
            guidance for leaders implementing these ideas organization-wide.
          </p>
        </ContentSection>

        <ContentSection
          title="Trauma-informed hiring practices"
          index={1}
          source={{
            name: "NCBI Bookshelf — Trauma-Informed Workforce",
            url: "https://www.ncbi.nlm.nih.gov/books/",
          }}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>Reduce unnecessary power imbalances in interviews — explain the process upfront.</li>
            <li>Offer clear timelines and predictable next steps.</li>
            <li>Avoid trick questions or adversarial panel formats when possible.</li>
            <li>Provide written job expectations and onboarding schedules from day one.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Supporting employees day-to-day" index={2}>
          <p>
            Psychological safety means people can ask questions, admit mistakes, and
            raise concerns without fear of humiliation. Deliver feedback in private,
            focus on specific behaviors, and allow time to process before expecting
            immediate agreement.
          </p>
          <p>
            Shame-based criticism often re-triggers trauma responses and reduces
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
            Trauma-informed practices correlate with reduced turnover, higher employee
            engagement, and access to a broader, more diverse talent pool. Investing
            in psychological safety is not only ethical — it is strategically sound.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

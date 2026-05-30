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
          title="Why this matters for your organization"
          index={0}
          sources={[
            { name: "BSR", url: "https://www.bsr.org/" },
            { name: "CTIPP Toolkit", url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces" },
          ]}
        >
          <p>
            Many of your employees — likely more than you realize — carry difficult
            experiences from their early years. These experiences shape how they
            respond to feedback, authority, change, and stress. This is not a niche
            issue. It is a human one.
          </p>
          <p>
            Organizations that understand this retain talent longer, see higher
            engagement, and access a broader pool of capable, resilient workers.
            Supportive practices are not soft extras. They are strategic investments
            in your people and your bottom line.
          </p>
        </ContentSection>

        <ContentSection
          title="What is a supportive workplace?"
          index={1}
          sources={[
            { name: "CTIPP", url: "https://www.ctipp.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            A supportive workplace recognizes that employees bring varied life
            experiences that shape how they relate to hierarchy, feedback, and stress.
            SAMHSA&apos;s six principles provide a practical framework:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Safety</strong> — physical and emotional safety for everyone,
              every day
            </li>
            <li>
              <strong>Trustworthiness and transparency</strong> — clear
              communication, consistent follow-through, no surprises
            </li>
            <li>
              <strong>Peer support</strong> — coworkers who look out for each other,
              not just managers looking down
            </li>
            <li>
              <strong>Collaboration</strong> — shared decision-making, not top-down
              commands on everything
            </li>
            <li>
              <strong>Empowerment and choice</strong> — employees have a voice in how
              they do their work
            </li>
            <li>
              <strong>Cultural humility</strong> — recognizing that everyone&apos;s
              background shapes their experience, and meeting people where they are
            </li>
          </ul>
          <p>
            The CTIPP Supportive Workplaces Toolkit (2025) offers actionable guidance
            for leaders implementing these ideas at every level of an organization.
          </p>
        </ContentSection>

        <ContentSection
          title="Welcoming hiring practices"
          index={2}
          source={{
            name: "NCBI Bookshelf",
            url: "https://www.ncbi.nlm.nih.gov/books/",
          }}
        >
          <p>
            The hiring process is many people&apos;s first impression of your
            culture. For candidates with difficult early experiences, interviews can
            feel threatening rather than welcoming. Small changes make a large
            difference:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Explain the interview process upfront — who they will meet, how long it
              takes, what to expect
            </li>
            <li>
              Offer clear timelines and stick to them. Silence and uncertainty feel
              like rejection to someone who learned that waiting means abandonment.
            </li>
            <li>
              Favor clear, respectful conversation over high-pressure formats like
              rapid-fire questions or performative tasks
            </li>
            <li>
              Provide written job expectations and onboarding schedules from day one
            </li>
            <li>
              Train interviewers to avoid questions that probe personal hardship
              unnecessarily
            </li>
            <li>
              Offer accommodations during the interview itself — extra time, written
              questions in advance, a quiet waiting area
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Onboarding that builds safety"
          index={3}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            The first weeks of a job set the tone for everything that follows. For
            employees whose early years were unpredictable, a structured, warm
            onboarding can be the difference between thriving and leaving.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Assign a peer buddy — not just a manager — for the first 90 days</li>
            <li>Provide written guides for common tasks, tools, and unwritten rules</li>
            <li>Schedule regular check-ins that focus on learning, not evaluation</li>
            <li>Introduce new hires to the team gradually rather than all at once</li>
            <li>Make expectations explicit: what success looks like at 30, 60, and 90 days</li>
            <li>Normalize asking questions — managers should ask them too</li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Supporting employees day-to-day"
          index={4}
          sources={[
            { name: "CTIPP Toolkit", url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            Psychological safety means people can ask questions, learn from mistakes,
            and raise concerns without fear. This is especially important for
            employees who learned early that speaking up leads to punishment.
          </p>
          <p>
            Manager practices that make a real difference:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Deliver feedback in private, focused on specific behaviors — never
              character judgments
            </li>
            <li>
              Allow time to process before expecting immediate agreement or action
            </li>
            <li>
              Give advance notice before performance conversations — never spring
              reviews without warning
            </li>
            <li>
              Keep your word. If you say you will follow up Tuesday, follow up
              Tuesday. Broken promises confirm old fears.
            </li>
            <li>
              Notice when someone goes quiet, misses deadlines, or seems withdrawn —
              and ask with curiosity, not accusation
            </li>
            <li>
              Offer flexible arrangements when possible: quiet workspace, adjusted
              hours, remote days
            </li>
          </ul>
          <p>
            Harsh or public criticism shuts people down and reduces performance.
            Clear, respectful feedback builds loyalty and growth.
          </p>
        </ContentSection>

        <ContentSection
          title="Training managers to lead with care"
          index={5}
          source={{
            name: "CTIPP Toolkit",
            url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces",
          }}
        >
          <p>
            Most managers were never trained to recognize when an employee is
            struggling because of past experiences — or how their own behavior might
            trigger old pain. Training closes this gap.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Teach managers about stress responses and why some employees react
              strongly to feedback or change
            </li>
            <li>
              Practice de-escalation: what to do when an employee shuts down, leaves
              the room, or becomes visibly upset
            </li>
            <li>
              Emphasize consistency and predictability as leadership tools, not
              rigidity
            </li>
            <li>
              Include self-care training for managers themselves — leading with care
              requires emotional capacity
            </li>
            <li>
              Share the CTIPP toolkit with leadership teams as a starting point for
              organization-wide conversation
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Workplace adjustments that cost little"
          index={6}
          source={{
            name: "Job Accommodation Network (JAN)",
            url: "https://askjan.org/",
          }}
        >
          <p>
            Many supportive adjustments require no budget — just awareness and
            willingness. The Job Accommodation Network documents hundreds of
            low-cost or no-cost options:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Written summaries after verbal meetings</li>
            <li>Agendas shared before one-on-ones</li>
            <li>Flexible break schedules</li>
            <li>Desk relocation to a quieter area</li>
            <li>Permission to use headphones for focus time</li>
            <li>Modified communication preferences (email over impromptu visits)</li>
          </ul>
          <p>
            When employees ask for these things, treat the request as professional —
            not personal. They are telling you how to help them succeed.
          </p>
        </ContentSection>

        <ContentSection
          title="The business case"
          index={7}
          source={{
            name: "BSR",
            url: "https://www.bsr.org/",
          }}
        >
          <p>
            Supportive workplace practices correlate with reduced turnover, higher
            employee engagement, lower absenteeism, and access to a broader, more
            diverse talent pool. Employees who feel safe stay longer, work harder, and
            recommend their employer to others.
          </p>
          <p>
            Investing in psychological safety is not only the right thing to do for
            your people — it is strategically sound for your organization. The cost
            of replacing an employee who leaves because they felt unsafe or
            disrespected far exceeds the cost of training a manager to give feedback
            with care.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

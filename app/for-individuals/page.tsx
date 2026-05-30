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
        <ContentSection
          title="You belong in the workforce"
          index={0}
          sources={[
            { name: "National Fund for Workforce Solutions", url: "https://nationalfund.org/" },
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
          ]}
        >
          <p>
            Looking for work after a difficult start in life takes a kind of courage
            that job listings never mention. You might feel behind, or unsure whether
            anyone would want to hire you, or afraid that the workplace will reopen
            old wounds.
          </p>
          <p>
            Here is what we want you to know: you belong. Not someday, when you have
            figured everything out — but now, as you are. The workforce needs people
            who understand struggle, who notice when others are hurting, who keep
            going when things get hard. That is you.
          </p>
        </ContentSection>

        <ContentSection
          title="Recognizing your stress points at work"
          index={1}
          source={{
            name: "NCTSN",
            url: "https://www.nctsn.org/",
          }}
        >
          <p>
            Common workplace moments that deserve extra awareness include: unexpected
            meetings with managers, performance reviews, being cc&apos;d on critical
            emails, busy or noisy environments, unclear expectations, and being put on
            the spot in group settings.
          </p>
          <p>
            Self-awareness tools help you prepare and respond with intention when
            strong feelings arise:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Journaling</strong> — after demanding days, write a few lines
              about what happened and how your body felt. Patterns emerge over weeks.
            </li>
            <li>
              <strong>Body check-ins</strong> — notice physical sensations: tight
              chest, racing thoughts, clenched jaw, shallow breath. These are early
              warning signs, not failures.
            </li>
            <li>
              <strong>Trigger mapping</strong> — list situations that reliably feel
              hard. This becomes your guide for what to prepare for or ask to change.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Preparing for interviews"
          index={2}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            Interviews can feel like standing under a spotlight while someone decides
            your worth. That feeling is real — and there are ways to make the
            experience more manageable.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Ask about format in advance.</strong> Will it be one person or a
              panel? Video or in-person? How long? Knowing what to expect reduces the
              shock of the unknown.
            </li>
            <li>
              <strong>Practice grounding.</strong> Before you enter the room or join
              the call: feel your feet on the floor, take a slow breath out, remind
              yourself that you are evaluating them too.
            </li>
            <li>
              <strong>Prepare stories, not scripts.</strong> Think of two or three
              examples of work you have done — paid, volunteer, or personal projects.
              You do not need to memorize words. Just know the stories.
            </li>
            <li>
              <strong>Bring a notebook.</strong> Writing down questions helps you
              focus and gives your hands something steady to do.
            </li>
            <li>
              <strong>Plan recovery time.</strong> Do not schedule anything demanding
              right after an interview. Give yourself space to decompress, whatever
              the outcome.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Communicating what you need"
          index={3}
          source={{
            name: "Job Accommodation Network (JAN)",
            url: "https://askjan.org/",
          }}
        >
          <p>
            You can ask for things that help you work well — without sharing your
            whole life story. These requests are normal and many employers expect them.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Written agendas before one-on-one meetings</li>
            <li>Feedback delivered privately, not in front of the team</li>
            <li>24-hour notice before performance conversations</li>
            <li>A workspace away from heavy foot traffic or loud areas</li>
            <li>Permission to take a short walk when you feel overwhelmed</li>
            <li>Clear, written job expectations and deadlines</li>
          </ul>
          <p>
            Frame requests around doing your best work: &ldquo;I focus better when I
            have written notes to refer back to — would you mind sending a quick
            summary after our meetings?&rdquo; This is professional, direct, and
            requires no personal disclosure.
          </p>
        </ContentSection>

        <ContentSection
          title="Building trust with supervisors"
          index={4}
          source={{
            name: "Psychology Today",
            url: "https://www.psychologytoday.com/",
          }}
        >
          <p>
            Trust with a manager builds slowly — especially if adults in your early
            life were unpredictable. That is not a flaw in you. It is wisdom your
            body learned.
          </p>
          <p>
            Ways to build trust at a pace that feels safe:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Start with reliable follow-through on small tasks. Let them see that you
              show up and deliver, one step at a time.
            </li>
            <li>
              Notice how they treat others — not just you. Do they speak respectfully
              to everyone? Do they keep their word?
            </li>
            <li>
              Share personal context only when you feel genuinely safe and when it
              serves a purpose — never because you feel pressured.
            </li>
            <li>
              Give the relationship time. Trust that took years to break takes more
              than a few weeks to rebuild with a new person.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Strengths you carry into every job"
          index={5}
          source={{
            name: "National Fund for Workforce Solutions",
            url: "https://nationalfund.org/",
          }}
        >
          <p>
            Life experience builds real strengths that no training program can
            replicate:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Resilience</strong> — you have faced real difficulty and you
              are still here, still trying
            </li>
            <li>
              <strong>Empathy</strong> — you notice when someone else is struggling
              because you know what that feels like
            </li>
            <li>
              <strong>Adaptability</strong> — you learned early that plans change, and
              you can adjust when things shift
            </li>
            <li>
              <strong>Commitment</strong> — when you feel psychologically safe, you
              give your full self to the work
            </li>
            <li>
              <strong>Problem-solving under pressure</strong> — you have navigated
              situations that would overwhelm people who have never had to fight for
              basic stability
            </li>
          </ul>
          <p>
            Framing your story as context — not a limitation — shifts how you show up
            in interviews and on the job. You are not asking for charity. You are
            offering value that comes from a life fully lived.
          </p>
        </ContentSection>

        <ContentSection
          title="When a job isn't working out"
          index={6}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            Sometimes a workplace is simply not safe or healthy for you — and leaving
            is the right choice. A manager who belittles you, a culture of fear, or
            an environment that constantly triggers old pain are not challenges to
            endure. They are signs to move on.
          </p>
          <p>
            Leaving a job does not mean you failed. It means you respected yourself
            enough to seek something better. Before you leave, if you can, line up
            another option or connect with a workforce program for support during the
            transition.
          </p>
          <p>
            You are allowed to try again. As many times as it takes.
          </p>
        </ContentSection>

        <ContentSection
          title="Support programs and next steps"
          index={7}
          sources={[
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
            { name: "NYEC", url: "https://nyec.org/" },
            { name: "Mobility Mentoring", url: "https://empathways.org/mobility-mentoring/" },
          ]}
        >
          <p>
            You do not have to navigate this alone. Programs across the country offer
            mentoring, job training, and supportive services designed for people who
            need more than a job listing:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Mobility Mentoring</strong> (Center for Working Families) pairs
              you with a coach for career and life goals
            </li>
            <li>
              <strong>National Youth Employment Coalition</strong> connects young
              people with employment programs built on respect and patience
            </li>
            <li>
              <strong>WorkforceGPS</strong> offers resources from the US Department of
              Labor for inclusive, supportive employment
            </li>
          </ul>
          <p>
            Explore our{" "}
            <a href="/resources" className="font-medium text-root-coral hover:underline">
              trusted sources page
            </a>{" "}
            for direct links, read{" "}
            <a href="/getting-back-to-work" className="font-medium text-root-coral hover:underline">
              Getting Back to Work
            </a>{" "}
            for a full guide, or visit{" "}
            <a href="/common-questions" className="font-medium text-root-coral hover:underline">
              Common Questions
            </a>{" "}
            when you want honest answers.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

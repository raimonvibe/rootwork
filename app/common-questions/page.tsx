import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Common Questions",
  description:
    "Honest answers to questions young people often have about early life experiences, work, and moving forward.",
};

export default function CommonQuestionsPage() {
  return (
    <>
      <PageHeader
        title="Common Questions"
        description="Real questions deserve real answers — without judgment, without jargon, and without pretending there is one right way to heal and work."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="Do I have to tell an employer about my past?"
          index={0}
          source={{
            name: "Job Accommodation Network (JAN)",
            url: "https://askjan.org/",
          }}
        >
          <p>
            No. You never have to share what happened to you when you were young — not
            in an interview, not on the job, not ever. Your history is private.
          </p>
          <p>
            If you need certain things to do your job well — like written feedback, a
            quiet workspace, or advance notice before meetings — you can ask for those
            without explaining why. Many employers are happy to provide practical
            support when you name what helps you succeed.
          </p>
          <p>
            Sharing is a choice you make when you feel safe and when it serves you.
            Some people find it freeing to tell a trusted manager. Others keep their
            story completely private and still thrive at work. Both paths are valid.
          </p>
        </ContentSection>

        <ContentSection
          title="Why do I react so strongly to feedback?"
          index={1}
          sources={[
            { name: "CDC — ACE Study", url: "https://www.cdc.gov/violenceprevention/aces/index.html" },
            { name: "NCBI / PubMed", url: "https://www.ncbi.nlm.nih.gov/" },
          ]}
        >
          <p>
            If criticism from adults felt dangerous, unpredictable, or tied to
            rejection when you were young, your body learned to treat feedback as a
            threat. That learning does not disappear the moment you get a job.
          </p>
          <p>
            So when a manager gives you a note on your work, your heart might race,
            your stomach might tighten, or you might feel an urge to shut down or
            defend yourself — even when the feedback is kind and fair. This is your
            nervous system doing what it was trained to do: protect you.
          </p>
          <p>
            Understanding this can help you be gentler with yourself. You are not
            overreacting. You are responding to old pain with a body that has not
            forgotten. Over time, with safe experiences and supportive people, these
            reactions often soften.
          </p>
        </ContentSection>

        <ContentSection
          title="Is it too late for me to start a career?"
          index={2}
          sources={[
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
            { name: "National Youth Employment Coalition", url: "https://nyec.org/" },
          ]}
        >
          <p>
            It is not too late. People begin meaningful careers at 25, 35, 45, and
            beyond — especially after years spent surviving, healing, or caring for
            others. There is no single timeline that fits everyone.
          </p>
          <p>
            Workforce programs, apprenticeships, and entry-level roles exist for people
            at every stage of life. What matters is not how old you were when you
            started, but finding a place that meets you where you are and helps you
            grow from there.
          </p>
          <p>
            Your past may have delayed your start. It did not cancel your future.
          </p>
        </ContentSection>

        <ContentSection
          title="What if I freeze during interviews?"
          index={3}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            Freezing — going blank, stumbling over words, feeling disconnected from
            your own body — is a common response when you feel evaluated or judged.
            Many people who had difficult early years know this feeling well.
          </p>
          <p>
            Things that can help:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Ask in advance what format the interview will take (phone, video,
              in-person, panel)
            </li>
            <li>
              Practice one or two answers out loud at home — not to memorize, but to
              hear your own voice saying them
            </li>
            <li>
              Bring a notebook and write down questions as they come — it gives your
              hands something to do and helps you focus
            </li>
            <li>
              Before you walk in, feel your feet on the ground and take one slow breath
            </li>
            <li>
              Remember: you are also interviewing them. A job where you feel safe
              matters more than any single opportunity
            </li>
          </ul>
          <p>
            If an interview goes badly, it does not define you. It was one hour. You
            will have other chances.
          </p>
        </ContentSection>

        <ContentSection
          title="How do I know if a workplace is safe?"
          index={4}
          sources={[
            { name: "CTIPP Toolkit", url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            A safe workplace is one where you can ask questions, make mistakes, and
            speak up without fear of humiliation or retaliation. You can often sense
            this before you even accept an offer.
          </p>
          <p>
            Green flags to look for:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>The interviewer explains the process clearly and sticks to timelines</li>
            <li>People seem relaxed and speak respectfully about coworkers</li>
            <li>Expectations for the role are written down, not vague</li>
            <li>Onboarding includes real training, not just &ldquo;figure it out&rdquo;</li>
            <li>Feedback is given privately, not in front of others</li>
          </ul>
          <p>
            Red flags: managers who raise their voice, employees who seem afraid, unclear
            job duties that keep changing, or pressure to start before you feel ready.
            Trust your gut. If something feels off, it probably is.
          </p>
        </ContentSection>

        <ContentSection
          title="Can I work while I'm still dealing with hard memories?"
          index={5}
          sources={[
            { name: "NCTSN", url: "https://www.nctsn.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            Yes. Many people work while they are still processing what happened to
            them. Healing is not a finish line you cross before you are allowed to
            have a job. It is an ongoing journey that happens alongside the rest of
            your life.
          </p>
          <p>
            What helps is having support in place — a counselor, a mentor, a friend you
            can call, or a crisis line like 988 for the hardest days. Work can even
            become part of healing when it gives you structure, purpose, and people
            who treat you with respect.
          </p>
          <p>
            If work is making things worse instead of better, that is important
            information too. You are allowed to step back, change jobs, or focus on
            your wellbeing first. See our{" "}
            <a
              href="/support-when-you-need-it"
              className="font-medium text-root-coral hover:underline"
            >
              support page
            </a>{" "}
            if you need help right now.
          </p>
        </ContentSection>

        <ContentSection
          title="What if my family doesn't understand?"
          index={6}
          source={{
            name: "NCTSN",
            url: "https://www.nctsn.org/",
          }}
        >
          <p>
            Not everyone in your life will understand why work feels harder for you
            than it seems for others. Some family members may minimize what you went
            through, or expect you to &ldquo;just get over it&rdquo; and find a job quickly.
          </p>
          <p>
            Their lack of understanding does not mean your experience is not real.
            You can build a support network outside your family — counselors, mentors,
            support groups, online communities, or friends who see you fully.
          </p>
          <p>
            You get to decide who knows your story and who does not. Protecting
            yourself from people who dismiss your pain is not selfish. It is wise.
          </p>
        </ContentSection>

        <ContentSection
          title="Where do I even begin?"
          index={7}
          sources={[
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
            { name: "Mobility Mentoring", url: "https://empathways.org/mobility-mentoring/" },
          ]}
        >
          <p>
            Start small. Pick one thing from the list below and do it this week — just
            one.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Read our{" "}
              <a href="/getting-back-to-work" className="font-medium text-root-coral hover:underline">
                Getting Back to Work
              </a>{" "}
              guide from start to finish
            </li>
            <li>Save the number 988 in your phone</li>
            <li>Look up one workforce center or youth employment program near you</li>
            <li>Write down three strengths you have, even if they feel small</li>
            <li>Tell one person you trust that you are thinking about work</li>
          </ul>
          <p>
            You do not need a perfect plan. You need one next step. That is enough for
            today.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

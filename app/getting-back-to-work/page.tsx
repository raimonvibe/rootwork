import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Getting Back to Work",
  description:
    "A gentle, practical guide for young people who experienced hard things early in life and are ready to find their way back into work.",
};

export default function GettingBackToWorkPage() {
  return (
    <>
      <PageHeader
        title="Getting Back to Work"
        description="You survived something hard. That took courage. When you're ready to work again — or for the first time — you deserve a path that honors where you've been and where you're going."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="You don't have to be 'fixed' before you start"
          index={0}
          sources={[
            { name: "NCTSN", url: "https://www.nctsn.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            There is a quiet message many of us carry: that we need to be completely
            healed before we deserve a job, a paycheck, or a place in the world. That
            message is not true. Healing and working can happen at the same time. Many
            people build meaningful careers while still learning about themselves and
            their needs.
          </p>
          <p>
            What happened to you when you were young was not your fault. The ways your
            mind and body learned to protect you made sense in that moment. Those same
            patterns might show up at work now — and that does not mean you are broken.
            It means you are human, and you adapted to survive.
          </p>
          <p>
            Coming back to work is not about proving you are over what happened. It is
            about finding a place where you can grow, contribute, and feel valued — at
            your own pace.
          </p>
        </ContentSection>

        <ContentSection
          title="What 'ready' actually looks like"
          index={1}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            Ready does not mean fearless. Ready can look like showing up to one
            appointment, filling out part of an application, or sending a single message
            to someone who might help. Small steps count. Rest days count too.
          </p>
          <p>
            Some signs that you might be in a good place to explore work:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You have a safe place to sleep and basic needs met most days
            </li>
            <li>
              You can get through a short conversation without feeling completely
              overwhelmed afterward
            </li>
            <li>
              You have at least one person — a friend, mentor, counselor, or family
              member — you can reach out to when things feel heavy
            </li>
            <li>
              You feel curious about work, even if you also feel nervous
            </li>
          </ul>
          <p>
            If none of these feel true right now, that is okay. Your first step might
            be connecting with support rather than applying for jobs. There is no shame
            in that. See our{" "}
            <a
              href="/support-when-you-need-it"
              className="font-medium text-root-coral hover:underline"
            >
              support page
            </a>{" "}
            for places that can help.
          </p>
        </ContentSection>

        <ContentSection
          title="The first weeks: go gently"
          index={2}
          sources={[
            { name: "NCTSN", url: "https://www.nctsn.org/" },
            { name: "Mobility Mentoring", url: "https://empathways.org/mobility-mentoring/" },
          ]}
        >
          <p>
            The beginning of a job search or a new job can feel like standing at the
            edge of deep water. You do not have to jump in all at once. Here are ways
            to move forward without pushing yourself past what you can handle today.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Start with one task per day.</strong> Update your resume. Research
              one employer. Practice one interview question. Then stop. Progress is
              progress.
            </li>
            <li>
              <strong>Build a simple routine.</strong> Wake up around the same time.
              Eat something. Step outside for five minutes. Routines tell your nervous
              system that the world is predictable — and predictability helps you feel
              safer.
            </li>
            <li>
              <strong>Find a person in your corner.</strong> Programs like Mobility
              Mentoring pair you with someone who walks alongside you through job
              searches, housing, and life goals. You do not have to do this alone.
            </li>
            <li>
              <strong>Name what you need before you need it.</strong> Write down three
              things that help you feel calm — a song, a walk, a text to a friend.
              Keep that list where you can see it during stressful moments.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="When work brings up old feelings"
          index={3}
          source={{
            name: "CDC — Childhood Experiences Research",
            url: "https://www.cdc.gov/violenceprevention/aces/index.html",
          }}
        >
          <p>
            A boss who raises their voice. A performance review. Being left out of a
            meeting. These everyday work moments can touch something tender inside you
            — especially if adults in your early life were unpredictable, harsh, or
            absent when you needed them.
          </p>
          <p>
            When that happens, your body might react before your mind catches up: tight
            chest, shaky hands, urge to leave the room, difficulty concentrating. This
            is your system trying to keep you safe. It is not weakness. It is memory.
          </p>
          <p>
            What helps in those moments:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Ground yourself.</strong> Feel your feet on the floor. Name five
              things you can see. Breathe out slowly, longer than you breathe in.
            </li>
            <li>
              <strong>Give yourself permission to step away.</strong> Use the bathroom,
              take a walk, splash water on your face. You do not owe anyone an
              explanation in the moment.
            </li>
            <li>
              <strong>Talk to someone afterward.</strong> A trusted friend, a counselor,
              or a mentor. Saying &ldquo;that was hard for me&rdquo; out loud can loosen the grip
              of the feeling.
            </li>
            <li>
              <strong>Notice patterns without judging them.</strong> If certain
              situations repeat and drain you, that is useful information — not a
              character flaw. It can guide you toward better-fit roles and workplaces.
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="Choosing work that fits you"
          index={4}
          sources={[
            { name: "National Youth Employment Coalition", url: "https://nyec.org/" },
            { name: "WorkforceGPS", url: "https://workforcegps.org/" },
          ]}
        >
          <p>
            Not every job is right for every person — and that is especially true when
            you are rebuilding confidence after hard early years. You are allowed to
            be selective. You are allowed to leave a job that harms you. You are
            allowed to try something, learn it is not a fit, and try again.
          </p>
          <p>
            Questions worth asking before you accept a role:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Does the manager seem calm and clear when they speak to people?</li>
            <li>Are expectations written down, or do they shift without warning?</li>
            <li>Is there a quiet space if you need a moment to collect yourself?</li>
            <li>Do current employees seem respected, or constantly on edge?</li>
            <li>Can you start part-time or with flexible hours while you adjust?</li>
          </ul>
          <p>
            Entry-level jobs, apprenticeships, and youth employment programs can be
            excellent starting points. They often come with mentors, training, and
            patience built in — exactly what many people need after a difficult start
            in life.
          </p>
        </ContentSection>

        <ContentSection
          title="Your story is yours to share — or not"
          index={5}
          source={{
            name: "Job Accommodation Network (JAN)",
            url: "https://askjan.org/",
          }}
        >
          <p>
            You never owe an employer the details of what you went through as a young
            person. Not in an interview. Not on your first day. Not ever, unless you
            choose to share because it feels right and safe.
          </p>
          <p>
            What you can ask for — without explaining your whole history — are
            practical things that help you do your best work:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Written feedback instead of only verbal feedback</li>
            <li>A heads-up before one-on-one meetings</li>
            <li>A desk away from heavy foot traffic or loud areas</li>
            <li>Flexible start times or remote days when possible</li>
            <li>Breaks to step outside when you feel overwhelmed</li>
          </ul>
          <p>
            These are called workplace adjustments, and many employers provide them
            because they help people succeed — not because something is wrong with you.
            The Job Accommodation Network offers free, confidential guidance on how to
            ask for what you need.
          </p>
        </ContentSection>

        <ContentSection
          title="Strengths you may not see yet"
          index={6}
          source={{
            name: "National Fund for Workforce Solutions",
            url: "https://nationalfund.org/",
          }}
        >
          <p>
            Hard early years teach things that no classroom can: how to read a room,
            how to stay calm when everything shifts, how to care deeply about people
            who are struggling, how to keep going when giving up would be easier.
          </p>
          <p>
            Employers who understand supportive workplaces value these qualities:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Resilience</strong> — you have faced real difficulty and you are
              still here, still trying
            </li>
            <li>
              <strong>Empathy</strong> — you notice when someone else is having a hard
              day because you know what that feels like
            </li>
            <li>
              <strong>Adaptability</strong> — you learned early that plans change, and
              you can adjust
            </li>
            <li>
              <strong>Commitment</strong> — when you feel safe and respected, you give
              your full self to the work
            </li>
          </ul>
          <p>
            These are not things you put on a resume as buzzwords. They are lived
            qualities that show up in how you treat people, how you handle pressure,
            and how you show up day after day. They matter. You matter.
          </p>
        </ContentSection>

        <ContentSection
          title="A word of love for the days that feel impossible"
          index={7}
          sources={[
            { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/" },
          ]}
        >
          <p>
            Some days, getting back to work will feel far away. You might question
            whether you belong anywhere. You might wonder if the hard things that
            happened will always define you.
          </p>
          <p>
            They will not. What happened is part of your story — but it is not the
            whole story. The whole story includes every kind word you have given,
            every time you chose to try again, every morning you got out of bed when
            staying under the covers felt easier.
          </p>
          <p>
            You are worthy of work that respects you. You are worthy of managers who
            listen. You are worthy of a future that you build, one gentle step at a
            time.
          </p>
          <p>
            If today is one of those impossible days and you need someone to talk to
            right now, call or text <strong>988</strong> in the United States. A
            caring person is there, any hour of the day or night. You do not have to
            carry this alone.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

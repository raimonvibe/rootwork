import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Support When You Need It",
  description:
    "Crisis lines, helplines, and trusted organizations for when you need someone to talk to — or when work feels like too much right now.",
};

export default function SupportWhenYouNeedItPage() {
  return (
    <>
      <PageHeader
        title="Support When You Need It"
        description="Asking for help is an act of strength. These resources exist because you deserve care — especially on the days when work is the last thing on your mind."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection
          title="If you need someone right now"
          index={0}
          sources={[
            { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "SAMHSA", url: "https://www.samhsa.gov/mental-health/988" },
          ]}
        >
          <p>
            If you are in emotional pain, feeling hopeless, or simply need to talk to
            someone who will listen without judgment, please reach out. You matter. Your
            life matters. Help is available at any hour.
          </p>
          <div className="rounded-card border border-root-coral/20 bg-root-coral/5 p-6">
            <p className="font-display text-xl text-root-dark">
              988 Suicide &amp; Crisis Lifeline
            </p>
            <p className="mt-2 text-root-dark/75">
              Call or text <strong>988</strong> from anywhere in the United States.
              You can also chat online at{" "}
              <a
                href="https://988lifeline.org/"
                target="_blank"
                rel="noopener"
                className="font-medium text-root-coral hover:underline"
              >
                988lifeline.org
              </a>
              . Free, confidential, available 24 hours a day, 7 days a week.
            </p>
            <p className="mt-3 text-sm text-root-dark/60">
              Counselors are trained to listen, help you through the hardest moments,
              and connect you with local resources. You do not need to be in crisis to
              call — if you need support, that is reason enough.
            </p>
          </div>
        </ContentSection>

        <ContentSection
          title="SAMHSA National Helpline"
          index={1}
          source={{
            name: "SAMHSA",
            url: "https://www.samhsa.gov/find-help/national-helpline",
          }}
        >
          <p>
            The Substance Abuse and Mental Health Services Administration offers a free,
            confidential, 24/7 treatment referral and information service for people
            facing mental health or substance use concerns — and for families who want
            to help someone they love.
          </p>
          <p>
            <strong>1-800-662-HELP (4357)</strong> — available in English and Spanish.
            SAMHSA can help you find counseling, support groups, and local services
            near you.
          </p>
        </ContentSection>

        <ContentSection
          title="Support for young people"
          index={2}
          sources={[
            { name: "NCTSN", url: "https://www.nctsn.org/" },
            { name: "National Youth Employment Coalition", url: "https://nyec.org/" },
          ]}
        >
          <p>
            If hard things happened when you were young, you are not alone — and there
            are organizations dedicated specifically to helping young people heal and
            move forward.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>NCTSN (National Child Traumatic Stress Network)</strong> offers
              guides, videos, and resources for young people, parents, and educators.
              Their materials explain how early experiences affect daily life and what
              helps people feel safer over time.
            </li>
            <li>
              <strong>National Youth Employment Coalition</strong> connects young people
              with employment programs designed to be welcoming and supportive — not
              punishing or rushed.
            </li>
          </ul>
          <p>
            Visit our{" "}
            <a
              href="/resources"
              className="font-medium text-root-coral hover:underline"
            >
              trusted sources page
            </a>{" "}
            for direct links to these organizations and more.
          </p>
        </ContentSection>

        <ContentSection
          title="When work feels like too much"
          index={3}
          source={{
            name: "WorkforceGPS",
            url: "https://workforcegps.org/",
          }}
        >
          <p>
            There is no deadline on healing. If the idea of working right now feels
            overwhelming, that is a signal to pause — not a failure. Your wellbeing
            comes first. Always.
          </p>
          <p>
            Signs that it might be time to focus on support before work:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You are not sleeping or eating regularly</li>
            <li>Small tasks feel impossible to start or finish</li>
            <li>You feel disconnected from people you trust</li>
            <li>Thoughts of hurting yourself come up more than occasionally</li>
            <li>You are using substances to get through the day</li>
          </ul>
          <p>
            None of these mean you will never work. They mean you deserve care now.
            Connect with 988, SAMHSA, or a local counselor. When you feel steadier,
            our{" "}
            <a
              href="/getting-back-to-work"
              className="font-medium text-root-coral hover:underline"
            >
              Getting Back to Work
            </a>{" "}
            guide will be here waiting for you.
          </p>
        </ContentSection>

        <ContentSection
          title="Finding a counselor or mentor"
          index={4}
          sources={[
            { name: "SAMHSA", url: "https://www.samhsa.gov/find-treatment" },
            { name: "Mobility Mentoring", url: "https://empathways.org/mobility-mentoring/" },
          ]}
        >
          <p>
            Talking to a trained counselor can help you understand your patterns,
            build coping tools, and feel less alone. You do not need a diagnosis to
            benefit from counseling — you just need a desire to feel better.
          </p>
          <p>
            SAMHSA&apos;s treatment locator at{" "}
            <a
              href="https://findtreatment.samhsa.gov/"
              target="_blank"
              rel="noopener"
              className="font-medium text-root-coral hover:underline"
            >
              findtreatment.samhsa.gov
            </a>{" "}
            can help you find affordable options near you, including sliding-scale
            fees based on income.
          </p>
          <p>
            A mentor is different from a counselor — they walk alongside you in
            practical life goals like finding housing, building a resume, and landing a
            job. Mobility Mentoring through the Center for Working Families is one
            well-regarded program. Workforce centers in your area may offer similar
            support.
          </p>
        </ContentSection>

        <ContentSection
          title="Workplace help without sharing your whole story"
          index={5}
          source={{
            name: "Job Accommodation Network (JAN)",
            url: "https://askjan.org/",
          }}
        >
          <p>
            If you are already working and struggling, you can ask for adjustments
            that help you succeed — without telling your employer everything about your
            past.
          </p>
          <p>
            The Job Accommodation Network (JAN) provides free, expert advice on
            workplace adjustments. They can help you figure out what to ask for and
            how to ask for it in a way that feels comfortable.
          </p>
          <p>
            Examples of adjustments people request: flexible scheduling, written
            instructions, a modified workspace, permission to take short breaks, or
            meeting agendas shared in advance. Many of these cost employers nothing and
            make a real difference.
          </p>
        </ContentSection>

        <ContentSection
          title="You are allowed to take up space"
          index={6}
          source={{
            name: "988 Suicide & Crisis Lifeline",
            url: "https://988lifeline.org/",
          }}
        >
          <p>
            We want to say this plainly: you deserve help. Not because you have earned
            it through suffering enough, and not because you have hit some invisible
            threshold of pain. You deserve help because you are a person, and people
            need each other.
          </p>
          <p>
            Reaching out does not make you weak. It makes you brave. The people on the
            other end of 988, SAMHSA, and local support lines chose that work because
            they believe in you — even when you cannot believe in yourself yet.
          </p>
          <p>
            However you got here, whatever you have been through, you are welcome on
            this site and in this world. We are glad you are reading this.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

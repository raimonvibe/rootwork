import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rootwork — a compassionate public information resource on employment and wellbeing.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="About Rootwork"
        subheading="A free, public information resource — not therapy, not legal advice, just carefully sourced guidance written with love."
        compact
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection title="Why Rootwork exists" index={0}>
          <p>
            Many people had challenging experiences in childhood — especially with
            authority figures — and find unique strengths and needs when entering or
            staying in the workforce. Trust, feedback, hierarchy, and change can all
            feel like areas worth extra care and preparation.
          </p>
          <p>
            Rootwork exists to gather practical, compassionate information in one
            place. We paraphrase and link to publicly available resources from
            reputable organizations so you can explore at your own pace — without
            wading through clinical jargon or feeling talked down to.
          </p>
          <p>
            We built this site because we believe that people who survived hard early
            years deserve more than a list of hotline numbers and a pamphlet about
            resilience. They deserve honest guidance, warm language, and the
            reassurance that they are not broken — they are adapting, and they belong
            in the world of work.
          </p>
        </ContentSection>

        <ContentSection title="What we are — and what we are not" index={1}>
          <p>
            Rootwork is an educational website. We do not provide clinical care,
            emergency services, or individualized career coaching. We cite our sources
            on content pages and encourage you to seek professional support when you
            need it.
          </p>
          <p>
            We are not a substitute for a counselor, a doctor, or a lawyer. We are a
            starting point — a place to feel understood, learn practical strategies,
            and find links to organizations that can help you go further.
          </p>
          <p>
            If you are in crisis, please call or text <strong>988</strong> in the
            United States, or visit our{" "}
            <a
              href="/support-when-you-need-it"
              className="font-medium text-root-coral hover:underline"
            >
              Support When You Need It
            </a>{" "}
            page for more options.
          </p>
        </ContentSection>

        <ContentSection title="Who this site is for" index={2}>
          <p>
            Rootwork is written primarily for young people and adults who experienced
            difficult things in their early years — neglect, instability, harsh
            treatment from adults, loss, or other events that shaped how they relate
            to authority and stress.
          </p>
          <p>
            It is also for:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Job seekers who want practical strategies for interviews, managers, and
              workplace dynamics
            </li>
            <li>
              Employers and HR professionals who want to build hiring practices and
              daily cultures where people from all backgrounds can thrive
            </li>
            <li>
              Mentors, counselors, and workforce professionals looking for trusted
              resources to share with the people they support
            </li>
            <li>
              Anyone who loves someone navigating this journey and wants to understand
              what helps
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Our approach" index={3}>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Strengths-based, encouraging, and non-judgmental language — no clinical
              jargon, no conditional words that make you feel like a diagnosis
            </li>
            <li>
              Written with love — because people who survived hard things deserve
              warmth, not a textbook
            </li>
            <li>Mobile-first design with generous spacing and a read-aloud toolbar</li>
            <li>No advertising, no affiliate links, no data collection</li>
            <li>All content attributed to original public sources</li>
            <li>
              Nuanced and honest — we do not promise easy fixes, and we do not
              minimize how hard this can be
            </li>
          </ul>
        </ContentSection>

        <ContentSection
          title="How we choose our sources"
          index={4}
          source={{
            name: "Trusted Sources Directory",
            url: "/resources",
          }}
        >
          <p>
            Every organization linked on Rootwork is a publicly available, reputable
            source — government agencies, established nonprofits, peer-reviewed
            research databases, and recognized workforce development organizations.
          </p>
          <p>
            We prioritize sources that:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Are free to access and reference</li>
            <li>Focus on strengths, recovery, and practical support — not fear</li>
            <li>Have a track record of serving people with difficult early experiences</li>
            <li>Provide actionable guidance, not just statistics</li>
          </ul>
          <p>
            Visit our{" "}
            <a href="/resources" className="font-medium text-root-coral hover:underline">
              Trusted Sources &amp; Organizations
            </a>{" "}
            page for the full directory.
          </p>
        </ContentSection>

        <ContentSection title="A word from us to you" index={5}>
          <p>
            However you found this site — searching at midnight, sent by a friend,
            clicking through from a workforce program — we are glad you are here.
          </p>
          <p>
            You do not need to read everything at once. Pick one page that speaks to
            where you are today. Come back when you are ready for the next step.
          </p>
          <p>
            You have already survived the hardest part. Everything on this site is
            here to help with what comes next — gently, honestly, and with the belief
            that your future is worth building.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

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
        subheading="A free, public information resource — not therapy, not legal advice, just carefully sourced guidance."
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
            reputable organizations so you can explore at your own pace.
          </p>
        </ContentSection>

        <ContentSection title="What we are — and what we are not" index={1}>
          <p>
            Rootwork is an educational website. We do not provide clinical care,
            emergency services, or individualized career coaching. We cite our
            sources on every content page and encourage you to seek professional
            support when you need it.
          </p>
          <p>
            Rootwork focuses on employment information — exploring work, building
            confidence, and finding trusted resources at your own pace.
          </p>
        </ContentSection>

        <ContentSection title="Our approach" index={2}>
          <ul className="list-disc space-y-2 pl-5">
            <li>Strengths-based, encouraging, and non-judgmental language</li>
            <li>Mobile-first design with generous spacing</li>
            <li>No advertising, no affiliate links, no data collection</li>
            <li>All content attributed to original public sources</li>
          </ul>
        </ContentSection>
      </div>
    </>
  );
}

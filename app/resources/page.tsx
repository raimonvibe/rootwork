import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SourceCard from "@/components/SourceCard";
import ContentSection from "@/components/ContentSection";
import { trustedSources } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Trusted Sources",
  description:
    "Reputable organizations and publicly available resources on employment, wellbeing, and workplace culture.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Trusted Sources & Organizations"
        description="Every link below is a publicly available, reputable source. Rootwork paraphrases their guidance — visit the originals for full detail."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection title="How to use this directory" index={0}>
          <p>
            These organizations are the foundation of everything on Rootwork. We read
            their public materials, paraphrase the parts most relevant to employment,
            and link back to the originals so you can explore further.
          </p>
          <p>
            We group them by what they offer:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Crisis and mental health support</strong> — SAMHSA, 988 Lifeline
            </li>
            <li>
              <strong>Understanding early experiences</strong> — CDC ACE Study, NCTSN,
              NCBI/PubMed, Psychology Today
            </li>
            <li>
              <strong>Employment and workforce programs</strong> — WorkforceGPS, NYEC,
              National Fund, Mobility Mentoring, JAN
            </li>
            <li>
              <strong>Supportive workplace culture</strong> — CTIPP Toolkit, BSR
            </li>
          </ul>
          <p>
            If a link does not load in your region, some entries include an alternate
            path. All of these resources are free to access.
          </p>
        </ContentSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustedSources.map((source) => (
            <SourceCard
              key={source.name}
              name={source.name}
              description={source.description}
              url={source.url}
              alternateUrl={source.alternateUrl}
              alternateLabel={source.alternateLabel}
            />
          ))}
        </div>

        <ContentSection
          title="Resources we cite most often"
          index={1}
        >
          <p>
            Across Rootwork&apos;s pages, these sources appear most frequently because
            they offer the clearest, most practical guidance for people returning to
            work after difficult early years:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>SAMHSA</strong> — foundational principles for supportive
              environments and a national helpline for treatment referrals
            </li>
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline</strong> — immediate,
              free support by call, text, or chat
            </li>
            <li>
              <strong>NCTSN</strong> — resources specifically for young people who
              experienced difficult events, including guides for daily life
            </li>
            <li>
              <strong>CTIPP Toolkit</strong> — the most comprehensive guide for
              building supportive workplace culture, updated in 2025
            </li>
            <li>
              <strong>WorkforceGPS</strong> — US Department of Labor resources for
              inclusive employment programs
            </li>
            <li>
              <strong>Job Accommodation Network (JAN)</strong> — free expert advice on
              workplace adjustments
            </li>
          </ul>
        </ContentSection>

        <p className="text-center text-sm text-root-dark/50">
          All sources are publicly available and free to reference. We link back to
          original organizations on every content page.
        </p>
      </div>
    </>
  );
}

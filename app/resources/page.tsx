import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SourceCard from "@/components/SourceCard";
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
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustedSources.map((source) => (
            <SourceCard
              key={source.name}
              name={source.name}
              description={source.description}
              url={source.url}
            />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-root-dark/50">
          All sources are publicly available and free to reference. We link back to
          original organizations on every content page.
        </p>
      </div>
    </>
  );
}

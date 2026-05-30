import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Rootwork does not collect personal data from visitors.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: May 2026"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        <ContentSection title="No personal data collected" index={0}>
          <p>
            Rootwork is a static informational website. We do not use contact forms,
            account registration, newsletters, or analytics that identify individual
            visitors. We do not sell, rent, or share personal information — because we
            do not collect it.
          </p>
        </ContentSection>

        <ContentSection title="External links" index={1}>
          <p>
            This site links to third-party organizations (government agencies,
            nonprofits, research databases). When you leave Rootwork, their privacy
            policies apply. We encourage you to review those policies on external sites.
          </p>
        </ContentSection>

        <ContentSection title="Hosting" index={2}>
          <p>
            If deployed on a platform such as Vercel, standard server logs (IP address,
            browser type, request time) may be processed by the host for security and
            performance. Rootwork does not access or use those logs for marketing.
          </p>
        </ContentSection>

        <ContentSection title="Contact" index={3}>
          <p>
            Rootwork is an educational resource about employment and workplace
            wellbeing. For professional advice, please consult a qualified provider
            in your area.
          </p>
        </ContentSection>
      </div>
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import InfoCard from "@/components/InfoCard";
import SectionDivider from "@/components/SectionDivider";
import { sourceStrip } from "@/lib/sources";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="You've come a long way. Now let's move forward."
        subheading="Practical, compassionate information for people building confidence and success in the world of work."
        primaryCta={{ label: "Explore Resources", href: "/resources" }}
        secondaryCta={{
          label: "How Early Experiences Shape Work",
          href: "/experience-and-work",
        }}
      />

      <section
        data-read-aloud-block
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="text-center font-display text-3xl text-root-dark md:text-4xl">
          Where to start
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-root-dark/65">
          Rootwork brings together trusted, publicly available guidance for job
          seekers and employers — always cited, never overwhelming.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon="brain"
            title="Understanding the Connection"
            description="How early experiences with authority figures can shape workplace trust, communication, and stress responses."
            href="/experience-and-work"
            index={0}
          />
          <InfoCard
            icon="briefcase"
            title="For Job Seekers"
            description="Practical strategies to navigate interviews, managers, and workplace dynamics with self-awareness."
            href="/for-individuals"
            index={1}
          />
          <InfoCard
            icon="building2"
            title="For Employers"
            description="How to create welcoming, supportive hiring and workplace environments for everyone."
            href="/for-employers"
            index={2}
          />
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-root-dark/50">
          Information drawn from trusted organizations
        </p>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {sourceStrip.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener"
              className="shrink-0 rounded-card border border-root-dark/10 bg-white px-6 py-3 text-sm font-medium text-root-dark shadow-card transition-smooth hover:border-root-coral/30 hover:text-root-coral"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

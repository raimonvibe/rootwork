import HeroSection from "@/components/HeroSection";
import InfoCard from "@/components/InfoCard";
import SectionDivider from "@/components/SectionDivider";
import { sourceStrip } from "@/lib/sources";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="You've come a long way. Now let's move forward."
        subheading="Warm, practical guidance for young people who experienced hard things early in life — and for the employers who want to welcome them."
        primaryCta={{ label: "Getting Back to Work", href: "/getting-back-to-work" }}
        secondaryCta={{
          label: "Explore Resources",
          href: "/resources",
        }}
      />

      <section
        data-read-aloud-block
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="text-center font-display text-3xl text-root-dark md:text-4xl">
          Where to start
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-root-dark/65">
          Rootwork brings together trusted, publicly available guidance for people
          returning to work after difficult early years — and for employers who want
          to build workplaces where everyone can thrive. Every page is written with
          care, cited to reputable sources, and designed to meet you where you are.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon="heart"
            title="Getting Back to Work"
            description="A gentle guide for when you're ready to find your way into work — at your own pace, with your whole self."
            href="/getting-back-to-work"
            index={0}
          />
          <InfoCard
            icon="brain"
            title="Understanding the Connection"
            description="How early experiences with authority figures can shape workplace trust, communication, and stress responses."
            href="/experience-and-work"
            index={1}
          />
          <InfoCard
            icon="briefcase"
            title="For Job Seekers"
            description="Interviews, managers, workplace dynamics — practical strategies written for people who need extra care and planning."
            href="/for-individuals"
            index={2}
          />
          <InfoCard
            icon="building2"
            title="For Employers"
            description="How to create welcoming hiring practices and daily workplace cultures where people from all backgrounds can contribute."
            href="/for-employers"
            index={3}
          />
          <InfoCard
            icon="helpCircle"
            title="Common Questions"
            description="Honest answers about sharing your past, handling feedback, choosing safe workplaces, and knowing where to begin."
            href="/common-questions"
            index={4}
          />
          <InfoCard
            icon="lifeBuoy"
            title="Support When You Need It"
            description="Crisis lines, helplines, and organizations for the days when work is the last thing on your mind."
            href="/support-when-you-need-it"
            index={5}
          />
        </div>
      </section>

      <SectionDivider />

      <section
        data-read-aloud-block
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 className="text-center font-display text-2xl text-root-dark md:text-3xl">
          A note before you read on
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 leading-relaxed text-root-dark/70">
          <p>
            What happened to you when you were young was not your fault. The ways
            your mind and body learned to protect you made sense then — and they
            still make sense now, even when they make work harder.
          </p>
          <p>
            This site will never use clinical language to describe you. You are not a
            case study. You are a person who survived something real, and you deserve
            work that respects you — and information that speaks to you with honesty
            and love.
          </p>
          <p>
            If today is a hard day and you need someone to talk to right now, call or
            text <strong>988</strong> in the United States. Help is free, confidential,
            and available any hour.
          </p>
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

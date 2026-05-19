"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroSectionProps = {
  headline: string;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
};

export default function HeroSection({
  headline,
  subheading,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden gradient-navy ${compact ? "py-16" : "py-24 md:py-32"}`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(233,69,96,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl leading-tight text-root-light md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-root-light/80 md:text-xl">
            {subheading}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-card px-8 py-3 text-center font-medium text-root-dark gradient-accent transition-smooth hover:opacity-90"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-card border border-root-light/30 px-8 py-3 text-center font-medium text-root-light transition-smooth hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

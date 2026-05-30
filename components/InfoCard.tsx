"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Building2,
  Heart,
  HelpCircle,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  brain: Brain,
  briefcase: Briefcase,
  building2: Building2,
  heart: Heart,
  helpCircle: HelpCircle,
  lifeBuoy: LifeBuoy,
} as const;

export type InfoCardIcon = keyof typeof iconMap;

type InfoCardProps = {
  icon: InfoCardIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
};

export default function InfoCard({
  icon,
  title,
  description,
  href,
  index = 0,
}: InfoCardProps) {
  const Icon: LucideIcon = iconMap[icon];

  const content = (
    <motion.article
      data-read-aloud-block
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col rounded-card bg-white p-8 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-card gradient-accent">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-display text-xl text-root-dark">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-root-dark/70">
        {description}
      </p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-root-coral transition-smooth group-hover:gap-2">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

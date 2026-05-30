"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type SourceLink = { name: string; url: string };

type ContentSectionProps = {
  title: string;
  children: ReactNode;
  source?: SourceLink;
  sources?: SourceLink[];
  index?: number;
};

export default function ContentSection({
  title,
  children,
  source,
  sources,
  index = 0,
}: ContentSectionProps) {
  const citationLinks = sources ?? (source ? [source] : []);

  return (
    <motion.section
      data-read-aloud-block
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-card bg-white p-8 shadow-card"
    >
      <h2 className="font-display text-2xl text-root-dark">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-root-dark/75">{children}</div>
      {citationLinks.length > 0 && (
        <p className="mt-6 border-t border-root-dark/5 pt-4 text-xs text-root-dark/50">
          {citationLinks.length === 1 ? "Source: " : "Sources: "}
          {citationLinks.map((link, i) => (
            <span key={link.url}>
              {i > 0 && (i === citationLinks.length - 1 ? " and " : ", ")}
              <a
                href={link.url}
                target="_blank"
                rel="noopener"
                className="font-medium text-root-coral hover:underline"
              >
                {link.name}
              </a>
            </span>
          ))}
        </p>
      )}
    </motion.section>
  );
}

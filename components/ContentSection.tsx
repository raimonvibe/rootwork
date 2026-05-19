"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ContentSectionProps = {
  title: string;
  children: ReactNode;
  source?: { name: string; url: string };
  index?: number;
};

export default function ContentSection({
  title,
  children,
  source,
  index = 0,
}: ContentSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-card bg-white p-8 shadow-card"
    >
      <h2 className="font-display text-2xl text-root-dark">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-root-dark/75">{children}</div>
      {source && (
        <p className="mt-6 border-t border-root-dark/5 pt-4 text-xs text-root-dark/50">
          Source:{" "}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-root-coral hover:underline"
          >
            {source.name}
          </a>
        </p>
      )}
    </motion.section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  Phone,
  ExternalLink,
} from "lucide-react";
import {
  mainNav,
  topicNav,
  resourceNav,
  crisisSupport,
} from "@/lib/navigation";

type HamburgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const [supportOpen, setSupportOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSupportOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-root-dark/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col gradient-navy shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex items-center justify-between border-b border-white/10 px-6 py-5"
            >
              <span className="font-display text-xl text-root-light">Rootwork</span>
              <button
                type="button"
                onClick={onClose}
                className="flex min-h-12 min-w-12 items-center justify-center rounded-full text-root-light transition-smooth hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <NavSection items={mainNav} onNavigate={onClose} />

              <SectionLabel>Understanding Trauma & Work</SectionLabel>
              <NavSection items={topicNav} onNavigate={onClose} />

              <SectionLabel>Resources</SectionLabel>
              <NavSection items={resourceNav} onNavigate={onClose} />

              <div className="mt-6 border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={() => setSupportOpen(!supportOpen)}
                  className="flex min-h-12 w-full items-center justify-between rounded-card px-3 text-left text-sm font-medium text-root-light/90 transition-smooth hover:bg-white/5"
                  aria-expanded={supportOpen}
                >
                  <span>Additional Support (click to expand)</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${supportOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {supportOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-3 pb-3 pt-2 text-xs leading-relaxed text-root-light/60">
                        These resources are here if you need them — no pressure.
                      </p>
                      <ul className="space-y-1 px-1">
                        {crisisSupport.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={
                                item.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              onClick={onClose}
                              className="flex min-h-12 items-start gap-3 rounded-card px-3 py-3 text-root-light/80 transition-smooth hover:bg-white/5"
                            >
                              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-root-coral" />
                              <span>
                                <span className="flex items-center gap-1 text-sm font-medium text-root-light">
                                  {item.name}
                                  {item.href.startsWith("http") && (
                                    <ExternalLink className="h-3 w-3 opacity-60" />
                                  )}
                                </span>
                                <span className="text-xs text-root-light/60">
                                  {item.description}
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-root-light/40">
      {children}
    </p>
  );
}

function NavSection({
  items,
  onNavigate,
}: {
  items: typeof mainNav;
  onNavigate: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="flex min-h-12 items-center gap-3 rounded-card px-3 py-3 text-root-light transition-smooth hover:bg-white/10"
            >
              <Icon className="h-5 w-5 shrink-0 text-root-coral" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

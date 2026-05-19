"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPageNeighbors } from "@/lib/navigation";

export default function PageNavigation() {
  const pathname = usePathname();
  const neighbors = getPageNeighbors(pathname);

  if (!neighbors || (!neighbors.prev && !neighbors.next)) {
    return null;
  }

  const { prev, next } = neighbors;

  return (
    <nav
      aria-label="Page navigation"
      className="mx-auto max-w-6xl border-t border-root-dark/10 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex min-h-12 flex-1 items-center gap-3 rounded-card border border-root-dark/10 bg-white/90 px-5 py-4 shadow-card transition-smooth hover:border-root-coral/30 hover:shadow-md sm:max-w-[48%]"
          >
            <ChevronLeft className="h-5 w-5 shrink-0 text-root-coral transition-smooth group-hover:-translate-x-0.5" />
            <span className="min-w-0 text-left">
              <span className="block text-xs font-medium uppercase tracking-wide text-root-dark/45">
                Previous
              </span>
              <span className="block truncate font-medium text-root-dark group-hover:text-root-coral">
                {prev.shortLabel}
              </span>
            </span>
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" aria-hidden />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group flex min-h-12 flex-1 items-center justify-end gap-3 rounded-card border border-root-dark/10 bg-white/90 px-5 py-4 shadow-card transition-smooth hover:border-root-coral/30 hover:shadow-md sm:max-w-[48%] sm:ml-auto"
          >
            <span className="min-w-0 text-right">
              <span className="block text-xs font-medium uppercase tracking-wide text-root-dark/45">
                Next
              </span>
              <span className="block truncate font-medium text-root-dark group-hover:text-root-coral">
                {next.shortLabel}
              </span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-root-coral transition-smooth group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" aria-hidden />
        )}
      </div>
    </nav>
  );
}

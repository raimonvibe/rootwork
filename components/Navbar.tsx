"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-root-dark/5 bg-root-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-2xl text-root-dark transition-smooth hover:opacity-80"
          >
            Rootwork
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-card border border-root-dark/10 bg-white px-4 shadow-card transition-smooth hover:border-root-coral/30 hover:shadow-md"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5 text-root-dark" />
            <span className="hidden text-sm font-medium text-root-dark sm:inline">
              Menu
            </span>
          </button>
        </div>
      </header>
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

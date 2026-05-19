import Link from "next/link";
import { Share2 } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-root-dark/10 gradient-navy">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl text-root-light">Rootwork</p>
            <p className="mt-2 text-sm text-root-light/70">
              Practical, compassionate information for people building confidence
              and success in the world of work.
            </p>
            <a
              href="/"
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-sm text-root-light transition-smooth hover:bg-white/20"
              aria-label="Share Rootwork"
            >
              <Share2 className="h-4 w-4" />
              Share this resource
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-root-light/80 transition-smooth hover:text-root-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-root-light/50">
          This website provides general information only and is not a substitute
          for professional mental health or medical advice.
        </p>
        <p className="mt-2 text-xs text-root-light/40">
          Information sourced from publicly available, reputable organizations.
        </p>
        <p className="mt-4 text-xs text-root-light/30">
          © {new Date().getFullYear()} Rootwork. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

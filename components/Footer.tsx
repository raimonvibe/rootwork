import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-md lg:col-span-1">
            <p className="font-display text-2xl text-root-light">Rootwork</p>
            <p className="mt-2 text-sm leading-relaxed text-root-light/70">
              Practical, compassionate information for people building confidence
              and success in the world of work.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="lg:justify-self-center">
            <p className="text-sm font-medium text-root-light/90">Quick links</p>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
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

          <SocialLinks className="md:col-span-2 lg:col-span-1 lg:justify-self-end" />
        </div>

        <div className="mt-10 border-t border-root-light/10 pt-8">
          <p className="text-xs leading-relaxed text-root-light/50">
            This website provides general information only and is not a substitute
            for professional mental health or medical advice.
          </p>
          <p className="mt-2 text-xs text-root-light/40">
            Information sourced from publicly available, reputable organizations.
          </p>
          <p className="mt-4 text-center text-sm text-root-light/30">
            © {new Date().getFullYear()} Rootwork. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

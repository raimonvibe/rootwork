import type { CSSProperties } from "react";
import { raimonSocialLinks } from "@/lib/socialLinks";

type SocialLinksProps = {
  title?: string;
  className?: string;
};

export default function SocialLinks({
  title = "Connect with Raimon",
  className = "",
}: SocialLinksProps) {
  return (
    <div className={className} data-read-aloud-ignore>
      <h2 className="font-display text-lg text-root-light">{title}</h2>
      <ul className="mt-4 grid grid-cols-4 gap-3">
        {raimonSocialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-social={link.id}
              className="social-link group flex min-h-11 min-w-11 items-center justify-center rounded-card border border-root-light/15 bg-root-light/10 transition-smooth"
              style={
                {
                  "--brand": link.brandColor,
                  "--brand-hover": link.hoverColor ?? link.brandColor,
                } as CSSProperties
              }
              aria-label={link.label}
            >
              <i
                className={`${link.iconClass} text-lg transition-smooth group-hover:scale-110`}
                aria-hidden
              />
              <span className="sr-only">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

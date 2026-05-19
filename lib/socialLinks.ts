export type SocialLink = {
  href: string;
  label: string;
  id: string;
  iconClass: string;
  /** Icon color at rest (brand) */
  iconColor: string;
  /** Hover background + border (brand) */
  hoverClass: string;
};

export const raimonSocialLinks: SocialLink[] = [
  {
    id: "x",
    href: "https://x.com/raimonvibe/",
    label: "X",
    iconClass: "fa-brands fa-x-twitter",
    iconColor: "text-white",
    hoverClass: "hover:bg-[#000000] hover:border-[#000000]",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/",
    label: "YouTube",
    iconClass: "fa-brands fa-youtube",
    iconColor: "text-[#FF0000]",
    hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@raimonvibe/",
    label: "TikTok",
    iconClass: "fa-brands fa-tiktok",
    iconColor: "text-[#00f2ea]",
    hoverClass: "hover:bg-[#000000] hover:border-[#000000]",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/raimonvibe/",
    label: "Instagram",
    iconClass: "fa-brands fa-instagram",
    iconColor: "text-[#E4405F]",
    hoverClass: "hover:bg-[#E4405F] hover:border-[#E4405F]",
  },
  {
    id: "medium",
    href: "https://medium.com/@raimonvibe/",
    label: "Medium",
    iconClass: "fa-brands fa-medium",
    iconColor: "text-[#00ab6c]",
    hoverClass: "hover:bg-[#00ab6c] hover:border-[#00ab6c]",
  },
  {
    id: "github",
    href: "https://github.com/raimonvibe/",
    label: "GitHub",
    iconClass: "fa-brands fa-github",
    iconColor: "text-[#f0f4ff]",
    hoverClass: "hover:bg-[#24292f] hover:border-[#24292f]",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/raimonvibe/",
    label: "LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
    iconColor: "text-[#0A66C2]",
    hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61563450007849",
    label: "Facebook",
    iconClass: "fa-brands fa-facebook-f",
    iconColor: "text-[#1877F2]",
    hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
];

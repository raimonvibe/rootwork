export type SocialLink = {
  href: string;
  label: string;
  id: string;
  iconClass: string;
  brandColor: string;
  /** Hover fill; defaults to brandColor. X uses black fill with a white icon. */
  hoverColor?: string;
};

export const raimonSocialLinks: SocialLink[] = [
  {
    id: "x",
    href: "https://x.com/raimonvibe/",
    label: "X",
    iconClass: "fa-brands fa-x-twitter",
    brandColor: "#ffffff",
    hoverColor: "#000000",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/",
    label: "YouTube",
    iconClass: "fa-brands fa-youtube",
    brandColor: "#FF0000",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@raimonvibe/",
    label: "TikTok",
    iconClass: "fa-brands fa-tiktok",
    brandColor: "#00f2ea",
    hoverColor: "#000000",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/raimonvibe/",
    label: "Instagram",
    iconClass: "fa-brands fa-instagram",
    brandColor: "#E4405F",
  },
  {
    id: "medium",
    href: "https://medium.com/@raimonvibe/",
    label: "Medium",
    iconClass: "fa-brands fa-medium",
    brandColor: "#00ab6c",
    hoverColor: "#00ab6c",
  },
  {
    id: "github",
    href: "https://github.com/raimonvibe/",
    label: "GitHub",
    iconClass: "fa-brands fa-github",
    brandColor: "#f0f4ff",
    hoverColor: "#24292f",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/raimonvibe/",
    label: "LinkedIn",
    iconClass: "fa-brands fa-linkedin-in",
    brandColor: "#0A66C2",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61563450007849",
    label: "Facebook",
    iconClass: "fa-brands fa-facebook-f",
    brandColor: "#1877F2",
  },
];

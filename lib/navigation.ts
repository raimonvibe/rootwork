import {
  Brain,
  Briefcase,
  Building2,
  BookOpen,
  Home,
  Info,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About This Resource", icon: Info },
];

export const topicNav: NavItem[] = [
  {
    href: "/experience-and-work",
    label: "How Early Experiences Shape Work",
    icon: Brain,
  },
  { href: "/for-individuals", label: "For Job Seekers", icon: Briefcase },
  { href: "/for-employers", label: "For Employers & HR", icon: Building2 },
];

export const resourceNav: NavItem[] = [
  {
    href: "/resources",
    label: "Trusted Sources & Organizations",
    icon: BookOpen,
  },
];

export type PageFlowItem = {
  href: string;
  label: string;
  shortLabel: string;
};

/** Reading order for prev/next navigation at the bottom of each page. */
export const pageFlow: PageFlowItem[] = [
  { href: "/", label: "Home", shortLabel: "Home" },
  { href: "/about", label: "About This Resource", shortLabel: "About" },
  {
    href: "/experience-and-work",
    label: "How Early Experiences Shape Work",
    shortLabel: "Experience & Work",
  },
  { href: "/for-individuals", label: "For Job Seekers", shortLabel: "Job Seekers" },
  { href: "/for-employers", label: "For Employers & HR", shortLabel: "Employers" },
  {
    href: "/resources",
    label: "Trusted Sources & Organizations",
    shortLabel: "Resources",
  },
  { href: "/privacy", label: "Privacy Policy", shortLabel: "Privacy" },
];

export function getPageNeighbors(pathname: string) {
  const index = pageFlow.findIndex((page) => page.href === pathname);
  if (index === -1) return null;

  return {
    prev: index > 0 ? pageFlow[index - 1] : null,
    next: index < pageFlow.length - 1 ? pageFlow[index + 1] : null,
  };
}

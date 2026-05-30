import {
  Brain,
  Briefcase,
  Building2,
  BookOpen,
  Heart,
  HelpCircle,
  Home,
  Info,
  LifeBuoy,
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
    href: "/getting-back-to-work",
    label: "Getting Back to Work",
    icon: Heart,
  },
  {
    href: "/experience-and-work",
    label: "How Early Experiences Shape Work",
    icon: Brain,
  },
  { href: "/for-individuals", label: "For Job Seekers", icon: Briefcase },
  { href: "/for-employers", label: "For Employers & HR", icon: Building2 },
  {
    href: "/common-questions",
    label: "Common Questions",
    icon: HelpCircle,
  },
];

export const resourceNav: NavItem[] = [
  {
    href: "/support-when-you-need-it",
    label: "Support When You Need It",
    icon: LifeBuoy,
  },
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
    href: "/getting-back-to-work",
    label: "Getting Back to Work",
    shortLabel: "Getting Back to Work",
  },
  {
    href: "/experience-and-work",
    label: "How Early Experiences Shape Work",
    shortLabel: "Experience & Work",
  },
  { href: "/for-individuals", label: "For Job Seekers", shortLabel: "Job Seekers" },
  { href: "/for-employers", label: "For Employers & HR", shortLabel: "Employers" },
  {
    href: "/common-questions",
    label: "Common Questions",
    shortLabel: "Questions",
  },
  {
    href: "/support-when-you-need-it",
    label: "Support When You Need It",
    shortLabel: "Support",
  },
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

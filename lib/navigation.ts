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

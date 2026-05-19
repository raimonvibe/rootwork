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

export const additionalSupport = [
  {
    name: "988 Suicide & Crisis Lifeline",
    description: "Call or text 988 (US)",
    href: "tel:988",
  },
  {
    name: "Crisis Text Line",
    description: "Text HOME to 741741",
    href: "https://www.crisistextline.org/",
  },
  {
    name: "SAMHSA National Helpline",
    description: "1-800-662-4357 — mental health and recovery support",
    href: "tel:18006624357",
  },
  {
    name: "Psychology Today Therapist Finder",
    description: "Find a licensed therapist near you",
    href: "https://www.psychologytoday.com/us/therapists",
  },
];

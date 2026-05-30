export type Source = {
  name: string;
  url: string;
  description: string;
  /** Shown when the primary site is unreachable in some regions or networks */
  alternateUrl?: string;
  alternateLabel?: string;
};

export const trustedSources: Source[] = [
  {
    name: "SAMHSA",
    url: "https://www.samhsa.gov/",
    description:
      "US authority on mental health, wellbeing, and recovery resources.",
    alternateUrl:
      "https://www.usa.gov/agencies/substance-abuse-and-mental-health-services-administration",
    alternateLabel: "Open via USA.gov if the main site does not load",
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    url: "https://988lifeline.org/",
    description:
      "Free, confidential support by call, text, or chat — available 24 hours a day.",
    alternateUrl: "https://www.samhsa.gov/mental-health/988",
    alternateLabel: "Learn more via SAMHSA",
  },
  {
    name: "NCTSN",
    url: "https://www.nctsn.org/",
    description:
      "National Child Traumatic Stress Network — resources for young people, families, and educators.",
  },
  {
    name: "CDC — ACE Study",
    url: "https://www.cdc.gov/violenceprevention/aces/index.html",
    description:
      "Foundational research on early childhood experiences and lifelong health.",
  },
  {
    name: "WorkforceGPS",
    url: "https://workforcegps.org/",
    description:
      "US Dept. of Labor workforce resources for supportive, inclusive employment.",
  },
  {
    name: "CTIPP Toolkit",
    url: "https://www.ctipp.org/post/toolkit-trauma-informed-workplaces",
    description:
      "Supportive Workplaces Toolkit (2025 edition) — practical guidance for every level of an organization.",
  },
  {
    name: "National Youth Employment Coalition",
    url: "https://nyec.org/",
    description: "Youth employment best practices for supportive workplaces.",
  },
  {
    name: "National Fund for Workforce Solutions",
    url: "https://nationalfund.org/",
    description:
      "Workforce development research and programs that center people and their strengths.",
  },
  {
    name: "Mobility Mentoring",
    url: "https://empathways.org/mobility-mentoring/",
    description:
      "Center for Working Families coaching model that pairs people with mentors for career and life goals.",
  },
  {
    name: "Job Accommodation Network (JAN)",
    url: "https://askjan.org/",
    description:
      "Free guidance on workplace adjustments — from quiet space to flexible schedules.",
  },
  {
    name: "NCBI / PubMed",
    url: "https://www.ncbi.nlm.nih.gov/",
    description:
      "Peer-reviewed research on wellbeing and occupational functioning.",
  },
  {
    name: "Psychology Today",
    url: "https://www.psychologytoday.com/",
    description:
      "Accessible articles on early experiences and workplace dynamics.",
  },
  {
    name: "BSR",
    url: "https://www.bsr.org/",
    description:
      "Business case for supportive employment and inclusive workplace culture.",
  },
];

export const sourceStrip: { name: string; url: string }[] = [
  { name: "SAMHSA", url: "https://www.samhsa.gov/" },
  { name: "988 Lifeline", url: "https://988lifeline.org/" },
  { name: "NCTSN", url: "https://www.nctsn.org/" },
  { name: "WorkforceGPS", url: "https://workforcegps.org/" },
  { name: "CTIPP", url: "https://www.ctipp.org/" },
  { name: "NIH / PubMed", url: "https://www.ncbi.nlm.nih.gov/" },
];

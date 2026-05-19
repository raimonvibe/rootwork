export type Source = {
  name: string;
  url: string;
  description: string;
};

export const trustedSources: Source[] = [
  {
    name: "SAMHSA",
    url: "https://www.samhsa.gov/",
    description:
      "US authority on trauma, mental health, and substance use resources.",
  },
  {
    name: "CDC — ACE Study",
    url: "https://www.cdc.gov/violenceprevention/aces/index.html",
    description:
      "Foundational research on adverse childhood experiences (ACEs).",
  },
  {
    name: "WorkforceGPS",
    url: "https://workforcegps.org/",
    description:
      "US Dept. of Labor workforce resources integrating trauma-informed care.",
  },
  {
    name: "CTIPP Toolkit",
    url: "https://ctipp.org/",
    description: "Trauma-Informed Workplaces Toolkit (2025 edition).",
  },
  {
    name: "NCBI / PubMed",
    url: "https://www.ncbi.nlm.nih.gov/",
    description:
      "Peer-reviewed research on trauma and occupational functioning.",
  },
  {
    name: "National Youth Employment Coalition",
    url: "https://www.nyec.org/",
    description: "Youth employment trauma-informed best practices.",
  },
  {
    name: "Psychology Today",
    url: "https://www.psychologytoday.com/",
    description:
      "Accessible articles on childhood trauma and workplace dynamics.",
  },
  {
    name: "BSR",
    url: "https://www.bsr.org/",
    description:
      "Business case for trauma-informed employment and workplace culture.",
  },
];

export const sourceStrip = [
  "SAMHSA",
  "NCTSN",
  "WorkforceGPS",
  "CTIPP",
  "NIH / PubMed",
];

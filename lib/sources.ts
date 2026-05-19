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
      "US authority on mental health, wellbeing, and recovery resources.",
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
    url: "https://ctipp.org/",
    description: "Supportive Workplaces Toolkit (2025 edition).",
  },
  {
    name: "NCBI / PubMed",
    url: "https://www.ncbi.nlm.nih.gov/",
    description:
      "Peer-reviewed research on wellbeing and occupational functioning.",
  },
  {
    name: "National Youth Employment Coalition",
    url: "https://www.nyec.org/",
    description: "Youth employment best practices for supportive workplaces.",
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

export const sourceStrip = [
  "SAMHSA",
  "NCTSN",
  "WorkforceGPS",
  "CTIPP",
  "NIH / PubMed",
];

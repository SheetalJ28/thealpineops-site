export interface Program {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  highlights: string[];
  location: string;
  date: string;
  duration: string;
  status: "Open" | "Coming Soon" | "Closed";
  image?: string;
  gallery?: string[];
  detail: {
    eyebrow: string;
    expectTitle: string;
    snapshotTitle: string;
    snapshot: string;
    snapshotChips: string[];
    factLabels: {
      location: string;
      date: string;
      duration: string;
    };
    quickFacts: {
      icon: "duration" | "tourType" | "groupSize" | "tourGuide";
      label: string;
      value: string;
    }[];
    primaryCtaLabel: string;
    primaryCtaUrl: string;
    footerNote: string;
    footerCtaLabel: string;
    footerCtaUrl: string;
    stay: {
      title: string;
      summary: string;
      highlights: string[];
      images: string[];
    };
    trainingPlan: {
      title: string;
      days: {
        day: string;
        heading: string;
        items: string[];
      }[];
    };
    inclusionsExclusions: {
      title: string;
      inclusionsTitle: string;
      exclusionsTitle: string;
      inclusions: string[];
      exclusions: string[];
    };
    joinCriteria: {
      whoCanJoinTitle: string;
      whoCanJoin: string[];
      whoShouldJoinTitle: string;
      whoShouldJoin: string[];
    };
  };
}

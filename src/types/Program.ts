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
}

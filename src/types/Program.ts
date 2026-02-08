export interface Program {
  id: number;
  title: string;
  location: string;
  date: string;
  duration: string;
  status: "Open" | "Coming Soon" | "Closed";
}

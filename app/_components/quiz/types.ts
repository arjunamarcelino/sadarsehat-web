export interface QuizQuestion {
  number: number;
  question: string;
  answer: "Myth" | "Fact";
  briefExplanation: string;
  sources: string;
  longExplanation: string;
}

export type LayoutType = "mobile" | "tablet" | "tv-interactive" | "desktop";

export interface LayoutConfig {
  type: LayoutType;
  label: string;
  width: string;
  height: string;
  frameClass: string;
}


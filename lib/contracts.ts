export type ResearchStatus = "AUDITADO" | "TRAZADO" | "EN_DESARROLLO" | "SEMILLA";

export type ResearchRecord = {
  id: string;
  order: number | null;
  slug: string;
  title: string;
  shortTitle: string;
  status: ResearchStatus;
  updatedAt: string;
  collection: string;
  era: string;
  themes: string[];
  summary: string;
  readingMinutes: number;
  hero: string;
  claimIds: string[];
  sourceIds: string[];
};

export type ReaderStateV1 = {
  completed: string[];
  bookmarks: Array<{ slug: string; heading?: string }>;
  lastVisited?: {
    slug: string;
    heading?: string;
    progress: number;
    updatedAt: string;
  };
  preferredMode: "summary" | "full" | "evidence";
};

export const READER_STATE_KEY = "vt-reader-v1";

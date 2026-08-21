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

export type CatalogRecord = ResearchRecord & {
  key: string;
  file: string;
  featured: boolean;
};

export type CatalogListingRecord = Pick<
  CatalogRecord,
  "key" | "id" | "order" | "slug" | "title" | "shortTitle" | "status" | "collection" | "era" | "themes" | "summary" | "readingMinutes" | "hero"
>;

export type CatalogProgressRecord = Pick<CatalogRecord, "order" | "slug" | "shortTitle">;

export type SearchDocument = {
  slug: string;
  title: string;
  section: string;
  type: string;
  headings: string[];
  summary: string;
  ids: string[];
  themes: string[];
  era: string;
  status: string;
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

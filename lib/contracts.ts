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

export type ClaimRecord = {
  id: string;
  statement: string;
  confidence: string;
  status: string;
  evidenceIds: string[];
  sourceIds: string[];
  researchIds: string[];
};

export type EvidenceRecord = {
  id: string;
  claimIds: string[];
  observed: string;
  type: string;
  method: string;
  sourceIds: string[];
  assumptions: string;
  limitations: string;
  confidence: string;
  sourceLinkMode: string;
};

export type SourceRecord = {
  id: string;
  reference: string;
  access: string;
  method: string;
  result: string;
  limitations: string;
};

export type ControversyRecord = {
  id: string;
  topic: string;
  commonGround: string;
  dominant: string;
  alternatives: string;
  status: string;
  confidence: string;
};

export type ErrorRecord = {
  id: string;
  case: string;
  failedAssumption: string;
  correction: string;
  status: string;
};

export type KnowledgeRecord = ClaimRecord | EvidenceRecord | SourceRecord | ControversyRecord | ErrorRecord;

export type ResearchKnowledge = {
  claims: ClaimRecord[];
  evidence: EvidenceRecord[];
  sources: SourceRecord[];
  controversies: ControversyRecord[];
  errors: ErrorRecord[];
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

import spacetimeFundamentalEvidenceData from "../content/spacetime-fundamental-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type SpacetimeFundamentalProduct =
  | "derivación semiclásica"
  | "conjetura con verificaciones"
  | "derivación dentro de la correspondencia"
  | "cálculo numérico"
  | "observación"
  | "interpretación";

export type SpacetimeFundamentalCase = {
  id: string;
  title: string;
  product: SpacetimeFundamentalProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type SpacetimeFundamentalEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: SpacetimeFundamentalCase[];
};

export const spacetimeFundamentalEvidence = spacetimeFundamentalEvidenceData as SpacetimeFundamentalEvidenceData;

import dreamsEvidenceData from "../content/dreams-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type DreamsProduct =
  | "informe en primera persona"
  | "mecanismo"
  | "correlato cerebral"
  | "comunicación en tiempo real"
  | "intervención"
  | "función";

export type DreamsCase = {
  id: string;
  title: string;
  product: DreamsProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type DreamsEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DreamsCase[];
};

export const dreamsEvidence = dreamsEvidenceData as DreamsEvidenceData;

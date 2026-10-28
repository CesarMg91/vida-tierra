import agentsParticlesEvidenceData from "../content/agents-particles-evidence.json";
import type { PerceptionRealityLayer } from "./perception-reality-evidence";

export type AgentsParticlesProduct =
  | "resultado matemático"
  | "reproducción computacional"
  | "física matemática"
  | "conjetura"
  | "control"
  | "tesis metafísica";

export type AgentsParticlesCase = {
  id: string;
  title: string;
  product: AgentsParticlesProduct;
  stance: string;
  layers: PerceptionRealityLayer[];
};

export type AgentsParticlesEvidenceData = {
  schemaVersion: number;
  researchSlug: string;
  cases: AgentsParticlesCase[];
};

export const agentsParticlesEvidence = agentsParticlesEvidenceData as AgentsParticlesEvidenceData;

import datingData from "../content/civilization-dating.json";

export const datingLayerKinds = ["sample", "measurement", "calendar", "context", "phase", "event"] as const;

export type DatingLayerKind = (typeof datingLayerKinds)[number];

export type DatingLayer = {
  kind: DatingLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type DatingCase = {
  id: string;
  title: string;
  region: string;
  methods: string[];
  layers: DatingLayer[];
};

export type CivilizationDatingData = {
  schemaVersion: number;
  researchSlug: string;
  cases: DatingCase[];
};

export const civilizationDating = datingData as CivilizationDatingData;

import islamicWorldsMedicineNetworkData from "../content/islamic-worlds-medicine-networks.json";

export const islamicWorldsMedicineLayerKinds = [
  "witness",
  "version",
  "operation",
  "institution",
  "scope",
  "consequence",
] as const;

export type IslamicWorldsMedicineLayerKind = (typeof islamicWorldsMedicineLayerKinds)[number];

export type IslamicWorldsMedicineNetworkLayer = {
  kind: IslamicWorldsMedicineLayerKind;
  observed: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type IslamicWorldsMedicineNetworkCase = {
  id: string;
  title: string;
  region: string;
  archive: string;
  layers: IslamicWorldsMedicineNetworkLayer[];
};

export type IslamicWorldsMedicineNetworkData = {
  schemaVersion: number;
  researchSlug: string;
  cases: IslamicWorldsMedicineNetworkCase[];
};

export const islamicWorldsMedicineNetworks = islamicWorldsMedicineNetworkData as IslamicWorldsMedicineNetworkData;

import swasiaData from "../content/civilization-swasia.json";

export type SouthwestAsiaRegion = {
  id: string;
  label: string;
  window: string;
  sites: string[];
  archive: string;
  inference: string;
  limit: string;
  claimIds: string[];
  evidenceIds: string[];
  sourceIds: string[];
};

export type SouthwestAsiaData = {
  schemaVersion: number;
  researchSlug: string;
  regions: SouthwestAsiaRegion[];
};

export const southwestAsia = swasiaData as SouthwestAsiaData;

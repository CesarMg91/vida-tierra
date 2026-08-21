import { geoCircle, geoEqualEarth, geoGraticule10, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryObject, Topology } from "topojson-specification";
import landTopology from "world-atlas/land-110m.json";
import { civilizationCases } from "./civilizations";

export type CivilizationMapData = {
  width: number;
  height: number;
  landPath: string;
  graticulePath: string;
  markers: Array<{
    id: string;
    x: number;
    y: number;
    uncertaintyPath: string;
  }>;
};

export function getCivilizationMapData(): CivilizationMapData {
  const width = 1200;
  const height = 650;
  const projection = geoEqualEarth().fitExtent(
    [[24, 24], [width - 24, height - 24]],
    { type: "Sphere" },
  );
  const path = geoPath(projection);
  const topology = landTopology as unknown as Topology<{ land: GeometryObject }>;
  const land = feature(topology, topology.objects.land);
  const markers = civilizationCases.map((item) => {
    const projected = projection(item.coordinates);
    const area = geoCircle()
      .center(item.coordinates)
      .radius(item.uncertaintyKm / 111)
      .precision(1)();
    return {
      id: item.id,
      x: projected?.[0] ?? 0,
      y: projected?.[1] ?? 0,
      uncertaintyPath: path(area) ?? "",
    };
  });
  return {
    width,
    height,
    landPath: path(land) ?? "",
    graticulePath: path(geoGraticule10()) ?? "",
    markers,
  };
}

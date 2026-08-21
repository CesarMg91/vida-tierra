import type { MetadataRoute } from "next";
import { getIndex } from "../lib/content";
import { getCatalog } from "../lib/public-data";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const catalog = getCatalog();
  const updatedBySlug = new Map(catalog.map((record) => [record.slug, record.updatedAt]));
  const portals: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "weekly" },
    { url: absoluteUrl("/viaje"), priority: 0.9, changeFrequency: "monthly" },
    { url: absoluteUrl("/explorar"), priority: 0.9, changeFrequency: "weekly" },
    { url: absoluteUrl("/cronologia"), priority: 0.85, changeFrequency: "monthly" },
    { url: absoluteUrl("/civilizaciones"), priority: 0.95, changeFrequency: "monthly" },
    { url: absoluteUrl("/civilizaciones/comparar"), priority: 0.8, changeFrequency: "monthly" },
    { url: absoluteUrl("/evidencia"), priority: 0.85, changeFrequency: "weekly" },
    { url: absoluteUrl("/como-sabemos"), priority: 0.8, changeFrequency: "monthly" },
    { url: absoluteUrl("/privacidad"), priority: 0.4, changeFrequency: "yearly" },
  ];
  const documents: MetadataRoute.Sitemap = getIndex().map((document) => {
    const updatedAt = updatedBySlug.get(document.slug);
    return {
      url: absoluteUrl(`/${document.slug}`),
      ...(updatedAt ? { lastModified: new Date(updatedAt) } : {}),
      changeFrequency: updatedAt ? "monthly" : "yearly",
      priority: updatedAt ? 0.8 : 0.55,
    };
  });
  return [...portals, ...documents];
}

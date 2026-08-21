import type { Metadata } from "next";

export const SITE_NAME = "¿Cómo sabemos lo que sabemos?";
export const SITE_DESCRIPTION = "Historia profunda del cosmos, la Tierra, la vida, la humanidad y las civilizaciones con cada cadena de inferencia visible.";
export const SITE_URL = (process.env.SITE_URL ?? "https://vida-tierra.vercel.app").replace(/\/+$/, "");
export const SITE_VERSION = "0.2.0";
export const AUTHOR_NAME = "Cesar Mendez";
export const REPOSITORY_URL = "https://github.com/CesarMg91/vida-tierra";
export const DEFAULT_OG_IMAGE = "/assets/visuales/hero-historia-profunda.png";

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  pathname,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const canonical = absoluteUrl(pathname);
  const imageUrl = absoluteUrl(image);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      locale: "es_MX",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, width: 1672, height: 941, alt: `Portada editorial de ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

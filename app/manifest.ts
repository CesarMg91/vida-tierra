import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "¿Cómo sabemos lo que sabemos?",
    short_name: "¿Cómo sabemos?",
    description: "Historia profunda del cosmos, la Tierra, la vida, la humanidad y las civilizaciones con cada cadena de inferencia visible.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0D0E",
    theme_color: "#0B0D0E",
    lang: "es-MX",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

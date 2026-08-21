import "./globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import type { ReactNode } from "react";
import PrivacyAnalytics from "../components/PrivacyAnalytics";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import StructuredData from "../components/StructuredData";
import {
  absoluteUrl,
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  REPOSITORY_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SITE_VERSION,
} from "../lib/site";

const sourceSerif = localFont({
  src: [
    { path: "../node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-ext-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-ext-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

const plexSans = localFont({
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-ext-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const plexMono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-ext-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["Consolas", "monospace"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s — ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: REPOSITORY_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  keywords: ["historia profunda", "evidencia científica", "epistemología", "Tierra", "evolución", "civilizaciones", "arqueología"],
  category: "educación y divulgación científica",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1672, height: 941, alt: "Historia profunda del cosmos, la Tierra, la vida y la humanidad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

// Evita el parpadeo de tema claro antes de que hidrate React.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('vt-theme')||'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "es",
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/#project`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: absoluteUrl("/"),
        version: SITE_VERSION,
        inLanguage: "es",
        isAccessibleForFree: true,
        license: "https://creativecommons.org/licenses/by/4.0/",
        author: { "@type": "Person", name: AUTHOR_NAME },
        codeRepository: REPOSITORY_URL,
      },
    ],
  };
  return (
    <html lang="es" className={`${sourceSerif.variable} ${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
      </head>
      <body>
        <StructuredData data={structuredData} />
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido" className="site-main">{children}</main>
        <SiteFooter />
        {process.env.VERCEL ? <PrivacyAnalytics /> : null}
      </body>
    </html>
  );
}

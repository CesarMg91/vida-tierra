import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Database, ExternalLink, HardDrive, Search, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "../../lib/site";

const description = "Qué se guarda en tu dispositivo, qué métricas agregadas se reciben y cómo protegemos las consultas de búsqueda.";

export const metadata: Metadata = createPageMetadata({
  title: "Privacidad",
  description,
  pathname: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <div className="page-shell privacy-page">
      <header className="portal-hero compact">
        <p className="eyebrow">Privacidad · versión 1 · 21 agosto 2026</p>
        <h1>Leer sin cuenta también es una decisión de diseño</h1>
        <p>No hay perfiles, comentarios, formularios de usuario ni sincronización entre dispositivos. Tu lectura permanece en tu navegador.</p>
      </header>

      <section className="privacy-summary" aria-labelledby="privacy-summary-title">
        <div><ShieldCheck aria-hidden="true" /><span>Principio</span><h2 id="privacy-summary-title">Recoger lo mínimo</h2></div>
        <p>La primera versión pública sólo usa almacenamiento local para recordar tu experiencia y métricas agregadas para saber si el sitio funciona. No vendemos datos ni construimos un historial personal de lectura.</p>
      </section>

      <div className="privacy-grid">
        <article>
          <HardDrive aria-hidden="true" />
          <h2>Permanece en tu dispositivo</h2>
          <p><code>vt-reader-v1</code> guarda investigaciones completadas, marcadores, último punto de lectura y modo preferido. <code>vt-theme</code> recuerda el tema visual.</p>
          <p>Puedes borrar estos datos eliminando el almacenamiento del sitio en tu navegador. Un valor corrupto se descarta sin bloquear la página.</p>
        </article>
        <article>
          <Search aria-hidden="true" />
          <h2>La búsqueda no se analiza</h2>
          <p>El índice se carga en el navegador cuando abres la búsqueda. Antes de enviar un evento analítico eliminamos toda consulta y fragmento de la URL.</p>
          <p>Eso incluye <code>?q=</code>, filtros de Explorar, IDs de Evidencia y selecciones del comparador.</p>
        </article>
        <article>
          <BarChart3 aria-hidden="true" />
          <h2>Métricas agregadas</h2>
          <p>Vercel Web Analytics cuenta visitas agregadas sin cookies de terceros. Speed Insights mide señales de rendimiento como LCP, INP y CLS.</p>
          <p>No enviamos eventos personalizados, texto escrito, marcadores ni progreso de lectura.</p>
        </article>
        <article>
          <Database aria-hidden="true" />
          <h2>Servicios y enlaces externos</h2>
          <p>El sitio se publica en Vercel y el código vive en GitHub. Al abrir un DOI, GitHub u otro enlace externo, ese servicio aplica su propia política.</p>
          <p>Las ilustraciones y documentos se sirven desde el mismo sitio; no se insertan rastreadores publicitarios.</p>
        </article>
      </div>

      <section className="privacy-details" aria-labelledby="privacy-details-title">
        <div>
          <p className="eyebrow">Transparencia verificable</p>
          <h2 id="privacy-details-title">La política coincide con el código</h2>
        </div>
        <div>
          <p>La función que limpia las URLs, las claves de almacenamiento y la configuración analítica son públicas y revisables. Si la práctica cambia, esta página y su fecha cambiarán en el mismo commit.</p>
          <ul>
            <li><a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noreferrer">Privacidad de Vercel Web Analytics <ExternalLink aria-hidden="true" /></a></li>
            <li><a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noreferrer">Documentación de Speed Insights <ExternalLink aria-hidden="true" /></a></li>
            <li><Link href="/LICENCIAS">Licencias y atribución del proyecto</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

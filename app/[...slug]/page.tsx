import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getIndex, getDoc } from "../../lib/content";
import { getCatalog, getResearchKnowledge } from "../../lib/public-data";
import ResearchEvidence from "../../components/ResearchEvidence";
import ResearchReader from "../../components/ResearchReader";
import ResearchSummary from "../../components/ResearchSummary";

// El valor debe ser un literal para que Next.js pueda analizar la configuración
// durante el build. Las rutas publicadas son las enumeradas por
// generateStaticParams; al agregar un .md nuevo se reinicia el servidor local.
export const dynamicParams = false;

export function generateStaticParams() {
  return getIndex().map((d) => ({ slug: d.slug.split("/") }));
}

type PageProps = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDoc(slug.join("/"));
  return { title: doc ? `${doc.title} — ¿Cómo sabemos lo que sabemos?` : "No encontrado" };
}

const ESTADOS: Record<string, string> = {
  AUDITADO: "Cadena completa: adversario, incertidumbre y falsadores revisados.",
  REPLICADO: "Además existe reproducción o reanálisis independiente documentado.",
  TRAZADO: "Claim, evidencia y fuente enlazados.",
  EN_DESARROLLO: "Evidencia localizada, análisis incompleto.",
  SEMILLA: "Entrada creada para organizar trabajo futuro.",
  REVISAR: "Nueva evidencia o error detectado.",
  RETIRADO: "Formulación abandonada, conservada para historial.",
};

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = await getDoc(slug.join("/"));
  if (!doc) notFound();

  const catalog = getCatalog();
  const record = catalog.find((item) => item.slug === doc.slug);
  if (record && doc.readerSections) {
    const mentionedIds = [...doc.html.matchAll(/data-knowledge-id="([^"]+)"/g)].map((match) => match[1]);
    const knowledge = getResearchKnowledge(record, mentionedIds);
    const ordered = catalog.filter((item) => item.order !== null).sort((a, b) => Number(a.order) - Number(b.order));
    const currentIndex = record.order === null ? ordered.length : ordered.findIndex((item) => item.slug === record.slug);
    const previousRecord = currentIndex > 0 ? ordered[currentIndex - 1] : null;
    const nextRecord = record.order === null ? null : ordered[currentIndex + 1] ?? null;
    const neighbor = (item: typeof previousRecord) => item ? ({ slug: item.slug, shortTitle: item.shortTitle, order: item.order }) : null;
    const readerRecord = {
      id: record.id,
      slug: record.slug,
      title: record.title,
      shortTitle: record.shortTitle,
      status: record.status,
      updatedAt: record.updatedAt,
      collection: record.collection,
      era: record.era,
      themes: record.themes,
      readingMinutes: record.readingMinutes,
      hero: record.hero,
    };

    return (
      <ResearchReader
        record={readerRecord}
        toc={doc.toc}
        previous={neighbor(previousRecord)}
        next={neighbor(nextRecord)}
        summary={<ResearchSummary record={record} sections={doc.readerSections} />}
        full={(
          <div className="reader-full-document">
            <div className="doc" dangerouslySetInnerHTML={{ __html: doc.html }} />
            <footer className="doc-footer">
              <Link href="/explorar">Volver a Explorar</Link>
              <a href={`https://github.com/CesarMg91/vida-tierra/blob/main/${doc.file}`} target="_blank" rel="noreferrer">Ver Markdown canónico en GitHub</a>
            </footer>
          </div>
        )}
        evidence={<ResearchEvidence knowledge={knowledge} falsifiersHtml={doc.readerSections.falsifiersHtml} />}
      />
    );
  }

  return (
    <div className="document-page page-shell">
      <article className="doc">
        {doc.estado && (
          <p className={`estado estado-${doc.estado}`} title={ESTADOS[doc.estado] ?? ""}>
            {doc.estado.replace(/_/g, " ")}
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: doc.html }} />
        <footer className="doc-footer">
          <Link href="/explorar">Volver a Explorar</Link>
          <a
            href={`https://github.com/CesarMg91/vida-tierra/blob/main/${doc.file}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver la fuente de esta página en GitHub
          </a>
        </footer>
      </article>
    </div>
  );
}

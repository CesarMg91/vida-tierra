import type { CatalogRecord } from "../lib/contracts";
import type { ContentDocument } from "../lib/content";

export default function ResearchSummary({
  record,
  sections,
}: {
  record: CatalogRecord;
  sections: NonNullable<ContentDocument["readerSections"]>;
}) {
  return (
    <div className="research-summary-view">
      <section className="summary-question" aria-labelledby="summary-question-title">
        <p className="eyebrow">La pregunta</p>
        <h2 id="summary-question-title">{record.title}</h2>
        <div className="summary-facts">
          <span>{record.status}</span>
          <span>{record.collection}</span>
          <span>{record.readingMinutes} min completa</span>
        </div>
      </section>
      <section id="respuesta-breve" aria-labelledby="respuesta-breve-title">
        <p className="eyebrow">Respuesta breve</p>
        <h2 id="respuesta-breve-title">La mejor respuesta actual, con condiciones</h2>
        <div className="doc-fragment summary-lead" dangerouslySetInnerHTML={{ __html: sections.answerHtml }} />
      </section>
      <div className="summary-pair">
        <section id="que-sabemos" aria-labelledby="que-sabemos-title">
          <p className="eyebrow">Lo más firme</p>
          <h2 id="que-sabemos-title">Qué sabemos realmente</h2>
          <div className="doc-fragment" dangerouslySetInnerHTML={{ __html: sections.knownHtml }} />
        </section>
        <section id="confianza" aria-labelledby="confianza-title">
          <p className="eyebrow">Lectura epistemológica</p>
          <h2 id="confianza-title">Confianza y condiciones</h2>
          <div className="doc-fragment" dangerouslySetInnerHTML={{ __html: sections.confidenceHtml }} />
        </section>
      </div>
      <section id="que-falta" className="summary-unknown" aria-labelledby="que-falta-title">
        <p className="eyebrow">Frontera abierta</p>
        <h2 id="que-falta-title">Qué todavía no sabemos</h2>
        <div className="doc-fragment" dangerouslySetInnerHTML={{ __html: sections.unknownHtml }} />
      </section>
    </div>
  );
}

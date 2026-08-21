import type { ResearchKnowledge } from "../lib/contracts";

function KnowledgeLink({ id }: { id: string }) {
  return (
    <a
      className="knowledge-link"
      href={`/evidencia?id=${encodeURIComponent(id)}`}
      data-knowledge-id={id}
      title={`Abrir ${id} sin abandonar la lectura`}
    >
      {id}
    </a>
  );
}

export default function ResearchEvidence({
  knowledge,
  falsifiersHtml,
}: {
  knowledge: ResearchKnowledge;
  falsifiersHtml: string;
}) {
  const evidenceById = new Map(knowledge.evidence.map((record) => [record.id, record]));
  const sourceById = new Map(knowledge.sources.map((record) => [record.id, record]));

  return (
    <div className="research-evidence-view">
      <section className="evidence-overview" aria-labelledby="evidence-overview-title">
        <div>
          <p className="eyebrow">Cadena auditable</p>
          <h2 id="evidence-overview-title">De cada afirmación a su archivo</h2>
          <p>Abre un ID para consultar el registro completo en un drawer. Nada de esta vista reemplaza el manuscrito: organiza sus relaciones explícitas.</p>
        </div>
        <dl>
          <div><dt>Claims</dt><dd>{knowledge.claims.length}</dd></div>
          <div><dt>Evidencias</dt><dd>{knowledge.evidence.length}</dd></div>
          <div><dt>Fuentes</dt><dd>{knowledge.sources.length}</dd></div>
        </dl>
      </section>

      <section className="claim-ledger" aria-labelledby="claim-ledger-title">
        <h2 id="claim-ledger-title">Claims y puentes</h2>
        {knowledge.claims.map((claim, index) => {
          const evidence = claim.evidenceIds.map((id) => evidenceById.get(id)).filter(Boolean);
          const sourceIds = new Set([
            ...claim.sourceIds,
            ...evidence.flatMap((item) => item?.sourceIds ?? []),
          ]);
          return (
            <details key={claim.id} open={index === 0} className="claim-chain">
              <summary>
                <span className="knowledge-id-label">{claim.id}</span>
                <strong>{claim.statement}</strong>
                <small>{claim.confidence} · {claim.status}</small>
              </summary>
              <div className="claim-chain-body">
                <div className="claim-evidence-list">
                  <h3><KnowledgeLink id={claim.id} /> · Evidencia vinculada</h3>
                  {evidence.length ? evidence.map((item) => item ? (
                    <article key={item.id}>
                      <KnowledgeLink id={item.id} />
                      <p><strong>Observado:</strong> {item.observed}</p>
                      <p><strong>Método:</strong> {item.method}</p>
                      <p><strong>Límite:</strong> {item.limitations}</p>
                    </article>
                  ) : null) : <p>No hay una evidencia separada enlazada en el registro.</p>}
                </div>
                <div className="claim-source-list">
                  <h3>Fuentes de la cadena</h3>
                  <ul>
                    {[...sourceIds].map((id) => (
                      <li key={id}>
                        <KnowledgeLink id={id} />
                        {sourceById.get(id)?.reference ? <span>{sourceById.get(id)?.reference}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          );
        })}
      </section>

      <section id="falsadores" className="falsifier-panel" aria-labelledby="falsifier-title">
        <p className="eyebrow">Pruebas discriminatorias</p>
        <h2 id="falsifier-title">Qué podría falsarlo</h2>
        <div className="doc-fragment" dangerouslySetInnerHTML={{ __html: falsifiersHtml }} />
      </section>

      {knowledge.controversies.length || knowledge.errors.length ? (
        <section className="related-audits" aria-labelledby="related-audits-title">
          <h2 id="related-audits-title">Controversias y errores explícitamente enlazados</h2>
          <div>
            {[...knowledge.controversies, ...knowledge.errors].map((item) => (
              <article key={item.id}>
                <KnowledgeLink id={item.id} />
                <p>{"topic" in item ? item.topic : item.case}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section id="fuentes-relacionadas" className="source-ledger" aria-labelledby="source-ledger-title">
        <h2 id="source-ledger-title">Fuentes relacionadas</h2>
        <ol>
          {knowledge.sources.map((source) => (
            <li key={source.id}>
              <KnowledgeLink id={source.id} />
              <p>{source.reference}</p>
              <small>{source.access}</small>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

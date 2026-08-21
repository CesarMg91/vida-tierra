import assert from "node:assert/strict";
import test from "node:test";
import { formatCitation } from "../lib/citations.ts";
import { extractMarkdownSection, renderMarkdownForTest } from "../lib/content.ts";

test("las capas breves se extraen por estructura Markdown y no rompen tablas", () => {
  const markdown = `# Investigación

## Respuesta breve, con sus condiciones

Texto inicial.

### Matiz

| Señal | Lectura |
|---|---|
| A | B |

\`\`\`text
CLAIM-TEST-001 | no es una tabla
\`\`\`

## Qué sabemos realmente

Sección siguiente.
`;
  const section = extractMarkdownSection(markdown, /^respuesta breve(?:, con sus condiciones)?$/i);
  assert.match(section, /### Matiz/);
  assert.match(section, /\| Señal \| Lectura \|/);
  assert.match(section, /CLAIM-TEST-001 \| no es una tabla/);
  assert.doesNotMatch(section, /Qué sabemos realmente/);
});

test("el HTML del lector envuelve tablas y enlaza IDs del conocimiento", async () => {
  const html = await renderMarkdownForTest(`
| ID | Resultado |
|---|---|
| EVID-TEST-001 | Observado |

Relacionado con \`CLAIM-TEST-001\` y SRC-TEST-001.
`);
  assert.match(html, /class="table-scroll"/);
  assert.match(html, /role="region"/);
  assert.match(html, /data-knowledge-id="EVID-TEST-001"/);
  assert.match(html, /data-knowledge-id="CLAIM-TEST-001"/);
  assert.match(html, /data-knowledge-id="SRC-TEST-001"/);
  assert.doesNotMatch(html, /<pre[^>]*>[\s\S]*data-knowledge-id/);
});

test("las citas Markdown, APA y BibTeX son reproducibles y limpian el estado de URL", () => {
  const input = {
    id: "INV-052",
    title: "Comparación de las primeras civilizaciones",
    updatedAt: "2026-08-20",
    url: "https://ejemplo.test/investigacion?modo=evidence#claim",
  };
  const markdown = formatCitation(input, "markdown");
  const apa = formatCitation(input, "apa");
  const bibtex = formatCitation(input, "bibtex");
  assert.match(markdown, /^\[Comparación/);
  assert.match(apa, /\(2026\)/);
  assert.match(bibtex, /^@misc\{inv-052,/);
  for (const citation of [markdown, apa, bibtex]) {
    assert.match(citation, /https:\/\/ejemplo\.test\/investigacion/);
    assert.doesNotMatch(citation, /modo=evidence|#claim/);
  }
});

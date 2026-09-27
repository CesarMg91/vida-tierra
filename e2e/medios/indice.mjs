/** Genera INDICE.md a partir del catálogo y de lo que realmente existe en disco. */
import fs from "node:fs";
import path from "node:path";

export async function escribirIndice(salida) {
  // El catálogo es TypeScript: se lee con el stripper nativo de Node.
  const { CAPTURAS, VIDEOS } = await import("./catalogo.ts");

  const hay = (rel) => fs.existsSync(path.join(salida, rel));
  const kb = (rel) => {
    try {
      return `${Math.round(fs.statSync(path.join(salida, rel)).size / 1024)} KB`;
    } catch {
      return "—";
    }
  };

  const filasCapturas = CAPTURAS.map((c) => {
    const red = `capturas/redes/${c.id}.png`;
    const estado = hay(red) ? "✅" : "⚠️ falta";
    return `| \`${c.id}.png\` | ${c.titulo.replace(/\n/g, " ")} | ${c.muestra} | ${c.tema} | ${estado} ${kb(red)} |`;
  }).join("\n");

  const filasVideos = VIDEOS.map((v) => {
    const mp4 = `videos/redes/${v.id}.mp4`;
    const estado = hay(mp4) ? "✅" : "⚠️ falta";
    return `| \`${v.id}.mp4\` | ${v.titulo.replace(/\n/g, " ")} | ${v.muestra} | ${estado} ${kb(mp4)} |`;
  }).join("\n");

  const incidencias = path.join(salida, "INCIDENCIAS.log");
  const notas = fs.existsSync(incidencias)
    ? `\n## Incidencias de la última corrida\n\n\`\`\`text\n${fs.readFileSync(incidencias, "utf8").trim()}\n\`\`\`\n`
    : "";

  const texto = `# Kit de medios — ¿Cómo sabemos lo que sabemos?

Generado el ${new Date().toISOString().slice(0, 10)} desde el sitio público en local.
Regenerar con \`npm run medios\` en \`D:/Proyectos/vida-tierra\`.

Todo el material sale del contenido real y público del proyecto. No hay datos
personales que proteger: el repositorio es abierto y el contenido es CC BY 4.0.

**Regla editorial:** ninguna pieza afirma más de lo que sostiene su claim. Si un
texto menciona una conclusión, lleva su nivel de confianza y enlaza al registro.

## Capturas

Crudas en \`capturas/crudas/\` (pantalla sola, 1179x2556).
Para redes en \`capturas/redes/\` (lienzo 1080x1920 con marco y marca).

| Archivo | Título | Qué muestra | Tema | Estado |
|---|---|---|---|---|
${filasCapturas}

## Videos

Crudos en \`videos/crudos/\` (webm 392x852, sin audio ni cursor).
Para redes en \`videos/redes/\` (MP4 H.264 1080x1920, 30 fps).

| Archivo | Título | Qué muestra | Estado |
|---|---|---|---|
${filasVideos}

## Calendario

El plan de publicación de dos semanas está en [\`PUBLICACIONES.md\`](PUBLICACIONES.md).
${notas}`;

  fs.mkdirSync(salida, { recursive: true });
  fs.writeFileSync(path.join(salida, "INDICE.md"), texto, "utf8");
  console.log(`medios: índice escrito en ${path.join(salida, "INDICE.md")}`);
}

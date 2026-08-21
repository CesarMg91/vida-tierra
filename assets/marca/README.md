# Identidad de marca

## Concepto

El símbolo transforma el método del proyecto en una figura compacta:

- tres arcos representan archivos superpuestos —estratos, órbitas y escalas temporales—;
- la cadena vertical representa el paso explícito de una observación a otra;
- el punto de cobre inferior representa una conclusión provisional, no una verdad aislada;
- el contorno circular mantiene juntas las cinco escalas editoriales: cosmos, Tierra, vida, humanidad y civilizaciones.

La marca evita iconos literales de libros, microscopios, ADN, globos o bombillas. Debe conservarse legible a 16 px y también funcionar en una tinta.

## Paleta

| Uso | Color |
|---|---|
| Obsidiana | `#0B0D0E` |
| Cobre | `#B88949` |
| Verde mineral | `#779B88` |
| Pergamino | `#F2EADB` |
| Tinta | `#211F1A` |

## Archivos públicos

- `public/brand/logo-mark.svg`: símbolo maestro a color.
- `public/brand/logo-lockup-dark.svg` y `logo-lockup-light.svg`: símbolo y nombre completo para ambos temas.
- `public/brand/logo-lockup-*-1520.png`: versiones raster listas para perfiles, presentaciones y publicaciones.
- `public/brand/logo-mark-mono-*.svg`: versiones monocromáticas.
- `public/brand/logo-mark-1024.png`: exportación transparente de alta resolución.
- `public/brand/avatar-social-1024.png`: avatar cuadrado con zona segura.
- `public/brand/icon-192.png`, `icon-512.png` e `icon-maskable-512.png`: PWA.
- `app/favicon.ico`, `app/icon.svg` y `app/apple-icon.png`: metadatos automáticos de Next.js.

Para regenerar las exportaciones desde el SVG maestro:

```bash
npm run brand:build
```

## Uso

- Mantener como espacio libre mínimo la anchura de uno de los nodos pequeños.
- No recolorear cada arco por separado ni añadir degradados, sombras o texturas.
- No usar el lockup por debajo de 320 px de ancho; usar el símbolo solo.
- Para fondos claros usar la versión a color o `mono-ink`; para fondos oscuros usar la versión a color o `mono-parchment`.

## Trazabilidad de ImageGen

El archivo `concepto-imagegen-v1.png` es una exploración conceptual, no el arte final. El símbolo de producción fue redibujado como SVG determinista para corregir proporciones, simplificar detalles y asegurar legibilidad en favicon.

Prompt final utilizado con la herramienta integrada de ImageGen:

> Use case: logo-brand. Asset type: simplified master logo mark. Radically simplify the referenced emblem into a favicon-ready geometric symbol. Preserve only its core idea: three open concentric stratigraphic/orbital arcs forming a subtle eye-like archive, a vertical chain of exactly three circular evidence nodes, and one central copper discovery point. Precise flat vector-style mark, uniform strokes, strong negative space, transparent background, copper `#B88949`, mineral green `#779B88`, parchment `#F2EADB`; no literal objects, text, gradients, shadows, textures, mockup, 3D or watermark.

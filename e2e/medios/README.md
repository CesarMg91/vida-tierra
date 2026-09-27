# Kit de medios para redes

Genera capturas verticales y mini demos en video del sitio público, listas para
Instagram, TikTok, Facebook, LinkedIn y X.

## Un comando

```bash
npm run medios
```

Levanta el sitio en local, captura, graba, compone con ffmpeg y escribe el
índice. Si ya hay un servidor local respondiendo, lo reutiliza; si lo levantó
él, lo apaga al terminar.

Entrega en `D:/Proyectos/amia-medios/vida-tierra/`:

```text
INDICE.md              tabla de todas las piezas con su estado
PUBLICACIONES.md       calendario de dos semanas con textos y hashtags
capturas/crudas/       la pantalla sola, 1179x2556
capturas/redes/        la pantalla en el lienzo 1080x1920
videos/crudos/         el recorrido en webm, 392x852, sin audio ni cursor
videos/redes/          MP4 H.264 1080x1920 a 30 fps
```

## No corre solo

- Exige `MEDIOS=1`. Sin esa variable la configuración aborta, para que nunca
  entre en `npm test` ni en CI.
- Exige que `MEDIOS_URL` sea `localhost`. Contra cualquier otro host, aborta.
- Los PNG y MP4 generados **no se commitean**: `.gitignore` los excluye.

## Variables

| Variable | Para qué | Por defecto |
|---|---|---|
| `MEDIOS_SALIDA` | Carpeta de entrega | `D:/Proyectos/amia-medios/vida-tierra` |
| `MEDIOS_PUERTO` | Puerto del sitio local | `3287` |
| `MEDIOS_URL` | URL base, obligatoriamente local | `http://localhost:$MEDIOS_PUERTO` |
| `FFMPEG` | Ruta al binario | la instalación de WinGet |

## Archivos

| Archivo | Qué hace |
|---|---|
| `catalogo.ts` | Única fuente de verdad: pantallas, videos y geometría del lienzo |
| `lienzo.ts` | El lienzo 1080x1920 en HTML/CSS: marco de iPhone, título y marca |
| `capturas.medios.ts` | Captura cada pantalla y la monta en el lienzo |
| `videos.medios.ts` | Graba los recorridos y los compone con ffmpeg |
| `indice.mjs` | Escribe `INDICE.md` según lo que existe en disco |
| `run.mjs` | El comando único |
| `PUBLICACIONES.plantilla.md` | Calendario editorial, se copia a la entrega |

## Cómo añadir una pieza

Todo sale de `catalogo.ts`. Añade una entrada a `CAPTURAS` o a `VIDEOS` y
vuelve a correr `npm run medios`: el índice se actualiza solo.

Los títulos usan `\n` para el salto de línea y no deberían pasar de dos líneas.

## Reglas de contenido

Este proyecto no tiene datos privados que simular: el sitio es público y el
contenido es CC BY 4.0. La regla que sí aplica es otra, y viene de
[`25_audiovisual/POLITICA_VISUAL.md`](../../25_audiovisual/POLITICA_VISUAL.md):

> Ninguna pieza afirma más de lo que sostiene su claim.

En la práctica:

- Si un texto da una conclusión, lleva su letra de confianza de A a E.
- Nada de «la ciencia demuestra». El producto es mostrar *cómo* se sabe y
  *cuánto* se sabe.
- Las ilustraciones generadas se declaran como tales.
- Las cifras salen de los registros maestros, no de la memoria de nadie.

## Detalles de montaje que cuestan una tarde

- **Las imágenes `file://` no cargan** en páginas creadas con `setContent`: el
  navegador las bloquea por origen. Logo, fuentes y capturas van incrustados en
  base64.
- **H.264 rechaza dimensiones impares.** Un lienzo de 1080x1919 rompe el
  encoder con un error que habla de «bit_rate». Por eso todas las capturas del
  lienzo llevan `clip` explícito y ffmpeg reescala como red de seguridad.
- **La máscara necesita `-loop 1`.** Sin eso solo cubre el primer cuadro.
- **Y por eso `-shortest` no corta.** Con entradas en bucle el fin del webm no
  atraviesa `alphamerge`: ffmpeg codifica para siempre y, al matarlo, el MP4
  queda sin `moov` e ilegible. La duración va explícita con `-t`, medida con
  ffprobe.
- **`browser.newPage()` hereda el `use` de la config.** Con `isMobile: true` y
  sin meta viewport, Chromium maqueta a 980 px y encoge la página: la máscara
  de 620 px salía al 63 % y recortaba el video. Las páginas del lienzo se
  abren con `isMobile: false` y las plantillas llevan meta viewport.
- **El webm empieza en blanco**, antes de la primera navegación. Ese tramo se
  recorta con `-ss`.
- **El video se compone en tres capas** —fondo, video enmascarado e isla— para
  que respete las esquinas redondeadas y la Dynamic Island quede encima.

## Qué hacer con lo que salga feo

Nada. Si una captura muestra un texto cortado, un desborde o un problema de
área segura, **no se arregla la app desde aquí**: se anota en
`INCIDENCIAS.log` y en el reporte. El kit documenta el sitio, no lo maquilla.

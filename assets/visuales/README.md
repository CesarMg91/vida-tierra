# Registro de visuales

Los visuales explicativos son una capa editorial; nunca sustituyen datos, figuras primarias ni registros de evidencia. Cuando una pieza sea conceptual, su leyenda debe decirlo. Cuando represente relaciones científicas, debe poder reconstruirse desde código o texto y enlazar los claims pertinentes.

| Archivo | Tipo | Uso | Procedencia | Límites científicos |
|---|---|---|---|---|
| [`hero-historia-profunda.png`](hero-historia-profunda.png) | ilustración conceptual raster | portada general del proyecto | generada con OpenAI ImageGen el 2026-08-10; prompt registrado abajo | no está a escala; comprime épocas; no es evidencia ni reconstrucción literal |
| [`cadena-inferencia.svg`](cadena-inferencia.svg) | diagrama vectorial reproducible | explicar el método maestro | SVG original del proyecto, 2026-08-10 | relación lógica general; cada investigación debe detallar sus pasos reales |
| [`escala-confianza.svg`](escala-confianza.svg) | diagrama vectorial reproducible | explicar confianza A–E | SVG original del proyecto, 2026-08-10 | la letra pertenece a una formulación exacta, no a un tema completo |
| [`mapa-investigacion-002.svg`](mapa-investigacion-002.svg) | mapa epistemológico vectorial | resumen de evidencias cosmológicas | SVG original del proyecto, 2026-08-10 | independencia parcial; flechas no significan medición directa ni escala temporal |

## Prompt de la portada

**Modo:** generación nueva, sin imagen de referencia.

> Create an original wide 16:9 cinematic editorial illustration for an open Spanish-language scientific research project titled conceptually “How do we know what we know? Deep history of Earth, life, and humanity.” No text, no labels, no logos, no watermark. One continuous left-to-right visual journey with smooth transitions: faint cosmic microwave background texture and cosmic web; stellar nucleosynthesis and a forming protoplanetary disk; a luminous molten early Earth with a small young Moon; cooling crust with a microscopic zircon crystal; an ancient ocean with subtle microbial mats; layered fossils and branching life; distant early human silhouettes observing the sky; the faint geometry of an early city at the far right. Scientifically grounded rather than fantasy, elegant dark indigo and charcoal background, mineral gold and cyan highlights, restrained color, high-detail natural-history museum aesthetic, dramatic but sober, ample dark negative space near upper center for a title to be added later. Do not show dinosaurs beside humans, do not imply literal scale or simultaneity, no religious symbols, no clocks, no equations, no typography.

La imagen se conserva como una metáfora temporal continua. Los elementos vecinos pertenecen a épocas distintas; esa compresión se declara para impedir una lectura literal.

## Reglas de mantenimiento

- conservar SVG con `title` y `desc` accesibles;
- no copiar figuras de publicaciones sin licencia y atribución verificadas;
- registrar fecha, herramienta, prompt o código y transformaciones;
- distinguir `conceptual`, `reconstrucción`, `dato`, `mapa` y `diagrama`;
- si cambia un claim, revisar también todos los visuales que lo resuman.

# Design QA — experiencia pública, PR 2

## Artefactos y normalización

- **Verdad visual:** `C:\Users\HUAWEI\.codex\generated_images\019fedb0-8f24-7e33-8d16-d2418ba3378e\exec-88e9637c-fa99-4f49-929e-aa013dcccd77.png`
- **Captura final de implementación:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr2\home-1440-pass4.png`
- **Comparación final lado a lado:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr2\comparison-pass4.png`
- **Viewport CSS:** 1440 × 1024 px; `deviceScaleFactor: 1`.
- **Píxeles de origen:** 1487 × 1058 px.
- **Píxeles de implementación:** 1440 × 1024 px.
- **Normalización:** ambos artefactos se redujeron a 720 × 512 px y se colocaron sin marco, uno junto al otro, preservando su relación de aspecto prácticamente idéntica.
- **Estado:** portada `/`, tema oscuro, scroll superior, sin autenticación ni datos de usuario.

## Evidencia de comparación

La comparación de vista completa confirma la misma estructura dominante: navegación oscura superior, hero panorámico Cosmos → Tierra → Vida → Humanidad → Civilizaciones, titular en dos líneas en el tercio inferior izquierdo, dos CTA y riel cronológico antes del inicio de la sección de evidencia. La captura final conserva el hero original del repositorio y su recorte, no una aproximación.

No fue necesario un recorte adicional: el origen y la implementación se abrieron también a resolución completa y los tres focos críticos —titular/CTA, riel de etapas e inicio de la sección de evidencia— resultaron legibles. La geometría final medida en navegador fue: hero 798.7 px de alto; titular `y=448`, `h=124.4`; CTA hasta `y=712.3`; riel desde `y=724.3`, sin solapamiento.

## Superficies de fidelidad

- **Tipografía:** Source Serif 4 autoalojada reproduce el carácter editorial del titular; IBM Plex Sans/Mono separa interfaz, metadatos e IDs. La escala final del titular es 69.12 px, interlínea 62.21 px y dos líneas estables en escritorio. No hay truncamiento.
- **Espaciado y ritmo:** margen principal de 96 px a 1440 px, hero de aproximadamente 800 px y siguiente sección visible en el primer viewport. CTA y riel conservan 12 px de separación mínima. Las pruebas de 390, 768, 1024 y 1440 px no mostraron scroll horizontal.
- **Color y tokens:** obsidiana, tinta, cobre y ámbar siguen la referencia; los gradientes se limitan al sombreado necesario para contraste sobre la imagen. Foco, hover y selección usan el mismo cobre semántico.
- **Imagen y activos:** se usa `hero-historia-profunda.png` con `next/image`, dimensiones/crop estables y prioridad sólo en el hero. Los iconos funcionales provienen de Lucide; no se introdujeron emoji, SVG artesanales, CSS art ni stock.
- **Texto y contenido:** misión, CTA y cinco etapas conservan el sentido de la maqueta. Se añadieron sólo textos necesarios para privacidad, límites de la ilustración, progreso y navegación pública.

## Hallazgos

No quedan diferencias accionables P0, P1 o P2.

- **Variación aceptada (no bloqueante): laboratorio de evidencia.** La maqueta representa Claim → Evidencia → Fuente → Método → Dato con objetos fotográficos; la implementación usa iconos accesibles y un panel interactivo. Es una adaptación deliberada al contrato del producto: no inventar decoración científica ni afirmar que un objeto ilustrativo es evidencia real. La jerarquía, secuencia y función educativa se conservan.
- **P3 opcional:** en una iteración futura podrían generarse activos documentados y científicamente neutros para dar mayor materialidad al laboratorio, siempre que el atlas visual registre su condición conceptual.

## Historial de iteraciones P0/P1/P2

1. **Pass 1 — bloqueado.** P1: el titular se partía en cuatro líneas y el bloque de CTA colisionaba con el riel; el hero también excedía la proporción del origen. Evidencia: `home-1440-viewport.png` y `comparison-pass1.png`.
   - **Corrección:** dos líneas explícitas, ancho editorial de 78 rem, hero de 78 svh con máximo 50 rem y reposicionamiento del contenido.
2. **Pass 2 — bloqueado.** P2: el CTA todavía invadía el área del riel y la sección de evidencia empezaba demasiado abajo. Evidencia: `home-1440-pass2.png` y `comparison-pass2.png`.
   - **Corrección:** ajuste conjunto de escala/interlínea, márgenes del bloque, riel a 1.6 rem del borde y reducción del padding superior de evidencia.
3. **Pass 3 — apto con refinamiento.** El solapamiento desapareció y el hero coincidió en altura; se refinó la escala óptica del titular frente al origen. Evidencia: `home-1440-pass3.png` y `comparison-pass3.png`.
   - **Corrección:** titular a `clamp(3.2rem, 4.8vw, 4.55rem)` con interlínea `0.9`.
4. **Pass 4 — aprobado.** Sin diferencias accionables P0/P1/P2. Evidencia: `home-1440-pass4.png` y `comparison-pass4.png`.

## Estados e interacciones verificados

- Menú, tema claro/oscuro y persistencia local.
- Búsqueda global diferida: 0 cargas del índice antes de abrir y 1 después; consulta sin tilde `arqueologia` devuelve resultados con `arqueología`.
- Filtros combinados y URL compartible (`q` + `coleccion`).
- Progreso local del viaje: marcar, recargar y conservar 2 %.
- Tabs de evidencia con semántica, foco y navegación por flechas.
- Imágenes cargadas con dimensiones naturales válidas.
- Consola sin errores; sólo mensajes informativos de React DevTools/HMR en desarrollo.
- Axe WCAG 2 A/AA: 0 violaciones en portada, viaje, explorar, cronología, civilizaciones, evidencia y cómo sabemos.
- Core Web Vitals locales en desarrollo: CLS 0, FCP 228 ms, LCP 228 ms; el build de producción generó 229/229 páginas.

## Extensión PR 3 — lector y laboratorio

El lector y `/evidencia` reutilizan sin desviaciones el sistema aprobado en PR 2: obsidiana, cobre, Source Serif 4 e IBM Plex, bordes rectos, IDs monoespaciados y jerarquía “museo vivo + laboratorio”. La maqueta elegida contractualmente cubre la portada; estas superficies nuevas se juzgaron contra ese lenguaje, el contrato funcional del plan y estados reales del corpus, no contra una pantalla inventada.

- **Lector 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr3\reader-hero-fixed-1440.png`.
- **Resumen completo 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr3\reader-summary-1440.png`.
- **Cadena de evidencia 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr3\reader-evidence-1440.png`.
- **Lector y evidencia móvil 390 px:** `reader-mobile-390.png` y `reader-evidence-mobile-390.png` en el mismo directorio de QA.
- **Laboratorio 1440/390 px:** `evidence-explorer-1440.png` y `evidence-explorer-mobile-390.png`.

Hallazgos cerrados durante la revisión:

1. Un título largo de la Investigación 052 podía salir por encima del hero. Se amplió el ancho editorial, se redujo la escala máxima y se hizo adaptable la altura; la captura final muestra título y metadatos completos.
2. El registro de confianza exponía cientos de modificadores como opciones independientes. Se sustituyó por los grados canónicos A–E del sistema metodológico, manteniendo la formulación completa dentro de cada tarjeta.
3. Los IDs dentro de `summary` producían controles interactivos anidados. El resumen conserva el ID como etiqueta y el enlace contextual se trasladó al cuerpo expandido.
4. Los controles iconográficos móviles recibieron nombres accesibles explícitos. Axe WCAG 2.2 A/AA termina con 0 violaciones en lector y laboratorio, tanto a 390 como a 1440 px.
5. La impresión inicial mantenía tablas completas y dejaba saltos excesivos. Se habilitaron saltos por fila, repetición del encabezado y protección de títulos; el PDF de prueba bajó de 20 a 19 páginas y se inspeccionaron portada, tablas intermedias y cierre sin recortes ni superposiciones.

Interacciones verificadas con datos reales: tres modos y navegación por teclado; claim → evidencia → fuente en drawer modal; citas Markdown/APA/BibTeX; marcador, completado, modo, progreso y encabezado en `vt-reader-v1`; búsqueda sin tilde; filtros A–E y por estado; URLs de consulta/tipo/ID; deep link directo a una fuente; tarjetas paginadas; impresión y PDF; cero scroll horizontal a 390 px.

No quedan diferencias accionables P0, P1 o P2 en el alcance del PR 3.

## Extensión PR 4 — viaje, atlas y comparador de Civilizaciones

La experiencia conserva la verdad visual seleccionada y el sistema ya aprobado: fondo obsidiana, cobre y ámbar como señal, Source Serif 4 para narrativa, IBM Plex para interfaz, bordes rectos y fotografías documentadas del propio proyecto. La comparación directa entre la referencia y la captura final confirmó jerarquía, contraste, navegación suspendida, hero panorámico, titular editorial y paso continuo de museo a laboratorio.

- **Referencia contractual:** `C:\Users\HUAWEI\.codex\generated_images\019fedb0-8f24-7e33-8d16-d2418ba3378e\exec-88e9637c-fa99-4f49-929e-aa013dcccd77.png`.
- **Viaje completo 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr4-civilizaciones-1440.png`.
- **Comparador completo 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr4-comparador-1440.png`.
- **Estados móviles 390 px:** `vida-tierra-pr4-civilizaciones-390.png` y `vida-tierra-pr4-comparador-390.png` en el mismo directorio de QA.
- **Matriz responsive:** `vida-tierra-pr4-civilizaciones-768.png` y `vida-tierra-pr4-civilizaciones-1024.png`, además de las capturas 390/1440.

Hallazgos cerrados durante la revisión:

1. El SVG cartográfico contenía controles enfocables dentro de un contenedor `role="img"`; se convirtió en grupo accesible con título y descripción, conservando los marcadores como botones de teclado.
2. Dos grupos con nombre accesible carecían de rol. Atlas y cronología recibieron semántica de grupo explícita.
3. La atribución y el caso activo del atlas fallaban contraste por una diferencia mínima o por mezcla de fondos; se elevaron los tonos de número, región y atribución.
4. Los resúmenes canónicos podían volver demasiado altas las cuatro tarjetas de expediente; se acotaron a diez líneas sin tocar el contenido fuente ni el enlace al manuscrito completo.
5. El comparador móvil se redujo deliberadamente a una dimensión visible a la vez; el selector adhesivo preserva las dimensiones elegidas y evita una matriz ilegible.

Interacciones y aceptación verificadas con datos reales:

- selección por mapa y por lista; Alta Amazonia actualiza título, periodo, límite cartográfico y fuente sin navegación;
- selección de uno a tres casos; al llegar a tres, los restantes se deshabilitan y vuelven a habilitarse al quitar uno;
- casos y dimensiones se serializan en `?casos=...&dimensiones=...`, sobreviven a la navegación y descartan valores desconocidos;
- cambio móvil entre Urbanismo, Escritura y Autoridad con una única sección expuesta;
- cada celda entrega archivo observado, inferencia permitida, límite y al menos un ID existente;
- `No demostrado`, `Dato ausente` y `Evidencia contraria` permanecen estados visuales y semánticos distintos;
- el mapa usa geometría Natural Earth 1:110m y círculos geodésicos de incertidumbre; no dibuja fronteras históricas;
- alternativa textual tabular del atlas, navegación por teclado y foco visible;
- Axe WCAG 2.2 A/AA: 0 violaciones en viaje y comparador a 390 y 1024 px; sólo quedan comprobaciones manuales de contraste sobre gradientes del hero;
- anchuras medidas 390/390 y 1024/1024, sin scroll horizontal;
- Core Web Vitals locales de producción a 390 px: viaje FCP/LCP 92 ms, TTFB 4.9 ms, CLS 0; comparador FCP/LCP 52 ms, TTFB 2.3 ms, CLS 0;
- 19/19 pruebas, typecheck y build estático de 231/231 páginas verdes.

No quedan diferencias accionables P0, P1 o P2 en el alcance del PR 4.

## Extensión PR 5 — descubrimiento, privacidad y lanzamiento v0.2.0

La capa de lanzamiento preserva la referencia contractual y añade solamente superficies coherentes con el sistema aprobado: pie global, transparencia, política de privacidad y metadatos de publicación. La portada final se volvió a comparar visualmente con la referencia en el mismo pase; conserva encuadre, jerarquía, titular, navegación, cobre/ámbar y transición museo–laboratorio sin introducir activos decorativos ajenos.

- **Referencia contractual:** `C:\Users\HUAWEI\.codex\generated_images\019fedb0-8f24-7e33-8d16-d2418ba3378e\exec-88e9637c-fa99-4f49-929e-aa013dcccd77.png`.
- **Portada final 1440 px:** `C:\Users\HUAWEI\.codex\visualizations\2026\08\10\019fedb0-8f24-7e33-8d16-d2418ba3378e\vida-tierra-pr5\home-1440-final.png`.
- **Política de privacidad 1440/390 px:** `privacy-1440-final.png` y `privacy-390-final.png` en el mismo directorio de QA.
- **Comparador final 390 px:** `comparator-390-final.png`.
- **Lighthouse móvil:** `lighthouse-home-mobile-release.json`.

Hallazgos cerrados durante la revisión:

1. El comparador prerenderizaba un fallback pequeño y desplazaba el documento al hidratar (CLS 0.19–0.29). Se eliminó el bailout de `useSearchParams`, se renderizó el comparador completo desde el HTML estático y la URL pasó a un almacén externo sincronizado. Resultado final: CLS 0 con casos y dimensiones compartibles intactos.
2. Las fuentes autoalojadas usaban `font-display: swap` sin ajuste métrico explícito. Se migraron a `next/font/local`, con precarga, fallbacks ajustados y variables compartidas por todo el sistema.
3. El hero original se servía sin optimización y la primera auditoría Lighthouse obtuvo 75 en rendimiento. Se activaron AVIF/WebP responsivos, `srcset`, preload y `fetchPriority="high"`; la auditoría final obtuvo 93.
4. La ausencia de favicon generaba el único error de consola y reducía buenas prácticas a 96. El icono final se genera como PNG de 64×64 a partir del hero documentado; responde 200 y elevó buenas prácticas a 100.
5. Analytics y Speed Insights quedaron limitados al entorno Vercel. Antes de enviar mediciones se eliminan consulta y fragmento; la búsqueda, filtros, IDs, marcadores y progreso no se transmiten.

Aceptación final verificada:

- Lighthouse móvil: **93 rendimiento, 100 accesibilidad, 100 buenas prácticas y 100 SEO**; CLS 0 y TBT 91.5 ms.
- Navegador local de producción a 390 px: portada LCP 744 ms, comparador LCP 388 ms, ambos CLS 0 y sin scroll horizontal.
- Axe WCAG 2.2 A/AA: 0 violaciones en portada, privacidad, Cómo sabemos, lector y comparador; los únicos elementos incompletos requieren comprobación manual por estar sobre gradientes fotográficos y fueron revisados visualmente.
- 235 páginas estáticas; canonical productivo, Open Graph, Twitter Cards, `Article`/`CreativeWork` JSON-LD, sitemap con 230 URLs, robots y favicon válidos.
- Cabeceras de tipo, encuadre, referencia, permisos, aislamiento y HSTS presentes; `SITE_URL` permite cambiar de dominio sin tocar código.
- 23/23 pruebas de contenido, lector, búsqueda, Civilizaciones, privacidad, metadatos y seguridad; validadores estructural, datos públicos, DOI, TypeScript y `git diff --check` verdes.
- No quedan diferencias accionables P0, P1 o P2 para el lanzamiento.

## Resultado final

final result: passed

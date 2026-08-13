# Roadmap maestro de investigación

El orden principal es cronológico. Las ramas transversales se abren solo cuando sus prerrequisitos han sido establecidos, para no comenzar por conclusiones tardías sin haber auditado los relojes y archivos que las sostienen.

## Regla de avance

Una investigación pasa de `EN_DESARROLLO` a `AUDITADO` cuando:

- sus claims están en el registro;
- toda cifra central enlaza evidencia y fuente;
- instrumentos, calibraciones y principios están descritos;
- se evaluó independencia;
- existe adversario fuerte, falsadores y cierre de once secciones;
- los enlaces y IDs fueron validados.

## Fase 0 — Infraestructura epistemológica

**Estado:** completada en versión 0.1.

| Entrega | Estado |
|---|---|
| arquitectura y árbol | completado |
| plantillas | completado |
| registros maestros | completado, crecerán continuamente |
| confianza A–E | completado |
| etiquetas de incertidumbre | completado |
| cronología semilla | completado en esta fase |
| política de fuentes y contribución | completado |

## Fase 1 — Antes de la Tierra y nacimiento planetario

| Orden | ID | Pregunta | Productos mínimos |
|---:|---|---|---|
| 001 | `INV-EARTH-AGE-001` | ¿Cómo sabemos la edad de la Tierra y reconstruimos sus primeros cientos de Ma? | U–Pb/Pb–Pb, CAIs, meteoritos, Hf–W, Luna, zircones, adversarios |
| 002 | `INV-COSMOS-AGE-001` | ¿Cómo sabemos que el universo tiene una historia y una edad finita? | expansión, CMB, BBN, SN Ia, BAO, edades estelares, tensiones y límites |
| 003 | `INV-COSMOS-ELEMENTS-001` | [¿Cómo sabemos dónde y cómo se formaron los elementos?](01_cosmos/INVESTIGACION_003_ORIGEN_ELEMENTOS.md) | espectros, neutrinos, BBN, Tc, supernovas, kilonovas, rayos cósmicos y meteoritos — **AUDITADO** |
| 004 | `INV-COSMOS-STARS-001` | [¿Cómo inferimos nacimiento, evolución y muerte de estrellas?](01_cosmos/INVESTIGACION_004_EVOLUCION_ESTELAR.md) | paralaje, binarias, cúmulos, sismología, formación, neutrinos y remanentes — **AUDITADO** |
| 005 | `INV-SOLAR-FORMATION-001` | [¿Cómo inferimos una nebulosa y disco protoplanetario?](01_cosmos/INVESTIGACION_005_FORMACION_SISTEMA_SOLAR.md) | dos archivos, CAIs/cóndrulos, `26Al`, CC/NC, Wild 2, magnetismo y planetesimales — **AUDITADO** |
| 006 | `INV-EARTH-ACCRETION-001` | [¿Cómo ocurrió y cuánto duró la acreción terrestre?](02_formacion_tierra/INVESTIGACION_006_ACRECION_TIERRA.md) | Hf–W condicionado, diferenciación multietapa, N-cuerpos, colisiones, procedencia, HSE y agua — **AUDITADO** |
| 007 | `INV-EARTH-CORE-001` | [¿Cómo sabemos que existe el núcleo terrestre, qué contiene y cuándo se diferenció?](02_formacion_tierra/INVESTIGACION_007_NUCLEO_TIERRA.md) | sismología, modos normales, momento de inercia, física mineral, siderófilos, Hf–W y geodinamo — **AUDITADO** |
| 008 | `INV-MOON-ORIGIN-001` | [¿Cómo se formó la Luna y qué parte del impacto podemos reconstruir?](02_formacion_tierra/INVESTIGACION_008_ORIGEN_LUNA.md) | muestras Apollo, núcleo, anortositas, O/Ti/V/K, momento angular, cronómetros y familias canónica/alta energía/sinestia/múltiple — **AUDITADO** |

**Salida de fase:** cronología de hitos 4.567–4.4 Ga con incertidumbres de medición y modelo separadas.

## Fase 2 — Hadeano y Arcaico

| Orden | ID | Pregunta |
|---:|---|---|
| 009 | `INV-HADEAN-CRUST-001` | [¿Qué conservan zircones, Acasta y Nuvvuagittuq de la primera corteza?](02_formacion_tierra/INVESTIGACION_009_CORTEZA_HADEANA.md) — **AUDITADO** |
| 010 | `INV-HADEAN-WATER-001` | [¿Cuándo hubo agua líquida y qué significa la señal de oxígeno?](03_hadeano/INVESTIGACION_010_AGUA_HADEANA.md) — **AUDITADO** |
| 011 | `INV-HADEAN-ATMOSPHERE-001` | [¿Cómo se restringe una atmósfera sin muestras de aire?](03_hadeano/INVESTIGACION_011_ATMOSFERA_HADEANA.md) — **AUDITADO** |
| 012 | `INV-HADEAN-IMPACTS-001` | [¿Pico tardío, cola de acreción o modelo híbrido?](03_hadeano/INVESTIGACION_012_IMPACTOS_HADEANOS.md) — **AUDITADO** |
| 013 | `INV-ARCHEAN-LIFE-001` | [¿Cuál es la evidencia de vida más antigua?](04_arcaico/INVESTIGACION_013_VIDA_MAS_ANTIGUA.md) — **AUDITADO** |
| 014 | `INV-ARCHEAN-PHOTOSYNTHESIS-001` | [¿Cuándo surgieron fotosíntesis y producción de oxígeno?](04_arcaico/INVESTIGACION_014_FOTOSINTESIS_OXIGENO.md) — **AUDITADO** |

**Salida de fase:** separar habitabilidad, evidencia de vida, fototrofía, producción local de `O₂` y oxigenación planetaria.

## Fase 3 — Proterozoico y complejidad celular

| Orden | ID | Pregunta |
|---:|---|---|
| 015 | `INV-PROT-GOE-001` | [¿Cómo sabemos que aumentó el oxígeno?](05_proterozoico/INVESTIGACION_015_GRAN_OXIDACION.md) — **AUDITADO** |
| 016 | `INV-LIFE-LUCA-001` | [¿Qué se puede reconstruir de LUCA y qué no?](09_origen_vida/INVESTIGACION_016_LUCA.md) — **AUDITADO** |
| 017 | `INV-LIFE-EUK-001` | [¿Cómo inferimos el origen de eucariotas y la endosimbiosis mitocondrial?](10_evolucion_vida/INVESTIGACION_017_EUCARIOGENESIS.md) — **AUDITADO** |
| 018 | `INV-LIFE-SEX-001` | [¿Cómo inferimos el origen y la función evolutiva del sexo?](10_evolucion_vida/INVESTIGACION_018_SEXO.md) — **AUDITADO** |
| 019 | `INV-LIFE-MULTI-001` | [¿Cuántas veces surgió la multicelularidad y cuándo un grupo se volvió individuo?](10_evolucion_vida/INVESTIGACION_019_MULTICELULARIDAD.md) — **AUDITADO** |
| 020 | `INV-PROT-SNOWBALL-001` | [¿Estuvo la Tierra globalmente congelada durante el Criogénico?](05_proterozoico/INVESTIGACION_020_SNOWBALL_EARTH.md) — **AUDITADO** |
| 021 | `INV-EDIACARA-001` | [¿Qué eran los organismos ediacáricos y cómo vivían?](05_proterozoico/INVESTIGACION_021_EDIACARA.md) — **AUDITADO** |

## Fase 4 — Fanerozoico: radiaciones, tierra firme y extinciones

| Orden | ID | Periodo/pregunta central |
|---:|---|---|
| 022 | `INV-CAMBRIAN-001` | [¿Fue súbita la radiación cámbrica o está comprimida por el registro?](06_paleozoico/INVESTIGACION_022_RADIACION_CAMBRICA.md) — **AUDITADO** |
| 023 | `INV-ORDOVICIAN-001` | diversificación marina, primeras tierras y extinción |
| 024 | `INV-SILURIAN-001` | plantas vasculares, artrópodos y costas |
| 025 | `INV-DEVONIAN-001` | bosques, peces y transición agua–tierra |
| 026 | `INV-CARBONIFEROUS-001` | carbón, oxígeno, gigantismo y amniotas |
| 027 | `INV-PERMIAN-001` | Pangea, sinápsidos y mayor extinción |
| 028 | `INV-TRIASSIC-001` | recuperación, dinosaurios y mamíferos tempranos |
| 029 | `INV-JURASSIC-001` | aves, dinosaurios y tectónica |
| 030 | `INV-CRETACEOUS-001` | flores, insectos, aves y mamíferos |
| 031 | `INV-KPG-001` | impacto, Deccan y mecanismos de extinción |

En cada periodo se auditarán primero sus límites cronoestratigráficos y después las narraciones biológicas.

## Fase 5 — Cenozoico y camino humano

| Orden | ID | Pregunta |
|---:|---|---|
| 032 | `INV-PALEOGENE-001` | recuperación, mamíferos, primates, ballenas y PETM |
| 033 | `INV-NEOGENE-001` | pastizales, primates, clima e istmo de Panamá |
| 034 | `INV-QUATERNARY-001` | glaciaciones, megafauna y cambios rápidos |
| 035 | `INV-HOMININ-SPLIT-001` | ¿Cómo se fecha la separación con otros simios? |
| 036 | `INV-HOMININ-EARLY-001` | Sahelanthropus, Orrorin y Ardipithecus |
| 037 | `INV-AUSTRALOPITH-001` | australopitecos y Paranthropus |
| 038 | `INV-HOMO-EARLY-001` | habilis, erectus y categorías tempranas de Homo |
| 039 | `INV-HOMO-MIDDLE-001` | heidelbergensis y poblaciones del Pleistoceno medio |
| 040 | `INV-NEAND-DENIS-001` | neandertales, denisovanos y mestizaje |
| 041 | `INV-HOMO-OTHER-001` | floresiensis, naledi y diversidad tardía |
| 042 | `INV-SAPIENS-ORIGIN-001` | origen africano: región única o población estructurada |

## Fase 6 — Expansión, mente y civilización

| Orden | ID | Pregunta |
|---:|---|---|
| 043 | `INV-SAPIENS-OoA-001` | ¿Cuántas salidas de África y cuáles dejaron descendencia? |
| 044 | `INV-MIGR-ASIA-AUS-001` | poblamiento de Asia y Sahul |
| 045 | `INV-MIGR-EUROPE-001` | llegada a Europa y coexistencia |
| 046 | `INV-MIGR-AMERICAS-001` | ¿cuándo y por qué rutas se poblaron las Américas? |
| 047 | `INV-MIND-TOOLS-FIRE-001` | herramientas, fuego y cooperación |
| 048 | `INV-MIND-LANGUAGE-001` | ¿cuándo apareció lenguaje y qué huellas puede dejar? |
| 049 | `INV-MIND-SYMBOL-001` | entierros, arte, música, ritual y símbolos |
| 050 | `INV-NEOLITHIC-001` | agriculturas y domesticaciones múltiples |
| 051 | `INV-CITIES-STATES-001` | aldeas, especialización, jerarquías, ciudades y estados |
| 052 | `INV-CIVILIZATIONS-001` | comparación arqueológica de primeras civilizaciones |

## Fase 7 — Ramas transversales

Después de disponer de la secuencia base:

- historia genética: mtDNA, Y, autosomas, ADN antiguo, cuellos de botella y mezcla;
- historia de métodos: estratigrafía, fósiles, radiometría, paleomagnetismo, genética;
- catálogo de errores científicos;
- atlas de controversias y preguntas abiertas;
- mapas de dependencia entre claims;
- manuscrito, sitio interactivo, podcast y guiones documentales.

## Cadencia de mantenimiento

| Frecuencia | Acción |
|---|---|
| por cada investigación | actualizar cinco registros maestros y mapa/cronología si aplica |
| por cada fuente nueva | verificar DOI, acceso, tipo y claim exacto que sostiene |
| trimestral | revisar claims `PROV`, enlaces rotos y nueva literatura |
| anual | reauditar escalas temporales, constantes y controversias activas |
| antes de publicar narrativa | congelar corte de datos e informe reproducible |

## Hitos públicos

- `v0.1`: arquitectura + Investigación 001.
- `v0.1.1`: Investigación 002 + atlas visual inicial + prólogo cósmico.
- `v0.1.2`: Investigación 003 + historia de la nucleosíntesis + matriz visual de contribuciones.
- `v0.1.3`: Investigación 004 + historia de la evolución estelar + rutas visuales ramificadas.
- `v0.1.4`: Investigación 005 + historia de la hipótesis nebular + mapa de los dos archivos de la formación solar.
- `v0.1.5`: Investigación 006 + historia de la acreción moderna + mapa de cinco archivos/finales terrestres.
- `v0.1.6`: Investigación 007 + historia del descubrimiento del núcleo + rutas sísmicas, geoquímicas, mineralógicas y magnéticas.
- `v0.1.7`: Investigación 008 + historia del impacto lunar + matriz de restricciones y modelos competidores.
- `v0.1.8`: Investigación 009 + historia del archivo hadeano + comparación mineral/protolito/intrusión y límites geodinámicos.
- `v0.1.9`: Investigación 010 + historia de la hidrosfera inferida + cadena `δ18O`–fuente–agua y límites de océano/clima.
- `v0.1.10`: Investigación 011 + historia de la atmósfera por variables + cadena zircon–fundido–gas–aire y límites poshadeanos.
- `v0.1.11`: Investigación 012 + historia del cataclismo lunar + función muestra–evento–flujo y discrepancia de South Pole–Aitken.
- `v0.1.12`: Investigación 013 + historia de las biosignaturas arcaicas + cadena edad–indigeneidad–singenicidad–biogenicidad.
- `v0.1.13`: Investigación 014 + historia del récord de oxígeno + cuatro relojes y cadena fototrofía–oasis–atmósfera.
- `v0.1.14`: Investigación 015 + historia de la Gran Oxidación + mapa reservorio–proxy y cadena roca–señal–atmósfera.
- `v0.1.15`: Investigación 016 + historia molecular de LUCA + mapa por capas y cadena gen–ancestro.
- `v0.1.16`: Investigación 017 + historia de la endosimbiosis + mapa de dos genealogías y cadena simbiosis–orgánulo.
- `v0.1.17`: Investigación 018 + historia de la citología sexual + mapa modular y cadena intercambio–ciclo sexual.
- `v0.1.18`: Investigación 019 + historia del concepto de multicelularidad + mapa de orígenes independientes y cadena grupo–individuo.
- `v0.1.19`: Investigación 020 + historia de Snowball Earth + mapa de archivos independientes y cadena diamictita–modelo climático.
- `v0.1.20`: Investigación 021 + historia de la biota ediacárica + mapa por taxón y cadena impresión–afinidad.
- `v0.1.21`: Investigación 022 + historia de la radiación cámbrica + mapa de relojes/archivos y cadena aparición–radiación.
- `v0.2`: Hadeano/Arcaico auditados.
- `v0.3`: Proterozoico y origen/temprana evolución de la vida.
- `v0.4`: Fanerozoico completo.
- `v0.5`: evolución humana y migraciones.
- `v0.6`: civilizaciones y genética humana.
- `v1.0`: primera síntesis integral con revisión externa.

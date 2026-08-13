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
| 023 | `INV-ORDOVICIAN-001` | [¿Fue la radiación ordovícica un evento global y qué terminó con ella?](06_paleozoico/INVESTIGACION_023_RADIACION_ORDOVICICA.md) — **AUDITADO** |
| 024 | `INV-SILURIAN-001` | [¿Cómo se recuperó la vida en el Silúrico y cuándo se ensamblaron ecosistemas terrestres?](06_paleozoico/INVESTIGACION_024_RECUPERACION_SILURICA.md) — **AUDITADO** |
| 025 | `INV-DEVONIAN-001` | [¿Fue el Devónico la «edad de los peces» y cómo transformaron bosques y tetrápodos la Tierra?](06_paleozoico/INVESTIGACION_025_BOSQUES_PECES_TETRAPODOS.md) — **AUDITADO** |
| 026 | `INV-CARBONIFEROUS-001` | [¿Por qué se acumuló tanto carbón en el Carbonífero y cómo se relacionaron oxígeno, incendios, gigantismo y amniotas?](06_paleozoico/INVESTIGACION_026_CARBON_OXIGENO_AMNIOTAS.md) — **AUDITADO** |
| 027 | `INV-PERMIAN-001` | [¿Cómo se ensambló Pangea, qué eran los sinápsidos y por qué la mayor extinción no tuvo una sola causa?](06_paleozoico/INVESTIGACION_027_PANGEA_SINAPSIDOS_EXTINCION.md) — **AUDITADO** |
| 028 | `INV-TRIASSIC-001` | [¿Cómo se reconstruyó la biosfera triásica y cuándo aparecieron dinosaurios y mamaliaformes?](07_mesozoico/INVESTIGACION_028_RECUPERACION_DINOSAURIOS_MAMALIAFORMES.md) — **AUDITADO** |
| 029 | `INV-JURASSIC-001` | [¿Cómo fragmentó el Jurásico a Pangea y qué revela sobre dinosaurios, avialanos y mamaliaformes?](07_mesozoico/INVESTIGACION_029_JURASICO_PANGEA_DINOSAURIOS_AVIALANOS_MAMMALIAFORMES.md) — **AUDITADO** |
| 030 | `INV-CRETACEOUS-001` | [¿Cómo transformaron las angiospermas las redes cretácicas y qué revelan insectos, aves y mamíferos?](07_mesozoico/INVESTIGACION_030_CRETACICO_FLORES_INSECTOS_AVES_MAMIFEROS.md) — **AUDITADO** |
| 031 | `INV-KPG-001` | [¿Cómo conectamos Chicxulub, Deccan, la extinción K–Pg y la recuperación sin confundir coincidencia con mecanismo?](07_mesozoico/INVESTIGACION_031_KPG_IMPACTO_DECCAN_EXTINCION_RECUPERACION.md) — **AUDITADO** |

En cada periodo se auditarán primero sus límites cronoestratigráficos y después las narraciones biológicas.

## Fase 5 — Cenozoico y camino humano

| Orden | ID | Pregunta |
|---:|---|---|
| 032 | `INV-PALEOGENE-001` | [¿Cómo reconstruimos recuperación, mamíferos, primates, ballenas y PETM sin una marcha inevitable?](08_cenozoico/INVESTIGACION_032_PALEOGENO_RECUPERACION_MAMIFEROS_PRIMATES_BALLENAS_PETM.md) — **AUDITADO** |
| 033 | `INV-NEOGENE-001` | [¿Cómo reconstruimos pastizales, primates, clima y el istmo de Panamá sin una cadena causal única?](08_cenozoico/INVESTIGACION_033_NEOGENO_PASTIZALES_PRIMATES_CLIMA_ISTMO_PANAMA.md) — **AUDITADO** |
| 034 | `INV-QUATERNARY-001` | [¿Cómo reconstruimos glaciaciones, megafauna y cambios rápidos sin fundir seis relojes?](08_cenozoico/INVESTIGACION_034_CUATERNARIO_GLACIACIONES_MEGAFAUNA_CAMBIOS_RAPIDOS.md) — **AUDITADO** |
| 035 | `INV-HOMININ-SPLIT-001` | [¿Cómo fechamos la separación del linaje humano respecto de otros simios si cada región del genoma tiene una historia distinta?](08_cenozoico/INVESTIGACION_035_SEPARACION_LINAJES_HUMANOS_OTROS_SIMIOS.md) — **AUDITADO** |
| 036 | `INV-HOMININ-EARLY-001` | [¿Cómo identificamos a los primeros homininos si edad, bipedalismo y parentesco no son la misma evidencia?](08_cenozoico/INVESTIGACION_036_PRIMEROS_HOMININOS_SAHELANTHROPUS_ORRORIN_ARDIPITHECUS.md) — **AUDITADO** |
| 037 | `INV-AUSTRALOPITH-001` | [¿Cómo distinguimos especies, locomoción, dieta y parentesco entre australopitecos y Paranthropus sin convertir su diversidad en una escalera hacia Homo?](08_cenozoico/INVESTIGACION_037_AUSTRALOPITECOS_PARANTHROPUS.md) — **AUDITADO** |
| 038 | `INV-HOMO-EARLY-001` | [¿Cómo reconocemos a Homo temprano, habilis y erectus si fósiles, herramientas, cuerpos y moléculas responden preguntas distintas?](08_cenozoico/INVESTIGACION_038_HOMO_TEMPRANO_HABILIS_ERECTUS.md) — **AUDITADO** |
| 039 | `INV-HOMO-MIDDLE-001` | [¿Cómo reconstruimos las poblaciones humanas del Pleistoceno medio sin convertir Homo heidelbergensis en un cajón de sastre ni cada fósil en un ancestro?](08_cenozoico/INVESTIGACION_039_HOMO_PLEISTOCENO_MEDIO_HEIDELBERGENSIS.md) — **AUDITADO** |
| 040 | `INV-NEAND-DENIS-001` | [¿Cómo sabemos quiénes fueron neandertales y denisovanos y cuándo hubo mestizaje sin confundir un fósil, una genealogía y un porcentaje de ancestría?](08_cenozoico/INVESTIGACION_040_NEANDERTALES_DENISOVANOS_MESTIZAJE.md) — **AUDITADO** |
| 041 | `INV-HOMO-OTHER-001` | [¿Cómo reconstruimos a Homo floresiensis, H. luzonensis y H. naledi sin confundir morfología mosaico, asociación arqueológica y conducta?](08_cenozoico/INVESTIGACION_041_FLORESIENSIS_NALEDI_DIVERSIDAD_TARDIA.md) — **AUDITADO** |
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

## Línea temática anticipada CIV — subíndice propio

Esta línea abre un marco comparativo antes de que la secuencia global alcance `050–052`. No renumera, sustituye ni marca como completas las investigaciones `037–051`.

| Orden temático | ID | Alcance | Estado |
|---:|---|---|---|
| CIV-001 | `INV-CIV-ORIGINS-001` | [sedentarismo, almacenamiento, domesticaciones, urbanismo, administración y autoridad en carriles regionales](14_civilizaciones/INVESTIGACION_CIV_001_ORIGENES_ALDEAS_CIUDADES_ESTADOS.md) | **TRAZADO** |

El marco crítico y el programa regional están en [`14_civilizaciones/MARCO_CRITICO_CIVILIZACION.md`](14_civilizaciones/MARCO_CRITICO_CIVILIZACION.md) y [`14_civilizaciones/PROGRAMA_CRONOLOGICO_GLOBAL.md`](14_civilizaciones/PROGRAMA_CRONOLOGICO_GLOBAL.md). La próxima investigación de la secuencia global sigue siendo `INV-AUSTRALOPITH-001`.

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
- `v0.1.22`: Investigación 023 + historia de la GOBE/LOME + mapa de tres archivos y cadena ocurrencia–biodiversificación.
- `v0.1.23`: Investigación 024 + historia de recuperación/terrestrialización + mapa de cuatro relojes y cadena aparición–ecosistema.
- `v0.1.24`: Investigación 025 + historia de bosques/peces/tetrápodos + mapa de seis relojes y cadenas fósil–bosque, aleta–tierra y señal–causa.
- `v0.1.25`: Investigación 026 + historia de carbón/oxígeno/amniotas + mapa de cuatro archivos y cadenas turba–carbón y huella–amniota.
- `v0.1.26`: Investigación 027 + historia de Pangea/sinápsidos/extinción + mapa de cuatro archivos y cadenas roca–Pangea y magma–extinción.
- `v0.1.27`: Investigación 028 + historia de recuperación/dinosaurios/mamaliaformes + mapa de relojes y cadenas fósil–nodo y CAMP–recambio.
- `v0.1.28`: Investigación 029 + historia jurásica + mapas de cinco archivos y cadenas rift–océano y pluma–vuelo, actualizados con evidencia avialana de 2026.
- `v0.1.29`: Investigación 030 + historia de angiospermas/redes + mapas de cinco archivos y cadenas polen–red y carácter–corona, actualizados con relojes vegetales de 2026 y cráneo de `Vegavis` de 2025.
- `v0.1.30`: Investigación 031 + historia de la atribución K–Pg + mapas de seis archivos y cadenas anomalía–impacto/forzamiento–extinción, actualizados con Ni isotópico, ecología planctónica y modelado térmico de 2026.
- `v0.1.31`: Investigación 032 + historia de los cinco relojes paleógenos + mapas de fronteras, radiaciones, mosaicos anatómicos y clima, actualizados con `Purgatorius`, `Kalakocetus` y zheléstidos de 2026.
- `v0.1.32`: Investigación 033 + historia de los cinco relojes neógenos + mapas de clima, vegetación, hominoideos, formación escalonada del istmo y GABI, con controversias y falsadores explícitos.
- `v0.1.33`: Investigación 034 + historia de los seis relojes cuaternarios + mapas de órbita, hielo, MPT, cambios abruptos y extinción/atribución, actualizados con hielo antártico antiguo de 2026.
- `v0.1.34`: Investigación 035 + historia del reloj molecular al mosaico T2T + mapas de topología, divergencia, mutación, coalescencia, fósiles y estructura cromosómica, con ILS y flujo génico explícitamente separados.
- `v0.1.35`: Investigación 036 + historia del “eslabón” a hipodigmas y modelos + mapas de asociación, geocronología, función, ambiente y filogenia, actualizados con tobillo de Ardi 2025 y fémur atribuido a `Sahelanthropus` 2026.
- `v0.1.35-civ.1`: marco crítico y programa regional CIV + `INV-CIV-ORIGINS-001` en estado `TRAZADO`, sin alterar la secuencia global pendiente.
- `v0.1.36`: Investigación 037 + historia de Taung/Lucy/“cascanueces” a hipodigmas y proxies + mapas de seis rutas, actualizados con `A. deyiremeda` y mano de `P. boisei` de 2025, `Paranthropus` del Afar y locomoción sudafricana de 2026.
- `v0.1.37`: Investigación 038 + historia de Java/OH 7/Dmanisi a hipodigmas, variación y paleoproteómica + mapas de ocho rutas y dos cadenas, actualizados con Oldowan y anatomía craneofacial de 2025 y proteínas de `H. erectus` de 2026.
- `v0.1.38`: Investigación 039 + historia de Mauer/Sima/Bodo/Kabwe a paleodemos y genealogías + mapas de ocho productos y dos cadenas, actualizados con Harbin 2025 y Casablanca 2026.
- `v0.1.39`: Investigación 040 + historia de neandertales/denisovanos desde mtDNA a genealogías reticuladas + mapas de cinco escalas y dos cadenas, actualizados con cronología de Denisova, Penghu y Harbin de 2025.
- `v0.1.40`: Investigación 041 + historia de formas humanas tardías mosaico + mapas de cuatro resultados y dos cadenas, actualizados con clima y revisión de Rising Star de 2025 y tafonomía de Flores/filogenia de Luzón de 2026.
- `v0.2`: Hadeano/Arcaico auditados.
- `v0.3`: Proterozoico y origen/temprana evolución de la vida.
- `v0.4`: Fanerozoico completo.
- `v0.5`: evolución humana y migraciones.
- `v0.6`: civilizaciones y genética humana.
- `v1.0`: primera síntesis integral con revisión externa.

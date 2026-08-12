# ¿Cómo sabemos lo que sabemos?

Historia profunda de la Tierra, la vida y el ser humano desde primeros principios.

![Historia profunda del cosmos, la Tierra, la vida y la humanidad](assets/visuales/hero-historia-profunda.png)

> **Ilustración conceptual:** comprime épocas distintas y no está a escala. Su procedencia y límites se registran en el [`ATLAS_VISUAL.md`](ATLAS_VISUAL.md).

Este repositorio público investiga cómo se reconstruyen acontecimientos que nadie observó directamente. Su pregunta rectora no es “¿qué dicen los libros?”, sino:

> Si desaparecieran los manuales y no pudiéramos confiar inicialmente en ninguna autoridad, ¿qué observaciones, mediciones, experimentos y razonamientos permitirían reconstruir esta conclusión?

El proyecto no busca creer ni desconfiar ciegamente de la ciencia. Busca hacer visible la cadena que une una muestra física con una afirmación sobre el pasado, medir cuánto depende de instrumentos y modelos, enfrentarla con explicaciones alternativas y expresar la incertidumbre sin disfrazarla.

## Regla central

Toda afirmación importante debe poder recorrerse en ambos sentidos:

```text
CLAIM → EVIDENCIA → FUENTE → MÉTODO → DATO ORIGINAL
  ↑                                             ↓
  └──────────── cadena de inferencia ───────────┘
```

Y toda investigación debe distinguir explícitamente:

- lo observado hoy;
- lo medido con instrumentos;
- el principio físico, químico o biológico empleado;
- el modelo y sus supuestos;
- lo inferido acerca del pasado;
- las alternativas y anomalías;
- el grado de confianza y qué podría falsar la conclusión.

## Estado actual

La fase fundacional contiene:

- la arquitectura auditable del repositorio;
- plantillas para investigaciones, afirmaciones, evidencias, fuentes, controversias y errores;
- un sistema de confianza de A a E y etiquetas separadas de incertidumbre;
- los registros maestros [`CLAIMS.md`](CLAIMS.md), [`EVIDENCE_LEDGER.md`](EVIDENCE_LEDGER.md), [`SOURCES.md`](SOURCES.md), [`CONTROVERSIES.md`](CONTROVERSIES.md) y [`SCIENTIFIC_ERRORS.md`](SCIENTIFIC_ERRORS.md);
- una [`TIMELINE.md`](TIMELINE.md) preliminar desde los primeros sólidos del Sistema Solar hasta las primeras civilizaciones;
- el [`KNOWLEDGE_MAP.md`](KNOWLEDGE_MAP.md) y el [`ROADMAP.md`](ROADMAP.md);
- la primera investigación: [`¿Cómo sabemos la edad de la Tierra?`](02_formacion_tierra/INVESTIGACION_001_EDAD_TIERRA.md).
- la segunda investigación: [`¿Cómo sabemos que el universo tiene una historia y una edad finita?`](01_cosmos/INVESTIGACION_002_EDAD_E_HISTORIA_DEL_UNIVERSO.md);
- la tercera investigación: [`¿Cómo sabemos dónde y cómo se formaron los elementos?`](01_cosmos/INVESTIGACION_003_ORIGEN_ELEMENTOS.md);
- la cuarta investigación: [`¿Cómo inferimos el nacimiento, la evolución y la muerte de las estrellas?`](01_cosmos/INVESTIGACION_004_EVOLUCION_ESTELAR.md);
- la quinta investigación: [`¿Cómo inferimos una nebulosa y un disco protoplanetario?`](01_cosmos/INVESTIGACION_005_FORMACION_SISTEMA_SOLAR.md);
- la sexta investigación: [`¿Cómo ocurrió y cuánto duró la acreción terrestre?`](02_formacion_tierra/INVESTIGACION_006_ACRECION_TIERRA.md);
- la séptima investigación: [`¿Cómo sabemos que existe el núcleo terrestre, qué contiene y cuándo se diferenció?`](02_formacion_tierra/INVESTIGACION_007_NUCLEO_TIERRA.md);
- la octava investigación: [`¿Cómo se formó la Luna y qué parte del impacto podemos reconstruir?`](02_formacion_tierra/INVESTIGACION_008_ORIGEN_LUNA.md);
- la novena investigación: [`¿Qué conservan zircones, Acasta y Nuvvuagittuq de la primera corteza?`](02_formacion_tierra/INVESTIGACION_009_CORTEZA_HADEANA.md);
- la décima investigación: [`¿Cuándo hubo agua líquida y qué significa la señal de oxígeno?`](03_hadeano/INVESTIGACION_010_AGUA_HADEANA.md);
- la undécima investigación: [`¿Cómo se restringe una atmósfera sin muestras de aire?`](03_hadeano/INVESTIGACION_011_ATMOSFERA_HADEANA.md);
- la duodécima investigación: [`¿Pico tardío, cola de acreción o modelo híbrido?`](03_hadeano/INVESTIGACION_012_IMPACTOS_HADEANOS.md);
- la decimotercera investigación: [`¿Cuál es la evidencia de vida más antigua?`](04_arcaico/INVESTIGACION_013_VIDA_MAS_ANTIGUA.md);
- la decimocuarta investigación: [`¿Cuándo surgieron fotosíntesis y producción de oxígeno?`](04_arcaico/INVESTIGACION_014_FOTOSINTESIS_OXIGENO.md);
- la decimoquinta investigación: [`¿Cómo sabemos que aumentó el oxígeno?`](05_proterozoico/INVESTIGACION_015_GRAN_OXIDACION.md);
- la decimosexta investigación: [`¿Qué se puede reconstruir de LUCA y qué no?`](09_origen_vida/INVESTIGACION_016_LUCA.md);
- la decimoséptima investigación: [`¿Cómo inferimos el origen de eucariotas y la endosimbiosis mitocondrial?`](10_evolucion_vida/INVESTIGACION_017_EUCARIOGENESIS.md);
- la decimoctava investigación: [`¿Cómo inferimos el origen y la función evolutiva del sexo?`](10_evolucion_vida/INVESTIGACION_018_SEXO.md);
- la decimonovena investigación: [`¿Cuántas veces surgió la multicelularidad y cuándo un grupo se volvió individuo?`](10_evolucion_vida/INVESTIGACION_019_MULTICELULARIDAD.md);
- la vigésima investigación: [`¿Estuvo la Tierra globalmente congelada durante el Criogénico?`](05_proterozoico/INVESTIGACION_020_SNOWBALL_EARTH.md);
- la vigesimoprimera investigación: [`¿Qué eran los organismos ediacáricos y cómo vivían?`](05_proterozoico/INVESTIGACION_021_EDIACARA.md);
- la vigesimosegunda investigación: [`¿Fue súbita la radiación cámbrica o está comprimida por el registro?`](06_paleozoico/INVESTIGACION_022_RADIACION_CAMBRICA.md);
- la vigesimotercera investigación: [`¿Fue la radiación ordovícica un evento global y qué terminó con ella?`](06_paleozoico/INVESTIGACION_023_RADIACION_ORDOVICICA.md);
- la vigesimocuarta investigación: [`¿Cómo se recuperó la vida en el Silúrico y cuándo se ensamblaron ecosistemas terrestres?`](06_paleozoico/INVESTIGACION_024_RECUPERACION_SILURICA.md);
- la vigesimoquinta investigación: [`¿Fue el Devónico la «edad de los peces» y cómo transformaron bosques y tetrápodos la Tierra?`](06_paleozoico/INVESTIGACION_025_BOSQUES_PECES_TETRAPODOS.md);
- la vigesimosexta investigación: [`¿Por qué se acumuló tanto carbón en el Carbonífero y cómo se relacionaron oxígeno, incendios, gigantismo y amniotas?`](06_paleozoico/INVESTIGACION_026_CARBON_OXIGENO_AMNIOTAS.md);
- la vigesimoséptima investigación: [`¿Cómo se ensambló Pangea, qué eran los sinápsidos y por qué la mayor extinción no tuvo una sola causa?`](06_paleozoico/INVESTIGACION_027_PANGEA_SINAPSIDOS_EXTINCION.md);
- la vigesimoctava investigación: [`¿Cómo se reconstruyó la biosfera triásica y cuándo aparecieron dinosaurios y mamaliaformes?`](07_mesozoico/INVESTIGACION_028_RECUPERACION_DINOSAURIOS_MAMALIAFORMES.md);
- la vigesimonovena investigación: [`¿Cómo fragmentó el Jurásico a Pangea y qué revela sobre dinosaurios, avialanos y mamaliaformes?`](07_mesozoico/INVESTIGACION_029_JURASICO_PANGEA_DINOSAURIOS_AVIALANOS_MAMMALIAFORMES.md);
- la trigésima investigación: [`¿Cómo transformaron las angiospermas las redes cretácicas y qué revelan insectos, aves y mamíferos?`](07_mesozoico/INVESTIGACION_030_CRETACICO_FLORES_INSECTOS_AVES_MAMIFEROS.md);
- la trigésima primera investigación: [`¿Cómo conectamos Chicxulub, Deccan, la extinción K–Pg y la recuperación sin confundir coincidencia con mecanismo?`](07_mesozoico/INVESTIGACION_031_KPG_IMPACTO_DECCAN_EXTINCION_RECUPERACION.md);
- la trigésima segunda investigación: [`¿Cómo reconstruimos la recuperación paleógena, las radiaciones de mamíferos, primates y ballenas, y el PETM sin dibujar una marcha inevitable?`](08_cenozoico/INVESTIGACION_032_PALEOGENO_RECUPERACION_MAMIFEROS_PRIMATES_BALLENAS_PETM.md);
- la trigésima tercera investigación: [`¿Cómo reconstruimos pastizales, primates, clima y el istmo de Panamá sin convertir el Neógeno en una cadena causal única?`](08_cenozoico/INVESTIGACION_033_NEOGENO_PASTIZALES_PRIMATES_CLIMA_ISTMO_PANAMA.md);
- la trigésima cuarta investigación: [`¿Cómo reconstruimos glaciaciones, megafauna y cambios rápidos sin fundir seis relojes cuaternarios?`](08_cenozoico/INVESTIGACION_034_CUATERNARIO_GLACIACIONES_MEGAFAUNA_CAMBIOS_RAPIDOS.md);
- la trigésima quinta investigación: [`¿Cómo fechamos la separación del linaje humano respecto de otros simios si cada región del genoma tiene una historia distinta?`](08_cenozoico/INVESTIGACION_035_SEPARACION_LINAJES_HUMANOS_OTROS_SIMIOS.md);
- la trigésima sexta investigación: [`¿Cómo identificamos a los primeros homininos si edad, bipedalismo y parentesco no son la misma evidencia?`](08_cenozoico/INVESTIGACION_036_PRIMEROS_HOMININOS_SAHELANTHROPUS_ORRORIN_ARDIPITHECUS.md);
- un [`ATLAS_VISUAL.md`](ATLAS_VISUAL.md) con procedencia y límites explícitos.

“Preliminar” significa que la cronología organiza el programa de trabajo; no convierte automáticamente cada fecha en una conclusión cerrada. Los estados de auditoría muestran qué ha sido investigado en profundidad y qué sigue pendiente.

## Cómo navegar

1. Empieza por [`METHODOLOGY.md`](METHODOLOGY.md).
2. Consulta una afirmación en [`CLAIMS.md`](CLAIMS.md).
3. Sigue sus evidencias en [`EVIDENCE_LEDGER.md`](EVIDENCE_LEDGER.md).
4. Abre los registros bibliográficos en [`SOURCES.md`](SOURCES.md).
5. Revisa desacuerdos en [`CONTROVERSIES.md`](CONTROVERSIES.md).
6. Comprueba su posición temporal en [`TIMELINE.md`](TIMELINE.md).
7. Usa el [`ATLAS_VISUAL.md`](ATLAS_VISUAL.md) para ver mapas explicativos y luego vuelve a sus registros.

La arquitectura completa y las reglas de nombres están en [`00_metodologia/ARCHITECTURE.md`](00_metodologia/ARCHITECTURE.md) y [`00_metodologia/ID_CONVENTIONS.md`](00_metodologia/ID_CONVENTIONS.md).

## Alcance cronológico

```text
Fase cósmica caliente → expansión → estrellas y elementos
  ↓
Sistema Solar
  ↓
Tierra y Luna
  ↓
Hadeano → Arcaico → Proterozoico
  ↓
Paleozoico → Mesozoico → Cenozoico
  ↓
Vida → animales → vertebrados → mamíferos
  ↓
Primates → homininos → Homo → Homo sapiens
  ↓
Migraciones → agricultura → ciudades → civilizaciones
```

## Convenciones rápidas

- `Ma`: millones de años antes del presente en geocronología.
- `Ga`: miles de millones de años antes del presente.
- `a. C.` / `d. C.`: fechas históricas de calendario cuando resultan más legibles.
- Las incertidumbres se conservan como las publica la fuente; no se combinan sin justificar el modelo.
- Una letra de confianza califica una afirmación concreta, no el prestigio de una disciplina o autor.
- Una fuente revisada por pares puede contener interpretaciones discutibles; “publicado” no equivale a “verdadero”.

## Contribuir

Las contribuciones deben añadir trazabilidad, no solo texto. Antes de abrir un cambio, consulta [`CONTRIBUTING.md`](CONTRIBUTING.md). Una afirmación nueva necesita ID, evidencia vinculada, fuente registrada, supuestos, límites, alternativa razonable, falsadores y confianza justificada.

## Alcance y límites

Este repositorio es una investigación educativa abierta en construcción. No sustituye la revisión especializada, el trabajo de laboratorio ni el acceso a muestras y datos primarios. Cuando una fuente está detrás de un muro de pago, se registra su DOI y se evita fingir que se auditó material no consultado.

## Licencia

El contenido de investigación se publica bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es): puede copiarse, traducirse, adaptarse y reutilizarse, incluso comercialmente, con la única condición de dar crédito. El código del sitio se publica bajo [MIT](LICENSE).

Los artículos citados en [`SOURCES.md`](SOURCES.md) pertenecen a sus autores y editoriales; esta licencia no se extiende a ellos. Los detalles, las formas de atribución recomendadas y los límites están en [`LICENCIAS.md`](LICENCIAS.md).

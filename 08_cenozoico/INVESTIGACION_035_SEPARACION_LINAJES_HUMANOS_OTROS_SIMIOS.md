---
id: INV-HOMININ-SPLIT-001
titulo: "¿Cómo fechamos la separación del linaje humano respecto de otros simios si cada región del genoma tiene una historia distinta?"
estado: AUDITADO
ultima_revision: 2026-08-11
claims:
  - CLAIM-HOMININ-SPLIT-SCOPE-001
  - CLAIM-HOMININ-SPLIT-COMMON-ANCESTOR-001
  - CLAIM-HOMININ-SPLIT-TREE-TOPOLOGY-001
  - CLAIM-HOMININ-SPLIT-GENOMIC-DIVERGENCE-001
  - CLAIM-HOMININ-SPLIT-SIMILARITY-METRIC-001
  - CLAIM-HOMININ-SPLIT-T2T-2025-001
  - CLAIM-HOMININ-SPLIT-SPECIES-SPLIT-001
  - CLAIM-HOMININ-SPLIT-COALESCENCE-001
  - CLAIM-HOMININ-SPLIT-ILS-001
  - CLAIM-HOMININ-SPLIT-ILS-T2T-001
  - CLAIM-HOMININ-SPLIT-X-MOSAIC-001
  - CLAIM-HOMININ-SPLIT-MUTATION-RATE-001
  - CLAIM-HOMININ-SPLIT-PARENTAL-AGE-001
  - CLAIM-HOMININ-SPLIT-GENERATION-TIME-001
  - CLAIM-HOMININ-SPLIT-RATE-HETEROGENEITY-001
  - CLAIM-HOMININ-SPLIT-FOSSIL-CALIBRATION-001
  - CLAIM-HOMININ-SPLIT-FOSSIL-MINIMUM-001
  - CLAIM-HOMININ-SPLIT-HOMO-PAN-TIMING-001
  - CLAIM-HOMININ-SPLIT-AFRICAN-APE-TIMING-001
  - CLAIM-HOMININ-SPLIT-ORANGUTAN-TIMING-001
  - CLAIM-HOMININ-SPLIT-PAN-TIMING-001
  - CLAIM-HOMININ-SPLIT-GENE-FLOW-001
  - CLAIM-HOMININ-SPLIT-GENE-FLOW-CONTROVERSY-001
  - CLAIM-HOMININ-SPLIT-CHROMOSOME2-001
  - CLAIM-HOMININ-SPLIT-STRUCTURAL-VARIATION-001
  - CLAIM-HOMININ-SPLIT-RECONSTRUCTION-LIMIT-001
fuentes:
  - SRC-YOO-T2T-APES-2025
  - SRC-CHIMP-GENOME-2005
  - SRC-SCALLY-GORILLA-2012
  - SRC-PRUFER-BONOBO-2012
  - SRC-MAO-BONOBO-2021
  - SRC-PRADO-MARTINEZ-APES-2013
  - SRC-HOBOLTH-COALHMM-2007
  - SRC-MOORJANI-CLOCK-2016
  - SRC-BESENBACHER-MUTATION-2019
  - SRC-LANGERGRABER-GENERATION-2012
  - SRC-PARHAM-CALIBRATIONS-2012
  - SRC-WILKINSON-PRIMATE-DATES-2011
  - SRC-PATTERSON-COMPLEX-2006
  - SRC-WAKELEY-COMPLEX-2008
  - SRC-MAILUND-MIGRATION-2012
  - SRC-DUTHEIL-X-2015
  - SRC-DEMANUEL-PAN-2016
  - SRC-KUHLWILM-BONOBO-2019
  - SRC-IJDO-CHROMOSOME2-1991
  - SRC-MAKOVA-APE-SEX-2024
  - SRC-KIMURA-CLOCK-1968
  - SRC-SARICH-WILSON-1967
  - SRC-BRUNET-SAHEL-2002
  - SRC-SUWA-CHORORAPITHECUS-2007
---

# Investigación 035 — ¿Cómo fechamos la separación del linaje humano respecto de otros simios si cada región del genoma tiene una historia distinta?

![Portada conceptual de genomas, coalescencia y calibración fósil](../assets/visuales/hero-separacion-linajes-humanos-otros-simios.png)

> **Portada conceptual:** dispone cromosomas completos, muestras de tríos, haplotipos ancestrales recombinantes, árboles génicos discordantes, dientes miocenos, capas fechables y la fusión del cromosoma 2 en ventanas no equivalentes. No representa al último ancestro común, una pareja ancestral, una hibridación observada, una escala temporal directa ni un porcentaje único de semejanza.

![Mapa de evidencia de la Investigación 035](../assets/visuales/mapa-investigacion-035.svg)

![De diferencia genómica a separación poblacional y de fósil a calibración](../assets/visuales/de-diferencia-genomica-a-separacion-y-de-fosil-a-calibracion.svg)

## Respuesta breve, con sus condiciones

Humanos, chimpancés y bonobos forman linajes hermanos dentro de los grandes simios africanos; gorilas son la rama viva siguiente y orangutanes una separación anterior. Esta topología está apoyada por millones de sitios y cambios estructurales, pero no significa que cada fragmento de ADN tenga el mismo árbol. Recombinación y persistencia de variantes ancestrales hacen que un locus humano pueda coalescer primero con gorila, o uno chimpancé con gorila, aunque el árbol de especies coloque a `Homo` y `Pan` como hermanos (`CLAIM-HOMININ-SPLIT-TREE-TOPOLOGY-001`, `CLAIM-HOMININ-SPLIT-ILS-001`).

La comparación telómero a telómero de 2025 estimó, bajo sus alineamientos y modelo, una separación humano–chimpancé de `5.5–6.3 Ma`, la separación de gorila respecto del linaje humano–Pan en `10.6–10.9 Ma` y la de orangutanes en `18.2–19.6 Ma`. El mismo análisis recuperó *incomplete lineage sorting* —ILS— en promedio en `39.5 %` de los autosomas y `24 %` del X. Son resultados de un análisis reproducible, no fechas observadas ni intervalos universales: tasa, regiones alineables, población ancestral y definición de «split» cambian los números (`SRC-YOO-T2T-APES-2025`; `CLAIM-HOMININ-SPLIT-T2T-2025-001`, `CLAIM-HOMININ-SPLIT-HOMO-PAN-TIMING-001`, `CLAIM-HOMININ-SPLIT-AFRICAN-APE-TIMING-001`, `CLAIM-HOMININ-SPLIT-ORANGUTAN-TIMING-001`, `CLAIM-HOMININ-SPLIT-ILS-T2T-001`).

Por eso una formulación prudente sitúa la separación de poblaciones que originaron a humanos y `Pan` aproximadamente entre `~5.5 y 7 Ma`, con colas más antiguas bajo algunos relojes y calibraciones. El último ancestro común no fue necesariamente un individuo ni una pareja en una fecha: fue una población estructurada durante un proceso que pudo tener aislamiento gradual y flujo génico limitado. El tiempo de coalescencia de un segmento suele anteceder a la separación de las poblaciones (`CLAIM-HOMININ-SPLIT-COMMON-ANCESTOR-001`, `CLAIM-HOMININ-SPLIT-SPECIES-SPLIT-001`, `CLAIM-HOMININ-SPLIT-COALESCENCE-001`).

Los relojes moleculares convierten diferencias en tiempo sólo después de escoger tasa de mutación o sustitución, duración generacional, modelo coalescente y calibraciones. Tríos humanos y de otros grandes simios muestran que mutaciones de novo aumentan con edad parental y que la tasa anual humana reciente es menor que la extrapolada para chimpancé, gorila y orangután. Además, tipos de sustitución como transiciones CpG se comportan de forma más regular que otros. No existe una constante única que pueda multiplicarse por todo el genoma y toda la historia (`CLAIM-HOMININ-SPLIT-MUTATION-RATE-001`, `CLAIM-HOMININ-SPLIT-PARENTAL-AGE-001`, `CLAIM-HOMININ-SPLIT-GENERATION-TIME-001`, `CLAIM-HOMININ-SPLIT-RATE-HETEROGENEITY-001`).

Los fósiles no entregan la fecha del nodo. Un ejemplar bien situado puede imponer una edad mínima a una rama si su anatomía, posición filogenética, horizonte y datación son defendibles; el linaje debió existir antes. Fósiles cercanos al intervalo —incluidos `Sahelanthropus` y supuestos gorilinos como `Chororapithecus`— dependen precisamente de las afinidades que se discuten. Son calibradores condicionados, no fotografías del ancestro común (`CLAIM-HOMININ-SPLIT-FOSSIL-CALIBRATION-001`, `CLAIM-HOMININ-SPLIT-FOSSIL-MINIMUM-001`).

La fusión telómero–telómero que produjo el cromosoma humano 2 confirma un cambio derivado en nuestro linaje: conserva restos internos de secuencias teloméricas y una región centromérica ancestral. No fecha por sí sola la separación humano–chimpancé y no explica qué rasgos «nos hicieron humanos». Es un carácter estructural compatible con el árbol, no un cronómetro (`SRC-IJDO-CHROMOSOME2-1991`; `CLAIM-HOMININ-SPLIT-CHROMOSOME2-001`).

## Definiciones operacionales

| Término | Significado aquí | No significa |
|---|---|---|
| árbol de especies | modelo de ramificación de poblaciones/linajes | árbol idéntico para cada locus |
| árbol génico | genealogía de un segmento recombinante | historia completa de la especie |
| divergencia de secuencia | diferencias bajo denominador y alineamiento declarados | fecha de separación |
| coalescencia | ancestro común de copias de un locus | último individuo ancestral de las especies |
| separación inicial | inicio modelado de restricción de flujo | aislamiento reproductivo instantáneo |
| fin de flujo génico | cese modelado de intercambio detectable | evento universal en todo el genoma |
| calibración fósil | distribución temporal impuesta a un nodo | fósil igual al nodo |
| ILS | persistencia aleatoria de variantes a través de separaciones próximas | hibridación demostrada |

## 1. La pregunta contiene varios relojes

«¿Cuándo nos separamos?» puede pedir al menos: divergencia de orangutanes, separación de gorilas, inicio Homo–Pan, fin de intercambio, coalescencia media de loci, primer hominino reconocible o aparición de un carácter humano derivado. Las respuestas no deben promediarse como si midieran el mismo evento (`CLAIM-HOMININ-SPLIT-SCOPE-001`).

## 2. El ancestro común fue una población

En una población ancestral coexistían muchos cromosomas y alelos. Dos copias modernas remontan a individuos distintos y tiempos distintos; no hay razón para que todas encuentren a su ancestro en la generación donde comenzó el aislamiento. Dibujar una pareja que se divide en humano y chimpancé confunde población, especie y genealogía (`CLAIM-HOMININ-SPLIT-COMMON-ANCESTOR-001`).

## 3. Los chimpancés actuales no son nuestros ancestros

Chimpancé y bonobo continuaron evolucionando después de separarse de nuestra rama. Son parientes vivos que permiten comparación y polarización con gorila u orangután, no modelos congelados del pasado. La forma del último ancestro debe reconstruirse carácter por carácter, no copiarse de `Pan` (`CLAIM-HOMININ-SPLIT-RECONSTRUCTION-LIMIT-001`).

## 4. Un porcentaje de similitud necesita denominador

El borrador de chimpancé de 2005 midió `1.23 %` de divergencia nucleotídica en alineamientos recíprocos de alta calidad y estimó que polimorfismo ancestral explicaba `14–22 %` de esa diferencia. Esa cifra excluía regiones no alineables y no sumaba del mismo modo inserciones, deleciones, duplicaciones o repeticiones (`SRC-CHIMP-GENOME-2005`; `CLAIM-HOMININ-SPLIT-GENOMIC-DIVERGENCE-001`).

Genomas completos de 2025 resolvieron regiones repetitivas y catalogaron en promedio unos `327 Mb` —`10 %`— como estructuralmente divergentes por linaje. Eso tampoco significa «10 % de bases distintas»: incluye contenido, posición, copia y límites de alineamiento. Cambiar métrica cambia porcentaje sin cambiar parentesco (`SRC-YOO-T2T-APES-2025`; `CLAIM-HOMININ-SPLIT-SIMILARITY-METRIC-001`, `CLAIM-HOMININ-SPLIT-STRUCTURAL-VARIATION-001`).

## 5. Los genomas completos mejoran el mapa, no eliminan el modelo

Las asambleas de chimpancé, bonobo, gorila, dos orangutanes y siamang caracterizaron aproximadamente `99.5 %` del contenido y llevaron `74 %` de cromosomas diploides de la muestra de extremo a extremo. Pero representan dos haplotipos por especie y dejan más de quince especies o subespecies sin ensamblaje equivalente. La referencia es más completa; la población no está censada (`SRC-YOO-T2T-APES-2025`; `CLAIM-HOMININ-SPLIT-T2T-2025-001`).

## 6. Diferencia genética antecede normalmente al split

En el esquema más simple para secuencia neutral, la divergencia observada contiene sustituciones posteriores a la separación y diversidad que ya existía en la población ancestral. Por eso `d ≈ 2μt` es sólo el primer término: el tiempo coalescente ancestral, variación de tasa, selección, conversión génica y errores de alineamiento deben añadirse (`CLAIM-HOMININ-SPLIT-GENOMIC-DIVERGENCE-001`, `CLAIM-HOMININ-SPLIT-COALESCENCE-001`).

## 7. Recombinación convierte un genoma en muchos árboles

Cada generación recombina cromosomas. Tramos vecinos comparten historia por un tiempo, pero puntos de recombinación separan genealogías. Los modelos CoalHMM tratan la coalescencia oculta como estados a lo largo del alineamiento y estiman separación, población ancestral y recombinación conjuntamente (`SRC-HOBOLTH-COALHMM-2007`; `CLAIM-HOMININ-SPLIT-COALESCENCE-001`).

## 8. ILS no es un error del árbol de especies

Si gorila se separó poco antes de Homo–Pan y la población ancestral fue grande, alelos pueden no ordenarse antes del siguiente split. Algunos loci agrupan humano–gorila o chimpancé–gorila. La discordancia esperada confirma coalescencia profunda; no hace equivalentes las tres topologías ni demuestra flujo génico (`SRC-SCALLY-GORILLA-2012`, `SRC-MAO-BONOBO-2021`; `CLAIM-HOMININ-SPLIT-ILS-001`).

## 9. El porcentaje de ILS también depende del genoma accesible

El gorila de 2012 situó aproximadamente `30 %` del genoma en genealogías discordantes. Un bonobo mejor ensamblado estimó `36.5 %` bajo una filogenia más profunda; las asambleas T2T de 2025 elevaron el promedio autosómico a `39.5 %`. No son tres naturalezas distintas: cambian referencias, regiones, especies y modelos (`SRC-SCALLY-GORILLA-2012`, `SRC-MAO-BONOBO-2021`, `SRC-YOO-T2T-APES-2025`; `CLAIM-HOMININ-SPLIT-ILS-T2T-001`).

## 10. El cromosoma X conserva un mosaico particular

Tamaño efectivo, recombinación, sesgo mutacional masculino y selección hacen que el X no sea un autosoma pequeño. Regiones con divergencia e ILS muy reducidas motivaron una hipótesis de hibridación tardía, pero barridos selectivos fuertes y cambios de tasa también pueden producir parte del patrón (`SRC-PATTERSON-COMPLEX-2006`, `SRC-WAKELEY-COMPLEX-2008`, `SRC-DUTHEIL-X-2015`; `CLAIM-HOMININ-SPLIT-X-MOSAIC-001`).

## 11. Mutación por generación no es sustitución por año

Una mutación de novo aparece en un gameto; una sustitución es una variante fijada a lo largo de un linaje. Neutralidad, deriva, selección y composición del sitio median entre ambas. Convertir generaciones a años añade una historia de edades reproductivas (`SRC-KIMURA-CLOCK-1968`; `CLAIM-HOMININ-SPLIT-MUTATION-RATE-001`).

## 12. La edad de los padres modifica la tasa

Tríos muestran acumulación casi lineal con edades paterna y materna, con mayor contribución paterna. Besenbacher y colegas estimaron una tasa humana reciente de alrededor de `0.43 × 10⁻9` por sitio y año y tasas anuales aproximadamente `1.42–1.51` veces mayores en otros grandes simios bajo su extrapolación (`SRC-BESENBACHER-MUTATION-2019`; `CLAIM-HOMININ-SPLIT-PARENTAL-AGE-001`).

## 13. La duración generacional no fue constante

Datos de parentesco en chimpancés y gorilas silvestres permiten estimar intervalos reales de generación. Aplicar una tasa humana por generación con duraciones históricas equivocadas mueve los nodos millones de años. Tamaño corporal, madurez, fecundidad y edades parentales cambiaron en cada rama (`SRC-LANGERGRABER-GENERATION-2012`; `CLAIM-HOMININ-SPLIT-GENERATION-TIME-001`).

## 14. No todos los cambios moleculares marcan igual el tiempo

Comparaciones de diez primates encontraron tasas hasta `64 %` mayores en algunas ramas de monos del Nuevo Mundo respecto de simios y variación incluso dentro de homininos. Transiciones CpG fueron más regulares que otros tipos, probablemente por depender menos de replicación. Elegir sitios modifica precisión y sesgo (`SRC-MOORJANI-CLOCK-2016`; `CLAIM-HOMININ-SPLIT-RATE-HETEROGENEITY-001`).

## 15. El fósil fija un mínimo sólo si pertenece a la rama

Una calibración defendible debe identificar espécimen, caracteres de inclusión, localidad, horizonte, método de edad y justificación del máximo o distribución. Si un supuesto hominino se mueve fuera de la corona, deja de fijar ese mínimo sin que cambie su edad geológica (`SRC-PARHAM-CALIBRATIONS-2012`; `CLAIM-HOMININ-SPLIT-FOSSIL-CALIBRATION-001`).

## 16. Ausencia fósil no es un máximo duro automático

Bosques tropicales, suelos ácidos, baja densidad y exposición desigual hacen incompleto el registro de simios. Un máximo necesita argumento de muestreo y preservación, no simplemente «no hay fósiles más antiguos». Modelos integrados pueden tratar descubrimiento como proceso estocástico (`SRC-WILKINSON-PRIMATE-DATES-2011`; `CLAIM-HOMININ-SPLIT-FOSSIL-MINIMUM-001`).

## 17. Los fósiles cercanos al nodo prueban el modelo que se les asigna

`Sahelanthropus`, cerca de `7 Ma`, fue descrito como hominino; `Chororapithecus`, cerca de `10 Ma`, como posible gorilino. Ambos ofrecen restricciones sólo si sus caracteres realmente los colocan tras las separaciones correspondientes. La Investigación 036 auditará los primeros homininos en detalle (`SRC-BRUNET-SAHEL-2002`, `SRC-SUWA-CHORORAPITHECUS-2007`; `CLAIM-HOMININ-SPLIT-FOSSIL-MINIMUM-001`).

## 18. La estimación T2T de 2025 es una medición modelada precisa

El intervalo `5.5–6.3 Ma` proviene de regiones alineables, asambleas casi completas, ILS y parámetros explícitos. Su precisión interna no absorbe automáticamente incertidumbre de tasa histórica, estructura ancestral, flujo o colocación fósil. Debe citarse como estimación del estudio, no como «la fecha definitiva» (`SRC-YOO-T2T-APES-2025`; `CLAIM-HOMININ-SPLIT-HOMO-PAN-TIMING-001`).

## 19. Gorilla y Pongo ofrecen calibración relativa

Un solo reloj debe explicar simultáneamente separaciones Homo–Pan, gorila y orangután. El análisis T2T ubicó las dos últimas en `10.6–10.9` y `18.2–19.6 Ma`. Si una tasa encaja sólo en el nodo deseado y rompe los demás, la concordancia es circular o incompleta (`CLAIM-HOMININ-SPLIT-AFRICAN-APE-TIMING-001`, `CLAIM-HOMININ-SPLIT-ORANGUTAN-TIMING-001`).

## 20. Chimpancé y bonobo tienen su propio reloj posterior

El genoma bonobo mostró que más de `3 %` del genoma humano puede parecer más próximo a uno u otro `Pan` de lo que éstos parecen entre sí por ILS. La separación chimpancé–bonobo se sitúa ampliamente cerca de `1–2 Ma`, pero hubo flujo posterior entre algunas poblaciones de `Pan`; una bifurcación dibujada no resume toda su demografía (`SRC-PRUFER-BONOBO-2012`, `SRC-DEMANUEL-PAN-2016`; `CLAIM-HOMININ-SPLIT-PAN-TIMING-001`).

## 21. Flujo génico después del inicio es una hipótesis modelable

Modelos de aislamiento con migración distinguen separación inicial y final del flujo. Un CoalHMM de 2012 favoreció separación prolongada para Homo–Pan, mientras encontró un split más claro entre chimpancé y bonobo. Esta preferencia depende de estados, tasa, recombinación y alternativas incluidas (`SRC-MAILUND-MIGRATION-2012`; `CLAIM-HOMININ-SPLIT-GENE-FLOW-001`).

## 22. «Hibridación tardía» no está demostrada

Patterson y colegas propusieron un proceso complejo usando divergencia autosómica y un X inusualmente joven. Wakeley señaló que el modelo nulo no fue rechazado y que selección en X, sesgo mutacional o flujo menos extremo también explican señales. La controversia no permite narrar un cruce observado entre especies ya formadas (`SRC-PATTERSON-COMPLEX-2006`, `SRC-WAKELEY-COMPLEX-2008`; `CLAIM-HOMININ-SPLIT-GENE-FLOW-CONTROVERSY-001`).

## 23. La reticulación en `Pan` demuestra posibilidad, no identidad de procesos

Genomas de chimpancés detectan aporte antiguo de bonobo en ancestros de poblaciones centrales/orientales; bonobos retienen además señal modelada de una rama fantasma extinta. Esto muestra que árboles de simios pueden contener redes. No prueba automáticamente flujo Homo–Pan (`SRC-DEMANUEL-PAN-2016`, `SRC-KUHLWILM-BONOBO-2019`; `CLAIM-HOMININ-SPLIT-GENE-FLOW-CONTROVERSY-001`).

## 24. El cromosoma 2 prueba descendencia con modificación

El sitio de fusión conserva repeticiones teloméricas internas; comparaciones citogenéticas y genómicas relacionan sus brazos con dos cromosomas separados de otros simios. El evento ocurrió en la rama humana después de la separación, salvo que aparezca en un hominino anterior todavía desconocido, pero la secuencia por sí sola no fija cuándo (`SRC-IJDO-CHROMOSOME2-1991`; `CLAIM-HOMININ-SPLIT-CHROMOSOME2-001`).

## Tabla de síntesis

| Pregunta | Objeto | Transformación | Resultado permitido | Salto prohibido |
|---|---|---|---|---|
| parentesco | bloques homólogos | alineamiento + outgroup | árbol de especies | chimpancé como ancestro |
| divergencia | sustituciones/indels | métrica + denominador | distancia genética | porcentaje universal |
| edad de locus | haplotipos | coalescente + tasa | distribución TMRCA | fecha de especie |
| separación | mosaico de loci | modelo demográfico | inicio/fin condicionados | instante observado |
| calibración | fósil + horizonte | filogenia + geocronología | mínimo/distribución | fósil igual al ancestro |
| estructura | fusión/duplicación | homología + polarización | cambio de rama | cronómetro directo |

## LO OBSERVADO

- secuencias, lecturas largas, cromosomas ensamblados y variantes dentro de especies;
- mutaciones de novo en tríos con edades parentales conocidas;
- dientes, mandíbulas, cráneos parciales y sus horizontes geológicos;
- restos teloméricos internos y centroméricos en cromosoma 2;
- distribución moderna, parentescos y edades reproductivas de grandes simios.

## LO MEDIDO

Se midieron sustituciones, inserciones, deleciones, duplicaciones, repeticiones, longitudes alineables, tasas por generación, edad parental, recombinación, heterocigosidad, edades radiométricas y caracteres anatómicos. Un árbol, una tasa anual o un nodo son resultados de transformación, no lecturas directas.

## LO INFERIDO

Se infieren árboles génicos y de especies, estados ancestrales, tamaños efectivos, tiempos coalescentes, inicio y fin de aislamiento, flujo génico, tasas históricas, colocación de fósiles y fechas de nodos. El último ancestro común no ha sido secuenciado ni identificado como individuo fósil.

## LOS SUPUESTOS

- que homologías y alineamientos no confunden duplicaciones o regiones repetitivas;
- que filtros neutrales reducen selección y conversión sesgada;
- que tasa, espectro mutacional y generaciones modelan ramas pasadas de forma suficiente;
- que el CoalHMM representa estructura, recombinación y migración pertinentes;
- que los fósiles elegidos pertenecen al lado correcto del nodo;
- que máximos fósiles incorporan preservación y búsqueda, no ausencia ingenua;
- que muestras de una o pocas referencias no representan toda la especie.

## LAS INCERTIDUMBRES

Persisten la tasa anual histórica humana, el cambio de duración generacional, tamaño y estructura de poblaciones ancestrales, magnitud de ILS en regiones todavía difíciles, existencia/duración de flujo Homo–Pan, afinidad de fósiles miocenos y diferencia entre inicio de separación y aislamiento reproductivo completo.

## LAS ALTERNATIVAS

La baja divergencia del X admite hibridación, flujo prolongado, selección o sesgo mutacional. Una coalescencia profunda admite población ancestral grande o estructurada. Fechas moleculares antiguas admiten tasa humana desacelerada; fechas jóvenes pueden reflejar calibraciones estrechas o confusión entre split y divergencia media.

## LAS CONTROVERSIAS

Los desacuerdos activos se registran en `CONT-HOMININ-SPLIT-DATE-001`, `CONT-HOMININ-SPLIT-MUTATION-RATE-001`, `CONT-HOMININ-SPLIT-GENERATION-001`, `CONT-HOMININ-SPLIT-FOSSIL-CALIBRATION-001`, `CONT-HOMININ-SPLIT-ILS-001`, `CONT-HOMININ-SPLIT-X-001`, `CONT-HOMININ-SPLIT-GENE-FLOW-001`, `CONT-HOMININ-SPLIT-SIMILARITY-001` y `CONT-HOMININ-SPLIT-FOSSIL-IDENTITY-001`.

## QUÉ PODRÍA FALSARLO

Cambiarían esta síntesis: asambleas poblacionales T2T que eliminaran sistemáticamente la discordancia; tríos multigeneracionales que demostraran una tasa anual constante compartida por todos los simios; fósiles inequívocos y bien fechados que situaran coronas fuera de los intervalos; modelos de simulación que mostraran que la ILS observada no puede surgir sin flujo; o ADN antiguo auténtico suficientemente próximo al nodo que permitiera colocar directamente una población ancestral.

## Hipótesis rivales y pruebas discriminatorias

| Problema | Familia A | Familia B | Prueba discriminatoria |
|---|---|---|---|
| reloj | tasa anual casi constante | tasa ligada a vida/generación | tríos multiespecie + calibraciones externas |
| Homo–Pan | split relativamente abrupto | aislamiento prolongado con flujo | ajuste fuera de muestra de tractos y genealogías |
| X joven | flujo/hibridación | selección + sesgo mutacional | patrón conjunto de ILS, diversidad y espectro |
| fecha fósil | mínimo ~7 Ma válido | fósil fuera de corona | caracteres nuevos + matriz + contexto |
| similitud | SNP en alineable | contenido/estructura total | denominador y categoría explícitos |
| ILS | gran población panmíctica | estructura ancestral | longitudes/frecuencias de genealogías y recombinación |

## Dependencias e independencia

- Chimpancé, gorila, bonobo y T2T reutilizan referencias y alineamientos; no son cuatro relojes totalmente independientes.
- ILS y tamaño ancestral suelen salir del mismo mosaico, por lo que su acuerdo puede ser interno al modelo.
- Tríos cambian objeto frente a divergencia filogenética, pero convertirlos a años comparte historia de vida.
- Calibraciones fósiles y reloj molecular dejan de ser independientes si la tasa fue ajustada a esos mismos fósiles.
- Varios fósiles de una localidad comparten horizonte, tafonomía y edad.
- Cromosoma 2 cambia objeto y confirma topología, pero carece de fecha absoluta propia.

## Qué no puede concluirse

- que humanos desciendan de chimpancés actuales;
- que el último ancestro común fuera una pareja o una especie con anatomía chimpancé;
- que `1.23 %`, `98.8 %` o cualquier cifra aislada resuma toda semejanza genómica;
- que el `10 %` estructural T2T sea un porcentaje directo de bases distintas;
- que cada gen apoye el árbol Homo–Pan;
- que ILS sea hibridación;
- que una tasa humana presente se aplique sin cambio a diez millones de años;
- que el fósil más antiguo sea el primero del linaje o el ancestro;
- que el intervalo T2T `5.5–6.3 Ma` cierre toda incertidumbre;
- que la fusión del cromosoma 2 date la separación o cause humanidad.

## Falsadores prioritarios

- pangenomas T2T de múltiples individuos por especie y subespecie;
- tríos grandes con edades parentales, espectros y mosaicos germinales controlados;
- modelos coalescentes que comparen estructura ancestral, flujo y selección con validación predictiva;
- fósiles miocenos africanos con cráneo y postcráneo asociados, matriz explícita y edad directa;
- calibraciones preregistradas con análisis de sensibilidad a máximos y afinidad;
- ensamblajes completos de especies de gibones y de todas las ramas de `Pan`, `Gorilla` y `Pongo`.

## NIVEL DE CONFIANZA

- **A:** humanos y `Pan` son ramas hermanas vivas; gorila y orangután se separaron antes; cromosoma 2 humano deriva de una fusión;
- **A–B:** coalescencia, recombinación e ILS explican árboles discordantes; tasas varían con edad parental y linaje;
- **B–COND:** intervalos T2T de 2025, tamaños ancestrales y separación `Pan`;
- **C:** duración y magnitud de flujo Homo–Pan, anatomía del ancestro común y colocación de fósiles cercanos;
- **D:** hibridación tardía masiva como explicación única del X.

## QUÉ SABEMOS REALMENTE

Sabemos que nuestra rama comparte un ancestro poblacional más reciente con chimpancés y bonobos que con gorilas, y con gorilas que con orangutanes. Genomas completos, mutaciones familiares y fósiles convergen en una separación Homo–Pan del Mioceno tardío, aproximadamente `~5.5–7 Ma`, pero miden relojes diferentes. El mosaico genómico esperado es grande porque las separaciones africanas fueron próximas y las poblaciones ancestrales conservaron variación.

## QUÉ TODAVÍA NO SABEMOS

No conocemos una generación exacta del split, el momento universal en que cesó todo flujo, la tasa anual de cada tramo histórico, la anatomía completa del ancestro, ni qué fósil cercano pertenece inequívocamente a cada lado. Tampoco existe un porcentaje único y científicamente suficiente de «cuánto nos parecemos».

## Qué podría cambiar esta síntesis

- los pangenomas completos de grandes simios anunciados a partir de las referencias T2T;
- mejores modelos de regiones repetitivas, cromosomas sexuales y duplicaciones;
- muestras familiares de edades y especies diversas;
- nuevos fósiles africanos de `12–5 Ma` con contexto geocronológico sólido;
- métodos que integren morfología, preservación, genomas y demografía sin reutilizar calibraciones circularmente.

## Conclusión

Fechamos la separación de nuestro linaje mediante una red de relojes: diferencias entre secuencias, mutaciones observadas en familias, generaciones, recombinación, coalescencia, estructura poblacional y fósiles. Ninguno convierte por sí solo ADN en calendario.

La respuesta responsable no es una fecha sin apellido. Es un intervalo del Mioceno tardío, acompañado por el objeto fechado y el modelo que lo traduce. El árbol de especies es robusto; sus ramas nacieron de poblaciones, y el genoma conserva esa transición como un mosaico. La Investigación 036 examinará los fósiles que suelen colocarse cerca de ese intervalo —`Sahelanthropus`, `Orrorin` y `Ardipithecus`— sin convertirlos en una fila hacia nosotros.

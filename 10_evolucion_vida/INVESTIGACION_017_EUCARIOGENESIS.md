---
id: INV-LIFE-EUK-001
titulo: "¿Cómo inferimos el origen de eucariotas y la endosimbiosis mitocondrial?"
estado: AUDITADO
ultima_revision: 2026-08-11
claims:
  - CLAIM-EUK-TWO-DOMAIN-001
  - CLAIM-EUK-ASGARD-HOST-001
  - CLAIM-EUK-ASGARD-ESP-001
  - CLAIM-EUK-MITO-ENDOSYMBIOSIS-001
  - CLAIM-EUK-MITO-LECA-001
  - CLAIM-EUK-LECA-COMPLEX-001
  - CLAIM-EUK-GENE-MOSAIC-001
  - CLAIM-EUK-SEQUENCE-001
  - CLAIM-EUK-AGE-001
  - CLAIM-EUK-FOSSIL-MINIMUM-001
  - CLAIM-EUK-OXYGEN-001
  - CLAIM-EUK-PLASTID-DISTINCT-001
fuentes:
  - SRC-SPANG-2015
  - SRC-ZAREMBA-2017
  - SRC-AKIL-2018
  - SRC-MARTIJN-2018
  - SRC-MARTIN-2015
  - SRC-IMACHI-2020
  - SRC-FAN-2020
  - SRC-KARNKOWSKA-2016
  - SRC-VOSSEBERG-2021
  - SRC-RODRIGUES-2023
  - SRC-BROCKS-2023
  - SRC-MIAO-2024
  - SRC-RICHARDS-2024
  - SRC-ZHANG-ASGARD-2025
  - SRC-TOBIASSON-2026
  - SRC-KAY-2026
  - SRC-APPLER-2026
  - SRC-BERNABEU-2026
  - SRC-LECHTE-2026
---

# Investigación 017 — ¿Cómo inferimos el origen de eucariotas y la endosimbiosis mitocondrial?

![Portada conceptual de la eucariogénesis](../assets/visuales/hero-eucariogenesis.png)

> **Portada conceptual:** yuxtapone arqueas Asgard, socios bacterianos, una mitocondria, árboles moleculares y microfósiles. No es una escena histórica observada: no fija el huésped exacto, el mecanismo de incorporación, la transición de membranas, el orden de innovaciones ni una fecha única.

![Mapa de evidencia de la eucariogénesis](../assets/visuales/mapa-investigacion-017.svg)

![Cadena desde una simbiosis hasta un orgánulo](../assets/visuales/de-simbiosis-a-organelo.svg)

## Respuesta breve, con sus condiciones

Los eucariotas no constituyen un tercer linaje primario independiente de Bacteria y Archaea. Su componente informacional desciende de un linaje arqueano emparentado con las arqueas **Asgard**, y todas las líneas eucariotas vivas descienden de un ancestro que ya poseía una mitocondria derivada de una bacteria relacionada con Alphaproteobacteria (`CLAIM-EUK-TWO-DOMAIN-001`, `CLAIM-EUK-MITO-ENDOSYMBIOSIS-001`).

Esta conclusión no descansa en que una mitocondria «se parezca» a una bacteria. Convergen:

- filogenias de genes mitocondriales y nucleares de origen bacteriano;
- genomas y ribosomas organelares reducidos;
- membranas, división y cardiolipina compatibles con ascendencia bacteriana;
- transferencia de genes al núcleo y sistemas de importación de proteínas;
- mitocondrias, hidrogenosomas o mitosomas en casi todos los grandes linajes;
- pérdida secundaria completa en *Monocercomonoides*, no supervivencia de un estado anterior a la mitocondria.

La parte arqueana se reconstruye con otra cadena: árboles de proteínas informacionales colocan Eukaryota dentro o junto a Asgard; metagenomas Asgard contienen homólogos de actina, profilina, ESCRT, ubiquitina y componentes de remodelado de membranas; y cultivos o enriquecimientos muestran células pequeñas, sin núcleo ni orgánulos, pero con protrusiones y, en *Lokiarchaeum ossiferum*, un citoesqueleto de Lokiactina (`CLAIM-EUK-ASGARD-HOST-001`, `CLAIM-EUK-ASGARD-ESP-001`).

Lo robusto y lo abierto deben separarse:

```text
Eukaryota tiene ascendencia arqueana                 A-COND
Asgard es el grupo arqueano conocido más próximo     A-B
mitocondria desde endosimbionte Alpha-relacionado    A-COND
LECA ya era mitocondriado y celularmente complejo    A-B
huésped exacto dentro de Asgard                      C-D
donante bacteriano exacto                            C-D
orden de núcleo, fagocitosis y mitocondria            C-D
engullimiento, protrusiones o simbiosis concreta      D
cambio de membrana arqueana a bacteriana              D
edad de FECA, endosimbiosis y LECA                    C-D
escena, localidad y especies participantes            E
```

La regla central es:

```text
pariente vivo + gen homólogo + mecanismo posible
                     ≠
       ancestro directo + secuencia histórica
```

## 0. Cinco nombres para cinco objetos

| Objeto | Definición operacional | Error que evita |
|---|---|---|
| linaje arqueano del núcleo | rama arqueana de la que procede la mayor parte de la maquinaria informacional eucariota | llamar ancestro directo a una arquea Asgard moderna |
| linaje mitocondrial | rama bacteriana que originó el orgánulo | identificarla sin condición con *Rickettsia* u otra especie actual |
| eucariogénesis | intervalo de cambios entre ancestros procarióticos y el ancestro eucariota común | convertir un proceso prolongado en un instante |
| FECA | primer ancestro eucariota común bajo una definición y árbol concretos | confundirlo con una célula plenamente moderna |
| LECA | último ancestro común de todos los eucariotas actuales | confundir ancestro común con primer eucariota |

`FECA` no tiene una definición universal tan estable como `LECA`. Algunos trabajos distinguen el tallo nuclear arqueano (`nFECA`) y el tallo mitocondrial bacteriano (`mFECA`) antes de su unión. El proyecto conservará el término sólo cuando el estudio especifique qué árbol y qué nodo fecha. LECA es posterior a la adquisición mitocondrial y no marca por sí solo el comienzo del proceso.

## 1. Lo que realmente se observa

No existe una célula fósil etiquetada como FECA ni una roca que conserve el momento de la endosimbiosis. Los datos inmediatos son:

- secuencias nucleares, mitocondriales y procarióticas actuales;
- estructuras y funciones de proteínas conservadas;
- distribución de familias génicas entre linajes;
- cultivos, enriquecimientos y micrografías de arqueas Asgard modernas;
- genomas mitocondriales y orgánulos reducidos de eucariotas anaerobios;
- fósiles orgánicos y biomarcadores proterozoicos;
- calibraciones geológicas y relojes moleculares.

Las inferencias siguen varias rutas que no deben fingirse independientes:

```text
secuencia ── homología ── árbol ── nodo de ascendencia
estructura ─ función ─── homología profunda ── capacidad ancestral
orgánulo ── genoma/importación ── reducción y transferencia ── endosimbiosis
fósil ── edad de roca + biogenicidad + afinidad ── edad mínima
duplicación ── reloj + calibraciones ── orden/edad modelados
```

Una filogenia puede identificar parentesco sin revelar la forma de contacto. Un fósil puede establecer que cierto tipo celular ya existía sin fechar la adquisición mitocondrial. Una proteína funcional en una arquea actual demuestra capacidad, no el comportamiento de su ancestro.

## 2. El huésped: por qué miramos dentro de Archaea

La antigua representación de tres dominios equivalentes fue útil para reconocer Archaea, pero no es la genealogía mejor apoyada para la célula eucariota. Genes de traducción, transcripción y replicación sitúan su componente nuclear dentro del marco arqueano; la herencia bacteriana se superpone después mediante mitocondria y transferencias (`SRC-WILLIAMS-2013`).

Spang et al. recuperaron el genoma compuesto de `Lokiarchaeum` a partir de sedimentos marinos y encontraron genes antes considerados eucariota-específicos (`SRC-SPANG-2015`). Zaremba-Niedzwiedzka et al. ampliaron el muestreo a Thor-, Odin-, Heimdall- y Lokiarchaeota y acuñaron el conjunto Asgard. Sus árboles afiliaron Asgard con eucariotas y sus genomas incluyeron homólogos de maquinaria de membranas y tráfico (`SRC-ZAREMBA-2017`).

La conclusión delimitada es:

> Asgard contiene los parientes arqueanos conocidos más próximos de Eukaryota y conserva piezas moleculares relevantes para reconstruir el tallo eucariota.

No autoriza:

- que *Lokiarchaeum* sea «nuestro ancestro»;
- que el ancestro tuviera todos los genes de todas las Asgard modernas;
- que los metagenomas prueben núcleo, endocitosis o fagocitosis;
- que la posición exacta dentro de Asgard esté cerrada.

Un análisis de 2023 colocó a Eukaryota cerca de Hodarchaeales dentro de Heimdallarchaeia. Zhang et al. incorporaron 223 MAG casi completos y detectaron genomas quiméricos que alteraban árboles previos; su análisis de 2025 situó el origen antes de la diversificación de las Heimdallarchaeia muestreadas (`SRC-ZHANG-ASGARD-2025`). En 2026, Appler et al. añadieron 404 MAG y propusieron de nuevo un escenario centrado en Heimdallarchaeia con metabolismo de oxígeno (`SRC-APPLER-2026`). La afiliación amplia a Asgard es mucho más robusta que el nombre del orden hermano (`CONT-EUK-ASGARD-PLACEMENT-001`).

## 3. Piezas eucariotas en células que no son eucariotas

Las proteínas de firma eucariota (`ESP`) cambian la pregunta de «¿cómo apareció todo de cero?» a «¿qué componentes ya tenían historia arqueana?».

| Sistema | Evidencia en Asgard | Lo que no demuestra |
|---|---|---|
| actina/profilina/gelsolina | homología, estructura y regulación *in vitro* | motilidad o fagocitosis eucariota |
| ESCRT y ubiquitina | repertorios completos o parciales y función relacionada | núcleo o endomembranas cerradas |
| proteínas tipo coatómero | dominios Sec23/24 y TRAPP | aparato de Golgi ancestral |
| tubulina y tráfico | homólogos en subconjuntos | huso mitótico completo |
| protrusiones | microscopía de cultivos/enriquecimientos | que envolvieran al protomitochondrion |

Akıl y Robinson cristalizaron profilinas Asgard y mostraron que regulan actina de mamífero *in vitro*; no interactuaban con motivos de poliprolina como las profilinas eucariotas modernas (`SRC-AKIL-2018`). Rodrigues-Oliveira et al. observaron en el enriquecimiento de *Ca. Lokiarchaeum ossiferum* filamentos compatibles con F-actina que recorrían cuerpos, constricciones y protrusiones (`SRC-RODRIGUES-2023`). Es evidencia funcional y celular mucho más directa que una anotación de metagenoma, pero pertenece a un pariente moderno.

Imachi et al. tardaron alrededor de una década en aislar *Ca. Prometheoarchaeum syntrophicum* MK-D1. La célula es anaerobia, de unos `550 nm`, extremadamente lenta, dependiente de socios metabólicos, sin núcleo ni orgánulos visibles y con protrusiones largas y ramificadas (`SRC-IMACHI-2020`). Su modelo `E³` —entrelazar, engullir, endogenizar— organiza una posibilidad física; los propios autores lo presentaron como hipotético.

La conclusión `B` es que parte de la complejidad molecular precede a LECA. La transición desde esas piezas hasta núcleo, endomembranas y fagocitosis permanece en `C-D`.

## 4. La mitocondria: una bacteria convertida en orgánulo

La endosimbiosis mitocondrial es uno de los resultados más fuertes de la biología evolutiva. Ninguna característica aislada bastaría, pero el paquete es coherente:

1. los genomas mitocondriales codifican `rRNA`, `tRNA` y proteínas relacionadas con bacterias;
2. sus ribosomas y traducción conservan ascendencia bacteriana aunque hayan divergido;
3. filogenias multigénicas colocan la rama mitocondrial cerca o dentro de Alphaproteobacteria;
4. la doble membrana, cardiolipina y división son compatibles con un origen celular;
5. miles de proteínas se codifican hoy en el núcleo y se importan al orgánulo;
6. genes transferidos y genomas organelares reducidos documentan domesticación;
7. mitocondrias y orgánulos relacionados forman una herencia común en Eukaryota.

El origen **Alpha-relacionado** es robusto; el donante exacto no. Martijn et al. ampliaron el muestreo metagenómico y, al controlar ramas largas y composición, situaron mitocondrias como rama profunda anterior a las Alphaproteobacteria muestreadas (`SRC-MARTIJN-2018`). Fan et al., con selección taxonómica sistemática, las recuperaron dentro de Alphaproteobacteria, próximas a un ancestro compartido con Rickettsiales y linajes marinos no clasificados (`SRC-FAN-2020`).

Ambos trabajos coinciden en la ascendencia bacteriana/alfaproteobacteriana amplia y discrepan en la posición fina. Es incorrecto resolver esa sensibilidad llamando al donante «una *Rickettsia*» (`CONT-EUK-MITO-DONOR-001`).

## 5. De endosimbionte a orgánulo

Una bacteria cautiva no se convierte automáticamente en mitocondria. La integración exige un proceso poblacional:

```text
asociación persistente
   ↓ transmisión entre generaciones
reducción del genoma endosimbionte
   ↓ transferencia de genes al núcleo
proteínas nucleares dirigidas al endosimbionte
   ↓ sistemas TOM/TIM y control del huésped
metabolitos y división coordinados
   ↓ dependencia recíproca
orgánulo hereditario
```

La transferencia de un gen sólo es informativa cuando se demuestra que su producto fue retargeteado y que el sistema organelar lo usa. Muchos genes bacterianos del núcleo pudieron llegar por otras transferencias. Por eso el número de genes «bacterianos» no equivale al genoma del protomitochondrion.

El orgánulo conservó una fracción pequeña y variable de su genoma. El resto se perdió, se transfirió o fue reemplazado. Los complejos de importación y ensamblaje son mosaicos: algunas piezas descienden del endosimbionte; otras fueron reclutadas del huésped o innovadas durante la integración.

## 6. El experimento natural de las mitocondrias reducidas

Eucariotas anaerobios que parecían primitivamente amitochondriados motivaron la hipótesis `Archezoa`: quizá se habían separado antes de la endosimbiosis. La microscopía y la genómica encontraron en sus principales linajes hidrogenosomas, mitosomas u otros orgánulos relacionados con mitocondrias. Aunque algunos ya no producen ATP o no poseen genoma, conservan importación, ensamblaje de centros `Fe–S` u otras funciones derivadas.

*Monocercomonoides* es la excepción instructiva. Karnkowska et al. no encontraron proteínas, translocasas, cardiolipina ni vía mitocondrial ISC y concluyeron que el orgánulo se perdió por completo. Una vía bacteriana SUF adquirida lateralmente sustituyó la función esencial de ensamblaje `Fe–S` (`SRC-KARNKOWSKA-2016`).

Su posición dentro de Metamonada muestra que la pérdida es **secundaria**. No es una ventana a una célula anterior a la mitocondria. El descubrimiento cambia «todos los eucariotas tienen un orgánulo» por una frase más precisa:

> Todos los eucariotas actuales descienden de un ancestro mitocondriado; algunos descendientes redujeron o perdieron el orgánulo.

## 7. LECA no era una primera célula sencilla

La comparación de grandes linajes permite reconstruir propiedades presentes antes de su radiación. El consenso de Richards et al. resume un LECA con una célula ya compleja (`SRC-RICHARDS-2024`):

- núcleo con poros y cromosomas lineales;
- transcripción separada de traducción;
- histonas, replisoma y ciclo celular;
- spliceosoma e intrones;
- endomembranas, tráfico vesicular y peroxisomas;
- actina, tubulina, motores y división mitótica;
- meiosis/sexo bajo reconstrucciones comparativas;
- esteroles y membranas de tipo bacteriano;
- mitocondria con importación de proteínas.

La presencia en LECA se infiere cuando homólogos y sistemas aparecen en ramas eucariotas profundas con árboles compatibles. Pérdidas posteriores pueden ocultar componentes y transferencias pueden producir falsos positivos. «LECA complejo» no implica que todas las piezas aparecieran juntas, que tuvieran idéntica función o que LECA fuese el primer eucariota (`CLAIM-EUK-LECA-COMPLEX-001`).

## 8. Un genoma mosaico, no una suma de dos porcentajes

La fórmula escolar «genes informacionales arqueanos + metabolismo bacteriano» capta una tendencia, pero la clasificación depende de:

- qué familias se consideran presentes en LECA;
- cobertura y calidad de MAG procarióticos;
- ortología, paralogía y pérdida;
- árbol de referencia y modelo de sustitución;
- inclusión de virus y linajes sin muestrear;
- umbral de soporte para asignar un donante.

Tobiasson et al. compararon árboles restringidos para `13,500` grupos ortólogos eucariota–procariota usando decenas de millones de secuencias. Encontraron una contribución Asgard dominante a la mayoría de los sistemas conservados de LECA y una señal alphaproteobacteriana coherente pero limitada, concentrada en energía, traducción mitocondrial y centros `Fe–S` (`SRC-TOBIASSON-2026`). Su lectura favorece un huésped Asgard ya complejizado y captura mitocondrial tardía.

Bernabeu et al. reconstruyeron miles de grupos de LECA y buscaron parentescos en más de `65,000` genomas procarióticos y `1.3` millones de grupos virales. Infirieron oleadas de transferencia desde Myxococcota y Planctomycetota, algunas premicondriales, y una posible mediación viral (`SRC-BERNABEU-2026`). Los autores no pueden determinar si cada donante fue huésped, endosimbionte, alimento, vecino o vector.

Las fracciones concretas de ambos trabajos no son censos intercambiables del mismo proteoma. Su desacuerdo parcial es evidencia sobre sensibilidad de definición y base de datos (`CONT-EUK-GENE-DONORS-001`). La conclusión segura es que LECA era mosaico y que dos socios principales no excluyen otras transferencias.

## 9. ¿La mitocondria llegó pronto o tarde?

Los modelos se ordenan por la relación entre endosimbiosis y complejidad:

| Familia | Secuencia mínima | Dificultad principal |
|---|---|---|
| mitocondria temprana | asociación energética → expansión génica y celular | explicar piezas eucariotas con historia arqueana previa |
| huésped complejizado | citoesqueleto/membranas/núcleo → captura mitocondrial | explicar energía, fagocitosis y transición de membranas antes del orgánulo |
| sintrofía/protrusiones | intercambio metabólico → envolvimiento gradual | mecanismo físico no observado históricamente |
| endosimbiosis serial | socios bacterianos previos → mitocondria | más eventos y retargeting necesarios |

Vosseberg et al. usaron duplicaciones pre-LECA para ordenar innovaciones relativamente y encontraron ensamblaje gradual (`SRC-VOSSEBERG-2021`). Kay et al. añadieron relojes relajados y calibraciones cruzadas: en su modelo, duplicaciones asociadas con citoesqueleto, membranas, fagocitosis y núcleo ocurrieron entre `3.0` y `2.25 Ga`, antes de una adquisición mitocondrial paleoproterozoica y de un LECA posterior (`SRC-KAY-2026`).

El resultado es importante pero condicionado. Fechar una duplicación da una edad máxima para funciones paralogo-específicas; asignar la función moderna al nodo añade otro puente. Topología, calibraciones, tasas y ausencia de intermediarios vivos permanecen. Esta investigación registra el orden «huésped complejo → mitocondria» como `C-COND`, no como película cerrada (`CLAIM-EUK-SEQUENCE-001`).

## 10. El problema de las membranas y del engullimiento

Archaea suele construir lípidos éter sobre glicerol‑1‑fosfato; Bacteria y Eukaryota usan principalmente lípidos éster sobre glicerol‑3‑fosfato. Si el huésped era arqueano, la superficie eucariota requiere reemplazo, mezcla o una topología más compleja.

Además, ninguna arquea Asgard cultivada posee fagocitosis eucariota demostrada. Las protrusiones podrían aumentar contacto o intercambio; no prueban que una célula rodeara a otra. Modelos posibles incluyen:

1. envolvimiento progresivo por protrusiones;
2. invaginación y cierre de membranas;
3. entrada facilitada por una pared/superficie transitoria;
4. asociación sintrofia que se internaliza después;
5. huésped bacteriano adicional con pérdida de membrana arqueana.

Cada escenario debe explicar simultáneamente superficie, membranas nucleares, endomembranas, topología mitocondrial e importación proteica. Ninguno está directamente observado en el pasado (`CONT-EUK-ENGULFMENT-001`, `CONT-EUK-MEMBRANE-001`).

## 11. Fechas: tres relojes que no datan lo mismo

### 11.1 Relojes moleculares

Fechan divergencias o duplicaciones bajo modelos. El rango para eucariogénesis es amplio y sensible a fósiles, raíz y tasas. Kay et al. extendieron el proceso desde el Mesoarcaico hasta el Paleoproterozoico tardío; la aparente precisión de algunos nodos no convierte las innovaciones en muestras fechadas.

### 11.2 Fósiles

Lechte et al. integraron paleontología, sedimentología y geoquímica para fósiles de `~1.75–1.4 Ga`. Su distribución casi exclusiva en fondos oxigenados favorece eucariotas aerobios bentónicos, probablemente mitocondriados (`SRC-LECHTE-2026`). Morfología y tamaño no asignan necesariamente cada fósil a una rama corona.

Los fósiles proporcionan edad mínima para células con ciertos rasgos, no fecha del origen de Eukaryota, de FECA ni de la endosimbiosis. *Qingshania magnifica*, de unos `1.635 Ga`, conserva filamentos celulares grandes y probablemente eucariotas; la afinidad fotosintética y su posición dentro de Eukaryota siguen siendo interpretaciones (`SRC-MIAO-2024`). Candidatas más antiguas y formas como *Tappania* deben conservar su incertidumbre taxonómica.

### 11.3 Biomarcadores

Esteranos convencionales y protosteroles dependen de singenicidad, madurez y especificidad de la ruta. La «biota de protosteroles» documentada desde al menos `~1.64 Ga` puede registrar eucariotas del tallo con biosíntesis distinta, junto con productores bacterianos posibles, pero no identifica el nodo mitocondrial (`SRC-BROCKS-2023`). Un cuerpo fósil y una molécula no se vuelven independientes si comparten edad de cuenca, modelos de preservación o interpretación metabólica.

```text
reloj molecular  → edad de nodo bajo modelo
fósil            → presencia mínima de morfología/linaje
biomarcador       → presencia mínima de una biosíntesis compatible
```

## 12. Oxígeno: contexto y ecología, no interruptor demostrado

La Gran Oxidación antecede por cientos de millones de años a los fósiles eucariotas ampliamente aceptados. Eso hace plausible que `O₂` ampliara oportunidades respiratorias y biosíntesis de esteroles. No demuestra que el cruce atmosférico causara la endosimbiosis.

Appler et al. reconstruyeron complejos respiratorios y detoxificación de especies reactivas en múltiples Heimdallarchaeia modernas y propusieron metabolismo de oxígeno en el ancestro Asgard–eucariota. Zhang et al., con otra posición filogenética, reconstruyeron un ancestro anaerobio dependiente de `H₂`. Son inferencias de ancestros y taxones distintos bajo árboles que compiten (`CONT-EUK-OXYGEN-001`).

Lechte et al. muestran una asociación ecológica posterior: los fósiles más antiguos muestreados ocupaban preferentemente fondos oxigenados. Ese resultado apoya aerobiosis de aquellas células, no un umbral universal ni la fecha de la adquisición mitocondrial (`CLAIM-EUK-OXYGEN-001`).

## 13. Plastidios: otra endosimbiosis, no la misma

Cloroplastos y otros plastidios descienden de una cianobacteria incorporada **después** de que existiera un eucariota mitocondriado. Su genoma, doble membrana, traducción y transferencia al núcleo brindan una comparación poderosa para el proceso de organelogénesis (`SRC-MARTIN-2015`).

No deben usarse para afirmar que:

- el protomitochondrion era fotosintético;
- mitocondria y plastidio entraron juntos;
- todos los eucariotas descendieron de un ancestro fotosintético;
- el mecanismo físico de ambas endosimbiosis fue idéntico.

La endosimbiosis primaria de plastidios y las secundarias/terciarias muestran que la integración puede repetirse, pero no observan la primera mitocondria (`CLAIM-EUK-PLASTID-DISTINCT-001`).

## 14. Qué sabemos, qué inferimos y qué no recuperamos

| Afirmación | Dato dominante | Confianza | Límite |
|---|---|---:|---|
| ascendencia arqueana del núcleo | árboles informacionales | A-COND | posición fina en Asgard |
| afinidad Asgard | filogenómica + ESP + cultivos | A-B | pariente no es ancestro directo |
| origen bacteriano de mitocondria | genoma, ribosoma, árboles, importación | A-COND | donante exacto |
| ascendencia Alpha-relacionada | árboles multigénicos | B-COND | dentro/fuera y hermana exacta |
| LECA mitocondriado | distribución de mitocondrias/MRO + pérdidas | A-B | estado funcional preciso |
| LECA celularmente complejo | reconstrucción comparativa de sistemas | A-B | orden de adquisición |
| mosaico de genes | árboles de miles de familias | B | porcentajes/modelos |
| huésped complejizado antes de mitocondria | duplicaciones fechadas | C-COND | función y reloj |
| eucariotas fósiles por `~1.75 Ga` | morfología + contexto | B-C | afinidad corona/tallo |
| metabolismo aeróbico de fósiles muestreados | distribución redox | C-COND | no fecha origen |
| mecanismo de engullimiento | plausibilidad/células modernas | D | sin intermediarios históricos |
| membrana y núcleo exactos | escenarios comparativos | D | topología subdeterminada |
| especies, lugar y escena | sin archivo directo | E | no recuperable hoy |

## 15. Qué cambiaría la respuesta

La reconstrucción avanzaría materialmente con:

- cultivos Asgard adicionales y ciclos celulares observados en condiciones controladas;
- filogenias estables al añadir MAG completos y retirar contaminación/quimerismo;
- intermediarios naturales de integración endosimbiótica con transmisión, transferencia e importación naciente;
- estructuras ancestrales reconstruidas de sistemas de membranas e importación;
- fósiles proterozoicos con ultraestructura, química y edad replicadas;
- biomarcadores singenéticos ligados a rutas biosintéticas reconstruidas;
- relojes que concuerden entre duplicaciones independientes y calibraciones alternativas;
- modelos que predigan simultáneamente lípidos, topología y herencia organelar.

## LO OBSERVADO

- secuencias, genomas y estructuras de eucariotas, mitocondrias, bacterias y arqueas actuales;
- ESP, profilinas funcionales, protrusiones y citoesqueleto en Asgard modernas;
- mitocondrias, mitosomas, hidrogenosomas y pérdida secundaria en *Monocercomonoides*;
- fósiles orgánicos de `~1.75–1.4 Ga` y su distribución por facies/redox.

No se observa FECA, LECA, el protomitochondrion ni el episodio de integración.

## LO MEDIDO

- secuencias y distancias de sustitución;
- soporte/topología de árboles bajo modelos y muestreos explícitos;
- estructuras de proteínas y efectos sobre polimerización;
- diámetro, crecimiento, metabolismo y ultraestructura de cultivos/enriquecimientos;
- presencia/ausencia de familias, sistemas de importación y rutas `Fe–S`;
- edades estratigráficas, morfología fósil, facies y proxies redox.

## LO INFERIDO

De esas mediciones se infieren dos genealogías mayores —huésped arqueano Asgard y mitocondria bacteriana Alpha-relacionada—, integración anterior a LECA, complejidad celular de LECA, mosaico génico y una eucariogénesis prolongada.

## LOS SUPUESTOS

- marcadores seleccionados aproximan la historia del huésped;
- homología estructural conserva ascendencia y función relevantes;
- pérdidas/HGT/paralogía pueden modelarse suficientemente;
- MAG representan organismos y no mezclas contaminantes;
- una duplicación precede la especialización funcional que se le asigna;
- morfología, edad y redox preservan una señal ecológica primaria.

## LAS INCERTIDUMBRES

Las mayores proceden de ramas largas, composición, taxones extinguidos, MAG incompletos/quiméricos, definición del proteoma de LECA, función ancestral, calibraciones, afinidad fósil y preservación. No son una sola barra de error compartida.

## LAS ALTERNATIVAS

Siguen viables, en distinto grado, mitocondria temprana o tardía, internalización por protrusiones, invaginación o fagocitosis, uno o más huéspedes bacterianos, reemplazo o mezcla de membranas y HGT desde vecinos, endosimbiontes o virus.

## LAS CONTROVERSIAS

El proyecto mantiene abiertas `CONT-EUK-ASGARD-PLACEMENT-001`, `CONT-EUK-MITO-DONOR-001`, `CONT-EUK-MITO-TIMING-001`, `CONT-EUK-ENGULFMENT-001`, `CONT-EUK-MEMBRANE-001`, `CONT-EUK-GENE-DONORS-001`, `CONT-EUK-OXYGEN-001` y `CONT-EUK-FOSSIL-001`.

## QUÉ PODRÍA FALSARLO

La tesis central perdería apoyo si marcadores independientes y modelos adecuados colocaran establemente Eukaryota fuera de Archaea/Asgard, si genomas y traducción mitocondriales no compartieran genealogía bacteriana o si supuestos linajes premitocondriales demostraran de forma robusta divergencia anterior a la adquisición. Los escenarios finos pueden falsarse con topologías estables, intermediarios celulares, raíces lipídicas o cronologías que violen sus predicciones.

## NIVEL DE CONFIANZA

`A-COND/A-B` para ascendencias mayores, endosimbiosis y LECA mitocondriado/complexo; `B-COND/C` para afinidad Alpha y mosaico; `C-COND/C-D` para orden, edades y ecología; `D-E` para mecanismo físico, transición de membranas, especies y localidad.

## QUÉ SABEMOS REALMENTE

La célula eucariota combina una genealogía nuclear arqueana relacionada con Asgard y una genealogía mitocondrial bacteriana. La integración ocurrió antes de LECA, que ya era complejo. Asgard actuales conservan piezas y arquitecturas relevantes, no el ancestro mismo.

## QUÉ TODAVÍA NO SABEMOS

No conocemos la rama huésped exacta, el donante bacteriano exacto, la secuencia núcleo–mitocondria, el mecanismo de internalización, el cambio de membranas, el número de socios adicionales, las fechas de FECA/endosimbiosis/LECA ni el peso causal del oxígeno.

## Conclusión

La eucariogénesis es una genealogía reticulada reconstruida desde descendientes, no una escena vista. El núcleo de la respuesta es fuerte: un linaje arqueano relacionado con Asgard y un endosimbionte bacteriano relacionado con Alphaproteobacteria contribuyeron a una población ancestral; la integración produjo la mitocondria antes de LECA, y LECA ya poseía una arquitectura celular compleja.

La resolución cae al preguntar **cuál** Asgard, **cuál** bacteria, **cuándo** se unieron, **cómo** cruzaron la barrera de membrana y **en qué orden** aparecieron núcleo, fagocitosis, endomembranas y sexo. Los resultados de 2025–2026 estrechan y también reabren esas preguntas: nuevos genomas mueven la rama huésped; distintos modelos redistribuyen los genes; duplicaciones fechadas favorecen una mitocondria tardía; y los fósiles más antiguos conocidos revelan ecología aerobia sin conservar el origen.

La formulación responsable no es «una arquea se comió una bacteria». Es:

> árboles, estructuras, orgánulos reducidos, cultivos y fósiles convergen en una asociación arqueano–bacteriana integrada antes de LECA; el mecanismo físico y la secuencia fina siguen siendo hipótesis contrastables.

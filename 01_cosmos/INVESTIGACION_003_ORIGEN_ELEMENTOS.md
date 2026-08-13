---
id: INV-COSMOS-ELEMENTS-001
titulo: "¿Cómo sabemos dónde y cómo se formaron los elementos?"
estado: AUDITADO
ultima_revision: 2026-08-10
claims:
  - CLAIM-COSMOS-SPECTRA-001
  - CLAIM-COSMOS-BBN-ELEMENTS-001
  - CLAIM-STARS-FUSION-001
  - CLAIM-STARS-ADVANCED-BURNING-001
  - CLAIM-STARS-SPROCESS-001
  - CLAIM-SN-NUCLEOSYNTHESIS-001
  - CLAIM-MERGER-RPROCESS-001
  - CLAIM-COSMICRAY-LIBEB-001
  - CLAIM-PRESOLAR-GRAINS-001
  - CLAIM-ELEMENT-ORIGINS-001
fuentes:
  - SRC-KIRCHHOFF-BUNSEN-1860
  - SRC-PAYNE-1925
  - SRC-NIST-ASD-2024
  - SRC-ASPLUND-2021
  - SRC-COOKE-2018
  - SRC-MOSSA-2020
  - SRC-BETHE-1939
  - SRC-BOREXINO-2020
  - SRC-HOYLE-1954
  - SRC-B2FH-1957
  - SRC-MERRILL-1952
  - SRC-MATZ-1988
  - SRC-ABBOTT-MULTI-2017
  - SRC-KASEN-2017
  - SRC-WATSON-2019
  - SRC-REEVES-1970
  - SRC-BERNATOWICZ-1987
  - SRC-LIU-2019
  - SRC-KELLER-2014
---

# Investigación 003 — ¿Cómo sabemos dónde y cómo se formaron los elementos?

![Historia conceptual de los elementos](../assets/visuales/hero-origen-elementos.png)

> **Portada conceptual:** reúne procesos separados por miles de millones de años. No está a escala, no asigna en exclusiva un elemento a una fuente y no sustituye observaciones.

![Mapa de evidencia de la investigación](../assets/visuales/mapa-investigacion-003.svg)

> **Pregunta de primeros principios:** si no pudiéramos aceptar la frase “somos polvo de estrellas” por autoridad, ¿qué señales actuales permitirían demostrar que los núcleos atómicos tienen historias diferentes y localizar al menos parte de su producción?

## Respuesta breve, con sus condiciones

No existe una cámara que haya filmado toda la producción cósmica de elementos. La reconstrucción combina señales distintas:

1. los átomos e iones producen patrones espectrales reproducibles en laboratorio;
2. las abundancias primordiales de deuterio y helio se explican mediante una red nuclear temprana que dejó sobre todo hidrógeno y helio;
3. los neutrinos solares llegan directamente desde reacciones de fusión activas en el interior del Sol;
4. el tecnecio, cuyos isótopos no sobreviven durante la edad de una estrella, aparece en atmósferas de gigantes evolucionadas;
5. líneas gamma de `56Co` en SN 1987A revelaron material radiactivo recién producido;
6. la kilonova de GW170817 y la identificación espectral de estroncio mostraron que una fusión de estrellas de neutrones fabrica material de captura neutrónica;
7. granos presolares conservados en meteoritos tienen composiciones isotópicas que no fueron homogeneizadas con el Sistema Solar y pueden compararse con modelos estelares.

La conclusión robusta no es que “todo se hizo en supernovas”. Es que **múltiples procesos**, en épocas y ambientes distintos, contribuyeron al inventario actual. La proporción exacta de cada fuente para cada isótopo requiere física nuclear, modelos estelares, tasas de eventos y evolución química galáctica; ahí permanece buena parte de la incertidumbre.

## 0. Qué significa “origen de un elemento”

Un elemento queda definido por su número de protones `Z`; sus isótopos comparten `Z` pero difieren en neutrones. Preguntar de dónde viene “el calcio” puede mezclar historias diferentes de sus isótopos. También puede significar:

- **síntesis nuclear:** reacción que formó un núcleo;
- **eyección:** proceso que lo sacó de una estrella o colisión;
- **mezcla galáctica:** transporte hasta una nube interestelar;
- **incorporación:** entrada en el material que formó el Sistema Solar;
- **transformación posterior:** decaimiento radiactivo que produjo el isótopo observado.

Una tabla periódica coloreada con un solo origen por casilla borra estas distinciones. La unidad científica correcta suele ser el **isótopo**, la reacción y la historia de transporte, no solo el nombre del elemento.

## 1. Qué objetos existen hoy

| Archivo actual | Señal medida | Qué puede demostrar | Qué no demuestra solo |
|---|---|---|---|
| espectro solar o estelar | flujo por longitud de onda; perfiles de líneas | presencia de transiciones de átomos/iones y abundancias modeladas | lugar y fecha únicos de síntesis |
| neutrinos solares | energía y tasa de interacciones raras | reacciones nucleares activas en el interior solar | todas las etapas de evolución estelar |
| espectro gamma de una supernova | fotones en energías de decaimiento | núcleos radiactivos y movimiento del material emisor | origen de todos los elementos pesados |
| kilonova | espectros y curvas de luz tras una fusión compacta | eyección caliente, opacidades y algunos elementos recién formados | fracción galáctica universal a partir de un evento |
| estrella con tecnecio | líneas ópticas atribuidas a Tc I | producción reciente y transporte hasta la atmósfera | tasa completa del proceso `s` para todos los isótopos |
| estrella muy pobre en hierro | límites y abundancias de C, Mg, Ca, Fe | enriquecimiento no uniforme por generaciones anteriores | progenitor único sin comparar modelos |
| grano presolar | razones isotópicas en un sólido microscópico | materia anterior al Sol con una historia nuclear distinta | fuente estelar única sin un modelo de condensación |
| deuterio en gas poco metálico | perfiles de absorción H I/D I | abundancia primordial aproximada bajo controles de nube | red BBN completa por sí sola |

## 2. El diccionario: por qué una línea identifica materia

Los electrones ligados solo ocupan ciertos estados energéticos. Una transición entre niveles absorbe o emite un fotón cuya energía satisface:

```text
ΔE = hν = hc/λ
```

La carga nuclear y la estructura electrónica hacen que el conjunto de líneas sea característico de cada átomo o ion. Kirchhoff y Bunsen establecieron en el siglo XIX la comparación sistemática entre espectros de laboratorio y fuentes remotas. Hoy el NIST Atomic Spectra Database conserva longitudes de onda, niveles, probabilidades de transición y energías de ionización evaluadas.

Pero una línea fuerte no equivale automáticamente a “mucho elemento”. Su intensidad también depende de:

- temperatura y densidad;
- fracción ionizada;
- población del nivel electrónico inicial;
- opacidad y transferencia radiativa;
- convección, geometría y estructura atmosférica;
- mezcla de líneas y calidad de los datos atómicos;
- resolución, continuo, respuesta instrumental y absorción entre fuente y detector.

Cecilia Payne aplicó ionización y excitación a espectros estelares y mostró que las diferencias de clase espectral no podían leerse como una lista directa de abundancias. Las evaluaciones solares modernas todavía revisan modelos 3D, equilibrio termodinámico no local y datos atómicos. El espectro es un diccionario físico potente, no un código de barras libre de modelo.

## 3. Primer inventario: nucleosíntesis primordial

En el modelo térmico temprano, la expansión enfrió el plasma con rapidez. Una red de reacciones construyó núcleos ligeros durante un intervalo breve. El resultado estándar es, por masa, principalmente hidrógeno y helio, con deuterio, `3He` y `7Li` en cantidades mucho menores.

La cadena de evidencia no observa las reacciones antiguas:

```text
secciones eficaces nucleares medidas
  + tasa de expansión modelada
  + D/H en gas poco procesado
  + abundancia de He
  → prueba condicionada de nucleosíntesis primordial
```

Cooke et al. midieron D/H en siete sistemas de absorción poco metálicos. Mossa et al. midieron bajo tierra la reacción `D(p,γ)3He` en el rango relevante, reduciendo una incertidumbre nuclear. La concordancia con la densidad bariónica del CMB es una prueba cruzada fuerte.

### Límite necesario

BBN no explica carbono, oxígeno, silicio, hierro ni la mayor parte de los núcleos pesados. Además, la abundancia de litio en estrellas antiguas no coincide con la predicción estándar al nivel esperado. “BBN acertó deuterio” y “toda abundancia ligera está resuelta” no son la misma frase.

## 4. Una estrella activa: fusión y neutrinos

En estrellas de secuencia principal, la conversión neta de hidrógeno en helio libera energía porque la masa final es menor que la inicial:

```text
4 p → 4He + energía + partículas
```

La cadena protón–protón domina en el Sol; el ciclo CNO contribuye menos allí y se vuelve más importante a temperaturas centrales mayores. Bethe formalizó las redes capaces de sostener la luminosidad estelar. La teoría sola, sin embargo, no demostraría que el Sol realmente las ejecuta.

Los neutrinos cambian la situación. Interactúan débilmente y escapan del núcleo en poco tiempo comparado con la difusión de los fotones. Experimentos solares detectaron productos de reacciones específicas. Borexino reportó en 2020 evidencia experimental de neutrinos del ciclo CNO usando un centelleador líquido extraordinariamente radiopuro.

La inferencia todavía exige:

- sección eficaz de detección;
- espectro de reacción;
- fondos radiactivos y cosmogénicos;
- oscilación entre sabores de neutrino;
- modelo solar para traducir flujos en contribución energética.

Aun con esas condiciones, los neutrinos son evidencia más directa de fusión nuclear activa que la luz visible de la fotosfera.

## 5. De helio al grupo del hierro

Cuando cambian temperatura, densidad y composición del núcleo, las estrellas pueden activar nuevas redes. La reacción triple alfa forma `12C`; capturas posteriores contribuyen a `16O`. En estrellas suficientemente masivas aparecen etapas de quema de carbono, neón, oxígeno y silicio, hasta composiciones dominadas por núcleos del grupo del hierro.

La frase popular “la fusión se detiene en el hierro” necesita corrección:

- el máximo de energía de enlace por nucleón no pertenece simplemente a “hierro” como casilla única;
- la quema avanzada forma una distribución de isótopos del grupo Fe/Ni;
- por encima de esa región, fusionar núcleos cargados deja de ser una fuente neta eficiente de energía estelar;
- capturas de neutrones y ambientes explosivos pueden construir núcleos más pesados por rutas diferentes.

Hoyle calculó en 1954 la síntesis de carbono a níquel en estrellas muy calientes; Burbidge, Burbidge, Fowler y Hoyle organizaron en 1957 familias de procesos. Son hitos teóricos e históricos, no una observación moderna suficiente. Sus predicciones se contrastan con secciones eficaces, abundancias, neutrinos, supernovas, granos y poblaciones estelares.

## 6. Captura lenta de neutrones: gigantes AGB, tecnecio y polvo

En el proceso `s`, una captura neutrónica suele ocurrir con tiempo suficiente para que núcleos inestables decaigan antes de la siguiente captura. Estrellas evolucionadas de masa baja o intermedia, especialmente en la rama asintótica gigante (AGB), proporcionan flujos de neutrones y mezclan parte del material procesado hacia su superficie.

### El test del tecnecio

Merrill identificó en 1952 líneas atribuidas a tecnecio en estrellas de clase S. El argumento es temporal:

1. no existen isótopos estables de tecnecio;
2. sus isótopos astrofísicamente relevantes no sobreviven toda la edad de una estrella vieja;
3. las líneas están en la atmósfera observable;
4. por tanto, el material tuvo que producirse recientemente y llegar a la superficie.

La línea no revela por sí sola cuál isótopo domina ni cada detalle del pulso térmico. La conclusión fuerte es más delimitada: algunas estrellas producen y mezclan núcleos de captura neutrónica durante su vida.

### Granos presolares

Meteoritos primitivos contienen granos de carburo de silicio y otras fases cuya composición isotópica es demasiado anómala para ser material solar homogeneizado. Bernatowicz et al. identificaron SiC interestelar en el meteorito Murray. Estudios posteriores miden C, N, Si, Mo y otros sistemas en granos individuales mediante SIMS/NanoSIMS y técnicas de resonancia/ionización.

Liu et al. compararon Mo en 37 granos SiC de tipos Y y Z con cálculos AGB. La comparación restringe temperaturas y masas progenitoras, pero no es una etiqueta automática: depende de modelos de pulsos térmicos, tasas nucleares, mezcla y condensación del polvo.

## 7. Explosiones y decaimientos: la prueba de SN 1987A

Las supernovas alteran y expulsan material. En SN 1987A, el espectrómetro gamma de Solar Maximum Mission registró una línea neta significativa cerca de `847 keV`, atribuida al decaimiento de `56Co` hacia `56Fe`. La detección mostró núcleos radiactivos en los escombros y su aparición temprana obligó a revisar la mezcla y transparencia de modelos demasiado simples.

La cadena es:

```text
energía de línea gamma
  → transición nuclear conocida
  → presencia de 56Co en el material eyectado
  → producción previa de 56Ni/56Co en la explosión
```

Esto prueba nucleosíntesis radiactiva fresca en esa supernova. No prueba que todas las supernovas tengan el mismo rendimiento ni que todo núcleo más pesado que hierro proceda de supernovas.

Las abundancias de estrellas extremadamente pobres en hierro conservan otro archivo. Keller et al. midieron un patrón con carbono y magnesio pero un límite extremadamente bajo de hierro en SMSS J031300.36−670839.3; un modelo de supernova temprana de baja energía reproduce parte del patrón. La abundancia se observa; el progenitor singular es una inferencia comparativa.

## 8. Captura rápida: GW170817 y el proceso r

El proceso `r` requiere capturas de neutrones más rápidas que muchos decaimientos beta. Antes de 2017 había sitios plausibles, pero asignar el presupuesto galáctico era una disputa abierta.

El 17 de agosto de 2017, LIGO/Virgo detectaron GW170817 y observatorios de todo el mundo siguieron una contraparte electromagnética. La curva de luz y el cambio de color fueron compatibles con una kilonova alimentada por decaimientos de material recién sintetizado. Modelos de transferencia radiativa infirieron componentes de eyección con opacidades distintas. En 2019, Watson et al. identificaron estroncio en una reanálisis espectral.

La evidencia permite afirmar con confianza que **las fusiones de estrellas de neutrones son al menos un sitio de producción de material de captura neutrónica**. No basta para afirmar que:

- cada fusión produce el mismo patrón;
- todo oro, platino o uranio del universo nació en fusiones;
- el estroncio detectado fija por sí solo la masa de todos los lantánidos;
- supernovas raras u otros ambientes no contribuyen al proceso `r`.

Las fracciones dependen de tasas de eventos, tiempos de demora, masa eyectada, opacidades, datos atómicos de iones pesados y evolución química de galaxias.

## 9. Litio, berilio y boro: cuando romper también construye

Li, Be y B son relativamente frágiles en interiores estelares y no encajan en una narración de “fusionar cada vez más”. Reeves, Fowler y Hoyle estudiaron cómo partículas de rayos cósmicos de alta energía, al chocar con C, N, O y otros núcleos del medio interestelar, pueden fragmentarlos y producir núcleos ligeros: **espalación**.

La contribución se prueba combinando física de colisiones, composición de rayos cósmicos, abundancias solares/estelares y evolución galáctica. El trabajo de 1970 estableció una vía cuantitativa, pero las proporciones exactas —y la contribución primordial o estelar al litio— siguen requiriendo modelos posteriores.

## 10. Matriz de contribuciones, no mapa de propiedad

![Matriz de procesos de nucleosíntesis](../assets/visuales/matriz-origen-elementos.svg)

La matriz resume dónde hay contribuciones importantes sin prometer exclusividad. Las categorías “C–O”, “grupo Fe” o “captura lenta” representan familias de isótopos, no fronteras perfectas entre casillas.

| Proceso/sitio | Producto característico | Evidencia ancla | Dependencia principal |
|---|---|---|---|
| BBN | H, He; trazas de D, `3He`, `7Li` | D/H primordial + tasas nucleares + CMB | cosmología y red nuclear |
| secuencia principal | He a partir de H | neutrinos solares | fondos, oscilaciones y modelo solar |
| quema estelar avanzada | C, O y grupo Fe/Ni | abundancias + física nuclear + evolución estelar | tasas, convección y masa del progenitor |
| AGB / proceso `s` | parte de núcleos mayores que Fe | Tc estelar + granos SiC | mezcla, pulsos y capturas |
| supernovas | núcleos explosivos y radiactivos | `56Co` en SN 1987A | geometría, mezcla y rendimiento |
| fusiones compactas / proceso `r` | material rico en neutrones | GW170817 + kilonova + Sr | opacidades, eyección y tasas |
| rayos cósmicos | parte de Li, Be, B | colisiones + abundancias | historia de rayos cósmicos y gas |

## 11. ¿Cuán independientes son las pruebas?

| Comparación | Muestra | Instrumento | Física compartida | Dependencia de modelo | Independencia útil |
|---|---|---|---|---|---|
| espectro estelar vs neutrinos solares | fotones / neutrinos | espectrógrafo / centelleador | nuclear y atómica | atmósfera / Sol + oscilaciones | alta en detector; media en teoría |
| Tc estelar vs SiC presolar | atmósfera remota / sólido local | óptico / espectrometría de masas | proceso `s` | evolución AGB | alta en archivo; media en interpretación |
| SN 1987A vs GW170817 | supernova / fusión binaria | gamma / GW + óptico-IR | decaimiento y transferencia | eyección y opacidad | alta en evento y mensajero |
| BBN vs estrellas | gas primordial / objetos tardíos | absorción / varios | red nuclear | cosmología / evolución estelar | alta en época; comparten datos nucleares |

No se cuentan “cinco pruebas” como votos iguales. Se rastrea qué cambia entre ellas: objeto, detector, calibración, principio y modelo.

## 12. Cadena causal completa

```text
líneas de laboratorio
  → identificación de átomos/iones
  → abundancias atmosféricas condicionadas

reacciones nucleares medidas
  + condiciones astrofísicas modeladas
  → rendimientos isotópicos predichos

neutrinos / gamma / kilonova / Tc / granos
  → pruebas de procesos y sitios concretos

poblaciones estelares + tasas de eventos + mezcla galáctica
  → contribución histórica al inventario solar
```

El tramo final es el menos directo. Saber que un sitio **puede y efectivamente produce** un núcleo no determina todavía cuánto aportó a la Vía Láctea o al material del que surgió la Tierra.

## LO OBSERVADO

- patrones de líneas en llamas, lámparas, plasmas, Sol, estrellas y transitorios;
- eventos en detectores compatibles con neutrinos solares;
- líneas de tecnecio en estrellas S;
- una línea gamma cerca de `847 keV` en SN 1987A;
- ondas gravitacionales y contraparte óptica/IR de GW170817;
- rasgos espectrales atribuidos a estroncio en su kilonova;
- granos microscópicos de SiC con razones isotópicas no solares;
- variaciones de abundancia entre estrellas y gas de distinta metalicidad.

Estas son señales y objetos presentes. “Proceso `s`”, “quema de silicio” o “rendimiento galáctico” son interpretaciones posteriores.

## LO MEDIDO

- longitudes de onda, intensidades, perfiles y probabilidades de transición;
- conteos, energía y tiempo de interacciones neutrínicas;
- flujo y energía de fotones gamma;
- curvas de luz, colores, espectros y velocidades de eyección;
- deformación interferométrica en detectores de ondas gravitacionales;
- razones isotópicas mediante SIMS/NanoSIMS y espectrometría de masas;
- secciones eficaces y tasas de reacciones nucleares en aceleradores;
- abundancias con incertidumbres estadísticas, de calibración y de modelo atmosférico.

## LO INFERIDO

- que la composición mayoritaria primordial fue H/He;
- que el Sol fusiona H y ejecuta al menos en parte el ciclo CNO;
- que estrellas evolucionadas producen material por captura lenta y lo llevan a la superficie;
- que SN 1987A contenía material `56Ni→56Co→56Fe` recién sintetizado;
- que la fusión GW170817 produjo material de captura neutrónica, incluido Sr;
- que algunos granos meteoríticos condensaron alrededor de estrellas anteriores al Sol;
- que el inventario solar es el resultado acumulado de varias generaciones y sitios.

## LOS SUPUESTOS

- las leyes atómicas y nucleares medidas localmente se aplican en los ambientes modelados;
- las líneas no están mal identificadas ni dominadas por mezclas no resueltas;
- los modelos de atmósfera convierten de manera adecuada intensidad en abundancia;
- la red nuclear contiene las reacciones relevantes y sus tasas;
- transporte, convección, rotación, explosión y eyección se aproximan con fidelidad suficiente;
- los granos no fueron alterados hasta borrar su señal primaria;
- las tasas de eventos observadas pueden conectarse con la historia de la galaxia.

## LAS INCERTIDUMBRES

| Fuente | Etiqueta | Efecto |
|---|---|---|
| datos atómicos y mezcla de líneas | `[CAL:2] [MODEL:2]` | cambia abundancia espectroscópica e identificación |
| temperatura/ionización/3D/no-LTE | `[MODEL:3]` | correlaciona muchas abundancias de una estrella |
| secciones eficaces inaccesibles directamente | `[CONST:2] [MODEL:3]` | altera rendimientos BBN y estelares |
| convección, rotación y transporte | `[MODEL:3]` | cambia qué material llega a superficie o eyección |
| geometría de explosión y masa eyectada | `[MODEL:3] [SEL:2]` | cambia rendimiento inferido por evento |
| opacidades de iones pesados | `[CAL:3] [MODEL:3]` | afecta lectura de kilonovas |
| representatividad de eventos y granos | `[SEL:3]` | limita generalización galáctica |
| significado de “origen de un elemento” | `[SEM:3]` | puede confundir isótopo, síntesis, eyección e incorporación |
| dependencias entre modelos | `[CORR:3]` | evita tratar resultados como votos independientes |

## LAS ALTERNATIVAS

### Alternativa fuerte A — Las líneas identifican elementos, pero las abundancias están sesgadas

Es posible aceptar la identidad de una línea y disputar la cantidad inferida por temperatura, ionización, 3D, no-LTE o datos atómicos. Se prueba con múltiples líneas, estados de ionización, estrellas patrón, espectros de distinta resolución y modelos atmosféricos alternativos.

### Alternativa fuerte B — Un sitio produce material, pero no domina el presupuesto galáctico

GW170817 prueba capacidad y producción real, no dominancia universal. Una fuente rara de alto rendimiento puede competir con una fuente frecuente de bajo rendimiento. Se discrimina con tasas, tiempos de demora, abundancias en estrellas antiguas y evolución química de galaxias.

### Alternativa fuerte C — El patrón de un grano admite más de un progenitor

Mezcla, condensación, contaminación o incertidumbres de tasas pueden hacer que varios modelos estelares reproduzcan el mismo vector isotópico. Se requieren muchos isótopos del mismo grano y predicciones fuera del conjunto ajustado.

### Alternativa rechazada — Todos los elementos pesados se formaron en una única clase de evento

No reproduce simultáneamente Tc en estrellas vivas, la diversidad de granos, la nucleosíntesis radiactiva de supernovas, las kilonovas y la evolución de abundancias. Puede sobrevivir solo como afirmación limitada a determinados isótopos y condiciones.

## LAS CONTROVERSIAS

- `CONT-ELEMENT-RPROCESS-001`: fracciones relativas del proceso `r` entre fusiones de estrellas de neutrones y otras fuentes raras;
- `CONT-ELEMENT-LITHIUM-001`: discrepancia entre `7Li` primordial calculado y observado;
- `CONT-ELEMENT-SOLAR-ABUNDANCE-001`: composición solar, opacidades y modelos del interior;
- `CONT-ELEMENT-YIELDS-001`: rendimientos por masa, metalicidad, rotación, binariedad y geometría de explosión.

Ninguna de estas controversias devuelve el campo a “no sabemos si las estrellas fabrican núcleos”. Disputan cantidades, canales y condiciones.

## QUÉ PODRÍA FALSARLO

- demostrar que las supuestas líneas de Tc, `56Co` o Sr son identificaciones incompatibles con otros rasgos y condiciones del mismo espectro;
- encontrar una fuente local o instrumental capaz de reproducir los neutrinos solares con dirección, energía y variación observadas;
- medir tasas nucleares que vuelvan imposible la concordancia BBN entre D/H y densidad bariónica sin una alternativa cuantitativa;
- mostrar que los granos presolares son productos solares alterados y que sus anomalías multielementales proceden de contaminación;
- desarrollar un único modelo no nucleosintético que reproduzca energía estelar, neutrinos, abundancias, decaimientos gamma y patrones isotópicos;
- para una claim de dominancia, observar tasas y rendimientos integrados incompatibles con el presupuesto requerido.

El último punto importa: una observación puede falsar “fuente dominante” sin falsar “fuente real”.

## NIVEL DE CONFIANZA

| Afirmación | Confianza | Motivo delimitado |
|---|---|---|
| espectros identifican átomos/iones bajo física cuántica | A | reproducción terrestre y múltiples transiciones |
| BBN produjo principalmente H/He y trazas ligeras | B-COND | concordancia D/H–tasas–CMB; depende del modelo térmico y Li sigue abierto |
| el Sol ejecuta fusión H→He | A | energía, heliosismología y neutrinos; neutrinos prueban reacciones internas |
| estrellas construyen C/O y grupo Fe mediante redes avanzadas | B | teoría nuclear, poblaciones y múltiples productos; rendimientos exactos son modelados |
| AGB produce material `s` | A para producción; B para rendimientos | Tc y granos cambian archivo y detector |
| SN 1987A produjo material radiactivo fresco | A | líneas gamma de decaimiento |
| fusiones de estrellas de neutrones producen material de captura neutrónica | A para existencia; C para fracción total | GW170817 + kilonova + Sr; una muestra no fija presupuesto universal |
| rayos cósmicos contribuyen a LiBeB | B | colisiones y evolución de abundancias; fracciones dependen del modelo |
| cada elemento tiene un único sitio de origen | E / formulación falsa | mezcla de isótopos y procesos contradice exclusividad |

## QUÉ SABEMOS REALMENTE

Sabemos que los núcleos no aparecieron todos juntos ni por un único mecanismo. El universo temprano dejó sobre todo H y He. Las estrellas convierten H en He y, según su masa y etapa, fabrican y redistribuyen otros núcleos. Capturas de neutrones en estrellas evolucionadas, explosiones, fusiones compactas y colisiones de rayos cósmicos añaden rutas diferentes. Varias de estas afirmaciones están ancladas en mensajeros directos: neutrinos, líneas gamma, espectros transitorios y materia presolar.

También sabemos qué no autoriza la evidencia. Un color asignado a una casilla de la tabla periódica no es una procedencia exclusiva; una kilonova no fecha el oro terrestre; una abundancia estelar no identifica sin modelo a un progenitor; una predicción histórica correcta no reemplaza su validación moderna.

## QUÉ TODAVÍA NO SABEMOS

- qué fracción de cada isótopo del proceso `r` procede de fusiones, supernovas raras u otros canales;
- cómo resolver de forma convincente el problema cosmológico del litio;
- los rendimientos de estrellas para todas las combinaciones de masa, metalicidad, rotación y binariedad;
- la física completa de explosión y mezcla de supernovas de colapso;
- opacidades atómicas precisas para muchos iones pesados de kilonovas;
- la historia exacta de rayos cósmicos y mezcla galáctica que produjo LiBeB;
- qué evento concreto aportó cada núcleo que hoy integra la Tierra o un organismo;
- cuánto sesgo introduce la pequeña fracción de granos y eventos que podemos medir.

Las preguntas abiertas quedan registradas como `OPEN-ELEMENT-RPROCESS-001`, `OPEN-ELEMENT-LITHIUM-001` y `OPEN-ELEMENT-YIELDS-001`.

## Navegación

- historia del descubrimiento: [`../18_historia_ciencia/HISTORIA_003_ORIGEN_ELEMENTOS.md`](../18_historia_ciencia/HISTORIA_003_ORIGEN_ELEMENTOS.md);
- grafo de dependencias: [`../22_mapas_epistemologicos/MAPA_003_ORIGEN_ELEMENTOS.md`](../22_mapas_epistemologicos/MAPA_003_ORIGEN_ELEMENTOS.md);
- claims: [`../CLAIMS.md`](../CLAIMS.md);
- evidencia: [`../EVIDENCE_LEDGER.md`](../EVIDENCE_LEDGER.md);
- fuentes: [`../SOURCES.md`](../SOURCES.md);
- controversias: [`../CONTROVERSIES.md`](../CONTROVERSIES.md).

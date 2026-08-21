---
id: INV-SAPIENS-ORIGIN-001
titulo: >-
  ¿Cómo sabemos que Homo sapiens surgió en África: una región única o
  poblaciones estructuradas?
estado: AUDITADO
ultima_revision: '2026-08-13'
version: 0.1.41
claims:
  - CLAIM-SAPIENS-ORIGIN-SCOPE-001
  - CLAIM-COALESCENCE-SPLIT-LIMIT-001
  - CLAIM-SAPIENS-AFRICAN-ORIGIN-001
  - CLAIM-SAPIENS-MOSAIC-001
  - CLAIM-SAPIENS-SINGLE-CRADLE-LIMIT-001
  - CLAIM-AFRICA-FOSSIL-DISTRIBUTION-001
  - CLAIM-SAPIENS-WEAK-STEM-2023-001
  - CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001
  - CLAIM-SAPIENS-DEMOGRAPHIC-IDENTIFIABILITY-001
  - CLAIM-PAN-AFRICAN-NOT-PANMIXIA-001
  - CLAIM-SAPIENS-ORIGIN-CONFIDENCE-001
  - CLAIM-SAPIENS-SAMPLING-BIAS-001
  - CLAIM-JEBEL-IRHOUD-TAXON-001
  - CLAIM-JEBEL-IRHOUD-DATE-001
  - CLAIM-OMO-I-MINIMUM-AGE-001
  - CLAIM-HERTO-CONTEXT-001
  - CLAIM-FLORISBAD-AGE-001
  - CLAIM-SAPIENS-WEAK-STEM-GEOGRAPHY-LIMIT-001
  - CLAIM-SAPIENS-ARCHAIC-GHOST-OPEN-001
  - CLAIM-SOUTH-AFRICA-DIVERGENCE-2017-001
  - CLAIM-SOUTH-AFRICA-GENOMES-2026-001
  - CLAIM-AFRICAN-ADNA-TIME-LIMIT-001
  - CLAIM-MTDNA-EVE-LIMIT-001
  - CLAIM-OLORGESAILIE-NETWORKS-001
  - CLAIM-OLORGESAILIE-GENEFLOW-LIMIT-001
  - CLAIM-AMANZI-REGIONAL-2026-001
  - CLAIM-MSA-NOT-TAXONOMIC-001
  - CLAIM-SAPIENS-BEHAVIOR-MOSAIC-001
fuentes:
  - SRC-HUBLIN-2017
  - SRC-RICHTER-JEBEL-2017
  - SRC-VIDAL-OMO-2022
  - SRC-WHITE-HERTO-2003
  - SRC-GRUN-FLORISBAD-1996
  - SRC-MOUNIER-AFRICA-2019
  - SRC-RAGSDALE-AFRICA-2023
  - SRC-COUSINS-STRUCTURE-2025
  - SRC-SCHLEBUSCH-AFRICA-2017
  - SRC-JAKOBSSON-SOUTH-AFRICA-2026
  - SRC-LIPSON-AFRICA-2022
  - SRC-DURVASULA-GHOST-2020
  - SRC-INGMAN-MTDNA-2000
  - SRC-MALLICK-SGDP-2016
  - SRC-BROOKS-OLORGESAILIE-2018
  - SRC-POTTS-OLORGESAILIE-2018
  - SRC-BLACKWOOD-AMANZI-2026
  - SRC-SCERRI-STRUCTURED-2018
  - SRC-CANN-MTDNA-1987
  - SRC-KUHLWILM-EARLY-FLOW-2016
  - SRC-LI-RECURRENT-FLOW-2024
---
# Investigación 042 — ¿Cómo sabemos que *Homo sapiens* surgió en África: una región única o poblaciones estructuradas?

| Campo | Valor |
|---|---|
| ID | `INV-SAPIENS-ORIGIN-001` |
| Estado | `AUDITADO` |
| Dominio | evolución humana / Pleistoceno medio y tardío |
| Versión | `0.1.41` |
| Alcance | origen africano del clado; fósiles, cronología, estructura demográfica y Middle Stone Age |

![Portada editorial de archivos fósiles, estratigráficos y genómicos africanos](../assets/visuales/hero-origen-africano-homo-sapiens.png)

La portada es una **reconstrucción editorial generada**, no una fotografía de un conjunto real. Tres bandejas no geográficas separan fósil, estrato, arqueología y genoma; hilos que se dividen y vuelven a unirse representan modelos de estructura y flujo. No reproduce especímenes, rostros, fronteras, una «cuna» puntual ni una genealogía observada.

## Pregunta y definiciones

La pregunta contiene dos problemas distintos. El primero es **dónde se formó el clado que reconocemos como *Homo sapiens***. El segundo es **qué organización demográfica dejó los patrones genómicos actuales**. Un fósil puede apoyar el primero sin observar el segundo; un modelo coalescente puede informar el segundo sin asignar coordenadas a una población ancestral.

- **Origen africano:** conclusión de que la rama ancestral de las poblaciones humanas actuales y los fósiles tempranos atribuidos a *H. sapiens* se encuentra en África. No identifica por sí sola una localidad fundadora.
- **Región única:** modelo en el que una población localizada concentra la transición y después se expande. Debe predecir un gradiente, una cronología y rasgos derivados que puedan distinguirse del sesgo de muestreo.
- **Población estructurada:** conjunto de grupos con apareamiento más frecuente dentro que entre grupos y con algún flujo génico. No exige especies separadas, aislamiento total ni divisiones permanentes.
- **Metapoblación:** poblaciones locales conectadas de forma cambiante por dispersión, extinción local, recolonización y mezcla.
- **Panmixia:** apareamiento aleatorio en una sola población ideal. «Pan-africano» no significa panmixia continental.
- **Coalescencia:** reconstrucción estadística del tiempo hacia atrás en que copias de un locus comparten ancestro. No equivale automáticamente a una separación de poblaciones ni al origen de una especie.
- **Población fantasma:** componente inferido porque mejora un modelo genómico aunque no exista un genoma antiguo de referencia que la represente.
- **Morfología mosaico:** combinación de rasgos comparativamente derivados y retenidos en un mismo individuo o conjunto; no es un peldaño a medio terminar.
- **Middle Stone Age (MSA):** categoría tecnológica arqueológica africana. No es un marcador biológico exclusivo de *H. sapiens*.

El error rector es convertir cuatro escalas en una sola:

```text
primer fósil conocido ≠ primer individuo de la especie
coalescencia de un locus ≠ separación poblacional
separación poblacional ≠ especiación
procedencia de una muestra ≠ coordenada del origen
```

Esta separación define el alcance de la investigación (`CLAIM-SAPIENS-ORIGIN-SCOPE-001`, `CLAIM-COALESCENCE-SPLIT-LIMIT-001`).

## Respuesta breve provisional

La evidencia más sólida favorece un **origen africano de *Homo sapiens***. Fósiles de aproximadamente `315–233 ka` atribuidos al clado se distribuyen entre el norte y el este de África, mientras Florisbad aporta un expediente meridional cercano a `259 ± 35 ka` cuya asignación taxonómica es más discutida. Jebel Irhoud combina cara, mandíbula y dientes cercanos al rango sapiens con un neurocráneo alargado; Omo I conserva rasgos más derivados y tiene una edad mínima de `233 ± 22 ka`; Herto documenta otra población hacia `160–154 ka`. El patrón es cronológica y anatómicamente mosaico, no una aparición instantánea de un paquete moderno (`CLAIM-SAPIENS-AFRICAN-ORIGIN-001`, `CLAIM-SAPIENS-MOSAIC-001`).

Estos expedientes no demuestran una «cuna» única. Sus edades tienen solapamientos amplios, la cobertura de África central y occidental es pobre, y cada yacimiento muestrea un momento local. Tampoco demuestran por sí solos una red continental: varios puntos en un mapa pueden ser poblaciones aisladas, conectadas o separadas por milenios (`CLAIM-SAPIENS-SINGLE-CRADLE-LIMIT-001`, `CLAIM-AFRICA-FOSSIL-DISTRIBUTION-001`).

La genómica hace plausible la estructura. Un modelo de 2023 ajustó estadísticas de ligamiento y diversidad con dos o más tallos débilmente diferenciados conectados por flujo durante cientos de milenios. Otro modelo de 2025, `cobraa`, favoreció una separación mucho más profunda, alrededor de `1.5 Ma`, seguida por una contribución cercana a `20 %` alrededor de `300 ka`. Un tercer marco atribuye parte de la señal a introgresión de una población arcaica fantasma. Estas historias no son equivalentes y dependen del espacio de modelos, tasas, muestreo y supuestos. La conclusión robusta no es «dos poblaciones exactas», sino que una población ancestral panmíctica y puntual resulta insuficiente para resumir toda la diversidad (`CLAIM-SAPIENS-WEAK-STEM-2023-001`, `CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001`, `CLAIM-SAPIENS-DEMOGRAPHIC-IDENTIFIABILITY-001`).

Por ello, el resultado mejor sustentado es: **origen africano, proceso reticulado y geografía todavía subdeterminada**. «Poblaciones estructuradas» es hoy un marco más informativo que «una sola cuna», pero no localiza los tallos ni prueba que cada fósil represente uno (`CLAIM-PAN-AFRICAN-NOT-PANMIXIA-001`, `CLAIM-SAPIENS-ORIGIN-CONFIDENCE-001`).

## Objetos observables hoy

| Archivo | Qué observamos | Resolución | Qué no entrega por sí solo |
|---|---|---|---|
| Jebel Irhoud, Marruecos | cráneos parciales, caras, mandíbulas, dientes, fauna y sílex calentado | anatomía de varios individuos y contexto local | fecha directa de cada hueso o población fundadora |
| Omo Kibish, Etiopía | Omo I, Omo II, estratos y tobas | morfología y edad mínima estratigráfica | edad exacta de muerte o taxonomía de toda la cuenca |
| Herto, Etiopía | cráneos y restos en unidad Bouri | población local y posición estratigráfica | «ancestro inmediato» observado |
| Florisbad, Sudáfrica | cráneo parcial y diente asociado históricamente | edad ESR modelada y morfología regional | asociación perfecta del diente o nombre taxonómico estable |
| fósiles africanos `~350–130 ka` | muestras discontinuas de norte, este y sur | diversidad comparativa | censo continental o conexión genética |
| sílex calentado | electrones atrapados liberados por calor | tiempo desde calentamiento | muerte del individuo sin asociación |
| toba KHS sobre Omo I | firma geoquímica y edad eruptiva correlacionada | edad mínima del fósil subyacente | edad puntual del fósil |
| genomas actuales africanos | variantes, ligamiento, coalescencias y diversidad | modelos demográficos profundos | coordenadas de tallos o cuerpos de `300 ka` |
| ADN antiguo africano | individuos holocenos y terminales del Pleistoceno | estructura anterior a migraciones recientes | genomas directos del origen del clado |
| mtDNA | genealogía materna de un locus | ancestro común de linajes mitocondriales | única mujer viva, especie completa o población fundadora |
| MSA de Olorgesailie | núcleos preparados, puntas, pigmento y obsidiana distante | conducta técnica y aprovisionamiento | fabricante taxonómico o flujo génico |
| secuencia de Amanzi Springs | conjuntos achelenses y MSA en capas `~379–95 ka` | trayectoria tecnológica regional | reloj universal de «modernidad» |

La preservación es desigual. Regiones húmedas destruyen ADN y hueso; desiertos, cuevas y cuencas excavadas quedan sobrerrepresentados. La ausencia central u occidental no es ausencia de población (`CLAIM-SAPIENS-SAMPLING-BIAS-001`).

## Procedencia y contexto fósil

### Jebel Irhoud: contexto calentado, no cuerpo fechado por TL

El conjunto incluye por lo menos cinco individuos y material recuperado en excavaciones antiguas y modernas. Hublin y colaboradores describieron una cara, mandíbula y dentición alineadas con *H. sapiens* temprano, junto con una bóveda y forma endocraneal comparativamente más alargadas. La combinación apoya una fase temprana del clado; no una anatomía idéntica a la de poblaciones recientes (`CLAIM-JEBEL-IRHOUD-TAXON-001`).

Richter y colaboradores aplicaron termoluminiscencia a piezas de sílex calentadas de la unidad fosilífera y obtuvieron `315 ± 34 ka`. Una edad US-ESR recalculada para un diente dio `286 ± 32 ka`. La TL fecha el último calentamiento del sílex; la edad del hominino depende de la asociación estratigráfica. La convergencia sostiene el episodio local, pero no convierte `315 ka` en fecha exacta de cada individuo (`CLAIM-JEBEL-IRHOUD-DATE-001`).

### Omo I: una toba superior produce un mínimo

Omo I procede de la Formación Kibish, debajo de la KHS Tuff. Vidal y colaboradores correlacionaron geoquímicamente esa toba con una erupción de Shala fechada en `233 ± 22 ka`. Por estar encima del fósil, la erupción establece una **edad mínima**: Omo I es al menos tan antiguo, y puede ser anterior. La correlación no fecha la muerte directamente (`CLAIM-OMO-I-MINIMUM-AGE-001`).

Su combinación de bóveda alta y región mentoniana comparativamente derivada contrasta con el mosaico de Irhoud. La diferencia no exige poblaciones incomunicadas: anatomía, sexo, edad, variación y tiempo contribuyen al contraste.

### Herto: población posterior, interpretación revisable

Los restos de Herto fueron publicados dentro de un intervalo aproximado de `160–154 ka`. La descripción original propuso *H. sapiens idaltu* y una posición intermedia. El dato primario es el conjunto anatómico y su contexto; «subespecie» y «ancestro inmediato» son hipótesis históricas, no mediciones. Herto amplía la variación conocida sin completar una secuencia lineal entre Irhoud y humanos recientes (`CLAIM-HERTO-CONTEXT-001`).

### Florisbad: fecha importante, asociación y nombre más frágiles

Grün y colaboradores obtuvieron `259 ± 35 ka` por ESR de un diente atribuido al individuo de Florisbad. El cálculo requirió una dosis ambiental modelada en un depósito de manantial complejo; la asociación histórica entre diente y cráneo y la historia de incorporación de uranio limitan la precisión. El cráneo ha recibido asignaciones distintas, desde *H. helmei* hasta *H. sapiens* arcaico. Por eso la edad es evidencia meridional relevante, no un ancla taxonómica equivalente a Irhoud u Omo (`CLAIM-FLORISBAD-AGE-001`).

### Distribución no es red observada

Morfometría de fósiles africanos del Pleistoceno medio tardío recupera diversidad regional y permite modelar un último ancestro virtual. El resultado confirma que no existe un único «tipo intermedio» homogéneo. Sin embargo, un ancestro virtual es una predicción estadística, no un fósil, y una distribución norte–este–sur no mide migración entre sitios (`CLAIM-AFRICA-FOSSIL-DISTRIBUTION-001`, `CLAIM-SAPIENS-MOSAIC-001`).

## Mediciones e instrumentos

| Instrumento o análisis | Señal | Transformación | Dependencia crítica |
|---|---|---|---|
| micro-CT y morfometría 3D | superficies y estructura interna | forma, tamaño y afinidad | comparadores, deformación, alometría |
| TL | carga atrapada en sílex calentado | tiempo desde último calentamiento | dosis, calentamiento y asociación |
| US-ESR | centros paramagnéticos + historia de U | edad modelada de esmalte | ingreso de U y dosis ambiental |
| `40Ar/39Ar` | desintegración K→Ar en mineral volcánico | edad de erupción | cristal heredado y calibración |
| huella geoquímica de tefra | elementos mayores/traza | correlación entre depósitos | unicidad de la firma y retrabajo |
| estadísticos de diversidad | frecuencias y heterocigosidad | historia demográfica compatible | muestreo, selección y referencia |
| desequilibrio de ligamiento | asociación de variantes | tamaño, separación y flujo bajo modelo | recombinación y estructura omitida |
| SMC/HMM coalescente | heterocigosidad y tramos contiguos | tiempos de coalescencia/modelo | mutación, recombinación y clase de modelo |
| `f`-statistics / mezclas | asimetrías de alelos | afinidad y flujo relativos | poblaciones proxy y grafo |
| mtDNA | variantes de un genoma haploide materno | árbol y TMRCA de locus | selección, deriva y tasa |
| procedencia de obsidiana | composición elemental | distancia a fuente geológica | catálogo de fuentes y movilidad indirecta |
| tecnología lítica | secuencia de reducción y forma | tradición/decisión técnica | convergencia y fabricante ausente |

El instrumento no decide la escala. Una edad de erupción puede ser mínima; una coalescencia pertenece a copias génicas; una distancia de obsidiana mide transporte, no apareamiento.

## Principios y métodos

1. **Localidad antes que continente:** cada fósil prueba presencia en una cuenca y un intervalo, no una población africana continua.
2. **Cuerpo antes que taxón:** describir los rasgos observados antes de convertirlos en nombre de especie.
3. **Fecha del material correcto:** distinguir fósil, sílex calentado, diente, tefra superior y depósito.
4. **Mosaico antes que paquete:** los rasgos sapiens no aparecen necesariamente juntos ni en el mismo orden.
5. **Locus antes que población:** mtDNA y cromosoma Y tienen genealogías propias.
6. **Modelo antes que cifra:** todo tiempo de divergencia depende de tasas, generaciones, muestreo y topología.
7. **Estructura no es especie:** grupos diferenciados pueden intercambiar genes.
8. **Flujo no es panmixia:** conectividad intermitente no homogeneiza toda África.
9. **Tecnología no es taxonomía:** MSA y pigmento informan conducta, no nombre del fabricante.
10. **Ausencia calibrada:** la falta de ADN de `300 ka` limita qué historias pueden distinguirse.
11. **Adversario explícito:** tamaño poblacional cambiante, estructura continua, pulso, introgresión arcaica y selección pueden generar señales solapadas.
12. **Geografía como inferencia:** una muestra moderna o holocena no hereda automáticamente la ubicación de un tallo antiguo.

## Cadenas de inferencia

### A. Del fósil al clado

```text
fragmento con procedencia
        ↓ anatomía + deformación
medidas y caracteres
        ↓ comparadores + alometría
mosaico reproducible
        ↓ definición taxonómica explícita
afinidad con H. sapiens
        ≠ primer individuo / ancestro directo
```

### B. Del sílex o la tefra a una edad

```text
sílex calentado ─TL──────────> último calentamiento
       │ asociación estratigráfica
       └────────────────────> episodio con fósiles

toba sobre fósil ─Ar/Ar─────> edad de erupción
       │ superposición
       └────────────────────> edad mínima del fósil
```

### C. De un genoma actual a estructura ancestral

```text
variantes + ligamiento
        ↓ tasa de mutación/recombinación
estadísticos observados
        ↓ modelos competidores
coalescencias y flujo compatibles
        ↓ pruebas predictivas
estructura favorecida bajo modelo
        ≠ población, fósil o coordenada observados
```

### D. De mtDNA a una genealogía, no a «Eva» poblacional

```text
mtDNA materno actual
        ↓ árbol + reloj
ancestro común de ese locus
        ↓ deriva diferencial
una línea que sobrevivió
        ≠ única mujer viva / origen de la especie
```

### E. De obsidiana a red social condicionada

```text
composición de artefacto
        ↓ catálogo geológico
fuente distante ≥25–50 km
        ↓ transporte directo o en cadena
movilidad/intercambio favorecidos
        ≠ flujo génico o identidad del fabricante
```

## Genómica: tres historias que compiten

### Tallo débilmente estructurado de 2023

Ragsdale y colaboradores analizaron estadísticas de desequilibrio de ligamiento y diversidad en poblaciones orientales, occidentales y 44 genomas Nama nuevos. Su mejor modelo contiene al menos dos poblaciones ancestrales débilmente diferenciadas conectadas por flujo durante cientos de miles de años. La divergencia más temprana entre poblaciones contemporáneas quedó en `120–135 ka`, y sólo `1–4 %` de su diferenciación se atribuyó a deriva entre tallos (`CLAIM-SAPIENS-WEAK-STEM-2023-001`).

El modelo explica señales antes atribuidas a introgresión arcaica, pero no localiza los tallos ni asigna fósiles. «Nama» describe el muestreo reciente; no prueba que un tallo ancestral residiera siempre en la misma región (`CLAIM-SAPIENS-WEAK-STEM-GEOGRAPHY-LIMIT-001`).

### Separación profunda y reunión en `cobraa`

Cousins y colaboradores construyeron un HMM coalescente que usa la dependencia entre tiempos de coalescencia vecinos. En un modelo de pulso, dos poblaciones se separan alrededor de `1.5 Ma` y vuelven a contribuir cerca de `300 ka`, con una mezcla aproximada `80:20`. La señal compartida por todos los humanos actuales no depende de identificar un donante arcaico conocido (`CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001`).

Sin embargo, `cobraa` obliga a una población menor de tamaño constante y a aislamiento seguido de un pulso. Los autores reconocen que flujo continuo, varios pulsos y selección pueden producir historias más complejas. Su cifra es un resultado condicionado, no el descubrimiento de dos especies ancestrales.

### Introgresión arcaica fantasma

Durvasula y Sankararaman ajustaron espectros de frecuencia y un detector sin genoma de referencia a cuatro poblaciones de África occidental. Bajo su modelo, `2–19 %` de la ancestría procedería de una población divergente; estimaciones centrales situaron el pulso cerca de `43 ka`, con intervalos muy amplios. El resultado aporta una alternativa real, pero el donante no está muestreado y estructura ancestral mal representada puede imitar introgresión (`CLAIM-SAPIENS-ARCHAIC-GHOST-OPEN-001`).

### Por qué no se elige una cifra única

Los tres modelos cambian el número de poblaciones, duración del aislamiento, continuidad del flujo y eventos permitidos. Un mejor ajuste dentro de una familia no prueba que esa familia contenga la historia real. La prueba fuerte será predictiva: datos no usados, genomas antiguos más próximos al Pleistoceno medio y fósiles con procedencia regional capaces de discriminar modelos (`CLAIM-SAPIENS-DEMOGRAPHIC-IDENTIFIABILITY-001`).

## ADN antiguo: mejora el muestreo, no alcanza el origen

Siete genomas antiguos de KwaZulu-Natal permitieron en 2017 estimar una divergencia entre linajes de poblaciones actuales de `350–260 ka`. Esa cifra coincidía con el registro fósil, pero provenía de individuos de hasta unos `2 ka`, combinados con genomas modernos y supuestos de tasa; no era ADN de `300 ka` (`CLAIM-SOUTH-AFRICA-DIVERGENCE-2017-001`).

En 2026, 28 genomas antiguos del sur de África, entre `10,200 y 150 cal BP`, mostraron continuidad prolongada y diversidad fuera del rango moderno para individuos anteriores a `1.4 ka`. Seis alcanzaron coberturas de `25×–7.2×`. El archivo reduce la distorsión de mezclas recientes, pero sigue siendo enteramente holoceno y no convierte continuidad de `9 ka` en aislamiento de `300 ka` (`CLAIM-SOUTH-AFRICA-GENOMES-2026-001`).

Otros genomas de forrajeros subsaharianos de hasta unos `18 ka` recuperan clinas y regionalización antiguas. Juntos prueban que las poblaciones actuales no son proxies transparentes del pasado. También revelan el límite: no existe todavía un genoma africano del intervalo en que aparecen Irhoud, Omo o Florisbad (`CLAIM-AFRICAN-ADNA-TIME-LIMIT-001`).

## La «Eva mitocondrial» no localiza una cuna

Los estudios de mtDNA fueron decisivos al recuperar raíces africanas y una genealogía materna reciente. Pero el mtDNA es un solo genoma haploide heredado por línea materna. Su ancestro común más reciente fue una persona entre muchas contemporáneas; las otras pueden contribuir al genoma nuclear aunque sus líneas mitocondriales se hayan extinguido. Cambiar el locus cambia la genealogía (`CLAIM-MTDNA-EVE-LIMIT-001`).

Por la misma razón, una TMRCA no es una fecha de especiación. El tiempo de separación de poblaciones puede ser más reciente o más antiguo que muchas coalescencias, y el flujo posterior desacopla ambas magnitudes (`CLAIM-COALESCENCE-SPLIT-LIMIT-001`).

## Arqueología: conducta sin certificado taxonómico

En Olorgesailie, conjuntos MSA de `≥295–~320 ka` contienen núcleos preparados y puntas; el pigmento rojo y materias primas de obsidiana transportadas desde por lo menos `25–50 km` apoyan movilidad o intercambio. Son cambios sociales y técnicos relevantes (`CLAIM-OLORGESAILIE-NETWORKS-001`).

No obstante, una roca puede viajar por movilidad individual, intercambio en cadena o desplazamiento de grupos. Ninguna opción mide apareamiento. Y sin fósiles diagnósticos asociados no puede nombrarse al fabricante. La arqueología corrobora un paisaje de poblaciones conectadas de manera posible, no la red genética exacta (`CLAIM-OLORGESAILIE-GENEFLOW-LIMIT-001`).

La secuencia de Amanzi Springs, publicada en 2026, abarca aproximadamente `379–95 ka` y sitúa la emergencia local de MSA cerca de `230 ± 18 ka`, distinta de trayectorias interiores más antiguas. Esta asincronía refuerza que MSA no es un reloj continental ni un rasgo exclusivo de especie (`CLAIM-AMANZI-REGIONAL-2026-001`, `CLAIM-MSA-NOT-TAXONOMIC-001`).

Pigmento, redes de materias primas, tecnologías y ocupación de ambientes aparecen en combinaciones y momentos diferentes. «Conducta moderna» como paquete tardío único sustituye observables por una etiqueta (`CLAIM-SAPIENS-BEHAVIOR-MOSAIC-001`).

## Cronología y sincronización

| Intervalo | Archivo | Resultado | Límite |
|---:|---|---|---|
| `~315 ± 34 ka` | sílex Jebel Irhoud | último calentamiento asociado a fósiles | no fecha directa de hueso |
| `286 ± 32 ka` | diente Irhoud | US-ESR recalculada | historia de U/modelo |
| `259 ± 35 ka` | diente Florisbad | edad ESR atribuida al expediente | asociación y dosis complejas |
| `≥233 ± 22 ka` | Omo I bajo KHS Tuff | mínimo estratigráfico | fósil puede ser anterior |
| `~230 ± 18 ka` | Amanzi Springs | emergencia MSA local | no inicio africano universal |
| `~160–154 ka` | Herto | población sapiens local | rango y taxonomía revisables |
| `120–135 ka` | modelo 2023 | divergencia más temprana entre poblaciones actuales | depende del modelo |
| `~1.5 Ma → ~300 ka` | `cobraa` 2025 | separación y pulso ancestrales | modelo profundo condicionado |
| `350–260 ka` | genomas sudafricanos 2017 | divergencia poblacional estimada | muestras de `~2 ka` |
| `10.2–0.15 ka` | 28 genomas del sur 2026 | diversidad/continuidad holocenas | no ADN del origen |
| `≥295–~320 ka` | Olorgesailie | MSA, pigmento y transporte distante | autor y flujo génico ausentes |

Las columnas no forman una única línea evolutiva. Una fecha fósil, una transición tecnológica, una coalescencia y una divergencia modelada son magnitudes diferentes.

## Corroboración e independencia

| Resultado | Rutas que convergen | Independencia real | Dependencia compartida |
|---|---|---|---|
| origen africano | fósiles, diversidad genómica, genealogías uniparentales | objetos y escalas distintos | definiciones taxonómicas/modelos |
| antigüedad Irhoud | TL de sílex + US-ESR dental + estratigrafía | materiales y relojes distintos | misma asociación local |
| mínimo Omo I | huella de tefra + Ar/Ar de Shala + superposición | geoquímica y reloj | una correlación eruptiva |
| mosaico fósil | Irhoud, Omo, Herto, Florisbad y morfometría | individuos y regiones | preservación/muestreo desigual |
| estructura ancestral | LD/diversidad, SMC vecino, espectro de frecuencia | estadísticas y algoritmos distintos | genomas actuales y tasas |
| cambio de paisaje genómico | 2017, 2022 y 2026 aDNA | cohortes y periodos diferentes | casi todo Holoceno/Pleistoceno final |
| redes MSA | tecnología, pigmento y procedencia de obsidiana | observables distintos | mismo paisaje arqueológico |

La independencia disminuye cuando varios análisis reutilizan las mismas poblaciones actuales, las mismas tasas o el mismo fósil. Coincidencia entre `~300 ka` fósil y una cifra genómica no convierte ambos relojes en una sola medición.

## Historia del conocimiento

La reconstrucción histórica completa está en [`HISTORIA_042_ORIGEN_AFRICANO_HOMO_SAPIENS.md`](../18_historia_ciencia/HISTORIA_042_ORIGEN_AFRICANO_HOMO_SAPIENS.md). La secuencia pasó de tipologías raciales y un foco euroasiático a genealogías africanas de mtDNA; después, nuevas fechas de Irhoud y Omo distribuyeron el registro, y los modelos genómicos recientes sustituyeron una población fundadora simple por estructuras reticuladas. Cada avance corrigió una equivalencia: cráneo tipo ≠ especie completa; mtDNA ≠ población; sitio más antiguo ≠ lugar de origen; mejor modelo ≠ historia observada.

## Regla del adversario

| Hipótesis | Evidencia favorable | Adversario | Predicción discriminatoria |
|---|---|---|---|
| región única | un centro con fósiles más antiguos y expansión posterior | sesgo de excavación/fechado | gradiente temporal y morfológico replicado |
| metapoblación conectada | fósiles distribuidos y tallos con flujo | localidades no contemporáneas | estructura débil repetida en ADN antiguo regional |
| tallo débil | ajuste de LD/diversidad y predicciones independientes | modelos fuera del conjunto | estadísticas nuevas favorecen flujo continuo |
| separación profunda + pulso | dependencia entre coalescencias vecinas | selección, tasas, flujo múltiple | genomas antiguos conservan señal `80:20` compartida |
| introgresión arcaica fantasma | tramos/frecuencias bajo detector sin referencia | estructura ancestral | fósil/genoma donante o patrón no explicable por estructura |
| paquete conductual sapiens | coincidencia de varias innovaciones | asincronía y convergencia | asociación repetida con cuerpos diagnósticos |

Ninguna hipótesis gana por llenar huecos. Debe predecir datos no usados y sobrevivir cambios razonables de muestreo, tasa y topología.

## Claims y evidencia

| Claim | Resultado | Evidencia principal | Confianza |
|---|---|---|---|
| `CLAIM-SAPIENS-AFRICAN-ORIGIN-001` | el origen del clado es africano | fósiles + diversidad/genómica | A-B |
| `CLAIM-SAPIENS-MOSAIC-001` | la anatomía temprana aparece en mosaico | Irhoud, Omo, Herto, morfometría | B |
| `CLAIM-JEBEL-IRHOUD-DATE-001` | episodio local `~315 ka` | TL + US-ESR + estratigrafía | B-COND |
| `CLAIM-OMO-I-MINIMUM-AGE-001` | Omo I es ≥`233 ± 22 ka` | correlación KHS–Shala | B-COND |
| `CLAIM-FLORISBAD-AGE-001` | expediente cercano a `259 ± 35 ka` | ESR dental modelada | C |
| `CLAIM-SAPIENS-WEAK-STEM-2023-001` | tallos débiles con flujo ajustan datos | LD/diversidad/modelo | B-COND |
| `CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001` | pulso profundo mejora ajuste en `cobraa` | SMC/HMM | C |
| `CLAIM-SAPIENS-ARCHAIC-GHOST-OPEN-001` | introgresión fantasma es alternativa | espectros + detector | C |
| `CLAIM-AFRICAN-ADNA-TIME-LIMIT-001` | falta ADN del intervalo de origen | archivo antiguo disponible | A |
| `CLAIM-MTDNA-EVE-LIMIT-001` | TMRCA mitocondrial no es cuna/especie | herencia + coalescencia | A-SEM |
| `CLAIM-MSA-NOT-TAXONOMIC-001` | MSA no identifica fabricante | asociaciones regionales | A-SEM |
| `CLAIM-SAPIENS-ORIGIN-CONFIDENCE-001` | África A-B; geografía fina C; modelo exacto C-D | síntesis adversarial | A-SEM |

Las filas completas y sus dependencias están en [`CLAIMS.md`](../CLAIMS.md) y [`EVIDENCE_LEDGER.md`](../EVIDENCE_LEDGER.md).

## Preguntas abiertas y falsadores

- ¿Aparecerán fósiles comparables y bien fechados en África central y occidental?
- ¿Se conserva proteína, sedimento molecular o ADN auténtico más allá del Pleistoceno final africano?
- ¿Qué modelo predice mejor estadísticas no usadas y genomas antiguos regionales?
- ¿Los rasgos de Irhoud, Omo, Herto y Florisbad forman continuidad con flujo o ramas parcialmente aisladas?
- ¿La señal «fantasma» se mantiene cuando los modelos permiten estructura continua y tasas heterogéneas?
- ¿Las transiciones MSA conservan autores fósiles diagnósticos o atraviesan varios taxones?

Falsarían o revisarían el marco:

- fósiles africanos con procedencia y fecha que formen un gradiente inequívoco desde una sola región;
- un genoma de `~300 ka` que apoye panmixia o una topología incompatible con tallos conectados;
- simulaciones que reproduzcan las señales actuales sin estructura bajo selección/tamaño realistas;
- un genoma donante que convierta la «población fantasma» en una rama identificable;
- asociaciones repetidas entre cuerpos diagnósticos y tecnologías que vuelvan MSA taxonómicamente exclusiva;
- refechados que desasocien los principales fósiles de sus intervalos actuales.

## Imágenes y límites de representación

![Mapa epistemológico del origen africano de Homo sapiens](../assets/visuales/mapa-investigacion-042.svg)

![Dos cadenas: del fósil al clado y del genoma a la estructura](../assets/visuales/de-fosil-a-clado-y-de-genoma-a-estructura.svg)

- La portada es conceptual y no debe usarse como identificación de fósiles reales.
- El mapa SVG no dibuja una cuna ni fronteras modernas; representa archivos y puentes inferenciales.
- La doble cadena separa observación anatómica de modelado demográfico.
- Los hilos no son cromosomas medidos ni rutas migratorias.
- No se reconstruyen piel, rostro, identidad, lenguaje, vestimenta ni paisaje exacto.
- Los rangos espaciales sólo deben dibujarse como áreas inciertas cuando existan datos geográficos suficientes.

## Fuentes principales

La trazabilidad completa está en [`SOURCES.md`](../SOURCES.md). Núcleo usado: `SRC-HUBLIN-2017`, `SRC-RICHTER-JEBEL-2017`, `SRC-VIDAL-OMO-2022`, `SRC-WHITE-HERTO-2003`, `SRC-GRUN-FLORISBAD-1996`, `SRC-MOUNIER-AFRICA-2019`, `SRC-RAGSDALE-AFRICA-2023`, `SRC-COUSINS-STRUCTURE-2025`, `SRC-SCHLEBUSCH-AFRICA-2017`, `SRC-JAKOBSSON-SOUTH-AFRICA-2026`, `SRC-LIPSON-AFRICA-2022`, `SRC-DURVASULA-GHOST-2020`, `SRC-INGMAN-MTDNA-2000`, `SRC-MALLICK-SGDP-2016`, `SRC-BROOKS-OLORGESAILIE-2018`, `SRC-POTTS-OLORGESAILIE-2018`, `SRC-BLACKWOOD-AMANZI-2026` y `SRC-SCERRI-STRUCTURED-2018`.

## LO OBSERVADO

Fósiles africanos distribuidos, sílex calentado, tobas, industrias, pigmentos, materias primas distantes, variantes actuales y genomas antiguos mucho más jóvenes que el origen.

## LO MEDIDO

Forma y tamaño; `315 ± 34 ka`, `286 ± 32 ka`, mínimo `233 ± 22 ka`, `259 ± 35 ka`; composiciones de obsidiana; frecuencias, ligamiento, tramos y coalescencias bajo tasas explícitas.

## LO INFERIDO

Origen africano del clado, emergencia anatómica mosaico, estructura ancestral y flujo en lugar de una población puntual continuamente panmíctica.

## LOS SUPUESTOS

Asociación estratigráfica, correlación de tefras, historia de uranio, comparadores morfológicos, tasas de mutación/recombinación, generación, neutralidad aproximada y modelos que contienen una vecindad de la historia real.

## LAS INCERTIDUMBRES

Geografía de los tallos, taxonomía de algunos fósiles, contemporaneidad entre regiones, intensidad del flujo, cronología exacta de separaciones y ausencia de ADN cercano a `300 ka`.

## LAS ALTERNATIVAS

Región única con expansión y sesgo de muestreo; tallos débiles con flujo; separación profunda y pulso; introgresión arcaica fantasma; combinaciones de estos procesos.

## LAS CONTROVERSIAS

Qué fósiles pertenecen al clado; si «pan-africano» describe fósiles, redes o demografía; cómo distinguir estructura de introgresión; y si MSA representa tradición, convergencia o población.

## QUÉ PODRÍA FALSARLO

Nuevos fósiles y genomas antiguos con predicciones contrarias, refechados, asociación rota o estadísticas independientes que favorezcan de forma robusta panmixia o una cuna única.

## NIVEL DE CONFIANZA

**A–B** para origen africano; **B** para emergencia anatómica distribuida y mosaico; **B-COND/C** para estructura ancestral; **C–D** para el número, ubicación y cronología exacta de tallos.

## QUÉ SABEMOS REALMENTE

Los primeros expedientes ampliamente aceptados de *H. sapiens* están en África y no forman una secuencia anatómica o geográfica simple. Los genomas requieren historias con estructura, flujo o mezcla más complejas que una población fundadora homogénea.

## QUÉ TODAVÍA NO SABEMOS

No sabemos qué región —si alguna— concentró la transición, qué fósil representa cada población ancestral, cuántos tallos existieron, cuánto duró su aislamiento ni cuál de los modelos genómicos actuales se aproxima mejor a la historia real.

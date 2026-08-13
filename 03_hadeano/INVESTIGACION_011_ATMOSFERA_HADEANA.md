---
id: INV-HADEAN-ATMOSPHERE-001
titulo: "¿Cómo se restringe una atmósfera sin muestras de aire?"
estado: AUDITADO
ultima_revision: 2026-08-10
claims:
  - CLAIM-HADEAN-MAGMA-REDOX-001
  - CLAIM-HADEAN-ATMOSPHERE-COMPOSITION-001
  - CLAIM-HADEAN-ATMOSPHERE-O2-001
  - CLAIM-HADEAN-ATMOSPHERE-ESCAPE-001
  - CLAIM-HADEAN-ATMOSPHERE-DYNAMIC-001
  - CLAIM-ARCHEAN-ATMOSPHERE-PRESSURE-001
fuentes:
  - SRC-TRAIL-2011
  - SRC-SOSSI-2020
  - SRC-HOUCHIN-2026
  - SRC-GAILLARD-2022
  - SRC-PAHLEVAN-2019
  - SRC-GU-2024
  - SRC-MARCHI-2016
  - SRC-AVICE-2017
  - SRC-FARQUHAR-2000
  - SRC-PAPINEAU-2006
  - SRC-MARTY-2013
  - SRC-SOM-2016
---

# Investigación 011 — ¿Cómo se restringe una atmósfera sin muestras de aire?

![Portada conceptual de la atmósfera hadeana](../assets/visuales/hero-atmosfera-hadeana.png)

> **Portada conceptual:** conecta magma, desgasificación, escape y mediciones posteriores. No es una fotografía del aire hadeano, no fija una mezcla de gases y no representa una atmósfera estable durante todo el eón.

![Mapa de evidencia de la atmósfera hadeana](../assets/visuales/mapa-investigacion-011.svg)

![Cadena del magma al aire](../assets/visuales/de-magma-a-aire.svg)

## Respuesta breve, con sus condiciones

No conservamos una burbuja de aire hadeano identificada y fechada. La atmósfera se restringe mediante una cadena de archivos parciales:

- zircones hadeanos registran el estado redox de algunos **magmas parentales**, no la abundancia de oxígeno en el aire;
- experimentos y equilibrio termodinámico traducen fugacidad de oxígeno, inventario volátil, presión y temperatura en familias de gases desgasificados;
- modelos de océano de magma, impactos y escape calculan cómo esos gases pudieron repartirse, perderse o reaccionar;
- xenón atrapado en cuarzo arqueano conserva evolución y desgasificación atmosféricas posteriores;
- isótopos de azufre cerca de `3.77 Ga` imponen una atmósfera sin oxígeno libre apreciable en el borde poshadeano;
- inclusiones de fluidos de `3.5–3.0 Ga` y vesículas de `2.7 Ga` restringen presiones arqueanas, no la presión hadeana.

La conclusión fuerte es asimétrica. Algunos magmas ya eran moderadamente oxidados, cerca del tampón fayalita–magnetita–cuarzo (`FMQ`), hacia `4.35–4.15 Ga`. Eso hace menos probable una desgasificación dominada exclusivamente por las especies más reducidas. Pero **magma oxidado no significa aire con O₂**: `fO₂` es una variable termodinámica del sistema mineral–fundido, y gases ricos en H₂O/CO₂/N₂ pueden coexistir con una atmósfera anóxica.

```text
redox de algunos magmas hadeanos: B-COND
familias plausibles de gases desgasificados: C
atmósfera hadeana dinámica y sometida a pérdidas/aportes: C
ausencia de O₂ libre cerca de 3.77 Ga: B-COND
presión y composición exactas durante el Hadeano: D–E
```

## 0. Cuatro variables que no deben fusionarse

| Variable | Pregunta | Archivo más próximo |
|---|---|---|
| inventario | ¿cuánto H, C, N, S y gases nobles había en cada reservorio? | manto, meteoritos y modelos de partición |
| especiación | ¿en qué moléculas salían esos elementos? | `fO₂`, solubilidad y equilibrio de desgasificación |
| presión | ¿cuántos bares y qué presiones parciales había? | inclusiones, vesículas y modelos de masa |
| estado redox atmosférico | ¿podía acumularse O₂ libre? | azufre MIF, sumideros y fotquímica |

Un mismo artículo puede relacionarlas, pero ninguna medición disponible entrega las cuatro. “Atmósfera reductora”, “CO₂ abundante”, “presión alta” y “sin O₂” no son frases equivalentes.

## 1. Qué mide realmente la fugacidad de oxígeno

La fugacidad de oxígeno (`fO₂`) expresa el potencial químico del oxígeno en un sistema. En petrología se reporta con frecuencia respecto de tampones minerales:

```text
IW  = hierro–wüstita
FMQ = fayalita–magnetita–cuarzo
ΔFMQ = log10(fO₂ de la muestra) − log10(fO₂ de FMQ)
```

No es una fracción de volumen de `O₂` ni una presión parcial atmosférica. Un fundido puede estar a `FMQ` sin contener burbujas de oxígeno molecular; su redox se manifiesta en valencias relativas, por ejemplo `Fe³⁺/Fe²⁺`, Ce o U, y en equilibrios entre minerales y fundido.

La distinción importa porque un titular como “Hadean magmas were oxidized” puede transformarse erróneamente en “la Tierra tenía aire oxigenado”. El primer enunciado es petrológico. El segundo requeriría fuentes netas de `O₂`, sumideros y un proxy atmosférico independiente.

## 2. Zircones: de Ce o U al magma parental

Trail, Watson y Tailby calibraron la incorporación de Ce en zircon como oxibarómetro. En su selección de zircones de Jack Hills, los fundidos inferidos promedian cerca de `FMQ`; granos compatibles con magmas derivados del manto sugieren condiciones semejantes a las modernas tan temprano como `~4.35 Ga` (`SRC-TRAIL-2011`).

Houchin et al. añadieron en 2026 una ruta distinta: espectroscopía XANES del estado de oxidación de U, junto con U–Pb y trazas, en núcleos ígneos y bordes metamórficos. Los núcleos registran aproximadamente `FMQ−1` a `FMQ+1` y sitúan un manto de redox casi moderno hacia `4.15 Ga` (`SRC-HOUCHIN-2026`).

La concordancia es importante, pero condicionada:

- Ce y U usan calibraciones, partición y temperatura diferentes;
- ambos archivos siguen siendo zircones detríticos de Jack Hills;
- la población preservada puede sesgarse hacia magmas que saturan zircon;
- reconstruir el fundido exige que el dominio sea ígneo y no haya sido reajustado;
- “manto casi moderno” describe redox, no tectónica, presión atmosférica o composición del aire.

El resultado auditado no es “todo el manto hadeano estaba a FMQ”, sino “algunos magmas fuente no eran extremadamente reducidos y dos oxibarómetros apuntan a un intervalo moderadamente oxidado”.

## 3. Del magma al gas: una traducción termodinámica

Dado un inventario de H–C–N–S–O, el redox modifica la especie dominante. En términos esquemáticos:

| Condición del fundido | Especies favorecidas en cálculos ideales | No determina por sí sola |
|---|---|---|
| más reducida, cercana a `IW` | H₂, CO, CH₄, H₂S, NH₃ | masa total, retención y composición final |
| más oxidada, cercana a `FMQ` | H₂O, CO₂, SO₂, N₂ | O₂ libre acumulado o presión superficial |

La tabla es una dirección química, no una receta. Presión de separación, temperatura, profundidad del océano de magma, solubilidades, inventario elemental, cinética y condensación cambian el resultado.

Sossi et al. midieron la relación entre `Fe³⁺/Fe²⁺` y `fO₂` en líquidos de composición terrestre a alta temperatura. Su escenario para la superficie de un océano de magma cerca de `IW+0.5` genera primero una atmósfera rica en CO; al enfriar y condensar agua, una mezcla CO₂–N₂ con presiones semejantes a Venus antes de la retirada posterior de CO₂ (`SRC-SOSSI-2020`).

Gaillard et al. exploraron un rango mayor de redox, inventarios y tamaños de océano de magma. Obtuvieron atmósferas de aproximadamente `40–220 bar` para su episodio final en los casos calculados y familias muy distintas entre extremos reducidos y oxidados (`SRC-GAILLARD-2022`). El rango demuestra sensibilidad y plausibilidad; no es una paleobarometría de la Tierra.

## 4. Por qué los modelos no convergen en una mezcla única

El mismo archivo del manto puede traducirse de manera diferente al cambiar la historia de acreción.

Pahlevan, Schaefer y Hirschmann usaron la escasa diferencia de D/H entre agua terrestre y una fuente condrítica propuesta para limitar pérdida previa de H₂. Bajo su historia de fuente, océano y escape, la mínima elevación de D/H favorece `pH₂ < 20 bar` y desgasificación más oxidada que aproximadamente `IW+1` (`SRC-PAHLEVAN-2019`). Es un límite condicional, no un barómetro directo.

Gu et al. acoplaron 433 historias N-cuerpos con formación del núcleo, redox, partición H–C–N y erosión por impactos. Sus Tierras análogas generan atmósferas dominadas por CO durante la acreción, aunque el manto se oxide progresivamente (`SRC-GU-2024`). El contraste con otros modelos no es un error aritmético simple: cambia el redox en la superficie del océano de magma, la partición en el núcleo, la entrega tardía y la erosión.

Por eso una salida `97 % CO` o `40–220 bar` debe escribirse como:

```text
resultado del modelo M bajo entradas I y reglas R
```

nunca como una medición del aire real.

## 5. La atmósfera no termina cuando el gas sale del magma

Después de desgasificar, el inventario puede cambiar por:

- condensación de H₂O y disolución oceánica;
- meteorización y carbonatación de corteza;
- fotólisis y escape de H;
- escape hidrodinámico y fraccionamiento de gases nobles;
- impactos que erosionan atmósfera;
- impactos que funden manto y liberan gases nuevos;
- reacciones con hierro reducido, sulfuros y gases volcánicos;
- subducción o reciclaje posterior.

Marchi et al. modelaron el fundido producido por impactores de más de `100 km`. En sus escenarios, los estanques de impacto liberan CO₂ y especies de S suficientes para alterar repetidamente clima y química, con posibles ciclos de calentamiento y enfriamiento (`SRC-MARCHI-2016`). Es un mecanismo de reinicio parcial, no evidencia de que un episodio particular ocurriera con la magnitud máxima.

La expresión “la atmósfera secundaria” puede ocultar una sucesión de atmósferas: cada gran impacto, episodio de océano de magma, condensación y pérdida modifica el estado anterior.

## 6. Xenón: memoria de escape, no composición completa

Avice, Marty y Burgess analizaron gases nobles en inclusiones de cuarzo de Barberton de `~3.3 Ga`. El xenón atmosférico arqueano era `12.9 ± 2.4 ‰ u⁻¹` más ligero que el moderno en el fraccionamiento reportado, y conservaba menos exceso radiogénico de `129Xe`; el balance requiere desgasificación del manto más intensa que la actual (`SRC-AVICE-2017`).

El dato prueba que la atmósfera siguió evolucionando después del Hadeano. Los mecanismos candidatos incluyen escape dependiente de ionización y acoplamiento con H, pero Xe no entrega una mezcla de N₂–CO₂–H₂O–CO ni una presión total hadeana. Extrapolar hacia atrás requiere una composición inicial y una ley de escape.

Xenón restringe historia de procesamiento y fuentes nobles; no funciona como una botella de aire completa.

## 7. Azufre: un límite poshadeano sobre O₂

La fraccionación independiente de masa de azufre (`S-MIF`) aparece cuando la fotoquímica atmosférica produce cocientes de `33S`, `34S` y `32S` que no siguen la relación dependiente de masa ordinaria. Farquhar, Bao y Thiemens establecieron la señal atmosférica en rocas arqueanas (`SRC-FARQUHAR-2000`).

Papineau y Mojzsis documentaron `S-MIF` en sulfuros de unidades pre-`3770 Ma` de Isua y concluyeron que la atmósfera carecía de oxígeno libre en el momento de depósito (`SRC-PAPINEAU-2006`). El resultado es el límite más cercano usado aquí, pero todavía pertenece al Eoarcaico:

```text
S-MIF a ~3.77 Ga → atmósfera anóxica entonces
                     ↘ no mide directamente 4.4–4.0 Ga
```

Es coherente con que una atmósfera hadeana no acumulara O₂, aun si sus magmas estaban cerca de `FMQ`. Agua y CO₂ son especies oxidadas; su presencia no equivale a oxígeno molecular libre.

## 8. Presión: los límites mejores son mucho más jóvenes

Marty et al. midieron N y Ar en inclusiones de cuarzo hidrotermal de `3.5–3.0 Ga`. El equilibrio fluido–atmósfera implica `pN₂ < 1.1 bar`, quizá cerca de `0.5 bar`, y bajo el marco del estudio `pCO₂` probablemente menor de `0.7 bar` (`SRC-MARTY-2013`).

Som et al. usaron tamaños de vesículas en coladas basálticas de `2.7 Ga`. Su paleobarometría obtuvo `0.23 ± 0.23 bar` y, combinada con otros límites, propuso aproximadamente `0.5 bar` como techo para la presión total del Arcaico tardío (`SRC-SOM-2016`).

Ambos son logros de paleobarometría, pero no pueden copiarse al Hadeano:

- están separados por cientos de millones a más de mil millones de años;
- presión total y presión parcial de N₂ son magnitudes distintas;
- inclusiones requieren equilibrio y correcciones de solubilidad;
- vesículas requieren presión de emplazamiento, elevación, lava y coalescencia;
- impactos, escape, desgasificación y secuestro pudieron cambiar la masa atmosférica entre épocas.

## 9. Corroboración e independencia

| Ruta | Objeto | Restringe | Dependencia dominante |
|---|---|---|---|
| Ce/U en zircon | mineral hadeano | `fO₂` del fundido parental | calibración, T, dominio y representatividad |
| experimento/modelo | líquido sintético + ecuaciones | gas compatible con entradas | inventario, solubilidad, equilibrio y P–T |
| D/H | agua y fuentes asumidas | límite a H₂ perdido | procedencia inicial y régimen de escape |
| Xe | gas en cuarzo de 3.3 Ga | fraccionamiento y desgasificación | componente inicial y captura fiel |
| S-MIF | sulfuro sedimentario ~3.77 Ga | muy poco O₂ libre | origen atmosférico y preservación |
| N/Ar y vesículas | rocas de 3.5–2.7 Ga | presión posterior | equilibrio, profundidad y tiempo |

No son seis mediciones del mismo parámetro. Convergen en una atmósfera cambiante y anóxica cerca del borde arqueano, no en una mezcla cuantitativa única para `4.4 Ga`.

## 10. Regla del adversario

### Evidencia favorable

- dos oxibarómetros de zircon sitúan algunos magmas hadeanos en redox moderado;
- experimentos confirman que el redox cambia fuertemente la especiación de gases;
- D/H limita escenarios con enormes inventarios de H₂ bajo fuentes específicas;
- Xe registra evolución atmosférica prolongada;
- S-MIF impone anoxia muy cerca del final del Hadeano;
- presión arqueana puede medirse con archivos físicos posteriores.

### Evidencia problemática

- Jack Hills es local, detrítico y selectivo;
- la superficie del océano de magma puede no compartir el redox de su interior;
- inventarios de H–C–N–S y su reparto núcleo–manto son inciertos;
- equilibrio químico puede no alcanzarse durante enfriamiento o impacto;
- no hay muestra de aire hadeano fechada;
- los límites directos de O₂ y presión son arqueanos, no hadeanos.

### Alternativa fuerte

El manto pudo contener dominios de redox distintos y desgasificar atmósferas diferentes tras impactos sucesivos. Una atmósfera inicialmente rica en CO/H₂ pudo oxidarse por pérdida de H, mientras otra más rica en H₂O/CO₂ pudo reducirse al reaccionar con corteza o gases volcánicos. El archivo actual discrimina familias, no una sola trayectoria.

## LO OBSERVADO

- zircones detríticos con dominios ígneos y metamórficos;
- espectros y concentraciones de Ce y estados de U;
- vidrios experimentales y productos de alta temperatura;
- inclusiones de fluidos en cuarzo arqueano;
- sulfuros sedimentarios y vesículas basálticas posteriores.

No se observa el cielo hadeano, una burbuja de `4.3 Ga` ni una columna atmosférica completa.

## LO MEDIDO

- U–Pb, Ce, U-XANES, REE y temperaturas/calibraciones de zircon;
- `Fe³⁺/Fe²⁺`, solubilidades y especiación en experimentos;
- D/H de reservorios terrestres y condríticos;
- abundancias e isótopos de Xe, Ar y N;
- `Δ33S`/`δ34S` en sulfuros;
- diámetros de vesículas y distribución vertical;
- salidas de modelos de desgasificación, impacto y escape.

## LO INFERIDO

- algunos magmas hadeanos tenían redox cercano al manto moderno;
- sus gases no tuvieron que estar dominados por las especies más reducidas;
- la atmósfera cambió por desgasificación, condensación, reacción, impactos y escape;
- el Xe arqueano conserva procesamiento atmosférico prolongado;
- la atmósfera cerca de `3.77 Ga` era anóxica;
- ciertas presiones arqueanas eran menores que varios escenarios densos.

## LOS SUPUESTOS

- Ce/U del dominio preservan el fundido parental;
- calibraciones de zircon y vidrio se extrapolan a composiciones hadeanas;
- inventarios volátiles y partición núcleo–manto son razonables;
- equilibrio termodinámico aproxima el gas liberado;
- D/H inicial y fraccionamiento de escape están identificados;
- Xe/Ar/N atrapados representan aire antiguo y no contaminación;
- S-MIF es atmosférico y sobrevivió al metamorfismo;
- inclusiones y vesículas conservan presión de formación.

## LAS INCERTIDUMBRES

- `[ALTER:4]`: dominios de zircon, inclusiones y sulfuros pueden reajustarse;
- `[CAL:5]`: oxibarómetros y solubilidades requieren calibración/extrapolación;
- `[MODEL:6]`: composición de gas, escape, impacto y partición son modelados;
- `[SAMP:6]`: no existe una muestra directa hadeana y los archivos son locales;
- `[CORR:5]`: modelos comparten inventarios, termodinámica y redox de referencia;
- `[SEM:6]`: `fO₂`, O₂, oxidado, presión y composición se confunden fácilmente;
- `[LOC:6]`: un magma o cuenca no representa el planeta;
- `[DATE:5]`: los mejores límites de aire y presión son posteriores al Hadeano.

## LAS ALTERNATIVAS

- manto espacialmente heterogéneo en redox;
- atmósferas sucesivas después de grandes impactos;
- desgasificación en desequilibrio;
- inventario inicialmente más pobre o rico en volátiles;
- pérdida selectiva de H, Xe, C o N;
- secuestro rápido en océano, corteza o núcleo;
- presiones hadeanas muy distintas de las arqueanas;
- S-MIF preservado localmente dentro de una atmósfera global compleja.

## LAS CONTROVERSIAS

| ID | Núcleo abierto |
|---|---|
| `CONT-HADEAN-MAGMA-AIR-001` | cuánto informa el redox del magma sobre el gas y cuánto sobre el aire acumulado |
| `CONT-HADEAN-ATMOSPHERE-COMPOSITION-001` | CO/H₂ frente a H₂O/CO₂/N₂ y su evolución entre episodios |
| `CONT-HADEAN-ATMOSPHERE-ESCAPE-001` | mecanismo, magnitud y cronología de pérdida de H y Xe |
| `CONT-HADEAN-ATMOSPHERE-PRESSURE-001` | masa/presión hadeana y legitimidad de extrapolar límites arqueanos |

## QUÉ PODRÍA FALSARLO

| Claim | Resultado que lo debilitaría |
|---|---|
| redox moderado de algunos magmas | recalibraciones independientes que sitúen Ce y U en dominios primarios cerca de `IW`, o que prueben reajuste sistemático |
| gas condicionado por redox | experimentos que muestren especiación insensible a `fO₂` en P–T e inventarios relevantes |
| atmósfera dinámica | un archivo continuo que exija composición/presión casi constantes pese a impactos y escape |
| escape prolongado | demostrar que el Xe arqueano es contaminación o fraccionamiento local no atmosférico |
| anoxia cerca de 3.77 Ga | reasignar el S-MIF de Isua a un proceso no atmosférico o a material alóctono posterior |
| límites de presión arqueana | revisiones de equilibrio/emplazamiento que eliminen las cotas de inclusiones y vesículas |

## NIVEL DE CONFIANZA

| Afirmación | Nivel | Razón |
|---|---|---|
| algunos fundidos hadeanos estuvieron aproximadamente entre `FMQ−1` y `FMQ+1` | B-COND | dos oxibarómetros y dominios filtrados; archivo local y calibrado |
| el redox controla en primer orden la especiación de gases de océano de magma | B-COND | termodinámica y experimentos; inventario/P–T modifican cantidades |
| la composición/presión exactas del aire hadeano están medidas | E | no existe muestra completa; sólo familias y límites indirectos |
| la atmósfera cambió por desgasificación, impactos, condensación y escape | C | mecanismos físicos y huellas posteriores; pesos históricos abiertos |
| Xe registra evolución atmosférica hasta al menos 3.3 Ga | B-COND | inclusiones e isótopos; mecanismo exacto de escape discutido |
| el aire cerca de 3.77 Ga carecía de O₂ libre apreciable | B-COND | S-MIF atmosférico preservado; umbral/modelo y contexto local |
| la presión hadeana era igual a la medida entre 3.5 y 2.7 Ga | E | extrapolación temporal sin archivo puente |

## QUÉ SABEMOS REALMENTE

La Tierra hadeana no puede describirse con una única etiqueta de “reductora” u “oxidante”. Algunos magmas conservados en zircon ya alcanzaban redox cercano a `FMQ`; al desgasificar habrían favorecido especies más oxidadas que un fundido en `IW`, pero sin producir por ello una atmósfera rica en O₂. La atmósfera fue un reservorio abierto: recibió gases del manto y de fundidos de impacto, perdió componentes al espacio, condensó agua y reaccionó con corteza y océano. El borde eoarcaico conserva anoxia y el Arcaico posterior aporta límites de presión, pero ninguno entrega la mezcla completa del Hadeano.

## QUÉ TODAVÍA NO SABEMOS

- composición y presión tras cada gran impacto;
- redox de la superficie real de cada océano de magma;
- inventarios iniciales de H, C, N, S y gases nobles;
- cuánto quedó en núcleo, manto, aire, océano o espacio;
- duración de etapas ricas en H₂, CO, CO₂, N₂ o vapor;
- presión total y presiones parciales en `4.4–4.0 Ga`;
- intensidad y régimen de escape bajo el Sol joven;
- si existieron refugios atmosféricos regionales/químicos entre reinicios;
- cuándo aparecieron los primeros sumideros eficientes de CO₂;
- qué tan pronto empezó a acumularse O₂ local sin hacerlo globalmente.

## Fuentes críticas y trazabilidad

| Función | Evidencia | Fuentes |
|---|---|---|
| redox de zircon | `EVID-HADEAN-ZIRCON-REDOX-001` | `SRC-TRAIL-2011`, `SRC-HOUCHIN-2026` |
| gas de océano de magma | `EVID-HADEAN-OUTGASSING-001` | `SRC-SOSSI-2020`, `SRC-GAILLARD-2022`, `SRC-GU-2024` |
| límite de H₂ | `EVID-HADEAN-HYDROGEN-ESCAPE-001` | `SRC-PAHLEVAN-2019` |
| impacto y renovación | `EVID-HADEAN-IMPACT-OUTGASSING-001` | `SRC-MARCHI-2016` |
| Xe y escape | `EVID-HADEAN-XE-ESCAPE-001` | `SRC-AVICE-2017` |
| anoxia poshadeana | `EVID-EOARCHEAN-SMIF-001` | `SRC-FARQUHAR-2000`, `SRC-PAPINEAU-2006` |
| presión posterior | `EVID-ARCHEAN-PRESSURE-001` | `SRC-MARTY-2013`, `SRC-SOM-2016` |

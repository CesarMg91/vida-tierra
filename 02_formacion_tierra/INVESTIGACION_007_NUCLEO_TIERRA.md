---
id: INV-EARTH-CORE-001
titulo: "¿Cómo sabemos que existe el núcleo terrestre y cuándo se diferenció?"
estado: AUDITADO
ultima_revision: 2026-08-10
claims:
  - CLAIM-EARTH-CORE-EXIST-001
  - CLAIM-EARTH-CORE-LIQUID-001
  - CLAIM-EARTH-CORE-INNER-001
  - CLAIM-EARTH-CORE-MASS-001
  - CLAIM-EARTH-CORE-COMPOSITION-001
  - CLAIM-EARTH-CORE-TIMING-001
  - CLAIM-EARTH-CORE-DYNAMO-001
fuentes:
  - SRC-OLDHAM-1906
  - SRC-GUTENBERG-1914
  - SRC-LEHMANN-1936
  - SRC-PREM-1981
  - SRC-AK135-1995
  - SRC-MORELLI-1986
  - SRC-BIRCH-1952
  - SRC-MCDONOUGH-SUN-1995
  - SRC-ALFE-2002
  - SRC-BADRO-2007
  - SRC-BADRO-2014
  - SRC-GLATZMAIER-ROBERTS-1995
  - SRC-LABROSSE-2001
  - SRC-BONO-2019
  - SRC-KLEINE-2002
  - SRC-RUDGE-2010
  - SRC-RUBIE-2015
---

# Investigación 007 — ¿Cómo sabemos que existe el núcleo terrestre y cuándo se diferenció?

![Portada conceptual del núcleo terrestre](../assets/visuales/hero-nucleo-tierra.png)

> **Portada conceptual:** yuxtapone un corte terrestre, trayectorias sísmicas, un meteorito y un experimento de alta presión. No es una observación del interior, no está a escala y no prueba por sí sola forma, composición, temperatura ni edad.

![Mapa de evidencia del núcleo terrestre](../assets/visuales/mapa-investigacion-007.svg)

> **Pregunta de primeros principios:** si la perforación más profunda ni siquiera atraviesa la corteza y ninguna muestra identificada procede del núcleo terrestre, ¿qué señales obligan a introducir una región central distinta, qué propiedades miden y qué parte de la composición o la historia sigue dependiendo de modelos?

## Respuesta breve, con sus condiciones

Sabemos con confianza muy alta que la Tierra contiene un **núcleo de unos 3480 km de radio**, dividido en un **núcleo externo líquido** y un **núcleo interno sólido de unos 1221.5 km de radio**. No lo sabemos porque una cámara o una perforación hayan llegado allí. Lo inferimos porque un mismo modelo radial debe explicar simultáneamente:

1. tiempos, amplitudes y trayectorias de fases sísmicas que atraviesan, rozan o se reflejan en las fronteras profundas;
2. la ausencia de velocidad de corte en el núcleo externo y una rigidez finita en el interno;
3. modos normales de la Tierra, masa total, gravedad y momento de inercia;
4. densidad y velocidades del núcleo comparadas con Fe, Ni y aleaciones comprimidas y calentadas en laboratorio o calculadas desde primeros principios;
5. el déficit de elementos siderófilos del manto frente a referencias cosmoquímicas y experimentos de partición metal–silicato;
6. cronómetros como Hf–W, que registran segregación durante la acreción.

```text
seismogramas globales ───────────────→ fronteras, Vp, Vs y estado físico
masa + gravedad + rotación ─────────→ concentración radial de densidad
meteoritos + manto + partición ─────→ inventario metálico por balance
alta presión + teoría electrónica ──→ aleaciones compatibles con ρ y V
Hf–W + crecimiento + equilibrio ────→ intervalo de diferenciación
                                      ↓
                 núcleo Fe-rich, líquido por fuera,
                 sólido por dentro; química y edades
                 finas todavía condicionadas
```

La existencia, radios aproximados y estados físicos reciben confianza **A**. “Hierro dominante con níquel y elementos ligeros” recibe **B-COND** porque converge geofísica, cosmoquímica y mineralogía, pero la receta exacta no está determinada. La diferenciación principal ocurrió durante la acreción temprana y en múltiples episodios; convertir Hf–W en una fecha única sin una curva `M(t)` y una regla de equilibrio recibe solo **C**.

## 0. Hay tres preguntas, no una

| Pregunta | Dato principal | Puente | Respuesta que permite |
|---|---|---|---|
| ¿existe una región central distinta? | curvas de viaje, sombras, fases reflejadas/refractadas | elasticidad + refracción en un medio radial | sí; frontera principal cerca de 3480 km de radio |
| ¿en qué estado está? | `Vs≈0` en la capa externa; rigidez/fases del centro | un fluido no sostiene esfuerzo cortante estático | núcleo externo líquido e interno sólido |
| ¿de qué está hecho y cuándo se separó? | `ρ`, `Vp`, `Vs`, manto, meteoritos, partición, Hf–W | ecuaciones de estado + balance + modelos de acreción | Fe–Ni dominante con ligeros; diferenciación multietapa temprana |

Una respuesta a la primera no resuelve automáticamente las otras dos. Las ondas sísmicas restringen propiedades elásticas y densidad; no producen una tabla periódica. Un meteorito metálico muestra que otros cuerpos formaron metal Fe–Ni, pero no es una muestra del núcleo terrestre. Hf–W registra separación y mezcla, no una fotografía del núcleo actual.

## 1. Qué se observa realmente

Los objetos observables están en la superficie o en laboratorios:

| Objeto/dataset | Señal real | Qué se calibra | Qué no se observa |
|---|---|---|---|
| sismogramas | movimiento del suelo frente al tiempo | reloj, respuesta instrumental, orientación y posición | el rayo ni la frontera como imagen |
| catálogo de terremotos | hipocentro, tiempo origen y fases leídas | red global, modelo de viaje y calidad de pick | un foco perfectamente conocido sin inversión |
| oscilaciones libres | frecuencias y desdoblamientos tras grandes sismos | respuesta, rotación, elipticidad y acoplamiento | densidad local única sin parametrización |
| gravedad y rotación | campo externo, precesión, nutación, forma | órbitas, marcos, mareas y deformación | distribución radial única por sí sola |
| rocas del manto | abundancias y razones isotópicas | blancos, estándares, fraccionamiento y contexto | material del núcleo |
| meteoritos | metal, silicato y trazadores de otros cuerpos | clasificación y procedencia | receta terrestre directa |
| celdas de yunque/choque | volumen, fases y velocidad de aleaciones | presión, temperatura y metrología de rayos X | historia real de acreción |

El núcleo es por tanto un objeto reconstruido por **inversión conjunta**, no un objeto visualizado directamente.

## 2. De una llegada sísmica a una frontera

En un sólido elástico isotrópico idealizado:

```text
Vp = √[(K + 4μ/3)/ρ]
Vs = √[μ/ρ]
```

`K` es el módulo volumétrico, `μ` el módulo de corte y `ρ` la densidad. Un fluido en equilibrio no mantiene esfuerzo de corte estático: `μ≈0`, por lo que `Vs≈0`, aunque sí transmite compresión y tenga `Vp>0`.

En una Tierra cuya velocidad cambia con el radio, las trayectorias se curvan. Los tiempos de llegada frente a distancia epicentral forman ramas. Cambios abruptos de pendiente, zonas con primeras llegadas débiles o ausentes y fases reflejadas exigen cambios de velocidad y fronteras. Oldham reconoció en 1906 que las fases de cuerpo cambiaban al atravesar las cuatro décimas centrales del radio (`SRC-OLDHAM-1906`). Gutenberg afinó en 1914 el tamaño y la sombra del núcleo (`SRC-GUTENBERG-1914`).

La cadena correcta es:

```text
voltaje del sensor
→ desplazamiento/velocidad del suelo calibrados
→ llegada y polarización de una fase
→ tiempo diferencial o curva distancia–tiempo
→ elasticidad + geometría + modelo radial
→ frontera y perfil de velocidad compatibles
```

El “rayo” es una aproximación de alta frecuencia a la propagación de una onda finita. Difracción, dispersión, atenuación, heterogeneidad 3-D y profundidad del foco impiden leer un diagrama escolar como fotografía literal.

## 3. La sombra P y la aparente desaparición de S

![Fases sísmicas que restringen el núcleo](../assets/visuales/fases-sismicas-nucleo.svg)

> **Diagrama conceptual:** las trayectorias y radios son esquemáticos. La lámina separa P, PKP, PKIKP y SKS, pero no representa zonas de Fresnel, amplitudes, tiempos ni heterogeneidad 3-D.

Las fases P que casi rozan la frontera núcleo–manto y las que entran en el núcleo externo toman rutas distintas. La gran caída de `Vp` al cruzar la frontera refracta las trayectorias y produce una región sin **P directa** aproximadamente entre `104°` y `140°` en la descripción global simplificada. No es una franja sin toda energía sísmica: existen fases difractadas, reflejadas, refractadas y convertidas.

La frase “las ondas S no atraviesan el núcleo” necesita una corrección:

- una onda de corte no se propaga **como S** dentro del núcleo externo líquido;
- energía incidente S puede convertirse a compresión en la frontera, recorrer el líquido como K y volver a S: `SKS` es un ejemplo;
- `PKP` atraviesa el núcleo externo como compresión;
- la ausencia de una rama S transmitida y `Vs=0` en modelos globales son el diagnóstico de fluidez, no la ausencia absoluta de movimiento registrado.

PREM expresa esta diferencia con `Vs=0` en el núcleo externo y una velocidad de corte finita en el interno (`SRC-PREM-1981`). Esa conclusión integra curvas de viaje y modos normales; no descansa en una sola sombra dibujada.

## 4. Lehmann y un núcleo dentro del núcleo

Un modelo con un núcleo líquido uniforme dejaba llegadas P débiles en regiones inesperadas. En `P′` (1936), Inge Lehmann comparó registros del gran terremoto de Nueva Zelanda de 1929 y otras estaciones, y propuso una frontera interna capaz de reflejar y refractar energía (`SRC-LEHMANN-1936`).

La nomenclatura moderna hace visible el recorrido:

| Fase | Trayecto idealizado | Restricción principal |
|---|---|---|
| `PKP` | manto–núcleo externo–manto | velocidad y radio del núcleo externo |
| `PKIKP` / `PKPdf` | manto–externo–interno–externo–manto | existencia y velocidad del núcleo interno |
| `PKiKP` | reflexión en la frontera del núcleo interno | radio y contraste en la ICB |
| `SKS` | S en manto, P en núcleo externo, S en manto | conversión y fluidez de la capa externa |

PREM fija un radio del núcleo interno de `1221.5 km` y uno del externo de `3480 km`; para este último reporta `Vs=0`, mientras el centro admite rigidez (`SRC-PREM-1981`). Modelos de viaje posteriores como ak135 refinan el ajuste global sin convertir la Tierra en una esfera perfectamente homogénea (`SRC-AK135-1995`).

El núcleo interno no es un cristal simple. Las llegadas `PKIKP` varían con dirección; Morelli, Dziewonski y Woodhouse encontraron velocidades P aproximadamente un 1 % mayores cerca del eje de rotación que en el plano ecuatorial bajo su parametrización (`SRC-MORELLI-1986`). La anisotropía es real a nivel global, pero su origen —textura cristalina, crecimiento, deformación o heterogeneidad— continúa abierto.

## 5. Masa y momento de inercia: una Tierra no uniforme

La masa y el radio dan una densidad media cercana a `5.5 g/cm³`, mayor que la de muchas rocas superficiales. El momento de inercia añade dónde está la masa. Para una esfera uniforme:

```text
I / (M R²) = 0.4
```

PREM usa como restricción astronómico-geodésica `I/(MR²)=0.3308`, junto con `M=5.974×10²⁴ kg` y `R=6371 km` en los valores de 1981 (`SRC-PREM-1981`). El número menor que `0.4` exige que la masa esté más concentrada hacia el centro que en una esfera homogénea.

Pero el momento de inercia no “descubre hierro” de forma aislada. Muchas distribuciones suaves pueden compartir masa y momento. Se vuelve potente cuando debe coexistir con radios sísmicos, velocidades, modos normales y ecuaciones de estado. En PREM, aproximadamente mil periodos de modos normales, tiempos de viaje, atenuación, masa y momento se invirtieron juntos para obtener perfiles radiales de propiedades elásticas y densidad.

## 6. PREM no es una ecografía sin supuestos

PREM es un modelo de referencia 1-D. Su éxito consiste en satisfacer conjuntamente grandes conjuntos de datos con una estructura autoconsistente. Sus supuestos y límites importan:

- promedia lateralmente una Tierra 3-D;
- parametriza regiones y discontinuidades antes de invertir;
- usa relaciones como Adams–Williamson y vínculos entre densidad y velocidad;
- incorpora atenuación y anisotropía donde los datos lo requieren;
- distribuciones de densidad distintas pueden acercarse a los mismos modos si se compensan;
- heterogeneidad en el límite núcleo–manto y en el núcleo interno queda fuera de una curva radial única.

Por eso `3480 km`, `1221.5 km`, `Vp(r)`, `Vs(r)` y `ρ(r)` no tienen la misma independencia ni incertidumbre. Radios y estados globales son muy robustos; saltos finos de densidad, capas estratificadas y estructura lateral son más dependientes del modelo.

## 7. De densidad y velocidad a una aleación Fe-rich

La sismología restringe `ρ`, `Vp` y `Vs`, pero diferentes mezclas pueden compartirlas. La identificación composicional se construye con tres puentes:

### 7.1 Balance cosmoquímico

Fe y Ni son abundantes en el Sistema Solar y forman aleaciones metálicas en meteoritos diferenciados. Elementos refractarios litófilos permanecen preferentemente en silicato; muchos siderófilos están empobrecidos en el manto respecto de referencias meteoríticas. McDonough y Sun combinaron perfil sísmico, meteoritos y petrología para obtener una familia de Tierras compatibles con un núcleo Fe–Ni y una fracción de elementos de bajo peso atómico (`SRC-MCDONOUGH-SUN-1995`).

Esto es balance, no muestreo: la composición total terrestre y la referencia condrítica no son conocidas sin hipótesis de volatilidad, procedencia y fraccionamiento.

### 7.2 Mineralogía a presión y temperatura

Birch comparó elasticidad y velocidad con materiales comprimidos y concluyó que el núcleo no podía ser hierro puro bajo condiciones plausibles (`SRC-BIRCH-1952`). Experimentos de dispersión inelástica de rayos X midieron velocidades en aleaciones Fe–O, Fe–Si y Fe–S a alta presión (`SRC-BADRO-2007`). Cálculos *ab initio* compararon potenciales químicos y el salto de densidad en la frontera interna (`SRC-ALFE-2002`).

### 7.3 Ajuste conjunto, no ingrediente único

Badro, Côté y Brodholt exigieron que densidad y velocidad sísmicas se satisfacieran simultáneamente y obtuvieron una familia que requiere oxígeno en su parametrización, mientras Si, S y C no eran individualmente obligatorios (`SRC-BADRO-2014`). Otros experimentos y modelos aceptan combinaciones diferentes. La conclusión común es más estable que las recetas particulares:

```text
Fe dominante + ~5 % Ni + uno o varios elementos ligeros
```

Los principales candidatos incluyen O, Si, S, C e H. Sus fracciones están correlacionadas con temperatura, fase del Fe, ecuación de estado, salto de densidad y partición sólido–líquido. No es válido publicar una receta con decimales como si fuese análisis directo de una muestra.

## 8. El manto conserva lo que el núcleo retiró

Un elemento no entra al núcleo solo por ser pesado. Importan estado de oxidación, temperatura, presión, composición y afinidad química entre metal y silicato. Uranio puede ser denso y aun permanecer principalmente en fases silicatadas; Ni, Co, W y elementos altamente siderófilos prefieren metal bajo condiciones relevantes.

```text
inventario planetario estimado
− inventario del silicato accesible
+ coeficientes metal/silicato en P–T–fO₂
→ núcleo compatible por balance
```

El manto primitivo no es una muestra sin historia: fusión, extracción de corteza, mezcla, acreción tardía y reservorios profundos modificaron sus abundancias. Por eso se ajustan suites multielementales y no un elemento aislado. Los modelos de Rubie et al. acoplan partición experimental a episodios de acreción y permiten presiones de equilibrio crecientes (`SRC-RUBIE-2015`).

## 9. ¿Cuándo se diferenció el núcleo?

“Formación del núcleo” y “formación del núcleo interno” son acontecimientos separados por miles de millones de años.

### 9.1 Segregación metal–silicato

`182Hf` era litófilo y su hija `182W` moderadamente siderófila. Mientras el padre existía, separar metal de silicato elevaba Hf/W en el manto; el `182Hf` restante producía `182W` radiogénico. Las razones actuales restringen cuándo y cómo ocurrió la separación (`SRC-KLEINE-2002`).

Pero la Tierra creció mediante cuerpos ya diferenciados. El W final depende de:

- curva de masa `M(t)`;
- composición de cada cuerpo;
- cuánto metal entrante se emulsificó;
- con qué fracción de silicato equilibró;
- partición dependiente de P–T–`fO₂`;
- mezcla y acreción posterior.

Rudge, Kleine y Bourdon demostraron que modelos con desequilibrio podían ajustar observaciones tan bien como escenarios de equilibrio y que Hf–W restringe la mezcla además del tiempo (`SRC-RUDGE-2010`). La frase robusta es: **la diferenciación principal acompañó la acreción durante las primeras decenas de Ma y ocurrió por episodios**. Una fecha única del “hundimiento del hierro” no está observada.

### 9.2 Nucleación del núcleo interno

El núcleo interno actual se formó después, al enfriarse y cristalizar parte del líquido. Su edad no se obtiene de Hf–W ni de `1221.5 km` por sí solo. Se calcula con historia térmica, flujo de calor en la frontera núcleo–manto, conductividad, liquidus, composición, energía gravitatoria y posibles fuentes radiogénicas.

Labrosse, Poirier y Le Mouël obtuvieron una edad probable cercana a 1 Ga y un límite de 2.5 Ga sin calentamiento radiogénico bajo su modelo (`SRC-LABROSSE-2001`). Paleointensidades ediacáricas extraordinariamente bajas fueron interpretadas como compatibles con nucleación alrededor de `565 Ma` (`SRC-BONO-2019`). Es una controversia de evolución térmica y paleomagnetismo, no duda sobre la existencia del núcleo interno.

## 10. El campo magnético: corroboración con límites

El campo geomagnético secular, sus variaciones y reversiones son compatibles con una dínamo en una envoltura fluida, conductora y rotante. Simulaciones magnetohidrodinámicas autoconsistentes mostraron que una capa esférica convectiva puede mantener y revertir un campo de gran escala (`SRC-GLATZMAIER-ROBERTS-1995`).

La dínamo corrobora fluidez, conductividad y movimiento, pero no determina por sí sola:

- la receta exacta de elementos ligeros;
- la edad de la segregación metal–silicato;
- el mecanismo único de convección en toda época;
- la edad exacta del núcleo interno;
- que toda señal magnética antigua sea primaria.

Además, las simulaciones operan con difusividades muy distintas de las terrestres. Reproducir un dipolo y reversiones demuestra viabilidad física, no una réplica histórica única.

## 11. Corroboración e independencia

| Línea | Principio dominante | Dependencias propias | Dependencias compartidas | Independencia |
|---|---|---|---|---|
| tiempos de viaje | elasticidad y refracción | localización, picks, heterogeneidad | modelo radial | alta frente a geoquímica |
| modos normales | oscilación global | identificación modal, elipticidad, atenuación | elasticidad, parametrización | parcial frente a tiempos |
| masa/momento | gravitación y rotación | marcos, precesión, mareas | geometría y densidad | alta instrumental; baja en inversión conjunta |
| balance siderófilo | partición y conservación | referencia condrítica, manto primitivo | composición total | alta física frente a sismología |
| alta presión/*ab initio* | termodinámica y estructura electrónica | escala P–T, fase, extrapolación | objetivo sísmico `ρ,V` | parcial |
| Hf–W | decaimiento + partición | `M(t)`, equilibrio, anomalías | manto y meteoritos | alta para tiempo; comparte partición |
| paleomagnetismo/dínamo | remanencia + MHD | alteración, escalado numérico | conductividad/composición | corroborativa, no decisiva sola |

Contar siete líneas como siete votos independientes sería incorrecto. PREM usa masa y momento como restricciones; mineralogía se ajusta a densidad sísmica; Hf–W y siderófilos comparten física de partición. La convergencia sigue siendo fuerte porque cambian instrumentos, muestras y principios, pero sus acoplamientos deben permanecer visibles.

## 12. Regla del adversario

### Evidencia favorable

- discontinuidades reproducibles y fases que muestrean caminos distintos;
- `Vs=0` en la envoltura central y rigidez finita en el centro;
- masa y momento que requieren concentración central;
- densidad/velocidades compatibles con Fe–Ni ligero, no con silicato superficial;
- depleciones siderófilas y partición experimental;
- Hf–W coherente con separación temprana durante crecimiento.

### Evidencia problemática y anomalías

- estructura 3-D cerca de la frontera núcleo–manto;
- amplitudes débiles y difíciles de identificar de `PKiKP` y fases de corte del interno;
- anisotropía y hemisferios del núcleo interno;
- salto de densidad en la ICB con resolución limitada;
- recetas de elementos ligeros incompatibles entre algunos experimentos/modelos;
- edad del núcleo interno dependiente de conductividad y flujo de calor.

### Alternativas en su versión más fuerte

1. **Gradiente central sin frontera:** debe reproducir ramas, sombras y reflexiones nítidas; falla ante discontinuidades conjuntas.
2. **Núcleo externo sólido muy débil:** debe dar `Vs≈0` a periodos sísmicos, convertir fases y sostener una dínamo; se vuelve operacionalmente fluido.
3. **Núcleo no metálico de material exótico:** debe satisfacer abundancias solares, balance siderófilo, densidad, velocidades, conductividad y partición sin parámetros ad hoc.
4. **Segregación instantánea única:** debe ajustar Hf–W y suites del manto sin equilibrio parcial ni cuerpos previamente diferenciados.

### Pruebas discriminatorias

- arrays densos y repetición de terremotos para fases del núcleo;
- modos normales y geodesia con mejores kernels de densidad;
- ecuaciones de estado multicomponente a presión y temperatura de núcleo;
- partición simultánea de suites de elementos bajo condiciones evolucionantes;
- paleointensidades antiguas con mineralogía y alteración resueltas a nanoescala;
- modelos acoplados de acreción, emulsificación, química y evolución térmica con predicciones fuera del conjunto ajustado.

## LO OBSERVADO

- movimientos del suelo y sus tiempos de llegada en redes globales;
- frecuencias de oscilación libre de la Tierra;
- campo de gravedad, forma, rotación, precesión y nutación;
- abundancias e isótopos de rocas del manto y meteoritos;
- cambios de volumen, fase y velocidad en aleaciones comprimidas;
- campo geomagnético moderno y remanencias en materiales antiguos.

No se observa visualmente una capa a 2900 km de profundidad ni se posee una muestra autenticada del núcleo terrestre.

## LO MEDIDO

- curvas distancia–tiempo y tiempos diferenciales de fases P, S, K e I;
- radios de discontinuidades dentro de modelos globales;
- `Vp`, `Vs`, atenuación y densidad invertida;
- `I/(MR²)=0.3308` usado por PREM;
- concentraciones y razones isotópicas siderófilas/litófilas;
- coeficientes de partición metal–silicato;
- ecuaciones de estado y velocidades de Fe y aleaciones.

## LO INFERIDO

- un núcleo externo líquido y un núcleo interno sólido;
- Fe como componente dominante, Ni como componente mayor secundario y elementos ligeros;
- separación metal–silicato durante acreción multietapa;
- cristalización mucho posterior del núcleo interno;
- una dínamo alojada principalmente en el núcleo externo conductor.

## LOS SUPUESTOS

- elasticidad continua y nomenclatura de fases aplicables a escalas globales;
- modelos de fuente y estructura suficientemente buenos para aislar señal profunda;
- simetría radial como primer orden en PREM/ak135;
- relaciones termodinámicas y electrónicas extrapolables a condiciones del núcleo;
- referencia cosmoquímica y manto primitivo reconstruibles;
- coeficientes de partición representativos de episodios reales;
- remanencias antiguas primarias cuando se usan para historia de la dínamo.

## LAS INCERTIDUMBRES

- `[OBS:1]` para llegadas fuertes; mayor para fases internas débiles;
- `[CAL:1-2]` en tiempo y respuesta instrumental;
- `[MODEL:2]` para radios/velocidades globales y `[MODEL:3-4]` para densidad fina;
- `[INIT:3]` en composición total y curva de acreción;
- `[PHYS:2-4]` en ecuaciones de estado y conductividad extrema;
- `[CORR:3]` entre ingredientes ligeros, temperatura y salto de densidad;
- `[DATE:4]` para edad del núcleo interno;
- `[SEM:3]` entre diferenciación metálica, fin de equilibrio y nucleación interna.

## LAS ALTERNATIVAS

Las alternativas útiles no niegan todas las ondas: redistribuyen fronteras, gradientes, anisotropía, composición o historia térmica. Se aceptan solo si predicen simultáneamente tiempos, amplitudes, modos, masa, momento, balance químico y propiedades de materiales. Un ajuste a una sola fase o elemento no desplaza la convergencia.

## LAS CONTROVERSIAS

- mezcla exacta de O, Si, S, C e H;
- salto de densidad y estratificación en la ICB/CMB;
- origen de anisotropía y hemisferios del núcleo interno;
- rotación diferencial y variación temporal del interno;
- grado de equilibrio metal–silicato en impactos gigantes;
- flujo de calor, conductividad y edad del núcleo interno;
- fidelidad del paleomagnetismo hadeano y ediacárico.

## QUÉ PODRÍA FALSARLO

La existencia de un núcleo estratificado quedaría seriamente dañada si un modelo sin región central distinta explicara con menor complejidad y mejor ajuste todas las ramas de viaje, conversiones, modos, masa y momento. La fluidez externa fallaría si se midiera propagación de corte inequívoca y global en esa capa con módulo finito compatible con los demás datos. La composición Fe-rich perdería soporte si materiales alternativos reprodujeran a la vez abundancias, `ρ`, velocidades, conductividad y partición. Una fecha concreta de diferenciación se falsifica al cambiar el modelo de equilibrio si no predice otros trazadores.

## NIVEL DE CONFIANZA

| Formulación | Confianza | Motivo |
|---|---|---|
| existe un núcleo con frontera principal cerca de 3480 km de radio | A | múltiples fases, modos y geodesia |
| el núcleo externo es líquido y el interno sólido | A | corte, compresión, reflexiones y rigidez global |
| el núcleo es Fe-rich con ~5 % Ni y elementos ligeros | B-COND | convergencia, pero receta correlacionada |
| la diferenciación ocurrió durante acreción multietapa | B-COND | Hf–W + siderófilos + modelos físicos |
| el núcleo interno nucleó cerca de 565 Ma | C | interpretación paleomagnética y térmica específica |
| conocemos porcentajes exactos de cada elemento ligero | D | familias degeneradas de P–T–composición |

## QUÉ SABEMOS REALMENTE

La Tierra posee una estructura central que no puede reemplazarse por una extrapolación uniforme de rocas superficiales. La combinación sísmica y geodésica fija con gran robustez una envoltura líquida y un centro sólido. Cosmoquímica, manto y mineralogía extrema convierten propiedades en una aleación dominada por Fe y Ni con componentes ligeros. La separación metálica comenzó muy pronto y acompañó el crecimiento planetario; no fue un descenso instantáneo único.

## QUÉ TODAVÍA NO SABEMOS

- la receta exacta y la distribución radial de elementos ligeros;
- el salto de densidad preciso en la frontera del núcleo interno;
- si existen capas estratificadas globales y qué las produce;
- la estructura cristalina dominante y el origen de la anisotropía;
- cuánto y cómo rota el núcleo interno respecto del manto;
- cuánto metal equilibró en cada gran impacto;
- una curva única de diferenciación metal–silicato;
- la conductividad y el flujo de calor históricos con precisión suficiente;
- la edad exacta del núcleo interno;
- el mecanismo de la dínamo en cada época temprana.

Estas preguntas abiertas viven en los detalles de composición, dinámica e historia. No reabren la existencia del núcleo ni la distinción global entre capa externa líquida y centro sólido.

## Fuentes críticas y trazabilidad

| Uso | Evidencias | Fuentes |
|---|---|---|
| descubrimiento y frontera | `EVID-EARTH-CORE-PKP-001` | `SRC-OLDHAM-1906`, `SRC-GUTENBERG-1914` |
| núcleo interno | `EVID-EARTH-CORE-ICB-001` | `SRC-LEHMANN-1936`, `SRC-PREM-1981`, `SRC-MORELLI-1986` |
| estado líquido/sólido | `EVID-EARTH-CORE-SHEAR-001` | `SRC-PREM-1981`, `SRC-AK135-1995` |
| masa y densidad | `EVID-EARTH-CORE-MOI-001`, `EVID-EARTH-CORE-MODES-001` | `SRC-PREM-1981` |
| composición por balance | `EVID-EARTH-CORE-SIDEROPHILE-001` | `SRC-MCDONOUGH-SUN-1995`, `SRC-RUBIE-2015` |
| mineralogía extrema | `EVID-EARTH-CORE-MINERALPHYS-001` | `SRC-BIRCH-1952`, `SRC-ALFE-2002`, `SRC-BADRO-2007`, `SRC-BADRO-2014` |
| tiempo de segregación | `EVID-EARTH-CORE-HFW-001` | `SRC-KLEINE-2002`, `SRC-RUDGE-2010`, `SRC-RUBIE-2015` |
| dínamo y edad interna | `EVID-EARTH-CORE-DYNAMO-001`, `EVID-EARTH-CORE-PALEO-001` | `SRC-GLATZMAIER-ROBERTS-1995`, `SRC-LABROSSE-2001`, `SRC-BONO-2019` |

La bibliografía completa y los límites de acceso se mantienen en [`SOURCES.md`](../SOURCES.md); las formulaciones canónicas están en [`CLAIMS.md`](../CLAIMS.md); el grafo detallado está en [`MAPA_007_NUCLEO_TIERRA.md`](../22_mapas_epistemologicos/MAPA_007_NUCLEO_TIERRA.md).

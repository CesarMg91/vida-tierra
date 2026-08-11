---
id: MAP-EUK-001
investigacion: INV-LIFE-EUK-001
titulo: "Mapa epistemológico de la eucariogénesis"
ultima_revision: 2026-08-11
---

# Mapa 017 — Eucariogénesis: dos genealogías y una integración

## Pregunta central

¿Qué datos permiten inferir la ascendencia arqueana del huésped, la ascendencia bacteriana de la mitocondria y su integración antes de LECA, y qué partes del mecanismo y la cronología continúan subdeterminadas?

## Frontera semántica

```text
linaje Asgard ───────────────┐
                             ├─ eucariogénesis ── LECA ── eucariotas actuales
linaje Alpha-relacionado ────┘
              ↓
        protomitochondrion
```

La unión representa ascendencias inferidas, no una fagocitosis observada. `LECA` es el último ancestro común de los eucariotas vivos; no es el primer eucariota ni necesariamente el primer portador de cada rasgo.

## Cinco cadenas de inferencia

| Ruta | Dato | Puente | Claim | Riesgo principal |
|---|---|---|---|---|
| nuclear | proteínas informacionales | árbol arqueano–eucariota | afinidad Asgard | ramas largas, taxones, MAG |
| celular | ESP, estructuras y cultivos | homología funcional | piezas complejas pre-LECA | pariente actual ≠ ancestro |
| mitocondrial | genoma, ribosoma, proteínas | filogenia + transferencia | endosimbiosis bacteriana | reducción y composición |
| comparativa | sistemas en grandes clados | reconstrucción de presencia | LECA complejo/mitocondriado | pérdidas y paralogía |
| temporal | fósiles, duplicaciones, relojes | calibración + afinidad | edades mínimas/modeladas | nodo fechado incorrecto |

## Escala de confianza

### Capa A — Genealogías mayores

- componente nuclear desde Archaea;
- Asgard como pariente arqueano conocido más próximo;
- mitocondria desde bacteria Alpha-relacionada;
- integración anterior a LECA.

**Salida:** `A-COND` a `B`.

### Capa B — Arquitectura ancestral

- actina/profilina y remodelado con raíces Asgard;
- LECA con núcleo, endomembranas, citoesqueleto y mitocondria;
- transferencia al núcleo e importación organelar;
- mitosomas/hidrogenosomas como derivados.

**Salida:** `A-B`, condicionada por reconstrucción comparativa.

### Capa C — Orden y ecología

- huésped complejizado antes de la mitocondria;
- asociaciones bacterianas adicionales;
- metabolismo anaerobio, microaerobio o aerobio;
- eucariotas fósiles bentónicos aerobios.

**Salida:** `C-COND`; modelos, árboles y muestreo importan.

### Capa D — Escena histórica

- orden exacto núcleo–fagocitosis–mitocondria;
- protrusiones, invaginación o huésped adicional;
- cambio de membrana;
- donante, lugar, fecha y especies exactos.

**Salida:** `D-E`.

## Mapa de afirmaciones

| ID | Afirmación | Evidencia dominante | Confianza |
|---|---|---|---:|
| `CLAIM-EUK-TWO-DOMAIN-001` | Eukaryota tiene raíz nuclear arqueana | árboles informacionales | A-COND |
| `CLAIM-EUK-ASGARD-HOST-001` | huésped emparentado con Asgard | filogenómica + muestreo | A-B amplia; C-D fina |
| `CLAIM-EUK-ASGARD-ESP-001` | piezas complejas preceden Eukaryota | ESP, proteínas y células | B |
| `CLAIM-EUK-MITO-ENDOSYMBIOSIS-001` | mitocondria desde bacteria Alpha-relacionada | genoma, ribosoma, árboles | A-COND/B-COND |
| `CLAIM-EUK-MITO-LECA-001` | LECA ya tenía mitocondria | MRO y pérdidas secundarias | A-B |
| `CLAIM-EUK-LECA-COMPLEX-001` | LECA tenía arquitectura eucariota | reconstrucción de sistemas | A-B |
| `CLAIM-EUK-GENE-MOSAIC-001` | proteoma de LECA es mosaico | miles de árboles | B; fracciones C-D |
| `CLAIM-EUK-SEQUENCE-001` | complejidad importante precedió mitocondria | duplicaciones fechadas | C-COND |
| `CLAIM-EUK-AGE-001` | eucariogénesis fue prolongada | relojes/duplicaciones/fósiles | C-D |
| `CLAIM-EUK-FOSSIL-MINIMUM-001` | eucariotas por `~1.75 Ga` | fósil + contexto | B-C |
| `CLAIM-EUK-OXYGEN-001` | fósiles tempranos ocuparon fondos oxigenados | distribución redox | C-COND |
| `CLAIM-EUK-PLASTID-DISTINCT-001` | plastidio es endosimbiosis posterior | filogenia cianobacteriana | A-B |

## Matriz de alternativas

| Cuello | Modelo 1 | Modelo 2 | Modelo 3 |
|---|---|---|---|
| posición del huésped | dentro de Heimdall | hermana de Heimdall | rama más profunda Asgard |
| mitocondria | dentro de Alpha | hermana de Alpha muestreada | posición sensible a composición |
| orden | mitocondria temprana | huésped complejo primero | integración gradual/simultánea |
| internalización | fagocitosis | protrusiones `E³` | invaginación/huésped adicional |
| membrana | reemplazo arqueano | mezcla transitoria | continuidad bacteriana con evento extra |
| genes bacterianos | protomitochondrion | HGT diversos | simbiosis/virus seriales |
| oxígeno | motor causal | oportunidad posterior | correlación ecológica |

## Dependencias compartidas

```text
MAG Asgard ───── árbol del huésped ───────┐
      └───────── repertorio ESP ──────────┤
                                          ├─ modelo de célula huésped
cultivos Asgard ─ morfología/función ─────┘

genomas mitocondriales ─ árbol Alpha ─────┐
proteínas nucleares ─── transferencia ────┼─ modelo de endosimbiosis
MRO y pérdidas ──────── LECA ─────────────┘

fósiles ─ edad mínima
duplicaciones + calibraciones ─ edad modelada
```

Más MAG pueden mejorar el árbol y a la vez introducir contaminación o quimerismo. Más familias no eliminan la dependencia de ortología y modelo. Mitosomas e hidrogenosomas cambian de organismo, pero comparten la hipótesis de homología mitocondrial.

## Pruebas de discriminación

| Controversia | Observación que más discrimina |
|---|---|
| rama exacta Asgard | genomas cerrados, marcadores concordantes y modelos resistentes a composición |
| donante mitocondrial | diversidad Alpha profunda + modelos sitio/rama heterogéneos |
| mitocondria temprana/tardía | duplicaciones independientes con reloj y función ancestral validados |
| engullimiento | intermediario reproducible con transmisión, membranas e importación naciente |
| cambio de membrana | raíces de enzimas lipídicas + topología experimentalmente viable |
| socios adicionales | árboles con dirección de HGT y firmas de transferencia coherentes |
| papel del oxígeno | cronología que ordene metabolismo, nichos y endosimbiosis sin usar fósil como fecha del origen |
| edad de LECA | fósiles con afinidad corona robusta + calibraciones alternativas concordantes |

## Puertas contra atajos

```text
ESP presente             ≠ sistema eucariota completo
protrusión observada     ≠ fagocitosis ancestral
gen bacteriano nuclear   ≠ gen del protomitochondrion
mitocondria sin genoma   ≠ ausencia de ascendencia mitocondrial
fósil eucariota          ≠ fecha de endosimbiosis
LECA complejo            ≠ primer eucariota
asociación con O₂        ≠ causa de eucariogénesis
```

## Regla de salida

Cada escenario de eucariogénesis debe declarar:

```text
árbol nuclear
+ árbol mitocondrial
+ topología de membranas
+ ruta de integración génica
+ cronología
+ predicciones que lo distinguen
```

Un dibujo que sólo muestra una célula tragando otra no es todavía un modelo histórico auditable.

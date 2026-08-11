---
id: MAP-SEX-001
investigacion: INV-LIFE-SEX-001
titulo: "Mapa epistemológico del origen y mantenimiento del sexo"
ultima_revision: 2026-08-11
---

# Mapa 018 — Sexo: módulos ancestrales, ciclos y ventajas condicionadas

## Pregunta central

¿Qué datos permiten reconstruir una maquinaria sexual antes de LECA, qué partes del ciclo se observan o sólo se infieren y por qué los experimentos sobre ventajas actuales no identifican automáticamente la causa de origen?

## Frontera semántica

```text
transferencia de DNA ─┐
recombinación ────────┼─ pueden ocurrir sin sexo completo
fusión celular ───────┘

compatibilidad + fusión + cambio de ploidía + meiosis
                              ↓
                    ciclo sexual eucariota
                              ↓
            isogamia ── múltiples transiciones ── anisogamia
                                                   ↓
                                             macho / hembra
```

El mapa evita tres sustituciones ilegítimas:

```text
un gen meiótico      ≠ una meiosis observada
ventaja experimental ≠ causa histórica de origen
tipo de apareamiento ≠ sexo masculino/femenino
```

## Seis cadenas de inferencia

| Ruta | Dato | Puente | Salida | Riesgo principal |
|---|---|---|---|---|
| bioquímica | Spo11 unido a roturas; HAP2/Fsx1 funcional | estructura y perturbación | mecanismo moderno | ensayo heterólogo o modelo limitado |
| filogenómica | homólogos meióticos en ramas profundas | ortología, duplicación y pérdida | repertorio de LECA | función cambiante y muestreo |
| ciclo celular | fusión, cariogamia, ploidía, segregación | coordinación temporal | sexo observado en taxón | ciclo derivado no es ancestro |
| población | ligamiento, haplotipos, Hardy–Weinberg | modelos de recombinación | intercambio críptico | conversión, HGT y estructura |
| evolución experimental | aptitud y frecuencia sexual | comparación causal | beneficio/costo condicionado | tratamiento arrastra ploidía o diapausa |
| tiempo | fósil, nodo y reloj | afinidad + calibración | mínimo/modelo | rasgo o nodo equivocado |

## Escala de confianza

### Capa A — Función molecular moderna

- Spo11 cataliza roturas de doble cadena que inician recombinación meiótica;
- HAP2 fusiona membranas de gametos en varios linajes;
- homólogos de cohesión, búsqueda de homología y segregación actúan coordinadamente.

**Salida:** `A` dentro de los sistemas experimentales.

### Capa B — Herencia anterior a LECA

- paralogías meióticas antiguas;
- repertorios distribuidos entre grandes ramas eucariotas;
- LECA con núcleo, cromosomas y división compleja;
- pérdidas y reemplazos explican parte de la distribución irregular.

**Salida:** `A-B` para maquinaria; `B-COND` para ciclo completo.

### Capa C — Intercambio críptico

- diplomixis en *Giardia*;
- señales de recombinación/intercambio en *Adineta*;
- genes meióticos sin ciclo observado en varios microorganismos.

**Salida:** `B-C` para intercambio; `C-D` para mecanismo.

### Capa D — Ventajas actuales

- interferencia clonal reducida en levadura;
- cruzamiento favorecido por mutación, novedad o coevolución;
- sexo mantenido en hábitats heterogéneos;
- efectos nulos o cargas en otros diseños.

**Salida:** `B` por experimento; generalización `C-COND`.

### Capa E — Origen profundo

- orden de fusión, diploidía, recombinación y reducción;
- ventaja inicial;
- fusógeno precursor;
- fecha, ambiente y participantes.

**Salida:** `D-E`.

## Mapa de afirmaciones

| ID | Afirmación | Evidencia dominante | Confianza |
|---|---|---|---:|
| `CLAIM-SEX-DEFINITION-001` | sexo no equivale a reproducción ni a cualquier recombinación | ciclos y definiciones operacionales | A conceptual |
| `CLAIM-SEX-LECA-001` | LECA tenía maquinaria meiótica extensa y ciclo sexual probable | distribución + árboles + reconstrucción | A-B / B-COND |
| `CLAIM-SEX-MEIOSIS-ORIGIN-001` | la meiosis reutilizó módulos anteriores | homologías y duplicaciones | B-COND |
| `CLAIM-SEX-SPO11-001` | Spo11 inicia recombinación con roturas programadas | bioquímica de complejos DNA–proteína | A |
| `CLAIM-SEX-FUSION-001` | HAP2 es fusógeno antiguo; raíz de fusexinas abierta | estructura, mutantes y Fsx1 | A-B / C-D origen |
| `CLAIM-SEX-CRYPTIC-001` | ausencia de ciclo observado no prueba ausencia de intercambio | *Giardia* + población | B-C |
| `CLAIM-SEX-ASEXUALITY-001` | asexualidad estricta antigua es difícil de demostrar | bdelloideos | B para rechazo de clonación; D mecanismo |
| `CLAIM-SEX-ADVANTAGE-001` | beneficios del sexo dependen del contexto | evolución experimental | B local; C general |
| `CLAIM-SEX-ORIGIN-MAINTENANCE-001` | origen y mantenimiento exigen pruebas distintas | lógica causal + experimentos | A conceptual |
| `CLAIM-SEX-COST-001` | costo doble no es costo universal del sexo | supuestos de ciclos anisógamos | A conceptual / C alcance natural |
| `CLAIM-SEX-ANISOGAMY-001` | macho y hembra son derivados repetidos | volvocinos + comparación | B |
| `CLAIM-SEX-FOSSIL-001` | *Bangiomorpha* da un mínimo condicionado, no el origen | morfología + Re–Os | B edad; C afinidad/ciclo |

## Grafo de dependencia

```text
función Spo11 ───────────────┐
árboles de genes meióticos ──┼─→ repertorio ancestral ──→ LECA meiótico
distribución por supergrupos ─┘             │
                                            └─ no fija frecuencia ni secuencia

función HAP2 ────────────────┐
Fsx1 arqueano/móvil ─────────┼─→ fusión profunda ───────→ varios orígenes posibles
pérdidas/reemplazos ─────────┘

ligamiento + haplotipos ─────→ intercambio ─────────────→ sexo / HGT / mitosis por decidir

aptitud bajo tratamiento ────→ ventaja local ───────────→ mantenimiento condicionado
                                                     ╲
                                                      ≠ origen histórico

*Bangiomorpha* + Re–Os ──────→ mínimo de ciclo complejo ≠ primera meiosis
```

## Auditoría de la ruta filogenómica

Antes de asignar un gen a LECA:

1. distinguir ortólogo de parálogo;
2. muestrear protistas y no sólo animales, hongos y plantas;
3. probar contaminación y transferencia horizontal;
4. examinar dominio, estructura y residuos funcionales;
5. reconstruir pérdidas en árboles alternativos;
6. separar presencia del gen de función meiótica;
7. exigir varios módulos cooperantes para inferir ciclo.

## Auditoría de la ruta poblacional

| Señal | Explicación sexual | Alternativas que deben probarse |
|---|---|---|
| ligamiento cae con distancia | recombinación entre homólogos | conversión, ensamblaje, fase |
| cuatro haplotipos | *crossovers* o intercambio | mutación recurrente, HGT |
| Hardy–Weinberg aproximado | mezcla entre individuos | estructura y muestreo |
| árboles locales incongruentes | recombinación/hibridación | paralogía y contaminación |
| alelos compartidos | flujo génico | ancestralidad retenida |

Una señal puede rechazar clonación estricta sin identificar meiosis.

## Auditoría de la evolución experimental

Antes de decir «el sexo fue favorecido»:

- separar meiosis de cruzamiento;
- separar recombinación de segregación;
- controlar ploidía y autofecundación;
- medir el costo de encontrar pareja;
- evitar que sexo esté ligado obligatoriamente a diapausa;
- registrar tamaño efectivo y tasa mutacional;
- distinguir adaptación media de espectro de mutaciones;
- no extrapolar el tratamiento a la transición pre-LECA.

## Auditoría de anisogamia

```text
tipos compatibles
      ↓ cambios en inversión, número y movilidad de gametos
isogamia ─────────────→ anisogamia ─────────────→ oogamia
      │                       │                        │
sin macho/hembra        gameto pequeño/grande      esperma/óvulo extremo
```

Preguntas separadas:

- ¿cuántas transiciones ocurrieron?;
- ¿qué papel tuvo el tamaño corporal o la multicelularidad?;
- ¿qué reguladores fueron cooptados?;
- ¿se suprimió recombinación alrededor del locus?;
- ¿apareció anisogamia antes o después de sexos separados por individuo?

Los volvocinos responden parte de estas preguntas en un clado; no son una escalera universal.

## Auditoría temporal

```text
edad de estrato con fósil ──→ mínimo de esa morfología
fecha de nodo LECA ─────────→ sexo anterior si la reconstrucción es correcta
duplicación de gen ─────────→ máximo/mínimo relativo de una pieza
                             ≠ fecha de ensamblaje del ciclo
```

`~1.047 Ga` para *Bangiomorpha* no compite con un origen pre-LECA: registra una manifestación tardía y compleja de un mecanismo molecular anterior.

## Falsadores discriminantes

| Hipótesis | Hallazgo que la debilitaría de forma específica |
|---|---|
| meiosis en LECA | orígenes independientes posteriores para el repertorio coordinado |
| ciclo sexual en LECA | ausencia ancestral robusta de fusión y reducción pese a buen muestreo |
| raíz antigua de HAP2 | convergencia estructural demostrada o transferencia muy tardía |
| sexo críptico bdelloideo | genomas amplios compatibles sólo con clonación y sin intercambio |
| Reina Roja generalizable | ausencia repetida de selección por cruzamiento bajo coevolución naturalista |
| anisogamia desde isogamia | transiciones robustas reconstruidas desde un estado ancestral distinto |
| sexo fósil en *Bangiomorpha* | afinidad/ciclo alternativo que explique los patrones sin diferenciación sexual |

## Resumen operacional

```text
NÚCLEO ROBUSTO
  maquinaria meiótica antigua + fusión profunda + LECA complejo

CONDICIONADO
  ciclo exacto de LECA + intercambio críptico + ventajas por ecología

ABIERTO
  secuencia de origen + primera función + fusógeno inicial + fecha/lugar

DERIVADO
  anisogamia + macho/hembra + cromosomas sexuales + costo de machos
```

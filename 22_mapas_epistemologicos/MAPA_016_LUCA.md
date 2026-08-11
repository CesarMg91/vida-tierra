---
id: MAP-LUCA-001
investigacion: INV-LIFE-LUCA-001
titulo: "Mapa epistemológico de LUCA"
ultima_revision: 2026-08-11
---

# Mapa 016 — LUCA: del descendiente al ancestro

## Pregunta central

¿Qué propiedades pertenecen al último ancestro común de la vida celular conocida y cuáles aparecen sólo al proyectar organismos modernos hacia un pasado que no está muestreado directamente?

## Frontera semántica

```text
primera vida  ── historia previa desconocida ── LUCA ── Bacteria
                                              └─────── Archaea ── Eukaryota
```

`LUCA` es «último» respecto a los descendientes actuales y «universal» respecto a la vida celular conocida. No significa primer replicador, única célula, único linaje temprano ni origen químico único.

## Cadena de inferencia

| Nivel | Objeto | Operación | Producto | Riesgo principal |
|---|---|---|---|---|
| 1 | secuencia/estructura actual | detectar homología | familia molecular | semejanza no genealógica |
| 2 | familia | alinear y modelar sustitución | árbol del gen | ramas largas/paralogía |
| 3 | árbol del gen | comparar con árbol celular | D/T/L | HGT y árbol de referencia |
| 4 | historias reconciliadas | calcular estado ancestral | `P(presencia en LUCA)` | modelo y muestreo |
| 5 | familias probables | anotar y conectar | ruta metabólica | función ancestral distinta |
| 6 | rutas | añadir geoquímica | fisiología/hábitat | compatibilidad ≠ localidad |

`D/T/L` = duplicación, transferencia y pérdida.

## Cuatro capas de confianza

### Capa A — Herencia coordinada

- código genético casi universal;
- ribosoma y traducción;
- `tRNA` y maquinaria de carga;
- ATP como moneda energética;
- ascendencia común bajo pruebas formales.

**Salida:** `A-COND` a `B`.

### Capa B — Arquitectura celular

- transcripción multisubunidad;
- gradientes electroquímicos;
- ATP sintasa transmembrana;
- síntesis de nucleótidos y cofactores;
- genoma probablemente de DNA.

**Salida:** `B-COND`; el detalle puede haber sido reemplazado.

### Capa C — Inventario y fisiología

- cientos o miles de familias;
- vía de Wood–Ljungdahl;
- uso de `H₂` y ferredoxina;
- anaerobiosis;
- tamaño de genoma.

**Salida:** `C-COND`; depende de reconciliación, anotación y umbral.

### Capa D — Retrato histórico

- membrana bacteriana/arqueana/mixta;
- PolD u otra replicasa;
- temperatura;
- chimenea hidrotermal;
- edad `~4.2 Ga`;
- aspecto, especie y localidad.

**Salida:** `C-D` a `E`.

## Dos modelos que no deben mezclarse

### Filtro de monofilia por dominio

```text
presente en ≥2 grupos bacterianos
       +
presente en ≥2 grupos arqueanos
       +
Bacteria y Archaea monofiléticas en el árbol
       ↓
candidata ancestral
```

Reduce transferencias simples; pierde genes transferidos y puede aceptar transferencias múltiples.

### Reconciliación probabilística

```text
árbol de especies + distribución de árboles del gen
       ↓ modelo D/T/L
historias posibles ponderadas
       ↓
probabilidad de presencia en LUCA
```

Incluye más familias; hereda el árbol, tasas, anotaciones y supuestos del modelo.

## Mapa de afirmaciones

| ID | Afirmación | Evidencia dominante | Confianza |
|---|---|---|---:|
| `CLAIM-LUCA-COMMON-ANCESTRY-001` | la vida celular conocida comparte genealogía | ribosoma, proteínas, prueba formal | A-COND |
| `CLAIM-LUCA-DEFINITION-001` | LUCA no es la primera vida | definición + complejidad heredada | A-SEM |
| `CLAIM-LUCA-ROOT-001` | raíz entre Bacteria y Archaea | parálogos antiguos | B-COND |
| `CLAIM-LUCA-TRANSLATION-001` | traducción/código ya operaban | homología universal coordinada | A-B |
| `CLAIM-LUCA-CELL-001` | existía delimitación funcional | ATPasas, inserción, gradientes | B-COND |
| `CLAIM-LUCA-DNA-001` | el genoma era probablemente DNA | metabolismo de DNA + reemplazos | B-COND |
| `CLAIM-LUCA-ENERGY-001` | conservaba energía quimiosmótica | ATP sintasas profundas | B-COND |
| `CLAIM-LUCA-METABOLISM-001` | anaerobio con redes centrales | 355 árboles + reconciliación | C-COND |
| `CLAIM-LUCA-GENOME-001` | genoma procariota de varios Mb | regresión moderna + probabilidades | C-COND |
| `CLAIM-LUCA-AGE-001` | edad cercana a `4.2 Ga` | reloj de parálogos *cross‑braced* | C-D |
| `CLAIM-LUCA-ECOSYSTEM-001` | población dentro de un ecosistema | lógica poblacional + modelo de flujos | B-SEM/C |

## Matriz de alternativas

| Cuello de botella | Escenario 1 | Escenario 2 | Escenario 3 |
|---|---|---|---|
| historia profunda | árbol central con HGT | red temprana extensa | genes con raíces distintas |
| membrana | bacteriana | arqueana | mixta/fijación tardía |
| replicación | PolD ancestral | PolB/otra replicasa | etapa RNA/DNA híbrida |
| carbono | acetogénesis autotrófica | metabolismo mixto | heterotrofía dependiente |
| ambiente | hidrotermal | sedimento/poro | mosaico de ambientes |
| temperatura | termófilo | mesófilo | señal mixta/sesgada |
| edad | `~4.2 Ga` | >`3.9 Ga`, poco resuelta | nodo prolongado/no puntual |

## Dependencias compartidas

```text
                 árbol de especies
                  /      |       \
          inventario   metabolismo   tamaño genómico
               |            |              |
               └──── anotación KEGG/COG ───┘

calibraciones ── reloj ── edad
parálogos ──────┘       └─ raíz
```

Tres resultados que usan el mismo árbol no son tres réplicas independientes. Una estructura proteica, una filogenia alternativa o un fósil nuevo rompen dependencias distintas.

## Pruebas de discriminación

| Controversia | Observación que más discrimina |
|---|---|
| árbol frente a red | concordancia de familias resistentes a HGT y modelos con linajes extinguidos |
| inventario mínimo frente a complejo | resultados estables entre KEGG, COG, perfiles y estructuras |
| membrana | raíces concordantes de enzimas lipídicas + función ancestral experimental |
| replisoma | homologías estructurales y secuenciales entre intermediarios reconstruidos |
| acetogénesis | conjunto completo, dirección y acoplamiento energético ancestrales |
| termofilia | proteínas ancestrales reconstruidas sin sesgo de composición |
| `~4.2 Ga` | nuevos parálogos y calibraciones independientes con análisis *leave‑one‑out* |

## Regla de salida

Una reconstrucción de LUCA debe publicar, para cada rasgo:

```text
dato moderno
+ árbol/modelo
+ evento ancestral inferido
+ alternativas
+ sensibilidad
+ confianza
```

Si falta esa cadena, «LUCA tenía X» es una ilustración, no todavía una afirmación auditable.

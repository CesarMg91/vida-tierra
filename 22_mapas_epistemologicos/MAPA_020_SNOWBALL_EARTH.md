---
id: MAP-SNOWBALL-001
investigacion: INV-PROT-SNOWBALL-001
titulo: "Mapa epistemológico de Snowball Earth"
ultima_revision: 2026-08-11
---

# Mapa 020 — Snowball Earth: de un clasto a un estado planetario

## Pregunta central

¿Qué observaciones permiten pasar de hielo en una cuenca a glaciación tropical global, qué parte depende de paleomagnetismo y sincronía, y dónde empiezan los modelos de cobertura oceánica, entrada y salida?

## Las cinco escalas que no deben colapsarse

```text
proceso glacial local
        ↓ facies
unidad glacial regional
        ↓ edad + correlación
episodio entre paleocontinentes
        ↓ paleolatitud
glaciación tropical de alcance global
        ↓ física del clima
estado oceánico hard / thin / waterbelt / dinámico
```

Cada flecha agrega supuestos. Ninguna diamictita individual observa la última caja.

## Seis rutas de evidencia

| Ruta | Dato | Puente | Claim | Riesgo |
|---|---|---|---|---|
| sedimentología | clastos, laminación, estrías, facies | proceso de transporte/deposición | hubo hielo local | diamictita no glacial |
| geocronología | zircon U–Pb, lutita Re–Os | posición estratigráfica | inicio, fin, duración | hiato/correlación |
| paleomagnetismo | componentes e inclinación | campo + primariedad | hielo a baja latitud | remagnetización/compactación |
| quimioestratigrafía | C, O triple, Fe, N, Ce | reservorio y modelo | carbono/redox/refugios | diagénesis/no unicidad |
| carbonatos de capa | contacto, textura, química | ambiente de precipitación | cambio posglacial | mecanismo/tiempo múltiple |
| clima | albedo, nubes, hielo, carbono | simulación acoplada | estado y transición global | parámetros profundos |

## Ruta 1 — Reconocer hielo sin usar el nombre de la roca

```text
diamictita
   ├─ dropstone + laminación deformada
   ├─ pavimento/estrías
   ├─ deformación glacitectónica
   ├─ canales y facies de margen
   └─ alternativas de flujo/tectónica
                 ↓
          proceso glacial local
```

**Salida:** `CLAIM-SNOWBALL-LOCAL-GLOBAL-001`, local B; escala global todavía no.

## Ruta 2 — Sincronizar sin fingir un reloj de hielo

```text
ceniza ──CA-ID-TIMS──→ edad de cristalización/deposición
lutita ──Re–Os───────→ edad del sistema bajo cierre/modelo
                         ↓
posición antes / dentro / después del intervalo glacial
                         ↓
límites y duración condicionados
```

**Salidas:**

- Sturtiana `~717–659 Ma`: B-COND;
- Marinoana `~639–635.2 Ma`: B-COND;
- dos episodios separados y correlacionables: A-B.

## Ruta 3 — Paleolatitud no es una coordenada moderna

```text
remanencia ──desmagnetización──→ componente candidata
                                     ↓
prueba de pliegue + reversión + mineral portador
                                     ↓
magnetización primaria ──campo dipolar──→ paleolatitud
                                     ↓
edad + facies glacial ───────────────→ hielo tropical
```

**Salida:** `CLAIM-SNOWBALL-PALEOLATITUDE-001`, B por conjunto; variable por unidad.

## Ruta 4 — De hielo tropical a Snowball

```text
hielo de baja latitud + albedo alto + Sol neoproterozoico
                              ↓
             modelos de equilibrio y circulación
                 ┌────────────┼──────────────┐
              hard         thin ice       waterbelt
                 └──── estados dinámicos / ciclos ────┘
```

El modelo no rellena huecos como si fuera una observación. Evalúa si una configuración puede sostener datos y balances.

**Salida:** alcance casi global B-COND; océano sellado D.

## Ruta 5 — Terminar el estado de albedo alto

```text
desgasificación volcánica ──────→ fuente de CO₂ ─────┐
meteorización continental/fondo → sumidero variable ├→ pCO₂(t)
nubes + polvo + albedo + presión → forzamiento neto ┤
geometría del hielo/agua abierta → umbral efectivo ┘
                                      ↓
                          deshielo y transgresión
                                      ↓
                   mezcla + alcalinidad → carbonato de capa
```

**Salida:** participación de `CO₂` B-COND; valor y mecanismo exclusivo D-E.

## Ruta 6 — Vida durante el hielo

```text
fósil dentro de unidad glacial ──→ presencia local ───────┐
δ15N + Fe + Ce ─────────────────→ redox/productividad ────┤
facies de margen/agua de fusión ─→ geometría del refugio ─┘
                                          ↓
                         hábitat habitable condicionado
```

**Salida:** refugios B-COND; área oceánica total D.

## Matriz de modelos

| Observación | Hard | Thin ice | Waterbelt | Dinámico/cíclico |
|---|---:|---:|---:|---:|
| hielo continental tropical | compatible | compatible | compatible con restricciones | compatible |
| glaciación multimillonaria | compatible | compatible | depende de estabilidad | compatible por ciclos |
| producción/refugios | requiere oásis | luz subhielo | agua abierta | ventanas/oásis |
| ciclos sedimentarios | fase tardía/orbital | esperables | esperables | predicción central |
| salida rápida/caps | `CO₂` alto/umbral difícil | umbral menor | umbral menor | múltiples salidas |
| Sturtiana `~56 Myr` | problema de duración | sumideros necesarios | sumideros necesarios | motivación principal |

La tabla no es una votación. Un mismo episodio pudo cambiar de geometría y distintas cuencas registran fases diferentes.

## Dependencias compartidas

```text
correlación estratigráfica
   ├─ duración
   ├─ sincronía
   ├─ asignación de paleopolos
   └─ lectura de carbonatos de capa

paleogeografía/modelos
   ├─ umbral de entrada
   ├─ cobertura del océano
   ├─ refugios
   └─ umbral de salida
```

Cuatro conclusiones no son cuatro réplicas si heredan la misma correlación o el mismo campo climático.

## Falsadores por nivel

| Nivel | Hallazgo que movería el balance |
|---|---|
| glacial local | génesis no glacial que explique facies y deformación |
| paleolatitud | remagnetización/compactación demostrada sin polos sustitutos |
| sincronía | edades incompatibles más allá de incertidumbres e hiatos |
| hard Snowball | agua abierta extensa, fechada y continua incompatible con sus variantes |
| ciclos Sturtianos | sección continua que muestre hielo persistente o fases cálidas repetidas |
| salida por `CO₂` | proxies y balances que excluyan acumulación suficiente |
| refugios | reubicación de fósiles/señales fuera del intervalo glacial |

## Resultado delimitado

```text
ROCA:       procesos glaciales en cuencas concretas                 B
RELOJ:      Sturtiana ~717–659; Marinoana ~639–635.2 Ma            B-COND
BRÚJULA:    hielo continental/marino en paleotrópicos              B
PLANETA:    estado de albedo alto y alcance casi global            B-COND
OCÉANO:     fracción abierta, espesor y continuidad                D
CAUSAS:     entrada, salida y relación con evolución               D-E
```

La confianza cae al aumentar la escala porque cada paso añade un puente. El logro de Snowball Earth no fue demostrar una imagen blanca; fue hacer auditables esos puentes.

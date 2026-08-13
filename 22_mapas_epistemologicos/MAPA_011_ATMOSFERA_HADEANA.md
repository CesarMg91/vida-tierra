---
id: MAP-HADEAN-ATMOSPHERE-001
investigacion: INV-HADEAN-ATMOSPHERE-001
estado: AUDITADO
ultima_revision: 2026-08-10
---

# Mapa 011 — Atmósfera hadeana

## Pregunta central

¿Cómo pasar de minerales y rocas posteriores a una atmósfera sin convertir modelos en muestras de aire?

## Cadena principal

```text
ZIRCON HADEANO
  ├─ U–Pb + textura → edad/dominio
  ├─ Ce o U-XANES  → estado de valencia
  └─ T + calibración → fO₂ del fundido parental
                           ↓ inventario + solubilidad + P–T
                  GAS DESGASIFICADO POSIBLE
                           ↓ condensación + reacción + impacto + escape
                    ATMÓSFERA ACUMULADA
                           ↓ archivos posteriores
       Xe ~3.3 Ga | S-MIF ~3.77 Ga | presión 3.5–2.7 Ga
```

El archivo mineral se acerca al Hadeano pero está lejos del aire. Los archivos atmosféricos se acercan al aire pero son más jóvenes.

## Matriz de variables

| Ruta | Inventario | Especiación | Presión | O₂ libre | Evolución |
|---|---:|---:|---:|---:|---:|
| Ce/U en zircon | — | indirecta | — | — | local |
| océano de magma | entrada | modelada | modelada | no acumulación | modelada |
| D/H | H condicionado | H₂/H₂O | cota de H₂ | — | escape |
| Xe arqueano | noble | Xe | — | — | fuerte |
| S-MIF | S atmosférico | fotoquímica | — | fuerte | límite temporal |
| N/Ar y vesículas | parcial | N₂ | fuerte | — | época posterior |

## Las cuatro fronteras

```text
fO₂ del magma ≠ porcentaje de O₂ atmosférico
gas liberado ≠ aire retenido
presión parcial ≠ presión total
Arcaico medido ≠ Hadeano extrapolado
```

## Dependencias compartidas

```text
temperatura + calibración ───────┐
preservación de dominio ─────────┤→ fO₂ de zircon
composición del fundido ─────────┘

inventario H–C–N–S ─────────────┐
solubilidades + equilibrio ──────┤→ gas de océano de magma
presión + profundidad + redox ───┘

Sol joven + H disponible ────────┐
impactos + gravedad ──────────────┤→ retención y escape
océano + corteza reactiva ────────┘
```

Dos modelos no son independientes si comparten el mismo inventario, las mismas solubilidades o la misma historia de escape.

## Jerarquía de claims

| Claim | Confianza | Qué falta |
|---|---:|---|
| algunos magmas estaban cerca de `FMQ` | B-COND | representatividad global |
| redox cambia la familia de gas | B-COND | inventario y P–T históricos |
| aire cambió por impactos/escape | C | pesos y cronología |
| anoxia cerca de `3.77 Ga` | B-COND | traducción exacta a umbral de O₂ |
| presión arqueana acotada | B-COND | continuidad hacia el Hadeano |
| mezcla/presión hadeanas exactas | E | muestra directa o varios proxies coetáneos |

## Falsadores prioritarios

1. recalibrar Ce y U de dominios ígneos hacia condiciones extremadamente reducidas;
2. mostrar que el gas es poco sensible a redox en composiciones relevantes;
3. reasignar Xe a contaminación o proceso local;
4. eliminar el origen atmosférico del S-MIF de Isua;
5. revisar inclusiones/vesículas hasta invalidar sus presiones;
6. hallar un archivo hadeano coetáneo que mida composición y presión por una ruta directa.

## Preguntas abiertas enlazadas

- `OPEN-HADEAN-ATMOSPHERE-COMPOSITION-001`: mezcla tras cada reinicio;
- `OPEN-HADEAN-ATMOSPHERE-PRESSURE-001`: masa y presiones parciales;
- `OPEN-HADEAN-ATMOSPHERE-ESCAPE-001`: H/Xe y Sol joven;
- `OPEN-HADEAN-ATMOSPHERE-O2-001`: continuidad entre Hadeano y S-MIF eoarcaico.

## Regla editorial

Nunca reemplazar:

```text
“el zircon restringe el redox del fundido, que condiciona gases posibles”
```

por:

```text
“el zircon midió una atmósfera oxigenada”
```

La primera conserva objeto, variable y puente. La segunda confunde mineral, gas y aire.

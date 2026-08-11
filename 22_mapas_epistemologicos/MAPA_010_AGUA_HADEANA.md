---
id: MAP-HADEAN-WATER-001
investigacion: INV-HADEAN-WATER-001
estado: AUDITADO
ultima_revision: 2026-08-10
---

# Mapa 010 — Agua hadeana

## Pregunta central

¿Qué parte de “había agua líquida” está en los datos de oxígeno y qué parte se añade mediante petrología, cronología y modelos?

## Cadena principal

```text
MICRODOMINIO DE ZIRCON
  ├─ U–Pb → edad de cristalización
  ├─ CL/Raman/EBSD/OH → preservación
  ├─ δ18O → composición del zircon
  └─ REE/Th/U → origen magmático
               ↓ fraccionamiento zircon–magma
COMPOSICIÓN DEL MAGMA
               ↓ mezcla / fusión / asimilación
ROCA FUENTE ALTERADA
               ↓ intercambio a baja temperatura
AGUA LÍQUIDA CERCA DE LA SUPERFICIE
               ↓ extrapolaciones adicionales
¿HIDROSFERA? → ¿OCÉANO GLOBAL? → ¿CLIMA ESTABLE? → ¿HABITABILIDAD?
```

Cada flecha necesita supuestos nuevos. La confianza no atraviesa toda la cadena sin degradarse.

## Objetos y preguntas

| Archivo | Pregunta que responde mejor | Límite |
|---|---|---|
| Jack Hills, `δ18O` alto | ¿hubo fuente alterada a baja temperatura antes del magma? | perdió roca natal y escala |
| Jack Hills, `δ18O` bajo | ¿interactuó agua meteórica con corteza somera? | modelo de mezcla regional |
| Acasta | ¿una roca preservada incorporó corteza hidrotermal? | metamorfismo e hidratación |
| Nuvvuagittuq | ¿roca máfica intercambió O/H con una hidrosfera? | edad/protolito debatidos |
| modelos planetarios | ¿puede condensarse y mantenerse agua pronto? | plausibilidad, no observación |

## Dependencias compartidas

```text
estándar VSMOW ───────────┐
campo de zircon mantélico ├→ interpretación de δ18O
fraccionamiento mineral ──┤
control de alteración ─────┘

edad U–Pb + textura → co-localización temporal
petrología moderna  → traducción de magma a fuente
modelo de mezcla    → agua marina / meteórica
```

Dos artículos con distintos granos no son independientes si usan el mismo estándar, calibración y traducción petrológica.

## Jerarquía de claims

| Claim | Confianza | Qué falta |
|---|---:|---|
| dominios magmáticos tienen O fuera del campo del manto | B | representatividad global |
| fuente interactuó con agua líquida somera | C | ruta petrológica única y fecha directa |
| existía alguna hidrosfera hacia `4.3 Ga` | C | extensión y continuidad |
| operaba agua meteórica hacia `4.0 Ga` | C | replicación espacial |
| había océano global semejante al moderno | D | volumen, conexión, química |
| clima estable y habitable | E | temperatura, atmósfera, duración |

## Falsadores prioritarios

1. microanálisis replicados que reasignen los dominios anómalos a grietas, mezcla o hidratación tardía;
2. calibraciones que reproduzcan la distribución con magma mantélico cerrado;
3. poblaciones externas a Jack Hills sin señal supracrustal bajo el mismo protocolo;
4. geocronología de NGB que sitúe el fluido en eventos mucho más jóvenes;
5. modelos de fuente que separen agua líquida de la anomalía isotópica.

## Regla editorial

Nunca reemplazar:

```text
“material fuente alterado por agua antes de cristalizar el zircon”
```

por:

```text
“el zircon demuestra un océano global en esa fecha”
```

La primera frase conserva objeto, orden temporal y mecanismo. La segunda borra los tres.

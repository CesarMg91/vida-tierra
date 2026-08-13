---
id: MAP-HADEAN-IMPACTS-001
investigacion: INV-HADEAN-IMPACTS-001
estado: AUDITADO
ultima_revision: 2026-08-10
---

# Mapa 012 — Impactos hadeanos

## Pregunta central

¿Cómo pasar de cráteres y edades de muestras a una curva de impactos sin contar repetidamente el mismo evento ni convertir una simulación en observación?

## Cadena principal

```text
MUESTRA LUNAR
  ├─ textura + petrología ──→ ¿ígnea, fundido o reinicio?
  ├─ U–Pb / Pb–Pb / Ar–Ar ─→ edad del sistema
  └─ composición + mapa ────→ procedencia probable
                                  ↓
                           EVENTO ASIGNADO
                                  ↓ población + supervivencia
                        DISTRIBUCIÓN DE EVENTOS
                                  ↓ área + producción + tiempo
                            FLUJO DE IMPACTOS
                                  ↓ escala dinámica y física
                         EFECTO SOBRE LA TIERRA
```

Cada flecha puede fallar. Una edad precisa al comienzo no hace exacta la curva final.

## Cuatro archivos complementarios

| Archivo | Observa | Puente | Riesgo dominante |
|---|---|---|---|
| muestra | mineral/roca fechable | cierre + procedencia | reinicio e Imbrium |
| cráter | morfología y superposición | producción + ancla | acumulación/saturación |
| dinámica | órbitas calculadas | condiciones iniciales | no unicidad |
| esférula | ejecta terrestre | escalado de impacto | preservación incompleta |

## La función de selección

```text
eventos reales
  × fundido fechable
  × supervivencia
  × transporte
  × muestreo
  × clasificación
  × respuesta isotópica
  = edades recuperadas
```

Un histograma de edades sólo se parece a un histograma de impactos si todos esos factores son conocidos o despreciables.

## Tres familias de historia

```text
PICO TERMINAL       tasa baja ────╭▲╮── declive
COLA DE ACRECIÓN    tasa alta ╲╲╲╲╲╲╲╲──
HÍBRIDA             tasa alta ╲╲╭▲╮╲╲╲──
```

La evidencia actual favorece cola o híbrido; no distingue de forma única la amplitud de un repunte.

## Matriz de independencia

| Coincidencia | ¿Independiente? | Por qué |
|---|---|---|
| varias brechas Apollo `~3.9 Ga` | parcial | pueden compartir Imbrium |
| U–Pb y Rb–Sr en una roca | parcial | distinta física, mismo evento térmico |
| crater count + edad de modelo | no completa | la curva usa anclas radiométricas |
| NWA 2995 + Chang’e‑6 | alta en muestra | procedencia/evento asignados de modo distinto |
| Luna + esférulas terrestres | alta en archivo | épocas no idénticas y escalado requerido |
| dos modelos dinámicos | parcial | pueden compartir poblaciones y calibraciones |

## South Pole–Aitken

```text
NWA 2995
  composición compatible + varios cronómetros
  → 4.32–4.33 Ga como SPA (C)

Chang’e‑6
  sitio dentro de SPA + noritas de impacto retrabajadas
  → 4.247 ± 0.005 Ga como SPA (B-PROV)

zircones Apollo
  ID-TIMS + Hf/trazas
  → evento magmático 4.338–4.334 Ga, quizá gran impacto (C)
```

No deben promediarse: la discrepancia está en la asignación muestra–evento.

## Jerarquía de claims

| Claim | Confianza | Qué falta |
|---|---:|---|
| bombardeo temprano intenso/declinante | B-COND | forma fina y normalización |
| cuencas anteriores a `4.0 Ga` | B-COND | identidades de todas las muestras |
| sesgo de Imbrium | B-COND | fracción de cada colección |
| pico terminal único a `~3.9 Ga` | D | prueba independiente y única |
| repunte ancho cerca de `4.1 Ga` | C-D | anclas y fuente dinámica |
| curva terrestre exacta | D-E | escala, archivo y efectos |

## Dependencias compartidas

```text
cronómetros ─────────→ constantes + cierre + alteración
procedencia ─────────→ cartografía + geoquímica + transporte
cráteres ────────────→ selección + saturación + secundarios
dinámica ────────────→ población inicial + colisiones + migración
Tierra/Luna ─────────→ velocidades + enfoque + atmósfera + océano
```

## Falsadores prioritarios

1. muestras in situ de cuencas independientes que reproduzcan sólo un intervalo estrecho;
2. procedencia que demuestre independencia de las brechas Apollo fechadas;
3. cronómetros múltiples que no puedan generarse bajo una cola decreciente;
4. lámina de SPA identificada geológicamente y fechada de manera concordante;
5. anclas antiguas que conviertan conteos en una curva de flujo discriminante;
6. archivo terrestre hadeano que mida impactos sin depender de escala lunar.

## Preguntas abiertas enlazadas

- `OPEN-HADEAN-IMPACT-FLUX-001`: forma y amplitud de la curva;
- `OPEN-LUNAR-SPA-AGE-001`: edad e identidad de SPA;
- `OPEN-LUNAR-IMBRIUM-PROVENANCE-001`: independencia de Apollo;
- `OPEN-IMPACT-SOURCE-001`: poblaciones dinámicas;
- `OPEN-IMPACT-EARTH-EFFECTS-001`: escala y habitabilidad terrestre.

## Regla editorial

Nunca reemplazar:

```text
“una muestra registra un cierre/reinicio asignado condicionalmente a un impacto”
```

por:

```text
“cada edad cuenta un impacto y el histograma mide el flujo”
```

La primera conserva la función de respuesta. La segunda la elimina.

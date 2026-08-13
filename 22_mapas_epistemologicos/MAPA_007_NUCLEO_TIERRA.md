# Mapa 007 — Núcleo terrestre

**Investigación:** `INV-EARTH-CORE-001`  
**Regla:** una frontera sísmica, un estado físico, una composición y una edad son claims diferentes.

## Pregunta

¿Cómo se transforma movimiento del suelo, gravedad, una roca del manto o una aleación comprimida en conocimiento sobre una región inaccesible a 2900 km de profundidad?

## Grafo principal

```text
SISMÓMETRO
movimiento(t), polarización, estación
        ↓ respuesta + reloj + localización
llegadas P/S, tiempos diferenciales, amplitudes
        ↓ elasticidad + refracción + geometría
ramas PKP/SKS/PKIKP/PKiKP + sombras
        ↓ inversión radial + contraste
CMB ≈ 3480 km de radio; ICB ≈ 1221.5 km
        ↓ μ≈0 externo / μ>0 interno
núcleo externo líquido + núcleo interno sólido

MODOS NORMALES ─┐
MASA/GRAVEDAD ──┼→ kernels + I/MR²=0.3308 → ρ(r) compatible
ROTACIÓN ───────┘

MANTO + METEORITOS ──→ balance siderófilo/litófilo ─┐
ALEACIONES A P–T ─────→ ecuaciones de estado, Vp, ρ ├→ Fe–Ni + ligeros
TEORÍA AB INITIO ─────→ fase y potencial químico ───┘

Hf–W + partición + M(t) + equilibrio
        ↓
diferenciación metal–silicato multietapa temprana

PALEOMAGNETISMO + CONDUCTIVIDAD + FLUJO CMB
        ↓ modelo térmico
edad de nucleación del núcleo interno —todavía abierta—
```

## Matriz señal–puente–claim

| Señal | Magnitud | Puente | Claim | Borde |
|---|---|---|---|---|
| ramas P y sombra | tiempo vs distancia | Snell/ecuación de onda | región central distinta | fuente + Tierra 3-D |
| `PKP`, `PcP`, `ScS` | diferenciales | reflexión/refracción | radio CMB | heterogeneidad D″ |
| `PKIKP`, `PKiKP` | tiempo/amplitud | frontera interna | núcleo interno | fase débil + ruido |
| ausencia S transmitida | `Vs≈0` | `Vs=√(μ/ρ)` | externo líquido | conversiones existen |
| modos normales | frecuencia/splitting | elasticidad global | densidad/rigidez | kernels no locales |
| `I/MR²=0.3308` | integral de masa | rotación/gravedad | masa centralizada | no da química única |
| manto empobrecido | abundancias | partición/balance | metal retirado | BSE reconstruida |
| aleaciones Fe | `ρ`, `Vp`, fase | ecuación de estado | Fe-rich + ligeros | P–T y mezcla degeneradas |
| `182W` | razón isotópica | decaimiento + Hf/W | segregación temprana | `M(t)` + equilibrio |
| paleointensidad | remanencia | dínamo + historia térmica | nucleación interna | alteración + conductividad |

## Cuatro capas de certeza

| Capa | Formulación máxima defendible | Confianza |
|---|---|---|
| geometría | CMB e ICB globales con radios aproximados | A |
| estado | externo líquido, interno sólido | A |
| composición | Fe dominante, ~5 % Ni, elementos ligeros | B-COND |
| historia | segregación multietapa temprana; nucleación interna posterior | B-COND / C-D en edad fina |

## Dependencias compartidas

| Líneas | Dependencia común | Riesgo de falso voto doble |
|---|---|---|
| tiempo de viaje + PREM | modelo de fuente y referencia radial | alto |
| modos + densidad PREM | parametrización y elasticidad | alto |
| densidad sísmica + mineralogía | objetivo `ρ,V` de referencia | medio |
| manto + Hf–W | partición metal–silicato | medio |
| dínamo + edad interna | conductividad y flujo de calor | alto |
| meteoritos + balance | composición planetaria inicial | medio |

## Dos relojes no intercambiables

```text
4.567 Ga ───────────────────────────────────────────── hoy
   │
   ├─ acreción + segregación repetida de metal
   │   archivo: Hf–W, siderófilos, manto, modelos
   │
   └──────────────────── cristalización del núcleo interno ─→ crecimiento
                         archivo: térmica + paleomagnetismo
```

“Edad del núcleo” debe declarar cuál de estas historias pretende fechar.

## Adversarios por nivel

| Nivel | Alternativa fuerte | Debe reproducir |
|---|---|---|
| geometría | gradiente sin discontinuidad | ramas, sombras, reflexiones, modos |
| estado | sólido con corte casi nulo | `Vs`, conversiones, dínamo y disipación |
| composición | núcleo no Fe-rich | abundancias, densidad, velocidad, conductividad |
| tiempo | segregación única instantánea | Hf–W + suite del manto + impactos |
| evolución | núcleo interno muy antiguo | radio actual + energía + entropía + campo |

## Falsadores operativos

- una Tierra sin frontera que ajuste mejor todos los datasets globales;
- propagación de corte global, repetible e inequívoca en el núcleo externo;
- una composición no metálica que satisfaga física y balance sin ajustes especiales;
- una receta ligera que falle al predecir simultáneamente densidad y velocidad;
- un modelo Hf–W que ajuste W pero falle otros siderófilos o planetas;
- paleointensidades antiguas replicadas que contradigan la transición térmica propuesta.

## Regla de lectura

El mapa no otorga independencia por contar flechas. La existencia y estado del núcleo se sostienen por física global; la composición se obtiene al exigir consistencia entre archivos; la edad se expresa como intervalo condicionado. Cada claim conserva su propia confianza.

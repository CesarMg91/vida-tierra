# Mapa epistemológico 002 — Historia y edad del universo

Este mapa separa señales, principios y conclusiones. Una flecha significa “aporta una premisa a”; no convierte al nodo de origen en una medición directa del nodo final.

![Versión editorial del mapa](../assets/visuales/mapa-investigacion-002.svg)

```mermaid
flowchart TD
    SPEC["Líneas espectrales de galaxias"] --> Z["Corrimiento z"]
    DIST["Paralaje, Cefeidas y SN cercanas"] --> D["Distancias calibradas"]
    Z --> HREL["Relación distancia–corrimiento"]
    D --> HREL

    ANT["Potencia de antena"] --> CMB0["Exceso de microondas"]
    FIRAS["Radiancia por frecuencia"] --> CMBB["Cuerpo negro ~2.7 K"]
    MAP["Diferencias por dirección/frecuencia"] --> ANISO["Anisotropías CMB"]

    ABS["Líneas H I y D I"] --> DH["D/H primordial"]
    SNPH["Flujo, color y curva de SN Ia"] --> SND["Distancia–z de supernovas"]
    CAT["Posiciones y z de galaxias"] --> BAO["Pico acústico estadístico"]
    STAR["Color, luminosidad y composición"] --> GC["Edad de cúmulos"]

    HREL --> FLRW["Geometría FLRW + relatividad"]
    CMB0 --> HOT["Hipótesis de fase caliente"]
    CMBB --> HOT
    DH --> BBN["Red nuclear + expansión temprana"]
    ANISO --> FIT["Ajuste de perturbaciones y parámetros"]
    SND --> HZ["Historia H(z)"]
    BAO --> HZ
    FLRW --> HZ

    HOT --> HOTCLAIM["Fase temprana caliente y densa — A"]
    BBN --> HOTCLAIM
    FIT --> HOTCLAIM
    HZ --> EXP["Expansión y aceleración tardía — A/B-COND"]
    FIT --> AGE["Integrar t₀ = ∫ dz/[(1+z)H(z)]"]
    HZ --> AGE
    AGE --> T0["Edad ≈13.8 Ga en ΛCDM — B-COND"]
    GC --> CHECK["Límite estelar externo"]
    CHECK --> T0

    CAL["Calibraciones y primeros planos"] -. condicionan .-> FIRAS
    CAL -. condicionan .-> MAP
    CAL -. condicionan .-> D
    MODEL["Contenido, curvatura, priors"] -. condicionan .-> FIT
    MODEL -. condicionan .-> AGE
    SHARED["Física temprana compartida"] -. limita independencia .-> BBN
    SHARED -. limita independencia .-> BAO
    SHARED -. limita independencia .-> FIT

    T0 -. no implica .-> ORIGIN["Creación absoluta / singularidad física — D–E"]
```

## Nodos de mayor dependencia

| Nodo | Por qué es cuello de botella | Cómo se audita |
|---|---|---|
| escala de distancia | conecta ángulos/flujos con geometría | anclas independientes, cruces entre peldaños y residuos |
| separación de primeros planos | afecta espectro y mapas CMB | multibanda, máscaras, simulaciones e instrumentos distintos |
| horizonte sonoro | calibra BAO y enlaza época temprana/tardía | CMB, BBN, modelos alternativos y consistencia de `r_d` |
| historia `H(z)` | convierte tasa actual en edad integrada | SN, BAO, cronómetros, lentes, redshift drift futuro |
| familia de modelos | puede estrechar artificialmente `t0` | publicar priors, extensiones, evidencia y sensibilidad |
| física estelar | controla el límite externo de edad | paralaje, metalicidad, He, convección y códigos diferentes |

## Dependencia por dimensiones

| Línea | Muestra | Instrumento | Principio | Modelo compartido |
|---|---|---|---|---|
| CMB espectral | cielo completo | FIRAS | termodinámica | expansión adiabática |
| CMB anisotrópico | mismo cielo | radiómetros/bolómetros | plasma + gravedad | perturbaciones/FLRW |
| D/H | nubes de alto `z` | espectrógrafo echelle | atómica+nuclear | BBN/expansión |
| SN Ia | explosiones estelares | fotometría/espectros | estandarización | FLRW/`H(z)` |
| BAO | millones de galaxias | espectrógrafos de sondeo | correlación acústica | horizonte sonoro/FLRW |
| cúmulos | estrellas galácticas | fotometría/paralaje | evolución estelar | tiempo de formación, no `ΛCDM` completo |

## Rutas de falsación

- `F1`: un primer plano común reproduce espectro y anisotropías sin componente cósmico.
- `F2`: una geometría no expansiva explica también dilatación temporal, BAO, CMB y brillo.
- `F3`: D/H y otras abundancias precisas rompen de forma coherente la historia térmica.
- `F4`: `H(z)` medido por sondas independientes no integra a la edad CMB.
- `F5`: objetos estelares inequívocos exceden la edad máxima del modelo.
- `F6`: una extensión necesaria para resolver tensiones desplaza materialmente `t0`.

## Confianza por salida

| Salida | Nivel |
|---|---|
| existencia del CMB casi térmico | A |
| fase temprana caliente y densa | A |
| expansión cósmica | A-COND |
| aceleración tardía | B-COND |
| edad ~13.8 Ga en `ΛCDM` base | B-COND |
| causa de la tensión de Hubble | D |
| naturaleza de energía oscura | D |
| origen absoluto o mecanismo del borde | E |

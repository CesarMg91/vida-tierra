# Mapa epistemológico 001 — Edad y Tierra temprana

Este grafo muestra dependencias, no una secuencia histórica literal. Una flecha significa “aporta una premisa a”.

```mermaid
flowchart TD
    A["Actividad de 235U y 238U"] --> L["Constantes de decaimiento"]
    M["Meteoritos y CAIs"] --> MS["Razones U/Pb y Pb/Pb"]
    Z["Zircones terrestres y lunares"] --> MS
    L --> AGE["Edades isotópicas"]
    MS --> AGE
    CERR["Modelo de cierre, Pb inicial y correcciones"] --> AGE

    AGE --> CAI["CAIs: 4567.30 ± 0.16 Ma"]
    AGE --> PB["Evolución Pb meteoritos–Tierra"]
    AGE --> ZH["Zircon terrestre: 4404 ± 8 Ma"]
    AGE --> ZL["Corteza lunar temprana"]

    CAI --> ZERO["Tiempo cero meteórico"]
    PB --> EF["Formación terrestre ~4.54 Ga"]
    ZERO --> EF

    W["182Hf–182W y partición metal–silicato"] --> ACC["Acreción y núcleo tempranos"]
    ZERO --> ACC
    ACC --> EF

    ZH --> CR["Corteza mineralizada por 4.404 Ga"]
    O["δ18O en zircon"] --> WATER["Fuente alterada por agua"]
    CR --> WATER

    SM["Isócronas Sm–Nd Nuvvuagittuq"] --> NGB["Intrusiones ~4.16 Ga"]
    FIELD["Relaciones de corte"] --> NGB

    SEM["Definición de 'formación'"] -. condiciona .-> EF
    MODEL["Modelo de acreción"] -. condiciona .-> ACC
    PRES["Sesgo de preservación"] -. condiciona .-> CR
    REP["Replicación independiente pendiente"] -. limita .-> NGB
```

## Nodos de mayor dependencia

| Nodo | Por qué es cuello de botella | Cómo se audita |
|---|---|---|
| constantes U | afectan sistemáticamente U–Pb/Pb–Pb | metrología nuclear y propagación de covarianza |
| condición inicial/cierre | convierte razones en edades | isócronas, concordia, dominios, petrología |
| parentesco meteoritos–Tierra | conecta reloj extraterrestre con el planeta | cosmoquímica, dinámica y cronómetros distintos |
| significado de “formación” | convierte proceso en número único | publicar cronología de hitos |
| preservación hadeana | restringe el archivo observable | muestreo, procedencia y modelos de reciclaje |
| partición/equilibrio Hf–W | convierte anomalía en curva de acreción | sensibilidad a escenarios y datos experimentales |

## Rutas de falsación

- `F1`: constantes o calibraciones revisadas desplazan coherentemente las edades.
- `F2`: discordancia/textura muestra que el evento fechado no es primario.
- `F3`: un cronómetro materialmente independiente converge fuera del intervalo.
- `F4`: una alternativa explica las isócronas con mezcla sin evento común.
- `F5`: nueva muestra con procedencia segura contradice el orden temporal.

## Confianza por salida

| Salida | Nivel |
|---|---|
| Tierra de alrededor de 4.5 Ga | A |
| 4.54 Ga como valor operacional | B |
| acreción/diferenciación en decenas de Ma | B-COND |
| fecha exacta del impacto lunar | C |
| zircon terrestre a 4404 ± 8 Ma | B |
| agua superficial interpretada hacia 4.4 Ga | C |
| encajantes Nuvvuagittuq hadeanas | C-PROV |

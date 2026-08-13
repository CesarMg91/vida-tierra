---
id: INV-PROT-GOE-001
titulo: "¿Cómo sabemos que aumentó el oxígeno?"
estado: AUDITADO
ultima_revision: 2026-08-11
claims:
  - CLAIM-GOE-ATMOSPHERE-001
  - CLAIM-GOE-PROTRACTED-001
  - CLAIM-GOE-SMIF-001
  - CLAIM-GOE-WEATHERING-001
  - CLAIM-GOE-OCEAN-001
  - CLAIM-GOE-LEVEL-001
  - CLAIM-GOE-GLACIATION-001
  - CLAIM-GOE-CAUSE-001
fuentes:
  - SRC-FARQUHAR-2000
  - SRC-BEKKER-2004
  - SRC-LUO-2016
  - SRC-GUMSLEY-2017
  - SRC-PHILIPPOT-2018
  - SRC-RUIZ-2024
  - SRC-GOTO-2025
  - SRC-HEARD-2025
  - SRC-CROCKFORD-2026
---

# Investigación 015 — ¿Cómo sabemos que aumentó el oxígeno?

![Portada conceptual de la Gran Oxidación](../assets/visuales/hero-gran-oxidacion.png)

> **Portada conceptual:** una cuenca paleoproterozoica conecta atmósfera, meteorización continental, plataforma somera y fondo anóxico con el laboratorio actual. Es una síntesis conceptual, no una reconstrucción literal de una localidad ni un mapa de concentración.

![Mapa de evidencia de la Gran Oxidación](../assets/visuales/mapa-investigacion-015.svg)

![Cadena de proxy a atmósfera](../assets/visuales/de-proxy-a-atmosfera.svg)

## Respuesta breve, con sus condiciones

Sabemos que el `O₂` dejó de ser sólo un producto local y comenzó a persistir en la atmósfera porque **varios archivos cambiaron de régimen** durante el Paleoproterozoico temprano. El más diagnóstico es la desaparición de grandes anomalías de fraccionamiento independiente de masa del azufre (`S‑MIF`). Esas anomalías requieren una atmósfera suficientemente pobre en `O₂` y ozono para que productos fotoquímicos distintos lleguen por separado a la superficie. Cuando el aire cruza un umbral oxidante, esa ruta deja de producir o preservar el patrón (`SRC-FARQUHAR-2000`, `SRC-LUO-2016`).

Pero no existe un instante global que todos los sedimentos registren a la vez. La pérdida inicial de `S‑MIF`, sus reapariciones y su última presencia abarcan aproximadamente `2.50–2.32 Ga`, con cronologías y lecturas distintas entre Fennoscandia, Sudáfrica, Canadá y Australia. Algunos registros admiten oscilaciones atmosféricas; otros conservan azufre antiguo reciclado desde continentes. Por eso usamos `~2.45–2.32 Ga` como **intervalo operacional de transición principal**, no como duración medida de un solo pulso (`SRC-GUMSLEY-2017`, `SRC-PHILIPPOT-2018`, `SRC-GOTO-2025`).

Hacia `2.32 Ga`, la convergencia se vuelve especialmente fuerte. En Sudáfrica desaparece el `S‑MIF` grande en una sucesión continua y fechada; en los estratos inmediatamente superiores, isótopos de V y Tl indican expansión de fondos oxigenados en plataformas someras. El océano profundo, sin embargo, pudo seguir casi completamente anóxico (`SRC-BEKKER-2004`, `SRC-LUO-2016`, `SRC-HEARD-2025`).

```text
producción local de O₂ antes de 2.87 Ga        B-COND
inicio de la transición atmosférica ~2.50–2.43 Ga  C↑
atmósfera por encima del umbral S-MIF ~2.32 Ga     B-COND
oxigenación persistente de plataformas ~2.32–2.26 Ga  B-COND
océano profundo globalmente oxigenado entonces     E
porcentaje atmosférico exacto durante la transición D
causa única de la Gran Oxidación                    D-E
```

La respuesta correcta no es «la Tierra pasó de 0 a 21 % a 2.4 Ga». Es ésta:

```text
oasis locales
      ↓
umbral atmosférico cruzado, quizá varias veces
      ↓
meteorización oxidativa y plataformas oxigenadas
      ↓
océano profundo todavía estratificado y anóxico
```

## 0. Seis magnitudes que no deben colapsarse

| Magnitud | Pregunta | Archivo pertinente | Error si se hereda |
|---|---|---|---|
| producción bruta | ¿se libera `O₂` al oxidar agua? | proxies locales y biología | equivale a acumulación |
| `O₂` local | ¿un oasis oxidó agua o minerales? | Ce, Mn, Fe, Mo | representa el aire global |
| umbral atmosférico | ¿el aire alteró la fotoquímica de S? | `S‑MIF` | mide un porcentaje exacto |
| meteorización continental | ¿el aire oxidó minerales expuestos? | pirita/uraninita detríticas, Mo, S, paleosuelos | toda ausencia es atmosférica |
| oxigenación marina | ¿qué parte del mar contenía `O₂`? | Fe, V, Tl, Mo/U y facies | plataforma = océano profundo |
| amplitud de `pO₂` | ¿qué fracción del nivel actual había? | proxy calibrado + modelo | una cota = concentración real |

`PAL` significa *present atmospheric level*: una fracción del nivel atmosférico actual, no porcentaje en volumen. `10⁻⁴ PAL` es diezmilésima parte del nivel moderno, no `0.01 %` de la mezcla de gases sin una conversión explícita.

## 1. El principio de `S‑MIF`

Las reacciones fotoquímicas normales suelen repartir isótopos según sus diferencias de masa. En una atmósfera anóxica, la radiación ultravioleta que actúa sobre `SO₂` volcánico puede producir familias de azufre que no siguen esa regla simple. La desviación se registra como `Δ³³S` y `Δ³⁶S` distintos de cero (`SRC-FARQUHAR-2000`).

Para que grandes señales opuestas sobrevivan se requieren tres pasos:

```text
SO₂ volcánico
   ↓ fotólisis UV bajo aire pobre en O₂/O₃
productos de S con firmas distintas
   ↓ transporte y depósito sin homogeneización completa
sulfuro/sulfato sedimentario con S-MIF
```

Al acumularse `O₂`, se forma ozono, cambia la profundidad de penetración UV y se intensifica el reciclaje oxidativo del azufre. Por encima de un umbral, las anomalías grandes dejan de generarse o preservarse.

El claim máximo es un **cambio de régimen atmosférico**. El umbral numérico no es una constante universal: modelos publicados lo sitúan aproximadamente entre `10⁻⁷` y `10⁻⁵ PAL`, y trabajos sedimentarios recientes usan incluso cotas operacionales distintas. Composición de gases, nubes fotoquímicas, longitud de onda, metano, tasa volcánica y preservación modifican la traducción (`SRC-LUO-2016`, `SRC-CROCKFORD-2026`).

```text
S-MIF grande presente  → aire funcionalmente anóxico: B-COND
S-MIF grande ausente   → compatible con aire sobre el umbral: B-COND
S-MIF = medidor continuo de pO₂ → falso
```

## 2. Fechar la transición: el caso sudafricano

Bekker et al. analizaron pirita en el límite Rooihoogte–Timeball Hill del Supergrupo Transvaal y mostraron que el aumento atmosférico había ocurrido antes de `2316 ± 7 Ma` (`SRC-BEKKER-2004`). Ese resultado convirtió una transición antes acotada de forma muy amplia en un límite radiométrico verificable.

Luo et al. midieron perfiles continuos de múltiples isótopos de S en tres testigos de perforación de la misma cuenca. Observaron el paso desde `S‑MIF` grande a fraccionamiento dependiente de masa y lo interpretaron como una oxigenación rápida, de `1–10 Ma`, alrededor de `2.33 Ga` (`SRC-LUO-2016`).

La precisión es local y condicional:

- los testigos reducen huecos de afloramiento y meteorización moderna;
- la edad radiométrica amarra la sucesión, no cada grano individual;
- la estimación `1–10 Ma` depende de tasa de sedimentación y correlación;
- la transición fotoquímica puede ser rápida dentro de un proceso planetario mucho más largo.

Así, `2.33–2.32 Ga` es una excelente edad para el **cambio registrado en esa cuenca**, pero no cancela indicios de oxígeno previo ni obliga a que Australia y Canadá agotaran al mismo tiempo sus depósitos de S antiguo.

## 3. ¿Evento, oscilaciones o memoria sedimentaria?

Gumsley et al. fecharon magmatismo de Ongeluk a `2426 ± 3 Ma`, reordenaron correlaciones entre glaciaciones y señales redox y propusieron que el `O₂` cruzó repetidamente el umbral `S‑MIF` antes de una oxigenación irreversible (`SRC-GUMSLEY-2017`).

Philippot et al. combinaron isótopos de S, U–Pb y Re–Os en testigos de Australia occidental. Encontraron `S‑MIF` desde `~2.45 Ga` hasta después de `2.31 Ga`, interrumpido por episodios de desaparición. Su interpretación preferida no exige que el aire regresara siempre a anoxia: la meteorización podía liberar `S‑MIF` almacenado en corteza arcaica mucho después de iniciada la oxigenación (`SRC-PHILIPPOT-2018`).

Éstas son hipótesis parcialmente rivales:

| Lectura | Predicción | Cuello de botella |
|---|---|---|
| oscilación atmosférica | `S‑MIF` reaparece junto con otros proxies de aire muy reducido | correlación temporal entre cuencas |
| memoria crustal | `S‑MIF` tardío depende de procedencia y cuenca de drenaje | identificar y agotar la fuente antigua |
| combinación | el aire fluctúa y el sedimento filtra/retrasa la señal | demasiados grados de libertad |

La conclusión robusta compartida es más estrecha: la Gran Oxidación fue una **transición prolongada y registrada de manera asíncrona**, aunque algunos cruces atmosféricos pudieran ser rápidos.

## 4. La meteorización continental: minerales que ya no sobrevivían

Pirita y uraninita se oxidan en contacto prolongado con aire y agua oxigenados. Su presencia como granos redondeados transportados en conglomerados antiguos indica que pudieron erosionarse, viajar y depositarse sin destruirse. Su desaparición generalizada de archivos fluviales posteriores, junto con paleosuelos enriquecidos en Fe y aparición de sedimentos rojos, apoya una superficie continental más oxidante.

Pero cada indicador tiene filtros:

- un grano detrítico puede quedar protegido por transporte rápido o microambiente;
- la ausencia depende de litología fuente, selección y preservación;
- hematita puede ser primaria, diagenética o meteórica;
- un paleosuelo integra drenaje y exposición local, no todo el planeta.

Goto et al. encontraron pirita detrítica y poca movilización de Mo/S en unidades huronianas de más de `2.31 Ga`. Bajo su calibración, esos materiales son compatibles con `pO₂ < 5 × 10⁻⁴ PAL` antes de la tercera glaciación (`SRC-GOTO-2025`). El resultado no niega la Gran Oxidación: muestra que el aire podía haber cruzado un umbral fotoquímico y seguir siendo extremadamente pobre en oxígeno respecto al moderno.

## 5. Del aire a los mares someros

Un cambio atmosférico no oxigena instantáneamente toda la columna oceánica. Productividad, respiración, circulación, `Fe²⁺`, sulfuro y profundidad controlan cuánto `O₂` sobrevive.

Heard et al. midieron isótopos de V en lutitas de `2.32–2.26 Ga` del Transvaal. El V disuelto tiene un tiempo de residencia suficientemente largo para que su balance isotópico integre un reservorio marino amplio. El desplazamiento hacia valores que requieren un sumidero oxidado indica expansión global de ambientes con al menos `~10 μM O₂` en el fondo, probablemente plataformas someras (`SRC-HEARD-2025`).

El cálculo de equilibrio con el aire sugiere en ese modelo `pO₂ ≥ ~4 × 10⁻² PAL`, pero es una inferencia condicionada por temperatura, solubilidad, producción local, balance de V y representatividad de la cuenca. Se registra como cota modelada, no como medición directa.

Los mismos estratos y modelos permiten que gran parte del interior oceánico permaneciera por debajo de `1 nM O₂`. Por tanto:

```text
atmósfera oxigenada
        ↓ intercambio aire–mar
plataformas con >10 μM O₂
        ↓ respiración + estratificación
océano profundo ferruginoso/euxínico
```

Esta geometría reconcilia oxígeno superficial persistente con abundante evidencia de anoxia marina posterior.

## 6. Glaciaciones: coincidencia no es dirección causal

La transición se superpone a varias glaciaciones paleoproterozoicas. Oxidar metano atmosférico puede reducir un potente gas invernadero; esa ruta hace físicamente plausible que más `O₂` favoreciera enfriamiento. A su vez, temperatura, humedad, hielo y productividad cambian la química atmosférica y los flujos de oxígeno.

Gumsley et al. fortalecieron la cercanía temporal entre magmatismo, glaciación y oxigenación, pero también mostraron que la correlación depende de revisar edades y estratigrafía (`SRC-GUMSLEY-2017`). Ruiz et al. obtuvieron en un modelo fotoquímico 1‑D múltiples cruces del umbral de oxígeno producidos por variabilidad climática (`SRC-RUIZ-2024`).

El modelo demuestra viabilidad, no la película histórica. Las direcciones siguen abiertas:

```text
O₂ ↑ → CH₄ ↓ → enfriamiento
clima → humedad/fotoquímica → O₂ aparente
glaciación → meteorización/productividad ↓ → flujos cambian
magmatismo → gases reductores/CO₂/nutrientes → efectos opuestos
```

La glaciación es un marcador correlacionado y una condición de contorno; no es por sí sola un proxy de `pO₂` ni prueba una causa única.

## 7. Cuánto oxígeno: por qué las cotas no encajan en un solo número

Los proxies responden a umbrales distintos:

| Proxy | Magnitud que restringe | Orden de cota publicada | Dependencia dominante |
|---|---|---:|---|
| pérdida de `S‑MIF` | fotoquímica atmosférica | `~10⁻⁷–10⁻⁵ PAL` | composición/modelo y memoria |
| pirita/sulfuros detríticos | intensidad de meteorización | `<5 × 10⁻⁴ PAL` en un caso huroniano | transporte y cinética |
| ciclo de ozono / O‑MIF | ozono atmosférico | `~10⁻⁴–10⁻³ PAL` mínimo modelado | fotoquímica |
| V marino | fondos someros `>10 μM O₂` | aire `≥~4 × 10⁻² PAL` en un modelo | equilibrio y balance global |

No son cuatro termómetros rotos midiendo la misma capa y fecha. Responden a reservorios, intervalos y umbrales diferentes. Una trayectoria con pulsos puede satisfacer varios valores sin que ninguno sea «el nivel de la GOE».

La revisión de 2026 encontró que trayectorias atmosféricas separadas por órdenes de magnitud siguen siendo defendibles (`SRC-CROCKFORD-2026`). Por eso la amplitud absoluta recibe `D`; el cambio de régimen, `B-COND`.

## 8. La Gran Oxidación no terminó de construir el mundo moderno

Después de `~2.32 Ga`:

- el aire permaneció oxigenado por encima de ciertos umbrales durante intervalos prolongados;
- plataformas someras desarrollaron sumideros oxidados;
- la meteorización comenzó a exportar más sulfato y metales redox;
- el océano profundo siguió extensamente anóxico;
- `pO₂` podía estar órdenes de magnitud por debajo del actual;
- la excursión Lomagundi–Jatuli (`~2.22–2.06 Ga`) fue una perturbación posterior del ciclo de C, no el inicio único de la GOE.

La palabra «Grande» describe la reorganización del sistema y la irreversibilidad de un cambio a escala geológica, no una medición demostrada de oxígeno cercano al `21 %` moderno.

## 9. Matriz de evidencias

| Archivo | Observación | Claim máximo | Adversario principal |
|---|---|---|---|
| S múltiple sudafricano | transición `S‑MIF → S‑MDF` en testigos | umbral atmosférico por `~2.32 Ga` | hueco/correlación y umbral modelado |
| U–Pb/Re–Os + S australiano | señal hasta >`2.31 Ga`, con interrupciones | asincronía/memoria de cuenca | edades y procedencia |
| Ongeluk + paleomagnetismo | magmatismo `2426 ± 3 Ma` y correlación glacial | inicio temprano y transición prolongada | correlación estratigráfica |
| pirita detrítica + Mo/S | meteorización sulfídica incompleta | `pO₂` aún bajo en intervalo huroniano | protección/transporte y calibración |
| V/Tl marino | aparición de sumideros oxidados | plataformas persistentes por `~2.32 Ga` | balance isotópico y cuenca |
| glaciaciones | diamictitas y cronologías coetáneas | acoplamiento temporal | dirección causal no única |

## 10. Pruebas adversariales prioritarias

1. fechar en la misma sucesión `S‑MIF`, minerales detríticos, O‑MIF, V/Tl y facies;
2. medir procedencia de `S‑MIF` tardío para separar producción atmosférica de memoria crustal;
3. repetir V y Tl en cuencas abiertas de otros continentes con geocronología equivalente;
4. calibrar cinética de destrucción de pirita/uraninita bajo presiones bajas de `O₂`;
5. producir modelos fotoquímicos que ajusten simultáneamente S, O, metano, ozono y clima;
6. obtener cotas atmosféricas independientes que no compartan el mismo modelo de ozono;
7. distinguir pulsos globales de cambios locales mediante correlación de alta precisión;
8. reconstruir superficie y profundidad oceánica en el mismo intervalo, sin extrapolar una a la otra.

## 11. Jerarquía de conclusiones

| Afirmación | Confianza | Razón de no subir más |
|---|---:|---|
| el aire cambió de régimen oxidante en el Paleoproterozoico temprano | `B-COND` | umbral y preservación son modelados |
| la transición principal cabe operativamente en `~2.45–2.32 Ga` | `B-COND` | inicio y final dependen de definición/cuenca |
| hubo pulsos o asincronía durante la transición | `B-COND` | oscilación y memoria pueden imitarse |
| el aire superó el umbral `S‑MIF` por `~2.32 Ga` en Sudáfrica | `B` | traducción de proxy y sincronía global |
| plataformas someras se oxigenaron persistentemente después | `B-COND` | V/Tl y equilibrio/modelo global |
| el océano profundo quedó ampliamente anóxico | `B-COND` | cobertura espacial incompleta |
| el `pO₂` exacto de toda la GOE se conoce | `D-E` | cotas de proxies distintos no son una serie única |
| una glaciación fue causada sólo por el aumento de `O₂` | `D` | retroalimentaciones y cronología multicausal |
| la fotosíntesis oxigénica nació durante la GOE | `E` | evidencia de producción arcaica anterior |
| existe un disparador único identificado | `D-E` | fuentes, sumideros, clima y nutrientes covarían |

## LO MEDIDO

- composiciones `³²S–³³S–³⁴S–³⁶S` en sulfatos y sulfuros;
- edades U–Pb y Re–Os, relaciones de corte y testigos estratigráficos;
- granos de pirita detrítica, metales redox y paleosuelos;
- diamictitas y unidades volcánicas asociadas;
- isótopos authigénicos de V y Tl en lutitas;
- especiación de Fe y enriquecimientos de Mo/U en facies marinas.

## LO OBSERVADO

- grandes anomalías de S en estratos inferiores y su pérdida en sucesiones superiores;
- cambios no sincrónicos de la señal entre Sudáfrica, Australia, Canadá y Fennoscandia;
- pirita redondeada transportada en algunos sedimentos de la transición;
- paleosuelos, capas rojas y cambios en movilidad de elementos después de archivos reductores;
- un desplazamiento de V/Tl sobre el nivel estratigráfico de la pérdida grande de `S‑MIF`;
- coexistencia de facies someras oxidadas con facies profundas anóxicas.

## LO INFERIDO

- una atmósfera funcionalmente anóxica antes de grandes pérdidas de `S‑MIF`;
- cruces del umbral atmosférico durante `~2.45–2.32 Ga`;
- memoria crustal y/o oscilaciones que vuelven asíncrono el archivo;
- meteorización oxidativa todavía limitada durante partes de la transición;
- oxigenación persistente de mares someros cerca de `2.32 Ga`;
- persistencia de anoxia en gran parte del océano profundo.

## LOS SUPUESTOS

- el azufre conserva señal deposicional y su procedencia puede reconstruirse;
- los sistemas geocronológicos fechan el horizonte pertinente;
- la fotoquímica modelada representa una atmósfera desconocida;
- minerales detríticos no son diagenéticos y su transporte es interpretable;
- V y Tl authigénicos muestrean agua marina y no sólo poro/alteración;
- tiempos de residencia permiten integrar más que la cuenca local;
- correlaciones estratigráficas entre cratones no fuerzan sincronía falsa.

## LAS INCERTIDUMBRES

- definición exacta de inicio y final de la GOE;
- umbral de `pO₂` que elimina `S‑MIF`;
- fracción de señales tardías causada por reciclaje;
- magnitud y duración de cada pulso;
- concentración atmosférica absoluta;
- extensión de plataformas oxigenadas y volumen anóxico;
- relación causal con glaciaciones y magmatismo;
- combinación de fuentes y sumideros que cambió primero.

## LAS ALTERNATIVAS

- oscilación atmosférica frente a memoria sedimentaria;
- salto rápido local dentro de una transición prolongada;
- oxigenación desde la superficie frente a producción local marina;
- clima como consecuencia, causa o amplificador;
- aumento de fuente biológica frente a reducción de sumideros;
- nutrientes, enterramiento, volcanismo, escape de H y tectónica en pesos distintos.

## LAS CONTROVERSIAS

Las controversias activas son `CONT-GOE-DEFINITION-001`, `CONT-GOE-SMIF-MEMORY-001`, `CONT-GOE-LEVEL-001`, `CONT-GOE-OCEAN-001`, `CONT-GOE-GLACIATION-001` y `CONT-GOE-CAUSE-001`. No disputan que el sistema cambió; disputan dónde colocar límites, cuánto `O₂` había, qué volumen se oxigenó y por qué.

## QUÉ PODRÍA FALSARLO

- mostrar que las transiciones de S son producto de alteración postdeposicional sincronizada;
- demostrar que grandes `S‑MIF` se preservan de manera estable bajo una atmósfera claramente oxigenada sin memoria crustal;
- obtener edades que separen por mucho la pérdida de S de los horizontes usados para fecharla;
- reproducir el desplazamiento de V/Tl sin un sumidero marino oxidado;
- demostrar que la pirita considerada detrítica se formó durante diagénesis;
- encontrar un proxy directo y reproducido que fije una trayectoria de `pO₂` incompatible con todas las familias actuales.

## NIVEL DE CONFIANZA

`B-COND` para la acumulación atmosférica persistente y la transición prolongada; `B` para el cambio `S‑MIF` sudafricano por `~2.32 Ga`; `B-COND` para plataformas oxigenadas; `D` para la amplitud atmosférica y el disparador; `D-E` para un instante global único.

## QUÉ SABEMOS REALMENTE

- La Tierra cruzó un umbral atmosférico que reorganizó la fotoquímica del azufre durante el Paleoproterozoico temprano.
- El cambio principal fue un intervalo con pulsos, memoria y asincronía; una transición local rápida no equivale a un evento global instantáneo.
- Hacia `~2.32 Ga`, aire y plataformas someras muestran una convergencia especialmente fuerte.
- El océano profundo no se volvió moderno: grandes volúmenes permanecieron anóxicos.
- El aire podía ser oxidante respecto al Arcaico y, a la vez, contener muchísimo menos `O₂` que hoy.

## QUÉ TODAVÍA NO SABEMOS

- la curva global de `pO₂` entre `2.50` y `2.20 Ga`;
- qué reapariciones de `S‑MIF` son atmosféricas y cuáles recicladas;
- el volumen y persistencia exactos de agua oxigenada;
- si hubo un sobreimpulso de oxígeno y de qué amplitud;
- qué glaciación respondió al metano y cuál modificó el oxígeno;
- qué cambio de fuentes o sumideros volvió irreversible la transición.

## Fuentes críticas y trazabilidad

| Función | Evidencia | Fuentes |
|---|---|---|
| fundamento atmosférico de S | `EVID-GOE-SMIF-001` | `SRC-FARQUHAR-2000`, `SRC-LUO-2016` |
| geocronología sudafricana | `EVID-GOE-GEOCHRON-001` | `SRC-BEKKER-2004`, `SRC-LUO-2016` |
| tempo, pulsos y memoria | `EVID-GOE-SMIF-MEMORY-001` | `SRC-GUMSLEY-2017`, `SRC-PHILIPPOT-2018` |
| meteorización y `pO₂` bajo | `EVID-GOE-WEATHERING-001` | `SRC-GOTO-2025` |
| océano somero/profundo | `EVID-GOE-OCEAN-001` | `SRC-HEARD-2025` |
| glaciación y mecanismo | `EVID-GOE-GLACIAL-001`, `EVID-GOE-MODEL-001` | `SRC-GUMSLEY-2017`, `SRC-RUIZ-2024` |
| amplitud aún abierta | integración de los anteriores | `SRC-CROCKFORD-2026` |

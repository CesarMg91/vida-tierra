# Mapa epistemológico 046 — Poblamiento de las Américas

| Campo | Valor |
|---|---|
| Investigación | `INV-MIGR-AMERICAS-001` |
| Estado | `AUDITADO` |
| Versión | `0.1.45` |
| Visuales | `mapa-investigacion-046.svg`, `cronologia-archivos-americas.svg` |

## 1. Pregunta transformada

```text
¿cuándo se poblaron las Américas?
→ ¿qué objeto registra presencia, qué fecha su reloj y en qué escala?

¿por qué ruta?
→ ¿qué corredor fue físicamente/ecológicamente viable y qué falta para demostrar uso?

¿quiénes eran?
→ ¿qué individuo o población está muestreado y qué parte es genealogía modelada?
```

## 2. Ontología de resultados

| Resultado | Unidad | Evidencia mínima | Error si se fusiona |
|---|---|---|---|
| fecha de muestra | semilla, carbón, cuarzo, hueso, roca | reloj y calibración | evento automático |
| presencia local | objeto humano + contexto | agencia, asociación y edad | primera entrada |
| primer poblamiento | continente + límite | cobertura y ausencia informativa | fecha más antigua conocida |
| expansión | múltiples regiones/poblaciones | replicación temporal y espacial | un sitio como ola |
| corredor viable | ambiente regional | apertura, biota y continuidad | camino utilizado |
| ruta histórica | cadena espacial humana | sitios/objetos conectados | flecha de modelo |
| split genético | ramas bajo modelo | genomas, tasas y estructura | frontera/fecha de entrada |
| continuidad | muestras a través del tiempo | afinidad y detectabilidad | identidad cultural inmutable |

## 3. Grafo principal

```text
OBJETO ──procedencia──> CONTEXTO ──reloj correcto──> FECHA DE MUESTRA
  │                         │                              │
  ├─diagnóstico humano─────>│                              └─asociación──> PRESENCIA LOCAL
  └─agentes alternativos────┘                                                │
                                                                             ├─replicación──> EXPANSIÓN
HIELO / COSTA ──reloj ambiental──> APERTURA ──biota──> VIABILIDAD             │
                                                         │                   │
                                                         └──────────────/→ RUTA USADA

GENOMA + EDAD + CONSENTIMIENTO ──modelo──> GENEALOGÍA / ESTRUCTURA ─────/→ ENTRADA
TECNOLOGÍA + FECHA ──────────────────────> TECNOCOMPLEJO ────────────────/→ POBLACIÓN
```

`/→` indica un salto no autorizado sin evidencia independiente.

## 4. Expedientes y confianza

| Expediente | Objeto | Resultado | Confianza | Cuello de botella |
|---|---|---|---|---|
| White Sands | huellas + estratos + cuatro rutas cronológicas | presencia `~23–21 ka` | B-LOCAL | duración/población/ruta |
| Bluefish | huesos con marcas + AMS | Beringia `~24 ka` | C-COND | agencia y muestra pequeña |
| Cooper’s Ferry/Nipéhe | rasgos/líticos + `14C` | ocupación `~16 ka` | B-COND | LU3/asociación/extensión |
| anclas `~16–14 ka` | varios sitios y objetos | expansión pre-Clovis | B-COND | independencia desigual |
| Monte Verde | contexto clásico + redatación 2026 | edad del componente | D/ABIERTA | correlación de unidades/tefra |
| Clovis | puntas + cronología + Anzick | tecnocomplejo/individuo | B | extrapolación a población inicial |
| Cerutti | hueso/cobbles + U-series | agencia humana `~130 ka` | D | diagnóstico/alternativas |
| Chiquihuite | sedimentos + objetos propuestos | presencia `33–31 ka` | C-D-COND | artefacto vs geofacto |

## 5. White Sands: independencia parcial

```text
semillas acuáticas ──14C──┐
polen terrestre ────14C───┼─> ventana LGM local
cuarzo/sedimento ───OSL───┤
paleolago + 26 fechas ────┘

comparten estratigrafía y correlación
no comparten material ni todos los sesgos
resultado: presencia local; no entrada/ruta
```

## 6. Rutas como filtros sucesivos

| Filtro | Costa | Corredor interior | Todavía falta |
|---|---|---|---|
| apertura física | sectores desglaciados | separación de mantos | continuidad espacial |
| habitabilidad | recursos litorales por sector | suelo/plantas/fauna tardíos | estación/estacionalidad humana |
| preservación | mucha paleocosta sumergida | registro terrestre desigual | prospección comparable |
| arqueología | puntos dispersos | ocupaciones posteriores | cadena de sitios de tránsito |
| genética | compatible con origen Beringiano | no elige corredor | geografía de cada dispersión |

La incompatibilidad temporal de una versión del corredor no demuestra automáticamente otra ruta. Puede señalar error de reloj, hiato de registro, episodio anterior o ruta mixta.

## 7. Cronómetros no equivalentes

| Reloj | Fecha qué | Transformación | Límite |
|---|---|---|---|
| `14C` semilla/polen/carbón | muerte del material | calibración + asociación | reservorio, madera vieja, retrabajo |
| AMS de hueso | muerte del animal/persona | colágeno + calibración | agente humano y asociación |
| OSL | última exposición de granos | dosis/blanqueo | fecha sedimento, no objeto directo |
| U-series en hueso | historia de U/enterramiento | difusión/adsorción | sistema abierto y agencia |
| `10Be` | exposición de roca | producción/erosión | hielo ausente, no uso humano |
| Bayes de fase | comienzo/final modelado | likelihood + priors | selección y estructura |
| tramos/coalescencia | genealogía | mutación/recombinación/generación | no coordenada ni cruce observado |

## 8. Genómica: tres escalas

```text
individuo antiguo fechado
→ afinidad/ancestría de ese individuo
→ población modelada bajo referencias
→ historia continental condicionada

cada flecha pierde resolución espacial y añade supuestos
```

- USR1 `~11.5 ka`: cuerpo local y rama Ancient Beringian.
- NNA/SNA y otras divisiones: intervalos modelados, no pasos de frontera.
- `128` genomas actuales de 2026: diversidad y al menos tres dispersiones hacia Sudamérica; no entrada.
- afinidad australasiana: señal genómica compleja; no viaje transpacífico directo.

## 9. Gobernanza como nodo de procedencia

```text
persona/comunidad
→ consentimiento y acuerdo
→ muestreo y metadatos autorizados
→ acceso individual controlado / datos agregados
→ análisis permitido
→ devolución, límites y revisión
```

Sin este nodo, «dataset» oculta quién autorizó el uso, qué no puede inferirse y quién controla reutilizaciones. Gobernanza no decide una fecha; decide la legitimidad y alcance del dato disponible.

## 10. Monte Verde como prueba de arquitectura

```text
contexto original ~14.5 ka ───────┐
                                   ├─> misma unidad cultural: DISPUTADO
exposiciones + tefra + 2026 ──────┘

prueba discriminatoria:
correlación estratigráfica conjunta + objetos in situ + relojes replicados
```

El estado correcto es `ABIERTA`, no promedio de `14.5` y `8.2–4.2 ka`.

## 11. Dependencias y no independencia

- White Sands combina relojes distintos pero comparte paisaje y correlación;
- varios sitios usan las mismas curvas `14C`, criterios de fase y laboratorios;
- estudios continentales reutilizan los mismos sitios y heredan sus asociaciones;
- genomas actuales y antiguos comparten referencias, tasas y modelos demográficos;
- apertura costera/interior y uso humano son archivos diferentes;
- respuestas a Monte Verde reutilizan parte de secciones y archivos históricos.

## 12. Incertidumbres prioritarias

| Prioridad | Incertidumbre | Discriminador |
|---|---|---|
| alta | agencia en Bluefish/Chiquihuite/Cerutti | experimentos ciegos, refits y contexto primario |
| alta | cronología de Monte Verde | muestreo conjunto de la misma superficie |
| alta | registro costero sumergido | cartografía y excavación submarina con controles |
| alta | ruta de presencias LGM | sitios intermedios fechados y relacionados |
| media | continuidad de Cooper’s Ferry | más rasgos y fechas directas |
| alta | split vs entrada | ADN antiguo anterior y modelos espaciales contrastables |
| alta | representatividad genómica | muestreo consentido más amplio y sensibilidad a referencias |

## 13. Falsadores

- **White Sands LGM:** retrabajo demostrado o desacuerdo sistemático entre horizontes y relojes.
- **Bluefish humano:** agente natural que reproduzca las microtrazas y distribución.
- **Monte Verde Pleistoceno/Holoceno:** correlación común y fechas directas de la misma unidad.
- **costa inicial:** secuencia de sitios/ambientes incompatible o evidencia directa alternativa.
- **corredor inicial:** apertura y biota posteriores a presencia robusta al sur.
- **split = entrada:** historias alternativas de estructura/flujo con igual ajuste y otras geografías.
- **ruta única:** archivos regionales que requieran varios episodios o corredores.

## 14. Confianza operativa

```text
A-SEM  categorías y escalas no equivalentes
B      White Sands local; pre-Clovis tardío; Clovis no primero
B-COND anclas 16–14 ka; apertura ambiental; ramas genómicas
C-COND Bluefish; algunos extremos de Cooper’s Ferry
C-MOD  tiempos demográficos y dispersiones internas
D      Monte Verde 2026; Cerutti; ruta usada; split como entrada
A-MET  consentimiento/gobernanza como procedencia
```

## 15. Salida del mapa

La evidencia establece presencia pre-Clovis y una expansión continental temprana, pero no una puerta única. White Sands, sitios de `~16–14 ka`, corredores ambientales y genomas responden preguntas distintas. El mapa conserva sus puentes para que una nueva fecha, un sitio submarino o un genoma antiguo pueda cambiar una parte sin reescribir silenciosamente todas las demás.

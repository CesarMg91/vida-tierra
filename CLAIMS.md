# Registro maestro de afirmaciones

Este archivo es el índice canónico. La letra de confianza califica exactamente la frase escrita; no debe extrapolarse a una frase más fuerte. Fecha de corte inicial: **2026-08-10**.

## Índice

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-COSMOS-EXPANSION-001` | El factor de escala del universo observable ha crecido durante la historia accesible; el corrimiento cosmológico se integra coherentemente con distancias, supernovas, CMB y BAO. | A-COND | AUDITADO | `EVID-COSMOS-REDSHIFT-001`, `EVID-COSMOS-SN-001`, `EVID-COSMOS-BAO-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-HOT-001` | El universo observable pasó por una fase mucho más caliente y densa que la actual. | A | AUDITADO | `EVID-COSMOS-CMB-SPECTRUM-001`, `EVID-COSMOS-CMB-ANISO-001`, `EVID-COSMOS-BBN-D-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-CMB-001` | Existe un fondo cósmico de microondas casi térmico de ~2.7 K, con anisotropías de microkelvin que contienen estructura cosmológica. | A | AUDITADO | `EVID-COSMOS-CMB-ANTENNA-001`, `EVID-COSMOS-CMB-SPECTRUM-001`, `EVID-COSMOS-CMB-ANISO-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-BBN-001` | El D/H medido en gas de baja metalicidad concuerda, bajo nucleosíntesis estándar, con una densidad bariónica compatible con la inferida del CMB. | B-COND | AUDITADO | `EVID-COSMOS-BBN-D-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-AGE-001` | Los datos finales de Planck, interpretados con el modelo plano base `ΛCDM`, implican una edad del universo cercana a 13.8 Ga. | B-COND | AUDITADO | `EVID-COSMOS-CMB-ANISO-001`, `EVID-COSMOS-BAO-001`, `EVID-COSMOS-STELLAR-AGE-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-ACCEL-001` | En el marco FLRW, las relaciones distancia–corrimiento favorecen una expansión tardía acelerada. | B-COND | AUDITADO | `EVID-COSMOS-SN-001`, `EVID-COSMOS-BAO-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-H0-001` | El valor local de `H0` de SH0ES y el inferido por Planck bajo `ΛCDM` discrepan más de lo esperable por sus incertidumbres publicadas; su causa sigue abierta. | B | AUDITADO | `EVID-COSMOS-H0-LOCAL-001`, `EVID-COSMOS-CMB-ANISO-001`, `EVID-COSMOS-BAO-001` | `INV-COSMOS-AGE-001` |
| `CLAIM-COSMOS-BOUNDARY-001` | El modelo de Big Bang caliente contrastado no establece por sí solo creación desde la nada, un centro espacial ni que una singularidad clásica sea un objeto físico observado. | A-SEM | AUDITADO | alcance conjunto de `EVID-COSMOS-*` | `INV-COSMOS-AGE-001` |
| `CLAIM-SOLAR-AGE-001` | Las CAIs analizadas por Connelly et al. definen un intervalo de formación a 4567.30 ± 0.16 Ma. | B | TRAZADO | `EVID-SOLAR-CAI-001` | `INV-EARTH-AGE-001` |
| `CLAIM-EARTH-AGE-001` | La formación de la Tierra se sitúa aproximadamente en 4.54 Ga; es una edad de formación/acreción, no la lectura de una roca terrestre intacta. | A para el orden y B para el valor operacional | AUDITADO | `EVID-EARTH-PBISO-001`, `EVID-SOLAR-CAI-001`, `EVID-EARTH-HFW-001` | `INV-EARTH-AGE-001` |
| `CLAIM-GEO-UPB-001` | Los sistemas U–Pb/Pb–Pb permiten estimar tiempo transcurrido cuando sus condiciones iniciales y su historia de sistema abierto se restringen adecuadamente. | A-COND | AUDITADO | `EVID-METHOD-DECAY-001`, `EVID-METHOD-CONCORDIA-001` | `INV-EARTH-AGE-001` |
| `CLAIM-EARTH-ACCRETION-001` | La acreción y diferenciación terrestre ocurrieron durante decenas de millones de años tras las primeras CAIs, no en un instante único. | B-COND | TRAZADO | `EVID-EARTH-HFW-001` | `INV-EARTH-AGE-001` |
| `CLAIM-MOON-AGE-001` | La Luna y su corteza inicial se formaron muy temprano, probablemente dentro de los primeros ~60–100 Ma del Sistema Solar. | C | TRAZADO | `EVID-MOON-ZIRCON-001`, `EVID-EARTH-HFW-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-ZIRCON-001` | Un zircon detrítico de Jack Hills conserva una edad U–Pb de 4404 ± 8 Ma, entre los materiales terrestres conocidos más antiguos. | B | TRAZADO | `EVID-HADEAN-JH-ZIRCON-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-WATER-001` | Algunos zircones hadeanos son compatibles con interacción previa entre su material fuente y agua líquida cerca de la superficie hacia 4.4 Ga. | C | TRAZADO | `EVID-HADEAN-OXYGEN-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-ACASTA-001` | Ortogneises de Acasta conservan edades de protolito ígneo de hasta 4031 ± 3 Ma. | B | TRAZADO | `EVID-HADEAN-ACASTA-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-NGB-001` | Intrusiones metagabroicas de Nuvvuagittuq produjeron isócronas Sm–Nd próximas a 4.16 Ga en el estudio de 2025. | B-PROV | TRAZADO | `EVID-HADEAN-NGB-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-NGB-002` | Las rocas encajantes cortadas por esas intrusiones deben ser al menos tan antiguas y podrían representar corteza hadeana. | C-LOCAL | TRAZADO | `EVID-HADEAN-NGB-001` | `INV-EARTH-AGE-001` |
| `CLAIM-HADEAN-LHB-001` | Hubo una intensificación global, breve y única de impactos cerca de 3.9 Ga. | D | TRAZADO | `EVID-HADEAN-LUNAR-IMPACT-001` | `INV-EARTH-AGE-001` |

## Fichas resumidas

### CLAIM-COSMOS-HOT-001 / CMB-001

- **Formulación:** expansión, espectro térmico del CMB, anisotropías y abundancias ligeras permiten reconstruir una fase temprana caliente y densa.
- **No afirma:** que se haya observado desde fuera una explosión; que exista un centro; que el modelo describa un origen absoluto.
- **Independencia:** CMB espectral y anisotrópico comparten cielo e instrumentos relacionados; D/H cambia muestra, época, detector y sistemáticas, aunque comparte física del modelo térmico.
- **Alternativa fuerte:** fondo local más un mecanismo de corrimiento no expansivo. Debe reproducir espectro, anisotropías, dilatación temporal, BAO, BBN y crecimiento de estructura conjuntamente.
- **Justificación:** A para la fase caliente y el fondo cósmico; los parámetros derivados reciben confianza condicional.

### CLAIM-COSMOS-AGE-001

- **Definición operacional:** tiempo propio integrado desde el límite temprano de la solución cosmológica hasta hoy, no “edad de todo lo que pudiera existir”.
- **Cálculo conceptual:** `t0 = ∫ dz / [(1+z)H(z)]`; por eso `1/H0` es una escala y no el resultado completo.
- **Supuestos críticos:** FLRW/relatividad general en el dominio probado, contenido del modelo, curvatura, recombinación, primeros planos, priors y calibración.
- **Corroboración externa:** edades de cúmulos globulares y otras poblaciones antiguas ofrecen límites compatibles con sistemáticas distintas.
- **Incertidumbres:** `[MODEL:3] [CAL:2] [CORR:2] [SEM:3] [DATE:2]`.
- **Justificación B-COND:** la precisión interna es alta y el valor es estable en modelos cercanos; la familia de modelos no está garantizada por una lectura directa y existen tensiones externas.

### CLAIM-COSMOS-H0-001

- **Dato temprano/modelado:** Planck base `ΛCDM` reporta `67.4 ± 0.5 km s⁻¹ Mpc⁻¹`.
- **Dato local/modelado:** SH0ES reporta `73.04 ± 1.04 km s⁻¹ Mpc⁻¹` con escalera Cefeida–SN Ia.
- **No afirma:** que una de las cifras sea “la verdadera” por autoridad; que la discrepancia invalide CMB o expansión; que ya pruebe nueva física.
- **Prueba discriminatoria:** anclas y calibradores locales alternativos, CMB independiente, BAO, lentes, sirenas estándar y modelos que resuelvan simultáneamente otros observables.

### CLAIM-COSMOS-BOUNDARY-001

- **Tipo de claim:** límite semántico y epistemológico.
- **Distinción:** “Big Bang caliente” nombra una historia térmica/geométrica respaldada; “creación absoluta” y “comienzo físico del tiempo” añaden afirmaciones que los instrumentos registrados no miden.
- **Consecuencia:** una cosmología con rebote o fase anterior podría conservar CMB, BBN y expansión; cambiaría la extrapolación inicial, no borraría automáticamente la evidencia posterior.

### CLAIM-EARTH-AGE-001

- **Formulación:** La Tierra se formó hace aproximadamente 4.54 mil millones de años.
- **Definición operacional:** “Formarse” resume una ventana de acreción y diferenciación. El valor redondeado ancla el inicio del proceso en los sólidos solares más antiguos y su evolución en meteoritos y cronómetros de diferenciación.
- **No afirma:** que exista una roca terrestre de 4.54 Ga; que todo el planeta alcanzara instantáneamente su estado actual; que `±0.05 Ga` sea solo error de conteo instrumental.
- **Supuestos críticos:** parentesco cosmoquímico Tierra–meteoritos, interpretación de isócronas, constantes de decaimiento, modelos de acreción.
- **Incertidumbres:** `[CONST:1] [INIT:2] [MODEL:2] [DATE:3] [SEM:3] [CORR:2]`.
- **Alternativa fuerte:** distintas definiciones de “nacimiento” producen edades desde el tiempo cero meteórico hasta hitos posteriores como cierre de acreción, formación del núcleo o impacto lunar.
- **Falsadores:** cronómetros isotópicos bien controlados y mutuamente independientes que convergieran en un inicio incompatible; demostrar variación suficiente de constantes de decaimiento; invalidar el vínculo entre los meteoritos primitivos y el reservorio solar de la Tierra.
- **Justificación:** A para que la Tierra es de alrededor de 4.5 Ga, por convergencia de sistemas y muestras; B para convertir ese proceso en el número único 4.54 Ga.

### CLAIM-GEO-UPB-001

- **Formulación:** Bajo condiciones comprobables, la acumulación de productos de decaimiento en dos cadenas de uranio funciona como reloj geológico.
- **Observación relevante:** razones isotópicas y tasas de actividad, no “años” observados.
- **Condiciones:** mineralización o cierre definidos; corrección de Pb común; ausencia o modelado de pérdida/ganancia; valores de constantes y trazadores; identificación de herencia.
- **Prueba interna:** concordancia entre las cadenas `238U→206Pb` y `235U→207Pb`, más relaciones Pb–Pb.
- **Incertidumbres:** `[CERR:3] [INIT:2] [CONST:1] [CAL:2] [FRAC:2] [ALTER:3]`.

### CLAIM-HADEAN-WATER-001

- **Formulación cuidadosa:** Las composiciones de oxígeno de algunos zircones requieren, bajo los modelos petrológicos usados, material precursor alterado a baja temperatura, compatible con agua superficial antes de cristalizar el magma huésped.
- **No afirma:** que se haya observado un océano de 4.4 Ga; su volumen, continuidad o composición; que todo zircon hadeano registre agua.
- **Alternativas/tensiones:** cambios posteriores, microdominios mezclados, fuente cortical distinta o modelos diferentes de fraccionamiento.
- **Confianza C:** el dato isotópico es real y reproducible en granos seleccionados, pero “océano global” añade inferencias que los granos no miden directamente.

### CLAIM-HADEAN-NGB-001 / 002

- **Actualización clave:** el artículo de Sole et al. (2025) aporta concordancia entre sistemas Sm–Nd de vidas muy distintas en intrusiones relacionadas petrológicamente.
- **Distinción:** fechar una intrusión da una edad directa del evento de cristalización interpretado; la edad de la roca encajante es un límite mínimo por relación de corte.
- **Pendiente:** replicación independiente, auditoría completa del suplemento y reconciliación con edades U–Pb más jóvenes y críticas estratigráficas previas.

## Claims futuros

Las entradas cronológicas todavía no auditadas permanecen como eventos `SEMILLA` en `TIMELINE.md`. Se convertirán en claims al llegar su turno en el roadmap; así se evita otorgar apariencia de auditoría a fechas usadas inicialmente solo como orientación.

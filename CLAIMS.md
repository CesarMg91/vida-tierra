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
| `CLAIM-COSMOS-SPECTRA-001` | Los patrones de transiciones atómicas permiten identificar elementos e iones en fuentes astronómicas; convertir intensidad de línea en abundancia requiere temperatura, ionización, datos atómicos y un modelo atmosférico. | A para identidad; B-COND para abundancia | AUDITADO | `EVID-SPECTRA-ATOMIC-001`, `EVID-SOLAR-ABUNDANCE-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-COSMOS-BBN-ELEMENTS-001` | La nucleosíntesis primordial estándar produjo principalmente H y He, con cantidades mucho menores de D, `3He` y `7Li`; no explica el inventario de C y núcleos más pesados. | B-COND | AUDITADO | `EVID-COSMOS-BBN-D-001`, `EVID-BBN-RATE-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-STARS-FUSION-001` | El Sol mantiene reacciones de fusión que convierten netamente H en He; los neutrinos solares prueban reacciones nucleares activas en su interior. | A | AUDITADO | `EVID-SOLAR-NEUTRINO-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-STARS-ADVANCED-BURNING-001` | Redes de quema estelar construyen C, O y núcleos del grupo Fe/Ni en estrellas con condiciones adecuadas; los rendimientos exactos dependen de masa, composición, transporte y evolución. | B | AUDITADO | `EVID-STELLAR-ABUNDANCE-001`, `EVID-SN1987A-CO56-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-STARS-SPROCESS-001` | Algunas estrellas AGB producen núcleos por captura lenta de neutrones y mezclan material procesado hacia capas observables. | A para existencia; B para rendimientos | AUDITADO | `EVID-STAR-TECHNETIUM-001`, `EVID-PRESOLAR-SIC-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-SN-NUCLEOSYNTHESIS-001` | SN 1987A contenía y expulsó material radiactivo recién sintetizado en la cadena `56Ni→56Co→56Fe`. | A | AUDITADO | `EVID-SN1987A-CO56-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-MERGER-RPROCESS-001` | Las fusiones de estrellas de neutrones producen al menos parte del material de captura neutrónica; GW170817 no determina por sí solo su fracción cósmica total. | A para existencia; C para fracción | AUDITADO | `EVID-GW170817-RPROCESS-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-COSMICRAY-LIBEB-001` | La espalación causada por rayos cósmicos contribuye a la producción galáctica de Li, Be y B. | B | AUDITADO | `EVID-COSMICRAY-LIBEB-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-PRESOLAR-GRAINS-001` | Algunos granos conservados en meteoritos son anteriores al Sol y retienen patrones isotópicos que restringen nucleosíntesis y progenitores estelares. | A para origen presolar; B-COND para progenitor | AUDITADO | `EVID-PRESOLAR-SIC-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-ELEMENT-ORIGINS-001` | El inventario de núcleos del Sistema Solar resulta de múltiples procesos y generaciones; asignar un origen exclusivo a cada elemento borra diferencias isotópicas y mezcla galáctica. | A-SEM para no exclusividad; C para fracciones | AUDITADO | `EVID-COSMOS-BBN-D-001`, `EVID-SOLAR-NEUTRINO-001`, `EVID-STAR-TECHNETIUM-001`, `EVID-SN1987A-CO56-001`, `EVID-GW170817-RPROCESS-001`, `EVID-PRESOLAR-SIC-001` | `INV-COSMOS-ELEMENTS-001` |
| `CLAIM-STARS-DISTANCE-001` | La paralaje trigonométrica calibra distancias estelares y, combinada con flujo, permite estimar luminosidad; el punto cero, la selección y la incertidumbre impiden invertir ingenuamente toda paralaje. | A para geometría; B-COND para distancias débiles | AUDITADO | `EVID-STARS-GAIA-PARALLAX-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-HR-001` | Los diagramas H–R/color–magnitud de Gaia contienen secuencias estelares físicamente estructuradas; son mapas de poblaciones presentes, no películas de una estrella individual. | A para estructura; A-SEM para el límite | AUDITADO | `EVID-STARS-GAIA-HR-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-MASS-001` | Órbitas y eclipses permiten obtener masas y radios dinámicos; la masa regula fuertemente luminosidad, ritmo y evolución, pero no fija sola un destino. | A-COND | AUDITADO | `EVID-STARS-ECLIPSING-001`, `EVID-STARS-SIRIUSB-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-BIRTH-001` | Algunas estrellas se observan en formación por acreción dentro de gas denso, con firmas conjuntas de infall, disco y outflow/chorro. | A para formación en curso; B-COND para dinámica detallada | AUDITADO | `EVID-STARS-B335-INFALL-001`, `EVID-STARS-HH212-JET-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-EVOLUTION-001` | Cúmulos coetáneos, binarias y asterosismología prueban que poblaciones estelares ocupan estados internos y externos relacionados por evolución; las edades cuantitativas dependen de modelos. | A para cambio de estado; B para edades | AUDITADO | `EVID-STARS-CLUSTER-001`, `EVID-STARS-ASTEROSEISMIC-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-LIFETIME-001` | En condiciones semejantes, las estrellas inicialmente más masivas suelen agotar antes su fase de secuencia principal porque su luminosidad crece más deprisa que su combustible utilizable. | B-COND | AUDITADO | `EVID-STARS-CLUSTER-001`, `EVID-STARS-GAIA-HR-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-WD-001` | Muchas estrellas de masa baja e intermedia pierden envoltura y dejan enanas blancas; la relación masa inicial–final existe, pero tiene dispersión y dependencia de población/modelo. | A para la ruta; B para la relación | AUDITADO | `EVID-STARS-SIRIUSB-001`, `EVID-STARS-WD-IFMR-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-CORECOLLAPSE-001` | Algunas supergigantes producen supernovas de colapso de núcleo; progenitores desaparecidos y la ráfaga neutrínica de SN 1987A enlazan estrella, colapso y energía del remanente. | A para casos observados | AUDITADO | `EVID-STARS-SN-PROGENITOR-001`, `EVID-STARS-SN1987A-NU-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-REMNANT-001` | Púlsares son estrellas de neutrones rotantes y sistemas como Cygnus X-1 contienen objetos compactos cuya masa dinámica favorece un agujero negro estelar. | A para púlsares; A-COND para Cyg X-1 | AUDITADO | `EVID-STARS-PULSAR-001`, `EVID-STARS-BH-DYNAMIC-001` | `INV-COSMOS-STARS-001` |
| `CLAIM-STARS-BOUNDARY-001` | No existe un ciclo de vida universal: composición, rotación, pérdida de masa y, especialmente, interacción binaria ramifican las trayectorias y los remanentes. | A-SEM; B para pesos poblacionales | AUDITADO | `EVID-STARS-BINARY-001` y conjunto `EVID-STARS-*` | `INV-COSMOS-STARS-001` |
| `CLAIM-SOLAR-DISK-001` | El Sistema Solar se originó en un disco de gas y polvo alrededor del joven Sol; los análogos observados y los fósiles locales restringen esa conclusión por rutas distintas. | A-COND | AUDITADO | `EVID-DISK-DSHARP-001`, `EVID-DISK-LIFETIME-001`, conjunto `EVID-SOLAR-*` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-SUBSTRUCTURE-001` | Anillos, huecos, espirales y asimetrías son comunes en la muestra DSHARP de discos grandes/brillantes; una subestructura individual no identifica por sí sola un planeta. | A para morfología; C para causa planetaria | AUDITADO | `EVID-DISK-DSHARP-001`, `EVID-DISK-DUSTTRAP-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-AGE-001` | Las CAIs analizadas por Connelly et al. definen un intervalo de formación a 4567.30 ± 0.16 Ma. | B | AUDITADO | `EVID-SOLAR-CAI-001` | `INV-EARTH-AGE-001`, `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-CHRONOLOGY-001` | CAIs y cóndrulos fechados registran formación y procesamiento repetido de sólidos durante aproximadamente los primeros 3 Ma del archivo meteórico. | B | AUDITADO | `EVID-SOLAR-CAI-001`, `EVID-SOLAR-CHONDRULE-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-RADIONUCLIDE-001` | Existió `26Al` vivo al formarse ciertas CAIs y su decaimiento aportó calor a cuerpos tempranos; su fuente y homogeneidad espacial siguen abiertas. | A para presencia; B-COND para calor; C-D para fuente | AUDITADO | `EVID-SOLAR-AL26-001`, `EVID-SOLAR-PLANETESIMAL-EARLY-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-RESERVOIRS-001` | Las anomalías isotópicas separan reservorios carbonáceos y no carbonáceos con intercambio limitado durante varios Ma; Júpiter como barrera es una explicación modelada. | A para agrupación; B para persistencia; C-COND para Júpiter | AUDITADO | `EVID-SOLAR-NCCC-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-TRANSPORT-001` | La presencia de material refractario de alta temperatura en Wild 2 requiere reubicación a gran escala antes de su incorporación cometaria. | A para presencia; B para transporte radial | AUDITADO | `EVID-SOLAR-WILD2-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-MAGNETIC-001` | Cóndrulos de Semarkona conservan una remanencia compatible con un campo de la nebulosa solar durante su enfriamiento, condicionada a fidelidad paleomagnética. | B-COND | AUDITADO | `EVID-SOLAR-PALEOMAG-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-PLANETESIMAL-001` | Algunos planetesimales se formaron y diferenciaron dentro de los primeros millones de años del Sistema Solar. | B | AUDITADO | `EVID-SOLAR-PLANETESIMAL-EARLY-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-GROWTH-001` | Adhesión simple no garantiza crecimiento continuo hasta planetesimales; deriva, rebote y fragmentación hacen necesarias rutas adicionales como concentración colectiva bajo condiciones específicas. | A para barreras experimentales; B para plausibilidad colectiva; D para mecanismo histórico único | AUDITADO | `EVID-DUST-COLLISION-001`, `EVID-PLANETESIMAL-STREAMING-001` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-SOLAR-BOUNDARY-001` | Análogos y fósiles establecen un origen en disco, pero no recuperan de forma única su masa, radio, historia de transporte ni secuencia de formación planetaria. | A-SEM; D para biografía exacta | AUDITADO | matriz conjunta `EVID-DISK-*` + `EVID-SOLAR-*` | `INV-SOLAR-FORMATION-001` |
| `CLAIM-EARTH-AGE-001` | La formación de la Tierra se sitúa aproximadamente en 4.54 Ga; es una edad de formación/acreción, no la lectura de una roca terrestre intacta. | A para el orden y B para el valor operacional | AUDITADO | `EVID-EARTH-PBISO-001`, `EVID-SOLAR-CAI-001`, `EVID-EARTH-HFW-001` | `INV-EARTH-AGE-001` |
| `CLAIM-GEO-UPB-001` | Los sistemas U–Pb/Pb–Pb permiten estimar tiempo transcurrido cuando sus condiciones iniciales y su historia de sistema abierto se restringen adecuadamente. | A-COND | AUDITADO | `EVID-METHOD-DECAY-001`, `EVID-METHOD-CONCORDIA-001` | `INV-EARTH-AGE-001` |
| `CLAIM-EARTH-ACCRETION-001` | La acreción y diferenciación terrestre ocurrieron durante decenas de millones de años tras las primeras CAIs, no en un instante único; los hitos de masa, núcleo, último impacto y cola tardía son diferentes. | B-COND | AUDITADO | `EVID-EARTH-HFW-001`, `EVID-EARTH-NBODY-001`, `EVID-EARTH-MANTLE-PARTITION-001`, `EVID-EARTH-HSE-001` | `INV-EARTH-AGE-001`, `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-HFW-001` | El sistema `182Hf–182W` registra separación metal–silicato integrada durante el crecimiento; no entrega una fecha única sin especificar curva de masa y grado de equilibrio. | A-COND para el registro; C para una fecha específica | AUDITADO | `EVID-EARTH-HFW-001`, `EVID-EARTH-HFW-MIXING-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-MULTISTAGE-001` | La diferenciación terrestre fue multietapa: impactos de cuerpos ya diferenciados aportaron metal que se equilibró con fracciones variables del silicato antes de entrar al núcleo. | B | AUDITADO | `EVID-EARTH-MANTLE-PARTITION-001`, `EVID-EARTH-HFW-MIXING-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-DYNAMICS-001` | Ensambles N-cuerpos muestran que embriones y planetesimales pueden generar planetas terrestres en decenas a cientos de Ma, pero ninguna familia recupera una genealogía única ni reproduce sin tensión todas las restricciones. | B para plausibilidad; D–E para historia única | AUDITADO | `EVID-EARTH-NBODY-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-COLLISIONS-001` | Impactos planetarios admiten fusión, acreción parcial, erosión, disrupción y *hit-and-run*; tratar todo choque como fusión perfecta es una aproximación, no una ley. | A para regímenes físicos; C para frecuencia histórica | AUDITADO | `EVID-EARTH-COLLISION-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-PROVENANCE-001` | Múltiples trazadores sitúan la mayor parte del material terrestre en el reservorio no carbonáceo y cerca de material tipo enstatita en composición isotópica; ninguna clase meteorítica es una receta química completa de la Tierra. | B-COND | AUDITADO | `EVID-EARTH-PROVENANCE-001`, `EVID-EARTH-RU-LATE-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-LATEACCRETION-001` | Una pequeña fracción de material se añadió al manto después de la segregación principal del núcleo; HSE, Ru y W restringen su masa, procedencia y mezcla sin identificar cada impactor. | B-COND | AUDITADO | `EVID-EARTH-HSE-001`, `EVID-EARTH-RU-LATE-001`, `EVID-EARTH-W-ISUA-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-VOLATILES-001` | Material isotópicamente semejante a condritas de enstatita contiene suficiente H para ser una fuente posible de parte del agua terrestre; esto no fija su fracción, momento ni excluye aportes carbonáceos. | B para posibilidad; C para fracción | AUDITADO | `EVID-EARTH-HYDROGEN-001`, `EVID-EARTH-MANTLE-PARTITION-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-MOON-CLOCK-001` | HSE del manto combinados con la relación simulada entre último impacto gigante y masa posterior favorecen un evento lunar posterior a la mayor parte del crecimiento; `95 ± 32 Ma` es una edad modelo condicionada. | B para posterioridad; C-COND para valor | AUDITADO | `EVID-EARTH-HSE-001` | `INV-EARTH-ACCRETION-001` |
| `CLAIM-EARTH-BOUNDARY-001` | “Fin de la formación terrestre” puede significar 50 % o 90 % de masa, último impacto gigante, fin de equilibrio núcleo–manto o fin de acreción tardía; no existe una fecha única independiente de definición y modelo. | A-SEM; D para curva exacta | AUDITADO | matriz conjunta `EVID-EARTH-*` | `INV-EARTH-ACCRETION-001` |
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

### CLAIM-COSMOS-SPECTRA-001

- **Dato:** posiciones, intensidades y perfiles de líneas, calibrados frente a transiciones atómicas.
- **Inferencia fuerte:** varias transiciones coherentes identifican un átomo o ion.
- **Inferencia condicionada:** la abundancia se obtiene al modelar temperatura, presión electrónica, ionización, opacidad, 3D/no-LTE y datos de oscilador.
- **No afirma:** que cada línea revele el sitio donde se creó el núcleo ni que una línea fuerte implique mucha abundancia.
- **Falsadores:** incoherencia entre líneas del mismo ion, estados de ionización incompatibles, longitudes de onda no reproducidas o un modelo atmosférico que elimine la identificación.

### CLAIM-STARS-FUSION-001

- **Ancla:** neutrinos producidos en cadenas solares, incluido el componente CNO detectado por Borexino.
- **Independencia:** la partícula, detector y fondos difieren de la luz fotosférica; ambas rutas comparten física nuclear y un modelo del Sol.
- **No afirma:** que toda estrella siga la misma red, que el CNO domine en el Sol o que cada etapa avanzada se observe por neutrinos.
- **Justificación A:** una fuente alternativa debe reproducir dirección solar, energía, sabores y tasas sin reacciones nucleares internas.

### CLAIM-STARS-SPROCESS-001 / PRESOLAR-GRAINS-001

- **Reloj natural:** ningún isótopo de Tc puede permanecer intacto desde la formación de una estrella vieja; su presencia atmosférica exige producción reciente y transporte.
- **Archivo material:** SiC presolar conserva anomalías correlacionadas de varios isótopos y cambia telescopio por espectrometría de masas.
- **Dependencia:** asociar un grano a una masa/metallicidad AGB específica exige pulsos térmicos, mezcla, tasas y condensación modelados.
- **Confianza:** A para que existe producción estelar y material presolar; B-COND para reconstruir un progenitor único.

### CLAIM-SN-NUCLEOSYNTHESIS-001 / MERGER-RPROCESS-001

- **Supernova:** la línea gamma de `56Co` en SN 1987A prueba material radiactivo fresco; su tiempo de aparición también restringe mezcla de ejecta.
- **Fusión compacta:** GW170817 identifica el tipo de evento; la kilonova prueba calentamiento radiactivo modelado y el espectro identifica Sr.
- **Límite común:** un evento demuestra capacidad y producción real, pero no fija por sí solo tasas históricas ni el presupuesto integrado de la Galaxia.
- **Regla de confianza:** A para la existencia del proceso en los casos observados; C para convertirlos en porcentajes universales.

### CLAIM-ELEMENT-ORIGINS-001

- **Tipo de claim:** síntesis y límite semántico.
- **Unidad correcta:** el isótopo y su cadena de síntesis–decaimiento–eyección–mezcla, no solo la casilla del elemento.
- **Alternativa fuerte:** un canal podría dominar determinados isótopos aunque no sea exclusivo; debe demostrar tasas, rendimientos y evolución química coherentes.
- **No afirma:** que todas las contribuciones sean iguales ni que el origen exacto de cada átomo terrestre sea recuperable.

### CLAIM-STARS-DISTANCE-001 / HR-001

- **Dato:** posiciones repetidas, paralajes, flujos y colores de Gaia.
- **Puente:** geometría para distancia y ley de inverso del cuadrado para luminosidad.
- **Condiciones:** punto cero astrométrico, covarianzas, extinción, selección y traducción color–temperatura.
- **Límite semántico:** una nube de puntos H–R describe una población actual; una trayectoria temporal es un cálculo confrontado con esa población.
- **Falsadores:** secuencias que desaparezcan tras controles de calibración/selección o distancias geométricas que no concuerden con sistemas independientes.

### CLAIM-STARS-MASS-001 / LIFETIME-001

- **Dato:** periodos, velocidades radiales, eclipses y curvas de luz de binarias; puntos de giro de cúmulos.
- **Inferencia fuerte:** gravedad orbital e inclinación restringida producen masas dinámicas y radios.
- **Síntesis:** la masa inicial regula temperatura central, luminosidad y ritmo; la tendencia de vida más corta a mayor masa no es una potencia universal.
- **No afirma:** que la masa actual sea siempre la inicial ni que estrellas con la misma masa aparente compartan historia binaria.

### CLAIM-STARS-BIRTH-001

- **Anclas:** perfiles moleculares espacialmente resueltos de B335 y disco/chorro de HH 212.
- **Inferencia:** transferencia radiativa y cinemática separan gas que entra, rota y sale; MHD conecta el chorro con extracción de momento angular.
- **Alternativas locales:** capas múltiples, abundancia, outflow o rotación pueden imitar parte de una firma y deben modelarse conjuntamente.
- **Borde:** demuestra formación en curso en sistemas concretos, no una eficiencia universal ni el instante absoluto de nacimiento.

### CLAIM-STARS-EVOLUTION-001

- **Anclas:** masas/radios de binarias en NGC 6791 y espaciamientos de modos mixtos en gigantes de Kepler.
- **Convergencia:** población coetánea prueba cambios sistemáticos por masa; la sismología separa interiores con apariencia exterior similar.
- **Dependencias:** membresía, helio, metalicidad, convección, difusión, rotación e identificación modal.
- **Justificación:** A para que existen estados internos distintos y evolución; B para una edad absoluta o trayectoria cuantitativa concreta.

### CLAIM-STARS-WD-001

- **Dinámica:** Sirius B tiene masa orbital y radio compatibles con una enana blanca de núcleo C/O bajo los modelos usados.
- **Población:** cúmulos permiten restar tiempo de enfriamiento a su edad y estimar una masa progenitora; así se construye la IFMR.
- **No afirma:** un umbral inicial rígido ni que toda enana blanca aislada conserve una genealogía única.

### CLAIM-STARS-CORECOLLAPSE-001

- **Imagen diferencial:** los progenitores de SN 1993J y SN 2003gd desaparecieron; en 1993J permaneció una compañera azul.
- **Mensajero distinto:** Kamiokande II observó 11 eventos en 13 s asociados con SN 1987A.
- **Inferencia fuerte:** algunas supergigantes sufren colapso de núcleo con enorme liberación neutrínica.
- **No afirma:** que toda estrella masiva produzca igual supernova, luminosidad o remanente.

### CLAIM-STARS-REMNANT-001

- **Púlsares:** regularidad, frenado, energía y asociaciones apoyan el modelo de estrella de neutrones rotante y magnetizada.
- **Cygnus X-1:** astrometría, órbita y modelo de la compañera producen una masa compacta cercana a `21 M☉` en el análisis de 2021.
- **Borde:** el horizonte de Cyg X-1 no fue resuelto; el agujero negro es una inferencia dinámica y relativista fuertemente restringida.

### CLAIM-STARS-BOUNDARY-001

- **Tipo de claim:** límite semántico y poblacional.
- **Evidencia:** la alta incidencia de interacción en estrellas O y casos como SN 1993J muestran rutas alteradas por compañeras.
- **Consecuencia:** los diagramas de estrella aislada son controles físicos, no censos universales.
- **Falsador:** una población completa mejor explicada por una ruta única sin composición, pérdida, rotación o interacción.

### CLAIM-SOLAR-DISK-001 / BOUNDARY-001

- **Dos archivos:** discos observados alrededor de otras estrellas jóvenes y fósiles materiales del Sistema Solar.
- **Convergencia:** los análogos prueban la clase física; meteoritos, cometas, isótopos, remanencia y órbitas restringen la genealogía local.
- **No afirma:** que HL Tau o DSHARP sean fotografías del joven Sistema Solar; que se conozcan masa, radio y evolución exactos.
- **Adversario:** una genealogía no discoidal debe reproducir conjuntamente arquitectura, cronología de sólidos, reservorios, transporte y frecuencia de discos.

### CLAIM-SOLAR-SUBSTRUCTURE-001

- **Dato:** DSHARP reconstruyó contrastes anulares, espirales y asimetrías en una muestra seleccionada de discos brillantes y grandes.
- **Puente:** intensidad milimétrica depende de densidad, temperatura, opacidad y distribución de tamaños.
- **Límite:** planetas son una causa plausible, no una etiqueta observada en todo hueco.
- **Prueba discriminatoria:** cinemática del gas, espectro multibanda, temperatura y detección independiente del perturbador.

### CLAIM-SOLAR-AGE-001 / CHRONOLOGY-001

- **Dato:** Pb–Pb corregido por U en CAIs y cóndrulos individuales.
- **Resultado:** CAIs analizadas anclan `4567.30 ± 0.16 Ma`; cóndrulos fechados registran procesamiento hasta cerca de 3 Ma después.
- **Límite semántico:** tiempo cero meteórico no es encendido exacto del Sol ni formación instantánea de planetas.
- **Dependencias:** cierre, composición de U, Pb inicial, muestreo de objetos supervivientes.

### CLAIM-SOLAR-RADIONUCLIDE-001 / PLANETESIMAL-001

- **Anclas:** isócrona fósil `26Al–26Mg`, cronómetros Hf–W y meteoritos diferenciados.
- **Inferencia:** `26Al` existió y cuerpos suficientemente grandes aparecieron muy pronto para retener su calor.
- **Abierto:** fuente estelar/local, momento de incorporación y homogeneidad; presupuesto térmico depende de acreción, tamaño y conductividad.
- **No afirma:** que la razón canónica de ciertas CAIs se aplique sin prueba a todo reservorio.

### CLAIM-SOLAR-RESERVOIRS-001

- **Dato:** agrupaciones multielementales CC/NC y edades de cuerpos progenitores.
- **Inferencia fuerte:** mezcla incompleta e intercambio limitado durante una parte de la vida del disco.
- **Inferencia condicional:** Júpiter creció pronto y actuó como barrera aerodinámica.
- **Alternativas:** máximos de presión no jovianos, zonación temporal o frentes de formación planetesimal.

### CLAIM-SOLAR-TRANSPORT-001

- **Dato:** Stardust devolvió material refractario de alta temperatura desde el cometa Wild 2.
- **Puente:** esa mineralogía no se forma en equilibrio en la región fría de ensamblaje cometario.
- **Conclusión:** hubo reubicación a gran escala; difusión, vientos, flujos y dispersión siguen siendo mecanismos rivales.
- **Tensión útil:** transporte no equivale a homogeneización completa, como muestra CC/NC.

### CLAIM-SOLAR-MAGNETIC-001

- **Dato:** componentes de remanencia en cóndrulos de Semarkona y calibración de paleointensidad.
- **Condiciones:** portadores fieles, magnetización preacrecional y descarte de remagnetización posterior.
- **Resultado:** campo nebular compatible con transporte magnético de momento; no identifica un mecanismo MHD único.

### CLAIM-SOLAR-GROWTH-001

- **Laboratorio:** agregados cambian entre adhesión, compactación, erosión y fragmentación según energía/estructura.
- **Dinámica:** gas subkepleriano produce deriva; el crecimiento binario puede perder la carrera.
- **Modelos:** inestabilidad de flujo y autogravedad concentran sólidos bajo parámetros concretos.
- **Borde:** simulación plausible no es observación de la genealogía solar ni prueba de universalidad.

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

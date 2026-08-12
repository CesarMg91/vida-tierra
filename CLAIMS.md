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
| `CLAIM-EARTH-CORE-EXIST-001` | La Tierra posee una región central separada del manto por una discontinuidad global de radio aproximado 3480 km. | A | AUDITADO | `EVID-EARTH-CORE-PKP-001`, `EVID-EARTH-CORE-MODES-001`, `EVID-EARTH-CORE-MOI-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-LIQUID-001` | El núcleo externo transmite compresión pero tiene módulo de corte efectivo y `Vs` aproximadamente cero en escalas sísmicas. | A | AUDITADO | `EVID-EARTH-CORE-SHEAR-001`, `EVID-EARTH-CORE-MODES-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-INNER-001` | Existe un núcleo interno sólido de radio aproximado 1221.5 km; su estructura fina y anisotropía tienen mayor incertidumbre. | A para existencia/solidez; B-C para estructura | AUDITADO | `EVID-EARTH-CORE-ICB-001`, `EVID-EARTH-CORE-MODES-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-MASS-001` | Masa, radio, momento de inercia y perfiles sísmicos muestran una concentración central de masa muy superior a la de una esfera homogénea. | A para concentración; B-COND para perfil particular | AUDITADO | `EVID-EARTH-CORE-MOI-001`, `EVID-EARTH-CORE-MODES-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-COMPOSITION-001` | El núcleo es una aleación dominada por Fe, con Ni y uno o varios elementos ligeros; la receta exacta sigue abierta. | B-COND para familia; D para porcentajes exactos | AUDITADO | `EVID-EARTH-CORE-SIDEROPHILE-001`, `EVID-EARTH-CORE-MINERALPHYS-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-TIMING-001` | La segregación metal–silicato principal acompañó la acreción temprana en múltiples episodios y no fecha la nucleación posterior del núcleo interno. | B-COND para proceso temprano; C para fecha única | AUDITADO | `EVID-EARTH-CORE-HFW-001` | `INV-EARTH-CORE-001` |
| `CLAIM-EARTH-CORE-DYNAMO-001` | El campo geomagnético es compatible con una dínamo en una envoltura central conductora, rotante y convectiva; no determina por sí solo composición ni edad. | B-COND | AUDITADO | `EVID-EARTH-CORE-DYNAMO-001`, `EVID-EARTH-CORE-PALEO-001` | `INV-EARTH-CORE-001` |
| `CLAIM-MOON-IMPACT-001` | La Luna se formó mejor dentro de una familia en que uno o más impactos pusieron material silicatado en órbita durante la acreción final terrestre y ese material reacretó. | B-COND | AUDITADO | `EVID-MOON-SPH-CANON-001`, `EVID-MOON-CORE-001`, `EVID-MOON-ANGMOM-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-IRON-001` | La Luna es predominantemente silicatada y posee un núcleo metálico pequeño, una restricción compatible con eyección preferente de mantos. | A para poco Fe; B-COND para mecanismo | AUDITADO | `EVID-MOON-CORE-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-MAGMAOCEAN-001` | La Luna experimentó fusión y diferenciación extensas muy temprano; la profundidad, globalidad y duración exactas del océano de magma siguen abiertas. | B-COND | AUDITADO | `EVID-MOON-ANORTHOSITE-001`, `EVID-MOON-ZIRCON-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-ISOTOPES-001` | Tierra y Luna son extraordinariamente semejantes en varios sistemas isotópicos refractarios, con diferencias pequeñas dependientes de sistema y litología que restringen procedencia y mezcla. | A-COND para patrón; C-D para causa | AUDITADO | `EVID-MOON-OXYGEN-001`, `EVID-MOON-TITANIUM-001`, `EVID-MOON-VANADIUM-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-VOLATILES-001` | La depleción y el fraccionamiento de elementos moderadamente volátiles registran procesamiento a alta temperatura y condensación/pérdida, sin exigir una Luna totalmente anhidra. | B-COND | AUDITADO | `EVID-MOON-POTASSIUM-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-DYNAMICS-001` | Masa, órbita y momento angular restringen los impactos viables, pero mareas y posibles resonancias impiden tratarlos como estado inalterado del choque. | B-COND | AUDITADO | `EVID-MOON-ANGMOM-001`, `EVID-MOON-HIGHAM-001` | `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-AGE-001` | Formación y diferenciación lunares fueron tempranas, probablemente dentro de las primeras decenas a ~100 Ma; cada cifra depende del evento fechado y del modelo. | C | AUDITADO | `EVID-MOON-ZIRCON-001`, `EVID-MOON-HFW-001` | `INV-EARTH-AGE-001`, `INV-MOON-ORIGIN-001` |
| `CLAIM-MOON-SCENARIO-001` | Ninguna masa de Theia, geometría, estado post-impacto o secuencia singular ha sido identificada de manera única por los datos actuales. | A-SEM; D-E para biografía | AUDITADO | conjunto `EVID-MOON-*` | `INV-MOON-ORIGIN-001` |
| `CLAIM-HADEAN-ZIRCON-001` | Un zircon detrítico de Jack Hills conserva un dominio U–Pb de 4404 ± 8 Ma, entre los materiales terrestres conocidos más antiguos; la edad pertenece al mineral, no al metasedimento huésped. | B | AUDITADO | `EVID-HADEAN-JH-ZIRCON-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-ZIRCON-SOURCE-001` | Hf, elementos traza e inclusiones de poblaciones de zircones hadeanos requieren magmas diferenciados y, en muchos granos, fuentes corticales retrabajadas; no fijan por sí solos volumen continental ni placas modernas. | B-COND | AUDITADO | `EVID-HADEAN-JH-HF-001`, `EVID-HADEAN-JH-TRACE-001` | `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-CRUST-REWORK-001` | Diferenciación y residencia/retrabajo de material cortical operaban antes de 4.0 Ga; los tiempos de extracción exactos son edades de modelo dependientes del reservorio. | B-COND | AUDITADO | `EVID-HADEAN-JH-HF-001`, `EVID-HADEAN-ZIRCON-DIVERSITY-001` | `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-WATER-001` | Dominios magmáticos de algunos zircones de Jack Hills requieren, bajo los modelos petrológicos usados, material fuente alterado por agua líquida somera antes de ~4.3–4.2 Ga. | C | AUDITADO | `EVID-HADEAN-OXYGEN-001`, `EVID-HADEAN-OXYGEN-QA-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-WATER-001` |
| `CLAIM-HADEAN-HYDROSPHERE-001` | La convergencia de zircon, Acasta y Nuvvuagittuq apoya alguna hidrosfera superficial muy temprana, pero no fija volumen, conectividad, salinidad ni continuidad de un océano global. | C para hidrosfera; D para océano global | AUDITADO | `EVID-HADEAN-OXYGEN-001`, `EVID-HADEAN-NGB-HYDRO-001` | `INV-HADEAN-WATER-001` |
| `CLAIM-HADEAN-HYDROCYCLE-001` | Zircones de Jack Hills con `δ18O` sub-manto apoyan interacción de agua meteórica con sistemas corticales someros hacia 4.0 Ga o antes, condicionada por modelos de mezcla. | C | AUDITADO | `EVID-HADEAN-METEORIC-001` | `INV-HADEAN-WATER-001` |
| `CLAIM-HADEAN-NGB-WATER-001` | Oxígeno triple e hidrógeno de rocas máficas de Nuvvuagittuq son compatibles con alteración hidrotermal de baja temperatura por agua isotópicamente semejante a marina; la edad exacta del protolito es discutida. | C-PROV | AUDITADO | `EVID-HADEAN-NGB-HYDRO-001` | `INV-HADEAN-WATER-001` |
| `CLAIM-HADEAN-COOL-001` | “Tierra temprana fría” significa que existieron intervalos y lugares compatibles con corteza y agua líquida; no mide temperatura media global, estabilidad climática ni habitabilidad continua. | B-SEM para el límite; E para clima global desde zircon | AUDITADO | `EVID-HADEAN-OXYGEN-QA-001`, `EVID-HADEAN-HYDRO-MODEL-001` | `INV-HADEAN-WATER-001` |
| `CLAIM-HADEAN-MAGMA-REDOX-001` | Oxibarómetros de Ce y U en dominios ígneos de zircon indican que algunos fundidos hadeanos estuvieron aproximadamente entre `FMQ−1` y `FMQ+1` hacia 4.35–4.15 Ga; esto no mide `O₂` atmosférico. | B-COND | AUDITADO | `EVID-HADEAN-ZIRCON-REDOX-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-HADEAN-ATMOSPHERE-COMPOSITION-001` | El redox, inventario, presión, temperatura y solubilidad restringen familias de gases desgasificados, pero no existe una medición de la composición o presión completas de la atmósfera hadeana. | B-COND para control; E para mezcla exacta | AUDITADO | `EVID-HADEAN-OUTGASSING-001`, `EVID-HADEAN-HYDROGEN-ESCAPE-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-HADEAN-ATMOSPHERE-O2-001` | Redox magmático cercano a `FMQ` no implica aire con O₂; S-MIF pre-3770 Ma favorece una atmósfera eoarcaica sin oxígeno libre apreciable y sólo limita indirectamente el Hadeano. | B-COND para ~3.77 Ga; C-D para extrapolación | AUDITADO | `EVID-HADEAN-ZIRCON-REDOX-001`, `EVID-EOARCHEAN-SMIF-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-HADEAN-ATMOSPHERE-ESCAPE-001` | Xenón en cuarzo de ~3.3 Ga registra fraccionamiento atmosférico prolongado y desgasificación mantélica más intensa que la moderna; el mecanismo y la extrapolación al Hadeano son modelados. | B-COND para evolución; C-D para mecanismo | AUDITADO | `EVID-HADEAN-XE-ESCAPE-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-HADEAN-ATMOSPHERE-DYNAMIC-001` | Desgasificación, condensación, reacciones superficiales, impactos y escape pudieron construir una sucesión de atmósferas; sus pesos y cronología exactos permanecen abiertos. | C | AUDITADO | `EVID-HADEAN-OUTGASSING-001`, `EVID-HADEAN-IMPACT-OUTGASSING-001`, `EVID-HADEAN-XE-ESCAPE-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-ARCHEAN-ATMOSPHERE-PRESSURE-001` | Inclusiones de 3.5–3.0 Ga y vesículas de 2.7 Ga imponen cotas arqueanas de `pN₂` y presión total bajo sus modelos; no son paleobarómetros del Hadeano. | B-COND para sus épocas; E para copiar al Hadeano | AUDITADO | `EVID-ARCHEAN-PRESSURE-001` | `INV-HADEAN-ATMOSPHERE-001` |
| `CLAIM-HADEAN-ACASTA-001` | Ortogneises de Acasta conservan edades de protolito ígneo de hasta 4031 ± 3 Ma, aunque su fábrica actual incorpora metamorfismo y deformación posteriores. | B | AUDITADO | `EVID-HADEAN-ACASTA-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-ACASTA-SOURCE-001` | La unidad Idiwhaa de Acasta es compatible con fusión somera de una fuente máfica hidratada; el mecanismo térmico, incluido impacto, no está identificado de forma única. | C para fuente; D para impacto | AUDITADO | `EVID-HADEAN-ACASTA-SOURCE-001` | `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-NGB-001` | Intrusiones metagabroicas de Nuvvuagittuq produjeron isócronas `146Sm–142Nd` y `147Sm–143Nd` próximas a 4.16 Ga en el estudio de 2025. | B-PROV | AUDITADO | `EVID-HADEAN-NGB-001`, `EVID-HADEAN-NGB-LEGACY-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-NGB-002` | Las rocas encajantes cortadas por esas intrusiones son anteriores al evento de ~4.16 Ga si el contacto es intrusivo; esto es un límite local, no una edad exacta de todo el cinturón. | C-LOCAL | AUDITADO | `EVID-HADEAN-NGB-001`, `EVID-HADEAN-NGB-DETRITAL-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-CRUST-DIVERSITY-001` | Poblaciones de zircon de Jack Hills y Barberton son compatibles con estilos corticales contemporáneos distintos; no se justifica imponer un único régimen geodinámico global al Hadeano. | C | AUDITADO | `EVID-HADEAN-ZIRCON-DIVERSITY-001` | `INV-HADEAN-CRUST-001` |
| `CLAIM-HADEAN-BOMBARDMENT-001` | La Luna y el archivo terrestre posterior exigen un bombardeo temprano mucho más intenso que el actual y declinante en términos generales; la forma fina de la curva no es única. | B-COND | AUDITADO | `EVID-HADEAN-LUNAR-IMPACT-001`, `EVID-LUNAR-CRATER-STRAT-001`, `EVID-ARCHEAN-SPHERULE-001` | `INV-HADEAN-IMPACTS-001` |
| `CLAIM-HADEAN-LHB-001` | Una intensificación global, breve y única cerca de 3.9 Ga no está establecida: edades agrupadas, cola decreciente y modelos híbridos son compatibles con subconjuntos del archivo. | D para pico único | AUDITADO | `EVID-LUNAR-AGECLUSTER-001`, `EVID-LUNAR-ARGON-BIAS-001`, `EVID-LUNAR-PRE39-BASIN-001` | `INV-EARTH-AGE-001`, `INV-HADEAN-IMPACTS-001` |
| `CLAIM-LUNAR-BASINS-EARLY-001` | Fundidos de impacto a `4.22 Ga` y candidatos de South Pole–Aitken a `4.25` o `4.33 Ga` demuestran una época de grandes impactos anterior a 4.0 Ga; la edad exacta de SPA sigue abierta. | B-COND; B-PROV/C para SPA | AUDITADO | `EVID-LUNAR-PRE39-BASIN-001`, `EVID-LUNAR-SPA-001` | `INV-HADEAN-IMPACTS-001` |
| `CLAIM-LUNAR-IMBRIUM-BIAS-001` | La procedencia de los sitios Apollo y la distribución de ejecta de Imbrium impiden tratar todas las edades `~3.9 Ga` como eventos geográficamente independientes. | B-COND | AUDITADO | `EVID-LUNAR-IMBRIUM-PROVENANCE-001`, `EVID-LUNAR-AGECLUSTER-001` | `INV-HADEAN-IMPACTS-001` |
| `CLAIM-HADEAN-IMPACT-EARTH-001` | La Tierra debió recibir más impactos integrados que la Luna para una población común, pero su cronología, energía y efectos no se obtienen multiplicando el registro lunar por una constante. | B-COND para más impactos; D-E para curva/efectos | AUDITADO | `EVID-IMPACT-DYNAMICS-001`, `EVID-ARCHEAN-SPHERULE-001` | `INV-HADEAN-IMPACTS-001` |
| `CLAIM-HADEAN-IMPACT-SURVIVAL-001` | La supervivencia de zircones y señales de agua hadeanas es compatible con impactos extremos pero exige heterogeneidad espacial o temporal; no favorece esterilización global continua de todos los reservorios. | C | AUDITADO | `EVID-LUNAR-CRATER-STRAT-001`, `EVID-HADEAN-JH-ZIRCON-001`, `EVID-HADEAN-HYDRO-MODEL-001` | `INV-HADEAN-WATER-001`, `INV-HADEAN-IMPACTS-001` |
| `CLAIM-LIFE-BY3430-001` | Un paquete multiescala de arrecifes, facies y microestructuras carbonosas establece que la vida microbiana existía como mínimo hacia `3.43 Ga`; no fecha su origen. | B-COND | AUDITADO | `EVID-LIFE-STRELLEY-REEF-001`, `EVID-LIFE-STRELLEY-MICRO-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-STRELLEY-001` | Los estromatolitos y microestructuras de Strelley Pool son más coherentes con una comunidad biológica que con las alternativas abióticas examinadas, por su organización espacial, tafonomía y química combinadas. | B-COND | AUDITADO | `EVID-LIFE-STRELLEY-REEF-001`, `EVID-LIFE-STRELLEY-MICRO-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-DRESSER-001` | Estructuras sedimentarias, contexto de fuentes termales e isótopos de S hacen probable actividad biológica en Dresser hacia `3.48 Ga`, aunque procesos hidrotermales imitan líneas aisladas. | C↑ | AUDITADO | `EVID-LIFE-DRESSER-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-ISUA-CARBON-001` | El grafito distribuido en horizontes metasedimentarios de Isua, con poblaciones y huéspedes distintos de vetas tardías, favorece materia orgánica detrítica biogénica a `≥3.7 Ga`; los metabolismos concretos son menos seguros. | C↑ | AUDITADO | `EVID-LIFE-ISUA-CARBON-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-ISUA-STROM-001` | Las estructuras cónicas de Isua propuestas como estromatolitos de `3.7 Ga` se explican mejor por deformación postdeposicional en el material reanalizado; esto no refuta otras líneas de vida en Isua. | B para la reevaluación; D para origen biológico | AUDITADO | `EVID-LIFE-ISUA-STROM-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-PRE3700-001` | Nuvvuagittuq, Saglek, Akilia y el grafito de un zircon de `4.10 Ga` contienen señales compatibles con vida muy antigua, pero ninguna asegura simultáneamente edad del horizonte, singenicidad y biogenicidad; no establecen vida pre-`3.7 Ga`. | D-E según caso | AUDITADO | `EVID-LIFE-AKILIA-001`, `EVID-LIFE-NUV-001`, `EVID-LIFE-SAGLEK-001`, `EVID-LIFE-ZIRCON-4100-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-ORIGIN-AGE-001` | Toda biosignatura fechada proporciona una edad mínima para la existencia de vida, no la fecha exacta de su origen ni el tiempo transcurrido desde él. | A para la relación lógica; hereda la confianza de cada biosignatura | AUDITADO | `EVID-LIFE-CRITERIA-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-LIFE-MULTILINE-001` | Una afirmación de vida muy antigua requiere separar indigeneidad, singenicidad y biogenicidad, y gana poder sólo cuando morfología, química, contexto y tafonomía no dependen del mismo posible fallo. | B | AUDITADO | `EVID-LIFE-CRITERIA-001`, `EVID-LIFE-APEX-001` | `INV-ARCHEAN-LIFE-001` |
| `CLAIM-PHOTO-BY3416-001` | Tapetes carbonosos organizados por facies establecen fototrofía en Buck Reef por `3.416 Ga`, sin identificar productor ni aparato molecular. | C↑ | AUDITADO | `EVID-PHOTO-BUCKREEF-MATS-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-PHOTO-ANOXY-001` | El estado redox de Buck Reef favorece fotosíntesis anoxigénica; `H₂` es un donador plausible pero no único. | C para anoxigénica; C-D para `H₂` | AUDITADO | `EVID-PHOTO-BUCKREEF-REDOX-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-OXYGENIC-BY2870-001` | La fotosíntesis oxigénica producía `O₂` local por `2.87 Ga`; tres plataformas conservan oxidación de Ce fechada como singenética. | B-COND | AUDITADO | `EVID-OXYGENIC-LACE-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-OXYGENIC-PONGOLA-001` | Mo/Fe de Pongola favorecen un oasis superficial de `O₂` a `≥2.95 Ga`, bajo una atmósfera todavía reducida. | C↑ | AUDITADO | `EVID-OXYGENIC-PONGOLA-MOFE-001`, `EVID-OXYGENIC-PONGOLA-CR-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-OXYGENIC-ORIGIN-001` | El origen exacto de la fotosíntesis oxigénica no está fechado; geoquímica y relojes son compatibles con origen arcaico anterior a `2.87 Ga`, quizá `~3.4–2.9 Ga`. | C-D para ventana; D-E para fecha/linaje | AUDITADO | `EVID-OXYGENIC-LACE-001`, `EVID-PHOTO-CLOCK-001`, `EVID-PHOTO-MARBLEBAR-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-PHOTO-O2-ACCUM-001` | Producción de `O₂`, oasis local y acumulación atmosférica persistente son estados distintos; la última exige superar sumideros y no fecha el origen metabólico. | A para distinción; B-COND para historia terrestre | AUDITADO | `EVID-PHOTO-SINKS-001`, `EVID-OXYGENIC-PONGOLA-MOFE-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-PHOTO-BIOMARKER-001` | Los hopanos/esteranos arcaicos clásicos no son un reloj válido de cianobacterias o fotosíntesis oxigénica porque fallan controles de singenicidad y contaminación. | B para retirar el archivo; D-E como reloj | AUDITADO | `EVID-PHOTO-BIOMARKER-CLEAN-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-PHOTO-DIRECT-FOSSIL-001` | Tilacoides intracelulares de *Navifusa* documentan directamente fotótrofos oxigénicos a `1.78–1.73 Ga`, pero no el origen del metabolismo. | B para el mínimo; E como fecha de origen | AUDITADO | `EVID-PHOTO-THYLAKOID-001` | `INV-ARCHEAN-PHOTOSYNTHESIS-001` |
| `CLAIM-GOE-ATMOSPHERE-001` | El `O₂` atmosférico cruzó un umbral persistente durante la transición paleoproterozoica, demostrado principalmente por el cambio de régimen del S. | B-COND | AUDITADO | `EVID-GOE-SMIF-001`, `EVID-GOE-GEOCHRON-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-PROTRACTED-001` | La Gran Oxidación fue una transición prolongada/asíncrona con cruces locales rápidos, pulsos y memoria de cuenca, no un instante global único. | B-COND | AUDITADO | `EVID-GOE-GEOCHRON-001`, `EVID-GOE-SMIF-MEMORY-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-SMIF-001` | Grandes anomalías `S‑MIF` distinguen un régimen atmosférico muy pobre en `O₂`; su pérdida fija un umbral modelado, no un porcentaje continuo. | B para régimen; C-D para cota | AUDITADO | `EVID-GOE-SMIF-001`, `EVID-GOE-SMIF-MEMORY-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-WEATHERING-001` | La meteorización continental se hizo más oxidativa durante la transición, aunque pirita detrítica muestra intervalos de oxidación todavía limitada. | B-COND | AUDITADO | `EVID-GOE-WEATHERING-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-OCEAN-001` | Plataformas someras desarrollaron oxigenación persistente hacia `~2.32 Ga`, mientras gran parte del océano profundo permaneció anóxica. | B-COND | AUDITADO | `EVID-GOE-OCEAN-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-LEVEL-001` | El cambio relativo de `pO₂` está establecido, pero su trayectoria absoluta durante la GOE sigue abierta por órdenes de magnitud. | B para cambio; D para curva | AUDITADO | `EVID-GOE-SMIF-001`, `EVID-GOE-WEATHERING-001`, `EVID-GOE-OCEAN-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-GLACIATION-001` | Glaciaciones, magmatismo y oxigenación están temporalmente acoplados, sin una dirección causal única demostrada. | C para acoplamiento; D para causalidad | AUDITADO | `EVID-GOE-GLACIAL-001`, `EVID-GOE-MODEL-001` | `INV-PROT-GOE-001` |
| `CLAIM-GOE-CAUSE-001` | Ningún aumento de fuente, reducción de sumidero o retroalimentación única explica de forma identificada toda la transición. | D-E | AUDITADO | `EVID-GOE-MODEL-001` y matriz `EVID-GOE-*` | `INV-PROT-GOE-001` |
| `CLAIM-LUCA-COMMON-ANCESTRY-001` | La vida celular conocida comparte una genealogía común; la conclusión no cuenta orígenes sin descendencia muestreada. | A-COND | AUDITADO | `EVID-LUCA-COMMON-001`, `EVID-LUCA-RRNA-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-DEFINITION-001` | LUCA es el último ancestro común de Bacteria y Archaea actuales, no la primera vida ni necesariamente una célula individual. | A-SEM | AUDITADO | definición filogenética + `EVID-LUCA-TRANSLATION-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-ROOT-001` | La raíz principal del árbol celular separa Bacteria de Archaea; Eukaryota es un linaje derivado con herencias arqueana y bacteriana. | B-COND | AUDITADO | `EVID-LUCA-PARALOG-ROOT-001`, `EVID-LUCA-RRNA-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-TRANSLATION-001` | Antes de la divergencia Bacteria–Archaea ya operaban código genético, ribosoma, `tRNA` y un núcleo de traducción. | A-B | AUDITADO | `EVID-LUCA-TRANSLATION-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-CELL-001` | LUCA poseía alguna delimitación funcional capaz de sostener transporte y gradientes; su composición lipídica no está resuelta. | B-COND | AUDITADO | `EVID-LUCA-BIOENERGY-001`, `EVID-LUCA-LIPID-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-DNA-001` | LUCA tenía probablemente un genoma de DNA, aunque no puede identificarse con seguridad su replicasa principal. | B-COND para DNA; C-D para replicasa | AUDITADO | `EVID-LUCA-REPLICATION-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-ENERGY-001` | LUCA conservaba energía mediante ATP y un sistema quimiosmótico transmembrana. | B-COND | AUDITADO | `EVID-LUCA-BIOENERGY-001`, `EVID-LUCA-PARALOG-ROOT-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-METABOLISM-001` | Reconstrucciones distintas favorecen un anaerobio con metabolismo de carbono central; acetogénesis, termofilia y hábitat hidrotermal son más condicionados. | C-COND general; C-D retrato | AUDITADO | `EVID-LUCA-WEISS-001`, `EVID-LUCA-MOODY-RECON-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-GENOME-001` | Un modelo probabilístico estima para LUCA un genoma de `2.49–2.99 Mb` y `2,451–2,855` proteínas; son extrapolaciones, no secuencia recuperada. | C-COND | AUDITADO | `EVID-LUCA-MOODY-RECON-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-AGE-001` | Relojes de parálogos pre‑LUCA son compatibles con un nodo cercano a `4.2 Ga`, pero edad y precisión dependen de calibraciones, priors y modelos de tasa. | C-D | AUDITADO | `EVID-LUCA-MOODY-CLOCK-001`, `EVID-LUCA-BETTS-CLOCK-001` | `INV-LIFE-LUCA-001` |
| `CLAIM-LUCA-ECOSYSTEM-001` | LUCA representa mejor una población dentro de un ecosistema preexistente que un individuo aislado en un planeta vacío. | B-SEM para población; C para ecosistema | AUDITADO | `EVID-LUCA-MOODY-RECON-001` + lógica poblacional | `INV-LIFE-LUCA-001` |
| `CLAIM-EUK-TWO-DOMAIN-001` | La herencia nuclear informacional de Eukaryota deriva de Archaea; su herencia mitocondrial añade una rama bacteriana. | A-COND | AUDITADO | `EVID-EUK-ASGARD-PHYLO-001`, `EVID-EUK-MITO-PHYLO-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-ASGARD-HOST-001` | Asgard contiene los parientes arqueanos conocidos más próximos de Eukaryota; la rama exacta sigue sensible a muestreo/modelo. | A-B amplia; C-D fina | AUDITADO | `EVID-EUK-ASGARD-PHYLO-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-ASGARD-ESP-001` | Actina/profilina, ESCRT, ubiquitina y remodelado de membranas muestran que piezas de complejidad eucariota tienen raíces Asgard. | B | AUDITADO | `EVID-EUK-ASGARD-ESP-001`, `EVID-EUK-PROMETHEO-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-MITO-ENDOSYMBIOSIS-001` | La mitocondria deriva de una bacteria Alpha-relacionada integrada por endosimbiosis; el donante exacto no está identificado. | A-COND; B-COND Alpha | AUDITADO | `EVID-EUK-MITO-PHYLO-001`, `EVID-EUK-MRO-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-MITO-LECA-001` | LECA ya era mitocondriado; mitosomas, hidrogenosomas y pérdidas completas son estados derivados. | A-B | AUDITADO | `EVID-EUK-MRO-001`, `EVID-EUK-LECA-RECON-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-LECA-COMPLEX-001` | LECA poseía núcleo, endomembranas, citoesqueleto, ciclo celular y otros sistemas eucariotas complejos. | A-B por sistema | AUDITADO | `EVID-EUK-LECA-RECON-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-GENE-MOSAIC-001` | El repertorio reconstruido de LECA combina ascendencia Asgard, Alpha y otras transferencias; los porcentajes dependen del método. | B para mosaico; C-D para fracciones | AUDITADO | `EVID-EUK-ANCESTRY-TOBIASSON-001`, `EVID-EUK-ANCESTRY-BERNABEU-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-SEQUENCE-001` | Duplicaciones fechadas favorecen que parte sustancial de la complejidad del huésped precediera a la adquisición mitocondrial. | C-COND | AUDITADO | `EVID-EUK-DUPLICATIONS-001`, `EVID-EUK-ANCESTRY-TOBIASSON-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-AGE-001` | Eucariogénesis fue un proceso prolongado; FECA, endosimbiosis y LECA no tienen una sola fecha intercambiable. | C-D | AUDITADO | `EVID-EUK-DUPLICATIONS-001`, `EVID-EUK-FOSSIL-REDOX-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-FOSSIL-MINIMUM-001` | Fósiles de ~1.75–1.4 Ga establecen una edad mínima para células eucariotas ya complejas, no para su origen. | B-C | AUDITADO | `EVID-EUK-FOSSIL-REDOX-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-OXYGEN-001` | Los eucariotas fósiles tempranos muestreados se asociaban principalmente con fondos oxigenados y probablemente eran aerobios. | C-COND | AUDITADO | `EVID-EUK-FOSSIL-REDOX-001` | `INV-LIFE-EUK-001` |
| `CLAIM-EUK-PLASTID-DISTINCT-001` | Los plastidios proceden de una endosimbiosis cianobacteriana posterior en un huésped eucariota ya mitocondriado. | A-B | AUDITADO | filogenias/genomas de plastidios; marco comparativo | `INV-LIFE-EUK-001` |
| `CLAIM-SEX-DEFINITION-001` | Sexo, reproducción, transferencia, recombinación, fusión, ploidía y meiosis son conceptos solapados pero no equivalentes. | A-SEM | AUDITADO | marco operacional + `EVID-SEX-MEIOSIS-TOOLKIT-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-LECA-001` | LECA poseía maquinaria meiótica extensa y probablemente un ciclo con fusión; la coordinación exacta permanece condicionada. | B; B-COND ciclo | AUDITADO | `EVID-SEX-MEIOSIS-TOOLKIT-001`, `EVID-SEX-HAP2-STRUCTURE-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-MEIOSIS-ORIGIN-001` | La meiosis ensambló módulos preexistentes de reparación, cohesión y segregación con especializaciones propias. | B-C; D orden | AUDITADO | `EVID-SEX-MEIOSIS-TOOLKIT-001`, `EVID-SEX-SPO11-PHYLO-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-SPO11-001` | Spo11 inicia roturas meióticas modernas y deriva de la familia Top6A; eso no fecha su cooptación. | A función/homología; B-COND origen | AUDITADO | `EVID-SEX-SPO11-BREAK-001`, `EVID-SEX-SPO11-PHYLO-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-FUSION-001` | HAP2 es un fusógeno eucariota antiguo y su relación con Fsx1 amplía, sin resolver, la historia de fusexinas. | A-B función; C-D historia | AUDITADO | `EVID-SEX-HAP2-STRUCTURE-001`, `EVID-SEX-FUSEXIN-ARCHAEA-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-CRYPTIC-001` | *Giardia* y *Trichomonas* conservan señales de procesos sexuales antes considerados ausentes. | B-COND | AUDITADO | `EVID-SEX-GIARDIA-001`, `EVID-SEX-MEIOSIS-TOOLKIT-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-ASEXUALITY-001` | Ausencia de sexo observado no prueba asexualidad ancestral; *Adineta* muestra intercambio incompatible con clonación estricta. | B-COND intercambio; C-D mecanismo | AUDITADO | `EVID-SEX-BDELLOID-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-ADVANTAGE-001` | Sexo puede favorecer adaptación o purga bajo condiciones concretas, pero su ventaja no es universal. | A-B local; C general | AUDITADO | `EVID-SEX-EXPERIMENTS-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-ORIGIN-MAINTENANCE-001` | Beneficios que mantienen sexo moderno no identifican automáticamente la causa histórica de su origen. | A-LOG | AUDITADO | `EVID-SEX-EXPERIMENTS-001` + distinción causal | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-COST-001` | Los costos de sexo dependen del ciclo y el «doble costo de machos» no se aplica a toda sexualidad. | A-B definido; C general | AUDITADO | `EVID-SEX-EXPERIMENTS-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-ANISOGAMY-001` | Mating types no equivalen a macho/hembra; la anisogamia es derivada y surgió repetidamente. | B; C rutas | AUDITADO | `EVID-SEX-ANISOGAMY-VOLVOX-001`, `EVID-SEX-BANGIOMORPHA-001` | `INV-LIFE-SEX-001` |
| `CLAIM-SEX-FOSSIL-001` | *Bangiomorpha* a `1.047 +0.013/−0.017 Ga` ofrece un mínimo condicionado para sexo diferenciado, no una fecha de origen. | B-COND; C anisogamia | AUDITADO | `EVID-SEX-BANGIOMORPHA-001` | `INV-LIFE-SEX-001` |
| `CLAIM-MULTI-DEFINITION-001` | Asociación, grupo, ciclo heredable, individuo y multicelularidad compleja son niveles distintos; contar células no resuelve la unidad evolutiva. | A-SEM | AUDITADO | marco operacional + `EVID-MULTI-INDIVIDUALITY-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-REPEATED-001` | La multicelularidad surgió repetidamente en bacterias y eucariotas; el número exacto depende de definición, árbol y pérdidas. | A-B multiplicidad; C conteo | AUDITADO | `EVID-MULTI-PHYLOGENY-001`, `EVID-MULTI-CYANO-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-MODES-001` | Desarrollo clonal, agregación y compartimentación son rutas diferentes de formación multicelular. | A-B | AUDITADO | `EVID-MULTI-MODES-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-CLONALITY-001` | El desarrollo clonal eleva parentesco y facilita cooperación/complejidad, sin eliminar conflicto ni ser una ley lógica absoluta. | B; C universalidad | AUDITADO | `EVID-MULTI-MODES-001`, `EVID-MULTI-INDIVIDUALITY-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-COOPTION-001` | Linajes independientes reutilizaron adhesión, señalización, ciclo celular y regulación preexistentes; no existe un gen maestro universal. | B | AUDITADO | `EVID-MULTI-VOLVOCINE-001`, `EVID-MULTI-BROWN-FUNGI-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-ANIMAL-ROOTS-001` | Herramientas de adhesión/señalización y diferenciación temporal anteceden a animales; parientes unicelulares actuales no son ancestros congelados. | B | AUDITADO | `EVID-MULTI-CHOANO-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-LIFE-CYCLE-001` | Un ciclo que reproduce grupos y hereda rasgos permite selección/adaptación colectiva y una transición gradual de individualidad. | B-COND | AUDITADO | `EVID-MULTI-INDIVIDUALITY-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-EXPERIMENT-001` | Multicelularidad simple puede evolucionar rápidamente bajo sedimentación, depredación, bienes públicos o ciclos impuestos; eso prueba rutas, no historias profundas. | A-B local; D historia | AUDITADO | `EVID-MULTI-EXPERIMENT-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-DIFFERENTIATION-001` | División espacial del trabajo puede cooptar estados temporales ancestrales y depende de intercambio, topología y ciclo. | B-COND | AUDITADO | `EVID-MULTI-CYANO-001`, `EVID-MULTI-VOLVOCINE-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-COMPLEXITY-001` | Gran tamaño no equivale a complejidad; tejidos, transporte y coordinación permiten superar límites de difusión y conflicto. | A-SEM; B mecanismo | AUDITADO | `EVID-MULTI-PHYLOGENY-001`, `EVID-MULTI-OXYGEN-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-OXYGEN-001` | Oxígeno puede habilitar o limitar cuerpos según metabolismo, difusión y ambiente; no fue un disparador universal demostrado. | B contexto; E disparador universal | AUDITADO | `EVID-MULTI-OXYGEN-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-MULTI-FOSSIL-001` | Franceville es candidato C-D; *Qingshania* fija multicelularidad eucariota probable a ~1.635 Ga y *Bangiomorpha* desarrollo diferenciado a 1.047 Ga, todos como mínimos condicionados. | B-D por caso | AUDITADO | `EVID-MULTI-FOSSIL-001` | `INV-LIFE-MULTI-001` |
| `CLAIM-SNOWBALL-DEFINITION-001` | Depósito glacial, hielo tropical, episodio global, estado de albedo alto y océano sellado son afirmaciones diferentes. | A-SEM | AUDITADO | marco operacional + `EVID-SNOWBALL-SEDIMENT-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-TWO-EPISODES-001` | El Criogénico conserva dos episodios glaciales principales, Sturtiano y Marinoano, correlacionables entre paleocontinentes. | A-B | AUDITADO | `EVID-SNOWBALL-GEOCHRON-001`, `EVID-SNOWBALL-SEDIMENT-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-LOCAL-GLOBAL-001` | Facies prueban hielo local; edad, correlación y paleolatitud permiten inferir alcance casi global sin que un afloramiento observe el planeta. | B local; B-COND global | AUDITADO | `EVID-SNOWBALL-SEDIMENT-001`, `EVID-SNOWBALL-PALEOMAG-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-PALEOLATITUDE-001` | Varias sucesiones glaciales criogénicas se depositaron a latitudes tropicales bajo magnetizaciones primarias y campo axial-dipolar. | B por conjunto | AUDITADO | `EVID-SNOWBALL-PALEOMAG-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-OCEAN-COVER-001` | Hielo tropical y modelos apoyan un estado casi global, pero cobertura oceánica gruesa, completa y continua no está observada. | B-COND casi global; D hard | AUDITADO | `EVID-SNOWBALL-CLIMATE-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-DURATION-001` | Sturtiana duró ~56–58 Myr (`~717–659 Ma`) y Marinoana ~4 Myr (`~639–635.2 Ma`) bajo la geocronología actual. | B-COND | AUDITADO | `EVID-SNOWBALL-GEOCHRON-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-DYNAMICS-001` | Sedimentos y modelos permiten variabilidad orbital, agua local y hielo dinámico; ciclos Sturtianos nieve–invernadero son una hipótesis 2026, no consenso. | B dinámica; D-PROV ciclos | AUDITADO | `EVID-SNOWBALL-DYNAMICS-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-CAPS-001` | Carbonatos de capa registran reorganización posglacial extendida, pero su agua, alcalinidad y duración admiten mecanismos multietapa. | B cambio; D mecanismo único | AUDITADO | `EVID-SNOWBALL-CAPS-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-INITIATION-001` | Hielo–albedo hace viable entrada abrupta; Franklin, meteorización tropical y ruptura de Rodinia son candidatos condicionados, no una causa única. | B física; C-D disparador | AUDITADO | `EVID-SNOWBALL-INIT-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-DEGLACIATION-001` | Acumulación de `CO₂` probablemente contribuyó a la salida, cuyo umbral depende de nubes, albedo, polvo, presión, agua abierta y meteorización. | B-COND participación; D umbral | AUDITADO | `EVID-SNOWBALL-EXIT-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-REFUGIA-001` | Redox, nitrógeno y fósiles documentan hábitats/productividad locales durante hielo; no miden un océano abierto global. | B-COND | AUDITADO | `EVID-SNOWBALL-REFUGIA-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-SNOWBALL-EVOLUTION-001` | Snowball precedió cambios ediacáricos y pudo alterar nutrientes/nichos, pero no se ha aislado como causa de la radiación animal. | C mecanismos; E causa única | AUDITADO | `EVID-SNOWBALL-EVOLUTION-001` | `INV-PROT-SNOWBALL-001` |
| `CLAIM-EDIACARA-SCOPE-001` | Periodo Ediacárico, biotas tempranas, macrobiota de Ediacara y animales son conjuntos relacionados pero no equivalentes. | A-B | AUDITADO | marco operacional + `EVID-EDIACARA-GEOCHRON-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-CHRONOLOGY-001` | La macrobiota clásica está documentada desde 574.17 ± 0.66 Ma hasta cerca del límite de 538.8 Ma, con edades regionales desiguales. | B | AUDITADO | `EVID-EDIACARA-GEOCHRON-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-TAPHONOMY-001` | Moldes ediacáricos preservan geometría biológica filtrada por tapetes, enterramiento, materia orgánica, reología y compactación. | B | AUDITADO | `EVID-EDIACARA-PRESERVATION-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-ASSEMBLAGES-001` | Avalon, White Sea y Nama tienen señal temporal real, pero también se solapan y están controladas por facies, preservación y muestreo. | B-COND | AUDITADO | `EVID-EDIACARA-DISTRIBUTION-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-DIVERSITY-001` | La biota agrupa múltiples arquitecturas y afinidades; no constituye un clado, reino o experimento evolutivo único. | B | AUDITADO | `EVID-EDIACARA-MORPHOGENESIS-001`, `EVID-EDIACARA-TRACES-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-RANGEOMORPHS-001` | Rangomorfos muestran desarrollo modular regulado compatible con animales tempranos, pero su nodo y alimentación siguen abiertos. | C | AUDITADO | `EVID-EDIACARA-MORPHOGENESIS-001`, `EVID-EDIACARA-PALEOECOLOGY-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-DICKINSONIA-001` | Crecimiento, movilidad y colesterol asociado apoyan a Dickinsonia como animal; su posición interna en Metazoa no está resuelta. | B-COND | AUDITADO | `EVID-EDIACARA-MORPHOGENESIS-001`, `EVID-EDIACARA-BIOMARKERS-001`, `EVID-EDIACARA-TRACES-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-BILATERIANS-001` | Kimberella, Yilingia, Ikaria y trazas congruentes apoyan bilaterianos ediacáricos; asignaciones a coronas concretas son más débiles. | B-COND | AUDITADO | `EVID-EDIACARA-TRACES-001`, `EVID-EDIACARA-MORPHOGENESIS-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-ECOLOGY-001` | Las comunidades ocuparon varios nichos y usaron recursos distintos; no hubo una dieta o modo de vida ediacárico universal. | B-C | AUDITADO | `EVID-EDIACARA-PALEOECOLOGY-001`, `EVID-EDIACARA-BIOMARKERS-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-REPRODUCTION-001` | Patrones espaciales apoyan reproducción por propágulos/estolones en algunos rangomorfos; su efecto macroevolutivo es modelado y provisional. | C; D-PROV macroevolución | AUDITADO | `EVID-EDIACARA-PALEOECOLOGY-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-OXYGEN-001` | Oxígeno limitó el espacio habitable y ciertas ecologías, pero no se ha aislado como interruptor u origen único de la radiación. | B-COND filtro; D-E causa única | AUDITADO | `EVID-EDIACARA-REDOX-001` | `INV-EDIACARA-001` |
| `CLAIM-EDIACARA-TURNOVER-001` | Hubo pulsos de recambio y pérdida antes del Cámbrico; extinción, ambiente, reemplazo y preservación contribuyeron en proporciones abiertas. | C | AUDITADO | `EVID-EDIACARA-TURNOVER-001`, `EVID-EDIACARA-BIOMINERAL-001` | `INV-EDIACARA-001` |
| `CLAIM-CAMBRIAN-SCOPE-001` | La radiación cámbrica agrupa divergencia, aparición fósil, diversidad, disparidad, biomineralización, conducta y ecología; no es un evento único. | A-SEM; B proceso plural | AUDITADO | conjunto `EVID-CAMBRIAN-*` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-BOUNDARY-001` | El límite formal de 538.8 ± 0.6 Ma es un GSSP correlacionable, no la fecha del origen animal ni de toda la radiación. | A límite; B edad | AUDITADO | `EVID-CAMBRIAN-BOUNDARY-001`, `EVID-CAMBRIAN-GEOCHRON-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-CHRONOLOGY-001` | La fase principal fue rápida pero pulsada, empezó con precursores ediacáricos y continuó por Terreneuviense, Serie 2 y fases posteriores. | B | AUDITADO | `EVID-CAMBRIAN-GEOCHRON-001`, `EVID-CAMBRIAN-FIRSTAPPEARANCE-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-DIVERGENCE-001` | Varias divergencias preceden sus primeras apariciones preservadas; la distancia temporal depende de fósiles, calibraciones y modelos de tasa. | C | AUDITADO | `EVID-CAMBRIAN-FIRSTAPPEARANCE-001`, `EVID-CAMBRIAN-GENOMICS-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-PRESERVATION-001` | Esqueletos, trazas y Lagerstätten amplían archivos distintos y selectivos; ninguna ventana constituye un censo global neutral. | A-B | AUDITADO | `EVID-CAMBRIAN-LAGERSTATTEN-001`, `EVID-CAMBRIAN-SKELETONS-001`, `EVID-CAMBRIAN-TRACES-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-STEMCROWN-001` | Muchos organismos problemáticos se integran como grupos tallo; su posición exacta depende de anatomía, homología, descomposición y matriz. | B-COND por taxón | AUDITADO | `EVID-CAMBRIAN-PHYLOGENY-001`, `EVID-CAMBRIAN-LAGERSTATTEN-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-BIOMINERAL-001` | La biomineralización animal surgió repetidamente y su expansión aumentó tanto la defensa/función como la detectabilidad fósil. | B | AUDITADO | `EVID-CAMBRIAN-SKELETONS-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-DISPARITY-001` | La innovación anatómica se aceleró, pero la magnitud de disparidad es específica de clado, caracteres y métrica; no todos los planes aparecieron completos. | B-COND | AUDITADO | `EVID-CAMBRIAN-DISPARITY-001`, `EVID-CAMBRIAN-PHYLOGENY-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-TRACES-001` | Conducta, profundidad y mezcla del sustrato se expandieron por etapas y facies, transformando ecosistemas desde el Ediacárico terminal. | B | AUDITADO | `EVID-CAMBRIAN-TRACES-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-ECOLOGY-001` | Redes, depredación, movilidad y bioturbación formaron retroalimentaciones que amplificaron la radiación sin identificar un gatillo único. | B-C | AUDITADO | `EVID-CAMBRIAN-FOODWEBS-001`, `EVID-CAMBRIAN-TRACES-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-DEVELOPMENT-001` | Capacidades regulatorias animales precedieron la fase fósil principal y las tasas tempranas se aceleraron; genes presentes no prueban por sí solos causa ni fecha. | C | AUDITADO | `EVID-CAMBRIAN-GENOMICS-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-ENVIRONMENT-001` | Oxígeno y nutrientes habilitaron y modularon hábitats, pero sus fluctuaciones estuvieron acopladas a biología y no constituyen una causa suficiente única. | B-COND condición; C-D pesos | AUDITADO | `EVID-CAMBRIAN-REDOX-001` | `INV-CAMBRIAN-001` |
| `CLAIM-CAMBRIAN-TURNOVER-001` | Extinciones como Sinsk separaron fases y redistribuyeron tallos y coronas; su alcance global y mecanismo permanecen abiertos. | B local; C global | AUDITADO | `EVID-CAMBRIAN-TURNOVER-001` | `INV-CAMBRIAN-001` |
| `CLAIM-ORDOVICIAN-SCOPE-001` | La GOBE agrupa radiaciones marinas pelágicas, bentónicas, arrecifales y biogeográficas sucesivas; no fue un evento único ni sincrónico. | A-SEM; B proceso plural | AUDITADO | conjunto `EVID-ORDOVICIAN-*` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-BOUNDARY-001` | La base formal del Ordovícico en Green Point, asociada a la FAD de `Iapetognathus fluctivagus`, define una unidad y no el inicio de la GOBE. | A límite; B edad | AUDITADO | `EVID-ORDOVICIAN-BOUNDARY-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-CHRONOLOGY-001` | Las expansiones planctónica, bentónica y arrecifal se solaparon pero alcanzaron máximos en intervalos diferentes del Cámbrico tardío al Ordovícico tardío. | B | AUDITADO | `EVID-ORDOVICIAN-OCCURRENCES-001`, `EVID-ORDOVICIAN-ECOLOGY-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-DIVERSITY-001` | Un gran aumento de riqueza marina ordovícica persiste entre clados, regiones y métodos, aunque ninguna curva es un censo global de organismos vivos. | A-B | AUDITADO | `EVID-ORDOVICIAN-OCCURRENCES-001`, `EVID-ORDOVICIAN-SAMPLING-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-SAMPLING-001` | Magnitud, inicio y velocidad de la señal dependen de roca, colecciones, taxonomía, facies, paleocontinente y duración de intervalos. | A para sesgo; B-COND para corrección | AUDITADO | `EVID-ORDOVICIAN-SAMPLING-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-ECOLOGY-001` | Durante el Ordovícico aumentaron la ocupación de ecospace, tiering, suspensión, depredación y construcción de hábitat; riqueza, disparidad, biomasa y función no son intercambiables. | B | AUDITADO | `EVID-ORDOVICIAN-ECOLOGY-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-PLANKTON-001` | La diversificación planctónica amplió la columna de agua y redes tróficas antes o durante varios pulsos bentónicos, sin medir por sí sola productividad global. | B para radiación; C-COND para mecanismo trófico | AUDITADO | `EVID-ORDOVICIAN-PLANKTON-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-REEFS-001` | Arrecifes ordovícicos diversos añadieron relieve y nichos en pulsos regionales; fueron amplificadores además de posibles efectos de la diversificación. | B-COND | AUDITADO | `EVID-ORDOVICIAN-REEFS-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-BIOGEOGRAPHY-001` | Provincialismo, inmigración y área de plataforma contribuyeron al patrón global; la suma de paleocontinentes oculta dinámicas locales distintas. | B-COND | AUDITADO | `EVID-ORDOVICIAN-OCCURRENCES-001`, `EVID-ORDOVICIAN-SAMPLING-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-CLIMATE-001` | El enfriamiento prolongado amplió espacio térmico habitable y contribuyó a la radiación, pero no fija por sí solo el mecanismo que redujo `CO₂` ni los pesos causales. | B-COND | AUDITADO | `EVID-ORDOVICIAN-CLIMATE-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-OXYGEN-001` | La disponibilidad y estabilidad de oxígeno modularon hábitats a escalas regionales y oceánicas distintas; no se observa un interruptor mundial único. | B-COND modulación; D causa única | AUDITADO | `EVID-ORDOVICIAN-REDOX-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-TERRESTRIAL-001` | Criptosporas de `~473–471 Ma` sostienen vida terrestre de grado embriofítico y trazas tardías sostienen actividad animal no marina, sin probar bosques, flora vascular ni productor corporal. | B-COND plantas; C animales | AUDITADO | `EVID-ORDOVICIAN-TERRESTRIAL-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-METEOR-001` | La ruptura del progenitor de condritas L cerca de `468.0 ± 0.3 Ma` produjo gran flujo extraterrestre, pero ocurrió después de iniciada la radiación principal y no explica la GOBE completa. | A-B evento; E causa única | AUDITADO | `EVID-ORDOVICIAN-METEOR-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-LOME-PULSES-001` | La extinción del final del Ordovícico tuvo dos fases rápidas de renovación; duración, magnitud y sincronía exactas dependen de sección, correlación y base de datos. | B dos fases; C bordes | AUDITADO | `EVID-ORDOVICIAN-LOME-GEOCHRON-001`, `EVID-ORDOVICIAN-LOME-SELECTIVITY-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-LOME-CAUSES-001` | Enfriamiento, glaciación, eustasia, calentamiento y anoxia/euxinia formaron una crisis acoplada; los pesos y mecanismos de mortalidad variaron entre pulsos y cuencas. | B-COND marco; C-D pesos | AUDITADO | `EVID-ORDOVICIAN-LOME-SELECTIVITY-001`, `EVID-ORDOVICIAN-LOME-REDOX-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-ORDOVICIAN-RECOVERY-001` | La recuperación posterior fue distinta según riqueza, composición y ecospace: algunas arquitecturas persistieron mientras la riqueza tardó decenas de millones de años bajo ciertas métricas. | B-COND | AUDITADO | `EVID-ORDOVICIAN-OCCURRENCES-001`, `EVID-ORDOVICIAN-ECOLOGY-001` | `INV-ORDOVICIAN-001` |
| `CLAIM-SILURIAN-SCOPE-001` | El Silúrico reúne recuperaciones marinas y ensamblajes terrestres parcialmente independientes; no fue una recuperación global ni una conquista de tierra únicas. | A-SEM; B proceso plural | AUDITADO | conjunto `EVID-SILURIAN-*` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-BOUNDARY-001` | La base formal en Dob’s Linn, asociada a la FAD de `Akidograptus ascensus`, define el Silúrico/Rhuddaniense y no el fin de la recuperación. | A límite; B edad | AUDITADO | `EVID-SILURIAN-BOUNDARY-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-RECOVERY-SCALE-001` | La riqueza bentónica volvió en ~5 Myr en Laurentia bajo una base estandarizada, mientras curvas globales estiman intervalos mucho mayores; escala y métrica explican la diferencia. | B-COND | AUDITADO | `EVID-SILURIAN-RECOVERY-DIVERSITY-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-RECOVERY-COMPOSITION-001` | Recuperar riqueza no restauró automáticamente composición, dominancia, función o ecospace; supervivencia e inmigración reensamblaron comunidades. | B | AUDITADO | `EVID-SILURIAN-RECOVERY-COMPOSITION-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-REEFS-001` | Arrecifes coral–estromatoporoideos reaparecieron regionalmente durante el Aeroniense; no fueron arrecifes modernos ni una recuperación mundial simultánea. | B | AUDITADO | `EVID-SILURIAN-REEFS-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-GNATHOSTOMES-001` | Fósiles articulados del Telychiense revelan gnathostomos corporalmente diversos y una historia previa; su FAD no fecha el origen de las mandíbulas. | B | AUDITADO | `EVID-SILURIAN-GNATHOSTOMES-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-EVENTS-001` | Ireviken, Mulde y Lau/Kozłowskii fueron renovaciones bióticas y biogeoquímicas reales que interrumpieron el periodo con alcance variable. | B eventos; C sincronía/magnitud | AUDITADO | `EVID-SILURIAN-EVENTS-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-REDOX-001` | Carbono, azufre, yodo y facies apoyan cambios de clima, nivel y redox por evento, pero ninguna excursión `δ13C` identifica sola causa o mortalidad. | B-COND ambiente; C-D causas | AUDITADO | `EVID-SILURIAN-EVENTS-REDOX-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-LAND-CONTINUITY-001` | La vida terrestre tiene mínimos ordovícicos; el Silúrico amplió esporas, cuerpos e interacciones en vez de iniciar una colonización desde cero. | B | AUDITADO | `EVID-SILURIAN-LAND-SPORES-001`, `EVID-SILURIAN-LAND-BODIES-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-SPORES-001` | El aumento de esporas triletes registra una transición reproductiva compatible con radiación vascular, condicionada por productor, transporte y facies. | B-COND | AUDITADO | `EVID-SILURIAN-LAND-SPORES-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-VASCULAR-001` | Ejes tipo `Cooksonia` documentan poliesporangiófitos pequeños; sólo ejemplares con traqueidas in situ prueban vascularidad inequívoca. | B cuerpos; A-B tejido por ejemplar | AUDITADO | `EVID-SILURIAN-LAND-BODIES-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-FUNGI-001` | `Tortotubus` conserva crecimiento filamentoso compatible con Fungi y posible procesamiento del sustrato, sin fijar Dikarya, seta o simbiosis. | B-COND | AUDITADO | `EVID-SILURIAN-LAND-FUNGI-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-ARTHROPODS-001` | Cutículas de miriápodos y arácnidos tardíos sostienen animales terrestres y depredación; la primera preservación no es la primera llegada. | B-COND | AUDITADO | `EVID-SILURIAN-LAND-ARTHROPODS-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-PNEUMODESMUS-001` | Los poros de `Pneumodesmus` apoyan respiración aérea; nuevas esporas/circones favorecen edad Wenlock tardía tras una propuesta devónica, con correlación aún crítica. | B respiración; B-COND edad | AUDITADO | `EVID-SILURIAN-PNEUMODESMUS-ANATOMY-001`, `EVID-SILURIAN-PNEUMODESMUS-AGE-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-FOODWEB-001` | Coprolitos con esporas y cutículas depredadoras demuestran consumo, reciclaje y al menos dos niveles animales, sin identificar productores ni red completa. | B-COND | AUDITADO | `EVID-SILURIAN-LAND-INTERACTIONS-001` | `INV-SILURIAN-001` |
| `CLAIM-SILURIAN-COASTAL-ARCHIVE-001` | El registro costero mezcla transporte continental, depósito marginal y preservación; parecido o asociación no prueban terrestreidad ni convivencia. | A tafonomía; B-COND casos | AUDITADO | `EVID-SILURIAN-COASTAL-ARCHIVE-001` | `INV-SILURIAN-001` |
| `CLAIM-DEVONIAN-SCOPE-001` | El Devónico contiene relojes parcialmente independientes para límite, bosques, paisaje, peces, locomoción y crisis; «edad de los peces» no los sincroniza. | A-SEM; B pluralidad | AUDITADO | conjunto `EVID-DEVONIAN-*` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-BOUNDARY-001` | La base formal del Devónico/Lochkoviense está en Klonk, bajo la FAD de `Uncinatograptus uniformis`; no fecha el origen de bosques o peces. | A límite; B edad | AUDITADO | `EVID-DEVONIAN-BOUNDARY-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FOREST-DEFINITION-001` | Árbol, rodal, bosque, dosel y cobertura continental son objetos distintos; altura o madera aisladas no demuestran bosque. | A-SEM | AUDITADO | `EVID-DEVONIAN-FOREST-STAND-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FOREST-EARLY-001` | Hangman Sandstone conserva actualmente el bosque espacial más antiguo conocido, de edad eifeliense; el ranking depende de definición, datación y muestreo. | B | AUDITADO | `EVID-DEVONIAN-FOREST-STAND-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FOREST-DIVERSITY-001` | Gilboa reunió cladoxilópsidas arborescentes, licófitas y formas lianoides; un bosque devónico no fue una versión joven de uno moderno. | B | AUDITADO | `EVID-DEVONIAN-FOREST-ARCHITECTURE-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-ROOTS-001` | Cairo conserva sistemas radicales profundos y ramificados tipo `Archaeopteris`, distintos de las bases someras de Gilboa. | B | AUDITADO | `EVID-DEVONIAN-FOREST-ROOTS-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-LANDSCAPE-001` | Raíces y vegetación devónicas alteraron suelos, riberas y almacenamiento de sedimento, aunque la magnitud regional y global permanece modelada. | B-COND | AUDITADO | `EVID-DEVONIAN-FOREST-LANDSCAPE-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-CO2-001` | Bosques pudieron intensificar meteorización y flujo de carbono, pero datos de CO₂ bajo antes de su expansión impiden atribuirles por sí solos la caída devónica. | B datos; C-D peso causal | AUDITADO | `EVID-DEVONIAN-CO2-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FISH-TIMING-001` | «Edad de los peces» describe una diversificación y disparidad notables, no el origen de peces ni mandíbulas, que tienen registros anteriores. | A-SEM; B patrón | AUDITADO | `EVID-DEVONIAN-FISH-DISPARITY-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FISH-MOSAIC-001` | Placodermos y «acantodios» contienen mosaicos de caracteres; tratarlos como peldaños homogéneos distorsiona la filogenia de gnathostomos. | B-COND | AUDITADO | `EVID-DEVONIAN-FISH-ANATOMY-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-FISH-REPRODUCTION-001` | `Materpiscis` documenta embrión y conexión materna compatibles con viviparidad y fecundación interna en placodermos. | B | AUDITADO | `EVID-DEVONIAN-FISH-REPRODUCTION-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-TRANSITION-MOSAIC-001` | La transición pez–tetrápodo distribuye cráneo, respiración, cintura, aleta/extremidad y locomoción entre taxones y tiempos distintos. | B | AUDITADO | `EVID-DEVONIAN-TRANSITION-FINS-001`, `EVID-DEVONIAN-LOCOMOTION-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-TIKTAALIK-001` | `Tiktaalik` combina escamas y radios con cuello, cintura y apéndices robustos; es transicional sin ser ancestro directo probado ni caminante terrestre demostrado. | B | AUDITADO | `EVID-DEVONIAN-TRANSITION-FINS-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-DIGITS-001` | `Elpistostege` conserva húmero, radio, ulna, carpos y dígitos dentro de una aleta con radios; la mano comenzó antes de perder la aleta. | B | AUDITADO | `EVID-DEVONIAN-TRANSITION-FINS-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-TRACKS-001` | Zachełmie conserva pistas compatibles con productores tetrápodos más antiguas que los cuerpos inequívocos conocidos; productor y ambiente exactos siguen abiertos. | B-COND | AUDITADO | `EVID-DEVONIAN-TRACKS-MORPHOLOGY-001`, `EVID-DEVONIAN-TRACKS-ENVIRONMENT-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-AQUATIC-TETRAPODS-001` | Dígitos y extremidades precedieron a una vida terrestre obligada: `Acanthostega`, `Parmastega` y otros conservan adaptaciones acuáticas o mixtas. | B | AUDITADO | `EVID-DEVONIAN-TETRAPOD-AQUATIC-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-LOCOMOTION-001` | Capacidad locomotora no se deriva de un hueso aislado; articulaciones, cuerpo, sustrato y modelos recuperan un paisaje funcional diverso. | B-COND | AUDITADO | `EVID-DEVONIAN-LOCOMOTION-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-CRISES-001` | El Devónico tardío reunió pérdidas y recambios prolongados con pulsos Kellwasser y Hangenberg; no fue una extinción instantánea única. | B | AUDITADO | `EVID-DEVONIAN-KELLWASSER-TIME-001`, `EVID-DEVONIAN-HANGENBERG-VERTEBRATES-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-KELLWASSER-001` | Los pulsos Kellwasser fueron breves en secciones de alta resolución dentro de una pérdida más larga de diversidad; tiempo local no equivale a sincronía mundial. | B-COND | AUDITADO | `EVID-DEVONIAN-KELLWASSER-TIME-001`, `EVID-DEVONIAN-KELLWASSER-ECOLOGY-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-HANGENBERG-001` | Hangenberg fue una crisis terminal propia y un filtro mayor para vertebrados, no un epílogo menor de Kellwasser. | B | AUDITADO | `EVID-DEVONIAN-HANGENBERG-VERTEBRATES-001`, `EVID-DEVONIAN-HANGENBERG-REDOX-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-EXTINCTION-RATES-001` | La magnitud de una crisis cambia al medir extinción, agotamiento, diversidad neta, ecospace o invasiones; las métricas no son intercambiables. | A-SEM; B patrón | AUDITADO | `EVID-DEVONIAN-KELLWASSER-ECOLOGY-001`, `EVID-DEVONIAN-HANGENBERG-VERTEBRATES-001` | `INV-DEVONIAN-001` |
| `CLAIM-DEVONIAN-CAUSES-001` | Redox, nutrientes, clima, meteorización, volcanismo y UV-B forman hipótesis comprobables, pero ninguna señal aislada cierra desencadenante, mecanismo y mortalidad para ambas crisis. | B señales; C-D causas | AUDITADO | `EVID-DEVONIAN-CAUSES-001`, `EVID-DEVONIAN-HANGENBERG-REDOX-001` | `INV-DEVONIAN-001` |
| `CLAIM-CARBONIFEROUS-SCOPE-001` | Límite, turba, coalificación, hielo/vegetación, oxígeno/fuego, tamaño y amniotas usan relojes distintos; el nombre Carbonífero no los sincroniza. | A-SEM; B pluralidad | AUDITADO | conjunto `EVID-CARBONIFEROUS-*` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-BOUNDARY-001` | La base formal del Carbonífero/Mississippiense/Tournaisiense permanece en el lecho 89 de La Serre, ligado al linaje de `Siphonodella`. | A límite; B edad | AUDITADO | `EVID-CARBONIFEROUS-BOUNDARY-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-BOUNDARY-PROBLEM-001` | La ICS declara impreciso el GSSP de La Serre por problemas bioestratigráficos y anticipa su redefinición; vigente no equivale a correlación precisa. | A estado; D precisión | AUDITADO | `EVID-CARBONIFEROUS-BOUNDARY-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-SUBDIVISIONS-001` | Mississippiense/Pennsylvaniense son subsistemas internacionales y periodos en usos regionales; la base del Pennsylvaniense está en Arrow Canyon. | A-SEM; A límite | AUDITADO | `EVID-CARBONIFEROUS-SUBDIVISIONS-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-PEAT-001` | La turba se acumula cuando producción vegetal supera descomposición/exportación bajo saturación y espacio de preservación; no todo humedal ni toda turba forma carbón. | A mecanismo; B archivo | AUDITADO | `EVID-CARBONIFEROUS-PEAT-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-COALIFICATION-001` | Enterramiento, compactación, pérdida de agua/volátiles y maduración térmica transforman paleoturba en carbón de distinto rango. | A-B | AUDITADO | `EVID-CARBONIFEROUS-COALIFICATION-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-COAL-CONTROLS-001` | Clima, nivel freático, subsidencia, aporte detrítico, enterramiento y vegetación controlan conjuntamente cuánto carbón conserva una cuenca. | B-COND | AUDITADO | `EVID-CARBONIFEROUS-COAL-ARCHIVE-001`, `EVID-CARBONIFEROUS-ICEHOUSE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-FUNGI-001` | El retraso evolutivo de pudrición blanca no explica por sí solo el pico paleozoico de carbón; hubo descomposición antigua y recurrencia ambiental del carbón. | B rechazo; C peso fúngico | AUDITADO | `EVID-CARBONIFEROUS-FUNGI-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-WETLAND-DIVERSITY-001` | Los humedales pennsylvanienses reunieron comunidades variables de licófitas, helechos, cordaitales y pteridospermas, no una selva mundial uniforme. | B | AUDITADO | `EVID-CARBONIFEROUS-VEGETATION-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-ICEHOUSE-001` | Hielo gondwánico, ciclotemas y proxies de CO₂ muestran una casa de hielo dinámica compatible con humedales tropicales regionales. | B | AUDITADO | `EVID-CARBONIFEROUS-ICEHOUSE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-VEGETATION-TURNOVER-001` | Los bosques tropicales sufrieron recambios repetidos y geográficamente desiguales; «colapso de la selva» comprime una transición prolongada. | B | AUDITADO | `EVID-CARBONIFEROUS-VEGETATION-001`, `EVID-CARBONIFEROUS-TETRAPOD-DIVERSITY-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-O2-PROXIES-001` | El enterramiento de C/S puede elevar O₂, pero reconstruir su magnitud exige modelos de reservorios, meteorización y reciclaje. | A mecanismo; C magnitud | AUDITADO | `EVID-CARBONIFEROUS-OXYGEN-MODELS-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-O2-RANGE-001` | Carbón vegetal/modelos producen hiperoxia en parte del intervalo, mientras halita produce ~15–16 % en muestras estudiadas; no existe un 35 % directamente medido. | B métodos; C-D trayectoria | AUDITADO | `EVID-CARBONIFEROUS-OXYGEN-CHARCOAL-001`, `EVID-CARBONIFEROUS-OXYGEN-HALITE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-FIRE-001` | El carbón vegetal anatómico documenta incendios carboníferos y suficiente oxígeno local para combustión bajo el combustible disponible. | A-B | AUDITADO | `EVID-CARBONIFEROUS-FIRE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-FIRE-CONTROLS-001` | Humedad, combustible, ignición, propagación y preservación median entre O₂ y carbón vegetal; presencia/ausencia no entrega un porcentaje sola. | A mecanismo; B-COND reconstrucción | AUDITADO | `EVID-CARBONIFEROUS-FIRE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-GIGANTISM-001` | O₂ alto pudo relajar restricciones respiratorias y facilitar tamaños máximos, sin ser causa suficiente ni afectar igual a todos los artrópodos. | B-COND | AUDITADO | `EVID-CARBONIFEROUS-INSECT-PHYSIOLOGY-001`, `EVID-CARBONIFEROUS-INSECT-SIZE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-ARTHROPLEURA-001` | `Arthropleura` fue un miriápodo; un exuvio parcial permite estimar hasta ~2.63 m y juveniles CT restringen parentesco, no dieta adulta. | B identidad; B-COND tamaño | AUDITADO | `EVID-CARBONIFEROUS-ARTHROPLEURA-SIZE-001`, `EVID-CARBONIFEROUS-ARTHROPLEURA-ANATOMY-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-INSECT-SIZE-001` | Más de 10,500 alas fósiles apoyan asociación temprana entre O₂ y tamaño máximo, debilitada por temperatura, autocorrelación y controles bióticos. | B-COND | AUDITADO | `EVID-CARBONIFEROUS-INSECT-SIZE-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-ROMERS-GAP-001` | `Pederpes` y faunas tournaisienses muestran que gran parte del «vacío de Romer» fue roca/muestreo insuficiente, no ausencia demostrada de tetrápodos. | B | AUDITADO | `EVID-CARBONIFEROUS-ROMERS-GAP-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-AMNIOTE-DEFINITION-001` | Amniota es el nodo corona sinápsido+saurópsido; su reproducción independiente del agua se infiere filogenéticamente porque las membranas rara vez fosilizan. | A-SEM; B inferencia | AUDITADO | `EVID-CARBONIFEROUS-AMNIOTE-BODIES-001`, `EVID-CARBONIFEROUS-AMNIOTE-TRACKS-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-AMNIOTE-TRACKS-001` | Huellas tournaisienses de Snowy Plains con cinco dígitos y garras se atribuyen a un amniota/saurópsido probable y adelantan el mínimo 35–40 Myr, condicionado a productor y edad. | B-COND | AUDITADO | `EVID-CARBONIFEROUS-AMNIOTE-TRACKS-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-AMNIOTE-BODIES-001` | `Hylonomus` conserva un cuerpo amniota corona bashkiriense temprano, mínimo corporal que no fija origen, lugar ni huevo. | B | AUDITADO | `EVID-CARBONIFEROUS-AMNIOTE-BODIES-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-CARBONIFEROUS-RAINFOREST-TETRAPODS-001` | El recambio forestal fue real, pero endemismo y explosión de tetrápodos/amniotas no sobreviven como consecuencia simple al corregir muestreo y espacio. | B recambio; D causa simple | AUDITADO | `EVID-CARBONIFEROUS-TETRAPOD-DIVERSITY-001` | `INV-CARBONIFEROUS-001` |
| `CLAIM-PERMIAN-SCOPE-001` | Límite, ensamblaje continental, clima, radiaciones sinápsidas y crisis bióticas usan archivos y relojes diferentes; el nombre Pérmico no los sincroniza. | A-SEM; B pluralidad | AUDITADO | conjunto `EVID-PERMIAN-*` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-BOUNDARY-001` | Aidaralash Creek fija la base mediante `Streptognathodus isolatus`; Meishan fija el techo por `Hindeodus parvus`, no por la mortalidad en sí. | A límites; B edades | AUDITADO | `EVID-PERMIAN-BOUNDARY-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-SUBDIVISIONS-001` | Cisuraliense, Guadalupiense y Lopingiense contienen nueve pisos cuyos GSSP y calibraciones siguen revisión institucional. | A arquitectura; B calibración | AUDITADO | `EVID-PERMIAN-SUBDIVISIONS-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-PANGEA-ASSEMBLY-001` | Pangea se ensambló mediante colisiones y suturas prolongadas; terrenos asiáticos y Cimmeria conservaron historias periféricas durante el Pérmico. | B | AUDITADO | `EVID-PERMIAN-PANGEA-SUTURES-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-PANGEA-EVIDENCE-001` | Suturas, procedencias, fósiles, paleomagnetismo y cinemática se combinan para reconstruir Pangea; ningún archivo entrega por sí solo un globo completo. | B | AUDITADO | `EVID-PERMIAN-PANGEA-SUTURES-001`, `EVID-PERMIAN-PANGEA-PALEOMAG-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-PANGEA-CONFIGURATION-001` | Las configuraciones A/B expresan incertidumbre real en longitud, inclinación y deformación; no ponen en duda el ensamblaje amplio. | C-D | AUDITADO | `EVID-PERMIAN-PANGEA-CONFIG-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-CLIMATE-MOSAIC-001` | Continentalidad, relieve, latitud, mares y `CO₂` produjeron interiores áridos, monzones y regiones húmedas, no un desierto planetario uniforme. | B | AUDITADO | `EVID-PERMIAN-CLIMATE-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-DEGLACIATION-001` | La Edad de Hielo del Paleozoico tardío menguó por pulsos durante el Pérmico y no terminó de golpe en su base. | B | AUDITADO | `EVID-PERMIAN-DEGLACIATION-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-SYNAPSID-DEFINITION-001` | Synapsida incluye a los mamíferos; fenestra y rasgos fósiles diagnostican linajes, pero la pertenencia moderna depende del árbol. | A-SEM; B diagnóstico | AUDITADO | `EVID-PERMIAN-SYNAPSID-PHYLO-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-PELYCOSAUR-001` | «Pelicosaurio» es un grado parafilético de sinápsidos tempranos, no un clado que pueda excluir Therapsida sin perder descendientes. | A-SEM; B topología | AUDITADO | `EVID-PERMIAN-SYNAPSID-PHYLO-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-DIMETRODON-001` | `Dimetrodon` fue un esfenacodóntido no mamífero, no dinosaurio ni ancestro humano directo demostrado. | A-B | AUDITADO | `EVID-PERMIAN-DIMETRODON-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-SAIL-001` | Histología y modelos permiten termorregulación, exhibición u otras funciones de la vela; no identifican una función dominante universal. | C-D | AUDITADO | `EVID-PERMIAN-SAIL-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-THERAPSIDS-001` | Un gorgonopsio temprano de Mallorca desplaza el mínimo y favorece una radiación terápsida inicial más amplia que el registro clásico Rusia–Karoo. | B-COND | AUDITADO | `EVID-PERMIAN-THERAPSIDS-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-LOCOMOTION-001` | Más de 200 taxones rechazan una marcha simple de extendido a erguido; la postura parasagital habitual surgió mucho después del Pérmico. | B-COND | AUDITADO | `EVID-PERMIAN-LOCOMOTION-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-CYNODONTS-001` | Los cinodontos pérmicos conocidos están fuera de Mammalia; rasgos mamalianos se ensamblaron en mosaico sobre una larga línea fantasma. | B-COND | AUDITADO | `EVID-PERMIAN-CYNODONTS-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-CAPITANIAN-001` | La crisis capitaniense fue separada de la terminal y se relaciona con Emeishan y anoxia, aunque su sincronía y extensión siguen abiertas. | B | AUDITADO | `EVID-PERMIAN-CAPITANIAN-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-EPME-TIMING-001` | La pérdida marina principal ocurrió entre `251.941 ± 0.037` y `251.880 ± 0.031 Ma`, unos `61 ± 48 kyr`, según un modelo de capas fechadas. | B-COND | AUDITADO | `EVID-PERMIAN-EPME-TIME-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-EPME-MAGNITUDE-001` | Un reanálisis estima cerca de `81 %` de especies marinas para el pulso terminal; `90–96 % de toda la vida` mezcla eventos, denominadores y archivos. | B ranking; C porcentaje | AUDITADO | `EVID-PERMIAN-EPME-MAGNITUDE-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-TRAPS-001` | El magmatismo siberiano abarcó antes/durante/después; el inicio de sills cerca de `251.907 ± 0.067 Ma` es un pulso causal fuerte, no una emisión medida. | A-B tiempo; B-COND causa | AUDITADO | `EVID-PERMIAN-TRAPS-TIME-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-CARBON-001` | Una inversión estima `~36,000 Gt C` en `~168 kyr` y picos `~5 Gt C/año`; son resultados condicionados por fuente, calibración y modelo. | C-COND | AUDITADO | `EVID-PERMIAN-CARBON-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-KILLCHAIN-001` | Volátiles, calentamiento, acidificación, pérdida de oxígeno, nutrientes y euxinia forman una cascada causal heterogénea hasta la mortalidad. | B mecanismos; C-D pesos | AUDITADO | `EVID-PERMIAN-ACIDIFICATION-001`, `EVID-PERMIAN-ANOXIA-PHYSIOLOGY-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-UVB-001` | Polen y experimentos apoyan estrés UV-B en secciones concretas, pero no miden un agujero de ozono global. | B local; C-D global | AUDITADO | `EVID-PERMIAN-UV-CLIMATE-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-MEGAELNINO-001` | Proxies y un modelo de 2024 permiten oscilaciones tipo mega-El Niño como amplificador; no sustituyen el forzamiento volcánico. | C-D-PROV | AUDITADO | `EVID-PERMIAN-UV-CLIMATE-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-TERRESTRIAL-TIMING-001` | Karoo y Cathaysia no entregan un horizonte terrestre mundial único; sincronía depende de región, variable y resolución. | C-D | AUDITADO | `EVID-PERMIAN-TERRESTRIAL-TIME-001` | `INV-PERMIAN-001` |
| `CLAIM-PERMIAN-SURVIVAL-001` | Supervivencia y severidad cambian con taxón, hábitat, fisiología y métrica; no existe un censo equivalente para toda la biosfera. | B patrón; C magnitudes | AUDITADO | `EVID-PERMIAN-EPME-MAGNITUDE-001`, `EVID-PERMIAN-ANOXIA-PHYSIOLOGY-001` | `INV-PERMIAN-001` |

| `CLAIM-TRIASSIC-SCOPE-001` | Límite, recuperación, clima, radiaciones y crisis terminal usan archivos y relojes distintos; el nombre Triásico no los sincroniza. | A-SEM; B pluralidad | AUDITADO | conjunto `EVID-TRIASSIC-*` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-BOUNDARIES-001` | Meishan fija la base por `Hindeodus parvus` y Kuhjoch el techo por `Psiloceras spelae tirolicum`; ninguno se define por dinosaurios, mamíferos o toda la extinción. | A límites; B edades | AUDITADO | `EVID-TRIASSIC-BOUNDARIES-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-SUBDIVISIONS-001` | Las tres series contienen siete pisos y varios GSSP internos siguen como candidatos institucionales. | A arquitectura; B estado | AUDITADO | `EVID-TRIASSIC-SUBDIVISIONS-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-RECOVERY-METRICS-001` | La riqueza genérica marina recuperó niveles precrisis cerca de 5 Myr, mientras la estructura trófica siguió reorganizándose mucho más tiempo. | B-COND | AUDITADO | `EVID-TRIASSIC-RECOVERY-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-GUIYANG-001` | Guiyang documenta un ecosistema marino complejo `1.08 ± 0.08 Myr` después de la crisis, mínimo local que refuta un retraso mundial uniforme. | A-B local; D global | AUDITADO | `EVID-TRIASSIC-GUIYANG-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-HOTHOUSE-001` | El superinvernadero temprano persistió ~5 Myr; ciclos de sílice y vegetación ofrecen retroalimentaciones plausibles, no exclusivas. | B estado; C-PROV mecanismo | AUDITADO | `EVID-TRIASSIC-HOTHOUSE-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-TERRESTRIAL-RECOVERY-001` | Riqueza, equidad y abundancia de tetrápodos en varias cuencas permanecieron alteradas hasta el Triásico Medio. | B-COND | AUDITADO | `EVID-TRIASSIC-TERRESTRIAL-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-ARCHOSAUROMORPH-RADIATION-001` | Arcosauromorfos radiaron en fases: fauna poscrisis conservadora, diversificación críptica y expansión visible cerca de la estabilización. | B-COND | AUDITADO | `EVID-TRIASSIC-ARCHOSAURS-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-ARCHOSAUR-SPLIT-001` | Archosauria incluye líneas del cocodrilo y del ave; Dinosauria es sólo una rama avemetatarsaliana y contiene aves. | A-SEM; B fósil | AUDITADO | `EVID-TRIASSIC-ARCHOSAURS-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-DINOSAUR-DEFINITION-001` | Dinosauria se reconoce por conjuntos de caracteres y árbol; bipedismo, tres dedos, tamaño o huellas aisladas no bastan. | A-SEM; B diagnóstico | AUDITADO | `EVID-TRIASSIC-DINOSAUR-ORIGIN-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-NYASASAURUS-001` | `Nyasasaurus` puede ser dinosaurio medio-triásico o su hermano inmediato; material y edad no permiten un «primero» incondicional. | C-D | AUDITADO | `EVID-TRIASSIC-DINOSAUR-ORIGIN-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-DINOSAUR-CALIBRATION-001` | Chañares `236–234 Ma` y Santa Maria `233.23 ± 0.73 Ma` comprimen el intervalo entre dinosauriformes y dinosaurios inequívocos. | B | AUDITADO | `EVID-TRIASSIC-DINOSAUR-TIME-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-PSEUDOSUCHIAN-DOMINANCE-001` | Pseudosuquios superaron a dinosaurios en diversidad, abundancia o tamaño en varias faunas triásicas; el dominio no comenzó con el origen. | B regional | AUDITADO | `EVID-TRIASSIC-DINOSAUR-ECOLOGY-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-CPE-001` | El episodio carniense coincide con cambios ambientales y expansión dinosauriana regional; causalidad y alcance por clado siguen abiertos. | B coincidencia; C-D causa | AUDITADO | `EVID-TRIASSIC-CPE-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-DINOSAUR-DIACHRONY-001` | El ascenso dinosauriano fue diacrónico y dependió de latitud, clima, recursos, incumbencia y muestreo. | B-COND | AUDITADO | `EVID-TRIASSIC-DINOSAUR-ECOLOGY-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-MAMMALIAFORM-DEFINITION-001` | Mammalia corona y Mammaliaformes no son equivalentes; «primer mamífero» depende de definición y topología. | A-SEM; C mínimo | AUDITADO | `EVID-TRIASSIC-MAMMALIAFORM-PHYLO-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-HARAMIYAVIA-001` | Micro-CT favorece `Haramiyavia` fuera de Mammalia corona, por lo que no obliga a una radiación de la corona en el Triásico. | B-COND | AUDITADO | `EVID-TRIASSIC-MAMMALIAFORM-PHYLO-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-BRASILODON-001` | `Brasilodon` presenta difiodoncia probable cerca de 225 Ma; ese patrón no demuestra corona, placenta, leche, pelo ni endotermia moderna. | B-COND rasgo; D-E paquete | AUDITADO | `EVID-TRIASSIC-BRASILODON-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-JAW-HOMOPLASY-001` | Micro-CT muestra contacto dentario–escamosal convergente en `Riograndia` y ausencia del contacto propuesto en `Brasilodon`. | B | AUDITADO | `EVID-TRIASSIC-JAW-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-PHYSIOLOGY-MOSAIC-001` | Proxies de mammaliaformes jurásicos tempranos impiden proyectar metabolismo mamaliano moderno como paquete a precursores triásicos. | B-COND | AUDITADO | `EVID-TRIASSIC-PHYSIOLOGY-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-ETE-TIMING-001` | La fase principal de extinción cerca de `201.51 ± 0.15 Ma` precede conceptualmente al GSSP jurásico `201.3 ± 0.2 Ma`; sus incertidumbres y objetos difieren. | B-COND | AUDITADO | `EVID-TRIASSIC-ETE-TIME-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-CAMP-001` | U–Pb sitúa actividad intrusiva CAMP antes de las primeras coladas conservadas y sincrónica con la crisis; gases exactos siguen inferidos. | A-B tiempo; B-COND causa | AUDITADO | `EVID-TRIASSIC-CAMP-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-ETE-KILLCHAIN-001` | CAMP, volátiles, calentamiento, acidificación, desoxigenación y estrés terrestre forman una cadena multimecanismo heterogénea. | B mecanismos; C pesos | AUDITADO | `EVID-TRIASSIC-ETE-ENVIRONMENT-001` | `INV-TRIASSIC-001` |
| `CLAIM-TRIASSIC-DINOSAUR-AFTERMATH-001` | La expansión jurásica de dinosaurios siguió a la pérdida de incumbentes y favorece oportunidad poscrisis, no victoria competitiva demostrada. | B-COND | AUDITADO | `EVID-TRIASSIC-AFTERMATH-001` | `INV-TRIASSIC-001` |

| `CLAIM-JURASSIC-SCOPE-001` | Límites, tectónica, perturbaciones, dinosaurios, avialanos y mamaliaformes usan archivos/relojes distintos; el periodo no los sincroniza. | A-SEM; B pluralidad | AUDITADO | conjunto `EVID-JURASSIC-*` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-BOUNDARIES-001` | Kuhjoch fija la base jurásica por `Psiloceras spelae tirolicum`; `143.1 ± 0.6 Ma` calibra el techo vigente. | A base; B edades/techo | AUDITADO | `EVID-JURASSIC-BOUNDARIES-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-SUBDIVISIONS-001` | Tres series contienen once pisos; Oxfordiense y Tithoniense siguen sin definición formal ratificada. | A arquitectura; B estado | AUDITADO | `EVID-JURASSIC-SUBDIVISIONS-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-JK-STATUS-001` | La base cretácica sigue siendo el último límite de sistema fanerozoico sin GSSP ratificado al 2026-08-11. | A institucional | AUDITADO | `EVID-JURASSIC-BOUNDARIES-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-RIFTING-001` | Extensión, ruptura y expansión son fases distintas y diacrónicas de la fragmentación de Pangea. | A-B patrón; C fechas | AUDITADO | `EVID-JURASSIC-RIFTING-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-ATLANTIC-OPENING-001` | El Atlántico central produjo corteza oceánica inicial cerca de `~190–180 Ma`, según segmento/criterio, con expansión muy lenta. | B-COND | AUDITADO | `EVID-JURASSIC-ATLANTIC-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-PALEOGEOGRAPHY-001` | Paleomagnetismo sitúa Pangea casi ecuatorial cerca de 200 Ma; paleolongitudes y costas requieren modelos adicionales. | B | AUDITADO | `EVID-JURASSIC-PALEOGEOGRAPHY-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-TOARCIAN-TIMING-001` | El T-OAE cerca de 183 Ma coincide con Karoo–Ferrar, carbono ligero y calentamiento; fuente/flujo por pulso siguen condicionados. | B tiempo; B-COND fuente | AUDITADO | `EVID-JURASSIC-TOARCIAN-CARBON-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-TOARCIAN-REDOX-001` | La anoxia toarciense se expandió fuertemente pero cubrió una fracción minoritaria del fondo, no todo el océano. | B-COND | AUDITADO | `EVID-JURASSIC-TOARCIAN-REDOX-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-TOARCIAN-KILLCHAIN-001` | Carbono, calentamiento, nutrientes, estratificación, anoxia/acidificación y cascadas ecológicas forman una cadena multimecanismo. | B mecanismos; C pesos | AUDITADO | `EVID-JURASSIC-TOARCIAN-ECOLOGY-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-DINOSAUR-RADIATION-001` | Masa, disparidad y riqueza dinosaurianas cambiaron a ritmos heterogéneos; no hubo una única explosión jurásica simultánea. | B-COND | AUDITADO | `EVID-JURASSIC-DINOSAUR-MASS-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-SAUROPOD-GIGANTISM-001` | El gigantismo saurópodo emerge de una cascada de alimentación, cuello, neumática, crecimiento y reproducción, no de una sola variable. | B-COND | AUDITADO | `EVID-JURASSIC-SAUROPOD-GIGANTISM-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-SAUROPOD-GROWTH-001` | Histología muestra crecimiento rápido en sauropodiformes de 1–2 t antes de saurópodos gigantes >10 t. | B | AUDITADO | `EVID-JURASSIC-SAUROPOD-GROWTH-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-FEATHERS-001` | Plumas pennáceas se distribuyeron entre paravianos jurásicos con anatomías y capacidades aéreas distintas. | A-B | AUDITADO | `EVID-JURASSIC-PARAVIAN-FEATHERS-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-ARCHAEOPTERYX-MOSAIC-001` | `Archaeopteryx` combina alas/plumas de vuelo con dientes, mano no fusionada y cola ósea larga; no es una «mitad» ni ancestro directo probado. | A morfología; B-COND nodo | AUDITADO | `EVID-JURASSIC-ARCHAEOPTERYX-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-FLIGHT-001` | Geometría interna de huesos alares apoya vuelo activo de `Archaeopteryx`, probablemente distinto del ciclo de aves modernas. | B-COND | AUDITADO | `EVID-JURASSIC-ARCHAEOPTERYX-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-AVIALAN-PHYLOGENY-001` | La posición fina de avialanos/paravianos cambia con taxones y caracteres, aunque la adquisición en mosaico es robusta. | B-COND | AUDITADO | `EVID-JURASSIC-AVIALAN-PHYLO-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-BAMINORNIS-001` | `Baminornis` documenta cola corta con pigóstilo y cinturas derivadas en un avialano jurásico, junto a una mano primitiva. | B | AUDITADO | `EVID-JURASSIC-BAMINORNIS-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-ZHENGHEORNIS-001` | `Zhengheornis` conserva 15 vértebras caudales abreviadas sin pigóstilo y apoya reducción previa a fusión terminal. | B-PROV | AUDITADO | `EVID-JURASSIC-ZHENGHEORNIS-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-CROWN-BIRD-001` | Avialanos jurásicos no prueban que Aves corona ya existiera; tallo avialano y corona son nodos distintos. | A-SEM; D corona jurásica | AUDITADO | `EVID-JURASSIC-AVIALAN-PHYLO-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-MAMMALIAFORM-ECODIVERSITY-001` | Mammaliaformes jurásicos muestran nichos semiaquáticos, fosoriales, arbóreos y planeadores, con fuerte sesgo de Lagerstätten. | A-B mínima; C global | AUDITADO | `EVID-JURASSIC-MAMMALIAFORM-ECOLOGY-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-MAMMALIAFORM-DENTITION-001` | Docodontiformes y terios desarrollaron complejidad trituradora por rutas distintas; forma parecida no implica homología. | B-COND | AUDITADO | `EVID-JURASSIC-MAMMALIAFORM-DENTITION-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-MAMMALIAFORM-GROWTH-001` | Estrategias de crecimiento más mamalianas aparecen a mitad del Jurásico, aún por debajo de tasas modernas comparables. | B-COND | AUDITADO | `EVID-JURASSIC-MAMMALIAFORM-GROWTH-001` | `INV-JURASSIC-001` |
| `CLAIM-JURASSIC-JK-TURNOVER-001` | El recambio J–K cambia al corregir roca, colecciones, nivel marino y filogenia; no demuestra un pulso mundial instantáneo. | B-COND; D pulso único | AUDITADO | `EVID-JURASSIC-JK-TURNOVER-001` | `INV-JURASSIC-001` |
| `CLAIM-CRETACEOUS-SCOPE-001` | Calendario, origen/radiación/dominancia vegetal, interacción insectil, tallo/corona aviana y radiación mamaliana son problemas relacionados pero no simultáneos ni equivalentes. | A-SEM | AUDITADO | conjunto `EVID-CRETACEOUS-BOUNDARIES-001`, `EVID-CRETACEOUS-ANGIOSPERM-FOSSIL-001`, `EVID-CRETACEOUS-INSECT-RATES-001`, `EVID-CRETACEOUS-ASTERIORNIS-001`, `EVID-CRETACEOUS-EUTHERIAN-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-BOUNDARIES-001` | ICS 2026 calibra el Cretácico en `143.1 ± 0.6–66.0 Ma`; las cifras no sustituyen los estratotipos. | B | AUDITADO | `EVID-CRETACEOUS-BOUNDARIES-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-SUBDIVISIONS-001` | Dos series y doce pisos forman la arquitectura formal cretácica, con estados de ratificación distintos. | A arquitectura; B estado | AUDITADO | `EVID-CRETACEOUS-SUBDIVISIONS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-BASE-STATUS-001` | El Berriasiense y la base cretácica carecen de GSSP ratificado al `2026-08-11`, aunque existe una edad numérica vigente. | A estado; B edad | AUDITADO | `EVID-CRETACEOUS-BOUNDARIES-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-TOP-001` | La base daniense está en la base de la arcilla limítrofe de El Kef; la eyección de impacto suprayacente pertenece al Daniense. | A horizonte; B edad | AUDITADO | `EVID-CRETACEOUS-BOUNDARIES-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ANGIOSPERM-FOSSIL-001` | Polen cretácico temprano aporta el mínimo inequívoco de angiospermas bajo caracteres diagnósticos; no fecha su origen. | A-B | AUDITADO | `EVID-CRETACEOUS-ANGIOSPERM-FOSSIL-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ANGIOSPERM-CLOCK-001` | Modelos de ocurrencias/preservación y relojes de 2021/2026 permiten una corona angiospérmica precretácica, especialmente jurásica tardía, sin convertirla en cuerpo fósil. | C-PROV | AUDITADO | `EVID-CRETACEOUS-ANGIOSPERM-CLOCK-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ANGIOSPERM-RADIATION-001` | Polen y órganos documentan un aumento escalonado; la venación supera el rango no angiospérmico muestreado hacia `106–100 Ma`. | A-B diversidad; B-COND función | AUDITADO | `EVID-CRETACEOUS-ANGIOSPERM-FOSSIL-001`, `EVID-CRETACEOUS-ANGIOSPERM-FUNCTION-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ANGIOSPERM-DOMINANCE-001` | Diversidad, abundancia, biomasa, porte y dosel angiospérmicos fueron regionalmente desacoplados. | B-COND; D uniformidad global | AUDITADO | `EVID-CRETACEOUS-ANGIOSPERM-FUNCTION-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-FLOWER-ANCESTOR-001` | Una reconstrucción de `13 444` observaciones favorece una flor corona bisexual, radial y con múltiples órganos separados; es un nodo modelado, no un fósil. | C-COND | AUDITADO | `EVID-CRETACEOUS-FLOWER-ANCESTOR-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-POLLINATION-PREANGIOSPERM-001` | Una mosca de probóscide larga conserva polen gimnospérmico en ámbar de ~`105 Ma`, apoyando visita o polinización probable local. | A-B local | AUDITADO | `EVID-CRETACEOUS-GYMNOSPERM-POLLINATION-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-POLLINATION-DIRECT-001` | Escarabajos de ~`99–98 Ma` conservan polen angiospérmico adherido, ingerido o en coprolitos; transporte/ingesta no miden eficacia fecundante. | A-B local; C eficacia | AUDITADO | `EVID-CRETACEOUS-ANGIOSPERM-POLLINATION-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-INSECT-DIVERSIFICATION-001` | Muchos linajes insectiles preceden a las angiospermas; modelos recuperan efectos específicos y desfasados sobre originación y extinción. | B-COND | AUDITADO | `EVID-CRETACEOUS-INSECT-RATES-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-AVIALAN-DIVERSITY-001` | Las aves de Jehol muestran menor disparidad funcional que ensamblajes modernos bajo morfometría/simulación; una Lagerstätte no representa todo el Cretácico. | B-COND | AUDITADO | `EVID-CRETACEOUS-AVIALAN-DISPARITY-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ICHTHYORNIS-MOSAIC-001` | El cráneo de `Ichthyornis` combina dientes mandibulares, punta premaxilar edéntula/pico y rasgos derivados en mosaico. | A-B | AUDITADO | `EVID-CRETACEOUS-ICHTHYORNIS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-CROWN-BIRD-DEFINITION-001` | Avialae del tallo no equivale a Aves corona; la pertenencia de un fósil requiere definición de nodo, matriz y sensibilidad. | A-SEM; B-COND por fósil | AUDITADO | `EVID-CRETACEOUS-ASTERIORNIS-001`, `EVID-CRETACEOUS-VEGAVIS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-ASTERIORNIS-001` | Un cráneo tridimensional de ~`66.7 Ma` recupera a `Asteriornis` cerca de Galloanserae; un fósil no fija por sí solo toda la edad de la corona. | B-COND | AUDITADO | `EVID-CRETACEOUS-ASTERIORNIS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-VEGAVIS-001` | Un cráneo de `69.2–68.4 Ma` fortalece la posición de `Vegavis` dentro de aves corona y una ecología de captura submarina. | B-PROV | AUDITADO | `EVID-CRETACEOUS-VEGAVIS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-MAMMAL-SCOPE-001` | Los mamíferos cretácicos incluyen varias ramas, tallas, dietas y geografías; tallo y corona no son equivalentes. | A-SEM; A-B diversidad mínima | AUDITADO | `EVID-CRETACEOUS-REPENOMAMUS-001`, `EVID-CRETACEOUS-EUTHERIAN-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-REPENOMAMUS-001` | Dos especies amplían la talla mamaliana conocida; un ejemplar conserva restos abdominales de `Psittacosaurus` juvenil sin distinguir caza de carroñeo. | A-B | AUDITADO | `EVID-CRETACEOUS-REPENOMAMUS-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-MULTITUBERCULATE-001` | Complejidad dental, talla y herbivoría de multituberculados aumentaron al menos `20 Myr` antes de K–Pg; el vínculo angiospérmico es condicionado. | B-COND | AUDITADO | `EVID-CRETACEOUS-MULTITUBERCULATE-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-THERIAN-RADIATION-001` | La morfometría dental recupera mayor disparidad y amplitud dietaria teria `10–20 Myr` antes de K–Pg. | B-COND | AUDITADO | `EVID-CRETACEOUS-THERIAN-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-EUTHERIAN-CROWN-001` | `Ambolestes` y matrices distinguen euterios del tallo de Placentalia; la edad de la corona placentaria sigue disputada. | A-SEM; B-COND posiciones; C-D edad | AUDITADO | `EVID-CRETACEOUS-EUTHERIAN-001` | `INV-CRETACEOUS-001` |
| `CLAIM-CRETACEOUS-GONDWANATHERIA-001` | `Vintana` y `Adalatherium` documentan anatomía mamaliana gondwánica e insular distintiva, con relaciones filogenéticas aún variables. | A-B anatomía; C-COND relaciones | AUDITADO | `EVID-CRETACEOUS-GONDWANATHERIA-001` | `INV-CRETACEOUS-001` |
| `CLAIM-KPG-SCOPE-001` | Frontera formal, impacto, pulsos Deccan, forzamientos, selectividad y recuperación son seis relojes relacionados pero no sustituibles. | A-SEM | AUDITADO | conjunto `EVID-KPG-BOUNDARY-001`, `EVID-KPG-CRATER-LINK-001`, `EVID-KPG-DECCAN-CHRON-001`, `EVID-KPG-WINTER-001`, `EVID-KPG-EXTINCTION-001`, `EVID-KPG-RECOVERY-HETEROCHRONY-001` | `INV-KPG-001` |
| `CLAIM-KPG-BOUNDARY-001` | La base daniense se calibra en `66.0 Ma` y se define en la base de la arcilla de El Kef; la eyección suprayacente no es el lecho formal. | A horizonte; B edad | AUDITADO | `EVID-KPG-BOUNDARY-001` | `INV-KPG-001` |
| `CLAIM-KPG-IRIDIUM-001` | Anomalías de iridio coincidentes con K–Pg en varias regiones exigen un aporte extraordinario y sostienen origen extraterrestre al integrarse con otros ejecta. | A-B | AUDITADO | `EVID-KPG-IMPACT-PROVENANCE-001` | `INV-KPG-001` |
| `CLAIM-KPG-CRATER-001` | Geofísica, pozos, rocas de choque y perforación identifican una estructura de impacto enterrada de `~180–200 km` en Chicxulub. | A-B; B tamaño | AUDITADO | `EVID-KPG-CRATER-001` | `INV-KPG-001` |
| `CLAIM-KPG-CRATER-LINK-001` | Edad, ejecta y un pico de iridio dentro del cráter enlazan Chicxulub con la capa mundial de K–Pg. | A-B | AUDITADO | `EVID-KPG-CRATER-LINK-001` | `INV-KPG-001` |
| `CLAIM-KPG-IMPACTOR-001` | Isótopos de Ni de 2026 restringen el impactor a condritas CO o ciertas carbonáceas no agrupadas; no fijan su órbita. | B-PROV | AUDITADO | `EVID-KPG-IMPACTOR-001` | `INV-KPG-001` |
| `CLAIM-KPG-FIRST-DAY-001` | Un núcleo del anillo de pico conserva `~130 m` de brecha/fundido y sedimentos de colapso, inundación y retorno de tsunami del primer día. | A-B local | AUDITADO | `EVID-KPG-FIRST-DAY-001` | `INV-KPG-001` |
| `CLAIM-KPG-DECCAN-TIMING-001` | Deccan estuvo activo antes y después de K–Pg; su cronología de pulsos se resuelve mediante U–Pb y `40Ar/39Ar`. | A-B | AUDITADO | `EVID-KPG-DECCAN-CHRON-001` | `INV-KPG-001` |
| `CLAIM-KPG-DECCAN-DISAGREEMENT-001` | Modelos publicados asignan fracciones distintas del volumen Deccan antes/después del límite, desde mayoría posterior hasta `~70 %` previo en una recalibración de 2025. | B-COND | AUDITADO | `EVID-KPG-DECCAN-CHRON-001` | `INV-KPG-001` |
| `CLAIM-KPG-DECCAN-CLIMATE-001` | Un proxy de turba registra enfriamiento de `~5 °C`, <`10 kyr`, unos `30 kyr` antes del límite y retorno térmico previo al pulso de extinción. | B-COND regional | AUDITADO | `EVID-KPG-DECCAN-CLIMATE-001` | `INV-KPG-001` |
| `CLAIM-KPG-IMPACT-DECCAN-001` | Chicxulub pudo modular el estilo eruptivo de una provincia Deccan ya activa; plausibilidad y correlación no demuestran disparo. | C-COND | AUDITADO | `EVID-KPG-DECCAN-TRIGGER-001` | `INV-KPG-001` |
| `CLAIM-KPG-CAUSAL-ATTRIBUTION-001` | La evidencia integrada atribuye el pulso abrupto de extinción principalmente a Chicxulub y conserva Deccan como perturbación y posible estresor. | A impacto; B-COND reparto | AUDITADO | `EVID-KPG-CAUSAL-ATTRIBUTION-001` | `INV-KPG-001` |
| `CLAIM-KPG-THERMAL-PULSE-001` | Reentrada de ejecta pudo generar calor e incendios extensos; un modelo de 2026 amplifica el pulso con polvo fino, sin probar combustión de cada bosque. | C-PROV global | AUDITADO | `EVID-KPG-THERMAL-PULSE-001` | `INV-KPG-001` |
| `CLAIM-KPG-IMPACT-WINTER-001` | Polvo, sulfato y hollín redujeron luz y enfriaron el planeta; duración y magnitud exactas dependen del inventario y transporte modelados. | B mecanismo; C-COND curva | AUDITADO | `EVID-KPG-WINTER-001` | `INV-KPG-001` |
| `CLAIM-KPG-OCEAN-ACIDIFICATION-001` | Isótopos de boro apoyan una caída superficial de `~0.25` pH, pero modelos recientes no requieren acidificación como causa primaria de la selectividad planctónica. | B-COND pH; C peso | AUDITADO | `EVID-KPG-OCEAN-001` | `INV-KPG-001` |
| `CLAIM-KPG-EXTINCTION-SCOPE-001` | K–Pg eliminó aproximadamente `75 %` de especies y varios clados completos, con intensidad variable entre archivos, regiones y métricas. | B | AUDITADO | `EVID-KPG-EXTINCTION-001` | `INV-KPG-001` |
| `CLAIM-KPG-MARINE-SELECTIVITY-001` | Oscuridad, estrategia trófica y umbrales energéticos dependientes del tamaño reproducen gran parte de la selectividad planctónica en un modelo de 2026. | C-PROV | AUDITADO | `EVID-KPG-MARINE-SELECTIVITY-001` | `INV-KPG-001` |
| `CLAIM-KPG-PLANT-COLLAPSE-001` | Caída de polen arbóreo y picos regionales de esporas de helechos registran colapso/recolonización forestal, no incendio mundial uniforme. | A-B regional; C global | AUDITADO | `EVID-KPG-PLANTS-001` | `INV-KPG-001` |
| `CLAIM-KPG-BIRD-SELECTIVITY-001` | Una reconstrucción filogenética vincula colapso forestal con supervivencia profunda predominantemente terrestre de aves corona. | B-COND | AUDITADO | `EVID-KPG-BIRDS-001` | `INV-KPG-001` |
| `CLAIM-KPG-MAMMAL-SELECTIVITY-001` | En registros norteamericanos sobrevivieron mejor mamíferos pequeños, comunes, extendidos y generalistas; también hubo extinción e inmigración. | B-COND regional | AUDITADO | `EVID-KPG-MAMMALS-001` | `INV-KPG-001` |
| `CLAIM-KPG-DINOSAUR-DECLINE-001` | La tendencia dinosauriana pre-K–Pg depende de modelo y muestreo; faunas de Nuevo México conservan diversidad/provincialidad hasta `~66.0 Ma`. | B local; C-D global | AUDITADO | `EVID-KPG-DINOSAURS-001` | `INV-KPG-001` |
| `CLAIM-KPG-CRATER-RECOVERY-001` | El cráter fue recolonizado en años y reunió una comunidad planctónica diversa en decenas de milenios. | B-COND local | AUDITADO | `EVID-KPG-CRATER-RECOVERY-001` | `INV-KPG-001` |
| `CLAIM-KPG-CONTINENTAL-RECOVERY-001` | Corral Bluffs registra recuperación escalonada de riqueza/tamaño mamalianos y floras durante los primeros `100–300 kyr`. | B-COND regional | AUDITADO | `EVID-KPG-CONTINENTAL-RECOVERY-001` | `INV-KPG-001` |
| `CLAIM-KPG-RECOVERY-HETEROCHRONY-001` | Presencia, productividad, riqueza, disparidad, redes y exportación de carbono se recuperaron a ritmos de años a millones de años. | B-COND | AUDITADO | `EVID-KPG-RECOVERY-HETEROCHRONY-001` | `INV-KPG-001` |
| `CLAIM-PALEOGENE-SCOPE-001` | Fronteras, recuperación, nodos, mosaicos anatómicos y clima son cinco relojes relacionados pero no sustituibles. | A-SEM | AUDITADO | `EVID-PALEOGENE-BOUNDARIES-001`, `EVID-PALEOGENE-RECOVERY-001`, `EVID-PALEOGENE-PLACENTAL-TIMING-001`, `EVID-PALEOGENE-CETACEAN-MOSAIC-001`, `EVID-PALEOGENE-PETM-SIGNAL-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-BOUNDARIES-001` | El Paleógeno se calibra entre `66.0–23.04 Ma`, con Paleoceno, Eoceno y Oligoceno definidos mediante GSSP y no sólo números. | A arquitectura; B edades | AUDITADO | `EVID-PALEOGENE-BOUNDARIES-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-EOCENE-GSSP-001` | La base ypresiense/eocena está en la base del Lecho 1 de Dababiya, donde inicia la excursión isotópica de carbono del PETM. | A horizonte; B correlación | AUDITADO | `EVID-PALEOGENE-BOUNDARIES-001`, `EVID-PALEOGENE-PETM-SIGNAL-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-OLIGOCENE-GSSP-001` | La base rupeliense/oligocena está en Massignano y se asocia con la desaparición de hantkenínidos; no equivale al intervalo completo de glaciación. | A horizonte; B correlación | AUDITADO | `EVID-PALEOGENE-BOUNDARIES-001`, `EVID-PALEOGENE-EOT-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-END-001` | El Paleógeno termina formalmente en la base aquitaniense del Mioceno/Neógeno, calibrada en `23.04 Ma`. | A horizonte; B edad | AUDITADO | `EVID-PALEOGENE-BOUNDARIES-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-RECOVERY-001` | Corral Bluffs registra recuperación escalonada de mamíferos y plantas durante el primer millón de años, sin representar automáticamente al planeta. | B-COND regional | AUDITADO | `EVID-PALEOGENE-RECOVERY-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-MAMMAL-DIVERSITY-001` | La radiación paleógena incorporó linajes supervivientes, inmigración y nuevas morfologías; Mammalia y varias radiaciones dentales anteceden K–Pg. | A-B diversidad; B-COND proceso | AUDITADO | `EVID-PALEOGENE-MAMMAL-RADIATION-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-MAMMAL-SIZE-001` | La talla máxima mamaliana terrestre aumentó durante decenas de Myr y alcanzó mesetas distintas por continente/orden; no describe la talla típica. | B-COND | AUDITADO | `EVID-PALEOGENE-MAMMAL-SIZE-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PLACENTAL-TIMING-001` | Morfología, genomas y ocurrencias sostienen modelos explosivo, de mecha larga e híbrido para Placentalia; los objetos fechados no son equivalentes. | B-COND patrón; C-D nodo exacto | AUDITADO | `EVID-PALEOGENE-PLACENTAL-TIMING-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PLACENTAL-LIFE-HISTORY-001` | Incrementos y elementos traza dentales de `Pantolambda` apoyan gestación prolongada y desarrollo precocial en ese taxón, no en todo placentario temprano. | B-COND | AUDITADO | `EVID-PALEOGENE-PANTOLAMBDA-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PURGATORIUS-001` | Dientes de `Purgatorius` aparecen `105–139 kyr` pos-K–Pg y apoyan primates de tallo/plesiadapiformes, no monos ni corona automáticamente. | A-B edad/presencia; B-COND posición | AUDITADO | `EVID-PALEOGENE-PURGATORIUS-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-EUPRIMATE-001` | Euprimates inequívocos aparecen cerca de `56–55 Ma`; `Archicebus` de ~`55 Ma` fue recuperado como tarsiiforme basal en su matriz. | A-B anatomía/edad; B-COND posición | AUDITADO | `EVID-PALEOGENE-EUPRIMATE-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PRIMATE-DISPERSAL-001` | La ordenación isotópica de `Teilhardina` permite una dispersión Asia–Europa–Norteamérica en ~`25 kyr`, condicionada por taxonomía y edad–profundidad. | C-COND | AUDITADO | `EVID-PALEOGENE-PRIMATE-DISPERSAL-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PRIMATE-MOSAIC-001` | Dientes, tobillos, esqueletos y árboles documentan adquisición en mosaico de rasgos primates; ningún fósil constituye un eslabón lineal. | A-SEM; B-COND anatomía | AUDITADO | `EVID-PALEOGENE-PURGATORIUS-001`, `EVID-PALEOGENE-EUPRIMATE-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-CETACEAN-ORIGIN-001` | Cetacea se anida en Artiodactyla; hipopótamos son parientes vivos, y raoélidos como `Indohyus` son próximos, no ancestros individuales demostrados. | A-B clado; B-COND fósiles | AUDITADO | `EVID-PALEOGENE-CETACEAN-ROOT-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-CETACEAN-TERRESTRIAL-001` | Paquicétidos combinan oído cetáceo con miembros de soporte terrestre; `Kalakocetus` añade un mosaico dental basal en 2026. | A-B anatomía; B-PROV posición nueva | AUDITADO | `EVID-PALEOGENE-CETACEAN-TERRESTRIAL-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-CETACEAN-AMPHIBIOUS-001` | `Ambulocetus` y protocétidos documentan pelvis, miembros y tobillos compatibles con fases anfibias y relación artiodáctila. | A-B anatomía; B-COND función | AUDITADO | `EVID-PALEOGENE-CETACEAN-AMPHIBIOUS-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-CETACEAN-PELAGIC-001` | Basilosáuridos fueron acuáticos obligados y conservaron miembros posteriores reducidos; los módulos cambiaron a ritmos distintos. | A-B anatomía; B función | AUDITADO | `EVID-PALEOGENE-CETACEAN-MOSAIC-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PETM-SIGNAL-001` | El PETM cerca de `56 Ma` combina CIE negativa mundial, calentamiento y disolución de carbonato por una gran entrada de carbono ligero. | A-B | AUDITADO | `EVID-PALEOGENE-PETM-SIGNAL-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PETM-FORCING-001` | Carbonato y boro sostienen acidificación oceánica rápida y recuperación prolongada; magnitud de pH y masa requieren modelos. | B-COND | AUDITADO | `EVID-PALEOGENE-PETM-FORCING-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PETM-SOURCE-001` | NAIP y carbono volcánico/termogénico tienen apoyo fuerte, pero el reparto con retroalimentaciones de reservorios superficiales sigue abierto. | B-COND; C reparto | AUDITADO | `EVID-PALEOGENE-PETM-SOURCE-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PETM-RATE-001` | Un modelo estima inicio ≥`4 kyr` y tasa sostenida <`1.1 Pg C/año`; el PETM no replica la velocidad industrial moderna. | B-COND | AUDITADO | `EVID-PALEOGENE-PETM-RATE-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-PETM-BIOTA-001` | `Sifrhippus` redujo ~`30 %` su masa estimada y luego se recuperó en Wyoming; es una respuesta regional, no una regla universal. | B-COND regional | AUDITADO | `EVID-PALEOGENE-PETM-BIOTA-001` | `INV-PALEOGENE-001` |
| `CLAIM-PALEOGENE-EOT-001` | La transición Eoceno–Oligoceno (~`34.4–33.7 Ma`) registra dos pasos isotópicos, caída eustática y expansión del hielo antártico, no un instante único. | B-COND | AUDITADO | `EVID-PALEOGENE-EOT-001` | `INV-PALEOGENE-001` |
| `CLAIM-NEOGENE-SCOPE-001` | Fronteras, clima, vegetación, evolución mamaliana y formación de Panamá son cinco relojes relacionados pero no sustituibles. | A-SEM | AUDITADO | `EVID-NEOGENE-BOUNDARIES-001`, `EVID-NEOGENE-CLIMATE-MMCT-001`, `EVID-NEOGENE-GRASS-DIVERSIFICATION-001`, `EVID-NEOGENE-HOMINOID-LOCOMOTION-001`, `EVID-NEOGENE-PANAMA-FINAL-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-BOUNDARIES-001` | El Neógeno se calibra `23.04–2.58 Ma` e incluye Mioceno y Plioceno; sus fronteras son GSSP físicos, no sólo cifras. | A arquitectura; B edades | AUDITADO | `EVID-NEOGENE-BOUNDARIES-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-PLIOCENE-GSSP-001` | La base del Plioceno/Zancliense está en la base de la Formación Trubi en Eraclea Minoa y se calibra en `5.333 Ma`. | A horizonte; B edad | AUDITADO | `EVID-NEOGENE-BOUNDARIES-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-END-001` | El Neógeno termina en la base gelasiense de Monte San Nicola, que define Pleistoceno y Cuaternario a `2.58 Ma`. | A horizonte; B edad | AUDITADO | `EVID-NEOGENE-BOUNDARIES-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-CLIMATE-OPTIMUM-001` | El Óptimo Climático del Mioceno (~`17–15 Ma`) fue una ventana cálida con respuestas antárticas, no un Neógeno uniformemente tropical o sin hielo. | B-COND | AUDITADO | `EVID-NEOGENE-CLIMATE-MCO-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-MMCT-001` | La MMCT cerca de `14 Ma` acopló enfriamiento austral y expansión rápida del hielo bajo `CO₂` decreciente y ritmo orbital; los pesos causales siguen abiertos. | B-COND | AUDITADO | `EVID-NEOGENE-CLIMATE-MMCT-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-CLIMATE-MOSAIC-001` | El enfriamiento tardomioceno fue amplio, pero aridificación, monzones, fuego y vegetación respondieron regionalmente y con desfases. | B global; B-COND regional | AUDITADO | `EVID-NEOGENE-CLIMATE-LATE-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-GRASS-ORIGIN-001` | Las gramíneas y linajes de hábitat abierto anteceden al Neógeno; una expansión miocena no es su origen. | A-B | AUDITADO | `EVID-NEOGENE-GRASS-DIVERSIFICATION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-GRASS-DIVERSIFICATION-001` | Fitolitos norteamericanos muestran gramíneas abiertas diversas hacia `34 Ma`, antes de su dominancia ecológica. | B-COND regional | AUDITADO | `EVID-NEOGENE-GRASS-DIVERSIFICATION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-GRASS-DOMINANCE-001` | En Norteamérica la dominancia de gramíneas abiertas siguió `7–11 Myr` después de su diversificación; diversidad y cobertura tienen relojes distintos. | B-COND regional | AUDITADO | `EVID-NEOGENE-GRASS-DIVERSIFICATION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-C4-EARLY-001` | Nueve complejos de África oriental registran `C4` localmente abundante y hábitats heterogéneos entre `~21–16 Ma`. | B-COND regional | AUDITADO | `EVID-NEOGENE-C4-EARLY-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-C4-EXPANSION-001` | El esmalte fósil registra un aumento intercontinental de biomasa `C4` entre `8–6 Ma`; es expansión, no origen ni causa única. | B-COND | AUDITADO | `EVID-NEOGENE-C4-EXPANSION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-C4-PROXY-001` | Esmalte, fitolitos, paleosuelos y biomarcadores miden dieta, vegetación local y aporte regional diferentes; no son porcentajes intercambiables de cobertura. | A-SEM; B-COND | AUDITADO | `EVID-NEOGENE-C4-EARLY-001`, `EVID-NEOGENE-C4-EXPANSION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-MAMMAL-ECOMORPHOLOGY-001` | La hipsodoncia responde a desgaste por dieta, polvo, arena o ceniza y no demuestra por sí sola un pastizal ni pastoreo. | B-COND | AUDITADO | `EVID-NEOGENE-MAMMAL-ECOMORPHOLOGY-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-HOMINOID-ROOT-001` | `Rukwapithecus` y un cercopitecoideo de tallo a `25.2 Ma` llevan ambas ramas catarrinas al Oligoceno; son mínimos fósiles, no el nodo observado. | A-B edad; B-COND posición | AUDITADO | `EVID-NEOGENE-HOMINOID-ROOT-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-HOMINOID-DIVERSITY-001` | Los hominoideos miocenos fueron una radiación africana y eurasiática ramificada; la mayoría no son etapas ni coronas vivas demostradas. | A-B diversidad; B-COND nodos | AUDITADO | `EVID-NEOGENE-HOMINOID-ROOT-001`, `EVID-NEOGENE-HOMINOID-ALESI-001`, `EVID-NEOGENE-HOMINOID-BIOGEOGRAPHY-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-HOMINOID-ALESI-001` | El cráneo infantil de `Alesi`, `13 Ma`, apoya un hominoideo de tallo; su cara parecida a gibón probablemente es convergente. | A-B anatomía/edad; B-COND posición | AUDITADO | `EVID-NEOGENE-HOMINOID-ALESI-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-HOMINOID-LOCOMOTION-001` | Moroto vincula versatilidad con hábitat heterogéneo; `Danuvius` apoya suspensión/trepa, mientras su supuesto bipedismo sigue discutido. | B-COND | AUDITADO | `EVID-NEOGENE-HOMINOID-LOCOMOTION-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-HOMINOID-ORIGIN-001` | Simios mediterráneos permiten hipótesis eurasiática o dispersión africana; no fijan el origen geográfico de homininos ni la rama humana. | C-COND | AUDITADO | `EVID-NEOGENE-HOMINOID-BIOGEOGRAPHY-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-PANAMA-CLOCKS-001` | Arco, islas, restricción profunda, cierre somero, puente terrestre y dispersión biológica son relojes distintos de “Panamá”. | A-SEM | AUDITADO | `EVID-NEOGENE-PANAMA-PROVENANCE-001`, `EVID-NEOGENE-PANAMA-FINAL-001`, `EVID-NEOGENE-GABI-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-PANAMA-MIOCENE-001` | Circones y paleodrenajes apoyan conexión Panamá–Sudamérica hacia `15–13 Ma`, condicionada por fuente, transporte y pasos marinos alternativos. | B datos; C-COND cierre | AUDITADO | `EVID-NEOGENE-PANAMA-PROVENANCE-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-PANAMA-FINAL-CLOSURE-001` | Geología y señales marinas/terrestres convergen en un istmo *sensu stricto* cerca de `2.8 Ma`, tras una restricción gradual. | B-COND | AUDITADO | `EVID-NEOGENE-PANAMA-FINAL-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-GABI-EARLY-001` | Pulsos biológicos precedieron el cierre final; islas, balsas o conexiones transitorias permiten dispersión sin puente permanente. | B patrón; C-COND ruta | AUDITADO | `EVID-NEOGENE-GABI-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-GABI-ASYMMETRY-001` | Un modelo de ~`20 000` ocurrencias atribuye la asimetría mamaliana sobre todo a mayor extinción de nativos sudamericanos, no a mayor dispersión norteña. | B-COND | AUDITADO | `EVID-NEOGENE-GABI-ASYMMETRY-001` | `INV-NEOGENE-001` |
| `CLAIM-NEOGENE-PANAMA-CLIMATE-001` | Panamá pudo modular salinidad y circulación, pero no constituye causa suficiente única del enfriamiento ni de la glaciación cuaternaria. | B mecanismo; C pesos | AUDITADO | `EVID-NEOGENE-PANAMA-CLIMATE-001` | `INV-NEOGENE-001` |
| `CLAIM-QUATERNARY-SCOPE-001` | El Cuaternario exige separar fronteras, órbita, MPT, cambios abruptos, deglaciación y extinciones como seis relojes. | A-SEM | AUDITADO | `EVID-QUATERNARY-BOUNDARIES-001`, `EVID-QUATERNARY-ORBITAL-001`, `EVID-QUATERNARY-MPT-001`, `EVID-QUATERNARY-ABRUPT-001`, `EVID-QUATERNARY-LGM-001`, `EVID-QUATERNARY-MEGAFAUNA-GLOBAL-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-BOUNDARIES-001` | El Cuaternario/Pleistoceno comienza en Monte San Nicola a `2.58 Ma`; el Holoceno comienza en NGRIP2 a `11 700 yr b2k`. | A horizonte; B edades | AUDITADO | `EVID-QUATERNARY-BOUNDARIES-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-CHIBANIAN-GSSP-001` | La base chibaniense es la base de Byk-E en Chiba, calibrada en `774.1 ka`, no el punto medio exacto de Matuyama–Brunhes. | A horizonte; B edad | AUDITADO | `EVID-QUATERNARY-CHIBANIAN-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-UPPER-PLEISTOCENE-001` | La base del Pleistoceno superior carece todavía de GSSP ratificado. | A | AUDITADO | `EVID-QUATERNARY-BOUNDARIES-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-HOLOCENE-GSSP-001` | El GSSP holoceno registra el final abrupto del Younger Dryas en NGRIP2 y se calibra en `11 700 yr b2k`. | A horizonte; B edad | AUDITADO | `EVID-QUATERNARY-BOUNDARIES-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-ANTHROPOCENE-STATUS-001` | IUGS/ICS rechazó en 2024 formalizar el Antropoceno como época basada en 1952; el concepto sigue siendo utilizable fuera de ese rango formal. | A decisión | AUDITADO | `EVID-QUATERNARY-ANTHROPOCENE-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-ORBITAL-PACING-001` | Frecuencias próximas a precesión, oblicuidad y ~`100 kyr` aparecen en registros glaciares, pero requieren retroalimentaciones para producir amplitud. | A-B patrón; B-COND mecanismo | AUDITADO | `EVID-QUATERNARY-ORBITAL-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-DELTA18O-001` | El `δ18O` bentónico combina temperatura profunda y volumen de hielo; LR04 es una pila correlacionada, no una medición pura independiente. | A-SEM; B-COND | AUDITADO | `EVID-QUATERNARY-LR04-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-ICE-CO2-001` | Burbujas antárticas miden gases antiguos hasta `800 ka`, con diferencia de edad gas–hielo y suavizado por cierre de poros. | A medición; B cronología | AUDITADO | `EVID-QUATERNARY-ICE-CO2-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MPT-PATTERN-001` | La MPT transformó ciclos dominados por `41 kyr` en oscilaciones más largas y asimétricas entre ~`1.2–0.7 Ma`. | A-B | AUDITADO | `EVID-QUATERNARY-MPT-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MPT-CAUSE-001` | CO₂, erosión de regolito, umbrales del manto y océano son mecanismos rivales o complementarios; ninguno es causa única demostrada. | C-COND | AUDITADO | `EVID-QUATERNARY-MPT-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MPT-CO2-2026-001` | Hielo discontinuo de Allan Hills sugiere caída media pequeña antes de la MPT y estabilidad aproximada durante ella; no constituye serie continua. | B-PROV patrón; C causa | AUDITADO | `EVID-QUATERNARY-MPT-CO2-2026-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-LGM-001` | El Último Máximo Glacial fue un intervalo aproximado `26.5–19/20 ka`, con máximos regionales no idénticos. | B | AUDITADO | `EVID-QUATERNARY-LGM-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-ABRUPT-GREENLAND-001` | Testigos groenlandeses registran transiciones en años o décadas; su velocidad es regional antes de sincronización externa. | A-B regional | AUDITADO | `EVID-QUATERNARY-ABRUPT-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-BIPOLAR-SEESAW-001` | La respuesta antártica gradual sigue cambios abruptos del norte por ~`200 años`, compatible con un balancín bipolar. | B-COND | AUDITADO | `EVID-QUATERNARY-BIPOLAR-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-YD-REGIONAL-001` | El Younger Dryas produjo respuestas hidroclimáticas heterogéneas; no fue un enfriamiento mundial idéntico. | B | AUDITADO | `EVID-QUATERNARY-YD-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-YD-IMPACT-001` | La hipótesis de impacto del Younger Dryas permanece disputada y no está establecida por cronología ni marcadores exclusivos. | B crítica; D mecanismo | AUDITADO | `EVID-QUATERNARY-YD-IMPACT-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-RADIOCARBON-001` | Una edad radiocarbónica necesita calibración y corrección de reservorio para producir una distribución calendario. | A-SEM; B | AUDITADO | `EVID-QUATERNARY-RADIOCARBON-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-DEFINITION-001` | «Megafauna» usa umbrales variables —comúnmente ~`44 kg`, a veces otros— que cambian listas y tasas. | A-SEM | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-GLOBAL-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-SELECTIVITY-001` | Las pérdidas tardocuaternarias fueron desproporcionadas entre mamíferos grandes, no una muestra aleatoria de la fauna. | A-B | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-SELECTIVITY-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-TIMING-001` | Última aparición observada, intervalo de extinción y causa son inferencias distintas condicionadas por tafonomía y detectabilidad. | A-SEM; B-COND | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-TIMING-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-GLOBAL-001` | A escala global la severidad de extinción se asocia fuertemente con expansión humana, sin resolver cada mecanismo regional. | B-COND global | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-GLOBAL-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-SPECIES-001` | ADN, rangos y clima muestran respuestas demográficas específicas por especie, incompatibles con una sola trayectoria universal. | B-COND | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-SPECIES-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-AUSTRALIA-001` | Un registro australiano sitúa la caída de señal de megafauna en `45–43.1 ka` y favorece influencia humana, con límites del proxy. | B-COND regional | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-AUSTRALIA-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-PATAGONIA-001` | Patagonia apoya una sinergia entre ocupación humana y calentamiento, no exclusividad universal de uno de los factores. | B-COND regional | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-PATAGONIA-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-NORTHAMERICA-001` | Norteamérica conserva un pulso terminal, pero la atribución relativa a clima y población humana cambia con cronologías y modelos. | B patrón; C causa | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-NORTHAMERICA-001` | `INV-QUATERNARY-001` |
| `CLAIM-QUATERNARY-MEGAFAUNA-ECOLOGY-001` | La pérdida de grandes herbívoros pudo alterar fuego y vegetación; secuencias locales no establecen una consecuencia mundial uniforme. | B-COND regional | AUDITADO | `EVID-QUATERNARY-MEGAFAUNA-ECOLOGY-001` | `INV-QUATERNARY-001` |
| `CLAIM-HOMININ-SPLIT-SCOPE-001` | Fechar la separación de los linajes humanos exige distinguir topología, divergencia, coalescencia, mutación, generaciones, calibración fósil y flujo génico. | A-SEM | AUDITADO | síntesis de `EVID-HOMININ-SPLIT-*` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-COMMON-ANCESTOR-001` | El último ancestro común fue una población con muchos linajes génicos, no necesariamente un individuo o una pareja en una fecha única. | A-SEM | AUDITADO | `EVID-HOMININ-SPLIT-COALHMM-001`, `EVID-HOMININ-SPLIT-ILS-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-TREE-TOPOLOGY-001` | Humanos y `Pan` son ramas hermanas vivas; gorila y orangután divergieron antes, aunque loci individuales puedan apoyar topologías discordantes. | A | AUDITADO | `EVID-HOMININ-SPLIT-T2T-001`, `EVID-HOMININ-SPLIT-ILS-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-GENOMIC-DIVERGENCE-001` | La divergencia genómica combina cambios posteriores al split y diversidad/coalescencia ancestral; no es una fecha directa. | A-SEM; B-COND | AUDITADO | `EVID-HOMININ-SPLIT-CHIMP-DIVERGENCE-001`, `EVID-HOMININ-SPLIT-COALHMM-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-SIMILARITY-METRIC-001` | Todo porcentaje de similitud depende de regiones comparadas, denominador y tratamiento de SNP, indels, duplicaciones y estructura. | A-SEM | AUDITADO | `EVID-HOMININ-SPLIT-CHIMP-DIVERGENCE-001`, `EVID-HOMININ-SPLIT-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-T2T-2025-001` | Las referencias de 2025 caracterizaron ~`99.5 %` del contenido y llevaron `74 %` de cromosomas diploides muestreados a T2T, sin censar poblaciones. | A-B muestra; B generalización | AUDITADO | `EVID-HOMININ-SPLIT-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-SPECIES-SPLIT-001` | Inicio de separación, fin de flujo y aislamiento reproductivo completo son parámetros distintos, no un instante universal observado. | A-SEM; C-COND para duración | AUDITADO | `EVID-HOMININ-SPLIT-COALHMM-001`, `EVID-HOMININ-SPLIT-GENE-FLOW-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-COALESCENCE-001` | El TMRCA de un locus suele anteceder a la separación poblacional y varía a lo largo del genoma por recombinación. | A-SEM; B-COND | AUDITADO | `EVID-HOMININ-SPLIT-COALHMM-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-ILS-001` | La ILS esperada por separaciones próximas y población ancestral grande produce árboles génicos discordantes sin refutar el árbol de especies ni demostrar hibridación. | A-B | AUDITADO | `EVID-HOMININ-SPLIT-ILS-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-ILS-T2T-001` | Estimaciones de ILS aumentaron de ~`30 %` a `36.5 %` y `39.5 %` autosómico al cambiar referencias, regiones y modelos; no son porcentajes directamente intercambiables. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-ILS-001`, `EVID-HOMININ-SPLIT-ILS-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-X-MOSAIC-001` | El X tiene tamaño efectivo, recombinación y selección particulares; su baja divergencia admite flujo, barridos y sesgos como alternativas. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-X-001`, `EVID-HOMININ-SPLIT-SEX-CHROMOSOMES-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-MUTATION-RATE-001` | Mutación de novo por generación y sustitución fijada por año no son la misma tasa ni se convierten sin modelo. | A-SEM; B medida | AUDITADO | `EVID-HOMININ-SPLIT-TRIOS-001`, `EVID-HOMININ-SPLIT-RATE-HETEROGENEITY-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-PARENTAL-AGE-001` | Las mutaciones de novo aumentan con edades parentales y muestran mayor contribución paterna en grandes simios. | A-B | AUDITADO | `EVID-HOMININ-SPLIT-TRIOS-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-GENERATION-TIME-001` | Duración generacional y edades reproductivas distintas entre ramas modifican la tasa anual y las fechas de divergencia. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-GENERATION-001`, `EVID-HOMININ-SPLIT-TRIOS-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-RATE-HETEROGENEITY-001` | La tasa molecular varía entre ramas y tipos de sustitución; CpG puede ser más regular que otras clases, sin crear un reloj universal. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-RATE-HETEROGENEITY-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-FOSSIL-CALIBRATION-001` | Una calibración fósil reproducible exige espécimen, caracteres, posición filogenética, localidad, horizonte, edad y distribución justificadas. | A-MET | AUDITADO | `EVID-HOMININ-SPLIT-FOSSIL-CALIBRATION-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-FOSSIL-MINIMUM-001` | Un fósil fija como máximo un mínimo de rama condicionado a su afinidad; ausencia más antigua no crea por sí sola un máximo duro. | A-SEM; B-COND | AUDITADO | `EVID-HOMININ-SPLIT-FOSSIL-CALIBRATION-001`, `EVID-HOMININ-SPLIT-FOSSIL-NEAR-NODES-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-HOMO-PAN-TIMING-001` | La síntesis prudente sitúa la separación Homo–Pan en ~`5.5–7 Ma`; `5.5–6.3 Ma` es la estimación específica del modelo T2T 2025. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-TIMING-T2T-001`, `EVID-HOMININ-SPLIT-FOSSIL-NEAR-NODES-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-AFRICAN-APE-TIMING-001` | El modelo T2T 2025 estimó la separación de gorila respecto de Homo–Pan en `10.6–10.9 Ma`. | B-COND estudio | AUDITADO | `EVID-HOMININ-SPLIT-TIMING-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-ORANGUTAN-TIMING-001` | El modelo T2T 2025 estimó la separación de orangutanes en `18.2–19.6 Ma`. | B-COND estudio | AUDITADO | `EVID-HOMININ-SPLIT-TIMING-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-PAN-TIMING-001` | Chimpancés y bonobos se separaron ampliamente cerca de `1–2 Ma`, con flujo posterior entre algunas poblaciones. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-PAN-001`, `EVID-HOMININ-SPLIT-PAN-GENE-FLOW-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-GENE-FLOW-001` | Modelos de aislamiento con migración pueden favorecer una separación Homo–Pan prolongada, pero su identificación depende de alternativas, tasa y recombinación. | C-COND | AUDITADO | `EVID-HOMININ-SPLIT-GENE-FLOW-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-GENE-FLOW-CONTROVERSY-001` | La hibridación tardía Homo–Pan no está demostrada; señales del X y reticulación dentro de `Pan` no bastan para establecerla. | B contra afirmación; D mecanismo | AUDITADO | `EVID-HOMININ-SPLIT-X-001`, `EVID-HOMININ-SPLIT-PAN-GENE-FLOW-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-CHROMOSOME2-001` | La fusión que originó el cromosoma humano 2 es un cambio derivado de nuestra rama, no un reloj ni una causa de humanidad. | A estructura; A-SEM alcance | AUDITADO | `EVID-HOMININ-SPLIT-CHROMOSOME2-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-STRUCTURAL-VARIATION-001` | Genomas T2T catalogan en promedio ~`327 Mb` o `10 %` estructuralmente divergente por linaje; esa métrica no equivale a porcentaje de bases distintas. | B-COND | AUDITADO | `EVID-HOMININ-SPLIT-T2T-001` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-HOMININ-SPLIT-RECONSTRUCTION-LIMIT-001` | Ningún simio vivo ni fósil aislado reproduce al ancestro común; su anatomía debe reconstruirse carácter por carácter. | A-SEM; C anatomía | AUDITADO | síntesis comparada de `EVID-HOMININ-SPLIT-*` | `INV-HOMININ-SPLIT-001` |
| `CLAIM-EARLY-HOMININ-SCOPE-001` | “Primer hominino” puede significar fósil más antiguo, rama basal, primer bípedo o ancestro directo; son preguntas distintas. | A-SEM | AUDITADO | `EVID-EARLY-HOMININ-METHOD-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-DEFINITION-001` | Hominino designa pertenencia al lado humano tras el split Homo–Pan y se infiere aquí con caracteres polarizados, no con parecido general. | A-SEM; C-COND asignación | AUDITADO | `EVID-EARLY-HOMININ-METHOD-001`, `EVID-ARDI-PHYLOGENY-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-MOSAIC-001` | Caninos, cráneo, pelvis, fémur, mano y pie evolucionan modularmente; su combinación no es un “intermedio” lineal. | A-SEM; B fósiles | AUDITADO | `EVID-SAHEL-POSTCRANIAL-001`, `EVID-ORRORIN-MOSAIC-001`, `EVID-ARDI-CLIMBING-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-ASSOCIATION-001` | Articulación, misma superficie, misma localidad e hipodigma ofrecen fuerzas distintas de asociación y deben preceder a la inferencia funcional. | A-MET | AUDITADO | `EVID-SAHEL-ASSOCIATION-001`, `EVID-ORRORIN-HYPODIGM-001`, `EVID-ARDI-SKELETON-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-AGE-CONTEXT-001` | Los relojes fechan minerales, sedimentos o polaridad; asignar la edad al fósil exige horizonte, correlación y control de retrabajo. | A-MET; B-COND | AUDITADO | `EVID-EARLY-HOMININ-AGE-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-BIPEDALISM-001` | Forma articular, corteza e inserciones restringen cargas habituales mediante comparación y biomecánica, no observan una zancada pasada. | A-SEM; B-COND | AUDITADO | `EVID-SAHEL-POSTCRANIAL-001`, `EVID-ORRORIN-FEMUR-001`, `EVID-ARDI-PELVIS-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-BIPED-NOT-TAXON-001` | Alguna bipedalidad no demuestra por sí sola Hominini si el rasgo fue ancestral, facultativo o convergente. | A-SEM; C historia | AUDITADO | `EVID-EARLY-HOMININ-METHOD-001`, `EVID-SAHEL-2026-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-AGE-001` | TM 266 se sitúa prudentemente cerca de `7 Ma`; biochronología y enterramiento cosmogénico no proporcionan un día ni igual precisión a todos los restos. | B-COND | AUDITADO | `EVID-EARLY-HOMININ-AGE-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-CRANIUM-001` | El cráneo deformado de Toumaï combina rasgos propuestos homininos; su base reconstruida es compatible con postura erguida, no una marcha observada. | B anatomía; C-COND función | AUDITADO | `EVID-SAHEL-CRANIAL-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-ASSOCIATION-001` | El fémur y dos ulnae de TM 266 comparten localidad con el cráneo, pero no estaban articulados ni pertenecen al mismo individuo demostrado. | A procedencia; C taxón | AUDITADO | `EVID-SAHEL-ASSOCIATION-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-BIPED-2026-001` | La reevaluación de 2026 identifica proporciones y rasgos femorales compatibles con bipedalismo temprano pese a tamaño y forma general próximos a `Pan`. | B-COND | AUDITADO | `EVID-SAHEL-2026-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-ARBOREAL-001` | Las ulnae y el mosaico postcraneal apoyan actividad arbórea sustancial junto con alguna bipedestación; su frecuencia relativa no está observada. | B-COND | AUDITADO | `EVID-SAHEL-POSTCRANIAL-001`, `EVID-SAHEL-2026-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-HABITAT-001` | Sedimentos, fauna y fitolitos de Toros-Menalla apoyan un mosaico lacustre con cobertura leñosa variable, no sabana uniforme ni causalidad locomotora. | B-LOCAL | AUDITADO | `EVID-SAHEL-HABITAT-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-SAHELANTHROPUS-STATUS-001` | La condición hominina de `Sahelanthropus` es un caso acumulativo plausible y discutido; ni edad ni bipedalidad identifican ancestro directo. | C-COND | AUDITADO | `EVID-SAHEL-CRANIAL-001`, `EVID-SAHEL-2026-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ORRORIN-AGE-001` | `Orrorin` se resume cerca de `6 Ma`; `5.88–5.72 Ma` corresponde al Lukeino superior de Kapcheberek y no a toda ocurrencia. | B-COND | AUDITADO | `EVID-ORRORIN-AGE-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ORRORIN-HYPODIGM-001` | El holotipo mandibular y los fémures de `Orrorin` pertenecen a un hipodigma de varios individuos/localidades, no a un esqueleto. | A-B | AUDITADO | `EVID-ORRORIN-HYPODIGM-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ORRORIN-FEMUR-001` | Geometría y distribución cortical de fémures atribuidos a `Orrorin` apoyan carga bípeda habitual mejor que afinidad directa con `Homo`. | B-COND | AUDITADO | `EVID-ORRORIN-FEMUR-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ORRORIN-MOSAIC-001` | El fémur de `Orrorin` comparte aspectos con simios miocenos y homininos posteriores; muestra y alometría condicionan su posición funcional. | B-COND | AUDITADO | `EVID-ORRORIN-MOSAIC-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-KADABBA-001` | `Ar. kadabba` (`~5.8–5.2 Ma`) se distingue por un C/P3 más primitivo; la escasez postcraneal limita su locomoción. | B taxón/edad; C función | AUDITADO | `EVID-ARDI-KADABBA-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-RAMIDUS-AGE-001` | Toba, estratigrafía y geoquímica sitúan Aramis cerca de `4.4 Ma`; es edad del depósito, no cumpleaños del individuo. | B | AUDITADO | `EVID-ARDI-AGE-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-SKELETON-001` | ARA-VP-6/500 asocia muchas regiones de un individuo, pero aplastamiento y fragmentación hacen modeladas varias formas reconstruidas. | A asociación; C forma | AUDITADO | `EVID-ARDI-SKELETON-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-BIPED-001` | La pelvis reconstruida, pie y base craneal apoyan bipedalismo terrestre temprano sin equivaler a eficacia humana moderna. | B-COND | AUDITADO | `EVID-ARDI-PELVIS-001`, `EVID-ARDI-FOOT-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-FOOT-001` | El pie de Ardi combinó hallux divergente/prensil con rigidez y propulsión lateral; no tiene un análogo vivo exacto. | B-COND | AUDITADO | `EVID-ARDI-FOOT-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-CLIMBING-001` | Mano, pie y talus apoyan prensión, suspensión o trepa vertical junto con impulso bípedo; el peso de cada conducta permanece abierto. | B-COND | AUDITADO | `EVID-ARDI-CLIMBING-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-DENTITION-001` | Dentición y caninos de `Ar. ramidus` restringen dieta y dimorfismo, pero no demuestran monogamia, provisión ni estructura familiar. | B anatomía; D conducta | AUDITADO | `EVID-ARDI-DENTITION-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-PALEOENVIRONMENT-001` | Aramis fue un ambiente arbolado/abierto en mosaico; proxies discrepan sobre cobertura y escala, no sostienen una dicotomía causal simple. | B-LOCAL | AUDITADO | `EVID-ARDI-HABITAT-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-ARDIPITHECUS-PHYLOGENY-001` | Una matriz ampliada de ~`26 %` a ~`78 %` de caracteres recupera `Ar. ramidus` como hominino basal, condicionado a codificación y modelo. | B-COND | AUDITADO | `EVID-ARDI-PHYLOGENY-001` | `INV-HOMININ-EARLY-001` |
| `CLAIM-EARLY-HOMININ-ANCESTRY-LIMIT-001` | Ningún candidato es ancestro directo demostrado ni la secuencia temporal prueba una cadena lineal entre géneros. | A-SEM; D genealogía | AUDITADO | `EVID-EARLY-HOMININ-ANCESTRY-LIMIT-001` | `INV-HOMININ-EARLY-001` |

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

- **Formulación cuidadosa:** Dominios magmáticos filtrados conservan `δ18O` fuera del campo del manto; la explicación mejor apoyada requiere protolitos alterados por agua a baja temperatura antes de cristalizar zircon hacia `4.3–4.2 Ga`.
- **Orden temporal:** agua–roca → reciclaje/fusión → magma → zircon; U–Pb fecha el último paso mineral, no el primero.
- **No afirma:** que se haya observado un océano; su volumen, continuidad, composición o temperatura; que todo zircon hadeano registre agua.
- **Alternativas/tensiones:** alteración posterior, microdominios mezclados, fuentes distintas o fraccionamientos revisados.
- **Confianza C:** la señal supera controles microestructurales, pero superficie y escala se reconstruyen mediante petrología.

### CLAIM-HADEAN-HYDROSPHERE-001 / HYDROCYCLE-001

- **Convergencia:** señales pesadas registran material supracrustal alterado; señales ligeras a `~4.0 Ga` requieren agua meteórica bajo modelos publicados; Acasta y NGB aportan contexto rocoso.
- **Independencia parcial:** los objetos y localidades difieren, pero comparten estándares de oxígeno y análogos de fraccionamiento agua–roca.
- **Límite:** hidrosfera local/regional no equivale a océano global; precipitación en un episodio no demuestra continuidad desde `4.3 Ga`.
- **Confianza:** C para interacción superficial y ciclo a `~4.0 Ga`; D–E para volumen, clima y estabilidad global.

### CLAIM-HADEAN-NGB-WATER-001 / COOL-001

- **NGB:** O triple + H favorecen alteración hidrotermal por agua semejante isotópicamente a marina; metamorfismo y edad `4.3–3.8 Ga` condicionan el claim.
- **Semántica:** *cool early Earth* niega una superficie continuamente fundida; no convierte `δ18O` en termómetro climático.
- **Modelo:** desgasificación y retirada rápida de CO₂ son físicamente viables en familias de manto húmedo, no una cronología observada.

### CLAIM-HADEAN-NGB-001 / 002

- **Actualización clave:** el artículo de Sole et al. (2025) aporta concordancia entre sistemas Sm–Nd de vidas muy distintas en intrusiones relacionadas petrológicamente.
- **Distinción:** fechar una intrusión da una edad directa del evento de cristalización interpretado; la edad de la roca encajante es un límite mínimo por relación de corte.
- **Pendiente:** replicación independiente, auditoría completa del suplemento y reconciliación con edades U–Pb más jóvenes y críticas estratigráficas previas.

### CLAIM-HADEAN-ZIRCON-SOURCE-001 / CRUST-REWORK-001

- **Dato:** edad U–Pb co-localizada con Hf, O, inclusiones y razones de elementos traza en poblaciones seleccionadas.
- **Puente:** Hf restringe residencia/retrabajo; partición zircon–fundido aproxima composición del magma; inclusiones y Ti restringen condiciones.
- **No afirma:** área continental, elevación, estabilidad o placas globales modernas.
- **Sesgo crítico:** zircon y sedimentos detríticos sobrerrepresentan minerales resistentes y magmas capaces de saturarlos.

### CLAIM-HADEAN-ACASTA-SOURCE-001

- **Resultado acotado:** la química de Idiwhaa se reproduce mediante fusión somera de material máfico hidratado bajo modelos publicados.
- **Alternativas:** calor de pluma, enterramiento, goteo/delaminación o impacto; una afinidad islandesa no prueba un análogo tectónico completo.
- **Confianza:** C para familia de fuente; D para identificar un impacto histórico.

### CLAIM-EARTH-CORE-EXIST-001

- **Formulación:** la Tierra posee una región central separada del manto por una discontinuidad global de radio aproximado `3480 km`.
- **Datos:** ramas `PKP`, reflejos `PcP/ScS`, sombras, modos normales y geodesia.
- **No afirma:** que la frontera sea una esfera lisa, que una sola llegada determine el radio ni que la sismología identifique elementos.
- **Confianza:** A; una alternativa debe reproducir simultáneamente tiempos, conversiones, modos, masa y momento.

### CLAIM-EARTH-CORE-LIQUID-001

- **Formulación:** el núcleo externo se comporta como fluido en escalas sísmicas: su módulo de corte efectivo y `Vs` son aproximadamente cero, mientras transmite compresión.
- **Corrección semántica:** energía S puede convertirse a K y volver a S (`SKS`); no existe propagación de corte ordinaria dentro del líquido.
- **Falsador:** una rama de corte global, repetible y compatible con módulo finito en la envoltura central.
- **Confianza:** A.

### CLAIM-EARTH-CORE-INNER-001

- **Formulación:** existe un núcleo interno sólido, de radio aproximado `1221.5 km`, con velocidad/rigidez distintas y anisotropía global.
- **Datos:** `PKIKP/PKPdf`, `PKiKP`, modos y residuales dependientes de dirección.
- **Límite:** hemisferios, textura, rotación y salto de densidad no tienen la misma confianza que existencia/estado.
- **Confianza:** A para existencia y solidez; B-C para estructura fina.

### CLAIM-EARTH-CORE-MASS-001

- **Formulación:** la masa terrestre está mucho más concentrada hacia el centro que en una esfera uniforme; PREM usa `I/(MR²)=0.3308` frente a `0.4` uniforme.
- **Puente:** masa, radio, momento y perfiles sísmicos restringen conjuntamente `ρ(r)`.
- **No afirma:** que el momento de inercia, aislado, identifique una frontera o una composición única.
- **Confianza:** A para concentración; B-COND para un perfil de densidad particular.

### CLAIM-EARTH-CORE-COMPOSITION-001

- **Formulación:** el núcleo es una aleación dominada por Fe, con Ni mayor secundario (~5 %) y uno o varios elementos ligeros.
- **Convergencia:** balance cosmoquímico, depleciones siderófilas, densidad/velocidades y aleaciones a alta P–T.
- **Abierto:** fracciones de O, Si, S, C e H, temperatura, fases y distribución radial.
- **Confianza:** B-COND para familia Fe–Ni+ligeros; D para receta porcentual exacta.

### CLAIM-EARTH-CORE-TIMING-001

- **Formulación:** la segregación metal–silicato principal acompañó la acreción temprana en múltiples episodios, no un hundimiento único instantáneo.
- **Reloj:** Hf–W registra separación integrada mientras `182Hf` estaba vivo.
- **Dependencias:** `M(t)`, composición, P–T–`fO₂`, fracción de metal y silicato equilibrados, mezcla posterior.
- **Distinción:** no fecha la nucleación posterior del núcleo interno.
- **Confianza:** B-COND para multietapa temprana; C para una edad única.

### CLAIM-EARTH-CORE-DYNAMO-001

- **Formulación:** el campo geomagnético es compatible con una dínamo en una envoltura central conductora, rotante y convectiva.
- **Corroboración:** MHD reproduce campos autosostenidos y reversiones bajo parámetros accesibles.
- **No afirma:** receta química, fuente de flotabilidad única, edad exacta del núcleo interno ni réplica histórica.
- **Confianza:** A para dínamo central activa moderna; C-D para mecanismo/energía en cada época.

### CLAIM-HADEAN-MAGMA-REDOX-001 / ATMOSPHERE-COMPOSITION-001

- **Dato:** Ce o estado de U en dominios ígneos de zircon, edad U–Pb, textura y temperatura/calibración.
- **Puente 1:** el oxibarómetro estima `fO₂` del fundido parental.
- **Puente 2:** inventario, P–T, solubilidad y equilibrio traducen `fO₂` a especies desgasificadas.
- **No afirma:** presión parcial, retención, composición del aire ni abundancia de O₂ libre.
- **Confianza:** B-COND para redox de algunos magmas; E para una mezcla histórica exacta.

### CLAIM-HADEAN-ATMOSPHERE-O2-001

- **Distinción:** `fO₂` en un fundido no es porcentaje de O₂ atmosférico.
- **Límite más cercano:** S-MIF en sulfuros pre-3770 Ma favorece anoxia en el Eoarcaico.
- **No afirma:** que el umbral o la composición se mantuvieran constantes durante todo el Hadeano.
- **Confianza:** B-COND para la época del sulfuro; C-D al retroceder.

### CLAIM-HADEAN-ATMOSPHERE-ESCAPE-001 / DYNAMIC-001

- **Dato:** Xe atmosférico arqueano diferente del moderno y gases nobles radiogénicos.
- **Mecanismos:** desgasificación, escape, impacto, condensación y secuestro superficial.
- **Límite:** una huella de evolución no recupera por sí sola la secuencia completa ni su inventario inicial.
- **Confianza:** B-COND para evolución de Xe; C para atmósferas sucesivas; D para pesos.

### CLAIM-ARCHEAN-ATMOSPHERE-PRESSURE-001

- **Dato:** N/Ar en inclusiones hidrotermales y gradientes de tamaño de vesículas.
- **Condiciones:** equilibrio fluido–aire, solubilidades, presión de emplazamiento, elevación y preservación.
- **No afirma:** presión hadeana ni una continuidad de cientos de millones de años.
- **Confianza:** B-COND para la cota en cada época; E para copiarla al Hadeano.

### CLAIM-HADEAN-BOMBARDMENT-001 / LHB-001

- **Dato:** cuencas, cráteres, fundidos y esférulas exigen una tasa temprana elevada; las edades recuperadas se concentran parcialmente cerca de Imbrium.
- **Puente:** convertir esos archivos en flujo requiere procedencia, supervivencia, respuesta isotópica y función de producción.
- **Límite:** una época intensa no demuestra una única subida global estrecha.
- **Confianza:** B-COND para intensidad/declive general; D para el pico terminal único.

### CLAIM-LUNAR-BASINS-EARLY-001 / IMBRIUM-BIAS-001

- **Dato:** 67955 registra un fundido de escala de cuenca a `4.22 ± 0.01 Ga`; candidatos SPA registran `4.25` o `4.32–4.33 Ga`; Apollo muestreó ejecta de Imbrium.
- **Condiciones:** minerales deben pertenecer al fundido, y composición/cartografía deben identificar su cuenca.
- **No afirma:** que cada edad antigua sea SPA ni que toda brecha `~3.9 Ga` sea Imbrium.
- **Confianza:** B-COND para cuencas anteriores a 4.0 Ga y sesgo de procedencia; edad de SPA B-PROV/C según ruta.

### CLAIM-HADEAN-IMPACT-EARTH-001 / SURVIVAL-001

- **Dato:** escala gravitacional Tierra–Luna, esférulas arqueanas y supervivencia de archivos minerales/acuosos.
- **Puente:** población de proyectiles, velocidad, atmósfera, océano, corteza y refugios.
- **No afirma:** una curva de esterilización ni océanos globalmente vaporizados en cada evento.
- **Confianza:** B-COND para más encuentros integrados; C para supervivencia heterogénea; D-E para efectos históricos exactos.

### CLAIM-LIFE-BY3430-001 / STRELLEY-001 / DRESSER-001

- **Dato:** Strelley conserva un arrecife de `~3.43 Ga` con morfotipos ligados a facies y microestructuras con paredes, lúmenes, C/N, tafonomía y organización; Dresser añade MISS, S y un sistema de fuentes termales a `~3.48 Ga`.
- **Convergencia:** población macroscópica, microestructura, química y ambiente restringen alternativas distintas.
- **Límite:** rutas metabólicas y taxonomía no se leen directamente; hidrotermalismo puede producir fraccionamientos y formas parciales.
- **Confianza:** B-COND para vida por `≥3.43 Ga`; C↑ para Dresser `~3.48 Ga`.

### CLAIM-LIFE-ISUA-CARBON-001 / ISUA-STROM-001

- **Dato:** grafito de Isua sigue horizontes detritales y aparece dentro de minerales; su población isotópica sedimentaria es más estrecha que la de vetas. Las estructuras cónicas pierden laminación/acreción coherente al verse en 3-D.
- **Separación:** que los conos sean deformacionales no hace abiótico al carbono; son líneas distintas.
- **Límite:** `δ13C` se solapa con grafito de fluidos y el metamorfismo altera C/S; respiraciones específicas son inferencias.
- **Confianza:** C↑ para detrito biogénico; B para reevaluación deformacional; D para cono biológico.

### CLAIM-LIFE-PRE3700-001

- **Dato:** Nuvvuagittuq contiene roca local hadeana y tubos Fe; Saglek/Akilia contienen grafito ligero; un zircon de `4.10 Ga` encierra grafito `δ13C = −24 ± 5 ‰`.
- **Puente faltante:** fechar el horizonte portador, demostrar encierro temprano y excluir jardines químicos, fluidos C–H–O, deformación y fraccionamiento abiótico.
- **No afirma:** que la vida no existiera; afirma que las candidatas disponibles no la establecen.
- **Confianza:** D-E según caso; E para usar el zircon aislado como prueba de biosfera.

### CLAIM-LIFE-ORIGIN-AGE-001 / MULTILINE-001

- **Regla:** una huella sólo impone `origen ≤ edad de la huella` en tiempo transcurrido desde formación terrestre; no mide el intervalo previo perdido.
- **Pruebas separadas:** indigeneidad, singenicidad y biogenicidad.
- **Independencia:** varios aparatos sobre un mismo grano no equivalen a varios archivos; facies, población, tafonomía y química a escalas distintas añaden más poder.
- **Confianza:** A para la relación lógica de mínimo; B para el estándar operativo de paquete multiseñal.

### CLAIM-PHOTO-BY3416-001 / PHOTO-ANOXY-001

- **Dato:** tapetes carbonosos de Buck Reef se distribuyen por facies iluminadas a `3.416 Ga`; siderita y falta de oxidación general favorecen agua anóxica.
- **Puente:** organización en zona fótica → fototrofía; estado redox + donadores reducidos → metabolismo anoxigénico probable.
- **Límite:** no identifica taxón, centro de reacción ni donador exacto; `H₂` es una hipótesis más específica.
- **Confianza:** `C↑` para fototrofía; `C` para anoxigénica; `C-D` para `H₂`.

### CLAIM-OXYGENIC-BY2870-001 / PONGOLA-001

- **Dato:** tres plataformas `2.87–2.78 Ga` conservan Ce negativo fechado por La–Ce como singenético; Pongola `≥2.95 Ga` conserva Mo/Fe compatible con un ciclo de Mn oxidado.
- **Escala:** ambos archivos registran aguas locales o regionales, no una atmósfera global oxigenada.
- **Límite:** el oxidante y productor no se observan como célula; Pongola conserva mayor sensibilidad a alteración/modelo.
- **Confianza:** `B-COND` para producción local por `2.87 Ga`; `C↑` para `≥2.95 Ga`.

### CLAIM-OXYGENIC-ORIGIN-001

- **Dato:** proxies imponen mínimos; relojes D1/D2, fósiles y HGT favorecen raíces arcaicas, compatibles con `~3.4–2.9 Ga`.
- **Regla:** fecha del proxy `≥` fecha de la innovación en antigüedad; no son iguales salvo evidencia directa del evento.
- **Límite:** duplicación proteica, aparato funcional y grupo corona cianobacteriano son nodos diferentes.
- **Confianza:** `C-D` para la ventana molecular; `D-E` para fecha/linaje exactos.

### CLAIM-PHOTO-O2-ACCUM-001

- **Distinción:** oxidar agua produce `O₂`; acumularlo exige que fuentes netas y enterramiento superen sumideros de Fe, S, gases y materia orgánica.
- **Consecuencia:** un oasis puede coexistir con aire reducido; el GOE no fecha el origen del metabolismo.
- **Confianza:** A para la distinción de balance; B-COND para su aplicación general a la historia terrestre; mecanismos/pesos exactos abiertos.

### CLAIM-PHOTO-BIOMARKER-001

- **Dato:** hopanos/esteranos arcaicos clásicos no se reproducen por encima de blancos en interiores ultralimpios y muestran entrada posterior al metamorfismo.
- **Límite:** retirar esos compuestos como reloj no demuestra ausencia de cianobacterias; una especificidad taxonómica mejorada no repara singenicidad.
- **Confianza:** B para invalidar ese archivo como datación arcaica; D-E para usarlo como origen oxigénico.

### CLAIM-PHOTO-DIRECT-FOSSIL-001

- **Dato:** *Navifusa majensis* de `1.78–1.73 Ga` conserva membranas tilacoidales intracelulares por TEM.
- **Puente:** la arquitectura identifica de forma directa fotótrofos oxigénicos con tilacoides.
- **Límite:** primera preservación directa conocida no es primera aparición histórica.
- **Confianza:** B para la identificación/mínimo del clado; E para usar `~1.75 Ga` como origen de fotosíntesis oxigénica.

### CLAIM-GOE-ATMOSPHERE-001 / GOE-PROTRACTED-001

- **Formulación:** el `O₂` atmosférico cruzó uno o más umbrales de persistencia durante una transición paleoproterozoica principal que se acota operacionalmente en `~2.45–2.32 Ga`.
- **Convergencia:** pérdida/reaparición de `S‑MIF`, edades U–Pb/Re–Os, minerales detríticos y proxies marinos.
- **Tempo:** un cruce puede durar `1–10 Ma` en una sección y el sistema completo registrar pulsos/memoria durante >100 Ma.
- **No afirma:** una frontera sincrónica, una curva monotónica ni `O₂` moderno.
- **Confianza:** `B-COND` para acumulación/transición; `D-E` para instante global único.

### CLAIM-GOE-SMIF-001

- **Dato:** grandes `Δ³³S/Δ³⁶S` se producen/preservan bajo una atmósfera funcionalmente anóxica y desaparecen de forma sostenida en el Paleoproterozoico.
- **Puente:** `O₂/O₃` modifican la fotoquímica y el ciclo superficial de S por encima de un umbral modelado, aproximadamente `10⁻⁷–10⁻⁵ PAL` según escenario.
- **Límite:** ausencia de `S‑MIF` no es un oxímetro; presencia tardía puede ser aire contemporáneo o sulfuro arcaico reciclado.
- **Confianza:** B para el vínculo de régimen; C-D para un umbral numérico único.

### CLAIM-GOE-WEATHERING-001

- **Dato:** desaparición general de minerales redox sensibles, paleosuelos/capas rojas y cambios de Mo/S indican meteorización más oxidativa; pirita detrítica huroniana muestra que el proceso seguía incompleto en intervalos.
- **Escala:** un frente de meteorización integra litología, exposición, transporte y cinética, no sólo `pO₂`.
- **Cota:** el caso Espanola/Serpent es compatible con `<5 × 10⁻⁴ PAL`, condicionada al modelo y al catchment.
- **Confianza:** B-COND para aumento de oxidación continental; C-D para la cota transferida globalmente.

### CLAIM-GOE-OCEAN-001

- **Dato:** V/Tl en lutitas `2.32–2.26 Ga` registra expansión de sumideros oxidados y fondos someros con `≥10 μM O₂` después de la pérdida grande de `S‑MIF` en Transvaal.
- **Geometría:** plataformas oxigenadas podían coexistir con un interior oceánico funcionalmente anóxico.
- **No afirma:** que todo el océano se equilibrara con el aire ni que `≥4 × 10⁻² PAL` sea una medición directa.
- **Confianza:** B-COND para oxigenación somera persistente y anoxia profunda extensa; C-D para cota atmosférica derivada.

### CLAIM-GOE-LEVEL-001

- **Formulación:** la magnitud absoluta de `pO₂` durante la GOE no está cerrada; cotas de S, O, meteorización y V responden a umbrales, reservorios y edades distintos.
- **Regla:** no ordenar valores heterogéneos como si fueran una serie temporal de un mismo instrumento.
- **Confianza:** B para cambio relativo de régimen; D para una trayectoria cuantitativa global.

### CLAIM-GOE-GLACIATION-001 / GOE-CAUSE-001

- **Dato:** glaciaciones, magmatismo y proxies de oxígeno se superponen temporalmente; modelos permiten que clima mueva el umbral y que `O₂` destruya `CH₄`.
- **Alternativas:** aumento de producción, enterramiento, reducción de sumideros, nutrientes, gases volcánicos, escape de H y retroalimentaciones climáticas.
- **No afirma:** dirección causal única ni disparador identificado.
- **Confianza:** C para acoplamiento temporal/mecanismos viables; D-E para pesos y causa histórica única.

### CLAIM-LUCA-COMMON-ANCESTRY-001 / DEFINITION-001

- **Dato:** código, ribosoma y proteínas conservadas forman un sistema homólogo coordinado; la selección formal de modelos favorece una genealogía común.
- **Definición:** LUCA es el nodo/población ancestral más reciente de la vida celular conocida, no el primer replicador.
- **No afirma:** un solo origen químico, ausencia de linajes extinguidos ni una única célula histórica.
- **Confianza:** `A-COND` para ascendencia común; `A-SEM` para el límite conceptual.

### CLAIM-LUCA-ROOT-001

- **Dato:** pares de genes duplicados antes de LUCA enraízan recíprocamente sus árboles y sitúan Bacteria frente a Archaea/Eukaryota.
- **Actualización:** Eukaryota no se trata como tercer tronco celular primario; su historia es arqueana y endosimbiótica.
- **Límite:** HGT, parálogos ocultos, ramas largas y modelos de sustitución pueden mover raíces individuales.
- **Confianza:** `B-COND`.

### CLAIM-LUCA-TRANSLATION-001

- **Convergencia:** `rRNA`, proteínas ribosomales, `tRNA`, sintetasas y factores de traducción comparten arquitectura y función profunda.
- **Consecuencia:** el código ya tenía una historia anterior a la divergencia de dominios.
- **Límite:** no todas las subunidades ni sus secuencias exactas pueden reconstruirse.
- **Confianza:** `A-B`.

### CLAIM-LUCA-CELL-001 / ENERGY-001

- **Dato:** ATP sintasas y componentes de membrana/transporte poseen duplicaciones y homologías profundas.
- **Puente:** conservar un gradiente exige una frontera funcional; no especifica estereoquímica ni enlaces lipídicos.
- **Alternativas:** membrana bacteriana, arqueana, mixta o fijada gradualmente.
- **Confianza:** `B-COND` para delimitación/quimiosmosis; `D` para composición.

### CLAIM-LUCA-DNA-001

- **Dato:** metabolismo de desoxirribonucleótidos, transcripción DNA‑dependiente, reparación y componentes accesorios son profundos; polimerasas, primasas y helicasas principales difieren.
- **Alternativas:** replicasa ancestral reemplazada, sistema híbrido RNA/DNA o replicasa perdida.
- **No afirma:** que PolD esté identificada como la enzima histórica.
- **Confianza:** `B-COND` para DNA; `C-D` para PolD; `D` para aparato completo.

### CLAIM-LUCA-METABOLISM-001

- **Dato:** filtros de monofilia y reconciliación con HGT favorecen anaerobiosis, ferredoxina, ATP sintasa y partes de Wood–Ljungdahl.
- **Puente:** familia presente no garantiza función, dirección de flujo ni hábitat.
- **No afirma:** un termófilo acetógeno obligado viviendo en una chimenea concreta.
- **Confianza:** `C-COND` para núcleo metabólico; `C-D` para retrato.

### CLAIM-LUCA-GENOME-001

- **Método:** probabilidades de familias KEGG se integran y se traducen a tamaño/número de proteínas mediante regresión de genomas modernos.
- **Resultado:** `2.75 Mb` y `2,657` proteínas como estimaciones centrales.
- **Límite:** no recupera bases, cromosomas, orden génico ni cada familia; hereda árbol, anotación y entrenamiento moderno.
- **Confianza:** `C-COND`.

### CLAIM-LUCA-AGE-001

- **Dato/modelo:** cinco pares de parálogos pre‑LUCA, `13` calibraciones y *cross‑bracing* producen intervalos cerca de `4.09–4.33 Ga`.
- **Límite:** calibraciones, máximo temporal, priors y tasas comparten dependencia; sensibilidad interna no equivale a datación directa.
- **Confianza:** `C-D`.

### CLAIM-LUCA-ECOSYSTEM-001

- **Semántica:** un nodo microbiano representa poblaciones; distintos genes no tienen por qué atravesar un único individuo.
- **Modelo:** flujos de acetato, materia orgánica y `H₂` permiten una comunidad temprana ya establecida.
- **Límite:** el modelo muestra coherencia, no identifica taxones contemporáneos.
- **Confianza:** `B-SEM` para población; `C` para ecosistema modelado.

## Investigación 017 — Eucariogénesis

### CLAIM-EUK-TWO-DOMAIN-001

- **Dato:** árboles de proteínas de traducción, transcripción y replicación agrupan la herencia nuclear eucariota con Archaea; la mitocondria aporta una rama bacteriana superpuesta.
- **Puente:** la congruencia entre marcadores resistentes a HGT aproxima la genealogía del huésped.
- **No afirma:** que cada gen eucariota sea arqueano ni que tres dominios sean inútiles como clasificación.
- **Confianza:** `A-COND` para ascendencia arqueana; la raíz y los marcadores condicionan el modelo.

### CLAIM-EUK-ASGARD-HOST-001

- **Dato:** filogenómica de marcadores conservados coloca Eukaryota dentro o como hermana de Asgard; Asgard reúne los parientes arqueanos conocidos más próximos.
- **Límite:** Heimdallarchaeia, Hodarchaeales o una rama Asgard más profunda cambian con taxones, MAG quiméricos, composición y modelos.
- **No afirma:** que una Asgard moderna sea ancestro directo.
- **Confianza:** `A-B` para afinidad amplia; `C-D` para la rama exacta.

### CLAIM-EUK-ASGARD-ESP-001

- **Dato:** metagenomas, proteínas purificadas, cultivos y criotomografía documentan actina/profilina, ESCRT, ubiquitina, remodelado de membranas, protrusiones y Lokiactina.
- **Puente:** homología estructural y función conservada permiten colocar componentes antes de LECA.
- **No afirma:** núcleo, endocitosis, fagocitosis o célula eucariota completa en Asgard.
- **Confianza:** `B` para raíces arqueanas de piezas; `C-D` para capacidad celular ancestral.

### CLAIM-EUK-MITO-ENDOSYMBIOSIS-001

- **Dato:** genoma/ribosoma mitocondriales, filogenias, doble membrana, cardiolipina, transferencia nuclear e importación forman un paquete de ascendencia bacteriana.
- **Puente:** la integración hereditaria y reducción explican la distribución y dependencia organelar.
- **No afirma:** una fagocitosis específica ni una especie donante actual.
- **Confianza:** `A-COND` para endosimbiosis bacteriana; `B-COND` para afinidad Alpha; `C-D` para posición fina.

### CLAIM-EUK-MITO-LECA-001

- **Dato:** los grandes linajes poseen mitocondria o derivados; supuestos Archezoa contienen MRO, y *Monocercomonoides* perdió el orgánulo secundariamente tras sustituir ISC por SUF.
- **Puente:** homología de importación/metabolismo y posición filogenética reconstruyen una presencia anterior a la radiación.
- **No afirma:** que cada eucariota actual conserve orgánulo ni genoma mitocondrial.
- **Confianza:** `A-B`.

### CLAIM-EUK-LECA-COMPLEX-001

- **Dato:** homólogos de núcleo/poros, endomembranas, tráfico, citoesqueleto, motores, mitosis, meiosis, spliceosoma, peroxisomas y mitocondria se distribuyen en ramas profundas.
- **Puente:** reconstrucción comparativa con pérdidas y árboles de familias.
- **No afirma:** que todas las piezas aparecieran juntas o que LECA fuera el primer eucariota.
- **Confianza:** `A-B` por sistema; detalle funcional `B-C`.

### CLAIM-EUK-GENE-MOSAIC-001

- **Dato:** árboles de miles de familias de LECA recuperan ascendencia Asgard, Alpha y otras bacterias, con posibles transferencias virales.
- **Puente:** árboles restringidos, bases amplias y dirección de HGT asignan orígenes probables.
- **Límite:** definiciones de LECA-OG, muestreo, HGT en socios, paralogía y linajes no muestreados cambian porcentajes.
- **Confianza:** `B` para mosaico; `C-D` para fracciones y donantes menores.

### CLAIM-EUK-SEQUENCE-001

- **Dato/modelo:** duplicaciones asociadas con citoesqueleto, tráfico, endomembranas, fagocitosis y núcleo fueron fechadas antes de la divergencia del tallo mitocondrial en Kay et al.
- **Puente:** una duplicación precede la especialización de sus parálogos y se fecha con reloj relajado/calibraciones.
- **Límite:** fecha máxima de función, asignación funcional moderna, topología, tasas y calibraciones.
- **Confianza:** `C-COND` para huésped complejizado antes de mitocondria; no consenso definitivo.

### CLAIM-EUK-AGE-001

- **Dato/modelo:** relojes de divergencias y duplicaciones sitúan eucariogénesis a lo largo de un intervalo arqueano–paleoproterozoico; fósiles aportan mínimos mucho más jóvenes.
- **No afirma:** una fecha única para FECA, endosimbiosis y LECA.
- **Límite:** nodos, funciones, calibraciones y tasas no son equivalentes entre estudios.
- **Confianza:** `C-D`.

### CLAIM-EUK-FOSSIL-MINIMUM-001

- **Dato:** microfósiles de `~1.75–1.4 Ga` combinan tamaños, paredes y complejidad compatibles con eucariotas; formas adicionales cerca de `1.63 Ga` apoyan diversidad/multicelularidad bajo afinidad condicionada.
- **Puente:** edad del estrato + singenicidad + rasgos que superan alternativas procarióticas.
- **No afirma:** edad de origen, FECA, LECA ni adquisición mitocondrial.
- **Confianza:** `B-C` según taxón y rasgo.

### CLAIM-EUK-OXYGEN-001

- **Dato:** fósiles eucariotas de `~1.75–1.4 Ga` aparecen casi exclusivamente en muestras de fondos oxigenados; genomas Asgard modernos conservan capacidades variables frente a O₂.
- **Puente:** distribución controlada por facies/redox favorece aerobiosis obligada, facultativa o microaerofilia en los fósiles muestreados.
- **No afirma:** que O₂ causara endosimbiosis ni un umbral global.
- **Confianza:** `C-COND` para ecología fósil; `D` para causalidad de origen.

### CLAIM-EUK-PLASTID-DISTINCT-001

- **Dato:** genomas, ribosomas y árboles colocan plastidios con Cyanobacteria dentro de un huésped eucariota ya mitocondriado.
- **Puente:** otra endosimbiosis primaria y transferencias posteriores explican el orgánulo fotosintético.
- **No afirma:** simultaneidad, mismo donante o mecanismo físico idéntico a mitocondria.
- **Confianza:** `A-B`.

## Investigación 018 — Origen y función evolutiva del sexo

### CLAIM-SEX-DEFINITION-001

- **Dato/definición:** reproducción, transferencia de DNA, recombinación, fusión celular, cambio de ploidía y meiosis son procesos separables; un ciclo sexual eucariota coordina varios de ellos.
- **Límite:** existen ciclos reducidos, facultativos y derivados; la definición operacional debe declarar qué módulos exige.
- **No afirma:** que todo intercambio genético sea sexo ni que todo sexo aumente inmediatamente el número de descendientes.
- **Confianza:** `A-SEM`.

### CLAIM-SEX-LECA-001

- **Dato:** genes especializados de rotura, recombinación homóloga, sinapsis, cohesión y segregación meiótica se distribuyen entre ramas eucariotas profundas.
- **Puente:** ortología, árboles de familias y pérdidas secundarias reconstruyen una maquinaria extensa antes de la radiación de los eucariotas actuales.
- **Límite:** la coordinación completa de fusión, cariogamia, ploidía y meiosis no está preservada como un ciclo observado en LECA.
- **Confianza:** `B` para meiosis extensa; `B-COND` para ciclo sexual completo.

### CLAIM-SEX-MEIOSIS-ORIGIN-001

- **Dato/modelo:** la meiosis reutiliza recombinación homóloga, cohesinas, reparación y segregación más antiguas, pero contiene especializaciones propias.
- **Puente:** homologías y duplicaciones permiten reconstruir cooptación y especialización de módulos preexistentes.
- **No afirma:** un orden único de innovaciones ni que recombinación bacteriana sea meiosis incompleta.
- **Confianza:** `B-C` para origen modular; `D` para secuencia histórica exacta.

### CLAIM-SEX-SPO11-001

- **Dato:** Spo11 forma las roturas programadas que inician recombinación meiótica en sistemas modernos y es homólogo de la subunidad A de topoisomerasa VI arqueana.
- **Puente:** catálisis, enlace covalente, estructura y filogenia apoyan cooptación desde una familia topoisomerasa ancestral.
- **No afirma:** cuándo ocurrió la cooptación ni que Spo11 por sí solo constituya meiosis.
- **Confianza:** `A` para función moderna y homología; `B-COND` para el escenario de origen.

### CLAIM-SEX-FUSION-001

- **Dato:** HAP2/GCS1 media fusión de gametos en linajes eucariotas distantes y pertenece a los fusógenos de clase II; Fsx1 muestra homología estructural y actividad fusogénica en arqueas/elementos móviles.
- **Puente:** estructura y función comparadas revelan una familia de fusión muy antigua.
- **Límite:** distribución, transferencias y elementos móviles no fijan la dirección ni el fusógeno del primer ciclo sexual.
- **Confianza:** `A-B` para fusión moderna; `C-D` para procedencia histórica.

### CLAIM-SEX-CRYPTIC-001

- **Dato:** *Giardia* y *Trichomonas* conservan repertorios meióticos; en *Giardia* se observaron fusión nuclear e intercambio de marcadores durante enquistamiento.
- **Puente:** función localizada, ploidía y transferencia genética permiten detectar procesos sexuales que no se ven como apareamiento convencional.
- **No afirma:** meiosis canónica completa en cada taxón ni frecuencia suficiente para dominar su evolución.
- **Confianza:** `B-COND`.

### CLAIM-SEX-ASEXUALITY-001

- **Dato:** linajes descritos como antiguos asexuales pueden conservar señales de intercambio; once genomas silvestres de *Adineta* rechazaron clonación estricta.
- **Puente:** haplotipos y desequilibrio de ligamiento prueban mezcla genética reciente bajo modelos poblacionales.
- **Límite:** sexo, parasexualidad y transferencia horizontal pueden producir firmas solapadas.
- **Confianza:** `B-COND` para intercambio; `C-D` para mecanismo.

### CLAIM-SEX-ADVANTAGE-001

- **Dato:** experimentos con nematodos, rotíferos y levaduras muestran que recombinación o cruzamiento pueden favorecer adaptación bajo carga mutacional, heterogeneidad, interferencia clonal o coevolución.
- **Puente:** tratamientos controlados comparan tasas de cambio y aptitud entre sistemas con distinto sexo.
- **Límite:** el signo y magnitud cambian con ambiente, ploidía, arquitectura genética y costo.
- **Confianza:** `A-B` dentro de cada experimento; `C` para generalización.

### CLAIM-SEX-ORIGIN-MAINTENANCE-001

- **Dato/modelo:** una ventaja que mantiene sexo en poblaciones modernas no identifica necesariamente la presión que ensambló el primer ciclo.
- **Puente:** origen, estabilización y mantenimiento son problemas históricos y poblacionales distintos.
- **No afirma:** que los experimentos modernos sean irrelevantes; delimitan mecanismos posibles y condiciones.
- **Confianza:** `A-LOG`.

### CLAIM-SEX-COST-001

- **Dato/modelo:** sexo puede romper combinaciones favorables, exigir pareja o fusión, reducir transmisión por progenitor y cambiar espectros mutacionales; sus costos dependen del ciclo.
- **Puente:** contabilidad genética y demográfica compara descendencia, recombinación y aptitud entre estrategias.
- **Límite:** el «doble costo de los machos» no se aplica sin más a isogamia, hermafroditismo o sexo facultativo.
- **Confianza:** `A-B` para costos definidos; `C` para predominio universal.

### CLAIM-SEX-ANISOGAMY-001

- **Dato:** mating types y fusión isógama existen sin macho/hembra; anisogamia y rasgos sexuales dimórficos aparecieron repetidamente en linajes derivados.
- **Puente:** filogenias, regiones determinantes y desarrollo comparado reconstruyen transiciones desde gametos similares a tamaños distintos.
- **No afirma:** una única invención ni una región sexual grande como requisito; *Eudorina* muestra anisogamia con región masculina compacta.
- **Confianza:** `B` para origen derivado/repetido; `C` para rutas causales generales.

### CLAIM-SEX-FOSSIL-001

- **Dato:** *Bangiomorpha pubescens* combina morfología bangial y una primera aparición datada en `1.047 +0.013/−0.017 Ga`.
- **Puente:** afinidad y patrón de desarrollo permiten interpretar reproducción sexual diferenciada y usar la edad de roca como mínimo condicionado.
- **No afirma:** observación de meiosis, fecha del origen del sexo ni edad de LECA.
- **Confianza:** `B-COND` para presencia sexual; `C` para anisogamia/oogamia.

## Investigación 019 — Orígenes de la multicelularidad

### CLAIM-MULTI-DEFINITION-001

- **Dato/definición:** asociación, grupo persistente, ciclo heredable, individuo colectivo y complejidad describen propiedades acumulables pero no equivalentes.
- **Puente:** herencia, variación y éxito diferencial del grupo operacionalizan una unidad evolutiva.
- **No afirma:** una frontera metafísica única ni que todo biofilm sea organismo.
- **Confianza:** `A-SEM`.

### CLAIM-MULTI-REPEATED-001

- **Dato:** filogenias separan soluciones multicelulares en bacterias, animales, plantas, algas rojas/pardas/verdes, hongos y agregados protistas.
- **Puente:** ancestros unicelulares/simples entre clados y programas no homólogos exigen ganancias independientes o pérdidas múltiples.
- **Límite:** el conteo cambia con definición, resolución del árbol y tratamiento de hongos, sincitios y formas simples.
- **Confianza:** `A-B` para multiplicidad; `C` para número exacto.

### CLAIM-MULTI-MODES-001

- **Dato:** grupos se forman por hijas que permanecen unidas, agregación de células libres o compartimentación de filamentos/sincitios.
- **Puente:** microscopía de desarrollo y ciclos distinguen geometría y procedencia celular.
- **No afirma:** que un modo determine por sí solo el destino evolutivo.
- **Confianza:** `A-B`.

### CLAIM-MULTI-CLONALITY-001

- **Dato:** desarrollo clonal inicia grupos con parentesco alto; complejidad alta conocida se asocia comparativamente con clonación.
- **Puente:** parentesco alinea beneficios indirectos y reduce mezcla de genotipos.
- **Límite:** mutación somática y conflicto persisten; agregación puede añadir reconocimiento y policing.
- **Confianza:** `B`; `C` para requisito universal.

### CLAIM-MULTI-COOPTION-001

- **Dato:** Volvox/Gonium, holozoos, algas pardas y hongos modifican familias de adhesión, señalización, matriz y regulación ya presentes.
- **Puente:** ortología, función y cambios de expresión sitúan piezas antes y reconfiguración durante la transición.
- **No afirma:** ausencia de genes nuevos ni un programa compartido por todos los linajes.
- **Confianza:** `B`.

### CLAIM-MULTI-ANIMAL-ROOTS-001

- **Dato:** coanoflagelados y *Capsaspora* poseen herramientas de adhesión/señalización y estados regulatorios anteriores a Metazoa.
- **Puente:** posición hermana y homología reconstruyen capacidades preanimales.
- **No afirma:** que rosetas modernas sean embriones ni ancestros directos.
- **Confianza:** `B`.

### CLAIM-MULTI-LIFE-CYCLE-001

- **Dato:** grupos con propágulos, variación heredable y éxito colectivo acumulan adaptaciones a nivel de grupo en experimentos.
- **Puente:** seguimiento de ciclos separa tasa celular de persistencia/reproducción colectiva.
- **Límite:** individualidad es gradual y el régimen experimental impone una ecología.
- **Confianza:** `B-COND`.

### CLAIM-MULTI-EXPERIMENT-001

- **Dato:** levadura, *Chlamydomonas* y *Pseudomonas* evolucionan grupos bajo sedimentación, depredación, cooperación o selección de ciclos.
- **Puente:** controles y repetición asignan causalidad dentro del tratamiento.
- **No afirma:** la presión que originó un clado natural concreto.
- **Confianza:** `A-B` local; `D` para biografía profunda.

### CLAIM-MULTI-DIFFERENTIATION-001

- **Dato:** heterocistos, soma/germen volvocino y estados holozoos conectan tareas incompatibles con regulación temporal/espacial.
- **Puente:** expresión, función y destino celular miden división de trabajo.
- **Límite:** muerte o estado distinto no equivale automáticamente a tipo celular heredable.
- **Confianza:** `B-COND`.

### CLAIM-MULTI-COMPLEXITY-001

- **Dato:** cuerpos grandes enfrentan difusión, desechos, mecánica y señalización; linajes complejos poseen intercambio y transporte que alivian esos límites.
- **Puente:** fisiología y anatomía conectan escala con canales/tejidos.
- **No afirma:** que tamaño produzca complejidad ni que complejidad sea progreso inevitable.
- **Confianza:** `A-SEM` para distinción; `B` para mecanismos.

### CLAIM-MULTI-OXYGEN-001

- **Dato:** oxígeno eleva rendimiento pero también genera gradientes; levaduras anaerobias experimentales alcanzaron macroscopia extrema.
- **Puente:** metabolismo y difusión determinan el signo del efecto según cuerpo y ambiente.
- **No afirma:** irrelevancia del oxígeno ni un disparador universal.
- **Confianza:** `B` para contexto; `E` para causa única universal.

### CLAIM-MULTI-FOSSIL-001

- **Dato:** Franceville (~2.1 Ga), *Qingshania* (~1.635 Ga), candidatos rojos (~1.6 Ga), *Bangiomorpha* (1.047 Ga) y *Proterocladus* (~1.0 Ga) conservan grados distintos de organización.
- **Puente:** edad + singenicidad + células/morfología + afinidad producen mínimos por taxón.
- **No afirma:** parentesco, aptitud colectiva ni fecha del primer origen.
- **Confianza:** `C-D` Franceville/afinidades discutidas; `B-COND` *Qingshania* y mínimos posteriores.

## Investigación 020 — Snowball Earth

### CLAIM-SNOWBALL-DEFINITION-001

- **Dato/definición:** facies, paleolatitud, sincronía, estado climático y cobertura oceánica responden preguntas de escalas distintas.
- **Puente:** una cadena explícita impide que «Snowball» herede automáticamente la formulación más extrema.
- **No afirma:** que la frontera entre hard, thin y waterbelt sea una etiqueta estratigráfica directa.
- **Confianza:** `A-SEM`.

### CLAIM-SNOWBALL-TWO-EPISODES-001

- **Dato:** unidades glaciales y carbonatos asociados se agrupan en intervalos Sturtiano y Marinoano en varios paleocontinentes.
- **Puente:** U–Pb/Re–Os y sucesión estratigráfica distinguen dos episodios separados por un intervalo no glacial.
- **Límite:** cada avance local no fue necesariamente simultáneo.
- **Confianza:** `A-B`.

### CLAIM-SNOWBALL-LOCAL-GLOBAL-001

- **Dato:** dropstones, estrías, till, deformación y facies marinas prueban procesos de hielo en cuencas concretas.
- **Puente:** repetición coetánea + paleolatitud tropical + física de albedo amplían la escala.
- **No afirma:** que una diamictita o cap individual observe cobertura global.
- **Confianza:** `B` local; `B-COND` casi global.

### CLAIM-SNOWBALL-PALEOLATITUDE-001

- **Dato:** componentes magnéticos de unidades criogénicas devuelven inclinaciones bajas; evaporitas apoyan campo axial-dipolar/oblicuidad baja.
- **Puente:** pruebas de pliegue/reversión y portador sostienen primariedad antes de convertir inclinación en latitud.
- **Límite:** remagnetización y compactación se evalúan por formación.
- **Confianza:** `B` por conjunto.

### CLAIM-SNOWBALL-OCEAN-COVER-001

- **Dato:** hielo continental alcanzó trópicos y modelos admiten estados estables de albedo alto.
- **Puente:** balances radiativos y dinámica de hielo extrapolan entre sitios.
- **No afirma:** hielo grueso, opaco y continuo sobre todo océano.
- **Confianza:** `B-COND` casi global; `D` hard continuo.

### CLAIM-SNOWBALL-DURATION-001

- **Dato:** edades internas y de terminación acotan Sturtiana `~717–659 Ma` y Marinoana `~639–635.2 Ma`.
- **Puente:** posición estratigráfica y correlación convierten edades de capas en límites de intervalo.
- **Límite:** hiatos y asincronía de avances no están dentro del error analítico.
- **Confianza:** `B-COND`.

### CLAIM-SNOWBALL-DYNAMICS-001

- **Dato:** ciclos sedimentarios, formaciones de hierro y varvas preservan variabilidad dentro de intervalos glaciales.
- **Puente:** modelos orbitales reproducen oscilaciones; un modelo de carbono 2026 permite ciclos nieve–invernadero Sturtianos.
- **No afirma:** que las capas registren 56 Myr continuos de alternancia global.
- **Confianza:** `B` para dinámica; `D-PROV` para ciclos Sturtianos.

### CLAIM-SNOWBALL-CAPS-001

- **Dato:** carbonatos distintivos cubren muchas unidades glaciales Sturtianas/Marinoanas.
- **Puente:** contacto, transgresión, isótopos y modelos conectan deshielo con mezcla y alcalinidad.
- **No afirma:** una sola agua parental, tasa o mecanismo en todos los caps.
- **Confianza:** `B` para reorganización; `D` para mecanismo único.

### CLAIM-SNOWBALL-INITIATION-001

- **Dato:** Franklin precede por ~`0.9–1.6 Myr` al inicio Sturtiano refinado; paleogeografía y basalto tropical alteran meteorización.
- **Puente:** modelos acoplan consumo de `CO₂` con realimentación hielo–albedo.
- **Límite:** coincidencia y capacidad no identifican causa histórica exclusiva; Marinoana difiere.
- **Confianza:** `B` física; `C-D` disparador.

### CLAIM-SNOWBALL-DEGLACIATION-001

- **Dato:** volcanismo suministra `CO₂`; caps/proxies registran cambio posglacial, pero estimaciones y umbrales divergen.
- **Puente:** balances de carbono y clima conectan gas, forzamiento y caída de albedo.
- **Límite:** nubes, polvo, presión, meteorización y geometría cambian el umbral.
- **Confianza:** `B-COND` participación; `D` valor/ruta exacta.

### CLAIM-SNOWBALL-REFUGIA-001

- **Dato:** Fe, Ce, N y fósiles documentan oásis oxigenados, productividad y macroalgas dentro de intervalos glaciales.
- **Puente:** facies y posición estratigráfica sitúan hábitats cerca de líneas de apoyo o aguas costeras.
- **No afirma:** área global, continuidad o un único tipo de refugio.
- **Confianza:** `B-COND`.

### CLAIM-SNOWBALL-EVOLUTION-001

- **Dato:** glaciaciones preceden cambios ediacáricos y alteraron erosión, nutrientes, redox y hábitats.
- **Puente:** modelos/ecología proponen selección, fertilización y apertura de nichos.
- **No afirma:** que Snowball originara animales ni que toda innovación sea posglacial.
- **Confianza:** `C` para mecanismos posibles; `E` para causa única.

### CLAIM-EDIACARA-SCOPE-001

- **Dato:** el periodo abarca ~`635–538.8 Ma`; las macrobiotas clásicas se concentran desde ~`574 Ma` y contienen señales no animales y animales.
- **Puente:** definición estratigráfica, estilo fósil y afinidad se registran como ejes distintos.
- **No afirma:** que todo fósil ediacárico pertenezca a la macrobiota o a Metazoa.
- **Confianza:** `A-B`.

### CLAIM-EDIACARA-CHRONOLOGY-001

- **Dato:** U–Pb fecha superficies de Mistaken Point, Mar Blanco, Podolia y Urales; el límite superior es cronoestratigráfico.
- **Puente:** orden y modelos edad–profundidad transfieren la edad de cenizas a cuerpos asociados.
- **Límite:** una edad de capa no fecha el origen o extinción global del taxón.
- **Confianza:** `B`.

### CLAIM-EDIACARA-TAPHONOMY-001

- **Dato:** relieve, pirita, materia orgánica, deformación y simulaciones documentan preservación selectiva.
- **Puente:** modelos de muerte, sepultamiento y reología reconstruyen qué estructura produjo el molde.
- **No afirma:** que toda costilla o borde fuera piel externa.
- **Confianza:** `B`.

### CLAIM-EDIACARA-ASSEMBLAGES-001

- **Dato:** redes y listas recuperan asociaciones recurrentes; edades 2026 demuestran solapamiento Avalon–White Sea.
- **Puente:** modelos taxón–facies–formación separan señal temporal y ambiental.
- **Límite:** muestreo, paleogeografía y preservación no desaparecen.
- **Confianza:** `B-COND`.

### CLAIM-EDIACARA-DIVERSITY-001

- **Dato:** rangomorfos, dickinsoniomorfos, bilateralomorfos, cnidarios candidatos, tubos y señales microbianas difieren.
- **Puente:** anatomía, desarrollo, conducta y química exigen expedientes filogenéticos separados.
- **No afirma:** que cada morfotipo sea un clado válido.
- **Confianza:** `B`.

### CLAIM-EDIACARA-RANGEOMORPHS-001

- **Dato:** ramificación jerárquica y secuencias de tamaño muestran desarrollo modular regulado.
- **Puente:** programas de crecimiento se comparan con caracteres metazoos y modelos de alimentación/flujo.
- **Límite:** faltan tejidos, boca/intestino y homólogo vivo inequívoco.
- **Confianza:** `C`.

### CLAIM-EDIACARA-DICKINSONIA-001

- **Dato:** crecimiento polarizado, impresiones seriadas y colesterol fósil asociado convergen.
- **Puente:** desarrollo, conducta y biomarcador comparativo apoyan Metazoa.
- **No afirma:** una posición exacta entre placozoos, eumetazoos o bilaterianos.
- **Confianza:** `B-COND`.

### CLAIM-EDIACARA-BILATERIANS-001

- **Dato:** cuerpos polarizados se asocian con raspados o rastros; `Yilingia` conserva cuerpo–traza continuo.
- **Puente:** simetría, polaridad y locomoción delimitan Bilateria total.
- **Límite:** bilateriano no equivale a molusco, anélido, artrópodo o antepasado directo.
- **Confianza:** `B-COND`.

### CLAIM-EDIACARA-ECOLOGY-001

- **Dato:** superficies muestran orientación, agregación, nichos y recursos algales/microbianos heterogéneos.
- **Puente:** estadística espacial, facies, trazas y biomarcadores comparan modos de vida.
- **No afirma:** una ecología universal ni convivencia global.
- **Confianza:** `B-C`.

### CLAIM-EDIACARA-REPRODUCTION-001

- **Dato:** tamaños y distancias en `Fractofusus` coinciden con propágulos y estolones; algunos filamentos conectan clones.
- **Puente:** modelos espaciales comparan dispersión clonal, corriente y reclutamiento.
- **Límite:** el vínculo reproducción–diversidad de 2026 es una salida de modelo, no gametos observados.
- **Confianza:** `C`; `D-PROV` para efecto macroevolutivo.

### CLAIM-EDIACARA-OXYGEN-001

- **Dato:** animales esqueletizados de Nama ocupan aguas mejor oxigenadas y faltan en sectores pobres en oxígeno.
- **Puente:** proxies redox y distribución ecológica delimitan hábitat fisiológicamente viable.
- **No afirma:** aumento global sincrónico ni causalidad suficiente para el origen animal.
- **Confianza:** `B-COND` filtro; `D-E` causa única.

### CLAIM-EDIACARA-TURNOVER-001

- **Dato:** redes y rasgos ecofuncionales recuperan pérdidas y reemplazos; Jiangchuan conserva coexistencia terminal en 2026.
- **Puente:** ocurrencias controladas por facies comparan extinción, ambiente, innovación y preservación.
- **Límite:** ausencia regional o de estilo no es extinción mundial automática.
- **Confianza:** `C`.

## Investigación 022 — Radiación cámbrica

### CLAIM-CAMBRIAN-SCOPE-001

- **Dato/definición:** cuerpos, trazas, esqueletos, morfoespacios, redes y relojes cambian a ritmos distintos.
- **Puente:** “radiación” nombra un paquete de expansión evolutiva y ecológica, no un instante estratigráfico.
- **No afirma:** que toda variable deba compartir principio o final.
- **Confianza:** `A-SEM`; `B` para proceso plural.

### CLAIM-CAMBRIAN-BOUNDARY-001

- **Dato:** el GSSP de Fortune Head se asocia a `Treptichnus pedum`; ICS asigna `538.8 ± 0.6 Ma`.
- **Puente:** un horizonte ratificado define la unidad aun si cambia su calibración numérica.
- **No afirma:** origen de la traza, del productor o de los animales.
- **Confianza:** `A` para definición; `B` para edad.

### CLAIM-CAMBRIAN-CHRONOLOGY-001

- **Dato:** Jiangchuan, límite E–C, trazas, pequeños esqueletos, Chengjiang/Qingjiang y Sinsk no son simultáneos.
- **Puente:** edades y rangos controlados por capa reconstruyen una secuencia de pulsos.
- **Límite:** su duración cambia según variable y correlación.
- **Confianza:** `B`.

### CLAIM-CAMBRIAN-DIVERGENCE-001

- **Dato:** fósiles diagnósticos dan mínimos; relojes relajados producen nodos precámbricos con intervalos amplios.
- **Puente:** filogenia conecta fósil, rama y calibración sin identificar la primera población.
- **Límite:** topología, priors y tasas dominan incertidumbre profunda.
- **Confianza:** `C`.

### CLAIM-CAMBRIAN-PRESERVATION-001

- **Dato:** partes duras, trazas y tejidos blandos tienen distribuciones y pérdidas diferentes.
- **Puente:** tafonomía comparativa y controles de facies estiman qué componente puede faltar.
- **No afirma:** que corregir sesgos recupere un censo completo.
- **Confianza:** `A-B`.

### CLAIM-CAMBRIAN-STEMCROWN-001

- **Dato:** radiodontos, lobopodios y otros mosaicos adquieren caracteres en órdenes parciales.
- **Puente:** matrices ubican formas externas a coronas vivas; decay puede desplazar su posición.
- **No afirma:** que todo problemático esté resuelto o sea ancestro directo.
- **Confianza:** `B-COND` por taxón.

### CLAIM-CAMBRIAN-BIOMINERAL-001

- **Dato:** tubos ediacáricos y asociaciones cámbricas muestran minerales, microestructuras y escleritomas distintos.
- **Puente:** distribución filogenética favorece orígenes múltiples por cooptación.
- **Límite:** una parte aislada puede ocultar organismo y función.
- **Confianza:** `B`.

### CLAIM-CAMBRIAN-DISPARITY-001

- **Dato:** matrices de artrópodos y metazoos cuantifican ocupación de morfoespacio bajo elecciones explícitas.
- **Puente:** comparación temporal separa número de taxones de distancia anatómica.
- **No afirma:** un techo de posibilidades ni todos los filos completos.
- **Confianza:** `B-COND`.

### CLAIM-CAMBRIAN-TRACES-001

- **Dato:** profundidad, tiering, tamaño y diversidad conductual cambian en sucesiones continuas y entre facies.
- **Puente:** geometría y sedimento registran conducta e ingeniería aun sin cuerpo.
- **Límite:** productor y taxón suelen ser desconocidos.
- **Confianza:** `B`.

### CLAIM-CAMBRIAN-ECOLOGY-001

- **Dato:** contenidos, perforaciones, aparatos funcionales y coocurrencias forman redes con enlaces graduados.
- **Puente:** depredación y bioturbación generan selección y nuevos nichos recíprocos.
- **No afirma:** causa inicial ni adaptación exclusiva de cada rasgo.
- **Confianza:** `B-C`.

### CLAIM-CAMBRIAN-DEVELOPMENT-001

- **Dato:** genómica comparada reconstruye regulación/adhesión ancestrales y relojes de artrópodos recuperan tasas tempranas elevadas.
- **Puente:** capacidad heredada y cambio de tasa hacen plausible innovación rápida.
- **Límite:** no se observan redes reguladoras cámbricas ni su expresión.
- **Confianza:** `C`.

### CLAIM-CAMBRIAN-ENVIRONMENT-001

- **Dato:** Mo/U/N/C/S registran heterogeneidad y pulsos redox correlacionados con fauna.
- **Puente:** oxígeno/nutrientes delimitan espacio metabólico y productividad.
- **No afirma:** causalidad unidireccional ni umbral global único.
- **Confianza:** `B-COND` condición; `C-D` pesos.

### CLAIM-CAMBRIAN-TURNOVER-001

- **Dato:** datos siberianos muestran caída de tallos/arqueociatos y continuidad de coronas alrededor de Sinsk.
- **Puente:** rangos y rasgos separan radiación, pérdida y recuperación.
- **Límite:** correlación, facies y globalidad del evento.
- **Confianza:** `B` local; `C` global.

## Investigación 023 — Radiación ordovícica y crisis terminal

### CLAIM-ORDOVICIAN-SCOPE-001

- **Dato/definición:** clados, gremios, paleoplacas y arrecifes producen cronologías parcialmente desacopladas.
- **Puente:** GOBE es una etiqueta para la suma de radiaciones, no una capa o variable universal.
- **No afirma:** una sola fecha, curva o causa.
- **Confianza:** `A-SEM`; `B` para pluralidad.

### CLAIM-ORDOVICIAN-BOUNDARY-001

- **Dato:** Green Point fija el GSSP mediante la FAD local de `Iapetognathus fluctivagus`; ICS asigna `486.85 ± 1.5 Ma`.
- **Puente:** el horizonte ratificado define la base aunque la calibración numérica pueda revisarse.
- **No afirma:** origen del conodonto o comienzo de la biodiversificación.
- **Confianza:** `A` límite; `B` edad.

### CLAIM-ORDOVICIAN-CHRONOLOGY-001

- **Dato:** microfósiles pelágicos, bentos y arrecifes aumentan en órdenes y regiones distintos.
- **Puente:** rangos y correlaciones reconstruyen olas solapadas.
- **Límite:** bordes dependen de grupo, bin y definición amplia o estrecha.
- **Confianza:** `B`.

### CLAIM-ORDOVICIAN-DIVERSITY-001

- **Dato:** varias compilaciones recuperan un aumento grande de riqueza marina.
- **Puente:** persistencia bajo clados y métodos distintos favorece señal biológica real.
- **No afirma:** número absoluto de organismos o especies globales vivas.
- **Confianza:** `A-B`.

### CLAIM-ORDOVICIAN-SAMPLING-001

- **Dato:** roca, colecciones, facies, taxonomía y duración del bin covarían con ocurrencias.
- **Puente:** estandarización y modelos comparan cuánto cambia la curva al controlar detectabilidad.
- **Límite:** ningún ajuste recupera lo no preservado ni vuelve global una paleoplaca.
- **Confianza:** `A` para sesgos; `B-COND` para correcciones.

### CLAIM-ORDOVICIAN-ECOLOGY-001

- **Dato:** rasgos funcionales muestran más tiering, pelagicidad, suspensión, depredación y construcción.
- **Puente:** ecospace y morfología comparados documentan reorganización además de riqueza.
- **No afirma:** biomasa global ni disparidad idéntica en todo clado.
- **Confianza:** `B`.

### CLAIM-ORDOVICIAN-PLANKTON-001

- **Dato:** acritárquidos, graptolitos, conodontos y otros componentes pelágicos amplían sus rangos/diversidad.
- **Puente:** redes y exportación de carbono hacen plausible una retroalimentación con suspensívoros.
- **Límite:** morfotipos no miden directamente productividad o flujo global.
- **Confianza:** `B` radiación; `C-COND` mecanismo.

### CLAIM-ORDOVICIAN-REEFS-001

- **Dato:** asociaciones de microbios, esponjas, briozoos, algas y corales tempranos crecen regionalmente.
- **Puente:** relieve, sustrato duro y flujo generan nuevos microhábitats.
- **Límite:** constructor, edad y preservación varían; no son arrecifes modernos.
- **Confianza:** `B-COND`.

### CLAIM-ORDOVICIAN-BIOGEOGRAPHY-001

- **Dato:** paleocontinentes muestran curvas distintas y eventos de inmigración.
- **Puente:** aislamiento, área de plataforma y dispersión conectan diversidad local, beta y global.
- **No afirma:** que tectónica determine por sí sola origination.
- **Confianza:** `B-COND`.

### CLAIM-ORDOVICIAN-CLIMATE-001

- **Dato:** apatito de conodontos y modelos recuperan enfriamiento prolongado y expansión de nichos térmicos.
- **Puente:** temperatura modifica metabolismo, solubilidad de oxígeno, circulación y gradientes.
- **Límite:** fisiología moderna, paleogeografía y causa de retiro de `CO₂` son modeladas.
- **Confianza:** `B-COND`.

### CLAIM-ORDOVICIAN-OXYGEN-001

- **Dato:** C/S, `δ238U` e `I/Ca` registran historias globales y locales que no coinciden punto por punto.
- **Puente:** la escala de cada proxy delimita oxigenación, estabilidad o mezcla regional.
- **No afirma:** ascenso global sincrónico o suficiencia causal.
- **Confianza:** `B-COND` modulación; `D` interruptor.

### CLAIM-ORDOVICIAN-TERRESTRIAL-001

- **Dato:** criptosporas dapingienses y trazas tardías aparecen en contextos terrestres.
- **Puente:** pared/geometría y sedimentología identifican productores embriofíticos probables y actividad animal mínima.
- **Límite:** cuerpos, cobertura, permanencia y nodo exacto no se preservan.
- **Confianza:** `B-COND` plantas; `C` animales.

### CLAIM-ORDOVICIAN-METEOR-001

- **Dato:** cromita, meteoritos fósiles y edades sitúan la ruptura L cerca de `468.0 ± 0.3 Ma`.
- **Puente:** polvo pudo forzar clima sólo bajo una carga, duración y respuesta radiativa cuantificadas.
- **Límite:** la radiación principal ya estaba en marcha; solapamiento regional no prueba causa global.
- **Confianza:** `A-B` evento; `E` causa única de GOBE.

### CLAIM-ORDOVICIAN-LOME-PULSES-001

- **Dato:** rangos y una cronología CA-ID-TIMS de South China resuelven dos fases terminales.
- **Puente:** desapariciones correlacionadas separan renovación biológica de un único límite formal.
- **Límite:** duraciones locales/modeladas y magnitud dependiente del denominador.
- **Confianza:** `B` dos fases; `C` bordes globales.

### CLAIM-ORDOVICIAN-LOME-CAUSES-001

- **Dato:** selectividad térmica/de hábitat y proxies redox coinciden con glaciación, eustasia, calentamiento y anoxia variables.
- **Puente:** una secuencia clima–plataforma–nutrientes–oxígeno produce estresores distintos.
- **No afirma:** un mecanismo de mortalidad o un reparto idéntico entre cuencas.
- **Confianza:** `B-COND` marco; `C-D` pesos.

### CLAIM-ORDOVICIAN-RECOVERY-001

- **Dato:** curvas taxonómicas y ecospace responden en ritmos diferentes tras la crisis.
- **Puente:** separar composición, riqueza y función evita llamar recuperación a una sola métrica.
- **Límite:** bases y escalas regionales cambian la duración estimada.
- **Confianza:** `B-COND`.

## Investigación 024 — Recuperación silúrica y ensamblaje terrestre

### CLAIM-SILURIAN-SCOPE-001

- **Dato/definición:** límite, riqueza marina, cuerpos terrestres e interacciones usan archivos diferentes.
- **Puente:** separar relojes evita que “Silúrico” imponga una transición simultánea.
- **No afirma:** recuperación o conquista únicas.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-SILURIAN-BOUNDARY-001

- **Dato:** el GSSP está 1.6 m sobre la base de Birkhill Shale y coincide con `A. ascensus`.
- **Puente:** la sección ratificada define la base aun si cambia su calibración numérica.
- **No afirma:** origen del graptolito o final de la LOME.
- **Confianza:** `A` límite; `B` edad.

### CLAIM-SILURIAN-RECOVERY-SCALE-001

- **Dato:** Laurentia recupera riqueza en ~5 Myr bajo estandarización; otras curvas arrojan 15–20 o ≥35 Myr.
- **Puente:** región, muestreo, línea de base y métrica explican resultados no equivalentes.
- **Límite:** ningún valor es cronómetro de toda la biosfera.
- **Confianza:** `B-COND`.

### CLAIM-SILURIAN-RECOVERY-COMPOSITION-001

- **Dato:** linajes supervivientes e inmigrantes cambian dominancia y composición.
- **Puente:** rasgos y filogenias comparan comunidad además de contar géneros.
- **No afirma:** retorno de la misma red o ecospace.
- **Confianza:** `B`.

### CLAIM-SILURIAN-REEFS-001

- **Dato:** marcos coral–estromatoporoideos aeroniences aparecen en South China y Laurentia.
- **Puente:** constructores, relieve y facies documentan función arrecifal regional.
- **Límite:** composición antigua, plataformas selectivas y pocas regiones.
- **Confianza:** `B`.

### CLAIM-SILURIAN-GNATHOSTOMES-001

- **Dato:** Chongqing conserva cuerpos completos de gnathostomos de ~436 Ma; mandíbulas amplían disparidad temprana.
- **Puente:** caracteres + filogenia convierten fósil articulado en mínimo del linaje.
- **No afirma:** origen en el yacimiento.
- **Confianza:** `B`.

### CLAIM-SILURIAN-EVENTS-001

- **Dato:** rangos, facies y quimioestratigrafía separan Ireviken, Mulde y Lau.
- **Puente:** correlaciones repetidas distinguen perturbaciones de ruido local.
- **Límite:** extensión y magnitud cambian por grupo/cuenca.
- **Confianza:** `B` eventos; `C` globalidad fina.

### CLAIM-SILURIAN-REDOX-001

- **Dato:** C, S, I y facies registran reservorios y estados ambientales no idénticos.
- **Puente:** sincronía, modelo y selectividad son necesarios para proponer causa.
- **No afirma:** que `δ13C` mida oxígeno, temperatura o muerte directamente.
- **Confianza:** `B-COND` ambiente; `C-D` pesos.

### CLAIM-SILURIAN-LAND-CONTINUITY-001

- **Dato:** criptosporas y trazas ordovícicas preceden cuerpos silúricos más diagnósticos.
- **Puente:** mínimos sucesivos documentan continuidad y expansión.
- **No afirma:** continente vacío antes del Silúrico.
- **Confianza:** `B`.

### CLAIM-SILURIAN-SPORES-001

- **Dato:** asociaciones triletes aumentan y su abundancia cambia con proximidad costera.
- **Puente:** pared, tétrada y estratigrafía restringen reproducción/productor mínimo.
- **Límite:** cuerpo, xilema y cobertura no se preservan.
- **Confianza:** `B-COND`.

### CLAIM-SILURIAN-VASCULAR-001

- **Dato:** ejes con esporangios aparecen en Wenlock; traqueidas in situ en Ludlow.
- **Puente:** anatomía interna separa poliesporangiófito de vascular inequívoco.
- **No afirma:** que todo `Cooksonia` tenga xilema o forme bosque.
- **Confianza:** `B` cuerpos; `A-B` tejido por ejemplar.

### CLAIM-SILURIAN-FUNGI-001

- **Dato:** `Tortotubus` forma filamentos ramificados/anastomosados.
- **Puente:** morfogénesis y caracteres filogenéticos apoyan Fungi.
- **Límite:** nodo, función, simbiosis y cuerpo fructífero abiertos.
- **Confianza:** `B-COND`.

### CLAIM-SILURIAN-ARTHROPODS-001

- **Dato:** Ludford Lane conserva centípedos y un trigonotárbido depredador.
- **Puente:** cutícula, morfología y contexto apoyan vida terrestre.
- **Límite:** preservación fragmentaria y red incompleta.
- **Confianza:** `B-COND`.

### CLAIM-SILURIAN-PNEUMODESMUS-001

- **Dato:** poros valvulados apoyan espiráculos; palinología/circones nuevos favorecen Wenlock tardío.
- **Puente:** homología prueba función y correlación prueba edad por rutas independientes.
- **Límite:** ejemplar único clave, bloques estructurales y circones detríticos/tobáceos.
- **Confianza:** `B` respiración; `B-COND` edad.

### CLAIM-SILURIAN-FOODWEB-001

- **Dato:** coprolitos contienen esporas/cutículas; cutículas depredadoras añaden nivel trófico.
- **Puente:** contenido ingerido y ecología funcional restringen interacción mínima.
- **No afirma:** identidad de consumidores o flujos cuantificados.
- **Confianza:** `B-COND`.

### CLAIM-SILURIAN-COASTAL-ARCHIVE-001

- **Dato:** esporas, ejes y cutículas llegan a depósitos marinos/marginales; `Parioscorpio` no es escorpión seguro.
- **Puente:** facies, transporte y anatomía distinguen procedencia de hábitat.
- **Límite:** Lagerstätten y similitud pueden concentrar falsas certezas.
- **Confianza:** `A` filtro; `B-COND` por caso.

## Investigación 025 — Bosques, peces y tetrápodos devónicos

### CLAIM-DEVONIAN-SCOPE-001

- **Dato/definición:** seis relojes usan archivos y escalas diferentes.
- **Puente:** separarlos impide que una etiqueta de periodo imponga simultaneidad.
- **No afirma:** una revolución única de peces, bosques y tierra firme.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-DEVONIAN-BOUNDARY-001

- **Dato:** Klonk fija el horizonte bajo la FAD de `U. uniformis`.
- **Puente:** un GSSP define correlación cronoestratigráfica, no innovación biológica.
- **Límite:** la edad numérica puede revisarse.
- **Confianza:** `A` límite; `B` edad.

### CLAIM-DEVONIAN-FOREST-DEFINITION-001

- **Dato/definición:** árbol, rodal, bosque, dosel y cobertura no son sinónimos.
- **Puente:** posición in situ, densidad y sustrato prueban organización espacial.
- **No afirma:** distribución continental desde un solo afloramiento.
- **Confianza:** `A-SEM`.

### CLAIM-DEVONIAN-FOREST-EARLY-001

- **Dato:** Hangman conserva tallos/bases in situ y espaciamiento eifelienses.
- **Puente:** repetición espacial sobre una superficie permite llamarlo bosque local.
- **Límite:** ranking expuesto a nuevos hallazgos y definiciones.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-FOREST-DIVERSITY-001

- **Dato:** Gilboa combina arquitecturas y hábitos vegetales distintos.
- **Puente:** partes asociadas, bases y distribución reconstruyen comunidad mínima.
- **No afirma:** copa, densidad o funcionamiento modernos.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-ROOTS-001

- **Dato:** Cairo conserva raíces profundas, ramificadas y radialmente extensas.
- **Puente:** anatomía y paleosuelo las vinculan con plantas tipo `Archaeopteris`.
- **Límite:** localidad no mide cobertura global.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-LANDSCAPE-001

- **Dato:** paleosuelos y depósitos fluviales cambian junto con profundidad radical.
- **Puente:** estabilización, retención y meteorización ofrecen mecanismos físicos.
- **Límite:** magnitud regional/global exige modelado.
- **Confianza:** `B-COND`.

### CLAIM-DEVONIAN-CO2-001

- **Dato:** una reconstrucción estima CO₂ bajo antes y durante expansión forestal.
- **Puente:** el balance global debe incluir vegetación, volcanismo, paleogeografía y preservación.
- **No afirma:** que los bosques no influyeran, ni que fueran el único control.
- **Confianza:** `B` datos; `C-D` peso.

### CLAIM-DEVONIAN-FISH-TIMING-001

- **Dato:** la disparidad mandibular crece antes de algunas sustituciones taxonómicas devónicas.
- **Puente:** morfometría funcional separa diversidad de forma, riqueza y origen.
- **No afirma:** nacimiento de peces o mandíbulas en el Devónico.
- **Confianza:** `A-SEM`; `B` patrón.

### CLAIM-DEVONIAN-FISH-MOSAIC-001

- **Dato:** fósiles basales combinan rasgos repartidos entre grupos tradicionales.
- **Puente:** matrices filogenéticas sustituyen una escalera por mosaicos ramificados.
- **Límite:** topologías cambian con homología y muestreo.
- **Confianza:** `B-COND`.

### CLAIM-DEVONIAN-FISH-REPRODUCTION-001

- **Dato:** `Materpiscis` conserva embrión articulado y cordón mineralizado.
- **Puente:** posición, desarrollo y conexión excluyen una presa ordinaria.
- **No afirma:** origen de fecundación interna o viviparidad.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-TRANSITION-MOSAIC-001

- **Dato:** cráneo, cintura, apéndice, respiración y locomoción cambian en secuencias distintas.
- **Puente:** comparación filogenética ordena módulos sin imponer una marcha lineal.
- **No afirma:** un único «pez que salió».
- **Confianza:** `B`.

### CLAIM-DEVONIAN-TIKTAALIK-001

- **Dato:** `Tiktaalik` conserva radios/escamas y rasgos de cuello, cintura y apéndice robusto.
- **Puente:** anatomía + estratigrafía sitúan un mosaico transicional.
- **No afirma:** ancestro directo o caminata terrestre observada.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-DIGITS-001

- **Dato:** CT de `Elpistostege` muestra dígitos dentro de una aleta con radios.
- **Puente:** relaciones posicionales sustentan homologías del autopodio.
- **No afirma:** mano portante o terrestrialidad.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-TRACKS-001

- **Dato:** Zachełmie conserva secuencias de impresiones compatibles con tetrápodos.
- **Puente:** morfología, patrón y sustrato restringen productor y conducta.
- **Límite:** sin cuerpo asociado; facies e identidad debatidas.
- **Confianza:** `B-COND`.

### CLAIM-DEVONIAN-AQUATIC-TETRAPODS-001

- **Dato:** `Acanthostega`, `Parmastega` y otros combinan extremidades con adaptaciones acuáticas.
- **Puente:** anatomía e histología separan dígitos de ciclo vital terrestre.
- **No afirma:** incapacidad de incursiones fuera del agua.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-LOCOMOTION-001

- **Dato:** articulaciones y proporciones producen capacidades diferentes entre taxones.
- **Puente:** modelos multisegmento prueban movimientos bajo sustratos explícitos.
- **Límite:** tejido blando, control motor y conducta no se preservan.
- **Confianza:** `B-COND`.

### CLAIM-DEVONIAN-CRISES-001

- **Dato:** rangos y estratos separan Kellwasser de Hangenberg y pérdidas de fondo.
- **Puente:** cronología y selectividad distinguen pulsos dentro de un intervalo largo.
- **No afirma:** una catástrofe instantánea.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-KELLWASSER-001

- **Dato:** un modelo belga resuelve pulsos locales de ~90 y ~110 kyr cerca del F–F.
- **Puente:** capas fechadas y biozonas convierten profundidad en tiempo.
- **Límite:** sección y modelo no fijan sincronía mundial.
- **Confianza:** `B-COND`.

### CLAIM-DEVONIAN-HANGENBERG-001

- **Dato:** el recambio terminal elimina linajes de vertebrados y reorganiza supervivientes.
- **Puente:** patrones antes/después separan el filtro Hangenberg de Kellwasser.
- **Límite:** magnitud y mecanismo cambian por archivo.
- **Confianza:** `B`.

### CLAIM-DEVONIAN-EXTINCTION-RATES-001

- **Dato:** tasas, agotamiento, diversidad neta y ecospace ofrecen magnitudes distintas.
- **Puente:** declarar denominador y ventana evita comparar métricas como equivalentes.
- **No afirma:** que toda discrepancia sea sólo semántica.
- **Confianza:** `A-SEM`; `B` patrón.

### CLAIM-DEVONIAN-CAUSES-001

- **Dato:** redox, Hg, meteorización, nutrientes, esporas y biomarcadores prueban eslabones distintos.
- **Puente:** causa requiere sincronía, dosis, mecanismo ambiental y selectividad biológica.
- **No afirma:** un motor universal para Kellwasser y Hangenberg.
- **Confianza:** `B` señales; `C-D` causas.

## Investigación 026 — Carbón, oxígeno, gigantismo y amniotas carboníferos

### CLAIM-CARBONIFEROUS-SCOPE-001

- **Dato/definición:** límite formal, formación de carbón, clima, oxígeno, tamaño y origen mínimo de amniotas proceden de archivos y relojes diferentes.
- **Puente:** mantenerlos separados evita convertir el nombre del periodo en una causa o sincronizador universal.
- **No afirma:** un Carbonífero mundial uniforme.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-CARBONIFEROUS-BOUNDARY-001

- **Dato:** el lecho 89 de La Serre conserva el GSSP ratificado de la base carbonífera, históricamente vinculado al linaje de `Siphonodella`.
- **Puente:** el estándar fija un horizonte de correlación, no el inicio de pantanos, hielo o tetrápodos.
- **Límite:** su edad numérica y correlación pueden revisarse.
- **Confianza:** `A` límite; `B` edad.

### CLAIM-CARBONIFEROUS-BOUNDARY-PROBLEM-001

- **Dato:** ICS etiqueta hoy La Serre como impreciso y la subcomisión anticipa redefinición.
- **Puente:** estado institucional vigente y poder de correlación son propiedades distintas.
- **No afirma:** que el Carbonífero carezca de definición formal.
- **Confianza:** `A` estado; `D` precisión futura.

### CLAIM-CARBONIFEROUS-SUBDIVISIONS-001

- **Dato/definición:** Mississippiense y Pennsylvaniense son subsistemas internacionales; Arrow Canyon fija la base del segundo mediante `Declinognathodus noduliferus s.l.`.
- **Puente:** nomenclatura y GSSP permiten traducir usos sin tratarlos como etapas idénticas.
- **Límite:** usos regionales y calibraciones no siempre coinciden.
- **Confianza:** `A-SEM`; `A` límite; `B` edad.

### CLAIM-CARBONIFEROUS-PEAT-001

- **Dato:** análogos y facies muestran acumulación de turba bajo balance positivo de producción, saturación y preservación.
- **Puente:** hidrología y espacio de acomodación explican por qué parte de la biomasa evita descomposición o exportación.
- **No afirma:** que todo humedal o toda turba termine en carbón.
- **Confianza:** `A` mecanismo; `B` transferencia.

### CLAIM-CARBONIFEROUS-COALIFICATION-001

- **Dato:** rango, macerales y propiedades térmicas registran compactación, pérdida de agua/volátiles y maduración durante enterramiento.
- **Puente:** esas transformaciones convierten paleoturba en carbón sin confundirla con carbón vegetal de incendio.
- **Límite:** presión, fluidos, intrusiones y deformación alteran trayectorias.
- **Confianza:** `A-B`.

### CLAIM-CARBONIFEROUS-COAL-CONTROLS-001

- **Dato:** vetas, facies y comunidades cambian con clima, nivel freático, subsidencia, detrito, enterramiento y vegetación.
- **Puente:** un presupuesto conjunto explica acumulación desigual entre capas y cuencas.
- **No afirma:** que un solo control domine todo lugar y momento.
- **Confianza:** `B-COND`.

### CLAIM-CARBONIFEROUS-FUNGI-001

- **Dato:** relojes enzimáticos propusieron un retraso ligninolítico; el registro estratigráfico muestra descomposición antigua y máximos de carbón recurrentes fuera de esa ventana.
- **Puente:** comparar predicción temporal con distribución real rechaza la explicación fúngica exclusiva.
- **Límite:** la eficiencia y ecología de hongos antiguos siguen abiertas.
- **Confianza:** `B` rechazo simple; `C` peso fúngico.

### CLAIM-CARBONIFEROUS-WETLAND-DIVERSITY-001

- **Dato:** bolas de carbón, anatomía y esporas recuperan comunidades variables de licófitas, helechos, cordaitales y pteridospermas.
- **Puente:** cambios entre vetas y regiones contradicen una selva mundial homogénea.
- **Límite:** Euramérica, facies y producción de esporas sesgan el archivo.
- **Confianza:** `B`.

### CLAIM-CARBONIFEROUS-ICEHOUSE-001

- **Dato:** ciclotemas, hielo gondwánico y proxies de `CO₂` registran oscilaciones glacioeustáticas y climáticas.
- **Puente:** una casa de hielo dinámica puede coexistir con humedales tropicales regionales.
- **No afirma:** hielo permanente o sincronía idéntica en todas las cuencas.
- **Confianza:** `B`.

### CLAIM-CARBONIFEROUS-VEGETATION-TURNOVER-001

- **Dato:** perfiles anatómicos/palinológicos documentan declive de licófitas y ascenso de otras floras en episodios repetidos.
- **Puente:** sucesiones regionales sustituyen la narrativa de un colapso instantáneo global.
- **Límite:** correlación, hiatos y cobertura geográfica.
- **Confianza:** `B`.

### CLAIM-CARBONIFEROUS-O2-PROXIES-001

- **Dato:** modelos de carbono–azufre convierten enterramiento, meteorización e isótopos en balances atmosféricos.
- **Puente:** el mecanismo de fuente/sumidero es físico; la curva exige parámetros no observados directamente.
- **No afirma:** una medición directa del porcentaje carbonífero.
- **Confianza:** `A` mecanismo; `C` magnitud.

### CLAIM-CARBONIFEROUS-O2-RANGE-001

- **Dato:** modelos/carbón vegetal permiten hiperoxia, mientras inclusiones de halita estudiadas arrojan cerca de `15–16 %`.
- **Puente:** conservar método, muestra y corrección muestra que `35 %` no es un valor universal medido.
- **Límite:** calibración, diagénesis, cobertura temporal y representatividad.
- **Confianza:** `B` desacuerdo; `C-D` trayectoria.

### CLAIM-CARBONIFEROUS-FIRE-001

- **Dato:** anatomía carbonizada e inertinita documentan combustión en floras carboníferas.
- **Puente:** carbón vegetal prueba incendio y oxígeno suficiente bajo el combustible presente.
- **No afirma:** frecuencia mundial ni porcentaje atmosférico exacto.
- **Confianza:** `A-B`.

### CLAIM-CARBONIFEROUS-FIRE-CONTROLS-001

- **Dato:** humedad, combustible, ignición, propagación, transporte y preservación modifican el archivo de fuego.
- **Puente:** esos mediadores impiden leer presencia o ausencia de carbón vegetal como oxímetro simple.
- **Límite:** reconstrucciones cuantitativas dependen de experimentos/modelos actualistas.
- **Confianza:** `A` mecanismo; `B-COND` reconstrucción.

### CLAIM-CARBONIFEROUS-GIGANTISM-001

- **Dato:** fisiología moderna y series fósiles permiten una asociación condicionada entre `O₂` y tamaño máximo.
- **Puente:** hiperoxia puede relajar límites traqueales sin determinar por sí sola crecimiento, ecología o tamaño de todos los artrópodos.
- **No afirma:** causalidad única.
- **Confianza:** `B-COND`.

### CLAIM-CARBONIFEROUS-ARTHROPLEURA-001

- **Dato:** un exuvio parcial permite estimar hasta `~2.63 m`; micro-CT juvenil recupera una anatomía miriápoda en mosaico.
- **Puente:** tamaño y parentesco se sostienen con objetos distintos.
- **No afirma:** dieta adulta, masa exacta o causalidad por oxígeno.
- **Confianza:** `B` identidad; `B-COND` tamaño.

### CLAIM-CARBONIFEROUS-INSECT-SIZE-001

- **Dato:** más de 10,500 alas fósiles recuperan asociación temprana entre curva de `O₂` y tamaño máximo.
- **Puente:** regresión temporal prueba asociación bajo el modelo escogido, no mecanismo exclusivo.
- **Límite:** temperatura, autocorrelación, extremos preservados y controles bióticos.
- **Confianza:** `B-COND`.

### CLAIM-CARBONIFEROUS-ROMERS-GAP-001

- **Dato:** `Pederpes` y faunas tournaisienses de varias localidades contienen tetrápodos y artrópodos donde el registro antes era escaso.
- **Puente:** nuevos cuerpos y contextos muestran que gran parte del vacío dependía de roca y muestreo.
- **No afirma:** cobertura fósil completa.
- **Confianza:** `B`.

### CLAIM-CARBONIFEROUS-AMNIOTE-DEFINITION-001

- **Dato/definición:** Amniota es el nodo corona que une sinápsidos y saurópsidos; sus membranas reproductivas rara vez fosilizan.
- **Puente:** cuerpos y huellas sitúan linajes; independencia reproductiva se reconstruye filogenéticamente.
- **No afirma:** observación de un huevo amniótico carbonífero.
- **Confianza:** `A-SEM`; `B` inferencia.

### CLAIM-CARBONIFEROUS-AMNIOTE-TRACKS-001

- **Dato:** Snowy Plains conserva rastros tournaisienses con cinco dígitos y garras atribuidos a amniota/saurópsido probable.
- **Puente:** morfología, secuencia y exclusión filogenética adelantan el mínimo inferido `35–40 Myr` si edad y productor son correctos.
- **Límite:** losa suelta casi in situ, cuerpo ausente y convergencia posible.
- **Confianza:** `B-COND`.

### CLAIM-CARBONIFEROUS-AMNIOTE-BODIES-001

- **Dato:** `Hylonomus` conserva anatomía corporal bashkiriense compatible con saurópsido corona.
- **Puente:** un cuerpo diagnóstico fija un mínimo anatómico independiente de las huellas más antiguas.
- **No afirma:** origen, lugar de divergencia ni huevo preservado.
- **Confianza:** `B`.

### CLAIM-CARBONIFEROUS-RAINFOREST-TETRAPODS-001

- **Dato:** ocurrencias crudas sugirieron endemismo/diversificación; estandarización y modelos neutrales reducen la señal causal simple.
- **Puente:** controlar espacio y muestreo separa recambio floral real de una supuesta explosión automática de tetrápodos.
- **Límite:** el archivo y los modelos espaciales siguen incompletos.
- **Confianza:** `B` sesgo; `D` causa simple.

## Investigación 027 — Pangea, sinápsidos y la extinción terminal del Pérmico

### CLAIM-PERMIAN-SCOPE-001

- **Dato/definición:** límites, placas, paleoclima, parentesco, crisis y mecanismos proceden de archivos con resoluciones distintas.
- **Puente:** separarlos impide que el nombre del periodo funcione como reloj o causa universal.
- **No afirma:** uniformidad temporal, espacial o biológica.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-PERMIAN-BOUNDARY-001

- **Dato:** Aidaralash Creek y Meishan fijan base y techo mediante FAD de conodontos; ICS asigna `298.9 ± 0.15` y `251.902 ± 0.024 Ma`.
- **Puente:** GSSP correlaciona un horizonte formal; las edades se calibran y la mortandad se identifica aparte.
- **No afirma:** que los bioeventos sean perfectamente sincrónicos ni que la extinción defina el techo.
- **Confianza:** `A` límites; `B` edades.

### CLAIM-PERMIAN-SUBDIVISIONS-001

- **Dato:** tres series contienen nueve pisos y la subcomisión publica GSSP ratificados, redefinidos y candidatos.
- **Puente:** la arquitectura permite localizar episodios sin tratarlos como un Pérmico homogéneo.
- **Límite:** calibraciones y estado institucional pueden cambiar.
- **Confianza:** `A` arquitectura; `B` calibración.

### CLAIM-PERMIAN-PANGEA-ASSEMBLY-001

- **Dato:** suturas varisco–alleganianas y urálicas, terrenos asiáticos y apertura de Neotetis registran una secuencia prolongada.
- **Puente:** edades, procedencias y cinemática enlazan colisiones hoy separadas.
- **No afirma:** una placa única ni una fecha instantánea de «formación».
- **Confianza:** `B`.

### CLAIM-PERMIAN-PANGEA-EVIDENCE-001

- **Dato:** orógenos, rocas, fósiles, polos paleomagnéticos y balances de placas restringen propiedades diferentes.
- **Puente:** su intersección selecciona reconstrucciones físicamente compatibles.
- **Límite:** longitud absoluta, deformación y bloques poco muestreados.
- **Confianza:** `B`.

### CLAIM-PERMIAN-PANGEA-CONFIGURATION-001

- **Dato:** algunos polos apoyan Pangea B temprana y A tardía; otras correcciones reducen el desplazamiento requerido.
- **Puente:** paleolatitud/orientación y continuidad tectónica permiten comparar las geometrías.
- **No afirma:** dos supercontinentes observados ni duda sobre el ensamblaje amplio.
- **Confianza:** `C-D`.

### CLAIM-PERMIAN-CLIMATE-MOSAIC-001

- **Dato:** modelos, facies y paleosuelos recuperan continentalidad, monzones, aridez interior y márgenes más húmedos.
- **Puente:** relieve, latitud, mares, hielo y `CO₂` producen campos regionales distintos.
- **No afirma:** un continente entero desértico.
- **Confianza:** `B`.

### CLAIM-PERMIAN-DEGLACIATION-001

- **Dato:** depósitos glaciares y proxies registran avance/retiro de hielo gondwánico y deglaciación escalonada.
- **Puente:** series regionales reemplazan una frontera climática instantánea.
- **Límite:** duración y alcance varían con región y definición.
- **Confianza:** `B`.

### CLAIM-PERMIAN-SYNAPSID-DEFINITION-001

- **Dato/definición:** Synapsida contiene al ancestro común del linaje y todos sus descendientes, incluidos mamíferos.
- **Puente:** anatomía fósil se codifica en matrices que estiman esa pertenencia.
- **No afirma:** que una fenestra aislada resuelva todo fósil.
- **Confianza:** `A-SEM`; `B` diagnóstico.

### CLAIM-PERMIAN-PELYCOSAUR-001

- **Dato:** Therapsida emerge dentro del conjunto tradicional llamado Pelycosauria.
- **Puente:** excluir al descendiente vuelve parafilética la caja histórica.
- **Límite:** «pelicosaurio» conserva utilidad descriptiva si se declara grado.
- **Confianza:** `A-SEM`; `B` topología.

### CLAIM-PERMIAN-DIMETRODON-001

- **Dato:** cráneo, dientes y postcráneo sitúan `Dimetrodon` entre esfenacodóntidos del tallo mamaliano.
- **Puente:** el árbol lo separa de Dinosauria y no demuestra descendencia directa hacia humanos.
- **No afirma:** fisiología o conducta mamaliana.
- **Confianza:** `A-B`.

### CLAIM-PERMIAN-SAIL-001

- **Dato:** modelos estiman intercambio térmico y la histología muestra vascularización/crecimiento variables entre velas.
- **Puente:** esas capacidades permiten hipótesis de termorregulación, exhibición o multifunción.
- **No afirma:** conducta ni presión selectiva dominante.
- **Confianza:** `C-D`.

### CLAIM-PERMIAN-THERAPSIDS-001

- **Dato:** un gorgonopsio temprano de Mallorca aparece ya profundamente anidado fuera del archivo clásico Rusia–Karoo.
- **Puente:** edad y posición filogenética exigen una historia previa más larga y geográficamente amplia.
- **Límite:** un mínimo regional no localiza el origen.
- **Confianza:** `B-COND`.

### CLAIM-PERMIAN-LOCOMOTION-001

- **Dato:** morfometría 3D de húmeros y rasgos funcionales de más de 200 taxones recupera radiaciones posturales sucesivas.
- **Puente:** paisajes funcionales contradicen una transición lineal única.
- **Límite:** músculo, cintura, miembro posterior y conducta no se observan completos.
- **Confianza:** `B-COND`.

### CLAIM-PERMIAN-CYNODONTS-001

- **Dato:** micro-CT y matrices sitúan cuerpos cinodontos tardopérmicos después de una larga divergencia inferida.
- **Puente:** rasgos dentales, palatales y mandibulares se mapean por separado en el árbol.
- **No afirma:** pelo, lactancia ni pertenencia a Mammalia por un carácter aislado.
- **Confianza:** `B-COND`.

### CLAIM-PERMIAN-CAPITANIAN-001

- **Dato:** pérdidas marinas, basaltos de Emeishan, excursiones isotópicas y redox identifican una crisis anterior a la terminal.
- **Puente:** estratigrafía separa eventos y evita sumar automáticamente sus porcentajes.
- **Límite:** alcance global, pulsos y efecto terrestre.
- **Confianza:** `B`.

### CLAIM-PERMIAN-EPME-TIMING-001

- **Dato:** circones CA-ID-TIMS y modelos edad–profundidad sitúan la fase principal en `~61 ± 48 kyr`.
- **Puente:** cenizas fechadas transfieren tiempo a horizontes biológicos correlacionados.
- **No afirma:** un día, una generación ni sincronía perfecta mundial.
- **Confianza:** `B-COND`.

### CLAIM-PERMIAN-EPME-MAGNITUDE-001

- **Dato:** separación de fondo, agrupamiento, Signor–Lipps y crisis capitaniense produce `~81 %` de especies marinas terminales.
- **Puente:** declarar denominador/método conserva el ranking sin inflar la biosfera completa.
- **Límite:** no es censo y no se transfiere a tierra, microbios, plantas u hongos.
- **Confianza:** `B` ranking; `C` porcentaje.

### CLAIM-PERMIAN-TRAPS-001

- **Dato:** U–Pb fecha magmatismo antes/durante/después y el inicio de grandes sills cerca de `251.907 ± 0.067 Ma`.
- **Puente:** intrusiones en sedimentos ricos en volátiles conectan sincronía con mecanismo de emisión.
- **Límite:** composición y flujo temporal de gases no se midieron directamente.
- **Confianza:** `A-B` tiempo; `B-COND` causa.

### CLAIM-PERMIAN-CARBON-001

- **Dato:** una inversión conjunta estima `~36,000 Gt C`, `~168 kyr` y máximos `~5 Gt C/año`.
- **Puente:** isótopos, pH y temperatura restringen el carbono requerido bajo una familia de modelos.
- **No afirma:** conteo directo de chimeneas ni fuente isotópica única.
- **Confianza:** `C-COND`.

### CLAIM-PERMIAN-KILLCHAIN-001

- **Dato:** boro, P/Fe, redox, temperatura y selectividad fisiológica sostienen acidificación, desoxigenación y estrés térmico.
- **Puente:** ordenar volátiles → carbono/clima → océano/hábitat → mortalidad conecta desencadenante y selección.
- **Límite:** mecanismos covarían y sus pesos cambian por región/taxón.
- **Confianza:** `B` mecanismos; `C-D` pesos.

### CLAIM-PERMIAN-UVB-001

- **Dato:** malformaciones, compuestos absorbentes y experimentos muestran daño compatible con UV-B elevado.
- **Puente:** respuesta vegetal y química del polen restringen exposición en secciones concretas.
- **No afirma:** ozono o dosis planetaria medidos.
- **Confianza:** `B` local; `C-D` global.

### CLAIM-PERMIAN-MEGAELNINO-001

- **Dato:** isótopos, sedimentos y un modelo de 2024 recuperan oscilaciones climáticas extremas tipo ENSO.
- **Puente:** la dinámica ofrece una ruta para amplificar calor, sequía e incendios bajo forzamiento volcánico.
- **Límite:** geografía, parámetros y analogía con ENSO moderno.
- **Confianza:** `C-D-PROV`.

### CLAIM-PERMIAN-TERRESTRIAL-TIMING-001

- **Dato:** Karoo favorece proximidad tierra–mar; tobas de Cathaysia sitúan el colapso forestal después del inicio marino.
- **Puente:** comparar variable, región y resolución permite diacronía sin contradicción automática.
- **No afirma:** una línea terrestre mundial única.
- **Confianza:** `C-D`.

### CLAIM-PERMIAN-SURVIVAL-001

- **Dato:** pérdidas y supervivientes cambian entre clados, latitudes, hábitats y métricas.
- **Puente:** fisiología y exposición explican selectividad mejor que una fracción de «toda la vida».
- **Límite:** abundancia y linajes mal fosilizables no ofrecen censo global.
- **Confianza:** `B` patrón; `C` magnitudes.

## Investigación 028 — Recuperación, dinosaurios y mamaliaformes triásicos

### CLAIM-TRIASSIC-SCOPE-001
- **Dato:** límites, ocurrencias, clima, anatomía, magmas y extinciones tienen archivos/resoluciones diferentes.
- **Puente:** separarlos impide usar el periodo como causa o reloj universal.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-TRIASSIC-BOUNDARIES-001
- **Dato:** Meishan y Kuhjoch fijan base/techo con FO de fósiles; ICS asigna `251.902 ± 0.024` y `201.3 ± 0.2 Ma`.
- **No afirma:** comienzo de recuperación, dinosaurios, mamíferos o mortalidad completa.
- **Confianza:** `A` límites; `B` edades.

### CLAIM-TRIASSIC-SUBDIVISIONS-001
- **Dato:** Inferior, Medio y Superior contienen Induense a Rhaetiense; varios GSSP internos siguen candidatos.
- **Límite:** estado institucional y edades pueden cambiar.
- **Confianza:** `A` arquitectura; `B` estado.

### CLAIM-TRIASSIC-RECOVERY-METRICS-001
- **Dato:** 51,055 ocurrencias producen recuperación genérica hacia Anisiense y estructura trófica aún cambiante después.
- **Puente:** riqueza, función y red se calculan por separado.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-GUIYANG-001
- **Dato:** U–Pb y al menos 12 clases/19 órdenes documentan complejidad a `250.83 +0.07/−0.06 Ma`.
- **No afirma:** recuperación mundial ni estabilidad prolongada.
- **Confianza:** `A-B` local; `D` global.

### CLAIM-TRIASSIC-HOTHOUSE-001
- **Dato:** proxies registran calor/anoxia prolongados; modelos de sílice y vegetación reproducen retroalimentaciones.
- **Límite:** procesos no exclusivos y parámetros profundos.
- **Confianza:** `B` estado; `C-PROV` mecanismo.

### CLAIM-TRIASSIC-TERRESTRIAL-RECOVERY-001
- **Dato:** riqueza/equidad de tetrápodos de Sudáfrica y Rusia permanecen bajas hasta el Triásico Medio.
- **Límite:** cuencas, taxonomía y abundancia preservada.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-ARCHOSAUROMORPH-RADIATION-001
- **Dato:** filogenia, tasas, disparidad y abundancia recuperan tres fases de radiación.
- **Límite:** líneas fantasma y muestreo desigual.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-ARCHOSAUR-SPLIT-001
- **Dato/definición:** Pseudosuchia y Avemetatarsalia son ramas principales; Dinosauria está dentro de la segunda.
- **No afirma:** que pseudosuquios fueran cocodrilos modernos o que todos los avemetatarsalianos fueran dinosaurios.
- **Confianza:** `A-SEM`; `B` fósil.

### CLAIM-TRIASSIC-DINOSAUR-DEFINITION-001
- **Dato:** caracteres anatómicos se codifican en matrices; huellas requieren atribución independiente.
- **No afirma:** dinosaurio por tamaño, bipedismo o tres dedos.
- **Confianza:** `A-SEM`; `B` diagnóstico.

### CLAIM-TRIASSIC-NYASASAURUS-001
- **Dato:** húmero/vértebras permiten dinosaurio o hermano inmediato.
- **Límite:** material fragmentario y edad regional.
- **Confianza:** `C-D`.

### CLAIM-TRIASSIC-DINOSAUR-CALIBRATION-001
- **Dato:** Chañares `236–234 Ma`; Santa Maria `233.23 ± 0.73 Ma`.
- **Puente:** capas fechadas transfieren mínimos a asociaciones fósiles.
- **Confianza:** `B`.

### CLAIM-TRIASSIC-PSEUDOSUCHIAN-DOMINANCE-001
- **Dato:** varias asociaciones bien muestreadas muestran pseudosuquios más diversos/abundantes/grandes.
- **No afirma:** patrón idéntico mundial.
- **Confianza:** `B` regional.

### CLAIM-TRIASSIC-CPE-001
- **Dato:** huellas, cuerpos, humedad, carbono y edades coinciden cerca de `234–232 Ma`.
- **Límite:** coincidencia no reparte causalidad entre clados.
- **Confianza:** `B` coincidencia; `C-D` causa.

### CLAIM-TRIASSIC-DINOSAUR-DIACHRONY-001
- **Dato:** trópicos y latitudes altas muestran composiciones distintas bajo clima/recursos diferentes.
- **Puente:** biogeografía y modelos permiten control condicionado.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-MAMMALIAFORM-DEFINITION-001
- **Dato/definición:** Mammalia es corona; Mammaliaformes incluye parte del tallo.
- **No afirma:** una frontera anatómica única e invariable.
- **Confianza:** `A-SEM`; `C` mínimo.

### CLAIM-TRIASSIC-HARAMIYAVIA-001
- **Dato:** CT, mandíbula, oclusión y matriz favorecen haramíyidos triásicos fuera de la corona.
- **Límite:** topologías alternativas cambian la calibración.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-BRASILODON-001
- **Dato:** tres mandíbulas ontogenéticas apoyan una sustitución dental ordenada.
- **No afirma:** corona, placenta, leche, pelo o metabolismo moderno.
- **Confianza:** `B-COND` rasgo; `D-E` paquete.

### CLAIM-TRIASSIC-JAW-HOMOPLASY-001
- **Dato:** CT 3D corrige `Brasilodon` y recupera contacto convergente en `Riograndia`.
- **Puente:** filogenia distingue similitud de homología.
- **Confianza:** `B`.

### CLAIM-TRIASSIC-PHYSIOLOGY-MOSAIC-001
- **Dato:** cemento dental y forámenes de mammaliaformes tempranos sugieren BMR bajo y capacidad máxima intermedia.
- **Límite:** taxones jurásicos y proxies, no precursores triásicos directos.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-ETE-TIMING-001
- **Dato:** cenizas/correlación sitúan crisis cerca de `201.51 ± 0.15 Ma`; GSSP en `201.3 ± 0.2 Ma`.
- **No afirma:** horizonte idéntico mundial o una sola cifra de pérdida.
- **Confianza:** `B-COND`.

### CLAIM-TRIASSIC-CAMP-001
- **Dato:** U–Pb fecha lavas, diques y sills; intrusiones preceden coladas conservadas y coinciden con la crisis.
- **Límite:** flujo/composición de volátiles.
- **Confianza:** `A-B` tiempo; `B-COND` causa.

### CLAIM-TRIASSIC-ETE-KILLCHAIN-001
- **Dato:** Hg, C, polen, redox y fósiles apoyan volcanismo y múltiples estresores.
- **Puente:** gas → ambiente → exposición → selectividad → rango.
- **Confianza:** `B` mecanismos; `C` pesos.

### CLAIM-TRIASSIC-DINOSAUR-AFTERMATH-001
- **Dato:** pérdida de pseudosuquios no crocodilomorfos precede expansión dinosauriana jurásica.
- **No afirma:** superioridad o competencia directa como causa.
- **Confianza:** `B-COND`.

## Investigación 029 — Pangea, dinosaurios, avialanos y mamaliaformes jurásicos

### CLAIM-JURASSIC-SCOPE-001
- **Dato:** límites, tectónica, redox, anatomía y diversidad tienen archivos/resoluciones diferentes.
- **Puente:** separarlos impide usar el periodo como causa o reloj universal.
- **Confianza:** `A-SEM`; `B` pluralidad.

### CLAIM-JURASSIC-BOUNDARIES-001
- **Dato:** Kuhjoch define la base; ICS calibra base/techo en `201.3 ± 0.2` y `143.1 ± 0.6 Ma`.
- **No afirma:** que el techo tenga GSSP ratificado ni coincida con un pulso biológico total.
- **Confianza:** `A` base; `B` edades/techo.

### CLAIM-JURASSIC-SUBDIVISIONS-001
- **Dato:** once pisos se distribuyen en tres series; Oxfordiense/Tithoniense siguen pendientes.
- **Límite:** estado institucional actualizable.
- **Confianza:** `A` arquitectura; `B` estado.

### CLAIM-JURASSIC-JK-STATUS-001
- **Dato:** fuentes oficiales mantienen la base cretácica sin GSSP ratificado al `2026-08-11`.
- **Límite:** afirmación institucional, no predicción del resultado.
- **Confianza:** `A` institucional.

### CLAIM-JURASSIC-RIFTING-001
- **Dato:** fallas, cuencas, magmas y márgenes ordenan extensión antes de ruptura/expansión.
- **No afirma:** fecha única o motor exclusivo.
- **Confianza:** `A-B` patrón; `C` fechas.

### CLAIM-JURASSIC-ATLANTIC-OPENING-001
- **Dato:** modelos sitúan corteza oceánica inicial central atlántica cerca de `~190–180 Ma`.
- **Límite:** depende de segmento, criterio y fondo preservado.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-PALEOGEOGRAPHY-001
- **Dato:** 40 polos paleomagnéticos sostienen una Pangea casi ecuatorial cerca de 200 Ma.
- **No afirma:** paleolongitud o costa exactas.
- **Confianza:** `B`.

### CLAIM-JURASSIC-TOARCIAN-TIMING-001
- **Dato:** U–Pb y δ¹³C enlazan temporalmente Karoo–Ferrar y T-OAE cerca de 183 Ma.
- **Límite:** flujo y mezcla de fuentes permanecen modelados.
- **Confianza:** `B` tiempo; `B-COND` fuente.

### CLAIM-JURASSIC-TOARCIAN-REDOX-001
- **Dato:** Mo/modelo estima expansión máxima del fondo anóxico de orden `~7 %`.
- **No afirma:** océano entero sin oxígeno.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-TOARCIAN-KILLCHAIN-001
- **Dato:** ambiente, selectividad y redes enlazan forzamiento con extinciones primarias/secundarias.
- **Límite:** pesos y transferencia global desde Cleveland Basin.
- **Confianza:** `B` mecanismos; `C` pesos.

### CLAIM-JURASSIC-DINOSAUR-RADIATION-001
- **Dato:** masas y árbol producen tasas diferentes entre ramas/intervalos.
- **No afirma:** una explosión simultánea ni causa única.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-SAUROPOD-GIGANTISM-001
- **Dato:** alimentación, cuello, neumática, crecimiento y reproducción forman una cascada compatible.
- **Límite:** contribuciones causales no cuantificadas por separado.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-SAUROPOD-GROWTH-001
- **Dato:** tejido vascularizado registra crecimiento rápido en sauropodiformes de `1–2 t`.
- **Puente:** esa capacidad precede a saurópodos `>10 t`, pero no los causa sola.
- **Confianza:** `B`.

### CLAIM-JURASSIC-FEATHERS-001
- **Dato:** `Anchiornis`/`Eosinopteryx` preservan plumas con distribuciones distintas.
- **No afirma:** función original o vuelo en cada taxón.
- **Confianza:** `A-B`.

### CLAIM-JURASSIC-ARCHAEOPTERYX-MOSAIC-001
- **Dato:** alas/plumas coexisten con dientes, mano no fusionada y cola larga.
- **No afirma:** mitad de dos esencias ni ancestro directo.
- **Confianza:** `A` morfología; `B-COND` nodo.

### CLAIM-JURASSIC-FLIGHT-001
- **Dato:** geometría cortical de tres ejemplares se aproxima a voladores activos.
- **Límite:** ciclo, despegue, distancia y frecuencia inferidos.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-AVIALAN-PHYLOGENY-001
- **Dato:** matrices mueven ramas finas al añadir taxones/caracteres.
- **Resultado estable:** adquisición modular en un árbol, no escalera.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-BAMINORNIS-001
- **Dato:** fósil conserva pigóstilo/cinturas derivadas y mano primitiva.
- **No afirma:** Aves corona ni vuelo moderno.
- **Confianza:** `B`.

### CLAIM-JURASSIC-ZHENGHEORNIS-001
- **Dato:** cola de `15` vértebras abreviadas carece de pigóstilo.
- **Límite:** fósil único y publicación de 2026.
- **Confianza:** `B-PROV`.

### CLAIM-JURASSIC-CROWN-BIRD-001
- **Dato/definición:** Avialae del tallo no es Aves corona.
- **No observado:** fósil jurásico que estabilice el nodo corona.
- **Confianza:** `A-SEM`; `D` corona jurásica.

### CLAIM-JURASSIC-MAMMALIAFORM-ECODIVERSITY-001
- **Dato:** cola, garras, proporciones y patagios sostienen cuatro clases de nicho mínimo.
- **Límite:** concentración geográfica/tafonomía excepcional.
- **Confianza:** `A-B` mínima; `C` global.

### CLAIM-JURASSIC-MAMMALIAFORM-DENTITION-001
- **Dato:** pseudotribosfenia docodontiforme difiere de tribosfenia teria.
- **Puente:** oclusión semejante puede ser convergente.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-MAMMALIAFORM-GROWTH-001
- **Dato:** cementocronología muestra cambio de crecimiento a mitad del Jurásico.
- **Límite:** metabolismo y desarrollo se infieren; tasas siguen bajo modernas.
- **Confianza:** `B-COND`.

### CLAIM-JURASSIC-JK-TURNOVER-001
- **Dato:** curvas de tetrápodos responden a correcciones de roca/nivel marino.
- **No afirma:** ausencia de todo recambio ni extinción mundial instantánea.
- **Confianza:** `B-COND`; `D` pulso único.

## Investigación 030 — Cretácico: flores, insectos, aves y mamíferos

### CLAIM-CRETACEOUS-SCOPE-001
- **Dato/alcance:** separa calendario, origen/radiación/dominancia vegetal, interacción insectil, tallo/corona aviana y radiación mamaliana.
- **No afirma:** una revolución simultánea ni causalidad única de las angiospermas.
- **Confianza:** `A-SEM`.

### CLAIM-CRETACEOUS-BOUNDARIES-001
- **Dato:** ICS 2026 calibra el Cretácico en `143.1 ± 0.6–66.0 Ma`.
- **Límite:** el número no define el lecho y puede revisarse.
- **Confianza:** `B`.

### CLAIM-CRETACEOUS-SUBDIVISIONS-001
- **Dato:** doce pisos forman dos series; sus GSSP tienen estados distintos.
- **Límite:** ratificaciones y marcadores se actualizan.
- **Confianza:** `A` arquitectura; `B` estado vivo.

### CLAIM-CRETACEOUS-BASE-STATUS-001
- **Dato institucional:** el Berriasiense y la base cretácica carecen de GSSP ratificado al `2026-08-11`.
- **No afirma:** ausencia de correlación o de edad numérica útil.
- **Confianza:** `A` estado; `B` edad.

### CLAIM-CRETACEOUS-TOP-001
- **Dato:** la base daniense está en la base de la arcilla limítrofe de El Kef; la eyección queda por encima.
- **No afirma:** mecanismo completo de extinción.
- **Confianza:** `A` horizonte; `B` edad.

### CLAIM-CRETACEOUS-ANGIOSPERM-FOSSIL-001
- **Dato:** polen cretácico temprano aporta el mínimo inequívoco bajo caracteres diagnósticos.
- **Límite:** primer fósil no fecha origen ni primer individuo.
- **Confianza:** `A-B`.

### CLAIM-CRETACEOUS-ANGIOSPERM-CLOCK-001
- **Dato:** modelos de ocurrencias/preservación y reloj molecular de 2021/2026 permiten una corona precretácica, especialmente jurásica tardía.
- **Límite:** no existe cuerpo jurásico inequívoco equivalente; priors, tasas y calibraciones condicionan la salida.
- **Confianza:** `C-PROV`.

### CLAIM-CRETACEOUS-ANGIOSPERM-RADIATION-001
- **Dato:** polen y órganos documentan aumento escalonado; venación supera rango no angiospérmico hacia `106–100 Ma`.
- **No afirma:** un único pulso o mecanismo.
- **Confianza:** `A-B` diversidad; `B-COND` función.

### CLAIM-CRETACEOUS-ANGIOSPERM-DOMINANCE-001
- **Dato:** diversidad, abundancia, biomasa, porte y dosel fueron regionalmente desacoplados.
- **No afirma:** dominancia mundial instantánea.
- **Confianza:** `B-COND`; `D` uniformidad global.

### CLAIM-CRETACEOUS-FLOWER-ANCESTOR-001
- **Dato:** reconstrucción de `13 444` observaciones favorece flor corona bisexual, radial y con múltiples órganos separados.
- **Límite:** nodo/modelo, no fósil ni morfología del tallo.
- **Confianza:** `C-COND`.

### CLAIM-CRETACEOUS-POLLINATION-PREANGIOSPERM-001
- **Dato:** mosca de probóscide larga conserva polen gimnospérmico en ámbar de ~`105 Ma`.
- **Puente:** anatomía + contacto sostienen visita/polinización probable.
- **Confianza:** `A-B` local.

### CLAIM-CRETACEOUS-POLLINATION-DIRECT-001
- **Dato:** escarabajos de ~`99–98 Ma` conservan polen angiospérmico adherido, ingerido o en coprolitos.
- **Límite:** transporte/ingesta no miden eficacia fecundante; procedencia del ámbar condiciona.
- **Confianza:** `A-B` local; `C` eficacia.

### CLAIM-CRETACEOUS-INSECT-DIVERSIFICATION-001
- **Dato:** muchos linajes insectiles preceden a angiospermas; modelos recuperan efectos específicos y desfasados sobre originación/extinción.
- **No afirma:** flores crearon insectos ni ausencia de efecto.
- **Confianza:** `B-COND`.

### CLAIM-CRETACEOUS-AVIALAN-DIVERSITY-001
- **Dato:** aves de Jehol tienen disparidad funcional menor que ensamblajes modernos bajo morfometría/simulación.
- **Límite:** una Lagerstätte no agota ecologías cretácicas.
- **Confianza:** `B-COND`.

### CLAIM-CRETACEOUS-ICHTHYORNIS-MOSAIC-001
- **Dato:** cráneo 3D combina dientes mandibulares, punta premaxilar edéntula/pico y rasgos derivados.
- **No afirma:** «mitad reptil», dieta moderna o ancestro directo.
- **Confianza:** `A-B`.

### CLAIM-CRETACEOUS-CROWN-BIRD-DEFINITION-001
- **Dato/definición:** Avialae del tallo no equivale a Aves corona; pertenencia requiere matriz y nodo declarado.
- **No afirma:** que un pico o cola corta diagnostiquen corona.
- **Confianza:** `A-SEM`; `B-COND` por fósil.

### CLAIM-CRETACEOUS-ASTERIORNIS-001
- **Dato:** cráneo tridimensional de ~`66.7 Ma` recupera combinación galliforme/anseriforme cerca de Galloanserae.
- **Límite:** fósil único, topología y edad de corona anterior no fijada.
- **Confianza:** `B-COND`.

### CLAIM-CRETACEOUS-VEGAVIS-001
- **Dato:** cráneo de `69.2–68.4 Ma` fortalece posición dentro de aves corona y ecología de captura submarina.
- **Límite:** posiciones rivales históricas y resultado de 2025.
- **Confianza:** `B-PROV`.

### CLAIM-CRETACEOUS-MAMMAL-SCOPE-001
- **Dato/alcance:** mamíferos cretácicos incluyen varias ramas, tamaños, dietas y geografías; tallo y corona se separan.
- **No afirma:** aspecto de ratón moderno ni paquete ecológico único.
- **Confianza:** `A-SEM`; `A-B` diversidad mínima.

### CLAIM-CRETACEOUS-REPENOMAMUS-001
- **Dato:** dos especies amplían tamaño; un ejemplar conserva restos abdominales de `Psittacosaurus` juvenil.
- **Límite:** consumo directo no distingue caza/carroñeo ni frecuencia.
- **Confianza:** `A-B`.

### CLAIM-CRETACEOUS-MULTITUBERCULATE-001
- **Dato:** complejidad dental, tamaño y herbivoría aumentaron al menos `20 Myr` antes de K–Pg.
- **Límite:** vínculo con angiospermas es correlacional/mecanístico condicionado.
- **Confianza:** `B-COND`.

### CLAIM-CRETACEOUS-THERIAN-RADIATION-001
- **Dato:** morfometría dental recupera aumento de disparidad y dieta teria `10–20 Myr` antes de K–Pg.
- **Límite:** riqueza y disparidad no coinciden; dieta no agota nicho.
- **Confianza:** `B-COND`.

### CLAIM-CRETACEOUS-EUTHERIAN-CROWN-001
- **Dato:** `Ambolestes` y matrices distinguen euterios del tallo de Placentalia; la edad de corona sigue disputada.
- **No afirma:** ausencia definitiva de placentarios cretácicos.
- **Confianza:** `A-SEM`; `B-COND` posiciones; `C-D` edad corona.

### CLAIM-CRETACEOUS-GONDWANATHERIA-001
- **Dato:** `Vintana` y `Adalatherium` documentan anatomía y diversidad gondwánica/insular distintiva.
- **Límite:** registro escaso y topología variable.
- **Confianza:** `A-B` anatomía; `C-COND` relaciones.

## Investigación 031 — K–Pg: impacto, Deccan, extinción y recuperación

### CLAIM-KPG-SCOPE-001

- **Formulación:** seis relojes impiden que frontera, causa y recuperación se conviertan en una sola raya.
- **No afirma:** independencia total; las cadenas comparten edad y algunos archivos.
- **Falsador:** una variable común que prediga sin pérdida todas las posiciones, mecanismos y recuperaciones.

### CLAIM-KPG-BOUNDARY-001

- **Formulación:** GSSP y edad calibrada son convenciones respaldadas por una sección, no el mecanismo.
- **No afirma:** que el impacto ocurrió después en sentido causal por estar la eyección encima del lecho formal.

### CLAIM-KPG-IRIDIUM-001 / CRATER-001 / CRATER-LINK-001

- **Formulación:** geoquímica, mineralogía, geofísica y estratigrafía forman una cadena redundante hacia Chicxulub.
- **Independencia:** instrumentos y objetos cambian; la correlación temporal/geológica es compartida.
- **Alternativa fuerte:** volcanismo u otro impacto debe reproducir simultáneamente ejecta, geometría, edad y señal interna.
- **Confianza:** A-B; el rango de diámetro conserva dependencia de definición/geofísica.

### CLAIM-KPG-IMPACTOR-001

- **Formulación:** Ni isotópico restringe una familia meteorítica.
- **No afirma:** órbita, reservorio exacto ni inventario total de volátiles.
- **Estado:** provisional por novedad y necesidad de replicación.

### CLAIM-KPG-FIRST-DAY-001

- **Formulación:** el núcleo resuelve dinámica local en minutos–años.
- **No afirma:** una cronología mundial de mortalidad.

### CLAIM-KPG-DECCAN-TIMING-001 / DISAGREEMENT-001 / CLIMATE-001

- **Formulación:** actividad pre y posfrontera es robusta; volumen por pulso y emisión no lo son por igual.
- **Alternativa fuerte:** una cronología que reconcilie secciones y coloque gases letales inmediatamente antes del pulso.
- **Falsador:** edades/volúmenes independientes que hagan converger los repartos actuales.

### CLAIM-KPG-IMPACT-DECCAN-001

- **Formulación:** existe un mecanismo físicamente plausible de modulación sísmica.
- **No afirma:** iniciación de Deccan ni respuesta demostrada de cada sistema magmático.

### CLAIM-KPG-CAUSAL-ATTRIBUTION-001

- **Formulación:** Chicxulub explica mejor sincronía, ejecta y abrupta selectividad; Deccan conserva efectos reales.
- **Alternativa fuerte:** un pulso volcánico con gas medido que reproduzca el mismo orden mundial sin impacto dominante.

### CLAIM-KPG-THERMAL-PULSE-001 / IMPACT-WINTER-001

- **Formulación:** reentrada y aerosoles producen forzamientos distintos y dependientes de partículas.
- **No afirma:** incendios uniformes ni un único valor global de oscuridad.
- **Falsador:** inventarios que reduzcan opacidad/dosis por debajo de umbrales compatibles con fósiles.

### CLAIM-KPG-OCEAN-ACIDIFICATION-001

- **Formulación:** acidificación está respaldada como perturbación; su peso letal relativo sigue abierto.
- **Independencia:** boro, carbono, fósiles y EcoGENIE comparten clima pero no detector.

### CLAIM-KPG-EXTINCTION-SCOPE-001 / MARINE-SELECTIVITY-001

- **Formulación:** pérdida masiva y filtros energéticos se distinguen.
- **No afirma:** que `75 %` describa cada clado o que el modelo represente cada especie.

### CLAIM-KPG-PLANT-COLLAPSE-001 / BIRD-SELECTIVITY-001 / MAMMAL-SELECTIVITY-001

- **Formulación:** polen, árboles filogenéticos y fósiles prueban filtros terrestres complementarios.
- **Límite:** cobertura norteamericana y preservación desigual impiden universalizar frecuencias.

### CLAIM-KPG-DINOSAUR-DECLINE-001

- **Formulación:** tendencia previa y desaparición terminal son hipótesis distintas.
- **Prueba discriminatoria:** series terminales equivalentes en varias provincias y modelos que predigan datos omitidos.

### CLAIM-KPG-CRATER-RECOVERY-001 / CONTINENTAL-RECOVERY-001 / RECOVERY-HETEROCHRONY-001

- **Formulación:** la recuperación necesita variable, región y reloj.
- **No afirma:** retorno a la comunidad cretácica ni sincronía global.
- **Confianza:** B-COND; alta para orden local, menor para extrapolación.

## Investigación 032 — Paleógeno: recuperación, mamíferos, primates, ballenas y PETM

### CLAIM-PALEOGENE-SCOPE-001 / BOUNDARIES-001 / EOCENE-GSSP-001 / OLIGOCENE-GSSP-001 / END-001

- **Formulación:** los lechos formales ordenan el intervalo sin contener su historia causal.
- **No afirma:** que la edad numérica sea la definición ni que evento y frontera sean idénticos.
- **Confianza:** A para arquitectura/horizonte; B para edades y correlación.

### CLAIM-PALEOGENE-RECOVERY-001 / MAMMAL-DIVERSITY-001 / MAMMAL-SIZE-001

- **Formulación:** recuperación, diversidad y talla siguieron curvas regionales y métricas distintas.
- **No afirma:** sustitución inmediata de dinosaurios por placentarios ni dominancia uniforme.
- **Falsador:** series globales comparables que muestren una sola curva sin desfases.

### CLAIM-PALEOGENE-PLACENTAL-TIMING-001 / PLACENTAL-LIFE-HISTORY-001

- **Formulación:** nodo de corona, radiación ordinal, disparidad e historia de vida no comparten un reloj obligatorio.
- **Alternativas:** explosiva pos-K–Pg, mecha larga cretácica e híbrida.
- **Límite:** `Pantolambda` es un taxón y su fisiología es una inferencia dental.

### CLAIM-PALEOGENE-PURGATORIUS-001 / EUPRIMATE-001 / PRIMATE-DISPERSAL-001 / PRIMATE-MOSAIC-001

- **Formulación:** primates de tallo y euprimates se separan por nodo y anatomía; la dispersión depende de correlación fina.
- **No afirma:** primer mono, ancestro humano o una marcha Purgatorius–Archicebus–humanos.
- **Confianza:** A-B para fósiles/edades; B-C para topologías; C-COND para ruta rápida.

### CLAIM-PALEOGENE-CETACEAN-ORIGIN-001 / TERRESTRIAL-001 / AMPHIBIOUS-001 / PELAGIC-001

- **Formulación:** oído, dientes, tobillo, pelvis, miembros y cola documentan transformación en mosaico dentro de Artiodactyla.
- **No afirma:** que hipopótamos o `Indohyus` sean ancestros ni que cada fósil forme una fila directa.
- **Falsador:** esqueletos basales que inviertan establemente el orden de caracteres bajo árboles amplios.

### CLAIM-PALEOGENE-PETM-SIGNAL-001 / FORCING-001 / SOURCE-001 / RATE-001 / BIOTA-001

- **Formulación:** perturbación de carbono, calentamiento y acidificación son robustos; masa, mezcla de fuentes, tasa y respuesta se modelan.
- **Alternativa fuerte:** un reservorio no volcánico que cierre firma, masa, tiempo y geología sin NAIP dominante.
- **No afirma:** analogía exacta con emisiones modernas ni respuesta biológica mundial uniforme.

### CLAIM-PALEOGENE-EOT-001

- **Formulación:** dos pasos y varias proxies separan frontera, enfriamiento, eustasia y hielo.
- **Límite:** `δ18O` mezcla temperatura y volumen; la extensión glacial es modelada.

## Investigación 033 — Neógeno: pastizales, primates, clima e istmo de Panamá

### CLAIM-NEOGENE-SCOPE-001 / BOUNDARIES-001 / PLIOCENE-GSSP-001 / END-001

- **Formulación:** el intervalo formal, sus edades calibradas y los procesos que contiene son relojes relacionados, pero no intercambiables.
- **No afirma:** que `23.04`, `5.333` o `2.58 Ma` expliquen por sí mismos un cambio climático, ecológico o biogeográfico.
- **Confianza:** A para definición y horizontes; B para calibraciones numéricas.

### CLAIM-NEOGENE-CLIMATE-OPTIMUM-001 / MMCT-001 / CLIMATE-MOSAIC-001

- **Formulación:** óptimo, transición climática media y enfriamiento tardío se reconstruyen con series marinas, cronologías orbitales, proxies y modelos que no tienen resolución ni sensibilidad idénticas.
- **No afirma:** enfriamiento monótono, sincronía perfecta entre cuencas ni causalidad exclusiva de CO₂ u órbita.
- **Falsador:** series independientes que inviertan de manera reproducible el orden entre temperatura, hielo y carbono.

### CLAIM-NEOGENE-GRASS-ORIGIN-001 / GRASS-DIVERSIFICATION-001 / GRASS-DOMINANCE-001 / C4-EARLY-001 / C4-EXPANSION-001

- **Formulación:** origen de Poaceae, presencia de hábitats abiertos, abundancia regional y expansión de biomasa C4 son eventos distintos.
- **No afirma:** que los pastizales nacieran en el Mioceno, que toda apertura fuera C4 ni que la expansión de `8–6 Ma` fuese simultánea y mundial.
- **Prueba discriminatoria:** series pareadas de fitolitos, polen, isótopos, paleosuelos y abundancia con edad y facies comunes.

### CLAIM-NEOGENE-C4-PROXY-001 / MAMMAL-ECOMORPHOLOGY-001

- **Formulación:** carbono, fitolitos y dientes restringen dieta, vegetación, abrasión y uso del hábitat desde objetos diferentes.
- **No afirma:** que un diente identifique por sí solo una sabana C4 o que hipsodoncia mida únicamente consumo de pasto.
- **Confianza:** B-COND; C cuando se extrapola de un taxón o cuenca al paisaje global.

### CLAIM-NEOGENE-HOMINOID-ROOT-001 / DIVERSITY-001 / ALESI-001 / LOCOMOTION-001 / ORIGIN-001

- **Formulación:** fósiles africanos y euroasiáticos documentan diversidad hominoidea y combinaciones locomotoras ramificadas; los nodos dependen de matrices y definiciones.
- **No afirma:** que `Alesi` fuera un gibón, que `Danuvius` caminara como humano ni que `Anadoluvius` demuestre por sí solo un origen europeo de los homininos.
- **Límite:** la divergencia humano–chimpancé y la identidad del hominino más antiguo pertenecen a las investigaciones 035–036.

### CLAIM-NEOGENE-PANAMA-CLOCKS-001 / PANAMA-MIOCENE-001 / PANAMA-FINAL-CLOSURE-001

- **Formulación:** procedencia de circones, levantamiento, restricción oceánica y cierre somero final responden a preguntas distintas; el cierre sensu stricto se sitúa cerca de `2.8 Ma`.
- **No afirma:** que evidencia de tierra emergida a `15–13 Ma` equivalga a una barrera terrestre continua ni que exista una única «fecha del istmo».
- **Prueba discriminatoria:** modelos paleobatimétricos que expliquen simultáneamente procedencia, salinidad, circulación y fósiles a ambos lados.

### CLAIM-NEOGENE-GABI-EARLY-001 / GABI-ASYMMETRY-001 / PANAMA-CLIMATE-001

- **Formulación:** intercambios anteriores al pulso principal, cierre final y asimetría posterior se separan por taxón, ruta, dispersión y extinción.
- **No afirma:** que el primer cruce feche el puente completo, que más linajes norteños cruzaran necesariamente al sur ni que Panamá causara por sí solo la glaciación del hemisferio norte.
- **Confianza:** B-COND para patrón fósil y asimetría; C-D para pesos causales climáticos globales.

## Investigación 034 — Cuaternario: glaciaciones, megafauna y cambios rápidos

### CLAIM-QUATERNARY-SCOPE-001 / BOUNDARIES-001 / CHIBANIAN-GSSP-001 / UPPER-PLEISTOCENE-001 / HOLOCENE-GSSP-001 / ANTHROPOCENE-STATUS-001

- **Formulación:** las unidades formales dependen de estratotipos ratificados; las cifras sólo las calibran.
- **No afirma:** que una frontera cause el proceso cercano ni que «Antropoceno» carezca de valor por no ser época formal.
- **Confianza:** A para horizontes/decisiones; B para edades.

### CLAIM-QUATERNARY-ORBITAL-PACING-001 / DELTA18O-001 / ICE-CO2-001

- **Formulación:** órbita, señal oceánica y aire atrapado observan objetos distintos y se unen mediante modelos de insolación, fraccionamiento y cronología.
- **No afirma:** órbita suficiente, `δ18O` puro ni edad gas–hielo idéntica.
- **Falsador:** espectros robustos sin frecuencias orbitales o controles de fraccionamiento/cierre que inviertan las series.

### CLAIM-QUATERNARY-MPT-PATTERN-001 / MPT-CAUSE-001 / MPT-CO2-2026-001

- **Formulación:** el cambio de ritmo es robusto; el mecanismo permanece plural y el hielo antiguo de 2026 restringe versiones de gran caída media de `CO₂`.
- **Límite:** instantáneas discontinuas no forman una curva continua.
- **Prueba discriminatoria:** registro continuo pre-MPT con gas, cronología y preservación verificadas, junto con predicciones independientes de erosión y dinámica del manto.

### CLAIM-QUATERNARY-LGM-001 / ABRUPT-GREENLAND-001 / BIPOLAR-SEESAW-001 / YD-REGIONAL-001 / YD-IMPACT-001

- **Formulación:** máxima extensión, cambios abruptos, respuesta bipolar y Younger Dryas tienen escalas y sincronizadores distintos.
- **No afirma:** fecha máxima universal, señal groenlandesa global ni impacto establecido.
- **Confianza:** A-B para señales; B-COND para acoplamiento; D para un impacto causal.

### CLAIM-QUATERNARY-RADIOCARBON-001 / MEGAFAUNA-DEFINITION-001 / MEGAFAUNA-TIMING-001 / MEGAFAUNA-SELECTIVITY-001

- **Formulación:** muestra, calibración, umbral corporal, detectabilidad y evento terminal deben declararse antes de comparar extinciones.
- **No afirma:** que el último fósil sea el último individuo o que exista un corte universal de megafauna.
- **Falsador:** muestreo denso posterior con restos directos bien identificados y fechados que extienda supervivencias.

### CLAIM-QUATERNARY-MEGAFAUNA-GLOBAL-001 / SPECIES-001 / AUSTRALIA-001 / PATAGONIA-001 / NORTHAMERICA-001 / ECOLOGY-001

- **Formulación:** la señal humana global coexiste con trayectorias específicas y sinergias regionales; las consecuencias ecológicas se prueban localmente.
- **No afirma:** sobrecaza universal, clima universal ni una cascada ecológica idéntica.
- **Prueba discriminatoria:** modelos regionales preregistrados que integren llegada humana, clima, abundancia, preservación y predicciones fuera de muestra.

## Investigación 035 — Separación de los linajes humanos y otros simios

### CLAIM-HOMININ-SPLIT-SCOPE-001 / COMMON-ANCESTOR-001 / TREE-TOPOLOGY-001 / RECONSTRUCTION-LIMIT-001

- **Alcance:** separa relación filogenética, población ancestral y reconstrucción anatómica.
- **Control:** millones de caracteres sostienen el árbol; ningún taxón vivo ocupa el nodo ancestral.
- **Límite:** topología robusta no entrega una pareja, una anatomía completa ni una fecha instantánea.

### CLAIM-HOMININ-SPLIT-GENOMIC-DIVERGENCE-001 / SIMILARITY-METRIC-001 / T2T-2025-001 / STRUCTURAL-VARIATION-001

- **Objeto:** bases alineables, indels, duplicaciones, repeticiones y estructura usan denominadores diferentes.
- **Resultado:** T2T amplía territorio comparable y muestra variación antes invisible.
- **Límite:** referencia casi completa no equivale a pangenoma ni `10 %` estructural a bases sustituidas.

### CLAIM-HOMININ-SPLIT-SPECIES-SPLIT-001 / COALESCENCE-001 / ILS-001 / ILS-T2T-001

- **Modelo:** recombinación divide el genoma en genealogías; el coalescente las conecta con población ancestral.
- **Resultado:** ILS grande es esperable entre separaciones africanas próximas.
- **Límite:** TMRCA de locus, inicio del split y fin de flujo no son intercambiables.

### CLAIM-HOMININ-SPLIT-X-MOSAIC-001 / GENE-FLOW-001 / GENE-FLOW-CONTROVERSY-001 / PAN-TIMING-001

- **Alternativas:** flujo, estructura ancestral, tasa y selección pueden producir señales solapadas.
- **Control:** reticulación en `Pan` demuestra posibilidad histórica, no flujo Homo–Pan.
- **Estado:** aislamiento prolongado es plausible; hibridación tardía fuerte no está establecida.

### CLAIM-HOMININ-SPLIT-MUTATION-RATE-001 / PARENTAL-AGE-001 / GENERATION-TIME-001 / RATE-HETEROGENEITY-001

- **Medición:** tríos cuentan mutaciones recientes y edades parentales.
- **Puente:** generaciones, fijación y espectro convierten por generación en por año.
- **Límite:** extrapolar al Mioceno requiere sensibilidad a historia de vida y clase de sitio.

### CLAIM-HOMININ-SPLIT-FOSSIL-CALIBRATION-001 / FOSSIL-MINIMUM-001 / HOMO-PAN-TIMING-001 / AFRICAN-APE-TIMING-001 / ORANGUTAN-TIMING-001

- **Calibración:** un fósil fija mínimo sólo si su identidad, rama, horizonte y edad son defendibles.
- **Síntesis:** Homo–Pan ~`5.5–7 Ma`; los intervalos más estrechos pertenecen a modelos concretos.
- **Límite:** el fósil más antiguo no es el primer individuo ni el ancestro común.

### CLAIM-HOMININ-SPLIT-CHROMOSOME2-001

- **Observación:** sintenia y repeticiones teloméricas internas prueban una fusión derivada.
- **Resultado permitido:** cambio estructural en la rama humana.
- **Salto prohibido:** usarlo como fecha del split o explicación causal de los rasgos humanos.

## Investigación 036 — Primeros homininos, asociación y locomoción

### CLAIM-EARLY-HOMININ-SCOPE-001 / DEFINITION-001 / MOSAIC-001 / ANCESTRY-LIMIT-001

- **Separación:** edad, función, rama y genealogía no son resultados intercambiables.
- **Resultado:** el registro documenta combinaciones anatómicas mosaico cerca del split.
- **Límite:** ningún orden cronológico identifica una línea ancestral directa.

### CLAIM-EARLY-HOMININ-ASSOCIATION-001 / AGE-CONTEXT-001 / BIPEDALISM-001 / BIPED-NOT-TAXON-001

- **Método:** procedencia e identidad se auditan antes de usar biomecánica.
- **Puente:** un reloj fecha contexto; comparación convierte forma en carga probable.
- **Límite:** precisión geológica o bipedalidad no reparan asociación/filogenia.

### CLAIM-SAHELANTHROPUS-AGE-001 / CRANIUM-001 / ASSOCIATION-001 / BIPED-2026-001

- **Archivo:** cráneo deformado y postcráneos no articulados de TM 266.
- **Actualización:** 2026 recupera rasgos femorales bípedos junto con forma general tipo `Pan`.
- **Límite:** atribución del fémur/ulnae y reconstrucción craneal siguen condicionadas.

### CLAIM-SAHELANTHROPUS-ARBOREAL-001 / HABITAT-001 / STATUS-001

- **Repertorio:** alguna bipedestación coexistió probablemente con actividad arbórea sustancial.
- **Ambiente:** mosaico lacustre/leñoso local, no sabana uniforme.
- **Estado:** hominino plausible, ancestro directo no demostrado.

### CLAIM-ORRORIN-AGE-001 / HYPODIGM-001 / FEMUR-001 / MOSAIC-001

- **Reloj:** `~6 Ma`, con intervalos precisos ligados a secciones concretas.
- **Función:** fémur compatible con carga bípeda habitual.
- **Límite:** hipodigma multiindividuo y mosaico no identifican una línea hacia `Homo`.

### CLAIM-ARDIPITHECUS-KADABBA-001 / RAMIDUS-AGE-001 / SKELETON-001 / PHYLOGENY-001

- **Archivo:** `kadabba` es escaso; ARA-VP-6/500 ofrece asociación corporal excepcional pero deformada.
- **Filogenia:** mayor cobertura favorece posición basal hominina.
- **Límite:** basal no significa ancestral y la matriz sigue siendo morfológica.

### CLAIM-ARDIPITHECUS-BIPED-001 / FOOT-001 / CLIMBING-001

- **Mosaico:** pelvis y pie apoyan bipedalismo; hallux, mano y talus apoyan prensión, suspensión o trepa.
- **Actualización:** 2019–2025 reintroducen afinidades africanas en pie, mano y tobillo.
- **Límite:** no existe frecuencia conductual fosilizada ni equivalente vivo exacto.

### CLAIM-ARDIPITHECUS-DENTITION-001 / PALEOENVIRONMENT-001

- **Objeto:** dientes informan función/dieta; proxies ambientales informan parches y cobertura.
- **Resultado:** dieta generalista y ambiente mosaico son defendibles.
- **Salto prohibido:** extraer organización social o causa única del bipedalismo.

## Claims futuros

Las entradas cronológicas todavía no auditadas permanecen como eventos `SEMILLA` en `TIMELINE.md`. Se convertirán en claims al llegar su turno en el roadmap; así se evita otorgar apariencia de auditoría a fechas usadas inicialmente solo como orientación.

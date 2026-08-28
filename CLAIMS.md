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
| `CLAIM-EUK-PLASTID-DISTINCT-001` | Los plastidios proceden de una endosimbiosis cianobacteriana posterior en un huésped eucariota ya mitocondriado. | A-B | AUDITADO | `EVID-EUK-PLASTID-001` | `INV-LIFE-EUK-001` |
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
| `CLAIM-CIV-CATEGORY-001` | «Civilización» es una etiqueta histórica/comparativa, no una variable medida; cada uso debe descomponerse en observables. | A-SEM | TRAZADO | `EVID-CIV-CONCEPT-HISTORY-001`, `EVID-CIV-CHILDE-CRITERIA-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-CIV-DATING-CONTEXT-001` | Una edad arqueométrica pertenece a la muestra y su contexto; vincularla con un acontecimiento exige demostrar asociación y puente inferencial. | A-SEM | AUDITADO | `EVID-QUATERNARY-RADIOCARBON-001`, `EVID-CIV-EGYPT-CHRONOLOGY-001`, `EVID-CIV-DATING-LAYERS-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-DATING-001` |
| `CLAIM-CIV-SEQUENCE-NONUNIVERSAL-001` | La comparación regional rechaza como necesaria una secuencia universal sedentarismo–agricultura–aldea–ciudad–escritura–Estado. | A para negar universalidad; C para dependencias frecuentes | AUDITADO | `EVID-CIV-MICE-AINMALLAHA-001`, `EVID-CIV-DHRA-GRANARIES-001`, `EVID-CIV-KUK-001`, `EVID-CIV-GUILA-CUCURBITA-001`, `EVID-CIV-TELLBRAK-SURVEY-001`, `EVID-CIV-NORTECHICO-DATES-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SEDENTISM-BEFORE-AGRICULTURE-001` | El patrón comensal de ratón en ʿAin Mallaha apoya movilidad residencial reducida cerca de `15 ka cal BP`, antes de la agricultura. | B-LOCAL-COND | AUDITADO | `EVID-CIV-MICE-AINMALLAHA-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-STORAGE-BEFORE-DOMESTICATION-001` | Dhra’ conserva graneros de `11.30–11.18 ka cal BP` en contexto previo a cereales morfológicamente domesticados. | B-LOCAL | AUDITADO | `EVID-CIV-DHRA-GRANARIES-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-DOMESTICATION-MULTIREGIONAL-001` | Series arqueobotánicas apoyan cambios domesticatorios graduales, paralelos y convergentes en varias regiones, no un foco ni instante únicos. | B | TRAZADO | `EVID-CIV-DOMESTICATION-COMPARATIVE-001`, `EVID-CIV-KUK-001`, `EVID-CIV-GUILA-CUCURBITA-001`, `EVID-CIV-TIANLUOSHAN-RICE-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-CIV-KUK-CULTIVATION-001` | En Kuk, la fase 1 (`10.22–9.91 ka cal BP`) apoya manejo/cultivo y la fase 2 (`6.95–6.44 ka`) montículos intensivos, dentro de una trayectoria local. | B-LOCAL-COND | TRAZADO | `EVID-CIV-KUK-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-CIV-GUILA-CUCURBITA-001` | Nueve fechas AMS y morfología de `Cucurbita pepo` sitúan ejemplares domesticados de Guilá Naquitz en ~`10–8 ka cal BP`. | B-LOCAL-COND | TRAZADO | `EVID-CIV-GUILA-CUCURBITA-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-CIV-RICE-TRAJECTORY-001` | En Tianluoshan (`6.9–6.6 ka cal BP`), las bases no desprendibles publicadas suben de `27 %` a `39 %` y el arroz de `8 %` a `24 %` del conjunto vegetal. | B-LOCAL-COND | TRAZADO | `EVID-CIV-TIANLUOSHAN-RICE-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-CIV-URBANISM-MULTIPATH-001` | Tell Brak y la prospección regional apoyan rutas y pulsos múltiples de urbanización en Mesopotamia septentrional, no una difusión sur–norte única. | B-COND | AUDITADO | `EVID-CIV-TELLBRAK-SURVEY-001`, `EVID-CIV-NMESO-URBAN-PATHS-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-WRITING-ADMIN-001` | P003414 es una tablilla administrativa excavada de Uruk IV; prueba un registro local, no alfabetización general ni alcance estatal. | A objeto/género; C alcance | AUDITADO | `EVID-CIV-CDLI-P003414-001` | `INV-CIV-ORIGINS-001`, `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-INEQUALITY-PROXY-001` | En la muestra publicada de 64 sitios, el Gini de tamaño de vivienda aumenta con domesticación/escala política y más en Eurasia posneolítica; proxy, cobertura y corrección limitan el patrón. | B-COND | TRAZADO | `EVID-CIV-HOUSE-GINI-001` | `INV-CIV-ORIGINS-001` |
| `CLAIM-AUSTRALOPITH-SCOPE-001` | Entre `~4.2 y 1.2 Ma`, australopitecos y `Paranthropus` documentan diversidad ramificada, no una etapa única hacia `Homo`. | B | AUDITADO | `EVID-AUSTRALOPITH-METHOD-001`, `EVID-AUSTRALOPITH-AGE-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-TAXONOMY-001` | Una especie fósil exige comparar combinación de caracteres contra ontogenia, sexo, tamaño, población y deformación; un rasgo aislado no basta. | A-MET | AUDITADO | `EVID-AUSTRALOPITH-METHOD-001`, `EVID-KENYANTHROPUS-001`, `EVID-DEYIREMEDA-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-DIVERSITY-001` | Rangos solapados y morfologías distintas sostienen varias formas contemporáneas, con apoyo taxonómico desigual. | B-COND | AUDITADO | `EVID-MRD-001`, `EVID-PLIOCENE-DIVERSITY-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-AGE-CONTEXT-001` | Los relojes fechan minerales, polaridad o enterramiento; unirlos al fósil exige procedencia, correlación y control de retrabajo. | A-MET; B-COND | AUDITADO | `EVID-AUSTRALOPITH-AGE-001`, `EVID-AFRICANUS-AGE-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-LOCOMOTION-MOSAIC-001` | Bipedalidad habitual coexistió con grados distintos de uso arbóreo; ninguna especie representa una marcha universal hacia locomoción moderna. | B-COND | AUDITADO | `EVID-AFAR-SKELETON-001`, `EVID-DEYIREMEDA-001`, `EVID-SEDIBA-MOSAIC-001`, `EVID-LOCOMOTION-2026-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-DIET-PROXY-001` | Anatomía masticatoria, isótopos, microdesgaste y residuos miden capacidades o ventanas distintas y no deben traducirse como un menú único. | A-MET | AUDITADO | `EVID-AFRICANUS-DIET-001`, `EVID-SEDIBA-DIET-001`, `EVID-PBOISEI-DIET-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-TOOL-ATTRIBUTION-001` | Lomekwi, Dikika y Nyayanga amplían tecnología/uso de piedra temprano, pero asociación contextual no identifica fabricante o agente a nivel de especie. | A contra atribución; C acción | AUDITADO | `EVID-EARLY-TOOLS-001`, `EVID-NYAYANGA-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AUSTRALOPITH-ANCESTRY-LIMIT-001` | Edad, semejanza o posición basal no demuestran que un taxón fósil sea ancestro directo de `Homo` o de otro género. | A-SEM; D genealogía | AUDITADO | `EVID-AUSTRALOPITH-METHOD-001`, `EVID-GARHI-001`, `EVID-SEDIBA-MOSAIC-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AANAMENSIS-AGE-001` | `A. anamensis` se documenta aproximadamente entre `4.2 y 3.8 Ma`; los extremos son límites de muestreo/contexto. | B-COND | AUDITADO | `EVID-ANAMENSIS-001`, `EVID-MRD-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AANAMENSIS-BIPED-001` | La tibia de Kanapoi presenta geometría compatible con carga bípeda habitual ya cerca de `4.1 Ma`. | B-COND | AUDITADO | `EVID-ANAMENSIS-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AANAMENSIS-MRD-001` | El cráneo MRD de `~3.8 Ma` amplía y diferencia la morfología craneal de `A. anamensis`. | B | AUDITADO | `EVID-MRD-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AANAMENSIS-OVERLAP-001` | MRD y un frontal temprano de `A. afarensis` apoyan un solapamiento mínimo de `~100 kyr`, debilitando anagénesis estricta sin excluir descendencia parcial. | B-COND | AUDITADO | `EVID-MRD-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AFAR-AGE-001` | `A. afarensis` ocupa prudentemente `~3.9–2.9 Ma`, con precisión distinta entre localidades. | B-COND | AUDITADO | `EVID-AFAR-SKELETON-001`, `EVID-LAETOLI-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AFAR-BIPED-001` | Esqueleto y huellas apoyan bipedalidad habitual de `A. afarensis` sin exigir marcha idéntica a humanos actuales. | A-B | AUDITADO | `EVID-AFAR-SKELETON-001`, `EVID-LAETOLI-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AFAR-ARBOREAL-001` | Escápula y falanges de Dikika apoyan capacidad arbórea persistente junto con bipedalidad; la frecuencia conductual no está preservada. | B-COND | AUDITADO | `EVID-AFAR-SKELETON-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AFAR-LAETOLI-001` | Laetoli registra bipedalidad y diversidad de pisadas; la huella no porta una identificación taxonómica y su biomecánica depende del sustrato/modelo. | B conducta; C productor | AUDITADO | `EVID-LAETOLI-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AFAR-DIET-001` | La variación isotópica comparada de `A. afarensis` es compatible con recursos C3/C4 diversos, no una dieta uniforme de especie. | B-COND | AUDITADO | `EVID-DEYIREMEDA-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-MIDDLE-PLIOCENE-DIVERSITY-001` | `A. afarensis`, `A. deyiremeda`, `Kenyanthropus` y otros candidatos hacen plausible una diversidad pliocena media mayor que una sola especie, con diagnósticos desiguales. | B-COND | AUDITADO | `EVID-PLIOCENE-DIVERSITY-001`, `EVID-KENYANTHROPUS-001`, `EVID-DEYIREMEDA-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-ADEYIREMEDA-FOOT-001` | Nuevos fósiles refuerzan `A. deyiremeda`; el pie BRT se atribuye parsimoniosamente y apoya prensión pedal/arborealidad, pero no está articulado con los dientes. | B taxón/función; C asociación | AUDITADO | `EVID-DEYIREMEDA-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-KENYANTHROPUS-STATUS-001` | KNM-WT 40000 sostiene una morfología facial propuesta como `Kenyanthropus platyops`, condicionada por deformación y muestra pequeña. | C-COND | AUDITADO | `EVID-KENYANTHROPUS-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AAFRICANUS-AGE-001` | `A. africanus` abarca depósitos sudafricanos de edad compleja; `3.67 ± 0.16 Ma` para Little Foot es enterramiento/modelo y no fecha universal del taxón. | B-COND | AUDITADO | `EVID-AFRICANUS-AGE-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AAFRICANUS-MOSAIC-001` | `A. africanus` combina bipedalidad, capacidades arbóreas y dietas variables; Taung o Little Foot no representan por sí solos toda la especie. | B-COND | AUDITADO | `EVID-AFRICANUS-DIET-001`, `EVID-LOCOMOTION-2026-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-AGARHI-STATUS-001` | `A. garhi` de `~2.5 Ma` presenta un mosaico relevante para el origen de `Homo`, pero muestra y asociación no prueban ancestro directo ni fabricante. | C-COND | AUDITADO | `EVID-GARHI-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-ASEDIBA-AGE-001` | U–Pb, paleomagnetismo y estratigrafía sitúan Malapa y `A. sediba` cerca de `1.98 Ma`. | B | AUDITADO | `EVID-SEDIBA-AGE-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-ASEDIBA-MOSAIC-001` | Esqueletos de `A. sediba` asocian columna, pelvis, mano, pie y cráneo mosaico; semejanza con `Homo` informa caracteres, no genealogía directa. | B anatomía; C filogenia | AUDITADO | `EVID-SEDIBA-MOSAIC-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PARANTHROPUS-DEFINITION-001` | `Paranthropus` agrupa aparatos masticatorios robustos; robustez describe capacidad anatómica y no alimento único. | A anatomía; A-SEM alcance | AUDITADO | `EVID-PARANTHROPUS-MORPH-001`, `EVID-PBOISEI-DIET-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PARANTHROPUS-MONOPHYLY-001` | La monofilia de `P. aethiopicus`, `P. boisei` y `P. robustus` es plausible pero condicionada por convergencia masticatoria, matrices y ausencia de datos. | C-COND | AUDITADO | `EVID-PARANTHROPUS-PHYLOGENY-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PARANTHROPUS-AFAR-2026-001` | MLP-3000 extiende `Paranthropus` al Afar y a `2.9–2.5 Ma` (`~2.6 Ma` estimado), sin asignación segura a especie. | B género/edad; C especie | AUDITADO | `EVID-PARANTHROPUS-AFAR-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PBOISEI-DIET-001` | `P. boisei` consumió recursos C4 de forma dominante; anatomía, isótopos y desgaste no identifican un único alimento duro ni causa simple de extinción. | B-COND | AUDITADO | `EVID-PBOISEI-DIET-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PBOISEI-HAND-2025-001` | KNM-ER 101000 asocia inequívocamente mano y pie con `P. boisei`: combina precisión/potencia manual y pie bípedo, sin probar tecnología. | A asociación; B función; D autoría | AUDITADO | `EVID-PBOISEI-HAND-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PROBUSTUS-MICROEVOLUTION-001` | DNH 155 favorece cambio temporal dentro de `P. robustus` para diferencias antes explicadas principalmente por dimorfismo. | B-COND | AUDITADO | `EVID-PROBUSTUS-EVOLUTION-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-PARANTHROPUS-TOOL-LIMIT-001` | Dientes de `Paranthropus` junto a Oldowan en Nyayanga y una mano capaz en `P. boisei` no identifican al fabricante. | A contra atribución; D autoría | AUDITADO | `EVID-NYAYANGA-001`, `EVID-PBOISEI-HAND-001` | `INV-AUSTRALOPITH-001` |
| `CLAIM-HOMO-EARLY-SCOPE-001` | Entre `~2.8 Ma` y el Pleistoceno medio, `Homo` temprano documenta poblaciones y morfologías solapadas, no una sucesión lineal `habilis → erectus`. | B | AUDITADO | `EVID-HOMO-METHOD-001`, `EVID-HOMO-LEDI-001`, `EVID-HABILIS-ERECTUS-ILERET-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-GENUS-DEFINITION-001` | El género `Homo` no posee un umbral único operativo de cerebro, dientes, cuerpo o tecnología; su delimitación combina caracteres y modelo comparativo. | A-SEM | AUDITADO | `EVID-HOMO-METHOD-001`, `EVID-HOMO-LEDI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-TAXONOMY-MOSAIC-001` | Los primeros `Homo` combinan rasgos en mosaico; una pieza aislada puede apoyar afinidad sin resolver especie ni genealogía. | B-COND | AUDITADO | `EVID-HOMO-METHOD-001`, `EVID-HOMO-LEDI-001`, `EVID-HABILIS-OH7-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-ANCESTRY-LIMIT-001` | Edad, semejanza o posición basal no demuestran que un espécimen de `Homo` temprano sea ancestro directo de otro taxón. | A-SEM; D genealogía | AUDITADO | `EVID-HOMO-METHOD-001`, `EVID-HOMO-LEDI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-LEDI-AGE-001` | LD 350-1 procede de un contexto de `2.80–2.75 Ma`; dientes posteriores de Ledi-Geraru documentan `Homo` a `2.78` y `2.59 Ma`. | B | AUDITADO | `EVID-HOMO-LEDI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-LEDI-IDENTITY-001` | LD 350-1 y los dientes de Ledi-Geraru apoyan afinidad con `Homo`, pero no una especie ni una relación ancestro-descendiente seguras. | C-COND | AUDITADO | `EVID-HOMO-LEDI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HABILIS-OH7-001` | OH 7 sostiene el nombre `Homo habilis`; su reconstrucción revisada amplía la disparidad mandibular y craneal del `Homo` temprano. | B | AUDITADO | `EVID-HABILIS-OH7-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HABILIS-DIVERSITY-001` | La variación mandibular, dental y craneal atribuida a `H. habilis` excede una forma simple y mantiene abierto el contenido de su hipodigma. | B-COND | AUDITADO | `EVID-HABILIS-OH7-001`, `EVID-HABILIS-DENTAL-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-RUDOLFENSIS-DISTINCT-001` | KNM-ER 1470 y fósiles de Koobi Fora sostienen una agrupación morfológica distinta, aunque su rango de especie `H. rudolfensis` sigue condicionado. | B morfología; C especie | AUDITADO | `EVID-RUDOLFENSIS-KOOBI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-EARLY-COEXISTENCE-001` | Morfologías distintas de `Homo` coexistieron en África oriental, y `Australopithecus`, `Paranthropus` y `Homo erectus` coincidieron temporalmente en África meridional. | B | AUDITADO | `EVID-RUDOLFENSIS-KOOBI-001`, `EVID-ERECTUS-EARLIEST-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-EARLIEST-001` | DNH 134 cerca de `2.04–1.95 Ma` y KNM-ER 2598 anterior a `1.855 Ma` son candidatos tempranos de `H. erectus`; los extremos dependen de contexto y taxonomía. | B-C | AUDITADO | `EVID-ERECTUS-EARLIEST-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-MOSAIC-001` | DAN5, Dmanisi y otros fósiles muestran que `H. erectus` temprano no fue morfológicamente uniforme y conservó combinaciones regionales mosaico. | B-COND | AUDITADO | `EVID-ERECTUS-DAN5-001`, `EVID-DMANISI-SKULLS-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-HABILIS-OVERLAP-001` | Fósiles de Ileret apoyan solapamiento temporal de `H. habilis` y `H. erectus`, incompatible con una sustitución instantánea. | B | AUDITADO | `EVID-HABILIS-ERECTUS-ILERET-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-ERGASTER-TAXONOMY-001` | Separar `H. ergaster` africano de `H. erectus` asiático o reunirlos en una especie amplia es una elección taxonómica activa, no una frontera geográfica automática. | C | AUDITADO | `EVID-ERECTUS-DAN5-001`, `EVID-ERECTUS-BODY-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-BODY-001` | KNM-WT 15000 documenta en un individuo juvenil un cuerpo alto y miembros largos, pero no representa por sí solo toda la variación de `H. erectus`. | A-LOCAL; B distribución | AUDITADO | `EVID-ERECTUS-BODY-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-RANGE-001` | Contextos fechados sostienen presencia temprana de homininos fuera de África en Dmanisi y Asia; límites y taxón exacto varían entre sitios. | B presencia; C límites | AUDITADO | `EVID-DMANISI-CONTEXT-001`, `EVID-ASIA-DISPERSAL-001`, `EVID-JAVA-CHRONOLOGY-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-DMANISI-AGE-001` | Dmanisi registra ocupaciones y fósiles entre `~1.85 y 1.78 Ma` mediante estratigrafía, paleomagnetismo y geocronología. | A-B | AUDITADO | `EVID-DMANISI-CONTEXT-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-DMANISI-VARIATION-001` | Los cráneos de Dmanisi demuestran gran variación dentro de una población local, pero no obligan por sí solos a reunir todo `Homo` temprano en una especie. | A local; C global | AUDITADO | `EVID-DMANISI-SKULLS-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-DMANISI-GROWTH-001` | La microestructura dental de D2700 indica muerte a `11.4 ± 0.6` años y un patrón de crecimiento mosaico, condicionado a un individuo. | B-COND | AUDITADO | `EVID-DMANISI-GROWTH-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ASIA-EARLY-TOOLS-001` | Shangchen documenta artefactos desde `~2.12 Ma`, pero sin fósiles asociados no identifica la especie productora. | B presencia; D taxón | AUDITADO | `EVID-ASIA-DISPERSAL-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-JAVA-CHRONOLOGY-001` | Sangiran sitúa la primera aparición local de `H. erectus` alrededor de `1.3 Ma` y antes de `1.5 Ma`; Ngandong registra una supervivencia tardía de `117–108 ka`. | B-COND | AUDITADO | `EVID-JAVA-CHRONOLOGY-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-TOOLS-ATTRIBUTION-001` | Oldowan, Achelense y herramientas óseas documentan acciones técnicas, pero su asociación no permite asignar automáticamente autoría a `Homo` o a una especie. | A contra atribución; D fabricante | AUDITADO | `EVID-OLDOWAN-NAMOROTUKUNAN-001`, `EVID-ACHEULEAN-KOKISELEI-001`, `EVID-BONE-TOOLS-OLDUVAI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-OLDOWAN-CONTINUITY-2025-001` | Namorotukunan conserva Oldowan en tres horizontes de `2.75–2.44 Ma`, apoyando continuidad tecnológica durante cambio ambiental plioceno. | B | AUDITADO | `EVID-OLDOWAN-NAMOROTUKUNAN-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ACHEULEAN-EARLY-001` | Kokiselei documenta Achelense cerca de `1.76 Ma`, mostrando que Oldowan y Achelense pudieron coexistir. | B | AUDITADO | `EVID-ACHEULEAN-KOKISELEI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-BONE-TOOLS-2025-001` | Olduvai documenta producción sistemática de 27 herramientas óseas cerca de `1.5 Ma`, sin productor taxonómico identificado. | B | AUDITADO | `EVID-BONE-TOOLS-OLDUVAI-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-PROTEINS-2026-001` | Proteínas de esmalte recuperadas de seis `H. erectus` chinos contienen dos variantes compartidas de ameloblastina, con autenticidad evaluada. | B | AUDITADO | `EVID-ERECTUS-PROTEOMICS-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-ERECTUS-INTROGRESSION-LIMIT-001` | La afinidad proteica compatible con contribución denisovana o “superarcaica” es una inferencia modelada con pocas posiciones, no ADN ni prueba directa de introgresión. | C-D-COND | AUDITADO | `EVID-ERECTUS-PROTEOMICS-001` | `INV-HOMO-EARLY-001` |
| `CLAIM-HOMO-MIDDLE-SCOPE-001` | Intervalo, fósil, taxón, afinidad molecular, paleodemo, región y conducta son productos distintos en el estudio de `Homo` del Pleistoceno medio. | A-SEM | AUDITADO | `EVID-HOMO-MIDDLE-METHOD-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HOMO-MIDDLE-TIMEBIN-001` | El Chibaniense es una edad formal con base en `774.1 ka`; no constituye una especie ni una unidad biológica. | A | AUDITADO | `EVID-HOMO-MIDDLE-METHOD-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HOMO-MIDDLE-TAXONOMY-001` | `H. heidelbergensis`, `H. rhodesiensis`, `H. bodoensis`, “Homo arcaico” y “Homo del Pleistoceno medio” no son sinónimos automáticos ni hipodigmas equivalentes. | A-SEM; C aplicación | AUDITADO | `EVID-HOMO-MIDDLE-METHOD-001`, `EVID-BODOENSIS-DEBATE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HEIDELBERGENSIS-TYPE-001` | La mandíbula de Mauer es el holotipo de `H. heidelbergensis`; no existe un cráneo tipo asociado. | A | AUDITADO | `EVID-MAUER-TYPE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HEIDELBERGENSIS-MAUER-AGE-001` | La datación combinada sitúa la mandíbula de Mauer en `609 ± 40 ka`. | B | AUDITADO | `EVID-MAUER-TYPE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HEIDELBERGENSIS-MAUER-LIMIT-001` | Extender `H. heidelbergensis` desde una mandíbula a cráneos africanos/euroasiáticos exige un diagnóstico e hipodigma explícitos. | A-SEM; C taxón | AUDITADO | `EVID-MAUER-TYPE-001`, `EVID-HOMO-MIDDLE-REGIONAL-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HOMO-MIDDLE-ANCESTRY-LIMIT-001` | Edad, posición basal, semejanza o grupo hermano no identifican por sí solos un espécimen como ancestro directo. | A-SEM; D genealogía | AUDITADO | `EVID-ANTECESSOR-PROTEOME-001`, `EVID-CASABLANCA-2026-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-ANTECESSOR-PROTEOME-001` | El proteoma dental de `H. antecessor` lo sitúa como grupo hermano próximo del clado de homininos posteriores bajo el análisis publicado. | B-COND | AUDITADO | `EVID-ANTECESSOR-PROTEOME-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-CASABLANCA-773KA-2026-001` | Fósiles de Thomas Quarry I proceden de contexto próximo a la inversión Matuyama–Brunhes, con edad nominal `773 ± 4 ka`. | B | AUDITADO | `EVID-CASABLANCA-2026-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-CASABLANCA-AFFINITY-001` | Los fósiles de Casablanca difieren de `H. antecessor` y se ubican basales respecto al linaje de `H. sapiens` bajo la matriz publicada. | B-COND | AUDITADO | `EVID-CASABLANCA-2026-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-SIMA-AGE-001` | Luminiscencia y paleomagnetismo sitúan Sima de los Huesos cerca de `430 ka`. | B | AUDITADO | `EVID-SIMA-CHRONOLOGY-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-SIMA-MORPH-MOSAIC-001` | Los 17 cráneos reconstruidos de Sima concentran rasgos neandertales derivados en cara/anterior y conservan rasgos más primitivos en otras regiones. | B | AUDITADO | `EVID-SIMA-CRANIA-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-SIMA-MTDNA-001` | El mtDNA recuperado de Sima presenta mayor afinidad con el linaje denisovano conocido que con neandertales. | B | AUDITADO | `EVID-SIMA-MTDNA-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-SIMA-NUCLEAR-001` | El ADN nuclear de individuos de Sima es más afín a neandertales. | B | AUDITADO | `EVID-SIMA-NUCLEAR-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-SIMA-DISCORDANCE-001` | La discordancia mtDNA/nuclear de Sima permite estructura, flujo o reemplazo mitocondrial; no prueba por sí sola un evento concreto. | B dato; C mecanismo | AUDITADO | `EVID-SIMA-MTDNA-001`, `EVID-SIMA-NUCLEAR-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-NEAND-DENIS-SPLIT-MIN-001` | La separación de las ramas neandertal y denisovana debe preceder a la población de Sima de `~430 ka`; su fecha exacta depende de modelo. | B-COND | AUDITADO | `EVID-SIMA-NUCLEAR-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-AROEIRA-MOSAIC-001` | Aroeira 3, fechado entre `390–436 ka`, amplía la diversidad morfológica europea del Pleistoceno medio. | B-COND | AUDITADO | `EVID-AROEIRA-CRANIUM-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-AROEIRA-TECH-LIMIT-001` | La asociación de Aroeira 3 con Achelense y fuego no identifica fabricante, control del fuego ni especie mediante la industria. | A contra atribución; D autor | AUDITADO | `EVID-AROEIRA-CRANIUM-001`, `EVID-AROEIRA-FIRE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-BODO-DEFLESHING-001` | Las marcas del cráneo de Bodo son compatibles con descarnamiento intencional mediante piedra. | B | AUDITADO | `EVID-BODO-CUTMARKS-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-BODO-MOTIVE-LIMIT-001` | Las marcas de Bodo no distinguen por sí solas consumo, ritual, tratamiento mortuorio o violencia. | A contra motivo; D motivo | AUDITADO | `EVID-BODO-CUTMARKS-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-KABWE-AGE-001` | La datación directa de Broken Hill/Kabwe produce `299 ± 25 ka`, con historia de uranio modelada. | B-COND | AUDITADO | `EVID-KABWE-DIRECT-DATE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-AFRICA-MIDDLE-DIVERSITY-001` | Morfometría y cronologías apoyan diversidad regional africana; un último ancestro virtual es un modelo, no un fósil. | B-COND | AUDITADO | `EVID-AFRICA-MORPH-DIVERSITY-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-BODOENSIS-PROPOSAL-001` | `Homo bodoensis` fue propuesto formalmente en 2022 para reorganizar parte del registro africano. | A | AUDITADO | `EVID-BODOENSIS-DEBATE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-BODOENSIS-STATUS-001` | La validez nomenclatural y filogenética de `H. bodoensis` fue refutada explícitamente y permanece controvertida. | A estado; C taxón | AUDITADO | `EVID-BODOENSIS-DEBATE-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HARBIN-MORPH-NAME-001` | El cráneo de Harbin fue convertido en holotipo de `H. longi` en 2021 sobre análisis morfológico y procedencia/edad indirectas. | A propuesta; C taxón | AUDITADO | `EVID-HARBIN-MORPH-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HARBIN-DENISOVAN-2025-001` | Proteínas del petroso y mtDNA del cálculo dental vinculan al individuo de Harbin con denisovanos. | B | AUDITADO | `EVID-HARBIN-MOLECULAR-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HOMO-MIDDLE-REGIONAL-001` | Paleodemos conectados y estructura regional explican parte del mosaico, pero número, flujo y persistencia permanecen condicionados. | B-COND | AUDITADO | `EVID-HOMO-MIDDLE-REGIONAL-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-HOMO-MIDDLE-TOOLS-LIMIT-001` | Achelense, fuego y otras asociaciones arqueológicas no constituyen firmas taxonómicas automáticas. | A contra atribución; D fabricante | AUDITADO | `EVID-AROEIRA-FIRE-001`, `EVID-HOMO-MIDDLE-METHOD-001` | `INV-HOMO-MIDDLE-001` |
| `CLAIM-NEAND-DENIS-SCOPE-001` | Taxón fósil, rama molecular, ancestría individual, flujo poblacional y fracción retenida son resultados distintos. | A-SEM | AUDITADO | `EVID-NEAND-DENIS-METHOD-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-OPERATIONAL-001` | «Neandertal» puede designar un hipodigma fósil o poblaciones genómicas de referencia; ningún individuo representa todo el rango. | A-SEM; B aplicación | AUDITADO | `EVID-NEAND-DENIS-METHOD-001`, `EVID-LATE-NEAND-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVAN-OPERATIONAL-001` | «Denisovano» es una categoría molecular de poblaciones afines a referencias de Denisova; no tiene rango zoológico resuelto por sí sola. | A-SEM; B aplicación | AUDITADO | `EVID-DENISOVA-DISCOVERY-001`, `EVID-XIAHE-PROTEOME-001`, `EVID-PENGHU-PROTEOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-HOMININ-ADMIXTURE-DEFINITION-001` | F1, mezcla poblacional e introgresión retenida describen escalas diferentes y no observan contexto social. | A-SEM | AUDITADO | `EVID-NEAND-DENIS-METHOD-001`, `EVID-DENISOVA11-GENOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-MTDNA-1997-001` | El mtDNA del espécimen tipo quedó fuera de la variación humana moderna muestreada; ausencia mitocondrial no excluye aporte nuclear. | B | AUDITADO | `EVID-NEAND-MTDNA-1997-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-GENOME-2010-001` | El borrador neandertal mostró mayor compartición de alelos con no africanos y estimó `1–4 %` de aporte bajo su modelo. | B-COND | AUDITADO | `EVID-NEAND-DRAFT-2010-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-ANCESTRY-SHARED-001` | La mayor parte de la ancestría neandertal compartida por no africanos muestreados procede de un periodo común, sin excluir contactos adicionales. | B-COND | AUDITADO | `EVID-NEAND-ADMIXTURE-2024-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-ADMIXTURE-DATE-2024-001` | Dos análisis sitúan el periodo compartido aproximadamente en `50.5–43.5 ka` y `49–45 ka`, condicionado por muestras, recombinación y modelo. | B-COND | AUDITADO | `EVID-NEAND-ADMIXTURE-2024-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-ARCHAIC-PERCENT-LIMIT-001` | Un porcentaje arcaico es fracción de tractos clasificados bajo referencia y denominador; no identidad total, cuerpo, ancestros ni mezcla inicial. | A-SEM | AUDITADO | `EVID-NEAND-DRAFT-2010-001`, `EVID-NEAND-SELECTION-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-SELECTION-001` | Recombinación, deriva, migración y selección alteraron la distribución neandertal retenida y produjeron regiones empobrecidas/enriquecidas. | B-COND | AUDITADO | `EVID-NEAND-SELECTION-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-OASE-RECENT-NEAND-001` | Oase 1 conserva `6–9 %` y segmentos mayores de `50 cM`, compatibles con un ancestro neandertal 4–6 generaciones antes. | B | AUDITADO | `EVID-OASE-NEAND-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-BACHO-RECENT-NEAND-001` | Tres individuos de Bacho Kiro de `45.93–42.58 ka` tenían ancestros neandertales pocas generaciones atrás. | B | AUDITADO | `EVID-BACHO-NEAND-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-SAPIENS-TO-NEAND-001` | Genomas neandertales apoyan flujo recurrente desde poblaciones relacionadas con humanos modernos, incluido un episodio oriental `>100 ka`. | B-COND | AUDITADO | `EVID-SAPIENS-TO-NEAND-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-LATE-NEAND-STRUCTURE-001` | Cinco genomas tardíos muestran estructura relacionada con geografía y una población donante distinta de los ejemplares tardíos muestreados. | B-COND | AUDITADO | `EVID-LATE-NEAND-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-SOCIAL-LOCAL-001` | Trece neandertales de dos cuevas del Altái apoyan parentesco cercano, comunidad pequeña y migración femenina bajo el mejor modelo local. | B-LOCAL-COND | AUDITADO | `EVID-NEAND-SOCIAL-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-NEAND-LAST-DETECTION-001` | La desaparición neandertal cerca de `40 ka` es un conjunto de últimas detecciones regionales modeladas, no la fecha del último individuo. | B-COND | AUDITADO | `EVID-NEAND-LAST-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVA-MTDNA-2010-001` | El mtDNA de una falange de Denisova reveló una genealogía hominina no reconocida previamente. | A-B | AUDITADO | `EVID-DENISOVA-DISCOVERY-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVA-GENOME-2010-001` | ADN nuclear situó denisovanos como grupo hermano de neandertales y distinto de humanos actuales. | B | AUDITADO | `EVID-DENISOVA-DISCOVERY-001`, `EVID-DENISOVA-HIGHCOV-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVA-CAVE-CHRONOLOGY-2025-001` | `150` edades ópticas y `963` sedimentos sitúan mtDNA denisovano desde `~250 ka` y fósiles desde `~200 ka` en Denisova. | B-COND | AUDITADO | `EVID-DENISOVA-CHRONOLOGY-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-XIAHE-DENISOVAN-001` | Proteínas dentales vinculan Xiahe con denisovanos y una costra fija un mínimo de `160 ka`. | B | AUDITADO | `EVID-XIAHE-PROTEOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-BAISHIYA-DENISOVAN-001` | Sedimentos y una costilla proteómica documentan recurrencias denisovanas en Baishiya hasta una capa de `48–32 ka`. | B-COND | AUDITADO | `EVID-BAISHIYA-DNA-PROTEIN-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-PENGHU-DENISOVAN-2025-001` | `4 241` residuos de aminoácidos y variantes informativas identifican Penghu 1 como denisovano masculino. | B | AUDITADO | `EVID-PENGHU-PROTEOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-PENGHU-AGE-LIMIT-001` | Penghu 1 carece de estratigrafía primaria y sólo puede situarse en `10–70` o `130–190 ka`. | C | AUDITADO | `EVID-PENGHU-PROTEOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVA11-F1-001` | El genoma de Denisova 11 demuestra madre neandertal y padre denisovano de primera generación. | A-B | AUDITADO | `EVID-DENISOVA11-GENOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVA11-OLDER-FLOW-001` | El padre denisovano de Denisova 11 ya portaba segmentos neandertales de contacto anterior. | B | AUDITADO | `EVID-DENISOVA11-GENOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVAN-MELANESIAN-001` | El genoma denisovano de 2010 estimó `4–6 %` de contribución a melanesios bajo su panel y modelo históricos. | B-COND | AUDITADO | `EVID-DENISOVAN-MODERN-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-DENISOVAN-MULTIPULSE-001` | Tractos actuales requieren al menos dos contribuciones de poblaciones denisovanas con distinta cercanía a la referencia de Altái. | B-COND | AUDITADO | `EVID-DENISOVAN-MODERN-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-EPAS1-DENISOVAN-001` | El haplotipo tibetano de `EPAS1` apoya introgresión desde una población denisovana o relacionada y selección posterior. | B-COND | AUDITADO | `EVID-EPAS1-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-ADAPTIVE-INTROGRESSION-LIMIT-001` | Afinidad, aumento de frecuencia y efecto fisiológico son pasos distintos; el donante exacto y ventaja universal no están demostrados. | A-SEM; B-COND aplicación | AUDITADO | `EVID-EPAS1-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-ADMIXTURE-STRUCTURE-ADVERSARY-001` | Simulaciones estructuradas sin mezcla produjeron falsos tractos/eventos en métodos probados; estructura debe competir como modelo. | A-MET; C aplicación total | AUDITADO | `EVID-STRUCTURE-ADVERSARY-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-INTERBREEDING-TAXON-LIMIT-001` | Flujo fértil no obliga a una sola especie y diferenciación morfológica no implica aislamiento absoluto. | A-SEM; C rango | AUDITADO | `EVID-NEAND-DENIS-METHOD-001`, `EVID-DENISOVA11-GENOME-001` | `INV-NEAND-DENIS-001` |
| `CLAIM-HOMO-OTHER-SCOPE-001` | Taxón, presencia, capacidad funcional, conducta, autoría y genealogía requieren objetos y puentes distintos. | A-SEM | AUDITADO | `EVID-HOMO-OTHER-METHOD-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-LATE-DIVERSITY-NONLINEAR-001` | Formas humanas anatómicamente mosaico coexistieron a escala amplia durante el Pleistoceno medio/tardío; no forman una escalera ni prueban encuentros. | B patrón; A contra escalera | AUDITADO | `EVID-HOMO-OTHER-METHOD-001`, `EVID-FLORES-CHRONOLOGY-001`, `EVID-NALEDI-DATE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-TAXONOMY-SPECIES-LIMIT-001` | Un taxón fósil es una hipótesis diagnóstica sobre un hipodigma; no observa por sí solo aislamiento reproductivo, población completa o ancestro. | A-SEM; B aplicación | AUDITADO | `EVID-HOMO-OTHER-METHOD-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-TAXON-001` | LB1 y restos de más individuos sostienen `H. floresiensis` por una combinación anatómica no reducida a variación humana moderna normal. | B | AUDITADO | `EVID-FLORES-TYPE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-CHRONOLOGY-2016-001` | La estratigrafía revisada sitúa cuerpos de Liang Bua en `~100–60 ka` y artefactos asociados en `~190–50 ka`; la asociación cercana a `12 ka` era incorrecta. | B-COND | AUDITADO | `EVID-FLORES-CHRONOLOGY-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-WOLO-SEGE-001` | Artefactos bajo una ignimbrita de `1.02 ± 0.02 Ma` prueban presencia hominina anterior a esa erupción en Flores. | B | AUDITADO | `EVID-WOLO-SEGE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-MATA-MENGE-AGE-001` | Fósiles y herramientas de Mata Menge proceden de depósitos de `~0.65–0.773 Ma`, resumidos cerca de `700 ka`. | B-COND | AUDITADO | `EVID-MATA-MENGE-CONTEXT-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-MATA-MENGE-AFFINITY-001` | Tamaño y rasgos dentognáticos compartidos hacen compatible una continuidad entre Mata Menge y Liang Bua, sin demostrar ancestro directo. | B-COND | AUDITADO | `EVID-MATA-MENGE-CONTEXT-001`, `EVID-MATA-MENGE-HUMERUS-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-LUZON-TAXON-001` | Trece elementos de al menos tres individuos sostienen `H. luzonensis` por su combinación dental y postcraneal. | B-COND | AUDITADO | `EVID-LUZON-TYPE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-LUZON-CALLAO-DATE-001` | El metatarsiano CCH1 tiene una edad U-series mínima de `66.7 ± 1 ka`. | B-COND | AUDITADO | `EVID-CALLAO-DATE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-LUZON-KALINGA-001` | Kalinga conserva 57 artefactos y un rinoceronte modificado entre `777 y 631 ka`, evidencia de actividad hominina sin fósil autor. | B | AUDITADO | `EVID-KALINGA-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-KALINGA-CALLAO-LINK-OPEN-001` | La presencia antigua de Kalinga no demuestra continuidad genealógica ni autoría por `H. luzonensis` de Callao. | A contra enlace; D autor | AUDITADO | `EVID-KALINGA-001`, `EVID-LUZON-TYPE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-DEPOSITION-001` | Dinaledi contiene cuerpos relativamente completos, dominados por `H. naledi`, sin señal clara de carnívoros o transporte hidráulico; el proceso final sigue debatido. | B contexto; C proceso | AUDITADO | `EVID-NALEDI-CONTEXT-001`, `EVID-NALEDI-BURIAL-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-DATE-001` | Relojes y estratigrafía combinados restringen la deposición de Dinaledi a `335–236 ka`. | B-COND | AUDITADO | `EVID-NALEDI-DATE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-LESEDI-001` | Lesedi aporta 131 restos de al menos tres individuos anatómicamente congruentes, incluido un cráneo de `~610 ml`; no hereda automáticamente la edad de Dinaledi. | B | AUDITADO | `EVID-NALEDI-LESEDI-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-MOSAIC-001` | Cráneo, dentición, pelvis, proporciones, muñeca y pie de `H. floresiensis` forman un mosaico no ordenable en una escala lineal. | B | AUDITADO | `EVID-FLORES-TYPE-001`, `EVID-FLORES-WRIST-FOOT-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-FOOT-WRIST-001` | La muñeca conserva configuraciones comparativamente basales y el pie es bípedo pero largo y mosaico. | B | AUDITADO | `EVID-FLORES-WRIST-FOOT-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-PATHOLOGY-LIMIT-001` | Patologías propuestas para LB1 son adversarios necesarios, pero no explican de forma suficiente el hipodigma ni la pequeñez de Mata Menge. | B-COND | AUDITADO | `EVID-FLORES-TYPE-001`, `EVID-FLORES-PATHOLOGY-001`, `EVID-MATA-MENGE-HUMERUS-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-ORIGIN-OPEN-001` | Una derivación insular de `H. erectus` asiático está favorecida por Mata Menge, pero matrices y homoplasia mantienen abierta la genealogía exacta. | B-COND | AUDITADO | `EVID-MATA-MENGE-HUMERUS-001`, `EVID-FLORES-PHYLOGENY-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-MATA-MENGE-BODY-2024-001` | El húmero adulto SOA-MM9 estima una longitud `9–16 %` menor que LB1 y apoya cuerpos diminutos en Flores hacia `700 ka`. | B-COND | AUDITADO | `EVID-MATA-MENGE-HUMERUS-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-BEHAVIOR-2026-001` | Marcas de corte prueban acceso hominino a `Stegodon`; la tafonomía favorece carroñeo y no demuestra caza coordinada ni fuego controlado en esos niveles. | B marcas; C estrategia | AUDITADO | `EVID-FLORES-BEHAVIOR-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-CLIMATE-2025-001` | Proxies registran una caída de lluvia de `~37 %` entre `76 y 61 ka` y máxima aridez estival `61–55 ka`; contribución al declive es plausible, no causalidad única. | B señal; C causa | AUDITADO | `EVID-FLORES-CLIMATE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-SAPIENS-CONTACT-OPEN-001` | Cuerpos de `H. floresiensis` terminan antes de la señal sapiens local de `~46 ka`; no hay encuentro, competencia o exterminio demostrados. | B secuencia; D interacción | AUDITADO | `EVID-FLORES-CHRONOLOGY-001`, `EVID-FLORES-CLIMATE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-LUZON-PHYLOGENY-2026-001` | Árboles discordantes y homoplasia dejan abierta la posición de `H. luzonensis`; dientes/índices favorecen afinidad con `H. erectus` asiático. | C | AUDITADO | `EVID-LUZON-PHYLOGENY-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-ISLAND-CROSSING-LIMIT-001` | Presencia en islas oceánicas exige cruce de barreras acuáticas, pero no distingue dispersión accidental, transporte natural o navegación intencional. | A contra intención; C mecanismo | AUDITADO | `EVID-HOMO-OTHER-METHOD-001`, `EVID-WOLO-SEGE-001`, `EVID-KALINGA-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-TAXON-001` | Más de 1,500 especímenes iniciales de al menos quince individuos sostienen `H. naledi` como taxón anatómico. | B | AUDITADO | `EVID-NALEDI-TYPE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-MOSAIC-001` | `H. naledi` combina endocráneo pequeño, hombro/tronco basales, mano mosaico y pie ampliamente bípedo. | B | AUDITADO | `EVID-NALEDI-TYPE-001`, `EVID-NALEDI-HAND-FOOT-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-TOOLS-LIMIT-001` | Mano y muñeca permiten inferir capacidades de manipulación, pero no hay industria segura en Dinaledi que identifique a `H. naledi` como fabricante. | B capacidad; D autor | AUDITADO | `EVID-NALEDI-HAND-FOOT-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-BURIAL-2025-001` | La versión revisada favorece entierro cultural, pero evaluación experta dividida y reanálisis geoarqueológico mantienen la conclusión controvertida. | C | AUDITADO | `EVID-NALEDI-BURIAL-001`, `EVID-NALEDI-BURIAL-ADVERSARY-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-ENGRAVINGS-2025-001` | Algunas líneas de Rising Star pueden ser artificiales, pero su edad y autoría por `H. naledi` no están demostradas. | C artificialidad; D fecha/autor | AUDITADO | `EVID-NALEDI-ENGRAVINGS-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-NALEDI-PHYLOGENY-001` | Análisis morfológicos sitúan `H. naledi` dentro de `Homo` bajo modelos condicionados, sin ancestro directo identificado. | C | AUDITADO | `EVID-NALEDI-PHYLOGENY-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-MODERN-PYGMY-001` | Genomas humanos actuales de Flores/ISEA no muestran contribución adicional sustancial detectable de un taxón insular desconocido; eso no prueba ausencia histórica de contacto. | B-COND señal; D contacto | AUDITADO | `EVID-FLORES-GENOMICS-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-BRAIN-BEHAVIOR-LIMIT-001` | Volumen endocraneal no determina por sí solo capacidad, conducta realizada, simbolismo o simplicidad social. | A-SEM | AUDITADO | `EVID-HOMO-OTHER-METHOD-001`, `EVID-NALEDI-TYPE-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-FLORES-LIANG-BUA-ASSOCIATION-001` | La asociación de artefactos y fauna con `H. floresiensis` apoya actividad hominina local, pero no asigna cada pieza o marca a un individuo. | B asociación; C-D autoría | AUDITADO | `EVID-FLORES-CHRONOLOGY-001`, `EVID-FLORES-BEHAVIOR-001` | `INV-HOMO-OTHER-001` |
| `CLAIM-SAPIENS-ORIGIN-SCOPE-001` | Primer fósil, afinidad taxonómica, coalescencia, divergencia poblacional y origen de especie son resultados distintos. | A-SEM | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-AFRICAN-ORIGIN-001` | La convergencia fósil y genómica sitúa en África la emergencia del clado ancestral de las poblaciones humanas actuales. | A-B | AUDITADO | `EVID-JEBEL-IRHOUD-MORPH-001`, `EVID-OMO-I-AGE-001`, `EVID-AFRICA-MORPH-DIVERSITY-001`, `EVID-WEAK-STEM-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-SINGLE-CRADLE-LIMIT-001` | El archivo disponible no discrimina una región fundadora única frente a una emergencia distribuida con conectividad variable. | B contra unicidad; C geografía | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001`, `EVID-AFRICA-MORPH-DIVERSITY-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-MOSAIC-001` | Los fósiles africanos tempranos atribuidos o próximos a `H. sapiens` combinan rasgos en mosaico y no forman un paquete anatómico instantáneo. | B | AUDITADO | `EVID-JEBEL-IRHOUD-MORPH-001`, `EVID-HERTO-001`, `EVID-AFRICA-MORPH-DIVERSITY-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-JEBEL-IRHOUD-TAXON-001` | Cara, mandíbula y dientes de Jebel Irhoud apoyan una fase temprana del clado sapiens, junto con neurocráneo comparativamente alargado. | B | AUDITADO | `EVID-JEBEL-IRHOUD-MORPH-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-JEBEL-IRHOUD-DATE-001` | Sílex calentado de la unidad fosilífera da `315 ± 34 ka` por TL y un diente recalculado `286 ± 32 ka` por US-ESR; la edad de cuerpos depende de asociación. | B-COND | AUDITADO | `EVID-JEBEL-IRHOUD-DATE-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-OMO-I-MINIMUM-AGE-001` | La KHS Tuff correlacionada con Shala fija para Omo I una edad mínima de `233 ± 22 ka`, no una edad exacta de muerte. | B-COND | AUDITADO | `EVID-OMO-I-AGE-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-HERTO-CONTEXT-001` | Herto documenta una población sapiens de `~160–154 ka`; subespecie y posición ancestral exacta son interpretaciones revisables. | B presencia; C taxonomía | AUDITADO | `EVID-HERTO-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-FLORISBAD-AGE-001` | Un diente atribuido al expediente Florisbad produjo `259 ± 35 ka` por ESR, con asociación histórica y dosis ambiental complejas. | C | AUDITADO | `EVID-FLORISBAD-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-AFRICA-FOSSIL-DISTRIBUTION-001` | Irhoud, Omo, Herto y Florisbad distribuyen expedientes relevantes entre norte, este y sur; esa distribución no prueba contemporaneidad ni flujo entre sitios. | B distribución; A límite | AUDITADO | `EVID-JEBEL-IRHOUD-MORPH-001`, `EVID-OMO-I-AGE-001`, `EVID-HERTO-001`, `EVID-FLORISBAD-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-METAPOPULATION-001` | Una metapoblación africana conecta grupos locales mediante flujo cambiante sin exigir panmixia ni especies separadas. | A-SEM; C aplicación | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001`, `EVID-WEAK-STEM-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-WEAK-STEM-2023-001` | Un modelo de tallos débilmente diferenciados y conectados por flujo ajusta LD/diversidad; sitúa divergencias entre poblaciones actuales en `120–135 ka`. | B-COND | AUDITADO | `EVID-WEAK-STEM-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-WEAK-STEM-GEOGRAPHY-LIMIT-001` | El modelo de tallo débil no localiza los tallos ni asigna fósiles; la procedencia de muestras actuales no fija geografía ancestral. | A-SEM; B aplicación | AUDITADO | `EVID-WEAK-STEM-001`, `EVID-GENOME-DIVERSITY-PANEL-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001` | `cobraa` favorece bajo su modelo una separación `~1.5 Ma` y reunión `~300 ka` con contribución aproximada `80:20`. | C | AUDITADO | `EVID-DEEP-STRUCTURE-COBRAA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-DEMOGRAPHIC-IDENTIFIABILITY-001` | Tallo débil, separación-pulso e introgresión fantasma pueden explicar señales solapadas; la familia de modelos condiciona tiempos y eventos. | A-MET; C historia | AUDITADO | `EVID-WEAK-STEM-001`, `EVID-DEEP-STRUCTURE-COBRAA-001`, `EVID-GHOST-ARCHAIC-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-ARCHAIC-GHOST-OPEN-001` | Cuatro poblaciones occidentales contienen señal compatible con aporte arcaico fantasma de `2–19 %` bajo un modelo, pero donante y distinción frente a estructura siguen abiertos. | C | AUDITADO | `EVID-GHOST-ARCHAIC-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SOUTH-AFRICA-DIVERGENCE-2017-001` | Genomas antiguos de hasta `~2 ka` permitieron estimar divergencia de poblaciones actuales en `350–260 ka`; el tiempo profundo es modelado. | B-COND | AUDITADO | `EVID-SOUTH-AFRICA-DIVERGENCE-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SOUTH-AFRICA-GENOMES-2026-001` | Veintiocho genomas de `10.2–0.15 ka` muestran diversidad y continuidad holocenas meridionales, sin observar poblaciones de `~300 ka`. | B | AUDITADO | `EVID-SOUTH-AFRICA-ANCIENT-GENOMES-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-AFRICAN-ADNA-TIME-LIMIT-001` | El ADN antiguo africano disponible para este problema es Holoceno/Pleistoceno final y no muestrea directamente el intervalo `~300–200 ka`. | A | AUDITADO | `EVID-SOUTH-AFRICA-ANCIENT-GENOMES-001`, `EVID-AFRICA-FORAGER-ADNA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-MTDNA-EVE-LIMIT-001` | La TMRCA mitocondrial identifica la genealogía de un locus materno, no una única mujer viva, población fundadora o fecha de especie. | A-SEM | AUDITADO | `EVID-MTDNA-GENEALOGY-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-COALESCENCE-SPLIT-LIMIT-001` | Coalescencia de copias génicas, separación de poblaciones y especiación no son el mismo tiempo, especialmente con flujo posterior. | A-SEM | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001`, `EVID-MTDNA-GENEALOGY-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-MSA-NOT-TAXONOMIC-001` | La Middle Stone Age es una categoría tecnológica regional y no identifica por sí sola especie ni fabricante. | A-SEM | AUDITADO | `EVID-OLORGESAILIE-MSA-001`, `EVID-AMANZI-MSA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-OLORGESAILIE-NETWORKS-001` | En Olorgesailie, MSA, pigmento y obsidiana de fuentes `≥25–50 km` apoyan movilidad o intercambio hacia `≥295–~320 ka`. | B | AUDITADO | `EVID-OLORGESAILIE-MSA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-OLORGESAILIE-GENEFLOW-LIMIT-001` | Transporte de obsidiana no mide apareamiento, flujo génico ni identidad taxonómica del fabricante. | A-SEM; B aplicación | AUDITADO | `EVID-OLORGESAILIE-MSA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-AMANZI-REGIONAL-2026-001` | Amanzi Springs conserva `~379–95 ka` y una emergencia MSA local de `~230 ± 18 ka`, distinta de trayectorias regionales más antiguas. | B-COND | AUDITADO | `EVID-AMANZI-MSA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-BEHAVIOR-MOSAIC-001` | Tecnología, pigmento y redes aparecen en combinaciones regionales y tiempos distintos; no forman un paquete conductual universal y súbito. | B | AUDITADO | `EVID-OLORGESAILIE-MSA-001`, `EVID-AMANZI-MSA-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-PAN-AFRICAN-NOT-PANMIXIA-001` | «Pan-africano» puede describir un registro distribuido sin implicar una población continental panmíctica o conectividad continua. | A-SEM; B aplicación | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001`, `EVID-WEAK-STEM-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-ORIGIN-CONFIDENCE-001` | Origen africano recibe A–B; emergencia distribuida B; modelo estructural B-COND/C; región, número y cronología de tallos C–D. | A-SEM | AUDITADO | síntesis de `EVID-SAPIENS-*`, `EVID-JEBEL-*`, `EVID-OMO-*` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-SAPIENS-SAMPLING-BIAS-001` | Preservación, excavación y muestreo genómico sobrerrepresentan algunas cuencas y poblaciones; vacíos regionales no demuestran ausencia histórica. | A-SEM; B aplicación | AUDITADO | `EVID-SAPIENS-ORIGIN-METHOD-001`, `EVID-GENOME-DIVERSITY-PANEL-001` | `INV-SAPIENS-ORIGIN-001` |
| `CLAIM-OOA-SCOPE-001` | Presencia fuera de África, movimiento, dispersión, expansión demográfica y descendencia detectable son resultados distintos. | A-SEM | AUDITADO | `EVID-OOA-METHOD-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-MULTIPLE-DISPERSALS-001` | Fósiles y contextos de Misliya, Al Wusta y Asia sudoriental demuestran que hubo múltiples dispersiones sapiens fuera de África. | B | AUDITADO | `EVID-MISLIYA-001`, `EVID-AL-WUSTA-001`, `EVID-TAM-PA-LING-001`, `EVID-LIDA-AJER-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-COUNT-LIMIT-001` | El registro no permite contar el total de cruces o salidas: un sitio, una fase, un pulso modelado y una población no son unidades equivalentes. | A-SEM; B aplicación | AUDITADO | `EVID-OOA-METHOD-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-MISLIYA-PRESENCE-001` | Misliya-1 documenta una presencia sapiens en el Levante entre `194 y 177 ka`, sin continuidad posterior demostrada. | B-COND | AUDITADO | `EVID-MISLIYA-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-APIDIMA-EARLY-OPEN-001` | Apidima 1 fue propuesto como sapiens de más de `210 ka`, pero fragmentación, reconstrucción y falta de contexto mantienen taxón y significado poblacional abiertos. | C-D | AUDITADO | `EVID-APIDIMA-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-AL-WUSTA-PRESENCE-001` | La falange de Al Wusta documenta sapiens en Arabia interior aproximadamente entre `95 y 86 ka`; el paleolago no demuestra continuidad. | B-COND | AUDITADO | `EVID-AL-WUSTA-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-TAM-PA-LING-PRESENCE-001` | Tam Pà Ling documenta sapiens en Laos al menos hacia `68 ka`, con un intervalo conservador del fósil más antiguo de `92–65 ka`. | B-COND | AUDITADO | `EVID-TAM-PA-LING-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-LIDA-AJER-PRESENCE-001` | Dientes humanos y cronología de Lida Ajer apoyan presencia en Sumatra entre `73 y 63 ka`, con asociación estratigráfica condicionada. | C-COND | AUDITADO | `EVID-LIDA-AJER-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-SAHUL-MINIMUM-LIMIT-001` | Madjedbebe propone ocupación hacia `65 ka`; incluso si se acepta, fija un mínimo de llegada a Sahul, no la fecha de salida africana o el linaje. | C-COND | AUDITADO | `EVID-SAHUL-EARLY-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-MAJOR-ANCESTRY-001` | Una expansión aproximadamente entre `70 y 50 ka` aporta la gran mayoría de la ascendencia de las poblaciones no africanas actuales. | B-COND | AUDITADO | `EVID-OOA-GENOMIC-MAJOR-001`, `EVID-NEAND-ADMIXTURE-2024-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-NEAND-CLOCK-001` | La mezcla neandertal compartida entre `50.5–43.5` o `49–45 ka` restringe una fase ancestral conectada, no la fecha ni ruta exactas de salida. | B-COND | AUDITADO | `EVID-NEAND-ADMIXTURE-2024-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-EARLY-EURASIAN-LINEAGES-001` | Ranis/Zlatý kůň, Ust’-Ishim, Oase, Bacho Kiro y Tianyuan representan ramas tempranas con contribuciones posteriores distintas. | B-COND | AUDITADO | `EVID-RANIS-ZLATY-CONTINUITY-001`, `EVID-EURASIAN-EARLY-GENOMES-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-DETECTABILITY-NOT-ZERO-DESCENT-001` | La ausencia de contribución genómica detectable no demuestra que una población no tuviera descendencia histórica. | A-SEM | AUDITADO | `EVID-OOA-METHOD-001`, `EVID-RANIS-ZLATY-CONTINUITY-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-PAPUAN-EARLY-PULSE-OPEN-001` | Una contribución papú de una expansión anterior, estimada en `~2 %` por un modelo, sigue abierta frente a modelos de una expansión mayor y estructura posterior. | C | AUDITADO | `EVID-PAPUAN-DISPERSAL-MODELS-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-PERSIAN-HUB-OPEN-001` | La meseta persa es un hub plausible entre `~70–60` y `45 ka` bajo genómica proxy y paleoclima, no una población localizada directamente. | C | AUDITADO | `EVID-PERSIAN-HUB-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-AFRICAN-NICHE-EXPANSION-001` | La amplitud de nicho humano dentro de África aumentó desde `~70 ka` y alcanzó un máximo cerca de `50 ka`; su papel causal en la expansión es condicionado. | B-COND patrón; C causa | AUDITADO | `EVID-AFRICAN-NICHE-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-DATE-OBJECT-LIMIT-001` | Edades de cuerpo, sedimento, artefacto, ocupación y mezcla modelada no son intercambiables. | A-SEM | AUDITADO | `EVID-OOA-METHOD-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-EARLY-PRESENCE-CONTINUITY-LIMIT-001` | Una presencia temprana fuera de África no demuestra continuidad local ni aporte a poblaciones posteriores. | A-SEM; B aplicación | AUDITADO | `EVID-OOA-METHOD-001`, `EVID-MISLIYA-001`, `EVID-TAM-PA-LING-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-SINGLE-SUCCESSFUL-SHORTHAND-001` | «Una salida exitosa» sólo es una abreviatura de ascendencia mayoritaria compartida; no identifica un único cruce, grupo o corredor. | A-SEM | AUDITADO | `EVID-OOA-METHOD-001`, `EVID-OOA-GENOMIC-MAJOR-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-OOA-SAMPLING-BIAS-001` | Cuevas, zonas áridas y genomas preservados sobrerrepresentan regiones y ramas; vacíos o ausencia molecular no son ausencia histórica. | A-SEM; B aplicación | AUDITADO | `EVID-OOA-METHOD-001` | `INV-SAPIENS-OoA-001` |
| `CLAIM-ASIA-SAHUL-SCOPE-001` | Presencia, cronología, corredor posible, capacidad marítima, población/ascendencia y continuidad son resultados distintos. | A-SEM | AUDITADO | `EVID-ASIA-SAHUL-METHOD-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-FUYAN-CHRONOLOGY-REVISION-001` | ADN antiguo y datación multimétodo mostraron que algunos dientes de cuevas del sur de China no heredaban la gran antigüedad de espeleotemas o sedimentos asociados. | B | AUDITADO | `EVID-FUYAN-REDATING-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SULAWESI-ART-MINIMUM-001` | Calcita sobre una plantilla de mano de Muna fija un mínimo de `67.8 ka` para el motivo; la fecha no mide directamente el pigmento y la autoría sapiens es contextual. | B-COND mínimo; C taxón | AUDITADO | `EVID-MUNA-ART-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-WALLACEA-WATER-CROSSING-001` | Aun con bajo nivel del mar, Sunda y Sahul permanecieron separados por canales de Wallacea; alcanzar Sahul exigió varios cruces de agua. | A geografía; B aplicación | AUDITADO | `EVID-WALLACEA-CROSSING-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-MARITIME-CAPACITY-001` | La colonización persistente de Sahul exige capacidad marítima suficiente y probablemente control direccional/repetición, sin identificar tipo de embarcación o técnica. | B-COND capacidad; D vehículo | AUDITADO | `EVID-WALLACEA-CROSSING-001`, `EVID-SAHUL-DEMOGRAPHY-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-LAILI-LOCAL-ABSENCE-001` | Laili conserva sedimento sin ocupación detectada entre `59 y 54 ka` y un inicio intenso hacia `44 ka`; la ausencia es local, no regional. | B-LOCAL; D regional | AUDITADO | `EVID-LAILI-SEQUENCE-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-ASIA-SAHUL-ROUTES-OPEN-001` | Modelos de coste, visibilidad y paleocorrientes favorecen variantes norte o mixtas, pero ninguna ruta completa ha sido observada y opciones meridionales siguen abiertas. | C | AUDITADO | `EVID-SAHUL-ROUTE-MODELS-001`, `EVID-LAILI-SEQUENCE-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-ARRIVAL-WINDOW-001` | Múltiples contextos hacen firme el poblamiento de Sahul hacia `~50–45 ka`; una llegada `~65 ka` depende de la asociación estratigráfica de Madjedbebe. | B ventana; C-COND extremo | AUDITADO | `EVID-SAHUL-ARRIVAL-001`, `EVID-SAHUL-EARLY-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-RAPID-DISPERSAL-001` | Ocupación temprana de ambientes tropicales y de altura y modelos espaciales hacen viable una expansión continental en pocos milenios, no miden una velocidad histórica única. | B adaptación; C-MOD tasa | AUDITADO | `EVID-SAHUL-ARRIVAL-001`, `EVID-SAHUL-DISPERSAL-MODEL-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-FOUNDING-SIZE-MODEL-001` | Un modelo estima `1,300–1,550` fundadores censales o llegadas repetidas de `≥130` personas durante `~700–900` años; son condiciones de viabilidad, no un censo. | C-MOD | AUDITADO | `EVID-SAHUL-DEMOGRAPHY-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-GENETIC-DIVERGENCE-001` | Genomas actuales modelan separación papú–australiana en `25–40 ka` o `~47 ka` (`95 % HPD 27–64 ka`); ninguna estimación fecha el desembarco. | C-MOD | AUDITADO | `EVID-SAHUL-DIVERGENCE-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-REGIONAL-STRUCTURE-001` | Autosomas y mitogenomas apoyan estructura regional australiana profunda; continuidad biológica parcial no equivale a identidad cultural o lingüística inmutable. | B patrón; C-MOD tiempos | AUDITADO | `EVID-SAHUL-STRUCTURE-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-DENISOVAN-WALLACEA-OPEN-001` | Papúes conservan varias ascendencias denisovanas divergentes, pero genomas actuales no localizan con seguridad la mezcla ni identifican un fósil donante en Wallacea. | B señal; C-D geografía | AUDITADO | `EVID-PAPUAN-DENISOVAN-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-DROWNED-RECORD-001` | Costas y plataformas pleistocenas hoy sumergidas introducen un sesgo de preservación espacial; vacíos terrestres no prueban ausencia humana. | A-SEM; B aplicación | AUDITADO | `EVID-ASIA-SAHUL-METHOD-001`, `EVID-SAHUL-ROUTE-MODELS-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-SAHUL-GENOMIC-GOVERNANCE-001` | Consentimiento, gobernanza indígena, selección comunitaria y acceso forman parte de la procedencia y límites de los datos genómicos de Sahul. | A-MET | AUDITADO | `EVID-SAHUL-STRUCTURE-001` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-ASIA-SAHUL-CONFIDENCE-001` | Cruces de agua y poblamiento `~50–45 ka` reciben A–B; extremos tempranos B-COND/C; ruta, fundadores y divergencias C-MOD; vehículo y continuidad cultural D. | A-SEM | AUDITADO | síntesis de `EVID-ASIA-SAHUL-*`, `EVID-SAHUL-*` | `INV-MIGR-ASIA-AUS-001` |
| `CLAIM-EUROPE-ARRIVAL-SCOPE-001` | Presencia fósil, atribución taxonómica, tecnocomplejo, intervalo, solapamiento, contacto, mestizaje, contribución y desaparición son resultados distintos y dependientes de escala. | A-SEM | AUDITADO | `EVID-EUROPE-METHOD-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-EUROPE-EARLY-INCURSIONS-001` | Apidima y Mandrin, aun si se confirman, registrarían episodios anteriores condicionados y no una única población fundadora o continuidad hasta `~45 ka`. | C-D | AUDITADO | `EVID-APIDIMA-001`, `EVID-MANDRIN-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-MANDRIN-PRESENCE-OPEN-001` | Mandrin capa E propone sapiens `56.8–51.7 ka cal BP` mediante un molar y el Neroniano, pero taxón y asociación siguen disputados. | C-COND | AUDITADO | `EVID-MANDRIN-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-BACHO-KIRO-PRESENCE-001` | Restos identificados por morfología, proteómica y mtDNA sitúan sapiens en el IUP de Bacho Kiro aproximadamente `46–44 ka`. | B | AUDITADO | `EVID-BACHO-KIRO-EUROPE-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-RANIS-LRJ-SAPIENS-001` | Restos humanos con mtDNA y fechas directas asocian sapiens con el LRJ de Ranis `~47–42 ka`; la asociación no se universaliza a todo LRJ. | B local; C extensión | AUDITADO | `EVID-RANIS-LRJ-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-ZLATY-KUN-RANIS-POPULATION-001` | Genomas de Ranis y Zlatý kůň representan una población temprana emparentada sin contribución posterior detectable; Zlatý kůň carece de tecnocomplejo seguro. | B-COND | AUDITADO | `EVID-RANIS-ZLATY-CONTINUITY-001`, `EVID-ZLATY-KUN-AGE-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-TECHNOCOMPLEX-TAXON-LIMIT-001` | Una asociación local entre resto diagnóstico e industria no convierte el tecnocomplejo en taxón universal. | A-SEM | AUDITADO | `EVID-EUROPE-METHOD-001`, `EVID-ITALY-TECHNOCOMPLEX-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-ULUZZIAN-ATTRIBUTION-CONDITIONAL-001` | Los molares de Cavallo apoyan una asociación sapiens–Uluzziense, condicionada por la controversia sobre integridad y procedencia. | C-COND | AUDITADO | `EVID-ITALY-TECHNOCOMPLEX-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-PROTOAURIGNACIAN-SAPIENS-001` | Diente de Bombrini y mtDNA de Fumane apoyan fabricantes sapiens del Protoauriñaciense en esos contextos, no en cada conjunto homónimo. | B-COND | AUDITADO | `EVID-ITALY-TECHNOCOMPLEX-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-EUROPE-OVERLAP-MOSAIC-001` | Los intervalos de sapiens y neandertales se solapan de forma regionalmente variable; Europa, región, sitio y capa no producen la misma duración. | B-COND | AUDITADO | `EVID-EUROPE-DISAPPEARANCE-001`, `EVID-REGIONAL-OVERLAP-001`, `EVID-ITALY-TRANSITION-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-REGIONAL-OVERLAP-NOT-CONTACT-001` | La intersección de intervalos de primera/última aparición demuestra coexistencia cronológica en una escala, no encuentro, intercambio o flujo local. | A-SEM; B aplicación | AUDITADO | `EVID-EUROPE-METHOD-001`, `EVID-NW-NEAND-2026-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-NEAND-DISAPPEARANCE-REGIONAL-001` | Las últimas apariciones neandertales son asincrónicas y modeladas; no fijan un día continental de extinción. | B-COND | AUDITADO | `EVID-EUROPE-DISAPPEARANCE-001`, `EVID-REGIONAL-OVERLAP-001`, `EVID-ITALY-TRANSITION-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-RECENT-ADMIXTURE-EUROPE-001` | Individuos de Bacho Kiro y Oase tuvieron ancestros neandertales en pocas generaciones, prueba de mestizaje genealógico sin localizar cada encuentro. | B | AUDITADO | `EVID-EUROPE-RECENT-ADMIXTURE-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-SHARED-NEAND-ADMIXTURE-WINDOW-001` | Genomas estiman el episodio compartido de mezcla en `~50.5–43.5 ka` o `~49–45 ka`; el reloj no proporciona una coordenada europea. | B señal; C-MOD tiempo; D lugar | AUDITADO | `EVID-SHARED-ADMIXTURE-CLOCK-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-NW-NEAND-NO-RECENT-FLOW-2026-001` | En 27 restos neandertales de 10 sitios del noroeste europeo no se detectó flujo sapiens reciente, pese al solapamiento temporal; el límite es regional y muestral. | B-REG; D global | AUDITADO | `EVID-NW-NEAND-2026-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-NEAND-GENETIC-DETERIORATION-LIMIT-2026-001` | La muestra tardía del noroeste no muestra acumulación progresiva de carga, pérdida de heterocigosidad o aumento de HBD que sustente deterioro genético como causa general. | B-REG; D causa global | AUDITADO | `EVID-NW-NEAND-2026-001`, `EVID-THORIN-ISOLATION-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-EUROPE-REPLACEMENT-NOT-SINGLE-EVENT-001` | El reemplazo describe cambios regionales de presencia y frecuencia, compatibles con absorción parcial; no identifica un mecanismo único ni una escena observada. | A-SEM; C causal | AUDITADO | `EVID-EUROPE-DISAPPEARANCE-001`, `EVID-EUROPE-RECENT-ADMIXTURE-001`, `EVID-NW-NEAND-2026-001` | `INV-MIGR-EUROPE-001` |
| `CLAIM-EUROPE-COEXISTENCE-CONFIDENCE-001` | Presencia Bacho/Ranis y mestizaje individual reciben B; solapamiento/tecnocomplejos B-COND; Mandrin/Apidima C-D; contacto desde fechas, lugar del pulso y causa única D. | A-SEM | AUDITADO | síntesis de `EVID-EUROPE-*`, `EVID-RANIS-*`, `EVID-NW-NEAND-*` | `INV-MIGR-EUROPE-001` |
| `CLAIM-AMERICAS-SCOPE-001` | Fecha de muestra, presencia local, primer poblamiento, expansión demográfica, corredor viable, ruta usada y estructura genética son resultados distintos y dependientes de escala. | A-SEM | AUDITADO | `EVID-AMERICAS-METHOD-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-WHITE-SANDS-LGM-PRESENCE-001` | Huellas, `14C` de semillas/polen, OSL y geocronología paleolacustre sostienen presencia humana local en White Sands aproximadamente `23–21 ka`. | B-LOCAL | AUDITADO | `EVID-WHITE-SANDS-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-WHITE-SANDS-ROUTE-LIMIT-001` | La edad de White Sands no fecha la primera entrada, identifica población ni selecciona una ruta continental. | A-SEM; B aplicación | AUDITADO | `EVID-WHITE-SANDS-001`, `EVID-AMERICAS-METHOD-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-BLUEFISH-PRESENCE-CONDITIONAL-001` | Un pequeño conjunto de huesos con marcas y AMS, incluida una pieza de `~24 ka cal BP`, favorece presencia humana en Beringia oriental si el diagnóstico tafonómico es correcto. | C-COND | AUDITADO | `EVID-BLUEFISH-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-PRECLOVIS-ANCHORS-001` | Cooper’s Ferry/Nipéhe, Page-Ladson, Paisley, Friedkin y Gault documentan múltiples presencias/tradiciones pre-Clovis entre aproximadamente `16 y 14 ka`, con independencia desigual. | B-COND | AUDITADO | `EVID-COOPERS-FERRY-001`, `EVID-PRECLOVIS-ANCHORS-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-COOPERS-FERRY-CONDITIONAL-001` | Rasgos, líticos y cronología sitúan ocupación en Cooper’s Ferry/Nipéhe cerca de `16 ka`; semejanza con puntas asiáticas no demuestra genealogía o ruta transpacífica. | B-COND local; D ruta | AUDITADO | `EVID-COOPERS-FERRY-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-MONTE-VERDE-CHRONOLOGY-OPEN-2026-001` | La edad `~14.5 ka` de MV-II está reabierta por una redatación independiente de 2026 que propone Holoceno medio; equivalencia de unidades, tefra y objetos asociados siguen disputados. | D/ABIERTA | AUDITADO | `EVID-MONTE-VERDE-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-CLOVIS-TECHNOCOMPLEX-001` | Clovis fue un tecnocomplejo extendido aproximadamente `13,050–12,750 cal BP`, no la primera población ni un marcador biológico universal. | B cronología; A-SEM límite | AUDITADO | `EVID-CLOVIS-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-PACIFIC-COAST-VIABILITY-001` | Sectores del corredor costero nororiental del Pacífico estaban desglaciados y ecológicamente productivos hacia `~17 ka`; esto demuestra viabilidad regional, no uso humano. | B ambiente; C uso | AUDITADO | `EVID-PACIFIC-COAST-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-ICE-FREE-CORRIDOR-LATE-001` | El corredor interior quedó completamente abierto cerca de `13.8 ± 0.5 ka` y su viabilidad biológica fue escalonada; pudo servir movimientos posteriores, no explica por sí solo presencias más antiguas al sur. | B-COND apertura; D uso inicial | AUDITADO | `EVID-ICE-FREE-CORRIDOR-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-AMERICAS-ROUTES-OPEN-001` | Costa del Pacífico, corredor interior en fases posteriores y rutas mixtas son compatibles en grados distintos; ninguna trayectoria completa está observada ni existe una ruta única establecida. | C | AUDITADO | `EVID-PACIFIC-COAST-001`, `EVID-ICE-FREE-CORRIDOR-001`, `EVID-AMERICAS-METHOD-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-SUBMERGED-RECORD-001` | Paleocostas hoy sumergidas producen un sesgo espacial real, pero no sustituyen evidencia positiva ni vuelven infalsable una ruta costera. | A-SEM; B aplicación | AUDITADO | `EVID-PACIFIC-COAST-001`, `EVID-AMERICAS-METHOD-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-BERINGIAN-STANDSTILL-MODEL-001` | Un intervalo de aislamiento/estructura beringiana es favorecido por modelos genómicos, pero no corresponde a una aldea, duración única o punto de entrada observados. | B-COND estructura; D geografía fina | AUDITADO | `EVID-BERINGIAN-GENOMICS-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-ANCIENT-BERINGIANS-001` | El genoma USR1 de `~11.5 ka` representa una rama Ancient Beringian; su separación modelada no fecha el cruce continental. | B-COND | AUDITADO | `EVID-ANCIENT-BERINGIAN-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-GENOMIC-SPLIT-NOT-ENTRY-001` | Una separación coalescente o de ramas genéticas no proporciona por sí sola fecha, lugar o número de entradas a las Américas. | A-SEM; B aplicación | AUDITADO | `EVID-BERINGIAN-GENOMICS-001`, `EVID-ANCIENT-BERINGIAN-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-AMERICAS-INTERNAL-DISPERSALS-2026-001` | Un estudio de 128 genomas actuales, integrado con genomas antiguos, favorece al menos tres dispersiones hacia Sudamérica y afinidad australasiana regional; describe historia posterior bajo modelo, no la entrada. | B-COND patrón; C-MOD historia | AUDITADO | `EVID-AMERICAS-INTERNAL-DISPERSALS-2026-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-AMERICAS-GENOMIC-GOVERNANCE-001` | Consentimiento, acuerdos comunitarios, devolución de resultados, acceso controlado y representatividad forman parte de la procedencia y límites de datos genómicos indígenas. | A-MET | AUDITADO | `EVID-AMERICAS-INTERNAL-DISPERSALS-2026-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-EXTREME-SITES-OPEN-001` | Cerutti y Chiquihuite conservan edades o contextos reales, pero la agencia humana/artefactualidad no excluye suficientemente alternativas para fijar una ocupación extrema o ruta. | D Cerutti; C-D-COND Chiquihuite | AUDITADO | `EVID-AMERICAS-EXTREME-SITES-001` | `INV-MIGR-AMERICAS-001` |
| `CLAIM-AMERICAS-CONFIDENCE-001` | White Sands local y pre-Clovis tardío reciben B; anclas/corredores/genomas B-COND–C; Bluefish C-COND; Monte Verde 2026, Cerutti, ruta única y split como entrada permanecen D/abiertos. | A-SEM | AUDITADO | síntesis de `EVID-AMERICAS-*`, `EVID-WHITE-SANDS-*`, `EVID-PRECLOVIS-*` | `INV-MIGR-AMERICAS-001` |

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

## Línea temática CIV-001 — Procesos, cronologías y categorías

### CLAIM-CIV-CATEGORY-001 / DATING-CONTEXT-001 / SEQUENCE-NONUNIVERSAL-001

- **Separación:** «civilización» se despliega en variables; una fecha pertenece primero a una muestra; el orden de variables se prueba por región.
- **Resultado:** los casos comparados contradicen una cadena necesaria y universal entre sedentarismo, agricultura, ciudad, escritura y Estado.
- **Límite:** negar una secuencia universal no niega correlaciones históricas locales ni autoriza una causalidad alternativa única.

### CLAIM-CIV-SEDENTISM-BEFORE-AGRICULTURE-001 / STORAGE-BEFORE-DOMESTICATION-001

- **Archivos:** cambio de proporciones entre ratón doméstico y silvestre en ʿAin Mallaha; estructuras elevadas interpretadas como graneros en Dhra’.
- **Resultado:** movilidad residencial reducida y almacenamiento pueden anteceder a agricultura y domesticación morfológica.
- **Límite:** no quedan demostradas residencia anual, contenido almacenado, propiedad ni desigualdad.

### CLAIM-CIV-DOMESTICATION-MULTIREGIONAL-001 / KUK-CULTIVATION-001 / GUILA-CUCURBITA-001 / RICE-TRAJECTORY-001

- **Archivos:** suelos y rasgos de cultivo, morfología vegetal, fitolitos, bases de espiguilla y series `14C` en regiones distintas.
- **Resultado:** manejo, cultivo, domesticación morfológica y dependencia son transiciones separables, graduales y repetidas.
- **Límite:** cada caso es local y preserva especies, resoluciones y puentes diferentes; no constituye una trayectoria global completa.

### CLAIM-CIV-URBANISM-MULTIPATH-001 / WRITING-ADMIN-001 / INEQUALITY-PROXY-001

- **Archivos:** prospección de asentamientos, una tablilla catalogada y tamaño de vivienda en una muestra comparativa.
- **Resultado:** el urbanismo tuvo pulsos regionales múltiples; escritura documenta operaciones; vivienda puede aproximar desigualdad material.
- **Límite:** ciudad, administración y Estado no son equivalentes; una tablilla no mide territorio y un Gini de casas no observa riqueza total.
## Investigación 037 — Australopitecos y Paranthropus

### CLAIM-AUSTRALOPITH-SCOPE-001 / TAXONOMY-001 / DIVERSITY-001 / ANCESTRY-LIMIT-001

- **Separación:** especie, rango, función y genealogía son operaciones distintas.
- **Resultado:** múltiples morfologías y solapamientos sustituyen una etapa australopiteca única.
- **Límite:** el taxón más antiguo o parecido a `Homo` no es ancestro directo demostrado.

### CLAIM-AUSTRALOPITH-AGE-CONTEXT-001

- **Objeto:** toba, polaridad, calcita, sedimento o enterramiento cosmogénico.
- **Puente:** procedencia y modelo de depósito asignan edad al fósil.
- **Límite:** extremos fósiles son mínimos/máximos muestreados, no eventos biológicos exactos.

### CLAIM-AUSTRALOPITH-LOCOMOTION-MOSAIC-001 / AFAR-BIPED-001 / AFAR-ARBOREAL-001

- **Archivo:** pelvis, fémur, escápula, falanges, pie y huellas cambian región y escala.
- **Resultado:** bipedalidad habitual coexistió con capacidad arbórea variable.
- **Límite:** capacidad anatómica no cuantifica tiempo ni conducta observada.

### CLAIM-AUSTRALOPITH-DIET-PROXY-001 / AFAR-DIET-001 / PBOISEI-DIET-001

- **Ventanas:** anatomía mide capacidad; `δ13C` base C3/C4; microdesgaste contacto reciente; cálculo residuos preservados.
- **Resultado:** `P. boisei` muestra C4 dominante y otros taxones dietas variables.
- **Límite:** ningún proxy identifica solo el menú taxonómico o la extinción.

### CLAIM-AUSTRALOPITH-TOOL-ATTRIBUTION-001 / PARANTHROPUS-TOOL-LIMIT-001

- **Observación:** artefactos, marcas, fauna procesada y dientes pueden compartir contexto.
- **Puente:** diagnóstico tafonómico identifica acción; asociación independiente debería identificar productor.
- **Límite:** Lomekwi, Dikika y Nyayanga no firman una especie fabricante.

### CLAIM-AANAMENSIS-AGE-001 / BIPED-001 / MRD-001 / OVERLAP-001

- **Archivo:** Kanapoi/Allia Bay más cráneo MRD de Woranso-Mille.
- **Resultado:** `~4.2–3.8 Ma`, carga bípeda y morfología craneal distinguible.
- **Actualización:** solapamiento ≥`~100 kyr` con `A. afarensis` debilita anagénesis estricta.

### CLAIM-AFAR-AGE-001 / LAETOLI-001

- **Rango:** `~3.9–2.9 Ma`, con precisión local desigual.
- **Conducta:** Laetoli conserva pisadas bípedas y más de un patrón plausible.
- **Límite:** huella y biomecánica no identifican taxón sin puente adicional.

### CLAIM-MIDDLE-PLIOCENE-DIVERSITY-001 / ADEYIREMEDA-FOOT-001 / KENYANTHROPUS-STATUS-001

- **Resultado:** varias formas coetáneas son plausibles, no igualmente seguras.
- **2025:** nuevos dientes/mandíbulas fortalecen `A. deyiremeda`, dieta C3 y atribución del pie BRT.
- **Límite:** pie no articulado; `Kenyanthropus` conserva deformación y muestra pequeña.

### CLAIM-AAFRICANUS-AGE-001 / AFRICANUS-MOSAIC-001

- **Reloj:** cuevas exigen fechar proceso y asociación; `Little Foot` tiene `3.67 ± 0.16 Ma` bajo enterramiento modelado.
- **Biología:** locomoción y dieta cambian entre individuos/ventanas.
- **Límite:** una cueva, un cráneo juvenil o un esqueleto no agotan la especie.

### CLAIM-AGARHI-STATUS-001 / ASEDIBA-AGE-001 / ASEDIBA-MOSAIC-001

- **Resultado:** ambos taxones conservan mosaicos relevantes para discutir el origen de `Homo`.
- **Fortaleza:** Malapa asocia regiones corporales y fecha cerca de `1.98 Ma`.
- **Límite:** candidatura o semejanza no resuelven topología ni ancestro directo.

### CLAIM-PARANTHROPUS-DEFINITION-001 / MONOPHYLY-001 / AFAR-2026-001

- **Definición:** robustez masticatoria es un paquete anatómico, no dieta observada.
- **2026:** MLP-3000 amplía presencia temprana/geográfica del género.
- **Límite:** especie de MLP-3000 y monofilia del género permanecen condicionadas.

### CLAIM-PBOISEI-HAND-2025-001 / PROBUSTUS-MICROEVOLUTION-001

- **Asociación:** KNM-ER 101000 une mano/pie y material diagnóstico de `P. boisei`.
- **Cambio:** DNH 155 recupera evolución temporal donde dimorfismo era explicación principal.
- **Límite:** un individuo o secuencia regional no define conducta/tendencia universal.

## Investigación 038 — Homo temprano

### CLAIM-HOMO-EARLY-SCOPE-001 / GENUS-DEFINITION-001 / TAXONOMY-MOSAIC-001 / ANCESTRY-LIMIT-001

- **Archivo:** fósiles fragmentarios, contextos geológicos, artefactos y biomoléculas con cadenas separadas.
- **Resultado:** `Homo` temprano es una diversidad ramificada y mosaico; no existe un umbral único que defina el género.
- **Límite:** afinidad, edad y semejanza no identifican una especie ni un ancestro directo.

### CLAIM-HOMO-LEDI-AGE-001 / LEDI-IDENTITY-001

- **Observación:** LD 350-1 está entre `2.80–2.75 Ma`; dientes de Ledi-Geraru registran `Homo` a `2.78/2.59 Ma`.
- **Puente:** caracteres mandibulares/dentales comparados apoyan afinidad genérica.
- **Límite:** restos fragmentarios no resuelven especie o genealogía.

### CLAIM-HABILIS-OH7-001 / HABILIS-DIVERSITY-001 / RUDOLFENSIS-DISTINCT-001

- **Archivo:** OH 7 reconstruido, dientes y fósiles de Koobi Fora.
- **Resultado:** hay más de una combinación morfológica contemporánea en el `Homo` temprano.
- **Límite:** composición del hipodigma de `habilis` y rango de `rudolfensis` dependen del modelo taxonómico.

### CLAIM-HOMO-EARLY-COEXISTENCE-001 / ERECTUS-EARLIEST-001 / ERECTUS-HABILIS-OVERLAP-001

- **Cronología:** Drimolen/Turkana sitúan candidatos tempranos de `erectus` hacia `~2 Ma`; Ileret extiende el solapamiento con `habilis`.
- **Resultado:** coexistencia sustituye la narrativa de reemplazo instantáneo.
- **Límite:** extremos son detecciones condicionadas por muestra, contexto y diagnóstico.

### CLAIM-ERECTUS-MOSAIC-001 / ERECTUS-ERGASTER-TAXONOMY-001 / ERECTUS-BODY-001

- **Archivo:** DAN5 reconstruido y el esqueleto juvenil KNM-WT 15000.
- **Resultado:** miembros largos coexistieron con cráneos pequeños y combinaciones regionales variables.
- **Límite:** un individuo completo no vuelve uniforme a la especie; `ergaster/erectus` sigue siendo una decisión taxonómica.

### CLAIM-ERECTUS-RANGE-001 / DMANISI-AGE-001 / DMANISI-VARIATION-001 / DMANISI-GROWTH-001

- **Presencia:** Dmanisi registra ocupación `1.85–1.78 Ma` y gran variación craneal local.
- **Ontogenia:** D2700 murió a `11.4 ± 0.6` años bajo lectura microestructural y muestra crecimiento mosaico.
- **Límite:** sitio, población e individuo no representan automáticamente todo `Homo` temprano.

### CLAIM-ASIA-EARLY-TOOLS-001 / JAVA-CHRONOLOGY-001

- **Asia:** Shangchen documenta artefactos a `~2.12 Ma` sin fósil; Sangiran registra `H. erectus` local cerca de `1.3 Ma` y Ngandong hasta `117–108 ka`.
- **Límite:** primera/última detección no equivalen a llegada/extinción, y una industria no identifica taxón.

### CLAIM-HOMO-TOOLS-ATTRIBUTION-001 / OLDOWAN-CONTINUITY-2025-001 / ACHEULEAN-EARLY-001 / BONE-TOOLS-2025-001

- **Observación:** Namorotukunan conserva Oldowan `2.75–2.44 Ma`, Kokiselei Achelense `~1.76 Ma` y Olduvai herramientas óseas `~1.5 Ma`.
- **Resultado:** hay continuidad, coexistencia y diversificación técnica.
- **Límite:** el productor taxonómico permanece abierto en los tres expedientes.

### CLAIM-ERECTUS-PROTEINS-2026-001 / ERECTUS-INTROGRESSION-LIMIT-001

- **Observación:** seis esmaltes chinos preservan péptidos y dos variantes AMBN compartidas.
- **Resultado:** el archivo molecular de `H. erectus` ya no es exclusivamente morfológico.
- **Límite:** proteína no es ADN; pocas posiciones no demuestran por sí solas introgresión ni una población donante.

## Investigación 039 — Homo del Pleistoceno medio

### CLAIM-HOMO-MIDDLE-SCOPE-001 / TIMEBIN-001 / TAXONOMY-001

- **Separación:** intervalo, tipo, hipodigma, paleodemo, región, molécula y conducta no son equivalentes.
- **Resultado:** el Chibaniense contiene poblaciones diferenciadas, no una especie formal única.
- **Límite:** una categoría temporal o grado morfológico no resuelve taxonomía.

### CLAIM-HEIDELBERGENSIS-TYPE-001 / MAUER-AGE-001 / MAUER-LIMIT-001

- **Objeto:** la mandíbula de Mauer porta el nombre y fecha `609 ± 40 ka`.
- **Resultado:** la edad del tipo está mejor resuelta que el alcance de su especie.
- **Límite:** no existe cráneo tipo; hipodigmas amplios requieren puente explícito.

### CLAIM-ANTECESSOR-PROTEOME-001 / CASABLANCA-773KA-2026-001 / CASABLANCA-AFFINITY-001

- **Borde:** TD6 y Casablanca muestran poblaciones distintas cerca de `~770 ka`.
- **Resultado:** proteínas y morfología restringen vecindad del nodo sapiens–neandertal/denisovano.
- **Límite:** basal o grupo hermano no significa ancestro directo.

### CLAIM-SIMA-AGE-001 / MORPH-MOSAIC-001 / MTDNA-001 / NUCLEAR-001 / DISCORDANCE-001

- **Paleodemo:** `~430 ka`, al menos 28 individuos y 17 cráneos reconstruidos.
- **Moléculas:** mtDNA de afinidad denisovana; nuclear de afinidad neandertal.
- **Límite:** la discordancia es observada; su mecanismo demográfico no.

### CLAIM-AROEIRA-MOSAIC-001 / TECH-LIMIT-001 / BODO-DEFLESHING-001 / MOTIVE-LIMIT-001

- **Observación:** Aroeira combina fósil, Achelense y fuego; Bodo conserva marcas de corte.
- **Resultado:** diversidad anatómica y acciones/asociaciones locales.
- **Límite:** ni industria identifica especie ni marca identifica motivo.

### CLAIM-KABWE-AGE-001 / AFRICA-MIDDLE-DIVERSITY-001 / HOMO-MIDDLE-REGIONAL-001

- **Reloj:** Kabwe tiene `299 ± 25 ka`, no una edad heredada por semejanza.
- **Resultado:** África conserva diversidad y estructura regional plausibles.
- **Límite:** un ancestro virtual es salida de modelo, no fósil.

### CLAIM-BODOENSIS-PROPOSAL-001 / BODOENSIS-STATUS-001

- **Hecho:** la especie fue propuesta y recibió una refutación nomenclatural/evolutiva.
- **Estado:** propuesta controvertida.
- **Límite:** objetivo decolonial, validez de nombre y coherencia biológica son pruebas distintas.

### CLAIM-HARBIN-MORPH-NAME-001 / HARBIN-DENISOVAN-2025-001

- **Cambio:** `H. longi` fue propuesto por morfología; proteína y mtDNA vinculan el individuo con denisovanos.
- **Resultado:** afinidad poblacional fuerte para un cráneo casi completo.
- **Límite:** “denisovano” no fija por sí solo rango zoológico o sinonimia.

## Investigación 040 — Neandertales, denisovanos y mestizaje

### CLAIM-NEAND-DENIS-SCOPE-001 / NEAND-OPERATIONAL-001 / DENISOVAN-OPERATIONAL-001

- **Separación:** fósil, referencia molecular, individuo, población y segmento retenido no son equivalentes.
- **Resultado:** neandertales tienen expediente fósil y genómico; denisovanos nacen como rama molecular después conectada a formas.
- **Límite:** ningún genoma o proteoma individual define todo el rango ni resuelve el nombre zoológico.

### CLAIM-NEAND-MTDNA-1997-001 / GENOME-2010-001 / ANCESTRY-SHARED-001

- **Historia:** mtDNA no mostró contribución materna; nuclear reveló asimetría y flujo.
- **Reloj:** dos análisis de 2024 sitúan el periodo compartido en `50.5–43.5` y `49–45 ka`.
- **Límite:** un intervalo de flujo no es un encuentro único ni excluye episodios locales.

### CLAIM-ARCHAIC-PERCENT-LIMIT-001 / NEAND-SELECTION-001

- **Medida:** fracción de tractos reconocidos bajo referencia, filtro y denominador.
- **Transformación:** recombinación, selección, deriva y migración cambian el mosaico.
- **Límite:** porcentaje no es identidad total, cuerpo, número de ancestros ni mezcla inicial.

### CLAIM-OASE-RECENT-NEAND-001 / BACHO-RECENT-NEAND-001 / SAPIENS-TO-NEAND-001

- **Individuos:** Oase y Bacho Kiro conservan ancestros neandertales recientes.
- **Dirección:** neandertales también recibieron flujo de poblaciones relacionadas con sapiens.
- **Límite:** linajes antiguos pueden no aportar a poblaciones posteriores muestreadas.

### CLAIM-LATE-NEAND-STRUCTURE-001 / SOCIAL-LOCAL-001 / LAST-DETECTION-001

- **Poblaciones:** geografía predice parte de afinidad y el Altái conserva una pequeña comunidad emparentada.
- **Final:** últimas detecciones se concentran cerca de `40 ka` regionalmente.
- **Límite:** dos cuevas no definen la sociedad neandertal; última detección no es último individuo.

### CLAIM-DENISOVA-MTDNA-2010-001 / GENOME-2010-001 / CAVE-CHRONOLOGY-2025-001

- **Descubrimiento:** una falange reveló primero mtDNA y después una rama nuclear hermana de neandertales.
- **Cueva:** `150` edades y `963` sedimentos documentan recurrencias desde `~250 ka`.
- **Límite:** presencia de linaje en sedimento no identifica cuerpos o industrias.

### CLAIM-XIAHE-DENISOVAN-001 / BAISHIYA-DENISOVAN-001 / PENGHU-DENISOVAN-2025-001

- **Expansión:** proteínas y sedimentos conectan Altái, meseta tibetana y margen subtropical.
- **Penghu:** afinidad/sexo son fuertes; edad queda en dos ventanas.
- **Límite:** fósiles asiáticos parecidos sin biomoléculas siguen siendo candidatos.

### CLAIM-DENISOVA11-F1-001 / DENISOVA11-OLDER-FLOW-001

- **Directo:** el genoma demuestra madre neandertal y padre denisovano.
- **Profundo:** el padre ya portaba ancestría neandertal anterior.
- **Límite:** un F1 prueba acontecimiento y posibilidad, no frecuencia universal.

### CLAIM-DENISOVAN-MELANESIAN-001 / MULTIPULSE-001

- **Resultado:** Oceanía y Asia conservan señales de donantes denisovanos diferenciados.
- **Límite:** Altái es referencia, no donante universal ni inventario completo de ramas.

### CLAIM-EPAS1-DENISOVAN-001 / ADAPTIVE-INTROGRESSION-LIMIT-001

- **Convergencia:** afinidad del haplotipo, frecuencia y selección apoyan introgresión adaptativa.
- **Límite:** fuente exacta, fondo genético, mecanismo y ventaja en cada ambiente se separan.

### CLAIM-ADMIXTURE-STRUCTURE-ADVERSARY-001 / INTERBREEDING-TAXON-LIMIT-001

- **Adversario:** estructura ignorada puede crear falsos pulsos en simulaciones.
- **Resistencia:** pedigree F1 y tractos muy largos no dependen del mismo modo de ese adversario.
- **Taxonomía:** compatibilidad reproductiva y nombre de especie no son la misma prueba.

## Investigación 041 — *Homo floresiensis*, *H. luzonensis*, *H. naledi* y diversidad tardía

### CLAIM-HOMO-OTHER-SCOPE-001 / TAXONOMY-SPECIES-LIMIT-001 / LATE-DIVERSITY-NONLINEAR-001

- **Separación:** taxón, presencia, capacidad, conducta, autor y genealogía son salidas distintas.
- **Patrón:** poblaciones anatómicamente mosaico persistieron tardíamente en Asia insular y África.
- **Límite:** coexistencia continental no prueba encuentro y un nombre no observa aislamiento reproductivo.

### CLAIM-FLORES-TAXON-001 / MOSAIC-001 / PATHOLOGY-LIMIT-001

- **Base:** LB1 y restos de más individuos conservan una combinación repetida y no moderna normal.
- **Adversario:** patologías específicas deben compararse, pero no explican por sí solas todo el hipodigma ni Mata Menge.
- **Límite:** diagnóstico taxonómico y normalidad clínica individual no son la misma pregunta.

### CLAIM-FLORES-CHRONOLOGY-2016-001 / WOLO-SEGE-001 / MATA-MENGE-AGE-001

- **Tres relojes:** tecnología antes de `1.02 Ma`, cuerpos cerca de `700 ka` y cuerpos tipo `~100–60 ka`.
- **Corrección:** una inconformidad eliminó la asociación de LB1 con sedimentos cercanos a `12 ka`.
- **Límite:** herramienta antigua, cuerpo intermedio y taxón tardío no forman automáticamente una genealogía continua.

### CLAIM-MATA-MENGE-AFFINITY-001 / BODY-2024-001 / FLORES-ORIGIN-OPEN-001

- **Resultado:** dientes, mandíbula y un húmero adulto apoyan una población muy pequeña hacia `700 ka`.
- **Modelo favorecido:** reducción insular desde `H. erectus` asiático.
- **Límite:** húmero incompleto, intervalo largo y homoplasia impiden observar al ancestro.

### CLAIM-FLORES-BEHAVIOR-2026-001 / CLIMATE-2025-001 / SAPIENS-CONTACT-OPEN-001

- **Conducta:** marcas prueban acceso a carcasas; carroñeo es favorecido y fuego local no está demostrado.
- **Ambiente:** aridificación converge con la última presencia fósil sin probar extinción monocausal.
- **Contacto:** la señal sapiens local es posterior; encuentro o exterminio siguen abiertos.

### CLAIM-LUZON-TAXON-001 / CALLAO-DATE-001 / KALINGA-001

- **Callao:** trece elementos sostienen un taxón tardío y un metatarsiano tiene mínimo `66.7 ± 1 ka`.
- **Kalinga:** carnicería y herramientas prueban presencia hacia `709 ± 68 ka`.
- **Límite:** seis siglos de milenios y ausencia de fósil impiden asignar fabricante o continuidad.

### CLAIM-LUZON-PHYLOGENY-2026-001 / ISLAND-CROSSING-LIMIT-001

- **Filogenia:** dientes e índices favorecen afinidad con `H. erectus`; árboles anatómicos discordantes mantienen C.
- **Dispersión:** alcanzar islas exige cruzar agua, no intención náutica demostrada.

### CLAIM-NALEDI-TAXON-001 / MOSAIC-001 / DATE-001 / LESEDI-001

- **Base:** Dinaledi y Lesedi conservan muchos restos con anatomía congruente y mosaico.
- **Reloj:** Dinaledi se restringe a `335–236 ka`; Lesedi no hereda sin medición el mismo intervalo.
- **Límite:** forma comparativamente basal no es cronómetro.

### CLAIM-NALEDI-DEPOSITION-001 / BURIAL-2025-001 / ENGRAVINGS-2025-001

- **Contexto:** acumulación profunda y dominada por homininos reduce varios agentes naturales simples.
- **Entierro:** versión revisada y adversarios geoarqueológicos producen evaluación dividida, nivel C.
- **Marcas:** artificialidad es plausible; fecha y autoría por `H. naledi` permanecen D.

### CLAIM-NALEDI-TOOLS-LIMIT-001 / BRAIN-BEHAVIOR-LIMIT-001 / NALEDI-PHYLOGENY-001

- **Capacidad:** mano y pie permiten inferencias funcionales, no industria ni ritual.
- **Cerebro:** volumen no funciona como veredicto positivo o negativo sobre conducta.
- **Genealogía:** sin ADN, matrices incompletas y homoplasia condicionan la rama.

### CLAIM-FLORES-MODERN-PYGMY-001 / FLORES-LIANG-BUA-ASSOCIATION-001

- **Genomas actuales:** ausencia de señal adicional limita introgresión retenida, no contacto histórico.
- **Asociación:** proximidad estratigráfica apoya actividad local, pero no identifica cada mano autora.

## Investigación 042 — Origen africano de *Homo sapiens*: región única o poblaciones estructuradas

### CLAIM-SAPIENS-ORIGIN-SCOPE-001 / COALESCENCE-SPLIT-LIMIT-001

- **Separación:** fósil, taxón, fecha, locus, divergencia y especiación son objetos distintos.
- **Puente:** cada cifra conserva material, método, modelo y escala.
- **Límite:** coincidencia cronológica no convierte dos relojes en una medición común.

### CLAIM-SAPIENS-AFRICAN-ORIGIN-001 / SINGLE-CRADLE-LIMIT-001 / MOSAIC-001

- **Resultado:** la convergencia sitúa la emergencia del clado en África.
- **Patrón:** Irhoud, Omo, Herto y Florisbad distribuyen cronologías y mosaicos entre regiones.
- **Límite:** sitio más antiguo conocido y lugar de origen no son equivalentes.

### CLAIM-JEBEL-IRHOUD-TAXON-001 / DATE-001

- **Anatomía:** cara/dentición apoyan sapiens temprano; neurocráneo conserva diferencias.
- **Relojes:** TL `315 ± 34 ka` y US-ESR `286 ± 32 ka` convergen.
- **Dependencia:** la TL fecha sílex calentado y llega al cuerpo por asociación.

### CLAIM-OMO-I-MINIMUM-AGE-001 / HERTO-CONTEXT-001 / FLORISBAD-AGE-001

- **Omo:** una toba superior fija mínimo `233 ± 22 ka`.
- **Herto:** presencia `~160–154 ka`; nombre subespecífico y ascendencia son revisables.
- **Florisbad:** `259 ± 35 ka` es importante pero depende de asociación/dosis complejas.

### CLAIM-SAPIENS-WEAK-STEM-2023-001 / GEOGRAPHY-LIMIT-001

- **Modelo:** tallos débilmente diferenciados con flujo explican LD y diversidad.
- **Predicción:** divergencias entre poblaciones actuales `120–135 ka`, no entre especies.
- **Límite:** las muestras actuales no localizan poblaciones ancestrales.

### CLAIM-SAPIENS-DEEP-STRUCTURE-2025-001 / DEMOGRAPHIC-IDENTIFIABILITY-001

- **Resultado:** `cobraa` favorece separación `~1.5 Ma` y reunión `~300 ka` bajo un pulso.
- **Adversario:** tallo continuo, varios pulsos, selección y tasas no son la misma familia.
- **Confianza:** estructura C; historia exacta no observada.

### CLAIM-SAPIENS-ARCHAIC-GHOST-OPEN-001

- **Señal:** `2–19 %` arcaico fantasma bajo un modelo occidental.
- **Límite:** el donante carece de referencia y estructura puede imitar introgresión.
- **Prueba:** genoma donante o predicciones que separen ambas historias.

### CLAIM-SOUTH-AFRICA-DIVERGENCE-2017-001 / GENOMES-2026-001 / AFRICAN-ADNA-TIME-LIMIT-001

- **Ganancia:** ADN antiguo reduce la distorsión de mezclas recientes y revela diversidad perdida.
- **Rango:** los 28 genomas 2026 son `10.2–0.15 ka` y enteramente holocenos.
- **Límite:** no existe aún ADN directo del intervalo `~300–200 ka`.

### CLAIM-MTDNA-EVE-LIMIT-001

- **Resultado:** mtDNA apoya raíz africana de una genealogía materna.
- **Corrección:** MRCA no significa única mujer, población fundadora o primera sapiens.
- **Generalización:** cada locus tiene historia coalescente propia.

### CLAIM-MSA-NOT-TAXONOMIC-001 / OLORGESAILIE-NETWORKS-001 / AMANZI-REGIONAL-2026-001

- **Conducta:** pigmento, puntas y obsidiana sostienen prácticas y movilidad.
- **Regionalidad:** Amanzi sitúa una transición local `~230 ± 18 ka`.
- **Límite:** tecnología no identifica genes, especie o panmixia.

### CLAIM-PAN-AFRICAN-NOT-PANMIXIA-001 / ORIGIN-CONFIDENCE-001 / SAMPLING-BIAS-001

- **Lenguaje:** «pan-africano» describe distribución sin prometer homogeneidad.
- **Sesgo:** preservación y excavación dejan regiones enteras poco visibles.
- **Confianza:** África A–B; estructura B-COND/C; geografía fina C–D.

## Investigación 043 — Salidas de África y descendencia detectable

### CLAIM-OOA-SCOPE-001 / COUNT-LIMIT-001 / DATE-OBJECT-LIMIT-001

- **Separación:** presencia, dispersión, expansión y descendencia son escalas no sustituibles.
- **Relojes:** cuerpo, sedimento, artefacto y mezcla conservan su objeto.
- **Límite:** no existe un entero total defendible de salidas.

### CLAIM-OOA-MULTIPLE-DISPERSALS-001 / EARLY-PRESENCE-CONTINUITY-LIMIT-001

- **Resultado:** Misliya, Al Wusta y Asia sudoriental prueban dispersiones antes de la fase ancestral principal.
- **Límite:** varios sitios no implican un episodio por sitio ni continuidad entre ellos.
- **Confianza:** B para repetición; C–D para genealogías locales.

### CLAIM-MISLIYA-PRESENCE-001 / APIDIMA-EARLY-OPEN-001 / AL-WUSTA-PRESENCE-001

- **Levante:** Misliya fija presencia sapiens `194–177 ka`.
- **Europa:** Apidima propone `>210 ka`, con taxón y contexto más frágiles.
- **Arabia:** Al Wusta fija presencia `~95–86 ka`, no corredor permanente.

### CLAIM-TAM-PA-LING-PRESENCE-001 / LIDA-AJER-PRESENCE-001 / SAHUL-MINIMUM-LIMIT-001

- **Asia tropical:** cuerpos y contextos sostienen presencias anteriores a `~68–63 ka`.
- **Sahul:** Madjedbebe es un mínimo de ocupación discutido, no fecha de salida.
- **Límite:** sin genoma, afinidad y continuidad permanecen abiertas.

### CLAIM-OOA-MAJOR-ANCESTRY-001 / NEAND-CLOCK-001 / SINGLE-SUCCESSFUL-SHORTHAND-001

- **Resultado:** una expansión `~70–50 ka` aporta casi toda la ascendencia no africana actual.
- **Reloj:** mezcla neandertal compartida `~50.5–43.5/49–45 ka` restringe una fase conectada.
- **Lenguaje:** «una salida exitosa» no es un cruce único.

### CLAIM-EARLY-EURASIAN-LINEAGES-001 / DETECTABILITY-NOT-ZERO-DESCENT-001

- **Ramas:** Ranis/Zlatý, Ust’-Ishim, Oase, Bacho Kiro y Tianyuan tuvieron destinos distintos.
- **Ausencia:** no detectar aporte posterior no prueba cero descendientes.
- **Muestreo:** un genoma individual no es un censo poblacional.

### CLAIM-PAPUAN-EARLY-PULSE-OPEN-001 / PERSIAN-HUB-OPEN-001 / AFRICAN-NICHE-EXPANSION-001

- **Papúa:** el aporte de una salida anterior es dependiente de modelo.
- **Hub:** la meseta persa es una localización inferida, no excavada genéticamente para el intervalo.
- **Nicho:** expansión ecológica precede/coincide con la fase mayor sin probar causa única.

## Investigación 044 — Poblamiento de Asia y Sahul

### CLAIM-ASIA-SAHUL-SCOPE-001 / ASIA-SAHUL-CONFIDENCE-001

- **Escalas:** presencia, fecha, corredor, capacidad, demografía, ascendencia y continuidad se auditan por separado.
- **Robusto:** Wallacea exigió agua y Sahul estaba poblado hacia `~50–45 ka`.
- **Condicionado:** Muna, Lida Ajer y Madjedbebe conservan límites diferentes.
- **Abierto:** ruta exacta, vehículo, censo fundador y continuidad cultural.

### CLAIM-SULAWESI-ART-MINIMUM-001 / LAILI-LOCAL-ABSENCE-001 / ASIA-SAHUL-ROUTES-OPEN-001

- **Muna:** U-series mide calcita sobre el motivo y fija un mínimo, no autoría directa.
- **Laili:** sedimento estéril adversa una estación meridional temprana simple sólo en el sitio.
- **Rutas:** coste mínimo y paleocorrientes producen predicciones, no trayectorias observadas.

### CLAIM-SAHUL-MARITIME-CAPACITY-001 / FOUNDING-SIZE-MODEL-001 / RAPID-DISPERSAL-001

- **Geografía:** al menos varios cruces de agua fueron necesarios.
- **Simulación:** control direccional, tamaño viable y rapidez dependen de parámetros.
- **No afirma:** balsa/canoa concreta, flota observada, censo o velocidad histórica uniforme.

### CLAIM-SAHUL-GENETIC-DIVERGENCE-001 / REGIONAL-STRUCTURE-001 / DENISOVAN-WALLACEA-OPEN-001

- **Divergencia:** los intervalos papú–australianos son demográficos, no fechas de sitio.
- **Estructura:** señal biológica no congela cultura, lengua o territorio.
- **Denisova:** múltiples ascendencias no localizan automáticamente mezcla o fósil donante.
- **Procedencia:** gobernanza indígena y representatividad son parte del dato.

## Investigación 045 — Llegada de sapiens a Europa y coexistencia neandertal

### CLAIM-EUROPE-ARRIVAL-SCOPE-001 / EUROPE-COEXISTENCE-CONFIDENCE-001

- **Escalas:** Europa, región, sitio, capa, objeto e individuo no son intercambiables.
- **Robusto:** Bacho Kiro y Ranis documentan sapiens alrededor de `47–43 ka`.
- **Condicionado:** Mandrin, Apidima y extensiones taxonómicas de tecnocomplejos.
- **Abierto:** contacto desde intervalos, lugar del pulso compartido y causa única del final.

### CLAIM-BACHO-KIRO-PRESENCE-001 / RANIS-LRJ-SAPIENS-001 / ZLATY-KUN-RANIS-POPULATION-001

- **Bacho Kiro:** cuerpo, proteínas/mtDNA y reloj convergen para el IUP local.
- **Ranis:** restos, mtDNA y fechas directas convergen para el LRJ local.
- **Zlatý kůň:** genoma y parentesco sostienen una rama temprana; no hay industria segura.
- **Límite:** asociación local no transforma IUP o LRJ en especies.

### CLAIM-EUROPE-OVERLAP-MOSAIC-001 / REGIONAL-OVERLAP-NOT-CONTACT-001 / NEAND-DISAPPEARANCE-REGIONAL-001

- **Cronología:** modelos producen ventanas regionales asincrónicas.
- **No afirma:** encuentro, intercambio, coocupación o último individuo.
- **Adversario:** noroeste 2026 combina solapamiento amplio con ausencia de flujo reciente detectable en la muestra.

### CLAIM-RECENT-ADMIXTURE-EUROPE-001 / SHARED-NEAND-ADMIXTURE-WINDOW-001

- **Genealogías:** Bacho Kiro y Oase contienen ancestros neandertales recientes.
- **Reloj:** el pulso compartido se modela `~50.5–43.5/49–45 ka`.
- **Geografía:** una estimación temporal no localiza el encuentro en Europa.

### CLAIM-NW-NEAND-NO-RECENT-FLOW-2026-001 / NEAND-GENETIC-DETERIORATION-LIMIT-2026-001

- **Muestra:** 27 restos de 10 sitios del noroeste, con Goyet `~45 ka`.
- **Resultado:** no flujo sapiens reciente detectable ni deterioro genético progresivo.
- **Límite:** no niega contacto en toda Europa ni convierte un grupo aislado en causa general.

### CLAIM-EUROPE-REPLACEMENT-NOT-SINGLE-EVENT-001

- **Descripción:** cambia la presencia/frecuencia regional de poblaciones y archivos.
- **Compatibilidad:** desaparición neandertal y absorción genética parcial coexisten.
- **No afirma:** violencia, intención, superioridad o mecanismo causal único.

## Investigación 046 — Poblamiento de las Américas

### CLAIM-AMERICAS-SCOPE-001 / AMERICAS-CONFIDENCE-001

- **Escalas:** objeto, capa, sitio, región, corredor, continente, individuo y población no son intercambiables.
- **Robusto:** White Sands registra presencia local `~23–21 ka`; Clovis no fue primero.
- **Condicionado:** anclas `~16–14 ka`, Bluefish, corredores y tiempos genómicos.
- **Abierto:** primer ingreso, ruta usada, Monte Verde 2026 y expedientes extremos.

### CLAIM-WHITE-SANDS-LGM-PRESENCE-001 / WHITE-SANDS-ROUTE-LIMIT-001

- **Convergencia:** semillas, polen, OSL y geocronología paleolacustre sostienen la ventana local.
- **Dependencia:** los relojes comparten correlación estratigráfica y no son cuatro migraciones.
- **No afirma:** identidad, tamaño, duración total, entrada o corredor.

### CLAIM-BLUEFISH-PRESENCE-CONDITIONAL-001 / PRECLOVIS-ANCHORS-001 / COOPERS-FERRY-CONDITIONAL-001

- **Bluefish:** pocos huesos modificados apoyan presencia beringiana si las marcas son humanas.
- **Anclas:** varios sitios `~16–14 ka` prueban multiplicidad pre-Clovis con archivos distintos.
- **Nipéhe:** asociación local no convierte semejanza de puntas en ruta transpacífica.

### CLAIM-MONTE-VERDE-CHRONOLOGY-OPEN-2026-001

- **Conflicto:** contexto clásico `~14.5 ka` frente a redatación 2026 de Holoceno medio.
- **Cuello:** equivalencia estratigráfica, posición de tefra y asociación de objetos.
- **Decisión:** no promediar ni usar el sitio como ancla necesaria de una ruta.

### CLAIM-CLOVIS-TECHNOCOMPLEX-001

- **Cronología:** aproximadamente `13,050–12,750 cal BP`.
- **Anzick:** asociación local entre individuo y entierro Clovis.
- **Límite:** tecnocomplejo no es primera población, etnia o lengua.

### CLAIM-PACIFIC-COAST-VIABILITY-001 / ICE-FREE-CORRIDOR-LATE-001 / AMERICAS-ROUTES-OPEN-001

- **Costa:** sectores viables hacia `~17 ka`; gran parte del archivo quedó sumergido.
- **Interior:** apertura completa `13.8 ± 0.5 ka` y biota escalonada.
- **Resultado:** oportunidades ambientales, no trayectos humanos observados.

### CLAIM-BERINGIAN-STANDSTILL-MODEL-001 / ANCIENT-BERINGIANS-001 / GENOMIC-SPLIT-NOT-ENTRY-001

- **Modelo:** aislamiento/estructura beringianos son inferencias demográficas.
- **Cuerpo:** USR1 fecha una persona `~11.5 ka`; su rama se modela en otro tiempo.
- **Cortafuego:** coalescencia no contiene una coordenada ni un cruce de hielo.

### CLAIM-AMERICAS-INTERNAL-DISPERSALS-2026-001 / AMERICAS-GENOMIC-GOVERNANCE-001

- **Muestra:** 128 genomas, 45 poblaciones, 28 familias lingüísticas y ocho países.
- **Resultado:** ≥3 dispersiones hacia Sudamérica, diferenciación y afinidad australasiana regional bajo modelo.
- **Límite:** comunidades actuales no son proxies sin tiempo; acuerdos y acceso son procedencia.

### CLAIM-EXTREME-SITES-OPEN-001

- **Cerutti:** edad del hueso no identifica el agente de fractura.
- **Chiquihuite:** edad del sedimento no decide artefacto frente a geofacto.
- **Regla:** un reloj fuerte no rescata una asociación débil.

## Registro tabular de la Investigación 047

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MIND-TOOLS-FIRE-SCOPE-001` | Objeto, proceso técnico, uso, asociación, agente, taxón, transmisión social y cooperación son niveles distintos y requieren puentes independientes. | A-SEM | AUDITADO | `EVID-MIND-TOOLS-FIRE-METHOD-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-MIND-TOOLS-FIRE-CONFIDENCE-001` | Los archivos permiten afirmar modificación intencional, combustión localizada y algunos patrones organizativos con más confianza que autor taxonómico, enseñanza, lenguaje o institución social. | B para archivos; D para extensiones fuertes | AUDITADO | `EVID-MIND-TOOLS-FIRE-METHOD-001`, `EVID-LITHIC-EQUIFINALITY-001`, `EVID-TEACHING-LANGUAGE-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-LOMEKWI-CONTEXT-OPEN-001` | Lomekwi 3 contiene piezas compatibles con modificación antrópica, pero el contexto primario completo y su condición de tradición separada siguen condicionados. | B/C-COND objeto-contexto; D tradición | AUDITADO | `EVID-LOMEKWI-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-NYAYANGA-EARLY-OLDOWAN-001` | Nyayanga documenta Oldowan temprano y procesamiento de recursos entre `3.032–2.581 Ma`, con mejor estimación cercana a `2.9 Ma`. | B-COND | AUDITADO | `EVID-NYAYANGA-TOOLS-047-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-NYAYANGA-MAKER-OPEN-001` | Los molares de *Paranthropus* asociados en Nyayanga no identifican al fabricante de los artefactos. | A-SEM para el límite; D autor | AUDITADO | `EVID-NYAYANGA-TOOLS-047-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-NYAYANGA-TRANSPORT-NOT-COOPERATION-001` | La procedencia de rocas no locales en Nyayanga apoya selección y transporte de hasta `~13 km`, pero no cuenta agentes ni demuestra cooperación. | B-COND transporte; D cooperación | AUDITADO | `EVID-NYAYANGA-TRANSPORT-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-OLDOWAN-ACHEULEAN-NONLINEAR-001` | La aparición del Achelense cerca de `1.76 Ma` no implica reemplazo instantáneo del Oldowan. | B | AUDITADO | `EVID-OLDOWAN-ACHEULEAN-T69-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-T69-BONE-TOOLS-2025-001` | Veintisiete huesos de T69 con secuencias de extracción y selección favorecen producción sistemática de útiles óseos hacia `1.5 Ma`; función, autor y transmisión siguen abiertos. | B-COND | AUDITADO | `EVID-OLDOWAN-ACHEULEAN-T69-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-LITHIC-INTENT-EQUIFINALITY-001` | Primates no humanos pueden producir lascas y atributos solapados sin buscar filos; la intención se discrimina mejor a escala de conjunto, núcleos, remontajes y uso. | B | AUDITADO | `EVID-LITHIC-EQUIFINALITY-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-BONE-MARKS-DIAGNOSTIC-CONDITIONAL-001` | Las marcas óseas requieren comparadores de pisoteo, dientes, cocodrilos, percusión y otros equifinales, con error por clase y transferencia al fósil explícitos. | B método; C por pieza | AUDITADO | `EVID-BONE-MARKS-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-FIRE-LADDER-001` | Incendio natural, material calentado, combustión *in situ*, control, recurrencia e ignición son peldaños distintos; ninguno hereda automáticamente los superiores. | A-SEM | AUDITADO | `EVID-MIND-TOOLS-FIRE-METHOD-001`, `EVID-WONDERWERK-FIRE-001`, `EVID-GBY-FIRE-001`, `EVID-BARNHAM-IGNITION-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-WONDERWERK-IN-SITU-FIRE-001` | Ceniza vegetal y hueso quemado microestratificados dentro de Wonderwerk apoyan combustión *in situ* hacia `1.0 Ma`, no un método de ignición observado. | B-COND | AUDITADO | `EVID-WONDERWERK-FIRE-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-GBY-REPEATED-FIRE-001` | Gesher Benot Ya'aqov conserva concentraciones quemadas recurrentes hacia `790 ka` y peces compatibles con cocción, sin revelar cómo se obtuvo el fuego. | B-COND | AUDITADO | `EVID-GBY-FIRE-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-BARNHAM-IGNITION-CONDITIONAL-2026-001` | En Barnham, sedimento calentado, bifaces fracturados por calor y pirita rara transportada favorecen producción deliberada de fuego hacia `400 ka`, aunque no se observa la chispa. | B-COND | AUDITADO | `EVID-BARNHAM-IGNITION-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-TRANSPORT-NOT-COOPERATION-001` | El transporte de materia prima puede ser individual, secuencial o acumulado; por sí solo no demuestra coordinación multiagente. | A-SEM | AUDITADO | `EVID-NYAYANGA-TRANSPORT-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-REFITS-NOT-TEACHING-001` | Los remontajes reconstruyen secuencias de extracción y deposición, no observan maestro, aprendiz ni número de participantes. | A-SEM | AUDITADO | `EVID-REFITS-TRANSMISSION-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-SCHONINGEN-COOPERATION-CONDITIONAL-2025-001` | Armas de madera, fauna y recurrencia en Schöningen bajo una edad revisada cercana a `200 ka` favorecen caza coordinada, pero no fijan taxón, roles, parentesco o habla. | C/B-COND | AUDITADO | `EVID-SCHONINGEN-COOPERATION-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-TOOLS-NOT-TEACHING-001` | Técnicas tempranas y formas generales pueden reaparecer sin copia directa de saber hacer; compatibilidad con enseñanza no demuestra su necesidad histórica. | B para el límite experimental | AUDITADO | `EVID-LITHIC-EQUIFINALITY-001`, `EVID-REFITS-TRANSMISSION-001`, `EVID-TEACHING-LANGUAGE-001`, `EVID-COMPLEXITY-MODEL-001` | `INV-MIND-TOOLS-FIRE-001` |
| `CLAIM-TOOLS-NOT-LANGUAGE-001` | La eficacia del lenguaje en experimentos de transmisión no permite fechar su origen a partir de una industria o del fuego. | B eficacia; D fecha histórica | AUDITADO | `EVID-TEACHING-LANGUAGE-001`, `EVID-COMPLEXITY-MODEL-001` | `INV-MIND-TOOLS-FIRE-001` |

## Investigación 047 — Herramientas, fuego y cooperación

### CLAIM-MIND-TOOLS-FIRE-SCOPE-001 / MIND-TOOLS-FIRE-CONFIDENCE-001

- **Escalas:** objeto, proceso, uso, asociación, agente, taxón, transmisión y cooperación no son intercambiables.
- **Robusto:** Oldowan temprano, modificación intencional y combustión localizada/repetida tienen archivos convergentes.
- **Condicionado:** Lomekwi completo, transporte no local, T69, Barnham y Schöningen.
- **No sustentado:** herramienta o fuego como prueba automática de lenguaje, altruismo, parentesco, división sexual o moral.

### CLAIM-LOMEKWI-CONTEXT-OPEN-001

- **Objeto:** piezas con fractura y percusión compatibles con modificación antrópica.
- **Cuello:** vínculo de las piezas diagnósticas con depósitos primarios de `3.3 Ma` y singularidad temporal/cultural.
- **Confianza:** B/C-COND para modificación; C-COND para contexto completo; D para tradición separada.

### CLAIM-NYAYANGA-EARLY-OLDOWAN-001 / NYAYANGA-MAKER-OPEN-001

- **Resultado:** Oldowan y procesamiento de fauna/plantas entre `3.032–2.581 Ma`, con mejor estimación `~2.9 Ma`.
- **Fósiles:** dos molares de *Paranthropus* están asociados, no firmados como fabricantes.
- **Regla:** proximidad taxonómica restringe candidatos; no identifica al tallador.

### CLAIM-NYAYANGA-TRANSPORT-NOT-COOPERATION-001

- **Medición:** rocas no locales y enlaces geoquímicos con fuentes adecuadas hasta `~13 km`.
- **Inferencia:** selección, transporte y conocimiento del paisaje.
- **Límite:** no cuenta agentes ni demuestra simultaneidad, cooperación o planificación verbal.

### CLAIM-OLDOWAN-ACHEULEAN-NONLINEAR-001 / T69-BONE-TOOLS-2025-001

- **Cronología:** Achelense en Kokiselei 4 `~1.76 Ma` sin reemplazo instantáneo del Oldowan.
- **T69:** 27 huesos con series de extracciones y selección taxonómica favorecen producción sistemática `~1.5 Ma`.
- **Límite:** forma, función, taxón y modo de transmisión conservan incertidumbres distintas.

### CLAIM-LITHIC-INTENT-EQUIFINALITY-001

- **Controles:** capuchinos y macacos producen lascas/atributos solapados sin buscar filos.
- **Resultado:** una lasca aislada no decide intención; conjunto, núcleos, distribución, refits y uso aumentan discriminación.
- **No afirma:** los primates actuales fabricaron conjuntos homininos.

### CLAIM-BONE-MARKS-DIAGNOSTIC-CONDITIONAL-001

- **Equifinales:** pisoteo, carnívoros, cocodrilos, caída de rocas y fractura sedimentaria.
- **Calibración:** pruebas ciegas controladas pueden ser muy precisas; base abierta 2026 produce `74–83 %` según clases.
- **Regla:** publicar comparadores, error por clase, transferencia al fósil y agentes ausentes.

### CLAIM-FIRE-LADDER-001

- **Peldaños:** incendio natural → material calentado → combustión in situ → control → recurrencia → ignición.
- **Relojes:** capa, evento térmico y tradición de uso no son equivalentes.
- **Límite:** un peldaño no hereda automáticamente los superiores.

### CLAIM-WONDERWERK-IN-SITU-FIRE-001 / GBY-REPEATED-FIRE-001

- **Wonderwerk:** ceniza vegetal y hueso quemado microestratificados dentro de la cueva `~1.0 Ma`.
- **GBY:** concentraciones quemadas en varios horizontes `~790 ka` y peces compatibles con cocción.
- **Límite:** control/recurrencia fuertes; método de ignición no observado.

### CLAIM-BARNHAM-IGNITION-CONDITIONAL-2026-001

- **Convergencia:** sedimento calentado, bifaces fracturados por calor y pirita rara/transportada en `~400 ka`.
- **Resultado:** producción deliberada de fuego es la explicación conjunta más fuerte disponible.
- **Límite:** no se observa chispa ni se demuestra especie, cocina, habitualidad diaria o lenguaje.

### CLAIM-TRANSPORT-NOT-COOPERATION-001 / REFITS-NOT-TEACHING-001

- **Transporte:** puede ser individual o acumulado; requiere pruebas de simultaneidad para cooperación.
- **Refits:** reconstruyen secuencia de extracciones/deposición, no maestro, aprendiz o número de personas.
- **Organización:** debe excluir formación postdeposicional y palimpsesto.

### CLAIM-SCHONINGEN-COOPERATION-CONDITIONAL-2025-001

- **Archivo:** armas de madera, fauna, recurrencia y edad revisada `~200 ka`.
- **Inferencia:** caza coordinada/especializada probable.
- **Límite:** fabricantes, participantes, parentesco, roles, habla y moral no fueron observados.

### CLAIM-TOOLS-NOT-TEACHING-001 / TOOLS-NOT-LANGUAGE-001

- **Experimentos:** técnicas tempranas y forma general de bifaz pueden reaparecer sin copia directa de saber hacer.
- **Complemento:** enseñanza/gesto/lenguaje mejoran transmisión bajo protocolos actuales.
- **Decisión:** forma compatible con enseñanza no demuestra necesidad histórica ni fecha lenguaje.

## Registro tabular de la Investigación 048

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-LANGUAGE-SCOPE-001` | Habla, lenguaje, comunicación, simbolismo y sus componentes no son sinónimos; cada resultado exige unidad y proxy explícitos. | A-SEM | AUDITADO | `EVID-LANGUAGE-METHOD-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-LANGUAGE-NO-SINGLE-DATE-001` | Ningún archivo disponible sincroniza producción, percepción, semántica, sintaxis, pragmática y transmisión; no hay fecha empírica única para el origen del lenguaje. | B para el límite; D para fecha única | AUDITADO | `EVID-LANGUAGE-METHOD-001`, `EVID-HYOID-LANGUAGE-001`, `EVID-FOXP2-CLINICAL-EVOLUTION-001`, `EVID-LANGUAGE-CULTURAL-TRANSMISSION-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-HYOID-SPEECH-CAPACITY-001` | Hioides de Sima `~430 ka` y Kebara `~60 ka` muestran morfología/biomecánica compatibles con producción vocal humana, sin fijar tejidos, habla o gramática. | B/B-COND | AUDITADO | `EVID-HYOID-LANGUAGE-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-NEANDERTHAL-HEARING-CAPACITY-001` | La transmisión auditiva modelada de neandertales es semejante a humanos actuales y compatible con comunicación vocal eficiente; no observa mensajes o comprensión lingüística. | B-COND | AUDITADO | `EVID-AUDITORY-LANGUAGE-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-BREATHING-PROXY-CONDITIONAL-001` | El canal vertebral torácico es un proxy discutido de inervación/control respiratorio; no fecha control cortical, habla o lenguaje. | C-COND | AUDITADO | `EVID-BREATHING-LANGUAGE-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-ENDOCAST-LANGUAGE-LIMIT-001` | Los endocastos restringen forma y organización superficial, pero no preservan citoarquitectura, conectividad, actividad, lateralización funcional o gramática. | A-SEM límite; C forma funcional | AUDITADO | `EVID-ENDOCAST-LANGUAGE-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-FOXP2-NOT-LANGUAGE-GENE-001` | `FOXP2` es un factor de transcripción pleiotrópico relevante para desarrollo sensorimotor y habla, no un gen suficiente o exclusivo del lenguaje. | A | AUDITADO | `EVID-FOXP2-CLINICAL-EVOLUTION-001`, `EVID-FOXP2-MODELS-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-FOXP2-SELECTION-REVISED-001` | Genomas poblacionalmente diversos no recuperan el barrido selectivo reciente de `FOXP2`; la cronología adaptativa original queda revisada. | B | AUDITADO | `EVID-FOXP2-SELECTION-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-INTROGRESSION-NOT-LANGUAGE-PACKAGE-001` | Compartir variantes de `FOXP2` con neandertales no demuestra introgresión ni transmisión de un paquete lingüístico; herencia ancestral y red funcional deben separarse. | A-SEM; D paquete | AUDITADO | `EVID-FOXP2-CLINICAL-EVOLUTION-001`, `EVID-FOXP2-SELECTION-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-REGULATORY-LANGUAGE-2026-LIMIT-001` | Regiones regulatorias antiguas se asocian con capacidad lingüística infantil actual, pero no observan fenotipo lingüístico de neandertales u otra población fósil. | B-COND actual; D fósil | AUDITADO | `EVID-LANGUAGE-REGULATION-2026-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-COMPARATIVE-MOSAIC-001` | Aprendizaje vocal, turnos, contextualidad y combinación aparecen por separado en aves, primates y cetáceos; son componentes comparables, no una escalera o ancestro directo. | B-COND | AUDITADO | `EVID-COMPARATIVE-TURNTAKING-001`, `EVID-COMPARATIVE-COMBINATORIALITY-001`, `EVID-FOXP2-MODELS-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-CULTURAL-TRANSMISSION-STRUCTURE-001` | Cadenas experimentales muestran que la transmisión iterada puede aumentar aprendibilidad y estructura sin diseñador central. | B | AUDITADO | `EVID-LANGUAGE-CULTURAL-TRANSMISSION-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-SIGN-LANGUAGE-SPEECH-SEPARATION-001` | Lenguas de señas emergentes documentan convenciones y organización gramatical sin habla, y cambios entre cohortes; no recrean el primer origen biológico. | B | AUDITADO | `EVID-SIGN-LANGUAGE-EMERGENCE-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-LANGUAGE-BIOLOGY-CULTURE-SCALES-001` | Capacidades biológicas profundas, emergencia de sistemas, transmisión y diversificación histórica operan en escalas distintas y no comparten un reloj automático. | A-SEM | AUDITADO | `EVID-LANGUAGE-METHOD-001`, `EVID-LANGUAGE-CULTURAL-TRANSMISSION-001`, `EVID-LANGUAGE-HISTORICAL-DEPTH-001` | `INV-MIND-LANGUAGE-001` |
| `CLAIM-GLOTTOCHRONOLOGY-DEPTH-LIMIT-001` | Filogenias de familias pueden estimar divergencias de miles de años bajo supuestos; no identifican el origen profundo del lenguaje por extrapolación. | A-SEM límite; C-MOD fecha familiar | AUDITADO | `EVID-LANGUAGE-HISTORICAL-DEPTH-001` | `INV-MIND-LANGUAGE-001` |

## Investigación 048 — Origen del lenguaje

### CLAIM-LANGUAGE-SCOPE-001 / LANGUAGE-NO-SINGLE-DATE-001

- **Componentes:** producción, audición, aprendizaje, semántica, combinación, pragmática, turnos, desplazamiento, productividad y transmisión.
- **Archivos:** fósil, genético, comparado, experimental e histórico tienen resoluciones diferentes.
- **Decisión:** una fecha única permanece no identificada; no se promedian proxies.

### CLAIM-HYOID-SPEECH-CAPACITY-001 / NEANDERTHAL-HEARING-CAPACITY-001

- **Sima:** hioides humanos en contexto revisado `~430 ka`.
- **Kebara:** forma y microarquitectura semejantes a comparadores actuales `~60 ka`.
- **Oído:** banda ocupada neandertal modelada semejante a *H. sapiens*.
- **Límite:** compatibilidad anatómica no conserva voz, fonemas, semántica o gramática.

### CLAIM-BREATHING-PROXY-CONDITIONAL-001 / ENDOCAST-LANGUAGE-LIMIT-001

- **Canal torácico:** dimensión ósea → inervación → control respiratorio es una cadena condicionada.
- **Endocasto:** superficie y asimetría no preservan citoarquitectura, tractos o actividad.
- **Confianza:** C-COND para función parcial; D para lenguaje a partir de esos proxies.

### CLAIM-FOXP2-NOT-LANGUAGE-GENE-001 / FOXP2-SELECTION-REVISED-001

- **Clínica:** variantes patógenas afectan desarrollo motor del habla y otros dominios.
- **Arcaicos:** dos sustituciones proteicas estaban en neandertales.
- **Modelos:** ratón y pinzón aíslan circuitos/aprendizaje, no gramática.
- **Revisión:** la señal de barrido reciente desaparece con muestreo poblacional más diverso.

### CLAIM-INTROGRESSION-NOT-LANGUAGE-PACKAGE-001 / REGULATORY-LANGUAGE-2026-LIMIT-001

- **Mecanismos:** herencia ancestral, flujo génico y convergencia no son sinónimos.
- **2026:** asociación regulatoria actual restringe arquitectura antigua, no conducta fósil.
- **No autorizado:** variante o región como paquete de fonología, léxico, pragmática y sintaxis.

### CLAIM-COMPARATIVE-MOSAIC-001

- **Observado:** copia vocal en aves, turnos de marmoseta, codas contextuales/combinatorias y combinaciones de bonobo.
- **Regla:** comparar sólo el componente operacionalizado.
- **Límite:** especie actual no es ancestro sustituto; suma de componentes no crea lenguaje completo.

### CLAIM-CULTURAL-TRANSMISSION-STRUCTURE-001 / SIGN-LANGUAGE-SPEECH-SEPARATION-001

- **Laboratorio:** la transmisión iterada puede regularizar y estructurar sistemas.
- **Comunidades:** lenguas de señas emergentes muestran convención y gramática sin habla.
- **Límite:** participantes tienen biología humana actual; no fechan el Paleolítico.

### CLAIM-LANGUAGE-BIOLOGY-CULTURE-SCALES-001 / GLOTTOCHRONOLOGY-DEPTH-LIMIT-001

- **Relojes:** edad fósil, genealogía de variante, generaciones de transmisión y divergencia familiar son distintos.
- **Filogenia:** una raíz familiar modelada no es la primera lengua.
- **Falsador:** estabilidad profunda bajo datos, calibraciones y modelos realmente independientes.

## Registro tabular de la Investigación 049

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-SYMBOL-SCOPE-001` | Material seleccionado, modificación, ornamento, convención, representación, símbolo y sistema simbólico son resultados distintos. | A-SEM | AUDITADO | `EVID-SYMBOL-METHOD-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SYMBOL-MEANING-LIMIT-001` | El archivo material puede restringir agencia, uso y recurrencia sin identificar por sí solo significado, cosmología o identidad. | A-SEM | AUDITADO | `EVID-SYMBOL-METHOD-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SYMBOL-PRESERVATION-ASYMMETRY-001` | Piedra, mineral, concha y hueso sobreviven de modo desigual frente a fibra, voz, movimiento y conducta; ausencia preservada no equivale a ausencia conductual. | A-SEM/B | AUDITADO | `EVID-SYMBOL-METHOD-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-BURIAL-NOT-RELIGION-001` | Un depósito deliberado o una fosa no demuestran por sí solos rito, duelo, estatus, religión o creencia posmortal. | A-SEM | AUDITADO | `EVID-NEANDERTHAL-BURIAL-001`, `EVID-PANGA-BURIAL-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-NEANDERTHAL-BURIAL-HETEROGENEOUS-001` | Algunos casos neandertales favorecen depósito deliberado, pero calidad, resolución y alternativas varían por sitio y no autorizan una propiedad taxonómica uniforme. | B-COND | AUDITADO | `EVID-NEANDERTHAL-BURIAL-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SHANIDAR-BURIAL-001` | Articulación y estratigrafía de Shanidar Z favorecen depósito deliberado y posible uso repetido del lugar. | B-COND | AUDITADO | `EVID-NEANDERTHAL-BURIAL-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SHANIDAR-FLOWERS-OPEN-001` | Las concentraciones de polen de Shanidar no demuestran flores funerarias: abejas explican al menos parte del patrón y otros aportes permanecen abiertos. | C/D-ABIERTA | AUDITADO | `EVID-SHANIDAR-POLLEN-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-PANGA-BURIAL-001` | Panga ya Saidi conserva un entierro deliberado infantil fechado `78.3 ± 4.1 ka`, sin preservar motivo o creencia. | B | AUDITADO | `EVID-PANGA-BURIAL-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-PIGMENT-USE-OPEN-001` | Blombos demuestra procesamiento/almacenamiento de una mezcla rica en ocre `~100 ka`; su aplicación final permanece abierta. | A proceso; D aplicación | AUDITADO | `EVID-BLOMBOS-PIGMENT-MARKS-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-MARKS-NOT-MEANING-001` | Incisiones y trazos deliberados pueden establecer agencia sin recuperar función, código o significado. | A-SEM/B agencia | AUDITADO | `EVID-BLOMBOS-PIGMENT-MARKS-001`, `EVID-INTENTIONAL-MARKS-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-ORNAMENT-CONVENTION-CONDITIONAL-001` | Series perforadas con desgaste y montaje apoyan ornamento/convención mejor que piezas aisladas, pero no revelan identidad o significado. | B-COND | AUDITADO | `EVID-SHELL-ORNAMENTS-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-NEANDERTHAL-ORNAMENTS-001` | Aviones y Krapina apoyan selección, modificación y probable ornamentación neandertal sin fijar función social específica. | B-COND | AUDITADO | `EVID-NEANDERTHAL-ORNAMENTS-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-GEOMETRY-NOT-SYMBOL-001` | Una geometría intencional no demuestra por sí sola convención compartida o significado simbólico. | A-SEM | AUDITADO | `EVID-INTENTIONAL-MARKS-001`, `EVID-BLOMBOS-PIGMENT-MARKS-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-IBERIAN-CAVE-ART-CONDITIONAL-001` | Costras ibéricas producen mínimos `>64.8 ka` si asociación y sistema U–Th son válidos; autoría neandertal es contextual, no observada. | B-COND mínimo; C autor | AUDITADO | `EVID-IBERIAN-CAVE-ART-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SULAWESI-FIGURATIVE-MINIMUM-001` | Karampuang conserva una composición presente al menos `51.2 ka` y Bulu’ Sipong 4 al menos `48 ka`; «narración» es más inferencial que el mínimo. | B mínimo; C narración | AUDITADO | `EVID-SULAWESI-IMAGES-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-AURIGNACIAN-MUSIC-001` | Aerófonos manufacturados y repetidos en Suabia sostienen instrumentos y una tradición regional; no preservan ejecución, melodía o función. | B | AUDITADO | `EVID-AURIGNACIAN-FLUTES-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-DIVJE-BABE-OPEN-001` | El hueso de Divje Babe puede producir sonido, pero manufactura hominina e instrumento siguen abiertos frente a alternativas tafonómicas. | C/D-ABIERTA | AUDITADO | `EVID-DIVJE-TAFONOMY-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-BRUNIQUEL-SPATIAL-ORGANIZATION-001` | Bruniquel demuestra actividad neandertal organizada en profundidad a `176.5 ± 2.1 ka`, con acceso rápidamente oscuro. | B | AUDITADO | `EVID-BRUNIQUEL-STRUCTURES-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-BRUNIQUEL-RITUAL-LIMIT-001` | Disposición, profundidad, costo y calor en Bruniquel no identifican por sí solos rito, santuario o cosmología. | A-SEM; D función | AUDITADO | `EVID-BRUNIQUEL-STRUCTURES-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SYMBOL-NOT-LANGUAGE-001` | Convención o simbolismo material no preservan sintaxis, modalidad, vocabulario ni lengua concreta. | A-SEM | AUDITADO | `EVID-SYMBOL-CROSSBOUNDARY-001` | `INV-MIND-SYMBOL-001` |
| `CLAIM-SYMBOL-NOT-NEOLITHIC-CAUSE-001` | Simbolismo pleistoceno antecede al Neolítico, pero su presencia no demuestra que causara domesticación, sedentarismo o jerarquía. | A-SEM | AUDITADO | `EVID-SYMBOL-CROSSBOUNDARY-001` | `INV-MIND-SYMBOL-001` |

## Investigación 049 — Entierros, arte, música, ritual y símbolos

- **Escalera:** materia → agencia → uso → recurrencia/convención; significado necesita archivo independiente.
- **Entierro:** depósito deliberado no hereda rito o creencia; los casos neandertales se califican por sitio.
- **Pigmentos/ornamentos:** preparación, perforación y desgaste restringen acciones; no leen identidad.
- **Imágenes:** la calcita aporta mínimos/máximos, no fecha directa del pigmento ni autor observado.
- **Música:** manufactura y recurrencia sostienen aerófonos; «suena» no identifica instrumento.
- **Ritual:** Bruniquel restringe organización y acceso, no cosmología.
- **Fronteras:** convención no prueba lengua; simbolismo no es causa única del Neolítico.

## Registro tabular de la Investigación 050

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-NEOLITHIC-SCOPE-001` | Recolección intensiva, manejo, cultivo, selección, domesticación, dependencia, almacenamiento, sedentarismo, pastoralismo y «Neolítico» son variables distintas. | A-SEM | AUDITADO | `EVID-NEOLITHIC-METHOD-001` | `INV-NEOLITHIC-001` |
| `CLAIM-DOMESTICATION-TRAIT-POPULATION-ECONOMY-001` | Un rasgo domesticado, una población domesticada y una economía dependiente no comparten necesariamente diagnóstico o fecha. | A-SEM/B | AUDITADO | `EVID-NEOLITHIC-METHOD-001`, `EVID-DOMESTICATION-COMPARATIVE-050-001` | `INV-NEOLITHIC-001` |
| `CLAIM-DOMESTICATION-SYNDROME-NONSYNCHRONOUS-001` | Los rasgos de los «síndromes» de domesticación pueden cambiar a ritmos distintos y no demuestran un evento único. | B | AUDITADO | `EVID-DOMESTICATION-COMPARATIVE-050-001`, `EVID-AFRICA-CEREAL-TRAJECTORIES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-SWASIA-PREDOMESTIC-001` | Procesamiento, almacenamiento, residencia prolongada y cultivo pre-doméstico precedieron localmente a poblaciones cerealistas plenamente domesticadas. | B-COND | AUDITADO | `EVID-SWASIA-PLANT-PROCESS-001`, `EVID-CIV-DHRA-GRANARIES-001`, `EVID-CIV-MICE-AINMALLAHA-001` | `INV-NEOLITHIC-001` |
| `CLAIM-BARLEY-MOSAIC-2025-001` | La cebada cultivada conserva un mosaico de haplotipos de múltiples contribuciones silvestres, flujo génico y adaptación; no define una coordenada/fecha única. | B; C-MOD para historia profunda | AUDITADO | `EVID-BARLEY-HAPLOTYPES-2025-001` | `INV-NEOLITHIC-001` |
| `CLAIM-CHINA-MULTICROP-TRAJECTORIES-001` | Arroz, mijos y cerdos en China responden a archivos y relojes diferentes y no constituyen un paquete sincrónico automático. | B-COND | AUDITADO | `EVID-CHINA-CROP-ARCHIVES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-RICE-REGIONAL-MOSAIC-2026-001` | Los proxies del bajo Yangtsé favorecen trayectorias subregionales de cultivo/domesticación de arroz, con efecto ambiental y muestreo desiguales. | B-COND | AUDITADO | `EVID-RICE-REGIONAL-2026-001` | `INV-NEOLITHIC-001` |
| `CLAIM-AFRICA-FOOD-PRODUCTION-MOSAIC-001` | Pastoreo/lechería, sorgo, mijo perla y arroz africano documentan procesos africanos regionales, no una transición continental única. | B-COND | AUDITADO | `EVID-AFRICA-CEREAL-TRAJECTORIES-001`, `EVID-SAHARA-PASTORAL-DAIRY-001` | `INV-NEOLITHIC-001` |
| `CLAIM-MOBILITY-FOOD-PRODUCTION-SEPARATE-001` | Producción de alimentos puede coexistir con movilidad y sedentarismo puede preceder o existir sin agricultura. | B | AUDITADO | `EVID-SAHARA-PASTORAL-DAIRY-001`, `EVID-CIV-MICE-AINMALLAHA-001` | `INV-NEOLITHIC-001` |
| `CLAIM-MAIZE-PROTRACTED-DISPERSAL-001` | El maíz circuló hacia Sudamérica antes de que todos sus rasgos posteriores estuvieran fijados y continuó bajo selección/mezcla regional. | B-COND | AUDITADO | `EVID-MESOAMERICA-MAIZE-SQUASH-001`, `EVID-MAIZE-ANCIENT-GENOMES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-AMAZON-ANDES-MULTIPLE-PATHS-001` | Nanchoc y Moxos documentan horticultura, cultivos y manejo de paisaje escalonados sin un centro panamericano único. | B-COND | AUDITADO | `EVID-ANDES-AMAZON-CULTIVATION-001` | `INV-NEOLITHIC-001` |
| `CLAIM-FARMER-DISPERSAL-NOT-CULTURE-001` | Movimiento de personas, especies y técnicas puede coincidir o desacoplarse; ancestría no identifica cultura, lengua u oficio agrícola. | A-SEM/B | AUDITADO | `EVID-FARMER-HUMAN-PALEOGENOMES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-NEOLITHIC-CAUSES-MULTIMODEL-001` | Clima, demografía, nicho, riesgo, trabajo, almacenamiento, propiedad, redes y elección son modelos parciales con predicciones, no necesidades monocausales. | B-SÍNTESIS | AUDITADO | `EVID-NEOLITHIC-CAUSES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-NEOLITHIC-CONSEQUENCES-VARIABLE-001` | Dieta, salud, patógenos, trabajo, desigualdad, paisaje y población varían por región/fase/grupo; no producen un saldo universal de progreso. | B-COND | AUDITADO | `EVID-NEOLITHIC-CONSEQUENCES-001` | `INV-NEOLITHIC-001` |
| `CLAIM-DOMESTICATION-COEVOLUTION-AGENCY-001` | Domesticación fue una relación coevolutiva multigeneracional; su documentación debe reconocer procedencia y conocimiento indígena/local sin usar comunidades actuales como proxies atemporales. | A-SEM/B | AUDITADO | `EVID-NEOLITHIC-METHOD-001`, `EVID-ANDES-AMAZON-CULTIVATION-001` | `INV-NEOLITHIC-001` |

## Investigación 050 — Agriculturas y domesticaciones múltiples

- **Unidades:** rasgo, población domesticada y dependencia económica se auditan por separado.
- **Regiones:** Asia sudoccidental, China, Nueva Guinea, África, Mesoamérica, Andes y Amazonia no se fuerzan a un mismo paquete o reloj.
- **Movimientos:** personas, especies y técnicas pueden viajar juntas o desacopladas; ancestría no es cultura.
- **Causas:** cada modelo declara variable, mecanismo, escala y falsador; Holoceno/Younger Dryas no son interruptores globales.
- **Consecuencias:** salud, trabajo, desigualdad y patógenos se distribuyen por fase y grupo, no miden «progreso».
- **Agencia:** coevolución y conocimiento situado sustituyen una metáfora unilateral de dominación.

## Claims futuros

Las entradas cronológicas todavía no auditadas permanecen como eventos `SEMILLA` en `TIMELINE.md`. Se convertirán en claims al llegar su turno en el roadmap; así se evita otorgar apariencia de auditoría a fechas usadas inicialmente solo como orientación.

## Registro tabular de la Investigación 051

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-CITIES-STATES-SCOPE-001` | Residencia, aldea, agregación, densidad, especialización, administración, desigualdad, jerarquía, autoridad, coerción, ciudad, Estado e imperio son resultados operacionales distintos. | A-SEM | AUDITADO | `EVID-CITIES-STATES-METHOD-001` | `INV-CITIES-STATES-001` |
| `CLAIM-CITIES-STATES-NONINHERITANCE-001` | Ningún resultado hereda automáticamente los demás; una secuencia comparativa requiere puentes y relojes por archivo. | A-SEM/B | AUDITADO | `EVID-CITIES-STATES-METHOD-001`, `EVID-ARCHIVE-MATRIX-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-URBANISM-STATE-SEPARATE-001` | Puede haber ciudad sin Estado centralizado demostrado y Estado sin gran ciudad; tamaño y forma política deben medirse por separado. | A-SEM/B-COND | AUDITADO | `EVID-AFRICA-URBAN-POLYCENTRIC-051-001`, `EVID-EGYPT-CHRONOLOGY-051-001`, `EVID-ANDES-AMAZON-URBANISM-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-ARCHIVES-DIFFERENT-QUESTIONS-001` | Prospección, casas, arquitectura pública, producción, entierros, registros, medidas, isótopos, genomas y paleoambiente responden preguntas y escalas diferentes. | A-SEM | AUDITADO | `EVID-ARCHIVE-MATRIX-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-HYDRAULIC-NOT-DESPOTISM-001` | Infraestructura o oportunidad hidráulica puede restringir coordinación y producción, pero no implica despotismo, coerción o Estado por necesidad. | B-SÍNTESIS | AUDITADO | `EVID-MESOPOTAMIA-URBAN-PATHS-051-001`, `EVID-STATE-MODELS-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-EGYPT-STATE-CHRONOLOGY-001` | El modelo bayesiano restringe el tempo de formación estatal egipcia; fechas de muestras no observan soberanía, frontera o «unificación». | B-COND | AUDITADO | `EVID-EGYPT-CHRONOLOGY-051-001`, `EVID-CIV-EGYPT-CHRONOLOGY-001` | `INV-CITIES-STATES-001` |
| `CLAIM-INDUS-DEURBANIZATION-TRANSFORMATION-001` | La desurbanización del Indo implicó desnucleación y redistribución de asentamientos/prácticas, no desaparición automática de sus poblaciones. | B-COND | AUDITADO | `EVID-INDUS-LANDSCAPE-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-ERLITOU-STATE-CONDITIONAL-001` | Nucleación, cuatro niveles de asentamiento, vías, talleres y edificios apoyan centralidad de Erlitou; capital/realeza/Estado requieren jurisdicción y extracción adicionales. | B para archivo; C-COND forma política | AUDITADO | `EVID-ERLITOU-SETTLEMENT-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-MONUMENT-NOT-STATE-001` | Inversión monumental demuestra coordinación e inversión bajo contexto; no identifica automáticamente dinastía, coerción, templo o Estado. | A-SEM/B | AUDITADO | `EVID-MESOAMERICA-SETTLEMENT-051-001`, `EVID-ANDES-AMAZON-URBANISM-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-ANDES-MONUMENT-NOT-STATE-001` | Las fechas de Norte Chico fijan ocupaciones monumentales aproximadamente `3000–1800 a. C.` sin decidir la forma política. | B cronología; C organización | AUDITADO | `EVID-CIV-NORTECHICO-DATES-001`, `EVID-ANDES-AMAZON-URBANISM-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-AFRICA-URBANISM-POLYCENTRIC-001` | Jenne-jeno y Great Zimbabwe muestran urbanismo, redes y policentrismo africanos sin exigir ciudad compacta, escritura o relevo lineal de capitales. | B-COND | AUDITADO | `EVID-AFRICA-URBAN-POLYCENTRIC-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-INEQUALITY-MULTIDIMENSIONAL-001` | Variación doméstica, riqueza, transmisión, rango, clase y poder político requieren proxies y puentes distintos. | A-SEM/B | AUDITADO | `EVID-INEQUALITY-051-001`, `EVID-CIV-HOUSE-GINI-001` | `INV-CITIES-STATES-001` |
| `CLAIM-STANDARDIZATION-NOT-CENTRAL-001` | Medidas estandarizadas pueden emerger por copia e interacción entre usuarios; no prueban control central sin archivo institucional. | B-COND | AUDITADO | `EVID-STANDARDIZATION-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-WRITING-NOT-STATE-REQUIREMENT-001` | Escritura y Estado están asociados en comparaciones, pero existen Estados sin escritura y registros locales no demuestran alfabetización o soberanía. | B-SÍNTESIS | AUDITADO | `EVID-WRITING-STATE-051-001`, `EVID-CIV-CDLI-P003414-001` | `INV-CITIES-STATES-001` |
| `CLAIM-STATE-CAUSES-MULTIMODEL-001` | Demografía, circunscripción, irrigación, guerra, comercio, ritual, información, ecología y agencia son hipótesis parciales, causales o recíprocas, con predicciones y falsadores. | B-SÍNTESIS | AUDITADO | `EVID-STATE-MODELS-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-COLLAPSE-TRANSFORMATION-001` | «Colapso» debe desagregarse en transformación, fragmentación, migración, cambio institucional o pérdida diferencial de archivo; no equivale a desaparición de pueblos. | B-SÍNTESIS | AUDITADO | `EVID-COLLAPSE-TRANSFORM-051-001`, `EVID-INDUS-LANDSCAPE-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-ANCESTRY-NOT-POLITY-001` | Parentesco y ancestría no identifican por sí solos etnia, lengua, ciudadanía, clase, oficio, Estado o imperio. | A-SEM | AUDITADO | `EVID-ANCESTRY-POLITY-051-001` | `INV-CITIES-STATES-001` |
| `CLAIM-CIV051-RECONCILIATION-001` | La 051 profundiza y audita sin sustituir `INV-CIV-ORIGINS-001`; los IDs CIV reutilizados conservan proposición y estado `TRAZADO`. | A-SEM | AUDITADO | `EVID-CITIES-STATES-METHOD-001` | `INV-CITIES-STATES-001` |

## Investigación 051 — Aldeas, ciudades y Estados

- **Partición:** dieciocho categorías operacionales sin herencia automática.
- **Regiones:** Mesopotamia, Nilo, Indo, China, Mesoamérica, Andes/Amazonia y África se comparan sin plantilla ni reloj único.
- **Archivos:** asentamiento, hogares, producción, registros, medidas, entierros, ambiente y biología conservan preguntas separadas.
- **Política:** ciudad, Estado e imperio necesitan criterios propios; monumento, muralla y escritura no funcionan como atajos.
- **Causalidad:** cada modelo declara mecanismo, escala, alternativa y falsador.
- **Transformación:** «colapso» se traduce a cambios medibles y continuidades posibles.
- **Reconciliación:** CIV-001 sigue `TRAZADO`; sólo se reutilizan proposiciones idénticas.

## Registro tabular de la Investigación 052

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-CIVILIZATIONS-DIMENSIONS-001` | Producción/paisaje, urbanismo, administración, escritura/notación/oralidad, desigualdad, autoridad, imperio, infraestructura, redes, ecología y transformación son dimensiones independientes; no se suman como «civilización». | A-SEM/B-SÍNTESIS | AUDITADO | `EVID-CIVILIZATIONS-METHOD-052-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-CLOCKS-001` | Edad de muestra, rasgo, fase, sitio, región, institución, corpus e historia biológica son relojes distintos y no se promedian para fechar una entidad política. | A-SEM/B | AUDITADO | `EVID-CIVILIZATIONS-METHOD-052-001`, `EVID-CIVILIZATIONS-EGYPT-052-001`, `EVID-CIVILIZATIONS-CHINA-052-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-COMPARISON-NONRANKING-001` | La comparación válida contrasta dimensiones, mecanismos y casos negativos; una prioridad cronológica o suma de rasgos no produce ranking de sociedades. | A-SEM/B-SÍNTESIS | AUDITADO | `EVID-CIVILIZATIONS-METHOD-052-001`, `EVID-CIVILIZATIONS-CONTROLS-052-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-MESOPOTAMIA-PLURAL-001` | Tell Brak, Uruk, Shakhi Kora y las series regionales documentan trayectorias conectadas de urbanización, centralización, dispersión y reorganización, no difusión irreversible desde una sola cuna. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-MESOPOTAMIA-052-001`, `EVID-MESOPOTAMIA-URBAN-PATHS-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-EGYPT-CLOCKS-001` | La cronología bayesiana restringe el tempo de Egipto temprano, pero no observa soberanía, frontera o «unificación» como un instante. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-EGYPT-052-001`, `EVID-EGYPT-CHRONOLOGY-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-INDUS-UNDECIPHERED-001` | El corpus del Indo exhibe orden y regularidades, pero continúa sin lengua, lectura o glotografía demostradas; estructura estadística no es desciframiento. | B estructura; D lengua/lectura | AUDITADO | `EVID-CIVILIZATIONS-INDUS-052-001`, `EVID-CIVILIZATIONS-WRITING-052-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-CHINA-NAME-LIMIT-001` | Centralidad y rasgos de Erlitou no demuestran por sí solos la identificación con Xia; los huesos oraculares fechan un archivo Shang tardío, no el origen de escritura o autoridad chinas. | B archivo; C-D correspondencia | AUDITADO | `EVID-CIVILIZATIONS-CHINA-052-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-MESOAMERICA-FORMS-001` | Aguada Fénix, Teotihuacan y paisajes maya separan coordinación monumental, ciudad, conectividad y forma de gobierno; no constituyen un paquete mesoamericano único. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-MESOAMERICA-052-001`, `EVID-MESOAMERICA-SETTLEMENT-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-ANDES-ORALITY-001` | Monumentalidad temprana y administración mediante khipus muestran que Estado/imperio, memoria y registro no requieren escritura glotográfica; cada soporte conserva límites propios. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-ANDES-052-001`, `EVID-ANDES-AMAZON-URBANISM-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-CONTROLS-001` | Jenne-jeno, Great Zimbabwe y la Alta Amazonia falsan escritura, palacio, compacidad pétrea o relevo lineal como requisitos universales de urbanismo o instituciones complejas. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-CONTROLS-052-001`, `EVID-AFRICA-URBAN-POLYCENTRIC-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-NETWORKS-ALTERNATIVES-001` | Similitud, material exótico o técnica compartida son compatibles con intercambio, movilidad, imitación, tributo, saqueo o convergencia; difusión necesita dirección, agentes y reloj. | A-SEM/B | AUDITADO | `EVID-CIVILIZATIONS-NETWORKS-052-001`, `EVID-STANDARDIZATION-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-CAUSES-RECIPROCAL-001` | Clima, ríos, irrigación, demografía, guerra, comercio, tributación, información, ritual y agencia son mecanismos parciales y recíprocos con casos negativos; ninguno explica globalmente una «civilización». | B-SÍNTESIS | AUDITADO | `EVID-CIVILIZATIONS-CAUSES-052-001`, `EVID-STATE-MODELS-051-001` | `INV-CIVILIZATIONS-001` |
| `CLAIM-CIVILIZATIONS-RECONCILIATION-001` | La 052 compara dimensiones sin duplicar 050/051, no promueve ni sustituye `INV-CIV-ORIGINS-001`, y cierra la secuencia global `001–052` sin declarar otro pendiente. | A-SEM | AUDITADO | `EVID-CIVILIZATIONS-METHOD-052-001` | `INV-CIVILIZATIONS-001` |

## Investigación 052 — Comparación arqueológica de primeras civilizaciones

- **Categoría:** «civilización» es etiqueta historiográfica/navegacional, no esencia ni variable.
- **Matriz:** once dimensiones con archivos, relojes y límites independientes; no hay suma ni ranking.
- **Regiones:** Mesopotamia, Nilo, Indo, China, Mesoamérica y Andes conservan asimetrías; África y Amazonia funcionan como controles.
- **Escrituras:** soporte, sistema, lengua, género, usuarios y oralidad no se ordenan cognitivamente.
- **Política:** ciudad, Estado e imperio permanecen ejes paralelos.
- **Causalidad:** redes, ambiente e instituciones tienen alternativas, reciprocidad y falsadores.
- **Reconciliación:** 050/051 se usan como dependencias; CIV-001 sigue `TRAZADO`; `001–052` queda completo.

## Registro tabular de CIV-002 — Cómo fechamos el pasado humano

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-CIV-DATING-LAYERS-001` | Muestra, determinación instrumental, distribución calendario, contexto, fase y acontecimiento/proceso son seis niveles inferenciales distintos; cada transferencia exige un puente demostrable. | A-SEM | AUDITADO | `EVID-CIV-DATING-LAYERS-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-RADIOCARBON-CALIBRATION-001` | Una edad convencional `14C BP` se transforma mediante una curva versionada en una distribución calendario que puede ser multimodal; no es una lectura directa de año calendario. | A | AUDITADO | `EVID-CIV-RADIOCARBON-CURVES-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-RADIOCARBON-RESERVOIR-001` | La curva y corrección dependen del origen del carbono, hemisferio y reservorio; los offsets regionales o dulceacuícolas requieren evidencia local y no se universalizan. | A/B-LOCAL | AUDITADO | `EVID-CIV-RADIOCARBON-CURVES-001`, `EVID-CIV-MININO-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-SAMPLE-SELECTION-001` | Materiales de vida corta y entidad única reducen edad incorporada y mezcla, pero no demuestran asociación con la deposición o acontecimiento objetivo. | A-SEM/B | AUDITADO | `EVID-CIV-SAMPLE-SELECTION-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-BAYES-MODEL-001` | Un modelo bayesiano arqueológico combina verosimilitud con priors explícitos de orden/fase; sus límites posteriores son condicionales a asociación, estructura, offsets y tratamiento de outliers. | A método; B-C por caso | AUDITADO | `EVID-CIV-BAYES-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-PRECISION-ACCURACY-001` | Un intervalo más estrecho no es automáticamente más exacto: precisión puede aumentar bajo priors fuertes mientras un sesgo de muestra, curva, asociación o sincronismo desplaza el objetivo. | A-SEM/B | AUDITADO | `EVID-CIV-BAYES-001`, `EVID-CIV-THERA-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-STRATIGRAPHY-SERIATION-001` | Estratigrafía, `terminus post/ante quem`, seriación, tipología y cross-dating restringen orden o límites; no producen por sí solos años, pueblos, dinastías o instituciones. | A-SEM/B | AUDITADO | `EVID-CIV-RELATIVE-DATING-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-DENDRO-WIGGLE-001` | Dendrocronología y wiggle matching pueden anclar secuencias anuales cuando patrón, borde, conteo y referencia son válidos; tala, construcción y uso continúan siendo eventos separados. | B-COND | AUDITADO | `EVID-CIV-DENDRO-MESOPOTAMIA-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-LUMINESCENCE-001` | La luminiscencia fecha el último reinicio relevante por luz o calor bajo dosis/tasa y blanqueamiento; no fecha automáticamente un artefacto, edificio u ocupación. | A método; B-C por contexto | AUDITADO | `EVID-CIV-COMPLEMENTARY-CLOCKS-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-TEPHRA-ARCHAEOMAG-001` | Arqueomagnetismo y tefrocronología producen edades/correlaciones sólo bajo curvas regionales, estabilidad, huellas y deposición demostradas; su referencia puede transferir dependencias de otros relojes. | B-COND | AUDITADO | `EVID-CIV-COMPLEMENTARY-CLOCKS-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-HISTORICAL-SYNCHRONISM-001` | Listas reales, años de reinado, epónimos, inscripciones y astronomía transfieren cronología sólo bajo identidad, transmisión, calendario y vínculo contemporáneo defendibles. | B-COND | AUDITADO | `EVID-CIV-HISTORICAL-SYNCHRONISMS-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-EGYPT-CHRONOLOGY-002` | El modelo de Egipto temprano restringe fases mediante `186` resultados, materiales de vida corta, seriación y Bayes; no observa «unificación», soberanía o frontera como instante. | B-COND | AUDITADO | `EVID-CIV-EGYPT-DATING-002`, `EVID-CIV-EGYPT-CHRONOLOGY-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-MESOPOTAMIA-CHRONOLOGY-001` | Anillos, radiocarbono y archivos de Kültepe/Acemhöyük favorecen un marco compatible con la cronología media bajo el modelo publicado; madera, edificio y epónimo no son equivalentes. | B-COND | AUDITADO | `EVID-CIV-DENDRO-MESOPOTAMIA-001`, `EVID-CIV-HISTORICAL-SYNCHRONISMS-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-THERA-OPEN-001` | Thera muestra que mediciones precisas pueden coexistir con colocaciones históricas abiertas por anatomía del olivo, mesetas, offsets y sincronismos; CIV-002 no adopta un año exacto. | B evidencia; C-D año exacto | AUDITADO | `EVID-CIV-THERA-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-GREAT-ZIMBABWE-CHRONOLOGY-001` | Fechas, estratigrafía y arquitectura permiten reconstruir una cronología condicionada de Great Zimbabwe; la precisión no restaura procedencias destruidas ni demuestra una sucesión lineal de capitales. | B-COND | AUDITADO | `EVID-CIV-GREAT-ZIMBABWE-DATING-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-MININO-RESERVOIR-001` | Nueve pares de Minino estiman un efecto dulceacuícola local cercano a `490 ± 80` años `14C`; los isótopos no predicen el offset individual y la corrección no se exporta. | B-LOCAL | AUDITADO | `EVID-CIV-MININO-001` | `INV-CIV-DATING-001` |
| `CLAIM-CIV-INDEPENDENCE-CIRCULARITY-001` | Resultados que comparten muestra, curva, contexto, prior, sincronismo o base legada no constituyen verificaciones totalmente independientes; la circularidad debe auditarse por dependencia. | A-SEM/B | AUDITADO | `EVID-CIV-INDEPENDENCE-001` | `INV-CIV-DATING-001` |

## CIV-002 — Resultado editorial

- **Cadena:** seis niveles con observación, inferencia, límite y falsador propios.
- **Curvas:** IntCal20/SHCal20/Marine20 verificadas como familia oficial activa al corte `2026-08-21`.
- **Métodos:** relojes físicos, secuencias y textos se comparan por producto, no se promedian.
- **Casos:** Egipto, Mesopotamia/Anatolia, Thera, Great Zimbabwe y Minino prueban transferencias y fallos distintos.
- **Reconciliación:** `CLAIM-CIV-DATING-CONTEXT-001` queda `AUDITADO`; CIV-001 conserva `TRAZADO` y los cortes 051/052 no se reescriben.


## CIV-003 — Asia sudoccidental: claims regionales auditados

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-CIV-SWASIA-REGIONS-001` | Levante, Anatolia, Alta Mesopotamia, Zagros/piedemontes y llanuras meridionales conservan trayectorias conectadas pero no una secuencia regional única. | B-REG | AUDITADO | `EVID-CIV-SWASIA-REGIONAL-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-NAMES-001` | Natufiense, PPNA, PPNB, Ubaid y Uruk son etiquetas arqueológicas de materiales/fases; no demuestran por sí solas pueblo, lengua, ascendencia o entidad política. | A-SEM | AUDITADO | `EVID-CIV-SWASIA-NOMENCLATURE-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-MOBILITY-001` | Isótopos de Jericó y cinco sitios sirios favorecen residencia mayoritariamente local en muestras tempranas y movilidad tardía mayor en Siria, con alcance individual y baselines condicionados. | B-LOCAL-COND | AUDITADO | `EVID-CIV-SWASIA-JERICHO-001`, `EVID-CIV-SWASIA-SYRIA-MOBILITY-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-CULTIVATION-DOMESTICATION-001` | Procesamiento, cultivo propuesto, domesticación morfológica y dependencia económica son resultados separables que cambiaron de forma gradual y regional. | B-COND | AUDITADO | `EVID-CIV-SWASIA-OHALO-CULTIVATION-001`, `EVID-SWASIA-PLANT-PROCESS-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-HERDING-001` | Fauna y sales de orina en Aşıklı Höyük apoyan un proceso milenario de manejo local de ovicaprinos antes de tratarlo como pastoralismo plenamente formado. | B-LOCAL-COND | AUDITADO | `EVID-CIV-SWASIA-ASIKLI-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-MONUMENT-LIMIT-001` | Arquitectura extraordinaria, pilares, simbolismo y molienda en WF16/Göbekli Tepe no identifican por sí solos templo, sacerdocio, jerarquía o Estado. | A-SEM; B archivo | AUDITADO | `EVID-CIV-SWASIA-GOBEKLI-WF16-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-KINSHIP-001` | Paleogenomas anatolios muestran que parentesco entre coenterramientos y conexiones maternas variaron por sitio/fase; casa y entierro no fijan una unidad social universal. | B-LOCAL-COND | AUDITADO | `EVID-CIV-SWASIA-KINSHIP-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-CLIMATE-NONDETERMINISM-001` | Más de 3,000 fechas alrededor de los eventos 9.2/8.2 ka no apoyan colapso, abandono o migración regionales simultáneos; las respuestas fueron locales. | B-REG | AUDITADO | `EVID-CIV-SWASIA-CLIMATE-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-URBAN-NORTH-SOUTH-001` | Tell Brak, series septentrionales y archivos meridionales apoyan urbanizaciones conectadas con rutas y pulsos distintos, no una difusión sur–norte única. | B-COND | AUDITADO | `EVID-CIV-TELLBRAK-SURVEY-001`, `EVID-CIV-NMESO-URBAN-PATHS-001`, `EVID-CIV-SWASIA-LAGASH-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-URBAN-HINTERLAND-001` | La comparación de 577 conjuntos en 245 sitios muestra abastecimiento animal urbano dependiente de paisajes rurales bajo patrones regionales variables. | B-REG | AUDITADO | `EVID-CIV-SWASIA-PROVISIONING-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-SOUTH-LANDSCAPE-001` | Lagash y el archivo geoarqueológico meridional apoyan urbanismo denso/multicéntrico condicionado por paisajes fluviales; población y mecanismo económico siguen modelados. | B-COND | AUDITADO | `EVID-CIV-SWASIA-LAGASH-001`, `EVID-CIV-SWASIA-SOUTH-LANDSCAPE-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-CENTRALIZATION-REVERSIBLE-001` | La secuencia de Shakhi Kora contradice una centralización irreversible: hogares institucionales fueron seguidos por dispersión, aunque «rechazo» sigue inferido. | B-COND | AUDITADO | `EVID-CIVILIZATIONS-MESOPOTAMIA-052-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-ANCESTRY-NOT-IDENTITY-001` | Afinidad, mezcla y parentesco paleogenómicos no equivalen a cultura arqueológica, etnia, lengua o ciudadanía. | A-SEM; B datos | AUDITADO | `EVID-CIV-SWASIA-GENOMES-001` | `INV-CIV-SWASIA-001` |
| `CLAIM-CIV-SWASIA-NO-BIRTHDATE-001` | Ninguna muestra, fase o sitio de Asia sudoccidental fecha un acontecimiento operacional único llamado «nacimiento de la civilización». | A-SEM | AUDITADO | `EVID-CIV-SWASIA-REGIONAL-001`, `EVID-CIV-SWASIA-LAGASH-001` | `INV-CIV-SWASIA-001` |

### Reconciliación con CIV-001

`CLAIM-CIV-SEQUENCE-NONUNIVERSAL-001`, `CLAIM-CIV-SEDENTISM-BEFORE-AGRICULTURE-001`, `CLAIM-CIV-STORAGE-BEFORE-DOMESTICATION-001`, `CLAIM-CIV-URBANISM-MULTIPATH-001` y `CLAIM-CIV-WRITING-ADMIN-001` pasan a `AUDITADO` por CIV-003. El cambio afecta esas proposiciones exactas; `INV-CIV-ORIGINS-001` conserva `TRAZADO` y no transmite estado a sus otros claims.

## MED-001 — Efectos, daños y aplicabilidad de intervenciones

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-QUESTION-001` | Un efecto clínico sólo es interpretable bajo población, estrategias, comparador, desenlace, tiempo y estimando explícitos. | A-SEM | AUDITADO | `EVID-MED-QUESTION-ESTIMAND-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-RANDOMIZATION-001` | La asignación aleatoria con ocultamiento sustenta comparabilidad probabilística; no corrige pérdidas, desviaciones, medición o selección de resultados posteriores. | A método | AUDITADO | `EVID-MED-RANDOMIZATION-BIAS-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-COMPARATOR-001` | El comparador y las cointervenciones definen el contraste; placebo, simulación, atención usual y estrategia activa no estiman el mismo efecto. | A-SEM/B | AUDITADO | `EVID-MED-COMPARATOR-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-ESTIMAND-001` | Asignar, iniciar, adherir o recibir una intervención son estimandos distintos cuando ocurren cruces, rescate, abandono o muerte. | A método | AUDITADO | `EVID-MED-QUESTION-ESTIMAND-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-OUTCOMES-001` | Significación, marcador y conjunto básico de desenlaces no equivalen a importancia clínica; estimación, intervalo, escala y relevancia deben declararse por desenlace. | A-SEM/B | AUDITADO | `EVID-MED-OUTCOMES-HARMS-001`, `EVID-MED-CAST-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-HARMS-001` | Daños requieren búsqueda, denominador, gravedad, tiempo y seguimiento propios; ausencia de diferencia en un ensayo pequeño no demuestra seguridad. | A-SEM/B | AUDITADO | `EVID-MED-OUTCOMES-HARMS-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-REPORTING-VALIDITY-001` | SPIRIT, CONSORT, PRISMA y TIDieR mejoran transparencia, pero una descripción completa no certifica diseño válido ni bajo riesgo de sesgo. | A-SEM | AUDITADO | `EVID-MED-RANDOMIZATION-BIAS-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-SURROGATE-CAST-001` | En CAST, supresión de ectopia coexistió con exceso de mortalidad bajo encainida/flecainida; mejorar ese sustituto no demostró beneficio clínico. | A ensayo; B generalización metódica | AUDITADO | `EVID-MED-CAST-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-SURGERY-OPERATOR-001` | Técnica, operador, equipo, centro, curva de aprendizaje y cointervenciones pueden integrar o modificar el efecto quirúrgico y deben medirse/modelarse. | A método; B por intervención | AUDITADO | `EVID-MED-SURGERY-METHOD-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-SHAM-001` | Un control procedimental simulado puede aislar componentes no específicos sólo si es necesario, proporcional, minimiza riesgo y se consiente explícitamente; no es requisito universal. | B-ÉTICA/MÉTODO | AUDITADO | `EVID-MED-COMPARATOR-001`, `EVID-MED-SURGERY-METHOD-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-FIDELITY-001` | En 146 participantes seleccionados, la mejoría a 12 meses tras meniscectomía parcial no superó de forma relevante al procedimiento simulado en los desenlaces primarios; la mejoría pre–post no aisló la resección. | A ensayo; B alcance | AUDITADO | `EVID-MED-FIDELITY-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-TARGET-TRIAL-001` | Estimar efectos con datos observacionales exige explicitar elegibilidad, estrategias, tiempo cero, seguimiento, desenlaces y análisis del ensayo objetivo; tamaño no elimina confusión o selección. | A método | AUDITADO | `EVID-MED-TARGET-TRIAL-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-TRANSPORTABILITY-001` | Validez interna no garantiza transportabilidad: riesgo basal, modificadores, experiencia, sistema, cointervenciones y medición deben conectarse con la población objetivo. | A-SEM/B | AUDITADO | `EVID-MED-TRANSPORTABILITY-DECISION-001` | `INV-MED-INTERVENTIONS-001` |
| `CLAIM-MED-DECISION-001` | La decisión clínica no sale automáticamente del estimador: integra efectos absolutos, certeza, daños, carga, factibilidad, alternativas y preferencias en un contexto concreto. | A-SEM | AUDITADO | `EVID-MED-TRANSPORTABILITY-DECISION-001` | `INV-MED-INTERVENTIONS-001` |

## MED-002 — Pruebas diagnósticas, probabilidad y utilidad

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-DX-QUESTION-001` | Una prueba sólo es evaluable bajo población, uso previsto, condición objetivo, versión, umbral, referencia, comparador y consecuencias explícitos. | A-SEM | AUDITADO | `EVID-MED-DX-QUESTION-THRESHOLD-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-INTENDED-USE-001` | Cribar, descartar, confirmar, clasificar, estadificar y monitorizar son usos distintos y no heredan automáticamente el mismo umbral o diseño. | A-SEM | AUDITADO | `EVID-MED-DX-QUESTION-THRESHOLD-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-REFERENCE-001` | Una referencia imperfecta, incorporada o dependiente de la prueba índice puede clasificar erróneamente y sesgar la exactitud. | A método | AUDITADO | `EVID-MED-DX-BIAS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-SPECTRUM-001` | Casos inequívocos y controles sanos no representan necesariamente el espectro clínico y pueden inflar el rendimiento. | A método | AUDITADO | `EVID-MED-DX-BIAS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-VERIFICATION-001` | Verificar selectivamente según el índice o con referencias distintas puede ocultar falsos negativos y alterar sensibilidad/especificidad. | A método | AUDITADO | `EVID-MED-DX-BIAS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-THRESHOLD-001` | Un umbral elegido después de observar resultados optimiza la muestra; el uso clínico exige umbral y consecuencias preespecificados o validación independiente. | A método | AUDITADO | `EVID-MED-DX-QUESTION-THRESHOLD-001`, `EVID-MED-DX-UTILITY-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-METRICS-001` | Sensibilidad, especificidad, razones de verosimilitud, valores predictivos, AUC y calibración describen productos distintos; ninguna métrica aislada resume utilidad. | A-SEM | AUDITADO | `EVID-MED-DX-METRICS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-PREVALENCE-001` | Los valores predictivos dependen de la frecuencia de la condición y sensibilidad/especificidad también pueden variar con espectro y contexto. | A método/B transporte | AUDITADO | `EVID-MED-DX-METRICS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-INDETERMINATE-001` | Excluir fallos técnicos o resultados indeterminados puede sobrestimar rendimiento y debe mostrarse con denominador y manejo. | A método | AUDITADO | `EVID-MED-DX-BIAS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-COMPARATIVE-001` | Comparar pruebas en poblaciones o referencias distintas no identifica su diferencia; las comparaciones legítimas requieren diseños emparejados o rutas comparables. | A método | AUDITADO | `EVID-MED-DX-SYNTHESIS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-UTILITY-001` | Exactitud diagnóstica no demuestra beneficio: utilidad exige conectar información con acciones, beneficios, daños, carga y alternativas. | A-SEM/B | AUDITADO | `EVID-MED-DX-UTILITY-001`, `EVID-MED-DX-UKCTOCS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-PREDICTION-001` | Un modelo predictivo requiere calibración y validación externa además de discriminación; desarrollo y evaluación diagnóstica no son el mismo producto. | A método | AUDITADO | `EVID-MED-DX-AI-MODELS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-AI-001` | Para IA, desempeño retrospectivo no demuestra estabilidad, equidad, integración o utilidad prospectiva; datos, versión, uso y deriva deben auditarse. | A método/B implementación | AUDITADO | `EVID-MED-DX-AI-MODELS-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-RIFT-001` | En RIFT, las reglas de apendicitis tuvieron rendimiento dependiente de sexo y umbral; una puntuación no sustituyó la ruta ni autorizó extrapolación. | A estudio/B alcance | AUDITADO | `EVID-MED-DX-RIFT-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-ADJUST-PE-001` | ADJUST-PE evaluó una estrategia secuencial con probabilidad pretest y D-dímero ajustado por edad, no un umbral aislado aplicable a toda persona. | A estudio/B alcance | AUDITADO | `EVID-MED-DX-ADJUST-PE-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-PROPER-001` | PROPER mostró que una ruta PERC redujo CTPA en pacientes de muy bajo riesgo seleccionados, con seguimiento de eventos; no valida PERC fuera de esa entrada. | A ensayo/B alcance | AUDITADO | `EVID-MED-DX-PROPER-001` | INV-MED-DIAGNOSTICS-001 |
| `CLAIM-MED-DX-UKCTOCS-001` | En UKCTOCS, desplazar la distribución de estadio no produjo reducción significativa de mortalidad por cáncer ovárico/tubárico; detección más temprana no garantizó beneficio. | A ensayo/B generalización metódica | AUDITADO | `EVID-MED-DX-UKCTOCS-001` | INV-MED-DIAGNOSTICS-001 |

## MED-003 — Archivos y orígenes de la medicina

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-HIST-ARCHIVE-001` | Hueso, molécula, objeto, imagen y texto son archivos con productos distintos; ninguno sustituye automáticamente a los demás. | A-SEM | AUDITADO | `EVID-MED-HIST-METHOD-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-CONTEXT-001` | Procedencia, fecha, asociación y tafonomía deben sostenerse antes de interpretar una huella como biológica o cultural. | A método | AUDITADO | `EVID-MED-HIST-METHOD-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-LESION-001` | Una lesión esquelética exige descripción y diferencial; rara vez identifica por sí sola enfermedad, síntomas o categoría histórica. | A método | AUDITADO | `EVID-MED-HIST-DIAGNOSIS-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-OSTEOLOGICAL-PARADOX-001` | Lesiones visibles dependen de supervivencia, mortalidad selectiva, edad, movilidad y heterogeneidad; mayor frecuencia no equivale directamente a peor salud. | A método | AUDITADO | `EVID-MED-HIST-OSTEOLOGY-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-HEALING-001` | Remodelación demuestra respuesta vital y supervivencia durante un intervalo, no tratamiento, causalidad terapéutica ni curación clínica. | A-SEM/B biología | AUDITADO | `EVID-MED-HIST-DIAGNOSIS-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-CARE-001` | Supervivencia prolongada con dependencia funcional grave puede apoyar asistencia sostenida cuando patología, función y contexto se modelan explícitamente. | B-COND | AUDITADO | `EVID-MED-HIST-MANBAC-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-MOTIVE-001` | La asistencia inferida no identifica automáticamente compasión, obligación, parentesco, estatus, coerción, identidad del cuidador o calidad de vida. | A-SEM | AUDITADO | `EVID-MED-HIST-CARE-MOTIVE-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-INTERVENTION-001` | Una intervención intencional requiere patrón compatible, respuesta vital y exclusión explícita de desarrollo, trauma, enfermedad y daño posmortem. | A método/B caso | AUDITADO | `EVID-MED-HIST-INTERVENTION-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-BORNEO-001` | Liang Tebo TB1 conserva pérdida distal de extremidad y supervivencia prolongada; la amputación intencional está apoyada pero sigue controvertida frente a alternativas traumáticas e infecciosas. | B-COND/ABIERTO | AUDITADO | `EVID-MED-HIST-BORNEO-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-TREPANATION-001` | Una apertura craneal puede apoyar trepanación tras diferencial; remodelación no identifica indicación, eficacia ni una tasa clínica comparable sin denominadores equivalentes. | B-COND | AUDITADO | `EVID-MED-HIST-TREPANATION-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-BIOMOLECULAR-001` | ADN o proteínas antiguas requieren autenticación, controles y referencias apropiadas; una asignación taxonómica no es válida sólo por proceder de un resto antiguo. | A método | AUDITADO | `EVID-MED-HIST-BIOMOLECULAR-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-PATHOGEN-001` | Un patógeno autenticado demuestra presencia en la muestra; no hereda síntomas, causa de muerte, prevalencia, transmisión ni fecha de origen. | A-SEM/B muestra | AUDITADO | `EVID-MED-HIST-PATHOGEN-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-RESIDUE-001` | Una planta, hongo o compuesto en cálculo dental demuestra exposición oral bajo controles, no automedicación, dosis, conocimiento farmacológico o efecto. | A-SEM/B muestra | AUDITADO | `EVID-MED-HIST-RESIDUE-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-TEXT-001` | Un texto documenta categorías y repertorios históricos; muchos pasajes no permiten diagnóstico biológico moderno y deben conservar su marco social y filológico. | A método | AUDITADO | `EVID-MED-HIST-TEXT-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-PRACTICE-001` | Una receta, norma o imagen documentada no demuestra uso general, composición ejecutada, acceso, profesión ni eficacia. | A-SEM | AUDITADO | `EVID-MED-HIST-TEXT-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-VISIBILITY-001` | Los archivos conservados seleccionan tejidos, supervivientes, entierros, colecciones y regiones; ausencia de señal no demuestra ausencia de cuidado o enfermedad. | A método/B alcance | AUDITADO | `EVID-MED-HIST-OSTEOLOGY-001`, `EVID-MED-HIST-BIOMOLECULAR-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-NO-BIRTHDATE-001` | Ninguna muestra o texto fecha un acontecimiento operacional único llamado nacimiento de la medicina; «primero conocido» es un límite del archivo. | A-SEM | AUDITADO | `EVID-MED-HIST-SYNTHESIS-001` | INV-MED-ORIGINS-001 |
| `CLAIM-MED-HIST-NONLINEAR-001` | La historia mundial de la medicina no forma una escala universal de progreso: conserva trayectorias regionales, circulación, pérdidas, coerción y cambios de producto. | A-SEM/B histórico | AUDITADO | `EVID-MED-HIST-SYNTHESIS-001` | INV-MED-ORIGINS-001 |


## MED-004 — Mesopotamia y valle del Nilo

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-ANE-ARCHIVE-001` | Tablilla, papiro, ostracon, ley, carta y cuerpo son archivos con productos distintos; ninguno hereda automáticamente práctica o efecto. | A-SEM | AUDITADO | `EVID-MED-ANE-METHOD-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-COPY-001` | Fecha material, fecha de copia, composición propuesta y uso son cronologías distintas. | A método | AUDITADO | `EVID-MED-ANE-METHOD-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-GENRE-001` | Receta, pronóstico, carta, norma y registro laboral responden preguntas distintas y no comparten denominador. | A-SEM | AUDITADO | `EVID-MED-ANE-GENRES-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-MAGIC-BINARY-001` | “Magia” y “medicina racional” no describen cajas históricas opuestas: observación, preparados, recitación y ritual coexisten. | A/B histórico | AUDITADO | `EVID-MED-ANE-ROLES-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-CORPUS-001` | La Enciclopedia Médica de Nínive es una compilación neoasiria estructurada sobre tradiciones anteriores; no fecha el comienzo de la terapéutica. | A/B documental | AUDITADO | `EVID-MED-MESO-NINMED-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-ROLES-001` | Āšipu y asû presentan diferencias y solapamientos variables; traducirlos como mago y médico modernos crea fronteras demasiado rígidas. | B histórico | AUDITADO | `EVID-MED-ANE-ROLES-001`, `EVID-MED-ANE-COURT-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-DIAGNOSIS-001` | Sakikkû organiza signos, etiologías y pronósticos en una epistemología propia; no entrega diagnósticos biomédicos transparentes. | B documental | AUDITADO | `EVID-MED-MESO-SAKIKKU-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-THERAPY-001` | Textos terapéuticos conservan ingredientes, procesamiento y vías; etiquetas de “probado” no suministran comparador, denominador o daños. | B documental/A límite | AUDITADO | `EVID-MED-MESO-THERAPY-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-PRACTICE-001` | Cartas de corte documentan consultas y decisiones situadas, pero seleccionan élites y episodios comunicables. | B-LOCAL | AUDITADO | `EVID-MED-ANE-COURT-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-MESO-LAW-001` | Las leyes de Hammurabi 215–223 representan honorarios y consecuencias jerárquicos; no prueban aplicación uniforme ni cobertura. | A documental/B interpretación | AUDITADO | `EVID-MED-MESO-HAMMURABI-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-CORPUS-001` | Los papiros egipcios conservan géneros, fechas y procedencias distintas; no constituyen una medicina nacional uniforme durante milenios. | A/B documental | AUDITADO | `EVID-MED-EGY-PAPYRI-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-TRAUMA-001` | Edwin Smith documenta estructura textual de examen, juicio, pronóstico y tratamiento; no demuestra resultados ni el nacimiento de la cirugía. | B documental/A límite | AUDITADO | `EVID-MED-EGY-SMITH-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-REPRODUCTION-001` | UC 32057 documenta categorías y procedimientos reproductivos; no prueba exactitud, ejecución, experiencia de pacientes o autoría femenina. | B documental | AUDITADO | `EVID-MED-EGY-LAHUN-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-ROLES-001` | Los títulos hacen visibles especialistas de élite pero subrepresentan cuidado doméstico, partería y actores sin titulatura. | B histórico | AUDITADO | `EVID-MED-EGY-TITLES-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-DEIR-001` | Deir el-Medina documenta ausencia por enfermedad y redes de apoyo en una comunidad estatal especializada; no representa todo Egipto. | B-LOCAL | AUDITADO | `EVID-MED-EGY-DEIR-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-EGY-BODIES-001` | Restos y CT muestran patología e intervención posible bajo fuerte selección; rara vez conectan una lesión con una receta o causa de muerte. | B-COND | AUDITADO | `EVID-MED-EGY-BODIES-001`, `EVID-MED-EGY-DENTAL-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-EFFICACY-001` | Texto preciso o ingrediente bioactivo hoy no demuestra eficacia histórica de una fórmula: especie, dosis, preparación, indicación, desenlace y daños pueden faltar. | A-SEM | AUDITADO | `EVID-MED-ANE-EFFICACY-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-CIRCULATION-001` | Cartas prueban circulación situada de especialistas y sustancias entre cortes; similitud aislada no demuestra transmisión, dirección o escala. | B histórico | AUDITADO | `EVID-MED-ANE-CIRCULATION-001` | `INV-MED-ANE-001` |
| `CLAIM-MED-ANE-NONRANKING-001` | Mesopotamia y el valle del Nilo deben compararse por archivo y producto, no mediante una escala universal de avance o prioridad. | A-SEM | AUDITADO | `EVID-MED-ANE-SYNTHESIS-001` | `INV-MED-ANE-001` |

## MED-005 — Asia meridional: corpus, cirugía y transmisiones

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-SA-ARCHIVES-001` | Cuerpo, objeto, copia, estrato, traducción, práctica y consecuencia son archivos y cronologías distintas; ninguna capa hereda automáticamente las propiedades de otra. | A-SEM | AUDITADO | `EVID-MED-SA-METHOD-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-DENTISTRY-001` | Once molares de nueve adultos de Mehrgarh documentan perforación *in vivo* hace 7,500–9,000 años; no prueban profesión, anestesia, motivo terapéutico ni continuidad ayurvédica. | A/B material | AUDITADO | `EVID-MED-SA-MEHRGARH-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-DISEASE-001` | Balathal y Burzahom conservan enfermedad o modificación corporal bajo diferenciales explícitos; no suministran por sí solos el nombre, explicación o tratamiento históricos. | B-COND | AUDITADO | `EVID-MED-SA-BALATHAL-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-VEDIC-001` | Los textos védicos documentan vocabularios, plantas, aflicciones y acciones rituales, pero no son una primera edición de los compendios médicos clásicos. | B histórico | AUDITADO | `EVID-MED-SA-VEDIC-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-CARAKA-COMPOSITE-001` | La *Carakasaṃhitā* se presenta como una obra editorial asociada con Agniveśa, Caraka y Dṛḍhabala, no como creación instantánea de un autor único. | B histórico | AUDITADO | `EVID-MED-SA-CARAKA-LAYERS-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-CARAKA-DATE-001` | Una forma temprana de Caraka se sitúa tentativamente entre el siglo II a. e. c. y el I e. c.; la revisión de Dṛḍhabala entre 300–500 e. c. son intervalos filológicos, no dataciones instrumentales del original. | B-COND | AUDITADO | `EVID-MED-SA-CARAKA-LAYERS-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-CARAKA-TEXT-001` | La variación manuscrita de Caraka demuestra transmisión y selección editorial; no implica que 95 % del texto sea falso ni que una edición impresa sea un autógrafo. | A documental/B interpretación | AUDITADO | `EVID-MED-SA-CARAKA-VARIANTS-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-SUSRUTA-COMPOSITE-001` | La *Suśrutasaṃhitā* es una obra estratificada; la fecha repetida de 600 a. e. c. para un autor individual no expresa el estado filológico vigente. | B histórico | AUDITADO | `EVID-MED-SA-SUSRUTA-DATE-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-SUSRUTA-KL699-001` | KL 699 es un testigo de hoja de palma fechado en 878 e. c. que conserva cerca de 60–70 % del compendio; fecha esa copia y recensión, no cada pasaje ni un autógrafo. | A material/B textual | AUDITADO | `EVID-MED-SA-KL699-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-SURGERY-TEXT-001` | La recensión nepalesa conserva descripciones de reparación nasal y auricular, instrumental, entrenamiento y cuidado; prueba formulación y copia, no frecuencia, resultados o eficacia. | A/B documental | AUDITADO | `EVID-MED-SA-SURGERY-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-SURGERY-CONTINUITY-001` | La rinoplastia publicada en 1794 prueba una práctica moderna temprana situada; semejanza técnica no completa por sí sola una transmisión continua desde los estratos antiguos. | B caso; C continuidad | AUDITADO | `EVID-MED-SA-SURGERY-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-BOWER-001` | El Manuscrito Bower, copiado por varias manos en la primera mitad del siglo VI y hallado cerca de Kucha, ancla circulación centroasiática de medicina sánscrita sin demostrar un centro o uso uniforme. | A/B material | AUDITADO | `EVID-MED-SA-BOWER-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-MATERIA-001` | Un nombre sánscrito de planta no fija especie, parte, preparación, combinación, dosis o toxicidad; la identidad de la materia médica es regional e históricamente condicionada. | A-SEM/B-COND | AUDITADO | `EVID-MED-SA-MATERIA-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-ASHOKA-001` | El segundo edicto rupestre de Aśoka promulga tratamiento para humanos y animales y provisión de plantas, agua y árboles; no menciona hospitales ni demuestra ejecución imperial uniforme. | A documental/B aplicación | AUDITADO | `EVID-MED-SA-ASHOKA-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-HOSPITAL-IDEA-001` | Caraka describe una instalación, personal y suministros para una intervención terapéutica; es una idea profesional textual, no un edificio excavado ni una medida de cobertura. | A/B documental | AUDITADO | `EVID-MED-SA-HOSPITAL-IDEA-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-KUMRAHAR-001` | Un edificio de los siglos IV–V e. c. y sellos de *ārogyavihāra* en Kumrahār apoyan una instalación médica monástica probable, sin resolver capacidad, usuarios, terapias o resultados. | B-LOCAL-COND | AUDITADO | `EVID-MED-SA-KUMRAHAR-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-TIRUMUKKUDAL-001` | Una inscripción de finales del siglo XI en Tirumukkūḍal registra quince camas, personal, suministros y pagos; documenta una institución local, no un sistema regional o nacional. | A documental/B función | AUDITADO | `EVID-MED-SA-TIRUMUKKUDAL-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-TRANSMISSION-001` | Bower, traducciones chinas y recepción en Bagdad documentan circulación selectiva y transformación conceptual; semejanza aislada no demuestra dirección, mecanismo o escala. | B histórico | AUDITADO | `EVID-MED-SA-TRANSMISSION-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-HOUSEHOLD-001` | El canon letrado subrepresenta cuidado doméstico, parto, asistentes, recolectores y prácticas orales; ausencia documental no demuestra ausencia de trabajo médico. | A-SEM/B histórico | AUDITADO | `EVID-MED-SA-VISIBILITY-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-EFFICACY-001` | Antigüedad, detalle textual, plausibilidad o supervivencia de una técnica no demuestran beneficio o seguridad; la eficacia exige formulación, comparador, resultados y daños. | A-SEM | AUDITADO | `EVID-MED-SA-EFFICACY-001` | `INV-MED-SA-001` |
| `CLAIM-MED-SA-NONRANKING-001` | La historia médica de Asia meridional debe compararse por archivo, resolución y producto, no mediante una escala de antigüedad, prioridad o avance civilizatorio. | A-SEM | AUDITADO | `EVID-MED-SA-SYNTHESIS-001` | `INV-MED-SA-001` |

## MED-006 — China y Asia oriental: cánones, prácticas e instituciones

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-EA-ARCHIVES-001` | Testigo, lectura, estrato, operación, institución y consecuencia son capas distintas; ninguna hereda automáticamente las propiedades de otra. | A-SEM | AUDITADO | `EVID-MED-EA-METHOD-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-ORACLE-001` | Las inscripciones Shang documentan aflicciones y consultas de una corte; no son historias clínicas, diagnósticos modernos ni una muestra poblacional. | A/B documental | AUDITADO | `EVID-MED-EA-ORACLE-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-NONLINEAR-001` | Los archivos excavados muestran coexistencia de ritual, sustancias, observación táctil y cálculo; no una transición universal y unidireccional de magia a ciencia. | B histórico | AUDITADO | `EVID-MED-EA-EARLY-MANUSCRIPTS-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-MAWANGDUI-001` | Mawangdui conserva antes de 168 a. e. c. vasos, moxa, recetas y prácticas corporales que difieren de sistemas canónicos posteriores; no contiene ya completo el sistema tardío. | A material/B textual | AUDITADO | `EVID-MED-EA-EARLY-MANUSCRIPTS-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-ZHANGJIASHAN-001` | El *Maishu* de Zhangjiashan y pasajes relacionados de Mawangdui apoyan copia, variación y repertorios móviles; no un autor o linaje textual simple. | A/B textual | AUDITADO | `EVID-MED-EA-EARLY-MANUSCRIPTS-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-TIANHUI-001` | Tianhui/Laoguanshan conserva un corpus médico de comienzos del siglo II a. e. c. sobre vasos, diagnóstico, fórmulas, punción y veterinaria; fecha las copias depositadas, no todas sus fuentes. | A material/B textual | AUDITADO | `EVID-MED-EA-TIANHUI-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-ATTRIBUTION-001` | La relación de Tianhui con Bian Que es una hipótesis histórica; títulos modernos, ocupante de tumba, copista, autor y practicante no son identidades intercambiables. | B-COND | AUDITADO | `EVID-MED-EA-ATTRIBUTION-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-FIGURINE-001` | La figurilla lacada de Tianhui materializa una red corporal temprana; su función didáctica, ritual o clínica exacta permanece abierta. | A material/B-COND | AUDITADO | `EVID-MED-EA-FIGURINE-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-PIERCING-001` | El manuscrito Tianhui de punción formula una técnica sobre *mai*; no equivale sin residuo a la acupuntura actual ni aporta una serie de resultados. | A/B documental | AUDITADO | `EVID-MED-EA-PIERCING-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-NEIJING-001` | El *Huangdi neijing* recibido reúne capas y recensiones editadas decisivamente en Tang y Song; la autoridad del Emperador Amarillo no es una autoría históricamente fechada. | B histórico | AUDITADO | `EVID-MED-EA-CANON-LAYERS-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-PULSE-001` | Los repertorios de pulso documentan una tecnología táctil y taxonomías de cualidades; no demuestran precisión, reproducibilidad o utilidad diagnóstica modernas. | A/B histórico; C desempeño | AUDITADO | `EVID-MED-EA-PULSE-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-SHANGHAN-001` | El *Shanghan lun* y el *Jingui yaolüe* llegaron mediante pérdida, recopilación y edición; la atribución a Zhang Zhongjing no conserva un autógrafo intacto. | B histórico | AUDITADO | `EVID-MED-EA-CANON-LAYERS-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-WUWEI-001` | Wuwei conserva fórmulas, cantidades, restricciones, punción y compra de sustancias en un archivo regional Han; sus afirmaciones internas de efecto no son comparadores. | A/B documental | AUDITADO | `EVID-MED-EA-WUWEI-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-PHARMACOPOEIA-001` | La *Xinxiu bencao* de 659 fue una revisión farmacológica estatal; normatividad editorial no demuestra abastecimiento, identidad de lote, efecto o seguridad uniformes. | A documental/B aplicación | AUDITADO | `EVID-MED-EA-PHARMACOPOEIA-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-DUNHUANG-001` | Los manuscritos médicos de Dunhuang documentan géneros, lenguas y prácticas heterogéneas en circulación; no una escuela única o control central uniforme. | A/B documental | AUDITADO | `EVID-MED-EA-DUNHUANG-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-MOXA-001` | Or.8210/S.6168 conserva gráficos Tang de moxibustión y una interfaz de enseñanza; no registra denominadores, complicaciones ni efecto atribuible. | A material/B función | AUDITADO | `EVID-MED-EA-MOXA-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-SONG-BRONZE-001` | El manual y los modelos de Wang Weiyi en 1027 estandarizaron una cartografía para enseñanza y examen; no hicieron uniforme toda práctica ni sus resultados. | A/B institucional | AUDITADO | `EVID-MED-EA-SONG-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-ISHINPO-001` | *Ishinpō*, compilado en Japón en 984, seleccionó y reorganizó más de doscientas obras y preservó textos perdidos; no es copia pasiva ni censo de práctica japonesa. | A/B documental | AUDITADO | `EVID-MED-EA-ISHINPO-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-DONGUIBOGAM-001` | *Donguibogam*, concluido en Corea en 1613 por orden real, es una síntesis institucional; su edición no mide cobertura, ejecución o efecto de un sistema estatal. | A documental/B aplicación | AUDITADO | `EVID-MED-EA-DONGUIBOGAM-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-MATERIA-001` | Un nombre histórico de sustancia no fija taxón, parte, procedencia, procesamiento, combinación o dosis; muchas identificaciones de Wuwei y Dunhuang siguen tentativas. | B-COND | AUDITADO | `EVID-MED-EA-MATERIA-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-VISIBILITY-001` | Corte, tumbas de élite y compilaciones letradas subrepresentan pacientes, parteras, hogares, vendedores, recolectores y practicantes sin cargo. | A-SEM/B histórico | AUDITADO | `EVID-MED-EA-VISIBILITY-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-EFFICACY-001` | Antigüedad, coherencia, patrocinio estatal o supervivencia textual no demuestran beneficio y seguridad; intervención y diagnóstico requieren los contratos MED-001 y MED-002. | A-SEM | AUDITADO | `EVID-MED-EA-EFFICACY-001` | `INV-MED-EA-001` |
| `CLAIM-MED-EA-NONRANKING-001` | China, Corea y Japón deben compararse por archivo, operación y producto, no mediante una escala universal de prioridad, continuidad o avance. | A-SEM | AUDITADO | `EVID-MED-EA-SYNTHESIS-001` | `INV-MED-EA-001` |
## Claims auditados para MED-007 — Mediterráneo griego y helenístico

| ID | Afirmación delimitada | Evidencias principales | Límite / falsador | Confianza | Estado |
|---|---|---|---|---|---|
| `CLAIM-MED-GR-ARCHIVE-001` | tratado, caso, juramento, decreto, relato votivo y testimonio tardío responden preguntas distintas | comparación de géneros y soportes | una cadena independiente puede cerrar capas hoy abiertas | A-SEM | AUDITADO |
| `CLAIM-MED-GR-NONMIRACLE-001` | explicación natural, invocación divina, ritual y técnica coexistieron | corpus, Juramento, santuarios y prácticas | una polémica local no representa toda la sociedad | A/B histórico | AUDITADO |
| `CLAIM-MED-GR-HIPPOCRATES-001` | el médico histórico no puede identificarse con seguridad como autor del corpus | testimonios clásicos, biografías tardías y crítica textual | un colofón contemporáneo verificable cambiaría una atribución | A/B textual | AUDITADO |
| `CLAIM-MED-GR-CORPUS-001` | el corpus reúne cerca de sesenta textos plurales y a veces contradictorios | inventario, datación, estilo y doctrinas | fronteras y estratos de la colección cambiaron | A/B documental | AUDITADO |
| `CLAIM-MED-GR-SCHOOLS-001` | Cos/Cnido no deben tratarse como dos facultades rígidas demostradas | historia de la clasificación y evidencia antigua | redes o posiciones locales sí pueden demostrarse por caso | B histórico | AUDITADO |
| `CLAIM-MED-GR-PROGNOSIS-001` | el pronóstico organizó signos, curso y credibilidad profesional | *Pronóstico*, *Epidemias* y análisis epistemológico | no entrega calibración o utilidad clínica moderna | A/B textual; C desempeño | AUDITADO |
| `CLAIM-MED-GR-EPIDEMICS-001` | los casos de *Epidemias* son escritura clínica seleccionada, no una cohorte moderna | composición, forma y crítica del género | función original y criterios de inclusión abiertos | A/B textual | AUDITADO |
| `CLAIM-MED-GR-SENSES-001` | la observación médica integró sentidos, razonamiento y algunas percepciones del paciente | pasajes hipocráticos y estudios de epistemología | finura sensorial no prueba exactitud o reproducibilidad | A textual/B histórico | AUDITADO |
| `CLAIM-MED-GR-SURGERY-001` | tratados conservan operaciones detalladas de trauma y otras intervenciones | *Fracturas*, *Articulaciones*, *Heridas de la cabeza* | descripción no prueba ejecución, destreza o efecto | A documental/C efecto | AUDITADO |
| `CLAIM-MED-GR-OATH-001` | el Juramento es una norma situada de fecha y alcance discutidos | texto, historia de recepción y deontología | no se demuestra uso universal entre médicos antiguos | A texto/B-COND alcance | AUDITADO |
| `CLAIM-MED-GR-ASCLEPIUS-001` | santuarios de Asclepio fueron instituciones contemporáneas de otras prácticas | arqueología, epigrafía y textos | coexistencia no implica relación idéntica en cada ciudad | A/B histórico | AUDITADO |
| `CLAIM-MED-GR-IAMATA-001` | las cuatro estelas de Epidauro preservan setenta relatos seleccionados para exhibición pública | inscripciones, composición y análisis narrativo | sin denominador ni verificación causal | A epigráfico/B función/C resultado | AUDITADO |
| `CLAIM-MED-GR-WOMEN-001` | experiencias y voces de mujeres sobreviven mediadas por géneros y autores | tratados ginecológicos, casos e *iamata* | ausencia o discurso indirecto no recupera todo el cuidado | A/B textual | AUDITADO |
| `CLAIM-MED-GR-PUBLIC-001` | ciudades helenísticas contrataron u honraron médicos en relaciones locales | decretos, privilegios y corpus epigráfico | cargo local no demuestra cobertura sanitaria universal | A epigráfico/B institución | AUDITADO |
| `CLAIM-MED-GR-ARISTOTLE-001` | comparación y disección animal ampliaron la investigación anatómica | obras zoológicas y contexto del siglo IV a. e. c. | inferencias entre especies pueden fallar | A textual/B interpretación | AUDITADO |
| `CLAIM-MED-GR-ALEXANDRIA-001` | fuentes posteriores apoyan una ventana excepcional de disección humana con Herófilo y Erasístrato | testimonios convergentes y reconstrucción historiográfica | originales perdidos, escala y duración inciertas | B histórico | AUDITADO |
| `CLAIM-MED-GR-VIVISECTION-001` | Celso y otros autores transmiten una acusación de vivisección alejandrina | atribución explícita y tradición comparada | testimonio tardío, dependencias y distribución desigual | C/CONTROVERTIDO | AUDITADO |
| `CLAIM-MED-GR-SECTS-001` | los empiristas helenísticos construyeron autoridad hipocrática mediante lectura y testimonio | fragmentos y comunidad de lectura ca. 175–75 a. e. c. | etiquetas no inmovilizan a todos sus integrantes | B histórico | AUDITADO |
| `CLAIM-MED-GR-NETWORKS-001` | personas, productos y textos circularon y se recontextualizaron en el Mediterráneo | Fayum, rutas y contactos documentales | semejanza no establece préstamo o dirección | B por caso | AUDITADO |
| `CLAIM-MED-GR-EFFICACY-001` | racionalidad, antigüedad y detalle técnico no demuestran eficacia o seguridad | ausencia de comparadores, denominadores y daños sistemáticos | una serie causal adecuada cambiaría el juicio de un procedimiento | A-SEM | AUDITADO |
| `CLAIM-MED-GR-NONRANKING-001` | la influencia de un archivo no autoriza un ranking universal de tradiciones médicas | comparación por soporte, producto y capa | sólo comparaciones dimensionales equivalentes son legítimas | A-SEM | AUDITADO |

## MED-008 — Roma, Bizancio y Mediterráneo tardío

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-RB-ARCHIVE-001` | edificio, inscripción, instrumento, sedimento, texto y regla producen evidencias no equivalentes | A-SEM | AUDITADO | `EVID-MED-RB-METHOD-001`, `EVID-MED-RB-SYNTHESIS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-INFRASTRUCTURE-001` | infraestructura o título no demuestra operación, acceso, cobertura ni resultado | A-SEM | AUDITADO | `EVID-MED-RB-METHOD-001`, `EVID-MED-RB-WATER-001`, `EVID-MED-RB-HOSPITAL-EARLY-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-ARMY-REPUBLIC-001` | no hay base suficiente para proyectar un cuerpo médico voluntario moderno sobre toda la República romana | B histórico | AUDITADO | `EVID-MED-RB-ARMY-DEBATE-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-VALETUDINARIA-001` | algunos complejos de fuertes imperiales sostienen función médica probable y organización situada | A/B arqueológico | AUDITADO | `EVID-MED-RB-VALETUDINARIA-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-INSTRUMENTS-001` | instrumentos compatibles con medicina documentan repertorios posibles, no operaciones ni propietarios automáticos | A-SEM/B contextual | AUDITADO | `EVID-MED-RB-INSTRUMENTS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-CIVILIAN-001` | la organización militar no se traduce en provisión regular equivalente para toda la población civil | B histórico | AUDITADO | `EVID-MED-RB-CIVILIAN-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-WATER-001` | obras hidráulicas romanas transformaron flujos con usos y accesos desiguales | A/B arqueológico | AUDITADO | `EVID-MED-RB-WATER-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-PARASITES-001` | parásitos intestinales persistieron en contextos romanos y refutan protección sanitaria automática por infraestructura | A presencia/B generalización | AUDITADO | `EVID-MED-RB-PARASITES-ROMAN-001`, `EVID-MED-RB-PARASITES-EAST-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-HOUSEHOLD-001` | hogares y relaciones de dependencia sostuvieron cuidado poco visible en el archivo monumental y letrado | B histórico | AUDITADO | `EVID-MED-RB-HOUSEHOLD-GENDER-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-WOMEN-001` | mujeres aparecen como pacientes, practicantes y objetos de teoría bajo mediaciones de género y autoría | A/B textual | AUDITADO | `EVID-MED-RB-HOUSEHOLD-GENDER-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-PLURALISM-001` | médicos, hogares, parteras, vendedores, baños, santuarios y amuletos coexistieron sin dos bloques estables racional/irracional | B histórico | AUDITADO | `EVID-MED-RB-HOUSEHOLD-GENDER-001`, `EVID-MED-RB-SYNTHESIS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-GALEN-PRACTICE-001` | los casos y autobiografía de Galeno permiten estudiar práctica narrada y construcción de autoridad, no una cohorte consecutiva | A textual/B práctica | AUDITADO | `EVID-MED-RB-GALEN-CORPUS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-GALEN-ANATOMY-001` | gran parte de la anatomía galénica deriva de animales y exige separar especie observada de inferencia humana | A textual | AUDITADO | `EVID-MED-RB-GALEN-ANATOMY-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-GALEN-CORPUS-001` | la enorme supervivencia y recepción del corpus galénico demuestran influencia, no verdad total ni práctica romana uniforme | A documental | AUDITADO | `EVID-MED-RB-GALEN-CORPUS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-COMPILERS-001` | compiladores tardíos seleccionaron, reorganizaron y adaptaron fuentes en vez de copiarlas pasivamente | A/B textual | AUDITADO | `EVID-MED-RB-COMPILERS-001`, `EVID-MED-RB-TEACHING-001`, `EVID-MED-RB-PHARMACOLOGY-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-INNOVATION-001` | la medicina bizantina produjo innovaciones de género, combinación y uso dentro de tradiciones heredadas | A/B histórico | AUDITADO | `EVID-MED-RB-INNOVATION-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-HOSPITAL-CATEGORIES-001` | xenon, nosokomeion, hospicio y hospital designan instituciones heterogéneas cuya función debe reconstruirse caso por caso | A-SEM/B histórico | AUDITADO | `EVID-MED-RB-HOSPITAL-EARLY-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-PANTOKRATOR-001` | el typikon de 1136 conserva un diseño hospitalario detallado de una institución, no operación perfecta ni red universal | A documental/B operación | AUDITADO | `EVID-MED-RB-PANTOKRATOR-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-NETWORKS-001` | la transmisión por griego, siríaco, árabe, hebreo y latín debe demostrarse mediante testigos, agentes y dependencias | A-SEM/B histórico | AUDITADO | `EVID-MED-RB-NETWORKS-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-EFFICACY-001` | organización, monumentalidad, descripción o longevidad no sustituyen comparadores, denominadores, daños y desenlaces | A-SEM | AUDITADO | `EVID-MED-RB-EFFICACY-001` | `INV-MED-RB-001` |
| `CLAIM-MED-RB-NONRANKING-001` | Roma, Bizancio y sus vecinos sólo pueden compararse por dimensiones independientes y no por una escala de avance médico | A-SEM | AUDITADO | `EVID-MED-RB-SYNTHESIS-001` | `INV-MED-RB-001` |

## MED-009 — África fuera del eje egipcio

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-AFRICA-SCOPE-001` | Kerma, Kulubnarti, Aksum, Jenne-jeno, Tombuctú y Tong Hills son casos metodológicos seleccionados y no una tradición continental única. | A-SEM | AUDITADO | `EVID-MED-AFRICA-SYNTHESIS-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-ARCHIVE-001` | Cuerpo, objeto, asentamiento, manuscrito, tradición oral y etnografía producen señales no equivalentes y requieren procedencia propia. | A-SEM | AUDITADO | `EVID-MED-AFRICA-METHOD-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-SILENCE-001` | La ausencia o pérdida de un soporte documental no demuestra ausencia histórica de cuidado, clasificación o especialización. | A-SEM | AUDITADO | `EVID-MED-AFRICA-METHOD-001`, `EVID-MED-AFRICA-ETHICS-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-ANALOGY-001` | La analogía etnográfica genera y contrasta hipótesis sólo cuando declara distancia, mecanismo, alternativas y puente independiente. | A-SEM | AUDITADO | `EVID-MED-AFRICA-TONG-CONTEXT-001`, `EVID-MED-AFRICA-ORAL-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-OSTEOLOGY-001` | Las frecuencias esqueléticas no equivalen directamente a prevalencia o salud de una población viva por mortalidad selectiva, fragilidad y no estacionariedad. | A-SEM | AUDITADO | `EVID-MED-AFRICA-OSTEOLOGY-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-CARE-001` | Supervivencia y discapacidad pueden sostener cuidado probable si patología, impacto funcional y asistencia se modelan por separado. | A-SEM/B por caso | AUDITADO | `EVID-MED-AFRICA-CARE-001`, `EVID-MED-AFRICA-NUBIA-SURVIVAL-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-ETHICS-001` | Historia de colección, custodia y colaboración local forman parte de la validez de inferencias sobre restos y archivos africanos. | A-SEM/B histórico | AUDITADO | `EVID-MED-AFRICA-ETHICS-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-KERMA-HEALTH-001` | Los grupos sacrificial y no sacrificial estudiados en Kerma muestran perfiles de estrés ampliamente semejantes, sin probar igualdad social o vital. | A muestra/B generalización | AUDITADO | `EVID-MED-AFRICA-KERMA-HEALTH-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-KERMA-TREPANATION-001` | K317 conserva una abertura circular remodelada compatible con trepanación posible, pero trauma y lesión patológica permanecen en el diferencial. | A lesión/B-COND causa | AUDITADO | `EVID-MED-AFRICA-KERMA-K317-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-NUBIA-SURVIVAL-001` | Fracturas nubias curadas documentan supervivencia tras limitación potencial, no institución, operador o tratamiento específico. | A lesión/B cuidado | AUDITADO | `EVID-MED-AFRICA-NUBIA-SURVIVAL-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-KULUBNARTI-CHRONOLOGY-001` | Nueva cronología muestra uso en gran medida contemporáneo de los cementerios R y S y debilita su lectura como poblaciones sucesivas simples. | A datación/B uso | AUDITADO | `EVID-MED-AFRICA-KULUBNARTI-CHRONOLOGY-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-KULUBNARTI-DIET-001` | Isótopos de Kulubnarti registran componentes dietarios y variación por edad, no prescripciones o acceso clínico individual. | A medida/B dieta | AUDITADO | `EVID-MED-AFRICA-KULUBNARTI-DIET-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-KULUBNARTI-GENETICS-001` | Semejanza genética y parentescos entre cementerios no eliminan diferencias sociales, dietarias o mortuorias. | A muestra/B población | AUDITADO | `EVID-MED-AFRICA-KULUBNARTI-GENETICS-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-AKSUM-ARCHIVE-001` | El archivo monumental aksumita convive con preservación humana desigual; densidad política no produce automáticamente una historia corporal o médica densa. | A/B arqueológico | AUDITADO | `EVID-MED-AFRICA-AKSUM-ARCHIVE-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-AKSUM-ISOTOPE-001` | Un individuo humano directamente fechado en una serie isotópica pre/protoaksumita no representa una dieta poblacional ni política sanitaria. | A medida/C generalización | AUDITADO | `EVID-MED-AFRICA-AKSUM-ISOTOPE-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-ETHIOPIC-MANUSCRIPTS-001` | Códices y rollos etíopes tardíos documentan remedios y curación en sus periodos, no continuidad automática con Aksum. | A documental/B continuidad | AUDITADO | `EVID-MED-AFRICA-ETHIOPIC-MANUSCRIPTS-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-JENNE-URBANISM-001` | Jenne-jeno documenta urbanismo, producción e intercambio sin demostrar por ello una institución o sistema médico. | A arqueológico/C medicina | AUDITADO | `EVID-MED-AFRICA-JENNE-URBANISM-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-TIMBUKTU-TEXT-001` | Un manuscrito de Tombuctú conserva diagnósticos, sustancias, plegarias y amuletos, pero no ejecución, frecuencia o efecto. | A documental/C práctica | AUDITADO | `EVID-MED-AFRICA-TIMBUKTU-TEXT-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-TIMBUKTU-INVENTORY-001` | El número público de manuscritos no fecha ni describe cada pieza; un inventario de 31 bibliotecas muestra autoría, cronología y extensión heterogéneas. | A inventario/B corpus | AUDITADO | `EVID-MED-AFRICA-TIMBUKTU-INVENTORY-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-TONG-CONTEXT-001` | Contexto y residuos de Tong Hills sostienen preparación vegetal medicinal probable, no identidad talensi, planta, indicación o eficacia. | A residuo/B función | AUDITADO | `EVID-MED-AFRICA-TONG-CONTEXT-001`, `EVID-MED-AFRICA-TONG-RESIDUE-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-ORAL-TRADITION-001` | Tradición oral es fuente histórica auditable mediante género, transmisión, función y contraste; no memoria literal inmóvil. | A-SEM/B por tradición | AUDITADO | `EVID-MED-AFRICA-ORAL-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-EFFICACY-001` | Receta, sustancia, residuo o uso probable no hereda beneficio o seguridad sin comparación, resultado y seguimiento. | A-SEM | AUDITADO | `EVID-MED-AFRICA-EFFICACY-001` | `INV-MED-AFRICA-001` |
| `CLAIM-MED-AFRICA-NONRANKING-001` | Monumentalidad, escritura, preservación y número de objetos no forman una escala de avance médico. | A-SEM | AUDITADO | `EVID-MED-AFRICA-SYNTHESIS-001` | `INV-MED-AFRICA-001` |

## MED-010 — Mesoamérica, Andes y otras Américas

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-AMERICAS-SCOPE-001` | Cuzco, tierras bajas mayas, Huaca El Paraíso, Piauí y dos códices nahuas son casos metodológicos seleccionados y no una tradición médica americana única. | A-SEM | AUDITADO | `EVID-MED-AMERICAS-SYNTHESIS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-ARCHIVE-001` | Cráneo, diente, cálculo, coprolito y códice preservan productos no equivalentes y requieren procedencia y denominador propios. | A-SEM | AUDITADO | `EVID-MED-AMERICAS-METHOD-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-BODY-001` | Lesión y remodelación registran procesos biológicos, no diagnóstico, experiencia, indicación o resultado funcional completos. | A-SEM/B por caso | AUDITADO | `EVID-MED-AMERICAS-CUZCO-HEALING-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-ETHICS-001` | Custodia, historia de colección, autoridad comunitaria y procedencia forman parte de la validez de investigar restos y archivos indígenas. | A-SEM/B histórico | AUDITADO | `EVID-MED-AMERICAS-ETHICS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-TREPANATION-SAMPLE-001` | La serie de Cuzco reúne 66 individuos y 109 perforaciones de 11 sitios; individuo, lesión y procedimiento no son denominadores intercambiables. | A muestra | AUDITADO | `EVID-MED-AMERICAS-CUZCO-SAMPLE-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-TREPANATION-HEALING-001` | La estimación osteológica de 83 % documenta remodelación y supervivencia frecuente en la muestra, no una tasa clínica prospectiva o beneficio funcional. | A lesión/B desenlace | AUDITADO | `EVID-MED-AMERICAS-CUZCO-HEALING-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-TREPANATION-INDICATION-001` | Trauma asociado y evitación anatómica hacen plausible una finalidad terapéutica para parte de las trepanaciones, sin fijar la indicación de cada caso. | B-COND | AUDITADO | `EVID-MED-AMERICAS-CUZCO-INDICATION-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-MAYA-MODIFICATION-001` | Modificaciones dentales mayas documentan transformación corporal y destreza técnica; identidad, estética, cosmología y cuidado no deben forzarse como fines excluyentes. | A material/B función | AUDITADO | `EVID-MED-AMERICAS-MAYA-INLAYS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-MAYA-SEALANT-001` | Ocho cementos mayas contienen mezclas orgánicas complejas y variables; composición compatible no demuestra especie, intención terapéutica o efecto in vivo. | A química/B identidad/C efecto | AUDITADO | `EVID-MED-AMERICAS-MAYA-SEALANTS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-MAYA-PATHOSIS-001` | En 193 dientes incrustados, caries y lesiones periapicales fueron más frecuentes que en 211 controles aunque muchas piezas conservaron buen sellado. | A muestra/B generalización | AUDITADO | `EVID-MED-AMERICAS-MAYA-PATHOSIS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-MICROREMAIN-001` | Microrestos en cálculo dental sostienen contacto y procesamiento vegetal, pero predicen pobremente intensidad de consumo individual y admiten varias rutas de entrada. | A señal/B consumo | AUDITADO | `EVID-MED-AMERICAS-MICROREMAIN-METHOD-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-HUACA-PLANTS-001` | Microrestos en cálculo y caries de una mujer de Huaca El Paraíso hacen posible una aplicación vegetal local, sin demostrar intención, receta o tradición. | A presencia/B-COND función | AUDITADO | `EVID-MED-AMERICAS-HUACA-PLANTS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-COPROLITE-001` | Polen y contexto parasitológico de cinco coprolitos de Piauí sostienen uso medicinal probable para algunos géneros, no para toda planta detectada. | A señal/B-COND función | AUDITADO | `EVID-MED-AMERICAS-PIAUI-COPROLITES-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-PIAUI-PARASITES-001` | Huevos de tricocéfalo y anquilostoma documentan infección intestinal en los coprolitos estudiados, no diagnóstico social o prevalencia poblacional. | A presencia/C prevalencia | AUDITADO | `EVID-MED-AMERICAS-PIAUI-PARASITES-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-LIBELLUS-OBJECT-001` | El Libellus de 1552 conserva materia médica presentada por intelectuales nahuas bajo traducción, soporte, institución y patronazgo coloniales concretos. | A documental/B contexto | AUDITADO | `EVID-MED-AMERICAS-LIBELLUS-OBJECT-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-FLORENTINE-OBJECT-001` | El Códice Florentino conserva texto náhuatl, interpretación española e imagen como capas comparables, no como duplicados neutrales. | A documental/B lectura | AUDITADO | `EVID-MED-AMERICAS-FLORENTINE-OBJECT-001`, `EVID-MED-AMERICAS-FLORENTINE-HERBAL-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-COLONIAL-COPRODUCTION-001` | Co-producción reconoce agencia nahua y múltiples colaboradores sin negar coerción, asimetría y objetivos coloniales. | A/B histórico | AUDITADO | `EVID-MED-AMERICAS-COLONIAL-COPRODUCTION-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-COLONIAL-FRAMING-001` | Género, traducción, vocabulario cristiano, edición, destinatario e imagen condicionan qué saber aparece en los códices temprano-coloniales. | A/B textual | AUDITADO | `EVID-MED-AMERICAS-FLORENTINE-HERBAL-001`, `EVID-MED-AMERICAS-COLONIAL-COPRODUCTION-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-MATERIA-MEDICA-CIRCULATION-001` | Sustancias, nombres, indicaciones y marcos indígenas circularon de modo desigual; transferencia material no implica transmisión íntegra de conocimiento. | B histórico | AUDITADO | `EVID-MED-AMERICAS-CIRCULATION-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-CONTINUITY-001` | Continuidad indígena requiere cadenas de transmisión, ruptura y autoridad comunitaria; no vuelve inmóviles prácticas separadas por siglos. | A-SEM/B por cadena | AUDITADO | `EVID-MED-AMERICAS-COLONIAL-COPRODUCTION-001`, `EVID-MED-AMERICAS-SYNTHESIS-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-EFFICACY-001` | Remodelación, sustancia, residuo, receta o circulación no heredan beneficio o seguridad sin comparador, daño, desenlace y denominador. | A-SEM | AUDITADO | `EVID-MED-AMERICAS-EFFICACY-001` | `INV-MED-AMERICAS-001` |
| `CLAIM-MED-AMERICAS-NONRANKING-001` | Antigüedad, técnica, monumentalidad, cantidad de códices o preservación no forman una escala universal de avance médico. | A-SEM | AUDITADO | `EVID-MED-AMERICAS-SYNTHESIS-001` | `INV-MED-AMERICAS-001` |

## MED-011 — mundos islámicos

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-ISLAMIC-SCOPE-001` | Bagdad, Rayy, Damasco y El Cairo son casos conectados pero no representan una medicina islámica homogénea. | A-SEM | AUDITADO | `EVID-MED-ISLAMIC-METHOD-001`, `EVID-MED-ISLAMIC-SYNTHESIS-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-ARCHIVE-001` | Manuscrito, receta, escritura de fundación, edificio, norma y biografía conservan productos no equivalentes. | A-SEM | AUDITADO | `EVID-MED-ISLAMIC-METHOD-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-MULTILINGUAL-001` | Árabe, siríaco, persa y judeoárabe conectaron actores musulmanes, cristianos y judíos; lengua no determina religión o etnia. | A/B histórico | AUDITADO | `EVID-MED-ISLAMIC-TRANSLATION-RISALA-001`, `EVID-MED-ISLAMIC-GENIZAH-NOTEBOOKS-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-TRANSLATION-001` | Traducción médica incluyó búsqueda, cotejo, interpretación, adaptación y revisión, no copia pasiva. | A textual | AUDITADO | `EVID-MED-ISLAMIC-TRANSLATION-RISALA-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-HUNAYN-VERSION-001` | Una versión galénica puede distinguir traducción de Hubaysh y revisión de Hunayn aunque falten eslabones manuscritos. | A catálogo/B genealogía | AUDITADO | `EVID-MED-ISLAMIC-GALEN-VERSION-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-RAZI-CASES-001` | El Kitab al-Tajarib conserva razonamiento situado atribuido a al-Razi y discípulos sin formar una cohorte consecutiva. | A textual/B práctica | AUDITADO | `EVID-MED-ISLAMIC-RAZI-CASES-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-RAZI-COMPILATION-001` | Casos y notas asociados con al-Razi fueron mediados por alumnos, compilación póstuma y copias posteriores. | A textual | AUDITADO | `EVID-MED-ISLAMIC-RAZI-CASES-001`, `EVID-MED-ISLAMIC-RAZI-MANUSCRIPT-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-CANON-RULES-001` | Las siete reglas del Canon son criterios textuales para evaluar drogas, no prueba de un ensayo clínico ejecutado. | A textual/C ejecución | AUDITADO | `EVID-MED-ISLAMIC-CANON-RULES-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-CANON-COMMENTARY-001` | Comentarios árabes posteriores discutieron y modificaron afirmaciones del Canon; recepción no fue conservación pasiva. | A/B histórico | AUDITADO | `EVID-MED-ISLAMIC-CANON-COMMENTARY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-OPTICS-001` | Ibn al-Haytham documenta investigación experimental de problemas visuales sin demostrar por ello práctica o resultado oftálmico. | A textual/C clínica | AUDITADO | `EVID-MED-ISLAMIC-OPTICS-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-OPHTHALMOLOGY-001` | La aguja hueca de Ammar documenta una técnica propuesta y debatida, no frecuencia, seguridad o recuperación visual. | A textual/C resultado | AUDITADO | `EVID-MED-ISLAMIC-OPHTHALMOLOGY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-HOSPITAL-WAQF-001` | Escrituras de waqf documentan programa jurídico, dotación y cargos de bimaristanes concretos, no operación cotidiana automática. | A documental/B operación | AUDITADO | `EVID-MED-ISLAMIC-HOSPITAL-WAQF-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-HOSPITAL-OPERATION-001` | Bimaristanes fueron instituciones urbanas variables; monumentalidad o capacidad prevista no prueban acceso, calidad o desenlace. | A fundación/B operación/C resultado | AUDITADO | `EVID-MED-ISLAMIC-HOSPITAL-OPERATION-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-GUNDESHAPUR-MYTH-001` | El gran hospital docente de Gundeshapur como origen único carece de corroboración contemporánea suficiente. | B histórico | AUDITADO | `EVID-MED-ISLAMIC-HOSPITAL-MYTH-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-GENIZAH-PRACTICE-001` | Prescripciones y cuadernos de la Geniza acercan elecciones prácticas, pero no heredan preparación, administración o efecto. | A documental/B ejecución/C efecto | AUDITADO | `EVID-MED-ISLAMIC-GENIZAH-PRESCRIPTIONS-001`, `EVID-MED-ISLAMIC-GENIZAH-NOTEBOOKS-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-PHARMACY-FORMULARY-001` | Formularios organizan sustancias, pesos y sustituciones; fórmula, tienda, preparado y dosis administrada son unidades distintas. | A textual/B práctica | AUDITADO | `EVID-MED-ISLAMIC-PHARMACY-FORMULARY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-REGULATION-HISBA-001` | Manuales de hisba documentan normas y disputa profesional, no inspección o cumplimiento universales. | A normativo/B cumplimiento | AUDITADO | `EVID-MED-ISLAMIC-HISBA-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-LICENSING-STORY-001` | El examen bagdadí de 931/932 es un episodio transmitido posteriormente, no evidencia de licencia universal y permanente. | B histórico/C sistema | AUDITADO | `EVID-MED-ISLAMIC-LICENSING-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-BIOGRAPHY-001` | La colección de Ibn Abi Usaybia documenta redes seleccionadas de médicos, no un padrón laboral exhaustivo. | A obra/B representatividad | AUDITADO | `EVID-MED-ISLAMIC-BIOGRAPHY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-CIRCULATION-001` | Copia, traducción, comentario y recepción documentan circulación, no lectura, verdad o aplicación uniformes. | A/B histórico | AUDITADO | `EVID-MED-ISLAMIC-GALEN-VERSION-001`, `EVID-MED-ISLAMIC-CANON-COMMENTARY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-EFFICACY-001` | Texto, receta, institución o procedimiento descrito no heredan beneficio o seguridad sin comparador, denominador, daño y seguimiento. | A-SEM | AUDITADO | `EVID-MED-ISLAMIC-EFFICACY-001` | `INV-MED-ISLAMIC-WORLDS-001` |
| `CLAIM-MED-ISLAMIC-NONRANKING-001` | Número de manuscritos, antigüedad de reglas o tamaño de hospitales no forman una escala universal de avance médico. | A-SEM | AUDITADO | `EVID-MED-ISLAMIC-SYNTHESIS-001` | `INV-MED-ISLAMIC-WORLDS-001` |

## MED-012 — Europa medieval y tradiciones judías

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-MEDIEVAL-SCOPE-001` | Monasterios, hogares, ciudades, universidades y comunidades religiosas coexistieron en cronologías y jurisdicciones diversas; no forman una medicina europea homogénea. | A-SEM | AUDITADO | `EVID-MED-MEDIEVAL-METHOD-001`, `EVID-MED-MEDIEVAL-SYNTHESIS-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-ARCHIVE-001` | Códice, traducción, currículo, licencia, contrato, regla hospitalaria y tratado quirúrgico conservan productos no equivalentes. | A-SEM | AUDITADO | `EVID-MED-MEDIEVAL-METHOD-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-MONASTIC-MIXED-001` | Los códices médicos de procedencia monástica son objetos compuestos; su lugar de copia o conservación no localiza automáticamente cada práctica. | A objeto/B uso | AUDITADO | `EVID-MED-MEDIEVAL-BALD-MANUSCRIPT-001`, `EVID-MED-MEDIEVAL-CAROLINGIAN-RECIPES-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-RECIPE-PRACTICALITY-001` | Ingredientes y operaciones pueden volver practicable una receta sin demostrar preparación, administración, seguridad o beneficio. | A textual/B práctica/C efecto | AUDITADO | `EVID-MED-MEDIEVAL-CAROLINGIAN-RECIPES-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-HOUSEHOLD-CARE-001` | Hogares y redes laicas fueron espacios de cuidado y posible lectura, pero dejaron un archivo menos denso que instituciones letradas. | B histórico | AUDITADO | `EVID-MED-MEDIEVAL-HOUSEHOLD-PRACTICE-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-TROTULA-ENSEMBLE-001` | Trotula es un conjunto de tres obras con genealogías distintas, no un libro unitario de autoría única. | A filológico | AUDITADO | `EVID-MED-MEDIEVAL-TROTULA-MANUSCRIPTS-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-TROTA-ATTRIBUTION-001` | Una rama temprana de De curis mulierum se relaciona con Trota de Salerno sin extender su autoría a todo el conjunto. | A/B filológico | AUDITADO | `EVID-MED-MEDIEVAL-TROTA-WOMEN-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-WOMEN-PRACTICE-001` | Mujeres participaron como pacientes, cuidadoras y practicantes; archivos universitarios y oficiales filtran y subrepresentan esa actividad. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-WOMEN-ARCHIVES-001`, `EVID-MED-MEDIEVAL-TROTA-WOMEN-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-TRANSLATION-NETWORK-001` | Traducciones entre griego, árabe, latín, hebreo y vernáculos siguieron programas, patronazgos y rutas múltiples, no una transferencia lineal. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-TOLEDO-PROGRAM-001`, `EVID-MED-MEDIEVAL-HEBREW-TRANSLATION-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-PANTEGNI-VERSION-001` | El Pantegni latino condensa, reorganiza y recibió revisiones; circulación de una versión no equivale a fidelidad completa. | A filológico | AUDITADO | `EVID-MED-MEDIEVAL-PANTEGNI-REVISION-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-HEBREW-TRANSLATION-001` | Traducciones médicas al hebreo adaptaron materiales árabes y latinos; lengua, autoría, comunidad y práctica deben separarse. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-HEBREW-TRANSLATION-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-ARTICELLA-CURRICULUM-001` | La Articella fue una colección cambiante que organizó enseñanza en varios centros sin constituir un currículo europeo inmutable. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-ARTICELLA-MANUSCRIPTS-001`, `EVID-MED-MEDIEVAL-PARIS-CURRICULUM-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-UNIVERSITY-PRACTICE-001` | Universidad y comentario consolidaron medicina letrada, pero currículo no demuestra consulta ni monopolio asistencial. | A institución/B práctica | AUDITADO | `EVID-MED-MEDIEVAL-PARIS-CURRICULUM-001`, `EVID-MED-MEDIEVAL-BOLOGNA-TEACHING-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-LICENSING-LOCAL-001` | Exámenes y licencias documentan decisiones jurisdiccionales concretas; no una licencia europea universal ni competencia garantizada. | A documental/B cumplimiento | AUDITADO | `EVID-MED-MEDIEVAL-VALENCIA-LICENSING-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-PRACTITIONER-CONTINUUM-001` | Físicos, cirujanos, barberos, boticarios, parteras y empíricos coexistieron con fronteras ocupacionales variables. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-ARAGON-PRACTITIONERS-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-SURGERY-TEXT-001` | Los tratados quirúrgicos conservan opciones, instrumentos y cautelas, no series consecutivas de operaciones. | A textual/B práctica | AUDITADO | `EVID-MED-MEDIEVAL-SURGERY-CATARACT-HERNIA-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-SURGERY-CHOICE-001` | Guy de Chauliac describió técnicas y abstenciones; riesgo, estatus y selección mediaron decisiones sin entregar tasas de éxito. | A textual/B decisión/C resultado | AUDITADO | `EVID-MED-MEDIEVAL-SURGERY-CATARACT-HERNIA-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-HOSPITAL-CHARITY-001` | Hospitales occidentales combinaron hospitalidad, sustento, oración y cuidado; no fueron hospitales clínicos modernos por definición. | A/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-HOSPITAL-LAW-001`, `EVID-MED-MEDIEVAL-CAMBRIDGE-HOSPITAL-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-HOSPITAL-VARIATION-001` | Fundación, regla y edificio documentan programa institucional, no ocupación, asistencia médica o desenlace cotidianos. | A documental/B operación/C resultado | AUDITADO | `EVID-MED-MEDIEVAL-HOSPITAL-LAW-001`, `EVID-MED-MEDIEVAL-CAMBRIDGE-HOSPITAL-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-JEWISH-PRACTITIONERS-001` | Médicos y cirujanos judíos aparecen en contratos, licencias, pagos y litigios atendiendo dentro de redes compartidas bajo aceptación y restricción variables. | A documental/B representatividad | AUDITADO | `EVID-MED-MEDIEVAL-JEWISH-ARCHIVE-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-JEWISH-NONESSENCE-001` | “Medicina judía” sólo es válida si especifica lengua, practicante, comunidad, norma, texto o paciente; identidad no determina método. | A-SEM/B histórico | AUDITADO | `EVID-MED-MEDIEVAL-HEBREW-TRANSLATION-001`, `EVID-MED-MEDIEVAL-JEWISH-WOMEN-HEALTH-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-ENCOUNTER-OUTCOME-001` | Manuscrito, currículo, licencia, contrato o procedimiento no heredan seguridad, beneficio o cobertura sin encuentro, denominador, daño y seguimiento. | A-SEM | AUDITADO | `EVID-MED-MEDIEVAL-EFFICACY-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |
| `CLAIM-MED-MEDIEVAL-NONRANKING-001` | Antigüedad, número de manuscritos, institucionalización, licencia o circulación no forman una escala universal de avance médico. | A-SEM | AUDITADO | `EVID-MED-MEDIEVAL-SYNTHESIS-001` | `INV-MED-MEDIEVAL-EUROPE-JEWISH-001` |

## MED-013 — Rutas del Índico y Eurasia

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-ROUTES-SCOPE-001` | Entre ca. 800 y 1600, redes marítimas, terrestres, mercantiles, diplomáticas, cortesanas y editoriales coexistieron sin formar una vía o medicina afroeurasiática única. | A-SEM/B cobertura | AUDITADO | `EVID-MED-ROUTES-ROUTE-METHOD-001`, `EVID-MED-ROUTES-SYNTHESIS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-MODEL-001` | Huella, identificación, itinerario, mediación, recepción y alcance son productos independientes; conexión documentada no hereda transferencia ni efecto. | A-SEM | AUDITADO | `EVID-MED-ROUTES-ROUTE-METHOD-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-BELITUNG-VESSEL-001` | El pecio de Belitung demuestra un tramo marítimo de larga distancia y cargamento asociado, no una ruta completa ni entrega final. | A arqueológico/B itinerario | AUDITADO | `EVID-MED-ROUTES-BELITUNG-HULL-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-BELITUNG-RESIN-001` | El análisis molecular de una masa resinosa permite una identificación compatible y preguntas de procedencia, no una función histórica automática. | A/B material | AUDITADO | `EVID-MED-ROUTES-BELITUNG-RESIN-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-BELITUNG-NONMEDICAL-001` | Una resina transportada pudo ser mercancía, perfume, incienso, calafateo o medicina; sin contexto funcional, el uso médico no está demostrado. | A-SEM/B función | AUDITADO | `EVID-MED-ROUTES-BELITUNG-RESIN-001`, `EVID-MED-ROUTES-BELITUNG-SALVAGE-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-DUNHUANG-CORPUS-001` | Los manuscritos médicos tibetanos de Dunhuang son testigos tempranos situados; depósito, copia, composición y ejecución no son fechas o lugares equivalentes. | A objeto/B uso | AUDITADO | `EVID-MED-ROUTES-DUNHUANG-OBJECTS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-DUNHUANG-MIXTURE-001` | Paralelos y diferencias en moxibustión y vocabulario apoyan contactos o adaptaciones delimitados, no la importación íntegra de un sistema. | A/B filológico | AUDITADO | `EVID-MED-ROUTES-DUNHUANG-MOXA-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-DUNHUANG-GALEN-LIMIT-001` | La evidencia temprana disponible no sostiene convertir relatos tardíos de Galeno en Tíbet en la biografía segura de un médico viajero o una adopción completa. | B histórico | AUDITADO | `EVID-MED-ROUTES-DUNHUANG-HISTORIOGRAPHY-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GENIZA-ROUTE-001` | Cartas de la Geniza reconstruyen tramos, personas y mercancías del comercio entre Egipto, Adén e India sin representar toda la red del Índico. | A documental/B cobertura | AUDITADO | `EVID-MED-ROUTES-GENIZA-LETTERS-001`, `EVID-MED-ROUTES-GENIZA-LUGGAGE-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GENIZA-GENRE-001` | Carta, inventario, lista de materias, prescripción y cuaderno conservan operaciones distintas y no pueden fusionarse por pertenecer a la misma colección. | A-SEM | AUDITADO | `EVID-MED-ROUTES-GENIZA-LISTS-001`, `EVID-MED-ROUTES-GENIZA-PRESCRIPTIONS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GENIZA-MATERIA-001` | La Geniza documenta disponibilidad de materias locales e importadas; nombre, inventario, compra, preparación y uso son unidades diferentes. | A documental/B práctica | AUDITADO | `EVID-MED-ROUTES-GENIZA-LISTS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GENIZA-PRACTICE-LIMIT-001` | Prescripciones y cuadernos aproximan decisiones prácticas, pero no heredan preparación, administración, daño o beneficio. | A documental/B ejecución/C efecto | AUDITADO | `EVID-MED-ROUTES-GENIZA-PRESCRIPTIONS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GIFTS-MODES-001` | Los regalos médicos entre cortes combinaron sustancia, recipiente, conocimiento y prestigio; entrega narrada no equivale a uso. | A/B histórico | AUDITADO | `EVID-MED-ROUTES-GIFTS-SOURCES-001`, `EVID-MED-ROUTES-GIFTS-OUTCOME-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-SUGAR-TRANSFER-001` | Versiones bizantinas de preparados azucarados muestran selección y reconfiguración desde materiales islamicate en casos concretos, no una tubería cultural intacta. | A/B filológico | AUDITADO | `EVID-MED-ROUTES-SUGAR-VERSIONS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-GIFT-NONUSE-001` | Regalo, receta, preparado, administración y resultado son eventos independientes; los dos últimos no se infieren sin archivo propio. | A-SEM | AUDITADO | `EVID-MED-ROUTES-GIFTS-OUTCOME-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-MONGOL-PLURALISM-001` | Cortes mongolas movilizaron especialistas y repertorios diversos mediante patronazgo y reclutamiento sin formar una medicina imperial homogénea. | A/B histórico | AUDITADO | `EVID-MED-ROUTES-MONGOL-COURT-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-MONGOL-BUREAUS-001` | Oficinas y compilaciones documentan capacidad institucional y mediación selectiva, no cobertura general, neutralidad o síntesis. | A institución/B alcance | AUDITADO | `EVID-MED-ROUTES-MONGOL-BUREAU-001`, `EVID-MED-ROUTES-TANSUQNAMA-001`, `EVID-MED-ROUTES-HUIHUI-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-MONGOL-BIDIRECTIONAL-001` | Conocimientos y materias circularon hacia el este y el oeste en productos delimitados; bidireccional no significa simétrico o continuo. | A/B histórico | AUDITADO | `EVID-MED-ROUTES-TANSUQNAMA-001`, `EVID-MED-ROUTES-HUIHUI-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-MONGOL-NONUNIFORM-001` | Cooperación y préstamos coexistieron con fundamentos teóricos persistentes; presencia en corte no demuestra sustitución general ni práctica poblacional. | A/B histórico | AUDITADO | `EVID-MED-ROUTES-MONGOL-COURT-001`, `EVID-MED-ROUTES-HUIHUI-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-ORTA-INFORMANTS-001` | Los Colóquios dependieron de médicos, mercaderes, boticarios y otros informantes diversos; la autoridad de Orta fue relacional y colonialmente asimétrica. | A textual/B representatividad | AUDITADO | `EVID-MED-ROUTES-ORTA-INFORMANTS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-ORTA-AUTHORITY-001` | Observación, lectura, mercado y conversación fueron reorganizados en diálogo impreso; la edición no equivale a descubrimiento solitario ni identificación botánica infalible. | A/B histórico | AUDITADO | `EVID-MED-ROUTES-ORTA-COLOQUIOS-001`, `EVID-MED-ROUTES-ORTA-INFORMANTS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-ORTA-PRINT-RECEPTION-001` | La adaptación latina de Clusius amplió y reconfiguró recepción editorial; impresión no hereda lectura, adopción o práctica. | A editorial/B recepción | AUDITADO | `EVID-MED-ROUTES-ORTA-PRINT-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |
| `CLAIM-MED-ROUTES-NONRANKING-001` | Distancia, número de conexiones, antigüedad, imperio o impresión no forman una escala universal de avance médico ni demuestran eficacia. | A-SEM | AUDITADO | `EVID-MED-ROUTES-SYNTHESIS-001` | `INV-MED-ROUTES-INDIAN-OCEAN-EURASIA-001` |

## MED-014 — Epidemias y cuarentenas

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-EPID-SCOPE-001` | Jerash, Tian Shan, Europa, Ragusa, Venecia, Bristol, Londres y Marsella son expedientes conectables, no una epidemia o respuesta premoderna uniforme. | A-SEM/B cobertura | AUDITADO | `EVID-MED-EPID-METHOD-001`, `EVID-MED-EPID-SYNTHESIS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-MODEL-001` | Testimonio, agente, magnitud, respuesta, cumplimiento y desigualdad son productos independientes; ninguna capa hereda automáticamente la siguiente. | A-SEM | AUDITADO | `EVID-MED-EPID-METHOD-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-RETRODX-001` | El diagnóstico retrospectivo requiere una pregunta delimitada y convergencia entre contexto, categorías, diferencial y pruebas; semejanza narrativa no basta. | A-SEM/B diagnóstico | AUDITADO | `EVID-MED-EPID-RETRODX-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-JERASH-PATHOGEN-001` | ADN antiguo autenticado identifica *Yersinia pestis* en individuos de la fosa del hipódromo de Jerash y vincula el episodio muestreado con la primera pandemia. | A molecular | AUDITADO | `EVID-MED-EPID-JERASH-DNA-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-JERASH-BURIAL-001` | La deposición rápida y densa de alrededor de 230 individuos en Jerash registra una crisis funeraria urbana, no una muestra de toda la población. | A arqueológico/B población | AUDITADO | `EVID-MED-EPID-JERASH-BURIAL-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-JUSTINIAN-SCALE-001` | Genomas dispersos prueban presencia regional de la primera pandemia; no entregan por sí solos mortalidad mediterránea o imperial. | A presencia/C magnitud | AUDITADO | `EVID-MED-EPID-FIRST-PANDEMIC-GENOMES-001`, `EVID-MED-EPID-JERASH-BURIAL-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-JUSTINIAN-IMPACT-001` | El impacto de la primera pandemia fue heterogéneo y debe estimarse por región, archivo y denominador; ni catástrofe universal ni irrelevancia universal están demostradas. | B histórico | AUDITADO | `EVID-MED-EPID-JUSTINIAN-IMPACT-001`, `EVID-MED-EPID-SYNTHESIS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-KYRGYZ-ORIGIN-001` | Lápidas de 1338–1339 y genomas de Kara-Djigach/Burana sitúan un linaje ancestral de la Peste Negra cerca de Tian Shan sin reconstruir toda la ruta posterior. | A molecular/documental; B ruta | AUDITADO | `EVID-MED-EPID-KYRGYZ-GENOMES-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-EASTSMITHFIELD-PATHOGEN-001` | El genoma de *Y. pestis* en East Smithfield identifica el agente en víctimas muestreadas de la Peste Negra, no cada muerte londinense. | A molecular/B población | AUDITADO | `EVID-MED-EPID-EASTSMITHFIELD-GENOME-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-BLACKDEATH-ROUTE-001` | La filogeografía delimita ramificaciones y persistencias de la segunda pandemia, pero no identifica automáticamente cada barco, vector o trayecto. | A filogenético/B itinerario | AUDITADO | `EVID-MED-EPID-SECOND-PHYLOGEO-001`, `EVID-MED-EPID-KYRGYZ-GENOMES-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-BLACKDEATH-HETEROGENEITY-001` | Los cambios de uso del suelo inferidos de 261 archivos polínicos son incompatibles con una mortalidad uniformemente extrema en toda Europa. | A proxy/B magnitud | AUDITADO | `EVID-MED-EPID-BLACKDEATH-POLLEN-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-RAGUSA-TRENTINO-001` | El decreto de Ragusa de 1377 documenta una espera de treinta días para llegadas sospechosas; prioridad terminológica y cuarenta días posteriores deben separarse. | A documental/B genealogía | AUDITADO | `EVID-MED-EPID-RAGUSA-EDICT-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-QUARANTINE-INSTITUTION-001` | Ragusa y Venecia construyeron oficinas, inspectores, lazaretos, pases y sanciones que volvieron la cuarentena una capacidad administrativa persistente. | A documental/B operación | AUDITADO | `EVID-MED-EPID-RAGUSA-OFFICE-001`, `EVID-MED-EPID-QUARANTINE-COMPARISON-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-QUARANTINE-EFFICACY-001` | Decreto, infraestructura y descenso epidémico no demuestran eficacia neta sin ejecución, comparación, cointervenciones, daños y denominadores. | A-SEM/C efecto | AUDITADO | `EVID-MED-EPID-QUARANTINE-COMPARISON-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-LAZARET-ARCHIVE-001` | Entierros y ADN del Lazzaretto Vecchio documentan episodios de peste dentro de una institución multiséculo, no un brote o total urbano únicos. | A molecular/arqueológico; B periodo | AUDITADO | `EVID-MED-EPID-VENICE-LAZARET-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-BRISTOL-ENFORCEMENT-001` | Registros domésticos de Bristol permiten inferir aplicación desigual del encierro por hogar; norma y vigilancia no fueron equivalentes entre epidemias o parroquias. | A/B histórico | AUDITADO | `EVID-MED-EPID-BRISTOL-HOUSEHOLDS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-BRISTOL-HOUSEHOLD-MORTALITY-001` | El encierro doméstico intenso pudo aproximadamente duplicar la mortalidad dentro de hogares afectados, sin estimar con igual precisión el beneficio exterior. | B causal | AUDITADO | `EVID-MED-EPID-BRISTOL-MORTALITY-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-RESPONSE-INEQUALITY-001` | Cuarentenas, cierres y cordones redistribuyeron espera, ingreso, exposición y coerción; el promedio urbano no describe quién soportó costos o beneficios. | A/B histórico | AUDITADO | `EVID-MED-EPID-BRISTOL-MORTALITY-001`, `EVID-MED-EPID-QUARANTINE-COMPARISON-001`, `EVID-MED-EPID-SYNTHESIS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-LONDON-BILLS-001` | Los Bills of Mortality son una serie repetida de entierros y causas atribuidas por parroquia, no certificados clínicos exhaustivos. | A documental/B cobertura | AUDITADO | `EVID-MED-EPID-LONDON-BILLS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-LONDON-CAUSES-001` | La categoría contemporánea “plague” sirve para seguir la epidemia dentro de la serie londinense sin equivaler a confirmación biológica individual. | A serie/B diagnóstico | AUDITADO | `EVID-MED-EPID-LONDON-BILLS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-LONDON-SPATIAL-001` | Entierros y geografía parroquial muestran mortalidad espacialmente desigual en 1665, condicionada por cobertura, fuga y denominadores cambiantes. | A documental/B tasa | AUDITADO | `EVID-MED-EPID-LONDON-BURIALS-001`, `EVID-MED-EPID-LONDON-GEOGRAPHY-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-LONDON-ORDERS-001` | Las órdenes londinenses de 1665 prueban un programa municipal explícito; no prueban recursos, ejecución o adherencia uniformes. | A normativo/B cumplimiento | AUDITADO | `EVID-MED-EPID-LONDON-ORDERS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-MARSEILLE-PATHOGEN-001` | Genomas de *Y. pestis* de l’Observance identifican el agente en individuos de la recaída marsellesa de 1722 y su pertenencia a la segunda pandemia. | A molecular | AUDITADO | `EVID-MED-EPID-MARSEILLE-GENOME-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-MARSEILLE-QUARANTINE-001` | Archivos del Grand Saint-Antoine muestran reglas, excepciones y decisiones portuarias; interés mercantil no constituye por sí solo una cadena causal completa. | A documental/B causal | AUDITADO | `EVID-MED-EPID-MARSEILLE-JOURNAL-001`, `EVID-MED-EPID-MARSEILLE-REGULATIONS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-MARSEILLE-CORDON-001` | El cordón provenzal fue una operación militar y administrativa real, pero su efecto aislado no puede heredarse del descenso epidémico. | A operación/C efecto | AUDITADO | `EVID-MED-EPID-MARSEILLE-CORDON-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-MARSEILLE-INEQUALITY-001` | Trabajo, vivienda, movilidad y deber público distribuyeron de forma desigual exposición y coerción en Marsella; las cifras ocupacionales carecen de denominadores completos. | B histórico | AUDITADO | `EVID-MED-EPID-MARSEILLE-OCCUPATIONS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |
| `CLAIM-MED-EPID-NONRANKING-001` | Mortalidad, antigüedad del decreto, tamaño del lazareto o rigor del cordón no forman una escala universal de avance sanitario, eficacia o justicia. | A-SEM | AUDITADO | `EVID-MED-EPID-SYNTHESIS-001` | `INV-MED-EPIDEMICS-QUARANTINE-001` |

## MED-015 — Encuentros coloniales

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-COL-SCOPE-001` | Conquista, esclavitud, misión y extracción se reconstruyen mediante archivos con poblaciones y productos distintos; ninguno contiene por sí solo la catástrofe completa. | A-SEM | AUDITADO | `EVID-MED-COL-METHOD-001`, `EVID-MED-COL-SYNTHESIS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-MODEL-001` | Una atribución defendible separa exposición, violencia, trabajo, nutrición, clasificación, respuesta y supervivencia antes de enlazar evento, mecanismo, distribución y desenlace. | A-SEM | AUDITADO | `EVID-MED-COL-METHOD-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-MONOCAUSE-001` | La secuencia temporal de un contacto no basta para atribuir infección, mortalidad o transformación a una causa única. | A-SEM | AUDITADO | `EVID-MED-COL-METHOD-001`, `EVID-MED-COL-SYNTHESIS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ARCHIVE-001` | Un archivo colonial puede ser preciso para su operación fiscal, religiosa, productiva o botánica y deficiente para población, identidad, diagnóstico o experiencia. | A documental/B representación | AUDITADO | `EVID-MED-COL-METHOD-001`, `EVID-MED-COL-SYNTHESIS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-NONRANKING-001` | Mortalidad, contaminación, conectividad, persistencia o circulación no forman una escala universal de sufrimiento, progreso o resiliencia. | A-SEM | AUDITADO | `EVID-MED-COL-SYNTHESIS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HISPANIOLA-BASELINE-001` | La población de La Española en 1492 permanece discutida por coberturas y métodos incompatibles; el colapso es defendible sin una cifra inicial única. | B histórico | AUDITADO | `EVID-MED-COL-HISPANIOLA-DEMOGRAPHY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HISPANIOLA-COERCION-001` | Guerra, captura, desplazamiento y trabajo aurífero alteraron exposición y subsistencia antes de la viruela claramente documentada de 1518. | A/B histórico | AUDITADO | `EVID-MED-COL-HISPANIOLA-COERCION-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HISPANIOLA-EXPOSURE-001` | Las llegadas ampliaron redes biológicas, pero una fecha de desembarco no diagnostica pasajeros ni muertes; 1518 es un hito epidémico específico. | A-SEM/B histórico | AUDITADO | `EVID-MED-COL-HISPANIOLA-DEMOGRAPHY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HISPANIOLA-NUTRITION-001` | Ruptura agrícola, confiscación de alimentos, trabajo y hambre interactuaron con violencia y enfermedad sin permitir una causa individual única. | B histórico | AUDITADO | `EVID-MED-COL-HISPANIOLA-COERCION-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HISPANIOLA-SURVIVAL-001` | Genomas antiguos y actuales refutan una extinción biológica total, pero ascendencia no decide identidad comunitaria ni continuidad cultural completa. | A genética/B histórico | AUDITADO | `EVID-MED-COL-HISPANIOLA-ANCESTRY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-TEPO-CEMETERY-001` | Fosas de la Gran Plaza, cronología y perfil mortuorio apoyan una crisis epidémica local de 1545–1550; el cementerio no es el denominador de Nueva España. | A arqueológico/B población | AUDITADO | `EVID-MED-COL-TEPO-CEMETERY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-TEPO-PARATYPHI-001` | Diez genomas de *S. enterica* Paratyphi C hacen del agente un candidato fuerte para el episodio muestreado, no para todo cocoliztli colonial. | A molecular local/B causal | AUDITADO | `EVID-MED-COL-TEPO-GENOMES-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-TEPO-DIET-001` | Isótopos no muestran descenso del consumo de maíz en la muestra temprano-colonial, sin medir suficiencia calórica, agua o hambre breve. | A proxy/B dieta | AUDITADO | `EVID-MED-COL-TEPO-DIET-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-TEPO-CATEGORY-001` | Cocoliztli y Paratyphi C pertenecen a productos históricos y moleculares distintos; un taxón positivo no hereda todos los síntomas narrados. | A-SEM | AUDITADO | `EVID-MED-COL-TEPO-GENOMES-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-TEPO-CONTINUITY-001` | Genética, isótopos y prácticas funerarias apoyan continuidad local y transformación, no inmovilidad ni ausencia de coerción. | B histórico | AUDITADO | `EVID-MED-COL-TEPO-CEMETERY-001`, `EVID-MED-COL-TEPO-DIET-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HUANC-POLLUTION-001` | Sedimentos registran metalurgia precolonial e intensificación colonial; la conquista reorganizó escala, técnica, demanda y trabajo. | A proxy/B atribución | AUDITADO | `EVID-MED-COL-HUANC-SEDIMENT-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HUANC-MITA-001` | Mita, salario, especialización, huida y negociación coexistieron bajo una coerción estatal que estructuró el ingreso y la distribución de beneficios. | A/B histórico | AUDITADO | `EVID-MED-COL-HUANC-RECORDS-001`, `EVID-MED-COL-HUANC-LABOR-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HUANC-RISK-001` | Modelos estiman cerca de 17 000 toneladas métricas de mercurio emitidas entre 1564 y 1810; no constituyen dosis ni cohorte individual. | B modelado | AUDITADO | `EVID-MED-COL-HUANC-MODEL-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HUANC-RESPONSE-001` | Ventilación y cambios técnicos pudieron reducir algunos peligros sin volver seguro el régimen ni demostrar un efecto clínico agregado. | B histórico/C efecto | AUDITADO | `EVID-MED-COL-HUANC-LABOR-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-HUANC-LEGACY-001` | Suelos residenciales actuales conservan contaminación colonial, pero no prueban adaptación biológica, dosis o síntomas históricos individuales. | A contaminación/B atribución | AUDITADO | `EVID-MED-COL-HUANC-LEGACY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-PHIL-IMMUNITY-001` | La conectividad prehispánica filipina no implica endemicidad de toda infección aguda ni una inmunidad uniforme del “Viejo Mundo”. | B histórico | AUDITADO | `EVID-MED-COL-PHIL-IMMUNITY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-PHIL-DEMOGRAPHY-001` | Tributos y padrones apoyan una caída cercana a dos tercios en Luzón y Visayas hacia mediados del siglo XVII, condicionada por hogar, cobertura, evasión y migración. | B modelado histórico | AUDITADO | `EVID-MED-COL-PHIL-TRIBUTES-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-PHIL-REGIONAL-001` | Guerra, epidemia, tributo, trabajo, reasentamiento, tierra y ecología operaron con intensidades regionales diferentes. | B histórico | AUDITADO | `EVID-MED-COL-PHIL-REGIONAL-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-PHIL-ARCHIVE-001` | Tributo, hogar, habitante y categoría misionera no son unidades intercambiables ni forman un censo completo. | A-SEM/B cobertura | AUDITADO | `EVID-MED-COL-PHIL-TRIBUTES-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ATL-VOYAGES-001` | SlaveVoyages permite estimar itinerarios, embarcados, desembarcados y mortalidad con observaciones e imputaciones explícitas, no recuperar cada persona. | A datos/B cobertura | AUDITADO | `EVID-MED-COL-ATL-DATABASE-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ATL-MORTALITY-001` | Duración, hacinamiento, agua, alimento y enfermedad se asocian con mortalidad de travesía; sobrevivir al desembarco no reduce la violencia constitutiva. | B histórico | AUDITADO | `EVID-MED-COL-ATL-SURGEONS-001`, `EVID-MED-COL-ATL-DATABASE-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ATL-PLANTATION-001` | Los 46 esqueletos de Newton conservan historias corporales y movilidad forzada parciales; cementerio, plantación y población atlántica tienen denominadores distintos. | A muestra/B población | AUDITADO | `EVID-MED-COL-NEWTON-HEALTH-001`, `EVID-MED-COL-NEWTON-MIGRATION-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ATL-RACEMED-001` | La medicina colonial convirtió categorías raciales y jurídicas en supuestas naturalezas corporales y valoró cuidado por productividad. | A/B histórico | AUDITADO | `EVID-MED-COL-JAMAICA-CARE-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-ATL-HEALERS-001` | Curadores africanos y afrodescendientes ejercieron agencia terapéutica bajo esclavitud; las fuentes filtran su práctica y no demuestran libertad o eficacia. | B histórico | AUDITADO | `EVID-MED-COL-JAMAICA-CARE-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-CAL-LATE-ONSET-001` | En California central, 15 322 entierros de 252 sitios apoyan inicio catastrófico con asentamiento sostenido desde 1770, no con toda visita previa. | A datos/B causal regional | AUDITADO | `EVID-MED-COL-CAL-MORTALITY-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-CAL-REGISTERS-001` | Los libros de 21 misiones reconstruyen redes demográficas y también producen categorías religiosas, nombres y causas no equivalentes a identidad o diagnóstico. | A documental/B representación | AUDITADO | `EVID-MED-COL-CAL-REGISTERS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-CAL-FOODWAYS-001` | Santa Clara conserva ganado y persistencia de caza, pesca, grasa y técnicas indígenas sin demostrar ración, suficiencia, libertad o adopción total. | A arqueológico/B dieta | AUDITADO | `EVID-MED-COL-CAL-FOODWAYS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-CAL-PERSISTENCE-001` | Alta mortalidad y baja fecundidad coexistieron con movilidad, continuidad y prácticas reorientadas; daño demográfico no equivale a desaparición. | B histórico | AUDITADO | `EVID-MED-COL-CAL-MORTALITY-001`, `EVID-MED-COL-CAL-REGISTERS-001`, `EVID-MED-COL-CAL-FOODWAYS-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-BOT-APPROPRIATION-001` | Guayases documenta contribución indígena y apropiación estatal de plantas, con nombres, consentimiento y beneficio preservados de forma asimétrica. | A/B histórico | AUDITADO | `EVID-MED-COL-BOT-GUAYASES-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-BOT-CINCHONA-001` | La historia de *Cinchona* depende de saberes, recolectores, expediciones, monopolios, taxonomía, química y semillas; una leyenda de descubridor no sustituye esa cadena. | A/B histórico | AUDITADO | `EVID-MED-COL-BOT-CINCHONA-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-BOT-TRADE-001` | Inventarios y rutas demuestran circulación y disponibilidad de plantas en lugares concretos, no uso individual, acceso equitativo o eficacia. | A documental/B recepción | AUDITADO | `EVID-MED-COL-BOT-TRADE-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |
| `CLAIM-MED-COL-BOT-ATTRIBUTION-001` | Origen indígena probable no autoriza inventar comunidad, receta, consentimiento o ensayo; atribución debe conservar evidencia y silencios. | A-SEM/B histórico | AUDITADO | `EVID-MED-COL-BOT-GUAYASES-001`, `EVID-MED-COL-BOT-CINCHONA-001` | `INV-MED-COLONIAL-ENCOUNTERS-001` |

## MED-016 — Anatomía, disección e imprenta

| ID | Afirmación delimitada | Confianza | Estado | Evidencias principales | Investigación |
|---|---|---|---|---|---|
| `CLAIM-MED-ANAT-SCOPE-001` | Siete expedientes entre ca. 1390 y 1830 muestran vías distintas de producir anatomía; no forman una secuencia universal de modernización. | A-SEM/B cobertura | AUDITADO | `EVID-MED-ANAT-METHOD-001`, `EVID-MED-ANAT-SYNTHESIS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MODEL-001` | Cuerpo, procedimiento, imagen, texto, comparación, corrección y circulación son productos independientes; ninguna capa hereda automáticamente la siguiente. | A-SEM | AUDITADO | `EVID-MED-ANAT-METHOD-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-DISSECTION-NONAUTOMATIC-001` | Abrir un cuerpo no produce verdad anatómica sin procedencia, finalidad, secuencia, categorías, comparación y control de variantes. | A-SEM | AUDITADO | `EVID-MED-ANAT-METHOD-001`, `EVID-MED-ANAT-BODIES-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-IMAGE-MEDIATION-001` | Una imagen anatómica media observación mediante selección, dibujo, talla, copia, escala y composición; no es una ventana neutral al cuerpo. | A/B historia material | AUDITADO | `EVID-MED-ANAT-IMAGE-PRINT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-PRINT-NONUNIFORM-001` | La imprenta amplía estabilidad y comparación, pero también variantes, apropiaciones y errores; edición no equivale a versión final o adopción uniforme. | A/B historia del libro | AUDITADO | `EVID-MED-ANAT-IMAGE-PRINT-001`, `EVID-MED-ANAT-VESALIUS-REVISIONS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BODIES-POWER-001` | Condena, pobreza, hospital, epidemia y exposición pública distribuyeron de forma desigual qué cuerpos podían abrirse y quién podía observarlos. | A/B histórico | AUDITADO | `EVID-MED-ANAT-BODIES-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-CLINICAL-LIMIT-001` | Una corrección topográfica no demuestra por sí sola mejora diagnóstica, quirúrgica o de supervivencia; efecto clínico requiere otra cadena. | A-SEM/C efecto | AUDITADO | `EVID-MED-ANAT-SYNTHESIS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NONRANKING-001` | Número de disecciones, naturalismo, fecha de impresión o circulación no forman una escala universal de racionalidad, modernidad o valor médico. | A-SEM | AUDITADO | `EVID-MED-ANAT-SYNTHESIS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MANSUR-MANUSCRIPT-001` | Manṣūr ibn Ilyās compuso en Shiraz hacia 1390 un tratado anatómico persa; la copia NLM fechada más temprana es de 1488. | A documental | AUDITADO | `EVID-MED-ANAT-MANSUR-MSS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MANSUR-SYSTEMS-001` | El tratado organiza cinco sistemas con figuras de cuerpo completo y añade una figura de gestación. | A documental | AUDITADO | `EVID-MED-ANAT-MANSUR-SYSTEMS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MANSUR-IMAGE-GENEALOGY-001` | Las figuras de Manṣūr pertenecen a una genealogía anterior y parcialmente desconocida; semejanza con series latinas no fija una ruta única. | B historia visual | AUDITADO | `EVID-MED-ANAT-MANSUR-GENEALOGY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MANSUR-DISSECTION-UNKNOWN-001` | El texto y las figuras conservados no demuestran que el programa visual proceda de disección humana directa realizada por Manṣūr. | A ausencia delimitada/B procedimiento | AUDITADO | `EVID-MED-ANAT-MANSUR-MSS-001`, `EVID-MED-ANAT-MANSUR-GENEALOGY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-MANSUR-CIRCULATION-001` | Copias persas, árabes y una recomposición en Gujarat documentan circulación multicomunitaria sin probar lectura o práctica uniformes. | A/B historia del manuscrito | AUDITADO | `EVID-MED-ANAT-MANSUR-MSS-001`, `EVID-MED-ANAT-MANSUR-GENEALOGY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BOLOGNA-INSTITUTION-001` | La *Anathomia* de 1316 y la universidad boloñesa organizaron una anatomía docente pública, no la primera apertura humana europea. | A/B institucional | AUDITADO | `EVID-MED-ANAT-BOLOGNA-ROLES-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BOLOGNA-ROLES-001` | Lector, ostensor y sector hicieron visibles funciones distintas alrededor del cuerpo; no todo acto siguió una división idéntica. | A/B histórico | AUDITADO | `EVID-MED-ANAT-BOLOGNA-ROLES-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BOLOGNA-PRINT-ICON-001` | La escena impresa de disección condensa jerarquía y procedimiento; no es registro literal de una sesión específica. | A/B iconográfico | AUDITADO | `EVID-MED-ANAT-BOLOGNA-ICON-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BERENGARIO-OBSERVATION-001` | Berengario vinculó experiencia quirúrgica, cuerpos múltiples e imágenes publicadas en 1521–1523. | A/B histórico | AUDITADO | `EVID-MED-ANAT-BERENGARIO-BOOK-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-BOLOGNA-CORRECTION-001` | En Bolonia, lectura, demostración, corte, comparación y corrección coexistieron; no hubo sustitución instantánea del libro por la observación. | B síntesis histórica | AUDITADO | `EVID-MED-ANAT-BOLOGNA-ROLES-001`, `EVID-MED-ANAT-BERENGARIO-BOOK-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VESALIUS-BODIES-001` | Los cuerpos vesalianos procedían de circuitos punitivos y hospitalarios seleccionados; amplitud de experiencia no equivale a representatividad poblacional. | B histórico | AUDITADO | `EVID-MED-ANAT-VESALIUS-FABRICA-001`, `EVID-MED-ANAT-BODIES-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VESALIUS-HAND-001` | Vesalio defendió que el anatomista interviniera manualmente y comparara descripciones con cuerpos humanos. | A documental | AUDITADO | `EVID-MED-ANAT-VESALIUS-FABRICA-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VESALIUS-CORRECTIONS-001` | La *Fabrica* corrigió estructuras heredadas de Galeno mediante comparación humana, sin volver exacta toda su anatomía. | A/B anatómico | AUDITADO | `EVID-MED-ANAT-VESALIUS-FABRICA-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VESALIUS-WORKSHOP-001` | Dibujantes, talladores, tipógrafos, papel y pruebas fueron constitutivos de la *Fabrica*; autoría anatómica no identifica cada mano visual. | A/B historia material | AUDITADO | `EVID-MED-ANAT-VESALIUS-WORKSHOP-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VESALIUS-REVISION-001` | El ejemplar de 1555 anotado por Vesalio conserva cientos de cambios mayormente estilísticos y algunos ajustes de imagen para una edición no publicada. | A documental | AUDITADO | `EVID-MED-ANAT-VESALIUS-REVISIONS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VALVERDE-COPY-001` | Valverde reutilizó y transformó figuras vesalianas; la relación material no decide por sí sola plagio, exactitud o irrelevancia. | A/B historia visual | AUDITADO | `EVID-MED-ANAT-VALVERDE-EDITIONS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-VALVERDE-CIRCULATION-001` | Las ediciones y traducciones de Valverde ampliaron circulación en castellano, italiano, latín y griego sin probar recepción uniforme. | A/B historia del libro | AUDITADO | `EVID-MED-ANAT-VALVERDE-EDITIONS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NS-AUTOPSY-1576-001` | Las autopsias novohispanas de 1576 investigaron una epidemia; son un producto anatomopatológico distinto de una disección docente. | A/B histórico | AUDITADO | `EVID-MED-ANAT-NS-AUTOPSY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NS-PRINT-1578-001` | La *Suma y recopilación de cirugía* se imprimió en México en 1578; existencia del manual no prueba ejecución de cada recomendación. | A documental/B práctica | AUDITADO | `EVID-MED-ANAT-NS-PRINT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NS-CHAIR-1620-001` | La cátedra novohispana de Cirugía y Anatomía fue dispuesta en 1619–1620 y abierta después; fundación no equivale a operación continua. | A/B institucional | AUDITADO | `EVID-MED-ANAT-NS-INSTITUTION-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NS-DISSECTION-1646-001` | El 8 de octubre de 1646 se documenta una disección docente formal en Ciudad de México, no necesariamente la primera apertura humana continental. | A documental/B prioridad | AUDITADO | `EVID-MED-ANAT-NS-INSTITUTION-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-NS-PROCEDURE-001` | Autopsia, libro, cátedra y disección docente tienen relojes distintos; “primera anatomía” carece de sentido sin definir producto y territorio. | A-SEM | AUDITADO | `EVID-MED-ANAT-NS-AUTOPSY-001`, `EVID-MED-ANAT-NS-PRINT-001`, `EVID-MED-ANAT-NS-INSTITUTION-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-ITAKI-DATE-001` | Itâkî compuso hacia 1632 el primer manual anatómico manuscrito ilustrado conservado en turco otomano, con calificadores de producto y lengua. | A/B documental | AUDITADO | `EVID-MED-ANAT-ITAKI-MANUSCRIPT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-ITAKI-COMPOSITE-001` | Las figuras de Itâkî combinan genealogías de Manṣūr, Vesalio y Valverde con composiciones propias. | A/B comparación visual | AUDITADO | `EVID-MED-ANAT-ITAKI-GENEALOGY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-ITAKI-TERMINOLOGY-001` | El manuscrito de Itâkî constituye una fuente temprana para traducir y organizar términos anatómicos en turco. | A/B filológico | AUDITADO | `EVID-MED-ANAT-ITAKI-TERMS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-ITAKI-DISSECTION-UNKNOWN-001` | No hay evidencia suficiente para atribuir las imágenes de Itâkî a disecciones humanas locales directas. | B ausencia delimitada | AUDITADO | `EVID-MED-ANAT-ITAKI-MANUSCRIPT-001`, `EVID-MED-ANAT-ITAKI-GENEALOGY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-ITAKI-CIRCULATION-001` | El testigo conservado demuestra composición y copia, no tiraje, aula, audiencia o práctica uniformes. | A-SEM/B recepción | AUDITADO | `EVID-MED-ANAT-ITAKI-MANUSCRIPT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-PREHISTORY-001` | Textos, figuras y aperturas corporales precedieron a *Kaitai shinsho*; 1774 no es un origen absoluto de la anatomía japonesa. | A/B histórico | AUDITADO | `EVID-MED-ANAT-JAPAN-PREHISTORY-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-BODY-1771-001` | La demostración de una mujer ejecutada en 1771 motivó comparación con láminas neerlandesas sin validar cada estructura del libro. | A/B histórico | AUDITADO | `EVID-MED-ANAT-JAPAN-DISSECTION-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-TRANSLATION-001` | Traducir anatomía neerlandesa exigió acuñar términos, resolver equivalencias y conservar incertidumbre. | A/B filológico | AUDITADO | `EVID-MED-ANAT-JAPAN-BOOK-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-IMAGE-001` | Odano Naotake redibujó láminas para *Kaitai shinsho*; la imagen japonesa es una mediación editorial y no una transparencia del cuerpo. | A/B historia visual | AUDITADO | `EVID-MED-ANAT-JAPAN-BOOK-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-PRINT-001` | La edición de cinco volúmenes de 1774 amplió disponibilidad y debate sin demostrar adopción uniforme. | A documental/B recepción | AUDITADO | `EVID-MED-ANAT-JAPAN-BOOK-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-JAPAN-REVISION-001` | La revisión de Ōtsuki Gentaku de 1826 corrigió traducciones y nomenclatura, mostrando que circulación no era cierre. | A/B histórico | AUDITADO | `EVID-MED-ANAT-JAPAN-REVISION-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-FORENSIC-001` | Manuales Qing incorporaron listas y diagramas para inspección judicial de lesiones y restos; no constituyen disección universitaria. | A/B documental | AUDITADO | `EVID-MED-ANAT-QING-FORENSICS-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-TRAUMA-001` | Médicos de trauma usaron modelos forenses y el *Golden Mirror* para aclarar posición y forma de huesos. | A/B histórico | AUDITADO | `EVID-MED-ANAT-QING-TRAUMA-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-WANG-CORPSES-001` | Wang Qingren declaró observar cadáveres expuestos y consultar trabajadores; eran cuerpos dañados fuera de disección seriada. | A textual/B procedimiento | AUDITADO | `EVID-MED-ANAT-QING-WANG-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-YILIN-1830-001` | *Yilin gaicuo*, publicado en 1830, conserva críticas anatómicas y 25 diagramas atribuidos. | A documental | AUDITADO | `EVID-MED-ANAT-QING-PRINT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-CORRECTION-001` | Wang corrigió algunas descripciones heredadas y propuso alternativas erróneas; rechazo de autoridad no valida cada reemplazo. | A/B comparación histórica | AUDITADO | `EVID-MED-ANAT-QING-WANG-001`, `EVID-MED-ANAT-QING-PRINT-001` | `INV-MED-ANATOMY-PRINT-001` |
| `CLAIM-MED-ANAT-QING-NONDISSECTION-001` | Exposición de cadáveres, inspección forense y observación anatómica son productos distintos de una disección controlada. | A-SEM/B procedimiento | AUDITADO | `EVID-MED-ANAT-QING-WANG-001`, `EVID-MED-ANAT-QING-FORENSICS-001` | `INV-MED-ANATOMY-PRINT-001` |

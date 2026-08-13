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

## Claims futuros

Las entradas cronológicas todavía no auditadas permanecen como eventos `SEMILLA` en `TIMELINE.md`. Se convertirán en claims al llegar su turno en el roadmap; así se evita otorgar apariencia de auditoría a fechas usadas inicialmente solo como orientación.

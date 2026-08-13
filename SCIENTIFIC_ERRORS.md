# Archivo de errores científicos y mecanismos de corrección

El propósito no es presentar la ciencia como una sucesión de fracasos ni como marcha inevitable hacia la verdad. Se documenta por qué una inferencia razonable bajo ciertos datos dejó de ser suficiente.

## Índice

| ID | Caso | Supuesto que falló | Mecanismo de corrección | Estado |
|---|---|---|---|---|
| `ERR-COSMOS-STATIC-001` | universo estático impuesto a ecuaciones dinámicas | estabilidad y preferencia filosófica tratadas como dato | soluciones de Friedmann/Lemaître, corrimientos y distancias | DOCUMENTADO |
| `ERR-COSMOS-HUBBLE-SCALE-001` | valor histórico de `H0` demasiado alto y edad demasiado corta | peldaños de distancia mal calibrados y `1/H0` tratado como edad suficiente | Cefeidas recalibradas, poblaciones estelares, `H(z)` y aceleración | DOCUMENTADO |
| `ERR-COSMOS-CMB-NOISE-001` | exceso de microondas tratado inicialmente como posible aparato/entorno | presupuesto de ruido o primer plano incompleto | auditoría de antena, multibanda, FIRAS y mapas CMB | DOCUMENTADO como proceso, no como mala práctica |
| `ERR-ELEMENT-SPECTRA-ABUNDANCE-001` | leer fuerza de línea como abundancia directa | ignorar temperatura, ionización y atmósfera | Saha/Payne, múltiples líneas, 3D y no-LTE | DOCUMENTADO |
| `ERR-ELEMENT-IRON-END-001` | “la fusión construye todo en escalera hasta hierro” | confundir energía estelar con todas las rutas nucleares | redes Fe/Ni, capturas de neutrones y decaimientos | DOCUMENTADO |
| `ERR-ELEMENT-SUPERNOVA-ALL-001` | asignar todos los núcleos pesados a supernovas ordinarias | convertir un sitio real en fuente exclusiva | Tc/AGB, granos, kilonovas y evolución química | DOCUMENTADO |
| `ERR-ELEMENT-SOURCE-EXCLUSIVE-001` | colorear cada elemento con un único origen | tratar elemento como isótopo y omitir mezcla | matrices de contribución y presupuestos isotópicos | DOCUMENTADO |
| `ERR-STARS-HR-MOVIE-001` | leer el diagrama H–R como película de una estrella | confundir distribución presente con trayectoria temporal | cúmulos, masas, isócronas y sismología | DOCUMENTADO |
| `ERR-STARS-PARALLAX-INVERSE-001` | usar `d=1/ϖ` para toda paralaje catalogada | ignorar ruido, punto cero, selección y prior | likelihood de paralaje, calibración y validación externa | DOCUMENTADO |
| `ERR-STARS-ONE-LIFECYCLE-001` | dibujar un ciclo universal con destino fijo | omitir composición, pérdida, rotación y binariedad | rutas ramificadas y síntesis poblacional | DOCUMENTADO |
| `ERR-STARS-PLANETARY-NEBULA-001` | interpretar “nebulosa planetaria” como planeta | convertir un nombre histórico por apariencia en mecanismo | espectros, expansión y estrella central | DOCUMENTADO |
| `ERR-STARS-PULSAR-AUTHORSHIP-001` | atribuir el descubrimiento material de púlsares a una sola figura | borrar construcción, revisión de registros y trabajo de Bell Burnell/equipo | autoría trazada, archivos e historia institucional | DOCUMENTADO |
| `ERR-SOLAR-ANALOG-SNAPSHOT-001` | presentar un disco análogo como foto del joven Sistema Solar | confundir clase física con genealogía local | separar archivo análogo y fósil local | DOCUMENTADO |
| `ERR-SOLAR-CAI-BIRTH-001` | llamar a una CAI “instante de nacimiento del Sol” | confundir cristalización/cierre con ensamblaje total | tiempo cero operacional y cronología de hitos | DOCUMENTADO |
| `ERR-SOLAR-GAP-PLANET-001` | etiquetar todo hueco como planeta | ignorar degeneración de brillo y mecanismos alternativos | continuo multibanda, gas, cinemática y detección independiente | DOCUMENTADO |
| `ERR-SOLAR-NEBULA-UNIFORM-001` | tratar la nebulosa como reservorio perfectamente homogéneo | extrapolar una razón canónica y omitir anomalías CC/NC | medir reservorios y correlaciones por sistema | DOCUMENTADO |
| `ERR-SOLAR-LINEAR-GROWTH-001` | polvo → planeta mediante adhesión monotónica | omitir deriva, rebote, fragmentación y concentración | experimentos, dinámica gas–sólido y mecanismos colectivos | DOCUMENTADO |
| `ERR-EARTH-HFW-STOPWATCH-001` | leer Hf–W como fecha final impresa | omitir equilibrio metal–silicato y curva `M(t)` | modelos de mezcla, suites multielementales y rangos condicionados | DOCUMENTADO |
| `ERR-EARTH-NBODY-REPLAY-001` | presentar una simulación como repetición del pasado | caos, condiciones iniciales y selección de análogos ocultos | ensambles, fallos y predicciones fuera del ajuste | DOCUMENTADO |
| `ERR-EARTH-PERFECT-MERGE-001` | asumir que toda colisión suma ambas masas | regla computacional tratada como física | hidrocódigos, *hit-and-run*, erosión y fragmentación | DOCUMENTADO |
| `ERR-EARTH-MOON-END-001` | igualar impacto lunar con fin total de acreción | confundir último gigante, equilibrio y cola tardía | cronología de hitos y HSE/Ru/W | DOCUMENTADO |
| `ERR-EARTH-METEORITE-RECIPE-001` | usar una condrita como receta exacta de la Tierra | semejanza isotópica convertida en identidad química | balance multielemental y reservorios | DOCUMENTADO |
| `ERR-EARTH-LATEVENEER-WATER-001` | atribuir toda el agua a un veneer exterior tardío | interior supuesto seco y capacidad confundida con historia | H/N en EC, múltiples portadores y retención | DOCUMENTADO |
| `ERR-EARTH-CORE-SHADOW-001` | decir que la sombra sísmica está vacía de ondas | ausencia geométrica convertida en silencio absoluto | fases refractadas, difractadas y sensibilidad finita | DOCUMENTADO |
| `ERR-EARTH-CORE-SWAVE-001` | afirmar que ninguna energía S cruza el núcleo | confundir propagación de cizalla con conversión de modo | distinguir S, K y fases SKS | DOCUMENTADO |
| `ERR-EARTH-CORE-CHEMISTRY-001` | hacer que la sismología identifique elementos | densidad/velocidad convertidas en análisis químico | unir mineralogía, geoquímica y ecuaciones de estado | DOCUMENTADO |
| `ERR-EARTH-CORE-WEIGHT-001` | explicar el núcleo porque “lo pesado se hunde” | densidad sin termodinámica ni afinidad química | diferenciación metal–silicato y partición | DOCUMENTADO |
| `ERR-EARTH-CORE-METEORITE-001` | llamar a un meteorito de hierro muestra del núcleo terrestre | análogo planetario convertido en fragmento genealógico | procedencia meteórica y comparación condicionada | DOCUMENTADO |
| `ERR-EARTH-CORE-ONEAGE-001` | asignar una sola edad al núcleo | segregación temprana y nucleación interna confundidas | cronología de dos procesos | DOCUMENTADO |
| `ERR-MOON-PACIFIC-001` | presentar el Pacífico como cicatriz de la Luna | cuenca joven convertida en fósil hadeano | tectónica de placas y dinámica angular | DOCUMENTADO |
| `ERR-MOON-THEIA-DETECTED-001` | narrar Theia como planeta observado | variable de modelo convertida en objeto muestreado | separar nombre, familia y cuerpo histórico | DOCUMENTADO |
| `ERR-MOON-IDENTICAL-001` | decir que Tierra y Luna son isotópicamente idénticas | semejanza de sistemas seleccionados extrapolada | matriz por isótopo, litología y precisión | DOCUMENTADO |
| `ERR-MOON-SIMULATION-PHOTO-001` | usar una simulación como video del impacto | viabilidad confundida con identidad | ensambles, condiciones y fallos | DOCUMENTADO |
| `ERR-MOON-DRY-001` | depleción volátil significa ausencia de agua | promedio global confundido con cero | abundancia por reservorio y etapa | DOCUMENTADO |
| `ERR-MOON-IMPACT-TIME-001` | una edad de zircon fecha el choque | cristalización/cierre confundidos con contacto | cronómetros y eventos separados | DOCUMENTADO |
| `ERR-HADEAN-ZIRCON-ROCK-001` | llamar “roca de 4.4 Ga” a un zircon detrítico | mineral y roca huésped/fuente confundidos | nombrar objeto, dominio y evento fechado | DOCUMENTADO |
| `ERR-HADEAN-CONTINENT-001` | convertir magma félsico en continente moderno global | composición extrapolada a área, elevación y tectónica | separar magma, corteza, tierra emergida y placa | DOCUMENTADO |
| `ERR-HADEAN-MODELAGE-001` | leer edad Hf/Sm–Nd de fuente como cristalización directa | evolución de reservorio y mezcla omitidas | distinguir edad mineral, isócrona, extracción y límite de corte | DOCUMENTADO |
| `ERR-HADEAN-ZIRCON-OCEAN-001` | decir que un zircon contiene evidencia directa de un océano | proxy de fuente convertido en muestra de agua y escala global | reconstruir agua–roca → fuente → magma → zircon | DOCUMENTADO |
| `ERR-HADEAN-WATER-DATE-001` | fechar el agua con la edad U–Pb del zircon | proceso anterior y cristalización confundidos | usar la edad mineral como límite posterior de alteración | DOCUMENTADO |
| `ERR-HADEAN-COOL-CLIMATE-001` | “Tierra temprana fría” como clima global benigno | contraste con océano de magma convertido en termómetro climático | separar fase líquida local, hidrosfera, clima y habitabilidad | DOCUMENTADO |
| `ERR-HADEAN-OXYGEN-O2-001` | leer `δ18O` como oxígeno atmosférico | cociente de isótopos estables confundido con abundancia/redox de `O₂` | separar isótopos de silicato, fugacidad y atmósfera | DOCUMENTADO |
| `ERR-HADEAN-FO2-O2-001` | leer `fO₂` del magma como porcentaje de O₂ en aire | potencial químico mineral convertido en composición atmosférica | separar valencia/fundido, gas desgasificado y aire acumulado | DOCUMENTADO |
| `ERR-HADEAN-MODEL-AIR-001` | presentar una salida de desgasificación como muestra de aire | entradas y equilibrio ocultos | nombrar modelo, inventario, P–T, redox y etapa | DOCUMENTADO |
| `ERR-HADEAN-ARCHEAN-AIR-001` | copiar presión/S-MIF arqueanos al Hadeano | límite posterior convertido en continuidad | conservar época y declarar extrapolación | DOCUMENTADO |
| `ERR-HADEAN-ONE-ATMOSPHERE-001` | hablar de una atmósfera secundaria estable | impactos, condensación y escape borrados | describir episodios y reservorio abierto | DOCUMENTADO |
| `ERR-GEO-KELVIN-001` | Tierra de decenas de Ma por enfriamiento | fuente térmica y transporte incompletos | radioactividad, convección y geocronología isotópica | DOCUMENTADO |
| `ERR-GEO-SEDIMENT-001` | edad global por tasa media de sedimentación | tasa constante, registro completo y sin reciclaje | estratigrafía, discordancias y relojes radiométricos | SEMILLA |
| `ERR-GEO-LEAD-001` | mediciones de Pb sin control ultralimpio | blanco despreciable | laboratorios limpios, blancos y química de trazas | DOCUMENTADO |
| `ERR-GEO-URATIO-001` | `238U/235U` idéntico en todos los materiales | homogeneidad isotópica universal | medición específica de U y corrección muestra por muestra | DOCUMENTADO |
| `ERR-HADEAN-LHB-001` | tratar el cataclismo de 3.9 Ga como hecho único cerrado | colección lunar representativa y edades sin mezcla | microanálisis, meteoritos lunares, nuevas muestras y modelos de sesgo | DOCUMENTADO |
| `ERR-LUNAR-AGE-EVENT-001` | contar cada edad de muestra como un impacto | cierre/reinicio único y procedencia independiente | petrología, varios cronómetros y asignación muestra–evento | DOCUMENTADO |
| `ERR-LUNAR-HIST-FLUX-001` | leer un histograma de edades como curva de flujo | selección y preservación constantes | función de respuesta, difusión y modelos de muestreo | DOCUMENTADO |
| `ERR-LIFE-OLDEST-001` | convertir la candidatura más antigua en “el fósil más antiguo” | publicación y antigüedad sustituyen evaluación comparativa | matriz común de edad, singenicidad, biogenicidad y alternativas | DOCUMENTADO |
| `ERR-LIFE-HOST-AGE-001` | asignar a una biosignatura la edad del mineral, intrusión o terreno | huésped, horizonte y señal son coetáneos | relaciones de corte, estratigrafía y cronología del objeto portador | DOCUMENTADO |
| `ERR-LIFE-MORPH-001` | tratar parecido morfológico como identificación biológica | la forma celular es exclusiva de vida | 3-D, población, tafonomía, química y experimentos abióticos | DOCUMENTADO |
| `ERR-LIFE-ISOTOPE-001` | tratar `δ13C` ligero como diagnóstico único de vida | sólo la fijación biológica fracciona C | petrología, poblaciones, isótopos múltiples y modelos de fluidos | DOCUMENTADO |
| `ERR-LIFE-ORIGIN-DATE-001` | confundir la evidencia más antigua con la fecha del origen | preservación inmediata y registro completo | expresar límites mínimos y sesgo de preservación | DOCUMENTADO |
| `ERR-LIFE-INDEP-001` | contar varios aparatos sobre un grano como varias pruebas independientes | cada técnica tiene un origen material distinto | matriz de dependencias por muestra, contexto, modelo y escala | DOCUMENTADO |
| `ERR-LIFE-TAXONOMY-001` | inferir taxón o metabolismo exactos de una forma/fracción compatible | señal biológica identifica una ruta única | comparar redes abióticas/biológicas y degradar confianza por salto | DOCUMENTADO |
| `ERR-PHOTO-STROM-CYANO-001` | equiparar tapete/estromatolito con cianobacteria oxigénica | forma y fototrofía identifican taxón/donador | separar biogenicidad, metabolismo, redox y taxonomía | DOCUMENTADO |
| `ERR-PHOTO-O2-GLOBAL-001` | convertir un oasis local en atmósfera oxigenada | escala y mezcla global heredadas del proxy | declarar reservorio, área y tiempo de residencia | DOCUMENTADO |
| `ERR-PHOTO-HEMATITE-001` | asignar a hematita la edad de la roca huésped | mineral oxidado necesariamente primario | petrografía de reemplazo y reloj del fraccionamiento | DOCUMENTADO |
| `ERR-PHOTO-BIOMARKER-001` | asumir que un lípido extraído es singenético | interior de roca está libre de entrada tardía | blancos, testigos ultralimpios y análisis *in situ* | DOCUMENTADO |
| `ERR-PHOTO-PROXY-DATE-001` | usar edad de oxidación como cumpleaños de la innovación | primera huella preserva el origen inmediato | expresar mínimo y dirección del límite | DOCUMENTADO |
| `ERR-PHOTO-CLOCK-001` | tratar punto de reloj molecular como fecha fósil | calibraciones/tasas/nodos son únicos | distribuciones, sensibilidad y nodo explícito | DOCUMENTADO |
| `ERR-PHOTO-GOE-ORIGIN-001` | fechar fotosíntesis oxigénica con el GOE | producción y acumulación son simultáneas | balance de fuentes/sumideros y escala | DOCUMENTADO |
| `ERR-GOE-INSTANT-001` | dibujar la GOE como interruptor global | un cruce local fecha todo el sistema | intervalos, cuencas y memoria separados | DOCUMENTADO |
| `ERR-GOE-SMIF-OXYMETER-001` | convertir pérdida de `S‑MIF` en porcentaje de `O₂` | umbral fotoquímico es medición continua | modelo, rango y reservorio explícitos | DOCUMENTADO |
| `ERR-GOE-RED-BED-001` | usar todo sedimento rojo como proxy atmosférico preciso | hematita siempre primaria y coetánea | textura, singenicidad y facies | DOCUMENTADO |
| `ERR-GOE-OCEAN-GLOBAL-001` | extender plataforma oxigenada a todo el océano | mezcla vertical instantánea | profundidad, transectos y proxies múltiples | DOCUMENTADO |
| `ERR-GOE-GLACIATION-PROOF-001` | usar glaciación como prueba causal de `O₂` | coincidencia fija dirección | orden temporal y predicciones rivales | DOCUMENTADO |
| `ERR-GOE-MODERN-001` | interpretar “Gran” como nivel moderno | importancia equivale a `21 %` | separar régimen, cota y amplitud | DOCUMENTADO |
| `ERR-LUCA-FIRST-LIFE-001` | llamar a LUCA «la primera vida» | último ancestro y origen químico son el mismo evento | definición del nodo + historia pre‑LUCA | DOCUMENTADO |
| `ERR-LUCA-SINGLE-CELL-001` | dibujar LUCA como una célula individual observada | nodo equivale a individuo y todos los genes coalescen juntos | población, intervalos y genealogías de genes | DOCUMENTADO |
| `ERR-LUCA-PRESENT-SHARED-001` | contar todo gen compartido como ancestral | distribución presente implica herencia vertical | árboles, D/T/L y ortología | DOCUMENTADO |
| `ERR-LUCA-RECOVERED-GENOME-001` | presentar una reconstrucción como genoma recuperado | probabilidad de familia equivale a secuencia física | declarar modelo, umbral y ausencia de bases/orden | DOCUMENTADO |
| `ERR-LUCA-THREE-DOMAINS-001` | dibujar tres troncos celulares primarios equivalentes | Eukaryota diverge directamente de LUCA aparte de Archaea | filogenómica arqueana + endosimbiosis | DOCUMENTADO |
| `ERR-LUCA-PORTRAIT-001` | convertir metabolismo/hábitat modelados en retrato | compatibilidad identifica fisiología, lugar y aspecto | separar familia, ruta, flujo, ambiente y confianza | DOCUMENTADO |
| `ERR-EUK-ASGARD-ANCESTOR-001` | llamar ancestro a una Asgard moderna | pariente equivale a estado ancestral congelado | árbol + reconstrucción de estados | DOCUMENTADO |
| `ERR-EUK-MITO-BACTERIUM-001` | tratar mitocondria como bacteria intacta | reducción e integración no cambian identidad/sistemas | organelogénesis, importación y transferencia | DOCUMENTADO |
| `ERR-EUK-AMITO-PRIMITIVE-001` | usar ausencia de mitocondria como estado primitivo | simplicidad presente conserva orden histórico | MRO, filogenia y pérdida secundaria | DOCUMENTADO |
| `ERR-EUK-LECA-FIRST-001` | confundir LECA con primer eucariota | último ancestro común marca origen de todos sus rasgos | tallo FECA–LECA y nodo explícito | DOCUMENTADO |
| `ERR-EUK-ENGULFMENT-OBSERVED-001` | ilustrar fagocitosis como episodio observado | protrusión/doble membrana identifican mecanismo | alternativas y predicciones topológicas | DOCUMENTADO |
| `ERR-EUK-RICKETTSIA-001` | identificar donante como *Rickettsia* | afinidad Alpha fina equivale a especie actual | topología condicionada y muestreo | DOCUMENTADO |
| `ERR-EUK-GENE-PERCENT-001` | leer porcentajes de pipeline como composición de LECA | denominadores/modelos son intercambiables | definición, no asignados y reanálisis común | DOCUMENTADO |
| `ERR-EUK-FOSSIL-BIRTH-001` | usar fósil más antiguo como fecha de origen | preservación es inmediata y afinidad cerrada | edad mínima + corona/tallo | DOCUMENTADO |
| `ERR-EUK-OXYGEN-TRIGGER-001` | hacer del O₂ una causa única por correlación | nicho fósil fecha y causa endosimbiosis | cronología y modelos causales rivales | DOCUMENTADO |
| `ERR-SEX-REPRODUCTION-001` | usar reproducción como sinónimo de sexo | producir individuos implica mezcla genética | módulos nombrados por separado | DOCUMENTADO |
| `ERR-SEX-RECOMBINATION-001` | llamar sexo a toda recombinación | reparación/HGT equivalen a ciclo sexual | exigir fusión, ploidía y segregación según claim | DOCUMENTADO |
| `ERR-SEX-LECA-OBSERVED-001` | narrar el ciclo de LECA como observación | reconstrucción ancestral equivale a fósil | dato, puente y estado separados | DOCUMENTADO |
| `ERR-SEX-GENES-PROVE-001` | inventario génico convertido en meiosis observada | presencia implica expresión y coordinación | función, célula y productos además de ortología | DOCUMENTADO |
| `ERR-SEX-ASEX-PRIMITIVE-001` | ausencia observacional convertida en asexualidad ancestral | sexo raro no deja señal detectable | poder de muestreo y genómica poblacional | DOCUMENTADO |
| `ERR-SEX-ADVANTAGE-UNIVERSAL-001` | ventaja experimental convertida en ley | contexto no cambia signo ni magnitud | dominio experimental explícito | DOCUMENTADO |
| `ERR-SEX-ORIGIN-BENEFIT-001` | mantenimiento moderno convertido en causa de origen | ciclo integrado equivale a módulos nacientes | origen, estabilización y mantenimiento separados | DOCUMENTADO |
| `ERR-SEX-MALE-FEMALE-001` | mating types convertidos en macho/hembra | compatibilidad implica anisogamia | términos definidos por tamaño/función de gameto | DOCUMENTADO |
| `ERR-SEX-FOSSIL-BIRTH-001` | primer fósil sexual convertido en origen | preservación coincide con innovación | mínimo condicionado + cadena molecular separada | DOCUMENTADO |
| `ERR-MULTI-COLONY-ORGANISM-001` | toda asociación convertida en organismo | proximidad implica reproducción y aptitud grupal | nivel y criterio operacional explícitos | DOCUMENTADO |
| `ERR-MULTI-ONE-ORIGIN-001` | multicelularidad tratada como origen único | una palabra funcional implica homología completa | reconstrucción por clado, modo y componente | DOCUMENTADO |
| `ERR-MULTI-LADDER-001` | colonias dibujadas como escalón hacia animales | evolución avanza hacia un destino | árbol de rutas independientes y linajes actuales | DOCUMENTADO |
| `ERR-MULTI-GENE-001` | gen local convertido en interruptor universal | una mutación explica todas las transiciones | habilitación, cooptación y convergencia separadas | DOCUMENTADO |
| `ERR-MULTI-LAB-HISTORY-001` | experimento convertido en repetición histórica | accesibilidad causal identifica el pasado | tratamiento, taxón y alcance declarados | DOCUMENTADO |
| `ERR-MULTI-SIZE-COMPLEXITY-001` | tamaño convertido en complejidad | más células implican más integración | tipos, transporte, comunicación y ciclo medidos | DOCUMENTADO |
| `ERR-MULTI-OXYGEN-TRIGGER-001` | oxígeno convertido en interruptor universal | contexto ambiental equivale a causa de cada origen | mecanismo y cronología por linaje | DOCUMENTADO |
| `ERR-MULTI-FOSSIL-BIRTH-001` | primer fósil convertido en nacimiento | aparición preservada coincide con innovación | mínimo condicionado + afinidad explícita | DOCUMENTADO |
| `ERR-MULTI-ANIMAL-TEMPLATE-001` | animales convertidos en plantilla universal | otros linajes son etapas incompletas | comparación funcional sin jerarquía zoológica | DOCUMENTADO |
| `ERR-SNOWBALL-DIAMICTITE-001` | diamictita convertida automáticamente en glaciar | textura identifica agente | paquete de facies y deformación | DOCUMENTADO |
| `ERR-SNOWBALL-MODERN-LATITUDE-001` | latitud moderna proyectada al Criogénico | continentes no se movieron | paleomagnetismo + tectónica + edad | DOCUMENTADO |
| `ERR-SNOWBALL-ONE-OUTCROP-001` | un afloramiento convertido en planeta | depósito local prueba cobertura global | cadena local–sincronía–latitud–modelo | DOCUMENTADO |
| `ERR-SNOWBALL-WHITE-BALL-001` | nombre convertido en océano sellado | Snowball tiene una sola geometría | nivel de cobertura y fase explícitos | DOCUMENTADO |
| `ERR-SNOWBALL-TWO-IDENTICAL-001` | Sturtiana y Marinoana tratadas como copias | misma etiqueta implica duración/mecanismo iguales | cronologías y balances separados | DOCUMENTADO |
| `ERR-SNOWBALL-CO2-STOPWATCH-001` | `CO₂` convertido en cronómetro directo | desgasificación y meteorización conocidas | balance, nubes, albedo y presión | DOCUMENTADO |
| `ERR-SNOWBALL-CAP-INSTANT-001` | cap convertido en foto del deshielo | contacto abrupto implica depósito instantáneo/único | facies, etapas, agua y edad interna | DOCUMENTADO |
| `ERR-SNOWBALL-LIFE-EXTINCT-001` | hielo global convertido en esterilización | océano medio representa todos los refugios | evidencia local de hábitats/productividad | DOCUMENTADO |
| `ERR-SNOWBALL-ANIMALS-001` | Snowball convertido en creador de animales | sucesión temporal demuestra causalidad | mecanismos y cronologías rivales | DOCUMENTADO |
| `ERR-EDIACARA-PERIOD-BIOTA-001` | periodo y macrobiota convertidos en sinónimos | todo lo ediacárico pertenece a la asociación clásica | separar Ediacárico, Lantian/Weng’an y macrobiota ~574–539 Ma | DOCUMENTADO |
| `ERR-EDIACARA-ALL-ANIMALS-001` | toda impresión declarada animal | biota/fauna es un clado | expediente de afinidad por taxón | DOCUMENTADO |
| `ERR-EDIACARA-FRONDS-PLANTS-001` | frondas convertidas en plantas | apariencia foliar prueba fotosíntesis | paleoprofundidad, arquitectura y nutrición | DOCUMENTADO |
| `ERR-EDIACARA-DISCS-JELLYFISH-001` | discos convertidos en medusas | contorno radial equivale a cuerpo medusoide | unión a frondas, tafonomía y anatomía | DOCUMENTADO |
| `ERR-EDIACARA-SHAPE-TAXON-001` | silueta convertida en parentesco | semejanza = homología | tafonomía, desarrollo, conducta y matriz explícita | DOCUMENTADO |
| `ERR-EDIACARA-THREE-STAGES-001` | tres asociaciones tratadas como etapas exclusivas | cluster implica intervalo sin solapamiento | edad + facies + detectabilidad | DOCUMENTADO |
| `ERR-EDIACARA-OXYGEN-SWITCH-001` | oxígeno convertido en interruptor animal | condición necesaria = causa suficiente | umbral local y modelo multivariable | DOCUMENTADO |
| `ERR-EDIACARA-ABSENCE-EXTINCTION-001` | ausencia convertida en extinción global | registro tiene detectabilidad constante | facies, ventana, muestreo y rangos | DOCUMENTADO |
| `ERR-EDIACARA-FAILED-EXPERIMENT-001` | biota convertida en experimento fallido | evolución tiene meta cámbrica/moderna | clados y funciones evaluados sin teleología | DOCUMENTADO |
| `ERR-CAMBRIAN-INSTANT-001` | radiación dibujada como instante | etiqueta comparte un único reloj | curvas e intervalos por indicador | DOCUMENTADO |
| `ERR-CAMBRIAN-BOUNDARY-CAUSE-001` | GSSP convertido en causa biológica | límite formal inicia procesos globales | definición, edad y mecanismo separados | DOCUMENTADO |
| `ERR-CAMBRIAN-NO-PRECURSORS-001` | animales aparecen sin precursores | ausencia corporal equivale a divergencia ausente | Ediacárico, trazas y relojes | DOCUMENTADO |
| `ERR-CAMBRIAN-ALL-PHYLA-001` | todos los filos aparecen completos | nombre moderno = corona terminada | tallo/corona y mosaicos | DOCUMENTADO |
| `ERR-CAMBRIAN-NO-TRANSITIONS-001` | rareza convertida en ausencia de transiciones | transición debe parecer intermedio lineal | caracteres y árbol ramificado | DOCUMENTADO |
| `ERR-CAMBRIAN-LAGERSTATTE-CENSUS-001` | Lagerstätte convertida en censo mundial | preservación excepcional es neutral | facies, tejidos y detectabilidad | DOCUMENTADO |
| `ERR-CAMBRIAN-SKELETON-ORIGIN-001` | primer elemento convertido en origen único | biomineralización es una innovación homóloga | mineral, función y clado separados | DOCUMENTADO |
| `ERR-CAMBRIAN-OXYGEN-SWITCH-001` | oxígeno convertido en interruptor único | condición suficiente y global | proxies locales + causalidad multivariable | DOCUMENTADO |
| `ERR-CAMBRIAN-GENE-MAGIC-001` | toolkit convertido en explosión automática | gen presente produce anatomía | regulación, expresión y ecología | DOCUMENTADO |
| `ERR-CAMBRIAN-NO-EXTINCTION-001` | radiación narrada como subida continua | diversidad creciente excluye pérdidas | rangos, Sinsk y muestreo | DOCUMENTADO |
| `ERR-ORDOVICIAN-ONEEVENT-001` | GOBE dibujada como explosión única | todos los clados/regiones comparten reloj | curvas por archivo y paleoplaca | DOCUMENTADO |
| `ERR-ORDOVICIAN-COUNT-CENSUS-001` | ocurrencias convertidas en censo oceánico | preservación y colecta neutrales | roca, colección, facies y cobertura | DOCUMENTADO |
| `ERR-ORDOVICIAN-DIVERSITY-ECOSPACE-001` | riqueza igualada con ecospace/biomasa | más taxones implica toda complejidad | métricas paralelas y delimitadas | DOCUMENTADO |
| `ERR-ORDOVICIAN-CLIMATE-SWITCH-001` | enfriamiento convertido en interruptor | nicho térmico es causa suficiente | modelo, fisiología y causas residuales | DOCUMENTADO |
| `ERR-ORDOVICIAN-OXYGEN-SWITCH-001` | oxígeno global dibujado como una curva | proxies locales/globales son equivalentes | reservorio, escala, diagénesis y tiempo | DOCUMENTADO |
| `ERR-ORDOVICIAN-METEOR-CAUSE-001` | meteoritos causan toda la GOBE | solapamiento regional prueba precedencia | geocronología y presupuesto de polvo | DOCUMENTADO |
| `ERR-ORDOVICIAN-LAND-FOREST-001` | criptosporas convertidas en bosque | microfósil identifica cuerpo/paisaje | mínimo, productor y cobertura separados | DOCUMENTADO |
| `ERR-ORDOVICIAN-LOME-INSTANT-001` | LOME reducida a una fecha | límite formal equivale a extinción | dos fases, rangos y cronología | DOCUMENTADO |
| `ERR-ORDOVICIAN-LOME-ONECAUSE-001` | ambos pulsos reciben la misma causa | coincidencia ambiental identifica mortalidad | clima–eustasia–redox + selectividad | DOCUMENTADO |
| `ERR-ORDOVICIAN-RECOVERY-001` | primer aumento llamado recuperación total | riqueza, composición y función rebotan juntas | declarar métrica, escala y referencia | DOCUMENTADO |
| `ERR-SILURIAN-ONECLOCK-001` | una cifra fecha toda la recuperación | región/métrica son intercambiables | separar línea de base, cobertura y variable | DOCUMENTADO |
| `ERR-SILURIAN-REWIND-001` | riqueza restaurada equivale a comunidad restaurada | composición y función siguen al conteo | medir taxones, dominancia, rasgos y redes | DOCUMENTADO |
| `ERR-SILURIAN-MODERN-REEF-001` | arrecife silúrico dibujado como coral moderno | función implica constructores actuales | identificar estromatoporoideos/tabulados y facies | DOCUMENTADO |
| `ERR-SILURIAN-JAWS-ORIGIN-001` | cuerpo articulado convertido en origen de mandíbulas | FAD fecha divergencia | mínimo fósil + filogenia + archivo anterior | DOCUMENTADO |
| `ERR-SILURIAN-ISOTOPE-CAUSE-001` | excursión `δ13C` usada como causa | correlación/reservorio miden mortalidad | proxy → reservorio → mecanismo → selectividad | DOCUMENTADO |
| `ERR-SILURIAN-LAND-CONQUEST-001` | tierra vacía hasta el Silúrico | cuerpos visibles agotan el archivo | continuidad ordovícica + archivos silúricos | DOCUMENTADO |
| `ERR-SILURIAN-SPORE-VASCULAR-001` | una espora prueba xilema | reproducción identifica anatomía corporal | conexión espora–esporangio–traqueida | DOCUMENTADO |
| `ERR-SILURIAN-COOKSONIA-FOREST-001` | ejes diminutos convertidos en bosque | nombre implica altura/cobertura | escala, tejido y paisaje separados | DOCUMENTADO |
| `ERR-SILURIAN-PNEUMODESMUS-RANK-001` | “más antiguo” tratado como propiedad estable | anatomía y edad comparten evidencia | rutas independientes y ranking provisional | DOCUMENTADO |
| `ERR-SILURIAN-SCORPION-LAND-001` | silueta de escorpión prueba terrestreidad | parecido/nombre sustituyen caracteres | redescripción, aparato respiratorio y facies | DOCUMENTADO |
| `ERR-DEVONIAN-TREE-FOREST-001` | un árbol aislado se volvió bosque | altura/madera sustituyen organización espacial | bases in situ, densidad, extensión y definición explícita | DOCUMENTADO |
| `ERR-DEVONIAN-FIRST-FOREST-001` | “primer bosque” tratado como fecha definitiva | ranking de hallazgo confundido con origen | edad, criterio y provisionalidad publicados | DOCUMENTADO |
| `ERR-DEVONIAN-FOREST-CO2-001` | bosques explican solos la caída de CO₂ | mecanismo plausible convertido en presupuesto global | proxies prebosque y balance multifuente | DOCUMENTADO |
| `ERR-DEVONIAN-FISH-ORIGIN-001` | «edad de los peces» fecha su origen | etiqueta histórica leída literalmente | separar origen, FAD, disparidad, riqueza y dominancia | DOCUMENTADO |
| `ERR-DEVONIAN-PRIMITIVE-LADDER-001` | placodermos y «acantodios» como peldaños simples | cajas parafiléticas tratadas como grados homogéneos | caracteres, mosaicos y árboles con sensibilidad | DOCUMENTADO |
| `ERR-DEVONIAN-TIKTAALIK-ANCESTOR-001` | `Tiktaalik` como pez exacto que salió a tierra | transicional equivale a ancestro/conducta | filogenia, mosaico anatómico y función separadas | DOCUMENTADO |
| `ERR-DEVONIAN-DIGITS-LAND-001` | dígitos prueban vida terrestre | anatomía confundida con hábitat | radios de aleta, histología, pistas y biomecánica | DOCUMENTADO |
| `ERR-DEVONIAN-ZACHELMIE-CERTAINTY-001` | una huella identifica especie y ambiente | productor/depósito inferidos sin cuerpo | morfología, facies y alternativas separadas | DOCUMENTADO |
| `ERR-DEVONIAN-ONE-EXTINCTION-001` | una sola extinción devónica instantánea | pulsos, agotamiento y métricas comprimidos | Kellwasser/Hangenberg y escalas de tasa separadas | DOCUMENTADO |
| `ERR-DEVONIAN-PROXY-CAUSE-001` | anoxia, Hg o esporas malformadas nombran la causa | señal o mecanismo sustituyen cadena causal | sincronía, dosis, selectividad y rivales explícitos | DOCUMENTADO |
| `ERR-CARBONIFEROUS-GLOBAL-SWAMP-001` | el planeta entero se volvió pantano | nombre y carbón euramericano extrapolados globalmente | facies regionales, hielo gondwánico y paleogeografía | DOCUMENTADO |
| `ERR-CARBONIFEROUS-ALL-COAL-001` | toda planta muerta terminó en carbón | producción confundida con preservación y maduración | balance de turba, cuenca y coalificación separados | DOCUMENTADO |
| `ERR-CARBONIFEROUS-NO-FUNGI-001` | no había hongos capaces de descomponer madera | reloj enzimático convertido en ausencia ecológica | fósiles, descomposición y distribución estratigráfica | DOCUMENTADO |
| `ERR-CARBONIFEROUS-OXYGEN-35-001` | `35 %` presentado como medición exacta | salida de modelo tratada como muestra de aire | método, intervalo, error y proxies rivales | DOCUMENTADO |
| `ERR-CARBONIFEROUS-ALL-GIANT-001` | oxígeno alto volvió gigante a todo artrópodo | habilitador respiratorio convertido en causa suficiente | fisiología, clado, temperatura y ecología | DOCUMENTADO |
| `ERR-CARBONIFEROUS-ARTHROPLEURA-INSECT-001` | `Arthropleura` llamado insecto gigante | artrópodo usado como sinónimo de insecto | anatomía y posición miriápoda | DOCUMENTADO |
| `ERR-CARBONIFEROUS-ROMERS-GAP-001` | el vacío fósil probó ausencia de tetrápodos | falta de roca/colecta convertida en biología | nuevas localidades y detectabilidad | DOCUMENTADO |
| `ERR-CARBONIFEROUS-AMNIOTE-EGG-001` | las huellas probaron un huevo amniótico | pertenencia de linaje sustituye tejido reproductivo | icnología, cuerpos y reconstrucción filogenética separadas | DOCUMENTADO |
| `ERR-CARBONIFEROUS-HYLONOMUS-ORIGIN-001` | `Hylonomus` fue el primer amniota y lugar de origen | mínimo corporal convertido en divergencia | FAD, nodo, rango fantasma y huellas separados | DOCUMENTADO |
| `ERR-CARBONIFEROUS-RAINFOREST-CAUSE-001` | colapso forestal causó automáticamente radiación amniota | correlación y riqueza cruda sustituyen causalidad | estandarización, espacio y modelos neutrales | DOCUMENTADO |
| `ERR-PERMIAN-PANGEA-INSTANT-001` | Pangea apareció de golpe al comenzar el Pérmico | nombre del periodo usado como reloj tectónico | suturas, colisiones y terrenos por intervalo | DOCUMENTADO |
| `ERR-PERMIAN-PANGEA-DESERT-001` | todo Pangea fue un desierto uniforme | continentalidad extrapolada sobre relieve/latitud/costas | facies, hielo, proxies y GCM regionales | DOCUMENTADO |
| `ERR-PERMIAN-DIMETRODON-DINOSAUR-001` | `Dimetrodon` fue dinosaurio | silueta popular sustituye filogenia | caracteres y nodos sinápsido/dinosaurio | DOCUMENTADO |
| `ERR-PERMIAN-DIMETRODON-ANCESTOR-001` | `Dimetrodon` fue nuestro ancestro directo | parentesco lateral convertido en genealogía | nodo, grupo tallo y ancestro desconocido | DOCUMENTADO |
| `ERR-PERMIAN-PELYCOSAUR-CLADE-001` | Pelycosauria es un clado anterior a Therapsida | grado parafilético dibujado como peldaño | árbol con descendientes incluidos | DOCUMENTADO |
| `ERR-PERMIAN-SAIL-RADIATOR-001` | la vela fue exclusivamente radiador | capacidad física convertida en función seleccionada | histología, alometría y alternativas | DOCUMENTADO |
| `ERR-PERMIAN-SYNAPSID-LADDER-001` | sinápsidos marcharon linealmente hacia postura mamaliana | árbol/radiaciones convertidos en progreso | paisajes funcionales y mosaicos | DOCUMENTADO |
| `ERR-PERMIAN-ONE-EXTINCTION-001` | hubo una sola extinción pérmica de millones de años | Capitaniense y terminal sumadas | eventos, volcanismos y pulsos separados | DOCUMENTADO |
| `ERR-PERMIAN-96-LIFE-001` | murió 96 % de toda la vida | estimador marino convertido en censo biosférico | denominador, corrección, reino y hábitat | DOCUMENTADO |
| `ERR-PERMIAN-VOLCANO-ONECAUSE-001` | una erupción mató todo directamente | desencadenante confundido con mecanismo de muerte | pulso, gases, clima, océano y selectividad | DOCUMENTADO |
| `ERR-TRIASSIC-RECOVERY-DATE-001` | la biosfera se recuperó en una fecha única | riqueza, abundancia, función y estabilidad fundidas | métricas, regiones y líneas base separadas | DOCUMENTADO |
| `ERR-TRIASSIC-GUIYANG-GLOBAL-001` | Guiyang prueba recuperación mundial | Lagerstätte local convertida en censo planetario | mínimo local y replicación geográfica | DOCUMENTADO |
| `ERR-TRIASSIC-ARCHOSAUR-DINOSAUR-001` | todo arcosaurio fue dinosaurio | nodo amplio confundido con una rama | árbol Archosauria–Pseudosuchia–Avemetatarsalia–Dinosauria | DOCUMENTADO |
| `ERR-TRIASSIC-NYASASAURUS-FIRST-001` | `Nyasasaurus` fue el primer dinosaurio | candidato/FAD convertido en origen e individuo | posiciones alternativas y límite mínimo | DOCUMENTADO |
| `ERR-TRIASSIC-DINOSAUR-DOMINANCE-001` | dinosaurios dominaron desde su aparición | presencia convertida en abundancia/biomasa/ecospace | métricas y regiones explícitas | DOCUMENTADO |
| `ERR-TRIASSIC-CPE-CAUSE-001` | el CPE creó a los dinosaurios | coincidencia convertida en causa única | cronología, tasas y modelos rivales | DOCUMENTADO |
| `ERR-TRIASSIC-BRASILODON-MAMMAL-001` | `Brasilodon` fue placentario por difiodoncia | un carácter convertido en identidad/paquete | matriz filogenética y rasgos separados | DOCUMENTADO |
| `ERR-TRIASSIC-MAMMAL-PACKAGE-001` | los rasgos mamalianos aparecieron juntos | mosaico y homoplasia convertidos en escalera | reconstrucción carácter por carácter | DOCUMENTADO |
| `ERR-TRIASSIC-CAMP-LAVA-001` | la primera lava inició CAMP | afloramiento eruptivo igualado a sistema magmático | lavas, diques, sills y gases separados | DOCUMENTADO |
| `ERR-TRIASSIC-DINOSAUR-VICTORY-001` | la extinción premió al mejor competidor | supervivencia/expansión convertidas en superioridad | oportunidad, clima, innovación y competencia comparados | DOCUMENTADO |
| `ERR-JURASSIC-JK-GSSP-001` | la base cretácica ya tiene clavo dorado | cifra ICS convertida en GSSP | estado institucional y calibración separados | DOCUMENTADO |
| `ERR-JURASSIC-PANGEA-SNAP-001` | Pangea se partió en una fecha | rift, ruptura y expansión fundidos | objeto/segmento de apertura declarados | DOCUMENTADO |
| `ERR-JURASSIC-ANOXIC-OCEAN-001` | todo el océano jurásico estuvo anóxico | evento/facies convertidos en estado total | proxies locales + balance global | DOCUMENTADO |
| `ERR-JURASSIC-SAUROPOD-OXYGEN-001` | oxígeno alto fabricó saurópodos gigantes | correlación ambiental convertida en causa única | cascada funcional y pruebas cuantitativas | DOCUMENTADO |
| `ERR-JURASSIC-FEATHER-FLIGHT-001` | toda pluma demuestra vuelo | tegumento convertido en conducta | superficie, articulación, potencia y carga | DOCUMENTADO |
| `ERR-JURASSIC-ARCHAEOPTERYX-HALF-001` | `Archaeopteryx` fue mitad reptil/mitad ave | mosaico convertido en escalera | caracteres y nodo filogenético | DOCUMENTADO |
| `ERR-JURASSIC-PYGOSTYLE-MODERN-001` | pigóstilo significa ave moderna | un módulo convertido en paquete/corona | cola, vuelo y nodo separados | DOCUMENTADO |
| `ERR-JURASSIC-AVIALAN-ANCESTORS-001` | fósiles jurásicos forman una fila de ancestros | orden de caracteres convertido en genealogía | ramas, homoplasia y mínimos | DOCUMENTADO |
| `ERR-JURASSIC-MAMMALIAFORM-MOUSE-001` | mamaliaformes fueron ratones modernos | analogía de tamaño convertida en identidad | corona, anatomía y nichos separados | DOCUMENTADO |
| `ERR-JURASSIC-JK-EXTINCTION-001` | la línea J–K marca una extinción mundial instantánea | frontera/calibración convertida en pulso biológico | rangos y sesgos auditados | DOCUMENTADO |
| `ERR-CRETACEOUS-BASE-GOLDEN-SPIKE-001` | `143.1 Ma` ya tiene clavo dorado | edad tabulada convertida en GSSP | estado institucional, sección y calibración separados | DOCUMENTADO |
| `ERR-CRETACEOUS-KPG-CAUSE-001` | la línea de `66 Ma` explica la extinción | frontera convertida en mecanismo causal | horizonte formal y cadena causal auditados por separado | DOCUMENTADO |
| `ERR-CRETACEOUS-FIRST-FLOWER-001` | el primer polen fue la primera flor | mínimo preservado convertido en origen | órgano, afinidad, edad y nodo separados | DOCUMENTADO |
| `ERR-CRETACEOUS-CLOCK-FOSSIL-001` | un reloj encontró una flor jurásica | edad modelada convertida en cuerpo | datos, calibraciones, genes, modelo y fósil separados | DOCUMENTADO |
| `ERR-CRETACEOUS-FLOWER-DOMINANCE-001` | más especies dominaron todos los bosques | riqueza convertida en biomasa/dosel global | polen, hojas, madera, abundancia y facies cruzados | DOCUMENTADO |
| `ERR-CRETACEOUS-ANCESTRAL-FLOWER-001` | la flor ancestral reconstruida fue hallada | estados probables de nodo convertidos en organismo | probabilidades, árbol, modelo y fósiles separados | DOCUMENTADO |
| `ERR-CRETACEOUS-INSECTS-BORN-WITH-FLOWERS-001` | las flores inventaron los insectos polinizadores | cambio de huésped convertido en origen de linajes | filogenia, interacción y tasas separadas | DOCUMENTADO |
| `ERR-CRETACEOUS-AMBER-POLLINATION-001` | todo insecto con polen fecundó flores | contacto/ingesta convertidos en eficacia | verbo probatorio, procedencia y contaminación auditados | DOCUMENTADO |
| `ERR-CRETACEOUS-ICHTHYORNIS-HALF-001` | `Ichthyornis` fue mitad reptil y mitad ave | mosaico convertido en escalera esencialista | módulos anatómicos y nodo descritos por separado | DOCUMENTADO |
| `ERR-CRETACEOUS-BEAK-CROWN-001` | tener pico demuestra Aves corona | un carácter convertido en paquete/nodo | matriz, topología, definición y sensibilidad | DOCUMENTADO |
| `ERR-CRETACEOUS-MAMMAL-MOUSE-001` | todos los mamíferos eran ratones ocultos | tamaño pequeño convertido en identidad moderna | clado, anatomía, talla y nicho explícitos | DOCUMENTADO |
| `ERR-CRETACEOUS-REPENOMAMUS-HUNT-001` | contenido abdominal filma una caza | consumo convertido en conducta | «consumió» separado de captura/carroñeo | DOCUMENTADO |
| `ERR-CRETACEOUS-EUTHERIAN-PLACENTAL-001` | euterio significa placentario moderno | tallo euterio confundido con corona | Eutheria/Placentalia y rasgos separados | DOCUMENTADO |
| `ERR-CRETACEOUS-LAURASIA-WORLD-001` | el registro norteño representa todos los mamíferos | sesgo geográfico convertido en patrón mundial | fósiles gondwánicos y detectabilidad incorporados | DOCUMENTADO |
| `ERR-KPG-66-CAUSE-001` | `66.0 Ma` es la causa de la extinción | calibración convertida en mecanismo | lecho, evento, forzamiento y fósiles separados | DOCUMENTADO |
| `ERR-KPG-IRIDIUM-CRATER-001` | iridio por sí solo identifica Chicxulub | procedencia convertida en ubicación | choque, ejecta, geofísica, edad y núcleo cruzados | DOCUMENTADO |
| `ERR-KPG-CRATER-VISIBLE-001` | Chicxulub es un cráter abierto visible | ilustración convertida en geografía actual | estructura enterrada/parcialmente marina representada | DOCUMENTADO |
| `ERR-KPG-IMPACTOR-VOLATILES-001` | el asteroide aportó todos los gases | composición del proyectil convertida en inventario | objetivo, biomasa y aerosoles separados | DOCUMENTADO |
| `ERR-KPG-LAVA-GAS-001` | más lava significa proporcionalmente más gas | volumen convertido en tasa/emisión | inclusiones, intrusiones, especie y altura requeridas | DOCUMENTADO |
| `ERR-KPG-DECCAN-COINCIDENCE-001` | Deccan coincidió, por tanto causó todo | proximidad convertida en atribución | sincronía, magnitud, selectividad y contrafactual | DOCUMENTADO |
| `ERR-KPG-DECCAN-TRIGGERED-001` | Chicxulub inició Deccan | modulación plausible convertida en origen | actividad previa y cronología explícitas | DOCUMENTADO |
| `ERR-KPG-MODEL-MEASUREMENT-001` | hubo exactamente 15 años de polvo y 15 °C de frío | salida condicionada convertida en observación | inputs, rango y sensibilidad declarados | DOCUMENTADO |
| `ERR-KPG-GLOBAL-FIRE-001` | todo bosque del planeta ardió | potencial/modelo y señales locales globalizados | cobertura, facies y umbrales auditados | DOCUMENTADO |
| `ERR-KPG-ACID-CALCIFIER-001` | todo calcificador murió por acidificación | rasgo compartido convertido en causa universal | pH, luz, energía, hábitat y mineralogía separados | DOCUMENTADO |
| `ERR-KPG-75-PERCENT-001` | desapareció 75 % de cada grupo | promedio mundial transferido a todo denominador | taxón, región, métrica y ventana declarados | DOCUMENTADO |
| `ERR-KPG-SURVIVOR-TRAIT-001` | ser pequeño o terrestre garantizó sobrevivir | asociación de rasgo convertida en regla | distribución, covariables y excepciones conservadas | DOCUMENTADO |
| `ERR-KPG-DINOSAUR-DECLINE-001` | todos los dinosaurios ya agonizaban | curva/modelo regional convertido en censo mundial | roca, provincia y modelos rivales comparados | DOCUMENTADO |
| `ERR-KPG-RECOVERY-DATE-001` | la biosfera se recuperó en una fecha | variables ecológicas colapsadas | presencia, función, riqueza, red y región separadas | DOCUMENTADO |
| `ERR-PALEOGENE-AGE-EVENT-001` | una cifra define y explica cada frontera | edad numérica convertida en lecho y causa | GSSP, calibración y evento separados | DOCUMENTADO |
| `ERR-PALEOGENE-MAMMALS-START-001` | los mamíferos aparecieron tras K–Pg | radiación convertida en origen | Mammalia, supervivencia y radiaciones prefrontera distinguidas | DOCUMENTADO |
| `ERR-PALEOGENE-EUTHERIAN-PLACENTAL-001` | todo euterio es un placentario corona | grupo total confundido con corona | Eutheria y Placentalia definidos por nodo | DOCUMENTADO |
| `ERR-PALEOGENE-PLACENTAL-AVERAGE-001` | promediar relojes da la fecha real de Placentalia | objetos/modelos distintos convertidos en réplicas | nodo, orden, fósil y disparidad separados | DOCUMENTADO |
| `ERR-PALEOGENE-PURGATORIUS-MONKEY-001` | `Purgatorius` fue el primer mono | primate de tallo convertido en corona moderna | plesiadapiforme/Pan-Primates y Euprimates separados | DOCUMENTADO |
| `ERR-PALEOGENE-BASAL-ANCESTOR-001` | basal significa ancestro directo y primitivo | topología convertida en jerarquía/progenitor | rama, carácter y ancestro diferenciados | DOCUMENTADO |
| `ERR-PALEOGENE-PRIMATE-LADDER-001` | fósiles primates forman una escalera hacia humanos | orden temporal convertido en genealogía | árbol, ramas laterales y homoplasia explícitos | DOCUMENTADO |
| `ERR-PALEOGENE-WHALE-PARADE-001` | arqueocetos son una fila terrestre–anfibia–marina | mosaico ramificado convertido en desfile | módulos anatómicos y topologías separados | DOCUMENTADO |
| `ERR-PALEOGENE-HIPPO-ANCESTOR-001` | las ballenas descienden de hipopótamos actuales | grupo hermano convertido en ancestro | parentesco vivo y tallos fósiles distinguidos | DOCUMENTADO |
| `ERR-PALEOGENE-FUNCTION-BEHAVIOR-001` | un hueso muestra exactamente cómo se movía | capacidad biomecánica convertida en conducta | articulación, modelo, rango y huella separados | DOCUMENTADO |
| `ERR-PALEOGENE-PETM-CIE-SOURCE-001` | la CIE identifica una fuente única | señal de mezcla convertida en reservorio | masa, firma, tiempo y geología cruzados | DOCUMENTADO |
| `ERR-PALEOGENE-PETM-MODERN-001` | PETM es una copia de emisiones modernas | magnitud/calor convertidos en igualdad de tasa | masa, tasa, fondo y geografía declarados | DOCUMENTADO |
| `ERR-PALEOGENE-SIFRHIPPUS-GLOBAL-001` | todos los mamíferos se hicieron enanos | serie regional convertida en regla planetaria | taxón, región, masa y mecanismo limitados | DOCUMENTADO |
| `ERR-PALEOGENE-EOT-INSTANT-001` | el hielo antártico apareció a `33.9 Ma` | GSSP convertido en interruptor climático | pasos isotópicos, eustasia y modelo de hielo separados | DOCUMENTADO |
| `ERR-NEOGENE-AGE-EVENT-001` | una cifra del Neógeno es un evento físico | edad calibrada convertida en proceso | horizonte, calibración, señal y causa separados | DOCUMENTADO |
| `ERR-NEOGENE-GRASS-ORIGIN-001` | los pastos aparecieron en el Mioceno | expansión ecológica convertida en origen del clado | presencia, diversidad, abundancia y dominio separados | DOCUMENTADO |
| `ERR-NEOGENE-GRASSLAND-C4-001` | pastizal significa ecosistema C4 | forma de vegetación convertida en vía fotosintética | estructura, cobertura e isótopos declarados | DOCUMENTADO |
| `ERR-NEOGENE-C4-GLOBAL-001` | C4 dominó el planeta a la vez | tendencia amplia convertida en sincronía universal | región, proxy, umbral y edad explícitos | DOCUMENTADO |
| `ERR-NEOGENE-TOOTH-VEGETATION-001` | un diente reconstruye todo el paisaje | dieta/abrasión individual convertida en vegetación regional | escalas y proxies pareados | DOCUMENTADO |
| `ERR-NEOGENE-HYPSODONTY-GRASS-001` | coronas altas prueban consumo de pasto | ecomorfología convertida en causa única | polvo, suelo, dieta y filogenia comparados | DOCUMENTADO |
| `ERR-NEOGENE-CLIMATE-UNIFORM-001` | el Mioceno se enfrió de manera continua | tendencia global convertida en trayectoria local uniforme | fases, cuencas y proxies separados | DOCUMENTADO |
| `ERR-NEOGENE-APE-LADDER-001` | los simios miocenos forman una escalera humana | diversidad ramificada convertida en genealogía | árbol, mosaicos y ramas laterales explícitos | DOCUMENTADO |
| `ERR-NEOGENE-DANUVIUS-HUMAN-001` | `Danuvius` caminaba como un humano | capacidad discutida convertida en conducta moderna | suspensión, postura y carga separadas | DOCUMENTADO |
| `ERR-NEOGENE-ALESI-GIBBON-001` | `Alesi` era un gibón | convergencia craneal convertida en identidad corona | edad ontogenética, matriz y nodo declarados | DOCUMENTADO |
| `ERR-NEOGENE-EURASIA-ORIGIN-001` | un fósil turco prueba el origen europeo humano | hipótesis biogeográfica convertida en demostración | nodo, muestreo y rutas alternativas | DOCUMENTADO |
| `ERR-NEOGENE-PANAMA-DATE-001` | el istmo se cerró en una única fecha | umbrales distintos colapsados | emergencia, restricción, continuidad y profundidad separadas | DOCUMENTADO |
| `ERR-NEOGENE-FIRST-CROSSING-001` | el primer fósil migrante fecha el puente | llegada convertida en infraestructura terrestre | ruta, edad, detectabilidad y paleogeografía | DOCUMENTADO |
| `ERR-NEOGENE-PANAMA-ICE-001` | Panamá causó por sí solo la glaciación norteña | coincidencia y mecanismo posible convertidos en suficiencia | contrafactuales y forzamientos múltiples | DOCUMENTADO |
| `ERR-QUATERNARY-ONE-ICE-AGE-001` | el Cuaternario fue una sola Edad de Hielo | ciclos repetidos colapsados en un episodio | estadios, edades y regiones separados | DOCUMENTADO |
| `ERR-QUATERNARY-ORBIT-DIRECT-001` | cada periodo orbital produce directamente una glaciación | ritmo convertido en respuesta suficiente | insolación, umbrales y retroalimentaciones | DOCUMENTADO |
| `ERR-QUATERNARY-DELTA18O-PURE-001` | `δ18O` mide sólo volumen de hielo | proxy mixto convertido en variable pura | temperatura, fraccionamiento y pila declarados | DOCUMENTADO |
| `ERR-QUATERNARY-MPT-INSTANT-001` | la MPT ocurrió en una fecha | transición gradual convertida en frontera | intervalo, frecuencia y amplitud separados | DOCUMENTADO |
| `ERR-QUATERNARY-100K-ECCENTRICITY-001` | la excentricidad explica por amplitud los ciclos de `100 kyr` | coincidencia de periodo convertida en fuerza | no linealidad y memoria del hielo | DOCUMENTADO |
| `ERR-QUATERNARY-ICE-CO2-CAUSE-001` | una burbuja de CO₂ demuestra causa climática | concentración convertida en dirección causal | edad gas–hielo, fase y modelo separados | DOCUMENTADO |
| `ERR-QUATERNARY-LGM-DATE-001` | el LGM fue un único pico mundial | síntesis regional convertida en instante | intervalo y objeto máximo declarados | DOCUMENTADO |
| `ERR-QUATERNARY-GREENLAND-GLOBAL-001` | un cambio groenlandés ocurrió igual en todo el planeta | archivo regional convertido en clima global | sincronización y signo regional | DOCUMENTADO |
| `ERR-QUATERNARY-YD-GLOBAL-001` | Younger Dryas enfrió y secó todo el mundo | etiqueta norteatlántica universalizada | respuestas hidroclimáticas regionales | DOCUMENTADO |
| `ERR-QUATERNARY-YD-IMPACT-001` | un impacto del Younger Dryas está probado | marcadores discutidos convertidos en hecho | isocronía, exclusividad y replicación | DOCUMENTADO |
| `ERR-QUATERNARY-C14-CALENDAR-001` | una fecha `14C` es un año calendario | edad convencional convertida en calendario | IntCal, reservorio y distribución | DOCUMENTADO |
| `ERR-QUATERNARY-MEGAFAUNA-CUTOFF-001` | megafauna siempre significa el mismo tamaño | etiqueta convertida en umbral universal | corte y sensibilidad de lista explícitos | DOCUMENTADO |
| `ERR-QUATERNARY-LAST-FOSSIL-001` | el último fósil es el último individuo | detección convertida en extinción | Signor–Lipps y muestreo | DOCUMENTADO |
| `ERR-QUATERNARY-OVERKILL-UNIVERSAL-001` | la caza explica todas las extinciones | señal humana global convertida en mecanismo único | taxón, región, clima y vía causal | DOCUMENTADO |
| `ERR-QUATERNARY-CLIMATE-UNIVERSAL-001` | el clima explica todas las extinciones | covariación convertida en motor suficiente | eventos previos, humanos y selectividad | DOCUMENTADO |
| `ERR-QUATERNARY-ANTHROPOCENE-FORMAL-001` | el Antropoceno ya es una época oficial | concepto común convertido en rango ratificado | decisión IUGS/ICS y uso distinguidos | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-CHIMP-ANCESTOR-001` | humanos descienden de chimpancés actuales | pariente vivo colocado en el nodo ancestral | árbol ramificado y polarización con outgroups | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-COMMON-COUPLE-001` | una pareja ancestral se dividió en dos especies | genealogía de individuos convertida en especiación | población ancestral y coalescente | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-ONE-DATE-001` | existe una fecha exacta única de separación | inicio, fin de flujo y TMRCA colapsados | evento y distribución declarados | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-GENE-TREE-SPECIES-001` | cada gen debe mostrar el árbol de especies | genealogía local convertida en topología universal | recombinación e ILS modeladas | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-DIVERGENCE-SPLIT-001` | diferencia genética igual a tiempo de split | diversidad ancestral omitida | coalescencia, tasa y demografía | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-ILS-HYBRID-001` | toda discordancia demuestra hibridación | ILS ignorada como predicción nula | frecuencias, tractos y modelos rivales | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-CLOCK-CONSTANT-001` | una tasa constante sirve para todo sitio y rama | heterogeneidad molecular ignorada | clases de sustitución y relojes relajados | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-MUTATION-SUBSTITUTION-001` | mutación de novo equivale a sustitución fijada | deriva/selección omitidas | transmisión y fijación separadas | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-GENERATION-CONSTANT-001` | una generación dura siempre lo mismo | historia de vida moderna universalizada | edades parentales y sensibilidad por rama | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-FOSSIL-ANCESTOR-001` | el fósil más antiguo es el ancestro común | mínimo y semejanza convertidos en identidad | filogenia y rango fantasma | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-FOSSIL-MAXIMUM-001` | ausencia de fósiles más antiguos fija un máximo | preservación/búsqueda tratadas como completas | modelo de muestreo y máximo justificado | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-SIMILARITY-PERCENT-001` | un porcentaje resume toda semejanza | denominadores y variantes mezclados | métricas por clase y región | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-STRUCTURAL-ADD-001` | `10 %` estructural se suma a SNP como bases distintas | métricas no equivalentes agregadas | ontología de variantes y denominador | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-T2T-FINAL-001` | un genoma T2T representa toda la especie | referencia convertida en pangenoma | múltiples individuos/especies y diversidad | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-CHROMOSOME2-CLOCK-001` | cromosoma 2 fecha o causó la separación | carácter de rama convertido en reloj/mecanismo | sintenia separada de edad y fenotipo | DOCUMENTADO |
| `ERR-HOMININ-SPLIT-HYBRIDIZATION-FACT-001` | la hibridación tardía Homo–Pan es un hecho | preferencia de modelo convertida en observación | selección, ILS, estructura y pruebas predictivas | DOCUMENTADO |
| `ERR-EARLY-HOMININ-OLDEST-ANCESTOR-001` | el candidato más antiguo es nuestro ancestro | edad convertida en genealogía | rango + filogenia + ramas alternativas | DOCUMENTADO |
| `ERR-EARLY-HOMININ-BIPED-TAXON-001` | todo bípedo mioceno es hominino | función convertida en sinapomorfía exclusiva | polarización, convergencia y caracteres múltiples | DOCUMENTADO |
| `ERR-EARLY-HOMININ-SAME-LOCALITY-001` | piezas de una localidad son un individuo | proximidad convertida en articulación | tafonomía, congruencia y asociación graduada | DOCUMENTADO |
| `ERR-EARLY-HOMININ-HYPODIGM-BODY-001` | el hipodigma describe un cuerpo real | varios individuos compuestos como esqueleto | pieza, individuo y taxón separados | DOCUMENTADO |
| `ERR-EARLY-HOMININ-ROCK-BIRTHDAY-001` | la fecha de una toba es la edad exacta del fósil | horizonte convertido en cumpleaños | intervalo estratigráfico y retrabajo | DOCUMENTADO |
| `ERR-EARLY-HOMININ-PRECISION-IDENTITY-001` | un reloj preciso garantiza la asociación | incertidumbres de objeto mezcladas | geocronología y procedencia auditadas aparte | DOCUMENTADO |
| `ERR-EARLY-HOMININ-RECONSTRUCTION-OBSERVED-001` | cráneo/pelvis reconstruidos son formas observadas | modelo tratado como muestra intacta | landmarks, alternativas y sensibilidad | DOCUMENTADO |
| `ERR-EARLY-HOMININ-SAHEL-FINAL-001` | 2026 resolvió definitivamente `Sahelanthropus` | nuevo análisis borra asociación/filogenia | separar apoyo bípedo, taxón y ancestro | DOCUMENTADO |
| `ERR-EARLY-HOMININ-ORRORIN-HOMO-001` | el fémur de `Orrorin` es más humano y lleva a Homo | función/parecido convertidos en línea | muestra miocena, australopitecos y mosaico | DOCUMENTADO |
| `ERR-EARLY-HOMININ-ARDI-LCA-001` | Ardi es el último ancestro Homo–Pan | taxón posterior usado como nodo | rango, rama y ancestro desconocido | DOCUMENTADO |
| `ERR-EARLY-HOMININ-ARDI-MODERN-GAIT-001` | Ardi caminaba como humano moderno | bipedalidad colapsa geometrías distintas | pelvis, hallux, pie y repertorio separados | DOCUMENTADO |
| `ERR-EARLY-HOMININ-CANINE-SOCIAL-001` | caninos pequeños prueban monogamia/provisión | función dental convertida en organización social | alternativas y evidencia conductual independiente | DOCUMENTADO |
| `ERR-EARLY-HOMININ-HABITAT-CAUSE-001` | bosque o sabana causó el bipedalismo | correlación local convertida en selección | mecanismo, comparación y predicción | DOCUMENTADO |
| `ERR-EARLY-HOMININ-SAVANNA-UNIFORM-001` | África miocena fue una sabana uniforme | proxy/localidad universalizados | escala, parches y múltiples proxies | DOCUMENTADO |
| `ERR-EARLY-HOMININ-MOSAIC-LADDER-001` | rasgos mosaico son pasos intermedios de una escalera | modularidad convertida en progreso | árbol ramificado y módulos funcionales | DOCUMENTADO |
| `ERR-EARLY-HOMININ-ONE-LOCOMOTION-001` | “bípedo” excluye trepa o suspensión | repertorio reducido a etiqueta binaria | frecuencia y regiones anatómicas múltiples | DOCUMENTADO |
| `ERR-LUNAR-APOLLO-INDEPENDENT-001` | tratar sitios Apollo como testigos independientes | ejecta local y sin transporte global | cartografía, Th, geoquímica y escalado de Imbrium | DOCUMENTADO |
| `ERR-HOMO-BRAIN-THRESHOLD-001` | un volumen cerebral mínimo define `Homo` | variable continua convertida en frontera natural | combinación de caracteres y sensibilidad taxonómica | DOCUMENTADO |
| `ERR-HOMO-HANDY-MAKER-001` | `H. habilis` fabricó herramientas porque significa “hombre hábil” | etimología convertida en observación de autoría | artefacto, contexto y productor separados | DOCUMENTADO |
| `ERR-HOMO-LINEAR-SUCCESSION-001` | `habilis` se convirtió limpiamente en `erectus` | rangos solapados convertidos en escalera | coexistencia, variación y ramificación | DOCUMENTADO |
| `ERR-HOMO-DMANISI-ONE-SPECIES-001` | Dmanisi prueba que todo `Homo` temprano fue una especie | variación local universalizada | modelos jerárquicos por tiempo y región | DOCUMENTADO |
| `ERR-HOMO-ERECTUS-UNIFORM-001` | `H. erectus` tenía un cuerpo y cráneo uniformes | un esqueleto completo convertido en plantilla | individuos, ontogenia y mosaicos regionales | DOCUMENTADO |
| `ERR-HOMO-ERGASTER-GEOGRAPHY-001` | todo fósil africano es `ergaster` y todo asiático `erectus` | geografía convertida en diagnóstico | caracteres y modelos taxonómicos explícitos | DOCUMENTADO |
| `ERR-HOMO-TOOL-TAXON-001` | una herramienta identifica la especie que la fabricó | industria convertida en firma biológica | asociación, agentes candidatos y autoría graduada | DOCUMENTADO |
| `ERR-HOMO-DISPERSAL-ACHEULEAN-001` | salir de África exigió Achelense | tecnología tardía convertida en requisito | Dmanisi/Shangchen y cronología comparada | DOCUMENTADO |
| `ERR-HOMO-SHANGCHEN-ERECTUS-001` | las herramientas de Shangchen son fósiles de `H. erectus` | presencia hominina convertida en taxón | fósil diagnóstico y artefacto separados | DOCUMENTADO |
| `ERR-HOMO-PROTEIN-DNA-001` | se recuperó ADN de `H. erectus` y probó introgresión | péptidos y modelo convertidos en genoma observado | molécula, posiciones e inferencia demográfica declaradas | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-CATCHALL-001` | todo fósil «intermedio» es `H. heidelbergensis` | grado visual convertido en especie | tipo, diagnóstico e hipodigma explícitos | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-TYPE-SKULL-001` | existe un cráneo tipo de Heidelberg | reconstrucción compuesta convertida en objeto | la mandíbula de Mauer como único holotipo | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-TIME-SPECIES-001` | Chibaniense/Homo medio es una especie | intervalo convertido en clado | cronología y taxonomía separadas | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-MAUER-ANCESTOR-001` | Mauer fue ancestro universal | antigüedad/nombre convertidos en genealogía | afinidad y ancestro directo graduados | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-SIMA-DENISOVAN-001` | Sima es denisovana por su mtDNA | un locus renombra un paleodemo | mtDNA, nuclear y anatomía integrados | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-MTDNA-SPECIES-001` | el árbol mitocondrial es el árbol de especie | una línea materna sustituye al genoma | genealogías por locus y demografía | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-BODO-CANNIBAL-001` | Bodo prueba canibalismo o ritual | marca convertida en motivo | descarnamiento y alternativas separados | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-KABWE-500KA-001` | Kabwe tiene ~500 ka por parecido | edad heredada sin reloj directo | `299 ± 25 ka` con modelo declarado | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-BODOENSIS-ACCEPTED-001` | publicar `bodoensis` lo volvió aceptado | propuesta confundida con consenso | propuesta, réplica y uso posterior separados | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-HARBIN-LONGI-FINAL-001` | `H. longi` cerró la identidad de Harbin | primer nombre tratado como final | evidencia morfológica y molecular revisable | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-ACHEULEAN-TAXON-001` | un bifaz identifica especie | industria convertida en firma biológica | contexto, acción y fabricante separados | DOCUMENTADO |
| `ERR-HOMO-MIDDLE-REGIONAL-LADDER-001` | África–Europa–Asia son estaciones lineales | geografía/edad convertidas en marcha | paleodemos ramificados y solapamientos | DOCUMENTADO |
| `ERR-NEAND-PERCENT-BODY-001` | «somos 2 % neandertales» como cuerpo | tractos convertidos en partes corporales | referencia, denominador y fracción retenida | DOCUMENTADO |
| `ERR-NEAND-PERCENT-ORIGINAL-001` | porcentaje actual = mezcla inicial | selección/recombinación omitidas | valor inicial y retenido separados | DOCUMENTADO |
| `ERR-NEAND-MTDNA-NO-MIX-001` | sin mtDNA no hubo mestizaje | locus materno sustituye al nuclear | genealogías por compartimento | DOCUMENTADO |
| `ERR-NEAND-AFRICA-ZERO-001` | África tiene cero ancestría neandertal | muestra histórica universalizada | retroflujo, estructura y población declarados | DOCUMENTADO |
| `ERR-NEAND-ONE-EVENT-001` | hubo un solo cruce | componente compartido convertido en historia total | episodios, direcciones y escalas separadas | DOCUMENTADO |
| `ERR-DENISOVA11-COMMON-001` | un F1 prueba cruces frecuentes | acontecimiento convertido en prevalencia | denominador/muestreo explícitos | DOCUMENTADO |
| `ERR-DENISOVAN-CAVE-ONLY-001` | denisovanos sólo en Altái | sitio epónimo convertido en rango | Xiahe, Baishiya, Penghu y Harbin integrados | DOCUMENTADO |
| `ERR-DENISOVAN-ASIAN-FOSSIL-001` | todo fósil asiático robusto es denisovano | semejanza convertida en molécula | candidato y asignación separados | DOCUMENTADO |
| `ERR-PROTEIN-GENOME-001` | proteína equivale a genoma | pocas posiciones convertidas en demografía | cobertura y resolución molecular | DOCUMENTADO |
| `ERR-EPAS1-GIFT-001` | denisovanos «regalaron» altura | proceso personificado y comprimido | origen, selección y función separados | DOCUMENTADO |
| `ERR-INTERBREEDING-ONE-SPECIES-001` | flujo fértil obliga a una especie | compatibilidad convertida en nomenclatura | concepto de especie declarado | DOCUMENTADO |
| `ERR-NEAND-LAST-FOSSIL-001` | último fósil = último individuo | detección convertida en extinción exacta | intervalo regional y Signor–Lipps | DOCUMENTADO |
| `ERR-HOMININ-GENOME-STORY-001` | genoma conserva romance/guerra/identidad | parentesco convertido en motivo social | biología y conducta separadas | DOCUMENTADO |
| `ERR-HOMO-OTHER-LADDER-001` | formas mosaico son reliquias o escalones | combinación anatómica ordenada linealmente | taxones locales y ramas abiertas | DOCUMENTADO |
| `ERR-FLORES-12KA-001` | `H. floresiensis` vivió hasta hace 12 ka | asociación estratigráfica antigua conservada tras revisión | cuerpos `~100–60 ka`; artefactos separados | DOCUMENTADO |
| `ERR-FLORES-PATHOLOGY-SPECIES-001` | un diagnóstico de LB1 elimina todo el taxón | individuo tipo sustituye al hipodigma | patologías y repetición entre individuos separadas | DOCUMENTADO |
| `ERR-FLORES-TOOLS-MAKER-001` | toda herramienta de Flores fue hecha por `H. floresiensis` | presencia convertida en autoría | sitio, intervalo, cuerpo y pieza separados | DOCUMENTADO |
| `ERR-FLORES-CLIMATE-CAUSE-001` | la sequía extinguió a `H. floresiensis` | correlación convertida en causa única | presión plausible y última detección graduadas | DOCUMENTADO |
| `ERR-LUZON-KALINGA-ANCESTOR-001` | Kalinga demuestra ancestros de `H. luzonensis` | misma isla convertida en genealogía | presencia y continuidad separadas | DOCUMENTADO |
| `ERR-ISLAND-BOAT-001` | llegar a una isla prueba navegación deliberada | cruce convertido en intención/tecnología | mecanismos de dispersión competidores | DOCUMENTADO |
| `ERR-NALEDI-BRAIN-BEHAVIOR-001` | cerebro pequeño prueba conducta simple o hace extraordinario todo hallazgo | volumen convertido en psicología | anatomía, capacidad y acción separadas | DOCUMENTADO |
| `ERR-NALEDI-DEPOSITION-BURIAL-001` | no hay alternativa simple, por tanto hubo entierro ritual | descarte incompleto convertido en intención | depósito, fosa, cobertura y significado separados | DOCUMENTADO |
| `ERR-NALEDI-MARKS-AUTHOR-001` | marcas cercanas fueron grabadas por `H. naledi` | proximidad convertida en fecha y autor | artificialidad, cronología y agente separados | DOCUMENTADO |
| `ERR-NO-DNA-NO-CONTACT-OTHER-001` | no detectar ADN insular moderno prueba que nunca hubo contacto | ausencia retenida convertida en historia total | poder, deriva, extinción y muestra declarados | DOCUMENTADO |
| `ERR-SAPIENS-OLDEST-BIRTHPLACE-001` | fósil más antiguo = lugar de nacimiento | primera detección convertida en evento de especie | muestreo, fecha y geografía separados | DOCUMENTADO |
| `ERR-SAPIENS-PANAFRICA-PANMIXIA-001` | pan-africano = población homogénea | distribución convertida en apareamiento | flujo, estructura y panmixia modelados | DOCUMENTADO |
| `ERR-SAPIENS-EVE-WOMAN-001` | Eva mitocondrial fue la primera/única mujer | TMRCA de locus convertida en población | herencia, deriva y loci separados | DOCUMENTADO |
| `ERR-SAPIENS-TMRCA-SPECIES-001` | coalescencia fecha especie | tiempo génico convertido en separación/especiación | escalas y flujo posterior declarados | DOCUMENTADO |
| `ERR-SAPIENS-MODEL-POPULATIONS-001` | dos componentes modelados = dos especies | variables latentes reificadas | modelo, población y taxón separados | DOCUMENTADO |
| `ERR-SAPIENS-MODERN-SAMPLE-GEOGRAPHY-001` | muestra actual localiza tallo ancestral | geografía reciente proyectada al pasado | migración, mezcla y espacio explícitos | DOCUMENTADO |
| `ERR-SAPIENS-MSA-MAKER-001` | MSA identifica a `H. sapiens` | tecnología convertida en taxón | asociación y convergencia evaluadas | DOCUMENTADO |
| `ERR-SAPIENS-OBSIDIAN-GENEFLOW-001` | obsidiana distante prueba mestizaje | transporte convertido en apareamiento | movilidad, intercambio y genes separados | DOCUMENTADO |
| `ERR-SAPIENS-HOLOCENE-CONTINUITY-001` | continuidad de 9 ka = aislamiento de 300 ka | extrapolación temporal sin archivo | intervalo observado limitado | DOCUMENTADO |
| `ERR-OOA-SITE-EQUALS-EXIT-001` | un sitio equivale a una salida | unidad arqueológica convertida en movimiento | contar por escala y mantener total abierto | DOCUMENTADO |
| `ERR-OOA-EARLIEST-ANCESTOR-001` | fósil más antiguo = fundador | antigüedad convertida en genealogía | separar presencia y continuidad | DOCUMENTADO |
| `ERR-OOA-SINGLE-ARROW-001` | expansión mayor = caravana única | pulso modelado convertido en viaje | distinguir cruce, dispersión y expansión | DOCUMENTADO |
| `ERR-OOA-NO-SIGNAL-NO-DESCENT-001` | no detectable = sin descendientes | detector tratado como censo histórico | declarar umbral, muestra y referencia | DOCUMENTADO |
| `ERR-OOA-SAHUL-DATES-DEPARTURE-001` | fecha de Sahul = salida africana | llegada y partida confundidas | mantener relojes geográficos separados | DOCUMENTADO |
| `ERR-OOA-CLIMATE-CAUSE-001` | corredor habitable = migración causada | idoneidad convertida en presencia/motor | usar clima como restricción | DOCUMENTADO |
| `ERR-OOA-SUCCESS-SUPERIORITY-001` | persistencia = superioridad | métrica demográfica convertida en valor | nombrar expansión o aporte | DOCUMENTADO |
| `ERR-OOA-ROUTE-FROM-AFFINITY-001` | afinidad genética dibuja ruta | grafo sin coordenadas convertido en mapa | combinar cronología y sitios | DOCUMENTADO |
| `ERR-ASIA-SAHUL-SITE-ROUTE-001` | un sitio temprano dibuja la ruta | punto local convertido en itinerario | usar sitios para restringir, no trazar | DOCUMENTADO |
| `ERR-SULAWESI-CALCITE-PIGMENT-001` | U-series fecha directamente el pigmento/autor | recubrimiento convertido en motivo y taxón | declarar dirección del mínimo | DOCUMENTADO |
| `ERR-SAHUL-CROSSING-BOAT-001` | cruce necesario prueba canoa o vela | capacidad convertida en tecnología concreta | separar barrera, desempeño y vehículo | DOCUMENTADO |
| `ERR-SAHUL-MODEL-CENSUS-001` | simulación de fundadores es un censo | salida paramétrica convertida en observación | declarar priors y sensibilidad | DOCUMENTADO |
| `ERR-SAHUL-SPLIT-LANDFALL-001` | divergencia papú–australiana fecha llegada | split modelado convertido en desembarco | mantener relojes separados | DOCUMENTADO |
| `ERR-SAHUL-GENETIC-CULTURE-001` | estructura genética prueba cultura inmutable | continuidad biológica proyectada a identidad | exigir archivos culturales propios | DOCUMENTADO |
| `ERR-IMPACT-MOON-EARTH-001` | convertir cronología lunar en esterilización terrestre | escala constante de tasa y efecto | dinámica, hidrocodes, atmósfera/océano y archivo terrestre | DOCUMENTADO |
| `ERR-LUNAR-ABSENCE-001` | “sin fundido antiguo” = “sin impacto antiguo” | supervivencia uniforme hacia atrás | sesgo de preservación y evidencia positiva `4.22–4.33 Ga` | DOCUMENTADO |

## ERR-COSMOS-STATIC-001 — Una preferencia convertida en condición

Las primeras aplicaciones cosmológicas de relatividad general estuvieron influidas por la expectativa de un universo estático. Introducir una constante para mantenerlo no fue por sí mismo un error ilegítimo: era una hipótesis calculable. El problema fue que la estabilidad y el estado estático no procedían de una medición global suficiente.

Las soluciones dinámicas y la relación observacional distancia–corrimiento cambiaron el balance. La constante cosmológica reapareció después con otro papel: componente capaz de describir aceleración, no mero soporte de un cosmos inmóvil.

### Lección

El mismo término matemático puede participar en modelos distintos. La historia popular de “el mayor error” simplifica: lo instructivo es identificar qué condición fue impuesta y qué datos la volvieron innecesaria.

## ERR-COSMOS-HUBBLE-SCALE-001 — Patrón correcto, escala incorrecta

Hubble encontró un patrón útil, pero confundió poblaciones de estrellas y heredó una escala de distancias corta. Una pendiente demasiado alta implicaba un tiempo `1/H0` menor que edades estelares aceptadas. Además, convertir ese inverso directamente en edad ignoraba que la expansión cambia.

La corrección combinó recalibración de la escalera, mejor física estelar y modelos con una historia `H(z)` que incluye aceleración. No consistió en “ajustar la edad para salvar la teoría”, sino en medir de nuevo peldaños y contrastar observables adicionales.

### Lección

Un descubrimiento cualitativo puede sobrevivir mientras cambia mucho su cifra. Deben versionarse relación, pendiente, definición y modelo por separado.

## ERR-COSMOS-CMB-NOISE-001 — La anomalía debía pasar por el aparato

El exceso de antena de Penzias y Wilson fue examinado como posible contribución del receptor, la atmósfera, la Galaxia o el entorno. Esa cautela no fue un tropiezo vergonzoso, sino el mecanismo correcto: una señal cosmológica no recibe privilegio sobre explicaciones locales.

La hipótesis cósmica se fortaleció con otras frecuencias, el espectro de cuerpo negro de FIRAS y anisotropías correlacionadas en mapas multibanda.

### Lección

Descartar explicaciones instrumentales es parte de la evidencia positiva. Una anomalía persistente no adquiere origen remoto hasta superar pruebas locales y hacer predicciones nuevas.

## ERR-HADEAN-ZIRCON-ROCK-001 — Un cristal convertido en roca

El zircon W74/2-36 conserva un dominio de `4404 ± 8 Ma`, pero hoy forma parte de un metasedimento mucho más joven. La roca ígnea donde cristalizó fue erosionada y no está disponible como afloramiento.

### Corrección

Nombrar siempre objeto y evento: “un dominio del zircon cristalizó”. No escribir “la roca de Jack Hills se formó hace 4.4 Ga” ni dibujar el grano como un continente preservado.

## ERR-HADEAN-CONTINENT-001 — De magma félsico a continente moderno

Un zircon puede exigir un magma evolucionado; Hf puede registrar retrabajo. Ninguna de esas señales mide área, espesor, elevación, estabilidad o movimiento de una placa.

### Corrección

Separar cuatro niveles: composición del fundido, cuerpo cortical, tierra emergida y placa duradera. La confianza debe disminuir al subir de escala si no aparecen datos nuevos.

## ERR-HADEAN-MODELAGE-001 — Una intersección de reservorios tratada como cumpleaños

Lu–Hf y Sm–Nd pueden fechar cristalización mediante una isócrona bien justificada o estimar cuándo una fuente se separó/retrabajó bajo un modelo. Herencia, mezcla y reseteo pueden conservar memoria más antigua que la roca.

### Corrección

Declarar si la cifra es edad de dominio mineral, pendiente isócrona, extracción modelo, metamorfismo o límite por corte. La precisión numérica no borra esa semántica.

## ERR-HADEAN-ZIRCON-OCEAN-001 — Un proxy convertido en agua

La microsonda mide `18O/16O` en zircon. El valor se traduce a magma mediante fraccionamiento y después a una roca fuente alterada mediante petrología. El agua aparece como explicación de una etapa previa; no está observada como gota, inclusión oceánica o cuerpo cartografiado.

### Corrección

Escribir “material fuente alterado por agua líquida somera” antes de evaluar “hidrosfera”. Reservar “océano global” para evidencia de volumen y conexión que el zircon no aporta.

## ERR-HADEAN-WATER-DATE-001 — El cristal no fechó la primera lluvia

U–Pb fecha la cristalización del dominio. Para que el magma herede oxígeno supracrustal, la roca tuvo que intercambiar con agua, ser enterrada y fundirse antes. La separación entre esos pasos no está medida.

### Corrección

Usar la edad del zircon como límite posterior: “la interacción ocurrió antes de ~4.325 Ga”. No llamarla fecha de nacimiento del océano.

## ERR-HADEAN-COOL-CLIMATE-001 — “Fría” se volvió pronóstico

La expresión *cool early Earth* contrastó corteza y agua líquida con una superficie continuamente fundida. Fue simplificada como planeta templado, estable y habitable.

### Corrección

Declarar la referencia: suficientemente fría en algún lugar/intervalo para agua líquida y alteración. Temperatura media, atmósfera, impactos, duración y habitabilidad necesitan proxies independientes.

## ERR-HADEAN-OXYGEN-O2-001 — El nombre del elemento cambió la pregunta

`δ18O` compara `18O/16O` en el oxígeno estructural de un mineral. No mide cuánto oxígeno molecular había en el aire ni si la atmósfera era oxidante. Una roca anóxica puede conservar una firma de isótopos estables de agua–roca.

### Corrección

Separar tres expedientes: isótopos estables para fuente/agua, fugacidad o valencias para redox del magma y proxies geoquímicos para `O₂` atmosférico. La atmósfera se audita en la Investigación 011.

## ERR-HADEAN-FO2-O2-001 — “Oxidado” saltó del magma al cielo

`fO₂` compara potencial químico y equilibrios de valencia en un fundido. Cerca de FMQ favorece gases distintos que cerca de IW, pero no significa que existiera O₂ molecular acumulado. Agua y CO₂ pueden dominar sin una atmósfera oxigenada.

### Corrección

Escribir siempre la cadena `zircon → fundido → gas posible → aire procesado` y asignar un proxy distinto al O₂ atmosférico, como S-MIF para la época disponible.

## ERR-HADEAN-MODEL-AIR-001 — Un porcentaje calculado se volvió muestra

CO `>97 %`, `40–220 bar` o `pH₂ <20 bar` son resultados bajo historias diferentes de inventario, redox, partición y escape. Su precisión numérica no transforma el escenario en aire medido.

### Corrección

Anotar modelo, entradas, variable de salida y sensibilidad. Comparar qué supuesto cambia la respuesta antes de escoger una mezcla narrativa.

## ERR-HADEAN-ARCHEAN-AIR-001 — El barómetro viajó en el tiempo

Una inclusión de 3.3 Ga y una vesícula de 2.7 Ga son archivos atmosféricos valiosos. No pesan ni muestrean automáticamente el Hadeano, separado por impactos, desgasificación y escape.

### Corrección

Usarlos como límites posteriores y pruebas de método; no como condiciones iniciales sin un modelo explícito de continuidad.

## ERR-HADEAN-ONE-ATMOSPHERE-001 — “Secundaria” sonó a definitiva

La etiqueta oculta que un gran impacto puede retirar aire, fundir manto y generar otra desgasificación. Condensación, océano, corteza y escape vuelven a cambiar el reservorio.

### Corrección

Hablar de estados o episodios atmosféricos y separar masa, composición y tiempo. Una reconstrucción debe sobrevivir a reinicios parciales.

## ERR-EARTH-HFW-STOPWATCH-001 — Una razón no imprime un final

Hf–W registra segregación mientras `182Hf` decae. Traducir una razón a tiempo requiere cuánto metal equilibró, con qué silicato y cómo creció la masa. El supuesto de equilibrio total puede producir una cifra precisa pero ocultar una degeneración física.

La corrección de `SRC-RUDGE-2010` no anuló el reloj: hizo explícito que también restringe mezcla. Desde entonces, una edad Hf–W debe declarar `M(t)` y equilibrio.

### Lección

Cuando un reloj fecha un proceso continuo, la precisión de la razón no es la precisión de la historia.

## ERR-EARTH-NBODY-REPLAY-001 — El video más convincente no es el pasado

Una ejecución N-cuerpos produce trayectorias detalladas y visualmente persuasivas. Esa resolución puede ocultar que embriones, disco, gigantes y regla de choque fueron elegidos. Otras semillas generan otra genealogía.

La corrección es publicar ensambles, criterios de análogo, fracción de éxitos y fallos en Marte, cinturón, órbitas, tiempos y composición.

### Lección

Detalle computacional no equivale a identificación histórica; una simulación prueba consecuencias de supuestos.

## ERR-EARTH-PERFECT-MERGE-001 — El operador de suma era una aproximación

Reemplazar dos cuerpos por uno permitió integrar muchos impactos, pero convirtió toda colisión en crecimiento monotónico. Hidrocódigos mostraron *hit-and-run*, acreción parcial, erosión y disrupción (`SRC-ASPHAUG-2006`, `SRC-LEINHARDT-STEWART-2012`).

Incluir fragmentos prolonga la cola y puede separar metal de silicato, aunque parte del material reacrezca (`SRC-CHAMBERS-2013`).

### Lección

Una simplificación numérica debe conservar la etiqueta de simplificación incluso cuando se vuelve estándar.

## ERR-EARTH-MOON-END-001 — El último gran choque no apagó el cielo

El impacto lunar pudo ser el último choque entre embriones grandes y aun así dejar una población de planetesimales y fragmentos. HSE, Ru y W registran material y mezcla posteriores.

La corrección separa: 90 % de masa, último gigante, fin de equilibrio núcleo–manto y fin de acreción tardía.

### Lección

La importancia de un evento no lo convierte en frontera universal para todos los procesos.

## ERR-EARTH-METEORITE-RECIPE-001 — Parentesco no es identidad

La Tierra es isotópicamente semejante al dominio no carbonáceo y a condritas de enstatita en muchos trazadores. Pero núcleo, manto, volátiles y fraccionamiento nebular separan composición isotópica de receta mineralógica.

La corrección usa meteoritos como muestras de reservorios y exige balance multielemental, no una coincidencia nominal.

### Lección

Un análogo material puede identificar procedencia sin ser el ingrediente completo que se consumió.

## ERR-EARTH-LATEVENEER-WATER-001 — Una fuente posible se volvió exclusiva

La premisa “interior seco” llevó a asignar toda el agua a cometas o condritas carbonáceas tardías. `SRC-PIANI-2020` mostró H suficiente en material EC-like para una contribución interior sustancial.

Eso no invierte el exclusivismo: tampoco prueba que toda el agua fuera interior. La corrección conserva mezclas, momentos y pérdidas.

### Lección

Demostrar capacidad de una fuente elimina una imposibilidad; no mide automáticamente su cuota histórica.

## ERR-EARTH-CORE-SHADOW-001 — Una sombra no es silencio

La zona de sombra clásica describe geometrías en las que las llegadas directas de ciertas fases P disminuyen o desaparecen por refracción fuerte en la frontera núcleo–manto. No es una región terrestre donde jamás llegue energía sísmica: existen fases difractadas, reflejadas, convertidas y ondas que recorren otros caminos.

### Lección

Una ausencia definida por fase, distancia y banda no debe convertirse en ausencia universal del fenómeno.

## ERR-EARTH-CORE-SWAVE-001 — La letra inicial no conserva el modo

El líquido no soporta propagación de cizalla estática y los modelos asignan `Vs=0` al núcleo externo. Aun así, una fase SKS entra como S, viaja como P en el líquido (`K`) y vuelve a salir como S. Decir “las ondas S nunca cruzan el núcleo” borra la conversión que hace útil a la propia observación.

### Lección

Nombrar cada tramo de una fase evita confundir el modo físico con la energía completa de la señal.

## ERR-EARTH-CORE-CHEMISTRY-001 — Una velocidad no es un espectro químico

Los tiempos de viaje y modos normales restringen velocidades, densidad y discontinuidades. Fe, Ni y los elementos ligeros se infieren al combinar esos perfiles con abundancias, partición metal–silicato y física mineral a alta presión. Ningún sismograma aislado contiene etiquetas elementales.

### Lección

Cuando varias composiciones producen propiedades elásticas parecidas, la química requiere evidencia independiente.

## ERR-EARTH-CORE-WEIGHT-001 — “Lo pesado se hunde” omite el mecanismo

La gravedad favorece configuraciones de menor energía, pero la segregación exigió fusión, conectividad o gotas de metal, contraste de densidad y afinidades químicas dependientes de presión, temperatura y fugacidad de oxígeno. Algunos elementos pesados permanecen en el silicato; otros más ligeros entran en el metal.

### Lección

La masa atómica no sustituye a la fase, la densidad del material ni al coeficiente de partición.

## ERR-EARTH-CORE-METEORITE-001 — Un análogo no cayó desde nuestro centro

Los meteoritos de hierro son fragmentos de núcleos de pequeños cuerpos diferenciados. Informan sobre segregación metálica y composiciones planetarias posibles, pero no atravesaron el manto terrestre ni muestrean directamente el núcleo de la Tierra.

### Lección

La analogía comparada ensancha la evidencia; una genealogía inventada la debilita.

## ERR-EARTH-CORE-ONEAGE-001 — Dos transiciones bajo una palabra

El núcleo metálico se segregó mientras la Tierra acrecía. El núcleo interno sólido nucleó después de una larga evolución térmica del núcleo externo. Hf–W restringe el primer proceso; paleomagnetismo y modelos térmicos intentan fechar el segundo.

### Lección

Antes de publicar una edad, hay que nombrar el evento físico fechado.

## ERR-MOON-PACIFIC-001 — Una cuenca joven no es una cicatriz hadeana

La corteza oceánica del Pacífico se crea y recicla por tectónica de placas y es enormemente posterior al origen lunar. La geometría tampoco satisface una fisión simple. **Lección:** una semejanza cartográfica no reemplaza edad, volumen y dinámica.

## ERR-MOON-THEIA-DETECTED-001 — El nombre volvió tangible una variable

Theia nombra al impactor hipotético; no existe una muestra identificada ni una órbita recuperada. **Lección:** nombrar una entidad modelada ayuda a discutirla, pero no eleva su biografía a dato.

## ERR-MOON-IDENTICAL-001 — Parecido extremo no es identidad universal

O y Ti son muy semejantes; V, W, K y algunas litologías contienen diferencias o historias posteriores. **Lección:** la precisión y el sistema deben acompañar siempre a “igual”.

## ERR-MOON-SIMULATION-PHOTO-001 — Un impacto posible no es el impacto

Una ejecución fija masa, giro, ángulo, EOS y resolución. Otra entrada produce otra Luna o ninguna. **Lección:** la simulación prueba consecuencias y viabilidad; la identidad exige predicciones exclusivas.

## ERR-MOON-DRY-001 — Depletado no significa vacío

La Luna tiene menos de muchos volátiles que la Tierra silicatada y aun conserva agua en algunos reservorios. **Lección:** abundancia relativa, distribución y ausencia son afirmaciones distintas.

## ERR-MOON-IMPACT-TIME-001 — El mineral no vio el contacto

Zircon fecha cristalización/cierre; Hf–W fecha separación bajo un modelo; HSE–dinámica fecha un último gigante condicionado. **Lección:** antes de comparar edades hay que comparar eventos.

## ERR-GEO-KELVIN-001 — El reloj térmico incompleto

### Qué se afirmaba

Modelos del siglo XIX estimaron una Tierra de decenas de millones de años a partir del enfriamiento desde un estado fundido y del gradiente geotérmico.

### Por qué parecía razonable

Aplicaba conducción térmica cuantitativa a observaciones reales. Era una mejora frente a cronologías sin mecanismo físico y producía predicciones calculables.

### Qué faltaba

- calentamiento radiogénico aún no descubierto;
- convección del manto;
- condiciones iniciales y propiedades térmicas inciertas;
- comprensión incompleta de la estructura interna.

### Cómo se corrigió

El descubrimiento de radioactividad eliminó el supuesto de enfriamiento pasivo. Los relojes isotópicos con dos cadenas padre–hija y muestras extraterrestres proporcionaron una cronología que no depende del balance térmico global.

### Lección

Una ecuación correcta no salva un modelo con física omitida. La pregunta no es solo si el cálculo está bien, sino si el sistema incluye las fuentes, transportes y condiciones relevantes.

## ERR-GEO-LEAD-001 — El laboratorio era parte de la muestra

### Problema

En análisis de Pb a concentraciones extremadamente bajas, polvo, reactivos, aire y superficies podían aportar más Pb que la muestra. El espectrómetro podía ser preciso y aun producir una razón inexacta.

### Corrección

Química de blancos, reactivos purificados, materiales y espacios ultralimpios, replicación y trazabilidad de contaminación. El caso muestra que “instrumental” no significa “automáticamente objetivo”.

### Lección

El blanco debe expresarse respecto de la señal; una cifra de precisión sin presupuesto de contaminación no basta.

## ERR-GEO-URATIO-001 — Uranio uniforme por conveniencia

Durante años muchas edades Pb–Pb usaron una razón terrestre estándar `238U/235U`. Mediciones de alta precisión mostraron variación natural suficiente para importar a escalas de Ma. Trabajos como Connelly et al. midieron o corrigieron la razón de U del material, reduciendo un sesgo sistemático.

### Lección

Una constante de entrada ampliamente compartida puede crear concordancia artificial entre laboratorios. Medirla independientemente es más fuerte que repetirla.

## ERR-HADEAN-LHB-001 — De hipótesis fértil a hecho simplificado

La agrupación de edades de muestras Apollo alrededor de 3.9 Ga generó el modelo de un “cataclismo terminal”. El modelo impulsó predicciones y trabajo productivo, pero su presentación como episodio global único ignoró sesgos de procedencia, reinicio y preservación. Hoy se comparan picos, colas y modelos híbridos.

### Estado epistemológico

No se marca como error total: el bombardeo temprano intenso está bien respaldado. El error comunicativo/metodológico fue confundir una interpretación particular de su historia temporal con la observación misma. La Investigación 012 documenta evidencia anterior a `4.0 Ga`, sesgo de Imbrium y no unicidad de las edades de meseta.

## ERR-LIFE-OLDEST-001 — El récord no es una categoría científica estable

Una candidata puede ser la más antigua y la menos discriminatoria. Titulares y resúmenes tienden a ordenar por fecha, mientras la evaluación científica debe usar dos ejes: antigüedad y fuerza. Strelley, Isua, Nuvvuagittuq, Saglek y el zircon de Jack Hills no compiten bajo la misma calidad de contexto.

**Corrección:** publicar una escalera de confianza y no una medalla única.

## ERR-LIFE-HOST-AGE-001 — La edad puede pertenecer al objeto equivocado

La edad de un zircon fecha su cristalización; una intrusión fecha el corte; una edad modelo fecha separación de reservorio. Ninguna se transfiere automáticamente a carbono, jaspe o filamento.

**Corrección:** nombrar por separado huésped, protolito, horizonte, inclusión y evento metamórfico.

## ERR-LIFE-MORPH-001 — Parecido sin génesis

Cristales, deformación y jardines químicos producen esferas, tubos, filamentos y conos. La forma 2-D pierde información topológica y puede transformar un borde mineral en una célula aparente.

**Corrección:** reconstrucción 3-D, población, distribución ambiental, pared/lumen y degradación tafonómica.

## ERR-LIFE-ISOTOPE-001 — Una cifra objetiva con causa no única

La vida fracciona carbono, pero reacciones Fischer–Tropsch, reducción de carbonato y precipitación desde fluidos C–H–O también producen grafito ligero. La precisión del valor `δ13C` no resuelve la especificidad causal.

**Corrección:** medir *in situ*, relacionar con mineral y capas, comparar poblaciones y modelar rutas abióticas.

## ERR-LIFE-ORIGIN-DATE-001 — El fósil es un límite mínimo

La primera huella preservada tuvo un productor ya existente. Entre el origen y esa huella pudo transcurrir un intervalo que el reciclaje geológico borró.

**Corrección:** escribir “vida por al menos X” y reservar “origen” para una pregunta todavía abierta.

## ERR-LIFE-INDEP-001 — Tres instrumentos, un mismo fallo

Raman, SIMS y TEM sobre el mismo objeto añaden resolución, pero pueden compartir contaminación, contexto secundario o una clasificación morfológica errónea.

**Corrección:** contar independencia material, espacial, teórica y de escala, no sólo técnicas.

## ERR-LIFE-TAXONOMY-001 — De biosignatura a metabolismo sin escala intermedia

Una pared carbonosa puede apoyar célula; un fraccionamiento de S puede apoyar procesamiento químico. Asignar reducción de sulfato, fotosíntesis o un taxón exige excluir rutas que dejan señales semejantes y demostrar asociación genética entre productos.

**Corrección:** separar “biológico”, “tipo de metabolismo” y “linaje” como claims con confianza propia.

## ERR-LUNAR-AGE-EVENT-001 — Una edad no cuenta un proyectil

Una edad puede registrar cristalización de fundido, cierre durante enfriamiento o reinicio parcial por un choque posterior. Varias alícuotas pueden pertenecer al mismo evento y una roca puede conservar más de uno. Antes de contar impactos hay que demostrar textura, sistema y procedencia.

### Lección

La precisión del reloj no sustituye la identificación del evento fechado.

## ERR-LUNAR-HIST-FLUX-001 — El histograma no es el cielo

La altura de una barra depende de producción de fundido, supervivencia, transporte, selección y criterio de edad. Modelos de difusión muestran que una cola monótona puede producir un pico aparente de `40Ar/39Ar`.

### Lección

Toda inversión histórica necesita una función de respuesta; sin ella se grafica la colección, no el proceso.

## ERR-LUNAR-APOLLO-INDEPENDENT-001 — Seis sitios no son seis cuencas

Imbrium cubrió Fra Mauro y pudo depositar ejecta grueso en todos los sitios Apollo de tierras altas. Una fecha repetida lejos del borde de Imbrium puede seguir siendo una copia del mismo acontecimiento.

### Lección

La independencia pertenece a la procedencia del objeto, no a la distancia entre cajones de muestra.

## ERR-IMPACT-MOON-EARTH-001 — De cráter lunar a Tierra esterilizada

La Tierra intercepta más cuerpos, pero atmósfera, océano, gravedad, velocidad y corteza modifican el efecto. Además, el registro terrestre se recicla. Multiplicar una tasa lunar por un factor geométrico no produce una curva de habitabilidad.

### Lección

Separar frecuencia de encuentro, energía depositada, extensión ambiental y supervivencia biológica.

## ERR-LUNAR-ABSENCE-001 — La ausencia que el propio proceso fabrica

Los impactos posteriores borran de manera preferencial fundidos y cuencas anteriores. Por ello, la falta de edades >4.0 Ga es esperable bajo más de una historia. La roca 67955 y los candidatos SPA demuestran que al menos parte del archivo antiguo sobrevivió.

### Lección

Una ausencia sólo pesa como evidencia después de estimar la probabilidad de producción, supervivencia y detección.

## ERR-ELEMENT-SPECTRA-ABUNDANCE-001 — Una línea no es una balanza

La primera lectura de las clases espectrales podía atribuir diferencias de intensidad a diferencias directas de composición. La ionización y excitación mostraron que el mismo inventario produce espectros muy distintos al cambiar temperatura y presión electrónica.

Cecilia Payne convirtió esa dependencia en herramienta y obtuvo una abundancia enorme de H/He, conclusión inicialmente atenuada por su incompatibilidad con la expectativa dominante. Los análisis actuales añaden atmósferas 3D, no-LTE, opacidades y probabilidades de transición.

### Lección

Identificar una especie y estimar su cantidad son problemas distintos. La primera tarea puede ser A mientras la segunda conserva incertidumbre de modelo correlacionada.

## ERR-ELEMENT-IRON-END-001 — La escalera que oculta la red

“Las estrellas fusionan elementos hasta hierro” funciona como frase escolar, pero se vuelve incorrecta si se lee literalmente. La quema avanzada produce distribuciones del grupo Fe/Ni; la energía de enlace no tiene una frontera idéntica a una casilla de la tabla; y muchos núcleos mayores crecen por capturas neutrónicas, decaimientos y ambientes explosivos.

### Lección

Una narración lineal puede conservar una tendencia y destruir el mecanismo. Deben separarse síntesis de núcleos, generación neta de energía, estabilidad y sitio de eyección.

## ERR-ELEMENT-SUPERNOVA-ALL-001 — Un sitio real convertido en explicación total

Las supernovas fabrican y expulsan núcleos; SN 1987A lo demuestra directamente para material radiactivo. El error aparece al extender esa evidencia a “todo lo pesado”. Tecnecio en estrellas AGB, granos presolares y GW170817 demuestran rutas adicionales.

### Lección

La existencia de un mecanismo no demuestra exclusividad ni dominancia. Esas frases exigen tasas, rendimientos y evolución química, no solo un caso espectacular.

## ERR-ELEMENT-SOURCE-EXCLUSIVE-001 — La tabla periódica demasiado coloreada

Infografías populares asignan una fuente a cada elemento. La simplificación omite que una casilla contiene varios isótopos, que un isótopo puede recibir contribuciones de más de un canal y que decaimiento, eyección y mezcla son etapas distintas.

### Corrección

Usar matrices de contribución con leyenda explícita, hablar por isótopos cuando la evidencia lo permita y reservar porcentajes para modelos de evolución química con incertidumbre publicada.

## ERR-STARS-HR-MOVIE-001 — Una población convertida en película

### El atajo

Presentar el diagrama H–R como si una estrella se desplazara por una secuencia dibujada que ya está observada de principio a fin.

### Qué se observa realmente

Cada punto representa una estrella o sistema medido hoy. Las regiones pobladas y su estructura son observaciones. Un track temporal es una solución modelada; una isócrona reúne masas distintas a una misma edad calculada.

### Cómo se corrige

Cúmulos reducen edad/composición, binarias miden masa/radio, la asterosismología separa interiores y los remanentes prueban estados finales. La trayectoria gana soporte cuando un mismo modelo predice todas esas relaciones.

### Lección

Una secuencia espacial en un gráfico no es automáticamente una secuencia temporal. El tiempo puede reconstruirse comparando poblaciones, pero el puente debe quedar visible.

## ERR-STARS-PARALLAX-INVERSE-001 — Una identidad geométrica usada como estimador universal

Para una paralaje exacta y positiva, `d(pc)=1/ϖ(arcsec)`. En un catálogo real, `ϖ` tiene incertidumbre, covarianza, selección y un punto cero. Cuando el error es grande, invertir el valor observado produce una distribución asimétrica y sesgada; una paralaje negativa puede ser una medición estadísticamente válida, no una “distancia negativa”.

Gaia EDR3 mostró además que el punto cero cambia con magnitud, color y posición.

### Corrección

Trabajar en espacio de paralaje con una verosimilitud, declarar el prior y la función de selección, propagar el punto cero y validar contra cuásares, cúmulos o binarias según el caso.

### Lección

Una ecuación física puede ser exacta y su uso estadístico ingenuo ser incorrecto.

## ERR-STARS-ONE-LIFECYCLE-001 — El diagrama que asigna destino

El ciclo escolar “nube → estrella → gigante → nebulosa/supernova → remanente” mezcla rutas que ninguna estrella recorre todas. También convierte umbrales aproximados de masa en fronteras universales.

### Qué omite

- composición y metalicidad;
- rotación y mezcla;
- pérdida de masa;
- interacción, despojo o fusión binaria;
- mecanismo de explosión y fallback.

### Corrección

Usar grafos ramificados, declarar modificadores y tratar la relación masa inicial–remanente como probabilística. Los tracks aislados permanecen como controles, no como censo completo.

## ERR-STARS-PLANETARY-NEBULA-001 — Un nombre histórico convertido en parentesco

“Nebulosa planetaria” describe la apariencia redondeada que algunos objetos tenían en telescopios antiguos. No son planetas ni material expulsado por planetas. Son envolturas ionizadas alrededor de estrellas evolucionadas, durante una fase breve antes de que el remanente se enfríe como enana blanca.

### Lección

Las etiquetas científicas conservan fósiles históricos. Un nombre puede ser estable y su lectura literal, falsa.

## ERR-STARS-PULSAR-AUTHORSHIP-001 — El descubrimiento sin trabajo material

La narración “Hewish descubrió los púlsares” puede derivarse del primer autor y del premio Nobel, pero borra que Jocelyn Bell Burnell ayudó a construir el instrumento, operó el archivo y reconoció la señal anómala entre largos registros. El artículo de 1968 tuvo cinco autores; la interpretación rotacional se desarrolló además con trabajos teóricos como el de Gold.

### Corrección

Separar cuatro contribuciones:

1. diseño y dirección;
2. construcción/operación;
3. reconocimiento y verificación de la señal;
4. publicación e interpretación física.

### Lección

La autoría bibliográfica, la autoría material y el reconocimiento institucional se superponen, pero no son sinónimos. Auditar una historia científica incluye la cadena de trabajo, no solo la lista de premiados.

## ERR-SOLAR-ANALOG-SNAPSHOT-001 — Un análogo convertido en recuerdo familiar

Imágenes de HL Tau, DSHARP u otros discos suelen rotularse como “nuestro Sistema Solar cuando era joven”. Son sistemas distintos observados hoy. Demuestran que discos estructurados existen y permiten probar física; no son antepasados ni reconstrucciones únicas del Sol.

### Corrección

Rotular siempre el objeto, separar “análogo” de “fósil local” y no trasladar masa, edad, anillos o planetas del sistema observado al solar sin un puente cuantitativo.

## ERR-SOLAR-CAI-BIRTH-001 — Un cristal convertido en cumpleaños universal

`4567.30 ± 0.16 Ma` fecha el evento Pb–Pb interpretado de CAIs analizadas. No observa el colapso de toda la nube, el encendido exacto del Sol ni la formación simultánea de planetas.

### Corrección

Usar “tiempo cero meteórico operacional” y distinguir cristalización, cierre, acreción, diferenciación y ensamblaje planetario.

## ERR-SOLAR-GAP-PLANET-001 — La banda oscura ya tenía nombre

Un hueco de continuo es menor intensidad reconstruida. Puede reflejar densidad de polvo, temperatura, opacidad, tamaño de grano o resolución. Planetas son una explicación física fértil, pero líneas de hielo, MHD, presión y fotoevaporación producen alternativas.

### Corrección

Exigir diagnósticos de gas, cinemática, espectro de polvo y, cuando sea posible, detección independiente del perturbador.

## ERR-SOLAR-NEBULA-UNIFORM-001 — La razón canónica aplicada a todo

Una isócrona ajustada en ciertas CAIs no convierte el disco entero en un tanque homogéneo. Las anomalías CC/NC muestran reservorios con historias distintas; apertura y alteración pueden además modificar relaciones locales.

### Corrección

Declarar población, fase, reservorio y sistema isotópico. Probar homogeneidad en vez de usarla como condición invisible.

## ERR-SOLAR-LINEAR-GROWTH-001 — “Chocaron y se pegaron”

La adhesión funciona en regímenes microscópicos, pero al crecer cambian energía, porosidad y acoplamiento al gas. Aparecen rebote, fragmentación y deriva radial. Un esquema lineal borra el principal problema microfísico de formar planetesimales.

### Corrección

Separar adhesión, crecimiento de agregados, concentración colectiva, colapso gravitatorio y acreción entre cuerpos. Cada flecha requiere condiciones y evidencia propias.

## ERR-PHOTO-STROM-CYANO-001 — Todo tapete se volvió cianobacteria

Una estructura laminada puede ser microbiana sin identificar taxón, y un tapete fototrófico puede ser anoxigénico. La semejanza con sistemas modernos no conserva el donador de electrones.

### Corrección

Separar biogenicidad, fototrofía, metabolismo y taxonomía. Exigir redox o una estructura/molécula diagnóstica para avanzar cada paso.

## ERR-PHOTO-O2-GLOBAL-001 — Un oasis convertido en planeta

`O₂` producido en una película de agua puede oxidar Mn, Fe o Ce y consumirse antes de mezclarse con el océano o aire. Un proxy local no mide por sí solo presión atmosférica.

### Corrección

Declarar escala espacial, reservorio y tiempo de residencia. Combinar proxies locales con señales atmosféricas y balances globales antes de usar “oxigenación”.

## ERR-PHOTO-HEMATITE-001 — El color rojo heredó la edad de la roca

Hematita presente hoy puede reemplazar un mineral anterior. Fechar el chert no fecha automáticamente el episodio oxidante.

### Corrección

Demostrar textura primaria y singenicidad; cuando sea posible, fechar el fraccionamiento o producto de oxidación, no sólo el huésped.

## ERR-PHOTO-BIOMARKER-001 — Extraído significa antiguo

Una molécula recuperada de una roca puede entrar durante perforación, almacenamiento, fluidos o laboratorio. Su especificidad biológica no resuelve su edad.

### Corrección

Usar interiores, blancos, controles exterior–interior, madurez térmica y posición *in situ*. Singenicidad precede a taxonomía histórica.

## ERR-PHOTO-PROXY-DATE-001 — La huella se volvió cumpleaños

Un proxy de `O₂` a `2.87 Ga` prueba que la innovación ya existía; no que surgiera entonces. Preservación y expansión ecológica introducen un intervalo desconocido.

### Corrección

Escribir “por al menos” o “a más tardar”, con la dirección del límite. Reservar “origen” para un evento que el archivo no observa directamente.

## ERR-PHOTO-CLOCK-001 — El centro de una distribución se volvió fósil

Un reloj molecular depende de calibraciones, topología y modelo de tasa. Duplicación de proteína y aparición del metabolismo completo pueden estar separadas.

### Corrección

Reportar distribución, sensibilidad y nodo exacto. No combinar ventanas incompatibles como si fueran errores instrumentales de una misma medición.

## ERR-PHOTO-GOE-ORIGIN-001 — El efecto planetario fechó la innovación

El Gran Evento de Oxidación registra acumulación persistente, no la primera oxidación del agua. Oasis arcaicos y relojes moleculares preceden ese cambio.

### Corrección

Separar producción bruta, producción neta, sumideros, escala local y atmósfera. Tratar el retraso como una pregunta causal propia.

## ERR-GOE-INSTANT-001 — Un intervalo convertido en interruptor

La pérdida de `S‑MIF` puede ser rápida en una sucesión, mientras pérdidas previas, retornos y memoria de cuenca abarcan más de cien millones de años.

### Corrección

Indicar si la fecha pertenece a inicio operacional, cruce local, última señal o estabilización. Dibujar intervalos y huecos, no una sola línea global.

## ERR-GOE-SMIF-OXYMETER-001 — El azufre convertido en porcentaje

`S‑MIF` responde a fotoquímica, ozono, composición atmosférica y preservación. Su ausencia indica un umbral bajo condiciones modeladas; no mide continuamente `pO₂`.

### Corrección

Reportar umbral, modelo y reservorio. No convertir `Δ³³S = 0` en una concentración sin otra calibración.

## ERR-GOE-RED-BED-001 — Todo rojo se volvió aire oxigenado

Hematita y color pueden formarse durante depósito, diagénesis o meteorización posterior. La primera aparición depende además de facies y preservación.

### Corrección

Demostrar textura, edad y ambiente de oxidación; combinar con minerales detríticos y proxies atmosféricos independientes.

## ERR-GOE-OCEAN-GLOBAL-001 — La plataforma heredó todo el océano

El intercambio aire–mar oxigena primero aguas someras. Respiración, estratificación y reductores pueden mantener anoxia profunda.

### Corrección

Nombrar profundidad, facies y extensión. Exigir transectos y proxies integrados antes de afirmar «océano oxigenado» sin calificativo.

## ERR-GOE-GLACIATION-PROOF-001 — El hielo eligió una flecha causal

Glaciación y oxigenación próximas en el tiempo no establecen si `O₂` destruyó metano, si el clima movió la fotoquímica o si un tercer proceso controló ambos.

### Corrección

Resolver orden temporal y comparar predicciones cuantitativas de direcciones rivales; usar la glaciación como condición, no como oxímetro.

## ERR-GOE-MODERN-001 — «Grande» se volvió 21 %

La reorganización fue planetaria, pero las cotas defendibles de `pO₂` abarcan órdenes de magnitud y muchos proxies responden a umbrales muy inferiores al nivel actual.

### Corrección

Separar importancia biogeoquímica de amplitud. Usar `PAL` con definición explícita y no traducir «oxigenado» como «moderno».

## ERR-LUCA-FIRST-LIFE-001 — El último ancestro se volvió el primero

LUCA es el ancestro común más reciente de los linajes celulares supervivientes. Su traducción compleja implica etapas anteriores; linajes tempranos pudieron extinguirse.

### Corrección

Definir el conjunto de descendientes y el nodo. Reservar «origen de la vida» para la transición prebiótica que la filogenia de supervivientes no observa.

## ERR-LUCA-SINGLE-CELL-001 — Un punto del árbol se volvió individuo

Los diagramas comprimen poblaciones y divergencias prolongadas en nodos. En microbios, cada gen puede tener un tiempo e historia de transferencia distintos.

### Corrección

Escribir «población ancestral» y distinguir coalescencia de genes, divergencia de poblaciones y aparición de rasgos. No ilustrar una célula como espécimen conocido.

## ERR-LUCA-PRESENT-SHARED-001 — Distribución convertida en verticalidad

Un gen presente hoy en Bacteria y Archaea puede ser ancestral, transferido, duplicado, reemplazado o perdido de forma diferencial.

### Corrección

Construir el árbol del gen, probar ortología y reconciliar duplicación/transferencia/pérdida con árboles alternativos. Reportar probabilidad, no sólo presencia.

## ERR-LUCA-RECOVERED-GENOME-001 — Probabilidades convertidas en DNA

Los inventarios de LUCA asignan familias y funciones bajo filtros o modelos. No recuperan bases, cromosomas, orden génico ni una muestra ancestral.

### Corrección

Nombrar «reconstrucción de contenido génico», publicar umbral y sensibilidad y separar número estimado de identidad de cada familia.

## ERR-LUCA-THREE-DOMAINS-001 — Una clasificación histórica se volvió genealogía fija

Reconocer tres dominios reveló Archaea, pero la evidencia posterior sitúa el componente informacional eucariota dentro del marco arqueano y añade una herencia mitocondrial bacteriana.

### Corrección

Para LUCA, dibujar la divergencia primaria `Bacteria | Archaea`; representar Eukaryota y endosimbiosis como historia posterior y reticulada.

## ERR-LUCA-PORTRAIT-001 — Una ruta se volvió una chimenea

Genes compatibles con `H₂`, Wood–Ljungdahl o estabilidad térmica no observan dirección de flujo, dieta obligada, temperatura ni localidad.

### Corrección

Separar presencia de familia, función ancestral, ruta completa, balance energético y ambiente. Etiquetar toda escena como síntesis conceptual y conservar alternativas visibles.

## ERR-EUK-ASGARD-ANCESTOR-001 — El pariente moderno se volvió abuelo

*Prometheoarchaeum* y *Lokiarchaeum* son descendientes actuales de ramas Asgard; han evolucionado durante miles de millones de años y no representan FECA congelado.

### Corrección

Escribir «pariente arqueano conocido» y reconstruir estados con árboles. Separar el fenotipo observado hoy de la probabilidad ancestral.

## ERR-EUK-MITO-BACTERIUM-001 — Una mitocondria se volvió bacteria cautiva sin transformación

El orgánulo perdió/transfirió gran parte de su genoma, reclutó proteínas del huésped y depende de importación y coordinación celular. No es una especie bacteriana actual conservada intacta.

### Corrección

Describir organelogénesis: transmisión, reducción, transferencia, retargeting e integración. Reservar «protomitochondrion» para el ancestro bacteriano inferido.

## ERR-EUK-AMITO-PRIMITIVE-001 — Ausencia convertida en estado anterior

Mitosomas e hidrogenosomas son derivados mitocondriales. *Monocercomonoides* carece del orgánulo por pérdida secundaria tras adquirir SUF.

### Corrección

Usar posición filogenética, proteínas de importación y rutas `Fe–S`. No ordenar organismos por «simplicidad» sin reconstrucción ancestral.

## ERR-EUK-LECA-FIRST-001 — Último ancestro común convertido en primer eucariota

LECA ya poseía una arquitectura compleja y pudo estar separado de FECA por un tallo prolongado con poblaciones extinguidas.

### Corrección

Nombrar el nodo y el conjunto de descendientes. No usar la presencia en LECA como fecha de aparición ni como orden de adquisición.

## ERR-EUK-ENGULFMENT-OBSERVED-001 — Una ilustración se volvió evidencia

Protrusiones Asgard, sintrofía y una doble membrana son compatibles con varios mecanismos. Ningún cultivo reproduce el episodio histórico completo.

### Corrección

Etiquetar `E³`, fagocitosis, invaginación y huéspedes adicionales como modelos. Exigir predicciones de topología, herencia e importación.

## ERR-EUK-RICKETTSIA-001 — Afinidad amplia convertida en especie donante

Las filogenias colocan la mitocondria cerca o dentro de Alphaproteobacteria con sensibilidad de taxones/modelos. Rickettsiales es una afinidad posible, no la identificación de una *Rickettsia* moderna como ancestro.

### Corrección

Usar «bacteria Alpha-relacionada» y reportar la topología del estudio. Separar orden hermano, ancestro común y especie donante.

## ERR-EUK-GENE-PERCENT-001 — Un pipeline se volvió composición química de LECA

Porcentajes Asgard, Alpha u otros dependen de ortogrupos, bases, umbrales, HGT, pérdidas y familias sin asignación. Estudios de 2026 no cuentan el mismo denominador.

### Corrección

Publicar definición del proteoma, método y no asignados. Comparar tendencias bajo reanálisis común; no sumar porcentajes de estudios distintos.

## ERR-EUK-FOSSIL-BIRTH-001 — El primer fósil se volvió nacimiento

Un fósil establece presencia mínima después del origen y su afinidad puede ser de tallo o corona. No conserva FECA, LECA ni la entrada mitocondrial por definición.

### Corrección

Escribir `≥ edad mínima`, separar edad de roca y afinidad, y mantener relojes moleculares como una cadena distinta.

## ERR-EUK-OXYGEN-TRIGGER-001 — Correlación ecológica convertida en causa única

El GOE precede fósiles eucariotas y los más antiguos muestreados prefieren fondos oxigenados. Eso no prueba que un umbral de `O₂` desencadenara la simbiosis.

### Corrección

Separar disponibilidad, capacidad respiratoria, esteroles, ecología y cronología de nodos. Comparar predicciones de modelos anaerobios, microaerobios y aerobios.

## ERR-SEX-REPRODUCTION-001 — Reproducción convertida en sinónimo de sexo

La reproducción aumenta individuos; el sexo mezcla o reorganiza genomas mediante módulos que pueden no producir descendencia en el mismo paso.

### Corrección

Nombrar por separado clonación, singamia, cariogamia, ploidía, meiosis y descendencia. Declarar qué combinación usa la afirmación.

## ERR-SEX-RECOMBINATION-001 — Cualquier recombinación se volvió sexo

Reparación homóloga, conversión y transferencia horizontal recombinan DNA sin un ciclo sexual eucariota.

### Corrección

Exigir evidencia de compatibilidad, fusión/cambio de ploidía y segregación cuando se afirme un ciclo; usar «intercambio genético» si sólo se observa mezcla.

## ERR-SEX-LECA-OBSERVED-001 — La reconstrucción de LECA se narró como observación

LECA no es una célula fósil filmada. Su repertorio se infiere de homólogos modernos, árboles y pérdidas.

### Corrección

Separar dato moderno, puente filogenético y estado ancestral. Calificar cada módulo y no dibujar una primera pareja definitiva.

## ERR-SEX-GENES-PROVE-001 — Un inventario génico se volvió meiosis observada

Genes meióticos pueden cambiar de función, perderse o actuar en procesos parciales; presencia no muestra expresión ni coordinación.

### Corrección

Combinar ortología con expresión, localización, perturbación, ploidía, cromosomas y productos cuando el claim sea funcional.

## ERR-SEX-ASEX-PRIMITIVE-001 — «Sin sexo observado» se volvió estado ancestral

Sexo raro, críptico o estacional puede escapar al muestreo; linajes derivados también pierden módulos.

### Corrección

Tratar asexualidad profunda como hipótesis a contrastar con genómica poblacional, ciclo completo y poder de detección declarado.

## ERR-SEX-ADVANTAGE-UNIVERSAL-001 — Un experimento se volvió ley universal

La ventaja cambia con ambiente, parásitos, ploidía, tamaño poblacional, ligamiento y costos.

### Corrección

Reportar organismo, tratamiento, duración y mecanismo. No extrapolar el signo fuera del dominio experimental sin comparación.

## ERR-SEX-ORIGIN-BENEFIT-001 — Mantenimiento moderno convertido en causa de origen

Una población con sexo ya integrado no paga los mismos pasos intermedios que un sistema en ensamblaje.

### Corrección

Separar origen, estabilización y mantenimiento; exigir que el modelo explique la viabilidad y selección de módulos parciales.

## ERR-SEX-MALE-FEMALE-001 — Mating types convertidos en macho y hembra

Tipos de apareamiento regulan compatibilidad entre gametos que pueden ser iguales. Macho/hembra presupone anisogamia funcional.

### Corrección

Usar `+`, `−` u otros tipos cuando corresponda; reservar macho/hembra para productores de gametos pequeños/grandes bajo definición explícita.

## ERR-SEX-FOSSIL-BIRTH-001 — El primer fósil sexual se volvió origen del sexo

*Bangiomorpha* es mucho posterior a LECA y su sexualidad se infiere por afinidad/desarrollo.

### Corrección

Escribir «mínimo fósil condicionado», separar edad de roca y función, y mantener la reconstrucción molecular como una cadena independiente.

## ERR-MULTI-COLONY-ORGANISM-001 — Toda asociación se llamó organismo

Un biofilm, agregado o colonia puede cooperar sin tener reproducción grupal heredable ni aptitud colectiva desacoplada.

### Corrección

Declarar si se observa proximidad, adhesión, ciclo grupal, cuello de botella, división de trabajo o individualidad; no trasladar automáticamente una propiedad a las demás.

## ERR-MULTI-ONE-ORIGIN-001 — Una palabra funcional se volvió una genealogía

Animales, plantas, algas pardas, algas rojas, hongos y sistemas procariotas no heredaron una única arquitectura multicelular completa.

### Corrección

Reconstruir por clado y por componente; reservar homología para rasgos cuya ascendencia esté apoyada y contar orígenes bajo una definición explícita.

## ERR-MULTI-LADDER-001 — La colonia se dibujó camino al animal

Linajes unicelulares, coloniales y agregativos actuales no son peldaños detenidos hacia nosotros; poseen historias propias y pueden perder o ganar integración.

### Corrección

Usar árboles ramificados, parientes laterales y rutas independientes. Separar aumento de tamaño, individualidad y complejidad.

## ERR-MULTI-GENE-001 — Una mutación local se volvió interruptor universal

Cambiar `ACE2` basta para impedir separación madre–hija en levadura, pero otros clados construyen grupos con adhesión, matriz, filamentos o compartimentación distintas.

### Corrección

Describir qué paso habilita el gen en el organismo probado; integrar redes reguladoras, ecología y homología antes de generalizar.

## ERR-MULTI-LAB-HISTORY-001 — El tubo de ensayo se volvió máquina del tiempo

La selección por sedimentación o depredación demuestra que una transición es accesible bajo condiciones conocidas. No identifica la presión que actuó hace miles de millones de años.

### Corrección

Informar taxón, preadaptaciones, régimen, duración, réplicas y respuesta. Presentar el resultado como prueba de mecanismo o posibilidad, no como repetición histórica.

## ERR-MULTI-SIZE-COMPLEXITY-001 — Más grande se volvió más complejo

Un grupo macroscópico puede repetir un solo tipo celular; una estructura pequeña puede coordinar transporte, señalización y diferenciación.

### Corrección

Medir por separado tamaño, número de tipos, dependencia, geometría, comunicación, transporte, reproducción y control de conflicto.

## ERR-MULTI-OXYGEN-TRIGGER-001 — El oxígeno encendió todos los linajes

Disponibilidad de `O₂`, respiración, difusión y ecología pueden favorecer algunas expansiones, pero no existe coincidencia temporal ni requisito universal para todos los modos multicelulares.

### Corrección

Formular predicciones por clado y rasgo, incluir rutas anaerobias y no convertir sucesión temporal amplia en causalidad.

## ERR-MULTI-FOSSIL-BIRTH-001 — La primera preservación se volvió nacimiento

Franceville, *Qingshania*, *Bangiomorpha* o *Proterocladus* fijan apariciones bajo interpretaciones diferentes; ninguno observa el primer grupo multicelular.

### Corrección

Escribir `≥ edad mínima`, separar edad, biogenicidad, afinidad, nivel de organización y continuidad con coronas modernas.

## ERR-MULTI-ANIMAL-TEMPLATE-001 — El animal se volvió medida universal

Tejidos y desarrollo embrionario describen una ruta. Algas, hongos, mixobacterias y cianobacterias resuelven adhesión, cooperación y diferenciación con arquitecturas distintas.

### Corrección

Comparar funciones equivalentes sin exigir anatomía animal y sin representar otros linajes como ensayos incompletos de Metazoa.

## ERR-SNOWBALL-DIAMICTITE-001 — La textura ya tenía clima

Un diamictita sólo describe clastos mal seleccionados en matriz. Flujos de escombros, tectónica o colapso submarino pueden parecerse al till.

### Corrección

Exigir dropstones con deformación, estrías, pavimentos, glacitectónica y arquitectura de facies; reportar alternativas.

## ERR-SNOWBALL-MODERN-LATITUDE-001 — El mapa actual viajó al Criogénico

Encontrar tillita hoy cerca del ecuador no prueba hielo tropical: los continentes se desplazaron cientos de millones de años.

### Corrección

Combinar edad de depósito, bloque tectónico y remanencia primaria; expresar paleolatitud con incertidumbre.

## ERR-SNOWBALL-ONE-OUTCROP-001 — Un clasto congeló el planeta

Un afloramiento prueba procesos en una cuenca. Globalidad añade correlación, paleogeografía y física del clima.

### Corrección

Mantener separadas las cinco escalas y no contar sitios del mismo bloque/calibración como réplicas planetarias.

## ERR-SNOWBALL-WHITE-BALL-001 — El nombre se volvió fotografía

Snowball puede significar hielo tropical/casi global sin resolver si hubo leads, hielo fino o cinturones de agua.

### Corrección

Nombrar `hard`, `thin ice`, `waterbelt` o fase dinámica y asignar confianza a la geometría exacta.

## ERR-SNOWBALL-TWO-IDENTICAL-001 — Dos episodios se volvieron copias

La Sturtiana duró ~56–58 Myr y la Marinoana ~4 Myr bajo el marco actual; su entrada, carbono y dinámica no tienen por qué coincidir.

### Corrección

Modelar y fechar cada episodio por separado antes de buscar un mecanismo común.

## ERR-SNOWBALL-CO2-STOPWATCH-001 — El gas se volvió cronómetro

Dividir un umbral supuesto por desgasificación moderna ignora meteorización subglacial/fondo marino, nubes, polvo, presión y albedo.

### Corrección

Declarar todos los flujos y parámetros; presentar una familia de tiempos/umbrales, no un valor observado.

## ERR-SNOWBALL-CAP-INSTANT-001 — El contacto abrupto se volvió instante universal

Un carbonato de capa puede comenzar tras deshielo y acumular etapas de mezcla/alkalinidad durante tiempos distintos.

### Corrección

Separar contacto, tasa, duración, agua parental y mecanismo mediante facies, isótopos, magnetismo y edades internas.

## ERR-SNOWBALL-LIFE-EXTINCT-001 — Hielo global se volvió esterilización

La vida atravesó ambos episodios y hay evidencia de productividad/oásis. El océano profundo anóxico no representa todos los márgenes y superficies.

### Corrección

Mapear refugios por facies, fase, luz, redox y metabolismo; no extrapolar un ambiente a la biosfera.

## ERR-SNOWBALL-ANIMALS-001 — El deshielo creó animales

La radiación ediacárica ocurrió después y pudo recibir nutrientes/nichos, pero varias raíces eucariotas y quizá animales anteceden a las glaciaciones.

### Corrección

Separar precedencia, mecanismo y predicción exclusiva; comparar oxígeno, tectónica, ecología y sesgo fósil.

## ERR-EDIACARA-PERIOD-BIOTA-001 — Seiscientos treinta y cinco millones se volvieron una fauna

El Ediacárico comienza cerca de `635 Ma`, pero la macrobiota clásica bien datada aparece hacia `574 Ma`. Lantian, Weng’an, microfósiles y comunidades de Ediacara son archivos distintos.

### Corrección

Nombrar periodo, biota/yacimiento, estilo fósil e intervalo por separado.

## ERR-EDIACARA-ALL-ANIMALS-001 — “Biota” se volvió “reino animal”

`Dickinsonia`, `Kimberella` y trazas apoyan animales; otros morfotipos conservan afinidad abierta y `Beltanelliformis` tiene señal cianobacteriana.

### Corrección

Asignar confianza y nodo mínimo por taxón; no heredar animalidad por convivencia o parecido.

## ERR-EDIACARA-FRONDS-PLANTS-001 — Una fronda produjo fotosíntesis

Varios rangomorfos vivieron bajo la zona fótica y su ramificación no tiene anatomía foliar/vascular.

### Corrección

Usar “frondoso” como geometría; probar profundidad, fijación, flujo y modelos de alimentación.

## ERR-EDIACARA-DISCS-JELLYFISH-001 — Un círculo aprendió a nadar

Muchos discos son anclajes de frondas, moldes o cuerpos bentónicos. La simetría radial es altamente convergente.

### Corrección

Buscar continuidad con tallo/cuerpo, relieve, deformación y caracteres diagnósticos antes de asignar medusoide.

## ERR-EDIACARA-SHAPE-TAXON-001 — La silueta saltó al árbol

Compactación y reología transforman un organismo 3D en un molde 2D. Parecido no distingue homología de convergencia.

### Corrección

Encadenar contexto → tafonomía → anatomía → desarrollo/conducta → caracteres → nodo.

## ERR-EDIACARA-THREE-STAGES-001 — Avalon, White Sea y Nama hicieron fila

Los clusters conservan señal temporal, pero edades 2026 muestran solapamiento y las facies seleccionan comunidades/preservación.

### Corrección

Tratar cada ocurrencia con edad, ambiente y probabilidad de detección; no usar la etiqueta como fecha automática.

## ERR-EDIACARA-OXYGEN-SWITCH-001 — El oxígeno encendió animales

Oxígeno puede limitar tamaño, actividad y esqueletos sin fechar el origen genético ni explicar alimento, sustrato y ecología.

### Corrección

Separar nivel local, área habitable, requisito fisiológico y causa evolutiva suficiente.

## ERR-EDIACARA-ABSENCE-EXTINCTION-001 — El último molde se volvió la última población

Una última aparición puede coincidir con cambio de facies, ventana tafonómica o muestreo. También existen pérdidas biológicas reales.

### Corrección

Modelar detectabilidad y comparar facies equivalentes antes/después; buscar selectividad y continuidad independiente.

## ERR-EDIACARA-FAILED-EXPERIMENT-001 — La evolución recibió una meta

Llamar a toda la biota “experimento fallido” supone que producir anatomías modernas era su objetivo y borra animales que sí participan de la radiación.

### Corrección

Comparar funciones, caracteres y descendencia por linaje, sin convertir extinción o rareza en fracaso.

## ERR-CAMBRIAN-INSTANT-001 — Una metáfora recibió duración cero

Diversidad, disparidad, esqueletos, trazas y redes se aceleraron, pero sus curvas no empiezan en una sola capa y algunas cruzan el límite desde el Ediacárico.

### Corrección

Nombrar indicador, región, umbral y duración; usar “rápida geológicamente” sólo junto a un intervalo explícito.

## ERR-CAMBRIAN-BOUNDARY-CAUSE-001 — El GSSP encendió la evolución

Fortune Head fija una convención correlacionable mediante una aparición local. Una frontera formal no genera genes, oxígeno ni depredación.

### Corrección

Separar punto físico, edad numérica, señal correlacionada y mecanismo causal; exigir cronología independiente para este último.

## ERR-CAMBRIAN-NO-PRECURSORS-001 — Antes de la capa no había animales

Trazas, biomineralización y animales ediacáricos preceden el límite; los relojes permiten divergencias aún anteriores con intervalos amplios.

### Corrección

Tratar la FAD como mínimo preservado y buscar archivos apropiados para tamaño, tejido, conducta y facies anteriores.

## ERR-CAMBRIAN-ALL-PHYLA-001 — Los filos llegaron terminados

Los nombres de coronas modernas aplicados retrospectivamente esconden grupos tallo con combinaciones incompletas o extintas de caracteres.

### Corrección

Asignar cada fósil a nodo mínimo, declarar caracteres diagnósticos y no convertir semejanza general en corona.

## ERR-CAMBRIAN-NO-TRANSITIONS-001 — Un árbol fue juzgado como escalera

Una forma transicional no tiene que ser mitad de dos animales modernos. Debe combinar estados esperados en una rama y edad compatibles.

### Corrección

Evaluar mosaicos carácter por carácter en árboles con tallos; probar homología y tafonomía antes de exigir una silueta intermedia.

## ERR-CAMBRIAN-LAGERSTATTE-CENSUS-001 — La ventana se volvió océano completo

Chengjiang, Qingjiang y Burgess conservan cuerpos blandos de facies, edades y filtros distintos. Ausencia o abundancia local no mide automáticamente la biosfera.

### Corrección

Modelar tejido preservable, ambiente, área, colecta y correlación antes de comparar diversidad global.

## ERR-CAMBRIAN-SKELETON-ORIGIN-001 — Un fragmento inventó un esqueleto universal

Tubos, conchas, placas y escleritos emplean minerales, genes y funciones diferentes; además, mineralizar aumenta detectabilidad.

### Corrección

Reconstruir escleritomas, microestructura y filogenia por clado; separar origen biológico de primera preservación abundante.

## ERR-CAMBRIAN-OXYGEN-SWITCH-001 — El oxígeno apretó un botón

Oxígeno puede habilitar metabolismo activo, pero los proxies registran cuencas heterogéneas y las faunas también alteran redox y nutrientes.

### Corrección

Especificar reservorio, umbral fisiológico, tiempo y dirección causal; comparar modelos con alimento, temperatura, ecología y desarrollo.

## ERR-CAMBRIAN-GENE-MAGIC-001 — Tener genes produjo cuerpos automáticamente

Familias regulatorias ancestrales preceden la radiación, pero presencia no demuestra expresión, interacción, innovación anatómica ni ventaja ecológica.

### Corrección

Separar familia, función experimental, red regulatoria, fenotipo y fecha; buscar cambios de regulación además de inventario.

## ERR-CAMBRIAN-NO-EXTINCTION-001 — La diversidad sólo pudo subir

Rangos siberianos muestran pérdidas y recambios como Sinsk dentro del intervalo de radiación. Una tendencia neta ascendente puede contener crisis.

### Corrección

Representar apariciones y desapariciones con incertidumbre, controles de muestreo y correlación por paleoplaca.

## ERR-ORDOVICIAN-ONEEVENT-001 — Varias radiaciones fueron comprimidas en una explosión

Plancton, bentos, arrecifes e inmigraciones cambian en intervalos solapados pero no idénticos. Una etiqueta útil no crea sincronía.

### Corrección

Mostrar curvas por clado, gremio y paleoplaca; declarar si GOBE significa todo el periodo o una fase operacional.

## ERR-ORDOVICIAN-COUNT-CENSUS-001 — Una colección se volvió océano

Cada ocurrencia depende de exposición, facies, preservación, colecta, publicación y taxonomía. Sumarlas sin detectabilidad infla precisión.

### Corrección

Conservar localidad/colección/formación, controlar cobertura y recordar que corregir sesgo no recupera todo lo perdido.

## ERR-ORDOVICIAN-DIVERSITY-ECOSPACE-001 — Cinco variables recibieron una sola curva

Riqueza, origination, disparidad, biomasa y ecospace responden a datos y unidades distintas. Pueden aumentar a ritmos diferentes.

### Corrección

Nombrar la métrica y su denominador; comparar curvas sin tratarlas como réplicas ni sustitutos.

## ERR-ORDOVICIAN-CLIMATE-SWITCH-001 — Enfriar produjo especies automáticamente

Temperatura puede ampliar nichos fisiológicos, pero innovación, interacciones, paleogeografía y nutrientes no se desprenden de un termómetro.

### Corrección

Usar el clima como hipótesis predictiva condicionada y auditar actualismo fisiológico, `CO₂`, latitud y residuos del modelo.

## ERR-ORDOVICIAN-OXYGEN-SWITCH-001 — Todo el océano respiró al mismo tiempo

`δ238U`, `I/Ca` y C/S integran reservorios diferentes. Promediarlos borra que estabilidad global y ventilación local pueden coexistir.

### Corrección

Registrar proxy, fase, diagénesis, profundidad, cuenca y modelo de reservorio antes de inferir oxigenación.

## ERR-ORDOVICIAN-METEOR-CAUSE-001 — Una lluvia real recibió una radiación entera

La ruptura L y su flujo de material están bien registrados, pero postdatan el inicio principal. Coincidencia regional no revierte precedencia.

### Corrección

Separar evento cosmoquímico, forzamiento radiativo posible y respuesta biológica; exigir presupuesto y desfase causal.

## ERR-ORDOVICIAN-LAND-FOREST-001 — Una espora microscópica levantó un bosque

Criptosporas prueban un mínimo de presencia del productor, no tallos vasculares, altura, cobertura ni paisaje moderno.

### Corrección

Ilustrar microfósiles y sustrato; dejar productor corporal, nodo y extensión como preguntas abiertas.

## ERR-ORDOVICIAN-LOME-INSTANT-001 — Dos fases cayeron sobre un solo punto

El límite formal y las desapariciones no son un mismo objeto. Rangos y geocronología recuperan dos intervalos con error y correlación.

### Corrección

Mostrar intervalos asimétricos, secciones y pulsos; no usar la edad ICS como cronómetro automático de mortalidad.

## ERR-ORDOVICIAN-LOME-ONECAUSE-001 — Una causa mató dos veces de la misma manera

Enfriamiento, pérdida de plataforma, calentamiento, nutrientes y anoxia cambian en secuencia y por profundidad. Un marco acoplado no implica mortalidad uniforme.

### Corrección

Cruzar selectividad de organismos con temperatura, hábitat y redox por cuenca y pulso; conservar causas alternativas.

## ERR-ORDOVICIAN-RECOVERY-001 — Subir de nuevo significó volver al pasado

Una comunidad puede recuperar modos funcionales sin recuperar riqueza, composición o dominancia previas.

### Corrección

Declarar línea base, métrica, región y escala temporal; comparar riqueza, ecospace y redes en paralelo.

## ERR-SILURIAN-ONECLOCK-001 — Una cifra recuperó todo el planeta

Los ~5 Myr de Laurentia, 15–20 Myr de compilaciones y ≥35 Myr de otra curva no miden el mismo conjunto con igual cobertura.

### Corrección

Publicar línea de base, clados, región, bins, método y variable junto a cada duración.

## ERR-SILURIAN-REWIND-001 — Volver a contar igual fue volver a ser igual

Inmigración y supervivencia pueden restaurar riqueza mientras cambian dominancia, composición y ecospace.

### Corrección

Comparar conteos, beta-diversidad, abundancia y rasgos; evitar “recuperación total” sin criterio.

## ERR-SILURIAN-MODERN-REEF-001 — El Paleozoico recibió un arrecife tropical actual

Estromatoporoideos, tabulados, rugosos y microbios formaban arquitecturas distintas de las escleractinias modernas.

### Corrección

Nombrar constructores, facies, relieve y región; ilustrar marcos bajos/antiguos y declarar reconstrucción.

## ERR-SILURIAN-JAWS-ORIGIN-001 — Chongqing inventó las mandíbulas

La excepcional preservación revela cuerpos completos; la divergencia debe preceder al mínimo fósil y tiene archivos fragmentarios anteriores.

### Corrección

Separar fecha del estrato, FAD de cuerpo articulado, restos aislados y nodo filogenético.

## ERR-SILURIAN-ISOTOPE-CAUSE-001 — Una curva de carbono se volvió asesino

`δ13C` registra la composición de un reservorio bajo fraccionamientos. No mide directamente oxígeno, temperatura o mortalidad.

### Corrección

Exigir preservación, reservorio, sincronía, mecanismo y selectividad; contrastar proxies independientes.

## ERR-SILURIAN-LAND-CONQUEST-001 — La vida saltó por primera vez a tierra

Criptosporas y trazas ordovícicas preceden cuerpos silúricos más visibles. La expansión no comienza desde un continente estéril.

### Corrección

Usar “continuidad”, “ensamblaje” y “mínimo preservado”; reservar origen para análisis filogenético/cronológico.

## ERR-SILURIAN-SPORE-VASCULAR-001 — Tres radios construyeron xilema

La marca trilete informa sobre una tétrada reproductiva. No conserva traqueidas ni el cuerpo productor.

### Corrección

Separar espora, esporangio, eje y tejido; elevar confianza sólo cuando están en conexión anatómica.

## ERR-SILURIAN-COOKSONIA-FOREST-001 — Un tallo diminuto levantó un bosque

Los cooksonioides eran ejes bajos, sin hojas/raíces modernas, y muchos no preservan tejido vascular.

### Corrección

Mostrar escala centimétrica, sustrato abierto y ejemplares aislados; no inferir cobertura o dosel.

## ERR-SILURIAN-PNEUMODESMUS-RANK-001 — “El más antiguo” pareció una anatomía

Los poros respiratorios y la edad de la roca tienen rutas probatorias distintas. Cambiar la edad altera el ranking, no borra automáticamente el espiráculo.

### Corrección

Registrar por separado identidad, función, horizonte, bloque, biozona y geocronología; formular rankings como provisionales.

## ERR-SILURIAN-SCORPION-LAND-001 — Una silueta recibió pulmones

`Parioscorpio` parecía escorpión hasta que más ejemplares mostraron otra anatomía y afinidad problemática. Un nombre no conserva aparato respiratorio.

### Corrección

Codificar caracteres, revisar todos los ejemplares y exigir contexto/anatomía terrestre antes de reconstruir hábitat.

## ERR-DEVONIAN-TREE-FOREST-001 — Un tronco recibió un dosel

La presencia de una planta arborescente no demuestra densidad, extensión, varias generaciones ni un bosque. Árbol es anatomía individual; bosque es organización espacial/ecológica.

### Corrección

Publicar definición y exigir posición de crecimiento, repetición, espaciamiento, superficie y contexto antes de usar «bosque».

## ERR-DEVONIAN-FIRST-FOREST-001 — El ranking pareció origen

«Más antiguo conocido» resume el archivo expuesto bajo una definición y escala temporal; un nuevo afloramiento puede desplazarlo sin cambiar el proceso evolutivo.

### Corrección

Añadir «conocido», edad/intervalo, criterio de bosque y fecha de revisión; evitar «apareció por primera vez».

## ERR-DEVONIAN-FOREST-CO2-001 — Los árboles movieron solos la atmósfera

Raíces y vegetación ofrecen mecanismos reales de meteorización y secuestro, pero CO₂, desgasificación, relieve, paleogeografía y preservación forman un balance acoplado.

### Corrección

Contrastar proxies anteriores a bosques, cuantificar flujos e incertidumbres y separar existencia del mecanismo de su peso global.

## ERR-DEVONIAN-FISH-ORIGIN-001 — Una edad cultural se volvió nacimiento

Peces y mandíbulas preceden al Devónico. El periodo registra radiaciones, disparidad y abundancia distintas por clado, no la fabricación súbita de «los peces».

### Corrección

Usar la etiqueta entre comillas y declarar si se mide riqueza, ocurrencias, disparidad, ecospace o dominancia.

## ERR-DEVONIAN-PRIMITIVE-LADDER-001 — Dos cajones formaron una escalera

Placodermos y «acantodios» no son pasos uniformes rumbo a peces modernos. Sus caracteres se distribuyen como mosaicos y varias agrupaciones tradicionales son grados/parafilias.

### Corrección

Mostrar árbol con incertidumbre, taxones concretos y caracteres; no ordenar siluetas de «primitivo» a «avanzado».

## ERR-DEVONIAN-TIKTAALIK-ANCESTOR-001 — Un mosaico se convirtió en protagonista

`Tiktaalik` es informativo porque reúne rasgos, no porque esté demostrado como ancestro directo ni porque preserve una caminata fuera del agua.

### Corrección

Decir «taxón transicional cercano al tallo», separar anatomía/capacidad/conducta y conservar ramas laterales.

## ERR-DEVONIAN-DIGITS-LAND-001 — La mano obligó a salir

`Elpistostege` muestra dígitos dentro de una aleta con radios y `Acanthostega` era marcadamente acuático. La novedad anatómica antecede a la ecología terrestre obligada.

### Corrección

Registrar por separado homología, soporte de peso, pista, ambiente, respiración y ciclo vital.

## ERR-DEVONIAN-ZACHELMIE-CERTAINTY-001 — Una pista recibió cuerpo y paisaje

Una huella puede restringir contacto y secuencia sin conservar identidad, anatomía completa o el ambiente durante toda la vida del productor.

### Corrección

Separar biogenicidad, productor mínimo, patrón locomotor, facies y atribución taxonómica; publicar alternativas fuertes.

## ERR-DEVONIAN-ONE-EXTINCTION-001 — Dos crisis se comprimieron en una fecha

Kellwasser, pérdidas prolongadas y Hangenberg afectan tiempos, grupos y métricas distintos. Un pico local no resume toda la biodiversidad devónica tardía.

### Corrección

Nombrar evento, cuenca, ventana, denominador y corrección de muestreo; no promediar pulsos como uno.

## ERR-DEVONIAN-PROXY-CAUSE-001 — Una señal geoquímica se volvió asesino

Anoxia/euxinia pueden ser mecanismos de estrés; Hg puede sugerir aportes; esporas malformadas pueden ser respuesta. Ninguna señal sola identifica desencadenante, dosis y mortalidad.

### Corrección

Exigir preservación, sincronía, magnitud, distribución, mecanismo, selectividad y predicciones que separen volcanismo, nutrientes, clima y UV-B.

## ERR-CARBONIFEROUS-GLOBAL-SWAMP-001 — Un nombre cubrió el planeta de pantano

Los grandes carbones tropicales de Euramérica dieron nombre al periodo, pero coexistieron con ríos, tierras estacionales, mares y hielo gondwánico. Una facies productiva no es un bioma global.

### Corrección

Mapear paleolatitud, cuenca, facies e intervalo; reservar «pantano carbonífero» para localidades y capas documentadas.

## ERR-CARBONIFEROUS-ALL-COAL-001 — La biomasa recibió destino geológico

La mayor parte de la materia vegetal se descompone, erosiona o arde. Formar turba exige balance hidrológico; preservarla y coalificarla exige enterramiento y maduración posteriores.

### Corrección

Separar producción, acumulación de turba, preservación de cuenca y rango del carbón en cada explicación.

## ERR-CARBONIFEROUS-NO-FUNGI-001 — Un reloj borró a los descomponedores

Fechar una familia enzimática no demuestra ausencia de hongos, otras enzimas o descomposición. El carbón aparece antes y después del intervalo predicho por el relato del «interruptor lignina».

### Corrección

Contrastar relojes genéticos con anatomía degradada, fósiles fúngicos, tejidos y distribución de carbón; formular contribución, no monopolio causal.

## ERR-CARBONIFEROUS-OXYGEN-35-001 — Una curva se volvió muestra de aire

El `35 %` procede de familias de modelos/proxies y no de una burbuja carbonífera universal. Halita, carbón vegetal y balances C–S producen valores y coberturas diferentes.

### Corrección

Publicar método, muestra, edad, correcciones, intervalo y sensibilidad; decir «estimación modelada» cuando corresponda.

## ERR-CARBONIFEROUS-ALL-GIANT-001 — El oxígeno usó una regla de aumento

La hiperoxia puede relajar restricciones respiratorias, pero no determina alimento, temperatura, desarrollo, depredación ni diseño corporal. Muchos artrópodos carboníferos no eran gigantes.

### Corrección

Tratar `O₂` como factor condicionante y contrastarlo por clado con series de tamaño y variables ambientales.

## ERR-CARBONIFEROUS-ARTHROPLEURA-INSECT-001 — Todo artrópodo recibió seis patas

`Arthropleura` era un miriápodo, no un insecto. El error taxonómico borra precisamente la anatomía que permite discutir su parentesco.

### Corrección

Usar «artrópodo» para el conjunto, «miriápodo» para el linaje y reservar «insecto» para Hexapoda/Insecta.

## ERR-CARBONIFEROUS-ROMERS-GAP-001 — Una vitrina vacía se volvió ecosistema vacío

La escasez histórica de tetrápodos tournaisienses reflejaba también rocas y búsqueda insuficientes. Nuevas localidades poblaron el intervalo sin necesidad de una aparición súbita.

### Corrección

Modelar exposición, esfuerzo, facies y detectabilidad antes de traducir ausencia de colección en ausencia biológica.

## ERR-CARBONIFEROUS-AMNIOTE-EGG-001 — Una garra fosilizó membranas invisibles

Las huellas de Snowy Plains pueden indicar un productor amniota, pero no conservan amnios, corion, alantoides ni conducta reproductiva. La reproducción se infiere desde el nodo.

### Corrección

Separar identidad icnológica, posición filogenética y reconstrucción de rasgos; no ilustrar un huevo como evidencia observada.

## ERR-CARBONIFEROUS-HYLONOMUS-ORIGIN-001 — El cuerpo más antiguo se volvió nacimiento

`Hylonomus` proporciona un mínimo corporal conocido. No demuestra ser el primer individuo, el ancestro directo ni que la divergencia ocurriera en Nueva Escocia.

### Corrección

Distinguir FAD corporal, mínimo icnológico, nodo filogenético, rango fantasma y área preservada.

## ERR-CARBONIFEROUS-RAINFOREST-CAUSE-001 — El bosque empujó una curva evolutiva

Recambio vegetal, fragmentación y diversidad coinciden en parte, pero riqueza cruda y distribución de localidades pueden fabricar endemismo. Correlación espacial/temporal no fija tasa de diversificación.

### Corrección

Estandarizar muestreo, comparar modelos espaciales/filogenéticos y exigir predicciones que distingan fragmentación de preservación y colecta.

## ERR-PERMIAN-PANGEA-INSTANT-001 — El mapa encajó en una fecha

Pangea se ensambló mediante colisiones que comenzaron antes y continuaron durante el Pérmico, mientras bloques periféricos conservaban océanos entre sí. Una frontera estratigráfica no inicia ese proceso.

### Corrección

Fechar sutura, colisión y apertura/cierre por bloque; usar intervalos y no una única fecha ceremonial.

## ERR-PERMIAN-PANGEA-DESERT-001 — La continentalidad secó cada costa

Interiores extensos favorecen aridez, pero latitud, relieve, monzones, hielo y mares marginales crearon mosaicos húmedos y secos. Una propiedad media no cubre un supercontinente.

### Corrección

Anclar cada clima a paleolatitud, facies, proxy, estación e intervalo; reservar «árido» para regiones documentadas.

## ERR-PERMIAN-DIMETRODON-DINOSAUR-001 — Una vela entró al parque jurásico

`Dimetrodon` es un sinápsido esfenacodóntido anterior a los dinosaurios. La postura popular y los dientes no sustituyen los caracteres que separan los nodos.

### Corrección

Mostrar un árbol mínimo Synapsida–Sauropsida–Dinosauria y fechar sus ramas antes de comparar apariencia.

## ERR-PERMIAN-DIMETRODON-ANCESTOR-001 — Cercanía se volvió paternidad

Estar más cerca de mamíferos que de dinosaurios significa compartir un ancestro común más reciente. No identifica a `Dimetrodon` como especie de la línea directa humana.

### Corrección

Decir «pariente del tallo mamaliano» y distinguir taxón hermano, ancestro común y ancestro directo no observado.

## ERR-PERMIAN-PELYCOSAUR-CLADE-001 — Un grado recibió descendencia selectiva

El conjunto tradicional excluye Therapsida aunque ésta está anidada entre sus ramas. Esa exclusión lo vuelve parafilético, no una etapa natural completa.

### Corrección

Usar «sinápsidos de grado pelicosaurio» entre comillas o nombrar clados monofiléticos concretos.

## ERR-PERMIAN-SAIL-RADIATOR-001 — Una ecuación decidió conducta

Una superficie vascularizada puede intercambiar calor. El modelo no observa selección, exhibición, reconocimiento ni multifunción, y las velas no comparten una histología única.

### Corrección

Separar capacidad física, desempeño, uso conductual y ventaja selectiva; comparar predicciones rivales.

## ERR-PERMIAN-SYNAPSID-LADDER-001 — Cada rama avanzó hacia nosotros

Terápsidos y cinodontos radiaron con combinaciones funcionales propias; postura y anatomía variaron y revirtieron. Los mamíferos no eran la meta del Pérmico.

### Corrección

Dibujar árboles con mosaicos de caracteres y paisajes funcionales, no una secuencia de siluetas ascendente.

## ERR-PERMIAN-ONE-EXTINCTION-001 — Diez millones de años se volvieron un instante

La crisis capitaniense y la terminal tienen volcanismos, redox y pérdidas separables. Sumarlas infla magnitud y borra la pregunta causal de cada una.

### Corrección

Declarar evento, intervalo, sección, clado y métrica; no sumar pérdidas sin modelar supervivencia y fondo.

## ERR-PERMIAN-96-LIFE-001 — Un estimador marino censó la biosfera

Las cifras altas dependen de especies marinas, bins y correcciones, y a veces integran la crisis previa. No cuentan microbios, hongos, plantas ni todos los ecosistemas terrestres.

### Corrección

Publicar denominador y método; preferir «crisis marina más severa» y el estimador condicionado `~81 %` cuando corresponda.

## ERR-PERMIAN-VOLCANO-ONECAUSE-001 — El desencadenante saltó hasta cada muerte

Los Traps ofrecen tiempo, escala y gases, pero la mortalidad ocurrió mediante carbono, calentamiento, acidificación, hipoxia/euxinia, nutrientes y estrés terrestre selectivo.

### Corrección

Escribir la cadena causal completa, cuantificar cada puente y permitir pesos distintos por región, ambiente y organismo.

## ERR-TRIASSIC-RECOVERY-DATE-001 — La biosfera se recuperó en X millones de años

Riqueza, abundancia, equidad, función y estabilidad usan denominadores y resoluciones diferentes. Elegir el primer retorno de una curva y llamarlo recuperación completa mezcla objetos.

### Corrección

Nombrar métrica, clado, ambiente, región, línea base e incertidumbre; comparar varios relojes antes de resumir duración.

## ERR-TRIASSIC-GUIYANG-GLOBAL-001 — Una Lagerstätte curó el planeta

Guiyang conserva una comunidad marina compleja muy temprana, pero una cuenca con preservación excepcional no mide simultáneamente todos los mares ni la tierra.

### Corrección

Tratarla como contraejemplo local a un retraso uniforme y exigir replicación geográfica para una afirmación global.

## ERR-TRIASSIC-ARCHOSAUR-DINOSAUR-001 — Todo arcosaurio fue dinosaurio

Archosauria incluye la línea cocodriliana Pseudosuchia y la línea aviana Avemetatarsalia; Dinosauria es sólo una rama de esta última.

### Corrección

Mostrar el árbol mínimo y nombrar el nodo exacto antes de trasladar rasgos o fechas entre grupos.

## ERR-TRIASSIC-NYASASAURUS-FIRST-001 — El fósil dudoso se volvió primer individuo

`Nyasasaurus` puede estar dentro de Dinosauria o junto a él, y su edad deriva del contexto regional. Aun dentro del clado sería el cuerpo conocido más antiguo, no el primer dinosaurio histórico.

### Corrección

Expresar posiciones alternativas, tipo de edad y dirección del límite mínimo; no convertir FAD en origen.

## ERR-TRIASSIC-DINOSAUR-DOMINANCE-001 — Los dinosaurios dominaron desde que aparecieron

Los primeros dinosaurios inequívocos coexistieron durante millones de años con pseudosuquios y sinápsidos más diversos, abundantes o grandes en muchas faunas; la expansión fue diacrónica.

### Corrección

Definir dominio por riqueza, abundancia, biomasa, tamaño o ecospace y medirlo por región e intervalo.

## ERR-TRIASSIC-CPE-CAUSE-001 — La lluvia creó a los dinosaurios

El CPE coincide con cambios climáticos, extinciones y diversificaciones, pero coincidencia y mecanismos plausibles no prueban una causa única ni una respuesta igual en todos los clados.

### Corrección

Separar origen, diversificación y expansión; comparar cronologías, tasas y alternativas de muestreo/volcanismo/clima.

## ERR-TRIASSIC-BRASILODON-MAMMAL-001 — Un reemplazo dental fabricó un placentario

La difiodoncia interpretada en `Brasilodon` es un carácter relevante, no un paquete observado de corona mamaliana, pelo, lactancia, endotermia y placenta.

### Corrección

Codificar cada carácter por separado y definir Mammalia/Mammaliaformes antes de asignar identidad o fisiología.

## ERR-TRIASSIC-MAMMAL-PACKAGE-001 — Los rasgos mamalianos llegaron juntos

Mandíbula, oído, dientes, crecimiento y metabolismo cambiaron en mosaico y también por homoplasia. Un taxón de transición no es un mamífero moderno incompleto.

### Corrección

Reconstruir cada rasgo en el árbol, con su evidencia y confianza, sin una escalera hacia la condición viva.

## ERR-TRIASSIC-CAMP-LAVA-001 — La primera colada inició CAMP

Intrusiones y sills pueden preceder las lavas preservadas y liberar gases volcánicos o termogénicos. El afloramiento superficial no registra todo el sistema magmático.

### Corrección

Fechar por separado lavas, diques y sills, declarar qué roca mide cada edad y modelar el flujo de volátiles.

## ERR-TRIASSIC-DINOSAUR-VICTORY-001 — La extinción premió al mejor competidor

Que dinosaurios se expandieran después de perderse muchos incumbentes muestra supervivencia y oportunidad, no una pelea observada ni superioridad universal previa.

### Corrección

Distinguir supervivencia, liberación ecológica, innovación, clima y competencia; exigir predicciones exclusivas antes de atribuir victoria.

## ERR-JURASSIC-JK-GSSP-001 — Una cifra recibió un clavo dorado imaginario

`143.1 ± 0.6 Ma` es la calibración vigente de la base cretácica, pero al corte no existe GSSP ratificado. Edad y estado institucional son campos distintos.

### Corrección

Citar versión de tabla, página del grupo de trabajo y ratificación; actualizar el estado cuando cambie.

## ERR-JURASSIC-PANGEA-SNAP-001 — Pangea se rompió en un instante

Cuencas de rift preceden la ruptura y la primera corteza oceánica cambia por segmento. Una animación continua puede ocultar decenas de millones de años y varios criterios.

### Corrección

Nombrar el objeto fechado: extensión, ruptura, corteza transicional, fondo oceánico o conexión marina.

## ERR-JURASSIC-ANOXIC-OCEAN-001 — El océano entero perdió el oxígeno

Lutitas negras y proxies globales documentan expansión severa, pero modelos estiman una fracción minoritaria del fondo y fuerte heterogeneidad espacial/vertical.

### Corrección

Separar localidad, cuenca y reservorio global; reportar anoxia y euxinia como fracciones con modelo/error.

## ERR-JURASSIC-SAUROPOD-OXYGEN-001 — Una atmósfera fabricó gigantes

No hay una concentración atmosférica única que explique el tamaño saurópodo. Alimentación, cuello, neumática, crecimiento y reproducción interactúan y algunos rasgos preceden al gigantismo.

### Corrección

Comparar predicciones de factores únicos con la cascada funcional y con sauropodomorfos pequeños que comparten rasgos.

## ERR-JURASSIC-FEATHER-FLIGHT-001 — Toda pluma voló

Plumas pennáceas aparecen en paravianos con distribuciones y capacidades diferentes; aislamiento, exhibición e incubación también son funciones plausibles.

### Corrección

Reconstruir superficie, asimetría, articulaciones, resistencia y potencia antes de inferir vuelo.

## ERR-JURASSIC-ARCHAEOPTERYX-HALF-001 — Mitad reptil, mitad ave

`Archaeopteryx` no mezcla dos esencias; posee un conjunto completo de caracteres heredados y derivados en una rama. «Transicional» no significa organismo incompleto.

### Corrección

Mostrar matriz/nodo y describir cada carácter sin una escala lineal de progreso.

## ERR-JURASSIC-PYGOSTYLE-MODERN-001 — Una cola creó un ave moderna

`Baminornis` combina pigóstilo/cinturas derivadas con mano primitiva. El carácter no prueba Aves corona ni aerodinámica moderna.

### Corrección

Separar reducción, fusión, abanico de plumas, capacidad de vuelo y pertenencia filogenética.

## ERR-JURASSIC-AVIALAN-ANCESTORS-001 — Tres fósiles formaron una escalera

`Archaeopteryx`, `Zhengheornis` y `Baminornis` añaden estados caudales, pero pueden ser ramas laterales y no ancestros sucesivos.

### Corrección

Representar árboles y mínimos de caracteres, incluida convergencia/reversión, sin flechas genealógicas directas.

## ERR-JURASSIC-MAMMALIAFORM-MOUSE-001 — Todos eran ratones nocturnos

El tamaño pequeño no convierte mammaliaformes del tallo en roedores modernos. Fósiles documentan agua, excavación, árboles y planeo, con anatomías no coronales.

### Corrección

Nombrar Mammaliaformes/Mammalia, reconstruir ecomorfología y evitar orejas/caras modernas en ilustraciones sin evidencia.

## ERR-JURASSIC-JK-EXTINCTION-001 — Una línea del calendario mató al mundo

La señal de diversidad J–K cambia con roca, colecciones, nivel marino y clado, y el GSSP aún está pendiente. No hay un pulso total equivalente a K–Pg demostrado.

### Corrección

Separar frontera, edad y rangos biológicos; corregir muestreo y exigir sincronía global antes de nombrar extinción masiva instantánea.

## ERR-CRETACEOUS-BASE-GOLDEN-SPIKE-001 — `143.1 Ma` ya tiene clavo dorado

Una edad tabulada no sustituye una sección y punto ratificados; la base cretácica sigue pendiente al corte.

### Corrección

Citar por separado versión de la tabla, estado del Berriasiense y evidencia de correlación.

## ERR-CRETACEOUS-KPG-CAUSE-001 — La línea de `66 Ma` explica la extinción

El GSSP ordena capas; no reparte pesos entre impacto, Deccan, clima y cadenas de mortalidad.

### Corrección

Usar aquí sólo el horizonte formal y auditar mecanismos en la Investigación 031.

## ERR-CRETACEOUS-FIRST-FLOWER-001 — El primer polen fue la primera flor

El fósil más antiguo es un mínimo preservado; su productor y ramas no preservadas pueden ser anteriores.

### Corrección

Separar órgano, afinidad, edad del estrato, mínimo fósil y edad de nodo.

## ERR-CRETACEOUS-CLOCK-FOSSIL-001 — Un reloj de 2026 encontró una flor jurásica

El estudio transformó ocurrencias en calibraciones y estimó un nodo; no excavó un cuerpo jurásico diagnóstico.

### Corrección

Nombrar datos, modelo, genes, calibraciones y distribución de edad.

## ERR-CRETACEOUS-FLOWER-DOMINANCE-001 — Más especies dominaron todos los bosques

Riqueza, abundancia, porte, biomasa y dosel pueden divergir; muchas floras conservaron gimnospermas abundantes.

### Corrección

Cruzar polen, hojas, madera, facies y medidas cuantitativas regionales.

## ERR-CRETACEOUS-ANCESTRAL-FLOWER-001 — La flor ancestral fue hallada

La imagen publicada representa estados probables de un nodo a partir de especies vivas y árboles.

### Corrección

Mostrar probabilidades, métodos y caracteres; no asignar especie, color o tamaño exactos.

## ERR-CRETACEOUS-INSECTS-BORN-WITH-FLOWERS-001 — Las flores inventaron los insectos polinizadores

Órdenes insectiles y polinización gimnospérmica preceden a la radiación angiospérmica.

### Corrección

Separar origen del linaje, cambio de huésped, interacción directa y tasa macroevolutiva.

## ERR-CRETACEOUS-AMBER-POLLINATION-001 — Todo insecto con polen fecundó flores

Coocurrencia, ingestión y transporte no demuestran por sí solos deposición en estigma ni semilla producida.

### Corrección

Asignar a cada fósil el verbo máximo sostenido y auditar procedencia/contaminación.

## ERR-CRETACEOUS-ICHTHYORNIS-HALF-001 — `Ichthyornis` era mitad reptil y mitad ave

Pico, dientes, paladar y cerebro son caracteres de un organismo completo adquiridos en mosaico.

### Corrección

Describir módulos y nodo; evitar esencias y escalera de progreso.

## ERR-CRETACEOUS-BEAK-CROWN-001 — Tener pico demuestra Aves corona

Picos y pérdida dental evolucionaron fuera de la corona; la pertenencia depende de un conjunto de caracteres y una definición.

### Corrección

Publicar matriz, topología y sensibilidad para `Asteriornis`, `Vegavis` u otro fósil.

## ERR-CRETACEOUS-MAMMAL-MOUSE-001 — Todos los mamíferos eran ratones ocultos

`Repenomamus`, multituberculados, terios y gondwanaterios abarcan tallas, dietas y anatomías distintas; ninguno es un roedor moderno por defecto.

### Corrección

Nombrar clado, evidencia de tamaño/dieta y límites de reconstrucción externa.

## ERR-CRETACEOUS-REPENOMAMUS-HUNT-001 — El contenido abdominal filma una caza

Los restos prueban consumo de un dinosaurio juvenil, pero no distinguen captura, carroñeo o secuencia conductual.

### Corrección

Usar «consumió» y reservar conducta para huellas independientes.

## ERR-CRETACEOUS-EUTHERIAN-PLACENTAL-001 — Euterio significa placentario moderno

Eutheria incluye la corona Placentalia y ramas del tallo; una relación más próxima no conserva directamente reproducción.

### Corrección

Separar Eutheria/Placentalia y Metatheria/Marsupialia en texto, árboles e imágenes.

## ERR-CRETACEOUS-LAURASIA-WORLD-001 — El registro del norte representa todos los mamíferos

`Vintana` y `Adalatherium` revelan anatomías gondwánicas e insulares ausentes de síntesis basadas sólo en Laurasia.

### Corrección

Mapear geografía, placas, facies y detectabilidad antes de extrapolar diversidad mundial.

## ERR-KPG-66-CAUSE-001 — `66.0 Ma` explica la extinción

La cifra calibra una frontera; no contiene agente ni mecanismo.

### Corrección

Vincular sección, ejecta, cráter, forzamientos y patrón fósil con incertidumbres propias.

## ERR-KPG-IRIDIUM-CRATER-001 — El iridio identifica un cráter por sí solo

Iridio favorece aporte extraterrestre, pero no entrega ubicación, tamaño o edad exacta.

### Corrección

Exigir minerales de choque, geometría, roca fundida, edad y vínculo estratigráfico.

## ERR-KPG-CRATER-VISIBLE-001 — Chicxulub es un agujero abierto

La estructura está enterrada bajo sedimentos y parcialmente bajo mar; una portada expuesta falsea el archivo.

### Corrección

Representar sección geofísica y núcleo, no un volcán/caldera superficial.

## ERR-KPG-IMPACTOR-VOLATILES-001 — El asteroide trajo todos los gases

Una condrita relativamente seca no elimina volátiles: roca objetivo, sulfatos/carbonatos y biomasa contribuyen.

### Corrección

Cerrar balances por reservorio y no transferir composición a forzamiento sin mecanismo.

## ERR-KPG-LAVA-GAS-001 — El volumen de lava es el volumen de gas

Desgasificación puede ocurrir antes, entre pulsos o en intrusiones no expuestas.

### Corrección

Separar volumen, contenido inicial, pérdida, especie química, tasa y altura de inyección.

## ERR-KPG-DECCAN-COINCIDENCE-001 — Coincidencia significa causa total

Deccan cruza K–Pg, pero el impacto coincide más estrechamente con ejecta y pulso de pérdida.

### Corrección

Comparar sincronía, magnitud, selectividad y predicciones contrafactuales.

## ERR-KPG-DECCAN-TRIGGERED-001 — Chicxulub inició Deccan

La provincia llevaba erupcionando antes. La hipótesis propone cambio de ritmo o estilo, no origen.

### Corrección

Usar «pudo modular» y declarar qué cambio y qué desfase se prueban.

## ERR-KPG-MODEL-MEASUREMENT-001 — Quince años y quince grados fueron medidos

Son salidas máximas de un modelo alimentado por inventarios y granulometría.

### Corrección

Nombrar input, escenario, rango, sensibilidad y observable fósil que lo confronta.

## ERR-KPG-GLOBAL-FIRE-001 — Cada bosque ardió

Potencial térmico, carbón local y hollín no cartografían automáticamente la cobertura planetaria.

### Corrección

Separar ignición posible, evidencia de combustión, extensión y contribución atmosférica.

## ERR-KPG-ACID-CALCIFIER-001 — Calcificador equivale a víctima de pH

Calcificadores con ecologías, tamaños y hábitats distintos tuvieron destinos diferentes.

### Corrección

Comparar química, luz, alimentación, profundidad, mineralogía y distribución.

## ERR-KPG-75-PERCENT-001 — `75 %` de cada grupo desapareció

La cifra global resume estimaciones de especies; no se transfiere a individuos, géneros o funciones.

### Corrección

Declarar denominador, taxonomía, región, ventana y corrección de muestreo.

## ERR-KPG-SURVIVOR-TRAIT-001 — Un rasgo garantizó supervivencia

Talla, dieta o sustrato cambian probabilidades junto con distribución y azar demográfico.

### Corrección

Analizar distribuciones y excepciones; evitar convertir supervivientes en recetas.

## ERR-KPG-DINOSAUR-DECLINE-001 — Todos ya estaban en decadencia

Los modelos discrepan y Nuevo México conserva una fauna diversa muy tardía.

### Corrección

Separar tendencia regional prefrontera de desaparición global en la frontera.

## ERR-KPG-RECOVERY-DATE-001 — La biosfera volvió en una fecha

Presencia, productividad, riqueza, disparidad, red y exportación tienen relojes diferentes.

### Corrección

Nombrar variable, línea base, región y resolución antes de fechar recuperación.

## ERR-PALEOGENE-AGE-EVENT-001 — El número contiene el acontecimiento

Un número calibrado permite comunicar edad; el GSSP define una posición; la causa necesita otra cadena.

### Corrección

Nombrar lecho, marcador, edad y evento como columnas separadas.

## ERR-PALEOGENE-MAMMALS-START-001 — Los mamíferos comenzaron tras el impacto

Mammalia y varias radiaciones dentales son mesozoicos. K–Pg filtró linajes y abrió oportunidades; no creó el clado.

### Corrección

Separar origen, supervivencia, inmigración, diversificación y dominancia.

## ERR-PALEOGENE-EUTHERIAN-PLACENTAL-001 — Eutheria significa Placentalia

Placentalia es la corona dentro de Eutheria; numerosos fósiles euterios pueden quedar fuera.

### Corrección

Declarar definición de nodo y matriz antes de usar “placentario”.

## ERR-PALEOGENE-PLACENTAL-AVERAGE-001 — Promediar relojes resuelve el nodo

Genomas, morfología y ocurrencias fechan objetos distintos y comparten calibraciones internas.

### Corrección

Comparar predicciones y sensibilidad por modelo, no producir una media sin significado.

## ERR-PALEOGENE-PURGATORIUS-MONKEY-001 — El primer mono

`Purgatorius` se apoya cerca de plesiadapiformes/Pan-Primates y se conoce sobre todo por dientes.

### Corrección

Usar “primate de tallo” condicionado y reservar Euprimates/corona para diagnósticos correspondientes.

## ERR-PALEOGENE-BASAL-ANCESTOR-001 — Basal significa antepasado

Basal describe una posición relativa en un árbol; un fósil puede ser rama hermana y poseer rasgos derivados.

### Corrección

Nombrar el nodo, análisis y caracteres; evitar jerarquías de progreso.

## ERR-PALEOGENE-PRIMATE-LADDER-001 — Una escalera hacia humanos

Purgatóridos, tarsiiformes, adapiformes y antropoides incluyen ramas laterales y convergencias.

### Corrección

Dibujar árboles y mínimos temporales, no flechas de especie a especie.

## ERR-PALEOGENE-WHALE-PARADE-001 — Cada arqueoceto es el siguiente paso

Oído, tobillo, pelvis, dientes y cola cambiaron en ramas y ritmos distintos.

### Corrección

Comparar módulos por taxón y conservar árboles alternativos.

## ERR-PALEOGENE-HIPPO-ANCESTOR-001 — Una ballena salió de un hipopótamo

Hipopótamos son parientes vivos próximos; los linajes comparten un ancestro extinto.

### Corrección

Distinguir grupo hermano vivo, pariente fósil y ancestro individual.

## ERR-PALEOGENE-FUNCTION-BEHAVIOR-001 — El esqueleto filmó una brazada

La biomecánica restringe capacidad; tejidos blandos y conducta real no suelen preservarse.

### Corrección

Declarar articulación, comparadores, rango y predicción independiente.

## ERR-PALEOGENE-PETM-CIE-SOURCE-001 — Carbono ligero significa un reservorio único

La CIE integra mezclas y fraccionamientos. Varias combinaciones producen firmas similares.

### Corrección

Cerrar simultáneamente masa, composición isotópica, tasa, edad y contexto ígneo.

## ERR-PALEOGENE-PETM-MODERN-001 — El PETM es el presente repetido

Comparten física del carbono, pero difieren en tasa, geografía, estado inicial y resolución.

### Corrección

Especificar qué variable se usa como análogo y cuáles no.

## ERR-PALEOGENE-SIFRHIPPUS-GLOBAL-001 — Todo mamífero se volvió enano

El patrón procede de un linaje y cuenca y usa dientes para estimar masa.

### Corrección

Limitar taxón/región y probar plasticidad, selección, inmigración y taxonomía.

## ERR-PALEOGENE-EOT-INSTANT-001 — El hielo apareció en la frontera

La base oligocena es un punto formal; enfriamiento y crecimiento glacial cruzan varios pasos.

### Corrección

Separar GSSP, `δ18O`, temperatura, nivel del mar y volumen de hielo modelado.

## ERR-NEOGENE-AGE-EVENT-001 — La cifra hizo ocurrir el cambio

Una edad numérica calibra un horizonte; no es el horizonte, el evento ni su mecanismo.

### Corrección

Declarar objeto fechado, método, incertidumbre, señal correlacionada y cadena causal aparte.

## ERR-NEOGENE-GRASS-ORIGIN-001 — Los pastos nacieron en el Mioceno

La expansión de ambientes herbáceos no fecha el origen de Poaceae, que es anterior.

### Corrección

Separar fósil mínimo, diversificación, abundancia local, apertura y dominio ecológico.

## ERR-NEOGENE-GRASSLAND-C4-001 — Todo pastizal es C4

Un paisaje abierto puede ser C3, C4 o mixto; la arquitectura de la vegetación no diagnostica la vía fotosintética.

### Corrección

Cruzar estructura, fitolitos, polen, `δ13C` y contexto climático.

## ERR-NEOGENE-C4-GLOBAL-001 — Una expansión mundial instantánea

La tendencia de `8–6 Ma` integra regiones con inicios, magnitudes y archivos distintos.

### Corrección

Informar cuenca, taxón o sustrato, proxy, umbral de biomasa y resolución.

## ERR-NEOGENE-TOOTH-VEGETATION-001 — Un diente es un mapa

Esmalte y desgaste informan dieta y abrasión de un organismo; el paisaje exige muestreo poblacional y proxies vegetales.

### Corrección

Separar individuo, población, comunidad y región, y buscar convergencia entre archivos.

## ERR-NEOGENE-HYPSODONTY-GRASS-001 — Corona alta, pasto probado

La hipsodoncia puede responder a abrasivos externos, suelo, aridez, dieta y herencia, no sólo a sílice del pasto.

### Corrección

Contrastar dientes con fitolitos, polvo, paleosuelos, microdesgaste y filogenia.

## ERR-NEOGENE-CLIMATE-UNIFORM-001 — Un Mioceno que sólo se enfría

Óptimo, transición media y enfriamiento tardío incluyen fases, regiones y proxies no idénticos.

### Corrección

Nombrar ventana, latitud, archivo, calibración y variable física.

## ERR-NEOGENE-APE-LADDER-001 — Simios en fila hacia nosotros

Los hominoideos miocenos son ramas con mosaicos y homoplasias, no estaciones de una marcha humana.

### Corrección

Usar árboles, nodos y módulos anatómicos; evitar flechas de ancestro directo sin evidencia.

## ERR-NEOGENE-DANUVIUS-HUMAN-001 — Un bípedo humano en los árboles

La anatomía permite discutir combinaciones locomotoras, pero no filma frecuencia, postura habitual ni marcha humana.

### Corrección

Separar carácter, capacidad, rendimiento y conducta; incluir interpretaciones publicadas rivales.

## ERR-NEOGENE-ALESI-GIBBON-001 — Una semejanza hace un gibón

El cráneo infantil presenta rasgos convergentes con gibones, pero su análisis lo sitúa como hominoideo de tallo.

### Corrección

Incorporar ontogenia, matriz completa, topologías alternativas y caracteres no craneales.

## ERR-NEOGENE-EURASIA-ORIGIN-001 — Un fósil decide el continente de origen

Una posición y distribución compatibles con una hipótesis no eliminan sesgo de muestreo ni rutas rivales.

### Corrección

Exigir nodos estables, series africanas/euroasiáticas comparables y modelos biogeográficos explícitos.

## ERR-NEOGENE-PANAMA-DATE-001 — La fecha única del istmo

Emergencia, transporte sedimentario, restricción oceánica, somerización y continuidad terrestre cruzan umbrales diferentes.

### Corrección

Nombrar qué definición de cierre usa cada fecha y qué proxy la sustenta.

## ERR-NEOGENE-FIRST-CROSSING-001 — El migrante construye el puente

La primera ocurrencia prueba presencia mínima; no distingue una ruta continua de islas, balsas o un registro anterior perdido.

### Corrección

Comparar paleogeografía, capacidad de dispersión, datación y detectabilidad.

## ERR-NEOGENE-PANAMA-ICE-001 — Panamá encendió el hielo

Modificar circulación es un mecanismo plausible, no una demostración de necesidad o suficiencia para la glaciación norteña.

### Corrección

Comparar contrafactuales con CO₂, órbita, otras tectónicas y retroalimentaciones, y exigir predicciones observables.

## ERR-QUATERNARY-ONE-ICE-AGE-001 — Una sola Edad de Hielo

El Cuaternario contiene muchos ciclos, no un bloque congelado continuo.

### Corrección

Nombrar ciclo, región, variable y cronología.

## ERR-QUATERNARY-ORBIT-DIRECT-001 — La órbita empuja el glaciar sin mediadores

La geometría redistribuye insolación; la respuesta depende de estación, latitud, albedo, océano y carbono.

### Corrección

Escribir toda la cadena y probar las amplificaciones.

## ERR-QUATERNARY-DELTA18O-PURE-001 — Un isótopo, una variable

El `δ18O` bentónico mezcla temperatura profunda y volumen de hielo.

### Corrección

Usar termómetros independientes y declarar correlación/edad–profundidad.

## ERR-QUATERNARY-MPT-INSTANT-001 — La transición como interruptor

La MPT es un cambio distribuido de frecuencia, amplitud y forma.

### Corrección

Tratarla como intervalo y comparar definiciones operativas.

## ERR-QUATERNARY-100K-ECCENTRICITY-001 — El mismo periodo basta

La excentricidad tiene un forzamiento directo débil para explicar la enorme respuesta de `100 kyr`.

### Corrección

Exigir memoria, umbrales y predicciones de fase/amplitud.

## ERR-QUATERNARY-ICE-CO2-CAUSE-001 — La burbuja contiene la flecha causal

Medir concentración no determina quién antecede, cuánto fuerza ni qué retroalimentación opera.

### Corrección

Resolver edad gas–hielo y comparar fases y modelos.

## ERR-QUATERNARY-LGM-DATE-001 — Un día de máximo mundial

Mantos y nivel del mar alcanzan máximos bajo definiciones y tiempos no idénticos.

### Corrección

Usar el intervalo `26.5–19/20 ka` y nombrar el objeto.

## ERR-QUATERNARY-GREENLAND-GLOBAL-001 — Groenlandia como termómetro planetario

Un cambio rápido local puede propagarse con retraso, signo o expresión distintos.

### Corrección

Sincronizar archivos independientes antes de generalizar.

## ERR-QUATERNARY-YD-GLOBAL-001 — Un Younger Dryas uniforme

Los trópicos y hemisferios registran mosaicos térmicos e hidroclimáticos.

### Corrección

Describir región, proxy y variable, no sólo la etiqueta.

## ERR-QUATERNARY-YD-IMPACT-001 — Hipótesis convertida en hecho

Marcadores no exclusivos y problemas de isocronía no prueban impacto.

### Corrección

Exigir productos inequívocos, cráter, replicación y mecanismo cuantitativo.

## ERR-QUATERNARY-C14-CALENDAR-001 — Radiocarbono sin calibración

Producción atmosférica y reservorios deforman la relación con años calendario.

### Corrección

Reportar curva, reservorio y distribución calibrada.

## ERR-QUATERNARY-MEGAFAUNA-CUTOFF-001 — Una etiqueta con masa fija

Cambiar el umbral cambia especies incluidas, tasas y selectividad.

### Corrección

Declarar el corte y repetir análisis de sensibilidad.

## ERR-QUATERNARY-LAST-FOSSIL-001 — El último resto vio el final

Preservación y búsqueda hacen que la última detección anteceda normalmente a la extinción.

### Corrección

Modelar detectabilidad y usar intervalos de confianza.

## ERR-QUATERNARY-OVERKILL-UNIVERSAL-001 — Una caza para todos los continentes

Una asociación humana global no identifica el mismo mecanismo en cada región y especie.

### Corrección

Comparar cronología, abundancia, tecnología, clima y ecología regionales.

## ERR-QUATERNARY-CLIMATE-UNIVERSAL-001 — Un cambio climático para todas las pérdidas

Oscilaciones semejantes anteriores no siempre produjeron las mismas extinciones.

### Corrección

Probar selectividad, novedad del evento y contrafactual sin humanos.

## ERR-QUATERNARY-ANTHROPOCENE-FORMAL-001 — Un término popular como época ratificada

IUGS/ICS rechazó en 2024 la propuesta formal basada en 1952.

### Corrección

Separar concepto interdisciplinario, evento geológico y rango cronoestratigráfico.

## ERR-HOMININ-SPLIT-CHIMP-ANCESTOR-001 — Un pariente vivo colocado detrás de nosotros

Chimpancé y bonobo siguieron evolucionando desde su separación de nuestra rama.

### Corrección

Reconstruir caracteres ancestrales con outgroups y no copiar un taxón moderno.

## ERR-HOMININ-SPLIT-COMMON-COUPLE-001 — Una pareja como especie

Una población contiene muchos linajes y tiempos coalescentes; dos individuos no representan el proceso de especiación.

### Corrección

Usar población ancestral, tamaño efectivo y distribución de genealogías.

## ERR-HOMININ-SPLIT-ONE-DATE-001 — Un interruptor de especie

Inicio de restricción, fin de flujo, reconocimiento fósil y TMRCA son objetos distintos.

### Corrección

Nombrar el evento y publicar su intervalo/modelo.

## ERR-HOMININ-SPLIT-GENE-TREE-SPECIES-001 — Un locus como árbol completo

Recombinación e ILS hacen esperables topologías locales discordantes.

### Corrección

Inferir el árbol de especies desde distribuciones de árboles génicos.

## ERR-HOMININ-SPLIT-DIVERGENCE-SPLIT-001 — Diferencia convertida en calendario

La divergencia incluye sustituciones posteriores y diversidad ancestral.

### Corrección

Modelar tasa, coalescencia, recombinación y población ancestral.

## ERR-HOMININ-SPLIT-ILS-HYBRID-001 — Discordancia con una sola causa

ILS produce discordancia incluso sin migración posterior.

### Corrección

Comparar longitudes y frecuencias de tractos bajo ILS, estructura, selección y flujo.

## ERR-HOMININ-SPLIT-CLOCK-CONSTANT-001 — Un metrónomo para todo el genoma

Ramas y clases de sustitución acumulan cambios a ritmos distintos.

### Corrección

Usar modelos relajados, clases de sitio y sensibilidad de calibración.

## ERR-HOMININ-SPLIT-MUTATION-SUBSTITUTION-001 — Nacer equivale a fijarse

Una mutación observada en un descendiente todavía atraviesa deriva y selección.

### Corrección

Separar tasa de aparición por generación y tasa de sustitución histórica.

## ERR-HOMININ-SPLIT-GENERATION-CONSTANT-001 — La misma duración de generación

Madurez y edades reproductivas cambian entre ramas y a través del tiempo.

### Corrección

Incorporar historia de vida y propagar su incertidumbre a años.

## ERR-HOMININ-SPLIT-FOSSIL-ANCESTOR-001 — El más antiguo como progenitor

Un fósil puede ser rama hermana y su primera aparición observada es un mínimo de muestreo.

### Corrección

Separar edad, posición filogenética, mínimo y ancestro directo.

## ERR-HOMININ-SPLIT-FOSSIL-MAXIMUM-001 — El silencio como frontera dura

El registro tropical de simios es incompleto y desigual.

### Corrección

Justificar máximos con preservación, exposición y esfuerzo de búsqueda.

## ERR-HOMININ-SPLIT-SIMILARITY-PERCENT-001 — Una cifra sin denominador

Bases alineables, indels, copias y repeticiones no comparten automáticamente métrica.

### Corrección

Declarar región, ortología, ploidía y clase de variante.

## ERR-HOMININ-SPLIT-STRUCTURAL-ADD-001 — Porcentajes sumados sin ontología

Contenido estructuralmente divergente puede incluir bases ya contadas o no alineables.

### Corrección

Reportar categorías no solapadas o explicar su intersección.

## ERR-HOMININ-SPLIT-T2T-FINAL-001 — Referencia completa como población completa

Dos haplotipos resuelven una muestra, no toda la diversidad de una especie.

### Corrección

Construir pangenomas poblacionales y ampliar especies/subespecies.

## ERR-HOMININ-SPLIT-CHROMOSOME2-CLOCK-001 — Una fusión como fecha y causa

La fusión identifica un cambio derivado, pero no contiene una edad absoluta ni explica por sí misma fenotipos humanos.

### Corrección

Separar evidencia de estructura, polaridad, cronología y función.

## ERR-HOMININ-SPLIT-HYBRIDIZATION-FACT-001 — Un ajuste contado como episodio

La propuesta de hibridación tardía compite con ILS, estructura y selección.

### Corrección

Exigir predicciones exclusivas, validación fuera de muestra y comparación de modelos.

## ERR-EARLY-HOMININ-OLDEST-ANCESTOR-001 — La antigüedad como parentesco

Un fósil anterior puede ser rama lateral o quedar fuera del clado.

### Corrección

Combinar rango, caracteres y topologías; mantener “ancestro directo” como hipótesis extraordinaria.

## ERR-EARLY-HOMININ-BIPED-TAXON-001 — Dos piernas como pasaporte

Bipedalidad puede ser facultativa, convergente o más antigua que la rama.

### Corrección

Polarizar el rasgo y exigir un conjunto craneodental/postcraneal independiente.

## ERR-EARLY-HOMININ-SAME-LOCALITY-001 — Una coordenada como articulación

TM 266 contiene piezas cercanas, no un esqueleto demostrado.

### Corrección

Reportar articulación, superficie, transporte, duplicación de elementos y taxones alternativos.

## ERR-EARLY-HOMININ-HYPODIGM-BODY-001 — Un collage que nunca vivió

El holotipo dental y fémures de `Orrorin` representan varios individuos.

### Corrección

Marcar en cada inferencia si pertenece a pieza, individuo o hipodigma.

## ERR-EARLY-HOMININ-ROCK-BIRTHDAY-001 — La toba como acta de nacimiento

El reloj fecha un mineral/horizonte; el organismo pudo morir dentro de un intervalo.

### Corrección

Conservar distancia estratigráfica, correlación y posibilidad de retrabajo.

## ERR-EARLY-HOMININ-PRECISION-IDENTITY-001 — Decimales que reparan procedencia

Una edad muy precisa no demuestra qué taxón produjo el hueso.

### Corrección

Mantener columnas independientes de error cronológico, asociación y afinidad.

## ERR-EARLY-HOMININ-RECONSTRUCTION-OBSERVED-001 — El modelo convertido en original

Toumaï y la pelvis de Ardi requirieron retrodeformación o recomposición.

### Corrección

Publicar landmarks, variantes y sensibilidad de la conclusión a reconstrucciones plausibles.

## ERR-EARLY-HOMININ-SAHEL-FINAL-001 — Una actualización como sentencia

El análisis de 2026 fortalece bipedalidad, pero conserva forma tipo `Pan` y asociación indirecta.

### Corrección

Actualizar el peso de evidencia sin borrar controversias de pertenencia y filogenia.

## ERR-EARLY-HOMININ-ORRORIN-HOMO-001 — Un fémur hacia nosotros

La semejanza de carga no hace a `Orrorin` más próximo a `Homo` que a australopitecos.

### Corrección

Separar función, espacio morfométrico y árbol; incluir simios miocenos.

## ERR-EARLY-HOMININ-ARDI-LCA-001 — Ardi ocupando el nodo

`Ar. ramidus` vivió más de un millón de años después del split modelado.

### Corrección

Usarlo para restringir estados ancestrales, no para identificar al ancestro.

## ERR-EARLY-HOMININ-ARDI-MODERN-GAIT-001 — Todo bipedalismo como el nuestro

Hallux divergente, pie y pelvis indican una solución distinta.

### Corrección

Describir cargas y módulos, no proyectar una zancada humana completa.

## ERR-EARLY-HOMININ-CANINE-SOCIAL-001 — Un diente como familia

Caninos reducidos admiten varias ecologías y sistemas reproductivos.

### Corrección

Tratar vida social como hipótesis con predicciones independientes, no como lectura dental.

## ERR-EARLY-HOMININ-HABITAT-CAUSE-001 — Paisaje como mecanismo automático

Woodland o sabana correlacionados no prueban qué ventaja seleccionó bipedalidad.

### Corrección

Especificar coste/beneficio, comparación y predicciones entre ambientes.

## ERR-EARLY-HOMININ-SAVANNA-UNIFORM-001 — Un continente de un color

Toros-Menalla y Aramis preservan parches y proxies locales.

### Corrección

Declarar radio, estación, productor y heterogeneidad de cada indicador.

## ERR-EARLY-HOMININ-MOSAIC-LADDER-001 — Módulos como peldaños

La combinación de rasgos no ordena taxones en progreso inevitable.

### Corrección

Representar ramas y caracteres separados, incluyendo convergencias y reversiones.

## ERR-EARLY-HOMININ-ONE-LOCOMOTION-001 — Una etiqueta excluyente

Los fósiles pueden cargar en dos piernas y seguir trepando o suspendiéndose.

### Corrección

Reconstruir repertorios con frecuencia incierta y evidencia por región anatómica.

## ERR-HOMO-MIDDLE-CATCHALL-001 — Todo lo intermedio es `heidelbergensis`

Edad media, cerebro grande o aspecto «transicional» no forman un diagnóstico. Agrupar por descarte mezcla regiones, tiempos y genealogías.

### Corrección

Comenzar por el tipo, declarar hipodigma y probar caracteres contra modelos regionales rivales.

## ERR-HOMO-MIDDLE-TYPE-SKULL-001 — El cráneo tipo que nunca existió

Ilustraciones populares convierten Mauer en un cráneo o rostro compuesto. El holotipo es una mandíbula sin cráneo asociado.

### Corrección

Rotular cada espécimen y distinguir tipo, reconstrucción, comparador y promedio hipotético.

## ERR-HOMO-MIDDLE-TIME-SPECIES-001 — Chibaniense como especie

«Homo del Pleistoceno medio» es una categoría temporal de trabajo. Sus miembros no comparten necesariamente una especie o rama.

### Corrección

Usar el intervalo para ordenar muestras y después probar agrupaciones biológicas.

## ERR-HOMO-MIDDLE-MAUER-ANCESTOR-001 — El tipo como ancestro universal

Ser antiguo y portar un nombre no convierte al individuo de Mauer en ancestro de neandertales o sapiens.

### Corrección

Separar nomenclatura, afinidad y genealogía directa; esta última suele quedar en nivel D.

## ERR-HOMO-MIDDLE-SIMA-DENISOVAN-001 — Un mtDNA renombra a toda Sima

La mitocondria de afinidad denisovana es un locus; el ADN nuclear y la anatomía acercan la muestra a neandertales.

### Corrección

Conservar genealogías por locus y modelar su discordancia antes de asignar especie.

## ERR-HOMO-MIDDLE-MTDNA-SPECIES-001 — La mitocondria es la especie

MtDNA traza una línea materna no recombinante y puede cruzar fronteras o persistir de forma discordante respecto al genoma.

### Corrección

Integrar nuclear, morfología, contexto y demografía; no usar un árbol mitocondrial como taxonomía completa.

## ERR-HOMO-MIDDLE-BODO-CANNIBAL-001 — Una marca de corte prueba canibalismo

Las marcas de Bodo apoyan descarnamiento. Consumo, ritual, violencia y tratamiento mortuorio requieren evidencia adicional.

### Corrección

Publicar primero agente y acción mínima; registrar los motivos como alternativas no discriminadas.

## ERR-HOMO-MIDDLE-KABWE-500KA-001 — La edad heredada por parecido

Kabwe fue situado durante décadas en rangos amplios. Su datación directa modelada produjo `299 ± 25 ka`.

### Corrección

Vincular cada edad a muestra, sistema y fecha de revisión; no propagar cifras antiguas por morfología.

## ERR-HOMO-MIDDLE-BODOENSIS-ACCEPTED-001 — Publicado equivale a aceptado

Una propuesta taxonómica revisada por pares es una hipótesis formal, no un voto universal. `H. bodoensis` recibió objeciones explícitas de prioridad e hipodigma.

### Corrección

Registrar propuesta, réplicas, código y uso posterior como estados separados.

## ERR-HOMO-MIDDLE-HARBIN-LONGI-FINAL-001 — El primer nombre cerró Harbin

`H. longi` fue propuesto en 2021; proteínas y mtDNA de 2025 vincularon el individuo con denisovanos.

### Corrección

Mantener nombres morfológicos revisables e integrar moléculas sin fingir que ellas resuelven automáticamente el rango zoológico.

## ERR-HOMO-MIDDLE-ACHEULEAN-TAXON-001 — El bifaz firma una especie

Una industria puede transmitirse entre poblaciones, converger o persistir. Aroeira asocia Achelense y fósil, pero no conserva autoría individual.

### Corrección

Separar objeto, cadena operativa, contexto, productor candidato y atribución taxonómica.

## ERR-HOMO-MIDDLE-REGIONAL-LADDER-001 — África, Europa y Asia como estaciones

Ordenar fósiles por continente y edad produce una marcha ficticia que ignora solapamientos, flujo, extinciones y muestreo.

### Corrección

Representar paleodemos ramificados, intervalos y conexiones hipotéticas sin flechas de ancestro.

## ERR-NEAND-PERCENT-BODY-001 — «Somos dos por ciento neandertales» como cuerpo

La cifra resume tractos clasificados en un genoma analizable. No significa que una parte corporal, dos de cada cien células o el resto del genoma sea «sapiens puro».

### Corrección

Declarar individuo/población, referencia, detector, denominador y fecha de la estimación.

## ERR-NEAND-PERCENT-ORIGINAL-001 — El porcentaje actual fue la mezcla inicial

Recombinación, selección, deriva y migración alteraron cantidad y distribución durante miles de generaciones.

### Corrección

Usar «ancestría retenida estimada» y separar la fracción inicial modelada.

## ERR-NEAND-MTDNA-NO-MIX-001 — Sin mtDNA, sin mestizaje

El mtDNA es una línea materna y puede perderse aunque persista aporte nuclear.

### Corrección

Comparar loci uniparentales y nuclear; tratar su discordancia como dato.

## ERR-NEAND-AFRICA-ZERO-001 — Toda África tiene cero ancestría neandertal

Retroflujo eurasiático, estructura y elección de referencias hacen que la distribución no sea binaria ni idéntica entre poblaciones.

### Corrección

Nombrar muestra y modelo; no convertir una comparación de 2010 en frontera continental eterna.

## ERR-NEAND-ONE-EVENT-001 — Hubo un solo cruce

El periodo compartido explica gran parte de la señal actual, pero Oase, Bacho Kiro, flujo inverso y Denisova 11 prueban otras escalas y momentos.

### Corrección

Separar componente compartido, contactos locales y direcciones.

## ERR-DENISOVA11-COMMON-001 — Un F1 demuestra cruces frecuentes

Denisova 11 prueba un individuo y la posibilidad biológica. Su hallazgo entre pocos genomas puede reflejar zona de contacto y selección de muestra.

### Corrección

No estimar prevalencia sin denominador representativo y modelo de hallazgo.

## ERR-DENISOVAN-CAVE-ONLY-001 — Los denisovanos vivieron sólo en Denisova

Xiahe, Baishiya, Penghu y Harbin amplían el rango mediante proteína, sedimento o ADN.

### Corrección

Mapear tipos de evidencia y sus intervalos; no convertir el sitio epónimo en distribución.

## ERR-DENISOVAN-ASIAN-FOSSIL-001 — Todo fósil asiático robusto es denisovano

La morfología puede converger o retener estados ancestrales. Sólo algunos fósiles tienen conexión molecular.

### Corrección

Rotular «candidato» hasta que proteína, ADN o una matriz predictiva independiente discriminen afinidad.

## ERR-PROTEIN-GENOME-001 — Una proteína equivale a un genoma

Los péptidos cubren pocas posiciones informativas y no recuperan demografía, recombinación o todo el parentesco nuclear.

### Corrección

Publicar cobertura proteica, variantes, referencias y alternativas de persistencia ancestral.

## ERR-EPAS1-GIFT-001 — Los denisovanos «regalaron» adaptación a la altura

Introgresión del haplotipo, selección, variante causal y fisiología son pasos separados; la población donante exacta no está muestreada.

### Corrección

Describir segmento, afinidad, frecuencia, prueba funcional y contexto ambiental sin personificar poblaciones.

## ERR-INTERBREEDING-ONE-SPECIES-001 — Descendencia fértil obliga a una especie

Los conceptos de especie toleran diferente flujo; compatibilidad no elimina estructura ni fija nomenclatura fósil.

### Corrección

Declarar concepto de especie y mantener linaje/población separados del nombre.

## ERR-NEAND-LAST-FOSSIL-001 — El último fósil es el último neandertal

El registro tiene muestreo, calibración y desfase de Signor–Lipps. Los finales son intervalos regionales.

### Corrección

Usar «última detección conocida/modelada» y actualizar por sitio.

## ERR-HOMININ-GENOME-STORY-001 — Un genoma conserva romance, guerra o identidad

Ancestría y parentesco no contienen consentimiento, motivo, etnicidad o institución.

### Corrección

Limitarse a relaciones biológicas y exigir archivos arqueológicos independientes para conducta.

## ERR-HOMO-OTHER-LADDER-001 — Formas mosaico como reliquias o peldaños

Estados comparativamente basales y derivados pueden coexistir en un cuerpo. Ordenarlos en una escala de inferior a moderno sustituye la filogenia por una narrativa.

### Corrección

Describir cada región, comparadores, edad y modelo; dibujar ramas y homoplasias, no una marcha.

## ERR-FLORES-12KA-001 — `H. floresiensis` sobrevivió hasta hace 12 mil años

Las primeras excavaciones asociaron LB1 con sedimentos jóvenes contiguos. La inconformidad expuesta en 2016 mostró que el pedestal fósil era más antiguo.

### Corrección

Usar cuerpos `~100–60 ka` y artefactos `~190–50 ka`; no extender la especie por la edad de una pieza asociada.

## ERR-FLORES-PATHOLOGY-SPECIES-001 — Diagnosticar LB1 elimina el taxón

Una patología posible afecta la interpretación del individuo; no explica automáticamente rasgos repetidos en otras piezas ni la pequeñez de Mata Menge.

### Corrección

Evaluar diagnóstico clínico, variación individual y diagnóstico taxonómico como hipótesis relacionadas pero no equivalentes.

## ERR-FLORES-TOOLS-MAKER-001 — Toda herramienta de Flores tiene nombre de especie

Wolo Sege no conserva fabricante; Mata Menge y Liang Bua tienen asociaciones de fuerza distinta. Una tecnología puede persistir, converger o ser usada por más de una población.

### Corrección

Registrar pieza, capa, intervalo, taxones posibles y fuerza de asociación antes de asignar autor.

## ERR-FLORES-CLIMATE-CAUSE-001 — La aridificación fue la extinción

La convergencia entre sequedad y última presencia genera una hipótesis causal, no observa mortalidad, emigración o desaparición total.

### Corrección

Usar «contribuyente plausible al declive/abandono local» y buscar mecanismo, replicación regional y alternativas.

## ERR-LUZON-KALINGA-ANCESTOR-001 — Kalinga es el ancestro de Callao

Los sitios comparten isla, pero están separados por más de seiscientos mil años y Kalinga carece de fósil diagnóstico.

### Corrección

Mantener presencia antigua y taxón tardío como nodos separados hasta hallar fósiles o una secuencia intermedia.

## ERR-ISLAND-BOAT-001 — Cruzar agua demuestra navegación intencional

Un evento de llegada puede proceder de deriva, transporte natural, tecnología o combinaciones. El resultado geográfico no preserva intención.

### Corrección

Modelar barrera, corrientes, frecuencia de llegadas y evidencia tecnológica sin usar «navegante» como dato.

## ERR-NALEDI-BRAIN-BEHAVIOR-001 — El volumen cerebral decide la conducta

Usar el endocráneo para negar capacidad o para presentar cualquier acción como «sorprendente» presupone la conclusión.

### Corrección

Medir acción desde artefacto, traza y contexto; tratar anatomía como capacidad limitada, no psicología.

## ERR-NALEDI-DEPOSITION-BURIAL-001 — Depósito inusual equivale a entierro ritual

Excluir agua y carnívoros reduce alternativas. No observa excavación de fosa, cobertura deliberada ni significado cultural sin microcontexto adicional.

### Corrección

Graduar acumulación, depósito deliberado, fosa, entierro cultural y ritual como claims separados.

## ERR-NALEDI-MARKS-AUTHOR-001 — Proximidad identifica al grabador

Una línea artificial sin fecha puede haber sido hecha antes, durante o después de la deposición de los cuerpos.

### Corrección

Separar naturaleza de la marca, edad de superficie y agente; exigir un puente independiente para cada flecha.

## ERR-NO-DNA-NO-CONTACT-OTHER-001 — Ausencia actual equivale a ausencia histórica

Una contribución puede no dejar descendencia, perderse por deriva/selección o quedar bajo el poder del detector, sobre todo sin genoma donante.

### Corrección

Informar población, referencia, señal mínima detectable y la diferencia entre «no detectado» y «no ocurrió».

## ERR-SAPIENS-OLDEST-BIRTHPLACE-001 — El fósil más antiguo marca el lugar de nacimiento

La primera detección conocida depende de preservación, excavación, fecha y definición taxonómica. Es un mínimo del archivo, no un acontecimiento de especiación.

### Corrección

Decir «expediente más antiguo conocido bajo estos criterios» y buscar predicciones regionales, no coronar una cuna.

## ERR-SAPIENS-PANAFRICA-PANMIXIA-001 — Pan-africano significa una población homogénea

Una distribución continental de fósiles o tecnologías no mide tasas de apareamiento. Grupos conectados intermitentemente pueden conservar estructura.

### Corrección

Separar distribución, movilidad, intercambio y flujo génico; reservar panmixia para un modelo demográfico explícito.

## ERR-SAPIENS-EVE-WOMAN-001 — La Eva mitocondrial fue la primera o única mujer

La TMRCA mitocondrial es el ancestro de un locus materno superviviente. Otras mujeres contemporáneas pudieron contribuir al genoma nuclear.

### Corrección

Nombrar locus, herencia, reloj y deriva; no convertir una genealogía en población o especie.

## ERR-SAPIENS-TMRCA-SPECIES-001 — Una coalescencia fecha el origen de la especie

Copias génicas pueden coalescer antes o después de separaciones poblacionales; el flujo posterior desacopla tiempos.

### Corrección

Informar TMRCA, divergencia y especiación por separado y con el modelo que conecta cada magnitud.

## ERR-SAPIENS-MODEL-POPULATIONS-001 — Dos componentes del modelo son dos especies reales

Tallos, ramas A/B o poblaciones fantasma son variables latentes. Su número depende de la familia de modelos y no asigna nombres fósiles.

### Corrección

Usar «componente/población ancestral inferida bajo el modelo» hasta obtener evidencia discriminatoria independiente.

## ERR-SAPIENS-MODERN-SAMPLE-GEOGRAPHY-001 — La localidad de una muestra actual localiza a su ancestro profundo

Migración, mezcla y reemplazo transforman la distribución durante cientos de milenios.

### Corrección

Modelar espacio y tiempo; no proyectar etiquetas etnográficas o nacionales actuales sobre tallos ancestrales.

## ERR-SAPIENS-MSA-MAKER-001 — MSA identifica automáticamente a *Homo sapiens*

Una tecnología puede transmitirse o converger y suele carecer de fósil diagnóstico asociado.

### Corrección

Registrar conjunto, fecha, cadena operativa, asociación y posibles fabricantes; mantener conducta y taxonomía en claims distintos.

## ERR-SAPIENS-OBSIDIAN-GENEFLOW-001 — Transporte de obsidiana prueba mestizaje

Una materia prima distante puede circular por movilidad, intercambio en cadena o movimientos de objetos sin apareamiento.

### Corrección

Inferir transporte y red social condicionada; exigir genómica u otra evidencia demográfica para flujo génico.

## ERR-SAPIENS-HOLOCENE-CONTINUITY-001 — Continuidad de 9 mil años demuestra aislamiento de 300 mil

El ADN holoceno mejora el archivo, pero extrapolar treinta veces su duración ignora migraciones y cuellos de botella no muestreados.

### Corrección

Limitar la continuidad al intervalo observado y conservar el Pleistoceno medio como inferencia modelada.

## ERR-OOA-SITE-EQUALS-EXIT-001 — Un sitio equivale a una salida

Una dispersión puede dejar varios sitios y muchas dispersiones no dejar ninguno conocido. Localidad, fase, población y cruce son unidades distintas.

### Corrección

Contar presencias mínimas por intervalo y declarar que el número de movimientos permanece abierto.

## ERR-OOA-EARLIEST-ANCESTOR-001 — El fósil más antiguo fuera de África fundó a los no africanos

Antigüedad y posición genealógica son ejes diferentes; Misliya o Apidima no conservan genomas que los enlacen con poblaciones posteriores.

### Corrección

Decir «presencia temprana» y exigir ADN/proteína o predicciones demográficas discriminatorias para continuidad.

## ERR-OOA-SINGLE-ARROW-001 — Una expansión mayor fue una sola caravana

Un pulso demográfico resume separación/flujo bajo un modelo y puede contener estructura, pausas, retornos y varias rutas.

### Corrección

Usar «expansión ancestral mayor» y separar cruce físico, dispersión multigeneracional y ramificación.

## ERR-OOA-NO-SIGNAL-NO-DESCENT-001 — Sin aporte detectable significa sin descendientes

Deriva, selección, reemplazo y umbral del detector pueden borrar una contribución aun si hubo reproducción.

### Corrección

Registrar referencia, muestra, método y poder de detección; escribir «sin contribución detectable en las poblaciones muestreadas».

## ERR-OOA-SAHUL-DATES-DEPARTURE-001 — La primera fecha de Sahul fecha la salida africana

Llegar a Sahul es el extremo de una cadena de dispersiones y cruces; la edad de un sedimento australiano no fecha el inicio africano.

### Corrección

Tratar la ocupación como límite de llegada condicionado y conservar por separado los relojes genómicos.

## ERR-OOA-CLIMATE-CAUSE-001 — Un corredor húmedo causó la migración

Idoneidad ambiental permite ocupación; no observa presencia, dirección, motivación o presión demográfica.

### Corrección

Usar el clima como restricción o mecanismo candidato y exigir cuerpos, artefactos o genomas independientes.

## ERR-OOA-SUCCESS-SUPERIORITY-001 — La salida «exitosa» fue biológicamente superior

«Éxito» suele medir persistencia o ascendencia detectable, no capacidades intrínsecas, intención o mérito.

### Corrección

Nombrar la métrica —expansión, continuidad o aporte— y evitar lenguaje de valor.

## ERR-OOA-ROUTE-FROM-AFFINITY-001 — La afinidad genética dibuja la ruta

Dos poblaciones pueden compartir ascendencia tras movimientos no muestreados, mezcla y reemplazo. Un grafo no contiene coordenadas salvo que se modelen explícitamente.

### Corrección

Combinar cronología, paleogeografía y sitios intermedios; presentar rutas como hipótesis con alternativas.

## ERR-ASIA-SAHUL-SITE-ROUTE-001 — Un sitio temprano dibuja un itinerario

Tam Pà Ling, Lida Ajer o Muna fijan presencias/mínimos locales. Entre ellos quedan distancias, generaciones, costas perdidas y corredores alternativos.

### Corrección

Usar cada sitio para excluir o permitir combinaciones cronogeográficas; no unir puntos con una flecha como si fuese un rastro.

## ERR-SULAWESI-CALCITE-PIGMENT-001 — U-series fechó pigmento y autor

La medición de Muna procede de calcita superpuesta. Su edad convierte el motivo subyacente en anterior, pero no entrega el momento exacto de pintar ni la identidad biológica del ejecutor.

### Corrección

Escribir «mínimo de `67.8 ka` para el motivo»; etiquetar autoría sapiens como inferencia contextual separada.

## ERR-SAHUL-CROSSING-BOAT-001 — Cruce necesario equivale a canoa observada

La paleogeografía demuestra canales y la simulación restringe desempeño. Ninguna conserva material, diseño o nombre de la embarcación.

### Corrección

Inferir capacidad marítima mínima y mantener vehículo, tripulación y técnica en D hasta obtener evidencia directa.

## ERR-SAHUL-MODEL-CENSUS-001 — El modelo contó a los fundadores

`1,300–1,550` o `≥130` por viaje son condiciones de viabilidad bajo tasas, productividad y umbrales elegidos. No son personas excavadas.

### Corrección

Nombrar el resultado como intervalo modelado y publicar sensibilidad a estructura de edad, flujo, mortalidad y capacidad de carga.

## ERR-SAHUL-SPLIT-LANDFALL-001 — La divergencia genética fecha el desembarco

La separación papú–australiana puede ser posterior a una llegada compartida y admite flujo. Sus fechas dependen de tasa, generación, topología y muestra.

### Corrección

Comparar intervalos genómicos con límites arqueológicos sin identificarlos; no usar coalescencia o split como fecha de sitio.

## ERR-SAHUL-GENETIC-CULTURE-001 — Estructura genética demuestra una cultura inmutable

Persistencia regional de linajes no implica que lenguas, prácticas, identidades o territorios hayan permanecido sin cambio durante decenas de milenios.

### Corrección

Auditar continuidad biológica, demográfica, material, lingüística y territorial con archivos independientes y gobernanza comunitaria.

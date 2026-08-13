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
| `ERR-LUNAR-APOLLO-INDEPENDENT-001` | tratar sitios Apollo como testigos independientes | ejecta local y sin transporte global | cartografía, Th, geoquímica y escalado de Imbrium | DOCUMENTADO |
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

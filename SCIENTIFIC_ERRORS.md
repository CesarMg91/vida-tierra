# Archivo de errores científicos y mecanismos de corrección

El propósito no es presentar la ciencia como una sucesión de fracasos ni como marcha inevitable hacia la verdad. Se documenta por qué una inferencia razonable bajo ciertos datos dejó de ser suficiente.

## Índice

| ID | Caso | Supuesto que falló | Mecanismo de corrección | Estado |
|---|---|---|---|---|
| `ERR-GEO-KELVIN-001` | Tierra de decenas de Ma por enfriamiento | fuente térmica y transporte incompletos | radioactividad, convección y geocronología isotópica | DOCUMENTADO |
| `ERR-GEO-SEDIMENT-001` | edad global por tasa media de sedimentación | tasa constante, registro completo y sin reciclaje | estratigrafía, discordancias y relojes radiométricos | SEMILLA |
| `ERR-GEO-LEAD-001` | mediciones de Pb sin control ultralimpio | blanco despreciable | laboratorios limpios, blancos y química de trazas | DOCUMENTADO |
| `ERR-GEO-URATIO-001` | `238U/235U` idéntico en todos los materiales | homogeneidad isotópica universal | medición específica de U y corrección muestra por muestra | DOCUMENTADO |
| `ERR-HADEAN-LHB-001` | tratar el cataclismo de 3.9 Ga como hecho único cerrado | colección lunar representativa y edades sin mezcla | microanálisis, meteoritos lunares, nuevas muestras y modelos de sesgo | EN_REVISIÓN |

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

No se marca como error total: el bombardeo temprano intenso está bien respaldado. El error comunicativo/metodológico fue confundir una interpretación particular de su historia temporal con la observación misma.

---
id: INV-MED-DIAGNOSTICS-001
titulo: "Cómo sabemos si una prueba diagnóstica realmente ayuda a decidir"
estado: AUDITADO
ultima_revision: 2026-08-24
claims:
  - CLAIM-MED-DX-QUESTION-001
  - CLAIM-MED-DX-INTENDED-USE-001
  - CLAIM-MED-DX-REFERENCE-001
  - CLAIM-MED-DX-SPECTRUM-001
  - CLAIM-MED-DX-VERIFICATION-001
  - CLAIM-MED-DX-THRESHOLD-001
  - CLAIM-MED-DX-METRICS-001
  - CLAIM-MED-DX-PREVALENCE-001
  - CLAIM-MED-DX-INDETERMINATE-001
  - CLAIM-MED-DX-COMPARATIVE-001
  - CLAIM-MED-DX-UTILITY-001
  - CLAIM-MED-DX-PREDICTION-001
  - CLAIM-MED-DX-AI-001
  - CLAIM-MED-DX-RIFT-001
  - CLAIM-MED-DX-ADJUST-PE-001
  - CLAIM-MED-DX-PROPER-001
  - CLAIM-MED-DX-UKCTOCS-001
fuentes:
  - SRC-MED-DX-STARD-2015
  - SRC-MED-DX-STARD-EE-2016
  - SRC-MED-DX-QUADAS3-2026
  - SRC-MED-DX-QUADAS3-EE-2026
  - SRC-MED-DX-COCHRANE-DTA-2023
  - SRC-MED-DX-PRISMA-DTA-2018
  - SRC-MED-DX-TARGETED-TEST-2019
  - SRC-MED-DX-RANSOHOFF-1978
  - SRC-MED-DX-LIJMER-1999
  - SRC-MED-DX-LEEFLANG-2013
  - SRC-MED-DX-UTILITY-2012
  - SRC-MED-DX-DECISION-CURVE-2006
  - SRC-MED-DX-TRIPOD-AI-2024
  - SRC-MED-DX-PROBAST-AI-2025
  - SRC-MED-DX-STARD-AI-2025
  - SRC-MED-DX-RIFT-2020
  - SRC-MED-DX-ADJUST-PE-2014
  - SRC-MED-DX-PROPER-2018
  - SRC-MED-DX-UKCTOCS-2021
  - SRC-MED-GRADE-BOOK-2026
---

# MED-002 — Cómo sabemos si una prueba diagnóstica ayuda a decidir

![Mesa de evaluación diagnóstica con umbral, población, referencia y rutas de decisión](../assets/visuales/hero-med-002-pruebas-diagnosticas.png)

![Cadena inferencial desde el uso previsto hasta las consecuencias](../assets/visuales/cadena-prueba-decision-med-002.svg)

![Matriz de preguntas diagnósticas, productos legítimos y fallos](../assets/visuales/matriz-pruebas-diagnosticas-med-002.svg)

> **Alcance:** investigación educativa sobre métodos. No interpreta síntomas, imágenes o resultados personales; no calcula riesgo individual ni indica pruebas o tratamientos. Los casos son auditorías históricas de diseños y no protocolos clínicos actuales.

## Pregunta central

¿Cómo pasamos de una señal, imagen, biomarcador, regla o modelo a saber si una prueba diagnóstica realmente ayuda a decidir sin confundir exactitud, probabilidad y beneficio?

## Respuesta breve

Una prueba no «dice la verdad» por producir un número, una imagen llamativa o un AUC alto. Su significado depende de para qué se usa, en qué población, con qué umbral, frente a qué ruta y contra qué referencia. Sensibilidad y especificidad describen clasificación bajo condiciones concretas; los valores predictivos incorporan la frecuencia de la condición; y la utilidad clínica exige demostrar que la información cambia decisiones de una manera que mejora resultados importantes o reduce daños y carga.

La cadena puede romperse en cada tramo. Seleccionar casos inequívocos y controles sanos infla el rendimiento; verificar sólo los positivos oculta falsos negativos; elegir el umbral después de mirar optimiza el azar; excluir indeterminados maquilla la práctica; y detectar antes no demuestra salvar vidas. Para modelos y sistemas de inteligencia artificial se añaden calibración, validación externa, deriva y equidad. Ninguna métrica aislada sustituye esa auditoría (`CLAIM-MED-DX-UTILITY-001`, `CLAIM-MED-DX-AI-001`).

## LO PREGUNTADO

### 1. Antes del test existe una ruta

La unidad mínima no es «prueba X para enfermedad Y». Debe congelarse una pregunta de uso:

| Componente | Pregunta auditable | Error al omitirlo |
|---|---|---|
| población | ¿quién llega a la ruta y con qué sospecha previa? | transportar desde casos extremos |
| uso previsto | ¿cribar, descartar, confirmar, clasificar, estadificar o monitorizar? | exigir la métrica equivocada |
| prueba índice | ¿versión, muestra, lector, tiempo y umbral? | agrupar procedimientos distintos |
| comparador | ¿qué ocurriría sin la prueba o con la ruta actual? | confundir rendimiento aislado con mejora |
| condición objetivo | ¿qué estado se intenta detectar y por qué importa? | redefinir enfermedad con la propia prueba |
| acción | ¿qué cambia tras positivo, negativo o indeterminado? | medir información sin consecuencia |
| desenlace | ¿error diagnóstico, pruebas evitadas, tratamiento, síntomas o mortalidad? | heredar utilidad desde exactitud |

El uso previsto determina qué errores importan y qué mínimos de rendimiento podrían justificar una evaluación. Una prueba de descarte y una confirmatoria pueden privilegiar consecuencias distintas; no existe un umbral óptimo sin pérdidas y acciones explícitas (`CLAIM-MED-DX-QUESTION-001`, `CLAIM-MED-DX-INTENDED-USE-001`, `CLAIM-MED-DX-THRESHOLD-001`).

### 2. Prueba, regla y modelo no son sinónimos

- **Prueba índice:** procedimiento cuya capacidad de clasificación se evalúa.
- **Regla o estrategia selectiva:** combina datos para decidir quién recibe otra prueba o acción.
- **Modelo diagnóstico:** estima la probabilidad de una condición presente; necesita discriminación y calibración.
- **Cribado:** ofrece una ruta a personas sin presentación clínica equivalente a la consulta diagnóstica.
- **Sistema de IA:** puede ser lector, clasificador o modelo dentro de una ruta; su algoritmo no define por sí solo el uso.

Mezclarlos oculta la intervención real. En una estrategia secuencial, el efecto pertenece a la combinación de selección, umbrales, pruebas posteriores y manejo, no a un reactivo aislado (`CLAIM-MED-DX-PREDICTION-001`, `CLAIM-MED-DX-COMPARATIVE-001`).

## LO MUESTREADO

### 3. El espectro clínico cambia lo que parece medir la prueba

Comparar enfermedad avanzada inequívoca contra personas sanas elimina la zona donde la decisión es difícil. Lijmer y colaboradores analizaron 218 evaluaciones: los diseños caso–control con grupos separados sobreestimaron el rendimiento respecto de cohortes clínicas, y la verificación diferencial también lo elevó. No es una corrección histórica menor: define si la muestra representa la puerta real de entrada (`CLAIM-MED-DX-SPECTRUM-001`, `CLAIM-MED-DX-VERIFICATION-001`).

Una cohorte diagnóstica defendible registra consecutiva o aleatoriamente a quienes cumplen la presentación de interés, antes de conocer la referencia. Debe describir gravedad, comorbilidad, duración, pruebas previas, escenario y exclusiones. La prevalencia observada no es sólo un dato de fondo: indica selección y condiciona cuántos resultados positivos y negativos serán verdaderos (`CLAIM-MED-DX-PREVALENCE-001`).

### 4. Subgrupos: heterogeneidad, acceso y equidad

El rendimiento puede cambiar por edad, sexo, anatomía, prevalencia, dispositivo, lector, centro o calidad de muestra. Un promedio puede ocultar un fallo relevante, pero dividir retrospectivamente genera ruido. Los subgrupos deben justificarse por el uso, medirse con incertidumbre y validarse. Diferencias de acceso y verificación también pueden producir desigualdad aunque la fórmula sea idéntica.

El estudio RIFT ofrece un cortafuego quirúrgico: validó 15 modelos en 5,345 adultos de 16–45 años con dolor en fosa ilíaca derecha en 154 hospitales británicos. El Adult Appendicitis Score tuvo la mejor clasificación global bajo el criterio predefinido de mantener la tasa de fallo por debajo de 5%, pero el rendimiento y la apendicectomía negativa difirieron por sexo. No existe «el mejor score» fuera de población, acción y umbral (`CLAIM-MED-DX-RIFT-001`).

## LO COMPARADO

### 5. El estándar de referencia también es una medición

La condición objetivo suele establecerse mediante histopatología, cultivo, imagen, seguimiento, consenso o combinación. Cada opción tiene error, tiempo y posibilidad de depender de la prueba índice. Llamarla «gold standard» no la vuelve infalible (`CLAIM-MED-DX-REFERENCE-001`).

Los principales cortocircuitos son:

1. **verificación parcial:** sólo una fracción recibe la referencia;
2. **verificación diferencial:** positivos y negativos reciben referencias distintas;
3. **incorporación:** la prueba índice forma parte de la definición de verdad;
4. **revisión:** quien interpreta una medición conoce la otra;
5. **progresión:** demasiado tiempo separa índice y referencia;
6. **referencia imperfecta:** la clasificación final conserva error.

En sospecha de apendicitis, por ejemplo, histopatología existe sólo tras operar; quienes no son operados requieren seguimiento u otra definición. Esa asimetría puede ser clínicamente necesaria, pero debe permanecer visible y someterse a análisis de sensibilidad (`CLAIM-MED-DX-VERIFICATION-001`).

### 6. Lo indeterminado pertenece al resultado

Muestras insuficientes, imágenes no valorables, zonas grises y fallos técnicos son parte de la ruta. Excluirlos del denominador puede mejorar artificialmente las métricas y ocultar repetición, demora o procedimiento invasivo. Deben publicarse frecuencia, causas, manejo y desenlaces (`CLAIM-MED-DX-INDETERMINATE-001`).

QUADAS‑3, vigente desde 2026, traslada el juicio al nivel de cada estimación y utiliza un «ensayo ideal de exactitud» para auditar sesgo y aplicabilidad. STARD 2015 sigue siendo la guía general de reporte; ninguna de las dos herramientas convierte una descripción completa en evidencia automáticamente válida.

## LO MEDIDO

### 7. La tabla 2 × 2 responde sólo bajo un umbral

| Resultado | Entre personas con la condición | Entre personas sin la condición |
|---|---:|---:|
| prueba positiva | verdadero positivo | falso positivo |
| prueba negativa | falso negativo | verdadero negativo |

- **Sensibilidad:** fracción de personas con la condición clasificadas positivas.
- **Especificidad:** fracción sin la condición clasificadas negativas.
- **Valor predictivo positivo:** probabilidad observada de condición entre positivos en esa muestra/ruta.
- **Valor predictivo negativo:** probabilidad observada de ausencia entre negativos en esa muestra/ruta.
- **Razones de verosimilitud:** cuánto cambia el odds al observar un resultado bajo el modelo y espectro estudiados.

Todas requieren intervalos. Sensibilidad y especificidad pueden variar con espectro y umbral; valores predictivos además cambian con prevalencia. «Sensibilidad 95%» no significa «un negativo deja 5% de riesgo» (`CLAIM-MED-DX-METRICS-001`, `CLAIM-MED-DX-PREVALENCE-001`).

### 8. Curvas ROC y AUC: mapa, no decisión

Una curva ROC recorre pares de sensibilidad y especificidad. El AUC resume discriminación promedio, pero no fija un umbral clínico, no comunica calibración, no incorpora prevalencia y puede ponderar regiones que nunca se usarían. Dos modelos con AUC semejante pueden asignar probabilidades y decisiones diferentes.

El umbral debe conectarse con la acción y con el coste relativo de errores. Criterios mínimos preespecificados, calibración, efectos absolutos y beneficio neto pueden complementar la discriminación; ninguno elimina la necesidad de validación y consecuencias observadas (`CLAIM-MED-DX-THRESHOLD-001`, `CLAIM-MED-DX-PREDICTION-001`).

### 9. De probabilidad previa a posterior

Bayes no es una aplicación que adivina diagnósticos. Formaliza que la información nueva actualiza una probabilidad previa bajo supuestos. La previa procede de una población y presentación definidas; la razón de verosimilitud procede de estudios transportables; y la posterior sólo sirve si está conectada con una decisión.

El módulo público no ofrece calculadora: sin historia, examen, escenario, versión de ensayo y consecuencias, producir un porcentaje sería precisión ficticia.

## DE LA EXACTITUD A LA DECISIÓN

### 10. Una estrategia diagnóstica es una intervención compleja

El producto real incluye selección, toma de muestra, transporte, lector, comunicación, umbral, confirmación, tratamiento y seguimiento. Comparar sólo la exactitud puede omitir si la prueba reemplaza, añade o clasifica antes de otra. La comparación legítima es entre rutas ejecutables (`CLAIM-MED-DX-COMPARATIVE-001`).

ADJUST‑PE ilustra esta dependencia: no evaluó el dímero D aislado. Evaluó una estrategia secuencial en 3,346 pacientes ambulatorios con sospecha de embolia pulmonar, combinando probabilidad clínica, umbral ajustado por edad, imagen cuando correspondía y seguimiento de tres meses. En las 331 personas con resultado entre el umbral convencional y el ajustado que quedaron sin anticoagulación, ocurrió un evento adjudicado: 0.3% con IC 95% 0.1–1.7%. El resultado pertenece a esa población, ruta, ensayos y seguimiento (`CLAIM-MED-DX-ADJUST-PE-001`).

### 11. Exactitud, impacto en manejo y desenlaces son niveles distintos

| Nivel | Pregunta | Diseño típico | Lo que todavía falta |
|---|---|---|---|
| validez analítica | ¿mide de forma estable la señal? | repetibilidad/reproducibilidad | significado clínico |
| exactitud clínica | ¿clasifica frente a referencia? | cohorte de exactitud | efecto en decisiones |
| impacto en manejo | ¿cambia pruebas o tratamientos? | estudio de manejo/comparativo | beneficio o daño final |
| utilidad clínica | ¿mejora desenlaces frente a alternativa? | ensayo prueba–tratamiento o puente robusto | traslado e implementación |

PROPER aleatorizó 14 servicios de urgencias y 1,916 pacientes de muy bajo riesgo a una ruta PERC o convencional. La estrategia redujo CTPA de 23% a 13%; durante tres meses se diagnosticó un evento tromboembólico no detectado inicialmente en PERC y ninguno en control. Es evidencia sobre una ruta y población estrechas, no una licencia para usar la regla fuera de ellas (`CLAIM-MED-DX-PROPER-001`).

### 12. Detectar antes no equivale a mejorar vidas

Cribado añade sesgos de adelanto diagnóstico, duración y sobrediagnóstico. Más casos, más etapas tempranas o mayor supervivencia desde el diagnóstico pueden coexistir sin reducir mortalidad poblacional.

UKCTOCS aleatorizó 202,638 mujeres posmenopáusicas a cribado multimodal, ultrasonido o no cribado y siguió una mediana de 16.3 años. El cribado multimodal desplazó la distribución hacia etapas tempranas, pero ninguna estrategia redujo significativamente las muertes por cáncer ovárico/tubárico frente a no cribado. El cortafuego es metodológico: el resultado de salud debe medirse, no heredarse desde detección (`CLAIM-MED-DX-UKCTOCS-001`).

## MODELOS E INTELIGENCIA ARTIFICIAL

### 13. Discriminación, calibración y validación externa

Un modelo diagnóstico produce una puntuación o probabilidad. Su auditoría requiere, como mínimo:

- datos y participantes representativos del uso;
- separación real entre desarrollo y evaluación;
- manejo de faltantes y sobreajuste;
- discriminación e intervalos;
- calibración global y a través del rango;
- utilidad bajo umbrales defendibles;
- validación temporal o geográfica externa;
- desempeño por grupos y análisis de errores;
- versión, acceso, cambios y vigilancia tras despliegue.

TRIPOD+AI 2024 reemplazó TRIPOD 2015 para reporte de modelos; PROBAST+AI 2025 separa calidad del desarrollo y riesgo de sesgo de la evaluación; STARD-AI 2025 extiende el reporte de estudios de exactitud con IA. Un checklist completo no demuestra generalización ni beneficio (`CLAIM-MED-DX-AI-001`, `CLAIM-MED-DX-PREDICTION-001`).

### 14. Deriva y automatización

Cambios en prevalencia, equipos, protocolos, codificación, demografía o conducta clínica pueden alterar calibración y efectos. La automatización además cambia quién ve la señal y qué acciones siguen. La evaluación termina en vigilancia versionada, no en el artículo de validación.

## Casos y controles de interpretación

| Caso | Archivo observado | Inferencia permitida | Límite decisivo |
|---|---|---|---|
| RIFT | validación de 15 scores en cohorte quirúrgica multicéntrica | rendimiento para identificar bajo riesgo bajo umbral explícito | no fue ensayo de implementación ni guía actual |
| ADJUST‑PE | ruta secuencial y seguimiento de pacientes no tratados | tasa de fallo de la estrategia bajo condiciones estudiadas | no es propiedad universal del dímero D |
| PROPER | comparación aleatorizada de rutas diagnósticas | efecto sobre imagen y eventos en muy bajo riesgo | margen, contexto francés y selección estrecha |
| UKCTOCS | cribado aleatorizado con mortalidad a largo plazo | etapa temprana no heredó reducción de muertes | población y estrategias específicas |
| IA clínica | reporte, sesgo y validación separados | auditabilidad de modelos y estudios | no prueba implementación o utilidad |

## LO OBSERVADO

Se observan participantes elegibles, señales, imágenes, puntuaciones, resultados de referencia, verificaciones, indeterminados, decisiones posteriores y desenlaces. «Tiene la enfermedad» es una clasificación construida mediante una definición y referencia, no una observación libre de error.

## LO INFERIDO

Bajo población representativa, umbral preespecificado, referencia defendible, flujo completo y análisis transparente se infiere rendimiento para un uso concreto. Para inferir utilidad se necesita además una comparación entre rutas y un puente a acciones y desenlaces.

## LOS SUPUESTOS

La condición objetivo es clínicamente coherente; índice y referencia no se contaminan indebidamente; el intervalo evita cambios relevantes; las pérdidas y verificaciones no dependen de resultados de forma no manejada; la muestra representa el uso; las acciones posteriores ocurren como fueron definidas; y los errores conservan consecuencias comparables a las declaradas.

## LAS INCERTIDUMBRES

Incluyen error muestral, referencia imperfecta, variación entre lectores/ensayos, espectro, umbral, datos faltantes, verificación, calibración, deriva, heterogeneidad y consecuencias raras. Un intervalo estrecho alrededor de una métrica sesgada sigue siendo una respuesta precisa a la pregunta equivocada.

## LAS ALTERNATIVAS

Para un resultado positivo compiten condición verdadera, falso positivo, sobrediagnóstico, contaminación o umbral oportunista. Para un negativo compiten ausencia, falso negativo, fase temprana, muestra insuficiente o referencia que tampoco detecta. Para una mejora de desenlaces compiten cambios concomitantes en manejo y selección.

## LAS CONTROVERSIAS

Permanecen abiertas la definición de referencias compuestas, los mínimos aceptables de sensibilidad/especificidad, el balance de sobrediagnóstico, los umbrales de beneficio neto, el uso de subgrupos, la evaluación de algoritmos adaptativos y cuándo basta un puente causal sin ensayo prueba–tratamiento. Se indexan en `CONTROVERSIES.md`.

## QUÉ PODRÍA FALSARLO

Esta síntesis deberá corregirse si:

- STARD, QUADAS‑3, Cochrane DTA, GRADE, TRIPOD+AI, PROBAST+AI o STARD-AI publican reemplazos oficiales;
- una auditoría identifica errores de extracción en RIFT, ADJUST‑PE, PROPER o UKCTOCS;
- nuevos datos cambian la interpretación de sus desenlaces o correcciones editoriales;
- evidencia muestra que los dominios usados no detectan los sesgos que pretenden;
- el módulo comienza a aceptar datos personales o emitir recomendaciones clínicas.

## NIVEL DE CONFIANZA

**A-SEM/A método:** separación entre uso, exactitud, referencia, probabilidad, utilidad y decisión; estándares oficiales vigentes al corte. **A estudio:** resultados extraídos de RIFT, ADJUST‑PE, PROPER y UKCTOCS dentro de sus poblaciones y diseños. **B:** generalización de esos casos como cortafuegos metodológicos. **C/D:** respuesta individual, umbrales para otra población, rendimiento de otra versión o beneficio de un sistema no estudiado.

## QUÉ SABEMOS REALMENTE

Una prueba es evaluable sólo dentro de una ruta, población, umbral y condición objetivo. Exactitud y utilidad son productos distintos. Referencia, espectro, verificaciones e indeterminados pueden sesgar el resultado. Modelos e IA requieren calibración, validación externa y vigilancia además de discriminación.

## QUÉ TODAVÍA NO SABEMOS

No existe un estándar de referencia perfecto para toda condición, una métrica única que elija umbral, un AUC que garantice utilidad, una regla universal para sobrediagnóstico ni una validación externa que asegure estabilidad futura. Cada prueba y ruta concreta requiere expediente, versión y fecha de corte propios.

## Conclusión

Una señal se convierte en evidencia diagnóstica cuando sabemos a quién se aplicó, qué intentaba cambiar, cómo se comparó, qué errores quedaron visibles y qué consecuencias siguieron. La exactitud puede ser necesaria y aun insuficiente. La pregunta decisiva no es «¿qué tan buena es la prueba?», sino «¿mejora esta ruta las decisiones y los resultados frente a la alternativa, bajo estos límites?».

## Fuentes y fecha de corte

Fuentes auditadas en `SOURCES.md`. Corte metodológico: `2026-08-24`. QUADAS‑3 versión 1.2 es la recomendación vigente localizada; STARD 2015 continúa como guía general y STARD-AI 2025 como extensión específica. Cochrane DTA versión 2.0 y el GRADE Book se tratan como recursos vivos y versionados.

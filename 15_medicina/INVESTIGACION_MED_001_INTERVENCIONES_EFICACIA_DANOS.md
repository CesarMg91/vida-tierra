---
id: INV-MED-INTERVENTIONS-001
titulo: "Cómo sabemos si una intervención médica o quirúrgica funciona, para quién y con qué daños"
estado: AUDITADO
ultima_revision: 2026-08-24
claims:
  - CLAIM-MED-QUESTION-001
  - CLAIM-MED-RANDOMIZATION-001
  - CLAIM-MED-COMPARATOR-001
  - CLAIM-MED-ESTIMAND-001
  - CLAIM-MED-OUTCOMES-001
  - CLAIM-MED-HARMS-001
  - CLAIM-MED-REPORTING-VALIDITY-001
  - CLAIM-MED-SURROGATE-CAST-001
  - CLAIM-MED-SURGERY-OPERATOR-001
  - CLAIM-MED-SHAM-001
  - CLAIM-MED-FIDELITY-001
  - CLAIM-MED-TARGET-TRIAL-001
  - CLAIM-MED-TRANSPORTABILITY-001
  - CLAIM-MED-DECISION-001
fuentes:
  - SRC-MED-WHO-TRIALS-2024
  - SRC-MED-CONSORT-2025
  - SRC-MED-SPIRIT-2025
  - SRC-MED-ROB2-2019
  - SRC-MED-CONSORT-HARMS-2022
  - SRC-MED-CONSORT-NPT-2017
  - SRC-MED-ICH-E9R1-2019
  - SRC-MED-GRADE-BOOK-2026
  - SRC-MED-PRISMA-2020
  - SRC-MED-TIDIER-2014
  - SRC-MED-COMET-2017
  - SRC-MED-IDEAL-2019
  - SRC-MED-IDEAL-RCT-2013
  - SRC-MED-EXPERTISE-RCT-2005
  - SRC-MED-FIDELITY-2013
  - SRC-MED-CAST-1991
  - SRC-MED-TARGET-TRIAL-2016
---

# MED-001 — Cómo sabemos si una intervención funciona

![Mesa de evidencia clínica con protocolo, comparadores, desenlaces, daños y población](../assets/visuales/hero-med-001-intervenciones.png)

![Cadena inferencial desde la pregunta hasta la decisión](../assets/visuales/cadena-pregunta-decision-med-001.svg)

![Matriz de diseños, productos y fallos](../assets/visuales/matriz-evidencia-intervenciones-med-001.svg)

> **Alcance:** investigación educativa sobre métodos. No evalúa tu caso, no recomienda tratamientos y no sustituye una valoración clínica. Los ejemplos enseñan inferencias delimitadas, no reglas para decidir por una persona.

## Pregunta central

¿Cómo sabemos si una intervención médica o quirúrgica funciona, para quién y con qué daños?

## Respuesta breve

No lo sabemos por observar mejoría después de tratar, por obtener un valor `p < 0.05`, por leer un metaanálisis ni por llamar «aleatorizado» a un estudio. Lo sabemos, con un grado de incertidumbre explícito, cuando una pregunta causal concreta conecta una población, dos o más estrategias comparables, un horizonte y desenlaces importantes; la asignación y la medición reducen explicaciones rivales; el análisis estima el efecto previsto; daños y pérdidas permanecen visibles; y el resultado puede trasladarse justificadamente a una población objetivo.

En cirugía el efecto tampoco pertenece sólo a la maniobra. Operador, equipo, centro, selección, anestesia, cuidados concomitantes, curva de aprendizaje y calidad de ejecución pueden modificar lo observado. Un ensayo puede estimar bien un efecto promedio en su muestra y aun así no responder qué ocurrirá en otro hospital o para una persona concreta. La decisión final integra efectos absolutos, certeza, daños, carga, factibilidad y preferencias; no sale automáticamente de una jerarquía de diseños (`CLAIM-MED-DECISION-001`).

## LO PREGUNTADO

### 1. El tratamiento no es la pregunta

«¿Funciona la cirugía X?» deja sin definir casi todo. La unidad auditable es una comparación:

| Componente | Pregunta que debe quedar congelada | Error si se omite |
|---|---|---|
| población | ¿quiénes son elegibles y quiénes quedan fuera? | extrapolar a otro riesgo o fenotipo |
| intervención | ¿qué técnica, dosis, intensidad, experiencia y cointervenciones? | agrupar versiones no equivalentes |
| comparador | ¿ninguna intervención, placebo, simulación, atención usual u otra estrategia activa? | atribuir historia natural o atención concomitante |
| desenlace | ¿mortalidad, función, síntomas, calidad de vida, reintervención, marcador? | elegir la mejor señal después de mirar |
| tiempo | ¿durante el procedimiento, 30 días, un año, diez años? | confundir beneficio temprano y daño tardío |
| estimando | ¿efecto de asignar, adherir, iniciar o recibir según protocolo? | responder otra pregunta con el mismo ensayo |

La pregunta debe existir antes de interpretar el resultado. SPIRIT 2025 describe qué debe transparentar un protocolo y CONSORT 2025 qué debe transparentar el informe; ninguno prescribe por sí solo un diseño válido (`CLAIM-MED-QUESTION-001`, `CLAIM-MED-REPORTING-VALIDITY-001`).

### 2. Eficacia, efectividad y decisión

- **Eficacia:** efecto bajo condiciones y población diseñadas para aislar la contribución de la intervención.
- **Efectividad:** efecto de una estrategia en condiciones más cercanas a la práctica.
- **Seguridad/daños:** frecuencia, gravedad, duración y atribución de resultados desfavorables.
- **Decisión:** balance contextual para una población o persona, que además incorpora carga, valores, recursos y alternativas.

No forman una escalera automática. Un ensayo explicativo puede aislar mecanismo sin representar la práctica; uno pragmático puede representar la práctica y dejar menos aislado qué componente produjo el efecto.

## LO ASIGNADO

### 3. Qué aporta la aleatorización

La asignación aleatoria crea, bajo ejecución adecuada, una base probabilística para comparar estrategias. No garantiza equilibrio exacto, no corrige desenlaces ausentes y no impide sesgos posteriores. Deben separarse:

1. generación impredecible de la secuencia;
2. ocultamiento hasta que la persona queda incluida;
3. adherencia y cruces posteriores;
4. medición de desenlaces;
5. datos faltantes;
6. selección del resultado reportado.

RoB 2 evalúa riesgo de sesgo para **un resultado concreto**, no otorga una calificación eterna al artículo (`CLAIM-MED-RANDOMIZATION-001`).

### 4. El comparador define el efecto

Intervención contra «nada», atención habitual, mejor tratamiento activo, lista de espera, placebo o procedimiento simulado estiman contrastes diferentes. «Atención habitual» puede variar entre centros y fechas. Si ambos grupos reciben rehabilitación, optimización farmacológica o vigilancia intensiva, el resultado es el efecto adicional sobre ese fondo, no el efecto total de toda la ruta clínica (`CLAIM-MED-COMPARATOR-001`).

En una intervención procedimental, incisión, anestesia, contacto, expectativa, diagnóstico intraoperatorio y recuperación pueden producir efectos o daños. Un control simulado puede separar algunos componentes, pero sólo es defendible cuando la pregunta es valiosa, el control es metodológicamente necesario, el riesgo se minimiza y el consentimiento explica la simulación. No es una plantilla obligatoria (`CLAIM-MED-SHAM-001`).

### 5. Cegamiento: quién, frente a qué y para qué desenlace

El cirujano raramente ignora la técnica que ejecuta. Eso no vuelve inútil todo ensayo quirúrgico. Puede cegarse a participantes, evaluadores, adjudicadores o analistas; pueden usarse desenlaces menos susceptibles a expectativa; y debe medirse la fidelidad de las intervenciones. El informe declara qué conocimiento de la asignación pudo alterar conducta, cointervenciones, medición o reporte.

## LO ESTIMADO

### 6. Del protocolo al estimando

ICH E9(R1) obliga a describir el efecto mediante población, estrategias, variable/desenlace, manejo de acontecimientos intercurrentes y resumen poblacional. Responde preguntas distintas si una persona:

- suspende por toxicidad;
- cruza a la otra técnica;
- requiere rescate;
- muere antes de medir función;
- recibe una reintervención.

El efecto de **asignar** una estrategia conserva parte de esas consecuencias y suele estimarse por intención de tratar. El efecto de **adherir** exige supuestos y análisis adicionales. El análisis por protocolo ingenuo puede destruir la comparabilidad creada por aleatorización (`CLAIM-MED-ESTIMAND-001`).

### 7. Estimación antes que umbral

Un intervalo de confianza describe valores compatibles con datos y modelo; no es probabilidad posterior ni certificado de ausencia de efecto. Un resultado «no significativo» puede contener beneficio y daño clínicamente importantes. Un resultado «significativo» puede ser trivial, multiplicado o dependiente de un desenlace sustituto.

Para decisiones se necesitan medidas absolutas bajo un riesgo basal explícito. El mismo riesgo relativo puede significar reducciones absolutas muy distintas. El número necesario a tratar o dañar hereda tiempo, comparador, población y su incertidumbre; no es constante del tratamiento.

### 8. Desenlaces que importan y desenlaces sustitutos

Un marcador puede responder más rápido que supervivencia, función o calidad de vida. Eso lo hace útil para mecanismo o detección temprana, no sustituto validado automáticamente. CAST mostró la ruptura: encainida y flecainida suprimían ectopia ventricular, pero el ensayo aleatorizado encontró exceso de muertes frente a placebo. Mejorar el marcador no autorizaba concluir beneficio clínico (`CLAIM-MED-SURROGATE-CAST-001`).

Los conjuntos básicos de desenlaces de COMET buscan que investigadores, profesionales y pacientes acuerden qué medir como mínimo. No fijan por sí solos el instrumento, el umbral ni el desenlace primario de cada ensayo (`CLAIM-MED-OUTCOMES-001`).

### 9. Daños no son una nota al pie

CONSORT Harms exige definir cómo se buscaron, clasificaron, cuantificaron y analizaron eventos adversos. La ausencia de diferencia puede reflejar poca potencia, seguimiento corto, medición pasiva o categorías agregadas. Deben conservarse:

- denominadores y tiempo en riesgo;
- gravedad, reversibilidad y momento;
- abandonos y reintervenciones;
- eventos previstos y emergentes;
- daño del procedimiento de control;
- incertidumbre para eventos raros.

Un ensayo dimensionado para beneficio frecuente puede ser incapaz de excluir un daño raro o tardío (`CLAIM-MED-HARMS-001`).

## CIRUGÍA COMO INTERVENCIÓN COMPLEJA

### 10. El operador forma parte del sistema causal

IDEAL describe etapas de idea, desarrollo, exploración, evaluación y seguimiento de innovaciones quirúrgicas. En desarrollo temprano la técnica puede cambiar; durante exploración aparecen curva de aprendizaje y variación; en evaluación se necesita comparación robusta; después siguen vigilancia y efectos infrecuentes. La etapa orienta el diseño, no legitima la innovación (`CLAIM-MED-SURGERY-OPERATOR-001`).

Un ensayo quirúrgico debe declarar:

| Fuente de variación | Qué registrar | Qué no asumir |
|---|---|---|
| cirujano | experiencia pertinente, técnica, volumen y elegibilidad | años de práctica = competencia uniforme |
| equipo/centro | anestesia, cuidados, rescate, infraestructura | resultado = maniobra aislada |
| aprendizaje | orden de casos, cambios, estabilización y supervisión | efecto inicial = efecto maduro |
| calidad | criterios observables y adjudicación | nombre de técnica = ejecución equivalente |
| preferencia | elegibilidad, rechazo, cruce y selección | reclutados = todos los pacientes elegibles |

Los diseños basados en experiencia asignan a equipos expertos en cada estrategia y pueden reducir preferencia o ejecución asimétrica. También cambian la unidad práctica de comparación y requieren análisis que respete agrupamiento por operador/centro.

### 11. Caso adversario: FIDELITY

El ensayo FIDELITY asignó 146 personas de 35–65 años con síntomas compatibles con rotura degenerativa del menisco medial y sin artrosis de rodilla a meniscectomía parcial artroscópica o cirugía simulada. A 12 meses, ambos grupos mejoraron, pero las diferencias entre grupos en los tres desenlaces primarios fueron pequeñas, imprecisas y no favorecieron superioridad de la resección. La mejoría dentro del grupo operado no identificaba el efecto específico de resecar (`CLAIM-MED-FIDELITY-001`).

El resultado no demuestra que «toda artroscopia» o «toda lesión meniscal» carezca de efecto. Pertenece a esa población, técnica, comparador, desenlaces y tiempo. Tampoco convierte el control simulado en requisito ético para toda cirugía.

## CUANDO NO HAY ENSAYO

### 12. Observación no es resignación, pero exige una pregunta emulada

Registros y cohortes son esenciales para daños raros, práctica real, larga duración y situaciones donde un ensayo no existe o no es factible. Para efectos causales deben explicitar un ensayo objetivo: elegibilidad, estrategias, asignación hipotética, tiempo cero, seguimiento, desenlace, contraste y análisis. Eso ayuda a evitar sesgo de tiempo inmortal, selección de prevalentes y ajustes posteriores a la intervención (`CLAIM-MED-TARGET-TRIAL-001`).

El ajuste estadístico sólo controla variables medidas bajo supuestos. Una base enorme reduce error aleatorio, no confusión no medida ni mala definición de tiempo cero.

### 13. Síntesis y certeza

PRISMA mejora la transparencia de una revisión; GRADE estructura la certeza por desenlace y el paso de evidencia a decisión. Un metaanálisis no crea independencia: estudios pueden compartir centros, bases, protocolos, comparadores débiles o sesgos. La heterogeneidad no se resuelve promediando sin explicar población, técnica, riesgo basal y tiempo.

La certeza puede disminuir por riesgo de sesgo, inconsistencia, indirectitud, imprecisión o sesgo de publicación. Puede ser distinta para mortalidad, función y daño dentro de la misma comparación.

## LO TRANSPORTADO

### 14. Del participante a la población objetivo

La validez interna pregunta si el contraste está bien estimado en el estudio. La transportabilidad pregunta si ese efecto se conserva en otra población y sistema. Deben compararse al menos riesgo basal, modificadores de efecto, experiencia, centro, cointervenciones, adherencia, horizonte y medición (`CLAIM-MED-TRANSPORTABILITY-001`).

«Multicéntrico» no garantiza representatividad; diversidad descriptiva no demuestra ausencia de modificación de efecto; un subgrupo positivo tampoco es evidencia firme si se eligió después de observar resultados. Las interacciones preespecificadas y la coherencia externa importan más que comparar significación por separado.

## LO DECIDIDO

### 15. La evidencia no emite una orden clínica

Un resultado publicable termina antes de la decisión individual:

```text
pregunta causal
  → comparación ejecutada
  → resultado por desenlace
  → riesgo de sesgo
  → síntesis y certeza
  → aplicabilidad
  → balance de efectos, daños y carga
  → conversación clínica situada
```

La decisión puede variar aunque la evidencia sea la misma porque cambian riesgo basal, alternativas disponibles, urgencia, experiencia local y preferencias. Esto no vuelve relativa la evidencia; declara qué parte fue estimada y qué parte requiere juicio compartido (`CLAIM-MED-DECISION-001`).

## Casos y controles de interpretación

| Caso | Observación principal | Inferencia permitida | Límite |
|---|---|---|---|
| CAST | supresión de ectopia y exceso de mortalidad con fármacos activos | un sustituto mejorado no garantizó beneficio clínico | fármacos y población posinfarto concretos |
| FIDELITY | mejoría en ambos brazos; sin superioridad relevante a 12 meses | el efecto específico de resección no se identificó por la mejoría pre–post | rotura degenerativa medial sin artrosis; 146 participantes |
| ensayo quirúrgico | resultados dependen de técnica, equipo y centro | operador y contexto deben medirse/modelarse | volumen no equivale automáticamente a competencia |
| cohorte/registro | exposición y resultados en práctica | puede estimar efectos bajo un ensayo objetivo y supuestos | confusión y selección no desaparecen por tamaño |

## LO OBSERVADO

Se observan personas elegibles, estrategias asignadas o recibidas, cointervenciones, mediciones, eventos, pérdidas, cruces y contextos de atención. «Funciona» no es una observación: es una comparación causal construida desde esos archivos.

## LO MEDIDO

Se miden desenlaces con instrumentos y tiempos definidos, adherencia, calidad de ejecución, eventos adversos y diferencias entre grupos. La escala y el denominador pertenecen al resultado. Un valor `p`, una razón relativa o un marcador no contienen por sí solos importancia clínica.

## LO INFERIDO

Bajo asignación, seguimiento, medición y análisis defendibles se infiere un efecto de una estrategia frente a otra para la población, tiempo y estimando declarados. La inferencia puede terminar antes de una recomendación o una decisión individual.

## LOS SUPUESTOS

Comparabilidad creada o recuperada bajo el diseño; consistencia entre estrategia definida y recibida; captura suficiente de desenlaces y daños; manejo defendible de datos faltantes y acontecimientos intercurrentes; ausencia de selección de análisis guiada por resultados; positividad e intercambio condicional en estudios observacionales; y especificación adecuada de operador, centro y técnica en cirugía.

## LAS INCERTIDUMBRES

Incluyen error aleatorio, sesgo, heterogeneidad, indirectitud, eventos raros, seguimiento insuficiente y desconocimiento de modificadores. Se mantienen separadas: un intervalo estrecho no corrige un comparador débil, y bajo riesgo de sesgo no garantiza transportabilidad.

## LAS ALTERNATIVAS

Para una mejoría observada compiten historia natural, regresión a la media, expectativa, atención concomitante y selección. Para una diferencia entre grupos compiten azar, sesgo de medición, pérdidas, desviaciones y reporte selectivo. En cirugía se añaden aprendizaje, calidad, equipo, centro y preferencia.

## LAS CONTROVERSIAS

Siguen abiertas la necesidad y proporcionalidad de simulación, la validación de sustitutos, estandarización frente a representatividad quirúrgica, heterogeneidad frente a multiplicidad y confusión residual en registros. Se indexan en `CONTROVERSIES.md`; ninguna se resuelve con el nombre del diseño.

## QUÉ PODRÍA FALSARLO

Esta síntesis deberá revisarse si:

- CONSORT/SPIRIT, RoB 2, ICH E9(R1), GRADE o WHO publican una sustitución oficial;
- evidencia metodológica muestra que un control o dominio no detecta el sesgo que pretende;
- protocolos/datos corrigen la interpretación de CAST o FIDELITY;
- nuevos marcos quirúrgicos reemplazan aspectos de IDEAL con validación superior;
- el portal comienza a recibir datos personales o producir recomendaciones, lo que violaría su alcance actual.

## NIVEL DE CONFIANZA

**A-SEM/A método:** separación de pregunta, comparador, estimando, reporte, sesgo, aplicabilidad y decisión. **A ensayo:** resultados numéricos de CAST y FIDELITY dentro de sus protocolos publicados. **B:** traslado de esos casos como cortafuegos metodológicos y aplicación de marcos quirúrgicos a intervenciones concretas. **C/D:** respuesta de una persona, subgrupos no preespecificados o transportabilidad a un sistema no estudiado.

## QUÉ SABEMOS REALMENTE

Una afirmación fiable sobre intervención necesita una comparación explícita y un resultado concreto; beneficio, daño, sesgo y aplicabilidad no se heredan entre desenlaces. En cirugía, operador y sistema son parte de la pregunta. Reportar de acuerdo con una guía mejora auditabilidad, no convierte el estudio en válido.

## QUÉ TODAVÍA NO SABEMOS

No existe un diseño universal para toda intervención, un umbral estadístico que decida importancia, una medida única de competencia quirúrgica ni una función que transforme efectos promedio en decisiones individuales sin contexto. Cada tratamiento concreto requerirá su propio expediente actualizado.

## Conclusión

Saber si una intervención funciona exige preservar la cadena completa: pregunta, comparador, asignación, medición, estimando, efecto, daños, sesgo, síntesis, aplicabilidad y decisión. La etiqueta del diseño no sustituye esa cadena. En cirugía, la intervención incluye un sistema de personas, técnica y contexto; ocultarlo produce una precisión que no pertenece al mundo real.

La respuesta rigurosa rara vez es «funciona» a secas. Es: para esta población, frente a esta alternativa, durante este tiempo, este resultado estima tal efecto con estos sesgos, daños e incertidumbres; trasladarlo más lejos requiere otro puente.

## Fuentes y fecha de corte

Fuentes auditadas en `SOURCES.md`. Corte metodológico: `2026-08-24`. CONSORT 2025 y SPIRIT 2025 son las versiones oficiales vigentes encontradas; el GRADE Book se encontraba en publicación progresiva para sustituir el manual previo durante 2026. Se conservan enlaces oficiales y versiones porque estos estándares son documentos vivos.

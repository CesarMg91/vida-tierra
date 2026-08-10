# Metodología epistemológica

## 1. Unidad de trabajo: la afirmación

El proyecto no evalúa “la evolución”, “la geología” o “la arqueología” como bloques indivisibles. Evalúa afirmaciones delimitadas. Cada una recibe un ID estable, una formulación que pueda resultar falsa, un alcance temporal y espacial, y un estado de auditoría.

Ejemplo:

> `CLAIM-EARTH-AGE-001`: La formación de la Tierra se sitúa aproximadamente en 4.54 Ga, donde “formación” designa un proceso de acreción y diferenciación, no un instante observado ni la edad de una roca terrestre intacta.

## 2. Los siete niveles

### Nivel 1 — Observación directa actual

Se inventaría lo que existe físicamente hoy: muestra, afloramiento, fósil, instrumento, secuencia, espectro, genoma o artefacto. “La Tierra se formó” no es una observación; un conjunto de relaciones isotópicas en una alícuota sí puede serlo, mediado por un instrumento.

Preguntas obligatorias:

- ¿Qué objeto se examinó y cuál es su procedencia?
- ¿La cadena de custodia está documentada?
- ¿La observación es destructiva o repetible sobre la misma muestra?
- ¿Qué selección ocurrió antes de observar?

### Nivel 2 — Medición e instrumento

Se especifica la variable que el instrumento registra realmente. Un espectrómetro de masas no “mide edad”: separa y cuantifica señales asociadas a relaciones masa/carga, de las que se estiman abundancias o razones isotópicas tras correcciones.

Registrar:

- instrumento y preparación;
- señal primaria y transformación a dato;
- blancos, estándares y calibración;
- resolución, sensibilidad y rango;
- incertidumbre aleatoria y sistemática;
- contaminación, fraccionamiento y criterios de exclusión;
- versión del software y tratamiento estadístico cuando aplique.

### Nivel 3 — Principio

Se documenta la ley o regularidad que conecta la medición con una cantidad relevante: decaimiento radiactivo, herencia, superposición, propagación sísmica, fraccionamiento isotópico, selección natural, etc.

Debe explicarse cómo se prueba hoy, qué supuestos necesita y bajo qué condiciones deja de ser aplicable. La estabilidad observada de una constante física y la extrapolación temporal son pasos distintos y deben nombrarse.

### Nivel 4 — Cadena de inferencia

Cada conclusión debe mostrar:

```text
objeto actual
  → señal instrumental
  → dato corregido
  → principio
  → modelo
  → estimación
  → interpretación histórica
  → conclusión delimitada
```

En cada flecha se registran supuestos. Si dos rutas comparten la misma constante, calibración o historia de muestra, no se cuentan ingenuamente como dos pruebas independientes.

### Nivel 5 — Corroboración independiente

Se construye una matriz de dependencia. Dos laboratorios que miden la misma alícuota con el mismo método aportan reproducibilidad, pero no plena independencia teórica. Dos sistemas isotópicos con químicas y semividas distintas pueden ser más independientes, aunque compartan la interpretación geológica de la muestra.

Dimensiones de independencia:

- muestra;
- laboratorio;
- instrumento;
- principio físico;
- constante de calibración;
- modelo de sistema cerrado;
- contexto estratigráfico o arqueológico;
- equipo de análisis.

### Nivel 6 — Grado de confianza

Se usa la escala A–E definida en [`00_metodologia/CONFIDENCE_SYSTEM.md`](00_metodologia/CONFIDENCE_SYSTEM.md). La letra siempre va acompañada de una justificación y una fecha de evaluación.

### Nivel 7 — Falsabilidad y revisión

Para cada afirmación se preguntará:

- ¿Qué observación sería incompatible con ella?
- ¿Qué error de instrumento podría simular el resultado?
- ¿Qué resultado favorecería una alternativa?
- ¿Qué parte es falsable y qué parte solo puede compararse por poder explicativo?
- ¿Qué hallazgo exigiría recalibrar la confianza?

## 3. Regla del adversario

Cada investigación importante presenta la mejor versión del modelo dominante y de las críticas científicamente defendibles. Debe buscar activamente:

1. evidencia favorable;
2. evidencia contraria o tensión;
3. anomalías y datos excluidos;
4. alternativas;
5. predicciones diferenciadoras;
6. controversias históricas y actuales;
7. errores pasados del campo;
8. condiciones que cambiarían el consenso.

No toda alternativa merece el mismo peso. Su fuerza depende de ajuste a los datos, supuestos adicionales, predicciones y capacidad de sobrevivir pruebas discriminatorias.

## 4. Tratamiento de incertidumbre

No se reducirá toda incertidumbre a un único “±”. Como mínimo se separan:

- **estadística**: dispersión y conteo;
- **instrumental**: calibración, deriva, blancos y fraccionamiento;
- **muestra**: alteración, mezcla, herencia, contaminación y representatividad;
- **modelo**: sistema cerrado, condiciones iniciales, tasas y priors;
- **cronológica**: resolución, duración del evento y significado de la fecha;
- **taxonómica/semántica**: qué entidad o evento se está fechando;
- **sesgo de preservación**: lo que pudo sobrevivir y ser muestreado.

Las etiquetas normalizadas están en [`00_metodologia/UNCERTAINTY_TAGS.md`](00_metodologia/UNCERTAINTY_TAGS.md).

## 5. Fuentes y acceso

Prioridad:

1. dato o dataset original;
2. artículo de investigación primaria;
3. metaanálisis o revisión sistemática;
4. revisión académica y monografía especializada;
5. organismos científicos y universidades;
6. divulgación, solo como orientación.

El registro distingue “citado”, “resumen consultado”, “texto completo consultado” y “datos reanalizados”. No se atribuye una conclusión detallada a una fuente cuyo contenido no se haya inspeccionado.

## 6. Estados de auditoría

- `SEMILLA`: entrada creada para organizar trabajo futuro.
- `EN_DESARROLLO`: evidencia localizada, análisis incompleto.
- `TRAZADO`: claim, evidencia y fuente enlazados.
- `AUDITADO`: cadena completa, adversario, incertidumbre y falsadores revisados.
- `REPLICADO`: además existe reproducción o reanálisis independiente documentado.
- `REVISAR`: nueva evidencia o error detectado.
- `RETIRADO`: formulación abandonada, conservada para historial.

## 7. Separación de productos

Los registros maestros son la capa canónica. Los capítulos, informes, videos o páginas son vistas narrativas derivadas. Si una narración contradice un registro maestro, se corrige la narración o se abre una revisión del claim; no se mantienen dos verdades silenciosamente.

## 8. Cierre obligatorio de cada investigación

Todo archivo `INVESTIGACION_*` termina, en este orden, con:

1. LO OBSERVADO
2. LO MEDIDO
3. LO INFERIDO
4. LOS SUPUESTOS
5. LAS INCERTIDUMBRES
6. LAS ALTERNATIVAS
7. LAS CONTROVERSIAS
8. QUÉ PODRÍA FALSARLO
9. NIVEL DE CONFIANZA
10. QUÉ SABEMOS REALMENTE
11. QUÉ TODAVÍA NO SABEMOS

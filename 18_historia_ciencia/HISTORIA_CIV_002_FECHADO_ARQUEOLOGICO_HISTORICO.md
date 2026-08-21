# Historia de CIV-002 — De ordenar colecciones a modelar cadenas cronológicas

| Campo | Valor |
|---|---|
| Investigación | `INV-CIV-DATING-001` |
| Estado | `AUDITADO` |
| Versión | `0.2.1` |
| Alcance | historia de la seriación, los relojes físicos, la calibración y el modelado cronológico |

Esta historia no es una marcha desde cronologías «primitivas» hacia un reloj perfecto. Las secuencias relativas, los laboratorios, las curvas, los textos y los modelos resuelven objetos distintos; cada ampliación de resolución introdujo nuevas dependencias que deben documentarse.

## 1. Antes de los relojes físicos: secuencia y sincronismo

La cronología histórica se construyó con genealogías, listas de reinados, epónimos, inscripciones, estilos y sincronismos. Esos archivos permitieron ordenar acontecimientos, pero podían omitir corregencias, comprimir lagunas o proyectar nombres tardíos.

A fines del siglo XIX y comienzos del XX, la tipología y la seriación convirtieron conjuntos materiales en secuencias comparables. En Egipto, Flinders Petrie registró asociaciones de cerámica en tarjetas y ordenó unos `900` grupos funerarios en *Sequence Dates*. La innovación fue separar orden relativo de fecha dinástica; su límite fue depender de selección tipológica, coocurrencias y supuestos regionales (`SRC-PETRIE-SEQUENCE-UCL`).

## 2. Anillos: calendario anual y geografía de referencia

La dendrocronología mostró que patrones de crecimiento solapados podían construir calendarios anuales. El año del anillo es preciso cuando la secuencia se enlaza a una cronología absoluta; el año de tala necesita borde conservado, y la fecha de uso necesita asociación. Cronologías flotantes continuaron requiriendo anclaje.

Esa distinción sería decisiva para el radiocarbono: los anillos no sólo fechaban madera, también ofrecían material de edad calendario conocida para medir variación atmosférica.

## 3. Radiocarbono: una revolución metrológica, no un año automático

El radiocarbono de Libby trasladó la cronología más allá de textos y estilos. Las primeras aplicaciones trataron con frecuencia la edad convencional como aproximación calendario. La comparación con anillos reveló desviaciones sistemáticas y consolidó la calibración.

El desarrollo de AMS redujo el tamaño de muestra y permitió seleccionar semillas u otras entidades pequeñas. Esa capacidad no eliminó el problema de muestreo: una partícula precisa aún puede ser residual o intrusiva.

## 4. De tablas de calibración a familias de curvas

Curvas sucesivas integraron archivos dendrocronológicos, marinos, coralinos, espeleotemas y otros. IntCal, SHCal y Marine reconocen que atmósfera y reservorios no forman un reloj mundial uniforme. La familia 2020 amplió a `55 cal kBP` y publicó datos y metodología; sigue siendo el estándar oficial activo al corte de CIV-002 (`SRC-REIMER-INTCAL20-2020`, `SRC-HOGG-SHCAL20-2020`, `SRC-HEATON-MARINE20-2020`).

La lección historiográfica es doble: una curva es una infraestructura científica versionada y, a la vez, un modelo con correlaciones internas. Actualizarla puede mover cronologías publicadas sin que el laboratorio original haya fallado.

## 5. Modelado bayesiano arqueológico

Desde finales del siglo XX, programas como OxCal formalizaron la combinación de determinaciones con orden estratigráfico y fases. Bronk Ramsey articuló un marco en que el resultado posterior depende de verosimilitud y conocimiento previo explícito (`SRC-BRONK-RAMSEY-BAYES-2009`).

El avance permitió estimar inicios, finales y duraciones que ninguna muestra mide directamente. También creó un nuevo riesgo editorial: publicar el posterior estrecho y ocultar el prior. Los modelos de valores atípicos y offsets hicieron visible que el error puede estar en el contexto, la curva o una dependencia compartida, no sólo en el instrumento (`SRC-BRONK-RAMSEY-OUTLIERS-2009`).

## 6. Relojes complementarios

La luminiscencia hizo fechable el último reinicio por luz o calor de minerales; el arqueomagnetismo comparó magnetización remanente con cambios regionales del campo; la tefrocronología enlazó archivos por cenizas correlacionadas. Cada método amplió materiales y escalas, sin convertir el depósito en acontecimiento (`SRC-RHODES-OSL-2021`, `SRC-BROWN-ARCHAEOMAG-2021`, `SRC-LOWE-TEPHRO-2011`).

| Método | Ganancia histórica | Dependencia nueva |
|---|---|---|
| AMS | muestras pequeñas y selección fina | pretatamiento, entidad y carbono |
| calibración | calendario probabilístico | curva, región, reservorio |
| Bayes | fases, límites y duraciones | priors, asociación, sensibilidad |
| wiggle matching | secuencias internas de alta resolución | anillos, offset y ajuste |
| OSL | sedimentos sin carbono | reinicio y tasa de dosis |
| arqueomagnetismo | materiales calentados | curva regional y estabilidad |
| tefra | correlación entre archivos | huella, deposición y edad transferida |

## 7. Casos que cambiaron la práctica

Egipto temprano mostró la ganancia de combinar materiales de vida corta, seriación y Bayes sin fechar directamente la «unificación» (`SRC-DEE-2013`). Kültepe y Acemhöyük integraron anillos, radiocarbono y archivos de epónimos, haciendo visibles tanto la convergencia como las dependencias (`SRC-MANNING-MESOPOTAMIA-2016`).

Thera hizo imposible tratar un intervalo estrecho como cierre automático: anatomía del olivo, estructura anual de `14C`, offsets y sincronismos mantienen alternativas (`SRC-FRIEDRICH-THERA-2006`, `SRC-PEARSON-THERA-2018`, `SRC-EHRLICH-OLIVE-2018`, `SRC-PEARSON-THERASIA-2023`).

Great Zimbabwe obligó a modelar no sólo fechas, sino la historia colonial del archivo dañado (`SRC-CHIRIKURE-GZ-CHRONOLOGY-2013`). Minino mostró que dieta y reservorio pueden desplazar edades bien medidas y que una corrección local no se universaliza (`SRC-WOOD-MININO-2013`).

## 8. De la «fecha definitiva» a la trazabilidad

La práctica contemporánea más robusta publica:

- identificador y material de muestra;
- procedencia y proceso de formación;
- determinación original, error y tratamiento;
- curva, versión, corrección y software;
- código/estructura del modelo y priors;
- análisis de sensibilidad y valores atípicos;
- intervalo del objeto, fase o proceso realmente inferido;
- dependencias compartidas con otros resultados.

La fecha deja así de ser una autoridad sin biografía y se vuelve una afirmación reproducible.

## 9. Reconciliación editorial

`CLAIM-CIV-DATING-CONTEXT-001` nació en CIV-001 como proposición `TRAZADO` y fue reutilizado bajo ese estado en los cortes de 051 y 052. CIV-002 audita ahora exactamente esa proposición con una cadena ampliada. La promoción del claim no promueve CIV-001 ni altera retrospectivamente sus cortes editoriales.

## Qué cambió en CIV-002

1. «fecha» se dividió en seis niveles no intercambiables.
2. IntCal20/SHCal20/Marine20 se verificaron como familia activa al corte.
3. precisión y exactitud recibieron pruebas distintas.
4. priors, offsets y dependencias se incorporaron al objeto publicado.
5. textos y sincronismos dejaron de actuar como anclas automáticas.
6. los contextos dañados y reservorios locales pasaron a ser pruebas centrales.
7. el límite «no demostrado» se convirtió en un resultado válido.

## Referencias metódicas núcleo

- Bronk Ramsey (2009). DOI `10.1017/S0033822200033865`.
- Bronk Ramsey (2009). DOI `10.1017/S0033822200034093`.
- Reimer et al. (2020). DOI `10.1017/RDC.2020.41`.
- Rhodes (2021). DOI `10.1038/s43586-021-00068-5`.
- Lowe (2011). DOI `10.1016/j.quageo.2010.08.003`.
- Brown et al. (2021). DOI `10.1016/j.pepi.2021.106766`.

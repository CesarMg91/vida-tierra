# Etiquetas de incertidumbre

Las etiquetas permiten buscar dónde entra una incertidumbre. No sustituyen una explicación cuantitativa.

## Metrología

| Etiqueta | Significado | Pregunta de auditoría |
|---|---|---|
| `[STAT]` | incertidumbre estadística | ¿Qué distribución y tamaño muestral se asumieron? |
| `[CAL]` | calibración | ¿Contra qué estándar y con qué trazabilidad? |
| `[DRIFT]` | deriva instrumental | ¿Se intercalaron estándares y blancos? |
| `[BLANK]` | blanco/contaminación de laboratorio | ¿Cuánto representa frente a la señal? |
| `[FRAC]` | fraccionamiento instrumental o químico | ¿Cómo se corrigió y validó? |
| `[CONST]` | constante física | ¿Qué valor, versión e incertidumbre se usaron? |

## Muestra y preservación

| Etiqueta | Significado | Pregunta de auditoría |
|---|---|---|
| `[PROV]` | procedencia/cadena de custodia | ¿La muestra está inequívocamente contextualizada? |
| `[CONT]` | contaminación | ¿Puede material externo producir la señal? |
| `[ALTER]` | alteración posterior | ¿Metamorfismo, diagénesis o intercambio modificaron el sistema? |
| `[MIX]` | mezcla de reservorios/edades | ¿El valor aparente promedia componentes? |
| `[INHER]` | herencia/retrabajo | ¿El objeto es más antiguo que el evento que lo contiene? |
| `[PRES]` | sesgo de preservación | ¿Qué evidencia tenía posibilidad de sobrevivir? |
| `[SAMP]` | muestreo/representatividad | ¿La muestra representa el fenómeno global? |

## Inferencia y modelo

| Etiqueta | Significado | Pregunta de auditoría |
|---|---|---|
| `[CERR]` | sistema cerrado | ¿Hubo pérdida o ganancia de padre/hija? |
| `[INIT]` | condición inicial | ¿Se conoce o se estima mediante isócrona/modelo? |
| `[RATE]` | tasa extrapolada | ¿La tasa pudo variar? |
| `[MODEL]` | estructura de modelo | ¿Qué modelo alternativo cambia la conclusión? |
| `[IDENT]` | identificación/taxonomía | ¿El objeto pertenece realmente a la clase inferida? |
| `[DATE]` | significado del reloj | ¿Fecha formación, cierre, alteración o edad modelo? |
| `[CORR]` | dependencia/correlación | ¿Las “pruebas independientes” comparten insumos? |
| `[PRIOR]` | supuesto previo | ¿Cuánto depende el resultado de un prior? |

## Comunicación

| Etiqueta | Significado | Pregunta de auditoría |
|---|---|---|
| `[SEM]` | ambigüedad semántica | ¿Qué significa exactamente “origen”, “especie” o “civilización”? |
| `[RANGE]` | intervalo incompleto | ¿Los límites son mínimo, máximo o duración real? |
| `[ROUND]` | redondeo | ¿El redondeo oculta diferencias relevantes? |
| `[ACCESS]` | acceso incompleto a fuente/datos | ¿Se leyó texto completo y suplemento? |

## Intensidad

Añadir `:1`, `:2` o `:3` cuando sea útil:

- `1`: efecto menor sobre la conclusión;
- `2`: puede mover fecha, alcance o confianza;
- `3`: podría invertir la conclusión.

Ejemplo: `[DATE:3]` para confundir una edad modelo de diferenciación de reservorio con la edad de cristalización de una roca.

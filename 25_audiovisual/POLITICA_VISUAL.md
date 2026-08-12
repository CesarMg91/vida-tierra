# Política visual del audiovisual

Extiende [`../ATLAS_VISUAL.md`](../ATLAS_VISUAL.md) al vídeo. Es una norma editorial, no una guía de estilo.

## El problema que resuelve

El vídeo generado por IA es lo más vívido y lo menos verificable que existe hoy. Este proyecto trata precisamente de separar lo observado de lo inferido. Sin una regla dura, el medio contradice el mensaje: un plano espectacular de un océano hadeano pesa más en la memoria del espectador que la letra `C` que lo acompaña.

La regla no es un freno. Es la firma del formato.

## Regla de los tres registros

Cada plano pertenece a uno de estos tres registros y **se marca en pantalla**.

| Registro | Qué es | De dónde sale | Rótulo en pantalla |
|---|---|---|---|
| **Evidencia** | Objeto, dato o medición reales | Fotografía, imagen de archivo, micrografía, gráfico de datos publicados | `EVIDENCIA` + fuente |
| **Diagrama** | Cadena de inferencia, modelo, comparación | SVG del repositorio | `DIAGRAMA` |
| **Ilustración** | Ambiente, atmósfera, escala | Generado con IA | `ILUSTRACIÓN` |

El rótulo es permanente mientras dura el plano, no un aviso de dos segundos al principio del vídeo.

## Qué puede generarse

Solo lo que no sostiene ninguna afirmación:

- cielo, nubes, atmósfera, luz;
- océano, agua, hielo, vapor;
- lava, magma, roca fundida, humo;
- paisaje sin especie identificable;
- espacio, polvo, disco protoplanetario;
- abstracciones: partículas, redes, tiempo, escala.

## Qué NO puede generarse nunca

- **Anatomía de cualquier organismo**, vivo o fósil. Los modelos de vídeo inventan manos, pies, dentición y marcha. La investigación 036 sostiene que la mano y el pie *son* el argumento: un plano generado contradiría el claim que ilustra.
- **Fósiles, muestras, minerales concretos.** Un circón generado no es el circón de Jack Hills. Si el plano dice «este grano», tiene que ser ese grano.
- **Instrumentos, laboratorios o experimentos históricos** presentados como registro. Si no hay fotografía, se dice que no la hay.
- **Personas reales.** Ni Patterson, ni Kelvin, ni nadie identificable.
- **Gráficos, datos, cifras o unidades.** Los modelos generan números plausibles y falsos. Todo dato va en texto o en SVG.
- **Cualquier plano que un espectador pudiera citar como prueba.**

## Prueba de la captura

Antes de aprobar un plano generado:

> Si alguien hiciera una captura de este fotograma y la publicara sin contexto, ¿afirmaría algo falso?

Si la respuesta es sí, el plano no se usa aunque lleve rótulo.

## Cómo se declara la incertidumbre

Cuando la voz enuncia una afirmación del repositorio, aparece en pantalla su identificador y su letra de confianza, con la escala de [`../00_metodologia/CONFIDENCE_SYSTEM.md`](../00_metodologia/CONFIDENCE_SYSTEM.md).

```text
CLAIM-HADEAN-WATER-001            C
```

La letra califica esa afirmación concreta, no el episodio ni la disciplina. Un episodio honesto muestra letras bajas sin disimularlas: son la parte interesante.

## Registro de procedencia

Cada plano generado se anota en el guion con su prompt, su herramienta y su fecha, igual que `ATLAS_VISUAL.md` hace con las portadas. Un plano sin prompt registrado no se publica.

## Descripción del vídeo

Toda publicación enlaza:

1. la investigación completa en el sitio;
2. los claims concretos citados en el episodio;
3. las fuentes primarias con su DOI.

Esto es lo que ningún canal de divulgación puede ofrecer: que cualquiera recorra la cadena hacia atrás sin pedir permiso ni fiarse del narrador.

## Qué hacer cuando no hay imagen

Decirlo. Un plano negro con una frase es preferible a una reconstrucción inventada. La ausencia de registro es información sobre el pasado, no un hueco de producción que haya que tapar.

# Investigación 051 — Aldeas, especialización, jerarquías, ciudades y Estados: ¿qué cambia y cómo lo sabemos?

| Campo | Valor |
|---|---|
| ID | `INV-CITIES-STATES-001` |
| Estado | `AUDITADO` |
| Dominio | arqueología de asentamientos / economía política / arqueometría / historia ambiental / paleogenómica |
| Versión | `0.1.50` |
| Corte documental | literatura primaria, metódica y adversaria verificada hasta 2026 |

![Portada editorial de archivos materiales no coetáneos de asentamiento y organización](../assets/visuales/hero-ciudades-estados.png)

La portada es una **composición editorial no probatoria**. Trama construida, rasgos de suelo, módulo doméstico, almacenamiento, restos de producción, peso/sello sin glifos y perfil abstracto de distribución no proceden de la misma región, fecha o sociedad. Su proximidad no representa una secuencia, un centro, una clase, un Estado ni una causa.

## Pregunta y vocabulario operacional

«Civilización», «complejidad», «ciudad» y «Estado» suelen reunir resultados que deben comprobarse por separado. Esta investigación operacionaliza:

| Resultado | Criterio mínimo declarado | No implica por sí solo |
|---|---|---|
| residencia | ocupación de un lugar durante una duración o estación estimada | permanencia anual |
| sedentarismo | residencia prolongada o retorno con movilidad residencial reducida | agricultura, aldea o jerarquía |
| aldea | agregado residencial relativamente estable con interacción cotidiana | ciudad, autoridad supralocal o homogeneidad |
| agregación | aumento de personas/unidades residenciales en un lugar | crecimiento continuo o centralización |
| densidad | unidades, superficie construida o población estimada por área | tamaño total, urbanidad o poder |
| extensión construida | huella de rasgos/edificios asignados a una fase | coetaneidad completa o población exacta |
| especialización | producción con conocimientos, escala o dedicación diferenciados | oficio exclusivo, clase o control estatal |
| intercambio | circulación de objetos, materias o medidas entre nodos | mercado, tributo, colonia o imperio |
| almacenamiento | acceso diferido a bienes en infraestructura o recipientes | excedente, propiedad privada o impuesto |
| administración | registro, clasificación o coordinación institucional | escritura plena, alfabetización general o soberanía |
| monumento | inversión construida que supera tareas domésticas ordinarias | rey, trabajo forzado, templo o Estado |
| desigualdad | distribución no uniforme de un recurso o proxy | rango hereditario, clase o poder político |
| jerarquía | relaciones ordenadas de rango, autoridad o asentamiento bajo una variable | soberanía territorial o estratificación total |
| autoridad | capacidad reconocida o practicada de orientar decisiones | coerción o monopolio de la fuerza |
| coerción | capacidad de imponer costes o conducta contra resistencia | Estado territorial estable |
| soberanía territorial | pretensión/capacidad institucional de decisión sobre territorio y población | imperio o ciudad grande |
| ciudad | asentamiento denso o funcionalmente diferenciado que articula una población/hinterland según criterios regionales | Estado centralizado |
| Estado | instituciones duraderas de gobierno supralocal, extracción, adjudicación y autoridad territorial | ciudad grande, escritura o imperio |
| imperio | dominio político desigual sobre varias comunidades/territorios con mecanismos de incorporación | identidad homogénea o reemplazo poblacional |

La regla de `CLAIM-CITIES-STATES-SCOPE-001` es simple:

```text
aldea grande ≠ ciudad
ciudad ≠ Estado ≠ imperio
monumento ≠ autoridad central
desigualdad ≠ clase ≠ poder político
sello o tablilla ≠ escritura ≠ alfabetización
estandarización ≠ control central
ancestría ≠ etnia/lengua/ciudadanía/clase/Estado
```

## Respuesta breve

No hubo una escalera mundial de aldea a ciudad y de ciudad a Estado. Hubo trayectorias regionales en las que agregación, especialización, administración, desigualdad y autoridad se acoplaron, desacoplaron o retrocedieron a ritmos distintos. Mesopotamia muestra rutas urbanas septentrionales y meridionales, y archivos administrativos locales que no miden alfabetización ni territorio. El Nilo permite fechar una consolidación política rápida mediante modelos bayesianos, pero la fecha no convierte cada asentamiento en capital ni observa la «unificación». El Indo combinó ciudades extensas y estandarizaciones con formas políticas todavía discutidas; su desurbanización redistribuyó asentamientos y prácticas, no hizo desaparecer a sus poblaciones. Erlitou muestra nucleación, red vial, talleres y jerarquía de asentamientos, pero «capital» y «Estado» siguen siendo inferencias que deben declarar sus criterios.

Teotihuacan y el urbanismo maya muestran que casas, barrios, producción, monumentos y paisaje se leen a escalas diferentes. Norte Chico fecha arquitectura monumental temprana sin que el reloj decida su régimen político. Jenne-jeno y Great Zimbabwe corrigen una norma de ciudad compacta, escrita y centralizada: documentan urbanismos, redes y policentrismo africanos que no necesitan copiar una plantilla mediterránea o mesopotámica. La Amazonia superior añade asentamientos conectados y urbanismo-jardín de baja densidad; lidar no convierte cada rasgo en edificio coetáneo ni cada red en Estado.

Los mejores diagnósticos combinan más de un archivo con escalas compatibles: prospección para distribución, excavación para secuencia, casas para unidades domésticas, talleres para producción, entierros para tratamiento diferencial, registros para operaciones administrativas, pesos para comparación metrológica, isótopos/genomas para movilidad/parentesco y paleoambiente para oportunidades o restricciones. Ningún archivo hereda automáticamente las conclusiones de otro.

## Escalera de inferencia

```text
rasgo u objeto localizado
        ↓ procedencia, fase y medición
actividad: residir / almacenar / producir / registrar / intercambiar
        ↓ repetición, distribución y relación entre escalas
institución o red: barrio / taller / administración / jerarquía de asentamientos
        ↓ jurisdicción, extracción, adjudicación y persistencia independientes
forma política delimitada: autoridad supralocal / Estado / imperio
        ⇢ progreso, civilización o causa única: no se heredan
```

`CLAIM-CITIES-STATES-NONINHERITANCE-001` impide subir por vocabulario cuando falta el puente empírico.

## 1. Qué responde cada archivo

| Archivo | Observado o medido | Resultado que puede restringir | Límite principal |
|---|---|---|---|
| prospección/asentamiento | rasgos, cerámica, área, densidad y distribución | agregación, jerarquía espacial, hinterland | visibilidad, cobertura, fase y población por hectárea |
| teledetección/lidar | relieve, reflectancia o geometría bajo un protocolo | huella construida, caminos, campos, conectividad | clasificación, vegetación, cronología y verificación terrestre |
| casas/barrios | planta, acceso, superficie, contenidos y secuencia | grupo doméstico, actividad, desigualdad residencial | casa ≠ hogar; abandono y conservación desiguales |
| arquitectura pública | escala, accesibilidad, inversión y remodelación | coordinación, reunión, exclusión o programa | función y financiador no observados automáticamente |
| almacenamiento/producción | capacidad, residuos, desechos, herramientas y estandarización | escala productiva, acceso, especialización | volumen usado, dedicación y control institucional |
| entierros | cuerpo, tratamiento, bienes, parentesco y dieta | diferenciación mortuoria, movilidad y relaciones | muestra selectiva; muerte no refleja toda la vida social |
| sellos/tokens/tablillas | soporte, impresiones, secuencias y contenido legible | registro, contabilidad, transacción | cobertura institucional y alfabetización desconocidas |
| pesos/medidas | masa, tolerancia, agrupación y contexto | prácticas de comparación y posible integración | unidad, usuario y regulador pueden ser múltiples |
| isotopía | dieta/movilidad durante la ventana de un tejido | procedencia y acceso diferencial | baseline, movilidad estacional e individuos sesgados |
| paleogenómica | parentesco, afinidad, mezcla y sexo biológico estimado | genealogía y movilidad de individuos | no identifica etnia, lengua, cargo o régimen |
| paleoambiente | agua, sedimento, polen, geoforma y clima | restricciones, riesgo y modificación del paisaje | correlación temporal no demuestra mecanismo político |

La matriz completa se registra en `EVID-ARCHIVE-MATRIX-051-001` y en `assets/visuales/mapa-investigacion-051.svg`.

## 2. Escalas que no se prestan resultados

Una vivienda, un barrio, un sitio, una región de prospección y una entidad política no son unidades intercambiables. Un taller excavado prueba actividad en esa fase; no cuenta todos los especialistas de la ciudad. Una muralla localiza una obra y quizá control de paso; no revela por sí sola guerra, soberanía o quién la ordenó. Una distribución regional de sitios no permite sumar áreas como si fueran simultáneas sin resolver fase y visibilidad.

La coetaneidad también tiene niveles:

1. fecha de muestra u objeto;
2. intervalo de rasgo o estrato;
3. fase cerámica/arquitectónica;
4. ocupación recurrente del sitio;
5. trayectoria regional;
6. duración de una institución o entidad política.

Una misma cifra no debe circular entre esos relojes (`CLAIM-CIV-DATING-CONTEXT-001`, reutilizado sin cambiar su estado `TRAZADO`).

## 3. Mesopotamia: ciudades, administración y ambiente no forman una monocausa

### Tell Brak y rutas septentrionales

Excavación y prospección en Tell Brak sitúan una extensa concentración de ocupación hacia fines del quinto milenio a. C., antes o en paralelo a la expansión material de Uruk. La comparación regional distingue centros de crecimiento gradual y ascensos rápidos, con contracciones posteriores. Esto reutiliza exactamente `CLAIM-CIV-URBANISM-MULTIPATH-001`, `EVID-CIV-TELLBRAK-SURVEY-001` y `EVID-CIV-NMESO-URBAN-PATHS-001`: urbanización septentrional no necesita ser una copia tardía del sur, pero superficie cerámica no observa una forma de gobierno.

### Uruk: una tablilla no es una población alfabetizada

CDLI registra P003414 como tablilla administrativa excavada, asignada a Uruk IV, aproximadamente `3350–3200 a. C.`. Es evidencia fuerte de un objeto y género local; no mide cuántas personas leían, qué territorio obedecía o si toda administración usaba escritura. Se reutilizan `CLAIM-CIV-WRITING-ADMIN-001` y `EVID-CIV-CDLI-P003414-001` sin crear duplicados.

### Irrigación: mecanismo posible, no despotismo

Giosan y Goodman (2025) combinaron topografía satelital, un testigo de Lagash y proxies paleoambientales para proponer que la irrigación mareal pudo reducir riesgo agrícola durante Ubaid/Uruk y que su pérdida acompañó la transición a redes fluviales más intensivas. Los autores califican el mecanismo económico temprano como especulativo y su reconstrucción depende de morfodinámica y analogías. El trabajo vuelve contrastable una hipótesis ambiental; no observa que el agua creara por necesidad burocracia, coerción o «despotismo» (`CLAIM-HYDRAULIC-NOT-DESPOTISM-001`).

## 4. Valle del Nilo: fechar consolidación no equivale a observar soberanía

Dee et al. integraron `186` fechas —`74` nuevas—, materiales de vida corta y orden arqueológico en un modelo bayesiano del Egipto temprano. El resultado restringe el tempo de formación estatal y la Primera Dinastía con resolución mucho mejor que una cronología sólo tipológica. Pero «fundación» o «unificación» son interpretaciones históricas: el `14C` fecha muestras y el modelo incorpora priors; no mide obediencia, fronteras, coerción o identidad (`EVID-EGYPT-CHRONOLOGY-051-001`).

El caso muestra además que un Estado territorial puede evaluarse con jerarquías de asentamientos, administración, iconografía y prácticas funerarias sin exigir que una sola gran ciudad concentre toda la población. Estado y gran ciudad son variables separadas (`CLAIM-URBANISM-STATE-SEPARATE-001`).

## 5. Indo: urbanización, estandarización y transformación

### Ciudades y forma política abierta

El urbanismo Harappa combina centros grandes, asentamientos menores, redes de intercambio, drenajes, sellos y medidas estandarizadas. Esos archivos apoyan coordinación y conectividad; no identifican automáticamente palacio, dinastía, ejército o una soberanía uniforme. La ausencia de un equivalente claro a ciertos palacios o tumbas reales tampoco demuestra igualdad total. La forma y escala de la autoridad del Indo permanecen una controversia positiva, no un vacío que deba rellenarse con Mesopotamia.

### Paisaje y desurbanización

Giosan et al. (2012) reconstruyeron geoformas y ríos, mostrando que buena parte del interfluvio Ghaggar–Hakra holoceno dependió de cursos monzónicos, no de un gran río glaciar contemporáneo. Green y Petrie (2018) armonizaron bases de prospección y observaron el paso de pocos centros grandes y numerosas aldeas a un patrón más desnucleado, pero también documentaron sesgos de cobertura y cronología.

Por ello «colapso del Indo» se descompone en abandono o reducción de algunos centros, redistribución de asentamientos, cambios técnicos y reorganización económica. No implica desaparición de pueblos ni una causa climática suficiente (`CLAIM-INDUS-DEURBANIZATION-TRANSFORMATION-001`).

### ADN antiguo

El genoma de un individuo de Rakhigarhi publicado por Shinde et al. (2019) restringe afinidades de esa persona y modelos de ancestría regional. Un individuo, aun bien contextualizado, no habla por toda la población del Indo y no revela lengua, ciudadanía, clase, oficio o estructura estatal (`CLAIM-ANCESTRY-NOT-POLITY-001`).

## 6. China: Erlitou entre asentamiento observado y capital inferida

La prospección de cobertura regional de Liu et al. (2004) identificó nucleación y una jerarquía de cuatro niveles en Yiluo durante Erlitou, junto con indicios de integración entre centro y asentamientos menores. Excavaciones sintetizadas por Zhao (2021; original chino 2020) documentan carreteras que se cruzan, recintos de talleres, edificios de múltiples patios, fosas y cambios por fases.

Esos datos sostienen diferenciación espacial, producción organizada y centralidad regional. «Capital», «realeza» y «primer Estado» son interpretaciones más altas: requieren definir jurisdicción, extracción, sucesión y alcance, y no se derivan de una red vial o edificio por sí solos (`CLAIM-ERLITOU-STATE-CONDITIONAL-001`). La ausencia de fortificación temprana también evita muralla = capital o muralla = Estado.

## 7. Mesoamérica: monumentos, barrios y urbanismos distintos

### Aguada Fénix: monumento sin Estado automático

Lidar, excavación y modelos bayesianos en Aguada Fénix sitúan una plataforma monumental entre aproximadamente `1000` y `800 a. C.`. La inversión y el espacio de reunión son observables; una dinastía, trabajo forzado o Estado no lo son. El caso separa coordinación de centralización (`CLAIM-MONUMENT-NOT-STATE-001`).

### Teotihuacan: ciudad, hogares y gobierno

El Teotihuacan Mapping Project registró la huella urbana y complejos de apartamentos. Reanálisis de viviendas estima una población cercana a `100,000`, con rangos dependientes de ocupación, definición de unidad y contemporaneidad. Casas y barrios sostienen una ciudad densa, especialización y desigualdad residencial, pero la naturaleza autocrática o colectiva del gobierno sigue discutida. Ciudad grande no decide el tipo de Estado (`EVID-MESOAMERICA-SETTLEMENT-051-001`).

### Lidar maya: ver más no es fechar todo

Canuto et al. (2018) cartografiaron con lidar asentamientos, caminos, terrazas y defensas en el norte de Guatemala. La tecnología corrige la subdetección bajo bosque y permite comparar conectividad/densidad. Cada rasgo todavía requiere clasificación, control terrestre y cronología; una muralla visible no demuestra una guerra concreta ni cada estructura fue coetánea.

## 8. Andes y Amazonia: monumentalidad y baja densidad

Las `95` fechas de `13` sitios de Norte Chico publicadas por Haas et al. sitúan arquitectura monumental y residencia entre aproximadamente `3000` y `1800 a. C.`. Reutilizar `EVID-CIV-NORTECHICO-DATES-001` fija la cronología; no convierte la arquitectura en prueba automática de Estado, clase o trabajo coercitivo (`CLAIM-ANDES-MONUMENT-NOT-STATE-001`).

En la Alta Amazonia ecuatoriana, Rostain et al. (2024) combinaron más de dos décadas de campo con lidar para documentar plataformas, plazas, caminos, drenajes y campos en una red de asentamientos ocupada durante aproximadamente dos milenios. «Urbanismo-jardín» describe una forma de ocupación de baja densidad integrada con cultivos y paisaje. No es una ciudad compacta fallida ni, por sí solo, un Estado territorial (`CLAIM-URBANISM-STATE-SEPARATE-001`).

## 9. África occidental y austral: urbanismos y policentrismo

### Jenne-jeno

Excavación y prospección situaron ocupación desde el tercer siglo a. C., crecimiento durante el primer milenio d. C., producción de hierro e intercambio interregional; el asentamiento superó `33 ha` en su apogeo. El archivo no exige escritura o un palacio para reconocer funciones urbanas. A la vez, tamaño e intercambio no demuestran un Estado centralizado. Jenne-jeno ofrece un caso empírico de ciudad compatible con organización heterárquica o policéntrica (`CLAIM-AFRICA-URBANISM-POLYCENTRIC-001`).

### Great Zimbabwe

Chirikure et al. (2013) combinaron `14C`, estratigrafía limitada e importaciones en una cronología bayesiana: la construcción de muros de piedra probablemente comenzó entre fines del siglo XII e inicios del XIII, alcanzó un máximo en los siglos XIV–XV y se solapó con Mapungubwe. Un modelo demográfico posterior estima que la población simultánea difícilmente excedió `10,000`, en parte porque sectores supuestamente coetáneos no lo eran.

El resultado adversa la ecuación monumento = megaciudad y un relevo lineal de capitales. También repara una historia colonial que negó agencia africana y dañó contextos, sin sustituirla por una forma política única (`EVID-AFRICA-URBAN-POLYCENTRIC-051-001`).

## 10. Especialización, intercambio y estandarización

Un taller puede ser doméstico, adscrito, estacional, colectivo o institucional. La concentración de desechos, herramientas y cadenas operativas permite estimar escala; «especialista de tiempo completo» exige además dedicación y dependencia. Una materia exótica prueba circulación, no el mecanismo: intercambio recíproco, mercado, tributo, regalo diplomático, movilidad artesanal o saqueo generan distribuciones diferentes.

Ialongo et al. (2021) compararon pesos de la Edad del Bronce y reprodujeron errores de copia. Su modelo muestra que agrupaciones metrológicas compatibles pueden emerger mediante interacción mercantil y propagación de error sin intervención política sustancial. Aunque el modelo no resuelve cada contexto, funciona como falsador de `estandarización = control central` (`CLAIM-STANDARDIZATION-NOT-CENTRAL-001`).

## 11. Desigualdad, rango, clase y poder

La desigualdad no es una esencia única:

| Resultado | Proxy posible | Puente adicional necesario |
|---|---|---|
| variación doméstica | área, inversión, almacenamiento, dieta | contemporaneidad, unidad doméstica y acceso |
| concentración de riqueza | distribución y Gini de un proxy | comparabilidad y más de una dimensión material |
| transmisión intergeneracional | parentesco + recursos repetidos | herencia frente a residencia, edad y rito |
| rango | tratamiento/precedencia diferencial | estabilidad y reconocimiento fuera del entierro |
| clase | relación durable con producción/extracción | reproducción social y posición estructural |
| poder político | decisión, jurisdicción, coerción o tributación | archivo institucional independiente |

Se reutilizan `CLAIM-CIV-INEQUALITY-PROXY-001` y `EVID-CIV-HOUSE-GINI-001`: en `64` sitios el Gini de superficie residencial muestra un patrón comparativo, pero área de casa sólo aproxima una dimensión y el estudio tiene corrección metodológica y cobertura desigual. Una tumba rica puede reflejar rito, edad, parentesco o evento; no prueba por sí sola clase fija. Un linaje genético recurrente en un espacio funerario puede apoyar parentesco y acceso diferencial; tampoco conserva un cargo (`CLAIM-INEQUALITY-MULTIDIMENSIONAL-001`).

## 12. Escritura y administración

Tokens, sellos, tablillas e inscripciones pueden registrar bienes, personas, actos o propiedad. El soporte, contenido y distribución deciden qué operación está documentada. Cuatro saltos deben evitarse:

```text
marca → signo: requiere convención
signo → escritura: requiere codificación lingüística o sistema equivalente declarado
registro → alfabetización general: requiere distribución de usuarios
escritura → Estado: requiere jurisdicción y gobierno independientes
```

El estudio comparativo de Opie y Atkinson, publicado en 2025 y numerado en 2026, codificó `868` culturas sobre un árbol lingüístico global. Sus modelos hallan evolución correlacionada entre grano, tributación, escritura y Estado, y una dirección más compatible con escritura después de tributación. Pero hay Estados sin escritura en la muestra, tributación tiene pocos casos y el resultado depende de variables binarias, árbol lingüístico, datos etnográficos y transmisión horizontal no modelada. Es evidencia contra «escritura siempre precede/causa Estado», no una nueva necesidad universal (`CLAIM-WRITING-NOT-STATE-REQUIREMENT-001`).

## 13. Modelos causales y falsadores

| Modelo | Predicción útil | Falsador o límite de suficiencia |
|---|---|---|
| demografía | agregación precede nuevas instituciones/infraestructura | instituciones sin crecimiento o crecimiento sin centralización |
| circunscripción | límites y conflicto restringen salida, favoreciendo subordinación | áreas circunscritas sin Estado o formación sin presión demostrada |
| irrigación | inversión, mantenimiento y coordinación hídrica preceden administración | sistemas distribuidos/autogestionados; autoridad previa |
| guerra | defensas, trauma y destrucción preceden extracción/coalición | murallas sin conflicto, conflicto sin centralización |
| comercio | nodos, especialización y circulación sostienen instituciones | intercambio intenso sin Estado o control no central |
| información | escala supera capacidad sin registros/delegación | gobierno con medios no escritos; registros sin Estado |
| ritual/religión | espacios y calendarios coordinan colectivos | monumentos/repetición sin autoridad central demostrada |
| ecología | cambio de riesgo/productividad altera costes y oportunidades | sincronía sin mecanismo; respuestas divergentes al mismo forzamiento |
| agencia política | coaliciones, resistencia y decisiones cambian instituciones | relato intencional sin huellas de acción/alternativas |

Carneiro (1970), la tradición hidráulica, modelos de excedente, comercio e información formularon mecanismos generales. Opie y Atkinson (2025/2026) y la morfodinámica de Sumer aportan pruebas nuevas, pero ninguna asociación global decide casos regionales. Los mecanismos pueden ser causa, consecuencia o retroalimentación; deben declarar variable, desfase, escala y caso negativo (`CLAIM-STATE-CAUSES-MULTIMODEL-001`).

## 14. «Colapso»: transformación antes que desaparición

Lawrence, Palmisano y de Gruchy (2021) combinaron distribuciones de asentamientos, sumas probabilísticas de `14C` y proxies para el norte del Creciente Fértil alrededor del evento `4.2 ka`. Encontraron respuestas espaciales heterogéneas, continuidad y reorganización que no sostienen un derrumbe climático uniforme. En el Indo, la desnucleación desplazó el peso hacia asentamientos menores y otros paisajes.

Por ello «colapso» se sustituye, cuando los datos lo permiten, por resultados medibles: pérdida de una institución, fragmentación de una entidad, reducción o traslado de población, abandono urbano, cambio de red, migración o pérdida diferencial de archivos. Las personas y saberes pueden continuar bajo otras formas (`CLAIM-COLLAPSE-TRANSFORMATION-001`).

## 15. Reconciliación con `INV-CIV-ORIGINS-001`

La investigación temática CIV-001 permanece `TRAZADO`: ofrece marco crítico y primeras cadenas, no es sustituida ni promovida por esta auditoría. La 051 reutiliza sólo proposiciones/evidencias idénticas:

- `CLAIM-CIV-CATEGORY-001` y su historia conceptual;
- `CLAIM-CIV-DATING-CONTEXT-001` para muestra/contexto;
- `CLAIM-CIV-SEQUENCE-NONUNIVERSAL-001` para negar una secuencia necesaria;
- `CLAIM-CIV-URBANISM-MULTIPATH-001` con Tell Brak/comparación regional;
- `CLAIM-CIV-WRITING-ADMIN-001` con P003414;
- `CLAIM-CIV-INEQUALITY-PROXY-001` con Gini residencial;
- `EVID-CIV-EGYPT-CHRONOLOGY-001` y `EVID-CIV-NORTECHICO-DATES-001` como cadenas cronológicas exactas.

Las nuevas proposiciones 051 —ciudad/Estado separados, archivos, modelos, policentrismo africano, transformación, estandarización y ancestría— tienen IDs propios. `INV-CIV-ORIGINS-001` no se marca `AUDITADO` ni se cita como sustituto (`CLAIM-CIV051-RECONCILIATION-001`).

## LO OBSERVADO

- rasgos de suelo, edificios, superficies, caminos, talleres, depósitos, residuos y entierros en contextos concretos;
- objetos de registro, sellado, medida e intercambio con procedencia declarada;
- distribuciones de sitios o anomalías remotas bajo protocolos específicos;
- tejidos, isótopos y secuencias de individuos muestreados;
- sedimentos y proxies ambientales vinculados a lugares y ventanas temporales.

No se observan directamente «complejidad», soberanía, clase, Estado, civilización, causa o colapso total.

## LO MEDIDO

- área, densidad, volumen, accesibilidad, conectividad y contemporaneidad estimada;
- masa, tolerancia, composición, procedencia y cadena operativa;
- edad de muestra/capa y parámetros de modelos cronológicos;
- diversidad, Gini u otras distribuciones de proxies;
- dieta/movilidad/parentesco/afinidad de individuos bajo baselines y modelos;
- clima, hidrología y cambio de paisaje con resolución propia.

Cada medida conserva su unidad y error. Sumar hectáreas, tumbas, signos y genomas no produce una escala universal de «avance».

## LO INFERIDO

Se infieren con confianza graduada residencia, agregación, especialización, intercambio, administración, desigualdad, autoridad y forma política cuando existen puentes independientes. Ciudad y Estado son modelos comparativos revisables, no hechos heredados de tamaño o monumento. Causas y colapsos requieren mecanismos, casos negativos y escalas explícitas.

## LOS SUPUESTOS

1. rasgos asignados a una fase son suficientemente coetáneos para la comparación declarada;
2. cobertura y visibilidad permiten estimar ausencias o jerarquías sin sesgo decisivo;
3. casa, tumba, taller o registro representan la unidad social propuesta;
4. proxies de población, riqueza y movilidad tienen calibraciones pertinentes;
5. categorías comparativas no borran instituciones y términos locales;
6. modelos ambientales o filogenéticos incluyen variables relevantes y no invierten causa/efecto;
7. datos coloniales, legados y colecciones se auditan por pérdida, selección y autoridad;
8. genomas de individuos no se convierten en identidades políticas.

## LAS INCERTIDUMBRES

- `U-PROV`: mezcla, saqueo, restauración, legado y contexto secundario;
- `U-DAT`: carbón viejo, priors, fase cerámica y contemporaneidad de superficie;
- `U-PRES`: destrucción urbana, vegetación, enterramiento y materiales perecederos;
- `U-MOD`: población por hectárea, clasificación lidar, filogenia y parámetros causales;
- `U-SCALE`: casa, barrio, sitio, región y entidad política no intercambiables;
- `U-SEM`: ciudad, Estado, jerarquía, clase, administración y colapso varían por definición;
- `U-SAMPL`: cementerios, viviendas excavadas y genomas no representan automáticamente a todos;
- `U-GOV`: acceso, custodia, repatriación y autoridad de comunidades descendientes/locales.

## LAS CONTROVERSIAS

1. `CONT-CITY-DEFINITION-001`: densidad, tamaño, funciones o centralidad regional.
2. `CONT-STATE-IDENTIFICATION-001`: jurisdicción y coerción frente a coordinación distribuida.
3. `CONT-URUK-CAUSES-001`: ambiente, producción, intercambio, demografía e instituciones.
4. `CONT-INDUS-POLITICAL-FORM-001`: centralización, heterarquía y escalas regionales.
5. `CONT-ERLITOU-STATE-001`: capital/Estado frente a centro jerárquico condicionado.
6. `CONT-AFRICAN-URBANISM-001`: ciudad compacta/monumental frente a redes y policentrismo.
7. `CONT-INEQUALITY-POWER-001`: riqueza material, rango, herencia, clase y autoridad.
8. `CONT-COLLAPSE-CAUSES-001`: causalidad climática frente a trayectorias multicausales.

## LAS ALTERNATIVAS

- agregación estacional/recurrente en vez de residencia permanente;
- espacio colectivo o ritual sin gobierno central;
- producción doméstica coordinada en vez de taller estatal;
- intercambio entre agentes en vez de redistribución palacial;
- fortificación como control de animales/agua/acceso, o exhibición, además de guerra;
- riqueza mortuoria episódica en vez de clase hereditaria;
- estandarización por redes de usuarios en vez de decreto central;
- escritura especializada en vez de alfabetización general;
- ciudad heterárquica sin Estado centralizado y gobierno territorial sin gran ciudad;
- transformación/migración en vez de desaparición.

## QUÉ PODRÍA FALSARLO

1. una variable operacional reproduce universalmente la secuencia aldea→ciudad→Estado bajo regiones, escalas y preservaciones independientes;
2. registros de jurisdicción y extracción aparecen sin ambigüedad donde se defendía coordinación no estatal;
3. hogares/tumbas genéticamente vinculados predicen transmisión estable de riqueza y cargo fuera del conjunto que definió el patrón;
4. pesos contextualizados muestran tolerancias imposibles por copia/red y evidencia independiente de emisión/control central;
5. lidar, excavación y fechas directas invalidan una clasificación regional o su coetaneidad;
6. una perturbación ambiental precede, con mecanismo y casos control, el mismo cambio institucional en regiones independientes;
7. transectos de asentamiento demuestran despoblamiento sin redistribución donde se propuso transformación;
8. ADN, textos y práctica material co-localizados muestran que una categoría política correspondía al grupo biológico propuesto, sin extrapolar a otros tiempos.

## NIVEL DE CONFIANZA

- **Alto:** las categorías operacionales no se heredan; cada archivo mide unidades distintas; escritura, monumento, muralla, estandarización y ancestría no bastan por sí solos para identificar Estado, clase o identidad política.
- **Medio–alto:** existen trayectorias urbanas y políticas múltiples, incluida la separación posible entre ciudad y centralización estatal, y los casos regionales exigen cronologías y escalas propias.
- **Medio:** inferencias regionales sobre especialización, desigualdad, autoridad y transformación cuando convergen asentamiento, hogares, producción, cronología y registros independientes.
- **Bajo o condicionado:** una monocausa global, una taxonomía universal de ciudad/Estado, o la atribución de lengua, etnia, clase o soberanía desde ancestría, forma urbana u objeto aislado.

## QUÉ SABEMOS REALMENTE

Los archivos permiten medir agregación, distribución de construcciones, producción, almacenamiento, intercambio, registros, diferencias materiales y cambios de paisaje en lugares y tiempos concretos. Su convergencia puede sostener centralidad urbana, administración, desigualdad o autoridad con confianza graduada. Las secuencias regionales no forman un paquete universal: ciudad y Estado, sedentarismo y agricultura, monumento y coerción, escritura y soberanía pueden desacoplarse.

## QUÉ TODAVÍA NO SABEMOS

No existe un umbral material único que identifique ciudad, Estado o imperio en todos los archivos. En muchos casos siguen abiertas la extensión efectiva de jurisdicción, la participación y resistencia de hogares, el grado de coerción, la transmisión intergeneracional de rango, la relación entre cambio ambiental e instituciones y la escala de poblaciones no representadas por excavación, textos o ADN. Resolverlas exige nuevos muestreos, fechas, contextos, gobernanza del archivo y pruebas adversariales, no una etiqueta más amplia.

## Conclusión

La arqueología no descubre una línea ascendente hacia «civilización»; reconstruye relaciones parciales entre personas, objetos, lugares e instituciones. Una ciudad puede articular densidad y funciones sin un Estado centralizado; un Estado puede gobernar un territorio sin una megaciudad. Monumentos, murallas, tumbas, registros, pesos y genomas responden preguntas distintas. La explicación mejora cuando cada puente declara unidad, reloj, alternativa y falsador, y cuando las categorías indígenas/locales y la gobernanza del archivo forman parte del método.

## Fuentes núcleo auditadas

- Childe (1950), DOI `10.3828/tpr.21.1.k853061t614q42qh`.
- Oates et al. (2007), DOI `10.1017/S0003598X00095600`.
- Lawrence & Wilkinson (2015), DOI `10.15184/aqy.2014.44`.
- Giosan & Goodman (2025), DOI `10.1371/journal.pone.0329084`.
- Dee et al. (2013), DOI `10.1098/rspa.2013.0395`.
- Giosan et al. (2012), DOI `10.1073/pnas.1112743109`.
- Green & Petrie (2018), DOI `10.1080/00934690.2018.1464332`.
- Shinde et al. (2019), DOI `10.1016/j.cell.2019.08.048`.
- Liu et al. (2004), DOI `10.1179/jfa.2004.29.1-2.75`.
- Zhao (2021; original 2020), DOI `10.1515/char-2021-0012`.
- Millon (1970), DOI `10.1126/science.170.3962.1077`.
- Canuto et al. (2018), DOI `10.1126/science.aau0137`.
- Inomata et al. (2020), DOI `10.1038/s41586-020-2343-4`.
- Rostain et al. (2024), DOI `10.1126/science.adi6317`.
- Haas et al. (2004), DOI `10.1038/nature03146`.
- McIntosh & McIntosh (1981), DOI `10.1017/S0021853700018983`.
- Chirikure et al. (2013), DOI `10.1017/S0003598X00049516`.
- Chirikure et al. (2017), DOI `10.1371/journal.pone.0178335`.
- Kohler et al. (2017; corrección 2018), DOI `10.1038/nature24646`, `10.1038/nature25992`.
- Ialongo et al. (2021), DOI `10.1073/pnas.2105873118`.
- Lawrence et al. (2021), DOI `10.1371/journal.pone.0244871`.
- Opie & Atkinson (2025/2026), DOI `10.1038/s41562-025-02365-5`.

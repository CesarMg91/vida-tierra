---
id: INV-LIFE-LUCA-001
titulo: "¿Qué se puede reconstruir de LUCA y qué no?"
estado: AUDITADO
ultima_revision: 2026-08-11
claims:
  - CLAIM-LUCA-COMMON-ANCESTRY-001
  - CLAIM-LUCA-DEFINITION-001
  - CLAIM-LUCA-ROOT-001
  - CLAIM-LUCA-TRANSLATION-001
  - CLAIM-LUCA-CELL-001
  - CLAIM-LUCA-DNA-001
  - CLAIM-LUCA-ENERGY-001
  - CLAIM-LUCA-METABOLISM-001
  - CLAIM-LUCA-GENOME-001
  - CLAIM-LUCA-AGE-001
  - CLAIM-LUCA-ECOSYSTEM-001
fuentes:
  - SRC-WOESE-FOX-1977
  - SRC-IWABE-1989
  - SRC-GOGARTEN-1989
  - SRC-THEOBALD-2010
  - SRC-WILLIAMS-2013
  - SRC-WEISS-2016
  - SRC-BETTS-2018
  - SRC-COLEMAN-2019
  - SRC-KOONIN-KRUPOVIC-2020
  - SRC-MOODY-2024
---

# Investigación 016 — ¿Qué se puede reconstruir de LUCA y qué no?

![Portada conceptual de LUCA](../assets/visuales/hero-luca.png)

> **Portada conceptual:** una población microbiana hipotética junto a gradientes hidrotermales se transforma en árboles, secuencias y proteínas actuales. No es un retrato de LUCA, no fija su hábitat ni su membrana y no representa genomas fósiles recuperados.

![Mapa de evidencia de LUCA](../assets/visuales/mapa-investigacion-016.svg)

![Cadena desde genes actuales hasta LUCA](../assets/visuales/de-gen-a-luca.svg)

## Respuesta breve, con sus condiciones

`LUCA` es el **último ancestro común universal** de todas las líneas celulares que siguen representadas por descendientes conocidos. Es un nodo genealógico inferido, no el primer ser vivo, no una especie fósil descubierta y no necesariamente una célula individual aislada (`CLAIM-LUCA-DEFINITION-001`).

La conclusión más robusta no es una lista de 355 o 2,600 genes. Es que Bacteria y Archaea comparten una herencia profunda: código genético casi universal, ribosomas homólogos, `tRNA`, aminoacil‑`tRNA` sintetasas, componentes de transcripción y una moneda energética basada en ATP. La comparación formal de proteínas conservadas favorece abrumadoramente la ascendencia común frente a orígenes independientes de los grandes grupos (`SRC-THEOBALD-2010`).

Podemos reconstruir con confianza desigual:

```text
ascendencia común de la vida celular conocida       A-COND
LUCA no equivale a la primera vida                   A-SEM
traducción ribosomal y código ya operativos          A-B
separación basal Bacteria | Archaea                  B-COND
célula con gradientes y síntesis de ATP              B-COND
genoma de DNA en LUCA                                B-COND
polimerasa replicativa exacta                        D
composición de la membrana                           D
anaerobio con metabolismo de carbono central         C-COND
acetógeno hidrotermal termófilo                       C-D
genoma de ~2.5–3.0 Mb y ~2,600 proteínas             C-COND
edad cercana a 4.2 Ga                                C-D
localidad, especie y aspecto exactos                  E
```

La regla central es:

```text
presente en Bacteria y Archaea
              ≠
heredado verticalmente desde LUCA
```

Entre ambos extremos pueden intervenir transferencia horizontal, pérdida diferencial, duplicación anterior al nodo, reemplazo por una proteína no homóloga, clasificación errónea de ortólogos y sesgo de muestreo. Reconstruir LUCA exige modelar esas rutas; contar genes compartidos no basta.

## 0. Cinco conceptos que no deben colapsarse

| Concepto | Definición operacional | No autoriza |
|---|---|---|
| origen de la vida | transición desde química prebiótica hasta sistemas evolutivos | identificar a LUCA con el primer replicador |
| ascendencia común universal | los organismos celulares conocidos pertenecen a una genealogía conectada | una sola célula inicial o un solo origen químico |
| LUCA | población/nodo más reciente ancestral a Bacteria y Archaea actuales | reconstruir todos sus contemporáneos |
| raíz del árbol celular | dirección profunda que separa los linajes principales | un árbol puro para cada gen |
| reconstrucción ancestral | probabilidad de rasgos o familias génicas bajo un modelo | recuperar el DNA físico del ancestro |

En un árbol de descendientes actuales, LUCA es el nodo más antiguo accesible por comparación filogenética. Pudo estar precedido por una larga evolución y coexistir con linajes que se extinguieron sin descendientes celulares muestreados. Esos «compañeros de habitación» no aparecen como ramas terminales, aunque pudieron dejar genes por transferencia (`CLAIM-LUCA-ECOSYSTEM-001`).

## 1. Lo que realmente se mide

No existe una muestra etiquetada «LUCA». Los datos inmediatos son modernos:

- secuencias de `rRNA`, proteínas y genomas de organismos actuales;
- estructuras tridimensionales de ribosomas, polimerasas y ATP sintasas;
- presencia, ausencia y copia de familias génicas en taxones muestreados;
- árboles de genes con soporte estadístico;
- árboles de especies construidos con marcadores seleccionados;
- tasas de sustitución, calibraciones fósiles y geoquímicas;
- funciones bioquímicas medidas en organismos modernos.

La inferencia recorre varios puentes:

```text
secuencia actual
   ↓ homología y ortología
familia génica
   ↓ árbol del gen
duplicaciones / pérdidas / transferencias
   ↓ reconciliación con árbol de especies
probabilidad de presencia en el nodo LUCA
   ↓ anotación funcional y ensamblaje de rutas
rasgo fisiológico hipotético
```

Cada flecha puede fallar de una manera distinta. Una función moderna puede no ser ancestral; una enzima ancestral puede haber tenido otra función; una ruta incompleta puede ser artefacto de anotación; y una transferencia antigua puede imitar herencia vertical.

## 2. Ascendencia común: la conclusión antes que el retrato

Woese y Fox compararon secuencias de `rRNA` y mostraron que los procariotas no eran un bloque homogéneo: reconocieron una separación profunda entre eubacterias y arqueobacterias (`SRC-WOESE-FOX-1977`). El resultado histórico cambió la clasificación y convirtió las moléculas conservadas en archivos genealógicos.

La evidencia de parentesco común procede de una **arquitectura coordinada**, no de una semejanza aislada:

- el ribosoma conserva homología estructural y funcional entre dominios;
- el código asigna casi los mismos codones a los mismos aminoácidos;
- `tRNA`, factores de traducción y muchas sintetasas forman sistemas relacionados;
- la transcripción multisubunidad y múltiples cofactores comparten núcleos;
- ATP funciona como moneda energética y las ATP sintasas pertenecen a familias homólogas.

Theobald comparó modelos de ascendencia común e independiente con proteínas universalmente conservadas. Bajo el conjunto de modelos evaluado, la genealogía común recibió apoyo abrumador incluso admitiendo transferencia horizontal y fusiones simbióticas (`EVID-LUCA-COMMON-001`, `SRC-THEOBALD-2010`).

El alcance debe escribirse con cuidado:

```text
resultado fuerte: toda la vida celular conocida comparte herencia
no resuelto:      cuántas veces comenzó la vida antes de ese cuello genealógico
no resuelto:      qué linajes tempranos desaparecieron sin descendencia muestreada
```

Por eso «ascendencia común de lo conocido» no equivale lógicamente a «la vida sólo se originó una vez».

## 3. Dar dirección al árbol

Un árbol construido con una familia de genes puede mostrar relaciones sin indicar qué bifurcación es la más antigua. No existe un organismo exterior a toda la vida conocida que sirva como *outgroup*. Para orientar el árbol universal se usan duplicaciones génicas anteriores a LUCA.

Si un gen se duplicó antes del nodo y ambas copias sobrevivieron en Bacteria y Archaea, cada copia puede enraizar a la otra. Iwabe et al. aplicaron esta lógica a factores de elongación y subunidades de ATPasas; Gogarten et al. compararon subunidades paralógicas de ATPasas (`SRC-IWABE-1989`, `SRC-GOGARTEN-1989`). Los análisis clásicos situaron la raíz entre Bacteria y el linaje que incluye Archaea y Eukaryota.

La visión actual no requiere tres troncos primarios equivalentes. La mayor parte de los genes informacionales eucariotas y los análisis filogenómicos ubican a Eukaryota dentro o junto a linajes arqueanos; las mitocondrias aportan además una herencia bacteriana. Para LUCA, la divergencia relevante es `Bacteria | Archaea`, con Eukaryota como linaje derivado y quimérico (`CLAIM-LUCA-ROOT-001`, `SRC-WILLIAMS-2013`).

Las raíces antiguas son condicionadas porque:

- una transferencia puede mover una copia entre dominios;
- un paralogo oculto puede compararse con el homólogo equivocado;
- ramas muy largas pueden atraerse por error;
- modelos de sustitución inadecuados confunden convergencia con parentesco;
- cada familia conserva sólo parte de la historia celular.

La raíz recibe `B-COND`, no porque todas las posiciones sean igualmente probables, sino porque su apoyo depende de familias, taxones y modelos concretos.

## 4. Del árbol de genes al inventario ancestral

Hay dos estrategias principales, con sesgos opuestos.

### 4.1 Criterio conservador de monofilia por dominio

Weiss et al. agruparon `6,103,411` proteínas de `1,847` genomas bacterianos y `134` arqueanos en `286,514` familias. Sólo `355` familias cumplieron sus filtros: presencia en al menos dos grupos de cada dominio y árboles que conservaran monofilia bacteriana y arqueana (`SRC-WEISS-2016`).

Ventaja: reduce transferencias interdominio sencillas.

Costes:

- transferencia incluso de genes universales produce falsos negativos;
- varias transferencias pueden imitar verticalidad y producir falsos positivos;
- genes de evolución rápida o mal muestreados desaparecen del inventario;
- `355` es una lista filtrada, no el tamaño completo del genoma.

Los propios autores encontraron ocho funciones dependientes o detoxificadoras de `O₂` entre las candidatas, un control negativo que demuestra que el filtro no elimina toda historia posterior.

### 4.2 Reconciliación probabilística con transferencias

Moody et al. construyeron un árbol de especies con `700` genomas balanceados y reconciliaron árboles de familias KEGG mediante `ALE`, un modelo que asigna duplicaciones, transferencias y pérdidas. Cada familia recibe una probabilidad de presencia en cada nodo (`SRC-MOODY-2024`).

La salida no es una lista observada:

```text
P(familia K en LUCA | árbol del gen, árbol de especies,
                     modelo de transferencia/pérdida, muestreo)
```

Con un umbral conservador de `PP ≥ 0.75` y presencia en ambos dominios, el análisis retuvo `399` familias KEGG para la reconstrucción metabólica. Al integrar también probabilidades menores y usar regresiones aprendidas de genomas modernos, estimó `2.75 Mb` (`2.49–2.99 Mb`) y `2,657` proteínas (`2,451–2,855`).

Eso es una extrapolación modelada. La relación entre familias KEGG y tamaño de genoma se calibró con organismos modernos; además, KEGG puede dividir homólogos profundos en grupos taxonómicos separados. El propio método no recupera cuáles eran todas las secuencias ni el orden físico de los genes (`CLAIM-LUCA-GENOME-001`).

## 5. El núcleo más sólido: información y traducción

El inventario mejor defendido no es una célula moderna completa, sino una maquinaria de información ya sofisticada:

- ribosomas con `rRNA` y proteínas homólogas;
- código genético esencialmente establecido;
- `tRNA` y enzimas que cargan aminoácidos;
- factores de iniciación, elongación y terminación en sus núcleos;
- RNA polimerasa multisubunidad;
- rutas de síntesis y modificación de nucleótidos y cofactores;
- chaperonas y mecanismos básicos de procesamiento proteico.

La paradoja aparente —un ancestro «último» con traducción compleja— se resuelve recordando que LUCA no es el origen. Ribosomas y código tuvieron una historia anterior, quizá larga, de selección, transferencia y estandarización comunitaria.

| Rasgo | Base | Confianza | Límite |
|---|---|---:|---|
| traducción ribosomal | homología universal de RNA/proteínas | A-B | detalle de todas las subunidades |
| código casi universal | correspondencia codón–aminoácido | A | excepciones posteriores; origen no fechado |
| `tRNA` y sintetasas | familias profundas y función coordinada | A-B | reemplazos y parálogos antiguos |
| transcripción | núcleo homólogo de RNA polimerasa | B | iniciación/regulación exactas |
| proteoma completo | reconciliación y regresión | C | identidad y número dependen del modelo |

`CLAIM-LUCA-TRANSLATION-001` es más fuerte que cualquier retrato metabólico porque descansa en múltiples componentes interdependientes y distribuidos universalmente.

## 6. ¿Era una célula delimitada?

Las ATP sintasas incluyen componentes de membrana y duplicaciones anteriores a LUCA. La inserción de proteínas, el transporte iónico y la conservación de energía mediante gradientes apoyan un sistema delimitado capaz de mantener diferencias electroquímicas (`CLAIM-LUCA-CELL-001`, `CLAIM-LUCA-ENERGY-001`).

Eso no identifica la química de la frontera. La «división lipídica» separa:

| Bacteria | Archaea |
|---|---|
| glicerol‑3‑fosfato | glicerol‑1‑fosfato |
| enlaces éster | enlaces éter |
| cadenas de ácidos grasos | cadenas isoprenoides |

Las enzimas centrales de ambas rutas no forman simplemente un sistema universal ortólogo. Coleman et al. analizaron filogenias de genes de biosíntesis lipídica con métodos de enraizamiento sin grupo externo. Los árboles antiguos son difíciles de resolver y permiten historias con pérdidas, transferencias y fijación posterior de las membranas canónicas (`SRC-COLEMAN-2019`).

Escenarios compatibles con los datos incluyen:

1. LUCA con membrana de tipo bacteriano y reemplazo en Archaea;
2. LUCA con componentes arqueanos y reemplazo bacteriano;
3. membrana mixta de lípidos éter/éster;
4. población con rutas heterogéneas antes de fijarse la división;
5. dependencia parcial de compartimentos minerales, seguida por membranas modernas.

La presencia de ATPasas transmembrana favorece alguna delimitación energética; no convierte ninguna de esas cinco opciones en un hecho. La composición exacta queda en `D` (`CONT-LUCA-MEMBRANE-001`).

## 7. ¿Tenía un genoma de DNA?

La traducción y la transcripción muestran continuidad profunda, pero las principales DNA polimerasas replicativas, primasas y helicasas difieren entre Bacteria y Archaea/Eukaryota. Esa discontinuidad permitió proponer un LUCA con genoma de RNA o un ciclo parecido al de retroelementos.

La hipótesis de un LUCA con DNA recibe apoyo indirecto de:

- RNA polimerasas DNA‑dependientes homólogas;
- enzimas universales de síntesis de desoxirribonucleótidos;
- abrazadera deslizante, cargador de abrazadera, ligasas y proteínas de reparación profundas;
- complejidad informacional difícil de mantener en un gran genoma de RNA;
- homología estructural entre la PolD arqueana y el núcleo de RNA polimerasas.

Koonin et al. propusieron que la PolD arqueana desciende de la replicasa de LUCA y que las polimerasas bacterianas y eucariotas fueron reemplazos posteriores, quizá relacionados con virus o elementos móviles (`SRC-KOONIN-KRUPOVIC-2020`). Es un escenario parsimonioso, no una observación ancestral.

Por tanto:

```text
LUCA con DNA                           B-COND
LUCA con una replicación moderna       no demostrado
PolD como replicasa ancestral exacta   C-D
RNA como único genoma de LUCA          D
```

La incertidumbre no exige elegir entre «DNA moderno completo» y «progenote sin herencia». Permite un sistema de DNA cuyos componentes principales fueron sustituidos de forma no ortóloga (`CONT-LUCA-REPLICATION-001`).

## 8. Metabolismo y hábitat: dos reconstrucciones, una advertencia

El conjunto de Weiss et al. enriqueció proteínas con centros `Fe–S`, ferredoxina, radicales y cofactores antiguos. Los autores reconstruyeron un organismo anaerobio, dependiente de `H₂`, fijador de `CO₂` mediante la vía de Wood–Ljungdahl, termófilo y asociado a ambientes hidrotermales (`EVID-LUCA-WEISS-001`).

Moody et al., con reconciliación explícita de transferencias, recuperaron gran parte de la vía de Wood–Ljungdahl, ATP sintasa, componentes de gluconeogénesis/glucólisis y ciclos parciales. Interpretaron un anaerobio de grado procariota, compatible con acetogénesis y posiblemente capaz de alternar autotrofía y heterotrofía (`EVID-LUCA-MOODY-RECON-001`).

La coincidencia entre métodos independientes fortalece un **núcleo anaerobio y quimiosmótico**, pero no prueba una chimenea concreta:

| Inferencia | Dependencia crítica |
|---|---|
| anaerobiosis | ausencia inferida de oxidasa terminal + Tierra preoxigénica |
| uso de `H₂` | subunidades de hidrogenasas y contexto redox |
| vía Wood–Ljungdahl | asignación de familias, completitud y dirección de flujo |
| acetogénesis | ruta presente ≠ modo ecológico obligatorio |
| termofilia | composición de proteínas/enzimas y sesgo de linajes profundos |
| ambiente hidrotermal | compatibilidad geoquímica, no geolocalización |

Rutas antiguas se transfieren con frecuencia y pueden operar en ambas direcciones. Una colección de enzimas no identifica por sí sola el sustrato dominante, el flujo neto ni el lugar donde vivía una población (`CLAIM-LUCA-METABOLISM-001`).

## 9. Fechar un nodo sin fósil

Un fósil microbiano temprano establece que la vida existía para cierta fecha; no identifica el nodo LUCA. Un reloj molecular requiere calibrar cambios de secuencia con eventos fechados, y la raíz es especialmente difícil porque no tiene una rama ancestral observable.

Betts et al. combinaron calibraciones fósiles y relojes moleculares y situaron a LUCA antes de `3.9 Ga`, bajo sus modelos y restricciones (`SRC-BETTS-2018`). Moody et al. usaron cinco pares de parálogos que se duplicaron antes de LUCA. La misma divergencia aparece a ambos lados de cada duplicación y puede «abrazarse» con una edad común (*cross‑bracing*). Con `13` calibraciones y dos modelos de reloj relajado obtuvieron cerca de `4.2 Ga`, con intervalos principales `4.09–4.33 Ga` y `4.18–4.33 Ga` (`EVID-LUCA-MOODY-CLOCK-001`).

La fecha está condicionada por:

- calibraciones fósiles/isotópicas escasas y discutibles;
- posición filogenética asignada a cada calibración;
- límite máximo próximo al impacto formador de la Luna;
- modelos de sustitución y de variación de tasas;
- selección de sólo cinco familias duplicadas;
- corrección de parálogos, transferencias y ramas largas.

Los análisis de sensibilidad muestran estabilidad dentro de la familia de modelos probada, no independencia de todos esos supuestos. Por eso `~4.2 Ga` se registra como estimación modelada `C-D`, no como edad radiométrica de LUCA (`CLAIM-LUCA-AGE-001`).

## 10. Individuo, especie o población

Un nodo filogenético se dibuja como un punto, pero una divergencia biológica ocurre en poblaciones. En microbios con transferencia horizontal, diferentes genes pueden atravesar el cuello genealógico en momentos distintos.

Una formulación segura es:

> LUCA representa la población ancestral más reciente desde la cual descienden las herencias celulares centrales de Bacteria y Archaea actuales.

No obliga a:

- una sola célula materna;
- un genoma idéntico en todos los individuos;
- aislamiento reproductivo de tipo animal;
- ausencia de virus o elementos móviles;
- monopolio del ecosistema;
- que cada gen moderno pasara exactamente por el mismo individuo.

Moody et al. modelaron un ecosistema en el que acetato y materia orgánica producidos por LUCA podían sostener otras rutas, y `H₂` podía reciclarse por fotoquímica atmosférica. Es una demostración de coherencia biogeoquímica, no un censo del océano temprano. Aun así, la existencia de virus, competidores o socios es más plausible que un único organismo autosuficiente en un planeta vacío (`CLAIM-LUCA-ECOSYSTEM-001`).

## 11. Lo que la reconstrucción no puede entregar

| Pregunta | Límite actual |
|---|---|
| ¿cómo se veía? | no hay morfología fósil asignable ni pared/membrana cerradas |
| ¿dónde vivía? | las rutas son compatibles con varios gradientes y sedimentos |
| ¿qué especie era? | categorías modernas no se aplican limpiamente a una población reticulada |
| ¿cuál era su secuencia? | se infieren familias, no bases ni cromosomas completos |
| ¿cuándo nació? | un nodo poblacional no es un instante y el reloj es modelado |
| ¿fue la primera vida? | la complejidad heredada exige evolución anterior |
| ¿era el único linaje? | la extinción borra ramas; la transferencia puede dejar fragmentos |
| ¿cuántos orígenes hubo? | la genealogía de supervivientes no observa intentos sin descendencia |

LUCA funciona como una **frontera de reconstrucción**, no como una frontera absoluta de historia.

## 12. Matriz de evidencias y dependencias

| Evidencia | Dato inmediato | Claim máximo | Dependencia compartida |
|---|---|---|---|
| `rRNA` y ribosoma | secuencias/estructuras homólogas | parentesco y traducción profunda | alineamiento y modelo evolutivo |
| código genético | asignaciones casi universales | estandarización anterior a divergencia | excepciones y congelamiento histórico |
| parálogos antiguos | dos familias con Bacteria/Archaea | raíz y duplicación pre‑LUCA | ortología, HGT y ramas largas |
| 355 árboles | monofilia por dominio tras filtros | núcleo conservador y fisiología candidata | muestreo y falso patrón vertical |
| `ALE`/KEGG | probabilidades de D/T/L | inventario y rutas probables | árbol de especies, anotación y modelo |
| reloj *cross‑braced* | distancias + 13 calibraciones | edad probabilística | fósiles, priors y tasa |
| lipidomas modernos | rutas ester/éter distintas | división fijada tras un ancestro común | transferencias y raíces de genes |
| replisomas modernos | núcleos no homólogos | reemplazos profundos; DNA probable | función ancestral y escenarios virales |

Contar ocho filas no produce ocho réplicas. Varias reutilizan las mismas secuencias, taxonomía, anotaciones y árboles. La independencia relevante aparece cuando cambia el material, el modelo o la predicción adversarial.

## 13. Pruebas adversariales prioritarias

1. repetir reconciliaciones con árboles de especies alternativos y taxones de genomas pequeños;
2. validar familias ancestrales con estructura, sintenia y perfiles, no sólo similitud de secuencia;
3. cuantificar falsos positivos mediante funciones imposibles para una Tierra anóxica;
4. reconstruir rutas bajo bases de ortología distintas de KEGG y COG;
5. probar membranas mixta, bacteriana y arqueana con predicciones filogenéticas separables;
6. buscar homología estructural entre replicasas y reconstruir experimentalmente intermediarios;
7. fechar otros parálogos pre‑LUCA con calibraciones independientes;
8. eliminar una calibración y una familia por vez, reportando distribuciones completas;
9. distinguir transferencia pre‑divergencia de presencia en el ancestro con modelos de linajes extinguidos;
10. reconstruir enzimas ancestrales y medir estabilidad/función sin convertir el resultado en hábitat único.

## 14. Jerarquía de conclusiones

| Afirmación | Confianza | Razón de no subir más |
|---|---:|---|
| la vida celular conocida comparte ascendencia | `A-COND` | depende del universo muestreado y modelos de secuencia |
| LUCA no fue necesariamente la primera vida | `A-SEM` | es una consecuencia de la definición |
| LUCA poseía traducción ribosomal y código establecido | `A-B` | inventario exacto y reemplazos parciales |
| la raíz principal separa Bacteria y Archaea | `B-COND` | HGT, parálogos y modelos profundos |
| alguna delimitación celular sostenía gradientes | `B-COND` | membrana exacta desconocida |
| LUCA tenía genoma de DNA | `B-COND` | replisomas principales no ortólogos |
| producía/conservaba ATP por quimiosmosis | `B-COND` | dirección y acoplamiento exactos |
| era anaerobio con metabolismo central complejo | `C-COND` | reconciliación y función ancestral |
| era acetógeno hidrotermal termófilo | `C-D` | sesgo de muestra, HGT y salto a hábitat |
| poseía ~2.5–3.0 Mb y ~2,600 proteínas | `C-COND` | regresión desde genomas modernos |
| vivió cerca de `4.2 Ga` | `C-D` | reloj, calibraciones y priors |
| conocemos su especie, aspecto y localidad | `E` | ningún archivo directo |

## LO MEDIDO

- secuencias de `rRNA`, proteínas y genomas actuales;
- estructuras de ribosomas, ATPasas y polimerasas;
- presencia/ausencia y número de copias por familia génica;
- actividad bioquímica de enzimas modernas;
- distancias de secuencia y soporte de árboles;
- edades y contextos de fósiles/proxies usados como calibraciones.

## LO OBSERVADO

- homología profunda del sistema de traducción;
- código genético casi universal;
- familias paralógicas presentes a ambos lados de la divergencia profunda;
- distribución desigual y transferencias frecuentes de genes metabólicos;
- replisomas principales no ortólogos entre Bacteria y Archaea;
- rutas lipídicas canónicas químicamente distintas;
- cientos de familias con patrones compatibles con presencia ancestral.

## LO INFERIDO

- ascendencia común de la vida celular conocida;
- raíz principal `Bacteria | Archaea`;
- población ancestral con traducción, transcripción y bioenergética;
- delimitación capaz de sostener gradientes;
- genoma probablemente de DNA, pero replicasa incierta;
- fisiología anaerobia y redes centrales plausibles;
- inventario y edad como distribuciones dependientes de modelo.

## LOS SUPUESTOS

- homología y ortología se asignan correctamente;
- el árbol de especies aproxima la historia celular relevante;
- los modelos de sustitución describen secuencias extremadamente antiguas;
- duplicaciones, transferencias y pérdidas pueden distinguirse;
- anotación moderna aproxima función ancestral;
- el muestreo actual representa suficiente diversidad;
- las calibraciones datan el nodo al que se asignan;
- relaciones aprendidas de genomas modernos son extrapolables.

## LAS INCERTIDUMBRES

- extensión de transferencia horizontal antes y después de la divergencia;
- posición de linajes de genoma reducido;
- tamaño e identidad del proteoma;
- tipo de membrana y pared;
- composición del replisoma;
- dirección de rutas metabólicas;
- temperatura y hábitat;
- edad absoluta y duración de la población ancestral;
- diversidad de linajes contemporáneos extinguidos.

## LAS ALTERNATIVAS

- árbol central con transferencias frente a una red temprana más reticulada;
- membrana bacteriana, arqueana, mixta o fijada tardíamente;
- replicasa ancestral PolD, PolB u otro sistema perdido;
- autotrofía acetogénica frente a metabolismo mixto/heterotrófico;
- termofilia ancestral frente a señal por sesgo o adaptación secundaria;
- hábitat hidrotermal frente a sedimentos, poros o ambientes diversos;
- LUCA celular moderno frente a comunidad aún heterogénea.

## LAS CONTROVERSIAS

- `CONT-LUCA-TREE-NETWORK-001`: cuánto «árbol» conserva la etapa de transferencia intensa;
- `CONT-LUCA-GENESET-001`: 80, 355, 399 o miles según filtro y modelo;
- `CONT-LUCA-MEMBRANE-001`: qué había antes de la división lipídica;
- `CONT-LUCA-REPLICATION-001`: DNA probable, replisoma no resuelto;
- `CONT-LUCA-METABOLISM-001`: acetógeno hidrotermal o repertorio más plural;
- `CONT-LUCA-AGE-001`: >`3.9 Ga` frente a concentración modelada cerca de `4.2 Ga`.

## QUÉ PODRÍA FALSARLO

- proteínas universales que ajusten consistentemente mejor a orígenes independientes bajo modelos comparables debilitarían la ascendencia común;
- parálogos correctamente identificados que sitúen de forma robusta otra raíz obligarían a revisar `Bacteria | Archaea`;
- simulaciones con HGT realista que reproduzcan sistemáticamente el núcleo atribuido a LUCA sin presencia ancestral degradarían el inventario;
- una homología completa y bien enraizada de replisomas podría cerrar o invertir los escenarios de reemplazo;
- genes lipídicos con raíces concordantes y sin HGT favorecerían una membrana específica;
- nuevas calibraciones o familias pre‑LUCA que desplacen de manera reproducible el reloj revisarían `~4.2 Ga`;
- reconstrucciones funcionales que no sostengan las reacciones inferidas retirarían metabolismo/hábitat.

## NIVEL DE CONFIANZA

`A-COND` para ascendencia común de la vida celular conocida; `A-B` para traducción y código; `B-COND` para raíz, delimitación, quimiosmosis y DNA; `C-COND` para inventario y metabolismo general; `C-D` para acetogénesis/hábitat y edad de `~4.2 Ga`; `D-E` para membrana, replisoma exacto, especie, localidad y aspecto.

## QUÉ SABEMOS REALMENTE

Sabemos que los linajes celulares actuales comparten una infraestructura molecular demasiado coordinada y filogenéticamente coherente para tratarla como una colección de semejanzas independientes. Antes de la separación profunda entre Bacteria y Archaea ya existían traducción ribosomal, código genético, transcripción, ATP y una bioenergética capaz de mantener gradientes. LUCA fue el final común de una historia anterior, no su primer capítulo.

## QUÉ TODAVÍA NO SABEMOS

No conocemos una secuencia completa, morfología, membrana, replisoma, metabolismo obligado, temperatura, localidad ni fecha directa. Tampoco sabemos cuántos linajes coexistieron, qué genes llegaron desde ramas extinguidas o cuánto tiempo duró la transición desde comunidades pre‑LUCA hasta los dominios celulares. Una reconstrucción responsable termina donde las probabilidades dejan de distinguir escenarios.

## Fuentes esenciales

- `SRC-WOESE-FOX-1977`, `SRC-IWABE-1989`, `SRC-GOGARTEN-1989`, `SRC-WILLIAMS-2013`: clasificación molecular, raíz mediante parálogos y modelo de dos dominios primarios.
- `SRC-THEOBALD-2010`: contraste formal de ascendencia común.
- `SRC-WEISS-2016`: inventario conservador de `355` familias y fisiología candidata.
- `SRC-BETTS-2018`, `SRC-MOODY-2024`: relojes y reconstrucción probabilística del ancestro.
- `SRC-COLEMAN-2019`: historias profundas de biosíntesis de membranas.
- `SRC-KOONIN-KRUPOVIC-2020`: escenario comparativo para replicación y DNA en LUCA.

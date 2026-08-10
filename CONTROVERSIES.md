# Registro maestro de controversias

Una controversia no implica empate. Registra qué parte está realmente abierta, qué datos comparten las posiciones y qué prueba movería la balanza. Corte: **2026-08-10**.

## Índice

| ID | Tema | Explicación dominante o práctica | Alternativa fuerte | Estado | Confianza en la síntesis |
|---|---|---|---|---|---|
| `CONT-COSMOS-H0-001` | Tensión de Hubble | sistemáticas residuales o extensión física todavía no identificada; no hay resolución única | calibración local, modelado temprano o nueva física específica | abierta | B para la discrepancia; D para su causa |
| `CONT-COSMOS-DARKENERGY-001` | ¿Constante cosmológica o componente dinámica? | `Λ` constante describe bien el conjunto base | `w(z)` dinámico o gravedad modificada; DESI cambia restricciones | abierta | B-COND para aceleración; D para mecanismo |
| `CONT-COSMOS-BEGIN-001` | ¿La fase caliente fue el comienzo absoluto? | el modelo probado se detiene en un límite temprano sin afirmar ontología | inflación eterna, rebote, fase previa o comienzo cuántico | abierta y parcialmente fuera del acceso observacional | E para mecanismo exacto |
| `CONT-COSMOS-INDEP-001` | Independencia de CMB, BAO y BBN | convergencia de observables distintos bajo una física común | calibraciones/modelo temprano compartidos inflan la apariencia de corroboración | parcialmente resuelta mediante matrices de dependencia | B |
| `CONT-ELEMENT-RPROCESS-001` | ¿Qué fuentes dominan el proceso `r`? | fusiones de estrellas de neutrones son un sitio probado e importante | supernovas raras u otros canales aportan fracciones necesarias | abierta en pesos, no en existencia de fusiones | A para sitio; C para fracciones |
| `CONT-ELEMENT-LITHIUM-001` | Problema cosmológico del litio | BBN estándar + agotamiento/transporte estelar todavía incompleto | nueva física temprana o sistemática nuclear/atmosférica | abierta | B para discrepancia; D para causa |
| `CONT-ELEMENT-SOLAR-ABUNDANCE-001` | Abundancia solar y heliosismología | composición fotosférica moderna con modelos 3D/no-LTE | opacidades o abundancias revisadas que restauren estructura interior | abierta | B |
| `CONT-ELEMENT-YIELDS-001` | Rendimientos por estrella y evento | grids por masa, metalicidad, rotación y explosión | binariedad, 3D y tasas alteran contribuciones integradas | abierta y cuantitativa | C |
| `CONT-STARS-AGES-001` | Edades absolutas de cúmulos y estrellas | isócronas calibradas con paralaje, química, binarias y sismología | helio, convección, difusión, rotación o escalas de temperatura desplazan edades | abierta en precisión | A para orden; B-C para edad absoluta |
| `CONT-STARS-MASSLOSS-001` | Pérdida de masa y estrellas que explotan | vientos y episodios dependientes de fase/metallicidad dentro de modelos evolutivos | clumping, binariedad o erupciones cambian masa final y pueden ocultar/fallar explosiones | abierta | B para existencia; C-D para historia individual |
| `CONT-STARS-BINARY-001` | Estrella aislada frente a evolución interactuante | tracks aislados como base, síntesis binaria para población real | una fracción mayor/menor de interacción cambia supernovas y remanentes | abierta en pesos, no en relevancia | A para relevancia; C para fracciones por ambiente |
| `CONT-STARS-REMNANT-001` | Mapa masa inicial → remanente | masa del núcleo y pérdida predicen distribuciones WD/NS/BH | rotación, compañera, fallback y mecanismo de explosión rompen umbrales rígidos | abierta y probabilística | B para clases; C-D para frontera individual |
| `CONT-EARTH-AGE-001` | ¿Qué significa “edad de la Tierra”? | valor operacional ~4.54 Ga ligado a formación/acreción temprana | usar hitos separados: CAIs, masa acumulada, núcleo, Luna, corteza | abierta por definición, no por orden de magnitud | B |
| `CONT-EARTH-UPB-001` | ¿Qué tan independientes son las edades radiométricas? | convergencia de múltiples minerales/sistemas | dependencia común de calibraciones, contexto y modelos | parcialmente resuelta | B |
| `CONT-MOON-AGE-001` | Momento del impacto formador de la Luna | temprano, en primeras decenas de Ma | impacto o reequilibrio más tardío; zircones fechan corteza, no colisión | abierta | C |
| `CONT-HADEAN-WATER-001` | ¿Había océanos a 4.4 Ga? | zircones sugieren agua superficial/corteza reciclada | señal de fuente o alteración sin océano global persistente | abierta | C |
| `CONT-HADEAN-NGB-001` | Edad de Nuvvuagittuq | intrusiones de ~4.16 Ga y encajantes más antiguas | edades arqueanas ~3.8 Ga o edades modelo heredadas/reset | reabierta y fortalecida en 2025 | C-B-PROV |
| `CONT-HADEAN-LHB-001` | ¿Hubo un cataclismo único a ~3.9 Ga? | episodio elevado o combinación de poblaciones | cola monótona de acreción y sesgo de muestras Apollo | abierta | D para pico único |

## CONT-COSMOS-H0-001 — Dos rutas hacia la tasa actual

### Datos compartidos

- Planck infiere `H0=67.4±0.5 km s⁻¹ Mpc⁻¹` al ajustar CMB con `ΛCDM` base.
- SH0ES obtiene `73.04±1.04 km s⁻¹ Mpc⁻¹` mediante anclas geométricas, Cefeidas y SN Ia.
- Ambas rutas contienen datos de alta precisión y supuestos/calibraciones correlacionados dentro de cada cadena.
- BAO, lentes, punta de la rama de gigantes rojas, megamasers y sirenas estándar agregan controles, pero todavía no producen una explicación única universalmente aceptada.

### Familia A — Sistemática tardía

La escalera puede contener un sesgo en cero de paralaje, metalicidad, mezcla de Cefeidas, fotometría, selección o conexión Cefeida–SN. Una versión fuerte debe identificar un efecto cuantitativo, no limitarse a decir “seguro hay error”.

### Familia B — Sistemática/modelo temprano

Primeros planos CMB, likelihoods, recombinación, calibración del horizonte sonoro o datasets asociados podrían sesgar la inferencia. Debe explicarse por qué distintos rasgos y experimentos permanecen internamente coherentes.

### Familia C — Nueva física

Una componente temprana, interacción, neutrinos u otra modificación puede alterar el horizonte sonoro o `H(z)`. Para ser competitiva debe resolver la discrepancia sin estropear CMB, BAO, BBN, crecimiento y supernovas.

**Prueba discriminatoria:** anclas geométricas y velas/reglas/sirenas con sistemáticas realmente distintas, más predicciones fuera de los datos usados para construir la solución.

## CONT-COSMOS-DARKENERGY-001 — Aceleración no identifica mecanismo

Supernovas, BAO y CMB favorecen una historia tardía acelerada dentro de FLRW. La constante cosmológica `Λ` es la parametrización mínima y describe bien el conjunto base, pero su valor físico plantea problemas teóricos. Modelos con ecuación de estado `w(z)`, campos o gravedad modificada pueden imitar parte de la expansión.

DESI DR2 mide con gran precisión la relación distancia–corrimiento y reporta que `ΛCDM` plano sigue describiendo bien BAO, junto con tensiones moderadas dependientes de combinación. La preferencia por energía oscura evolutiva cambia al combinar distintas compilaciones de supernovas y parametrizaciones. Por ello no se etiqueta como descubrimiento.

**Prueba discriminatoria:** medir conjuntamente expansión y crecimiento de estructura en varios `z`, controlar calibraciones de supernovas, comprobar consistencia cruzada y exigir a la alternativa predicciones nuevas.

## CONT-COSMOS-BEGIN-001 — Del límite matemático al origen físico

Extrapolar relatividad clásica hacia atrás produce condiciones extremas y, en ciertas soluciones, una singularidad. Una singularidad indica que cantidades o geodésicas dejan de estar bien definidas en la teoría; no es una imagen instrumental del origen.

### Posiciones compatibles con parte de los datos actuales

- fase caliente precedida por inflación;
- fase anterior y rebote;
- condición cuántica sin un “antes” clásico;
- comienzo temporal finito bajo una teoría aún no confirmada.

CMB, BBN y expansión prueban principalmente la evolución posterior accesible. Modelos del borde deben recuperar esos éxitos y producir huellas discriminatorias. Mientras no lo hagan, “el tiempo empezó” permanece más débil que “existió una fase temprana caliente”.

## CONT-COSMOS-INDEP-001 — Convergencia sin contar votos

CMB, BAO y BBN emplean objetos e instrumentos diferentes, pero comparten expansión, densidad bariónica y física del plasma temprano. Supernovas y cúmulos estelares agregan sistemáticas más distintas, aunque también usan calibraciones de distancia y evolución estelar.

La resolución de trabajo es publicar una matriz de dependencia por muestra, instrumento, calibración, principio y modelo. Repetir un análisis sobre el mismo mapa reduce errores de implementación; no crea un universo independiente.

## CONT-EARTH-AGE-001 — El “nacimiento” no es un instante observable

### Datos compartidos

- Los materiales sólidos solares más antiguos medidos rondan 4.567 Ga.
- La Tierra se ensambló por acreción y se diferenció durante un intervalo.
- No se conserva una roca terrestre intacta que registre el inicio completo.
- Meteoritos, cronómetros extintos y materiales terrestres/lunares acotan etapas distintas.

### Modelo/práctica A — Una edad convencional única

**Versión fuerte:** `~4.54 Ga` resume de forma útil el comienzo de la formación de la Tierra y es robusto al redondeo relevante para narración geológica.

**Ventaja:** permite comparación y no pretende una falsa precisión si se define.

**Problema:** el público puede confundirla con una lectura directa o un evento instantáneo.

### Modelo/práctica B — Cronología de hitos

**Versión fuerte:** no existe una sola edad ontológicamente privilegiada; deben publicarse tiempo cero de CAIs, acreción, segregación del núcleo, impacto lunar y corteza estable como intervalos distintos.

**Ventaja:** refleja mejor el proceso y hace visibles los modelos.

**Problema:** algunos hitos son edades modelo más inciertas que el valor redondeado.

### Resolución de trabajo

Usar `~4.54 Ga` solo acompañado de su definición; para investigación, conservar la secuencia de hitos. No es una disputa seria sobre si la Tierra tiene miles de millones de años, sino sobre qué reloj fecha qué evento.

## CONT-EARTH-UPB-001 — Independencia radiométrica

La doble cadena U–Pb ofrece una comprobación interna potente. Pb–Pb, Hf–W, Sm–Nd y otros sistemas agregan principios y químicas diferentes, pero pueden compartir interpretación de muestra, tiempo cero solar o calibraciones. La corroboración se describirá por dimensiones, no contando “métodos” como votos.

**Prueba discriminatoria:** obtener cronologías concordantes en materiales y laboratorios independientes con sistemas de sensibilidades distintas; publicar covarianzas de constantes y trazadores.

## CONT-MOON-AGE-001 — Formación lunar

Los zircones lunares antiguos demuestran que existía corteza diferenciada muy temprano si su edad es primaria. No miden el impacto gigante. Hf–W y otros cronómetros conectan separación de reservorios con modelos de equilibrio metal–silicato. La edad del impacto se infiere al exigir que ocurra antes de la diferenciación fechada.

**Prueba discriminatoria:** más muestras lunares con procedencia conocida, cronómetros múltiples sobre las mismas litologías y modelos que predigan conjuntamente edades, química y dinámica orbital.

## CONT-HADEAN-WATER-001 — De `δ18O` a océanos

### Explicación fuerte favorable

Valores altos de `δ18O` en zircon magmático requieren material precursor alterado a baja temperatura; la vía conocida más plausible involucra agua cerca de la superficie, luego enterramiento y fusión.

### Alternativa fuerte

El grano registra una historia local de fuente cortical y alteración. Aun aceptando agua líquida, no determina un océano global, estable o semejante al moderno. Dominios alterados o mezclados pueden amplificar la lectura.

**Prueba discriminatoria:** replicación microestructural/isotópica en muchos granos independientes, coherencia entre O, Hf, Ti e inclusiones, y modelos que excluyan fuentes sin agua superficial.

## CONT-HADEAN-NGB-001 — Las rocas más antiguas

El debate histórico enfrentó edades modelo `146Sm–142Nd` de hasta ~4.28 Ga con edades U–Pb y `147Sm–143Nd` más jóvenes. Sole et al. (2025) analizaron intrusiones metagabroicas y reportaron concordancia de los dos relojes Sm–Nd cerca de 4.16 Ga, además de relaciones de corte que vuelven más antiguas a las encajantes.

**Por qué no se cierra automáticamente:** una publicación reciente necesita replicación; la interpretación depende de petrología, co-geneticidad, metamorfismo y significado de isócrona. `4.16 Ga` fecha la intrusión interpretada, mientras que la roca cortada recibe un límite mínimo.

**Prueba discriminatoria:** muestreos autorizados y replicados por equipos independientes, isócronas minerales y roca total coherentes, cronómetros adicionales y cartografía publicada a escala que confirme relaciones.

## CONT-HADEAN-LHB-001 — Cataclismo lunar tardío

Las edades de fundidos Apollo se agrupan cerca de cuencas jóvenes y los cuerpos interiores muestran cráteres intensos. Pero la colección Apollo es espacialmente sesgada y los impactos grandes pueden borrar, mezclar o enterrar fundidos anteriores. Un pico breve, una cola decreciente o un modelo híbrido pueden reproducir parte de los datos.

**Estado:** B para “el bombardeo temprano fue mucho mayor que hoy”; D para “hubo una única subida abrupta global a 3.9 Ga”.

## CONT-ELEMENT-RPROCESS-001 — Sitio probado no equivale a presupuesto cerrado

### Datos compartidos

- GW170817 fue una fusión de objetos compactos consistente con estrellas de neutrones y tuvo una kilonova.
- La evolución óptica/IR requiere calentamiento y opacidad compatibles con material recién sintetizado en los modelos publicados.
- Se identificó Sr, un elemento de captura neutrónica, en el espectro.
- Existen estrellas antiguas con patrones `r` que imponen tiempos de enriquecimiento y variación ambiental.

### Familia A — Fusiones dominantes

Un rendimiento grande por evento puede compensar una tasa menor. La evidencia multimensajero prueba que el canal funciona y los tiempos de demora pueden incluir una cola rápida.

### Familia B — Múltiples canales necesarios

La presencia temprana o ciertos patrones podrían requerir fuentes adicionales: supernovas magnetorrotacionales, colapsares u otros eventos raros. Un canal adicional debe producir el patrón, ocurrir con la tasa adecuada y no sobreproducir otros núcleos.

**Prueba discriminatoria:** muchas kilonovas con espectros, tasas por tipo de galaxia, abundancias isotópicas en estrellas muy antiguas y modelos de evolución química que predigan dispersión además del promedio.

## CONT-ELEMENT-LITHIUM-001 — Una concordancia que no es completa

BBN estándar, usando la densidad bariónica restringida por CMB, concuerda bien con deuterio. Para `7Li`, las abundancias en atmósferas de estrellas antiguas quedan por debajo de la predicción en la lectura usual.

Las familias explicativas incluyen agotamiento y difusión estelar, sistemáticas de atmósfera/temperatura, tasas nucleares o física temprana no estándar. Cualquier solución debe preservar la concordancia de D/H, He y CMB; mover solo litio mediante un parámetro libre no basta.

**Prueba discriminatoria:** modelos estelares con predicciones de otros elementos y evolución superficial, tasas nucleares relevantes mejor medidas, y una solución cosmológica que no deteriore los observables ya concordantes.

## CONT-ELEMENT-SOLAR-ABUNDANCE-001 — La superficie y el interior solar

Modelos 3D y tratamientos no-LTE revisaron a la baja algunas abundancias fotosféricas respecto de evaluaciones anteriores. Al incorporarlas a modelos solares, ciertas predicciones de estructura no coinciden tan bien con restricciones heliosísmicas.

Las alternativas no son “espectroscopia o Sol”. Pueden cambiar opacidades, difusión, composición, datos atómicos o condiciones del modelo. La comparación es valiosa porque enfrenta dos rutas con sistemáticas parcialmente distintas.

**Prueba discriminatoria:** opacidades experimentales en condiciones relevantes, líneas múltiples y estados de ionización, neutrinos CNO más precisos y modelos que predigan simultáneamente espectro, heliosismología y flujos neutrínicos.

## CONT-ELEMENT-YIELDS-001 — Del evento individual a la Galaxia

Los rendimientos dependen de masa inicial, metalicidad, rotación, pérdida de masa, compañera binaria, convección, tasas nucleares, mecanismo de explosión y masa que finalmente escapa. Dos modelos pueden ajustar una abundancia promedio y predecir dispersiones o correlaciones diferentes.

**Práctica dominante:** grids de evolución y nucleosíntesis integrados con una función inicial de masas y evolución química.

**Alternativa fuerte:** poblaciones binarias, eventos raros o mezcla inhomogénea pueden dominar isótopos que un modelo promedio asigna a estrellas aisladas.

**Prueba discriminatoria:** abundancias multielementales de poblaciones con edad y entorno, isótopos en granos individuales, tasas de transitorios y predicciones fuera del conjunto usado para calibrar el rendimiento.

## CONT-STARS-AGES-001 — Un reloj poblacional con física interior

### Práctica dominante

Usar paralaje, composición, extinción y diagramas color–magnitud, y confrontar isócronas. Binarias eclipsantes aportan masas/radios y la asterosismología aporta densidad/estado interior. Una edad gana fuerza cuando una solución reproduce todos esos observables.

### Alternativas o desplazamientos fuertes

Cambios en helio inicial, convección/overshoot, difusión, rotación, atmósferas y escala de temperatura pueden mover el punto de giro o la rama subgigante. Algunas combinaciones imitan una edad distinta. Una población con interacción binaria puede contener estrellas rezagadas que no deben entrar en un ajuste simple.

**Resolución de trabajo:** A para el orden relativo y la existencia de poblaciones antiguas/jóvenes; B o C para una edad absoluta según controles. Publicar por separado incertidumbre estadística y variación entre familias de modelos.

**Prueba discriminatoria:** cúmulos con paralaje precisa, múltiples binarias separadas, abundancias/He restringidos y sismología; pedir predicciones fuera de las regiones usadas para ajustar.

## CONT-STARS-MASSLOSS-001 — El historial que decide la masa final

La masa que una estrella conserva al final no es su masa inicial. Vientos, pulsos, polvo, erupciones y transferencia binaria pueden retirar la envoltura. Las tasas inferidas de líneas o continuo dependen de ionización, geometría y clumping; tratar el viento como homogéneo puede sesgarlas.

Para estrellas masivas, la incertidumbre afecta:

- qué núcleo llega al colapso;
- si la estrella aparece como supergigante roja, estrella despojada u otra clase;
- tipo y brillo de supernova;
- masa de la estrella de neutrones o agujero negro;
- cantidad de material que cae de nuevo.

**Alternativa fuerte:** gran parte del despojo atribuido a vientos aislados puede proceder de interacción binaria; colapsos con explosión débil o fallida pueden explicar la escasez aparente de ciertos progenitores luminosos.

**Prueba discriminatoria:** vientos resueltos en múltiples diagnósticos, censos completos de progenitores y desapariciones, transitorios infrarrojos y remanentes con masas/metallicidades del ambiente.

## CONT-STARS-BINARY-001 — El caso aislado no es el censo

Los modelos de estrella aislada proporcionan una base interpretable y predicen correctamente muchas tendencias. Sana et al. mostraron, sin embargo, que una gran fracción de estrellas O de su población corregida debería intercambiar masa o fusionarse.

La disputa útil no es “¿existen binarias?”. Es cuánto pesan por masa, composición y ambiente, y qué observables pueden reproducir sin ajustar cada sistema después del hecho.

### Consecuencias que deben medirse

- proporción de estrellas despojadas;
- distribución de supernovas;
- estrellas rezagadas o rejuvenecidas;
- rotaciones y abundancias anómalas;
- pares compactos y fusiones;
- masas finales de WD, NS y BH.

**Prueba discriminatoria:** monitoreo multiépoca con completitud publicada, síntesis poblacional predictiva y comparación conjunta con transitorios/remanentes, no solo con el catálogo que calibró las distribuciones orbitales.

## CONT-STARS-REMNANT-001 — No existe un umbral notarial

Una infografía suele asignar rangos de masa inicial a enana blanca, estrella de neutrones o agujero negro. Esa organización es útil, pero las fronteras no son constantes universales.

Influyen:

- composición y metalicidad;
- tamaño/composición del núcleo;
- pérdida de masa y compañera;
- rotación y campos;
- energía/asimetría de explosión;
- fallback y eyección;
- fusiones anteriores.

**Práctica dominante:** grids y síntesis poblacional que producen probabilidades y distribuciones de remanentes.

**Alternativa fuerte:** “islas” de explodibilidad y rutas binarias pueden hacer no monótona la relación entre masa inicial y resultado. Dos estrellas con masas iniciales cercanas pueden acabar en remanentes distintos.

**Prueba discriminatoria:** progenitores confirmados por desaparición, censos de supernovas fallidas, masas de remanentes, asterosismología de núcleos y modelos que predigan simultáneamente explosión, nucleosíntesis y población compacta.

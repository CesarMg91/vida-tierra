---
id: INV-COSMOS-AGE-001
titulo: "¿Cómo sabemos que el universo tiene una historia y una edad finita?"
estado: AUDITADO
ultima_revision: 2026-08-10
claims:
  - CLAIM-COSMOS-EXPANSION-001
  - CLAIM-COSMOS-HOT-001
  - CLAIM-COSMOS-CMB-001
  - CLAIM-COSMOS-BBN-001
  - CLAIM-COSMOS-AGE-001
  - CLAIM-COSMOS-ACCEL-001
  - CLAIM-COSMOS-H0-001
  - CLAIM-COSMOS-BOUNDARY-001
fuentes:
  - SRC-LEMAITRE-1931
  - SRC-HUBBLE-1929
  - SRC-PENZIAS-WILSON-1965
  - SRC-DICKE-1965
  - SRC-MATHER-1994
  - SRC-SMOOT-1992
  - SRC-RIESS-1998
  - SRC-PERLMUTTER-1999
  - SRC-EISENSTEIN-2005
  - SRC-PLANCK-2020
  - SRC-COOKE-2018
  - SRC-VALCIN-2021
  - SRC-JIMENEZ-LOEB-2002
  - SRC-RIESS-2022
  - SRC-DESI-DR2-2025
---

# Investigación 002 — ¿Cómo sabemos que el universo tiene una historia y una edad finita?

![Portada editorial de archivos cosmológicos independientes](../assets/visuales/hero-edad-universo.png)

La portada es una **composición editorial no probatoria**. Las placas representan clases de observación separadas —espectros, fondo de microondas, relaciones distancia–corrimiento y poblaciones estelares—; no son datos reales, no están a escala y no dibujan una explosión desde un centro.

![Convergencia de evidencias cosmológicas](../assets/visuales/mapa-investigacion-002.svg)

> **Pregunta de primeros principios:** si nadie pudiera citarnos un libro de cosmología, ¿qué señales actuales permitirían reconstruir que el universo fue más caliente y denso, que se ha expandido y que, dentro de un modelo contrastado, su historia observable abarca aproximadamente 13.8 mil millones de años?

## Respuesta breve, con sus condiciones

No existe un instrumento que muestre en una pantalla “edad del universo: 13.8 Ga”. Se miden fotones, longitudes de onda, flujos, temperaturas de antena, posiciones y curvas de luz. Esas señales forman varias cadenas parcialmente independientes:

1. las líneas espectrales de galaxias se desplazan sistemáticamente con la distancia;
2. todo el cielo contiene un fondo de microondas con espectro casi térmico y pequeñas anisotropías;
3. la abundancia de deuterio en gas poco procesado concuerda con una fase nuclear temprana bajo el mismo orden de densidad bariónica que infiere el fondo cósmico;
4. supernovas Ia y oscilaciones acústicas bariónicas reconstruyen una expansión que cambió con el tiempo;
5. las estrellas y cúmulos más antiguos ofrecen un límite inferior compatible, aunque menos preciso, con la edad cosmológica.

El modelo FLRW con materia, radiación y constante cosmológica conecta esas observaciones. En su versión plana de seis parámetros, `ΛCDM`, los datos finales de Planck infieren una edad cercana a `13.8 Ga`. La cifra es muy precisa **dentro del modelo**; no es una lectura directa ni prueba por sí sola que el tiempo comenzara en una singularidad física o que el universo surgiera “de la nada”.

## 0. El problema exacto

“Edad del universo” puede significar cosas distintas:

- **edad del modelo:** tiempo propio desde el límite temprano de una solución cosmológica hasta hoy;
- **edad de la fase caliente observable:** duración reconstruible de la expansión desde un estado temprano caliente y denso;
- **edad de todo lo existente:** pregunta metafísica o de física anterior a la fase caliente, no resuelta por los datos actuales;
- **comienzo del tiempo:** afirmación adicional que requiere una teoría válida donde la relatividad clásica deja de ser suficiente.

Esta investigación audita las dos primeras. No presenta las dos últimas como resultados observacionales.

## 1. Objetos observables hoy

| Objeto o dataset | Procedencia | Qué existe físicamente hoy | Qué no observamos directamente |
|---|---|---|---|
| espectros de galaxias y cuásares | telescopios terrestres/espaciales | fotones dispersados por longitud de onda; líneas atómicas desplazadas | “espacio estirándose” como objeto visible |
| distancias de galaxias cercanas | paralaje, Cefeidas, supernovas y otros peldaños | ángulos, periodos, flujos y calibradores | una regla extendida entre galaxias |
| fondo cósmico de microondas (CMB) | cielo completo en radio/microondas | potencia recibida por frecuencia y dirección | plasma primordial fotografiado desde fuera |
| mapas de anisotropía CMB | COBE, WMAP, Planck y otros | diferencias diminutas de temperatura/polarización | materia oscura o inflación vistas directamente |
| abundancia D/H | nubes de gas a alto corrimiento al rojo | líneas de absorción de H y D en espectros de cuásares | la nucleosíntesis ocurriendo durante los primeros minutos |
| supernovas Ia | galaxias a distintos corrimientos al rojo | curvas de luz, espectros, color y flujo | distancia absoluta sin calibración/modelo |
| agrupamiento BAO | catálogos de millones de galaxias/cuásares | posiciones angulares y corrimientos al rojo; exceso estadístico de pares | una “onda congelada” visible en una galaxia individual |
| estrellas y cúmulos antiguos | Vía Láctea | colores, luminosidades, espectros, paralajes y poblaciones | fecha de nacimiento impresa en cada estrella |

La cosmología observacional no contempla el pasado desde un exterior. Recibe señales que han viajado durante intervalos diferentes y reconstruye una geometría y una historia comunes.

## 2. Qué miden realmente los instrumentos

| Variable publicada | Instrumento | Señal real | Calibración crítica | Sesgos principales |
|---|---|---|---|---|
| corrimiento al rojo `z` | espectrógrafo | posición de líneas sobre un detector | lámparas/peines de frecuencia, respuesta, línea en reposo | identificación de línea, movimiento peculiar, selección |
| flujo y magnitud | CCD/fotómetro | fotoelectrones por tiempo y banda | estrellas patrón, atmósfera, respuesta del filtro | polvo, evolución de población, selección Malmquist |
| distancia por paralaje | astrometría | cambio angular periódico | escala angular, actitud y cero de paralaje | correlaciones espaciales y sistema de referencia |
| temperatura de antena | radiotelescopio/radiómetro | potencia eléctrica del receptor | cargas frías/calientes, ganancia, lóbulos de antena | emisión terrestre, Galaxia, receptor, atmósfera |
| espectro CMB | FIRAS/espectrofotómetro | diferencia de radiancia frente a un calibrador interno | cuerpo negro de referencia y respuesta espectral | emisión galáctica, calibración absoluta |
| anisotropía CMB | radiómetros/bolómetros diferenciales | diferencias de potencia entre direcciones/frecuencias | haz, ganancia, transferencia temporal | primer plano galáctico, ruido correlacionado, máscara |
| D/H | espectrógrafo echelle | profundidad/forma de líneas H I y D I | longitud de onda, perfil instrumental, continuo | nubes superpuestas, ionización, estructura de velocidad |
| edad estelar | fotometría, espectroscopia y paralaje | posición en diagrama color–magnitud y composición | distancia, extinción, metalicidad, modelos estelares | convección, He, poblaciones múltiples, física estelar |

La secuencia correcta es:

```text
señal eléctrica → magnitud calibrada → parámetro físico → modelo → historia
```

Saltar de “el telescopio registró fotones” a “el universo tiene 13.8 Ga” oculta casi toda la inferencia.

## 3. Primer principio: el corrimiento al rojo

Para una línea con longitud de onda de laboratorio `λ_emit` observada en `λ_obs`:

```text
z = (λ_obs − λ_emit) / λ_emit
```

A corrimientos pequeños, puede usarse la aproximación `v ≈ cz`. A grandes distancias, tratar `cz` como una velocidad ordinaria a través de un espacio fijo deja de ser correcto. En un modelo cosmológico homogéneo:

```text
1 + z = a(t0) / a(temit)
```

donde `a(t)` es el factor de escala. El dato es la razón de longitudes de onda; la expansión es la interpretación geométrica que además debe explicar distancias, dilatación temporal, brillo superficial y la red completa de observaciones.

### 3.1 De Lemaître a Hubble

Lemaître relacionó en 1927 soluciones dinámicas de relatividad con velocidades radiales y distancias; la traducción inglesa apareció en 1931. Hubble publicó en 1929 una relación observacional entre distancia estimada y velocidad radial para nebulosas extragalácticas. Sus distancias y la constante resultante eran incorrectas por calibraciones hoy abandonadas, pero el patrón fue una pieza histórica decisiva.

La historia abre una distinción importante:

- una **predicción/modelo dinámico** no es el mismo acto que una **relación observacional**;
- un gráfico puede revelar un patrón real aunque su pendiente esté sesgada;
- atribuir toda la expansión a una sola persona borra la red de teoría, espectros, distancias y calibración.

### 3.2 Qué sí demuestra y qué no

El patrón distancia–corrimiento apoya expansión a gran escala. Solo, no fija con precisión la edad ni prueba una explosión desde un centro. En FLRW cada observador comóvil ve aproximadamente la misma expansión; no existe un centro espacial privilegiado dentro del modelo.

## 4. Segundo principio: un fondo térmico que llena el cielo

### 4.1 La señal de antena de 1965

Penzias y Wilson midieron a `4080 Mc/s` una temperatura de antena excedente de aproximadamente `3.5 K`, isotrópica dentro de sus límites, no polarizada y sin variación estacional apreciable. El artículo observacional no “vio el Big Bang”: documentó un exceso persistente después de auditar contribuciones del receptor, la atmósfera y el entorno.

El artículo compañero de Dicke, Peebles, Roll y Wilkinson propuso la interpretación cosmológica: radiación térmica relicta de una fase temprana caliente. Separar ambos artículos es epistemológicamente útil:

```text
exceso de potencia observado ≠ origen cosmológico ya medido
```

La interpretación ganó fuerza al sobrevivir nuevas frecuencias, mapas de cielo y pruebas espectrales.

### 4.2 FIRAS y la forma de cuerpo negro

COBE/FIRAS comparó la radiancia del cielo con un calibrador térmico. Mather et al. reportaron un espectro de cuerpo negro de `2.726 ± 0.010 K` —incertidumbre sistemática al 95 % en ese trabajo— con desviaciones residuales extremadamente pequeñas.

La forma espectral importa más que un único número de temperatura. Polvo, estrellas no resueltas o receptores calientes pueden añadir microondas, pero reproducir un cuerpo negro casi perfecto, isotrópico y con la evolución esperada bajo expansión exige una explicación mucho más específica.

### 4.3 Las anisotropías

COBE/DMR detectó estructura estadísticamente significativa. Smoot et al. reportaron una variación rms de `30 ± 5 μK` a una resolución suavizada de `10°`, después de retirar el dipolo y aplicar sus cortes galácticos.

Estas irregularidades son pequeñas respecto de `2.7 K`, pero contienen las semillas estadísticas de estructura. El espectro angular medido después con mayor resolución restringe densidades, geometría, composición y condiciones iniciales. Los parámetros cosmológicos no vienen de “la temperatura del CMB” aislada, sino de la forma y posición de múltiples rasgos del espectro angular bajo un modelo.

## 5. Tercer principio: nucleosíntesis primordial

En un plasma caliente en expansión, las tasas de reacciones nucleares compiten con el enfriamiento. Dada la densidad bariónica y la física nuclear, el modelo predice abundancias de núcleos ligeros. El deuterio es especialmente sensible a la densidad de bariones.

Cooke, Pettini y Steidel analizaron siete sistemas de absorción de muy baja metalicidad y obtuvieron:

```text
(D/H)p = (2.527 ± 0.030) × 10⁻⁵
```

Al combinarlo con cálculos de nucleosíntesis y tasas nucleares, la densidad bariónica inferida concordaba dentro de `2σ` con la derivada del CMB disponible en ese trabajo.

Esta línea no es totalmente independiente: usa física nuclear, expansión y un modelo térmico temprano. Pero cambia el objeto, instrumento, época y errores dominantes. La concordancia entre absorción atómica en nubes tardías y oscilaciones del CMB es más fuerte que repetir el mismo mapa con otro software.

### 5.1 La anomalía del litio

La nucleosíntesis estándar no reproduce con igual éxito todas las abundancias publicadas; el litio primordial mantiene una discrepancia conocida. Por eso el argumento cuidadoso no es “cada elemento coincide perfectamente”, sino que el deuterio y otras líneas sostienen una fase caliente mientras quedan problemas astrofísicos o de física nuclear por resolver.

## 6. Cuarto principio: la expansión cambia con el tiempo

### 6.1 Supernovas Ia

Las supernovas Ia pueden estandarizarse mediante la forma y color de su curva de luz. Los equipos de Riess et al. (1998) y Perlmutter et al. (1999) hallaron que supernovas a alto `z` eran más débiles —por tanto, bajo las correcciones, más lejanas— de lo esperado en modelos sin constante cosmológica y con baja densidad de materia. Dentro de la geometría cosmológica, el resultado favoreció expansión tardía acelerada.

No se mide “aceleración” con un acelerómetro. Se compara el diagrama distancia–corrimiento con historias `H(z)` y se auditan:

- polvo y color;
- evolución de progenitores;
- calibración fotométrica;
- sesgo de selección;
- estandarización de curvas de luz;
- lentes gravitacionales y movimientos peculiares.

La aceleración ha sido corroborada con más datos y otros observables, pero la naturaleza de la energía oscura no está identificada.

### 6.2 Oscilaciones acústicas bariónicas

El plasma temprano sustentó ondas de presión. Su escala característica queda impresa tanto en el CMB como en la separación estadística de galaxias. Eisenstein et al. detectaron en 2005 el pico acústico en `46 748` galaxias rojas luminosas de SDSS.

BAO funciona como una regla estándar **calibrada por la física del horizonte acústico**. No es independiente del modelo temprano, pero sí utiliza un observable geométrico y una población distinta de las supernovas.

DESI DR2 (2025) midió BAO con más de `14 millones` de galaxias y cuásares. Su relación distancia–corrimiento es consistente con DESI DR1, SDSS y compilaciones recientes de supernovas en el rango compartido. El artículo reporta que `ΛCDM` plano describe bien los resultados, con una tensión moderada entre parámetros preferidos por BAO y CMB. Las preferencias por energía oscura evolutiva dependen de qué supernovas y extensiones de modelo se combinen; no deben anunciarse como descubrimiento cerrado.

## 7. De una historia de expansión a una edad

La constante de Hubble actual tiene unidades de inverso de tiempo, pero `1/H0` es una escala, no la edad exacta. La edad depende de toda la expansión:

```text
t0 = ∫₀^∞ dz / [(1 + z) H(z)]
```

Para evaluar la integral hacen falta densidades de radiación, materia, curvatura y el comportamiento de la componente que produce la aceleración. Dos universos con el mismo `H0` hoy pueden tener edades distintas si su `H(z)` pasado difiere.

### 7.1 La inferencia Planck–ΛCDM

Planck midió anisotropías de temperatura y polarización y su lente gravitacional. En el modelo plano de seis parámetros `ΛCDM`, la colaboración reportó, entre otros:

```text
H0 = 67.4 ± 0.5 km s⁻¹ Mpc⁻¹
Ωm = 0.315 ± 0.007
edad derivada ≈ 13.8 Ga
```

La edad emerge al ajustar simultáneamente un patrón completo y propagar los parámetros. Su pequeña incertidumbre estadística expresa la fuerza interna de ese ajuste; no incluye automáticamente la posibilidad de que la familia de modelos sea incompleta.

### 7.2 Por qué usamos B-COND y no A absoluto

- `~13.8 Ga` es estable en muchas combinaciones dentro de modelos cercanos a `ΛCDM`.
- La expansión, el CMB y la historia térmica están respaldados por líneas múltiples.
- Sin embargo, el valor exacto depende de `H(z)`, curvatura, contenido y modelo de energía oscura.
- Las tensiones actuales advierten que precisión condicional y verdad completa no son sinónimos.

## 8. Relojes externos y límites inferiores

### 8.1 Cúmulos globulares

Las edades estelares se infieren comparando diagramas color–magnitud, distancias, metalicidades y modelos de evolución. Valcin et al. combinaron cúmulos globulares antiguos con un tiempo de formación y estimaron una edad del universo de:

```text
13.5 +0.16/−0.14 (estadística) ± 0.23 o 0.33 (sistemática) Ga
```

Una estrella debe formarse después de que exista el universo. Por eso los cúmulos aportan primero un límite inferior; la edad cósmica requiere añadir el tiempo entre la fase caliente y su formación. La incertidumbre sistemática es mucho mayor que la precisión interna de Planck, pero los supuestos dominantes son diferentes.

### 8.2 Cronómetros cósmicos

Jimenez y Loeb propusieron usar diferencias de edad entre poblaciones de galaxias pasivas para estimar `dz/dt` y, por tanto, `H(z)`. El método promete una reconstrucción más directa de la tasa de expansión, pero depende de síntesis de poblaciones estelares, metalicidad e historia de formación. En esta investigación se registra como corroboración metodológica, no como el pilar cuantitativo de `13.8 Ga`.

## 9. Matriz de independencia

| Línea | Objeto | Señal | Física dominante | Comparte con otras | Independencia útil |
|---|---|---|---|---|---|
| corrimiento–distancia | galaxias cercanas/lejos | líneas y distancia | espectros + escalera + geometría | FLRW, calibración de distancia | alta en instrumento; media en modelo |
| CMB espectral | cielo en microondas | radiancia por frecuencia | termodinámica y expansión | primeros planos, calibración | alta respecto de supernovas/estrellas |
| CMB anisotrópico | mapa multibanda | `ΔT/T`, polarización | perturbaciones, plasma, gravedad | modelo temprano y `ΛCDM` | mismo cielo que CMB espectral, distinto observable |
| D/H | nubes poco metálicas | líneas de absorción | física atómica+nuclear | expansión, densidad bariónica | alta en muestra/instrumento; media en teoría |
| supernovas Ia | explosiones estelares | flujo, color, tiempo | evolución estelar + geometría | fotometría y `H(z)` | alta respecto de CMB; sistemáticas propias |
| BAO | agrupamiento de galaxias | correlación espacial | ondas acústicas + geometría | horizonte sonoro/CMB | media; observable tardío con calibrador temprano |
| cúmulos globulares | estrellas resueltas | color–magnitud | evolución estelar | distancia, composición | alta como límite inferior, baja precisión |

No deben contarse siete filas como siete votos independientes. La fuerza está en que un mismo marco sobrevive señales con dependencias solo parcialmente compartidas.

## 10. La tensión de Hubble

Planck no mide localmente `H0`: lo infiere desde el CMB dentro de `ΛCDM`. Riess et al. (2022) construyeron una escalera local con anclas geométricas, Cefeidas y supernovas Ia, y reportaron:

```text
H0 = 73.04 ± 1.04 km s⁻¹ Mpc⁻¹
```

La diferencia con `67.4 ± 0.5` no autoriza escoger el número favorito ni desechar toda la cosmología. Abre tres familias de explicación:

1. sistemática no reconocida en la escalera local;
2. sistemática o modelado incompleto en CMB/datos asociados;
3. física fuera del modelo base que cambia la conexión entre época temprana y tardía.

La tensión afecta parámetros y extensiones; no devuelve por sí sola un universo de miles o millones de años ni elimina el fondo térmico.

## 11. Adversarios fuertes

### 11.1 Luz cansada

**Versión fuerte:** los fotones pierden energía durante el trayecto; esto produce corrimiento al rojo sin expansión.

**Pruebas que debe superar:** mecanismo microfísico sin desenfocar imágenes ni producir dispersión indebida; dilatación temporal de curvas de luz; relación brillo superficial–`z`; espectro y temperatura del CMB; BAO y crecimiento de estructura. Una ecuación que reproduzca `z` no basta si falla el resto.

### 11.2 Universo estacionario con creación continua

**Versión fuerte:** el universo se expande pero sus propiedades medias son eternas gracias a creación de materia.

**Problema central:** el CMB térmico, la evolución de poblaciones y la abundancia de núcleos ligeros exigen una historia global que el modelo clásico no predijo de forma competitiva. Pueden construirse variantes, pero deben ajustar el conjunto con igual o menor complejidad y nuevas predicciones.

### 11.3 CMB como primer plano local

**Versión fuerte:** polvo, plasma o fuentes no resueltas generan el fondo.

**Prueba:** reproducir espectro de cuerpo negro, isotropía, anisotropías correlacionadas entre frecuencias, polarización y picos acústicos, además de su vínculo con BAO. Los primeros planos existen y se modelan; que existan no implica que expliquen el componente cosmológico residual.

### 11.4 Las estrellas son más viejas que el universo

Las crisis históricas de edad fueron reales cuando `H0` y modelos de materia daban edades demasiado pequeñas. La corrección llegó mediante distancias, física estelar y aceleración. Hoy las edades estelares publicadas tienen sistemáticas suficientes para ser compatibles con `~13.8 Ga`, pero el control debe mantenerse: una población robustamente anterior a la edad cosmológica sería un falsador importante de la combinación modelo–parámetros.

### 11.5 El modelo ajusta demasiados parámetros

Seis parámetros no se justifican porque produzcan una cifra bonita, sino porque ajustan simultáneamente numerosos multipolos y observables. Aun así, selección de modelo, priors y extensiones importan. Comparar residuales y predicciones fuera de la muestra es más informativo que citar solo un buen ajuste.

## 12. Big Bang no significa lo que suele dibujarse

### El modelo sí afirma

- el factor de escala fue menor;
- materia y radiación estuvieron más calientes y densas;
- hubo una fase en que el plasma y la radiación estaban acoplados;
- el universo observable evolucionó y produjo estructura.

### El modelo no afirma por sí solo

- una explosión de materia desde un punto dentro de espacio vacío;
- un centro espacial;
- que “antes” sea una pregunta definida;
- creación desde la nada;
- que la singularidad clásica sea un objeto físico observado;
- un mecanismo inflacionario único confirmado.

Extrapolar relatividad clásica hasta densidad infinita señala el límite del modelo, no una fotografía de un instante cero. La física cuántica de la gravedad y las condiciones iniciales permanecen abiertas.

## 13. Historia del conocimiento y mecanismos de corrección

| Etapa | Inferencia o problema | Qué cambió | Lección |
|---|---|---|---|
| universo estático | preferencia filosófica y pocos datos extragalácticos | soluciones dinámicas + corrimientos/distancias | una condición estética puede ocultarse como supuesto |
| Lemaître/Hubble | expansión propuesta/observada con distancias pobres | recalibración de Cefeidas y escalera | patrón correcto no garantiza pendiente correcta |
| edad `1/H0` | constantes tempranas daban universo demasiado joven | escala de distancias, `H(z)` y aceleración | el inverso de una tasa no es toda la historia |
| señal de 1965 | exceso de antena posiblemente instrumental | auditoría local + espectro/multifrecuencia | una anomalía exige eliminar aparato y entorno |
| COBE | fondo casi uniforme sin estructura detectada previamente | DMR detectó anisotropías pequeñas | “uniforme” dependía de sensibilidad angular |
| cosmología de precisión | parámetros estrechos dentro de `ΛCDM` | H0 y DESI prueban consistencia externa | precisión condicional puede revelar, no eliminar, tensión |

## 14. Claims, evidencias y confianza

| Claim | Formulación acotada | Evidencias | Confianza | Razón de no elevar más |
|---|---|---|---|---|
| `CLAIM-COSMOS-EXPANSION-001` | el factor de escala cósmico ha crecido durante la historia observada | `EVID-COSMOS-REDSHIFT-001`, `EVID-COSMOS-SN-001`, `EVID-COSMOS-BAO-001` | A-COND | “expansión” es interpretación geométrica, no lectura única |
| `CLAIM-COSMOS-HOT-001` | el universo observable pasó por una fase mucho más caliente y densa | CMB + D/H + expansión | A | no fija un comienzo absoluto |
| `CLAIM-COSMOS-CMB-001` | existe un fondo cósmico casi térmico de ~2.7 K con anisotropías primordiales | `EVID-COSMOS-CMB-ANTENNA-001`, `...SPECTRUM...`, `...ANISO...` | A | la inferencia de parámetros añade modelo |
| `CLAIM-COSMOS-BBN-001` | D/H poco procesado concuerda con nucleosíntesis temprana y densidad bariónica CMB | `EVID-COSMOS-BBN-D-001` | B-COND | tasas nucleares, selección y problema del litio |
| `CLAIM-COSMOS-AGE-001` | `ΛCDM` base + Planck infiere ~13.8 Ga | CMB, BAO, supernovas, estrellas | B-COND | depende de `H(z)` y familia de modelos |
| `CLAIM-COSMOS-ACCEL-001` | la expansión tardía es acelerada bajo FLRW | supernovas + BAO/CMB | B-COND | mecanismo y `w(z)` abiertos |
| `CLAIM-COSMOS-H0-001` | inferencias tempranas y escalera local dan valores discordantes | Planck, SH0ES, DESI | B | magnitud cambia con datasets/modelos |
| `CLAIM-COSMOS-BOUNDARY-001` | los datos no establecen creación de la nada ni singularidad física observada | límites de extrapolación | A-SEM | es un límite de alcance, no teoría del origen |

## 15. Predicciones y pruebas discriminatorias

1. **Temperatura CMB:** a mayor `z`, la temperatura del fondo debe aumentar aproximadamente como `T(z)=T0(1+z)` si la expansión adiabática estándar es correcta.
2. **Dilatación temporal:** procesos transitorios a alto `z` deben aparecer estirados por `1+z`, con controles de población.
3. **BAO compartida:** la escala acústica inferida del CMB debe corresponder con el patrón tardío de galaxias después de evolución geométrica.
4. **Abundancias ligeras:** tasas nucleares mejor medidas deben predecir D/H consistente con sistemas poco procesados; discrepancias coherentes señalarían física o astrofísica faltante.
5. **Cúmulos:** ninguna estrella con física y distancia bien controladas debe resultar robustamente anterior al universo del modelo.
6. **Corrimiento en tiempo real:** el redshift drift debe seguir el signo y amplitud de `H(z)` previstos, aunque su medición es extremadamente difícil.
7. **Consistencia multibanda:** una señal CMB cosmológica debe conservar el mismo patrón después de separar primeros planos con espectros distintos.

## 16. Qué podría falsar o transformar la conclusión

- una explicación no expansiva que reprodujera conjuntamente corrimientos, dilatación temporal, brillo, CMB, BAO y crecimiento de estructura con predicciones nuevas exitosas;
- demostrar que el espectro CMB o sus anisotropías residuales provienen de un primer plano/instrumento común no modelado;
- abundancias primordiales precisas e independientes incompatibles entre sí y con cualquier historia térmica razonable;
- edades estelares replicadas con sistemáticas cerradas, anteriores de forma clara a toda edad permitida por los datos geométricos;
- medición directa de `H(z)` o redshift drift incompatible con la expansión reconstruida;
- tensiones persistentes que exijan reemplazar `ΛCDM`, cambiando de manera material `t0`.

Falsar la cifra precisa no implica automáticamente falsar la fase caliente; cada nivel tiene evidencias y dependencias diferentes.

## 17. Protocolo reproducible ideal

Una reproducción completa supera a una persona y exige observatorios, pero la cadena puede diseñarse para auditoría:

1. publicar exposiciones crudas, calibraciones, máscaras y selección;
2. preregistrar cortes y análisis ciegos cuando sea posible;
3. medir `z` con espectrógrafos y líneas múltiples;
4. construir distancias con anclas geométricas y peldaños redundantes;
5. mapear CMB en frecuencias suficientes para separar primeros planos;
6. comparar radiancia con calibrador térmico trazable;
7. extraer anisotropías con pipelines independientes y simulaciones inyectadas;
8. medir D/H en nubes de baja metalicidad con modelos de velocidad alternativos;
9. estandarizar supernovas con diferentes modelos de luz y calibraciones;
10. medir BAO con catálogos ciegos y matrices de covarianza públicas;
11. ajustar `ΛCDM` y extensiones sobre el mismo conjunto, publicando priors y residuales;
12. repetir la edad estelar con códigos, distancias y abundancias independientes;
13. propagar por separado incertidumbre instrumental, astrofísica y de modelo;
14. comprobar predicciones fuera del conjunto usado para ajustar.

## 18. Fuentes centrales

### Observación e historia

- `SRC-LEMAITRE-1931`: solución dinámica y vínculo con velocidades radiales.
- `SRC-HUBBLE-1929`: relación histórica distancia–velocidad.
- `SRC-PENZIAS-WILSON-1965`: exceso de temperatura de antena.
- `SRC-DICKE-1965`: interpretación térmica cosmológica.
- `SRC-MATHER-1994`: espectro CMB con FIRAS.
- `SRC-SMOOT-1992`: anisotropías CMB con DMR.

### Reconstrucción de expansión y edad

- `SRC-RIESS-1998`, `SRC-PERLMUTTER-1999`: supernovas y aceleración.
- `SRC-EISENSTEIN-2005`, `SRC-DESI-DR2-2025`: BAO histórica y moderna.
- `SRC-PLANCK-2020`: parámetros del modelo base con datos finales.
- `SRC-RIESS-2022`: escalera local y tensión de Hubble.

### Corroboración

- `SRC-COOKE-2018`: deuterio primordial.
- `SRC-VALCIN-2021`: edades de cúmulos globulares.
- `SRC-JIMENEZ-LOEB-2002`: cronómetros cósmicos.

Los metadatos y el nivel real de acceso se registran en [`../SOURCES.md`](../SOURCES.md). Leer un resumen no equivale a reanalizar mapas, espectros o covarianzas.

---

## LO OBSERVADO

- líneas espectrales desplazadas en galaxias;
- correlación estadística entre distancia y corrimiento;
- potencia de microondas casi isotrópica en el cielo;
- espectro casi perfecto de cuerpo negro y anisotropías de microkelvin;
- absorción de deuterio en nubes poco metálicas;
- curvas de luz de supernovas y distribución tridimensional de galaxias;
- estrellas antiguas con posiciones medibles en diagramas color–magnitud.

No observamos el universo desde fuera, el factor de escala como objeto, una singularidad ni “la nada”.

## LO MEDIDO

- longitudes de onda, flujos, ángulos y tiempos;
- temperatura de antena y radiancia por frecuencia;
- diferencias de temperatura/polarización por dirección;
- razones D/H;
- posiciones angulares y corrimientos de millones de galaxias;
- paralajes, colores, luminosidades y abundancias estelares.

`H0`, `Ωm`, `t0` y `w` son parámetros inferidos mediante modelos.

## LO INFERIDO

- expansión a gran escala;
- fase temprana caliente y densa;
- desacoplamiento del fondo cósmico y semillas de estructura;
- nucleosíntesis primordial de núcleos ligeros;
- aceleración tardía;
- una edad cercana a `13.8 Ga` bajo `ΛCDM` base.

## LOS SUPUESTOS

- homogeneidad/isotropía a gran escala como aproximación;
- relatividad general/FLRW en las escalas modeladas;
- calibración y separación de primeros planos;
- física atómica, nuclear y estelar aplicable;
- poblaciones de supernovas estandarizables;
- horizonte sonoro modelado correctamente;
- priors y familia de modelos declarados.

## LAS INCERTIDUMBRES

- calibración de distancia y fotometría;
- movimientos peculiares y selección de galaxias;
- primeros planos CMB y respuesta de haz;
- tasas nucleares y estructura de nubes D/H;
- física de poblaciones estelares;
- energía oscura, curvatura y extensiones del modelo;
- tensión entre `H0` temprano y local.

## LAS ALTERNATIVAS

- luz cansada u otros mecanismos no expansivos;
- cosmología estacionaria con creación continua;
- fondo local/astrophysical en vez de relicto;
- gravedad modificada o energía oscura dinámica;
- cosmologías con fase anterior, rebote o condiciones iniciales distintas.

Las primeras tres deben explicar el conjunto observado; las dos últimas pueden conservar una fase caliente y modificar su extrapolación o edad exacta.

## LAS CONTROVERSIAS

- valor y origen de la tensión de Hubble;
- constante cosmológica frente a energía oscura dinámica o gravedad modificada;
- independencia efectiva entre CMB, BAO y BBN;
- significado físico de la singularidad y posible fase anterior;
- mecanismo de inflación y condiciones iniciales.

Véase [`../CONTROVERSIES.md`](../CONTROVERSIES.md).

## QUÉ PODRÍA FALSARLO

- incompatibilidad multimensajero robusta con expansión;
- primeros planos que expliquen el CMB completo;
- fallas coherentes entre CMB, BBN, BAO y supernovas no reparables por sistemáticas;
- objetos inequívocamente anteriores a la edad máxima permitida;
- predicciones directas de `H(z)` refutadas.

## NIVEL DE CONFIANZA

- **A:** existe el CMB casi térmico; el universo observable pasó por una fase más caliente y densa.
- **A-COND:** expansión a gran escala dentro de la geometría que explica el conjunto.
- **B-COND:** `~13.8 Ga` y aceleración tardía bajo `ΛCDM`/FLRW.
- **B:** existe una discrepancia dependiente de método entre valores tempranos y locales de `H0`.
- **C-D:** naturaleza y evolución de energía oscura, mecanismo inflacionario y física pre-fase-caliente.
- **E:** mecanismo histórico exacto de un origen absoluto, si lo hubo.

## QUÉ SABEMOS REALMENTE

Recibimos hoy luz cuya longitud de onda, espectro, dirección y estructura estadística conservan una historia común. Un fondo térmico casi perfecto, pequeñas anisotropías, abundancias de deuterio, distancias de supernovas y una escala acústica en galaxias encajan en una expansión desde condiciones mucho más calientes y densas. Al integrar la historia `H(z)` que mejor ajusta estos datos en `ΛCDM`, obtenemos aproximadamente `13.8 mil millones de años`. Estrellas antiguas, con otra física y mayores sistemáticas, no contradicen ese marco.

## QUÉ TODAVÍA NO SABEMOS

- por qué existe el contenido y las leyes que describimos;
- si hubo una fase anterior a la fase caliente;
- si la singularidad matemática corresponde a algo físico;
- qué es la materia oscura;
- qué causa la aceleración y si cambia con el tiempo;
- qué resuelve la tensión de Hubble;
- qué mecanismo produjo las condiciones iniciales y las perturbaciones;
- cuánto cambiará la edad precisa si el modelo base debe ampliarse.

La conclusión responsable no es “lo sabemos todo desde el instante cero”. Es más fuerte y más humilde: varias señales actuales, medidas con instrumentos distintos, permiten reconstruir con alta confianza una larga historia cósmica, mientras el borde inicial y parte de su contenido físico siguen abiertos.

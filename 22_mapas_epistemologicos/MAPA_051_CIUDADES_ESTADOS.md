# Mapa epistemológico 051 — De archivos materiales a ciudad, Estado y transformación

| Campo | Valor |
|---|---|
| ID | `MAP-CITIES-STATES-001` |
| Investigación | `INV-CITIES-STATES-001` |
| Estado | `AUDITADO` |
| Versión | `0.1.50` |

![Matriz de archivos, mediciones e inferencias](../assets/visuales/mapa-investigacion-051.svg)

![Cronología regional multirreloj](../assets/visuales/cronologia-ciudades-estados-multirreloj.svg)

Los gráficos no son mapas geográficos ni líneas de progreso. El primero separa cadenas inferenciales; el segundo alinea ventanas regionales sin afirmar sincronía, difusión o causalidad.

## 1. Ontología de resultados

```text
RESIDENCIA
  ├─ duración / recurrencia / estacionalidad
  └─ no hereda agricultura o aldea

ASENTAMIENTO
  ├─ aldea: agregado residencial contextual
  ├─ ciudad: densidad/funciones/centralidad bajo definición regional
  └─ red: relaciones entre nodos y hinterland

ECONOMÍA
  ├─ almacenamiento
  ├─ producción y especialización
  ├─ intercambio
  └─ extracción/tributación

INSTITUCIÓN
  ├─ coordinación y administración
  ├─ autoridad y coerción
  ├─ soberanía territorial
  └─ Estado / imperio bajo criterios explícitos

DISTRIBUCIÓN
  ├─ variación doméstica
  ├─ concentración de riqueza
  ├─ rango y transmisión
  └─ clase / poder con archivo adicional
```

No existe una flecha necesaria entre ramas.

## 2. Matriz archivo → medida → inferencia

| Archivo | Unidad inmediata | Medida | Inferencia máxima sin archivo adicional | Salto prohibido |
|---|---|---|---|---|
| superficie/prospección | rasgo/sitio/fase | área, densidad, distancia | patrón de asentamiento | jerarquía política automática |
| lidar/imagen | píxel/anomalía/forma | relieve y conectividad | huella candidata | ciudad/Estado sin fecha y control |
| casa | edificio/fase | superficie, inversión, acceso | actividad/variación doméstica | hogar, clase o etnia automática |
| barrio | conjunto espacial | proximidad, función, tránsito | organización interdoméstica | administración central |
| edificio público | rasgo construido | escala, acceso, secuencia | coordinación/exclusión | rey, templo o coerción |
| almacén | estructura/contenido | capacidad y acceso | almacenamiento | excedente fiscal o propiedad |
| taller | desecho/cadena operativa | volumen, pericia, repetición | producción especializada | especialista pleno o control estatal |
| objeto exótico | objeto/composición | procedencia y ruta posible | circulación | mercado, tributo o imperio |
| sello/token/tablilla | soporte/impresión/texto | género, contenido, serie | registro administrativo local | alfabetización o Estado universal |
| peso/medida | objeto/contexto | masa, tolerancia, clúster | práctica metrológica | decreto central |
| entierro | individuo/tratamiento | bienes, cuerpo, posición | diferenciación mortuoria | clase fija o autoridad en vida |
| isótopo | tejido/individuo | dieta/movilidad | historia biológica parcial | ciudadanía o comunidad completa |
| ADN antiguo | individuo/locus/genoma | parentesco, afinidad, mezcla | genealogía/movilidad | etnia, lengua, cargo, Estado |
| paleoambiente | testigo/proxy | agua, clima, geoforma | oportunidad/restricción | causa política suficiente |

## 3. Cadenas auditadas

### 3.1 Urbanización multipath en Mesopotamia

```text
prospección + excavación Tell Brak
        ↓ fase cerámica, área y distribución
concentración septentrional tardío V milenio a. C.
        + comparación regional
hubs graduales / upstarts rápidos / contracciones
        ↓
urbanización por trayectorias múltiples [B-COND]
        ⇢ gobierno específico [no identificado]
```

IDs reutilizados: `EVID-CIV-TELLBRAK-SURVEY-001`, `EVID-CIV-NMESO-URBAN-PATHS-001`, `CLAIM-CIV-URBANISM-MULTIPATH-001`.

### 3.2 Administración de Uruk

```text
P003414 excavada + catálogo CDLI
        ↓ identidad, fase Uruk IV, género
registro administrativo local [A objeto]
        ⇢ alfabetización general [D]
        ⇢ territorio/Estado desde una pieza [D]
```

IDs reutilizados: `EVID-CIV-CDLI-P003414-001`, `CLAIM-CIV-WRITING-ADMIN-001`.

### 3.3 Egipto temprano

```text
186 fechas + orden arqueológico + priors
        ↓ calibración y modelo bayesiano
cronología de formación/Primera Dinastía [B-COND]
        + asentamiento, administración, iconografía, entierros
modelo de consolidación estatal
        ⇢ soberanía observada por 14C [no]
```

ID reutilizado: `EVID-CIV-EGYPT-CHRONOLOGY-001`; nueva síntesis: `EVID-EGYPT-CHRONOLOGY-051-001`.

### 3.4 Indo: ciudad y transformación

```text
geoformas + prospecciones armonizadas + fases
        ↓ ríos activos, distribución y tamaño
urbanización regional / desnucleación posterior [B-COND]
        ↓
transformación de redes y asentamientos
        ⇢ desaparición de pueblos [no]

genoma Rakhigarhi (1 individuo)
        ↓ afinidad y modelos
historia biológica local
        ⇢ forma política/lengua/clase [no]
```

### 3.5 Erlitou/Yiluo

```text
cobertura regional + excavación por fases
        ↓ cuatro niveles, nucleación, vías, talleres, patios
centralidad e integración regional [B-COND]
        + jurisdicción/extracción/sucesión (a probar)
capital o Estado [C-COND]
```

### 3.6 Mesoamérica

```text
Aguada Fénix: lidar + excavación + 14C
        ↓ plataforma y reunión 1000–800 a. C.
coordinación monumental [B]
        ⇢ dinastía/Estado [no heredados]

Teotihuacan: mapa + complejos residenciales
        ↓ huella, hogares modelados y densidad
ciudad ~100,000 habitantes [B-COND]
        ⇢ gobierno autocrático/colectivo [controversia]

Maya: lidar + verificación
        ↓ rasgos, caminos, terrazas, defensas
conectividad/uso de paisaje [B-COND]
        ⇢ todos coetáneos o guerra concreta [no]
```

### 3.7 Andes/Amazonia

```text
Norte Chico: 95 fechas / 13 sitios
        ↓ ocupación monumental ~3000–1800 a. C.
cronología regional [B]
        ⇢ Estado/clase/coerción [C-D]

Alta Amazonia: campo + lidar
        ↓ plataformas, plazas, caminos, drenajes, campos
urbanismo-jardín de baja densidad [B-COND]
        ⇢ ciudad compacta o Estado único [no]
```

### 3.8 África occidental/austral

```text
Jenne-jeno: excavación + prospección
        ↓ ocupación, >33 ha, hierro, intercambio
funciones urbanas [B]
        ⇢ Estado centralizado [no]

Great Zimbabwe: 14C + estratigrafía + importaciones
        ↓ cronología bayesiana y no coetaneidad
muros siglos XII–XV; solapamiento regional [B-COND]
        + modelo demográfico
población simultánea probablemente <10,000 [B-COND]
        ⇢ megaciudad / relevo lineal [no]
```

## 4. Matriz de formas políticas

| Observación | Coordinación | Autoridad | Coerción | Estado | Imperio |
|---|---:|---:|---:|---:|---:|
| obra colectiva | compatible | posible | no necesaria | no suficiente | no |
| administración local | sí | compatible | abierta | condicionada | no |
| tributo documentado | sí | sí | posible | fuerte si supralocal/persistente | requiere incorporación desigual adicional |
| jerarquía de sitios | compatible | posible | abierta | condicionada | no |
| muralla | coordinación | posible | función abierta | no suficiente | no |
| desigualdad residencial | no necesaria | abierta | abierta | no suficiente | no |
| jurisdicciones anidadas | sí | sí | puede medirse | evidencia fuerte | escala adicional |
| anexión/tributo de varios territorios | sí | sí | frecuente | sí | evidencia fuerte |

La tabla no es checklist: muestra qué inferencias no se heredan.

## 5. Mapa de desigualdad

```text
área de casa ──► proxy material doméstico ──► distribución/Gini
                    │                              │
                    ├─ preservación                ├─ comparabilidad
                    ├─ casa ≠ hogar                ├─ muestra/región
                    └─ abandono                    └─ una dimensión

entierro ──► tratamiento diferencial ──► rango posible
   │                                      │
   ├─ selección funeraria                 ├─ recurrencia
   ├─ edad/rito                           ├─ parentesco
   └─ bienes no siempre propios           └─ vida social externa

parentesco genómico + acceso repetido ──► transmisión posible
                                      ⇢ clase/cargo: archivo adicional
```

Confianza:

- variación material: `B` si contexto/comparación son sólidos;
- concentración de proxy: `B-COND`;
- herencia/rango: `C-COND` salvo series convergentes;
- clase/poder desde un solo proxy: `D`.

## 6. Modelos causales como grafo, no escalera

```text
demografía ─┐
ecología ───┼─► costes/oportunidades ─► agregación/inversión
comercio ───┤                               │
guerra ─────┤                               ├─► instituciones
ritual ─────┤                               │        │
información ┤                               │        ├─► extracción
agencia ────┘                               │        └─► jurisdicción
        ▲                                  ▼
        └──────── consecuencias y retroalimentaciones ─────────┘
```

Cada flecha exige precedencia, mecanismo, escala y caso negativo. El grafo permite causalidad inversa: un Estado puede intensificar agricultura; una institución puede producir estandarización; una ciudad puede alterar ambiente.

## 7. Escritura, medida y Estado

```text
marca material
   ↓ convención demostrada
signo / sistema de registro
   ↓ codificación y contenido
administración especializada
   ↓ distribución de usuarios
alfabetización (limitada o amplia)

Estado: eje paralelo de jurisdicción, extracción y autoridad
```

Opie–Atkinson 2025/2026:

- grano y Estado: evolución correlacionada bajo el modelo;
- tributación: conjunto menor;
- escritura aparece más probablemente en sociedades tributarias;
- existen Estados sin escritura en la propia codificación;
- binarización, árbol lingüístico y transmisión horizontal limitan causalidad.

Ialongo 2021:

- clústeres de pesos + experimento/modelo son compatibles con copia y autorregulación de usuarios;
- la estandarización no exige emisor político central;
- contextos individuales todavía pueden mostrar control institucional.

## 8. «Colapso» descompuesto

| Unidad | Cambio medible | Archivo |
|---|---|---|
| ciudad | reducción/abandono/desnucleación | prospección, estratigrafía, fechas |
| red | pérdida o redirección de conexiones | procedencia, caminos, distribución |
| institución | cese de registros, tributos o edificios | textos, sellos, secuencia construida |
| entidad política | fragmentación o cambio jurisdiccional | archivos convergentes |
| población | mortalidad, salida, mezcla, continuidad | demografía, isótopos, ADN, asentamientos |
| práctica | abandono, préstamo o transformación | cadena operativa y series |

No todas las filas cambian juntas. `CLAIM-COLLAPSE-TRANSFORMATION-001` reemplaza desaparición total por una matriz de resultados.

## 9. Relojes

```text
T0 muestra/objeto        fecha material
T1 rasgo/capa            evento deposicional o construcción
T2 fase                  agrupación tipológica/estratigráfica
T3 sitio                 ocupaciones y remodelaciones
T4 región                agregación, red y redistribución
T5 institución           continuidad de reglas/autoridad
T6 genealogía            parentesco/afinidad/coalescencia
```

Errores recurrentes:

- usar `T0` para fechar soberanía `T5`;
- tratar área `T3` como coetánea sin resolver `T2`;
- usar afinidad `T6` como identidad política `T5`;
- sumar intervalos regionales `T4` como contacto o causalidad.

## 10. Escala de confianza aplicada

| Resultado | Confianza típica | Condición |
|---|---|---|
| identidad/fase de objeto catalogado | A–B | procedencia y tipología trazables |
| área/densidad de rasgos | B-COND | cobertura, clasificación y fase |
| actividad de taller/almacén | B-COND | residuos, forma, acceso, repetición |
| especialización plena | C-COND | dedicación y dependencia adicionales |
| desigualdad de un proxy | B-COND | unidad y muestra comparables |
| rango/herencia | C-COND | recurrencia + parentesco/vida social |
| ciudad | B-COND | definición regional y funciones explícitas |
| Estado | C-COND | jurisdicción, extracción y persistencia convergentes |
| causa única mundial | D | incompatibilidad con variación y equifinalidad |

## 11. Alternativas adversarias mínimas

| Señal | Hipótesis focal | Alternativas obligatorias |
|---|---|---|
| gran edificio | autoridad central | reunión, ritual, almacenamiento, obra episódica |
| muralla | guerra | control de paso/agua/animales, delimitación, exhibición |
| sello/tablilla | Estado escrito | administración local/especializada |
| pesos semejantes | decreto | copia, red de usuarios, convergencia funcional |
| tumba rica | clase | edad, rito, parentesco, evento, bienes colectivos |
| genomas afines | grupo político | parentesco, movilidad, muestreo funerario |
| abandono urbano | desaparición | traslado, fragmentación, desnucleación |
| cambio climático | causa | coincidencia, mediación, causalidad inversa, respuestas divergentes |

## 12. Falsadores prioritarios

1. excavación y fechas directas contradicen la clasificación lidar o la coetaneidad;
2. archivos de tributación/jurisdicción contradicen una interpretación heterárquica;
3. nuevos barrios muestran que un patrón residencial era efecto de conservación;
4. metrología contextual identifica emisión central donde el modelo de red era suficiente;
5. parentesco y recursos no se reproducen entre generaciones donde se infirió herencia;
6. series regionales muestran despoblamiento total donde se propuso redistribución;
7. casos negativos eliminan el efecto causal propuesto al controlar escala y preservación;
8. categorías locales documentadas no corresponden a la taxonomía comparativa usada.

## 13. Reconciliación de IDs

| Elemento CIV-001 | Uso en 051 | Estado conservado |
|---|---|---|
| `CLAIM-CIV-CATEGORY-001` | categoría no medida | `TRAZADO` |
| `CLAIM-CIV-DATING-CONTEXT-001` | reloj de muestra/contexto | `TRAZADO` |
| `CLAIM-CIV-SEQUENCE-NONUNIVERSAL-001` | niega escalera necesaria | `TRAZADO` |
| `CLAIM-CIV-URBANISM-MULTIPATH-001` | Tell Brak/rutas regionales | `TRAZADO` |
| `CLAIM-CIV-WRITING-ADMIN-001` | P003414 local | `TRAZADO` |
| `CLAIM-CIV-INEQUALITY-PROXY-001` | Gini residencial | `TRAZADO` |
| `EVID-CIV-EGYPT-CHRONOLOGY-001` | cadena cronológica | `TRAZADO` |
| `EVID-CIV-NORTECHICO-DATES-001` | reloj monumental | `TRAZADO` |

La 051 añade capas auditadas sin cambiar esos estados ni presentar CIV-001 como sustituido.

## 14. Regla de lectura final

```text
Para cada afirmación:
¿qué objeto/rasgo? → ¿qué unidad? → ¿qué reloj? → ¿qué medición?
→ ¿qué puente? → ¿qué escala? → ¿qué alternativa? → ¿qué falsador?
```

Si una respuesta falta, se baja la confianza o se detiene la inferencia. Ni el tamaño, ni la monumentalidad, ni la escritura, ni la genética funcionan como atajos hacia ciudad, Estado o «civilización».

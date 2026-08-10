# Mapa de conocimiento

Este mapa separa una jerarquía narrativa de una red epistemológica. La primera dice “qué viene después”; la segunda muestra de qué mediciones depende lo que afirmamos.

## Jerarquía cronológica y biológica

```text
COSMOS Y SISTEMA SOLAR
└── sólidos nebulares y planetesimales
    └── TIERRA–LUNA
        ├── núcleo, manto, corteza, océanos y atmósfera
        └── VIDA
            ├── replicación, metabolismo y membranas
            ├── procariotas
            │   └── fotosíntesis y oxigenación
            └── eucariotas
                ├── sexo y multicelularidad
                └── ANIMALES
                    ├── sistemas nerviosos, ojos y esqueletos
                    └── VERTEBRADOS
                        ├── mandíbulas y extremidades
                        └── AMNIOTAS
                            ├── reptiles y aves
                            └── MAMÍFEROS
                                └── PRIMATES
                                    └── HOMININOS
                                        └── HOMO
                                            └── HOMO SAPIENS
                                                ├── migraciones y mezcla
                                                ├── lenguaje, símbolos y cooperación
                                                └── CIVILIZACIONES
                                                    ├── agricultura y ciudades
                                                    ├── escritura, estados y leyes
                                                    └── Mesopotamia, Egipto, Indo,
                                                        China, Mesoamérica y Andes
```

## Navegación por módulos

| Nodo | Directorio principal | Preguntas de evidencia |
|---|---|---|
| Cosmos y Sistema Solar | `01_cosmos` | ¿Cómo se observan formación estelar, nucleosíntesis y discos? ¿Qué registran meteoritos? |
| Formación terrestre | `02_formacion_tierra` | ¿Qué fecha cada reloj? ¿Cómo se infieren acreción, núcleo y Luna? |
| Hadeano | `03_hadeano` | ¿Qué conservan zircones, rocas raras y la Luna? |
| Arcaico | `04_arcaico` | ¿Qué evidencia de corteza, océanos y vida sobrevive? |
| Proterozoico | `05_proterozoico` | ¿Cómo se reconstruyen oxígeno, eucariotas y multicelularidad? |
| Paleozoico | `06_paleozoico` | ¿Cómo se fechan radiaciones, colonización terrestre y extinciones? |
| Mesozoico | `07_mesozoico` | ¿Qué conectan fósiles, estratos, paleomagnetismo e impactos? |
| Cenozoico | `08_cenozoico` | ¿Cómo se reconstruyen clima, mamíferos y primates? |
| Origen de la vida | `09_origen_vida` | ¿Qué puede probar laboratorio y qué solo restringe plausibilidad histórica? |
| Transiciones de la vida | `10_evolucion_vida` | ¿Cómo se combinan fósiles, desarrollo, comparación y genes? |
| Evolución humana | `11_evolucion_humana` | ¿Qué huesos existen y qué anatomía se reconstruye? |
| Homo sapiens | `12_homo_sapiens` | ¿Qué significa “origen” en una población estructurada? |
| Migraciones | `13_migraciones` | ¿Cómo convergen arqueología, ADN, clima y lingüística? |
| Civilizaciones | `14_civilizaciones` | ¿Qué proviene de objetos, textos o modelos sociales? |
| Genética humana | `15_genetica_humana` | ¿Qué mide un haplogrupo y qué no implica? |
| Controversias | `16_controversias` | ¿Qué dato comparten rivales y qué prueba discrimina? |
| Preguntas abiertas | `17_preguntas_abiertas` | ¿Qué se desconoce y por qué? |
| Historia de la ciencia | `18_historia_ciencia` | ¿Qué cambió el consenso y cómo? |

## Red de métodos

```mermaid
flowchart TD
    M["Muestras actuales"] --> MS["Espectrometría de masas"]
    M --> IM["Imagen y microscopía"]
    M --> SEQ["Secuenciación"]
    M --> STR["Estratigrafía y contexto"]
    M --> TXT["Textos e inscripciones"]

    MS --> ISO["Razones isotópicas"]
    ISO --> AGE["Edades y reservorios"]
    IM --> MOR["Morfología y microestructura"]
    MOR --> PHY["Parentesco / función"]
    SEQ --> VAR["Variación genética"]
    VAR --> POP["Demografía / mezcla"]
    STR --> ORD["Orden, asociación y ambiente"]
    TXT --> HIST["Afirmaciones históricas"]

    AGE --> PAST["Reconstrucción del pasado"]
    PHY --> PAST
    POP --> PAST
    ORD --> PAST
    HIST --> PAST

    PRES["Sesgo de preservación"] -. afecta .-> M
    MOD["Modelos y supuestos"] -. conectan .-> PAST
```

## Cuellos de botella epistemológicos

| Cuello de botella | Claims afectados | Riesgo |
|---|---|---|
| significado del evento fechado | casi toda la cronología | confundir cristalización, cierre, alteración y evento histórico |
| preservación diferencial | fósiles, rocas hadeanas, arqueología | ausencia de evidencia presentada como evidencia de ausencia |
| calibraciones compartidas | geocronología, relojes moleculares, `14C` | falsa independencia |
| procedencia/contexto | meteoritos, fósiles, artefactos, ADN antiguo | asociación errónea o contaminación |
| categorías humanas | especie, cultura, civilización, lenguaje | convertir etiquetas analíticas en entidades nítidas del pasado |
| resolución temporal | origen de la vida, radiaciones, migraciones | transformar límites mínimo/máximo en fechas puntuales |

## Ruta epistemológica actual

La primera ruta implementada es:

```text
CAIs y meteoritos
  → razones U–Pb/Pb–Pb
  → tiempo cero del Sistema Solar
  → modelos de acreción y Hf–W
  → formación terrestre no instantánea
  → Luna y diferenciación
  → zircones/rocas hadeanas
  → primeras restricciones sobre corteza y agua
```

Véase `INV-EARTH-AGE-001` en `02_formacion_tierra`.

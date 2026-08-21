export const civilizationDimensionKeys = [
  "production",
  "urbanism",
  "administration",
  "writing",
  "inequality",
  "authority",
  "empire",
  "infrastructure",
  "networks",
  "ecology",
  "transformation",
] as const;

export type CivilizationDimensionKey = (typeof civilizationDimensionKeys)[number];
export type ComparisonState = "observed" | "conditional" | "not-demonstrated" | "missing" | "contrary";

export type CivilizationDimension = {
  key: CivilizationDimensionKey;
  label: string;
  question: string;
};

export type ComparisonCell = {
  state: ComparisonState;
  observed: string;
  inference: string;
  limit: string;
  sources: string[];
};

export type CivilizationCase = {
  id: string;
  name: string;
  shortName: string;
  region: string;
  period: string;
  summary: string;
  coordinates: [longitude: number, latitude: number];
  uncertaintyKm: number;
  anchorNote: string;
  adversarial?: boolean;
  sources: string[];
  cells: Partial<Record<CivilizationDimensionKey, ComparisonCell>>;
};

export type ChronologyLane = {
  id: string;
  region: string;
  note: string;
  events: Array<{ date: string; title: string; detail: string; source: string }>;
};

export const civilizationDimensions: CivilizationDimension[] = [
  { key: "production", label: "Producción", question: "¿Qué prácticas de sustento y manejo quedan observadas?" },
  { key: "urbanism", label: "Urbanismo", question: "¿Qué concentración, funciones o redes de asentamiento se observan?" },
  { key: "administration", label: "Administración", question: "¿Qué registro, medida o coordinación material se conserva?" },
  { key: "writing", label: "Escritura y notación", question: "¿Qué corpus existe y qué usuarios permite reconocer?" },
  { key: "inequality", label: "Desigualdad", question: "¿Qué distribución material se midió y con qué proxy?" },
  { key: "authority", label: "Autoridad", question: "¿Qué jurisdicción, decisión o extracción puede inferirse?" },
  { key: "empire", label: "Imperio", question: "¿Hay incorporación territorial desigual, no sólo objetos compartidos?" },
  { key: "infrastructure", label: "Infraestructura", question: "¿Qué obras y usos están fechados o contextualizados?" },
  { key: "networks", label: "Redes", question: "¿Qué circulación se observa y qué mecanismo sigue abierto?" },
  { key: "ecology", label: "Ecología", question: "¿Qué relación local entre paisaje y práctica está respaldada?" },
  { key: "transformation", label: "Transformación", question: "¿Qué cambió: población, ciudad, institución, red o archivo?" },
];

function cell(
  state: ComparisonState,
  observed: string,
  inference: string,
  limit: string,
  ...sources: string[]
): ComparisonCell {
  return { state, observed, inference, limit, sources };
}

export const civilizationCases: CivilizationCase[] = [
  {
    id: "mesopotamia",
    name: "Mesopotamia: Tell Brak y Uruk",
    shortName: "Mesopotamia",
    region: "Asia sudoccidental",
    period: "V–IV milenios a. C.",
    summary: "Concentración urbana, administración y paisajes hidráulicos conectados, pero sin una sola ruta ni una monocausa.",
    coordinates: [43.2, 34.6],
    uncertaintyKm: 620,
    anchorNote: "Anclaje regional entre Tell Brak y el sur mesopotámico; no representa una frontera política.",
    sources: ["SRC-OATES-BRAK-2007", "SRC-LAWRENCE-URBANISM-2015", "SRC-GIOSAN-SUMER-2025"],
    cells: {
      production: cell("conditional", "Topografía, sedimento y proxies paleoambientales permiten modelar irrigación mareal durante Ubaid/Uruk.", "El paisaje pudo reducir riesgo agrícola y favorecer transporte.", "El mecanismo económico temprano es especulativo y no produce burocracia por necesidad.", "SRC-GIOSAN-SUMER-2025"),
      urbanism: cell("observed", "Tell Brak conserva una extensa concentración de ocupación hacia fines del V milenio a. C.", "Hubo rutas septentrionales de urbanización antes o en paralelo a la expansión material de Uruk.", "La superficie cerámica no observa la forma de gobierno.", "SRC-OATES-BRAK-2007", "SRC-LAWRENCE-URBANISM-2015"),
      administration: cell("observed", "La tablilla P003414 es un objeto administrativo excavado, asignado a Uruk IV.", "Existió al menos un género local de registro administrativo.", "Una tablilla no mide población alfabetizada, jurisdicción ni toda la administración.", "EVID-CIV-CDLI-P003414-001"),
      writing: cell("conditional", "El corpus proto-cuneiforme conserva signos, números, géneros y operaciones.", "Permite estudiar prácticas de registro.", "Los testimonios iniciales no resuelven por sí solos lengua ni distribución social completa.", "SRC-OTTAVIANO-SCRIPTS-2026"),
      authority: cell("not-demonstrated", "Arquitectura, tablillas y concentración regional muestran coordinación diferenciada.", "Son compatibles con instituciones y autoridad en escalas concretas.", "No observan automáticamente soberanía homogénea, coerción o un único Estado regional.", "CLAIM-CIVILIZATIONS-MESOPOTAMIA-PLURAL-001"),
      empire: cell("not-demonstrated", "Materiales relacionados con Uruk circulan fuera del sur mesopotámico.", "Documentan conexiones y adopciones selectivas.", "Un estilo u objeto difundido no identifica colonia, incorporación desigual ni imperio.", "CLAIM-CIVILIZATIONS-NETWORKS-ALTERNATIVES-001"),
      infrastructure: cell("conditional", "Arquitectura, canales y paisajes mareales están documentados en escalas distintas.", "Permiten contrastar coordinación, producción y movilidad.", "No fueron necesariamente coetáneos ni gobernados por una sola institución.", "SRC-GIOSAN-SUMER-2025"),
      networks: cell("observed", "Cerámicas, estilos y objetos relacionados con Uruk aparecen en redes amplias.", "Hubo circulación y aprendizaje entre regiones.", "Quedan abiertos agentes, dirección y mecanismo: intercambio, movilidad, imitación o control.", "CLAIM-CIVILIZATIONS-NETWORKS-ALTERNATIVES-001"),
      ecology: cell("conditional", "La geoarqueología reconstruye oportunidades productivas y de transporte en paisajes cambiantes.", "El ambiente restringió y habilitó prácticas locales.", "Ningún río o canal demuestra despotismo ni centralización inevitable.", "CLAIM-HYDRAULIC-NOT-DESPOTISM-001"),
      transformation: cell("conditional", "Series regionales distinguen crecimiento gradual, ascensos rápidos y contracciones.", "Las trayectorias urbanas pueden descomponerse por sitio, red y periodo.", "Contracción urbana no equivale a desaparición de pueblos o instituciones.", "CLAIM-COLLAPSE-TRANSFORMATION-001"),
    },
  },
  {
    id: "shakhi-kora",
    name: "Shakhi Kora",
    shortName: "Shakhi Kora",
    region: "Zagros occidental",
    period: "IV milenio a. C.",
    summary: "Adopción y abandono de formas institucionales relacionadas con Uruk: una prueba contra la expansión lineal.",
    coordinates: [44.8, 35.4],
    uncertaintyKm: 170,
    anchorNote: "Anclaje aproximado del área excavada en Kurdistán iraquí; el círculo expresa imprecisión cartográfica, no territorio.",
    adversarial: true,
    sources: ["SRC-GLATZ-SHAKHI-KORA-2024"],
    cells: {
      administration: cell("conditional", "Cuatro hogares institucionales y materiales locales/Uruk aparecen en secuencia.", "Permiten proponer experimentos locales de organización pública.", "La función exacta de cada espacio y su jurisdicción permanecen inferidas.", "SRC-GLATZ-SHAKHI-KORA-2024"),
      authority: cell("contrary", "Las formas institucionales fueron adoptadas y después abandonadas; siguió una dispersión regional.", "La secuencia es compatible con rechazo o desenganche de formas centralizadas.", "“Rechazo” se infiere desde arquitectura y asentamiento; no es una decisión política observada directamente.", "SRC-GLATZ-SHAKHI-KORA-2024"),
      empire: cell("contrary", "Materiales relacionados con Uruk coexistieron con repertorios locales y no generaron continuidad institucional.", "Debilita una expansión colonial unidireccional como explicación suficiente.", "No excluye contactos, movilidad o asimetrías en episodios concretos.", "SRC-GLATZ-SHAKHI-KORA-2024"),
      networks: cell("observed", "El conjunto combina materiales locales y relacionados con Uruk.", "Hubo conexión y selección local de prácticas.", "Parecido material no fija dirección, agentes ni subordinación.", "SRC-GLATZ-SHAKHI-KORA-2024"),
      transformation: cell("contrary", "La secuencia registra adopción, abandono y dispersión, no crecimiento continuo.", "Las instituciones pueden cesar mientras persisten comunidades y redes regionales.", "La secuencia de un sitio no representa por sí sola toda la región.", "CLAIM-COLLAPSE-TRANSFORMATION-001"),
    },
  },
  {
    id: "egipto",
    name: "Valle del Nilo / Egipto temprano",
    shortName: "Nilo / Egipto",
    region: "África nororiental",
    period: "IV–III milenios a. C.",
    summary: "Una cronología de alta resolución para la consolidación, sin convertir fechas de muestras en fronteras o soberanía observada.",
    coordinates: [31.1, 26.8],
    uncertaintyKm: 720,
    anchorNote: "Anclaje del corredor del Nilo; la banda regional no delimita un reino ni una frontera máxima.",
    sources: ["SRC-DEE-2013"],
    cells: {
      urbanism: cell("conditional", "Jerarquías de asentamiento y centros en escalas distintas acompañan la consolidación temprana.", "Un Estado territorial puede evaluarse sin exigir una única megaciudad.", "Estado y gran ciudad son variables separadas.", "CLAIM-URBANISM-STATE-SEPARATE-001"),
      administration: cell("conditional", "Arquitectura, administración, iconografía y prácticas funerarias convergen en modelos de consolidación.", "El conjunto es compatible con instituciones persistentes.", "Un nombre, sello o edificio aislado no mide jurisdicción homogénea.", "CLAIM-CIVILIZATIONS-EGYPT-CLOCKS-001"),
      writing: cell("observed", "Inscripciones en soportes y contextos distintos conservan signos, géneros, nombres y usos descifrables.", "Permiten reconstruir prácticas de registro y repertorios.", "No revelan automáticamente usuarios reales, oralidad ni cobertura social.", "CLAIM-CIVILIZATIONS-EGYPT-CLOCKS-001"),
      inequality: cell("not-demonstrated", "Cementerios, tumbas y arquitectura preservan diferencias materiales y rituales.", "Pueden sostener hipótesis de rango o acceso desigual cuando hay recurrencia y contexto.", "Una tumba rica no equivale por sí sola a clase, poder político o Estado.", "CLAIM-INEQUALITY-MULTIDIMENSIONAL-001"),
      authority: cell("conditional", "Un modelo bayesiano integra 186 resultados radiocarbónicos, 74 nuevos, materiales de vida corta y orden arqueológico.", "Restringe el tempo de formación y de la Primera Dinastía.", "El 14C fecha muestras; no observa unificación, obediencia, frontera o coerción.", "SRC-DEE-2013"),
      empire: cell("not-demonstrated", "El expediente compara consolidación estatal temprana, no una medición equivalente de incorporación imperial.", "Puede estudiarse autoridad territorial en fases concretas.", "No hay en este corpus una celda homogénea para demostrar imperio en la ventana comparada.", "CLAIM-CIVILIZATIONS-EGYPT-CLOCKS-001"),
      transformation: cell("conditional", "Las fechas restringen el tempo entre Predinástico y Primera Dinastía.", "Permiten ordenar cambios de fase con mayor precisión.", "Una fase arqueológica no fecha instantáneamente una institución política.", "SRC-DEE-2013"),
    },
  },
  {
    id: "indo",
    name: "Indo / Mohenjo-daro",
    shortName: "Indo",
    region: "Asia meridional",
    period: "III–II milenios a. C.",
    summary: "Ciudades, drenajes, sellos y medidas estandarizadas sin soberano obligatorio; desigualdad residencial no lineal.",
    coordinates: [68.14, 27.33],
    uncertaintyKm: 520,
    anchorNote: "Mohenjo-daro es el anclaje visible de una red mucho más amplia; no dibuja el territorio harappa.",
    sources: ["SRC-GIOSAN-HARAPPAN-2012", "SRC-GREEN-PETRIE-2018", "SRC-GREEN-MOHENJO-2026", "SRC-RAO-INDUS-MARKOV-2009"],
    cells: {
      urbanism: cell("observed", "Grandes centros, asentamientos menores, drenajes y redes de intercambio forman el archivo urbano.", "Sostienen urbanización, conectividad y coordinación.", "No identifican automáticamente palacio, dinastía o soberanía uniforme.", "SRC-GREEN-PETRIE-2018"),
      administration: cell("conditional", "Sellos, medidas estandarizadas y soportes inscritos documentan prácticas coordinadas.", "Son compatibles con administración e intercambio regulado.", "Estandarización puede emerger también por interacción; no prueba control central por sí sola.", "CLAIM-STANDARDIZATION-NOT-CENTRAL-001"),
      writing: cell("not-demonstrated", "Miles de inscripciones breves presentan repertorio, orden y dependencias posicionales.", "El corpus es estructurado y permite analizar regularidades.", "No hay bilingüe ni desciframiento aceptado; lengua, valores y glotografía permanecen abiertos.", "SRC-RAO-INDUS-MARKOV-2009"),
      inequality: cell("contrary", "Un reanálisis residencial de Mohenjo-daro estima Gini global 0.44 y descenso temporal en la partición modelada.", "La desigualdad residencial pudo cambiar sin crecer de forma necesaria con la urbanización.", "Casa=unidad económica y área=riqueza son supuestos; gobernanza colectiva sigue inferida.", "SRC-GREEN-MOHENJO-2026"),
      authority: cell("not-demonstrated", "La coordinación material es extensa, mientras palacios o tumbas reales equivalentes no están claramente identificados.", "La forma de autoridad permanece una pregunta positiva.", "Ausencia de palacio no demuestra igualdad; presencia de ciudad no demuestra soberano.", "CLAIM-CIVILIZATIONS-INDUS-UNDECIPHERED-001"),
      infrastructure: cell("observed", "Drenajes, trazados urbanos, sellos y medidas se conservan en centros de la fase madura.", "Permiten estudiar inversión y coordinación a escala urbana.", "La obra no identifica por sí sola quién decidió, trabajó o controló su mantenimiento.", "SRC-GREEN-PETRIE-2018"),
      ecology: cell("conditional", "Geoformas y sedimentos indican cursos monzónicos en el interfluvio Ghaggar–Hakra.", "El cambio fluvial condicionó paisajes de ocupación.", "No basta como causa única de desurbanización o desaparición.", "SRC-GIOSAN-HARAPPAN-2012"),
      transformation: cell("observed", "Prospecciones armonizadas registran el paso de pocos centros grandes a patrones más desnucleados.", "Puede hablarse de redistribución y desurbanización en escalas precisas.", "No equivale a desaparición de pueblos ni a colapso total causado sólo por clima.", "SRC-GREEN-PETRIE-2018"),
    },
  },
  {
    id: "china",
    name: "China: Erlitou y Shang",
    shortName: "China",
    region: "Asia oriental",
    period: "II milenio a. C.",
    summary: "Centralidad y producción organizada en Erlitou; escritura desarrollada en Yinxu, sin proyectar nombres dinásticos hacia atrás.",
    coordinates: [112.7, 34.7],
    uncertaintyKm: 430,
    anchorNote: "Anclaje entre Yiluo/Erlitou y Yinxu para dos ventanas distintas; no implica continuidad territorial.",
    sources: ["SRC-LIU-YILUO-2004", "SRC-ZHAO-ERLITOU-2021", "SRC-LIU-ORACLE-BONES-2021"],
    cells: {
      urbanism: cell("observed", "La prospección de Yiluo identifica nucleación y cuatro niveles de asentamiento durante Erlitou.", "Sostiene centralidad e integración regional condicionadas.", "La jerarquía de sitios no demuestra jurisdicción, sucesión o el nombre Xia.", "SRC-LIU-YILUO-2004"),
      administration: cell("conditional", "Vías, recintos de talleres, patios, edificios y fosas muestran diferenciación espacial y producción organizada.", "Son compatibles con coordinación institucional.", "Una red vial o taller no identifica por sí solo una oficina, tributo o soberanía.", "SRC-ZHAO-ERLITOU-2021"),
      writing: cell("observed", "Huesos oraculares de Yinxu conservan escritura desarrollada, divinación, nombres y secuencias.", "El corpus permite estudiar el Shang tardío.", "Fechar el soporte no fecha la invención de la escritura ni autoriza proyectarla sobre Erlitou.", "SRC-LIU-ORACLE-BONES-2021"),
      authority: cell("conditional", "Centralidad regional y producción organizada están arqueológicamente documentadas.", "Permiten plantear autoridad e integración en escalas acotadas.", "“Capital Xia” o “primer Estado” requieren un puente independiente entre arqueología, jurisdicción y textos posteriores.", "CLAIM-CIVILIZATIONS-CHINA-NAME-LIMIT-001"),
      infrastructure: cell("observed", "Excavaciones registran carreteras cruzadas, recintos, talleres y edificios de múltiples patios.", "La planta permite reconstruir organización espacial por fases.", "Ausencia o presencia de muralla no equivale a capital o Estado.", "SRC-ZHAO-ERLITOU-2021"),
      transformation: cell("conditional", "Las excavaciones distinguen cambios internos por fases y el archivo escrito pertenece a otra ventana.", "Erlitou y Shang tardío deben compararse con relojes separados.", "El nombre de una tradición textual no puede proyectarse automáticamente hacia una formación anterior.", "CLAIM-CIVILIZATIONS-CHINA-NAME-LIMIT-001"),
    },
  },
  {
    id: "mesoamerica",
    name: "Mesoamérica: Aguada Fénix y Teotihuacan",
    shortName: "Mesoamérica",
    region: "Mesoamérica",
    period: "I milenio a. C.–I milenio d. C.",
    summary: "Monumentalidad temprana y gran urbanismo en ventanas diferentes; coordinación, ciudad y gobierno no son sinónimos.",
    coordinates: [-94.1, 18.2],
    uncertaintyKm: 650,
    anchorNote: "Anclaje regional entre Aguada Fénix y Teotihuacan; no representa una entidad política única.",
    sources: ["SRC-INOMATA-AGUADA-2020", "SRC-MILLON-TEOTIHUACAN-1970", "SRC-SMITH-TEOTIHUACAN-2019"],
    cells: {
      urbanism: cell("observed", "El mapa de Teotihuacan registra huella urbana, complejos residenciales y diferenciación funcional.", "Sostiene una ciudad densa con barrios y especialización.", "La población cercana a 100,000 depende de coetaneidad, ocupación y relación casa-hogar.", "SRC-MILLON-TEOTIHUACAN-1970", "SRC-SMITH-TEOTIHUACAN-2019"),
      administration: cell("not-demonstrated", "Aguada Fénix muestra inversión y coordinación; Teotihuacan preserva una organización urbana compleja.", "Ambos permiten preguntar por coordinación en escalas distintas.", "No identifican automáticamente dinastía, trabajo forzado ni forma de gobierno.", "SRC-INOMATA-AGUADA-2020"),
      inequality: cell("conditional", "Complejos residenciales ofrecen variación de inversión y acceso como proxies.", "Permiten modelar desigualdad residencial bajo controles.", "Residencia no equivale a riqueza total, clase o poder político.", "SRC-SMITH-TEOTIHUACAN-2019"),
      authority: cell("not-demonstrated", "La plataforma de Aguada Fénix se fecha aproximadamente 1000–800 a. C.; Teotihuacan registra barrios y gran escala.", "Hay coordinación e inversión colectiva observables.", "Rey, dinastía, coerción y un gobierno autocrático o colectivo no se leen directamente en monumento o plano.", "SRC-INOMATA-AGUADA-2020", "SRC-SMITH-TEOTIHUACAN-2019"),
      infrastructure: cell("observed", "Lidar y excavación documentan la plataforma de Aguada Fénix; cartografía registra conjuntos urbanos en Teotihuacan.", "Las obras permiten estudiar inversión y uso del espacio.", "Cada rasgo necesita fecha, control terrestre y contexto; no todo fue coetáneo.", "SRC-INOMATA-AGUADA-2020", "SRC-MILLON-TEOTIHUACAN-1970"),
      networks: cell("conditional", "Caminos, materiales y distribuciones conectan asentamientos en escalas regionales.", "Permiten reconstruir conectividad y circulación.", "La distribución no identifica por sí sola intercambio directo, tributo, migración o conquista.", "CLAIM-CIVILIZATIONS-MESOAMERICA-FORMS-001"),
      transformation: cell("conditional", "Las ventanas de Aguada Fénix, Teotihuacan y paisajes mayas no pertenecen a una secuencia institucional única.", "Pueden compararse como formas regionales distintas.", "No forman etapas universales de una civilización mesoamericana homogénea.", "CLAIM-CIVILIZATIONS-MESOAMERICA-FORMS-001"),
    },
  },
  {
    id: "andes",
    name: "Andes: Norte Chico y khipus",
    shortName: "Andes",
    region: "Andes centrales",
    period: "III–II milenios a. C. y archivos posteriores",
    summary: "Monumentalidad y administración material sin convertir escritura glotográfica en requisito de complejidad.",
    coordinates: [-77.5, -10.9],
    uncertaintyKm: 520,
    anchorNote: "Norte Chico funciona como anclaje de la ventana temprana; los khipus citados pertenecen a archivos posteriores.",
    sources: ["SRC-HAAS-2004", "SRC-URTON-BREZINE-KHIPU-2005"],
    cells: {
      urbanism: cell("conditional", "Noventa y cinco fechas de trece sitios sitúan ocupación, residencia y arquitectura monumental hacia 3000–1800 a. C.", "Sostienen concentración e inversión en los sitios muestreados.", "La cronología no decide por sí sola si hubo ciudad, Estado o clase.", "SRC-HAAS-2004"),
      administration: cell("observed", "Khipus conservados registran información mediante cuerdas, nudos, posición y color; una muestra conserva totales jerárquicos.", "Apoya contabilidad administrativa en casos contextualizados.", "No todo khipu tuvo uso idéntico ni el repertorio completo está recuperado.", "SRC-URTON-BREZINE-KHIPU-2005"),
      writing: cell("contrary", "La notación khipu preserva numeración y contabilidad sin depender de escritura glotográfica.", "Administración, memoria e historia pueden operar con oralidad y notaciones materiales.", "No autoriza asumir narración, lengua o función idéntica para cada pieza.", "CLAIM-CIVILIZATIONS-ANDES-ORALITY-001"),
      inequality: cell("not-demonstrated", "Arquitectura y residencia ofrecen diferencias de inversión material.", "Pueden alimentar modelos de acceso y organización.", "Monumentalidad no prueba automáticamente clase hereditaria o coerción.", "CLAIM-ANDES-MONUMENT-NOT-STATE-001"),
      authority: cell("not-demonstrated", "La arquitectura monumental registra inversión y coordinación en Norte Chico.", "Es compatible con organización supradoméstica.", "Las obras no identifican por sí solas Estado, jurisdicción o trabajo coercitivo.", "SRC-HAAS-2004"),
      infrastructure: cell("observed", "Arquitectura monumental y residencia están fechadas en múltiples sitios.", "Permiten comparar inversión construida y secuencias de ocupación.", "No debe sumarse toda la planta como coetánea ni atribuirla a una sola autoridad.", "SRC-HAAS-2004"),
    },
  },
  {
    id: "jenne-jeno",
    name: "Jenne-jeno",
    shortName: "Jenne-jeno",
    region: "Delta interior del Níger",
    period: "III siglo a. C.–I milenio d. C.",
    summary: "Urbanismo, hierro e intercambio sin hacer de palacio, escritura o Estado central requisitos de ciudad.",
    coordinates: [-4.56, 13.89],
    uncertaintyKm: 130,
    anchorNote: "Anclaje del sitio y su entorno inmediato; no delimita una jurisdicción histórica.",
    adversarial: true,
    sources: ["SRC-MCINTOSH-JENNE-1981"],
    cells: {
      urbanism: cell("contrary", "La secuencia registra ocupación desde el III siglo a. C., crecimiento, funciones urbanas y más de 33 ha en su apogeo.", "Es un caso urbano compatible con organización heterárquica o policéntrica.", "Tamaño e intercambio no demuestran un Estado centralizado.", "SRC-MCINTOSH-JENNE-1981"),
      administration: cell("not-demonstrated", "Producción, asentamiento e intercambio están documentados sin un archivo equivalente de oficina central.", "La coordinación pudo distribuirse entre múltiples actores.", "Ausencia de palacio o tablilla no prueba ausencia de administración.", "CLAIM-AFRICA-URBANISM-POLYCENTRIC-001"),
      writing: cell("contrary", "El expediente reconoce funciones urbanas sin exigir un corpus escrito local.", "La escritura no es condición necesaria para identificar ciudad.", "Esto no demuestra ausencia absoluta de registros perdidos ni una forma política específica.", "SRC-MCINTOSH-JENNE-1981"),
      authority: cell("not-demonstrated", "La escala, el hierro y el intercambio muestran coordinación regional.", "Son compatibles con autoridad distribuida o policéntrica.", "No identifican automáticamente soberano, palacio o Estado central.", "CLAIM-AFRICA-URBANISM-POLYCENTRIC-001"),
      networks: cell("observed", "Producción de hierro e intercambio interregional forman parte del archivo del asentamiento.", "Jenne-jeno participó en redes más amplias.", "La circulación no especifica por sí sola mercado, tributo o control territorial.", "SRC-MCINTOSH-JENNE-1981"),
    },
  },
  {
    id: "great-zimbabwe",
    name: "Great Zimbabwe",
    shortName: "Great Zimbabwe",
    region: "África austral",
    period: "Siglos XII–XV d. C.",
    summary: "Muros, comercio y centralidad con fases solapadas y población modelada: monumento no equivale a megaciudad.",
    coordinates: [30.93, -20.27],
    uncertaintyKm: 140,
    anchorNote: "Anclaje del sitio arqueológico; no representa el alcance de redes o autoridad.",
    adversarial: true,
    sources: ["SRC-CHIRIKURE-GZ-CHRONOLOGY-2013", "SRC-CHIRIKURE-GZ-POP-2017"],
    cells: {
      urbanism: cell("contrary", "La demografía modelada sugiere que la población simultánea difícilmente excedió 10,000.", "Centralidad y urbanismo no requieren una megaciudad compacta.", "La estimación depende de fases, ocupación y contemporaneidad de sectores.", "SRC-CHIRIKURE-GZ-POP-2017"),
      inequality: cell("conditional", "Muros, sectores construidos e importaciones preservan diferenciación material.", "Permiten preguntar por acceso y centralidad en fases concretas.", "Arquitectura monumental no equivale automáticamente a clase o distribución completa de riqueza.", "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013"),
      authority: cell("not-demonstrated", "Construcción pétrea, centralidad e importaciones están documentadas.", "Son compatibles con instituciones y autoridad regional.", "No obligan a una única forma política ni miden jurisdicción homogénea.", "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013"),
      infrastructure: cell("observed", "La cronología bayesiana sitúa el inicio probable de muros entre fines del XII e inicios del XIII y máximo en XIV–XV.", "Permite separar fases constructivas y solapamientos.", "Sectores visibles no fueron necesariamente coetáneos.", "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013"),
      networks: cell("observed", "Importaciones y secuencias regionales documentan conectividad y solapamiento con Mapungubwe.", "Hubo redes de circulación y centralidades conectadas.", "No prueban una sucesión lineal de capitales ni el mecanismo de cada intercambio.", "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013"),
      transformation: cell("contrary", "Las fases constructivas se solapan y la simultaneidad de sectores es menor que la supuesta antes del modelado.", "La transformación regional no fue un relevo instantáneo entre capitales.", "El archivo fue además alterado por excavación colonial y pérdida de contexto.", "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013", "SRC-CHIRIKURE-GZ-POP-2017"),
    },
  },
  {
    id: "alta-amazonia",
    name: "Alta Amazonia",
    shortName: "Alta Amazonia",
    region: "Amazonia ecuatoriana",
    period: "Aproximadamente dos milenios de ocupación",
    summary: "Urbanismo-jardín de baja densidad: plataformas, plazas, caminos, drenajes y campos sin núcleo pétreo compacto.",
    coordinates: [-78.1, -2.1],
    uncertaintyKm: 310,
    anchorNote: "Anclaje de la región Upano estudiada; la incertidumbre no dibuja una frontera cultural.",
    adversarial: true,
    sources: ["SRC-ROSTAIN-AMAZON-2024"],
    cells: {
      production: cell("observed", "Campo, microtopografía y lidar registran campos, drenajes y una ocupación integrada con cultivos y paisaje.", "Sostienen manejo productivo dentro de una red de asentamientos.", "La imagen remota no reconstruye dieta total, propiedad o intensidad en cada fase.", "SRC-ROSTAIN-AMAZON-2024"),
      urbanism: cell("contrary", "Plataformas, plazas y caminos forman una red de baja densidad ocupada durante cerca de dos milenios.", "El urbanismo puede organizarse como paisaje-jardín, no sólo como núcleo compacto.", "Lidar no fecha cada rasgo ni demuestra que toda la red fuera coetánea.", "SRC-ROSTAIN-AMAZON-2024"),
      administration: cell("not-demonstrated", "La red construida muestra coordinación espacial y mantenimiento.", "Es compatible con organización supradoméstica.", "No recupera una oficina, tributación o forma política específica.", "SRC-ROSTAIN-AMAZON-2024"),
      authority: cell("not-demonstrated", "Plazas, plataformas, caminos y drenajes evidencian inversión coordinada.", "Permiten plantear instituciones a múltiples escalas.", "El patrón no demuestra por sí solo un Estado territorial.", "CLAIM-URBANISM-STATE-SEPARATE-001"),
      infrastructure: cell("observed", "Lidar y más de dos décadas de campo documentan plataformas, caminos, drenajes y campos.", "La combinación mejora la detección y el control terrestre.", "Cada rasgo requiere clasificación y cronología independiente.", "SRC-ROSTAIN-AMAZON-2024"),
      ecology: cell("observed", "Asentamientos y cultivos se integran con un paisaje tropical modificado.", "La ecología fue parte constitutiva de la forma urbana.", "No debe extrapolarse una muestra regional a toda la cuenca amazónica.", "SRC-ROSTAIN-AMAZON-2024"),
      transformation: cell("conditional", "La ocupación y las obras se distribuyen durante cerca de dos milenios.", "Permiten estudiar persistencia, remodelación y redes en escalas largas.", "No todo rasgo visible pertenece al mismo momento ni a una sola entidad.", "SRC-ROSTAIN-AMAZON-2024"),
    },
  },
];

export const chronologyLanes: ChronologyLane[] = [
  {
    id: "southwest-asia",
    region: "Asia sudoccidental",
    note: "Procesar, almacenar, cultivar y urbanizar no comparten un único inicio.",
    events: [
      { date: "~14.4 ka", title: "Shubayqa", detail: "Procesamiento laborioso de plantas silvestres; no cultivo demostrado.", source: "EVID-SWASIA-PLANT-PROCESS-001" },
      { date: "~11.3 ka cal BP", title: "Dhra’", detail: "Graneros anteriores a la domesticación local plenamente establecida.", source: "EVID-CIV-DHRA-GRANARIES-001" },
      { date: "Fines V milenio a. C.", title: "Tell Brak", detail: "Concentración septentrional; urbanización por múltiples rutas.", source: "SRC-OATES-BRAK-2007" },
      { date: "3350–3200 a. C.", title: "Uruk IV", detail: "Tablilla administrativa; no alfabetización poblacional.", source: "EVID-CIV-CDLI-P003414-001" },
    ],
  },
  {
    id: "nile-indus-china",
    region: "Nilo, Indo y China",
    note: "Tres relojes regionales; sus nombres, fases y archivos no son etapas equivalentes.",
    events: [
      { date: "IV–III milenios a. C.", title: "Egipto temprano", detail: "Cronología refinada de consolidación; soberanía sigue inferida.", source: "SRC-DEE-2013" },
      { date: "III–II milenios a. C.", title: "Indo", detail: "Urbanización madura y posterior desnucleación.", source: "SRC-GREEN-PETRIE-2018" },
      { date: "II milenio a. C.", title: "Erlitou / Yinxu", detail: "Centralidad y escritura pertenecen a ventanas diferenciadas.", source: "CLAIM-CIVILIZATIONS-CHINA-NAME-LIMIT-001" },
    ],
  },
  {
    id: "americas",
    region: "Américas",
    note: "Domesticación, monumentalidad y urbanismo se comparan por región y archivo.",
    events: [
      { date: "~10.35–10.25 ka cal BP", title: "Llanos de Moxos", detail: "Mandioca y calabaza en islas de bosque; asociación local condicionada.", source: "CLAIM-AMAZON-ANDES-MULTIPLE-PATHS-001" },
      { date: "≥8.7 ka cal BP", title: "Xihuatoxtla", detail: "Maíz y calabaza; ocupación estacional no equivale a aldea plena.", source: "EVID-MESOAMERICA-MAIZE-SQUASH-001" },
      { date: "3000–1800 a. C.", title: "Norte Chico", detail: "Arquitectura y residencia fechadas; Estado no automático.", source: "SRC-HAAS-2004" },
      { date: "1000–800 a. C.", title: "Aguada Fénix", detail: "Monumento e inversión; dinastía y coerción no observadas.", source: "SRC-INOMATA-AGUADA-2020" },
    ],
  },
  {
    id: "african-controls",
    region: "Controles africanos",
    note: "No son anexos: prueban qué requisitos universales fallan.",
    events: [
      { date: "Desde III siglo a. C.", title: "Jenne-jeno", detail: "Funciones urbanas sin palacio o escritura como requisitos.", source: "SRC-MCINTOSH-JENNE-1981" },
      { date: "Siglos XII–XV d. C.", title: "Great Zimbabwe", detail: "Fases solapadas; monumento no equivale a megaciudad.", source: "SRC-CHIRIKURE-GZ-CHRONOLOGY-2013" },
    ],
  },
];

const missingCell: ComparisonCell = {
  state: "missing",
  observed: "El corpus publicado no registra una medición homogénea para este caso y esta dimensión.",
  inference: "No transferir un rasgo desde otra región ni rellenar el vacío con una etapa universal.",
  limit: "Dato ausente no equivale a ausencia histórica del fenómeno.",
  sources: ["CLAIM-CIVILIZATIONS-DIMENSIONS-001"],
};

export function getCivilizationCase(id: string): CivilizationCase | undefined {
  return civilizationCases.find((item) => item.id === id);
}

export function getComparisonCell(caseId: string, dimension: CivilizationDimensionKey): ComparisonCell {
  return getCivilizationCase(caseId)?.cells[dimension] ?? missingCell;
}

export function parseComparisonState(params: URLSearchParams | Readonly<URLSearchParams>) {
  const validCases = new Set(civilizationCases.map((item) => item.id));
  const validDimensions = new Set<string>(civilizationDimensionKeys);
  const cases = (params.get("casos") ?? "mesopotamia,indo,jenne-jeno")
    .split(",")
    .filter((item, index, values) => validCases.has(item) && values.indexOf(item) === index)
    .slice(0, 3);
  const dimensions = (params.get("dimensiones") ?? "urbanism,writing,authority")
    .split(",")
    .filter((item, index, values): item is CivilizationDimensionKey => validDimensions.has(item) && values.indexOf(item) === index);
  return {
    cases: cases.length ? cases : ["mesopotamia"],
    dimensions: dimensions.length ? dimensions : ["urbanism" as CivilizationDimensionKey],
  };
}

export function serializeComparisonState(cases: string[], dimensions: CivilizationDimensionKey[]) {
  const params = new URLSearchParams();
  params.set("casos", cases.slice(0, 3).join(","));
  params.set("dimensiones", dimensions.join(","));
  return params.toString();
}

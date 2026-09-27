/**
 * Catálogo de piezas del kit de medios.
 *
 * Una sola fuente de verdad para capturas, videos, INDICE.md y el lienzo.
 * Las rutas son las del sitio público; no hay datos privados que simular.
 *
 * Las cifras nunca se escriben a mano: `{investigaciones}`, `{afirmaciones}`,
 * `{fuentes}`… se rellenan desde los registros con `cifras.mjs`.
 */

export const CANVAS = { ancho: 1080, alto: 1920 } as const;

/** Rectángulo de la PANTALLA del teléfono dentro del lienzo 1080x1920.
 *  Lo comparten la plantilla HTML y el overlay de ffmpeg: si cambia aquí,
 *  cambia en los dos sitios a la vez.
 *
 *  Ancho y alto deben ser PARES: H.264 no acepta dimensiones impares y
 *  `alphamerge` exige que máscara y video midan exactamente lo mismo. */
export const PANTALLA = { x: 230, y: 300, ancho: 620, alto: 1344 } as const;

/** Viewport de iPhone 15 Pro. 393/852 = la misma proporción que PANTALLA. */
export const TELEFONO = { ancho: 393, alto: 852, escala: 3 } as const;

export type Tema = "oscuro" | "claro";

export interface Captura {
  /** Nombre de archivo sin extensión. */
  id: string;
  /** Ruta del sitio. */
  ruta: string;
  /** Título corto que va arriba en el lienzo. Máximo dos líneas. */
  titulo: string;
  /** Qué muestra, para INDICE.md. */
  muestra: string;
  tema: Tema;
  /** Pie bajo el título. Obligatorio si la pantalla muestra una ilustración
   *  generada que el sitio no declara a esa anchura. */
  pie?: string;
  /** Píxeles a desplazar antes de capturar. */
  scroll?: number;
  /** Selector CSS que se lleva al borde superior, bajo la cabecera fija.
   *  Más estable que `scroll` cuando el contenido cambia de alto. */
  ancla?: string;
  /** Encabezado de una columna de la primera tabla desplazable que debe
   *  quedar a la vista: en móvil las tablas anchas se deslizan de lado. */
  columna?: string;
  /** Espera extra en ms para animaciones o mapas. */
  espera?: number;
}

/**
 * El sitio es oscuro por defecto: el tema oscuro ES la identidad de marca.
 * Por eso la mayoría va en oscuro y cuatro pantallas clave se repiten en claro.
 */
export const CAPTURAS: Captura[] = [
  {
    id: "01-portada",
    ruta: "/",
    titulo: "La pregunta que\nordena todo",
    muestra: "Portada con la pregunta rectora del proyecto",
    tema: "oscuro",
  },
  {
    id: "02-portada-scroll",
    ruta: "/",
    titulo: "No creas.\nRecorre la cadena",
    muestra: "Bloque de la regla central: claim, evidencia, fuente, método",
    tema: "oscuro",
    scroll: 900,
  },
  {
    id: "03-explorar",
    ruta: "/explorar",
    titulo: "{investigaciones} investigaciones\nauditadas",
    muestra: "Catálogo de investigaciones con filtros",
    tema: "oscuro",
  },
  {
    id: "04-explorar-filtros",
    ruta: "/explorar",
    titulo: "Filtra por etapa,\nno por opinión",
    muestra: "Filtros del catálogo aplicados sobre la lista",
    tema: "oscuro",
    scroll: 700,
  },
  {
    id: "05-viaje",
    ruta: "/viaje",
    titulo: "Un recorrido\nguiado",
    muestra: "Viaje editorial por las cinco escalas",
    tema: "oscuro",
  },
  {
    id: "06-cronologia",
    ruta: "/cronologia",
    titulo: "De los primeros sólidos\na las primeras ciudades",
    muestra: "Cronología maestra navegable",
    tema: "oscuro",
    espera: 1200,
  },
  {
    id: "07-evidencia",
    ruta: "/evidencia",
    titulo: "Laboratorio\nde evidencia",
    muestra: "Registro de evidencias enlazado a claims y fuentes",
    tema: "oscuro",
  },
  {
    id: "08-investigacion-001",
    ruta: "/02_formacion_tierra/INVESTIGACION_001_EDAD_TIERRA",
    titulo: "¿Cómo sabemos\nla edad de la Tierra?",
    muestra: "Investigación 001 abierta en el lector",
    tema: "oscuro",
  },
  {
    id: "09-investigacion-001-mapa",
    ruta: "/02_formacion_tierra/INVESTIGACION_001_EDAD_TIERRA",
    titulo: "Cinco archivos\npara un intervalo",
    muestra: "Mapa de evidencia dentro de la investigación 001",
    tema: "oscuro",
    scroll: 1400,
  },
  {
    id: "10-claims",
    ruta: "/CLAIMS",
    titulo: "{afirmaciones} afirmaciones,\ncada una con su letra",
    muestra: "Registro maestro de claims con la columna de confianza A–E a la vista",
    tema: "oscuro",
    ancla: ".doc .table-scroll",
    columna: "Confianza",
  },
  {
    id: "11-sources",
    ruta: "/SOURCES",
    titulo: "{fuentes} fuentes,\ncada una con sus límites",
    muestra: "Registro maestro de fuentes con la columna de limitaciones a la vista",
    tema: "oscuro",
    ancla: ".doc .table-scroll",
    columna: "Limitaciones relevantes",
  },
  {
    id: "12-metodologia",
    ruta: "/METHODOLOGY",
    titulo: "Siete niveles\nentre la roca y la frase",
    muestra: "Metodología epistemológica del proyecto",
    tema: "oscuro",
  },
  {
    id: "13-civilizaciones",
    ruta: "/civilizaciones",
    titulo: "Civilizaciones\nsin escalera",
    muestra: "Línea temática CIV con sus expedientes regionales",
    tema: "oscuro",
    espera: 1200,
  },
  {
    id: "14-comparador",
    ruta: "/civilizaciones/comparar",
    titulo: "Comparar\nsin rankings",
    muestra: "Comparador de civilizaciones sin puntuaciones",
    tema: "oscuro",
    espera: 1200,
  },
  {
    id: "15-atlas",
    ruta: "/ATLAS_VISUAL",
    titulo: "Cada imagen declara\nsu procedencia",
    muestra: "Atlas visual con límites explícitos de cada pieza",
    tema: "oscuro",
  },
  {
    id: "16-como-sabemos",
    ruta: "/como-sabemos",
    titulo: "El método,\na la vista",
    muestra: "Página de metodología y autoría del sitio",
    tema: "oscuro",
  },
  // Cuatro pantallas clave repetidas en tema claro. La portada abre con una
  // imagen oscura en ambos temas: en claro se captura la sección de preguntas.
  {
    id: "17-portada-claro",
    ruta: "/",
    titulo: "Empieza por\nuna pregunta",
    muestra: "Preguntas destacadas de la portada, en tema claro",
    tema: "claro",
    ancla: ".home-featured",
  },
  {
    id: "18-explorar-claro",
    ruta: "/explorar",
    titulo: "{investigaciones} investigaciones\nauditadas",
    muestra: "Catálogo en tema claro",
    tema: "claro",
  },
  {
    id: "19-investigacion-001-claro",
    ruta: "/02_formacion_tierra/INVESTIGACION_001_EDAD_TIERRA",
    titulo: "¿Cómo sabemos\nla edad de la Tierra?",
    muestra: "Investigación 001 en tema claro",
    tema: "claro",
  },
  {
    id: "20-claims-claro",
    ruta: "/CLAIMS",
    titulo: "{afirmaciones} afirmaciones,\ncada una con su letra",
    muestra: "Registro de claims en tema claro, con la columna de confianza",
    tema: "claro",
    ancla: ".doc .table-scroll",
    columna: "Confianza",
  },
  // Línea MED: historia de la medicina.
  {
    id: "21-medicina",
    ruta: "/medicina",
    titulo: "Historia mundial\nde la medicina",
    pie: "La imagen de la pantalla es una ilustración generada, no un hospital real.",
    muestra: "Portada de la línea MED; la ilustración generada va declarada en el pie",
    tema: "oscuro",
    espera: 1200,
  },
  {
    id: "22-medicina-cadena",
    ruta: "/medicina",
    titulo: "Observado, inferido\ny su límite",
    muestra: "Laboratorio de MED-019: cada eslabón separa observación, inferencia permitida y límite",
    tema: "oscuro",
    ancla: "#hospitales-cabecera-examen .clinical-chain > li",
  },
];

export interface Video {
  id: string;
  titulo: string;
  muestra: string;
  tema: Tema;
  /** Pie bajo el teléfono; igual que en las capturas. */
  pie?: string;
  /** Pasos del recorrido. Cada uno navega o se desplaza. */
  pasos: Array<
    | { tipo: "ir"; ruta: string; espera?: number }
    | { tipo: "scroll"; a: number; ms: number; /** Suma a la posición actual. */ relativo?: boolean }
    | { tipo: "ancla"; selector: string; ms: number }
    | { tipo: "pausa"; ms: number }
  >;
}

export const VIDEOS: Video[] = [
  {
    id: "v1-de-la-pregunta-a-la-fuente",
    titulo: "De la pregunta\na la fuente",
    muestra: "Portada, catálogo, investigación y registro de fuentes en un recorrido",
    tema: "oscuro",
    pasos: [
      { tipo: "ir", ruta: "/", espera: 1200 },
      { tipo: "scroll", a: 900, ms: 2200 },
      { tipo: "ir", ruta: "/explorar", espera: 1400 },
      { tipo: "scroll", a: 800, ms: 2200 },
      { tipo: "ir", ruta: "/02_formacion_tierra/INVESTIGACION_001_EDAD_TIERRA", espera: 1600 },
      { tipo: "scroll", a: 1600, ms: 2600 },
      { tipo: "pausa", ms: 1200 },
    ],
  },
  {
    id: "v2-la-letra-de-confianza",
    titulo: "Cada afirmación\nlleva su letra",
    muestra: "Recorrido por el registro de claims mostrando los niveles A–E",
    tema: "oscuro",
    pasos: [
      { tipo: "ir", ruta: "/CLAIMS", espera: 1600 },
      { tipo: "scroll", a: 700, ms: 2200 },
      { tipo: "scroll", a: 1500, ms: 2400 },
      { tipo: "scroll", a: 2400, ms: 2400 },
      { tipo: "pausa", ms: 1200 },
    ],
  },
  {
    id: "v3-cronologia-profunda",
    titulo: "Cuatro mil millones\nde años, en orden",
    muestra: "Cronología maestra desde los primeros sólidos hasta las ciudades",
    tema: "oscuro",
    pasos: [
      { tipo: "ir", ruta: "/cronologia", espera: 2000 },
      { tipo: "scroll", a: 900, ms: 2400 },
      { tipo: "scroll", a: 2000, ms: 2600 },
      { tipo: "scroll", a: 3200, ms: 2600 },
      { tipo: "pausa", ms: 1000 },
    ],
  },
  {
    id: "v4-civilizaciones-sin-escalera",
    titulo: "Comparar\nsin rankings",
    muestra: "Línea CIV y comparador de civilizaciones sin puntuaciones",
    tema: "oscuro",
    pasos: [
      { tipo: "ir", ruta: "/civilizaciones", espera: 2000 },
      { tipo: "scroll", a: 900, ms: 2400 },
      { tipo: "ir", ruta: "/civilizaciones/comparar", espera: 2000 },
      { tipo: "scroll", a: 800, ms: 2400 },
      { tipo: "pausa", ms: 1200 },
    ],
  },
  {
    id: "v5-medicina-archivo-no-es-eficacia",
    titulo: "Archivo no es\neficacia",
    pie: "La imagen inicial es una ilustración generada, no un hospital real.",
    muestra: "Línea MED: de la portada al laboratorio de hospitales y examen clínico",
    tema: "oscuro",
    pasos: [
      { tipo: "ir", ruta: "/medicina", espera: 2000 },
      { tipo: "scroll", a: 1100, ms: 2400 },
      { tipo: "ancla", selector: "#hospitales-cabecera-examen", ms: 2400 },
      { tipo: "scroll", a: 700, ms: 2600, relativo: true },
      { tipo: "pausa", ms: 1200 },
    ],
  },
];

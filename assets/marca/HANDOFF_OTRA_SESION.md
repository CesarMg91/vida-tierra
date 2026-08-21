# Traspaso de identidad visual

## Instrucción breve para otra sesión

Continúa la identidad visual de **¿Cómo sabemos lo que sabemos?** usando los archivos existentes; no regeneres ni rediseñes el símbolo salvo petición explícita. El SVG maestro es `assets/marca/logo-mark-master.svg` y el kit público está en `public/brand/`. Conserva su significado, paleta, proporciones, zona segura y legibilidad a 16 px según `assets/marca/README.md`.

## Concepto aprobado

- Tres arcos abiertos: estratos, órbitas y escalas temporales.
- Una cadena vertical de nodos: observación → evidencia → inferencia.
- Un punto de cobre mayor: conclusión provisional y trazable.
- Un contorno circular: cosmos, Tierra, vida, humanidad y civilizaciones dentro del mismo proyecto.

La marca evita libros, microscopios, ADN, globos, bombillas, degradados, sombras y ornamentos pseudocientíficos.

## Archivos canónicos

| Necesidad | Archivo |
|---|---|
| Fuente vectorial maestra | `assets/marca/logo-mark-master.svg` |
| Documentación y prompt | `assets/marca/README.md` |
| Símbolo a color | `public/brand/logo-mark.svg` |
| Símbolo PNG transparente | `public/brand/logo-mark-1024.png` |
| Avatar para redes | `public/brand/avatar-social-1024.png` |
| Logo horizontal oscuro | `public/brand/logo-lockup-dark-1520.png` |
| Logo horizontal claro | `public/brand/logo-lockup-light-1520.png` |
| Favicon del sitio | `app/favicon.ico` y `app/icon.svg` |
| Apple Touch Icon | `app/apple-icon.png` |
| Iconos PWA | `public/brand/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` |

## Integración ya realizada

- `components/BrandMark.tsx` contiene el símbolo accesible para la interfaz.
- `components/SiteHeader.tsx` sustituyó el icono genérico por la marca.
- `app/manifest.ts` registra nombre, colores e iconos PWA.
- Next.js publica automáticamente `/favicon.ico`, `/icon.svg`, `/apple-icon.png` y `/manifest.webmanifest`.
- `scripts/generate-brand-assets.mjs` regenera todas las exportaciones mediante `npm run brand:build`.

## Paleta contractual

- Obsidiana `#0B0D0E`
- Cobre `#B88949`
- Verde mineral `#779B88`
- Pergamino `#F2EADB`
- Tinta `#211F1A`

## Estado de validación

- TypeScript: aprobado.
- 23 pruebas automatizadas: aprobadas.
- Validador del repositorio: aprobado.
- Build Next.js 16.3.1: 238 páginas generadas.
- Favicon, Apple Icon, manifest y lockup: HTTP 200 en servidor local.
- Revisión visual: escritorio y móvil aprobados.

## Regla para cambios futuros

Editar primero `assets/marca/logo-mark-master.svg`, ejecutar `npm run brand:build`, revisar el favicon a 16 px, ejecutar `npm run typecheck`, `npm test`, `npm run validate` y `npm run build`, y comprobar visualmente la cabecera en tema oscuro y claro.

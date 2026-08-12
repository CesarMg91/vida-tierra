# Cómo contribuir

## Antes de proponer una afirmación

1. Busca duplicados por ID, tema y formulación.
2. Formula una sola proposición comprobable; evita unir varias conclusiones con “y”.
3. Distingue el dato observado de la interpretación.
4. Localiza, cuando sea posible, el artículo o dataset original.
5. Registra incertidumbres aleatorias, sistemáticas y de modelo por separado.

## Cambio mínimo trazable

Una contribución sustantiva normalmente modifica:

- `CLAIMS.md`;
- `EVIDENCE_LEDGER.md`;
- `SOURCES.md`;
- el archivo temático correspondiente;
- `CONTROVERSIES.md` si hay alternativas defendibles;
- `TIMELINE.md` si cambia una fecha o intervalo maestro.

Usa las plantillas de [`00_metodologia/plantillas`](00_metodologia/plantillas/README.md). No asignes confianza A–E por votación o autoridad; justifícala mediante convergencia, independencia, reproducibilidad, sensibilidad a supuestos y poder discriminatorio.

## Estilo

- Escribe en español claro; conserva títulos bibliográficos en su idioma original.
- Prefiere “la medición es compatible con” a “demuestra” cuando existan modelos alternativos.
- No ocultes resultados negativos, discordantes o anómalos.
- Cita DOI o URL persistente y señala si solo se consultó el resumen.
- No uses Wikipedia como soporte final de una afirmación maestra.

## Revisión

La lista de control de [`00_metodologia/WORKFLOW.md`](00_metodologia/WORKFLOW.md) debe completarse antes de marcar un bloque como auditado.

Antes de dar por auditada una fuente nueva, verifícala contra Crossref:

```bash
node scripts/validate-citations.mjs --nuevos
```

Debe cerrar con `Titulos que no corresponden al DOI: 0`. Un enlace que abre no garantiza que lleve al trabajo citado: el título registrado tiene que coincidir con el publicado. Ejecuta también `scripts/validate-repository.ps1` para comprobar enlaces, IDs y las once secciones obligatorias.

## Licencia de las aportaciones

Al contribuir aceptas que tu aportación se publique bajo las licencias del proyecto: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es) para el contenido y [MIT](LICENSE) para el código. Los detalles están en [`LICENCIAS.md`](LICENCIAS.md).

No incorpores texto, figuras ni tablas de terceros sin permiso o sin una licencia compatible. Describir el contenido de una fuente y registrar su DOI es siempre preferible a reproducirla.

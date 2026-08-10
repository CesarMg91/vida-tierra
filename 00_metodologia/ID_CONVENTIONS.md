# Convenciones de identificadores

## Formato general

```text
TIPO-DOMINIO-TEMA-NNN
```

Los IDs usan ASCII, mayúsculas y guiones. Nunca se reutilizan.

## Prefijos

| Tipo | Prefijo | Ejemplo |
|---|---|---|
| Afirmación | `CLAIM` | `CLAIM-EARTH-AGE-001` |
| Evidencia | `EVID` | `EVID-EARTH-PBISO-001` |
| Fuente | `SRC` | `SRC-PATTERSON-1956` |
| Controversia | `CONT` | `CONT-HADEAN-NGB-001` |
| Error científico | `ERR` | `ERR-GEO-KELVIN-001` |
| Evento temporal | `TIME` | `TIME-SOLAR-CAI-001` |
| Pregunta abierta | `OPEN` | `OPEN-LIFE-ORIGIN-001` |
| Investigación | `INV` | `INV-EARTH-AGE-001` |
| Método | `METH` | `METH-GEO-UPB-001` |

## Dominios sugeridos

`COSMOS`, `SOLAR`, `EARTH`, `HADEAN`, `ARCHEAN`, `PROT`, `PALEO`, `MESO`, `CENO`, `LIFE`, `EVOL`, `HUMAN`, `SAPIENS`, `MIGR`, `CIV`, `GEN`.

## Reglas

1. El número distingue entradas, no expresa prioridad ni orden temporal.
2. Un cambio menor conserva ID; un cambio de significado crea otro.
3. Los alias históricos apuntan al ID canónico.
4. Un evento puede enlazar varios claims, pero no reemplazarlos.
5. Los nombres de archivo usan ASCII para compatibilidad; el contenido conserva español correcto.

## Estados

Cada entrada incluye uno de los estados definidos en `METHODOLOGY.md`: `SEMILLA`, `EN_DESARROLLO`, `TRAZADO`, `AUDITADO`, `REPLICADO`, `REVISAR` o `RETIRADO`.

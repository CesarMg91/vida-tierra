# Mapa epistemológico CIV-002 — De la muestra al acontecimiento

| Campo | Valor |
|---|---|
| ID | `MAP-CIV-DATING-001` |
| Investigación | `INV-CIV-DATING-001` |
| Estado | `AUDITADO` |
| Versión | `0.2.1` |

![Cadena de seis capas](../assets/visuales/cadena-muestra-acontecimiento-civ-002.svg)

![Matriz de métodos y fallos](../assets/visuales/matriz-metodos-fechado-civ-002.svg)

## 1. Ontología de seis capas

```text
MUESTRA ── preparación ──► MEDICIÓN
   │                           │
   │ biografía                 │ curva / referencia
   ▼                           ▼
procedencia                 CALENDARIO
   │                           │
   └────── asociación ─────► CONTEXTO
                                │
                       orden + modelo
                                ▼
                              FASE
                                │
                    archivo institucional
                                ▼
                       ACONTECIMIENTO
```

Cada nodo tiene un falsador diferente. El acontecimiento no hereda la certeza instrumental de la medición.

## 2. Grafo de radiocarbono

```text
material identificado
   ├── vida corta / entidad única
   ├── madera vieja / mezcla
   └── carbono marino o dulceacuícola
                 │
                 ▼
       pretatamiento + AMS
                 │
                 ▼
     edad convencional 14C BP
                 │
       ┌─────────┼───────────┐
       ▼         ▼           ▼
   IntCal20   SHCal20    Marine20 + ΔR
       │         │           │
       └─────────┴───────────┘
                 ▼
     distribución calendario
        (puede ser multimodal)
```

No hay conversión universal para reservorios dulceacuícolas. Minino produce un control local, no una constante (`EVID-CIV-MININO-001`).

## 3. Bayes como contrato visible

```text
verosimilitud de mediciones
             +
orden / fase / límites / duración
             +
outliers y offsets declarados
             ↓
distribución posterior
             ↓
sensibilidad a estructura y muestras
```

Un posterior estrecho significa «estrecho bajo este modelo», no «verdadero sin condiciones» (`EVID-CIV-BAYES-001`).

## 4. Matriz método → evento físico → transferencia

| Método | Evento físico/ordinal | Transferencia arqueológica | Salto prohibido |
|---|---|---|---|
| estratigrafía | anterior/posterior | deposición/rasgo | orden = año |
| seriación | cambio de frecuencia/asociación | fase relativa | tipo = pueblo/dinastía |
| radiocarbono | carbono de la muestra | muerte/formación bajo selección | edad = ocupación |
| dendro | crecimiento de anillo | tala bajo borde | tala = construcción/uso |
| OSL | último reinicio | deposición bajo blanqueamiento | sedimento = edificio |
| arqueomagnetismo | enfriamiento y remanencia | último calentamiento | curva = independencia total |
| tefra | erupción/correlación | capa primaria | parecido = misma erupción |
| texto | redacción/copia/fecha interna | reinado, acto o sincronismo | nombre = fase |

## 5. Caso Egipto

```text
186 determinaciones, 74 nuevas
 + materiales de vida corta
 + orden cerámico / funerario
       ↓ Bayes
tempo de fases tempranas [B-COND]
       ⇢ «unificación» instantánea [NO OBSERVADA]
```

La seriación entra como información; no se convierte en Estado (`EVID-CIV-EGYPT-DATING-002`).

## 6. Caso Mesopotamia/Anatolia

```text
secuencia de anillos
 + radiocarbono de alta resolución
 + edificios / tablillas / epónimos
       ↓
marco del segundo milenio a. C. [B-COND]
       ⇢ cada epónimo fecha cada madera [NO]
```

La convergencia es fuerte y parcialmente dependiente (`EVID-CIV-DENDRO-MESOPOTAMIA-001`).

## 7. Caso Thera

```text
rama de olivo + 14C
       ├── interpretación de último anillo
       ├── meseta / registro anual
       ├── offset regional
       └── sincronismos históricos
                 ↓
        varios modelos defendibles
                 ↓
      fecha exacta [ABIERTA]
```

`dato existente`, `evidencia en tensión` y `no demostrado` son estados diferentes (`EVID-CIV-THERA-001`).

## 8. Caso Great Zimbabwe

```text
fechas + estratigrafía preservada + arquitectura
             │
        daño colonial del contexto
             ▼
secuencia reconstruida con calidad desigual [B-COND]
             ⇢ cronología lineal de capitales [NO]
```

El daño de procedencia es parte del modelo, no sólo de la historia disciplinar (`EVID-CIV-GREAT-ZIMBABWE-DATING-001`).

## 9. Caso Minino

```text
hueso humano ── dieta acuática ──► carbono antiguo
     │                                  │
     └── asociado a bien de herbívoro ──┘
                    ↓ pares
       offset local ~490 ± 80 años 14C
                    ⇢ no constante universal
```

Los isótopos apoyan consumo acuático, pero no predicen el offset individual (`EVID-CIV-MININO-001`).

## 10. Dependencias y circularidad

| Pareja que parece independiente | Dependencia posible |
|---|---|
| dos fechas `14C` | misma curva, offset o lote contaminado |
| `14C` + dendro | anillos usados para calibrar/ajustar |
| arqueomagnetismo + historia | curva regional construida con edades históricas |
| fase + lista real | correspondencia postulada en ambos sentidos |
| dos publicaciones | misma muestra o contexto legado |
| varios edificios | una sola fase tipológica impuesta |

La auditoría cuenta datos y modelos únicos, no sólo citas (`EVID-CIV-INDEPENDENCE-001`).

## 11. Estados epistémicos del módulo público

| Estado | Significado |
|---|---|
| observado | dato o relación publicada en el archivo declarado |
| inferencia permitida | conclusión máxima bajo puente explícito |
| límite | conclusión que el archivo no alcanza |
| dato ausente | el archivo necesario no está disponible |
| no demostrado | existe pregunta, pero la cadena no la sostiene |
| evidencia contraria | un resultado favorece una alternativa incompatible |

El estado vacío nunca se representa como cero, ausencia histórica ni prueba contraria.

## 12. Falsadores por capa

| Capa | Falsador o revisión |
|---|---|
| muestra | taxón/parte/biografía incompatibles |
| medición | blanco, réplica o pretatamiento fallido |
| calendario | curva/offset actualizado |
| contexto | micromorfología, remontaje o intrusión |
| fase | orden/sensibilidad cambia límites |
| acontecimiento | texto, jurisdicción o proceso contradice identidad |

## 13. Reconciliación

`CLAIM-CIV-DATING-CONTEXT-001` pasa a `AUDITADO` por CIV-002. CIV-001 conserva `TRAZADO`; 051 y 052 registrarán que el claim estaba trazado en sus cortes y fue auditado después. La promoción no es retroactiva ni se propaga a otros claims.

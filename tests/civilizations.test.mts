import assert from "node:assert/strict";
import test from "node:test";
import {
  chronologyLanes,
  civilizationCases,
  civilizationDimensionKeys,
  getComparisonCell,
  parseComparisonState,
  serializeComparisonState,
} from "../lib/civilizations.ts";

test("cada caso y dimensión produce archivo, inferencia, límite y fuente", () => {
  for (const item of civilizationCases) {
    for (const dimension of civilizationDimensionKeys) {
      const cell = getComparisonCell(item.id, dimension);
      assert.ok(cell.observed.trim(), `${item.id}/${dimension}: archivo`);
      assert.ok(cell.inference.trim(), `${item.id}/${dimension}: inferencia`);
      assert.ok(cell.limit.trim(), `${item.id}/${dimension}: límite`);
      assert.ok(cell.sources.length > 0, `${item.id}/${dimension}: fuente`);
    }
  }
});

test("no demostrado, dato ausente y evidencia contraria permanecen estados distintos", () => {
  const states = new Set(
    civilizationCases.flatMap((item) =>
      civilizationDimensionKeys.map((dimension) => getComparisonCell(item.id, dimension).state),
    ),
  );
  assert.ok(states.has("not-demonstrated"));
  assert.ok(states.has("missing"));
  assert.ok(states.has("contrary"));
});

test("la URL limita a tres casos, descarta valores desconocidos y conserva dimensiones válidas", () => {
  const parsed = parseComparisonState(new URLSearchParams(
    "casos=indo,china,egipto,andes,inventado&dimensiones=writing,authority,falso,writing",
  ));
  assert.deepEqual(parsed.cases, ["indo", "china", "egipto"]);
  assert.deepEqual(parsed.dimensions, ["writing", "authority"]);
  const roundTrip = parseComparisonState(new URLSearchParams(serializeComparisonState(parsed.cases, parsed.dimensions)));
  assert.deepEqual(roundTrip, parsed);
});

test("los anclajes del atlas son coordenadas reales válidas con incertidumbre positiva", () => {
  for (const item of civilizationCases) {
    const [longitude, latitude] = item.coordinates;
    assert.ok(longitude >= -180 && longitude <= 180, item.id);
    assert.ok(latitude >= -90 && latitude <= 90, item.id);
    assert.ok(item.uncertaintyKm > 0, item.id);
    assert.match(item.anchorNote, /no |No |anclaje|Anclaje/);
  }
});

test("las cronologías conservan carriles regionales y fuentes por evento", () => {
  assert.ok(chronologyLanes.length >= 3);
  assert.equal(new Set(chronologyLanes.map((lane) => lane.region)).size, chronologyLanes.length);
  for (const lane of chronologyLanes) {
    assert.ok(lane.events.length > 0);
    for (const event of lane.events) assert.ok(event.source);
  }
});

test("el modelo comparativo no contiene puntuaciones ni rankings", () => {
  const serialized = JSON.stringify({ civilizationCases, civilizationDimensionKeys });
  assert.doesNotMatch(serialized, /"(?:score|rank|ranking)"\s*:/i);
});

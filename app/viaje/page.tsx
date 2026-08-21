import type { Metadata } from "next";
import JourneyClient from "../../components/JourneyClient";
import { getCatalog } from "../../lib/public-data";

export const metadata: Metadata = {
  title: "Iniciar viaje — ¿Cómo sabemos lo que sabemos?",
  description: "Recorrido guiado por 52 investigaciones, del cosmos a las primeras civilizaciones.",
};

export default function JourneyPage() {
  const catalog = getCatalog().map(({
    key, id, order, slug, title, shortTitle, status, collection, era, themes, summary, readingMinutes, hero,
  }) => ({ key, id, order, slug, title, shortTitle, status, collection, era, themes, summary, readingMinutes, hero }));
  return (
    <div className="page-shell journey-page">
      <header className="portal-hero compact">
        <p className="eyebrow">Recorrido guiado · 001–052</p>
        <h1>Un viaje de 13,800 millones de años</h1>
        <p>Avanza en orden o detente donde aparezca una pregunta. El progreso queda en este dispositivo y puedes cambiarlo en cualquier momento.</p>
      </header>
      <JourneyClient records={catalog} />
    </div>
  );
}

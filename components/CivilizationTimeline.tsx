import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ChronologyLane } from "../lib/civilizations";

export default function CivilizationTimeline({ lanes }: { lanes: ChronologyLane[] }) {
  return (
    <div className="civilization-chronology" role="group" aria-label="Cronologías regionales independientes">
      <div className="chronology-scale-warning">
        <span>Sin eje universal</span>
        <p>La posición horizontal no representa avance. Cada carril conserva su reloj y su tipo de archivo.</p>
      </div>
      {lanes.map((lane, laneIndex) => (
        <section className="chronology-lane" key={lane.id}>
          <header>
            <span>{String(laneIndex + 1).padStart(2, "0")}</span>
            <h3>{lane.region}</h3>
            <p>{lane.note}</p>
          </header>
          <ol>
            {lane.events.map((event) => (
              <li key={`${lane.id}-${event.title}`}>
                <time>{event.date}</time>
                <strong>{event.title}</strong>
                <p>{event.detail}</p>
                <Link href={`/evidencia?id=${event.source}`} aria-label={`Abrir ${event.source}`}>
                  {event.source} <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

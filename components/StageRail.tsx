import { Globe2, Landmark, Orbit, PersonStanding, Sprout } from "lucide-react";
import Link from "next/link";

const stages = [
  { label: "Cosmos", href: "/explorar?coleccion=Cosmos", icon: Orbit },
  { label: "Tierra", href: "/explorar?coleccion=Tierra", icon: Globe2 },
  { label: "Vida", href: "/explorar?coleccion=Vida", icon: Sprout },
  { label: "Humanidad", href: "/explorar?coleccion=Humanidad", icon: PersonStanding },
  { label: "Civilizaciones", href: "/civilizaciones", icon: Landmark },
];

export default function StageRail() {
  return (
    <nav className="stage-rail" aria-label="Etapas del viaje">
      {stages.map(({ label, href, icon: Icon }, index) => (
        <div className="stage-node" key={label}>
          <Link href={href}>
            <span className="stage-icon"><Icon aria-hidden="true" /></span>
            <span>{label}</span>
          </Link>
          {index < stages.length - 1 && <span className="stage-connector" aria-hidden="true" />}
        </div>
      ))}
    </nav>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ContentIndexRecord, NavData } from "../lib/content";

function itemLabel(doc: ContentIndexRecord, sectionName: string) {
  if (!doc.file.endsWith("README.md")) return doc.title;
  // El README de la propia seccion la presenta; los de subcarpetas se nombran
  // por su carpeta, para no repetir "Presentación" dentro de un mismo grupo.
  const dir = doc.file.slice(0, doc.file.lastIndexOf("/"));
  if (!sectionName || dir === sectionName) return "Presentación";
  return dir.slice(sectionName.length + 1).replace(/_/g, " ");
}

export default function Sidebar({ nav }: { nav: NavData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = decodeURIComponent(pathname).replace(/^\//, "");

  return (
    <>
      <button type="button" className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {open ? "Cerrar índice" : "Índice"}
      </button>
      <nav className={`sidebar${open ? " open" : ""}`} aria-label="Índice del repositorio">
        <p className="nav-group-label">Registros maestros</p>
        <ul className="nav-list">
          {nav.root.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/${doc.slug}`}
                className={current === doc.slug ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {doc.slug === "README" ? "Portada" : doc.slug.replace(/_/g, " ")}
              </Link>
            </li>
          ))}
        </ul>

        {nav.sections.map((section) => (
          <details key={section.name} open={current.startsWith(section.name + "/")}>
            <summary>
              <span className="nav-num">{section.name.match(/^\d+/)?.[0]}</span>
              {section.label}
            </summary>
            <ul className="nav-list">
              {section.items.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    href={`/${doc.slug}`}
                    className={current === doc.slug ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {itemLabel(doc, section.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </nav>
    </>
  );
}

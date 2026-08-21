"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";
import SearchDialog from "./SearchDialog";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["/viaje", "Iniciar viaje"],
  ["/explorar", "Explorar"],
  ["/cronologia", "Cronología"],
  ["/civilizaciones", "Civilizaciones"],
  ["/evidencia", "Evidencia"],
  ["/como-sabemos", "Cómo sabemos"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Ir a la portada">
        <BrandMark className="brand-mark" aria-hidden="true" />
        <span>¿Cómo sabemos?</span>
      </Link>
      <nav className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Navegación principal">
        {links.map(([href, label]) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="header-actions">
        <SearchDialog />
        <ThemeToggle />
        <button
          type="button"
          className="icon-button menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

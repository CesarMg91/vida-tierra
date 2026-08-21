import Link from "next/link";
import { BookOpen, Code2, CreativeCommons, ShieldCheck } from "lucide-react";
import { REPOSITORY_URL, SITE_VERSION } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-statement">
          <BookOpen aria-hidden="true" />
          <div>
            <strong>Conocimiento abierto, límites visibles.</strong>
            <p>Investigación educativa en español. El contenido es CC BY 4.0; el código, MIT.</p>
          </div>
        </div>
        <nav aria-label="Información del proyecto">
          <Link href="/como-sabemos"><ShieldCheck aria-hidden="true" /> Método y autoría</Link>
          <Link href="/privacidad"><ShieldCheck aria-hidden="true" /> Privacidad</Link>
          <Link href="/LICENCIAS"><CreativeCommons aria-hidden="true" /> Licencias</Link>
          <a href={`${REPOSITORY_URL}/blob/main/CITATION.cff`} target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" /> Cómo citar</a>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /> GitHub</a>
        </nav>
        <div className="footer-version">
          <span>v{SITE_VERSION}</span>
          <span>Sin cuentas · progreso local</span>
        </div>
      </div>
    </footer>
  );
}

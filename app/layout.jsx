import "./globals.css";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import SearchBox from "../components/SearchBox";
import { getNav, getSearchIndex } from "../lib/content.mjs";

export const metadata = {
  title: "¿Cómo sabemos lo que sabemos?",
  description:
    "Historia profunda de la Tierra, la vida y el ser humano desde primeros principios, con la cadena de inferencia visible en cada afirmación.",
};

// Evita el parpadeo de tema claro antes de que hidrate React.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('vt-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }) {
  const nav = getNav();
  const search = getSearchIndex();

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <header className="topbar">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>¿Cómo sabemos lo que sabemos?</span>
          </a>
          <div className="topbar-actions">
            <SearchBox index={search} />
            <ThemeToggle />
          </div>
        </header>
        <div className="shell">
          <Sidebar nav={nav} />
          <main id="contenido">{children}</main>
        </div>
      </body>
    </html>
  );
}

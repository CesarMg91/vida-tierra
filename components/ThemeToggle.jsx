"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  function toggle() {
    const next = (document.documentElement.dataset.theme || "light") === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("vt-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Cambiar tema claro u oscuro">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

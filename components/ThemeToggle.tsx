"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: "light" | "dark" = (document.documentElement.dataset.theme || "light") === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("vt-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Cambiar tema claro u oscuro">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

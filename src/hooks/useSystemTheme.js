import { useEffect, useState } from "react";

export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial value
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for changes
    const handler = (e) => setSystemTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return systemTheme;
}

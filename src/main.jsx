import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Theme detection and application
function applySystemTheme() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const htmlElement = document.documentElement;

  // Set initial theme
  const updateTheme = () => {
    htmlElement.classList.toggle("dark", mediaQuery.matches);
  };

  updateTheme(); 

  mediaQuery.addEventListener("change", updateTheme);
}

const Root = () => {
  useEffect(() => {
    applySystemTheme();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);

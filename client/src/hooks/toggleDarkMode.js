import { useState } from "react";

function ToggleDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "light" ? "dark" : "light";
  const root = window.document.documentElement;
  root.classList.remove(colorTheme);
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
  return [colorTheme, setTheme];
}

export default ToggleDarkMode;

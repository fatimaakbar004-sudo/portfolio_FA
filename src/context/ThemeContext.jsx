import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const colors = {
  blue: "65 105 225",
  red: "220 38 38",
  green: "34 197 94",
  purple: "147 51 234",
  orange: "249 115 22",
  gold: "234 179 8",
};

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("accent") || "blue";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary",
      colors[accentColor]
    );

    localStorage.setItem("accent", accentColor);
  }, [accentColor]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        accentColor,
        setAccentColor,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
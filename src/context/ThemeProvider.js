import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setDarkTheme(e.matches);
      });
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-darktheme", darkTheme);
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", darkTheme ? "#2b3945" : "#fff");
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={setDarkTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default ThemeProvider;

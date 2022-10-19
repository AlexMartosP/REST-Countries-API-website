import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

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

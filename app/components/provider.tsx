"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext({ darkMode: false, toggleTheme: () => {} });

export const useCustomTheme = () => useContext(ThemeContext);

/**
 * This function allows the page to change theme based on user preferences in
 * dark and light mode
 * @param param0 
 * @returns 
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(systemPrefersDark);

  // update when system preference changes
  useEffect(() => {
    setDarkMode(systemPrefersDark);
  }, [systemPrefersDark]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2",
          },
          background: {
            default: darkMode ? "#121212" : "#fff",
            paper: darkMode ? "#1e1e1e" : "#f5f5f5",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
          },
        },
      }),
    [darkMode]
  );

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

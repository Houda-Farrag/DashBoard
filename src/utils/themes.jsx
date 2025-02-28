import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";

export const useCustomTheme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  const toggleTheme = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode((prevMode) => !prevMode);
  };
  const palletColor = {
    mode: darkMode ? "dark" : "light",
    primary: {
      main: darkMode ? "#ba000d" : "#9c27b0",
      light: darkMode ? "#ff7961" : "#d05ce3",
      dark: darkMode ? "#8e0000" : "#6a1b9a",
      hover: darkMode ? "#ff5252" : "#ab47bc",
      contrastText: darkMode ? "#ffffff" : "#ffffff",
    },
    secondary: {
      main: darkMode ? "#ff4081" : "#e91e63",
      light: darkMode ? "#ff79b0" : "#f48fb1",
      dark: darkMode ? "#c60055" : "#ad1457",
      hover: darkMode ? "#ff80ab" : "#ec407a",
      contrastText: darkMode ? "#ffffff" : "#ffffff",
    },
    background: {
      default: darkMode ? "#1f1f1f" : "#f1f1f1",
      paper: darkMode ? "#2a2a2a" : "#ffffff",
      hover: darkMode ? "#333333" : "#e0e0e0",
    },
    text: {
      primary: darkMode ? "#ffffff" : "#000000",
      secondary: darkMode ? "#b3b3b3" : "#4a4a4a",
      disabled: darkMode ? "#666666" : "#9e9e9e",
      hover: darkMode ? "#cccccc" : "#333333",
    },
    error: {
      main: darkMode ? "#f44336" : "#d32f2f",
      light: darkMode ? "#e57373" : "#ef5350",
      dark: darkMode ? "#d32f2f" : "#c62828",
      hover: darkMode ? "#ef9a9a" : "#e53935",
      contrastText: darkMode ? "#ffffff" : "#ffffff",
    },
    warning: {
      main: darkMode ? "#ff9800" : "#ed6c02",
      light: darkMode ? "#ffb74d" : "#ff9800",
      dark: darkMode ? "#f57c00" : "#e65100",
      hover: darkMode ? "#ffcc80" : "#fb8c00",
      contrastText: darkMode ? "#000000" : "#000000",
    },
    info: {
      main: darkMode ? "#2196f3" : "#0288d1",
      light: darkMode ? "#64b5f6" : "#03a9f4",
      dark: darkMode ? "#1976d2" : "#01579b",
      hover: darkMode ? "#90caf9" : "#29b6f6",
      contrastText: darkMode ? "#ffffff" : "#ffffff",
    },
    success: {
      main: darkMode ? "#4caf50" : "#2e7d32",
      light: darkMode ? "#81c784" : "#66bb6a",
      dark: darkMode ? "#388e3c" : "#1b5e20",
      hover: darkMode ? "#a5d6a7" : "#4caf50",
      contrastText: darkMode ? "#ffffff" : "#ffffff",
    },
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: palletColor,
      }),
    [darkMode]
  );

  return { theme, darkMode, toggleTheme };
};

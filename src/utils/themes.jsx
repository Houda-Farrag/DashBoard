import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

export const useCustomTheme = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);

  const toggleTheme = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light' ,
          primary: {
            main: darkMode ? '#ba000d' : '#9c27b0',
        },
          background: {
            default: darkMode ? '#1f1f1f' : '#1f1f1f',
          },
        },
      }),
    [darkMode]
  );

  return { theme, darkMode, toggleTheme };
};
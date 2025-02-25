export function getSystemTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkMode ? 'dark' : 'light';
  }
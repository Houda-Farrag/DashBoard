import React, { useState } from 'react'
import MiniDrawer from './layout/Layout'

export default function App() {
  const [theme, settheme] = useState(themeDefault);

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => settheme(theme === themeDefault ? themeDark : themeDefault)}>Change Theme</button>
    <MiniDrawer />
    </ThemeProvider>
  )
}

import { GlobalStyles, useTheme } from '@mui/material';

const ScrollbarStyles = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <GlobalStyles
      styles={{
        '::-webkit-scrollbar': {
          width: '12px',
        },
        '::-webkit-scrollbar-track': {
        //   background: isDarkMode ? '#333' : '#f1f1f1',
        background: theme.palette.background.default
        },
        '::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: '6px',
          border: `3px solid ${isDarkMode ? '#333' : '#f1f1f1'}`,
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: isDarkMode ? '#888' : '#555',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: isDarkMode ? '#666 #333' : '#888 #f1f1f1',
      }}
    />
  );
};

export default ScrollbarStyles;
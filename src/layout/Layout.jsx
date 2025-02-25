import * as React from 'react';
import { styled, ThemeProvider, CssBaseline, Box } from '@mui/material';
import RouterWebsite from '../router';
import SideBar from '../components/SideBar';
import TopBarDashboard from '../components/TopBarDashboard';
import { useCustomTheme } from '../utils/themes';
import { Outlet } from 'react-router-dom';
export const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const { theme, toggleTheme } = useCustomTheme(); // Use the theme hook

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopBarDashboard open={open} handleDrawerOpen={handleDrawerOpen} toggleTheme={toggleTheme} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
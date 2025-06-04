// src/components/layout/ResponsiveLayout.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { MenuItem,menuItems } from '../constants/menuItems';

const drawerWidth = 240;

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const routeTitles: Record<string, string> = {
  '/panel': 'Panel de Usuario',
  '/admin': 'Administración de Usuarios',
  '/invitations': 'Invitaciones',
};

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
const filteredMenu:MenuItem[] = user
  ? menuItems.filter(item => item.roles.includes(user.role))
  : [];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const title = routeTitles[location.pathname] || 'Mi Aplicación';

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6">Mariana Lero</Typography>
      </Toolbar>
      <Divider />
      <List>
        {filteredMenu.map((item, index) => (
            <ListItem  key={index} onClick={() => navigate(item.path)}>
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText primary={item.label} />
            </ListItem>
        ))}
        <ListItem  onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesión" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Box>
          {user && (
            <Typography variant="subtitle1">
              Bienvenido, {user.name}
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

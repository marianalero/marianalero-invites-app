import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { MenuItem,menuItems } from '../constants/menuItems';
import ChangePasswordForm from '../components/panel/User/ChangePassword';

const drawerWidth = 240;

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const routeTitles: Record<string, string> = {
  '/guests': 'Lista de invitados',
  // '/panel': 'Panel de Confirmaciones',
 
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
  const [open, setOpen] = useState(false);
const filteredMenu:MenuItem[] = user
  ? menuItems.filter(item => item.roles.includes(user.role))
  : [];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const title = routeTitles[location.pathname];
  useEffect(() => {
    document.title = title;
  }, []);
  const drawer = (
    <div>
      <Toolbar>
        <img src='/logo.svg'/>
      </Toolbar>
      <Divider />
      <List>
        {filteredMenu.map((item, index) => (
            <ListItem  key={index} onClick={() => navigate(item.path)}>
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText primary={item.label} />
            </ListItem>
        ))}
        <ListItem  onClick={() => setOpen(true)}>
          <ListItemText primary="Cambiar contraseña" />
        </ListItem>
        <ListItem  onClick={logout}>
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
      elevation={1}
        position="fixed"
        sx={{
          backgroundColor:"white!important",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton
                color="primary"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap color='primary' fontWeight={500}>
              {title}
            </Typography>
          </Box>
          {user && (
            <Typography variant="subtitle1" color='primary' fontWeight={500}>
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
            backgroundColor:"white!important",
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
          backgroundColor:"#f1e9dd",
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>

      {
        open && (
          <ChangePasswordForm open={open} onClose={()=> setOpen(false) } onSave={() =>{ setOpen(false);logout()} }></ChangePasswordForm>
        )
      }
    </Box>
  );
}

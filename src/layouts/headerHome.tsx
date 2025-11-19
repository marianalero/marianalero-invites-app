import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useLocation } from "react-router-dom";
import { useAuth } from '../context/authContext';
import { isAuthenticated } from '../services/authService';
import logo from './../assets/logos/logo header.svg';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout } = useAuth();
  const { pathname } = useLocation();

  const menuItems = [
    { label: 'Modelos', href: '/demos', icon: <AppsRoundedIcon sx={{ color: '#a41423' }} /> },
    { label: 'Preguntas', href: '/faq', icon: <HelpOutlineIcon sx={{ color: '#a41423' }} /> },
    { label: 'Términos y Condiciones', href: '/terminos', hidden: true },
    { label: 'Política de Privacidad', href: '/privacidad', hidden: true },
  ];

  const item = menuItems.find(x => x.href === pathname);

  useEffect(() => {
    document.title = item ? item.label : "Mariana Lerma | Invitaciones Digitales";
  }, [pathname]);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#a41423',
          fontFamily: 'Montserrat, sans-serif',
          boxShadow: 'none',
          px: 2,
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden"
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: "wrap",
            gap: { xs: 1, md: 0 }
          }}
        >
          {/* Logo */}
          <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", maxWidth: "140px" }}
            />
          </Link>

          {/* Menú desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {menuItems
              .filter(x => !x.hidden)
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="hover"
                  color="#fff"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

            {isAuthenticated() ? (
              <Link href="/guests" color="#fff">Ir al Panel</Link>
            ) : (
              <Link href="/login" color="#fff">Iniciar Sesión</Link>
            )}

            {isAuthenticated() && (
              <IconButton onClick={logout}>
                <LogoutRoundedIcon sx={{ color: '#f2eadd' }} />
              </IconButton>
            )}
          </Box>

          {/* Menú hamburguesa */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: '#f4ebd7',
            px: 2,
            pt: 4,
            fontFamily: 'Montserrat, sans-serif',
          },
        }}
      >
        <List>
          {menuItems
            .filter(x => !x.hidden)
            .map((item) => (
              <ListItem
                component="a"
                href={item.href}
                key={item.label}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} sx={{ color: '#a41423' }} />
              </ListItem>
            ))}

          {isAuthenticated() && (
            <ListItem component="a" href="/guests" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Ir al Panel" sx={{ color: '#a41423' }} />
            </ListItem>
          )}

          {isAuthenticated() && (
            <ListItem onClick={logout}>
              <ListItemText primary="Cerrar sesión" sx={{ color: '#a41423' }} />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

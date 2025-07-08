import { useState } from 'react';
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
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import logo from './../assets/logos/logo header.svg';
import { useAuth } from '../context/authContext';
import { isAuthenticated } from '../services/authService';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout } = useAuth();

  const menuItems = [
    { label: 'Modelos', href: '/demos', icon: <AppsRoundedIcon sx={{ color: '#a41423' }} /> },
    { label: 'Preguntas', href: '/faq', icon: <HelpOutlineIcon sx={{ color: '#a41423' }} /> },
    { label: 'Contacto', href: '/contacto', icon: <EmailRoundedIcon sx={{ color: '#a41423' }} /> },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#a41423',
          fontFamily: 'Montserrat, sans-serif',
          boxShadow: 'none',
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
             <Link
                href="/"
              >
                 <img src={logo} alt="Logo" style={{ height: "50px", marginRight: 8 }} />
              </Link>
          
          </Box>

          {/* Menú desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {menuItems.map((item) => (
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
            {/* <Button
             href="https://wa.me/+526621729312/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales."
              variant="contained"
              sx={{
                bgcolor: '#f2eadd',
                color: '#a41423',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f2eadd',
                  color:"#a41423",
                  border:"1px solid #a41423"
                },
              }}
            >
              Empieza tu invitacion
            </Button> */}
             { isAuthenticated() && (
               <Link
                key="guests"
                href="/guests"
                underline="hover"
                color="#fff"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                Ir al Panel
              </Link>
            )
          }
            { isAuthenticated() && (
               <IconButton 
                onClick={() => logout()}
                >
                <LogoutRoundedIcon sx={{color: '#f2eadd'}} />
              </IconButton>
            )

            }
            
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

      {/* Drawer lateral */}
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
          {menuItems.map((item) => (
            <ListItem
              
              component="a"
              href={item.href}
              key={item.label}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText
                primary={item.label}
                sx={{ color: '#a41423' }}
              />
            </ListItem>
          ))}
          <ListItem
            
            component="a"
            href="https://wa.me/+526621729312/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales."
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText
              primary="Crear mi invitación"
              sx={{
                fontWeight: 'bold',
                color: '#a41423',
              }}
            />
          </ListItem>
          { isAuthenticated() && (
              <ListItem
            
            component="a"
            href="/guests"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText
              primary="Ir al Panel"
              sx={{
                fontWeight: 'bold',
                color: '#a41423',
              }}
            />
          </ListItem>
            )
          }
          { isAuthenticated() && (
            <ListItem
            onClick={() => logout()}
          >
            <ListItemText
              primary="Cerrar sesion"
              sx={{
                fontWeight: 'bold',
                color: '#a41423',
              }}
            />
          </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

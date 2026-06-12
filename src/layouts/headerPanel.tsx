import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { MenuItem, menuItems } from "../constants/menuItems";
import ChangePasswordForm from "../components/panel/User/ChangePassword";

const drawerWidth = 280;

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const routeTitles: Record<string, string> = {
  "/guests": "Lista de invitados",
  "/admin": "Administración de usuarios",
  "/invitations": "Invitaciones",
};

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const filteredMenu: MenuItem[] = user
    ? menuItems.filter((item) => item.roles.includes(user.role))
    : [];

  const title = routeTitles[location.pathname] ?? "Panel";

  useEffect(() => {
    document.title = `${title} | Mariana Lero Invitaciones`;
  }, [title]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f8f4ec",
        background: "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 100%)",
        borderRight: "1px solid rgba(200,173,120,.35)",
      }}
    >
      {/* Logo / brand */}
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="Mariana Lero Invitaciones"
          sx={{
            height: 48,
            maxWidth: 170,
            objectFit: "contain",
          }}
        />

        {isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#a41423",
              bgcolor: "rgba(255,255,255,.45)",
              border: "1px solid rgba(200,173,120,.35)",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ borderColor: "rgba(200,173,120,.35)" }} />

      {/* User card */}
      {user && (
        <Box
          sx={{
            m: 2,
            p: 2,
            borderRadius: "24px",
            bgcolor: "rgba(255,255,255,.46)",
            border: "1px solid rgba(200,173,120,.35)",
            boxShadow: "0 14px 34px rgba(75,45,35,.06)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              sx={{
                bgcolor: "#a41423",
                color: "#fff",
                width: 42,
                height: 42,
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              {user.name?.charAt(0)?.toUpperCase()}
            </Avatar>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#3a2a25",
                  fontWeight: 700,
                  fontSize: ".92rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: 170,
                }}
              >
                {user.name}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#7d5f55",
                  fontSize: ".76rem",
                  textTransform: "capitalize",
                }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Menu */}
      <List
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0.7,
        }}
      >
        {filteredMenu.map((item) => (
          <ListItemButton
            key={item.path}
            onClick={() => handleNavigate(item.path)}
            sx={{
              borderRadius: "18px",
              px: 2,
              py: 1.25,
              bgcolor: isActive(item.path)
                ? "#a41423"
                : "rgba(255,255,255,.28)",
              color: isActive(item.path) ? "#fff" : "#7d5f55",
              transition: ".25s ease",
              "&:hover": {
                bgcolor: isActive(item.path)
                  ? "#a41423"
                  : "rgba(164,20,35,.06)",
                color: isActive(item.path) ? "#fff" : "#a41423",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: ".92rem",
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      {/* Bottom actions */}
      <Box sx={{ p: 2 }}>
        <Divider sx={{ borderColor: "rgba(200,173,120,.35)", mb: 2 }} />

        <ListItemButton
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "18px",
            px: 2,
            py: 1.2,
            color: "#7d5f55",
            "&:hover": {
              bgcolor: "rgba(164,20,35,.06)",
              color: "#a41423",
            },
          }}
        >
          <LockResetRoundedIcon sx={{ mr: 1.2, fontSize: 20 }} />
          <ListItemText
            primary="Cambiar contraseña"
            primaryTypographyProps={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: ".9rem",
            }}
          />
        </ListItemButton>

        <ListItemButton
          onClick={handleLogout}
          sx={{
            mt: 0.5,
            borderRadius: "18px",
            px: 2,
            py: 1.2,
            color: "#a41423",
            "&:hover": {
              bgcolor: "rgba(164,20,35,.08)",
            },
          }}
        >
          <LogoutRoundedIcon sx={{ mr: 1.2, fontSize: 20 }} />
          <ListItemText
            primary="Cerrar sesión"
            primaryTypographyProps={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: ".9rem",
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f8f4ec",
      }}
    >
      <CssBaseline />

      {/* Topbar */}
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          bgcolor: "rgba(248,244,236,.82)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(200,173,120,.28)",
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 72, md: 82 },
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: "#a41423",
                  bgcolor: "rgba(255,255,255,.46)",
                  border: "1px solid rgba(200,173,120,.35)",
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box>
              <Typography
                sx={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#a41423",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: 1,
                }}
                noWrap
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  mt: 0.5,
                  fontFamily: "Montserrat, sans-serif",
                  color: "#7d5f55",
                  fontSize: ".78rem",
                }}
              >
                Administra tus invitaciones y confirmaciones.
              </Typography>
            </Box>
          </Box>

          {user && (
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1.2,
                px: 1.5,
                py: 0.8,
                borderRadius: "999px",
                bgcolor: "rgba(255,255,255,.46)",
                border: "1px solid rgba(200,173,120,.35)",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#a41423",
                  width: 34,
                  height: 34,
                  fontSize: ".9rem",
                }}
              >
                {user.name?.charAt(0)?.toUpperCase()}
              </Avatar>

              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#7d5f55",
                  fontWeight: 600,
                  fontSize: ".86rem",
                }}
              >
                {user.name}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          background:
            "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 55%, #f8f4ec 100%)",
          p: { xs: 2, md: 4 },
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 72, md: 82 } }} />

        <Box
          sx={{
            mt: { xs: 2, md: 3 },
          }}
        >
          {children}
        </Box>
      </Box>

      {open && (
        <ChangePasswordForm
          open={open}
          onClose={() => setOpen(false)}
          onSave={() => {
            setOpen(false);
            logout();
          }}
        />
      )}
    </Box>
  );
}
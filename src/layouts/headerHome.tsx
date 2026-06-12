import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { isAuthenticated } from "../services/authService";


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { logout } = useAuth();
  const { pathname } = useLocation();
  const authenticated = isAuthenticated();

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Modelos", href: "/demos" },
    { label: "Creaciones", href: "/creaciones" },
    { label: "Preguntas", href: "/faq" },
  ];

  const item = menuItems.find((x) => x.href === pathname);

  useEffect(() => {
    document.title = item
      ? `${item.label} | Mariana Lero Invitaciones`
      : "Mariana Lero | Invitaciones Digitales";
  }, [pathname, item]);

  const handleLogout = () => {
    logout();
    setDrawerOpen(false);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "rgba(248,244,236,.82)",
          backdropFilter: "blur(18px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(200,173,120,.28)",
          zIndex: 1200,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72, md: 82 },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: { xs: "auto", md: 190 },
              }}
            >
              <Box
                component="img"
                src="images/logo.png"
                alt="Mariana Lero Invitaciones"
                sx={{
                  height: { xs: 42, md: 48 },
                  maxWidth: { xs: 150, md: 180 },
                  objectFit: "contain",
                }}
              />
            </Link>

            {/* Desktop menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
                px: 1,
                py: 0.8,
                borderRadius: "999px",
                bgcolor: "rgba(255,255,255,.38)",
                border: "1px solid rgba(200,173,120,.26)",
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  sx={{
                    px: 2.2,
                    py: 1,
                    borderRadius: "999px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: isActive(item.href) ? "#fff" : "#7d5f55",
                    bgcolor: isActive(item.href) ? "#a41423" : "transparent",
                    transition: ".25s ease",
                    "&:hover": {
                      color: isActive(item.href) ? "#fff" : "#a41423",
                      bgcolor: isActive(item.href)
                        ? "#a41423"
                        : "rgba(164,20,35,.06)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            {/* Desktop actions */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 1.2,
                minWidth: 190,
              }}
            >
              {authenticated ? (
                <>
                  <Button
                    href="/guests"
                    sx={{
                      borderRadius: "999px",
                      px: 2.6,
                      py: 1,
                      bgcolor: "#a41423",
                      color: "#fff",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0 12px 26px rgba(164,20,35,.18)",
                      "&:hover": {
                        bgcolor: "#7f0f1b",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Ir al panel
                  </Button>

                  <IconButton
                    onClick={handleLogout}
                    sx={{
                      color: "#a41423",
                      bgcolor: "rgba(164,20,35,.06)",
                      "&:hover": {
                        bgcolor: "rgba(164,20,35,.12)",
                      },
                    }}
                  >
                    <LogoutRoundedIcon />
                  </IconButton>
                </>
              ) : (
                <Button
                  href="/login"
                  sx={{
                    borderRadius: "999px",
                    px: 2.6,
                    py: 1,
                    color: "#a41423",
                    border: "1px solid rgba(164,20,35,.35)",
                    bgcolor: "rgba(255,255,255,.42)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "rgba(164,20,35,.06)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Iniciar sesión
                </Button>
              )}
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#a41423",
                bgcolor: "rgba(255,255,255,.42)",
                border: "1px solid rgba(200,173,120,.35)",
                "&:hover": {
                  bgcolor: "rgba(164,20,35,.06)",
                },
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "84vw", sm: 360 },
            bgcolor: "#f8f4ec",
            background:
              "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 100%)",
            px: 2.5,
            py: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box
            component="img"
            src="images/logo.png"
            alt="Mariana Lero Invitaciones"
            sx={{
              height: 42,
              maxWidth: 150,
              objectFit: "contain",
            }}
          />

          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              color: "#a41423",
              bgcolor: "rgba(255,255,255,.42)",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(200,173,120,.35)", mb: 2 }} />

        <List sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {menuItems.map((item) => (
            <ListItemButton
              component="a"
              href={item.href}
              key={item.label}
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: "18px",
                px: 2,
                py: 1.3,
                bgcolor: isActive(item.href)
                  ? "#a41423"
                  : "rgba(255,255,255,.34)",
                color: isActive(item.href) ? "#fff" : "#7d5f55",
                "&:hover": {
                  bgcolor: isActive(item.href)
                    ? "#a41423"
                    : "rgba(164,20,35,.06)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: "auto", pt: 3 }}>
          <Divider sx={{ borderColor: "rgba(200,173,120,.35)", mb: 2 }} />

          {/* Acciones */}

<Box
  sx={{
    mt: "auto",
    pt: 3,
  }}
>
  <Divider
    sx={{
      borderColor: "rgba(200,173,120,.35)",
      mb: 2,
    }}
  />

  {!authenticated && (
    <Button
      fullWidth
      href="/login"
      onClick={() => setDrawerOpen(false)}
      sx={{
        mb: 1.5,
        borderRadius: "999px",
        bgcolor: "#a41423",
        color: "#fff",
        py: 1.3,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        textTransform: "none",
        boxShadow: "0 12px 26px rgba(164,20,35,.18)",
        "&:hover": {
          bgcolor: "#7f0f1b",
        },
      }}
    >
      Iniciar sesión
    </Button>
  )}

  {authenticated && (
    <>
      <Button
        fullWidth
        href="/guests"
        onClick={() => setDrawerOpen(false)}
        sx={{
          mb: 1.5,
          borderRadius: "999px",
          bgcolor: "#a41423",
          color: "#fff",
          py: 1.3,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#7f0f1b",
          },
        }}
      >
        Ir al panel
      </Button>

      <Button
        fullWidth
        onClick={handleLogout}
        sx={{
          borderRadius: "999px",
          color: "#a41423",
          border: "1px solid rgba(164,20,35,.35)",
          py: 1.3,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          textTransform: "none",
          bgcolor: "rgba(255,255,255,.35)",
          "&:hover": {
            bgcolor: "rgba(164,20,35,.06)",
          },
        }}
      >
        Cerrar sesión
      </Button>
    </>
  )}
</Box>
<Box
  sx={{
    mt: 5,
    textAlign: "center",
    color: "#7d5f55",
    fontFamily: "'DM Serif Display', serif",
    fontStyle: "italic",
    fontSize: "1rem",
  }}
>
  Tu evento, tu estilo.
  <br />
  Nosotros lo hacemos inolvidable.
</Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
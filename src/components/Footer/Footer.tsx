import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
  Container,
  Divider,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        background:
          "linear-gradient(180deg,#f8f4ec 0%,#f2eadd 100%)",
        borderTop: "1px solid rgba(200,173,120,.35)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
          }}
        >
          {/* Logo */}

          <Box
            component="img"
            src="images/logo.png"
            alt="Mariana Lero Invitaciones"
            sx={{
              height: { xs: 55, md: 65 },
              mb: 3,
            }}
          />

          {/* Frase */}

          <Typography
            sx={{
              fontFamily: "'DM Serif Display', serif",
              color: "#7d5f55",
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              fontStyle: "italic",
              lineHeight: 1.4,
              mb: 4,
            }}
          >
           Cada historia merece una invitación especial.
            <br />

          </Typography>

{/* CTA */}

<Box
  sx={{
    mt: 5,
    mb: 5,
    py: { xs: 4, md: 5 },
    px: { xs: 3, md: 6 },
    maxWidth: 700,
    mx: "auto",
    borderRadius: "30px",
    bgcolor: "rgba(255,255,255,.42)",
    border: "1px solid rgba(200,173,120,.35)",
    boxShadow: "0 20px 50px rgba(75,45,35,.08)",
  }}
>
  <Typography
    sx={{
      fontFamily: "'DM Serif Display', serif",
      color: "#a41423",
      fontSize: { xs: "2rem", md: "2.8rem" },
      lineHeight: 1,
      mb: 2,
    }}
  >
    ¿Lista para crear
    <br />
    una invitación única?
  </Typography>

  <Typography
    sx={{
      fontFamily: "Montserrat, sans-serif",
      color: "#7d5f55",
      lineHeight: 1.8,
      maxWidth: 520,
      mx: "auto",
      mb: 4,
    }}
  >
    Cuéntanos cómo imaginas tu evento y diseñaremos una
    invitación digital pensada especialmente para ti.
  </Typography>

  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={2}
    justifyContent="center"
  >
    <Link
      href="https://wa.me/526621942534/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales."
      underline="none"
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: "999px",
        bgcolor: "#a41423",
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        transition: ".25s",
        boxShadow: "0 14px 28px rgba(164,20,35,.18)",
        "&:hover": {
          bgcolor: "#7f0f1b",
          transform: "translateY(-2px)",
        },
      }}
    >
      Solicitar información
    </Link>

    <Link
      href="/demos"
      underline="none"
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: "999px",
        border: "1px solid rgba(164,20,35,.35)",
        bgcolor: "rgba(255,255,255,.35)",
        color: "#a41423",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        transition: ".25s",
        "&:hover": {
          bgcolor: "rgba(164,20,35,.06)",
          transform: "translateY(-2px)",
        },
      }}
    >
      Ver modelos
    </Link>
  </Stack>
</Box>
          {/* Redes */}

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mb={4}
          >
            <IconButton
              href="https://www.instagram.com/marianalero.invitaciones/"
              target="_blank"
              sx={{
                bgcolor: "#fff",
                color: "#a41423",
                border: "1px solid rgba(200,173,120,.35)",
                transition: ".25s",
                "&:hover": {
                  bgcolor: "#a41423",
                  color: "#fff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              href="https://www.facebook.com/profile.php?id=100094953459966"
              target="_blank"
              sx={{
                bgcolor: "#fff",
                color: "#a41423",
                border: "1px solid rgba(200,173,120,.35)",
                "&:hover": {
                  bgcolor: "#a41423",
                  color: "#fff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://wa.me/526621942534/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales."
              target="_blank"
              sx={{
                bgcolor: "#fff",
                color: "#a41423",
                border: "1px solid rgba(200,173,120,.35)",
                "&:hover": {
                  bgcolor: "#a41423",
                  color: "#fff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>

          {/* Navegación */}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            mb={2}
          >
            <Link
              href="/demos"
              underline="none"
              color="#7d5f55"
            >
              Modelos
            </Link>

            <Link
              href="/creaciones"
              underline="none"
              color="#7d5f55"
            >
              Creaciones
            </Link>

            <Link
              href="/faq"
              underline="none"
              color="#7d5f55"
            >
              Preguntas
            </Link>
          </Stack>

          {/* Legales */}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            mb={4}
          >
            <Link
              href="/terminos"
              underline="hover"
              color="#bdaa8c"
            >
              Términos
            </Link>

            <Link
              href="/privacidad"
              underline="hover"
              color="#bdaa8c"
            >
              Privacidad
            </Link>
          </Stack>

          <Divider
            sx={{
              borderColor: "rgba(200,173,120,.35)",
              mb: 3,
            }}
          />

          {/* Copyright */}

          <Typography
            sx={{
              color: "#a89a90",
              fontFamily: "Montserrat, sans-serif",
              fontSize: ".82rem",
            }}
          >
            © {new Date().getFullYear()} Mariana Lero Invitaciones.
            Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
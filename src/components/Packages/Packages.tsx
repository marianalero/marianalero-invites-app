import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fade } from "react-awesome-reveal";

const packages = [
  {
    name: "Esencia",
    level: "Básico",
    features: [
      "Portada personalizada",
      "Información del evento",
      "Link de ubicación",
      "Confirmación por WhatsApp",
    ],
    badge: "Para comenzar",
    price: "$500 MXN",
    cta: "Ver modelos",
  },
  {
    name: "Memorias",
    level: "Intermedio",
    features: [
      "Todo lo de Esencia",
      "Padres y padrinos",
      "Código de vestimenta",
      "Cuenta regresiva",
      "Mesa de regalos",
      "Frase personalizada",
      "Galería de fotos hasta 5",
    ],
    badge: "Mejor equilibrio",
    price: "$850 MXN",
    cta: "Ver ejemplos",
  },
  {
    name: "Celebra+",
    level: "Avanzado",
    features: [
      "Todo lo de Memorias",
      "Galería de fotos hasta 10",
      "Itinerario del evento",
      "Música",
      "Boton de Agregar al calendario",
      "Panel de confirmaciones (la función favorita de nuestros clientes)",
    ],
    badge: "Más elegido",
    price: "$1,100 MXN",
    recommended: true,
    cta: "Quiero este paquete",
  },
];

const Packages = () => {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        py: { xs: 7, md: 9 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Fade direction="up" triggerOnce>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
            mb: 7,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#bdaa8c",
              fontSize: ".78rem",
              fontWeight: 700,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Paquetes
          </Typography>

          <Typography
            sx={{
              fontFamily: "'DM Serif Display', serif",
              color: "#a41423",
              fontSize: { xs: "2.3rem", md: "3.6rem" },
              lineHeight: 1,
              mb: 2,
            }}
          >
            Elige la experiencia
            <br />
            ideal para tu evento.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#7d5f55",
              lineHeight: 1.8,
            }}
          >
            Cada paquete está pensado para adaptarse al estilo, detalles y
            necesidades de tu celebración.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={4} alignItems="stretch">
        {packages.map((pkg) => (
          <Grid key={pkg.name} size={{ xs: 12, md: 4 }}>
            <Fade direction="up" triggerOnce>
              <Box
                sx={{
                  height: "100%",
                  position: "relative",
                  p: { xs: 3.5, md: 4 },
                  borderRadius: "34px",
                  bgcolor: pkg.recommended
                    ? "#a41423"
                    : "rgba(255,255,255,.42)",
                  border: pkg.recommended
                    ? "1px solid #a41423"
                    : "1px solid rgba(200,173,120,.35)",
                  boxShadow: pkg.recommended
                    ? "0 28px 70px rgba(164,20,35,.22)"
                    : "0 20px 50px rgba(75,45,35,.08)",
                  transition: ".3s ease",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: pkg.recommended
                      ? "0 34px 80px rgba(164,20,35,.28)"
                      : "0 28px 60px rgba(75,45,35,.12)",
                  },
                }}
              >
                {pkg.recommended && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,.08)",
                      top: -55,
                      right: -45,
                    }}
                  />
                )}

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'DM Serif Display', serif",
                        color: pkg.recommended ? "#fff" : "#a41423",
                        fontSize: "2.1rem",
                        lineHeight: 1,
                      }}
                    >
                      {pkg.name}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.8,
                        fontFamily: "Montserrat, sans-serif",
                        color: pkg.recommended
                          ? "rgba(255,255,255,.76)"
                          : "#7d5f55",
                        fontSize: ".86rem",
                      }}
                    >
                      {pkg.level}
                    </Typography>
                  </Box>

                  <Chip
                    label={pkg.badge}
                    size="small"
                    sx={{
                      bgcolor: pkg.recommended
                        ? "rgba(255,255,255,.14)"
                        : "#f2eadd",
                      color: pkg.recommended ? "#fff" : "#a41423",
                      border: "1px solid rgba(200,173,120,.35)",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  />
                </Stack>

                <Typography
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: pkg.recommended ? "#fff" : "#a41423",
                    fontSize: "2.3rem",
                    mb: 2,
                  }}
                >
                  {pkg.price}
                </Typography>

                <Divider
                  sx={{
                    mb: 3,
                    borderColor: pkg.recommended
                      ? "rgba(255,255,255,.18)"
                      : "rgba(200,173,120,.35)",
                  }}
                />

                <Stack spacing={1.6} sx={{ mb: 4 }}>
                  {pkg.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: "flex",
                        gap: 1.2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          minWidth: 20,
                          borderRadius: "50%",
                          mt: 0.2,
                          bgcolor: pkg.recommended
                            ? "rgba(255,255,255,.16)"
                            : "#f2eadd",
                          color: pkg.recommended ? "#fff" : "#a41423",
                          fontSize: ".75rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          color: pkg.recommended
                            ? "rgba(255,255,255,.86)"
                            : "#7d5f55",
                          fontSize: ".92rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  fullWidth
                  href="/demos"
                  sx={{
                    mt: "auto",
                    borderRadius: "999px",
                    py: 1.3,
                    bgcolor: pkg.recommended ? "#fff" : "#a41423",
                    color: pkg.recommended ? "#a41423" : "#fff",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: pkg.recommended
                      ? "0 12px 26px rgba(0,0,0,.12)"
                      : "0 12px 26px rgba(164,20,35,.18)",
                    "&:hover": {
                      bgcolor: pkg.recommended ? "#f8f4ec" : "#7f0f1b",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {pkg.cta}
                </Button>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;
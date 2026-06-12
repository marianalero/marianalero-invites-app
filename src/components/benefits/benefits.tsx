import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import one from "./../../assets/iconos/23.svg";
import two from "./../../assets/iconos/24.svg";
import tree from "./../../assets/iconos/25.svg";
import { Fade } from "react-awesome-reveal";

const benefits = [
  {
    icon: one,
    title: "Control en tiempo real",
    description:
      "Consulta en cualquier momento cuántos invitados han confirmado su asistencia.",
  },
  {
    icon: two,
    title: "Enlaces personalizados",
    description:
      "Cada invitado recibe un enlace único para mantener una mejor organización.",
  },
  {
    icon: tree,
    title: "Exportación de datos",
    description:
      "Descarga tu lista de confirmados para tener un mejor control del evento.",
  },
];

const ConfirmationBenefits = () => {
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
            Sistema de confirmaciones
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
            Organiza a tus invitados
            <br />
            de una forma más inteligente.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#7d5f55",
              lineHeight: 1.8,
            }}
          >
            Nuestro panel de confirmaciones te ayuda a llevar un mejor control
            del evento sin hojas de cálculo complicadas.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={4}>
        {benefits.map((benefit) => (
          <Grid key={benefit.title} size={{ xs: 12, md: 4 }}>
            <Fade direction="up" triggerOnce>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3.5, md: 4 },
                  borderRadius: "30px",
                  bgcolor: "rgba(255,255,255,.42)",
                  border: "1px solid rgba(200,173,120,.35)",
                  boxShadow: "0 20px 50px rgba(75,45,35,.08)",
                  transition: ".3s ease",
                  textAlign: { xs: "center", md: "left" },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 28px 60px rgba(75,45,35,.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 82,
                    height: 82,
                    borderRadius: "50%",
                    bgcolor: "#f2eadd",
                    border: "1px solid rgba(200,173,120,.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    mx: { xs: "auto", md: 0 },
                  }}
                >
                  <img src={benefit.icon} alt={benefit.title} width={44} />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#a41423",
                    fontSize: "1.8rem",
                    mb: 2,
                    lineHeight: 1.1,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#7d5f55",
                    lineHeight: 1.8,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConfirmationBenefits;
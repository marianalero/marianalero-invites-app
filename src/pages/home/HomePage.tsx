import { Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Image } from "react-bootstrap";
import HeaderHome from "../../layouts/headerHome";
import slide3 from "./../../assets/slides/prinicpal.png";
import Footer from "../../components/Footer/Footer";
import invitacion from "./../../assets/iconos/17.svg";
import confirm from "./../../assets/iconos/18.svg";
import register from "./../../assets/iconos/19.svg";
import responsive from "./../../assets/iconos/20.svg";
import Packages from "../../components/Packages/Packages";
import ConfirmationBenefits from "../../components/benefits/benefits";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const benefits = [
    {
      icon: invitacion,
      title: "Diseño único",
      text: "Personalizamos tu invitación para reflejar el estilo de tu evento con detalles elegantes y modernos.",
    },
    {
      icon: confirm,
      title: "Confirmación integrada",
      text: "Tus invitados pueden confirmar su asistencia fácilmente desde cualquier dispositivo.",
    },
    {
      icon: register,
      title: "Control de invitados",
      text: "Accede a un panel donde podrás ver quién confirmó, quién falta y otros detalles importantes.",
    },
    {
      icon: responsive,
      title: "100% digital",
      text: "Comparte tu invitación por WhatsApp, email o redes sociales de forma práctica y elegante.",
    },
  ];

  return (
    <>
      <HeaderHome />

      <Box
        sx={{
          bgcolor: "#f8f4ec",
          background:
            "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 55%, #f8f4ec 100%)",
          overflow: "hidden",
        }}
      >
        {/* HERO */}
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            alignItems="center"
            sx={{
              minHeight: { xs: "auto", md: "calc(100vh - 80px)" },
              py: { xs: 8, md: 6 },
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade direction="up" triggerOnce>
                <Box
                  sx={{
                    maxWidth: 640,
                    mx: { xs: "auto", md: 0 },
                    textAlign: { xs: "center", md: "left" },
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
                    Mariana Lero Invitaciones
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      color: "#a41423",
                      fontSize: { xs: "3rem", sm: "4rem", md: "5.4rem" },
                      lineHeight: 0.92,
                      mb: 2.5,
                    }}
                  >
                    Invitaciones digitales
                    <br />
                    para celebrar historias únicas.
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#7d5f55",
                      fontSize: { xs: "1rem", md: "1.08rem" },
                      lineHeight: 1.8,
                      maxWidth: 560,
                      mx: { xs: "auto", md: 0 },
                      mb: 4,
                    }}
                  >
                    Diseños personalizados para bodas, XV años y momentos
                    especiales, con música, ubicación, confirmación y detalles
                    interactivos.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: { xs: "center", md: "flex-start" },
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      href="/demos"
                      sx={{
                        bgcolor: "#a41423",
                        color: "#fff",
                        borderRadius: "999px",
                        px: 4,
                        py: 1.4,
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        textTransform: "none",
                        boxShadow: "0 14px 28px rgba(164,20,35,.22)",
                        "&:hover": {
                          bgcolor: "#7f0f1b",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Ver modelos
                    </Button>

                    <Button
                      href="https://wa.me/526621942534"
                      target="_blank"
                      sx={{
                        color: "#a41423",
                        border: "1px solid rgba(164,20,35,.35)",
                        borderRadius: "999px",
                        px: 4,
                        py: 1.4,
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        textTransform: "none",
                        bgcolor: "rgba(255,255,255,.35)",
                        "&:hover": {
                          bgcolor: "rgba(164,20,35,.06)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Solicitar información
                    </Button>
                  </Box>

                  <Grid
                    container
                    spacing={2}
                    sx={{
                      mt: 5,
                      maxWidth: 560,
                      mx: { xs: "auto", md: 0 },
                    }}
                  >
                    {[
                      ["50+", "invitaciones diseñadas"],
                      ["100%", "personalizadas"],
                      ["24/7", "disponibles online"],
                    ].map(([number, label]) => (
                      <Grid key={label} size={{ xs: 4 }}>
                        <Box
                          sx={{
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'DM Serif Display', serif",
                              color: "#a41423",
                              fontSize: { xs: "1.8rem", md: "2.2rem" },
                              lineHeight: 1,
                            }}
                          >
                            {number}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                              color: "#7d5f55",
                              fontSize: ".76rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Fade>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Fade direction="up" triggerOnce>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: 380, md: 620 },
                    display: "flex",
                    justifyContent: "center",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: { xs: 260, md: 420 },
                      height: { xs: 260, md: 420 },
                      borderRadius: "50%",
                      bgcolor: "rgba(200,173,120,.22)",
                      filter: "blur(18px)",
                      top: "18%",
                      right: { xs: "auto", md: "8%" },
                      zIndex: 0,
                    },
                  }}
                >
                  <Image
                    src={slide3}
                    style={{
                      position: "relative",
                      zIndex: 1,
                      maxWidth: "100%",
                      height: isSmallScreen ? "48vh" : "calc(100vh - 150px)",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>

        {/* BENEFICIOS */}
        <Container maxWidth="lg">
          <Box
            sx={{
              py: { xs: 6, md: 8 },
              px: { xs: 2.5, md: 6 },
              mb: { xs: 5, md: 7 },
              borderRadius: "36px",
              bgcolor: "rgba(255,255,255,.42)",
              border: "1px solid rgba(200,173,120,.35)",
              boxShadow: "0 20px 50px rgba(75,45,35,.08)",
            }}
          >
            <Fade direction="up" triggerOnce>
              <Typography
                sx={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#a41423",
                  textAlign: "center",
                  fontSize: { xs: "2.2rem", md: "3.4rem" },
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                Todo lo que necesitas
                <br />
                en una sola invitación.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#7d5f55",
                  textAlign: "center",
                  maxWidth: 620,
                  mx: "auto",
                  lineHeight: 1.8,
                  mb: 6,
                }}
              >
                Diseñamos experiencias digitales bonitas, prácticas y fáciles de
                compartir con tus invitados.
              </Typography>
            </Fade>

            <Grid container spacing={4} justifyContent="center">
              {benefits.map((benefit) => (
                <Grid
                  key={benefit.title}
                  size={{ xs: 12, sm: 6, md: 3 }}
                >
                  <Fade direction="up" triggerOnce>
                    <Box
                      sx={{
                        height: "100%",
                        textAlign: "center",
                        px: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 76,
                          height: 76,
                          borderRadius: "50%",
                          mx: "auto",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#f2eadd",
                          border: "1px solid rgba(200,173,120,.35)",
                        }}
                      >
                        <img src={benefit.icon} alt={benefit.title} width={42} />
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: "'DM Serif Display', serif",
                          color: "#a41423",
                          fontSize: "1.45rem",
                          mb: 1,
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#7d5f55",
                          fontSize: ".92rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {benefit.text}
                      </Typography>
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Box sx={{ px: { xs: 2, md: 4 } }}>
          <ConfirmationBenefits />
          <Packages />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
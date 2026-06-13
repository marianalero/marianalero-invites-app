import {
  Box,
  Button,
  Container,
  Typography,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeaderHome from "../../layouts/headerHome";
import Footer from "../../components/Footer/Footer";

const DemosPage = () => {
  const modelos = [
    {
      id: 1,
      titulo: "Celebra+",
      nombres: "Elena María y José Carlos",
      imagen: "images/demos/3.png",
      link: "/demos/1?number=2",
    },
    {
      id: 2,
      titulo: "Memorias",
      nombres: "Selene y Juan Carlos",
      imagen: "images/demos/4.png",
      link: "/demos/2?number=2",
    },
    {
      id: 3,
      titulo: "Celebra+",
      nombres: "Sin fotografías",
      imagen: "images/demos/2.png",
      link: "/demos/3?number=2",
    },
    {
      id: 5,
      titulo: "Celebra+",
      nombres: "Valentina y Sebastián",
      imagen: "images/demos/46.png",
      link: "/demos/bw-demo?number=2",
    },
    {
      id: 7,
      titulo: "Celebra+",
      nombres: "XV Regina",
      imagen: "images/xv/35.png",
      link: "/xv-regina?number=2",
    },
    {
      id: 8,
      titulo: "Celebra+",
      nombres: "María Lourdes y Francisco Michel",
      imagen: "images/bodas/15.png",
      link: "/boda-maria-lourdes-francisco-michel?number=2",
    },
    {
      id: 9,
      titulo: "Memorias",
      nombres: "XV Alejandra",
      imagen: "images/demos/47.png",
      link: "/demos/xv-alejandra?number=2",
    },
    {
      id: 10,
      titulo: "Memorias",
      nombres: "XV Renata",
      imagen: "images/demos/48.png",
      link: "/demos/xv-renata?number=2",
    },
    {
      id: 11,
      titulo: "Esencia",
      nombres: "Baby Shower Alec",
      imagen: "images/otras/41.png",
      link: "/baby-shower-alec",
    },
    {
      id: 12,
      titulo: "Esencia",
      nombres: "Bridal Shower Sophia",
      imagen: "images/otras/39.png",
      link: "/bridalshower-sophia",
    },
  ];

  return (
    <>
      <HeaderHome />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f8f4ec",
          background:
            "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 55%, #f8f4ec 100%)",
          py: { xs: 7, md: 11 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="xl">
          {/* HERO */}
          <Box
            sx={{
              maxWidth: 780,
              mx: "auto",
              textAlign: "center",
              mb: { xs: 5, md: 8 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: { xs: "2.7rem", md: "4.7rem" },
                lineHeight: 0.95,
                mb: 2,
              }}
            >
              Elige el modelo
              <br />
              que va con tu historia.
            </Typography>

            <Typography
              sx={{
                color: "#7d5f55",
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.8,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Explora nuestras invitaciones demo y visualiza cómo puede lucir
              tu evento antes de personalizarlo.
            </Typography>
          </Box>

          {/* MODELOS */}
          <Grid
            container
            spacing={{ xs: 4, md: 5 }}
            sx={{
              justifyContent: "center",
              maxWidth: 1200,
              mx: "auto",
            }}
          >
            {modelos.map((modelo) => (
              <Grid
                key={modelo.id}
                size={{ xs: 6, sm: 6, md: 4, lg: 4 }}
              >
                <Box
                  sx={{
                    maxWidth: 310,
                    mx: "auto",
                    textAlign: "left",
                    "&:hover .demo-img": {
                      transform: "scale(1.035)",
                    },
                    "&:hover .demo-overlay": {
                      opacity: 1,
                    },
                    "&:hover .demo-title": {
                      color: "#b3151d",
                    },
                  }}
                >
                  <Box
                    component="a"
                    href={modelo.link}
                    sx={{
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "30px",
                        aspectRatio: "1 / 2",
                        bgcolor: "#eadfcd",
                        boxShadow: "0 18px 40px rgba(75,45,35,.13)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={modelo.imagen}
                        alt={modelo.nombres}
                        className="demo-img"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top center",
                          transition: "transform .7s ease",
                        }}
                      />

                      <Box
                        className="demo-overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          opacity: 0,
                          transition: "opacity .35s ease",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,.03) 0%, rgba(0,0,0,.45) 100%)",
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "center",
                          pb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            color: "#fff",
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: ".78rem",
                            letterSpacing: ".16em",
                            textTransform: "uppercase",
                            border: "1px solid rgba(255,255,255,.65)",
                            borderRadius: "999px",
                            px: 2.5,
                            py: 1,
                            backdropFilter: "blur(6px)",
                          }}
                        >
                          Ver modelo
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 2.2, px: 0.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "#bdaa8c",
                        fontSize: ".72rem",
                        fontWeight: 600,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        mb: 0.8,
                      }}
                    >
                      Modelo {modelo.titulo}
                    </Typography>

                    <Typography
                      className="demo-title"
                      sx={{
                        fontFamily: "'DM Serif Display', serif",
                        color: "#a41423",
                        fontSize: "1.45rem",
                        lineHeight: 1.1,
                        transition: "color .25s ease",
                      }}
                    >
                      {modelo.nombres}
                    </Typography>

                    <Button
                      href={modelo.link}
                      sx={{
                        mt: 2,
                        px: 3,
                        py: 1,
                        borderRadius: "999px",
                        bgcolor: "#a41423",
                        color: "#fff",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: ".85rem",
                        textTransform: "none",
                        boxShadow: "0 12px 26px rgba(164,20,35,.18)",
                        "&:hover": {
                          bgcolor: "#7f0f1b",
                          transform: "translateY(-2px)",
                          boxShadow: "0 16px 32px rgba(164,20,35,.24)",
                        },
                      }}
                    >
                      Ver modelo
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default DemosPage;
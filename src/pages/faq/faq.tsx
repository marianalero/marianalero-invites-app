import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqs from "../../constants/faqs.json";
import HeaderHome from "../../layouts/headerHome";
import Footer from "../../components/Footer/Footer";

const FaqPage = () => {
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
        <Container maxWidth="md">
          {/* HERO */}
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 760,
              mx: "auto",
              mb: { xs: 6, md: 8 },
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
              Preguntas frecuentes
            </Typography>

            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: { xs: "2.7rem", md: "4.4rem" },
                lineHeight: 0.95,
                mb: 2,
              }}
            >
              Resolvemos tus dudas
              <br />
              antes de empezar.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                lineHeight: 1.8,
                maxWidth: 620,
                mx: "auto",
              }}
            >
              Aquí encontrarás información sobre el proceso, tiempos de entrega,
              formas de compartir tu invitación y sistema de confirmaciones.
            </Typography>
          </Box>

          {/* FAQS */}
          <Box
            sx={{
              borderRadius: "36px",
              bgcolor: "rgba(255,255,255,.42)",
              border: "1px solid rgba(200,173,120,.35)",
              boxShadow: "0 20px 50px rgba(75,45,35,.08)",
              overflow: "hidden",
              p: { xs: 2, md: 4 },
            }}
          >
            {faqs.map((section, index) => (
              <Box key={section.category} sx={{ mb: index === faqs.length - 1 ? 0 : 5 }}>
                <Typography
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#a41423",
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    lineHeight: 1,
                    mb: 2.5,
                  }}
                >
                  {section.category}
                </Typography>

                {section.questions.map((faq, qIndex) => (
                  <Accordion
                    key={`${section.category}-${qIndex}`}
                    disableGutters
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,255,255,.55)",
                      border: "1px solid rgba(200,173,120,.25)",
                      borderRadius: "22px !important",
                      mb: 1.5,
                      overflow: "hidden",
                      boxShadow: "none",
                      "&::before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        bgcolor: "#fff",
                        boxShadow: "0 14px 34px rgba(75,45,35,.08)",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: "#a41423",
                          }}
                        />
                      }
                      sx={{
                        px: { xs: 2, md: 3 },
                        py: 1,
                        "& .MuiAccordionSummary-content": {
                          my: 1.2,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 700,
                          color: "#3a2a25",
                          fontSize: ".98rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        px: { xs: 2, md: 3 },
                        pb: 3,
                        pt: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          color: "#7d5f55",
                          lineHeight: 1.8,
                          fontSize: ".95rem",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}

                {index < faqs.length - 1 && (
                  <Divider
                    sx={{
                      mt: 4,
                      borderColor: "rgba(200,173,120,.35)",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* CTA */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              textAlign: "center",
              maxWidth: 680,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: { xs: "2rem", md: "2.7rem" },
                lineHeight: 1,
                mb: 1.5,
              }}
            >
              ¿Tienes otra duda?
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Escríbenos y te ayudamos a elegir la mejor opción para tu evento.
            </Typography>

            <Box
              component="a"
              href="https://wa.me/526621942534/?text=Hola,%20tengo%20una%20duda%20sobre%20las%20invitaciones%20digitales."
              target="_blank"
              sx={{
                display: "inline-flex",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                bgcolor: "#a41423",
                color: "#fff",
                px: 4,
                py: 1.4,
                borderRadius: "999px",
                fontWeight: 600,
                boxShadow: "0 12px 26px rgba(164,20,35,.22)",
                transition: "all .25s ease",
                "&:hover": {
                  bgcolor: "#7f0f1b",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Enviar mensaje
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default FaqPage;
import { Box, Container, Typography, Divider } from "@mui/material";
import HeaderHome from "../../layouts/headerHome";
import Footer from "../../components/Footer/Footer";

const sections = [
  {
    title: "1. Información que recopilamos",
    text: "Recopilamos los datos que nos proporcionas al llenar formularios o solicitar una invitación, como nombre, correo electrónico y datos relacionados con tu evento.",
  },
  {
    title: "2. Uso de la información",
    text: "Utilizamos esta información exclusivamente para diseñar tus invitaciones, comunicarnos contigo y entregarte el producto digital contratado.",
  },
  {
    title: "3. Compartición de datos",
    text: "No compartimos tu información con terceros, salvo cuando sea necesario para cumplir una obligación legal.",
  },
  {
    title: "4. Seguridad",
    text: "Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales contra accesos no autorizados, pérdida o alteración.",
  },
  {
    title: "5. Cookies",
    text: "Este sitio puede utilizar cookies para mejorar la experiencia de navegación. Puedes desactivarlas desde la configuración de tu navegador si así lo prefieres.",
  },
  {
    title: "6. Derechos del usuario",
    text: "Puedes solicitar la revisión, corrección o eliminación de tus datos personales escribiéndonos a marianalero.invitaciones@gmail.com.",
  },
  {
    title: "7. Cambios en esta política",
    text: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán efectivas una vez publicadas en este sitio.",
  },
  {
    title: "8. Contacto",
    text: "Si tienes alguna duda relacionada con la privacidad o el tratamiento de tus datos, puedes escribirnos a marianalero.invitaciones@gmail.com.",
  },
];

const PrivacyPolicy = () => {
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
          {/* Hero */}

          <Box
            sx={{
              textAlign: "center",
              maxWidth: 760,
              mx: "auto",
              mb: { xs: 5, md: 7 },
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
              Información legal
            </Typography>

            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: { xs: "2.7rem", md: "4.2rem" },
                lineHeight: 0.95,
                mb: 2,
              }}
            >
              Política de
              <br />
              privacidad.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                lineHeight: 1.8,
              }}
            >
              Última actualización: 26 de mayo de 2025
            </Typography>
          </Box>

          {/* Contenido */}

          <Box
            sx={{
              borderRadius: "36px",
              bgcolor: "rgba(255,255,255,.42)",
              border: "1px solid rgba(200,173,120,.35)",
              boxShadow: "0 20px 50px rgba(75,45,35,.08)",
              p: { xs: 3, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              En Mariana Lero Invitaciones respetamos tu privacidad y protegemos
              tus datos personales conforme a esta Política de Privacidad.
            </Typography>

            <Divider
              sx={{
                borderColor: "rgba(200,173,120,.35)",
                mb: 4,
              }}
            />

            {sections.map((section, index) => (
              <Box
                key={section.title}
                sx={{
                  mb: index === sections.length - 1 ? 0 : 4,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'DM Serif Display', serif",
                    color: "#a41423",
                    fontSize: { xs: "1.45rem", md: "1.75rem" },
                    lineHeight: 1.15,
                    mb: 1,
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#7d5f55",
                    lineHeight: 1.9,
                    fontSize: ".96rem",
                  }}
                >
                  {section.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
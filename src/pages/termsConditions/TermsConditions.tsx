import { Box, Container, Typography, Divider } from "@mui/material";
import HeaderHome from "../../layouts/headerHome";
import Footer from "../../components/Footer/Footer";

const sections = [
  {
    title: "1. Servicios ofrecidos",
    text: "Mariana Lero Invitaciones ofrece la creación, personalización y entrega de invitaciones digitales para eventos sociales como matrimonios, cumpleaños, bautizos, aniversarios y más.",
  },
  {
    title: "2. Uso del sitio",
    text: "El usuario se compromete a utilizar este sitio con fines lícitos y a no realizar actividades que afecten su funcionamiento o seguridad.",
  },
  {
    title: "3. Contenido personalizado",
    text: "Los diseños se basan en la información proporcionada por el cliente. Mariana Lero Invitaciones no se responsabiliza por errores u omisiones en los datos entregados por el cliente.",
  },
  {
    title: "4. Propiedad intelectual",
    text: "Todos los diseños, textos, imágenes y demás contenidos del sitio son propiedad de Mariana Lero Invitaciones. No se permite su reproducción o uso sin autorización previa por escrito.",
  },
  {
    title: "5. Pagos y entregas",
    text: "Los pagos se realizan antes de la entrega final de la invitación. Los tiempos de entrega pueden variar según el nivel de personalización requerido.",
  },
  {
    title: "6. Cancelaciones y reembolsos",
    text: "Debido a la naturaleza personalizada del producto, no se aceptan reembolsos una vez iniciado el proceso de diseño.",
  },
  {
    title: "7. Uso publicitario",
    text: "Mariana Lero Invitaciones se reserva el derecho de utilizar versiones editadas o parciales de las invitaciones diseñadas con fines promocionales en redes sociales, portafolios o publicaciones, asegurando siempre que no se revele información sensible del cliente sin consentimiento.",
  },
  {
    title: "8. Modificaciones",
    text: "Mariana Lero Invitaciones puede modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas una vez publicadas en este sitio.",
  },
  {
    title: "9. Uso del código QR",
    text: "El servicio de invitaciones digitales puede incluir un código QR para facilitar el registro de asistencia. El funcionamiento correcto del QR depende de que el dispositivo del usuario cuente con conexión a internet al momento de escanearlo. Mariana Lero Invitaciones no se hace responsable por fallas en el acceso causadas por falta de conexión o problemas de red en el dispositivo del invitado.",
  },
  {
    title: "10. Contacto",
    text: "Para cualquier duda, puedes escribirnos a marianalero.invitaciones@gmail.com.",
  },
];

const TermsConditions = () => {
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
              Términos y
              <br />
              condiciones.
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
              Bienvenido/a a Mariana Lero Invitaciones. Al acceder y utilizar
              nuestro sitio web, aceptas cumplir con los siguientes Términos y
              Condiciones. Si no estás de acuerdo con ellos, por favor no
              utilices nuestros servicios.
            </Typography>

            <Divider sx={{ borderColor: "rgba(200,173,120,.35)", mb: 4 }} />

            {sections.map((section, index) => (
              <Box key={section.title} sx={{ mb: index === sections.length - 1 ? 0 : 4 }}>
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

export default TermsConditions;
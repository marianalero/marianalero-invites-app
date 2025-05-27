import { Box, Container, Typography } from '@mui/material';
import HeaderHome from '../../layouts/headerHome';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <HeaderHome></HeaderHome>
      <Container maxWidth="md">
    <Box sx={{ padding: '2rem', minHeight: '100vh', margin: '0 auto', fontFamily: 'Montserrat, sans-serif' }}>
      <Typography variant="h4" gutterBottom color="#a41423">
        Política de Privacidad
      </Typography>
      <Typography variant="body1">
        Última actualización: 26 de mayo de 2025
      </Typography>
      <Typography variant="body1">
        En Mariana Lero Invitaciones respetamos tu privacidad y protegemos tus datos personales conforme a esta Política de Privacidad.
      </Typography>
      <Typography variant="body1">
        <strong>1. Información que recopilamos:</strong> Recopilamos datos que tú nos proporcionas al llenar formularios o encargar una invitación, como nombre, correo electrónico y datos del evento.
      </Typography>
      <Typography variant="body1">
        <strong>2. Uso de la información:</strong> Utilizamos estos datos exclusivamente para diseñar tus invitaciones, comunicarnos contigo y entregarte el producto digital.
      </Typography>
      <Typography variant="body1">
        <strong>3. Compartición de datos:</strong> No compartimos tu información con terceros, salvo que la ley lo exija.
      </Typography>
      <Typography variant="body1">
        <strong>4. Seguridad:</strong> Implementamos medidas técnicas y organizativas para proteger tus datos personales.
      </Typography>
      <Typography variant="body1">
        <strong>5. Cookies:</strong> Este sitio puede usar cookies para mejorar la experiencia de navegación. Puedes desactivarlas en tu navegador si lo prefieres.
      </Typography>
      <Typography variant="body1">
        <strong>6. Derechos del usuario:</strong> Puedes solicitar la revisión, corrección o eliminación de tus datos escribiéndonos a marianalero.invitaciones@gmail.com
        .
      </Typography>
      <Typography variant="body1">
        <strong>7. Cambios:</strong> Nos reservamos el derecho de actualizar esta política sin previo aviso. Te recomendamos revisarla periódicamente.
      </Typography>
      <Typography variant="body1">
        <strong>8. Contacto:</strong> Para cualquier consulta sobre tu privacidad, escríbenos a marianalero.invitaciones@gmail.com
        .
      </Typography>
    </Box>
    </Container>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;

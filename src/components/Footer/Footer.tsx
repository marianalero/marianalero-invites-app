import { Box, Typography, IconButton, Stack, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f2eadd',
        paddingX: '1rem',
        paddingTop: '.5rem',
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
    

    <div>
  {/* Redes sociales */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <IconButton href="https://www.instagram.com/marianalero.invitaciones/" target="_blank" sx={{ color: '#a41423' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://facebook.com/lerostudio" target="_blank" sx={{ color: '#a41423' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://wa.me/+526621942534/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales." sx={{ color: '#a41423' }}>
          <WhatsAppIcon />
        </IconButton>
      </Stack>

      {/* Links legales */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <Link href="/terminos" underline="hover" sx={{ color: '#a41423', fontSize: '0.85rem' }}>
          Términos y condiciones
        </Link>
        <Link href="/privacidad" underline="hover" sx={{ color: '#a41423', fontSize: '0.85rem' }}>
          Política de privacidad
        </Link>
        <Link href="/faq" underline="hover" sx={{ color: '#a41423', fontSize: '0.85rem' }}>
          Preguntas frecuentes
        </Link>
      </Stack>

      {/* Copyright */}
      <Typography variant="caption" sx={{ color: '#999' }}>
        © {new Date().getFullYear()} <Link href="https://www.marianalero-invites.com/" color="inherit">Mariana Lero Invitaciones</Link>
      </Typography>
    </div>
    
    </Box>
  );
};

export default Footer;
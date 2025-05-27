// Footer.jsx
import React from 'react';
import { Box, Typography, IconButton, Stack, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f4ebd7',
        padding: '2rem 1rem',
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
    

    <div>
  {/* Redes sociales */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
        <IconButton href="https://instagram.com/lerostudio" target="_blank" sx={{ color: '#a41423' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://facebook.com/lerostudio" target="_blank" sx={{ color: '#a41423' }}>
          <FacebookIcon />
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

      {/* Frase emocional */}
      <Typography variant="caption" display="block" sx={{ color: '#777', mt: 1 }}>
        Diseñado con amor desde México ♥
      </Typography>

      {/* Copyright */}
      <Typography variant="caption" sx={{ color: '#999' }}>
        © {new Date().getFullYear()} Mariana Lero Invitaciones
      </Typography>
    </div>
    
    </Box>
  );
};

export default Footer;
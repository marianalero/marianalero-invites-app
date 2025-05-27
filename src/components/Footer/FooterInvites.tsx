import { Box, Typography, IconButton } from "@mui/material";
import Grid from '@mui/material/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const FooterInvites  = ({bgColor, color}) => {

   return (
    <Box
      component="footer"
      sx={{
        backgroundColor: bgColor,
        padding: '1.5rem',
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
      }}
    >
      <Typography variant="body2" sx={{ color: '#555' }}>
        © {new Date().getFullYear()} Mariana Lero Invitaciones. Todos los derechos reservados.
      </Typography>

      <Grid container direction="row" spacing={2} justifyContent="center" mt={1}>
        <IconButton href="https://www.instagram.com/marianalero.invitaciones/" target="_blank" sx={{ color: color }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://facebook.com" target="_blank" sx={{ color: color }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://wa.me/+526621729312/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales." sx={{ color }}>
          <WhatsAppIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}
export default FooterInvites;
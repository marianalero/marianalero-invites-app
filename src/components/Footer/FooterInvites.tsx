import { Box, Typography, IconButton, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
interface FooterInvitesProps{
  bgColor:string;
  color:string;
}
const FooterInvites  = (props:FooterInvitesProps) => {

   return (
    <Box
      component="footer"
      sx={{
        backgroundColor: props.bgColor,
        padding: '1.5rem',
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
      }}
    >
      <Typography variant="caption" display="block" sx={{ color: '#777', mt: 1 }}>
        Diseñado con amor ♥
      </Typography>
      <Typography variant="caption" sx={{ color: '#999' }}>
        © {new Date().getFullYear()} <Link href="https://www.marianalero-invites.com/" color="inherit">Mariana Lero Invitaciones</Link>
      </Typography>

      <Grid container direction="row" spacing={2} justifyContent="center" mt={1}>
        <IconButton href="https://www.instagram.com/marianalero.invitaciones/" target="_blank" sx={{ color: props.color }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com/profile.php?id=100094953459966" target="_blank" sx={{ color: props.color }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://wa.me/+526621942534/?text=Hola,%20quiero%20información%20de%20las%20invitaciones%20digitales." sx={{ color: props.color }}>
          <WhatsAppIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}
export default FooterInvites;
// src/components/ConfirmationBenefits.tsx
import { Box, Grid, Typography, Paper } from '@mui/material';
import one from './../../assets/iconos/23.svg';
import two from './../../assets/iconos/24.svg';
import tree from './../../assets/iconos/25.svg';
import { Fade } from 'react-awesome-reveal';
const benefits = [
  {
    icon:one,
    title: "Seguimiento en tiempo real",
    description: "Visualiza en cualquier momento cuántos invitados han confirmado su asistencia.",
  },
  {
    icon:two,
    title: "Respuestas personalizadas",
    description: "Cada invitado tiene un enlace único para confirmar, lo que mejora la organización.",
  },
  {
    icon:tree,
    title: "Exportación de datos",
    description: "Exporta la lista de invitados confirmados para llevar un mejor control o imprimirla.",
  }
];

const ConfirmationBenefits = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4ebd7' }}>
      <Fade direction="up" >
      <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'Cinzel, serif',
                                color: '#a41423',
                                textAlign: 'center',
                                mb: 6,
                            }}
                            >
                            Ventajas del sistema de confirmaciones
                            </Typography>

    </Fade>
      <Grid container spacing={3} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Fade direction="up" >
            <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%',backgroundColor:"#a41423"}}>
               <img src={benefit.icon} alt={benefit.title} width={60} />
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"white"}}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" sx={{color:"white"}}>
                {benefit.description}
              </Typography>
            </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConfirmationBenefits;

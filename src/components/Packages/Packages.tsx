import {
  Card, CardContent, Typography,Button, Chip, Divider, Stack
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';

const packages = [
  {
    name: 'Esencia',
    level: 'Básico',
    features: [
      'Portada personalizada (foto o diseño)',
      'Información del evento (fecha, lugar, horario)',
      'Link de ubicación (Google Maps)',
      'Confirmación por WhatsApp',
      'Canción favorita'
    ],
    badge: 'Ideal para comenzar',
    color: 'success'
  },
  {
    name: 'Memorias',
    level: 'Intermedio',
    features: [
      'Todo lo de Esencia',
      'Nombres de padres y padrinos',
      'Código de vestimenta',
      'Cuenta regresiva',
      'Itinerario del evento',
      'Mesa de regalos',
      'Frase personalizada',
      'Galería de fotos (hasta 10)',
      'Confirmación por WhatsApp'
    ],
    badge: 'Más vendido',
    color: 'warning'
  },
  {
    name: 'Celebra+',
    level: 'Avanzado',
    features: [
      'Todo lo de Memorias',
      'Sistema web de confirmaciones'
    ],
    badge: 'Recomendado',
    color: 'info'
  },
  {
    name: 'Código QR',
    level: 'Premium',
    features: [
      'Todo lo de Celebra+',
      'Código QR personalizado'
    ],
    badge: 'Completo',
    color: 'secondary'
  }
];

// const featureList = [
//   'Portada personalizada',
//   'Información del evento',
//   'Ubicación',
//   'Confirmación WhatsApp',
//   'Canción',
//   'Nombres de padres/padrinos',
//   'Código vestimenta',
//   'Cuenta regresiva',
//   'Itinerario',
//   'Mesa de regalos',
//   'Frase personalizada',
//   'Galería de fotos',
//   'Confirmación web',
//   'Código QR'
// ];

// const packageInclusion = [
//   ['Esencia',      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
//   ['Memorias',     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
//   ['Celebra+',     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
//   ['Código QR',    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
// ];

const Packages = () => {
  return (
      <Grid container spacing={2}  paddingY={2}>
      <Typography variant="h4" mb={4} textAlign="center" className='cinzel-700' color='primary'>Nuestros Paquetes</Typography>
   
        {packages.map((pkg) => (
          <Grid size={{xs:12, sm:6, md:3}}  key={pkg.name}>
            <Card>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography className="dm-serif-display-regular" variant="h6">{pkg.name}</Typography>
                  <Chip label={pkg.badge} color="secondary" size="small" />
                </Stack>
                <Typography variant="body2" color="text.secondary" mb={2}>{pkg.level}</Typography>
                <Divider sx={{ mb: 2 }} />
                <ul>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <Typography variant="body2"><CheckIcon fontSize="small" /> {feature}</Typography>
                    </li>
                  ))}
                </ul>
                <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                  Ver Modelo
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
{/*       
 <Grid size={{xs:12, sm:12, md:12}}>
      <Typography variant="h5" mt={8} mb={2} textAlign="center" className='cinzel-700' color='primary'>Comparativa de características</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Características</TableCell>
              {packageInclusion.map(([name]) => (
                <TableCell key={name as string} align="center"><strong>{name}</strong></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {featureList.map((feature, i) => (
              <TableRow key={feature}>
                <TableCell>{feature}</TableCell>
                {packageInclusion.map(([, inclusions], j) => (
                  <TableCell key={j} align="center">
                    {inclusions[i] ? <CheckIcon color="success" /> : ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid> */}
      </Grid>
  );
};

export default Packages;

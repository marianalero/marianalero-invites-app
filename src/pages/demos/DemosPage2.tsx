import { Button, Container, Typography,Card, CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderHome from '../../layouts/headerHome';
import Footer from "../../components/Footer/Footer";

const DemosPage  = () => {
    const modelos = [
    {
        id: 1,
        titulo: 'Celebra+',
        nombres: 'Elena Marai y Jose Carlos',
        imagen: 'images/Demo1.png',
        link: '/demos/1?number=2'
    },
    {
        id: 2,
        titulo: 'Memorias',
        nombres: 'Selene y Juan Carlos',
        imagen: 'images/Demo2.png',
        link: '/demos/2?number=2'
    },
    {
        id: 3,
        titulo: 'Celebra+',
        nombres: 'Sin fotografías',
        imagen: 'images/Demo3.png',
        link: '/demos/3?number=2'
    },
    {
        id: 4,
        titulo: 'Esencia',
        nombres: 'Baby Shower Alondra',
        imagen: 'images/Demo4.png',
        link: '/demos/baby-shower'
    },
    // puedes agregar más modelos aquí
    ];
    return (
        <><HeaderHome></HeaderHome>
          <Container maxWidth="md">
        <Grid container  padding={2} >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
                <Typography typography={"h2"} color='primary' textAlign={"center"} className='cinzel-400'>Modelos</Typography>
            </Grid>     
        {modelos.map((modelo) => (
            <Grid key={modelo.id} size={{ xs: 6, sm: 4, md: 4, lg: 4 }} >
           <Card
                sx={{
                    maxWidth: 250,
                    textAlign: 'center',
                    backgroundColor: '#f2eadd',
                    overflow: 'visible'
                }}
                elevation={0}
                >
                <CardMedia
                    component="img"
                    image={modelo.imagen}
                    alt={modelo.nombres}
                    sx={{
                    width: '100%',
                    }}
                />
                <CardContent sx={
                    {
                        padding:"0px"
                    }
                }>
                    <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Cinzel',
                        fontWeight: 'bold',
                        color: '#a41423',
                        mt: 2
                    }}
                    >
                        Modelo<br></br>
                  {modelo.titulo}
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Montserrat',
                        color: '#a41423',
                        mb: 2
                    }}
                    >
               {modelo.nombres}
                    </Typography>
                    <Button
                    variant="contained"
                    href={modelo.link}
                    sx={{
                        backgroundColor: '#a41423',
                        color: '#fff',
                        borderRadius: 8,
                        textTransform: 'none',
                        px: 3,
                        fontFamily: 'Montserrat',
                        '&:hover': {
                        backgroundColor: '#b3151d'
                        }
                    }}
                    >
                    Ver Modelo
                    </Button>
                </CardContent>
                </Card>
            </Grid>
        ))}
      </Grid>
        </Container>
        <Footer />
        </>
    )
}
export default DemosPage;
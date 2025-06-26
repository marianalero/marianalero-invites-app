import { Box, Typography ,Button, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Image } from 'react-bootstrap';
import HeaderHome from '../../layouts/headerHome';
import slide3 from './../../assets/slides/prinicpal.png';
import logo from './../../assets/logos/2.png';
import Footer from '../../components/Footer/Footer';
import invitacion from './../../assets/iconos/17.svg';
import confirm from './../../assets/iconos/18.svg';
import register from './../../assets/iconos/19.svg';
import responsive from './../../assets/iconos/20.svg';
import Packages from '../../components/Packages/Packages';
import Seo from '../../components/Seo/Seo';
import { APP_URl } from '../../config';
const Home = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <>
        <Seo
            title="Mariana Lero "
            description="Invitaciones Digitales"
            url={APP_URl}
            />
        <HeaderHome></HeaderHome>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"} paddingX={4} paddingY={4}>
                <Grid size={{xs:12,sm:6,md:6,lg:6}}>
                    <Typography typography={"h4"} color='primary' textAlign={"center"} className='cinzel-400'>Tu evento, tu estilo</Typography>
                    <div className='d-flex justify-center'>
                    <Image className='logo-home' src={logo} rounded  />
                    </div>
                    <div className='d-flex justify-center'>
                    <Button sx={{width:"200px",marginTop:2}} href='/demos' variant='contained' color='secondary'>Ver Modelos</Button>
                    </div>
                </Grid>
                <Grid size={{xs:12,sm:6,md:6,lg:6}} display={"flex"} justifyContent={"center"}>
                  <Image src={slide3} style={{height: isSmallScreen ? "50vh" : "calc(100vh - 100px)"}}></Image>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                    <Box
                        sx={{
                            bgcolor: '#f2eadd',
                            py: 8,
                            px: 3,
                            fontFamily: 'Montserrat, sans-serif',
                            borderRadius: "16px !important",
                        }}
                        >
                       
                            <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'Cinzel, serif',
                                color: '#a41423',
                                textAlign: 'center',
                                mb: 6,
                            }}
                            >
                            ¿Por qué elegir nuestras invitaciones digitales?
                            </Typography>

                            <Grid container spacing={4} justifyContent="center">
                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={invitacion} alt="Diseño único" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    Diseño único
                                </Typography>
                                <Typography>
                                    Personalizamos tu invitación para reflejar tu estilo y el de tu evento, con detalles elegantes y modernos.
                                </Typography>
                                </Box>
                            </Grid>

                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={confirm} alt="Confirmación integrada" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    Confirmación integrada
                                </Typography>
                                <Typography>
                                    Los invitados pueden confirmar su asistencia fácilmente desde cualquier dispositivo.
                                </Typography>
                                </Box>
                            </Grid>

                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={register} alt="Control de invitados" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    Control de invitados
                                </Typography>
                                <Typography>
                                    Accede a un panel donde podrás ver quién confirmó, quién falta y otros detalles importantes.
                                </Typography>
                                </Box>
                            </Grid>
{/* 
                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={locations} alt="Ubicación y horarios" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    Ubicaciones y horarios
                                </Typography>
                                <Typography>
                                    Incluye mapa, itinerario y horarios claros para cada parte del evento, con diseño visualmente atractivo.
                                </Typography>
                                </Box>
                            </Grid> */}
{/* 
                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={gifts} alt="Mesa de regalos" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    Mesa de regalos
                                </Typography>
                                <Typography>
                                    Ofrece la opción de mesa de regalos, cuenta bancaria o links para facilitar la aportación de tus invitados.
                                </Typography>
                                </Box>
                            </Grid> */}

                            <Grid size={{xs:12,sm:6,md:6,lg:4}} >
                                <Box textAlign="center">
                                <img src={responsive} alt="Accesible en cualquier dispositivo" width={60} />
                                <Typography variant="h6" sx={{ mt: 2, color: '#a41423' }}>
                                    100% digital
                                </Typography>
                                <Typography>
                                    Tus invitados recibirán la invitación directamente por WhatsApp, email o redes sociales.
                                </Typography>
                                </Box>
                            </Grid>
                            </Grid>
                        </Box>
                
                 </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
  <Packages></Packages>
                    </Grid>
            </Grid>
        </Box>
        <Footer></Footer>
        </>
    )
}
export default Home;
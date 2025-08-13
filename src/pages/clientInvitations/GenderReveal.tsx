import { Box, Typography } from "@mui/material";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";

const GenderReveal = () => {
    const COLOR_THIRD = "#5771a2";
    const COLOR_SECONDARY = "#d7727a";
    const COLOR_PRIMARY = "#ad7f57";
    const MAIN_TYPO = "gistesy";
    const BODY_TYPO = "roboto-400";
    const URL_IMAGES = `${URL_REPO}gender-reveal/`;
    return(
          <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
              <div  style={{backgroundImage:`url('${URL_IMAGES}4.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw"}}>
                     <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"left"}  typography={"h1"} className={`${MAIN_TYPO}`} sx={{color:COLOR_PRIMARY}}>¿Boy</Typography>

                     </Fade>
                     <div  style={{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}22.png`}  style={{width: "100vw"}}/>
                         </Fade>
                     
                     </div>
                     <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h2"} className={`great-vibes-regular`}  sx={{color:COLOR_PRIMARY}}>or</Typography>
                     </Fade>
                    <div  style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}23.png`}  style={{width: "100vw"}} />
                         </Fade>
                     
                     </div>
                     <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"right"}  typography={"h1"} className={`${MAIN_TYPO}`}  sx={{color:COLOR_PRIMARY}}>Girl?</Typography>

                     </Fade>
                      <Fade direction="up" triggerOnce={true} >
                        <Typography style={{paddingTop:"10vh"}}  textAlign={"center"}  typography={"h4"} sx={{color:COLOR_PRIMARY, fontFamily: `'DM Serif Display', serif`,}}>Baby Rodríguez Lerma</Typography>

                     </Fade>
                </div>
                
               </div>
               <div  style={{backgroundImage:`url('${URL_IMAGES}3.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover", }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY  }}>
                             Pronto habrá una nueva sonrisa iluminando nuestras vidas
                            </Typography>
                         </Fade>
                       
              

                   
                        </Grid>
                         <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' ,color:COLOR_PRIMARY}}>
                                    Queremos invitarlos para que nos acompañen a descrubir el género de nuestro bebé
                                </Typography>
                            </Fade>
                    </Grid>
                    
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2}>
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        sx={{
                            fontFamily: `'DM Serif Display', serif`,
                            color: COLOR_PRIMARY,
                            fontSize: '50px',
                        }}
                        >
                        31 <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_PRIMARY }}>de</Box> Agosto
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                        marginTop={1}
                        sx={{
                            fontFamily: `'DM Serif Display', serif`,
                            color: COLOR_PRIMARY,
                            fontSize: '50px',
                        }}
                        >
                        <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_PRIMARY }}>del</Box> 2025
                        </Typography>
                        </Fade>
                    </Grid>

                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY }} >
                        <b>5 PM</b> a <b>9 PM</b>
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple bodyTypo={BODY_TYPO} textColor={COLOR_PRIMARY} eventName="Lugar:" mainTypo="dm-serif-display-regular" locationName="Eventos Nube Rosa" address="Blvd. De Los Puentes Manzana 5 L32, Haciendas Real del Catorce, El Real del Catorce, Son." color={"#dfad87"} href={"https://maps.app.goo.gl/ZBi8PQ5YT2g3x4hS6"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    
                    
                    </Grid>
               </div>
                <div  style={{backgroundImage:`url('${URL_IMAGES}2.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",}} >
              <Grid container spacing={2} justifyContent="center" padding={2}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                     <Fade direction="up"  triggerOnce={true}>
                        <Adornment image={`${URL_IMAGES}adornos.png`} width={"350"}/>
                     </Fade>
                        
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Grid container spacing={2} justifyContent="center">
                        
                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center"  padding={2}>
                             <Fade direction="up"  triggerOnce={true}>
                                <Typography
                                    className={BODY_TYPO}
                                    sx={{ fontSize: '14px', color:COLOR_SECONDARY }}
                                    >
                                    Si crees que soy niña vestir de color rosa y traer toallitas 
                                </Typography>
                             </Fade>
                        
                        </Grid>

                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center"  padding={2}>
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography
                                    className={BODY_TYPO}
                                    sx={{ fontSize: '14px', color:COLOR_THIRD }}
                                    >
                                    Si crees que soy niño vestir de color azul y traer pañales(e3)
                                </Typography>
                             </Fade>
                        
                         
                        </Grid>
                    </Grid>
                </Grid>
                 <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingTop={2}>
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '50px', fontWeight: 'bold', color:COLOR_PRIMARY }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                    </Grid>
              </Grid>
              </div>
          </div>
    )
}
export default GenderReveal;
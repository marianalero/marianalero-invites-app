import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import RSVPSimple from "../../components/RSVP/RSVPSimple";
const BSSophia = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#f74080";
    const COLOR_SECONDARY = "#f6904f";
    const MAIN_TYPO = "gistesy";
    const SECOND_TYPO = "the-seasons";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}bs-sophia/`;
   
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}portada.png`,
        `${URL_IMAGES}14.png`,
        `${URL_IMAGES}15.png`,
        `${URL_IMAGES}16.png`,
        `${URL_IMAGES}17.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "Bridal Shower Sophia";
    }, []);
    useEffect(() => {
        imageList.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // si falla, igual contamos
        });
    }, []);

  const handleImageLoad = () => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current === imageList.length) {
      setIsLoading(false); // cuando todas las imágenes han cargado
    }
  };

    // Loader
    if (isLoading) {
        return (
        <Box
            sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            flexDirection: "column"
            }}
        >
            <CircularProgress sx={{ color: COLOR_PRIMARY }} />
            <Box mt={2} sx={{ fontFamily: "Montserrat" }}>
                Cargando invitación...
            </Box>
        </Box>
        );
    }

    return(
          <div style={{backgroundColor:"#FFFF",maxWidth: '100%',overflowY:"auto",}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}portada.png` : `${URL_IMAGES}hor.png`}')`,backgroundPositionX: "50%",    minHeight: isSmallScreen?"70vh":"100vh",backgroundSize: isSmallScreen ?"cover": "contain",display:"grid",position: "relative" }} >
                
                <div style={{margin:"5vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative", backgroundColor:"#fff4de"}}>
                     <div  style={{position:"absolute",top:"5%",left: isSmallScreen?"90%": "95%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}14.png`}  style={{width: isSmallScreen ? "40vw" : "20vw"}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"25%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                              <Typography  textAlign={"center"}  typography={"h3"} className={SECOND_TYPO}  sx={{color:COLOR_SECONDARY}}> Bridal Shower</Typography>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"45%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                              <Typography  textAlign={"center"}  typography={"body1"} className={BODY_TYPO}> en honor a</Typography>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"65%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h1"} className={MAIN_TYPO}  sx={{color:COLOR_PRIMARY}}> Sophia</Typography>
                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"50%",left:"-5%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}15.png`}  style={{width: isSmallScreen ? "30vw" : "20vw"}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"95%",left:"10%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}17.png`}  style={{width: isSmallScreen ?"40vw" : "20vw"}}/>
                         </Fade>
                     
                     </div>
                    <div  style={{position:"absolute",top: isSmallScreen?"97%":"90%",left: isSmallScreen?"70%":"95%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}16.png`}  style={{width: isSmallScreen ? "30vw":"15vw"}}/>
                         </Fade>
                     
                     </div>
                    
        
                </div>
                
               </div>
               <div  style={{backgroundImage:`url('${URL_IMAGES}fondo.png')`,backgroundPositionX: "50%",    minHeight: "80vh",backgroundSize:"cover",paddingTop:"70px" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem'}}>
                             
                                Antes de decir 'Sí, acepto', celebremos a la futura novia con un día especial lleno de amor y amistad.
                            </Typography>
                         </Fade>

                        </Grid>
                         
                    
                  <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                     <Box
                        sx={{
                         
                            color: "white",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >
                        <Grid container direction="column" alignItems="center" spacing={1}>
                            {/* Mes */}
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Typography align="center" variant="h5" sx={{ letterSpacing: 2,color:COLOR_SECONDARY }} className={SECOND_TYPO}>
                                Noviembre
                            </Typography>
                            </Grid>

                            {/* Día con separadores */}
                            <Grid
                            size={{xs:12,sm:12,md:12,lg:12}}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                            >
                            <Typography variant="h5" sx={{ letterSpacing: 2, color:COLOR_PRIMARY }} className={SECOND_TYPO}>
                                Martes
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid #f6904f",
                                height: "30px",
                                color:COLOR_PRIMARY
                                }}
                            />

                            <Typography
                                variant="h3"
                                sx={{ fontWeight: "bold", mx: 1 , color:COLOR_PRIMARY}}
                                className={SECOND_TYPO}
                            >
                                11 
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid #f6904f",
                                height: "30px",
                                }}
                            />

                            <Typography variant="h5" sx={{ letterSpacing: 2, color:COLOR_PRIMARY, minWidth: isSmallScreen ? "60px" : "60px" }} className={SECOND_TYPO}>
                            2025
                            </Typography>
                            </Grid>

                            {/* Año */}
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Typography align="center" variant="h5" sx={{ letterSpacing: 2, color:COLOR_SECONDARY }} className={SECOND_TYPO}>
                                5 PM a 9 PM
                            </Typography>
                            </Grid>
                        </Grid>
                        </Box>
                  </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple bodyTypo={BODY_TYPO}  eventName="Lugar:" mainTypo={SECOND_TYPO} locationName="El Jito Eventos" address="Cjon. Rosales S/N, El Jito, Hermosillo, Son." color={COLOR_SECONDARY} href={"https://maps.app.goo.gl/UUSoF12PMZGVHERo9"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            variant="h5"
                            className={SECOND_TYPO}
                            sx={{  fontWeight: 'bold', color:COLOR_PRIMARY }}
                        >
                            Regalo Sugerido
                        </Typography>
                         
                         </Fade>
                        
                    </Grid>
                    <Grid size={{xs:5,sm:5,md:5,lg:5}} textAlign={"left"}  >
                     <Typography
                         variant="body1"
                            className={BODY_TYPO}
                        align="center"
                        sx={{fontSize: '1.25rem' }}

                        >
                            
                            $350 <br></br> Invitadas
                        </Typography>
                    </Grid>
                    <Grid size={{xs:2,sm:2,md:2,lg:2}} textAlign={"center"}  >
                        <img src={`${URL_IMAGES}sobre.svg`}  style={{height: "45px"}}/>
                    </Grid>
                    <Grid size={{xs:5,sm:5,md:5,lg:5}} textAlign={"right"}  >
                          <Typography
                         variant="body1"
                            className={BODY_TYPO}
                        align="center"
                        sx={{fontSize: '1.25rem' }}

                        >
                            
                            $500 <br></br> Organizadoras
                        </Typography>
                    </Grid>
                    </Grid>
               </div>
   
                <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} >
                         <Fade direction="up"  triggerOnce={true} >
                             <RSVPSimple 
                                colorButton={COLOR_PRIMARY}
                                bgColor={"#fff4de"}
                                mainTypo={MAIN_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={6}
                                dateLine={new Date(2025, 8, 30)}
                                color={"white"}
                                invitationId={100}
                                qrActive={false} 
                                textColor={""}                           
                                >
                                
                            </RSVPSimple>
                         </Fade>
                     </Grid>
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" marginTop={4} marginBottom={2} >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            variant="h4"
                            className={MAIN_TYPO}
                            sx={{ fontSize: '45px',  color:COLOR_SECONDARY }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                    </Grid>
                </Grid>

             
                
               <FooterInvites bgColor="#fff4de" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default BSSophia;
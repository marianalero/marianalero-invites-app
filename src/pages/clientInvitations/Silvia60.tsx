import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
const Silvia60 = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#f9f1d9";
    const MAIN_TYPO = "gistesy";
    const BODY_TYPO = "roboto-400";
    const URL_IMAGES = `${URL_REPO}60Silvia/`;
   
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}1.png`,
        `${URL_IMAGES}2.png`,
        `${URL_IMAGES}60.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "60 Silvia";
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
          <div style={{backgroundColor:"#000000",maxWidth: '100%',overflowY:"auto",}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}1.png` : `${URL_IMAGES}hor.png`}')`,backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     
                     <div  style={{position:"absolute",top:"30%",left:"55%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}60.png`}  style={{width: `${isSmallScreen ? "70vw" : "25vw"}`}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h1"} className={`gistesy`}  sx={{color:COLOR_PRIMARY}}>Silvia</Typography>
                     </Fade>
                     </div>
                  
                    
        
                </div>
                
               </div>
               <div  style={{backgroundImage:`url('${URL_IMAGES}2.png')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY  }}>
                             
                                Nunca es tarde para celebrar la Vida y hoy celebraré mis 60 años  en compañía de todos Ustedes
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
                            <Typography align="center" variant="subtitle2" sx={{ letterSpacing: 2,color:COLOR_PRIMARY }}>
                                SEPTIEMBRE
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
                            <Typography variant="body2" sx={{ letterSpacing: 2, color:COLOR_PRIMARY }}>
                                SÁBADO
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid white",
                                height: "30px",
                                color:COLOR_PRIMARY
                                }}
                            />

                            <Typography
                                variant="h3"
                                sx={{ fontWeight: "bold", mx: 1 , color:COLOR_PRIMARY}}
                            >
                                20
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid white",
                                height: "30px",
                                }}
                            />

                            <Typography variant="body2" sx={{ letterSpacing: 2, color:COLOR_PRIMARY }}>
                                8 PM
                            </Typography>
                            </Grid>

                            {/* Año */}
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Typography align="center" variant="subtitle2" sx={{ letterSpacing: 2, color:COLOR_PRIMARY }}>
                                2025
                            </Typography>
                            </Grid>
                        </Grid>
                        </Box>
                  </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple  classButtonName="btn-gold" bodyTypo={BODY_TYPO} textColor={COLOR_PRIMARY} eventName="Lugar:" mainTypo="dm-serif-display-regular" locationName="Eventos Amaría" address="Ramón Valdez Ramírez,1004-1415, Col Ladrilleros" color={"#dfad87"} href={"https://maps.app.goo.gl/trrjeJ88gmCDtXeK8"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
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
                
               <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default Silvia60;
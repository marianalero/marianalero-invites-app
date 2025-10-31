import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect,useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import EventCard from "../../components/EventCard/EventCard";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
const BauIvanna = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#b08a3c";
    const COLOR_THIRD ="#b2cbb1";
    const MAIN_TYPO = "pinyon-script-regular";
    const BODY_TYPO = "roboto-400 to-upper";
    const URL_IMAGES = `${URL_REPO}bautizo-ivanna/`;
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}fondo2.png`,
        `${URL_IMAGES}fondo3.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders


        

        
    useEffect(() => {
       
    }, []);
    useEffect(() => {
        document.title = "Bautizo Ivanna";
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
    const eventCards: EventCardProps[] = [
                {
                    eventName: "Misa Religiosa",
                    date: new Date(2025, 10, 15, 11, 0, 0),
                    locationName: "Parroquia Nuestra Señora del Rosario de Fátima",
                    address: "Calle Guadalupe Victoria, San Benito, Hermosillo, Son.",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:`${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    href: "https://maps.app.goo.gl/sDxCMv7Yvnc9zFb69",
                    fontSize:"45px",
                    colorButton: COLOR_PRIMARY,
                    
                },
                {
                    eventName: "Comida de Celebración",
                    date: new Date(2025, 10, 15, 18, 0, 0),
                   
                    locationName: "Ubicación",
                    address: "Inalámbrica 21, San Benito, Hermosillo, Son.",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:  `${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    fontSize:"40px",
                    href: "https://maps.app.goo.gl/3WMoZbBKbe8XkocP9",
                    colorButton: COLOR_PRIMARY,
                   
                },
        ];
          const sponsors:PairSponsors[] = [
                    {
                        sponsorOne: { name: "Mariana Lerma y Hector Rodríguez" },
                    },
                    {
                        sponsorOne: { name: "Jose Antonio Garcia y Mayra Alexandra Ruelas" },
                    },
                    
                ];
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
          <div style={{backgroundColor:"#ffffff",maxWidth: '100%',overflowY:"auto",    overflowX: "hidden"}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}portada.png` : `${URL_IMAGES}horz2.png`}')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,marginBottom:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative", backgroundColor:"rgb(178, 203, 177,.2)"}}>
                  
                   
                     <div  style={{position:"absolute",top:"50%",left:`${isSmallScreen ? "50%" : "48%"}`,transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                                <div style={{display:"flex",justifyContent:"center"}}>
                                      <img src={`${URL_IMAGES}cruz.png`}  style={{height: "85px"}}></img>
                                </div>
                          
                            <Typography  textAlign={"center"}  typography={"h1"} className={MAIN_TYPO}  sx={{color:COLOR_PRIMARY, fontSize:"6rem"}}>Ivanna</Typography>
                            <Typography  textAlign={"center"}  typography={"body1"} className={BODY_TYPO}  sx={{color:COLOR_PRIMARY, fontSize:"1.5rem"}}>Mi Bautizo</Typography>
                         </Fade>
                     </div>
                  
                    
        
                </div>
                
               </div>
               <div  style={{backgroundPositionX: "50%",    minHeight: "50vh",backgroundSize:"cover",paddingTop:"70px", paddingBottom:"70px", backgroundColor:"rgb(164, 184, 88,.1)" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ color:COLOR_PRIMARY  }}>
                             
                             Con tu amor y protección, Señor, acogemos la vida que nos has regalado.
Bendice y guía siempre a
                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h3" className={MAIN_TYPO} sx={{color:COLOR_THIRD  }}>
                             
                               Ivanna Valentina Rojas

                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ color:COLOR_PRIMARY  }}>
                             
                            en su camino lleno de fe y esperanza.
                            </Typography>
                         </Fade>

                        </Grid>
                        <Grid>
                                    <Fade direction="up" >
                                        <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
                                
                                    </Fade>
                                </Grid>
                        </Grid> 
                  </div>  
                  <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px" }} >
                    <Grid container justifyContent="center" padding={2}>
                        <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                            <Box
                            textAlign="center"
                            sx={{
                                width: "100%",
                                mt: 6,
                                mb: 6,
                            }}
                            >

                            <Grid container spacing={2} justifyContent="center" mb={3}>
                            
                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography className={`${BODY_TYPO} tex-`}
                                    sx={{lineHeight:2}}
                                >
                                  Con inmensa alegría y a nombre de mis papás,
                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                                    sx={{fontSize: 45 ,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                   Alejandra Rodríguez

                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography  variant="h1" className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 45,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                Alber Rojas


                                </Typography>
                                </Fade>
                                </Grid>
                            </Grid>
                            
                            <Grid container justifyContent="center">
                                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                                <Fade direction="up" >
                                <Typography
                                    className={BODY_TYPO}
                                    sx={{ mt: 2 }}
                                >
                                  Te invito a formar parte de esta celebración para recibir la luz del señor en mi corazón.
                                </Typography>
                                </Fade>
                                </Grid>
                            
                            </Grid>
                            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                                    
                                <Grid>
                                    <Fade direction="up" >
                                        <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
                                
                                    </Fade>
                                </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                  </div>
                  <CountDownSimple 
                eventDate={new Date(2025, 10, 9)}
               format="dddd DD MMMM"
                typoHeader={`dm-serif-display-regular`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_PRIMARY}
                circleBgColor="white"
                bgColor="rgb(178, 203, 177,.2)"
                fontSize="2rem"
                bgImage={``} >  
            </CountDownSimple>
              <WeddingSponsor bgColor="rgb(246,237,219,.3)" headerFontSize="45px" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} sponsors={sponsors} height={"60vh"} color={COLOR_PRIMARY} addormentEnd={`${URL_IMAGES}adornos.svg`}></WeddingSponsor>
          
           <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px", backgroundImage: `url('${URL_IMAGES}fondo3.png')` }} > 
           <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} paddingTop={5} paddingX={2}>
                <Typography align={"center"}  className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 40 ,lineHeight:1, color:COLOR_PRIMARY }}
                                >
                               Con tu presencia este día será aún más especial.
                </Typography>
            </Grid>
             </div> 
                 <div style={{height:50}}></div>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
          </div>
    )
}
export default BauIvanna;
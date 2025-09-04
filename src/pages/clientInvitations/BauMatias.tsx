import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import EventCard from "../../components/EventCard/EventCard";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
const BauMatias = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#875a33";
    const COLOR_SECONDARY ="#afcbec";
    const COLOR_THIRD ="#a4b858";
    const MAIN_TYPO = "tangerine-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}bautizo-matias/`;
   
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}fondo2.png`,
        `${URL_IMAGES}fondo3.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "Bautizo Matías";
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
                    date: new Date(2025, 10, 15, 17, 0, 0),
                    locationName: "PENDIENTE",
                    address: "PENDIENTE",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:`${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    href: "",
                    fontSize:"45px",
                    colorButton: COLOR_PRIMARY,
                    
                },
                {
                    eventName: "Recepción",
                    date: new Date(2025, 10, 15, 21, 0, 0),
                   
                    locationName: "Terraza La Mirada",
                    address: "Los Lagos Club Campestre",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:  `${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    fontSize:"45px",
                    href: "https://maps.app.goo.gl/pWktgXhntUQDoJuv7",
                    colorButton: COLOR_PRIMARY,
                   
                },
        ];
          const sponsors:PairSponsors[] = [
                    {
                        sponsorOne: { name: "Jhoanna Guzmán Anaya y Jorge Luis Campa" },
                    },
                    {
                        sponsorOne: { name: "Fernando Rubio y María José Valenzuela Flores " },
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
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}fondo.png` : `${URL_IMAGES}horz.png`}')`,backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     <div  style={{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                       
                        <Typography  textAlign={"center"}  typography={"body1"} className={BODY_TYPO}  sx={{color:COLOR_PRIMARY}}>Mi Bautizo</Typography>
                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}icono.svg`}  style={{width: `${isSmallScreen ? "25vw" : "5vw"}`}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"60%",left:`${isSmallScreen ? "45%" : "48%"}`,transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h1"} className={MAIN_TYPO}  sx={{color:COLOR_PRIMARY}}>Matías</Typography>
                       
                     </Fade>
                     </div>
                  
                    
        
                </div>
                
               </div>
               <div  style={{backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",paddingTop:"70px", backgroundColor:"rgb(164, 184, 88,.2)" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '.80rem',color:COLOR_PRIMARY  }}>
                             
                              Señor, tú que eres la luz del mundo, ilumina a
                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h2" className={MAIN_TYPO} sx={{color:COLOR_THIRD  }}>
                             
                               Matías Flores Guzmán

                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '.80rem',color:COLOR_PRIMARY  }}>
                             
                              Guíala con la luz de la fe, protégela bajo tu sombra y envuelvela con el  manto de tu amor<br></br>
							Vela sus días y sus noches para que cada mañana obtengas para ella, el sol de la alegría y cada noche el sueño de la paz<br></br>
							Derrama señor tu infinita bondad en este sacramento del bautizmo<br></br>
							Envía un ángel a su lado para que cierre el paso a toda enfermedad y a todo mal y la encamine por el sendero de la salud y el bienestar
                            </Typography>
                         </Fade>

                        </Grid>
                        <Grid>
                                    <Fade direction="up" >
                                        <Adornment image={`${URL_IMAGES}adornos/1.svg`} width={"250px"} />
                                
                                    </Fade>
                                </Grid>
                        </Grid> 
                  </div>  
                  <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px", backgroundImage: `url('${URL_IMAGES}fondo2.png')` }} >
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
                                <Typography variant="h6" className={`${BODY_TYPO} tex-`}
                                    sx={{lineHeight:2}}
                                >
                                   A nombre de mis padres
                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                                    sx={{fontSize: 45 ,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                   Paola Guzmán Anaya

                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography  variant="h1" className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 45,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                Yazmin Irasema Avila Pacheco


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
                                        <Adornment image={`${URL_IMAGES}adornos/2.svg`} width={"250px"} />
                                
                                    </Fade>
                                </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                  </div>
                  <CountDownSimple 
                eventDate={new Date(2025, 10, 15)}
               
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_SECONDARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white"
                bgColor="rgb(175, 203, 236,.3)"
                bgImage={``} >  
            </CountDownSimple>
              <WeddingSponsor bgColor="rgb(246,237,219,.5)" headerFontSize="60px" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} sponsors={sponsors} height={"60vh"} color={COLOR_PRIMARY} addormentEnd={`${URL_IMAGES}adornos/3.svg`}></WeddingSponsor>
          
           <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px", backgroundImage: `url('${URL_IMAGES}fondo3.png')` }} > 
           <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            <Grid size={{xs:12,sm:12,md:12,lg:12}} paddingTop={5}>
                <Typography align={"center"}  className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 45 ,lineHeight:1, color:COLOR_PRIMARY }}
                                >
                               Con tu presencia este día será aún más especial.
                </Typography>
            </Grid>
            </Grid>
             </div> 
                 <div style={{height:50}}></div>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default BauMatias;
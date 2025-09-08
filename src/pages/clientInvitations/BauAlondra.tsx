import { Box, CircularProgress, Typography } from "@mui/material";

import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import Cover from "../../components/Cover/CoverImage/Cover";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import EventCard from "../../components/EventCard/EventCard";
const BauAlondra = () => {

    const COLOR_PRIMARY = "#f4bfbb";
    const COLOR_SECONDARY ="#c8ad78";
    const MAIN_TYPO = "alex-brush-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}bautizo-alondra/`;
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}Portada.jpg`,
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}fondo2.png`,
        `${URL_IMAGES}enmedio.jpg`,
        `${URL_IMAGES}enmedio2.jpg`,
          `${URL_IMAGES}contador.jpg`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "Bautizo Alondra";
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
                    date: new Date(2025, 9, 4, 10, 0, 0),
                    locationName: "Parroquia Santa Eduwiges",
                    address: "C. Israel González S/N, Modelo, Hermosillo, Son.",
                    size: 6,
                    color: COLOR_SECONDARY,
                    icon: ``,
                    mainTypo:`${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    href: "https://maps.app.goo.gl/E86knwriQDBsVMjU6",
                    fontSize:"45px",
                    colorButton: COLOR_SECONDARY,
                    
                },
                {
                    eventName: "Recepción",
                    date: new Date(2025, 9, 4, 17, 0, 0),
                   
                    locationName: "Eventos El Palmar",
                    address: "Calle Simón Bley esq. Progreso #223, Hermosillo, Mexico",
                    size: 6,
                    color: COLOR_SECONDARY,
                    icon: ``,
                    mainTypo:  `${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    fontSize:"45px",
                    href: "https://maps.app.goo.gl/YZButXAcmqtcbk6S7",
                    colorButton: COLOR_SECONDARY,
                   
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
              <Cover
                bgImage={`${URL_IMAGES}Portada.jpg`}
                bgImage2={`${URL_IMAGES}Portada.jpg`}
                  weddingDate="04.10.2025"
                 subtitle="Mi Bautizo"
                  brideName="Alondra"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"white"}
                  hideText={false}
                  ourWeddingStart={false}
                overlay={true}
                
              >
            </Cover>
               <div  style={{backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",paddingTop:"5vh",paddingBottom:"5vh", backgroundImage:`url('${URL_IMAGES}fondo.png')`, display:"flex",justifyContent:"center"}} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2} bgcolor={"rgb(255, 255, 255, .5);"}>
                      
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" marginTop={"70px"} >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1rem',color:COLOR_SECONDARY  }}>
                             
                              Con tu bendición, Señor, recibimos el regalo de la vida.
                            Ilumina y guía siempre a
                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h1" className={MAIN_TYPO} sx={{color:COLOR_PRIMARY  }}>
                             
                              Alondra

                            </Typography>
                         </Fade>

                        </Grid>
                         
                           <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" marginBottom={"70px"}>
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '',color:COLOR_SECONDARY  }}>
                             
                              en este nuevo caminar en tu gracia.
                            </Typography>
                         </Fade>

                        </Grid>
                       
                        </Grid> 
                  </div>  
                   <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpg`} bgSize="contain"></ImageMiddle>
                  <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px",  }} >
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
                                   Con inmensa alegría y a nombre de mis papás,
                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                                    sx={{fontSize: 45 ,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                   Elena Marai Lerma Rodríguez

                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography  variant="h1" className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 45,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                Jose Carlos Madrid Gil


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
                                  te invito a compartir el día en que recibiré la bendición de Dios a través del Bautizo.
                                </Typography>
                                </Fade>
                                </Grid>
                            
                            </Grid>
                            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                                    
                                <Grid>
                                    <Fade direction="up" >
                                        <Adornment image={`${URL_IMAGES}adorno.svg`} width={"250px"} />
                                
                                    </Fade>
                                </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                  </div>
                  <CountDownSimple 
                eventDate={new Date(2025, 9, 4)}
               format="dddd DD MMMM"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_SECONDARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white"
                bgColor=""
                bgImage={`url('${URL_IMAGES}contador.png')`} >  
            </CountDownSimple>
               <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>
              <Grid container spacing={2} justifyContent="center" paddingX={2} bgcolor={"rgb(247,238,231,.5)"}>
            {/* Texto inicial */}
            <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6 }}>
                <Fade direction="up" >
                <Typography
                className={BODY_TYPO}
                sx={{ fontSize: "1rem" }}
                >
               Guiando con amor y protección
                </Typography>
                </Fade>
            </Grid>

            {/* Bloque principal */}
            <Grid size={12}>
                
                <Box
                textAlign="center"
                sx={{ width: "100%", }}
                >
                <Box sx={{ mb: 6 }}>
                    {/* Título */}
                    <Fade direction="up" >
                    <Typography
                    variant="h3" className={`${MAIN_TYPO}`}
                    sx={{ fontSize: "3rem", color: COLOR_PRIMARY }}
                    >
                    Mis Padrinos
                    </Typography>
                    </Fade>
                    {/* Imagen superior */}
                   
                    {/* Primera fila de nombres */}
                    <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
                    <Grid size={{ xs: 12,md:12,lg:12}} >
                        <Fade direction="up" >
                        <Typography
                        variant="body1" className={BODY_TYPO}
                        
                        >
                       Ana Patricia Medrano Guzman <br></br> Carlos Iván Mora Villa
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid>
                        <Fade direction="up" >
                            <Adornment image={`${URL_IMAGES}adorno.svg`} width={"150px"} />
                    
                        </Fade>
                    </Grid>
                    </Grid>

                
                </Box>
                </Box>
            
            </Grid>
            </Grid>               
           <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px", backgroundImage: `url('${URL_IMAGES}fondo2.png')` }} > 
           <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            
            </Grid>

             </div> 
  
            <Grid size={{xs:12,sm:12,md:12,lg:12}} paddingTop={5} paddingX={2}>
                <Typography align={"center"}  className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 45 ,lineHeight:1, color:COLOR_PRIMARY }}
                                >
                               Con tu presencia este día será aún más especial.
                </Typography>
            </Grid>
                 <div style={{height:50}}></div>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default BauAlondra;
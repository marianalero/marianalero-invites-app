import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import RSVPSimple from "../../components/RSVP/RSVPSimple";


const BabyShowerJoseAlejandro = () => {
    
    const COLOR_SECONDARY = "#C68642";
    const COLOR_PRIMARY = "#5F6F52";
    const MAIN_TYPO = "the-seasons";
    const SECON_MAIN_TYPO = "handelson-three";
    const BODY_TYPO = "libre-baskerville";
    const URL_IMAGES = `${URL_REPO}otros/bs-jose-alejandro/`;

     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}4.png`,
        `${URL_IMAGES}1.png`,
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}3.png`,
        `${URL_IMAGES}2.png`,

    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const isSmallScreen = useMediaQuery('(max-width:600px)');
   

    useEffect(() => {
        document.title = "Baby Shower Jose Alejandro";
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
          <div style={{backgroundColor:"#FAF9F6",maxWidth: '100%',overflowY:"auto",color:"#2F2F2F"}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}fondo.png` : `${URL_IMAGES}fondo.png`}')`,backgroundPositionX: "50%", minHeight:isSmallScreen ? "60vh" : "100vh", width:"100vw", backgroundSize:"cover",display:"grid",position: "relative", backgroundRepeat:"no-repeat" }} >
                 
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     
                    <div  style={{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -50%)",width: "100%",}}>
                          <Fade direction="left" triggerOnce={true} >
                            <Typography  textAlign={"center"} variant="h2"  className={`${SECON_MAIN_TYPO}`} sx={{color:COLOR_SECONDARY,zIndex: 2,}}>Baby Shower</Typography>


                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}1.png`}  style={{width: "60vw", marginTop:"30px"}}/>
                         </Fade>
                     
                     </div>
                    
                    <div  style={{position:"absolute",top:"40%",left:"95%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}2.png`}  style={{width: "40vw"}} />
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"85%",left:"50%",transform:"translate(-50%, -50%)",    width: "100%"}}>
                          <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"center"} variant="h3"  className={`${MAIN_TYPO}`} sx={{color:COLOR_PRIMARY,zIndex: 2,}}>JOSE ALEJANDRO</Typography>
                       

                     </Fade>
                     </div>
                </div>
                
               </div>
               <div  style={{position: "relative",backgroundImage: `url('${URL_IMAGES}fondo2.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" ,paddingTop: "10vh"}} >
                     <div  style={{position:"absolute",top:"50%",left:"5%",transform:"translate(-50%, -30%) scale(-1)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}2.png`}  style={{width: "15vh"}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"30%",left:"95%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}2.png`}  style={{width: "15vh"}}/>
                         </Fade>
                     
                     </div>
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                        
                        <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem', }}>
                           En honor a <Box component="span"  className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY, fontSize: '40px' }}>Luz Mercedes</Box>  
                            </Typography>
                         </Fade>

                        </Grid>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',  }}>
                            Nuestro bebé llegará rugiendo de amor
                            </Typography>
                         </Fade>

                        </Grid>
                         <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' ,}}>
                                  Te invitamos a celebrar con nosotros esta fecha tan especial.
                                </Typography>
                            </Fade>
                    </Grid>
                    
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={MAIN_TYPO}
                        sx={{
                      
                            color: COLOR_SECONDARY,
                            fontSize: '60px',
                            lineHeight:1,
                        }}
                        >
                        17 <Box component="span"  className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY, fontSize:"40px" }}>de</Box> Mayo
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                         className={MAIN_TYPO}
                        marginTop={2}
                        sx={{
                    
                            color: COLOR_SECONDARY,
                            fontSize: '60px',
                        }}
                        >
                        <Box component="span" className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY, fontSize:"40px" }}>del</Box> 2026
                        </Typography>
                        </Fade>
                    </Grid>

                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY }} >
                        <b>9:30 AM</b> a <b>1 PM</b>
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple fontSize="2.5rem" bodyTypo={BODY_TYPO} textColor={"#2F2F2F"} eventName="Lugar:" mainTypo={SECON_MAIN_TYPO} locationName="Jardín del Río " address="Blvr. P.º Río Sonora Nte. 49, Mónaco Privada Residencial, Marsella Residencial, Hermosillo, Son." color={COLOR_SECONDARY} href={"https://maps.app.goo.gl/wKPBrpY9u9gnoKDs7"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    
                    
                    </Grid>
               {/* </div> */}
                {/* <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",}} > */}
              <Grid container spacing={2} justifyContent="center" padding={2}>

                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            fontSize={"2.5rem"}
                            className={SECON_MAIN_TYPO}
                            sx={{  fontWeight: 'bold', color:COLOR_SECONDARY }}
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
                        sx={{fontSize: '1.25rem'}}

                        >
                            
                            $350 <br></br> 
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
                        sx={{fontSize: '1.25rem'}}

                        >
                            
                            $500 <br></br> Organizadoras
                        </Typography>
                    </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                  <RSVPSimple 
                                colorButton={COLOR_PRIMARY}
                                bgColor={"#fffcf0"}
                                mainTypo={SECON_MAIN_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={6}
                                color={COLOR_SECONDARY}
                                invitationId={25}
                                qrActive={false} 
                                textColor={COLOR_PRIMARY} 
                                fontSize="2.5rem"                          
                                >
                                
                            </RSVPSimple>
            </Grid>

                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={BODY_TYPO}
                            sx={{  fontSize:20 }}
                        >
                           Nuestro pequeño reino crece… y queremos celebrarlo contigo
                        </Typography>
                         </Fade>
                        
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingX={2} >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={SECON_MAIN_TYPO}
                            sx={{ fontSize: '50px', fontWeight: 'bold', color:COLOR_SECONDARY,marginTop:"20px" }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                </Grid>
                
              </Grid>
               <div  style={{padding:0, display:"flex", justifyContent:"center"}} >
                     <img src={`${URL_IMAGES}plantas2.png`}  style={{width: "100vw"}}/>
                </div>
           
              </div>
               <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_SECONDARY}></FooterInvites>
              
          </div>
    )
}
export default BabyShowerJoseAlejandro;
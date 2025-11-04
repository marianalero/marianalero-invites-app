import { Box, CircularProgress, Dialog, DialogContent,Typography, useMediaQuery } from "@mui/material";
import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import RSVPSimple from "../../components/RSVP/RSVPSimple";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
const BabyShowerAlec = () => {
    const COLOR_THIRD = "#eeb338";
    const COLOR_SECONDARY = "#f1a26a";
    const COLOR_PRIMARY = "#67b3c6";
    const MAIN_TYPO = "calistoga-regular";
    const SECON_MAIN_TYPO = "gistesy";
    const BODY_TYPO = "roboto-400";
    const URL_IMAGES = `${URL_REPO}otros/baby-shower-alec/`;
    const URL_SONG = `${URL_REPO}canciones/Here-Comes-The-Sun-(Instrumental).mp3`;
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}4.png`,
        `${URL_IMAGES}1.png`,
        `${URL_IMAGES}portada2.png`,
        `${URL_IMAGES}3.png`,
        `${URL_IMAGES}2.png`,

    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const isSmallScreen = useMediaQuery('(max-width:600px)');
   

    useEffect(() => {
        document.title = "Baby Shower Alec";
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

   const [open, setOpen] = useState(false);
   const musicRef = useRef<MusicFabPlayerHandle>(null);
   const handleClickOpen = () => {
      setOpen(true);
   };
      
    const handleClose = () => {
        setOpen(false);
        musicRef.current?.play()
  };
    useEffect(() => {
           handleClickOpen()
        }, []);
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
          <div style={{backgroundColor:"#fefef7",maxWidth: '100%',overflowY:"auto",}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}portada2.png` : `${URL_IMAGES}horz.png`}')`,backgroundPositionX: "50%", minHeight:isSmallScreen ? "50vh" : "100vh", width:"100vw", backgroundSize:"cover",display:"grid",position: "relative", backgroundRepeat:"no-repeat" }} >
                  <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     <div  style={{position:"absolute",top:"95%",left:"50%",transform:"translate(-50%, -50%)"}}>
                          <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"left"} variant="h1"  className={`${MAIN_TYPO}`} sx={{color:COLOR_PRIMARY,zIndex: 2,}}>Alec</Typography>
                       

                     </Fade>
                     </div>
                    <div  style={{position:"absolute",top:"100%",left:"50%",transform:"translate(-50%, -50%)"}}>
                          <Fade direction="left" triggerOnce={true} >
                        

                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"90%",left:"15%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}2.png`}  style={{width: "50px"}}/>
                         </Fade>
                     
                     </div>
                    
                    <div  style={{position:"absolute",top:"90%",left:"80%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}3.1.png`}  style={{width: "50px"}} />
                         </Fade>
                     
                     </div>
                </div>
                
               </div>
               <div  style={{position: "relative" }} >
                     <div  style={{position:"absolute",top:"90%",left:"15%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}2.png`}  style={{width: "50px"}}/>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"50%",right:"10%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}4.1.png`}  style={{width: "50px"}}/>
                         </Fade>
                     
                     </div>
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                             <Typography  textAlign={"center"} variant="h3"  className={`${SECON_MAIN_TYPO}`} sx={{color:COLOR_SECONDARY}}>Baby Shower</Typography>
                        </Grid>
                        <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_THIRD  }}>
                           En honor a <Box component="span"  className={MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>Mariana & Hector</Box>  
                            </Typography>
                         </Fade>

                        </Grid>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_THIRD  }}>
                             Un nuevo amanecer llega con nuestro bebé, nuestro pequeño rayito de sol.
                            </Typography>
                         </Fade>

                        </Grid>
                         <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' ,color:COLOR_THIRD}}>
                                  Te invitamos a celebrar con nosotros esta fecha tan especial.
                                </Typography>
                            </Fade>
                    </Grid>
                    
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} sx={{ mb: 4 }} >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={MAIN_TYPO}
                        sx={{
                      
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                            lineHeight:1,
                        }}
                        >
                        23 <Box component="span"  className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>de</Box> Noviembre
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                         className={MAIN_TYPO}
                        marginTop={2}
                        sx={{
                    
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                        }}
                        >
                        <Box component="span" className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>del</Box> 2025
                        </Typography>
                        </Fade>
                    </Grid>

                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_THIRD }} >
                        <b>4 PM</b> a <b>8 PM</b>
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple bodyTypo={BODY_TYPO} textColor={COLOR_THIRD} eventName="Lugar:" mainTypo={MAIN_TYPO} locationName="Jardín Lucrecia" address="Av. Lucrecia Ruiz de Ayón 49-B, San Luis Rey, Hermosillo, Son." color={COLOR_SECONDARY} href={"https://maps.app.goo.gl/qFzDqtXznc5HJucQ6"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    
                    
                    </Grid>
               </div>
                {/* <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",}} > */}
              <Grid container spacing={2} justifyContent="center" padding={2}>
                {/* <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                     <Fade direction="up"  triggerOnce={true}>
                        <Adornment image={`${URL_IMAGES}adornos.png`} width={"350"}/>
                     </Fade>
                        
                </Grid> */}

                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            variant="h4"
                            className={MAIN_TYPO}
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
                        sx={{fontSize: '1.25rem',color: COLOR_THIRD }}

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
                        sx={{fontSize: '1.25rem', color: COLOR_THIRD }}

                        >
                            
                            $600 <br></br> Parejas
                        </Typography>
                    </Grid>
                 <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                  <RSVPSimple 
                                colorButton={COLOR_PRIMARY}
                                bgColor={"#fffcf0"}
                                mainTypo={MAIN_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={6}
                                dateLine={new Date(2025, 8, 30)}
                                color={COLOR_SECONDARY}
                                invitationId={100}
                                qrActive={false} 
                                textColor={COLOR_THIRD} 
                                fontSize="30px"                          
                                >
                                
                            </RSVPSimple>
            </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={BODY_TYPO}
                            sx={{ color:COLOR_THIRD, fontSize:24 }}
                        >
                           “Here comes the son… y ya todo empieza a brillar.”
                        </Typography>
                         </Fade>
                        
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '30px', fontWeight: 'bold', color:COLOR_SECONDARY }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                </Grid>
                
              </Grid>
               <div  style={{padding:0, display:"flex", justifyContent:"center"}} >
                     <img src={`${URL_IMAGES}5.png`}  style={{width: "90vw"}}/>
                </div>
           
              {/* </div> */}
               <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_SECONDARY}></FooterInvites>
              <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
           
            <DialogContent >

               <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="body1" sx={{fontSize:"25px"}}  >Bienvenidos</Typography>
               </Box>
                <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                 <CustomButton borderColor={COLOR_THIRD} bgColor={"#ffffff"}  color={COLOR_THIRD} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>
          </div>
    )
}
export default BabyShowerAlec;
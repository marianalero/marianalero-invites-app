import { Box, CircularProgress, Dialog, DialogContent, Typography, useMediaQuery } from "@mui/material";

import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useMemo, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import EventCard from "../../components/EventCard/EventCard";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { useSearchParams } from "react-router-dom";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
const BauMatias = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#875a33";
    const COLOR_SECONDARY ="#afcbec";
    const COLOR_THIRD ="#a4b858";
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "roboto-400 to-upper";
    const URL_IMAGES = `${URL_REPO}bautizo-matias/`;
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 6;
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}fondo2.png`,
        `${URL_IMAGES}fondo3.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const [open, setOpen] = useState(false);
    const musicRef = useRef<MusicFabPlayerHandle>(null);
    const URL_SONG = `${URL_REPO}canciones/SomewhereOverRainbow-IsraelKamakawiwo.mp3`;
    const handleClickOpen = () => {
                setOpen(true);
    };
        
    const handleClose = () => {
        setOpen(false);
        musicRef.current?.play()
    };
        
    useEffect(() => {
       
    }, []);
    useEffect(() => {
        document.title = "Bautizo Matías";
         handleClickOpen()
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
                    date: new Date(2025, 10, 15, 14, 0, 0),
                    locationName: "Parroquia Espíritu Santo",
                    address: "Ave. José Rafael Campoy 605, Pitic, 83150 Hermosillo, Son.",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:`${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    href: "https://maps.app.goo.gl/7T5EghGFCXXH2V9s9",
                    fontSize:"60px",
                    colorButton: COLOR_PRIMARY,
                    
                },
                {
                    eventName: "Recepción",
                    date: new Date(2025, 10, 15, 16, 0, 0),
                   
                    locationName: "Terraza La Mirada",
                    address: "Los Lagos Club Campestre",
                    size: 6,
                    color: COLOR_PRIMARY,
                    icon: ``,
                    mainTypo:  `${MAIN_TYPO}`,
                    bodyTypo: BODY_TYPO,
                    fontSize:"70px",
                    href: "https://maps.app.goo.gl/pWktgXhntUQDoJuv7",
                    colorButton: COLOR_PRIMARY,
                   
                },
        ];
          const sponsors:PairSponsors[] = [
                    {
                        sponsorOne: { name: "Jorge Luis Campa y Jhoanna Guzmán" },
                    },
                    {
                        sponsorOne: { name: "Fernando Rubio y María José Valenzuela" },
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
               <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}portada.png` : `${URL_IMAGES}horz2.png`}')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,marginBottom:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative", backgroundColor:"rgb(175, 203, 236,.2)"}}>
                  
                   
                     <div  style={{position:"absolute",top:"50%",left:`${isSmallScreen ? "50%" : "48%"}`,transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                                <div style={{display:"flex",justifyContent:"center"}}>
                                      <img src={`${URL_IMAGES}9.png`}  style={{height: "85px"}}></img>
                                </div>
                          
                            <Typography  textAlign={"center"}  typography={"h1"} className={MAIN_TYPO}  sx={{color:COLOR_PRIMARY, fontSize:"10rem"}}>Matías</Typography>
                            <Typography  textAlign={"center"}  typography={"body1"} className={BODY_TYPO}  sx={{color:COLOR_PRIMARY, fontSize:"1.5rem"}}>Mi Bautizo</Typography>
                         </Fade>
                     </div>
                  
                    
        
                </div>
                
               </div>
               <div  style={{backgroundPositionX: "50%",    minHeight: "50vh",backgroundSize:"cover",paddingTop:"70px", backgroundColor:"rgb(164, 184, 88,.2)" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ color:COLOR_PRIMARY  }}>
                             
                              Con tu bendición, Señor, recibimos el regalo de la vida.
Ilumina y guía siempre a
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
                             <Typography className={BODY_TYPO} sx={{ color:COLOR_PRIMARY  }}>
                             
                             en este nuevo caminar en tu gracia.
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
                                    sx={{fontSize: 60 ,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                   Paola Guzmán Anaya

                                </Typography>
                                </Fade>
                                </Grid>

                                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up" >
                                <Typography  variant="h1" className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 60,lineHeight:2 , color:COLOR_PRIMARY }}
                                >
                                Erick Flores Alcaraz 


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
               format="dddd DD MMMM"
                typoHeader={`dm-serif-display-regular`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_SECONDARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white"
                bgColor="rgb(175, 203, 236,.3)"
                fontSize="2rem"
                bgImage={``} >  
            </CountDownSimple>
              <WeddingSponsor bgColor="rgb(246,237,219,.5)" headerFontSize="70px" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} sponsors={sponsors} height={"60vh"} color={COLOR_PRIMARY} addormentEnd={`${URL_IMAGES}adornos/3.svg`}></WeddingSponsor>
          
           <div  style={{backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",paddingTop:"70px", backgroundImage: `url('${URL_IMAGES}fondo3.png')` }} > 
           <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            
            </Grid>
            <RSVPForm 
                textColor={COLOR_PRIMARY}
                    colorButton={COLOR_PRIMARY} 
                    bgColor={"rgb(164, 184, 88,.2)"} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2025,9,30)}
                    color={COLOR_PRIMARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                    
                   
                >
                
            </RSVPForm>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} paddingTop={5} paddingX={2}>
                <Typography align={"center"}  className={`${MAIN_TYPO}`}
                                    sx={{  fontSize: 50 ,lineHeight:1, color:COLOR_PRIMARY }}
                                >
                               Con tu presencia este día será aún más especial.
                </Typography>
            </Grid>
             </div> 
                 <div style={{height:50}}></div>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
               <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
           
            <DialogContent >

               <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="body1" sx={{fontSize:"25px"}} >Bienvenidos</Typography>
               </Box>
                <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                 <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"}  color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>
          </div>
    )
}
export default BauMatias;
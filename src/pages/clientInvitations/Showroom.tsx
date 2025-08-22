import { Box, Card, CardContent, Dialog, DialogContent, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { URL_REPO } from "../../config";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from '@mui/material/Grid2';
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
const Showroom = () => {
    const COLOR_SECONDARY = "#1a3c48";
    const COLOR_PRIMARY = "black";
    const MAIN_TYPO = "pinyon-script-regular";
    const MAIN_TYPO_TWO = "noto-serif-display-400";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}showroom/`;
    const URL_SONG = `${URL_REPO}canciones/Unconditionally-KatyPerryPiano.mp3`;    
    const [open, setOpen] = useState(false);
    const musicRef = useRef<MusicFabPlayerHandle>(null);
    const handleClickOpen = () => {
            setOpen(true);
    };
    
    const handleClose = () => {
            setOpen(false);
            musicRef.current?.play()
    };
    const handleSend = () => {

      window.open("https://wa.link/fhsnbh", "_blank", "noopener,noreferrer");
    };
    
    useEffect(() => {
           handleClickOpen()
           
    }, []);
     useEffect(() => {
            document.title = "Showroom Anual Kyokko Floreria";
        }, []);
     return(
        <div style={{backgroundColor:"#ffffff",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_SECONDARY}/>
              <Fade direction="up"  triggerOnce={true}>
            <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      mt={{ xs: 4, md: 8 }} // margen distinto en móvil y escritorio
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 450, // ancho máximo en pantallas grandes
       backgroundImage:`url('${URL_IMAGES}1.png')`, // imagen del sobre
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        aspectRatio: "3/4", // mantiene proporción del sobre
        mx: "auto",
      }}
    >
      {/* Tarjeta */}
      <Card
        sx={{
          width: "70%", // más flexible
          mt: { xs: 18, md: 18 }, // bajamos más en escritorio
          p: { xs: 2, md: 3 },
          pt: { xs: 5, md: 7 },
          textAlign: "center",
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
          overflow: "visible",
          backgroundColor: "white",
          mx: "auto",
        }}
      >
        {/* Sello */}
        <Box
          component="img"
          src={`${URL_IMAGES}2.png`}
          alt="Sello"
          sx={{
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            position: "absolute",
            top: { xs: -30, md: -40 },
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <CardContent>
        <Typography
            variant="h3"
            className={MAIN_TYPO}
            sx={{ color: COLOR_SECONDARY, mb: 1 }}
          >
            Estas invitado
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Fade>
     <Grid container spacing={2} justifyContent="center" paddingX={4}>                     
        <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >  
                 <Fade direction="up"  triggerOnce={true}>
            <Typography variant="h6" className={BODY_TYPO} sx={{ color: COLOR_PRIMARY, mb: 2, fontWeight: 500 }}>
                              Te invitamos al Showroom Anual en su edición 
            </Typography>
            </Fade>
               <Fade direction="up"  triggerOnce={true}>
            <Typography
                variant="h3"
                className={MAIN_TYPO}
                sx={{ color: COLOR_SECONDARY, mb: 1 }}
                >
                    "Honor al legado que florece"
            </Typography>   </Fade> 
               <Fade direction="up"  triggerOnce={true}>  
            <Typography variant="h6" className={BODY_TYPO} sx={{ color: COLOR_PRIMARY, mb: 2, fontWeight: 500 }}>
                             organizado por
            </Typography>      
            <Box
                component="img"
                src={`${URL_IMAGES}logo.png`}
                alt="kyokko"
                sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    
                }}
            />      
            </Fade> 
        </Grid>
        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} sx={{ mb: 4 }} >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={MAIN_TYPO_TWO}
                        sx={{
                      
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                            lineHeight:1,
                        }}
                        >
                        02,03,04 <Box component="span"  className={MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>de</Box> Septiembre
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                         className={MAIN_TYPO_TWO}
                        marginTop={2}
                        sx={{
                    
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                        }}
                        >
                        <Box component="span" className={MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>del</Box> 2025
                        </Typography>
                        </Fade>
        </Grid>
         <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >     
              <Fade direction="up"  triggerOnce={true}>  
                 <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4}>
      {/* Sobre (solo mitad superior) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          height: 300, // mostramos solo parte superior
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={`${URL_IMAGES}flores1.png`} // tu imagen del sobre
          alt="Sobre"
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      {/* Tarjeta */}
      <Card
        sx={{
          width: "90%",
          maxWidth: 350,
          p: 3,
          pt: 6,
          textAlign: "center",
          boxShadow: 3,
          position: "relative",
          overflow: "visible",
          mt: -6, // sube un poco la tarjeta para que se una con el sobre
          backgroundColor: "white",
        }}
      >
        {/* Sello */}
        <Box
          component="img"
           src={`${URL_IMAGES}2.png`}
          alt="Sello"
          sx={{
            width: 80,
            height: 80,
            position: "absolute",
            top: -40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Homenaje 2do aniversario de luto dedicado con amor y agradecimiento a Marica, fundadora de KYOKKO Floreria, cuya pasión sigue inspirando en cada pétalo.
          </Typography>

        </CardContent>
      </Card>
    </Box>  
    </Fade>   
        </Grid>

          


    </Grid>
    
       
      <CountDownSimple 
                title="Falta poco para el Showroom"
                fontSize="35px"
                eventDate={new Date(2025, 8, 2)}
                bgColor={"rgb(209,181,146,.2)"}
                typoHeader={MAIN_TYPO_TWO}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white" >  
       </CountDownSimple>     
            <div  style={{backgroundImage:`url('${URL_IMAGES}flores.png')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"contain", }} >
       <Grid container spacing={2} justifyContent="center" paddingX={4} paddingY={4}>
          <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
              <Fade direction="up"  triggerOnce={true}>  
            <Typography variant="body1"  sx={{ mb: 2, fontSize:"18px"}} align="center">
           Descubre un showroom único con variedad de sets inspirados en las tendencias 2025–2026.
            Un espacio pensado para que todas las novias próximas a casarse encuentren inspiración para su boda.

            Podrás interactuar y jugar con combinaciones entre los espacios, dándoles tu toque personal para crear la boda de tus sueños.
          </Typography>
          </Fade>
          </Grid>
           <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
              <Fade direction="up"  triggerOnce={true}>  
            <Typography variant="subtitle1"  sx={{ mb: 2 }} align="center">
                Evento totalmente gratuito
          </Typography>
          </Fade>
          </Grid>
        <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCard locationName="KYOKKO" date={new Date(2025,8,2,10,0,0)} endDate={new Date(2025,8,2,19,0,0)} icon={`${URL_IMAGES}flores1.png`} bodyTypo={BODY_TYPO} textColor={COLOR_PRIMARY} eventName="Ubicación:" mainTypo={MAIN_TYPO_TWO}  address="Av. Dr. Paliza 123, El Centenario." color={COLOR_SECONDARY} href={"https://maps.app.goo.gl/cq6xrXwRtSyxvSeH7"} colorButton={COLOR_SECONDARY} ></EventCard>
                     </Fade>
          </Grid>
          <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },backgroundColor:"rgb(147,176,184,.3)" }}
                            noValidate
                            autoComplete="off"
                         
                            >
                                <Grid container spacing={2} padding={4}   >
                                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center"  marginTop={4}>
                                        <Fade direction="up"  triggerOnce={true}>
                                            <Typography className={MAIN_TYPO} sx={{ fontSize: '3rem',color: COLOR_SECONDARY, lineHeight:1  }}>
                                               Pre-Registro
                                            </Typography>
                                        </Fade>
                                     </Grid>
                                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                                    <Fade direction="up"  triggerOnce={true} >
                                            <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem', color: COLOR_SECONDARY }}  marginTop={2}>
                                                ¡Queremos que vivas esta experiencia con nosotros! Por favor ayúdanos registrandote.
                                            </Typography>
                                    </Fade>
                               
                                
                                    </Grid>
                                    
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                    <CustomButton bgColor={COLOR_SECONDARY} color={'#FFFFFF'} label={'Enviar Mensaje'} onClick={handleSend}></CustomButton>
                                </Grid>
                                </Grid>
                                                  
                        </Box>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >  
             
               <Fade direction="up"  triggerOnce={true}>  
            <Typography variant="h6" className={BODY_TYPO} sx={{ color: COLOR_PRIMARY, mb: 2, fontWeight: 500 }}>
                            Invitación realizada por
            </Typography>      
            <Box
                component="img"
                src={`${URL_REPO}logos/logo_beige.png`}
                alt="logo"
                sx={{
                    width: { xs: 300, md: 400 },
                    height: { xs: 100, md: 150 },
                    
                }}
            />      
            </Fade> 
        </Grid>
        </Grid>
    </div>  
    <FooterInvites bgColor="#ffffff" color={COLOR_SECONDARY}></FooterInvites>
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
                 <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"}  color={COLOR_SECONDARY} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>
    </div>
     )
}
export default Showroom;

import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import Grid from '@mui/material/Grid2';
import { Box, Typography, Card, CardContent } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import RSVPForm from "../../components/RSVP/RSVPForm";
import InvitationWelcomeModal from "../../components/InvitationWelcomeModal/InvitationWelcomeModal";
import Adornment from "../../components/Adornment/Adornment";

const XVCamila  = () => {
      const [searchParams] = useSearchParams();
      const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
      const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const [open, setOpen] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/Photograph-Ed Sheeran.mp3`;
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
    
    const COLOR_PRIMARY = "#e698ae";
    const COLOR_SECONDARY = "#9E9E9E";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv/xv-camila/`;
    const BG_COLOR ="#fcebf1";
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 2, 20, 18, 0, 0),
                locationName: "Parroquia Santa Eduwiges",
                address: "C. Israel González S/N, Modelo, Hermosillo, Son.",
                size: 6,
                color: COLOR_SECONDARY,
                icon: `${URL_IMAGES}iconos/9.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/CxGg2yXusDTtTeze7",
                fontSize:"2.5rem",
                colorButton: COLOR_SECONDARY,
                classButtonName:"btn-silver",
                bgColor: "white",
                textColor:COLOR_SECONDARY
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 20, 20, 0, 0),
               
                locationName: "Salon Las Cascadas",
                address: "Los Molinos 97, Las Minitas, Hermosillo, Son.",
                size: 6,
                color: COLOR_SECONDARY,
                icon: `${URL_IMAGES}iconos/10.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"3rem",
                href: "https://maps.app.goo.gl/Y6TfuqLdCVQ8VnA39",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-silver",
                textColor:COLOR_SECONDARY,
                bgColor: "white"
            },
    ];
    
    const giftListData: GiftListProps = {
      fontSize: "3rem",
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "transparent", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/7.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo; cualquier detalle adicional será recibido con mucho cariño.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        
        fontSize:"3rem",
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentStart:`${URL_IMAGES}adornos/34.png`,
        addormentSize:"80px",
        italic:true,
        qoute : "El camino que conduce a un mundo nuevo de ilusiones y esperanzas, un mundo de sueños realizados y afectos compartidos; ese es el camino que comienzo a transitar en esta noche que marcará un momento inolvidable. Espero que me acompañes para compartirlo",
    }

    
    return (
        <div style={{backgroundColor:"#FDFBFC",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpeg`}
            bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="20.03.2026"
                 subtitle="Mis XV años"
                  brideName="Laura Camila"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                fontSize="3rem"
                  >
            </CoverSimple>
            <Qoute 
               {...qoute}>
            </Qoute>
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpeg`} bgSize="contain"></ImageMiddle>
                         <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

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
              <Typography  className={`${BODY_TYPO}`} >
                Deseamos compartir con ustedes la alegría de celebrar un momento muy especial
              </Typography>
              <Grid container justifyContent="center" sx={{ m: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                <Adornment image={`${URL_IMAGES}adornos/35.png`} width={"300px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>
              </Fade>
            </Grid>


            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2.5rem" ,lineHeight:2, color: COLOR_PRIMARY }}
              >
                  Israel Navarro
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                sx={{  fontSize: "2.5rem",lineHeight:2 , color: COLOR_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
              >
                Janeth González
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
                Tenemos el honor de invitarlos a la celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
        
          </Grid>
           <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/36.png`} width={"300px"} />
              
                </Fade>
              </Grid>
            </Grid>
        </Box>
      </Grid>
    </Grid>
    </div>
            <CountDown 
                eventDate={new Date(2026, 2, 20)}
                fontSize="2.5rem"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                bgImage={`${URL_IMAGES}contador.jpeg`} 
                marginTop="10px"
                >  
            </CountDown>
    <Grid container spacing={2} justifyContent="center" padding={2} bgcolor={BG_COLOR}>
      {/* Texto inicial */}
      <Grid size={12} textAlign="center" sx={{ width: "100%" }}>
         <Fade direction="up" >
        <Typography
          className={BODY_TYPO}
          sx={{ fontSize: "1rem" }}
        >
          Por qué me han acompañado en mi camino y deseo que sigan siendo parte
          de mi historia.
        </Typography>
        </Fade>
      </Grid>

      {/* Bloque principal */}
      <Grid size={12}>
         
        <Box
          textAlign="center"
          sx={{ width: "100%",  }}
        >
          <Box>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "2.5rem", color: COLOR_PRIMARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

      
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2,}}>

              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                        pendiente
                      </Typography>
                    </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
pendiente                      </Typography>
                    </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                       pendiente
                      </Typography>
                    </Fade>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    {/* <SilverOrnament width={"150px"} /> */}
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Grid>
    </Grid>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo3.png")`, backgroundSize: "contain", backgroundPosition: "center", padding: "50px 0", position: "relative" }}>
            <Grid container spacing={2} padding={4} justifyContent={"center"} sx={{ position: "relative", zIndex: 1 }} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>
          <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpeg`} bgSize="contain"></ImageMiddle>

           

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                <Box textAlign="center"
                  sx={{ width: "100%", mb: 4,borderRadius: 1, backgroundColor: BG_COLOR, boxShadow: 3 }}
                >
                    <GiftList {...giftListData} ></GiftList>
                </Box>
               
              </Grid>
              
             </Grid>
           

            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center"
              mt={4} 
              mb={4}> 
                <Box sx={{
                  width: "100%",
                  maxWidth: 400,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}>
                </Box>  
                <Card sx={{
                  width: "90%",
                  maxWidth: 350,
                
                  textAlign: "center",
                  boxShadow: 3,
                  position: "relative",
                  overflow: "visible",
                  mt: -6, // sube un poco la tarjeta para que se una con el sobre
                  backgroundImage: `url("${URL_IMAGES}confirmacion.jpg")`,
                  backgroundSize: "cover",
                }}> 
                  <Box component="img" src={`${URL_IMAGES}sello3.png`} alt="Sello" sx={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -40,
                          left: "50%",
                          transform: "translateX(-50%)",
                  }} />
                <CardContent sx={{padding:0, paddingTop:4}}>
                     <RSVPForm
                      fontSize="2.5rem"
                      textColor={COLOR_SECONDARY}
                      qrActive={false}
                      mainTypo={MAIN_TYPO}
                      bodyTypo={BODY_TYPO}
                      count={invitedGuests}
                      color={COLOR_SECONDARY}
                      colorButton={COLOR_SECONDARY}
                      invitationId={0}
                      bgColor={"transparent"}
                      guestId={guestId}
                      classButtonName="btn-silver"
                      
                    />
              
                </CardContent>
              </Card>
            </Box>

            
            <DressCode {...dresscode}></DressCode>
         
           </div>
            <div style={{height:100}}></div>
        
            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
        <InvitationWelcomeModal
            open={open}
            onEnter={handleClose}
            onClose={handleClose}
            isMultilanguage={false}
            language={"es"}
            color={COLOR_PRIMARY}
           
/>
        
        </div>
    )
}
export default XVCamila;



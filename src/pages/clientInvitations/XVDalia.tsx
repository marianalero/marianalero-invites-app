
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";

import Grid from '@mui/material/Grid2';
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";

import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import RSVPForm from "../../components/RSVP/RSVPForm";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";


const XVDaliaElizabeth  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const INVITATION_ID = 100;
        const [open, setOpen] = useState(false);
     
        const musicRef = useRef<MusicFabPlayerHandle>(null);
        const COLOR_PRIMARY = "#E86975";    
        const COLOR_SECONDARY = "#f4d8d5";

        const MAIN_TYPO = "alex-brush-regular";
        const SECOND_TYPO = "the-seasons";
        const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const URL_IMAGES = `${URL_REPO}xv/xv-dalia/`;
        const URL_SONG = `${URL_IMAGES}.mp3`;
        const BG_COLOR ="rgb(251,243,220,0.5)";
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
    
  
        const eventCards: EventCardProps[] = [
          {
                eventName: "Misa Religiosa",
                date: new Date(2025, 8, 19, 16, 0, 0),
                locationName: "Iglesia Jesús Médico",
                address: "Los pinos 87 Aguacaliente , sección pinos 22230 , tijuana bc",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/Iglesia%20Oro%20rosa.svg`,
                mainTypo:`${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/hWgQ5W8tymx551KWA",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName:"rose-gold-btn",
            },
            {
                eventName: "Recepcion",
                date: new Date(2025, 9, 25 , 19, 0, 0),
               
                locationName: "Aqua-Rio Salones",
                address: "Paseo de los héroes 9547. Zona urbana rio tijuana 22100, Tijuana , BC",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.png`,
                mainTypo:  `${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"55px",
                href: "https://maps.app.goo.gl/Td8e6a3Nu8qt1hGY8",
                colorButton: COLOR_PRIMARY,
                classButtonName:"rose-gold-btn",

            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: "white",
        colorTitle:"white",
        colorBody: "white",
        bgColor: COLOR_SECONDARY, 
        events: [
            {
                eventName: "Misa",
                date: new Date(2025,  8, 19,16,0,0),
                icon:`${URL_IMAGES}iconos/1.png`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,19,0,0),
                icon:`${URL_IMAGES}iconos/2.png`,
            },
            // {
            //     eventName: "Vals",
            //     date: new Date(2025,  8, 19,22,30,0),
            //     icon:`${URL_IMAGES}iconos/12.svg`,
            // },
            // {
            //     eventName: "Cena",
            //     date: new Date(2025, 8, 19,22,30,0),
            //     icon: `${URL_IMAGES}iconos/13.svg`,
            // }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/11.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, tendremos una caja para sobres el día del evento por si deseas hacerme un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Colores reservados para la quinceañera",
        omitColorsText:" ⁠Beige y Rosa",
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentEnd:`${URL_IMAGES}adornos.png`,
        qoute:"pendiente de texto",
    }

  const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria2.jpg`,
        `${URL_IMAGES}galeria3.jpg`,  
        `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}galeria5.jpg`,
        `${URL_IMAGES}galeria7.jpg`,
        `${URL_IMAGES}galeria6.jpg`,
    ];
    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_SECONDARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpg`}
            bgImage2={`${URL_IMAGES}portada.jpg`}
                  weddingDate="28.02.2026"
                 subtitle="Mis XV años"
                  brideName="Dalia Elizabeth"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
            <Qoute 
               {...qoute}>
            </Qoute>
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpg`} bgSize="contain"></ImageMiddle>
                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}} padding={0}>
       
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
              <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2, color: COLOR_PRIMARY}} >
                Mis Personas Favoritas
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer eso posible!</Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2 , color:COLOR_PRIMARY}}>
                Mis Papás
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />
              
                </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 40 ,lineHeight:2, color: COLOR_PRIMARY}}
              >
                ⁠Daniela E. Flores
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 40,lineHeight:2 , color: COLOR_PRIMARY}}
              >
                &


              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 40,lineHeight:2 , color: COLOR_PRIMARY }}
              >
              Erick Ciprian


              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />
              
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
                Tenemos el honor de invitarlos a la Celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
        
          </Grid>
          
        </Box>

      </Grid>
    </Grid>
            <CountDown 
                eventDate={new Date(2026, 1, 28)}
                fontSize="40px"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                bgImage={`${URL_IMAGES}contador.jpg`} >  
            </CountDown>
    <Grid container spacing={2} justifyContent="center" paddingX={2} bgcolor={BG_COLOR}>
      {/* Texto inicial */}
      <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6 }}>
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
          sx={{ width: "100%", mt: 6 }}
        >
          <Box sx={{ mt: 6, mb: 6 }}>
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
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>

            {/* Primera fila de nombres */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                 
                >
                Leonardo Hurtado & Lorena Gómez de Hurtado
                </Typography>
                </Fade>
              </Grid>

            </Grid>

           
          </Box>
        </Box>
     
      </Grid>
    </Grid>
   <div style={{backgroundImage:`url('${URL_IMAGES}fondo2.jpg')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px" }}>
          <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
              <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
   </div>
            

             <RSVPForm 
                textColor={"white"}
                    colorButton={"white"} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2026,1,16)}
                    color={"white"}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                   bgImage={`${URL_IMAGES}confirmacion.jpg`}
                   classButtonName="rose-gold-btn"
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />

            </Fade>
             
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           
            <div style={{height:100}}></div>
          <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
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
export default XVDaliaElizabeth;



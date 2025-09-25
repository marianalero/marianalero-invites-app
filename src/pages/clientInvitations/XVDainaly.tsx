
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


const XVDainaly  = () => {
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
       
       const COLOR_PRIMARY = "#ea7480";
       const COLOR_SECONDARY = "#c60726";
        const MAIN_TYPO = "alex-brush-regular";
        const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const URL_IMAGES = `${URL_REPO}xv/xv-dainaly/`;
        const URL_SONG = `${URL_IMAGES}Huapangolospajaritos.mp3`;
        const BG_COLOR ="rgb(240,221,207,.5)";
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
                eventName: "Recepción",
                date: new Date(2025, 9, 25 , 21, 0, 0),
               
                locationName: "Eventos El Marqués",
                address: "Ramón Valdez Ramírez 1004, Unión de Ladrilleros, Hermosillo, Son.",
                size: 6,
                color: COLOR_SECONDARY,
                icon: `${URL_IMAGES}iconos/2.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"55px",
                href: "https://maps.app.goo.gl/CVwjZCJCdT9WsW4R9",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold",

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
                eventName: "Recepción",
                date: new Date(2025, 8, 19,21,0,0),
                icon:`${URL_IMAGES}iconos/14.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025,  8, 19,22,30,0),
                icon:`${URL_IMAGES}iconos/12.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 8, 19,22,30,0),
                icon: `${URL_IMAGES}iconos/13.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/1.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Colores reservados para la quinceañera",
        omitColorsText:"Rosa, Rojo y Dorado",
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentEnd:`${URL_IMAGES}adornos2.svg`,
        
        qoute : "Hay momentos inolvidables que se guardan en el corazón para siempre por esa razón quiero que compartas conmigo este día tan especial, Gracias a Dios y a mis Padres",
    }

//   const galleryPhotos = [
//         `${URL_IMAGES}galeria(1).jpg`,
//         `${URL_IMAGES}galeria(3).jpg`,
//         `${URL_IMAGES}galeria(7).jpg`,
//         `${URL_IMAGES}galeria(6).jpg`,
//     ];
    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_SECONDARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}06.jpg`}
            bgImage2={`${URL_IMAGES}06.jpg`}
                  weddingDate="25.10.2025"
                 subtitle="Mis XV años"
                  brideName="Dainaly Asilem"
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
             <ImageMiddle bgImage={`${URL_IMAGES}04.jpg`} bgSize="contain" bgPositionY="bottom"></ImageMiddle>
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
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 40 ,lineHeight:2, color: COLOR_SECONDARY}}
              >
                Juan Martín Rodríguez
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 40,lineHeight:2 , color: COLOR_SECONDARY}}
              >
                &


              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 40,lineHeight:2 , color: COLOR_SECONDARY }}
              >
                Melisa Núñez Moreno


              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
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
                eventDate={new Date(2025, 9, 25)}
                format="dddd DD MMMM"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                bgImage={`${URL_IMAGES}05.jpg`} >  
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
              sx={{ fontSize: "3rem", color: COLOR_SECONDARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>
            {/* Imagen superior */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
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
                Víctor Núñez
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
             Angelica de la Cruz

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                
                >
               
                Luis Enrique Martínez
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                Perla Arisbeth Rodriguez

                </Typography>
                </Fade>
              </Grid>

                <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Osvaldo Martínez

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                Julia Alejandra Padilla

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                Longino Galavis

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
               Iracema Soto
                </Typography>
                </Fade>
              </Grid>
            </Grid>

           
          </Box>
        </Box>
     
      </Grid>
    </Grid>
   <div style={{backgroundImage:`url('${URL_IMAGES}fondo.jpeg')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px" }}>
          <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
         

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
   </div>
            
            {/* <ImageMiddle bgImage={`${URL_IMAGES}04.jpg`} bgSize="contain"></ImageMiddle> */}
             <RSVPForm 
                textColor={COLOR_SECONDARY}
                    colorButton={COLOR_SECONDARY} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2025,9,15)}
                    color={COLOR_SECONDARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                   
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />

            </Fade>
             
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           
            <div style={{height:100}}></div>
          {/* <Gallery photos={galleryPhotos} ></Gallery> */}
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
export default XVDainaly;



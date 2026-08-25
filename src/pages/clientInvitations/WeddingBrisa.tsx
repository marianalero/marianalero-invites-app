import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";


import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, IconButton, Paper, Stack, Typography, useMediaQuery,  } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import { Fade } from "react-awesome-reveal";
import  { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";


import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import dayjs from "dayjs";
import { t } from "i18next";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";

import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import EditorialCountdown from "../../components/EditorialCountdown";
import CustomButton from "../../components/CustomButton/CustomButton";

const INVITATION_ID = 9;
// Fondos
const BG_MAIN = "#F8F6F2";
const BG_SECTION = "#EFE8E1";
const BG_ACCENT = "#B7C7A9";

// Textos
const TEXT_PRIMARY = "#5C5147";
const TEXT_SECONDARY = "#8D8278";

// Títulos
const TITLE_COLOR = "#6E6157";

// Líneas
const DIVIDER_COLOR = "#DDD3C9";

// Monograma
const MONOGRAM_COLOR = "rgba(110,97,87,.08)";

// Cards
const CARD_BG = "rgba(255,255,255,.70)";
const CARD_RADIUS = "0px";
const CARD_SHADOW = "0 12px 40px rgba(0,0,0,.08)";
const BUTTON_PRIMARY = "#8E9F87";
const MAIN_TYPO = "noto-serif-display-400";
// const MAIN_TYPO = "dm-serif-display-regular-italic";
const BODY_TYPO = "inter-regular";
const URL_IMAGES = `${URL_REPO}boda/boda-brisa-rey/`;
const URL_SONG = `${URL_IMAGES}cancion.mp3`;
const COUNTDOWN_DATE = new Date(2026, 10, 14);
const RSVP_DATE_LINE = new Date(2026, 9, 30);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Religiosa",
        date: new Date(2026, 10, 14, 17, 0, 0),
        locationName: "Parroquia Santísima Trinidad",
        address: "Bv. Justo Sierra, Periodista, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/ZzBSeeYpoqzWQfNG9",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "2rem",
        bgColor: "white",
        borderSquare: true, 
        icon: `${URL_IMAGES}iglesia.png`,
    },
    {
        eventName: "Recepción",
        date: new Date(2026, 10, 14, 20, 0, 0),
        locationName: "Casa Ava",
        address: "1ro Mayo #105 esquina con Nayarit, 5 de Mayo, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/VP4avfiPj1Cmbu946",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "2rem",
        bgColor: "white",
        borderSquare: true, 
        icon: `${URL_IMAGES}recepcion.png`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",

    mainPhrase:
        "Lo más valioso para nosotros es contar con tu compañía. Si deseas consentirnos con un regalo, aquí encontrarás algunas opciones.",

    items: [
        {
            number: "60024483",
            link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60024483",
            icon: `${URL_IMAGES}mesa/7.png`,
        },
        {
            link: "https://www.amazon.com.mx/wedding/share/brisaydavid",
            icon: `${URL_IMAGES}mesa/8.png`,
        },
    ],

    fontSize: "2rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,

    // Colores
    color: TEXT_PRIMARY,
    bgColor: BG_SECTION,

    showEnvelope: true,

    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "2rem",

    envelopePhrase:
        "Si deseas tener un detalle con nosotros, durante el evento encontrarás un buzón para lluvia de sobres.",

    secondPhrase:
        "Si te resulta más cómodo, también puedes hacerlo mediante transferencia bancaria:",

    envelopeTitleColor: TITLE_COLOR,

    bankIconStart: `${URL_IMAGES}deco/sobre.png`,

    bankDetails: [
        {
            numbers: [
                {
                    numberType: "Tarjeta",
                    number: "4152 3144 8596 4343",
                },
            ],
            bank: "BBVA Bancomer",
            name: "Brisa del Mar Torres Martínez",

            color: TEXT_PRIMARY,
            bodyTypo: BODY_TYPO,

            bgColor: BG_MAIN,
            outlineColor: false,
        },
    ],
};

const dresscode: DressCodeProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    type: 3,
    title: "Formal",
    fontSize: "2rem",
    image: `${URL_IMAGES}deco/17.png`,
    imageSize:"200px"
};

const withOutKids: WithoutKidsProps = {
    bodyTypo: BODY_TYPO,
    subtitle2: "no niños",
};


const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: BUTTON_PRIMARY,
    colorTitle: BUTTON_PRIMARY,
    colorBody: BUTTON_PRIMARY,
    fontSize: "2rem",
    bgColor: BG_MAIN,
    events: [
        {
            eventName: "Ceremonia Religiosa",
            date: new Date(2026, 9, 9, 17, 0, 0),
            icon: `${URL_IMAGES}deco/18.png`,
        },
        {
            eventName: "Recepción",
            date: new Date(2026, 9, 9, 20, 0, 0),
            icon: `${URL_IMAGES}deco/19.png`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 21, 0, 0),
            icon: `${URL_IMAGES}deco/20.png`,
        },
        {
            eventName: "Vals de novios",
            date: new Date(2026, 9, 9, 21, 30, 0),
            icon: `${URL_IMAGES}deco/21.png`,
        },
        // {
        //     eventName: "Inicio de fiesta",
        //     date: new Date(2026, 9, 9, 19, 30, 0),
        //     icon: `${URL_IMAGES}iconos (17)/8.svg`,
        // },
    ],
};

const introSealPosition = {
    top: "70%",
    left: "50%",
    width: "75px",
    height: "75px",
    transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
    bottom: "-15px",
    right: "-35px",
    width: "110px",
    height: "110px",
    // transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
    top: "-25px",
    left: "-10px",
    width: "110px",
    height: "110px",
    transform: "rotate(90deg)",
};

const calendarButtonProps = {
    variant: "outlined" as const,
    sx: {
        borderRadius: "999px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontFamily: BODY_TYPO,
        borderColor: TITLE_COLOR,
        color: TITLE_COLOR,
    },
};



const godparents= ["Armida Sánchez Escalante","Gastón R. Torrescano Urrutia","Karla Cardenas","Juan Cardenas"];
  
  


const WeddingBrisa  = () => {
     const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [searchParams] = useSearchParams();

    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    // INTRO STATES
    const [showIntro, setShowIntro] = useState(true);
    const [showInvitation, setShowInvitation] = useState(false);
    const [guest, setGuest] = useState<Guest | null>(null);
    const musicRef = useRef<MusicFabPlayerHandle>(null);

    const handleEnter = () => {

        musicRef.current?.play();

        // empieza transición invitación
        setShowInvitation(true);

        // desaparece intro después
        setTimeout(() => {
            setShowIntro(false);
        }, 900);
    };

    useEffect(() => {
        const fetchGuest = async () => {
            if (guestId) {
                try {
                    const data = await getGuestById(guestId, INVITATION_ID);
                    console.log("Fetched guest data:", data);
                    setGuest(data);
                } catch (error) {
                    console.error("Error fetching guest:", error);
                }
            }
        };

        fetchGuest();
    }, [guestId]);


    useEffect(() => {
        document.title = "Boda Brisa del Mar & Rey David";
    }, []);

    return (
           <div
            style={{
                backgroundColor: BG_MAIN,
                maxWidth: "100%",
                overflowY: "auto",
            }}
        >
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={BUTTON_PRIMARY}/>

            {/* INTRO */}
            <InvitationIntro
                open={showIntro}
                onEnter={handleEnter}
                musicRef={musicRef}

                title="Una celebración está por comenzar"
                fontSizeNames="1.5rem"
                brideName="Brisa"
                groomName="David"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}

                envelopeImg={`${URL_REPO}xv/xv-evany/envelope.png`}
                sealImg={`${URL_IMAGES}sello.png`}

                sealPosition={introSealPosition}
                bottomRightCornerImg={`${URL_IMAGES}deco/12.png`}
                topLeftCornerImg={`${URL_IMAGES}deco/11.png`}
                bottomRightCornerPosition={introBottomRightCornerPosition}
                topLeftCornerPosition={introTopLeftCornerPosition}

                guestName={guest ? guest.fullName : ""}
                guestCount={invitedGuests}
            />

            {/* INVITACIÓN */}
            <Box
                sx={{
                    opacity: showInvitation ? 1 : 0,

                    filter: showInvitation
                        ? "blur(0px)"
                        : "blur(20px)",

                    transform: showInvitation
                        ? "scale(1)"
                        : "scale(1.03)",

                    transition:
                        "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
            >

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo-ver.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
                <Grid container justifyContent="center"  height={"80vh"} >
                    <Grid size={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <div style={{ position: "relative", width: "100%", height: "100%"}}>
                        <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)", width:"100%"}}>
                             <Typography variant="h1" className={`${MAIN_TYPO}`} translate="no"  align="center" mt={2}
                                    sx={{  fontSize: "15rem",lineHeight:1 , color: TITLE_COLOR,fontFeatureSettings: '"liga" 0, "locl" 0',opacity: .08}}
                                >
                                BD
                                </Typography>
                                <Fade direction="left" triggerOnce={true} >
                            
                            
                                <Typography variant="h1" className={`${MAIN_TYPO}`} translate="no"  align="center" mt={-8}
                                    sx={{  fontSize: "3rem",lineHeight:1 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', fontWeight:400 }}
                                >
                                Brisa & David
                                </Typography>
                              <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                    <Fade direction="up" >
                                        <Box 
                                            component="img" 
                                            src={`${URL_IMAGES}deco/16.png`} 
                                            alt="Description" 
                                            sx={{ 
                                                width: { xs: 200, md: 350 }, 
                                    
                                                opacity:.8,
                                                // transform: "rotate(270deg)",
                                        }}
                                    />
                                    </Fade>
                            
                                </Grid>
                                <Typography variant="body1" className={`${BODY_TYPO}`} translate="no"  align="center"
                                    sx={{  fontSize: "1rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0',letterSpacing:".35rem" }}
                                >
                                14 Noviembre 2026
                                </Typography>
                        
                            

                            </Fade>
                            </div>
                        <div  style={{position:"absolute",top:"10%",left:"10%",transform:"translate(-50%, -50%) rotate(70deg)"}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}deco/11.png`}  style={{width: isSmallScreen? "250px" :"350px"}} />
                                </Fade>
                            
                            </div>    
                            {/* <div  style={{position:"absolute",top:"90%",left:"20%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}deco/4.png`}  style={{width: "300px"}} />
                                </Fade>
                            
                            </div>     */}
                            {/* <div  style={{position:"absolute",top:"10%",left:"80%",transform:"translate(-50%, -50%)" }}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}deco/4.png`}  style={{width: "300px"}} />
                                </Fade>
                            
                            </div>     */}
                            <div  style={{position:"absolute",top:"95%",left:"90%",transform:"translate(-50%, -50%) rotate(280deg)",}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}deco/12.png`}  style={{width: isSmallScreen? "200px" :"400px"}} />
                                </Fade>
                            
                            </div>    
                    </div>
                        
                    </Grid>
                    </Grid>
                    </div>
             
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    
               
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                     <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >¡Nos casamos!<br></br>
Después de 12 años caminando juntos hemos decidido unir nuestras vidas en matrimonio, por lo que nos complace que sean participes de esta unión </Typography>

                            </Fade>
                            </Grid>
                              <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                 <Fade direction="up" >

                                 </Fade>
                              </Grid>
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}  mt={2}>
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con la bendición nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}}  mt={2}>
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: {
                  xs: "1.2rem",
                  md: "1.8rem",
                },}} variant="body1" textAlign={"center"} className={MAIN_TYPO}>Celia Amparo Martínez Cabanillas</Typography>
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: {
                  xs: "1.2rem",
                  md: "1.8rem",
                },}}  variant="body1" textAlign={"center"} className={MAIN_TYPO}>José Encarnación Torres Camacho</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}}  mt={2} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}deco/13.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        width: { xs: 250, md: 300 }, 
                            
                                        opacity:.8,
                                        // transform: "rotate(270deg)",
                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}}  mt={2}>
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: {
                  xs: "1.2rem",
                  md: "1.8rem",
                },}} variant="body1" textAlign={"center"} className={MAIN_TYPO} >Armida Sánchez Patrón</Typography>
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: {
                  xs: "1.2rem",
                  md: "1.8rem",
                },}}  variant="body1" textAlign={"center"} className={MAIN_TYPO}>Crisanto Vargas Ríos</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} mt={2}>
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros</Typography>
                            </Fade>
                        </Grid>
                            
                        </Grid>

                </Grid>
            </Grid>
            
            <Box sx={{position:"relative"}}>
            {/* <div  style={{position:"absolute",top:"20%",left:"-5%",transform:"translate(-50%, -50%) scale(-1) rotate(220deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}deco/12.png`}  style={{height: "200px"}} />
                         </Fade>
                     
                     </div>    */}
            <Box sx={
              {
                backgroundColor: BG_MAIN
                
              }
            } >

              <EditorialCountdown
                  eventDate={COUNTDOWN_DATE}
                  background={{ color: "transparent" }}
                  title={{
                    fontFamily: '"Noto Serif Display", serif',
                    color: TEXT_PRIMARY,
                    fontSize: "2rem",
                    letterSpacing: "0.08em",
                    fontWeight:700,
                    lineHeight:1.5,
                    textTransform:"uppercase"
                  }}
                  number={{
                    fontFamily: '"Inter", sans-serif',
                    color: TEXT_PRIMARY,
                    fontSize: "3.25rem",
                    fontWeight: 300,
                  }}
                  label={{
                    fontFamily: '"Inter", sans-serif',
                    color: TEXT_PRIMARY,
                    fontSize: "0.7rem",
                  }}
                  divider={{ color: TEXT_PRIMARY }}
                  responsive={{
                    numberSize: "2rem",
                    labelSize: "0.62rem",
                    columnGap: 2,
                  }}
                />
            </Box>
           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}deco/13.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        width: { xs: 250, md: 300 }, 
                            
                                        opacity:.8,
                                        // transform: "rotate(270deg)",
                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
            </Box>
            </div>
<Grid
  container
  justifyContent="center"
  sx={{
    bgcolor: BG_MAIN,

    py: 4,
    px: 3,
    position: "relative",
    overflow: "hidden",
  }}
>
  <Grid size={{ xs: 12, md: 8 }}>
    <Stack spacing={3} alignItems="center">
      {/* Título */}
      <Typography
        className={MAIN_TYPO}
        sx={{
          color: TITLE_COLOR,
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          fontWeight:700,
          
          textAlign: "center",
        }}
      >
        Padrinos
      </Typography>

      {/* Descripción */}
      <Typography
        className={BODY_TYPO}
        sx={{
          color: TEXT_PRIMARY,
          textAlign: "center",
          
          fontSize: "1rem",
          maxWidth: 420,
        mx: "auto",
        lineHeight: 1.9,
        }}
      >
        Con profundo cariño agradecemos a quienes nos acompañan y
        comparten con nosotros este día tan especial.
      </Typography>

      {/* Separador */}
      {/* <Box
        component="img"
        src={`${URL_IMAGES}deco/13.png`} 
        sx={{
          width: 180,
          opacity: 0.9,
          my: 1,
        }}
      /> */}

      {/* Lista */}
      <Stack
        spacing={4}
        sx={{
          width: "100%",
          maxWidth: 520,
        }}
      >
        {godparents.map((godparent, index) => (
          <Box key={godparent}>
            <Typography
              className={MAIN_TYPO}
              sx={{
                color: TITLE_COLOR,
                textAlign: "center",
                fontSize: {
                  xs: "1.2rem",
                  md: "1.8rem",
                },
                lineHeight: 1.4,
              }}
            >
              {godparent}
            </Typography>

            {index !== godparents.length - 1 && (
              <Box
                component="img"
                src={`${URL_IMAGES}deco/14.png`} 
                sx={{
                    display:"flex",
                  width: "50%",
                //   height: "50px",
                  
                  mx: "auto",
                  mt: 3,
                }}
              />
            )}
          </Box>
        ))}
      </Stack>

      {/* Separador inferior */}
      {/* <Box
        component="img"
        src={`${URL_IMAGES}deco/13.png`} 
        sx={{
          width: 250,
          opacity: 0.9,
          mt: 2,
        }}
      /> */}
    </Stack>
  </Grid>
</Grid>

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <Box>
                <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TITLE_COLOR, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="Boda Brisa del Mar & Rey David"
                        startDate="20261114T170000"
                        endDate="20261115T020000"
                        location="Parroquia santísima Trinidad/Casa Ava"
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>

           <div style={{backgroundColor:BG_MAIN, padding: "50px 20px", position:"relative" }}>
                
            <div  style={{position:"absolute",top:"5%",left: isSmallScreen? "10%" : "5%",transform:"translate(-50%, -50%) scale(-1) rotate(220deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}deco/12.png`}  style={{width: isSmallScreen? "150px" : "350px", opacity:".8"}} />
                         </Fade>
                     
                     </div>   
            <div  style={{position:"absolute",bottom: isSmallScreen? "-10%" : "-40%",left:"90%",transform:"translate(-50%, -50%) scale(-1) rotate(120deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}deco/12.png`}  style={{width:  isSmallScreen? "150px" : "350px", opacity:".8"}} />
                         </Fade>
                     
                     </div> 
             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{ boxShadow: `${CARD_SHADOW}`}} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={timelineData.colorBody} textAlign={"center"} className={`${timelineData?.bodyTypo}`}>{t("timeline.subtitle")}</Typography>
            </Fade>
           
           </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline position="alternate">
                {
                timelineData.events?.map((item,index) => (
               
                  <TimelineItem key={index}>
                     
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={item.icon} height="80"/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector  sx={{backgroundColor:"rgba(143,156,132,.45)"}} />
                        <TimelineDot sx={{backgroundColor:"rgba(143,156,132,.45)"}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:"rgba(143,156,132,.45)"}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"24px"}} className={`${MAIN_TYPO}`} variant="subtitle1" component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary}} className={`${BODY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
       
   
                </Timeline>
            </Grid>	
      </Grid>
        </div>

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                 
                </Grid>
               </Grid>
            
                    </div>
                    <Box
                        sx={{
                            backgroundColor: BG_ACCENT,
                            position: "relative",
                            // maxWidth: "570px",
                            mx: "auto",
                            px: { xs: 2, md: 4 },
                            py: 6,
                            mb:{ xs: 2, md: 4 },
                        }}
                    >
                        {/* Flor superior izquierda */}
                        {/* <Box
                            component="img"
                            src={`${URL_IMAGES}deco/2.png`}
                            sx={{
                                position: "absolute",
                                top: -30,
                                left: -60,
                                width: { xs: 130, md: 180 },
                                zIndex: 2,
                                pointerEvents: "none"
                            }}
                        /> */}

                        {/* Flor superior derecha */}
                    
                       
                        {/* Flor inferior derecha */}
                        <Box
                            component="img"
                            src={`${URL_IMAGES}deco/11.png`}
                            sx={{
                                position: "absolute",
                                bottom: isSmallScreen ? -20 : -50,
                                right: -40,
                                width: { xs: 160, md: 350 },
                                zIndex: 2,
                                pointerEvents: "none",
                                transform: "rotate(220deg)"
                            }}
                        />

                        {/* Tarjeta */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                p: { xs: 2, md: 2 },
                                backgroundImage: isSmallScreen ? `url(${URL_IMAGES}fondo-ver.png)` : `url(${URL_IMAGES}fondo-horz.png)`,
                                // background: "rgba(255,255,255)",
                                // backdropFilter: "blur(6px)",
                                border: `1px solid ${DIVIDER_COLOR}`,
                                boxShadow: CARD_SHADOW,
                            }}
                        >
                            <Typography mt={2} sx={{color:TEXT_PRIMARY, fontSize: "2em",lineHeight:1,fontWeight:700}} variant="body1" textAlign={"center"} className={MAIN_TYPO} >¡Confirma tu asistencia!</Typography>

                            <RSVPForm
                            dateLine={RSVP_DATE_LINE}
                                guest={guest || undefined}
                                textColor={TEXT_PRIMARY}
                                colorButton={BUTTON_PRIMARY}
                                bgColor={"transparent"}
                                mainTypo={MAIN_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={invitedGuests}
                                color={TEXT_PRIMARY}
                                guestId={guestId}
                                invitationId={INVITATION_ID}
                                qrActive={false}
                                numberInWords={true}
                                fontSize="2rem"
                                hideTitle={true}
                            />
                        </Box>
                    </Box>
                        <div style={{backgroundImage: isSmallScreen ? `url("${URL_IMAGES}fondo-ver.png")` :`url("${URL_IMAGES}fondo-horz.png")` , backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px", display:"flex", justifyContent:"center" }}>

                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} display={"flex"} justifyContent={"center"} sx={{borderColor:BUTTON_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,maxWidth: "570px",}} >
                <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <DressCode {...dresscode}></DressCode>
                </Grid>
               
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                            <Box 
                                component="img" 
                                src={`${URL_IMAGES}deco/15.png`} 
                                alt="Description" 
                                sx={{ 
                                    width: { xs: 250, md: 300 }, 
                        
                                    opacity:.8,
                                    // transform: "rotate(270deg)",
                            }}
                        />
                        </Fade>
                 
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <WithoutKids {...withOutKids} /> 
                    </Grid>
                      

               </Grid>
               </Box>
                           
            <div style={{height:100}}></div>
                
         </div>
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingBrisa;
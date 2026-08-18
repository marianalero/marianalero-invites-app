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
import { Box, Typography,  } from "@mui/material";


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

const INVITATION_ID = 9;
// 🎨 BACKGROUNDS
const BG_MAIN = "#F8F6F2";      // Marfil cálido (fondo principal)
const BG_SECTION = "#D4C9C1";   // Beige rosado (secciones alternas)
const BG_ACCENT = "#B2C8A2";    // Verde salvia (cuenta regresiva, timeline)

// 🖋 TEXTOS
const TEXT_PRIMARY = "#6F5F52"; // Taupe oscuro para excelente legibilidad

// 🎯 BOTONES
const BUTTON_PRIMARY = "#8E9F87"; // Verde salvia un poco más profundo

// ✨ DETALLES
const BORDER_COLOR = "#E8E1DA";   // Bordes muy sutiles
const SHADOW_COLOR = "rgba(111, 95, 82, 0.10)";

// ✨ TÍTULOS
const TITLE_COLOR = "#8A7665";    // Taupe elegante
const MAIN_TYPO = "brittany";
// const MAIN_TYPO = "dm-serif-display-regular-italic";
const BODY_TYPO = "montserrat-400 to-upper";
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

    bankIconStart: `${URL_IMAGES}iconos/9.png`,

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
            outlineColor: true,
        },
    ],
};

const dresscode: DressCodeProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    type: 1,
    title: "Formal",
    fontSize: "2rem",
};

const withOutKids: WithoutKidsProps = {
    bodyTypo: BODY_TYPO,
    subtitle2: "no niños",
};


const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: BG_MAIN,
    colorTitle: BG_MAIN,
    colorBody: BG_MAIN,
    fontSize: "2rem",
    bgColor: BG_MAIN,
    events: [
        {
            eventName: "Ceremonia Religiosa",
            date: new Date(2026, 9, 9, 17, 0, 0),
            icon: `${URL_IMAGES}iconos/1.png`,
        },
        {
            eventName: "Recepción",
            date: new Date(2026, 9, 9, 20, 0, 0),
            icon: `${URL_IMAGES}iconos/5.png`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 21, 0, 0),
            icon: `${URL_IMAGES}iconos/7.png`,
        },
        {
            eventName: "Vals de novios",
            date: new Date(2026, 9, 9, 21, 30, 0),
            icon: `${URL_IMAGES}iconos/8.png`,
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
    bottom: "-25px",
    right: "-40px",
    width: "110px",
    height: "110px",
    transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
    top: "-30px",
    left: "-30px",
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
  
  


const WeddingBrisa2  = () => {
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

                brideName="Brisa del Mar"
                groomName="Rey David"
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
                bottomRightCornerImg={`${URL_IMAGES}flores/5.png`}
                topLeftCornerImg={`${URL_IMAGES}flores/5.png`}
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
                <Grid container justifyContent="center" bgcolor={"rgb(178, 200, 162,.5)"} height={"80vh"} >
                    <Grid size={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <div style={{ position: "relative", width: "100%", height: "100%"}}>
                        <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)", width:"100%"}}>
                                <Fade direction="left" triggerOnce={true} >
                            
                            <Typography  className={`${BODY_TYPO} to-upper`} translate="no"  align="center" 
                                    sx={{  fontSize: "1.5rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0',letterSpacing:2 }}
                                >
                               Nuestra boda
                                </Typography>
                                <Typography variant="h1" className={`${MAIN_TYPO}`} translate="no"  align="center" mt={2}
                                    sx={{  fontSize: "3rem",lineHeight:1.5 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
                                >
                                Brisa del Mar <br></br>
                                y <br></br>
                                 Rey David
                                </Typography>
                              <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                    <Fade direction="up" >
                                        <Box 
                                            component="img" 
                                            src={`${URL_IMAGES}adorno.png`} 
                                            alt="Description" 
                                            sx={{ 
                                                width: { xs: 180, md: 250 }, 
                                    
                                                opacity:.8,
                                                // transform: "rotate(270deg)",
                                        }}
                                    />
                                    </Fade>
                            
                                </Grid>
                                <Typography  className={`${BODY_TYPO}`} translate="no"  align="center"
                                    sx={{  fontSize: "1.5rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0',letterSpacing:2 }}
                                >
                                14.11.2026
                                </Typography>
                        
                            

                            </Fade>
                            </div>
                        <div  style={{position:"absolute",top:"10%",left:"20%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}flores/4.png`}  style={{width: "300px"}} />
                                </Fade>
                            
                            </div>    
                            {/* <div  style={{position:"absolute",top:"90%",left:"20%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}flores/4.png`}  style={{width: "300px"}} />
                                </Fade>
                            
                            </div>     */}
                            {/* <div  style={{position:"absolute",top:"10%",left:"80%",transform:"translate(-50%, -50%)" }}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}flores/4.png`}  style={{width: "300px"}} />
                                </Fade>
                            
                            </div>     */}
                            <div  style={{position:"absolute",top:"90%",left:"90%",transform:"translate(-50%, -50%)",}}>
                                <Fade direction="left" triggerOnce={true} >
                                    <img src={`${URL_IMAGES}flores/5.png`}  style={{width: "250px"}} />
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
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con la bendicion nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO}>Celia Amparo Martínez Cabanillas</Typography>
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>José Encarnación Torres Camacho</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}flores/2.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        height: { xs: 100, md: 120 }, 
                            
                                        opacity:.8,
                                        // transform: "rotate(270deg)",
                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO} >Armida Sánchez Patrón</Typography>
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Crisanto Vargas Ríos</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros</Typography>
                            </Fade>
                        </Grid>
                            
                        </Grid>

                </Grid>
            </Grid>
            </div>
            <div style={{ backgroundColor: BG_ACCENT, padding:"50px 20px", position:"relative" }}>
            <div  style={{position:"absolute",top:"15%",left:"20%",transform:"translate(-50%, -50%) scale(-1) rotate(220deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/5.png`}  style={{width: "200px"}} />
                         </Fade>
                     
                     </div>   
            <Box sx={
              {
                backgroundColor: BG_MAIN
                
              }
            } >

               <CountDownSimple 
          eventDate={COUNTDOWN_DATE

          }
          
          typoHeader={MAIN_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
          bgColor="transparent"
          circleBgColor={TEXT_PRIMARY}
          circleTextColor="white"
           primaryColor={TEXT_PRIMARY}
            secondarColor={TEXT_PRIMARY}              
                >  
            </CountDownSimple>
            </Box>
           
            </div>
        <Box padding={2}   sx={{backgroundColor:BG_SECTION, backgroundSize: "contain", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}}>
            <Box
                p={2}
                sx={{
                    display:"flex",
                    justifyContent:"center"
                }}
            >
            <Typography className={MAIN_TYPO}  sx={
                {
                    fontSize:"2rem",
                    color:TITLE_COLOR
                }
            }>Padrinos</Typography>

            </Box>
            <Box mb={2}>
                <Typography className={BODY_TYPO} align="center"  sx={
                {
                    
                    // color:TITLE_COLOR
                }
            }>Con cariño agradecemos
su compañía y apoyo
en este día tan especial.</Typography>
            </Box>
        {
            
            godparents.map((item,index) => (
                <Box
                key={index}
                sx={{
                    position: "relative",
                    backgroundColor: "rgba(255,255,255,.7)",
                    border: `1px solid ${BORDER_COLOR}`,
                    // borderRadius: "24px",
                    px: 3,
                    py: 4,
                    textAlign: "center",
                    boxShadow: `0 12px 30px ${SHADOW_COLOR}`,
                    overflow: "hidden",
                    mb: 1,
                }}
                >
                {/* Rama decorativa */}
                <Box
                    component="img"
                    src={`${URL_IMAGES}flores/8.png`}
                    sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 90,
                    opacity: .15,
                    transform: "rotate(15deg)"
                    }}
                />

                {/* Nombres */}
                <Typography
                className={BODY_TYPO}
                    sx={{
                        
                    lineHeight: 1.8,
                    fontSize: "1.2rem",
                    fontStyle:"italic!important"
                    }}
                >
                    {item}
                </Typography>
                </Box>
            ))
        }
        </Box>

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

           <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px", position:"relative" }}>
                
            <div  style={{position:"absolute",top:"15%",left:"10%",transform:"translate(-50%, -50%) scale(-1) rotate(220deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/7.png`}  style={{width: "80px", opacity:".8"}} />
                         </Fade>
                     
                     </div>   
            <div  style={{position:"absolute",bottom:"-10%",left:"95%",transform:"translate(-50%, -50%) scale(-1) rotate(120deg)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/7.png`}  style={{width: "80px", opacity:".8"}} />
                         </Fade>
                     
                     </div> 
             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{ boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}} >
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
                              <img className="intinerario-icon" src={item.icon} height="60"/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector  sx={{backgroundColor:timelineData.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:timelineData.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"24px"}} className={`${BODY_TYPO}`}  component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary ,fontSize:"1.2rem", lineHeight:1.2}} className={`${MAIN_TYPO}`}>{item.eventName} </Typography>
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
                            maxWidth: "750px",
                            mx: "auto",
                            px: { xs: 2, md: 4 },
                            py: 6,
                        }}
                    >
                        {/* Flor superior izquierda */}
                        {/* <Box
                            component="img"
                            src={`${URL_IMAGES}flores/2.png`}
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
                            src={`${URL_IMAGES}flores/6.png`}
                            sx={{
                                position: "absolute",
                                bottom: -20,
                                right: -40,
                                width: { xs: 160, md: 200 },
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
                                p: { xs: 3, md: 5 },
                                backgroundImage:`url(${URL_IMAGES}fondo-ver.png)`,
                                // background: "rgba(255,255,255)",
                                // backdropFilter: "blur(6px)",
                                border: `1px solid ${BORDER_COLOR}`,
                                boxShadow: "0 15px 40px rgba(183,202,218,.18)",
                            }}
                        >
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
                            />
                        </Box>
                    </Box>
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo-ver.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>

                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} display={"flex"} justifyContent={"center"} sx={{borderColor:BUTTON_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <DressCode {...dresscode}></DressCode>
                </Grid>
               
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                            <Box 
                                component="img" 
                                src={`${URL_IMAGES}flores/3.png`} 
                                alt="Description" 
                                sx={{ 
                                    height: { xs: 100, md: 120 }, 
                        
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
export default WeddingBrisa2;
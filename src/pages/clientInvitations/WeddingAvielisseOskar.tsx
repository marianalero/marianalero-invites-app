import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Typography,  } from "@mui/material";


import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import { Fade } from "react-awesome-reveal";
import  { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

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
import Gallery from "../../components/Gallery/Gallert";

const INVITATION_ID = 1;
// 🎨 BACKGROUNDS
const BG_MAIN = "#FCFBF8";      // Papel marfil
const BG_SECTION = "#F0F8FF";   // Alice Blue
const BG_ACCENT = "#E5EEF7";    // Acuarela azul suave

// 🖋 TEXTOS
const TEXT_PRIMARY = "#7A8DA3";     // Azul grisáceo elegante
const TEXT_SECONDARY = "#A2B1C1";   // Azul empolvado

// 🎯 BOTONES
const BUTTON_PRIMARY = "#B7CADA";

// ✨ DETALLES
const BORDER_COLOR = "#DDE7F0";
const DECORATION = "#EDF3F8";
const SHADOW_COLOR = "rgba(183, 202, 218, .18)";

// ✨ Títulos
const TITLE_COLOR = "#8DA5BE";
const MAIN_TYPO = "boheme-floral";
const SECONDARY_TYPO = "dm-serif-display-regular-italic";
const BODY_TYPO = "montserrat-400";
const URL_IMAGES = `${URL_REPO}boda/boda-avielisse-oskar/`;
const URL_SONG = `${URL_REPO}canciones/PabloAlborán-Solamentetú.mp3`;
const COUNTDOWN_DATE = new Date(2026, 9, 9);
const RSVP_DATE_LINE = new Date(2026, 7, 20);

const eventCards: EventCardProps[] = [
    {
        eventName: "Recepción",
        date: new Date(2026, 9, 9, 18, 0, 0),
        locationName: "Salón Manglares",
        address: "Manglares, 85506 San Carlos, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/FkAiYStqEi99qrPQA",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "4rem",
        bgColor: "white",
        borderSquare: true, 
        icon: `${URL_IMAGES}recepcion2.png`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    fontSize: "1.5rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    bgColor: "#FFFFFF",
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase: "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: `${URL_IMAGES}iconos (17)/7.svg`,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "IBAN",
                    number: "DE33 1001 1001 2895 3431 02",
                },
                {
                    numberType: "IBAN",
                    number: "DE26 5001 0517 5446 1198 23",
                },
            ],
            bank: "IBAN",
            name: "",
            color: TEXT_PRIMARY,
            bodyTypo: BODY_TYPO,
            bgColor: "white",
            outlineColor: true,
        },
    ],
};

const dresscode: DressCodeProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    type: 2,
    title: "Formal",
    fontSize: "3rem",
};

const withOutKids: WithoutKidsProps = {
    bodyTypo: BODY_TYPO,
    subtitle2: "no niños",
};


const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: DECORATION,
    colorTitle: DECORATION,
    colorBody: DECORATION,
    fontSize: "50px",
    bgColor: BG_ACCENT,
    events: [
        {
            eventName: "Cóctel  de bienvenida",
            date: new Date(2026, 9, 9, 17, 0, 0),
            icon: `${URL_IMAGES}iconos (17)/2.svg`,
        },
        {
            eventName: "Nupcias",
            date: new Date(2026, 9, 9, 17, 30, 0),
            icon: `${URL_IMAGES}iconos (17)/4.svg`,
        },
        {
            eventName: "Fotos",
            date: new Date(2026, 9, 9, 18, 0, 0),
            icon: `${URL_IMAGES}iconos (17)/5.svg`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 18, 30, 0),
            icon: `${URL_IMAGES}iconos (17)/6.svg`,
        },
        {
            eventName: "Inicio de fiesta",
            date: new Date(2026, 9, 9, 19, 30, 0),
            icon: `${URL_IMAGES}iconos (17)/8.svg`,
        },
    ],
};

const introSealPosition = {
    top: "60%",
    left: "50%",
    width: "75px",
    height: "75px",
    transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
    bottom: "-15px",
    right: "10px",
    width: "110px",
    height: "110px",
    transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
    top: "-10px",
    left: "15px",
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

const galleryImages = [
    `${URL_IMAGES}galeria1.jpg`,
    `${URL_IMAGES}galeria2.jpg`,
    `${URL_IMAGES}galeria3.jpg`,
];

const godparents= [
  {
    title: "Padrinos de Anillo",
    icon: `${URL_IMAGES}iconos (17)/10.svg`,
    names: ["Norma Valdez Carlon", "Jesús Salas Galaviz"],
  },
  {
    title: "Padrinos de Vela",
    icon: `${URL_IMAGES}iconos (17)/9.svg`,
    names: ["Izabela Cichon", "Marek Cichon"],
  },
  {
    title: "Padrinos de Lazo",
    icon:  `${URL_IMAGES}iconos (17)/11.svg`,
    names: [
      "José Alejandro Silva Gutiérrez",
      "María Eugenia Ponce Bernal",
    ],
  },
];

const WeddingAvielisseOskar  = () => {
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
        document.title = "Boda Avielisse & Oskar";
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

                brideName="Avielisse"
                groomName="Oskar"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}

                envelopeImg={`${URL_IMAGES}sobre.png`}
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

            <CoverInline 
                ourWeddingStart={true}
                weddingDate="9 de Octubre, 2026"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Avielisse" 
                symbolr={"&"} 
                groomName={"Oskar"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="4rem"
               verticalPosition="top"
               ampersonClassName={MAIN_TYPO}
               bodyTypoClassName={BODY_TYPO}
                >
            </CoverInline>
              <div style={{backgroundColor: BG_ACCENT, backgroundPosition: "bottom", padding: "50px 20px" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Box padding={2}  sx={{ height:"25vh", width: "60vw", backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`,position:"relative"}}  display={"flex"}  justifyContent={"center"}>
                <Box
                    component="img"
                    src={`${URL_IMAGES}flores/4.png`}
                    sx={{
                    position: "absolute",
                    top: -20,
                    right: -30,
                    height: 200,
                    opacity: .8,
                    // transform: "rotate(200deg)"
                    }}
                />
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} > 
                        
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >"El amor no conoce distancias"</Typography>
                            </Fade>		
                        </Grid>	
                 </Grid>
            </Box>
      </div>     
            <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpg`} bgPositionY="30%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    
               
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegria de nuestra union, con la bendicion nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Felipe Salas Valdez </Typography>
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Candelaria Ruelas Gutierrez </Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}flores/6.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        height: { xs: 120, md: 150 }, 
                            
                                        opacity:.8,
                                        transform: "rotate(270deg)",
                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO} >Mariusz Karuga</Typography>
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Bozena Karuga </Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros este momento tan especial</Typography>
                            </Fade>
                        </Grid>
                            
                        </Grid>

                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={SECONDARY_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>
        <Box padding={2}   sx={{backgroundColor:BG_SECTION, backgroundSize: "contain", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}}>
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
                    mb: 4,
                }}
                >
                {/* Rama decorativa */}
                <Box
                    component="img"
                    src={`${URL_IMAGES}flores/1.png`}
                    sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 90,
                    opacity: .15,
                    transform: "rotate(15deg)"
                    }}
                />

                {/* Icono */}
                <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                    width: 70,
                    height: 70,
                    mb: 1.5,
                    opacity: .8
                    }}
                />

                {/* Título */}
                <Typography
                className={`${SECONDARY_TYPO}`} 
                    sx={{
                    // fontFamily: "'DM Serif Display'",
                    color: TEXT_PRIMARY,
                    fontSize: "1.2rem",
                    mb: 1.5,
                    }}
                >
                    {item.title}
                </Typography>

                {/* Nombres */}
                <Typography
                    sx={{
                        
                    lineHeight: 1.8,
                    fontSize: ".95rem",
                    fontFamily: "Montserrat",
                    }}
                >
                    {item.names[0]}
                    <br />

                    <Typography
                    component="span"
                    sx={{
                        // color: TEXT_SECONDARY,
                        fontStyle: "italic",
                        fontSize: ".9rem"
                    }}
                    >
                    &
                    </Typography>

                    <br />

                    {item.names[1]}
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
                        title="Boda de Avielisse y Oskar"
                        startDate="20261009T170000"
                        endDate="20261010T020000"
                        location="Salón Manglares, San Carlos, Son."
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgPositionY="30%"></ImageMiddle> */}
                          <div style={{backgroundImage: `url("${URL_IMAGES}itinerario.jpg")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgb(122, 141, 163,0.8)", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}} >
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
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"24px"}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary}} className={`${SECONDARY_TYPO}`}>{item.eventName} </Typography>
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
                        <Box
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
                        />

                        {/* Flor superior derecha */}
                        <Box
                            component="img"
                            src={`${URL_IMAGES}flores/1.png`}
                            sx={{
                                position: "absolute",
                                top: -30,
                                right: -25,
                                width: { xs: 100, md: 120 },
                                zIndex: 2,
                                pointerEvents: "none"
                            }}
                        />

                        {/* Flor inferior izquierda */}
                        {/* <Box
                            component="img"
                            src={`${URL_IMAGES}flores/5.png`}
                            sx={{
                                position: "absolute",
                                bottom: 30,
                                left: -20,
                                width: { xs: 120, md: 130 },
                                zIndex: 2,
                                pointerEvents: "none"
                            }}
                        /> */}

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
                               
                                background: "rgba(255,255,255)",
                                backdropFilter: "blur(6px)",
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
                                fontSize="3rem"
                            />
                        </Box>
                    </Box>
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>

                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} display={"flex"} justifyContent={"center"} sx={{borderColor:BUTTON_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <DressCode {...dresscode}></DressCode>
                </Grid>
               
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                    <Box 
                        component="img" 
                        src={`${URL_IMAGES}flores/6.png`} 
                        alt="Description" 
                        sx={{ 
                            height: { xs: 120, md: 150 }, 
                
                            opacity:.8,
                            transform: "rotate(270deg)",
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
                 <Gallery photos={galleryImages}></Gallery>
         </div>
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingAvielisseOskar;
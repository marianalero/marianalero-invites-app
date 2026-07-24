import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";
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
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";

const INVITATION_ID = 9;
// 🎨 FONDOS
const BG_MAIN = "#F7F4EF";      // Marfil cálido
const BG_SECTION = "#EFE8DF";   // Arena suave
const BG_ACCENT = "#B7C4B2";    // Verde salvia muy claro

// 🖋 TEXTOS
const TEXT_PRIMARY = "#553D2C"; // Café profundo


// 🎯 BOTONES
const BUTTON_PRIMARY = "#4F6B58";   // Verde bosque
const BUTTON_HOVER = "#3F5847";


// ✨ DETALLES
const ACCENT = "#C7A27C";       // Camel
const ACCENT_SECONDARY = "#C9AD98"; // Beige rosado

const SHADOW_COLOR = "rgba(85,61,44,.10)";

// ✨ TÍTULOS
const TITLE_COLOR = "#4F6B58";
const MAIN_TYPO = "boheme-floral";
const SECONDARY_TYPO = "dm-serif-display-regular-italic";
const BODY_TYPO = "montserrat-400";
const URL_IMAGES = `${URL_REPO}boda/boda-erika-edwin/`;
const URL_SONG = `${URL_IMAGES}cancion2.mp3`;
const COUNTDOWN_DATE = new Date(2026, 10, 14);
const RSVP_DATE_LINE = new Date(2026, 11, 1);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Religiosa",
        date: new Date(2026, 10, 14, 12, 0, 0),
        locationName: "Parroquia de San Carlos Borromeo",
        address: "Gabriel Estrada plaza comercial s/n, Caracol Turístico, 85506 San Carlos, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/paajBntiGwSzN9td6",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3.5rem",
        bgColor: "white",
        borderSquare: true, 
        icon: `${URL_IMAGES}FLORES/7.png`,
    },
    {
        eventName: "Civil y Recepción",
        date: new Date(2026, 10, 14, 17, 0, 0),
        locationName: "Posada Condominiums & Resort Hotel",
        address: "Antiguo hotel posada, Boulevard M. F Boulevard Manlio Fabio Beltrones, San Carlos, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/ezvCykbxpYbFuuj59",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3.5rem",
        bgColor: "white",
        borderSquare: true, 
        icon: `${URL_IMAGES}FLORES/8.png`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
    items: [
            {
                link: "https://www.amazon.com.mx/wedding/share/EJIREMRT",
                icon: `${URL_IMAGES}amazon.svg`,
            }
        ],
    fontSize: "2.5rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    bgColor: "#FFFFFF",
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "2.5rem",
    envelopePhrase: "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase: "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: `${URL_IMAGES}iconos/7.svg`,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "No. Tarjeta",
                    number: "4152314247920039",
                },
                
            ],
            bank: "BBVA Bancomer",
            name: "Edwin Ruiz",
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
    type: 3,
    title: "Formal",
    fontSize: "2.5rem",
    image:`${URL_IMAGES}FLORES/9.png`,
    imageSize: "20vh"
};

const withOutKids: WithoutKidsProps = {
    bodyTypo: BODY_TYPO,
    subtitle2: "no niños",
};


const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: ACCENT,
    colorTitle: ACCENT,
    colorBody: ACCENT,
    fontSize: "2.5rem",
    bgColor: BG_ACCENT,
    events: [
         {
            eventName: "Ceremonia Religiosa",
            date: new Date(2026, 9, 9, 12, 0, 0),
            icon: `${URL_IMAGES}iconos/1.svg`,
        },
        {
            eventName: "Civil",
            date: new Date(2026, 9, 9, 17, 0, 0),
            icon: `${URL_IMAGES}iconos/4.svg`,
        },
        {
            eventName: "Cóctel  de bienvenida",
            date: new Date(2026, 9, 9, 18, 0, 0),
            icon: `${URL_IMAGES}iconos/2.svg`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 19, 0, 0),
            icon: `${URL_IMAGES}iconos/6.svg`,
        },
        // {
        //     eventName: "Posboda",
        //     date: new Date(2026, 10, 15, 15, 0, 0),
        //     icon: `${URL_IMAGES}iconos/8.svg`,
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
    right: "-15px",
    width: "110px",
    height: "110px",

};

const introTopLeftCornerPosition = {
    top: "-10px",
    left: "-10px",
    width: "110px",
    height: "110px",
    // transform: "rotate(90deg)",
};

const calendarButtonProps = {
    variant: "outlined" as const,
    className : BODY_TYPO,
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

// const galleryImages = [
//     `${URL_IMAGES}galeria1.jpg`,
//     `${URL_IMAGES}galeria2.jpg`,
//     `${URL_IMAGES}galeria3.jpg`,
// ];



const WeddingAErikaEdwin  = () => {
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
        document.title = "Boda Erika & Edwin";
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

                brideName="Erika"
                groomName="Edwin"
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
                bottomRightCornerImg={`${URL_IMAGES}FLORES/2.png`}
                topLeftCornerImg={`${URL_IMAGES}FLORES/1.png`}
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
                bgImage={`${URL_IMAGES}portada.jpeg`}
                brideName="Erika" 
                symbolr={"&"} 
                groomName={"Edwin"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="3rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
               bodyTypoClassName={BODY_TYPO}
                >
            </CoverInline>
              <div style={{backgroundColor: BG_ACCENT, backgroundPosition: "bottom", padding: "50px 20px" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Box padding={2}  sx={{  width: "85vw", backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`,position:"relative"}}  display={"flex"}  justifyContent={"center"}>
                <Box
                    component="img"
                    src={`${URL_IMAGES}FLORES/2.png`}
                    sx={{
                    position: "absolute",
                    bottom: -20,
                    right: -30,
                    height: "12vh",
                    opacity: .8,
                    transform: "rotate(-20deg)"
                    }}
                />
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} > 
                    <Grid size={{xs:12,sm:12,md:12,lg:12}}  display={"flex"} justifyContent={"center"}>
                            <Box
                                component="img"
                                src={`${URL_IMAGES}verde 2.png`}
                                sx={{
                                
                                width: { xs: "10vh", md: "20vh" },
                                zIndex: 3,
                                pointerEvents: "none",
                                }}
                            />
                        </Grid>
                        
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >"En la serenidad de nuestras coincidencias y la fortaleza de nuestras diferencias, elegimos construir una vida juntos."</Typography>
                            </Fade>		
                        </Grid>	
                        
                 </Grid>
            </Box>
      </div>     
            <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio1.jpeg`} bgPositionY="30%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
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
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Patricia Robles Casanova </Typography>
                                <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Gilberto Ibarra Limón</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}FLORES/5.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        height: { xs: 120, md: 150 }, 
                            
                                        opacity:.8,
                                        
                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO} >Argelia Edwina Tapia Melendez</Typography>
                            <Typography sx={{color:BUTTON_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Jose Cristino Ruiz Morales </Typography>
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
            <Box
                sx={{
                    backgroundColor:BG_SECTION,
                    padding:2
                }}
            >

          
             <Box sx={{ 
                backgroundColor: BG_SECTION, 
                padding:"50px 5px", 
                position:"relative",height:"50vh",
                 display:"flex", alignItems:"center", justifyContent:"center",
                 borderColor:ACCENT_SECONDARY,
                 borderStyle:"solid",
                 borderWidth:"1px"
                 }}>
                    <div  style={{
                        position:"absolute",
                        top: "10%",
                        left:"5%",
                        transform:"translate(-50%, -50%)"}}
                        >
                                <Fade direction="right" triggerOnce={true} >
                                    <Box component="img" src={`${URL_IMAGES}FLORES/4.png`} alt="" style={{width: "180px"}}  />
                                </Fade>
                            
                            </div>   
           

                    <CountDownSimple 
                        eventDate={COUNTDOWN_DATE}
                        format="dddd DD MMMM"
                        typoHeader={`${SECONDARY_TYPO}`}
                        typoCountdown={BODY_TYPO} 
                        primaryColor={BUTTON_HOVER} 
                        secondarColor={TITLE_COLOR}
                        circleBgColor="white"
                        bgColor="transparent"
                        
                        > 
                        </CountDownSimple>
                    <div  style={{position:"absolute",top:"90%",left:"95%",transform:"translate(-50%, -50%)"}}>
                            <Fade direction="right" triggerOnce={true} >
                            <img src={`${URL_IMAGES}FLORES/2.png`} alt="" style={{width: "300px"}}  />
                            </Fade>
                     
                     </div>   
           
            </Box>
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
                <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TITLE_COLOR, fontSize:"1.2.5rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="Boda de Erika y Edwin"
                        startDate="20261009T170000"
                        endDate="20261010T020000"
                        location="Salón Manglares, San Carlos, Son."
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpeg`} bgPositionY="30%"></ImageMiddle>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
            
                    </div>
                          <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{ boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2.5rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
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
       <TimelineItem >
                     
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={`${URL_IMAGES}iconos/8.svg`} height="60"/>
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
                            {dayjs(new Date(2026,10,15,15,0,0)).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary}} className={`${SECONDARY_TYPO}`}>Posboda </Typography>
                              <Typography  sx={{color:timelineData.colorPrimary}} className={`${SECONDARY_TYPO}`}>Residencial del Mar Vista </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
   
                </Timeline>
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
                            src={`${URL_IMAGES}FLORES/1.png`}
                            sx={{
                                position: "absolute",
                                top: 15,
                                left: 5,
                                width: { xs: 130, md: 180 },
                                zIndex: 2,
                                pointerEvents: "none"
                            }}
                        />

                        {/* Flor superior derecha */}
                      
                        {/* Flor inferior izquierda */}
                        {/* <Box
                            component="img"
                            src={`${URL_IMAGES}FLORES/5.png`}
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
                            src={`${URL_IMAGES}FLORES/2.png`}
                            sx={{
                                position: "absolute",
                                bottom: -10,
                                right: -20,
                                width: { xs: 160, md: 200 },
                                zIndex: 2,
                                pointerEvents: "none",
                                // transform: "rotate(220deg)"
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
                                border: `1px solid ${ACCENT}`,
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
                        <div style={{ padding: "50px 20px",backgroundColor:BG_SECTION }}>

                    <Box padding={2} bgcolor={BG_MAIN} display={"flex"} justifyContent={"center"} sx={{borderColor:BUTTON_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <DressCode {...dresscode}></DressCode>
                </Grid>
               
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                    <Box 
                        component="img" 
                        src={`${URL_IMAGES}FLORES/4.png`} 
                        alt="Description" 
                        sx={{ 
                            height: { xs: 100, md: 150 }, 
                
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
                
         </div>
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingAErikaEdwin;
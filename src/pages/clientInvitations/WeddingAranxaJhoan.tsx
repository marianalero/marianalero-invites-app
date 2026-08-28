import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GiftListProps } from "../../models/component/giftList";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Button,Container, IconButton, Paper, Stack, Typography,  } from "@mui/material";


import RSVPForm from "../../components/RSVP/RSVPForm";
import MiniGallery from "../../components/MiniGallery/MiniGallery";
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


import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import CustomButton from "../../components/CustomButton/CustomButton";
import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import Gallery from "../../components/Gallery/Gallert";

import imgDrs01124 from "../../assets/boda-arantxa-jhoan/DRS01124.jpeg";
// import imgDrs01183 from "../../assets/boda-arantxa-jhoan/DRS01183.jpeg";
import imgDrs01274 from "../../assets/boda-arantxa-jhoan/DRS01274.jpeg";
import imgConfirmacion from "../../assets/boda-arantxa-jhoan/confirmacion.jpeg";
import imgCp1 from "../../assets/boda-arantxa-jhoan/cp1.jpeg";
import imgCp2 from "../../assets/boda-arantxa-jhoan/cp2.jpeg";
import imgG1 from "../../assets/boda-arantxa-jhoan/g1.jpeg";
import imgG3 from "../../assets/boda-arantxa-jhoan/g3.jpeg";
// import imgG4 from "../../assets/boda-arantxa-jhoan/g4.jpeg";
import imgItinerario from "../../assets/boda-arantxa-jhoan/itinerario.jpeg";
import imgMng1 from "../../assets/boda-arantxa-jhoan/mng1.jpeg";
import imgMng2 from "../../assets/boda-arantxa-jhoan/mng2.jpeg";
import imgMng3 from "../../assets/boda-arantxa-jhoan/mng3.jpeg";
import imgMng4 from "../../assets/boda-arantxa-jhoan/mng4.jpeg";
import imgMng5 from "../../assets/boda-arantxa-jhoan/mng5.jpeg";
import imgMng6 from "../../assets/boda-arantxa-jhoan/mng6.jpeg";
import imgMng7 from "../../assets/boda-arantxa-jhoan/mng7.jpeg";
// import imgNa from "../../assets/boda-arantxa-jhoan/na.jpeg";
import imgNoAsignada from "../../assets/boda-arantxa-jhoan/no asginada.jpeg";
// import deco1 from "../../assets/boda-arantxa-jhoan/deco/1.png";
import deco2 from "../../assets/boda-arantxa-jhoan/deco/2.png";
import deco3 from "../../assets/boda-arantxa-jhoan/deco/3.png";
import deco4 from "../../assets/boda-arantxa-jhoan/deco/4.png";
import deco5 from "../../assets/boda-arantxa-jhoan/deco/5.png";
import deco6 from "../../assets/boda-arantxa-jhoan/deco/6.png";
import deco7 from "../../assets/boda-arantxa-jhoan/deco/7.png";
// import deco8 from "../../assets/boda-arantxa-jhoan/deco/8.png";
// import deco9 from "../../assets/boda-arantxa-jhoan/deco/9.png";
// import deco10 from "../../assets/boda-arantxa-jhoan/deco/10.png";
// import deco11 from "../../assets/boda-arantxa-jhoan/deco/11.png";
import icono1 from "../../assets/boda-arantxa-jhoan/iconos/1.png";
import icono2 from "../../assets/boda-arantxa-jhoan/iconos/2.png";
import icono3 from "../../assets/boda-arantxa-jhoan/iconos/3.png";
import icono4 from "../../assets/boda-arantxa-jhoan/iconos/4.png";
import icono5 from "../../assets/boda-arantxa-jhoan/iconos/5.png";
import imgDresscode from "../../assets/boda-arantxa-jhoan/iconos/dresscode.png";
import imgRecepcion from "../../assets/boda-arantxa-jhoan/iconos/recepcion.png";
import iconoSobre from "../../assets/boda-arantxa-jhoan/iconos/sobre.png";
import EditorialCountdown from "../../components/EditorialCountdown";
// import fondoHroz from "../../assets/boda-arantxa-jhoan/fondo-horz.png";
import fondoVer from "../../assets/boda-arantxa-jhoan/fondo-ver.png";
import { AccessTimeRounded, LocationOnOutlined } from "@mui/icons-material";
const INVITATION_ID = 9;
// 🎨 BACKGROUNDS
const BG_MAIN = "#FBF7F2";
// const BG_SECTION = "#FFFDFC";
const BG_ACCENT = "#F4EDE4";

const TITLE_COLOR = "#4A342A";
const TEXT_PRIMARY = "#5E4638";

const BUTTON_PRIMARY = "#6F4E45";

const BORDER_COLOR = "#D8C9BA";

const DECORATION = "#F2A53A";

const SHADOW_COLOR = "rgba(74,52,42,.10)";

const MAIN_TYPO = "parisienne-regular";
const SECONDARY_TYPO = "prata";
const BODY_TYPO = "instrument-sans";
const URL_SONG = `${URL_REPO}canciones/Photograph-Ed Sheeran.mp3`;
const COUNTDOWN_DATE = new Date(2026, 10, 14);
const RSVP_DATE_LINE = new Date(2026, 8, 28);



const giftListData: GiftListProps = {
    giftIcon: iconoSobre,
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_PRIMARY,
    bgColor: "#FFFFFF",
    showEnvelope: true,
    envelopeMainTypo: SECONDARY_TYPO,
    envelopeFontSize: "1.5rem",
    envelopePhrase: "En la recepción habrá un espacio asignado para sus buenos deseos",
    secondPhrase: "Para quienes prefieran la comodidad digital, les compartimos nuestros datos:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: iconoSobre,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "N. Tarjeta",
                    number: "4152 3143 2139 7112",
                },
            ],
            bank: "BBVA",
            name: "Arantxa Vela",
            textColor: TEXT_PRIMARY,
            bodyTypo: BODY_TYPO,
            bgColor: "white",
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};


const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: TEXT_PRIMARY,
    colorTitle: TEXT_PRIMARY,
    colorBody: TEXT_PRIMARY,
    fontSize: "50px",
    bgColor: TEXT_PRIMARY,
    events: [
        {
            eventName: "Ceremonia Civil",
            date: new Date(2025, 10, 16, 20, 0, 0),
            icon: icono1,
        },
        {
            eventName: "Fotos en jardín ",
            date: new Date(2025, 10, 16, 20, 30, 0),
            icon: icono2,
        },
        {
            eventName: "Recepción",
            date: new Date(2025, 10, 16, 21, 0, 0),
            icon: icono3,
        },
        {
            eventName: "Cena",
            date: new Date(2025, 10, 16, 21, 30, 0),
            icon: icono4,
        },
        {
            eventName: "Vals",
            date: new Date(2025, 10, 16, 22, 0, 0),
            icon: icono5,
        },
    ],
};

const calendarButtonProps = {
    variant: "outlined" as const,
    sx: {
        borderRadius: "999px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontFamily: "Instrument Sans",
        borderColor: "rgba(122,95,79,.55)",
        color: TEXT_PRIMARY,
    },
};

const galleryImages = [
    
    imgG3,
    imgDrs01124,
    imgMng4,
    imgMng6,
    // imgDrs01183,
    // imgDrs01274,
];

const miniGallery = [
     imgMng7,
    imgMng1,
    imgMng2,
    imgMng3,
   
    imgMng5,
    imgG1,
   
];


const WeddingAranxaJhoan  = () => {
    const [searchParams] = useSearchParams();

    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    // const songUrl = useMemo(() => {
    //     const songId = Number(searchParams.get("song"));
    //     const fileName = SONGS_BY_ID[songId] ?? SONGS_BY_ID[1];
    //     return `${URL_SONG}${encodeURIComponent(fileName)}`;
    // }, [searchParams]);

    // INTRO STATES
    const [showIntro, setShowIntro] = useState(true);
    const [guest, setGuest] = useState<Guest | null>(null);
    const musicRef = useRef<MusicFabPlayerHandle>(null);

    const handleEnter = () => {
        musicRef.current?.play();
        setTimeout(() => {
            setShowIntro(false);
        }, ENVELOPE_OPEN_MS);
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
        document.title = "Boda Arantxa & Jhoan";
    }, []);

    return (
           <div
            style={{
                backgroundColor: BG_MAIN,
                maxWidth: "100%",
                overflowY: showIntro ? "hidden" : "auto",
                height: showIntro ? "100dvh" : "auto",
            }}
        >
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={TEXT_PRIMARY}/>

            {/* INTRO */}
            <EnvelopeIntro
                open={showIntro}
                onEnter={handleEnter}
                musicRef={musicRef}
                sealImage={deco2}
                envelopeColor="#0F0F0F"

                overlayColor="#000"

                envelopeHighlight="rgba(255,255,255,.04)"

                shadowColor="rgba(0,0,0,.50)"

                // title="Una celebración está por comenzar"

                // brideName="Mitzia"
                // groomName="Jhovanny"
                // ampersonSymbol="y"

                // namesTypo={SECONDARY_TYPO}
                // ampersonTypo={MAIN_TYPO}
                // guestTypo={BODY_TYPO}
                // bodyTypo={BODY_TYPO}

                // backgroundColor="#F8F6F2"
                // primaryColor={TEXT_PRIMARY}

                // envelopeImg={`${URL_IMAGES_DEMOS}black-envelope.png`}
                // sealImg={`${URL_IMAGES}seal.png`}

                // sealPosition={introSealPosition}
                // bottomRightCornerImg={`${URL_IMAGES_DEMOS}white-flowers/4.png`}
                // topLeftCornerImg={`${URL_IMAGES_DEMOS}white-flowers/4.png`}
                // bottomRightCornerPosition={introBottomRightCornerPosition}
                // topLeftCornerPosition={introTopLeftCornerPosition}

                // guestName={guest ? guest.fullName : ""}
                // guestCount={invitedGuests}
            />

            {/* INVITACIÓN */}
            <Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    overflow: "hidden",
                    // bgcolor: BG_MAIN,
                    backgroundImage : `url(${fondoVer})`
                }}
            >
                <Fade triggerOnce={true}  direction="up">
                 <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        position: "relative",
                        zIndex: 2,
                        px: 4,
                    }}
                >
                    <Typography
                    className={MAIN_TYPO}
                        sx={{
                            
                            fontSize: {
                                xs: "5rem",
                                md: 92,
                            },
                            color: TITLE_COLOR,
                            lineHeight: 2,
                        }}
                    >
                        Arantxa
                    </Typography>

                    <Typography
                    className={MAIN_TYPO}
                        sx={{
                            
                            fontSize: "5rem",
                            color: TITLE_COLOR,
                            my: 1,
                        }}
                    >
                        &
                    </Typography>

                    <Typography
                    className={MAIN_TYPO}
                        sx={{
                            
                            fontSize: {
                                xs:"5rem",
                                md: 92,
                            },
                            color: TITLE_COLOR,
                            lineHeight: 2,
                        }}
                    >
                        Jhoan
                    </Typography>
                    <Typography 
                    mt={4}
                    className={SECONDARY_TYPO}
                        sx={{
                            
                            fontSize: {
                                xs: "1.5rem",
                                md: "2.5rem",
                            },
                            color: TITLE_COLOR,
                            
                        }}
                    >
                        14 Noviembre 2026
                    </Typography>
                </Box>
                </Fade>
                        
                    <Box
                        component="img"
                        src={deco4}
                        sx={{
                            position: "absolute",
                            top: { xs: -30, sm: -60, md: -30 },
                            left: { xs: -80, sm: -60, md: -30 },
                            width: { xs: 250, md: 350 },
                            transform: "rotate(50deg)",
                            opacity: .92,
                            // filter: "brightness(.98)"
                        }}
                    />
                    <Box
                        component="img"
                        src={deco3}
                        sx={{
                            position: "absolute",
                            top: { xs: 50, sm: -60, md: -30 },
                            left: { xs: -80, sm: -60, md: -30 },
                            width: { xs: 250, md: 350 },
                            transform: "rotate(50deg)",
                        }}
                    />
                    
                    <Fade triggerOnce={true}  direction="right">
                    <Box
                        component="img"
                        src={deco6}
                        sx={{
                            zIndex:1,
                            position: "absolute",
                            bottom: { xs: -80, sm: -60, md: -30 },
                            right: { xs: -20, sm: -60, md: -30 },
                            width: { xs: 250, md: 350 },
                            transform: "scale(-1,-1) rotate(120deg)",
                        }}
                    />
                    <Box
                        component="img"
                        src={deco7}
                        sx={{
                            position: "absolute",
                            bottom: { xs: -80, sm: -60, md: -30 },
                            right: { xs: -130, sm: -60, md: -30 },
                            width: { xs: 350, md: 350 },
                            transform: "scale(-1,-1) rotate(160deg)",
                        }}
                    />
                    </Fade>
                    
            </Box>
              
            <ImageMiddle bgPosition="30%" height="100vh" bgImage={imgCp1} bgPositionY="70%"></ImageMiddle>
            
           
           <Box
    sx={{
        position: "relative",
        backgroundColor: BG_MAIN,
        py: { xs: 8, md: 12 },
        px: 3,
        overflow: "hidden",
    }}
>

    {/* ================= FLORES ================= */}

    <Box
        sx={{
            position: "absolute",
            top: "50%",
            left: -35,
            zIndex: 0,
            opacity: .95
        }}
    >
        <Fade direction="right" triggerOnce>
            <img
                src={deco7}
                style={{
                    height: 190,
                    transform: "scale(-1) rotate(220deg)"
                }}
            />
        </Fade>
    </Box>

    <Box
        sx={{
            position: "absolute",
            bottom: 20,
            right: -70,
            zIndex: 0,
            opacity: .95
        }}
    >
        <Fade direction="left" triggerOnce>
            <img
                src={deco5}
                style={{
                    height: 170,
                    transform: "rotate(-20deg)"
                }}
            />
        </Fade>
    </Box>
      <Box
        sx={{
            position: "absolute",
            top: "30%",
            right: -70,
            zIndex: 0,
            opacity: .95
        }}
    >
        <Fade direction="left" triggerOnce>
            <img
                src={deco6}
                style={{
                    height: 170,
                    transform: "rotate(-50deg)"
                }}
            />
        </Fade>
    </Box>

    {/* ================= CONTENIDO ================= */}

    <Box
        sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: 760,
            mx: "auto",
            textAlign: "center",
        }}
    >

        {/* FRASE */}

        <Fade triggerOnce>

            <Typography
                className={`${SECONDARY_TYPO} italic`}
                sx={{
                    fontSize: {
                        xs: "1.8rem",
                        md: "2.2rem",
                    },
                    lineHeight: 1.6,
                    color: TITLE_COLOR,
                    mb: 8,
                }}
            >
                “Elegirnos todos los días es nuestro compromiso;
                celebrarlo con ustedes, nuestro mayor deseo.”
            </Typography>

        </Fade>

        {/* INVITACIÓN */}

        <Fade direction="up" triggerOnce>

            <Typography
                className={BODY_TYPO}
                sx={{
                    maxWidth: 520,
                    mx: "auto",
                    fontSize: {
                        xs: "1.15rem",
                        md: "1.35rem",
                    },
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: TEXT_PRIMARY,
                }}
            >
                Con enorme alegría,

                <br></br>

                queremos invitarte a compartir

                <br />

                el día más importante

                <br />

                de nuestras vidas.
            </Typography>

        </Fade>

        {/* SEPARADOR */}

        <Box
            sx={{
                width: 55,
                height: 1,
                bgcolor: DECORATION,
                mx: "auto",
                mt: 7,
                mb: 9,
            }}
        />

        {/* CONTADOR */}

        <EditorialCountdown
            eventDate={COUNTDOWN_DATE}
            background={{ color: "transparent" }}
            title={{
                fontFamily: '"Prata Regular"',
                color: TITLE_COLOR,
                fontSize: "1.8rem",
                fontWeight: 700,
                lineHeight:1.5,
                textTransform: "uppercase",
            }}
            number={{
                fontFamily: '"Prata Regular"',
                color: TITLE_COLOR,
                fontSize: "3.6rem",
                fontWeight: 500,
            }}
            label={{
                fontFamily: '"Instrument Sans"',
                color: TEXT_PRIMARY,
                fontSize: ".72rem",
                fontWeight: 400,
                letterSpacing: ".12em",
                textTransform: "uppercase",
            }}
            divider={{
                color: BORDER_COLOR,
            }}
            responsive={{
                numberSize: "2.2rem",
                labelSize: ".65rem",
                columnGap: 2,
            }}
        />

    </Box>

</Box>
 <ImageMiddle bgPosition="center" height="70vh" bgImage={imgCp2} bgPositionY="50%"></ImageMiddle>
            <div style={{backgroundColor:BG_MAIN, padding: "50px 20px" }}>
            <Box
    sx={{
        backgroundColor: BG_MAIN,
        paddingTop:4,
        px: 3,
        paddingBottom:1
    }}
>
    <Container maxWidth="sm">

        <Fade triggerOnce>

            <Typography
                textAlign="center"
                className={SECONDARY_TYPO}
                sx={{
                    color: TITLE_COLOR,
                    fontSize: {
                        xs: "2.2rem",
                        md: "2.8rem",
                    },
                    mb: 1,
                }}
            >
                Recepción
            </Typography>

        </Fade>

        <Box
            sx={{
                width: 55,
                height: 1,
                bgcolor: DECORATION,
                mx: "auto",
                mb: 5,
            }}
        />

        <Fade triggerOnce>

            <Box
                component="img"
                src={imgRecepcion}
                sx={{
                    width: "100%",
                    maxWidth: 260,
                    display: "block",
                    mx: "auto",
                    mb: 5,
                }}
            />

        </Fade>

        <Typography
            textAlign="center"
            className={BODY_TYPO}
            sx={{
                fontWeight: 700,
                color: TEXT_PRIMARY,
                fontSize: "1.4rem",
                mb: 1,
            }}
        >
            Jardín el Camino
        </Typography>

        <Typography
            textAlign="center"
            className={BODY_TYPO}
            sx={{
                // color: TEXT_PRIMARY,
                // opacity: .75,
                lineHeight: 1.8,
                mb: 4,
            }}
        >
            Av. Blvd. Camino del Seri 708
            <br />
            Centro, Hermosillo, Son.
        </Typography>

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            mb={2}
        >
            <AccessTimeRounded
                sx={{
                    fontSize: 20,
                    color: TITLE_COLOR,
                }}
            />

            <Typography
                className={BODY_TYPO}
                sx={{
                    color: TITLE_COLOR,
                    letterSpacing: ".05em",
                }}
            >
                08:00 PM
            </Typography>
        </Box>
        
                <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            mb={3}
        >
        <Button

            href="https://maps.app.goo.gl/BLLHhXG4Eu1FaRtZ8"
            target="_blank"
            variant="contained"
            endIcon={<LocationOnOutlined />}
            sx={{
                px: 4,
                py: 1.3,
                borderRadius: "999px",
                textTransform: "none",
                fontFamily: '"Instrument Sans"',
                fontWeight: 500,
                bgcolor: BUTTON_PRIMARY,

                "&:hover": {
                    bgcolor: BUTTON_PRIMARY,
                    opacity: .9,
                },
            }}
        >
            Ver ubicación
        </Button>
        </Box>
    </Container>
</Box>
<Box
            sx={{
                width: 100,
                height: 1.5,
                bgcolor: DECORATION,
                mx: "auto",
                mt: 1,
                mb: 1,
                opacity:.90
            }}
        />
            <Box>
                <Typography textAlign={"center"} className={`${SECONDARY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem", letterSpacing:".04em",mt:2, mb:1,fontStyle:"italic"}}>
                   No queremos que te pierdas este día.
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="Boda de Arantxa & Jhoan"
                        startDate="20261114T220000"
                        endDate="20261115T020000"
                        location="Jardín el Camino"
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
                          <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={timelineData.colorBody} textAlign={"center"} className={`${timelineData?.bodyTypo}`}>Acompáñanos en cada instante
de esta celebración.</Typography>
            </Fade>
           
           </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline>
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
                            <Typography translate="no" sx={{color:timelineData.colorPrimary,fontSize:"22px",}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
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
        <ImageMiddle bgImage={imgItinerario} height="80vh" ></ImageMiddle>
          <Box
      sx={{
        background: BG_MAIN,
        paddingTop:4
      }}
    >
      {/* ---------- TITULO ---------- */}

      <Typography
        textAlign="center"
        className={MAIN_TYPO}
        sx={{
          
          fontSize: { xs: 48, md: 70 },
          color: TITLE_COLOR,
        }}
      >
        Código de Vestimenta
      </Typography>

      <Typography
        textAlign="center"
        sx={{
          fontFamily: "Bodoni Moda",
          textTransform: "uppercase",
          letterSpacing: ".35em",
          color: TEXT_PRIMARY,
          fontSize: "1.5rem",
            mt:2,
            mb:2

        }}
      >
        Formal
      </Typography>



      <Grid container spacing={4} justifyContent="center" p={2}>

        {/* MUJERES */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              border: `1px solid ${BORDER_COLOR}`,
            //   borderRadius: 4,
              p: 4,
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                color: TITLE_COLOR,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                fontSize: 22,
              }}
            >
              Mujeres
            </Typography>

            <Box
              component="img"
               src={imgDresscode}
              sx={{
                width: "100%",
                maxWidth: 300,
                mt: 3,
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                color: TEXT_PRIMARY,
                lineHeight: 2,
                mb: 4,
              }}
            >
              • Vestido largo
           
              • Sin brillos
             
              • Evitar blanco, beige,
              
              negro y rojo
            </Typography>

            <CustomButton
              label="Ver inspiración"
              href="https://pin.it/6vkcAqPZe"
              bgColor={BUTTON_PRIMARY}
              color="#FFF"
              width="220px"
            />
          </Box>
        </Grid>

        {/* HOMBRES */}

     
              <Grid size={{ xs: 12, md: 12 }}>
                <Box
    sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        backgroundColor: BG_MAIN,
        display: "flex",
        justifyContent: "center",
    }}
>
    <Box
        sx={{
            width: "100%",
            maxWidth: 520,
            bgcolor: BUTTON_PRIMARY,
            borderRadius: "260px 260px 0 0",
            px: { xs: 4, md: 7 },
            py: { xs: 8, md: 10 },
            color: "#fff",
            textAlign: "center",
            boxShadow: SHADOW_COLOR,
        }}
    >
        

        <Typography
            sx={{
                fontFamily: "Bonodi",
                fontStyle: "italic",
                fontSize: {
                    xs: ".95rem",
                    md: "1.1rem",
                },
                lineHeight: 2.2,
                opacity: .95,
            }}
        >
            Adoramos a los pequeños,<br></br>
            
            sin embargo esta celebración
            
            está destinada<br></br>     
            
            exclusivamente para adultos.<br></br>
            
            ¡Agradecemos su comprensión!
        </Typography>
            <Typography
            sx={{
                fontFamily: "Bonodi",
                fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                },
                letterSpacing: ".18em",
                mb: 5,
                mt:5
            }}
        >
            NO NIÑOS
        </Typography>
        <Box
            sx={{
                width: 120,
                height: "1px",
                bgcolor: "rgba(255,255,255,.35)",
                mx: "auto",
                my: 5,
            }}
        />

        <Typography
            sx={{
                fontFamily: "Pinyon Script",
                fontSize: "2.5rem",
                color: "#fff",
            }}
        >
            Gracias
        </Typography>
    </Box>
</Box>
              </Grid>
      </Grid>
    </Box>
            <div style={{backgroundImage: `url("${imgNoAsignada}")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat", }}>
            <Grid container spacing={2} padding={1} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: "100%",
                                maxWidth: 470,
                                bgcolor: "white",
                                p: { xs: 4, md: 5 },
                                borderRadius: 0,
                                boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Título */}
                            <Typography
                                className={MAIN_TYPO}
                                sx={{
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    
                                    lineHeight: 1.9,
                                    mb: 2,
                                            
                                                fontSize:"2.5rem",
                                }}
                            >
                                
                            {giftListData.title}
                                    
                            </Typography>
                        

                           

                            {/* Segunda frase */}

                            <Typography
                                className={BODY_TYPO}
                                sx={{
                                fontSize:".8rem",
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    lineHeight: 1.9,
                                    mb: 5,
                                    
                                    
                                }}
                            >
                            Para quienes deseen obsequiarnos un presente, contaremos con un buzón de sobres el día del evento <br></br>
                            Asimismo, podrán realizar una transferencia bancaria o elegir un regalo de nuestras mesas.
                                </Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        >
                                        <Box
                                            component="img"
                                            src={iconoSobre}
                                            sx={{
                                            height: "100px",
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                            fontSize: ".8rem",
                                            color: giftListData.textColor,
                                            textAlign: "center",
                                            lineHeight: 1.9,
                                           
                                            mb: 5,
                                            }}
                                        >
                                            EFECTIVO
                                        </Typography>
                                        </Box>
                                        

                            {/* Tarjeta bancaria */}

                            {giftListData.bankDetails?.map((bank, index) => (
                                <Paper
                                    key={index}
                                    elevation={0}
                                    sx={{
                                        bgcolor: bank.bgColor,
                                        borderRadius: "0",
                                        p: 4,
                                        border: "1.5px solid rgba(190,170,130,.45)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,.05)",
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Box
                                            component="img"
                                            src={iconoSobre}
                                            sx={{
                                                height: 40,
                                                
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                letterSpacing: ".18em",
                                                fontSize: ".82rem",
                                                color: TEXT_PRIMARY,
                                            }}
                                        >
                                            {bank.numbers[0].numberType}
                                        </Typography>

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                fontSize: {
                                                xs: "1.65rem",
                                                sm: "1.9rem",
                                                },
                                                letterSpacing: "0.04em",
                                                whiteSpace: "nowrap",
                                                color: TEXT_PRIMARY,
                                                // letterSpacing: ".04em",
                                                textAlign: "center",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {bank.numbers[0].number}
                                            <IconButton
                                            onClick={() => {
                                            navigator.clipboard.writeText(bank.numbers[0].number.trim());
                                        
                                            }}
                                        >
                                        <ContentCopyIcon sx={{color: TEXT_PRIMARY}} />
                                        </IconButton>
                                        </Typography>

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                fontSize: ".9rem",
                                                color: TEXT_PRIMARY,
                                                opacity: .85,
                                                textAlign: "center",
                                            }}
                                        >
                                            {bank.name}
                                        </Typography>

                                        
                                    </Stack>
                                </Paper>
                            ))}

                         {/* Frase principal */}

                            {/* <Typography
                                className={BODY_TYPO}
                                sx={{
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    
                                    lineHeight: 1.9,
                                    mb: 3,
                                            
                                                fontSize:".8rem",
                                }}
                            >
                                Para nosotros lo mas importante es su presencia,<br></br> 
                                pero si desean hacernos un obsequio tendremos estas opciones<br></br> 
                            
                                    
                            </Typography> */}

                            {/* Sobre */}

                            {giftListData.items?.map((item, index) => (
                                <Paper
                                    key={index}
                                    elevation={0}
                                    
                                    sx={{
                                        bgcolor: giftListData.bgColor,
                                        borderRadius: "0",
                                        p: 4,
                                        border: "1.5px solid rgba(190,170,130,.45)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,.05)",
                                        mb:2,
                                        mt:2
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Box
                                            component="img"
                                            src={item.icon}
                                            sx={{
                                                height: 40,
                                                
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                fontSize: {
                                                xs: "1.65rem",
                                                sm: "1.9rem",
                                                },
                                                letterSpacing: "0.04em",
                                                whiteSpace: "nowrap",
                                                color: TEXT_PRIMARY,
                                                // letterSpacing: ".04em",
                                                textAlign: "center",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {item.number}
                                        </Typography>

                                        <CustomButton
                                            label="Ver mesa de regalos"
                                            bgColor={BUTTON_PRIMARY}
                                            color="white"
                                            href={item.link}
                                        />

                                    
                                        
                                    </Stack>
                                </Paper>
                            ))}
                        
                        </Paper>
                    </Box>
                    
                </Grid>
               </Grid>
                <MiniGallery
                    images={miniGallery}
                     backgroundColor="rgb(250,250,250,.8)"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
                    </div>
            <ImageMiddle bgPosition="center" height="50vh" bgImage={imgDrs01274} bgPositionY="50%"></ImageMiddle>
             <Box
                display="flex"
                justifyContent="center"
                sx={{
                    my: 8,
                }}
                >
                <Box
                    sx={{
                    width: {
                        xs: "88%",
                        sm: 340,
                    },
                    background: BUTTON_PRIMARY,
                    borderRadius: "180px 180px 0 0",
                    px: 4,
                    py: 6,
                    textAlign: "center",
                    boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
                    }}
                >
                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        letterSpacing: ".28em",
                        fontSize: ".9rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                    }}
                    >
                    Hemos
                    <br />
                    Reservado
                    </Typography>

                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        fontSize: {
                        xs: "6rem",
                        md: "7rem",
                        },
                        lineHeight: 1,
                        my: 2,
                    }}
                    >
                    {guest ? guest.totalAssigned :invitedGuests}
                    </Typography>

                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        letterSpacing: ".18em",
                        fontSize: ".9rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                    }}
                    >
                    Lugares para
                    <br />
                    celebrar juntos
                    </Typography>
                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        letterSpacing: ".18em",
                        fontSize: "2rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                        mt:2
                    }}
                    >
                    CONFIRMA TU ASISTENCIA
                    </Typography>
                    <RSVPForm 
                    padding={1}
                        guest={guest || undefined}
                        dateLine={RSVP_DATE_LINE}
                            textColor={"white"}
                            colorButton={"white"} 
                            bgColor={BUTTON_PRIMARY} 
                            mainTypo={SECONDARY_TYPO} 
                            bodyTypo={BODY_TYPO} 
                            count={invitedGuests}
                            color={"white"}
                            guestId={guestId}
                            invitationId={INVITATION_ID}
                            qrActive={false}
                            transparencyButton={true}
                            fontSize="2rem"
                            hideLabelAssignedPeople={true}
                            hideTitle={true}
                        >
                            
            </RSVPForm>
                </Box>
                
                </Box>
            
          
                        <div style={{backgroundImage: `url("${imgConfirmacion}")`, backgroundSize: "cover", backgroundPosition: "right", padding: "10px 10px" }}>

                    
                        
            <div style={{height:50}}></div>
                  <Gallery photos={galleryImages}>
                
            </Gallery>
         </div>
            <FooterInvites bgColor={"white"} color={TEXT_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingAranxaJhoan;
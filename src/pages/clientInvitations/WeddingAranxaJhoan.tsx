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

import { Fade } from "react-awesome-reveal";
import  { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";

import dayjs from "dayjs";
import { t } from "i18next";


import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import Gallery from "../../components/Gallery/Gallert";

import imgDrs01124 from "../../assets/boda-arantxa-jhoan/DRS01124.jpeg";
// import imgDrs01183 from "../../assets/boda-arantxa-jhoan/DRS01183.jpeg";
import imgDrs01274 from "../../assets/boda-arantxa-jhoan/DRS01274.jpeg";
import imgCp1 from "../../assets/boda-arantxa-jhoan/cp1.jpeg";
import imgCp2 from "../../assets/boda-arantxa-jhoan/cp2.jpeg";
import imgG1 from "../../assets/boda-arantxa-jhoan/g1.jpeg";
import imgG3 from "../../assets/boda-arantxa-jhoan/g3.jpeg";

import imgItinerario from "../../assets/boda-arantxa-jhoan/itinerario.jpeg";
import imgMng1 from "../../assets/boda-arantxa-jhoan/mng1.jpeg";
import imgMng2 from "../../assets/boda-arantxa-jhoan/mng2.jpeg";
import imgMng3 from "../../assets/boda-arantxa-jhoan/mng3.jpeg";
import imgMng4 from "../../assets/boda-arantxa-jhoan/mng4.jpeg";
import imgMng5 from "../../assets/boda-arantxa-jhoan/mng5.jpeg";
import imgMng6 from "../../assets/boda-arantxa-jhoan/mng6.jpeg";
import imgMng7 from "../../assets/boda-arantxa-jhoan/mng7.jpeg";
import imgConf from "../../assets/boda-arantxa-jhoan/confirmacion.jpeg";
//import imgNoAsignada from "../../assets/boda-arantxa-jhoan/no asginada.jpeg";
// import deco1 from "../../assets/boda-arantxa-jhoan/deco/1.png";
import deco2 from "../../assets/boda-arantxa-jhoan/deco/2.png";
import deco3 from "../../assets/boda-arantxa-jhoan/deco/3.png";
import deco4 from "../../assets/boda-arantxa-jhoan/deco/4.png";
import deco5 from "../../assets/boda-arantxa-jhoan/deco/5.png";
import deco6 from "../../assets/boda-arantxa-jhoan/deco/6.png";
import deco7 from "../../assets/boda-arantxa-jhoan/deco/7.png";
import deco8 from "../../assets/boda-arantxa-jhoan/deco/8.png";
import deco9 from "../../assets/boda-arantxa-jhoan/deco/9.png";
import deco10 from "../../assets/boda-arantxa-jhoan/deco/10.png";
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
import sobreIntro from "../../assets/boda-arantxa-jhoan/sobre-intro.png";
import sello from "../../assets/boda-arantxa-jhoan/sello.png";
import fondoVer from "../../assets/boda-arantxa-jhoan/fondo-ver.png";
import bancomer from "../../assets/boda-arantxa-jhoan/bancomer.png";
import { AccessTimeRounded, LocationOnOutlined } from "@mui/icons-material";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
const INVITATION_ID = 9;
// 🎨 BACKGROUNDS
const BG_MAIN = "#FBF7F2";
// const BG_SECTION = "#FFFDFC";
const BG_ACCENT = "#F4EDE4";

const TITLE_COLOR = "#4A342A";
const TEXT_PRIMARY = "#5E4638";

const BUTTON_PRIMARY = "#C96D33";

const BORDER_COLOR = "#D8C9BA";

const DECORATION = "#F2A53A";

const SHADOW_COLOR = "rgba(74,52,42,.10)";

const MAIN_TYPO = "parisienne-regular";
const SECONDARY_TYPO = "prata";
const BODY_TYPO = "instrument-sans";

const COUNTDOWN_DATE = new Date(2026, 10, 14);
const RSVP_DATE_LINE = new Date(2026, 9, 31);
const colorPalette = ["#1F3A73","#7A4CC7","#F11778","#F56AA0","#FF861A","#FFA735","#C94C12","#FFD562","#8A8D47","#A1A163"]

const URL_SONG = `${URL_REPO}canciones/LanaDelRey-VideoGames.mp3`;
const giftListData: GiftListProps = {
    title:"Luvia de Sobres",

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
            iconSize: "100px"
        },
        {
            eventName: "Fotos en jardín ",
            date: new Date(2025, 10, 16, 20, 30, 0),
            icon: icono2,
            iconSize: "120px"
        },
        {
            eventName: "Recepción",
            date: new Date(2025, 10, 16, 21, 0, 0),
            icon: icono4,
            iconSize: "70px"
        },
        {
            eventName: "Cena",
            date: new Date(2025, 10, 16, 21, 30, 0),
            icon: icono3,
            iconSize: "100px"
        },
        {
            eventName: "Vals",
            date: new Date(2025, 10, 16, 22, 0, 0),
            icon: icono5,
            iconSize: "150px"
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

const introSealPosition = {
    top: "65%",
    left: "50%",
    width: "55px",
    height: "55px",
    transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
    bottom: "-15px",
    right: "5px",
    width: "110px",
    height: "150px",
    opacity:".9"
    // transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
    top: "-10px",
    left: "-20px",
    width: "110px",
    height: "110px",
    opacity:".9"
    // transform: "rotate(120deg)",
};



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

            <InvitationIntro
                open={showIntro}
                onEnter={handleEnter}
                musicRef={musicRef}

                title="Una celebración está por comenzar"

                brideName="Arantxa"
                groomName="Jhoan"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}

                envelopeImg={sobreIntro}
                sealImg={sello}

                sealPosition={introSealPosition}
                bottomRightCornerImg={deco10}
                topLeftCornerImg={deco8}
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
                            left: { xs: -30, sm: -60, md: -30 },
                            height: { xs: 250, md: 350 },
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
                            left: { xs: -50, sm: -60, md: -30 },
                            height: { xs: 250, md: 350 },
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
                            height: { xs: 250, md: 350 },
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
                            height: { xs: 350, md: 350 },
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
            bottom: 10,
            right: -40,
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
            {/* MINIGALLERI */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 , p:2}}>

    {/* FILA 1 */}
    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.35fr",
            gap: 1.5,
            alignItems: "center",
           
        }}
    >
        <Box
            component="img"
            src={miniGallery[3]}
            sx={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />

        <Box
            component="img"
            src={miniGallery[1]}
            sx={{
                width: "100%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />
    </Box>

    {/* FILA 2 (Invertida) */}
    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.95fr",
            gap: 1.5,
            alignItems: "center",
        }}
    >
        <Box
            component="img"
            src={miniGallery[0]}
            sx={{
                width: "100%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />

        <Box
            component="img"
            src={miniGallery[4]}
            sx={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />
    </Box>

    {/* FILA 3 */}
    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.35fr",
            gap: 1.5,
            alignItems: "center",
        }}
    >
        <Box
            component="img"
            src={miniGallery[5]}
            sx={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />

        <Box
            component="img"
            src={miniGallery[2]}
            sx={{
                width: "100%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 10px 28px rgba(0,0,0,.08)",
            }}
        />
    </Box>

            </Box>

            <div style={{backgroundColor:BG_MAIN, padding: "50px 20px", position:"relative" }}>
                 <Box
        sx={{
            position: "absolute",
            top: "-20%",
            right: -55,
            zIndex: 0,
            opacity: .95
        }}
    >
        <Fade direction="right" triggerOnce>
            <img
                src={deco9}
                style={{
                    height: 300,
                     transform: " rotate(-10deg)"
                }}
            />
        </Fade>
    </Box>
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
                variant="contained"
                href="https://maps.app.goo.gl/BLLHhXG4Eu1FaRtZ8"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LocationOnOutlined sx={{ fontSize: 18 }} />}
                sx={{
                    mt: 2,
                    px: 4,
                    py: 1.2,
                    borderRadius: "999px",

                    background: "linear-gradient(180deg, #D37A3B 0%, #BF6734 100%)",

                    color: "#FAF6F0",

                    fontFamily: '"Instrument Sans", sans-serif',
                    fontSize: ".95rem",
                    fontWeight: 600,
                    textTransform: "none",
                    letterSpacing: ".02em",

                    boxShadow: "0 6px 16px rgba(191,103,52,.18)",

                    transition: ".25s ease",

                    "&:hover": {
                        background: "linear-gradient(180deg, #C96D33 0%, #B35E2F 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 24px rgba(191,103,52,.25)",
                    },

                    "& .MuiButton-endIcon": {
                        ml: .8,
                        "& svg": {
                            fontSize: 17,
                            color: "#FAF6F0",
                        },
                    },
                }}
            >
                Ver ubicación
            </Button>
     
        </Box>
    </Container>
</Box>
 {/* SEPARADOR */}
<Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={2}
    py={2}
>
    <Box
        sx={{
            width: 55,
            height: "1px",
            bgcolor: DECORATION,
            opacity: .45,
        }}
    />

    <Box
        sx={{
            width: 8,
            height: 8,
            border: `1.5px solid ${DECORATION}`,
            transform: "rotate(45deg)",
        }}
    />

    <Box
        sx={{
            width: 55,
            height: "1px",
            bgcolor: DECORATION,
            opacity: .45,
        }}
    />
</Box>
            {/* CALENDARIO */}
            <Box>
                <Typography textAlign={"center"} className={`${SECONDARY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem", letterSpacing:".04em",mt:2, mb:1,fontStyle:"italic"}}>
                   No queremos que te pierdas este día.
                    </Typography>
                <Box display={"flex"} justifyContent={"center"} mt={2}>
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
             <ImageMiddle bgPosition="center" height="70vh" bgImage={imgCp2} bgPositionY="50%"></ImageMiddle>
          <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px",position:"relative" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={timelineData.colorBody} textAlign={"center"} className={`${timelineData?.bodyTypo}`}>
                    Acompáñanos en cada instante de esta celebración.
                </Typography>
            </Fade>
           
           </Grid>	
           
                
           <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                {
                timelineData.events?.map((item,index) => (
                <Fade triggerOnce={true}  direction="up">
                 <Box 
                 key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: 3,
                    }}
                >
                    {/* Icono */}

                    <Box
                        component="img"
                        src={item.icon}
                        sx={{
                            width: item.iconSize,
                            mb: 2.5,
                            objectFit: "contain",
                        }}
                    />

                    {/* Nombre */}

                    <Typography
                        className={SECONDARY_TYPO}
                        sx={{
                            color: TITLE_COLOR,
                            fontSize: "1.9rem",
                            lineHeight: 1,
                            mb: 1.5,
                        }}
                    >
                        {item.eventName}
                    </Typography>

                    {/* Hora */}

                    <Typography
                        className={BODY_TYPO}
                        sx={{
                            color: TEXT_PRIMARY,
                            fontSize: ".82rem",
                            letterSpacing: ".22em",
                            textTransform: "uppercase",
                            opacity: .8,
                        }}
                    >
                         {dayjs(item.date).format("hh:mm A")}
                    </Typography>

                    {/* Separador */}

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        py={2}
                    >
                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />

                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                border: `1.5px solid ${DECORATION}`,
                                transform: "rotate(45deg)",
                            }}
                        />

                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />
                    </Box>
                </Box>
                   </Fade>
                ))
            }
       
   
     
            </Grid>	
            </Grid>
            <Box
            sx={{
                position: "absolute",
                top: "-10%",
                left: -100,
                zIndex: 1,
                opacity: .95,
                transform:"rotate(80deg)"
                
            }}
        >
            <Fade direction="right" triggerOnce>
                <img
                    src={deco8}
                    style={{
                        height: 200,
                        // transform: "rotate(-10deg)"
                    }}
                />
            </Fade>
        </Box>
        <Box
            sx={{
                position: "absolute",
                bottom: "-10%",
                right: -45,
                zIndex: 1,
                opacity: .95,
                transform:"rotate(-10deg)"
                
            }}
        >
            <Fade direction="right" triggerOnce>
                <img
                    src={deco9}
                    style={{
                        height: 300,
                        // transform: "rotate(-10deg)"
                    }}
                />
            </Fade>
        </Box>
        </div>
        <ImageMiddle bgImage={imgItinerario} height="80vh" ></ImageMiddle>
          <Box
      sx={{
        background: BG_MAIN,
        paddingTop:6,
        paddingX:2,
        position:"relative"
      }}
    >
         <Fade triggerOnce={true}  direction="right">
                    {/* <Box
                        component="img"
                        src={deco6}
                        sx={{
                            zIndex:1,
                            position: "absolute",
                            top: { xs: -100, sm: -60, md: -30 },
                            left: { xs: -80, sm: -60, md: -30 },
                            width: { xs: 180, md: 350 },
                            transform: "rotate(120deg)",
                        }}
                    /> */}
                    <Box
                        component="img"
                        src={deco5}
                        sx={{
                            position: "absolute",
                            top: { xs: -120, sm: -60, md: -30 },
                            left: { xs: -50, sm: -60, md: -30 },
                            height: { xs: 220, md: 350 },
                            transform: "rotate(150deg)",
                        }}
                    />
                    </Fade>
      {/* ---------- TITULO ---------- */}

     



      <Grid container spacing={4} justifyContent="center" p={2}>

       
        

        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              border: `1px solid ${BORDER_COLOR}`,
            //   borderRadius: 4,
              p: 4,
              textAlign: "center",
              height: "100%",
            }}
          >
            <Grid size={{ xs: 12, md: 12 }}>
                <Fade triggerOnce={true} direction="up">
                       <Typography
        textAlign="center"
        className={MAIN_TYPO}
        sx={{
          lineHeight:1,
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
                </Fade>
          
        </Grid>
        <Fade triggerOnce={true} direction="up">
            <Box
              component="img"
               src={imgDresscode}
              sx={{
                height: "20vh",
                maxHeight: 300,
                mt: 3,
                mb: 4,
              }}
            />
        </Fade>
 <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        py={2}
                    >
                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />

                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                border: `1.5px solid ${DECORATION}`,
                                transform: "rotate(45deg)",
                            }}
                        />

                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />
                    </Box>
               
                        <Typography
                                className={BODY_TYPO}
                                sx={{
                                fontSize:"1rem",
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    lineHeight: 1.9,
                                    mb: 5,
                                    
                                    
                                }}
                            >
                          Te sugerimos esta paleta de colores 
                                </Typography>
                 <Fade triggerOnce={true} direction="up">
          <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: { xs: 0.5, md: 1 },
                }}
            >
                {colorPalette.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: 28, sm: 34, md: 40 },
                            height: { xs: 28, sm: 34, md: 40 },
                            borderRadius: "50%",
                            bgcolor: item,
                        }}
                    />
                ))}
            </Box>
          </Fade>
          </Box>
        </Grid>



     
              <Grid size={{ xs: 12, md: 12 }}>
               
              </Grid>
      </Grid>
    </Box>
        <ImageMiddle bgPosition="center" height="70vh" bgImage={imgConf} bgPositionY="50%"></ImageMiddle>
            <Box bgcolor={BG_ACCENT} px={3} py={2} >
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
                            <Fade triggerOnce={true} direction="up">
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

                                       
                                        </Box>
                                        
                           </Fade>

                            {/* Segunda frase */}
<Fade triggerOnce={true} direction="up">
                            <Typography
                                className={BODY_TYPO}
                                sx={{
                                fontSize:"1rem",
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    lineHeight: 1.9,
                                    mb: 5,
                                    mt:5
                                    
                                }}
                            >
                            Para quienes deseen obsequiarnos un presente, contaremos con un buzón de sobres el día del evento <br></br>
                             O bien, puedes hacer una transferencia a nuestra cuenta bancaria
                                </Typography>
                                    

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
                                        mt:2
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Box
                                            component="img"
                                            src={bancomer}
                                            sx={{
                                                height: 40,
                                                
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                letterSpacing: ".18em",
                                                fontSize: "1.2rem",
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
                                                fontSize: "1.2rem",
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
               
                        </Fade>
                        </Paper>
                    </Box>
                    
                </Grid>
               </Grid>

                {/* <MiniGallery
                    images={miniGallery}
                     backgroundColor="rgb(250,250,250,.8)"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    /> */}
                    </Box>
            <ImageMiddle bgPosition="center" height="70vh" bgImage={imgDrs01274} bgPositionY="50%"></ImageMiddle>
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
                    <Fade triggerOnce={true} direction="up">
                    <Typography
                    className={BODY_TYPO}
                    sx={{
                  
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
                    className={SECONDARY_TYPO}
                    sx={{
                        
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
                    </Fade>
                    <Fade triggerOnce={true} direction="up">
                    <Typography
                    className={BODY_TYPO}
                    sx={{
                        
                       color: "#FFF",
                        letterSpacing: ".28em",
                        fontSize: ".9rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                    }}
                    >
                   Lugares para ti
                    </Typography>
                  </Fade>
                  <Fade triggerOnce={true} direction="up">
                    <Typography
                    className={SECONDARY_TYPO}
                    sx={{
                        
                        color: "#FFF",
                        // letterSpacing: ".18em",
                        fontSize: "1.5rem",
                        textTransform: "uppercase",
                        lineHeight: 1.5,
                        mt:2
                    }}
                    >
                    Confirma tu asistencia
                    </Typography>
                    </Fade>
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
                            hidePhoneNumberInput ={true}
                            
                        >
                            
            </RSVPForm>
                </Box>
                
                </Box>
                <Fade triggerOnce={true} direction="up">
                <Box
                sx={{
                    display: "flex",
        justifyContent: "center",
                }}
                >
                <Box
                                            component="img"
                                            src={deco2}
                                            sx={{
                                            height: "120px",
                                            }}
                                        />
                                        </Box>
</Fade>
                 <Box

    sx={{
        py: { xs: 2, md: 4 },
        px: 3,
        backgroundColor: BG_MAIN,
        display: "flex",
        justifyContent: "center",
    }}
>
    <Box
            sx={{
              border: `1px solid ${BORDER_COLOR}`,
            //   borderRadius: 4,
              p: 4,
              textAlign: "center",
              height: "100%",
            }}
          >
        
<Fade triggerOnce={true} direction="up">
        <Typography
        className={BODY_TYPO}
            sx={{
                color:TEXT_PRIMARY,
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
            className={SECONDARY_TYPO}
            sx={{
              
                fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                },
                letterSpacing: ".1em",
                mb: 2,
                mt:3,
                color:TITLE_COLOR
            }}
        >
            NO NIÑOS
        </Typography>
        </Fade>
 <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        py={2}
                    >
                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />

                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                border: `1.5px solid ${DECORATION}`,
                                transform: "rotate(45deg)",
                            }}
                        />

                        <Box
                            sx={{
                                width: 55,
                                height: "1px",
                                bgcolor: DECORATION,
                                opacity: .45,
                            }}
                        />
                    </Box>
                    <Fade triggerOnce={true} direction="up">
        <Typography
        className={MAIN_TYPO}
            sx={{
         
                fontSize: "2.5rem",
                color:TITLE_COLOR
                // color: "#fff",
            }}
        >
            Gracias
        </Typography>
        </Fade>
    </Box>
</Box>
            
          
                        <div style={{padding: "10px 10px" }}>

                    
                        
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
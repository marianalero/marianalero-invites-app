
import { GiftListProps } from "../../models/component/giftList";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { URL_REPO } from "../../config";
import { Box, IconButton, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";


import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import CustomButton from "../../components/CustomButton/CustomButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Grid from '@mui/material/Grid2';
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import dayjs from "dayjs";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Timeline from "@mui/lab/Timeline";
import FooterInvites from "../../components/Footer/FooterInvites";
import portada from "../../assets/boda-ana-juan-angel-webp/portada.webp";
import portadaHorz from "../../assets/boda-ana-juan-angel-webp/portada-horz.png";
import fondo1 from "../../assets/boda-ana-juan-angel-webp/fondo1.webp";
import fondo2 from "../../assets/demo-rose/itinerario.png";
import dresscodeimg from "../../assets/boda-ana-juan-angel-webp/dresscode.webp";
import itinerarioHorz from "../../assets/demo-rose/itinerario-hoz.png";
import monograma1 from "../../assets/demo-rose/monograma1.png";
import sobre from "../../assets/boda-ana-juan-angel-webp/sobre.webp";
import villa from "../../assets/demo-rose/vila-toscana.jpeg";
import iglesia from "../../assets/demo-rose/catedral.jpg";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { useSearchParams } from "react-router-dom";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import CalendarButton from "../../components/CalendarButton/CalendarButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// 🎨 FONDOS
const BG_MAIN = "#F5F1E8";       // Marfil
const BG_SECTION = "#E5D1D0";    // Rosa empolvado
const BG_ACCENT = "#A3ADA3";     // Salvia


// 🖋 TEXTOS
const TEXT_PRIMARY = "#718078";  // Salvia grisáceo
const TEXT_DARK = "#59635E";     // Salvia profundo


// 🎯 BOTONES
const BUTTON_PRIMARY = "#89968E";


// ✨ DETALLES
const CHAMPAGNE = "#C7BFAF";


// ✨ TÍTULOS
const TITLE_COLOR = "#718078";


// 🐎 ESTILO
const MAIN_TYPO = "edwardian";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "manrope-400";
const COUNTDOWN_DATE = new Date(2026, 11, 5);
const RSVP_DATE_LINE = new Date(2026, 10, 15);
const INVITATION_ID = 9;

const URL_SONG = `${URL_REPO}/canciones/AThousandYears-ChristinaPerri-Violin.mp3`;
const eventCards: EventCardProps[] = [
  {
        eventName: "Ceremonia Religiosa",
        date: new Date(2026, 10, 28, 17, 0, 0),
        locationName: "Catedral Metropolitana de Hermosillo",
        address: "Blvr. Miguel Hidalgo S/N, Centro Norte, Hermosillo, Son.",
        size: 12,
        color: CHAMPAGNE,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/w3WozHkVa5AYeZ1eA",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        image: `${iglesia}`,
    },
    {
        eventName: "Recepción",
        date: new Date(2026, 10, 28, 21, 0, 0),
        locationName: "Eventos Villa Toscana",
        address: "C. Quintero Arce 280, Puerta Grande, 83246 Hermosillo, Son.",
        size: 12,
        color: CHAMPAGNE,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/VbwtzUFgSwEJPoam6",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        image: `${villa}`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencia de Regalos",
    titleColor : TITLE_COLOR,
    mainPhrase:
        "Lo más valioso para nosotros es contar con tu compañía. Si deseas consentirnos con un regalo, aquí encontrarás algunas opciones.",

    items: [
        {
            number: "500055211",
            link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60024483",
            icon: `${URL_REPO}boda/boda-brisa-rey/mesa/7.png`,
        },
    ],
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_DARK,
    bgColor: BG_MAIN,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tendremos un buzón de sobres el día del evento",
    secondPhrase: "O bien, puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TITLE_COLOR,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "CLABE INTERBANCARIA",
                    number: "00528548541654854",
                }
            ],
            bank: "BBVA BANCOMER",
            name: "Marisol",
            textColor: CHAMPAGNE,
            bodyTypo: BODY_TYPO,
            bgColor: BG_MAIN,
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};

const dresscode:DressCodeProps = {
        fontSize:"3rem",
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:3,
        title:"FORMAL",
        image: `${dresscodeimg}`,
      imageSize:"200px",
      bodyFontSize:".8rem"

    
    }
const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: TEXT_PRIMARY,
    colorTitle: TEXT_PRIMARY,
    colorBody: TEXT_PRIMARY,
    fontSize: "3rem",
    bgColor: BG_ACCENT,
    events: [
        {
            eventName: "Ceremonia Religiosa",
            date: new Date(2026, 9, 9, 16, 0, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/15.png`,
        },
        {
            eventName: "Coctel de Bienvenida",
            date: new Date(2026, 9, 9, 16, 0, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/16.png`,
        },
         {
            eventName: "Recepción",
            date: new Date(2026, 9, 9, 16, 0, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/17.png`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 16, 30, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/10.png`,
        },
        {
            eventName: "Vals Novios",
            date: new Date(2026, 9, 9, 17, 30, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/11.png`,
        },
        {
            eventName: "Fin del evento",
            date: new Date(2026, 9, 9, 21, 0, 0),
            icon: `${URL_REPO}boda/boda-ana-juan-angel/iconos/12.png`,
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

const WeddingDemoRose  = () => { 
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


    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const coverSource = isSmallScreen
        ? portada
        : portadaHorz;

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
        document.title = "Boda Marisol & Jesús";
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
                fontSizeNames="2rem"

                brideName="Marisol"
                groomName="Jesús"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}

                envelopeImg={`${URL_REPO}xv/xv-evany/envelope.png`}
                sealImg={`${URL_REPO}boda/boda-brisa-rey/sello.png`}

                sealPosition={introSealPosition}
                // bottomRightCornerImg={`${URL_IMAGES}flores/5.png`}
                // topLeftCornerImg={`${URL_IMAGES}flores/5.png`}
                bottomRightCornerPosition={introBottomRightCornerPosition}
                topLeftCornerPosition={introTopLeftCornerPosition}

                guestName={guest ? guest.fullName : ""}
                guestCount={invitedGuests}
            />
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
            <div style={{
                height:"70vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                position: "relative",
                overflow: "hidden",
            }}>
                <Box
                    component="img"
                    src={coverSource}
                    alt=""
                    aria-hidden="true"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: coverSource ? "blur(0)" : "blur(24px)",
                        opacity: coverSource ? 1 : 0.85,
                        transform: coverSource ? "scale(1)" : "scale(1.04)",
                        transition: "opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease",
                    }}
                />
                <Box p={4}
                sx={{
                   display:"flex",
                   justifyContent:"center",
                   alignItems:"center",
                   flexDirection: "column",
                   position: "relative",
                   zIndex: 1,
                }}
                > 
               
                <Fade  direction="up" triggerOnce={true}>
                    <Box 
                    component="img"
                    src={monograma1}
                    alt="Imagen 2"
                    sx={{
                        width: isSmallScreen ? "80vw" : "30vh",
                        height: "auto",
                        filter: monograma1 ? "blur(0)" : "blur(24px)",
                        opacity: monograma1 ? 1 : 0.85,
                        transition: "opacity 0.8s ease, filter 0.8s ease",
                    }}
                />
                   </Fade>
                    
                    <Box>
                        <Fade direction="up" triggerOnce={true}>
                          

            
                    <Typography 
                      
                      mt={3}  
                      paddingX={1} 
                      fontSize={"2rem"} 
                      textAlign={"center"} 
                      sx={{
                        color:TITLE_COLOR,
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        overflow: "visible",
                        lineHeight: 1.15,
                      }} 
                      className={MAIN_TYPO} 
                    >
                      05  Diciembre, 2026
                      </Typography>
           

                   
                    </Fade>
                    </Box>
                    
                </Box>
            </div>

             
              <Box
                component="section"
                sx={{
                    position: "relative",
                    
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 4, md: 12 },
                    px: { xs: 2, md: 2 },

                    // Fondo editorial, sin repetir las flores de portada
                    background: `
                        radial-gradient(
                            circle at 12% 18%,
                            rgba(199, 178, 148, 0.22) 0%,
                            rgba(199, 178, 148, 0) 30%
                        ),
                        radial-gradient(
                            circle at 88% 25%,
                            rgba(229, 213, 204, 0.45) 0%,
                            rgba(229, 213, 204, 0) 34%
                        ),
                        radial-gradient(
                            circle at 15% 85%,
                            rgba(163, 173, 163, 0.22) 0%,
                            rgba(163, 173, 163, 0) 32%
                        ),
                        radial-gradient(
                            circle at 90% 85%,
                            rgba(199, 178, 148, 0.20) 0%,
                            rgba(199, 178, 148, 0) 35%
                        ),
                        #AEB8B0
                        `,
                }}
                >
                {/* Textura decorativa */}
                <Box
                    sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.18,
                    pointerEvents: "none",

                    backgroundImage: `
                        repeating-linear-gradient(
                        0deg,
                        rgba(80, 70, 60, 0.025) 0px,
                        rgba(80, 70, 60, 0.025) 1px,
                        transparent 1px,
                        transparent 4px
                        )
                    `,
                    }}
                />

                {/* Pequeños detalles orgánicos de fondo */}
                <Box
                    sx={{
                    position: "absolute",
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background: "rgba(163, 173, 163, 0.10)",
                    filter: "blur(70px)",
                    top: "-80px",
                    left: "-100px",
                    }}
                />

                <Box
                    sx={{
                    position: "absolute",
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background: "rgba(199, 178, 148, 0.12)",
                    filter: "blur(80px)",
                    bottom: "-100px",
                    right: "-100px",
                    }}
                />

      {/* CONTENIDO */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 720,
          alignItems: "center",
        }}
      >
       
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 570,

            // Altura proporcional a la composición
            // En móvil la tarjeta se extiende por debajo del sobre; esta altura
            // evita que el contenedor de la escena la recorte.
            height: { 
               xs: 560,
    sm: 560,
    md: 620,
             },
          }}
        >
          {/* SOBRE */}
          <Box
            component="img"
            src={`${sobre}`}
            alt=""
            sx={{
              position: "absolute",
              width: { xs: "92%", sm: "88%", md: "84%" },
              left: "50%",
              top: { xs: 5, md: 0 },
              transform: "translateX(-50%)",

              display: "block",
              zIndex: 1,

              filter: `
                drop-shadow(0 20px 25px rgba(70, 58, 48, 0.13))
              `,
            }}
          />

          {/* TARJETA */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 3,

              width:{
    xs:"78%",
    sm:"82%",
    md:"84%"
},

              left: { xs: "50%", md: "50%" },
              top: { xs: "10vh", md: "10vh" },

              transform: "translateX(-50%)",

              // El papel deja de ser una imagen con proporción fija: el fondo
              // acompaña la altura real del contenido de la tarjeta.
              backgroundColor: BG_MAIN,
              backgroundImage: `url(${URL_REPO}demos/marfil-ver.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              filter: `
                drop-shadow(
                  0 18px 24px rgba(70, 58, 48, 0.16)
                )
              `,
            }}
          >
            {/* CONTENIDO DE LA TARJETA */}
            <Stack
              sx={{
                px: { xs: 2, sm: 4, md: 5 },
                py: { xs: 2, sm: 4, md: 5 },

                alignItems: "center",
                textAlign: "center",
                color: TEXT_PRIMARY,
              }}
            >
              {/* MONOGRAMA */}
             {/* <Box
                component="img"
                src={`${URL_IMAGES}monograma1.png`}
                alt="AJA"
                sx={{
                    width: { xs: 48, sm: 55, md: 62 },
                    mb: { xs: 1.5, md: 2 },
                }}
                /> */}

              {/* NOMBRES */}
              <Typography
              className={SECONDARY_TYPO}
                sx={{
                  mt:1,
                  fontSize: {
                    xs: "1.15rem",
                    sm: "1.35rem",
                    md: "1.55rem",
                  },
                  lineHeight: 1.1,
                  color: TEXT_DARK,
                  mb: 2,
                }}
              >
                MARISOL <span style={{ fontSize:"1.5rem", marginRight:5, color:CHAMPAGNE}} className={MAIN_TYPO}>Y</span>  JESÚS
              </Typography>

              {/* Separador */}
              

              {/* FRASE */}
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
                "No fuiste ni antes ni después , fuiste a tiempo. A tiempo para que me enamorara de ti. "
              </Typography>
              {/* Separador */}
              <Box
                sx={{
                  width: 42,
                  height: "1px",
                  backgroundColor: CHAMPAGNE,
                  opacity: 0.8,
                  mb: { xs: 2, md: 2.5 },
                }}
              />
              {/* PADRES */}
              <Typography
                className={BODY_TYPO}
                sx={{
                  
                  mb: 1.5,
                 
                  fontSize: {
                     xs: "0.6rem",
                    sm: "0.65rem",
                    md: "0.72rem",
                  },
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: TEXT_PRIMARY,
                  // whiteSpace:"nowrap"
                }}
              >
                Con la bendición de Dios, y de nuestros padres
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  // display: "grid",
                  // gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                  columnGap: { xs: 1, md: 2 },
                }}
              >
                {/* Familia 1 */}
                <Stack
                  spacing={0.1}
                  alignItems="center"
                  sx={{
                    pr: { xs: 0.3, md: 1.5 },
                    borderRight: `1px solid ${CHAMPAGNE}`,
                    minWidth: 0,
                  }}
                >
                  <Typography
                   className={`${SECONDARY_TYPO} italic`}
                    sx={{
                      
                      
                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      // whiteSpace:"nowrap",
                      
                    }}
                  >
                    Laura Martínez González
                  </Typography>

                  <Typography
                   className={`${SECONDARY_TYPO} italic`}
                    sx={{
                      
                      // fontSize: "1.5rem",
                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      // whiteSpace:"nowrap"
                    }}
                  >
                    Carlos Ramírez Herrera
                  </Typography>
                </Stack>
                 <Stack alignItems="center" >
                  <Box
                sx={{
                  width: 42,
                  height: "1px",
                  backgroundColor: CHAMPAGNE,
                  opacity: 0.8,
                  mb: { xs: 2, md: 2.5 },
                  mt: { xs: 2, md: 2.5 },
                }}
              />
                  </Stack>   
                {/* Familia 2 */}
                <Stack
                  spacing={0.25}
                  alignItems="center"
                  sx={{
                    pl: { xs: 0.8, md: 1.5 },
                    minWidth: 0,
                  }}
                >
                  <Typography
                   className={`${SECONDARY_TYPO} italic`}
                    sx={{
                  
                      // fontSize: "1.5rem",

                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      whiteSpace:"nowrap"
                    }}
                  >
                   Patricia Torres Mendoza
                  </Typography>

                  <Typography
                   className={`${SECONDARY_TYPO} italic`}
                    sx={{
                    
                      // fontSize: "1.5rem",

                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      // whiteSpace:"nowrap"
                    }}
                  >
                   Fernando López Salazar
                  </Typography>
                </Stack>
              </Box>

              {/* INVITACIÓN FORMAL */}
              <Typography
              className={BODY_TYPO}
                sx={{
                  mt: { xs: 2.5, md: 3.5 },
                  
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.65rem",
                    md: "0.72rem",
                  },
                  lineHeight: 1.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: TEXT_PRIMARY,
                  maxWidth: 300,
                  // whiteSpace:"nowrap"
                }}
              >
                Tenemos el honor de invitarlos a la celebración de nuestra union
              </Typography>

           

            </Stack>
          </Box>

        
        </Box>
      </Stack>
    </Box>
    <Box bgcolor={BG_ACCENT} padding={0}>
                <Box bgcolor={BG_MAIN} 
                sx={{
                   backgroundImage: isSmallScreen? `URL(${URL_REPO}demos/marfil-ver.webp)` : `URL(${URL_REPO}demos/marfil-hor.webp)`,
                   backgroundSize:"cover",
                   border:"1px solid rgba(160,150,140,.15)",
                   boxShadow:"0 10px 30px rgba(60,60,60,.08)",
                   position:"relative"
                }}
                    >
                      <Box
                                          component="img"
                                          src={`${URL_REPO}boda/boda-brisa-rey/flores/8.png`}
                                          sx={{
                                          position: "absolute",
                                          top: isSmallScreen ? 10 : 10,
                                          right:isSmallScreen ? 5 : 10,
                                          width: 90,
                                          opacity: .20,
                                          transform: "rotate(270deg)"
                                          }}
                                      />
                         <Box
                                          component="img"
                                          src={`${URL_REPO}boda/boda-brisa-rey/flores/8.png`}
                                          sx={{
                                          position: "absolute",
                                          top: isSmallScreen ? "80%" : 10,
                                          left:isSmallScreen ? 5 : 10,
                                          width: 90,
                                          opacity: .20,
                                          transform: "rotate(50deg)"
                                          }}
                                      />
                        <CountDownSimple 
                          eventDate={COUNTDOWN_DATE}
                          
                          typoHeader={MAIN_TYPO}
                          typoCountdown={SECONDARY_TYPO}
                          fontSize="2.5rem"
                          bgColor="transparent"
                          circleBgColor="transparent"
                          circleTextColor={TEXT_PRIMARY}
                          primaryColor={TEXT_PRIMARY}
                            secondarColor={TEXT_PRIMARY}           
                            numberSize="3rem"   
                                >  
                            </CountDownSimple>
                    </Box>
                     
            </Box>
 
 <Box
 id="ubicacion"
  component="section"
  sx={{
    backgroundImage: `url(${fondo1})`,
    backgroundSize:"cover",
    position: "relative",
    minHeight: "70svh",
    overflow: "hidden",
    backgroundColor: BG_SECTION,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, md: 4 },
    py: { xs: 8, md: 12 },
  }}
>
  {/* Decoración sutil de fondo */}
  <Box
    sx={{
      position: "absolute",
      width: 340,
      height: 340,
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.16)",
      filter: "blur(90px)",
      top: "-120px",
      right: "-100px",
      pointerEvents: "none",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(163, 173, 163, 0.10)",
      filter: "blur(90px)",
      bottom: "-120px",
      left: "-100px",
      pointerEvents: "none",
    }}
  />

 
  <Stack
    sx={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: 500,
      alignItems: "center",
    }}
  >
    {eventCards.map((item, index) => (
      <Box
        key={index}
        sx={{
          width: "100%",
          maxWidth: 470,

          backgroundColor: BG_MAIN,
          mt:2,
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          boxShadow:
            "0 20px 45px rgba(80, 70, 70, 0.13)",

          border: "1px solid rgba(113, 128, 120, 0.06)",

          // Si solo habrá una ubicación,
          // podemos dejarla completamente recta.
          borderRadius: 0,
        }}
      >
        {/* FOTO */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Typography
          align={"center"}
            className={MAIN_TYPO}
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "3rem",
              },
              lineHeight: 1.1,
              color: TEXT_DARK,
              marginY:2
            }}
          >
            {item.eventName}
          </Typography>
          <Box
            component="img"
            src={item.image}
            alt="Jardín Casa Encantada"
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: "4 / 3",
              objectFit: "cover",
              objectPosition: "center 38%",
            }}
          />
        </Box>
        
        {/* INFORMACIÓN */}
        <Stack
          alignItems="center"
          textAlign="center"
          sx={{
            pt: { xs: 3, md: 3.5 },
            pb: { xs: 2.5, md: 3 },
          }}
        >
         
          {/* NOMBRE */}
          <Typography
            className={SECONDARY_TYPO}
            sx={{
              fontSize: {
                xs: "1.65rem",
                md: "1.9rem",
              },
              lineHeight: 1.1,
              color: TEXT_DARK,
            }}
          >
            {item.locationName}
          </Typography>

          {/* DIRECCIÓN */}
          <Typography
            className={BODY_TYPO}
            sx={{
              mt: 1.2,
              fontSize: {
                xs: "0.75rem",
                md: "0.8rem",
              },
              lineHeight: 1.65,
              
              maxWidth: 330,
            }}
          >
            {item.address}
            <br />
           
          </Typography>

          {/* BOTÓN */}
          <Box
            sx={{
              mt: 2.5,
            }}
          >
            <CustomButton
              href={item.href}
              bgColor={item.colorButton}
              color="white"
              label="Ver Ubicación"
              icon={<LocationOnOutlinedIcon />}
            />
          </Box>
        </Stack>
      </Box>
    ))}
  </Stack>
   <Box mt={2}>
                  <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TITLE_COLOR, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                      No queremos que te pierdas este día
                      </Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                      <CalendarButton
                          title="Boda Marisol & Jesús"
                          startDate="20261205T170000"
                          endDate="20261213T020000"
                          location="Cetedral de Hermosillo/Villa Toscana"
                          
                          // fileName="boda-valentina-sebastian"
                          buttonProps={calendarButtonProps}
                          />
                  </Box>
              </Box>
</Box>
            <div style={{backgroundImage: isSmallScreen ? `url("${fondo2}")` : `url("${itinerarioHorz}")`, backgroundSize: "cover", backgroundPosition: "bottom", padding: "20px 20px 50px 20px", height:"90vh" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography  style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2.5rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>Itinerario</Typography>
            </Fade>
            </Grid>	
           
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline>
                {
                timelineData.events?.map((item,index) => (
               
                  <TimelineItem key={index}>
                     
                        <TimelineOppositeContent
                            sx={{
                              m: 'auto 0',
                            }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={item.icon} height="80" loading="lazy" alt=""/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:timelineData.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"1rem"}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {`${dayjs(item.date).format("HH:mm")} HRS`}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary,fontSize:"1rem"}} className={`${SECONDARY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
    
                </Timeline>
            </Grid>	
      </Grid>
       </div>
       <Box bgcolor={BG_ACCENT} padding={4}>
                <Box bgcolor={BG_MAIN} 
                sx={{
                   backgroundImage: isSmallScreen? `URL(${URL_REPO}demos/marfil-ver.webp)` : `URL(${URL_REPO}demos/marfil-hor.webp)`,
                   backgroundSize:"cover",
                   border:"1px solid rgba(160,150,140,.15)",
                   boxShadow:"0 10px 30px rgba(60,60,60,.08)"
                }}
                    >
                        <DressCode {...dresscode}></DressCode>
                    </Box>
                     
            </Box>
 
           <Box
              component="section"
              sx={{
                  position: "relative",
                  minHeight: "50svh",
                  overflow: "hidden",
                  backgroundColor: BG_MAIN,
                  backgroundImage:  isSmallScreen ? `URL(${URL_REPO}demos/marfil-ver.webp)` : `URL(${URL_REPO}demos/marfil-hor.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 3, md: 5 },
                  py: { xs: 10, md: 12 },
              }}
          >
             <Box
                                          component="img"
                                          src={`${URL_REPO}boda/boda-brisa-rey/flores/8.png`}
                                          sx={{
                                          position: "absolute",
                                          top: isSmallScreen ? "75%" : 10,
                                          left:isSmallScreen ? -20 : 10,
                                          height: 200,
                                          opacity: .20,
                                          transform: "rotate(50deg)"
                                          }}
                                      />
            

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
            
           
             
             <Box
    component="section"
    sx={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
         backgroundImage: `url(${fondo1})`,
    backgroundSize:"cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 8,
    }}
>
    <Paper
        elevation={0}
        sx={{
            width: "100%",
            maxWidth: 470,
            bgcolor: BG_MAIN,
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
       

        {/* Frase principal */}

        <Typography
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
         
                
        </Typography>

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
                        className={SECONDARY_TYPO}
                        sx={{
                            fontSize: {
                              xs: "1.65rem",
                              sm: "1.9rem",
                            },
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap",
                            color: TEXT_DARK,
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

        {/* Segunda frase */}

        <Typography
            className={BODY_TYPO}
            sx={{
              fontSize:".8rem",
                color: giftListData.textColor,
                textAlign: "center",
                lineHeight: 1.9,
                mb: 5,
                mt:5
                
            }}
        >
          Tendremos un buzón de sobres el día del evento,<br></br> o bien, pueden hacer una transferencia a nuestra cuenta bancaria
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
                }}
            >
                <Stack
                    spacing={2}
                    alignItems="center"
                >
                    <Box
                        component="img"
                        src={`${URL_REPO}boda/boda-ana-juan-angel/BBVA.png`}
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
                        className={SECONDARY_TYPO}
                        sx={{
                            fontSize: {
                              xs: "1.65rem",
                              sm: "1.9rem",
                            },
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap",
                            color: TEXT_DARK,
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
                        Marisol Martinez Ramirez
                    </Typography>

                    
                </Stack>
            </Paper>
        ))}

        <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
        mt: 6,
        width: "100%",
        paddingLeft:2,
        // paddingRight:2
    }}
>
    <Typography
        className={MAIN_TYPO}
        sx={{
            fontSize: "2.5rem",
            color: TEXT_PRIMARY,
            lineHeight: .9,
        }}
    >
        Muchas gracias
    </Typography>

    <Box
        component="img"
        src={`${monograma1}`}
        sx={{
            width: 130,
            objectFit: "contain",
        }}
    />
</Stack>

       
    </Paper>
</Box>
            <div style={{height:100}}></div>
              <FooterInvites bgColor={BG_MAIN} color={BUTTON_PRIMARY}></FooterInvites>
                </Box>
        </div>
      
    )
}

export default WeddingDemoRose;

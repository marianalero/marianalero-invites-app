
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
import portada from "../../assets/boda-mariela-ivan/fondo.png";
import portadaHorz from "../../assets/boda-mariela-ivan/fondoHorz.png";
import fondo1 from "../../assets/boda-mariela-ivan/fondo.png";
import dresscodeimg from "../../assets/boda-mariela-ivan/dresscode.png";
import monograma1 from "../../assets/boda-mariela-ivan/monograma.png";
import monograma2 from "../../assets/boda-mariela-ivan/monogramaAzul.png";
import separador from "../../assets/boda-mariela-ivan/separador.png";
import rama from "../../assets/boda-mariela-ivan/rama.png";
import ramaRosa from "../../assets/boda-mariela-ivan/rama-rosa.png";

import icono1 from "../../assets/boda-mariela-ivan/iconos/1.png";
import icono2 from "../../assets/boda-mariela-ivan/iconos/2.png";
import icono3 from "../../assets/boda-mariela-ivan/iconos/3.png";
import icono4 from "../../assets/boda-mariela-ivan/iconos/4.png";
import icono5 from "../../assets/boda-mariela-ivan/iconos/5.png";
import sobre from "../../assets/boda-mariela-ivan/sobre.png";
import sobreAbierto from "../../assets/boda-mariela-ivan/sobre-abierto.png";
import sobreCerrado from "../../assets/boda-mariela-ivan/sobre-cerrado.png";
import villa from "../../assets/boda-mariela-ivan/recepcio.png";
import banco from "../../assets/boda-mariela-ivan/bbva.png";
import { useSearchParams } from "react-router-dom";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditorialCountdown from "../../components/EditorialCountdown";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
// 🌿 FONDOS

const BG_MAIN = "#F6F1E8";        // Ivory
const BG_SECTION = "#F9F4EE";     // Ivory ligeramente más cálido
const BG_ACCENT = "#C86B4A";      // Terracota


// 🖋 TEXTOS

const TEXT_PRIMARY = "#6D2D3A";   // Vino
const TEXT_DARK = "#4F1F2A";      // Vino más oscuro


// 🎯 BOTONES

const BUTTON_PRIMARY = "#C86B4A"; // Terracota


// ✨ DETALLES

const CHAMPAGNE = "#C89B8A";      // Rose Gold


// ✨ TÍTULOS

const TITLE_COLOR = "#6D2D3A";    // Vino



// 🖋 TEXTO SOBRE FONDOS OSCUROS

const TEXT_LIGHT = "#F6F1E8";     // Ivory
// 🐎 ESTILO
const MAIN_TYPO = "eyesome";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "manrope-400";
const COUNTDOWN_DATE = new Date(2026, 10, 6);
const RSVP_DATE_LINE = new Date(2026, 9, 15);
const INVITATION_ID = 9;
/** Solo celulares bajos y angostos; no cambia iPhone normal ni desktop. */
const COVER_SMALL_PHONE = "@media (max-width: 430px) and (max-height: 740px)";
const URL_SONG = `${URL_REPO}/canciones/Fran-Septismbro.mp3`;
const eventCards: EventCardProps[] = [

    {
        eventName: "Civil y Recepción",
        date: new Date(2026, 10, 28, 20, 30, 0),
        locationName: "Finca Las Perlas",
        address: "Carr. 26 km 10.5, 83323 Hermosillo, Son.",
        size: 12,
        color: CHAMPAGNE,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/eX3nJC7ZJoRewRXb9",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: "transparent",
        
        image: `${villa}`,
    },
    
];

const giftListData: GiftListProps = {
    title:"Lluvia de sobres",
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_DARK,
    bgColor: BG_MAIN,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tu presencia será nuestro mejor regalo.",
    secondPhrase: "Si además deseas acompañarnos con un detalle, te compartimos nuestra cuenta.",
    envelopeTitleColor: TITLE_COLOR,
    
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "CLABE INTERBANCARIA",
                    number: "012760029769324873",
                },
                 {
                    numberType: "No. Cuenta",
                    number: "2976932487 ",
                }
            ],
            
            bank: "BBVA BANCOMER",
            name: "Mariela",
            textColor: CHAMPAGNE,
            bodyTypo: BODY_TYPO,
            bgColor: BG_MAIN,
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};

const dresscode:DressCodeProps = {
        fontSize:"2.5rem",
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
    colorPrimary: BUTTON_PRIMARY,
    colorTitle: BUTTON_PRIMARY,
    colorBody: BUTTON_PRIMARY,
    fontSize: "3rem",
    bgColor: BG_ACCENT,
    events: [
        {
            eventName: "Recepción de Invitados",
            date: new Date(2026, 9, 9, 20, 30, 0),
            icon: `${icono1}`,
        },
        {
            eventName: "Ceremonia Civil",
            date: new Date(2026, 9, 9, 21, 0, 0),
            icon: `${icono2}`,
        },
         {
            eventName: "Primer baile",
            date: new Date(2026, 9, 9, 21, 45, 0),
            icon: `${icono3}`,
        },
        {
            eventName: "Cena",
            date: new Date(2026, 9, 9, 22, 0, 0),
            icon: `${icono4}`,
        },
        {
            eventName: "Fin del evento",
            date: new Date(2026, 9, 9, 2, 0, 0),
            icon: `${icono5}`,
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


const WeddingMariela  = () => { 
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
        document.title = "Boda Mariela & Ivan";
    }, []);

const handleConfirmed = (
    name: string,
    confirmText: string,
    phoneNumber: string,
    totalConfirmed: string,
    companionNames?: string,
  ) => {
    console.log(
      "Confirmado:",
      name,
      confirmText,
      phoneNumber,
      totalConfirmed,
      companionNames,
    );
    if (confirmText == "Asistiré") {
      // window.open(`https://wa.me/+526625017752?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20Quinceañera%20%20de%20Briana.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');
    } else {
      // window.open(`https://wa.me/+526625017752?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20Quinceañera%20de%20Briana.Mi nombre es: ${name}`, '_blank');
    }
  };
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

                envelopeImg={sobreCerrado}
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
              <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: "80vh",
            overflow: "hidden",
            // bgcolor: BG_MAIN,
            backgroundSize:"cover",
            backgroundImage: `url(${coverSource})`,
          }}
        >
          <Fade triggerOnce={true} direction="up">
            <Box
              sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 2,
                px: 4,
                [COVER_SMALL_PHONE]: {
                  px: 3,
                  pt: 6,
                  pb: 16,
                },
              }}
            >
               <Box
                component="img"
                src={monograma1}
                alt="AJA"
                sx={{
                    width: { xs: 48, sm: 55, md: 62 },
                    mb: { xs: 1.5, md: 2 },
                    opacity:.8
                }}
                />
              <Typography
                className={MAIN_TYPO}
                sx={{
                  fontSize: {
                    xs: "5rem",
                    md: 92,
                  },
                  color: TITLE_COLOR,
                  lineHeight: 2,
                  [COVER_SMALL_PHONE]: {
                    fontSize: "3.6rem",
                    lineHeight: 1.1,
                  },
                }}
              >
                Mariela
              </Typography>

              <Typography
                className={MAIN_TYPO}
                sx={{
                  fontSize: "5rem",
                  color: TITLE_COLOR,
                  my: 1,
                  [COVER_SMALL_PHONE]: {
                    fontSize: "3.2rem",
                    my: 0,
                    lineHeight: 1,
                  },
                }}
              >
                &
              </Typography>

              <Typography
                translate="no"
                className={MAIN_TYPO}
                sx={{
                  fontSize: {
                    xs: "5rem",
                    md: 92,
                  },
                  color: TITLE_COLOR,
                  lineHeight: 2,
                  [COVER_SMALL_PHONE]: {
                    fontSize: "3.6rem",
                    lineHeight: 1.1,
                  },
                }}
              >
                Ivan
              </Typography>

                <Box
                  component="img"
                  src={separador}
                  sx={{
                   
                    width: { xs: 250, md: 350 },
                    
                   
                  }}
                />
              <Typography
                mt={4}
                className={SECONDARY_TYPO}
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "3.5rem",
                  },
                  color: TITLE_COLOR,
                  [COVER_SMALL_PHONE]: {
                    fontSize: "1.2rem",
                    mt: 2,
                    px: 4,
                  },
                }}
              >
                06 Noviembre 2026
              </Typography>
            </Box>
          </Fade>

          <Box
            component="img"
            src={rama}
            sx={{
              position: "absolute",
              top: { xs: -30, sm: -60, md: -40 },
              left: { xs: -30, sm: -60, md: -30 },
              height: { xs: 150, md: 350 },
              transform: "rotate(50deg)",
              opacity: 0.92,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 160,
                top: -50,
                left: -45,
              },
            }}
          />
          

          <Fade triggerOnce={true} direction="right">
            <Box
              component="img"
              src={rama}
              sx={{
                zIndex: 10,
                position: "absolute",
                bottom: { xs: -20, sm: -60, md: -60 },
                right: { xs: -20, sm: -60, md: 50 },
                height: { xs: 150, md: 350 },
                transform: "scale(-1,-1) rotate(120deg)",
                pointerEvents: "none",
                [COVER_SMALL_PHONE]: {
                  zIndex: 1,
                  height: 110,
                  bottom: -60,
                  right: -50,
                },
              }}
            />
           
          </Fade>
        </Box>

             
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
                    background: BG_ACCENT
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
            src={`${sobreAbierto}`}
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
             <Box
                component="img"
                src={monograma2}
                alt="AJA"
                sx={{
                    width: { xs: 48, sm: 55, md: 62 },
                    mb: { xs: 1.5, md: 2 },
                }}
                />

              {/* FRASE */}
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
                Porque las mejores historias de amor se escriben con la madurez del alma y el abrazo de la familia.
              </Typography>
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
                Celebramos un amor maduro, consciente y elegido con el corazón. Una unión que suma historias, multiplica alegrías y comparte el futuro.
              </Typography>
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
               Porque el amor verdadero sabe esperar, sabe madurar y sabe exactamente lo que quiere. <br></br>Nos casamos y nos encantaría compartir nuestra felicidad contigo.
              </Typography>
             

            </Stack>
             <Box
             sx={{
              display:"flex",
              justifyContent:"center"
             }}
             
             >


               <Box
                  component="img"
                  src={separador}
                  sx={{
                   
                    width: { xs: 150, md: 350 },
                    mb:3
                   
                  }}
                />
             </Box>
            
            
          </Box>

        
        </Box>
        <Box position={"relative"}>
           <Box
            component="img"
            src={ramaRosa}
            sx={{
              position: "absolute",
              top: { xs: -50, sm: -60, md: -40 },
              left: { xs: -50, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(120deg)",
              opacity: 0.92,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 160,
                top: -50,
                left: -45,
              },
            }}
          />
           <Box
            component="img"
            src={ramaRosa}
            sx={{
              position: "absolute",
              bottom: { xs: -30, sm: -60, md: -40 },
              right: { xs: -50, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(290deg)",
              opacity: 0.92,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 160,
                top: -50,
                left: -45,
              },
            }}
          />
 <EditorialCountdown
                  eventDate={COUNTDOWN_DATE}
                  
                  background={{ color: "transparent" }}
                  title={{
                    fontFamily: '"EyesomeScript", serif',
                    color: TEXT_LIGHT,
                    fontSize: "2rem",
                    letterSpacing: "0.08em",
                    fontWeight:700,
                    lineHeight:1.5,
                    dateFormat:"ddddd DD MMMM"
                    // textTransform:"uppercase"
                  }}
                  number={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: TEXT_LIGHT,
                    fontSize: "3.25rem",
                    fontWeight: 500,
                  }}
                  label={{
                    fontFamily: '"Cormorant Garamond", sans-serif',
                    color: TEXT_LIGHT,
                    fontSize: "0.7rem",
                    fontWeight: 500,
                  }}
                  divider={{ color: TEXT_LIGHT }}
                  responsive={{
                    numberSize: "2rem",
                    labelSize: "0.62rem",
                    columnGap: 2,
                  }}
                />
        </Box>
       
      </Stack>
       
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
      position: "relative",
     
     
     
      
    }}
  />

  <Box
                                          component="img"
                                          src={rama}
                                          sx={{
                                          position: "absolute",
                                          top: isSmallScreen ? 10 : 10,
                                          right:isSmallScreen ? -5 : 10,
                                          width: isSmallScreen ? 100 : 200,
                                          
                                          transform: "rotate(230deg)"
                                          }}
                                      />
                         <Box
                                          component="img"
                                          src={rama}
                                          sx={{
                                          position: "absolute",
                                          top: isSmallScreen ? "80%" : "70%",
                                          left:isSmallScreen ? 5 : 10,
                                          width: isSmallScreen ? 100 : 200,
                                          transform: "rotate(50deg)"
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
         <Box
            component="img"
            src={item.image}
            alt="Finca"
            sx={{
              display: "block",
              width: "50%",
              aspectRatio: "4 / 3",
              objectFit: "cover",
              objectPosition: "center 38%",
            }}
          />
          {/* NOMBRE */}
          <Typography
            className={SECONDARY_TYPO}
            sx={{
              mt:2,
              fontSize: {
                xs: "1.65rem",
                md: "1.9rem",
              },
              lineHeight: 1.1,
              color: BG_ACCENT,
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
</Box>
   
            <div style={{
                  backgroundColor: `
                linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55))
              `,
              backgroundSize: "cover",
               backgroundPosition: "bottom",
                padding: "20px",
                 }}>

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
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"1.5rem"}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {`${dayjs(item.date).format("HH:mm")} HRS`}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary,fontSize:"1.2rem"}} className={`${SECONDARY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
    
                </Timeline>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
              <Typography align="center" className={SECONDARY_TYPO} >Les pedimos llegar con anticipación para acompañarnos puntualmente en nuestra ceremonia civil</Typography>
            </Grid>
      </Grid>
       </div>
       <Box bgcolor={TITLE_COLOR} padding={4}>
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
            src={rama}
            sx={{
              position: "absolute",
              top: { xs: -50, sm: -60, md: -40 },
              left: { xs: -50, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(120deg)",
              opacity: 0.8,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 160,
                top: -50,
                left: -45,
              },
            }}
          />
           <Box
            component="img"
            src={rama}
            sx={{
              position: "absolute",
              bottom: { xs: -30, sm: -60, md: -40 },
              right: { xs: -50, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(290deg)",
              opacity: 0.92,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 160,
                top: -50,
                left: -45,
              },
            }}
          />
            

            <RSVPExcel
            dateLine={RSVP_DATE_LINE}
            textColor={"black"}
            qrActive={false}
            mainTypo={MAIN_TYPO}
            bodyTypo={BODY_TYPO}
            count={invitedGuests}
            color={TITLE_COLOR}
            colorButton={TITLE_COLOR}
            invitationId={0}
            bgColor={"transparent"}
            confirmed={handleConfirmed}
            hidePhoneNumberInput={true}
            transparencyButton={true}
          ></RSVPExcel>
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
        flexDirection:"column",
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
            mt:2
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
       <Box 
       sx={{
        display:"flex",
        justifyContent:"center"
       }}
       >
              <Box
            component="img"
            src={sobre}
            alt="Finca"
            sx={{
              display: "block",
              width: "40%",
              height:"auto",
             
            }}
          />
       </Box>
        
        <Typography
            className={BODY_TYPO}
            sx={{
                // color: giftListData.textColor,
                textAlign: "center",
                
                lineHeight: 1.9,
                mb: 3,
                          
                            
            }}
        >
            {giftListData.envelopePhrase}<br></br>       
            {giftListData.secondPhrase}<br></br> 
        </Typography>

        
       

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
                        src={banco}
                        sx={{
                            height: 40,
                            
                        }}
                    />

                    <Typography
                        className={BODY_TYPO}
                        sx={{
                            letterSpacing: ".18em",
                          
                            // color: TEXT_PRIMARY,
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
                           
                            // color: TEXT_PRIMARY,
                            opacity: .85,
                            textAlign: "center",
                        }}
                    >
                         {bank.name}
                    </Typography>

                    
                </Stack>
            </Paper>
        ))}

      
       
    </Paper>
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
            mt:3,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        }}
    >
        {/* Título */}
         <Typography
            className={SECONDARY_TYPO}
            sx={{
                color: giftListData.textColor,
                textAlign: "center",
                
                lineHeight: 1.9,
                mb: 2,
                          
                            fontSize:"1.2rem",
            }}
        >
            
      
              Con mucho cariño, hemos decidido que esta celebración sea exclusivamente para adultos. Agradecemos tu comprensión y esperamos disfrutar contigo de una velada inolvidable.
        </Typography>
         <Box
         sx={{
           display:"flex",
       
            justifyContent:"center"
         }}
          >
        <Box
                component="img"
                src={separador}
                alt="AJA"
                sx={{
                    width: { xs: 150, sm: 250, md: 350 },
                    mb: { xs: 1.5, md: 2 },
                    opacity:.8
                }}
                />
                </Box>   
        </Paper>
</Box>
            <div style={{height:100}}></div>
              <FooterInvites bgColor={BG_MAIN} color={BUTTON_PRIMARY}></FooterInvites>
                </Box>
        </div>
      
    )
}

export default WeddingMariela;

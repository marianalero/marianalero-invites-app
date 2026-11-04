
import { GiftListProps } from "../../models/component/giftList";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { URL_REPO } from "../../config";
import { Box, Button,  Card, CardActionArea, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import InstagramIcon from '@mui/icons-material/Instagram';

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
import { useSearchParams } from "react-router-dom";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import EditorialCountdown from "../../components/EditorialCountdown";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import RSVPForm from "../../components/RSVP/RSVPForm";

/**
 * Imágenes en Cloudinary (panel > Medios, clave MEDIA_KEY).
 * Tipo de imagen e índice (sortOrder) que usa esta invitación:
 *
 *  cover          0  portada vertical (celular)
 *  cover-desktop  0  portada horizontal (escritorio)
 *  background     0  fondo de las secciones ubicación y regalos
 *  reception      0  foto del lugar de la recepción
 *  envelope       0  sobre cerrado (intro)
 *  envelope       1  sobre abierto (tarjeta con frases)
 *  seal           0  sello del sobre (intro)
 *  ornament       0  separador
 *  ornament       1  rama
 *  ornament       2  rama rosa
 *  ornament       3  sobre (lluvia de sobres)
 *  icon           0  monograma portada
 *  icon           1  monograma tarjeta
 *  icon           2-6 iconos del itinerario (en orden)
 *  icon           7  cámara (comparte tus recuerdos)
 *  icon           8  logo del banco
 *  icon           9  imagen del dresscode
 *  icon           10 código QR
 */
const MEDIA_KEY = "boda-sol-hector";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";
// 🌿 FONDOS

// 🎨 FONDOS

const BG_MAIN = "#F3EBDD";        // Beige cálido
const BG_SECTION = "#F8F4EC";     // Marfil suave
const BG_ACCENT = "#DCD8C8";      // Beige verdoso


// 🌿 VERDES

const SAGE = "#A3A58C";           // Verde seco
const OLIVE = "#6D755B";          // Verde olivo



// 🖋 TEXTOS

const TEXT_PRIMARY = "#6D2D3A";   // Vino
const TEXT_DARK = "#3F352E";      // Café oscuro


// 🎯 BOTONES

const BUTTON_PRIMARY = "#702F3C"; // Vino



// ✨ DETALLES

const CHAMPAGNE = "#B9A184";      // Champagne
     // Vino suave


// ✨ TÍTULOS

const TITLE_COLOR = "#4D5744";    // Verde profundo


// 🖋 TEXTO SOBRE FONDOS OSCUROS

const TEXT_LIGHT = "#F8F4EC";     // Marfil
// 🐎 ESTILO
const MAIN_TYPO = "edwardian";
const SECONDARY_TYPO = "playfair-display-400 ";
const BODY_TYPO = "lora";
const COUNTDOWN_DATE = new Date(2026, 11, 5);
const RSVP_DATE_LINE = new Date(2026, 10, 26);
const INVITATION_ID = 53;
/** Solo celulares bajos y angostos; no cambia iPhone normal ni desktop. */
const COVER_SMALL_PHONE = "@media (max-width: 430px) and (max-height: 740px)";
const URL_SONG = `${URL_REPO}/canciones/CarinLeon-DesdeQueTeTengo.mp3`;



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


const WeddingSolHector  = () => { 
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

    // IMÁGENES EN CLOUDINARY
    const [cloudAssets, setCloudAssets] = useState<InvitationAsset[]>([]);

    useEffect(() => {
        getAssets(MEDIA_KEY)
            .then(setCloudAssets)
            .catch(() => setCloudAssets([]));
    }, []);

    const assetUrl = (kind: string, index = 0) =>
        cloudAssets
            .filter((asset) => asset.assetKind === kind)
            .sort((a, b) => a.sortOrder - b.sortOrder)[index]?.secureUrl ??
        EMPTY_ASSET;

    const portada = assetUrl("cover");
    const portadaHorz = assetUrl("cover-desktop");
    const fondo1 = assetUrl("background");
    const villa = assetUrl("reception");
    const sobreCerrado = assetUrl("envelope", 0);

    const sello = assetUrl("seal");
    const separador = assetUrl("ornament", 2);
    const rama = assetUrl("ornament", 1);
    const ramaRosa = assetUrl("ornament", 5);
    // const sobre = assetUrl("ornament", 3);

    const monograma2 = assetUrl("icon", 5);
    // const camara = assetUrl("icon", 7);
    // const banco = assetUrl("icon", 8);
    // const dresscodeimg = assetUrl("icon", 9);
    // const qrImage = assetUrl("icon", 10);
    const liverpool = assetUrl("icon", 6);
    const amazon = assetUrl("icon", 7);
    const eventCards: EventCardProps[] = [
        {
            eventName: "Civil y Recepción",
            date: new Date(2026, 10, 28, 18, 0, 0),
            locationName: "Hacienda Aqua aventura",
            address: "Cjon. Gloria Supermanzana final, San Felipe, Heroica Cdad. de Ures, Son.",
            size: 12,
            color: SAGE,
            mainTypo: SECONDARY_TYPO,
            bodyTypo: BODY_TYPO,
            href: "https://maps.app.goo.gl/gt3npxEareodgPtx8",
            colorButton: BUTTON_PRIMARY,
            colorIcon: BUTTON_PRIMARY,
            fontSize: "3rem",
            bgColor: "transparent",
            image: villa,
        },
    ];

    // const dresscode: DressCodeProps = {
    //     fontSize: "2.5rem",
    //     mainTypo: MAIN_TYPO,
    //     bodyTypo: BODY_TYPO,
    //     color: TEXT_PRIMARY,
    //     type: 3,
    //     title: "FORMAL",
    //     image: dresscodeimg,
    //     imageSize: "200px",
    //     bodyFontSize: ".8rem",
    // };

    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: TEXT_LIGHT,
        colorTitle: TEXT_LIGHT,
        colorBody: TEXT_LIGHT,
        fontSize: "3rem",
        bgColor: BUTTON_PRIMARY,
        events: [
            {
                eventName: "Ceremonia Civil",
                date: new Date(2026, 9, 9, 18, 0, 0),
                icon: assetUrl("icon", 0),
            },
            {
                eventName: "Entrada novios y baile",
                date: new Date(2026, 9, 9, 20, 0, 0),
                icon: assetUrl("icon", 1),
            },
            {
                eventName: "Cena",
                date: new Date(2026, 9, 9, 20, 45, 0),
                icon: assetUrl("icon", 2),
            },
            {
                eventName: "Baile",
                date: new Date(2026, 9, 9, 21, 0, 0),
                icon: assetUrl("icon", 3),
            },
        ],
    };

    const giftListData: GiftListProps = {
    mainPhrase: "Si su deseo es hacernos algún obsequio compartimos las opciones",
    items: [
            {
                link: "https://www.amazon.com.mx/wedding/guest-view/6HRXGIP86NE",
                icon: `${amazon}`,
            },
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60048219",
                icon: `${liverpool}`,
            }
        ],
  
    title:"Lluvia de sobres",
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_DARK,
    bgColor: BG_MAIN,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
    
    envelopeTitleColor: TITLE_COLOR,
  
};
const lodgingOptions = [
  {
    name: "Hotel El Guayacán",
    description: "Carretera Hermosillo–Ures km, La Estancia de Guadalupe",
    phoneNumber:"662 315 5415"
  
  },
  {
    name: "Hacienda El Javián",
    description: "Carretera Hermosillo–Ures km 58.5",
   phoneNumber:"662 233 8853 (solo WhatsApp)"
  },
  {
    name: "Hotel El Tejabán",
    description: "",
  phoneNumber:"623 106 1973"
  },
  {
    name: "Hotel Calderón",
    description: "Abasolo y Contreras s/n",
    phoneNumber:"662 401 2130"
   
  },
  {
    name: "Hotel Las Bugambilias",
    description: "Carretera Hermosillo-Ures km 57, Guadalupe de Ures, Sonora",
    phoneNumber:"623 105 0125"
   
  },
];

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
        document.title = "Boda Sol & Hector";
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
                fontSizeNames="3rem"

                brideName="Soledad"
                groomName="Hector"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={OLIVE}

                envelopeImg={sobreCerrado}
                sealImg={sello}

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
               {/* <Box
                component="img"
                src={monograma1}
                alt="AJA"
                sx={{
                    width: { xs: 90, sm: 80, md: 90 },
                    mb: { xs: 1.5, md: 2 },
                    opacity:.8
                }}
                /> */}
              <Typography
                className={MAIN_TYPO}
                sx={{
                  fontSize: {
                    xs: "5rem",
                    md: 92,
                    mt:-50
                  },
                  color: TEXT_PRIMARY,
                  lineHeight: 1,
                  [COVER_SMALL_PHONE]: {
                    fontSize: "3.6rem",
                    lineHeight: 1.1,
                  },
                }}
              >
                Soledad<br></br>&<br></br> Hector
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
                05 DICIEMBRE 2026
              </Typography>
            </Box>
          </Fade>

          <Box
            component="img"
            src={rama}
            sx={{
              position: "absolute",
              top: { xs: -10, sm: -60, md: -40 },
              left: { xs: -30, sm: -60, md: -30 },
              height: { xs: 100, md: 350 },
              transform: "rotate(120deg)",
              opacity: 0.92,
              pointerEvents: "none",
              [COVER_SMALL_PHONE]: {
                height: 120,
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
                right: { xs: -40, sm: -60, md: 50 },
                height: { xs: 100, md: 350 },
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
                "Los tiempos de Dios son perfectos" 
              </Typography>
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
              Nuestra historia nos ha traído hasta aquí, y hoy queremos celebrar el amor que nos une junto a las personas que más queremos.


              </Typography>
              <Typography mb={2}  className={`${SECONDARY_TYPO} italic`}>
           ¡Acompáñanos en este día tan especial!
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
              top: { xs: -10, sm: -60, md: -40 },
              left: { xs: -100, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(10deg)",
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
              right: { xs: -90, sm: -60, md: -30 },
              width: { xs: 150, md: 350 },
              transform: "rotate(180deg)",
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
                    fontFamily: '"Edwardian Script ITC", serif',
                    color: TEXT_DARK,
                    fontSize: "2.2rem",
                    letterSpacing: "0.08em",
                    fontWeight:700,
                    lineHeight:1.5,
                    dateFormat:"dddd DD MMMM"
                    // textTransform:"uppercase"
                  }}
                  number={{
                    fontFamily: '"Playfair Display", serif',
                    color: TEXT_DARK,
                    fontSize: "3.25rem",
                    fontWeight: 500,
                  }}
                  label={{
                    fontFamily: '"Playfair Display", sans-serif',
                    color: TEXT_DARK,
                    fontSize: "0.7rem",
                    fontWeight: 500,
                  }}
                  divider={{ color: TEXT_DARK }}
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
          backgroundImage: `URL(${portada})` ,
          backgroundSize:"contain",
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
              color: OLIVE,
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
              color: SAGE,
            }}
          >
            {item.locationName}
          </Typography>

          {/* DIRECCIÓN */}
          <Typography
            className={BODY_TYPO}
            sx={{
              mt: 1.2,
             
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
                  backgroundColor: OLIVE,
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
                              flex: 1,
                              minWidth: 0,
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <Box
                                component="img"
                                className="intinerario-icon"
                                src={item.icon}
                                loading="lazy"
                                alt=""
                                sx={{
                                  display: "block",
                                  width: 120,
                                  maxWidth: "100%",
                                  height: 80,
                                  objectFit: "contain",
                                }}
                              />
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:timelineData.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, flex: 1, minWidth: 0 }}>
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
           
      </Grid>
       </div>

            
           
             
            <Box
      component="section"
      sx={{
        backgroundColor: BG_MAIN,
        color: TEXT_DARK,
        fontFamily: BODY_TYPO,
        px: { xs: 3, md: 6 },
        py: { xs: 7, md: 10 },
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        <Typography
        className={SECONDARY_TYPO}
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: OLIVE,
            mb: 1.5,
          }}
        >
          UN DETALLE DE AMOR
        </Typography>

        <Typography
          component="h2"
          className={MAIN_TYPO}
          sx={{
           
            fontSize: { xs: "3rem", md: "2.8rem" },
            fontWeight: 400,
            color: TITLE_COLOR,
            mb: 2,
          }}
        >
          Mesa de regalos
        </Typography>

        <Typography
        className={BODY_TYPO}
          sx={{
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: 500,
            mx: "auto",
            mb: 5,
          }}
        >
          {giftListData.mainPhrase}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {giftListData?.items?.map((item, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                width: { xs: "100%", sm: 220 },
                maxWidth: 280,
                backgroundColor: BG_SECTION,
                border: `1px solid ${SAGE}`,
                borderRadius: 1,
              }}
            >
              <CardActionArea
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minHeight: 160,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={index === 0 ? "Amazon" : "Liverpool"}
                  sx={{
                    width: 130,
                    height: 48,
                    objectFit: "contain",
                  }}
                />

                <Typography
                  sx={{
                    
                    color: TEXT_PRIMARY,
                    letterSpacing: "0.04em",
                  }}
                >
                  Ver mesa de regalos <ArrowOutwardRoundedIcon />
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        {giftListData.showEnvelope && (
          <Box sx={{ mt: 7, maxWidth: 500, mx: "auto" }}>
            <Divider
              sx={{
                width: 100,
                mx: "auto",
                mb: 3,
                borderColor: CHAMPAGNE,
              }}
            />

            <Typography
            className={MAIN_TYPO}
              sx={{
                fontFamily: giftListData.envelopeMainTypo,
                fontSize: giftListData.envelopeFontSize,
                color: giftListData.envelopeTitleColor,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {giftListData.title}
            </Typography>

            <Typography
            className={BODY_TYPO}
                          sx={{
                fontSize: giftListData.fontSize,
                lineHeight: 1.8,
              }}
            >
              {giftListData.envelopePhrase}
            </Typography>
             <Box
    component="img"
    src={assetUrl("icon",13)}
    alt=""
    sx={{
      width: 150,
      height: "auto",
      objectFit: "contain",
      mb: 3,
    }}
  />
          </Box>
        )}
      </Box>
    </Box>


       <Box bgcolor={SAGE} padding={4}>
               
           <Box
              component="section"
              sx={{
                  position: "relative",
                  minHeight: "50svh",
                  overflow: "hidden",
                  backgroundColor: BG_MAIN,
                  backgroundImage: `URL(${portada})` ,
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
              top: { xs: -5, sm: -60, md: -40 },
              left: { xs: -20, sm: -60, md: -30 },
              width: { xs: 100, md: 350 },
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
              bottom: { xs: 30, sm: -60, md: -40 },
              right: { xs: -20, sm: -60, md: -30 },
              width: { xs: 100, md: 350 },
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
            
            <Box>
 <Typography mt={2} sx={{color:TITLE_COLOR, fontSize: "3rem",lineHeight:1,fontWeight:700}} variant="body1" textAlign={"center"} className={MAIN_TYPO} >¡Confirma tu asistencia!</Typography>
          
                                      <RSVPForm
                                      hideDateLine={true}
                                          dateLine={RSVP_DATE_LINE}
                                          guest={guest || undefined}
                                          textColor={"black"}
                                          colorButton={BUTTON_PRIMARY}
                                          bgColor={"transparent"}
                                          mainTypo={MAIN_TYPO}
                                          bodyTypo={BODY_TYPO}
                                          count={invitedGuests}
                                          color={TITLE_COLOR}
                                          guestId={guestId}
                                          invitationId={INVITATION_ID}
                                          qrActive={false}
                                          numberInWords={true}
                                          fontSize="2rem"
                                          hideTitle={true}
                                      />
            </Box>

         
                                  </Box>
          </Box>


    <Box
      component="section"
      sx={{
        bgcolor:BG_SECTION,
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Typography className={MAIN_TYPO} sx={{fontSize:"3rem", color:TITLE_COLOR, mb: 1 }}>
        Hospedaje
      </Typography>

      <Typography
        className={BODY_TYPO}
        sx={{maxWidth: 650, mx: "auto", mb: 5 }}
      >
        Para quienes nos acompañan desde fuera, compartimos algunas opciones de
        hospedaje cercanas al lugar de la celebración.
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: 1100, mx: "auto" }}>
        {lodgingOptions.map((hotel) => (
          <Grid key={hotel.name} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                height: "100%",
                bgcolor:BG_MAIN,
                border: `1px solid ${BG_ACCENT}`,
                borderRadius: .5,
                p: 3,
              }}
            >
              <Typography
              fontSize={"1.5rem"}
                className={SECONDARY_TYPO}
                sx={{ color:OLIVE, mb: 1 }}
              >
                {hotel.name}
              </Typography>

              <Typography
               className={BODY_TYPO}
                sx={{  }}
              >
                {hotel.description}
              </Typography>
              <Typography
                className={BODY_TYPO}
                sx={{ mb: 3 }}
              >
                {hotel.phoneNumber}
              </Typography>

              {/* <Button
                component="a"
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  color: "var(--button-primary)",
                  borderColor: "var(--button-primary)",
                  "&:hover": {
                    borderColor: "var(--button-primary)",
                    bgcolor: "rgba(112, 47, 60, 0.06)",
                  },
                }}
              >
                Ver hotel
              </Button> */}
            </Box>
          </Grid>
        ))}
      </Grid>
<Button
  component="a"
  href="https://www.instagram.com/p/DK4wVP8OWMU/?img_index=16&psln=ODQ1M3M5N2t5eXZ0"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  startIcon={<InstagramIcon />}
  sx={{
    mt: 3,
    px: 3.5,
    py: 1.2,
    borderRadius: "30px",
    bgcolor: "#702F3C",
    color: "#F8F4EC",
    fontFamily: "Lora, serif",
    fontSize: "0.8rem",
    textTransform: "none",
    letterSpacing: "0.04em",
    boxShadow: "none",
    "&:hover": {
      bgcolor: "#5C2632",
      boxShadow: "none",
    },
  }}
>
  Más recomendaciones en Instagram
</Button>
 
    </Box>
    <Box
  sx={{
    bgcolor: "#F8F4EC",
    mt: 6,
    pt: 7,
    pb: 8,
    px: 3,
    textAlign: "center",
  }}
>
  <Box
    sx={{
      width: 45,
      height: "1px",
      bgcolor: "#B9A184",
      mx: "auto",
      mb: 4,
    }}
  />

  <Box
    component="img"
    src={assetUrl("icon",12)}
    alt="Monograma de los novios"
    sx={{
      width: 125,
      height: "auto",
      objectFit: "contain",
      mb: 3,
    }}
  />

  <Typography
    className="BODY_TYPO"
    sx={{
      maxWidth: 300,
      mx: "auto",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      color: "#3F352E",
    }}
  >
    Una nueva etapa, la misma historia de amor y muchas razones para celebrar.
  </Typography>

  <Typography
    className="SECONDARY_TYPO"
    sx={{
      mt: 4,
      fontSize: "0.7rem",
      letterSpacing: "0.15em",
      color: "#6D755B",
    }}
  >
    GRACIAS POR ACOMPAÑARNOS
  </Typography>
</Box>

            <div style={{height:100}}></div>
              <FooterInvites bgColor={BG_MAIN} color={BUTTON_PRIMARY}></FooterInvites>
                </Box>
        </div>
      
    )
}

export default WeddingSolHector;

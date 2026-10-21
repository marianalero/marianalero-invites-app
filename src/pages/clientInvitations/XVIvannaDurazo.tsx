import { Fade } from "react-awesome-reveal";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";

import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Adornment from "../../components/Adornment/Adornment";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditorialCountdown from "../../components/EditorialCountdown";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import CustomButton from "../../components/CustomButton/CustomButton";
import CalendarButton from "../../components/CalendarButton/CalendarButton";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/GalleryV2/Gallery";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import PhotoCoverIntro from "../../components/Intro/PhotoCoverIntro/PhotoCoverIntro";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";

// =========================
// Background Palette
// =========================

export const BG_MAIN = "#FCF8F2"; // Marfil cálido - fondo principal

export const BG_SECTION = "#FFFDF9"; // Marfil casi blanco - tarjetas / secciones

export const BG_ALT = "#F8E9EC"; // Rosa muy tenue - secciones alternas

export const BG_ACCENT = "#E7A0B020"; // Rosa blush translúcido para bloques


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#D88FA2"; // Rosa blush principal

export const PRIMARY_DARK = "#B85F78"; // Rosa antiguo / profundo

export const PRIMARY_LIGHT = "#F1CBD3"; // Rosa blush claro


// =========================
// Pink Palette
// =========================

export const PINK = "#E5A0B1"; // Rosa empolvado

export const PINK_DARK = "#C56F86"; // Rosa profundo

export const PINK_LIGHT = "#F6E1E5"; // Rosa muy claro


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";

export const IVORY = "#FCF8F2"; // Marfil cálido

export const BEIGE = "#E8D8CB"; // Beige rosado

export const TEXT_PRIMARY = "#534644"; // Café rosado / texto principal

export const TEXT_SECONDARY = "#8D7776"; // Rosa grisáceo / texto secundario

export const GOLD = "#D2B080"; // Champagne dorado suave

export const BORDER = "#E8D9D4"; // Beige rosado claro

export const DIVIDER = "#E5CFD0"; // Rosa beige para divisores

export const SHADOW =
  "0px 10px 30px rgba(113,128,96,.10)";

export const MAGIC_GLOW =
  "0 0 30px rgba(175,196,154,.25)";

export const STORY_DIVIDER = "#DCE3D2";
const MAIN_TYPO = "pinyon-script-regular";
const SECOND_TYPO = "prata";
const BODY_TYPO = "playfair-display-400";

const MEDIA_KEY = "invitacion-xv-ivanna-durazo";
const EMPTY_ASSET = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";



const calendarButtonProps = {
    variant: "outlined" as const,
    sx: {
        borderRadius: "999px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontFamily: BODY_TYPO,
        borderColor: PRIMARY,
        color: PRIMARY,
    },
};
const COUNTDOWN_DATE = new Date(2026, 10, 27);
const RSVP_DATE_LINE = new Date(2026, 10, 15);
const INVITATION_ID = 0;
const URL_SONG = `${URL_REPO}canciones/PhotographPiaCover.mp3`;
const XVIvannaDurazo = () => {
   const [guest, setGuest] = useState<Guest | null>(null);
  const [searchParams] = useSearchParams();
  const invitedGuests: number = useMemo(() => {
    const num = Number(searchParams.get("number"));
    return isNaN(num) ? 1 : num;
  }, [searchParams]);
  const guestId: number | undefined = useMemo(() => {
      const num = Number(searchParams.get("id"));
      return isNaN(num) ? undefined : num;
    }, [searchParams]);
  const [showIntro, setShowIntro] = useState(true);
  const [cloudAssets, setCloudAssets] = useState<InvitationAsset[]>([]);

  useEffect(() => {
    getAssets(MEDIA_KEY).then(setCloudAssets).catch(() => setCloudAssets([]));
    
  }, []);

  const assetUrl = (kind: string, index = 0) =>
    cloudAssets.filter((asset) => asset.assetKind === kind)[index]?.secureUrl ?? EMPTY_ASSET;

   const galleryImages = cloudAssets
    .filter((asset) => asset.assetKind === "gallery")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((asset) => asset.secureUrl);
 const minigalleryImages = cloudAssets
    .filter((asset) => asset.assetKind === "mini-gallery")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((asset) => asset.secureUrl);

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

  const dresscode: DressCodeProps = {
  mainTypo: `${MAIN_TYPO}`,
  bodyTypo: BODY_TYPO,
  color: PRIMARY_DARK,
  type: 3,
  title: "Formal",
  fontSize: "2rem",
  image:assetUrl("icon",5),
  imageSize:"200px",
  omitColorsLabel: "Colores reservados para la quinceañera:",
  hideWhite:true,
  omitColors : ["#CE929C","#C8E1C1","#6C364E","#3E4244"]
};

  const eventCards: EventCardProps[] = [
     { eventName: "Misa", 
      date: new Date(2026, 3, 11, 17, 30, 0),
     locationName: "Parroquia Santa Eduwiges",
     address: "C. Israel González S/N, Modelo, 83190 Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("church",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/ZgTecwyRu9KDuix77", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
    { eventName: "Recepción", 
      date: new Date(2026, 3, 11, 20, 0, 0),
     locationName: "La Casona de Xochimilco",
     address: "C. Morelos 1, Villa de Seris, 83280 Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("reception",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/gWqjWBH56ehQAb7g9", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
  ];

  const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: PRIMARY_DARK,
        colorTitle: PRIMARY_DARK,
        colorBody: PRIMARY_DARK, 
        bgColor: BG_MAIN, 
        fontSize:"38px",
        events: [
          
            {
                eventName: "Recepción",
                date: new Date(2026, 0, 31, 20, 0, 0),
                icon:assetUrl("icon",1),
            },
            {
                eventName: "Vals",
                date: new Date(2026,  0, 31,21,15,0),
                icon:assetUrl("icon",2),
            },
           {
                eventName: "Cena",
                date: new Date(2026,  0, 31,21,50,0),
                icon:assetUrl("icon",3),
            },
            {
                eventName: "Fin del evento",
                date: new Date(2026,  1, 1,1,0,0),
                icon:assetUrl("icon",4),
            },
        ],
    };
   const musicRef = useRef<MusicFabPlayerHandle>(null);
  const handleEnter = () => {
    musicRef.current?.play();
    setTimeout(() => {
      setShowIntro(false);
    }, ENVELOPE_OPEN_MS);
  };
  

  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        color: TEXT_PRIMARY,
      }}
    >

        <MusicFabPlayer
              ref={musicRef}
              src={URL_SONG}
              backgroundColor={TEXT_PRIMARY}
            />
      <PhotoCoverIntro
      backgroundColor={BG_MAIN}
          open={showIntro}
          onEnter={handleEnter}
          musicRef={musicRef}
          image={assetUrl("cover",1)}
          imagePosition="center 40%"
          // portraitImage={PORTRAIT}
          monogramText=""
          monogramTypo={MAIN_TYPO}
          phrase="MIS XV AÑOS"
          names="Ivanna Durazo"
          namesTypo={MAIN_TYPO}
          date="27 de Noviembre 2026"
          extraText="Un día para celebrar juntos"
          bodyTypo={BODY_TYPO}
        />

    {/* <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: BG_MAIN,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        px: { xs: 3, sm: 5 },
        py: 8,
      }}
    >
      <Box
        component="img"
        src={assetUrl("cover")}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
    
      <Box
         sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 650,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            "&::before": {
              content: '""',
              position: "absolute",
              inset: "-80px -40px",
              background:
                "radial-gradient(ellipse at center, rgba(252,248,242,0.92) 0%, rgba(252,248,242,0.70) 38%, rgba(252,248,242,0) 75%)",
              zIndex: -1,
              pointerEvents: "none",
            },
          }}
      >
       
        <Typography
        className={SECOND_TYPO}
          sx={{
           
            
            fontSize: { xs: "1.5rem", sm: "1.6rem" },
            letterSpacing: "0.38em",
            fontWeight: 600,
            color: TEXT_PRIMARY,
            textTransform: "uppercase",
            ml: "0.38em",
            mb:2,
            textShadow: "0 1px 5px rgba(252,248,242,0.95)",
          }}
        >
          Mis XV
        </Typography>
        <Box
  component="img"
  src={assetUrl("cover",1)}
  alt="Quinceañera"
  sx={{
    width: { xs: 350, sm: 350, md: 350 },
    height: { xs: "60vh", sm: "60vh", md: "60vh" },
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "20% 20% 20% 20%",
    border: `2px solid ${GOLD}`,
    p: 0.6,
    backgroundColor: BG_MAIN,
    mb: 3,
  }}
/>
      
        <Box
          sx={{
            width: 45,
            height: 1,
            backgroundColor: GOLD,
            mb: 3,
          }}
        />

        
        <Typography
        className={MAIN_TYPO}
          sx={{
            
            fontSize: {
              xs: "4.2rem",
              sm: "5.8rem",
              md: "7rem",
            },
            lineHeight: 0.95,
            fontWeight: 400,
            color: PRIMARY_DARK,

            whiteSpace: "nowrap",

             textShadow: `
      0 1px 0 rgba(255,255,255,0.9),
      0 2px 8px rgba(252,248,242,0.75)
    `,
          }}
        >
          Ivanna
        </Typography>

 
       <Box
  sx={{
    mt: 3,
    px: 3,
    py: 1,
    backgroundColor: "rgba(252, 248, 242, 0.88)",
    border: `1px solid ${GOLD}`,
    borderRadius: "2px",
  }}
>
  <Typography
  className={BODY_TYPO}
    sx={{

   
      fontWeight: 500,
      letterSpacing: "0.25em",
      color: PRIMARY_DARK,
      ml: "0.25em",
      whiteSpace: "nowrap",
    }}
  >
    27 · NOVIEMBRE · 2027
  </Typography>
</Box>
      </Box>
    </Box> */}
  <Box
      component="section"
      sx={{
        minHeight: "100svh",
        width: "100%",
        position: "relative",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: `
   radial-gradient(
    ellipse at center,
    #FCF8F2 0%,
    #FBF1E9 40%,
    transparent 75%
  ),
  linear-gradient(
    120deg,
    #E8A49D 0%,
    #F3C3B7 30%,
    #F9DDD2 65%,
    #EBAFA7 100%
  )
`,

        px: { xs: 2, sm: 3 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* ========================================= */}
      {/* CONTENIDO */}
      {/* ========================================= */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          width: "100%",
          maxWidth: "430px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",
        }}
      >
        {/* ========================================= */}
        {/* MIS XV AÑOS */}
        {/* ========================================= */}

        <Typography
        className={SECOND_TYPO}
          sx={{
            
            fontSize: {
              xs: "0.85rem",
              md: "0.95rem",
            },

            letterSpacing: "0.25em",

            textTransform: "uppercase",

            color: TEXT_PRIMARY,

            mb: 2,
          }}
        >
          Mis XV años
        </Typography>

        {/* ========================================= */}
        {/* ARCO + FOTO + FLORES */}
        {/* ========================================= */}

        <Box
          sx={{
            position: "relative",

            width: {
              xs: "82vw",
              sm: "330px",
              md: "360px",
            },

            aspectRatio: "0.70",

            mb: 1,
          }}
        >
          {/* ===================================== */}
          {/* FLORES */}
          {/* ===================================== */}
          <Box
            component="img"
            src={assetUrl("ornament",1)}
            alt=""
            sx={{
              position: "absolute",
              top: "-30%",
              left: "-40px",

              width: "calc(40%)",
              height: "calc(80%)",
              transform : "scale(-1) rotate(90deg)",
              objectFit: "contain",

              zIndex: 4,

              pointerEvents: "none",

              /*
               * Importante:
               * las flores no deben afectar
               * la foto
               */
            }}
          />
          <Box
            component="img"
            src={assetUrl("ornament",1)}
            alt=""
            sx={{
              position: "absolute",
              bottom: "-35%",
              right: "-45px",

              width: "calc(30%)",
              height: "calc(80%)",
              transform : "scale(-1) rotate(110deg)",
              objectFit: "contain",

              zIndex: 4,

              pointerEvents: "none",

              /*
               * Importante:
               * las flores no deben afectar
               * la foto
               */
            }}
          />

          {/* ===================================== */}
          {/* ARCO EXTERIOR */}
          {/* ===================================== */}

          <Box
            sx={{
              position: "absolute",

              inset: 0,

              border: `1px solid ${GOLD}`,

              borderRadius: "180px 180px 0 0",

              zIndex: 2,

              pointerEvents: "none",
            }}
          />

          {/* ===================================== */}
          {/* SEGUNDO ARCO */}
          {/* ===================================== */}

          <Box
            sx={{
              position: "absolute",

              inset: "6px",

              border: `1px solid rgba(199,169,107,0.45)`,

              borderRadius: "174px 174px 0 0",

              zIndex: 2,

              pointerEvents: "none",
            }}
          />

          {/* ===================================== */}
          {/* FOTO */}
          {/* ===================================== */}

          <Box
            sx={{
              position: "absolute",

              inset: "12px",

              overflow: "hidden",

              borderRadius: "160px 160px 0 0",

              zIndex: 1,

              backgroundColor: BEIGE,
            }}
          >
            <Box
              component="img"
              src={assetUrl("cover",2)}
              alt=""
              sx={{
                width: "100%",
                height: "100%",

                display: "block",

                objectFit: "cover",

                objectPosition: "center",
              }}
            />
          </Box>
        </Box>

        {/* ========================================= */}
        {/* NOMBRE */}
        {/* ========================================= */}

        <Typography
        className={MAIN_TYPO}
          component="h1"
          sx={{
            position: "relative",

            zIndex: 10,

           

            fontSize: {
              xs: "4.5rem",
              sm: "5rem",
              md: "5.5rem",
            },

            fontWeight: 400,

            lineHeight: 0.8,

            color: PINK_DARK,

            mt: -1,

            mb: 2,

            whiteSpace: "nowrap",
          }}
        >
         Ivanna Durazo
</Typography>
      
     

        {/* ========================================= */}
        {/* FECHA */}
        {/* ========================================= */}

     <Box
  sx={{
    mt: 3,
    px: 3,
    py: 1,
    backgroundColor: "rgba(252, 248, 242, 0.88)",
    border: `1px solid ${GOLD}`,
    borderRadius: "2px",
  }}
>
  <Typography
  className={BODY_TYPO}
    sx={{

   
      fontWeight: 500,
      letterSpacing: "0.25em",
      color: PRIMARY_DARK,
      ml: "0.25em",
      whiteSpace: "nowrap",
    }}
  >
    27 · NOVIEMBRE · 2027
  </Typography>
</Box>
      </Box>
    </Box>
      <Box
        p={2}
        sx={{
         backgroundColor:BG_SECTION
        }}
      >
        <Grid container p={2}>
         
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Typography
              textAlign="center"
              className={`${BODY_TYPO} italic`}
              fontSize="1rem"
              
              lineHeight={1.55}
              maxWidth={"85%"}
            >
              Hay momentos en la vida que se convierten en recuerdos para siempre…<br></br>

Hoy comienza una nueva etapa, llena de sueños, ilusiones y momentos por vivir.<br></br>
Con mucha alegría, quiero compartir contigo la celebración de mis XV años<br></br>
            </Typography>
          </Grid>
           <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={assetUrl("ornament", 1)}
              sx={{
                width: { xs: 80, md: 100 },
               
              }}
            />
          </Grid>
        </Grid>
      </Box>
     
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",0)}></ImageMiddle>
      <div
        style={{
          backgroundColor: BG_MAIN,
          padding: "50px 20px",
        }}
      >
        <Grid container justifyContent="center" padding={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              textAlign="center"
              sx={{
                width: "100%",
                position: "relative",
               
              }}
            >
            
              <div
                style={{
                  position: "absolute",
                  top: "calc(5% - 100px)",
                  right: "calc(10% - 100px)",
                  transform: "scale(-1,1) rotate(100deg)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",6)} style={{ width: "150px" }} />
                </Fade>
              </div>
             
            

              <Grid container spacing={2} justifyContent="center" >
               <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    src={assetUrl("ornament", 0)}
                    sx={{
                      height: { xs: 100, md: 150 },
                     
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${BODY_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                    >
                      Con el amor y la guía de quienes<br></br> han acompañado
                      cada paso de mi vida...
                    </Typography>

                    <Typography
                      className={SECOND_TYPO}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: PRIMARY_DARK,
                      }}
                    >
                      Mis Padres
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO} tex-`}
                      sx={{
                        fontSize: "2rem",
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                       Alejandro Durazo 
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO} tex-`}
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                      Y
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO}`}
                      translate="no"
                      sx={{
                        fontSize: "2rem",
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                      Crucita Márquez
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={BODY_TYPO}
                      sx={{ mt: 2 }}
                      lineHeight={1.5}
                    >
                      Con inmenso amor, agradecen el honor de acompañarnos en
                      este día tan especial.
                    </Typography>
                  </Fade>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    src={assetUrl("ornament", 0)}
                    sx={{
                      height: { xs: 100, md: 150 },
                      mb: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundColor:BG_ALT,
          padding: "50px 20px",
          position: "relative",
          backgroundPosition: "end",
        }}
      >
        <Box
                    component="img"
                    src={assetUrl("ornament",2)}
                    sx={{
                      position: "absolute",
                      top: { xs:-70, sm: -60, md: -40 },
                      left: { xs: -35, sm: -60, md: -30 },
                      width: { xs: 150, md: 350 },
                      // transform: "rotate(120deg)",
                      opacity: 0.92,
                      pointerEvents: "none",
                      
                      
                    }}
                  />
                   <Box
                    component="img"
                    src={assetUrl("ornament",4)}
                    sx={{
                      position: "absolute",
                      bottom: { xs: -20, sm: -60, md: -40 },
                      right: { xs: -50, sm: -60, md: -30 },
                      width: { xs: 180, md: 350 },
                      transform: "rotate(290deg)",
                      opacity: 0.92,
                      height: 180,
                        zIndex:2,
                      pointerEvents: "none",
                      
                    }}
                  />
        <Grid container spacing={2} justifyContent="center">
          
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
            mt={2}
          >
            <Typography
              className={`${BODY_TYPO} italic`}
              translate="no"
              align="center"
              sx={{
                fontSize: "1.3rem",
                lineHeight: 1.2,
                color: PRIMARY_DARK,
                fontFeatureSettings: '"liga" 0, "locl" 0',
              }}
            >
              Cada día nos acerca a una noche inolvidable.
            </Typography>
          </Grid>
        </Grid>

        <EditorialCountdown
          eventDate={COUNTDOWN_DATE}
          title={{
            fontFamily: '"Pinyon Script"',
            color: PRIMARY_DARK,
            fontSize: "1.8rem",
            fontWeight: 700,
            lineHeight: 1.5,
            dateFormat: "DD MMMM YYYY",
          }}
          number={{
            fontFamily: '"Cormorant Garamond"',
            color: PRIMARY_DARK,
            fontSize: "3.6rem",
            fontWeight: 500,
          }}
          label={{
            fontFamily: '"Montserrat"',
            color: TEXT_PRIMARY,
            fontSize: ".72rem",
            fontWeight: 400,
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
          divider={{
            color: BORDER,
          }}
          responsive={{
            numberSize: "2.2rem",
            labelSize: ".65rem",
            columnGap: 2,
          }}
        />
      </div>
      <ImageMiddle bgPosition="50%" height="50vh" bgImage={assetUrl("middle-image",1)}></ImageMiddle>
      <div
        style={{
          backgroundColor: BG_MAIN,
          padding: "50px 20px",
        }}
      >
        <Grid container justifyContent="center" padding={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              textAlign="center"
              sx={{
                width: "100%",
                position: "relative",
                // mt: 6,
                // mb: 6,
                // borderColor: PRIMARY,
                // borderWidth: "2px",
                // borderStyle: "solid",
                // px: 3,
                // py: 3,
              }}
            >
              
              
              

              <Grid container spacing={2} justifyContent="center" mb={3}>
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display="flex"
                  justifyContent="left"
                >
                  <Box
                    component="img"
                    src={assetUrl("ornament", 1)}
                    sx={{
                      height: { xs: 100, md: 150 },
                      mb: 2,
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${BODY_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                    >
                      Con especial cariño
                    </Typography>

                    <Typography
                      className={MAIN_TYPO}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: PRIMARY_DARK,
                        fontSize:"1.5rem"
                      }}
                    >
                      Mis Padrinos
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${SECOND_TYPO} italic`}
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                      Marco Gallardo y Ma. Fernanda Gallardo
                    </Typography>
                  </Fade>
                </Grid>
                

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${SECOND_TYPO} italic`}
                      translate="no"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                      Esteban Alcaraz y Rebeca Arteaga
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${SECOND_TYPO} italic`}
                      translate="no"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                     Ana Durazo y Aide Durazo 
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={SECOND_TYPO}
                      sx={{ mt: 2 }}
                      lineHeight={1.5}
                    >
                      Gracias por acompañarme<br></br> en este momento tan
                      especial.
                    </Typography>
                  </Fade>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display="flex"
                  justifyContent="right"
                >
                  <Box
                    component="img"
                    src={assetUrl("ornament", 1)}
                    sx={{
                      height: { xs: 100, md: 150 },
                      mb: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
         <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, p: 2, position:"relative" }}>
          <div
                style={{
                  position: "absolute",
                  top: "calc(60% - 100px)",
                  left: "calc(15% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",3)} style={{ width: "100px" }} />
                </Fade>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "calc(10% - 100px)",
                  right: "calc(12% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",2)} style={{ width: "100px" }} />
                </Fade>
              </div>
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
                      src={minigalleryImages[1]}
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
                      src={minigalleryImages[3]}
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
                      src={minigalleryImages[0]}
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
                      src={minigalleryImages[2]}
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
                 
                </Box>
      </div>
       <Box
 id="ubicacion"
  component="section"
  sx={{
    
    position: "relative",
    minHeight: "70svh",
    overflow: "hidden",
    backgroundColor: BG_ACCENT,
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
              color: TEXT_PRIMARY,
              marginY:2
            }}
          >
            {item.eventName}
          </Typography>
          <Box
            component="img"
            src={item.icon}
            alt={item.locationName}
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
            className={SECOND_TYPO}
            sx={{
              fontSize: {
                xs: "1.65rem",
                md: "1.9rem",
              },
              lineHeight: 1.1,
              color: TEXT_SECONDARY,
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
   <Box mt={2}>
                  <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:PRIMARY_DARK, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                      No queremos que te pierdas este día
                      </Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                      <CalendarButton
                          title="XV Ivanna"
                          startDate="20261127T200000"
                          endDate="20261128T020000"
                          location="Villa Toscana"
                          
                          // fileName="boda-valentina-sebastian"
                          buttonProps={calendarButtonProps}
                          />
                  </Box>
              </Box>
             
</Box>
       <Box position="relative" bgcolor={BG_SECTION}>
          <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
           <div
                style={{
                  position: "absolute",
                  top: "calc(10% - 100px)",
                  right: "calc(10% - 130px)",
                  // transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",5)} style={{ height: "150px" }} />
                </Fade>
              </div>
           <div
                style={{
                  position: "absolute",
                  bottom: "calc(10% - 100px)",
                  left: "calc(10% - 130px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",5)} style={{ height: "150px" }} />
                </Fade>
              </div>
        </Box>      
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",2)}></ImageMiddle>
      <div
        style={{
          backgroundColor: BG_ALT,
          padding: "50px 20px",
        }}
      >
        <Grid container justifyContent="center" padding={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              textAlign="center"
              sx={{
                width: "100%",
                position: "relative",
              }}
            >
              
              <div
                style={{
                  position: "absolute",
                  top: "calc(5% - 100px)",
                  right: "calc(2% - 100px)",
                  // transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",4)} style={{ height: "150px" }} />
                </Fade>
              </div>
             
              <div
                style={{
                  position: "absolute",
                  bottom: "calc(10% - 100px)",
                  left: "calc(10% - 130px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament",3)} style={{ height: "150px" }} />
                </Fade>
              </div>

              <Box>
                <Container maxWidth="md">
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Typography
                      fontSize={"2rem"}
                      className={MAIN_TYPO}
                      color={PRIMARY_DARK}
                    >
                      Lluvia de sobres
                    </Typography>

                    <Typography
                      maxWidth={650}
                      className={BODY_TYPO}
                      lineHeight={1.5}
                      color={TEXT_PRIMARY}
                    >
                      Tu presencia será el regalo más valioso para mí.
                      <br />
                      Si además deseas obsequiarme un detalle, con mucho cariño
                      agradeceré que sea en sobre.
                    </Typography>
                    <Box
                      component="img"
                      src={assetUrl("icon",0)}
                      alt="Sobre"
                      sx={{
                        width: { xs: 120, md: 110 },
                      }}
                    />

                    <Paper
                                          
                                          elevation={0}
                                          sx={{
                                            bgcolor: BG_MAIN,
                                            borderRadius: "0",
                                            p: 4,
                                            border: "1.5px solid rgba(190,170,130,.45)",
                                             boxShadow: `0px 18px 40px ${SHADOW}`,
                                          }}
                                        >
                                            <Stack>
                                       
                                            <Box >
                    
                                            
                                              <Typography
                                              className={SECOND_TYPO}
                                              sx={{
                                                letterSpacing: ".18em",
                                                fontSize: "1rem",
                                                color: TEXT_PRIMARY,
                                                textAlign: "center",
                                              }}
                                            >
                                              Tarjeta
                                            </Typography>
                    
                                            <Typography
                                              className={BODY_TYPO}
                                              sx={{
                                                fontSize: {
                                                  xs: "1.2rem",
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
                                              5579 1004 8987 0608
                                              <IconButton
                                                onClick={() => {
                                                  navigator.clipboard.writeText(
                                                    "5579100489870608",
                                                  );
                                                }}
                                              >
                                                <ContentCopyIcon sx={{ color: TEXT_PRIMARY }} />
                                              </IconButton>
                                            </Typography>
                                            </Box>

                                        
                    
                                            <Typography
                                              className={BODY_TYPO}
                                              sx={{
                                                fontSize: ".9rem",
                                                color: TEXT_PRIMARY,
                                                opacity: 0.85,
                                                textAlign: "center",
                                              }}
                                            >
                                              Santander 
                                            </Typography>
                                              <Typography
                                              className={BODY_TYPO}
                                              sx={{
                                                fontSize: ".9rem",
                                                color: TEXT_PRIMARY,
                                                opacity: 0.85,
                                                textAlign: "center",
                                              }}
                                            >
                                              Crucita Marquez
                                            </Typography>
                                          </Stack>
                                        </Paper>
                  </Stack>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Box bgcolor={BG_ACCENT} padding={2}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "calc(-15% - 100px)",
              right: "calc(-10% - 70px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",3)} style={{ height: "130px" }} />
            </Fade>
          </div>
          
          
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
              background: PRIMARY,
              borderRadius: "180px 180px 0 0",
              px: 4,
              py: 6,
              textAlign: "center",
              boxShadow: `0px 18px 40px ${SHADOW}`,
            }}
          >
            <Typography
            className={BODY_TYPO}
              sx={{
                
                color: "#FFF",
                letterSpacing: ".28em",
                fontSize: ".8rem",
                textTransform: "uppercase",
                lineHeight: 1.8,
              }}
            >
              Hemos
              <br />
              Reservado
            </Typography>

            <Typography
            className={MAIN_TYPO}
              sx={{
                mr:3,
                color: "#FFF",
                fontSize: {
                  xs: "3rem",
                  md: "5rem",
                },
                lineHeight: 1,
                my: 2,
              }}
            >
              {guest ? guest.totalAssigned : invitedGuests}
            </Typography>

            <Typography
            className={BODY_TYPO}
              sx={{
                
                color: "#FFF",
                letterSpacing: ".18em",
                fontSize: ".8rem",
                textTransform: "uppercase",
                lineHeight: 1.8,
              }}
            >
              Lugares para
              <br />
              celebrar juntos
            </Typography>
            <Typography
            className={MAIN_TYPO}
              sx={{
                
                color: "#FFF",
                
                fontSize: "2rem",
             
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              Confirma tu asistencia
            </Typography>
            <RSVPForm
            hidePhoneNumberInput={true}
              padding={1}
              guest={guest || undefined}
              dateLine={RSVP_DATE_LINE}
              textColor={"white"}
              colorButton={"white"}
              bgColor={PRIMARY}
              mainTypo={SECOND_TYPO}
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
            ></RSVPForm>
          </Box>
        </Box>
        </Box>
      </Box>

      <div
        style={{
          backgroundColor:BG_SECTION,
          padding: "50px 20px",
        }}
      >
        <Box sx={{ backgroundColor: BG_ALT, mb:4 }}>
          <DressCode {...dresscode}></DressCode>
          <Grid paddingBottom={2}>
            <Fade direction="up">
              <Adornment image={assetUrl("ornament")} width={"300px"} />
            </Fade>
          </Grid>
        
        </Box>
        <Box sx={{
          p:2,
          backgroundColor:BG_MAIN,
          display:"grid",
           position: "relative",
        }}>
         
          <div
            style={{
              zIndex:2,
              position: "absolute",
              top: "calc(20%)",
              left: "calc(5%)",
              transform: "translate(-50%, -50%) rotate(90deg)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",4)} style={{ height: "130px" }} />
            </Fade>
          </div>
          <div
            style={{
              zIndex:2,
              position: "absolute",
              bottom: "calc(-1%)",
              right: "calc(-25%)",
              transform: "translate(-50%, -50%) rotate(90deg) scale(-1)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",4)} style={{ height: "130px" }} />
            </Fade>
          </div>
       
   <Gallery
                           images={galleryImages}
                            bgMain={BG_MAIN} 
                            titleColor={PRIMARY_DARK} 
                            bodyColor={TEXT_PRIMARY} 
                            title={""} 
                            subtitle={""}
                            mainTypo={MAIN_TYPO}
                            bodyTypo={BODY_TYPO}
                            
                            />
          <Typography className={MAIN_TYPO} fontSize={"2rem"} align="center">
            Lo más bonito de este día será compartirlo con quienes hacen mi vida especial
          </Typography>
        </Box>
      
      </div>

      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
    </div>
  );
};
export default  XVIvannaDurazo;

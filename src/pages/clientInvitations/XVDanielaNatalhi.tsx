import { Fade } from "react-awesome-reveal";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";

import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box,  Container,  Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";

import EditorialCountdown from "../../components/EditorialCountdown";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import CalendarButton from "../../components/CalendarButton/CalendarButton";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/GalleryV2/Gallery";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import PhotoCoverIntro from "../../components/Intro/PhotoCoverIntro/PhotoCoverIntro";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";
import {
  AccessTimeRounded,
} from "@mui/icons-material";
import dayjs from "dayjs";
import CustomButton from "../../components/CustomButton/CustomButton";


// =========================
// Background Palette
// =========================

export const BG_MAIN = "#FCEAF1"; // Rosa pastel principal

export const BG_SECTION = "#FFF5F8"; // Rosa casi blanco

export const BG_ALT = "#F4D6E2"; // Rosa empolvado

export const BG_ACCENT = "#E8B8CC40"; // Rosa translúcido


// =========================
// Gradient Palette
// =========================

export const GRADIENT_MAIN =
  "linear-gradient(135deg, #FCEAF1 0%, #EBC3D4 50%, #F8E8EF 100%)";

export const GRADIENT_SOFT =
  "linear-gradient(180deg, #FFF5F8 0%, #F4D6E2 100%)";

export const GRADIENT_SILVER =
  "linear-gradient(135deg, #F8E8EF 0%, #E5E5EB 50%, #FCEAF1 100%)";

export const GRADIENT_GLOW =
  "radial-gradient(circle at 50% 30%, #FFFFFF90 0%, transparent 65%)";


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#D887A5"; // Rosa principal

export const PRIMARY_DARK = "#A94F72"; // Rosa profundo

export const PRIMARY_LIGHT = "#F2C8D8"; // Rosa claro


// =========================
// Pink Palette
// =========================

export const PINK = "#E7A1BD"; // Rosa empolvado

export const PINK_DARK = "#C66D91"; // Rosa intenso

export const PINK_LIGHT = "#FBE4ED"; // Rosa muy claro


// =========================
// Silver Palette
// =========================

export const SILVER = "#C4C5CE"; // Plata suave

export const SILVER_LIGHT = "#E8E8EF"; // Plata clara

export const SILVER_DARK = "#9698A5"; // Plata grisácea

export const SILVER_METALLIC =
  "linear-gradient(135deg, #F8F8FC 0%, #C4C5CE 45%, #FFFFFF 60%, #A9ABB8 100%)";


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";

export const TEXT_PRIMARY = "#593C4A"; // Ciruela rosado oscuro

export const TEXT_SECONDARY = "#936D7D"; // Rosa grisáceo

export const BORDER = "#E8C9D6"; // Rosa plata

export const DIVIDER = "#D8B5C5"; // Rosa grisáceo

export const SHADOW =
  "0px 10px 30px rgba(125, 75, 100, 0.15)";

export const MAGIC_GLOW =
  "0 0 30px rgba(230, 190, 215, 0.35)";

export const STORY_DIVIDER = "#D6C6D2";

const MAIN_TYPO = "parisienne-regular ";
const SECOND_TYPO = "bonodi-moda-regular";
const BODY_TYPO = "montserrat-400";

const MEDIA_KEY = "invitacion-xv-daniela-natalhi";
const EMPTY_ASSET = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";


// const colores = [
//   { nombre: "Rosa", hex: "#CC929F" },
//   { nombre: "Menta", hex: "#C8E1C1" },
//   { nombre: "Borgoña", hex: "#71334D" },
//   { nombre: "Oxford", hex: "#3D4143" },
// ];
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
const COUNTDOWN_DATE = new Date(2026, 10, 21);
const RSVP_DATE_LINE = new Date(2026, 10, 20);
const INVITATION_ID = 55;
const URL_SONG = `${URL_REPO}canciones/Art Deco.mp3`;
const XVDanielaNatalhi = () => {
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
  image:assetUrl("icon",1),
  imageSize:"200px",
};

  const eventCards: EventCardProps[] = [
     { eventName: "Misa", 
      date: new Date(2026, 3, 11, 18, 30, 0),
     locationName: "Parroquia San Francisco De Asís",
     address: "Calle Guadalupe Victoria & Avenida Ángel García Aburto, Balderrama, Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("church",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/HZnfNtq3qRq1epVVA", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
    { eventName: "Recepción", 
      date: new Date(2026, 3, 11, 20, 0, 0),
     locationName: "Eventos El Marqués",
     address: "Ramón Valdez Ramírez 1004, Unión de Ladrilleros, Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("reception",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/WvqCyb2aKknAsCyd7", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
  ];

  // const timelineData: CustomizedTimelineProps = {
  //       mainTypo: MAIN_TYPO,
  //       bodyTypo: BODY_TYPO,
  //       colorPrimary: PRIMARY_DARK,
  //       colorTitle: PRIMARY_DARK,
  //       colorBody: PRIMARY_DARK, 
  //       bgColor: BG_MAIN, 
  //       fontSize:"38px",
  //       events: [
          
  //           {
  //               eventName: "Recepción",
  //               date: new Date(2026, 0, 31, 20, 0, 0),
  //               icon:assetUrl("icon",3),
  //           },
  //           {
  //               eventName: "Vals",
  //               date: new Date(2026,  0, 31,21,15,0),
  //               icon:assetUrl("icon",2),
  //           },
  //          {
  //               eventName: "Cena",
  //               date: new Date(2026,  0, 31,21,50,0),
  //               icon:assetUrl("icon",1),
  //           },
  //           {
  //               eventName: "Fin del evento",
  //               date: new Date(2026,  1, 1,1,0,0),
  //               icon:assetUrl("icon",4),
  //           },
  //       ],
  //   };
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
          image={assetUrl("cover")}
          imagePosition="center 40%"
          // portraitImage={PORTRAIT}
          monogramText=""
          monogramTypo={MAIN_TYPO}
          phrase="MIS XV AÑOS"
          names="Daniela Natalhi"
          namesTypo={MAIN_TYPO}
          date="27 de Noviembre 2026"
          extraText="Un día para celebrar juntos"
          bodyTypo={BODY_TYPO}
        />

<Box
  id="portada"
  sx={{
    position: "relative",
    width: "100%",
    minHeight: "100svh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: BG_MAIN,
    color: "#F7F2F8",
  }}
>
  {/* Fotografía */}
  <Box
    component="img"
    src={assetUrl("cover",0)}
    alt="Sesión fotográfica de Daniela"
    sx={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 35%",
    }}
  />

  {/* Capa violeta */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      bgcolor: "rgba(53, 32, 63, 0.25)",
    }}
  />

  {/* Contenido */}
  <Stack
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    spacing={2}
    sx={{
      position: "relative",
      zIndex: 1,
      width: "100%",
      px: 3,
      py: 8,
      animation: "portadaEntrada 1.2s ease-out both",
      "@keyframes portadaEntrada": {
        from: {
          opacity: 0,
          transform: "translateY(18px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    }}
  >
    <Typography
      sx={{
        fontFamily: "'Onest', sans-serif",
       
        letterSpacing: "0.35em",
      }}
    >
      MIS XV AÑOS
    </Typography>

  

    <Typography
      
      sx={{
        fontFamily: "'Parisienne', cursive",
        fontSize: {
          xs: "clamp(4rem, 16vw, 5.5rem)",
          md: "7rem",
        },
        lineHeight: 1.15,
        fontWeight: 400,
        color: "#F7F2F8",
      }}
    >
      Daniela Natalhi
    </Typography>
  <Box
      sx={{
        width: 48,
        height: "1px",
        bgcolor: "#F7F2F8",
      }}
    />

    <Typography
      sx={{
         fontFamily: "'Bodoni Moda', serif",
         color: "#F7F2F8",
        letterSpacing: "0.22em",
        mt: 3,
        fontSize:"1.5rem"
      }}
    >
      21 NOVIEMBRE 2026
    </Typography>

    
  </Stack>

 
</Box>
      <Box
  sx={{
    background: GRADIENT_MAIN,
    position: "relative",
    overflow: "hidden",
    px: 2,
    py: 5,
  }}
>
  {/* Brillos decorativos */}
  <Box
    component="img"
    src={assetUrl("sparkle")}
    alt=""
    sx={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "45%",
      opacity: 0.45,
      pointerEvents: "none",
    }}
  />

  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{ position: "relative", zIndex: 1 }}
  >
    {/* Fotografías */}
    <Grid  size={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {[
          minigalleryImages[0],
          minigalleryImages[2],
          minigalleryImages[4],
        ].map((photo, index) => (
          <Box
            key={index}
            component="img"
            src={photo}
            alt=""
            sx={{
              width: "100%",
              height: index === 1 ? 125 : 145,
              objectFit: "cover",
              border: "4px solid #FFF5F8",
              borderRadius: 1,
              boxShadow: "0 4px 12px rgba(125,75,100,0.2)",
              transform: index === 1 ? "translateX(10px)" : "none",
            }}
          />
        ))}
      </Box>
    </Grid>

    {/* Frase */}
    <Grid size={{ xs: 7, sm: 7, md: 7, lg: 7 }}>
      <Box
        sx={{
          background: GRADIENT_SILVER,
          border: `1px solid ${SILVER}`,
          borderRadius: .5,
          p: 2,
          textAlign: "center",
          boxShadow: SHADOW,
        }}
      >
        <Typography
        className={SECOND_TYPO}
          sx={{
         
            color: PRIMARY_DARK,
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          Hoy doy un paso más
          <br />
          para comenzar un nuevo
          <br />
          capítulo, rodeada del
          <br />
          amor de quienes más
          <br />
          quiero.
        </Typography>

        <Box
          component="img"
          src={assetUrl("ornament",0)}
          alt=""
          sx={{ width: "80%", my: 1 }}
        />

        
      </Box>
    </Grid>
  </Grid>
</Box>
     
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",1)}></ImageMiddle>
      <div
        style={{
          background: GRADIENT_SILVER,
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
                      Natalia Alejandra López Hernández
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
                     José Luis Plaza Mendoza
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
   <Box
  sx={{
    background: `linear-gradient(180deg, ${PINK_LIGHT} 0%, ${BG_ALT} 100%)`,
    position: "relative",
    overflow: "hidden",
    px: { xs: 2, sm: 4 },
    py: 4,
  }}
>
  {/* Fotografía completa */}
  <Box
    component="img"
    src={assetUrl("background")}
    alt="Valeria celebrando sus XV años"
    sx={{
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "contain",
      border: "1px solid rgba(255,255,255,0.8)",
      boxShadow: "0 6px 20px rgba(100,60,75,0.15)",
      position: "relative",
      zIndex: 1,
    }}
  />

  {/* Contador independiente */}
  <Box
  sx={{
    position: "relative",
    zIndex: 1,
    mt: 1.5,
    px: { xs: 1, sm: 3 },
    py: { xs: 2.5, sm: 3 },
    textAlign: "center",
    background: "rgba(255,255,255,0.35)",
    border: "1px solid rgba(255,255,255,0.7)",
    boxShadow: "0 4px 16px rgba(100,60,75,0.08)",
  }}
>
  <Typography
  className={SECOND_TYPO}
    sx={{
      
      color: PRIMARY_DARK,
      fontSize: { xs: "3rem", sm: "1.3rem" },
      fontWeight: 600,
      lineHeight:1,
      textTransform:"uppercase",
      
    }}
  >
    21 de noviembre 2026
  </Typography>

  <Box
    component="img"
    src={assetUrl("ornament")}
    alt=""
    sx={{
      width: "55%",
      maxWidth: 200,
      height: "auto",
      mt:2
    }}
  />

  <EditorialCountdown
    eventDate={COUNTDOWN_DATE}
    title={{
      fontSize: "0rem",
      dateFormat: "DD [de] MMMM YYYY",
    }}
    number={{
      fontFamily: '"Montserrat", sans-serif',
      color: TEXT_PRIMARY,
      fontSize: { xs: "2rem", sm: "2.8rem" },
      fontWeight: 500,
    }}
    label={{
      fontFamily: '"Montserrat", sans-serif',
      color: PRIMARY_DARK,
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    }}
    divider={{ color: PRIMARY_DARK }}
    responsive={{
      numberSize: "1.8rem",
      labelSize: "1.5rem",
      columnGap: 1,
    }}
    spacing={{
      paddingTop:0
    }
    }
  />
</Box>
  {/* Brillos decorativos */}
  <Box
    component="img"
    src={assetUrl("ornament", 2)}
    alt=""
    sx={{
      position: "absolute",
      top: 0,
      left: -35,
      width: { xs: 140, md: 250 },
      opacity: 0.65,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  <Box
    component="img"
    src={assetUrl("ornament", 2)}
    alt=""
    sx={{
      position: "absolute",
      bottom: 0,
      right: -40,
      width: { xs: 160, md: 260 },
      transform: "rotate(180deg)",
      opacity: 0.65,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
</Box>
      <ImageMiddle bgPosition="50%" height="50vh" bgImage={assetUrl("middle-image",0)}></ImageMiddle>
      <Box
  sx={{
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    p: 2,
    overflow: "hidden",
    background: BG_ALT,
  }}
>
  {/* Brillos de fondo */}
  <Box
    component="img"
    src={assetUrl("ornament", 2)}
    alt=""
    sx={{
      position: "absolute",
      top: "15%",
      left: "10%",
      width: "75%",
      transform: "scaleX(-1)",
      opacity: 0.75,
      pointerEvents: "none",
    }}
  />

  {/* Destello izquierdo */}
  <Box
    component="img"
    src={assetUrl("ornament", 1)}
    alt=""
    sx={{
      position: "absolute",
      top: "45%",
      left: -15,
      width: 65,
      pointerEvents: "none",
      zIndex: 2,
    }}
  />

  {/* Destello inferior derecho */}
  <Box
    component="img"
    src={assetUrl("ornament", 1)}
    alt=""
    sx={{
      position: "absolute",
      bottom: 0,
      right: 5,
      width: 65,
      pointerEvents: "none",
      zIndex: 2,
    }}
  />

  {/* Fotografía superior derecha */}
  <Box
    sx={{
      width: "65%",
      alignSelf: "flex-end",
      position: "relative",
      zIndex: 1,
      mr: 1,
    }}
  >
    <Box
      component="img"
      src={minigalleryImages[1]}
      alt=""
      sx={{
        display: "block",
        width: "100%",
        aspectRatio: "4 / 3",
        objectFit: "cover",
        borderRadius: "18px",
        boxShadow: "0 8px 20px rgba(100,60,75,0.15)",
      }}
    />
  </Box>

  {/* Fotografía inferior izquierda */}
  <Box
    sx={{
      width: "60%",
      alignSelf: "flex-start",
      position: "relative",
      zIndex: 1,
      ml: 0,
      mt: 2,
    }}
  >
    <Box
      component="img"
      src={minigalleryImages[3]}
      alt=""
      sx={{
        display: "block",
        width: "100%",
        aspectRatio: "4 / 3",
        objectFit: "cover",
        borderRadius: "18px",
        boxShadow: "0 8px 20px rgba(100,60,75,0.15)",
      }}
    />
  </Box>
</Box>
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
    <Grid container spacing={2} padding={4}>
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
                    color: PRIMARY,
                  }}
                />

                <Typography
                mt={1}
                fontSize={"1.5rem"}
                  className={BODY_TYPO}
                  sx={{
                    color: TEXT_PRIMARY,
                    letterSpacing: ".05em",
                  }}
                >
  {dayjs(item.date).format("hh:mm a")}
                  </Typography>
              </Box>
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
          </Grid>
  </Stack>
   <Box mt={2}>
                  <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:PRIMARY_DARK, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                      No queremos que te pierdas este día
                      </Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                      <CalendarButton
                          title="XV Daniela Natalhi"
                          startDate="20261121T183000"
                          endDate="20261122T020000"
                          location="Eventos el Marques"
                          
                          // fileName="boda-valentina-sebastian"
                          buttonProps={calendarButtonProps}
                          />
                  </Box>
              </Box>
             
</Box>
       <Box position="relative" bgcolor={BG_SECTION}>
          {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}
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
      <ImageMiddle bgPosition="50%" height="50vh" bgImage={assetUrl("middle-image",2)}></ImageMiddle>
      <div
        style={{
          background: GRADIENT_GLOW,
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
                    <Box
                      component="img"
                      src={assetUrl("icon",0)}
                      alt="Sobre"
                      sx={{
                        width: { xs: 120, md: 110 },
                      }}
                    />
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
                   

                  
                  </Stack>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Box  padding={2} sx={{background:GRADIENT_MAIN}}>
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
              bottom: "calc(5% - 100px)",
              right: "calc(-5% - 70px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",1)} style={{ height: "100px" }} />
            </Fade>
          </div>

          <div
            style={{
              position: "absolute",
              top: "calc(5% - 100px)",
              right: "calc(-5% - 70px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",1)} style={{ height: "100px" }} />
            </Fade>
          </div>

            <div
            style={{
              position: "absolute",
              top: "calc(50% - 100px)",
              left: "calc(20% - 70px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",1)} style={{ height: "100px" }} />
            </Fade>
          </div>
          
          <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 430,
          height: { xs: 440, sm: 500 },
          mx: "auto",
        }}
      >
        {/* FOTO PRINCIPAL */}
        <Box
          component="img"
          src={assetUrl("mini-gallery",5)}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            left: 0,

            width: "76%",
            height: "360px",

            objectFit: "cover",

            borderRadius: "18px",

            display: "block",
          }}
        />

        {/* FOTO SECUNDARIA */}
        <Box
          component="img"
          src={assetUrl("mini-gallery",6)}
          alt=""
          sx={{
            position: "absolute",

            top: 245,
            right: 0,

            width: "48%",
            height: "235px",

            objectFit: "cover",

            borderRadius: "18px",

            display: "block",
          }}
        />
      </Box>
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
          background:GRADIENT_SOFT,
          padding: "50px 20px",
        }}
      >
        <Box sx={{ backgroundColor: BG_SECTION, mb:4 }}>
          <DressCode {...dresscode}></DressCode>
           {/* <Box
      component="section"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        py: { xs: 5, md: 7 },
        px: 3,
        bgcolor: "#F7E9EC",
        textAlign: "center",
      }}
    >
      <Typography
        
        className={SECOND_TYPO}

        sx={{
          color:TEXT_PRIMARY,
          
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.3,
          mb: { xs: 4, md: 5 },
        }}
      >
        Colores reservados para la quinceañera:
      </Typography>

      
      <Grid paddingBottom={2}>
            <Fade direction="up">
              <Adornment image={assetUrl("ornament")} width={"300px"} />
            </Fade>
          </Grid>
    </Box> */}
          
        
        </Box>
        <Box sx={{
          p:2,
          background:BG_SECTION,
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
              <img src={assetUrl("ornament",2)} style={{ height: "130px" }} />
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
              <img src={assetUrl("ornament",2)} style={{ height: "130px" }} />
            </Fade>
          </div>
       
   <Gallery
                           images={galleryImages}
                            bgMain={BG_SECTION} 
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
export default  XVDanielaNatalhi;

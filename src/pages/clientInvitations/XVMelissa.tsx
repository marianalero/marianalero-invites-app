import { Fade } from "react-awesome-reveal";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";

import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Adornment from "../../components/Adornment/Adornment";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import EditorialCountdown from "../../components/EditorialCountdown";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import CalendarButton from "../../components/CalendarButton/CalendarButton";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/GalleryV2/Gallery";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import PhotoCoverIntro from "../../components/Intro/PhotoCoverIntro/PhotoCoverIntro";
import { Guest } from "../../models/guest";
import { getGuestById } from "../../services/guestApiClient";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import dayjs from "dayjs";


// =========================
// Background Palette
// =========================

export const BG_MAIN = "#F7F2F8"; // Lavanda marfil - fondo principal

export const BG_SECTION = "#FFFCFF"; // Blanco lavanda - tarjetas / secciones

export const BG_ALT = "#EEE4F3"; // Lavanda empolvado - secciones alternas

export const BG_ACCENT = "#A88BC520"; // Violeta translúcido para bloques


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#8055A0"; // Violeta principal

export const PRIMARY_DARK = "#49265F"; // Ciruela profundo

export const PRIMARY_LIGHT = "#BCA2D4"; // Lavanda suave


// =========================
// Purple Palette
// =========================

export const PURPLE = "#684080"; // Púrpura editorial

export const PURPLE_DARK = "#35203F"; // Ciruela oscuro

export const PURPLE_LIGHT = "#DCCBE9"; // Lavanda claro


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";

export const IVORY = "#F7F2F8"; // Marfil con matiz lavanda

export const BEIGE = "#DCD0DF"; // Gris lavanda cálido

export const TEXT_PRIMARY = "#302438"; // Ciruela casi negro

export const TEXT_SECONDARY = "#796A80"; // Malva grisáceo

export const SILVER = "#C7C2CF"; // Plata suave

export const SILVER_LIGHT = "#E8E4ED"; // Plata clara

export const BORDER = "#DDD1E4"; // Lavanda grisáceo

export const DIVIDER = "#C8B4D8"; // Lavanda medio para divisores

export const SHADOW =
  "0px 10px 30px rgba(53,32,63,.12)";

export const MAGIC_GLOW =
  "0 0 30px rgba(168,139,197,.25)";

export const STORY_DIVIDER = "#B7A0C9";
const MAIN_TYPO = "parisienne-regular";
const SECOND_TYPO = "bonodi-moda-regular to-upper";
const BODY_TYPO = "onest-400";

const MEDIA_KEY = "invitacion-xv-melissa";
const EMPTY_ASSET = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";


const colores = [
  { nombre: "Rosa", hex: "#B7A0C9" },
  { nombre: "Menta", hex: "#DDD1E4" },
  { nombre: "Borgoña", hex: "#C8B4D8" },
  // { nombre: "Oxford", hex: "#796A80" },
];
const calendarButtonProps = {
    variant: "outlined" as const,
    sx: {
        borderRadius: "999px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontFamily: BODY_TYPO,
        borderColor: BG_SECTION,
        color: BG_SECTION,
    },
};
const COUNTDOWN_DATE = new Date(2026, 11, 19);
const RSVP_DATE_LINE = new Date(2026, 11, 15);
const INVITATION_ID = 52;

const XVMelissa = () => {
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
     const song: number | undefined = useMemo(() => {
      const sn = Number(searchParams.get("song"));
      return isNaN(sn) ? undefined : sn;
    }, [searchParams]);

const URL_SONG =  song  ==1 ? `${URL_REPO}canciones/NovemberRain.mp3` : `${URL_REPO}canciones/NovemberRain-Solo.mp3`;
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
};

  const eventCards: EventCardProps[] = [
     { eventName: "Misa", 
      date: new Date(2026, 3, 11, 18, 0, 0),
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
     locationName: "Salón de Eventos Versalles",
     address: "Blvd. Luis Encinas J. 292, entre Guadalupe Victoria y Reforma, San Benito, Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("reception",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/NsQozTLGoeqUYsC46", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
  ];

  const timelineData: CustomizedTimelineProps = {
        title:"La noche en detalle",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: PRIMARY_DARK,
        colorTitle: PRIMARY_DARK,
        colorBody: PRIMARY_DARK, 
        bgColor: BG_MAIN, 
        fontSize:"38px",
        events: [
          
            {
                eventName: "Misa",
                date: new Date(2026, 0, 31, 18, 0, 0),
                icon:assetUrl("icon",1),
            },
            {
                eventName: "Recepción",
                date: new Date(2026,  0, 31,20,0,0),
                icon:assetUrl("icon",2),
            },
           {
                eventName: "Vals",
                date: new Date(2026,  0, 31,21,0,0),
                icon:assetUrl("icon",3),
            },
            {
                eventName: "Cena",
                date: new Date(2026,  1, 1,22,0,0),
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
          image={assetUrl("cover",0)}
          imagePosition="center 40%"
          // portraitImage={PORTRAIT}
          monogramText=""
          monogramTypo={MAIN_TYPO}
          phrase="MIS XV AÑOS"
          names="Melissa"
          namesTypo={MAIN_TYPO}
          date="19 de Diciembre 2026"
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
    bgcolor: "#49265F",
    color: "#F7F2F8",
  }}
>
  {/* Fotografía */}
  <Box
    component="img"
    src={assetUrl("cover",1)}
    alt="Sesión fotográfica de Melissa"
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
      component="h1"
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
      Melissa
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
      19 DICIEMBRE 2026
    </Typography>

    
  </Stack>

 
</Box>
      <Box
        p={2}
        sx={{
         backgroundColor:PRIMARY
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
              sx={{
                color:BG_MAIN
              }}
              lineHeight={1.55}
              maxWidth={"85%"}
            >
              Gracias Señor por los padres que me diste, por encomendarme la bendición de darme la vida, <br></br>
              la misión de formarse y verme crecer; la dicha de compartir mis triunfos, sueños y esperanzas.<br></br>
               El desafío de formar mi carácter para enriquecer mi espíritu, <br></br>
               por haberme bendecido con el privilegio de ser su hija.

            </Typography>
          </Grid>
           <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={assetUrl("ornament", 4)}
              sx={{
                width: { xs: 110, md: 150 },
                transform:"rotate(160deg)"
               
              }}
            />
          </Grid>
        </Grid>
      </Box>
     
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",1)}></ImageMiddle>
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
                        fontSize:"1.8rem"
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
                      Luis Enrique Landa Carrión
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
                      Claribel Aguilar Valenzuela
                    </Typography>
                  </Fade>
                </Grid>
                <Grid>
                   <Box
            sx={{
              width: 100,
              height: "1px",
              backgroundColor: PRIMARY_LIGHT,
              mx: "auto",
              mt: 2,
              mb: 4,
            }}
          />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${SECOND_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                      sx={{
                        fontSize:"1.5rem"
                      }}
                    >
                     Con el cariño de mis padrinos
                    </Typography>
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO}`}
                      translate="no"
                      sx={{
                        fontSize: "1.8rem",
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                        
                      }}
                    >
                      Ismael Rubio Cordero +<br></br>
                      Maria Martina Aguilar Melendrez
                    </Typography>
                    
                  </Fade>
                </Grid>
              </Grid>

             
            </Box>
          </Grid>
           <Grid container justifyContent="center">
             <Grid
                  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                  sx={{
                    width: 100,
                    height: "1px",
                    backgroundColor: PRIMARY_LIGHT,
                    mx: "auto",
                    mt: 2,
                    mb: 4,
                  }}
                />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                    align="center"
                      className={BODY_TYPO}
                      sx={{ mt: 2 }}
                      lineHeight={1.5}
                    >
                     Nos llena de alegría invitarles a ser parte de esta fecha tan significativa para nuestra familia.
                    </Typography>
                  </Fade>
                </Grid>
               
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
                      top: { xs:-20, sm: -60, md: -40 },
                      left: { xs: -35, sm: -60, md: -30 },
                      width: { xs: 150, md: 350 },
                      transform: "rotate(120deg)",
                      opacity: 0.92,
                      pointerEvents: "none",
                      
                      
                    }}
                  />
                   <Box
                    component="img"
                    src={assetUrl("ornament",2)}
                    sx={{
                      position: "absolute",
                      top: { xs: "35%", sm: -60, md: -40 },
                      right: { xs: -50, sm: -60, md: -30 },
                      width: { xs: 150, md: 350 },
                      transform: "rotate(290deg)",
                      opacity: 0.92,
                      height: "auto",
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
            fontFamily: '"Parisienne"',
            color: PRIMARY_DARK,
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.5,
            dateFormat: "DD MMMM YYYY",
            letterSpacing:"0"
          }}
          number={{
            fontFamily: '"Bodoni Moda"',
            color: PRIMARY_DARK,
            fontSize: "3.6rem",
            fontWeight: 500,
          }}
          label={{
            fontFamily: '"Onest"',
            color: TEXT_PRIMARY,
            fontSize: ".72rem",
            fontWeight: 400,
            
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
                          <img src={assetUrl("ornament",0)} style={{ width: "100px" }} />
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
                        {/* <Fade direction="up" triggerOnce={true}>
                          <img src={assetUrl("ornament",2)} style={{ width: "100px" }} />
                        </Fade> */}
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
                              src={minigalleryImages[0]}
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
                              src={minigalleryImages[1]}
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
                              zIndex:2
                            }}
                          >
                            <Box
                              component="img"
                              src={minigalleryImages[3]}
                              sx={{
                                width: "100%",
                                aspectRatio: "4 / 4",
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
      
      <div style={{ backgroundColor: PRIMARY_DARK, padding: "50px 20px", position:"relative" }}>
        <div
                        style={{
                          position: "absolute",
                          bottom: "calc(25% - 100px)",
                          left: "calc(15% - 100px)",
                          transform: "rotate(130deg)",
                        }}
                      >
                        <Fade direction="up" triggerOnce={true}>
                          <img src={assetUrl("ornament",3)} style={{ width: "100px" }} />
                        </Fade>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "calc(10% - 100px)",
                          right: "calc(15% - 100px)",
                          transform: "rotate(180deg) scale(-1,1)",
                        }}
                      >
                        <Fade direction="up" triggerOnce={true}>
                          <img src={assetUrl("ornament",4)} style={{ width: "120px" }} />
                        </Fade>
                      </div>
          <Grid container spacing={2} padding={4}>
            <Box
      component="section"
      sx={{
        backgroundColor: PRIMARY_DARK,
        color: BG_MAIN,
        py: { xs: 7, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            maxWidth: 480,
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* Encabezado */}
          <Typography
            className={MAIN_TYPO}
            sx={{
              fontSize: "3rem",
           
              // textTransform: "uppercase",
            }}
          >
            El gran día
          </Typography>

          <Box
            sx={{
              width: 42,
              height: "1px",
              backgroundColor: DIVIDER,
              mx: "auto",
              mt: 2,
              mb: 4,
            }}
          />

          {/* Fecha y eventos */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "20px minmax(0, 1fr)",
                sm: "120px minmax(0, 1fr)",
              },
              gap: { xs: 2, sm: 3 },
              textAlign: "left",
            }}
          >
            {/* Fecha */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRight: `1px solid ${DIVIDER}`,
                pr: 2,
              }}
            >
             
            </Box>

            {/* Información de la ubicación */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                minWidth: 0,
              }}
            >

              {/* Ceremonia civil */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "26px minmax(0, 1fr)",
                  gap: 1.5,
                }}
              >
                <NearMeOutlinedIcon
                  sx={{
                    color: DIVIDER,
                    fontSize: 25,
                  }}
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className={SECOND_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    {eventCards[0].eventName}
                  </Typography>
                    <Typography
                    className={SECOND_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    {eventCards[0].locationName}
                  </Typography>
                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontSize: ".8rem",
                      lineHeight: 1.6,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {eventCards[0].address}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <AccessTimeOutlinedIcon
                      sx={{
                        fontSize: 16,
                        color: DIVIDER,
                      }}
                    />

                    <Typography
                      className={SECOND_TYPO}
                      sx={{ fontSize: "1.5rem" }}
                    >
                      {dayjs(eventCards[0].date).format("hh:mm a")}
                    </Typography>
                  </Box>
                </Box>
                  
              </Box>
          <Button
                    component="a"
                    href={eventCards[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<LocationOnOutlinedIcon />}
                    sx={{
                      mt: 4,
                      px: 3,
                      py: 1.1,
                      borderColor: DIVIDER ,
                      borderRadius: 0,
                      color: BG_SECTION,
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      "&:hover": {
                        borderColor: PRIMARY_LIGHT,
                        backgroundColor: "rgba(255,255,255,0.06)",
                      },
                    }}
                  >
                    VER EN MAPAS
                  </Button>
                   <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "26px minmax(0, 1fr)",
                  gap: 1.5,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    color: DIVIDER,
                    fontSize: 25,
                  }}
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className={SECOND_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    {eventCards[1].eventName}
                  </Typography>
                    <Typography
                    className={SECOND_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    {eventCards[1].locationName}
                  </Typography>
                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontSize: ".8rem",
                      lineHeight: 1.6,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {eventCards[1].address}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <AccessTimeOutlinedIcon
                      sx={{
                        fontSize: 16,
                        color: DIVIDER,
                      }}
                    />

                    <Typography
                      className={SECOND_TYPO}
                      sx={{ fontSize: "1.5rem" }}
                    >
                      {dayjs(eventCards[1].date).format("hh:mm a")}
                    </Typography>
                  </Box>
                </Box>
                  
              </Box>
          <Button
                    component="a"
                    href={eventCards[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<LocationOnOutlinedIcon />}
                    sx={{
                      mt: 4,
                      px: 3,
                      py: 1.1,
                      borderColor: DIVIDER ,
                      borderRadius: 0,
                      color: BG_SECTION,
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      "&:hover": {
                        borderColor: PRIMARY_LIGHT,
                        backgroundColor: "rgba(255,255,255,0.06)",
                      },
                    }}
                  >
                    VER EN MAPAS
                  </Button>
             
            </Box>
          </Box>

          {/* Botón de Google Maps */}
      
        </Box>
      </Container>
    </Box>
          </Grid>
          <Box>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: BG_SECTION,
                fontSize: "1rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 1,
                fontStyle: "italic",
              }}
            >
              No queremos que te pierdas este día
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <CalendarButton
                title="XV Melissa"
                startDate="20261219T173000"
                endDate="20261220T20000"
                location=""
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>

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
                  bottom: "calc(5% - 100px)",
                  left: "calc(2% - 100px)",
                  transform: "scale(-1,1)",
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

                    {/* <Paper
                                          
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
                                        </Paper> */}
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
 <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",0)}></ImageMiddle>
      <div
        style={{
          backgroundColor:BG_SECTION,
          padding: "50px 20px",
        }}
      >
        <Box sx={{ backgroundColor: IVORY, mb:4 }}>
          <DressCode {...dresscode}></DressCode>
           <Box
      component="section"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        py: { xs: 5, md: 7 },
        px: 3,
        bgcolor: IVORY,
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
        Color morado reservados para la quinceañera.
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={{ xs: 2, sm: 3 }}
      >
        {colores.map((color) => (
          <Stack
            key={color.hex}
            alignItems="center"
            spacing={1.5}
            
          >
            <Box
              sx={{
                width: 50,
                height:50,
                borderRadius: "50%",
                bgcolor: color.hex,
                flexShrink: 0,
              }}
            />

            
          </Stack>
        ))}
      </Stack>
      <Grid paddingBottom={2} mt={2}>
            <Fade direction="up">
              <Adornment image={assetUrl("ornament")} width={"50px"} />
            </Fade>
          </Grid>
    </Box>
          
        
        </Box>
        <Box sx={{
          p:2,
          pb:4,
          backgroundColor:PRIMARY_DARK,
          display:"grid",
           position: "relative",
        }}>
         
          <div
            style={{
              zIndex:2,
              position: "absolute",
              top: "calc(15%)",
              left: "calc(10%)",
              transform: "translate(-50%, -50%) rotate(90deg)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",4)} style={{ height: "100PX" }} />
            </Fade>
          </div>
          <div
            style={{
              zIndex:2,
              position: "absolute",
              bottom: "calc(15%)",
              right: "calc(-25%)",
              transform: "translate(-50%, -50%) rotate(120deg) scale(-1)",
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={assetUrl("ornament",4)} style={{ height: "80px" }} />
            </Fade>
          </div>
       
   <Gallery
                           images={galleryImages}
                            bgMain={PRIMARY_DARK} 
                            titleColor={PRIMARY_DARK} 
                            bodyColor={TEXT_PRIMARY} 
                            title={""} 
                            subtitle={""}
                            mainTypo={MAIN_TYPO}
                            bodyTypo={BODY_TYPO}
                            
                            />
          <Typography className={MAIN_TYPO} fontSize={"2rem"} align="center" sx={{color:BG_MAIN}}>
            Que la música, las luces y los recuerdos hagan de esta noche algo inolvidable.
          </Typography>
        </Box>
      
      </div>

      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
    </div>
  );
};
export default  XVMelissa;

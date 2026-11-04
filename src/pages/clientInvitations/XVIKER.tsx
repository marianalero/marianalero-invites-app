import { Fade } from "react-awesome-reveal";

import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
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

import dayjs from "dayjs";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

// =========================
// Background Palette
// =========================

export const BG_MAIN = "#1D1916"; // Negro carbón - fondo principal

export const BG_SECTION = "#302923"; // Negro café - tarjetas / secciones

export const BG_ALT = "#3B3029"; // Café oscuro - secciones alternas

export const BG_ACCENT = "#762F3B20"; // Vino translúcido para bloques


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#592630";
export const PRIMARY_DARK = "#381820";
export const PRIMARY_LIGHT = "#80505A";


// =========================
// Western Palette
// =========================

export const WESTERN = "#D1B895"; // Arena - acentos principales

export const WESTERN_DARK = "#9A7B62"; // Cuero tostado

export const WESTERN_LIGHT = "#E5D3B8"; // Arena clara


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";

export const IVORY = "#F3E9D8"; // Marfil cálido

export const BEIGE = "#D1B895"; // Beige arena

export const TEXT_PRIMARY = "#F3E9D8"; // Marfil para texto sobre fondos oscuros

export const TEXT_SECONDARY = "#B9AA98"; // Arena grisácea

export const SILVER = "#A9A39A"; // Plata envejecida

export const SILVER_LIGHT = "#D9D4CC"; // Plata clara

export const BORDER = "#55483C"; // Café grisáceo

export const DIVIDER = "#9A7B62"; // Cuero claro para divisores

export const SHADOW =
  "0px 10px 30px rgba(0,0,0,.30)";

export const MAGIC_GLOW =
  "0 0 30px rgba(118,47,59,.25)";

export const STORY_DIVIDER = "#9A7B62";
const MAIN_TYPO = "brittany";
const SECOND_TYPO = "cormorant-garamond-600";
const BODY_TYPO = "montserrat-400";

const MEDIA_KEY = "invitacion-xv-iker";
const EMPTY_ASSET = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";



const calendarButtonProps = {
    variant: "outlined" as const,
    sx: {
        borderRadius: "999px",
        px: 4,
        py: 1.5,
        textTransform: "none",
        fontFamily: BODY_TYPO,
        borderColor: WESTERN,
        color: WESTERN,
    },
};
const COUNTDOWN_DATE = new Date(2026, 11, 4);
const RSVP_DATE_LINE = new Date(2026, 10, 20);
const INVITATION_ID = 54;

const XVIker= () => {
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

const URL_SONG = `${URL_REPO}canciones/Milugarfavorito.mp3` //: `${URL_REPO}canciones/NovemberRain-Solo.mp3`;
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


  const eventCards: EventCardProps[] = [
     { eventName: "Misa", 
      date: new Date(2026, 3, 11, 17, 0, 0),
     locationName: "Templo Parroquial San Carlos Borromeo",
     address: "C. Republica de Panama, Alvaro Obregon, 83170 Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      image: assetUrl("church",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/P1txi62p8wP33oPH7", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
    { eventName: "Recepción", 
      date: new Date(2026, 3, 11, 19, 30, 0),
     locationName: "",
     address: "Saturnino Campoy #926 % Juan de Dios Bojorquez y Hnos. Talamantes col. El Sahuaro", 
     size: 6, color: PRIMARY_DARK,
      image: assetUrl("reception",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/DLckVwd7aZKAqXct7", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
  ];


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
          names="Iker Omar"
          namesTypo={MAIN_TYPO}
          date="4 de Diciembre 2026"
          extraText="Un día para celebrar juntos"
          bodyTypo={BODY_TYPO}
          showHeart={false}
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
    src={assetUrl("cover")}
    alt="Sesión fotográfica de Iker Omar"
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
     className={BODY_TYPO}
      sx={{
       
       
        letterSpacing: "0.35em",
      }}
    >
      MIS XV AÑOS
    </Typography>

  

    <Typography
      component="h1"
      className={MAIN_TYPO}
      sx={{
       
        fontSize: {
          xs: "clamp(4rem, 16vw, 5.5rem)",
          md: "7rem",
        },
        lineHeight: 1.15,
        fontWeight: 400,
        color: "#F7F2F8",
      }}
    >
      Iker Omar
    </Typography>
  <Box
      sx={{
        width: 48,
        height: "1px",
        bgcolor: "#F7F2F8",
      }}
    />

    <Typography
    className={SECOND_TYPO}
      sx={{
         
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
                              src={minigalleryImages[0]}
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
                              src={minigalleryImages[1]}
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
        <Grid container p={2}>
         
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Typography
              textAlign="center"
              className={`${SECOND_TYPO} italic`}
              fontSize="1.3rem"
              sx={{
                color:TEXT_SECONDARY
              }}
              lineHeight={1.55}
              maxWidth={"85%"}
            >
              Gracias, Señor, por los padres que me diste, por su amor, su guía y sus enseñanzas;
              por acompañarme en cada paso y ayudarme a crecer con valores y fortaleza.<br></br> 

Gracias por permitirme compartir con ellos mis sueños, mis alegrías y mis logros, y por la bendición de  celebrar juntos esta etapa tan especial de mi vida.

            </Typography>
          </Grid>
           <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
            maxWidth: 340,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
          <Typography sx={{ color: PRIMARY_DARK, fontSize: 20 }}>✦</Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
        </Box>
          </Grid>
        </Grid>
      </Box>
     
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",0)}></ImageMiddle>
     <Box
      component="section"
      sx={{
        backgroundColor: BG_MAIN,
        px: 2.5,
        py: { xs: 7, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 520,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: IVORY,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 360,
            mb: 2,
          }}
        >
          Con el amor y la guía de quienes
          <br />
          han acompañado cada paso de mi vida...
        </Typography>

        <Typography
          sx={{
            color: TEXT_SECONDARY,
            fontFamily: "'Brittany Signature', cursive",
            fontSize: 25,
            mb: 1,
          }}
        >
          Mis padres
        </Typography>

        <Typography
        className={SECOND_TYPO}
          sx={{
            color: IVORY,
           
            fontSize: 32,
            lineHeight: 1.5,
            mb: 2,
          }}
        >
          Karla Salcido
          <br />
          <Box
            component="span"
            sx={{ fontSize: 18, display: "block", lineHeight: 1.4 }}
          >
            &
          </Box>
          Abelardo Leyva
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            maxWidth: 260,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
          <Typography sx={{ color: STORY_DIVIDER, fontSize: 12 }}>✦</Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
        </Box>

        <Typography
          sx={{
            color: TEXT_SECONDARY,
            fontFamily: "'Brittany Signature', cursive",
            fontSize: 25,
            mb: 1,
          }}
        >
          Mis hermanos
        </Typography>

        <Typography
          className={SECOND_TYPO}
          sx={{
            color: IVORY,
            
            fontSize: 25,
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          Saira Leyva Salcido
          <br />
          Abelardo Leyva Salcido
        </Typography>

        <Typography sx={{ color: STORY_DIVIDER, fontSize: 12, mb: 2 }}>
          ✦
        </Typography>

        <Typography
          sx={{
            color: IVORY,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 360,
          }}
        >
          Nos llena de alegría invitarte a ser parte de esta fecha tan
          significativa para nuestra familia.
        </Typography>
      </Box>
    </Box>
      <Box
  sx={{
    backgroundImage: `url(${assetUrl("background")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "50px 20px",
    position: "relative",
    isolation: "isolate",

    "&::before": {
  content: '""',
  position: "absolute",
  inset: 0,
  background: `
    linear-gradient(
      to bottom,
      rgba(29, 25, 22, 0.38) 0%,
      rgba(29, 25, 22, 0.08) 35%,
      rgba(29, 25, 22, 0.05) 65%,
      rgba(29, 25, 22, 0.18) 100%
    )
  `,
  zIndex: -1,
},
  }}
>
       
       

        <EditorialCountdown
          eventDate={COUNTDOWN_DATE}
          title={{
            fontFamily: '"Cormorant Garamond"',
            color: PRIMARY_DARK,
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.5,
            dateFormat: "DD MMMM YYYY",
            letterSpacing:"0",
            textTransform:"uppercase"
          }}
          number={{
            fontFamily: '"Cormorant Garamond"',
            color: TEXT_PRIMARY,
            fontSize: "3.6rem",
            fontWeight: 500,
          }}
          label={{
            fontFamily: '"Monserrat"',
            color: TEXT_PRIMARY,
            fontSize: ".72rem",
            fontWeight: 400,
            
            textTransform: "uppercase",
          }}
          divider={{
            color: TEXT_PRIMARY,
          }}
          responsive={{
            numberSize: "2.2rem",
            labelSize: ".65rem",
            columnGap: 2,
          }}
        />
          
      </Box>
      
      <div style={{ backgroundColor: BG_MAIN, padding: "10px 10px", position:"relative" }}>
        
          <Grid container spacing={2} padding={4}>
            <Box
      component="section"
      sx={{
        backgroundColor: BG_MAIN,
        px: { xs: 2, sm: 3 },
        py: { xs: 2, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
       
        <Typography
          component="h2"
          sx={{
            color: IVORY,
            textAlign: "center",
            fontFamily: "serif",
            fontSize: { xs: 30, md: 42 },
            mb: 4,
          }}
        >
         Nos vemos ahí
        </Typography>

        <Box sx={{ display: "grid", gap: 2.5 }}>
          {eventCards.map((location,index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                overflow: "hidden",
                bgcolor: BG_SECTION,
                border: `1px solid ${BORDER}`,
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, mb: 2.5 ,p:4 }}>
               <Typography
               className={MAIN_TYPO}
                  sx={{
                    color: WESTERN,
                    // textTransform: "uppercase",
                    // letterSpacing: "0.16em",
                    fontSize: "2rem",
                    mb: 1,
                  }}
                >
                  {location.eventName}
                </Typography>
                </Box>
              <Box
                component="img"
                src={location.image}
                alt={location.eventName}
                sx={{
                  width: { xs: "100%", sm: 220 },
                  height: { xs: 190, sm: "auto" },
                  objectFit: "contain",
                  p: 1.5,
                  bgcolor: BG_SECTION,
                }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  p: { xs: 2.5, sm: 3 },
                  "&:last-child": { pb: { xs: 2.5, sm: 3 } },
                }}
              >
                <Typography
                  sx={{
                    color: WESTERN,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontSize: 11,
                    mb: 1,
                  }}
                >
                  {location.locationName}
                </Typography>

                <Typography
                  component="h3"
                  sx={{
                    color: IVORY,
                    fontFamily: "serif",
                    fontSize: 25,
                    mb: 1,
                  }}
                >
                   {dayjs(location.date).format("hh:mm a")}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, mb: 2.5 }}>
                  <LocationOnOutlinedIcon
                    sx={{ color: PRIMARY, fontSize: 18, mt: 0.2 }}
                  />
                  <Typography
                    sx={{
                      color: TEXT_SECONDARY,
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {location.address}
                  </Typography>
                </Box>

                <Button
                  component="a"
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<ArrowOutwardRoundedIcon />}
                  sx={{
                    mt: "auto",
                    color: IVORY,
                    bgcolor: PRIMARY,
                    borderRadius: 1,
                    px: 2.5,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: PRIMARY,
                      filter: "brightness(1.1)",
                    },
                  }}
                >
                  Ver ubicación
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
          </Grid>
          <Box mb={2}>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: WESTERN,
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
                title="XV Iker Omar"
                startDate="20261219T173000"
                endDate="20261220T20000"
                location=""
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>

     
      <ImageMiddle bgPosition="50%" height="70vh" bgImage={assetUrl("middle-image",1)}></ImageMiddle>
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
                      color={TEXT_SECONDARY}
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
            className={SECOND_TYPO}
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
         <Box
      component="section"
      sx={{
        backgroundColor: BG_MAIN,
        px: 2,
        py: { xs: 7, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={assetUrl("icon",1)}
          alt="Sombrero vaquero y botas"
          sx={{
            width: { xs: 180, sm: 220 },
            height: "auto",
            objectFit: "contain",
            mb: 2,
          }}
        />

        <Typography
          component="h2"
          className={SECOND_TYPO}
          sx={{
            color: IVORY,
            // fontFamily: "serif",
            fontSize: { xs: 27, sm: 34 },
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Código de vestimenta
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
            maxWidth: 340,
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
          <Typography sx={{ color: PRIMARY, fontSize: 20 }}>✦</Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: DIVIDER }} />
        </Box>

        <Typography
        className={SECOND_TYPO}
          sx={{
            color: IVORY,
           
            fontSize: { xs: 24, sm: 28 },
            mb: 1,
          }}
        >
          Semi Formal o Vaquero
        </Typography>

        {/* <Typography
          sx={{
            color: TEXT_SECONDARY,
            fontSize: 14,
            lineHeight: 1.8,
            maxWidth: 380,
          }}
        >
          Viste tu mejor estilo y acompáñanos a celebrar esta noche especial.
        </Typography> */}
      </Box>
    </Box>
        <Box sx={{
          p:2,
          pb:4,
          mt:2,
          backgroundColor:PRIMARY_DARK,
          display:"grid",
           position: "relative",
        }}>
         
        
         
       
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
          <Typography className={SECOND_TYPO} fontStyle={"italic"} fontSize={"2rem"} align="center" sx={{color:TEXT_SECONDARY, fontStyle:"italic!important", lineHeight:1}}>
           Las mejores aventuras se disfrutan en buena compañía.<br></br> ¡Gracias por ser parte de la mía!
          </Typography>
        </Box>
      
      </div>

      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
    </div>
  );
};
export default  XVIker;

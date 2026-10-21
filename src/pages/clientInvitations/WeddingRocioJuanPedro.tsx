import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { GiftListProps } from "../../models/component/giftList";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from "@mui/material/Grid2";
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Button, Container, IconButton, Paper, Stack, Typography } from "@mui/material";

import RSVPForm from "../../components/RSVP/RSVPForm";
import { Fade } from "react-awesome-reveal";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";

import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";

import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import dayjs from "dayjs";
import PhotoCoverIntro from "../../components/Intro/PhotoCoverIntro/PhotoCoverIntro";
import Gallery from "../../components/GalleryV2/Gallery";
import MiniGallery from "../../components/MiniGallery/MiniGallery";



const INVITATION_ID = 48;
const MEDIA_KEY = "invitacion-rocio-juan-pedro";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";


const BG_MAIN = "#F7F3EB";       // Marfil
const BG_SECTION = "#EDE8DE";    // Beige cálido

const BG_DARK = "#344A3D";       // Verde bosque

const SAGE = "#667B63";          // Verde salvia
const FOREST = "#344A3D";        // Verde bosque
const CHARCOAL = "#292A28";      // Carbón
const CHAMPAGNE = "#B99A72";     // Champagne

const TEXT_PRIMARY = "#292A28";  // Texto principal
const TEXT_SECONDARY = "#667064";// Texto secundario
const TEXT_LIGHT = "#F7F3EB";    // Texto sobre fondos oscuros

const BORDER = "#D8C9B4";        // Bordes suaves
// const GOLD_LINE = "#B99A72";     // Líneas y ornamentos
const WHITE = "#ffffff";
const SHADOW_COLOR = "rgba(185, 154, 114, 0.25)";

const MAIN_TYPO = "great-vibes-regular";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "montserrat-400 ";
const URL_SONG = `${URL_REPO}canciones/ReyliBarba-CasateConmigo.mp3`;

const COUNTDOWN_DATE = new Date(2026, 10, 28);
const RSVP_DATE_LINE = new Date(2026, 9, 20);

const calendarButtonProps = {
  variant: "outlined" as const,
  sx: {
    fontFamily:"",
   borderColor: CHAMPAGNE,
              
              borderRadius: 0,
              color: TEXT_LIGHT,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              "&:hover": {
                borderColor: TEXT_LIGHT,
                backgroundColor: "rgba(255,255,255,0.06)",
              },
  },
};



const WeddingRocioJuanPedro = () => {
  const [searchParams] = useSearchParams();

  const invitedGuests: number | undefined = useMemo(() => {
    const num = Number(searchParams.get("number"));
    return isNaN(num) ? undefined : num;
  }, [searchParams]);

  const guestId: number | undefined = useMemo(() => {
    const num = Number(searchParams.get("id"));
    return isNaN(num) ? undefined : num;
  }, [searchParams]);

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

  const eventCards: EventCardProps = 
    {
      bgColor: "white",
      eventName: "Ceremonia Civil - Recepción",
      date: new Date(2026, 10, 6, 17, 30, 0),
      endDate :  new Date(2026, 10, 6, 23, 0, 0),
     
      address: "Calle Moro 19 casi esquina Blvd La herradura. Campestre la herradura",
      size: 12,
      color: TEXT_PRIMARY,
      mainTypo: SECONDARY_TYPO,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/VeGRnXQ6iFzxzKfW8",
      colorButton: FOREST,
      colorIcon: TEXT_PRIMARY,
      fontSize: "2rem",
      borderSquare: true,
    };

  const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    fontSize: "1.5rem",
    mainPhrase:
      "Si su deseo es hacernos algún obsequio compartimos las opciones",
    giftIcon: assetUrl("icon", 13),
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_PRIMARY,
    bgColor: WHITE,
    showEnvelope: true,
    envelopeMainTypo: SECONDARY_TYPO,
    envelopeFontSize: "1.5rem",
    envelopePhrase:
      "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase:
      "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: assetUrl("icon", 13),
    bankDetails: [
      {
        numbers: [
          {
            numberType: "CLABE",
            number: "661180007491714694",
          },
          
        ],
        bank: "KLAR",
        name: "Rocio Calderon",
        textColor: TEXT_PRIMARY,
        bodyTypo: BODY_TYPO,
        bgColor: "white",
        outlineColor: true,
        mainTypo: MAIN_TYPO,
      },
    ],
  };

  const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: FOREST,
    colorTitle:FOREST,
    colorBody:FOREST,
    fontSize: "50px",
    bgColor: BG_SECTION,
    events: [
      {
        eventName: "Ceremonia Civil",
        date: new Date(2025, 10, 16, 17, 30, 0),
        icon: assetUrl("icon", 1),
      },
      {
        eventName: "Inicio de la fiesta",
        date: new Date(2025, 10, 16, 21, 0, 0),
        icon: assetUrl("icon", 2),
      },
      {
        eventName: "Cena",
        date: new Date(2025, 10, 16, 22, 0, 0),
        icon: assetUrl("icon", 3),
      },
    ],
  };

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
    document.title = "Boda B. Rocio & Juan Pedro";
  }, []);
   const galleryImages = cloudAssets
    .filter((asset) => asset.assetKind === "gallery")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((asset) => asset.secureUrl);
  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: showIntro ? "hidden" : "auto",
        height: showIntro ? "100dvh" : "auto",
        color:TEXT_PRIMARY
      }}
    >
      <MusicFabPlayer
        ref={musicRef}
        src={URL_SONG}
        backgroundColor={TEXT_PRIMARY}
      />

      {/* INTRO */}
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
          phrase="Nos casamos"
          names="Rocio y Juan Pedro"
          namesTypo={MAIN_TYPO}
          date="28 de Noviembre 2026"
          extraText="Un día para celebrar juntos"
          bodyTypo={BODY_TYPO}
        />

      {/* INVITACIÓN */}
      <Box>
        <CoverInline
          ourWeddingStart={true}
          weddingDate="28.NOVIEMBRE.26"
          bgImage={assetUrl("cover", 0)}
          brideName="B. Rocio"
          symbolr={"&"}
          groomName={"Juan Pedro"}
          className={MAIN_TYPO}
          bgSize="cover"
          overlay={true}
          fontSize="3rem"
          verticalPosition="bottom"
          ampersonClassName={MAIN_TYPO}
          bgPositionY="40%"
        ></CoverInline>
          <Box
      sx={{
        backgroundColor: BG_MAIN,
        color: CHARCOAL,
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className={BODY_TYPO}
            sx={{
              color: SAGE,
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              lineHeight: { xs: 2, md: 2.1 },
              letterSpacing: { xs: "0.18em", md: "0.22em" },
              fontWeight: 400,
              textTransform: "uppercase",
              textWrap: "pretty",
            }}
          >
            "Nos conocimos sin saber que un día
            seríamos el amor de nuestras vidas.<br></br>
            El tiempo nos alejó, la vida nos volvió
            a reunir y el amor nos trajo hasta aquí.<br></br>
            Hoy te elijo para compartir todos mis
            días y llevarte siempre como un sello
            sobre mi corazón."
          </Typography>
          <Box
            sx={{
              width: 42,
              height: "1px",
              backgroundColor: CHAMPAGNE,
              my: 2.5,
            }}
          />

        <Box
            sx={{
              maxWidth: 540,
              mx: "auto",
              mb: 2
            }}
          >
            <Typography
              className={SECONDARY_TYPO}
              sx={{
                color: CHARCOAL,
                fontSize: { xs: "1.15rem", md: "1.4rem" },
                lineHeight: 1.5,
                mb: 1.5,
              }}
            >
              El cantar de los cantares 8.6
            </Typography>

            <Typography
              className={BODY_TYPO}
              sx={{
                color: CHARCOAL,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.9,
                fontWeight: 400,
              }}
            >
              Ponme como un sello sobre tu corazón,
              como un sello sobre tu brazo,
              porque el amor es tan fuerte como la muerte.
            </Typography>
          </Box>

          {/* Fotografía con arco superior */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 430,
              aspectRatio: "4 / 5",
              overflow: "hidden",
              borderRadius: "50% 50% 0 0 / 35% 35% 0 0",
              border: `1px solid ${CHAMPAGNE}`,
              borderBottom: 0,
            }}
          >
            <Box
              component="img"
              src={assetUrl("middle-image",0)}
              alt="Fotografía de los novios"
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box padding={2} bgcolor={BG_MAIN}>
              <Box
                display={"flex"}
                justifyContent={"center"}
              
              >
                <Grid
                  container
                  spacing={2}
                  padding={2}
                  justifyContent={"center"}
                >
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Fade direction="up">
                      <Typography
                        textAlign={"center"}
                        className={`${BODY_TYPO}`}
                      >
                        Con la bendición de nuestros padres
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: SAGE, fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={MAIN_TYPO}
                      >
                        Marisela Astorga Valenzuela <br></br>
                        Manuel Calderón Ballardo
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
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
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${CHAMPAGNE}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />
                </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: SAGE, fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={MAIN_TYPO}
                      >
          
                        Anet Esperanza Santeliz Moreno <br></br>
                        Juan Pedro Escoboza Batriz
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Typography
                      align="center"
                      className={BODY_TYPO}
                      sx={{
                        mt: { xs: 2.5, md: 3.5 },

                        lineHeight: 1.5,
                        letterSpacing: "0.08em",
                        
                        color: TEXT_PRIMARY,
                        maxWidth: 300,
                        // whiteSpace:"nowrap"
                      }}
                    >
                       Queremos compartir este capítulo
      tan especial de nuestras vidas con
            las personas que más queremos.
                    </Typography>

                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </div> */}

        <CountDown
        title="Falta poco para nuestro gran día"
          eventDate={COUNTDOWN_DATE}
          bgImage={assetUrl("background", 0)}
          typoHeader={MAIN_TYPO}
          typoCountdown={SECONDARY_TYPO}
          fontSize="2.3rem"
          marginTop="30px"
          padding="1em"
          alignItems="end"
        ></CountDown>
       
        <div style={{ backgroundColor: FOREST, padding: "50px 20px" }}>
          <Grid container spacing={2} padding={4}>
            <Box
      component="section"
      sx={{
        backgroundColor: BG_DARK,
        color: TEXT_LIGHT,
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
            Nuestra boda
          </Typography>

          <Box
            sx={{
              width: 42,
              height: "1px",
              backgroundColor: CHAMPAGNE,
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
                xs: "90px minmax(0, 1fr)",
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
                borderRight: `1px solid ${CHAMPAGNE}`,
                pr: 2,
              }}
            >
              <Typography
                className={MAIN_TYPO}
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem" },
                  lineHeight: 1,
                }}
              >
                28
              </Typography>

              <Typography
                className={SECONDARY_TYPO}
                sx={{
                  fontSize: "1.5rem",
                  letterSpacing: "0.18em",
                  mt: 1,
                }}
              >
                NOV
              </Typography>

              <Typography
                className={SECONDARY_TYPO}
                sx={{
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                2026
              </Typography>
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
                <LocationOnOutlinedIcon
                  sx={{
                    color: CHAMPAGNE,
                    fontSize: 25,
                  }}
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className={SECONDARY_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    CEREMONIA CIVIL
                  </Typography>

                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontSize: ".8rem",
                      lineHeight: 1.6,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {eventCards.address}
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
                        color: CHAMPAGNE,
                      }}
                    />

                    <Typography
                      className={SECONDARY_TYPO}
                      sx={{ fontSize: "1.5rem" }}
                    >
                      {dayjs(eventCards.date).format("hh:mm a")}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Recepción */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "26px minmax(0, 1fr)",
                  gap: 1.5,
                }}
              >
                <NearMeOutlinedIcon
                  sx={{
                    color: CHAMPAGNE,
                    fontSize: 24,
                  }}
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className={SECONDARY_TYPO}
                    sx={{
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      mb: 1,
                    }}
                  >
                    RECEPCIÓN
                  </Typography>

                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontSize: ".8rem",
                      lineHeight: 1.6,
                    }}
                  >
                    En el mismo lugar
                  </Typography>

                
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Botón de Google Maps */}
          <Button
            component="a"
            href={eventCards.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<LocationOnOutlinedIcon />}
            sx={{
              mt: 4,
              px: 3,
              py: 1.1,
              borderColor: CHAMPAGNE,
              borderRadius: 0,
              color: TEXT_LIGHT,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              "&:hover": {
                borderColor: TEXT_LIGHT,
                backgroundColor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            VER EN MAPAS
          </Button>
        </Box>
      </Container>
    </Box>
          </Grid>
          <Box>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: TEXT_LIGHT,
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
                title="Boda de Elizabeth & Miguel"
                startDate="20261024T164000"
                endDate="20261024T230000"
                location="Casa Parotta"
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>
       <Box
      component="section"
      sx={{
        backgroundColor: BG_SECTION,
        px: { xs: 2.5, sm: 4 },
        py: 7,
        overflow: "hidden",
      }}
    >
      {/* TÍTULO */}
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography
        className={MAIN_TYPO}
          sx={{
            
            fontSize: { xs: "2rem", sm: "3rem" },
            fontWeight: 400,
            lineHeight: 1,
            color: FOREST,
          }}
        >
          Itinerario
        </Typography>

        <Typography
         className={BODY_TYPO}
          sx={{
            mt: 1.5,
            
            lineHeight: 1.5,
            color: TEXT_SECONDARY,
          }}
        >
          Acompáñanos en cada instante de esta celebración.
        </Typography>
      </Box>

      {/* TIMELINE */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          mx: "auto",
        }}
      >
        {timelineData.events?.map((event, index) => {
          const isLast = index === (timelineData.events?.length ?? 0) - 1;

          

          const time = event.date ? dayjs(event.date).format("h:mm A") : "";

          return (
            <Fade triggerOnce={true} direction="up">
            <Box
              key={`${event.eventName}-${index}`}
              sx={{
                display: "grid",
                gridTemplateColumns: "72px 24px 1fr",
                minHeight: isLast ? 80 : 105,
              }}
            >
              {/* ICONO */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  pt: 0.5,
                }}
              >
                {event.icon && (
                  <Box
                    component="img"
                    src={event.icon}
                    alt={event.eventName ?? ""}
                    sx={{
                      width: event.iconSize ?? "48px",
                      height: event.iconSize ?? "48px",
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>

              {/* LÍNEA */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: isLast ? "50%" : 0,
                    width: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                {/* PUNTO */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    mt: 3,
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    backgroundColor: BG_MAIN,
                    boxShadow: `0 0 0 5px ${SHADOW_COLOR}`,
                  }}
                />
              </Box>

              {/* INFORMACIÓN */}

              <Box
                sx={{
                  pl: 1.5,
                  pb: 3.5,
                }}
              >
                <Typography
                className={MAIN_TYPO}
                  sx={{
                   
                    fontSize: {
                      xs: "25px",
                      sm: "28px",
                    },
                    lineHeight: 1,
                    color: SAGE,
                  }}
                >
                  {time}
                </Typography>

                <Typography
                    className={SECONDARY_TYPO}
                  sx={{
                    mt: 0.8,
                    fontSize: "1.2rem",
                    lineHeight: 1.35,
                    color: TEXT_PRIMARY,
                  }}
                >
                  {event.eventName}
                </Typography>
              </Box>
              
            </Box>
            </Fade>
            
          );
        })}
      </Box>
    </Box>
        <ImageMiddle
          bgPosition="50%"
          height="80vh"
          bgImage={assetUrl("middle-image",2)}
          bgPositionY="50%"
        ></ImageMiddle>
         <Box
          sx={{
            background: BG_MAIN,
            paddingTop: 6,
            paddingX: 2,
            position: "relative",
          }}
        >
         
          <Grid container spacing={4} justifyContent="center" p={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  border: `1px solid ${BORDER}`,
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
                        lineHeight: 1,
                        fontSize: "2.5rem",
                        color: FOREST,
                      }}
                    >
                      Código de Vestimenta
                    </Typography>

                    <Typography
                    className={SECONDARY_TYPO}
                      textAlign="center"
                      sx={{
                       
                        textTransform: "uppercase",
                        letterSpacing: ".35em",
                        color: TEXT_PRIMARY,
                        fontSize: "1.5rem",
                        mt: 2,
                        mb: 2,
                      }}
                    >
                      Formal
                    </Typography>
                  </Fade>
                </Grid>
                <Fade triggerOnce={true} direction="up">
                  <Box
                    component="img"
                    src={assetUrl("icon",0)}
                    sx={{
                      height: { xs: "20vh", sm: "30vh", md: "50vh" },
                      maxHeight: 300,
                      mt: 3,
                      mb: 4,
                    }}
                  />
                </Fade>
                {/* <Box
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
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${CHAMPAGNE}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />
                </Box> */}

            
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}></Grid>
          </Grid>
        </Box>
        <div
          style={{
            // backgroundImage: `url("${assetUrl("background", 1)}")`,
            // backgroundSize: "cover",
            // backgroundPosition: "left",
            padding: "50px 20px",
            backgroundColor:BG_SECTION
            // backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container spacing={2} padding={1} paddingBottom={0}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 470,
                    bgcolor: "white",
                    p: { xs: 4, md: 5 },
                    borderRadius: 0,
                    boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
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

                      lineHeight: 1,
                      mb: 2,

                      fontSize: "2rem",
                    }}
                  >
                    {giftListData.title}
                  </Typography>
                    
                    <Box display={"flex"} justifyContent={"center"}
                    >
                          <Box
                          component="img"
                          src={assetUrl("icon", 4)}
                          sx={{
                            height: 70,
                          }}
                        />
                    </Box>
                  {/* Segunda frase */}
                

                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontSize: "1rem",
                      color: giftListData.textColor,
                      textAlign: "center",
                      lineHeight: 1.9,
                      mb: 5,
                    }}
                  >
                    Para quienes deseen obsequiarnos un presente, contaremos con
                    un buzón de sobres el día del evento <br></br>
                    Asimismo, podrán realizar una transferencia bancaria.
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
                         boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
                      }}
                    >
                        <Stack>
                    {bank.numbers.map((bankNumber, bni) => (
                        <Box key={bni}>

                        
                          <Typography
                          className={SECONDARY_TYPO}
                          sx={{
                            letterSpacing: ".18em",
                            fontSize: "1rem",
                            color: TEXT_PRIMARY,
                            textAlign: "center",
                          }}
                        >
                          {bankNumber.numberType}
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
                          {bankNumber.number}
                          <IconButton
                            onClick={() => {
                              navigator.clipboard.writeText(
                                bank.numbers[0].number.trim(),
                              );
                            }}
                          >
                            <ContentCopyIcon sx={{ color: TEXT_PRIMARY }} />
                          </IconButton>
                        </Typography>
                        </Box>

                    ))}
                    

                        <Typography
                          className={BODY_TYPO}
                          sx={{
                            fontSize: ".9rem",
                            color: TEXT_PRIMARY,
                            opacity: 0.85,
                            textAlign: "center",
                          }}
                        >
                          {bank.bank}
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
                          {bank.name}
                        </Typography>
                      </Stack>
                    </Paper>
                  ))}

                
                </Paper>
              </Box>
            </Grid>
          </Grid>
        
        </div>
        <ImageMiddle
          bgPosition="center"
          height="80vh"
          bgImage={assetUrl("middle-image",1)}
          bgPositionY="50%"
        ></ImageMiddle>
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
              background: FOREST,
              borderRadius: "180px 180px 0 0",
              px: 4,
              py: 6,
              textAlign: "center",
              boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
            }}
          >
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
            className={MAIN_TYPO}
              sx={{
                mr:3,
                color: "#FFF",
                fontSize: {
                  xs: "6rem",
                  md: "7rem",
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
              padding={1}
              guest={guest || undefined}
              dateLine={RSVP_DATE_LINE}
              textColor={"white"}
              colorButton={"white"}
              bgColor={FOREST}
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
            ></RSVPForm>
          </Box>
        </Box>
         <Box 
         sx={{

         }}
         >
            <Grid>
                 <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  py: { xs: 8, md: 12 },
                  px: 3,
                  backgroundColor: BG_SECTION,
                  display: "flex",
                  justifyContent: "center",
                 
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 520,
                     border: "1.5px solid rgba(190,170,130,.45)",
                   boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
                    px: { xs: 4, md: 7 },
                    py: { xs: 8, md: 10 },
                   backgroundColor: WHITE,
                    textAlign: "center",
     
                  }}
                >
                  <Typography
                  className={BODY_TYPO}
                    sx={{
                     color:TEXT_PRIMARY,
                      fontSize: {
                        xs: ".95rem",
                        md: "1.1rem",
                      },
                      lineHeight: 2.2,
                      opacity: 0.95,
                    }}
                  >
                    Adoramos a los pequeños,<br></br>
                    sin embargo esta celebración está destinada<br></br>
                    exclusivamente para adultos.<br></br>
                    ¡Agradecemos su comprensión!
                  </Typography>
                  <Typography
                  className={SECONDARY_TYPO}
                    sx={{
                      color:FOREST,
                      fontSize: {
                        xs: "2rem",
                        md: "2.5rem",
                      },
                      letterSpacing: ".18em",
                     mt:2
                    }}
                  >
                    NO NIÑOS
                  </Typography>
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
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${CHAMPAGNE}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: CHAMPAGNE,
                      opacity: 0.45,
                    }}
                  />
                </Box>

                  <Typography
                  className={MAIN_TYPO}
                    sx={{
                      color:CHARCOAL,
                      fontSize: "2.5rem",
                      
                    }}
                  >
                    Gracias
                  </Typography>
                </Box>
              </Box>
            </Grid>
            </Grid>
        </Box>     
       

          {/* <Gallery
                  images={galleryImages}
                   bgMain={BG_MAIN} 
                   titleColor={SAGE} 
                   bodyColor={TEXT_PRIMARY} 
                   title={"Nuestros momentos"} 
                   subtitle={"Un pedacito de nuestra historia."}
                   mainTypo={MAIN_TYPO}
                   bodyTypo={BODY_TYPO}
                   
                   /> */}
        <Box
  component="section"
  sx={{
    backgroundColor: BG_DARK,
    px: { xs: 3, sm: 5 },
    py: { xs: 9, sm: 11 },
    textAlign: "center",
  }}
>
  
  <Box sx={{ maxWidth: 360, mx: "auto" }}>
    <Typography
     className={MAIN_TYPO}
      component="p"
      sx={{
       
        fontSize: { xs: "31px", sm: "36px" },
        fontWeight: 400,
        lineHeight: 1.25,
        color: TEXT_LIGHT,
        mb: 2,
      }}
    >
     Un amor, una vida, infinitos recuerdos.
    </Typography>
  </Box>
   <MiniGallery
                     images={galleryImages}
                      backgroundColor={BG_DARK}
                     spacing={8}
                     gap={6}
                     imageHeightDesktop={580}
                     imageHeightMobile={260}
                     />
  <Box
    sx={{
      width: 45,
      height: "1px",
      backgroundColor: TEXT_LIGHT,
      mx: "auto",
      my: 4,
      opacity: 0.7,
    }}
  />

  <Typography
  className={MAIN_TYPO}
    sx={{
      
      fontSize: { xs: "2rem", sm: "3rem" },
      fontWeight: 400,
      lineHeight: 1,
      color: TEXT_LIGHT,
    }}
  >
    B. Rocio & Juan Pedro
  </Typography>

  <Typography
  className={BODY_TYPO}
    sx={{
      mt: 2,
     
      fontSize: ".8rem",
      letterSpacing: "3px",
      color: TEXT_LIGHT,
    }}
  >
   NOV 2026
  </Typography>
</Box>
        <FooterInvites bgColor={"white"} color={TEXT_PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default WeddingRocioJuanPedro;

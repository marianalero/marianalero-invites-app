import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GiftListProps } from "../../models/component/giftList";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Grid from "@mui/material/Grid2";
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import {
  Box,
  Button,
  Card,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import RSVPForm from "../../components/RSVP/RSVPForm";

import { Fade } from "react-awesome-reveal";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";

import dayjs from "dayjs";
import { t } from "i18next";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import Gallery from "../../components/Gallery/Gallert";

import imgPortada from "../../assets/boda-ana-cecilia-juan-carlos/portada.jpg";
import imgCp1 from "../../assets/boda-ana-cecilia-juan-carlos/1.jpg";
import imgCp2 from "../../assets/boda-ana-cecilia-juan-carlos/2.jpg";
import imgCp3 from "../../assets/boda-ana-cecilia-juan-carlos/3.jpg";
import imgContador from "../../assets/boda-ana-cecilia-juan-carlos/contador.jpg";

import imgMng1 from "../../assets/boda-ana-cecilia-juan-carlos/mng1.jpg";
import imgMng2 from "../../assets/boda-ana-cecilia-juan-carlos/mng2.jpg";
import imgMng3 from "../../assets/boda-ana-cecilia-juan-carlos/mng3.jpg";
import imgMng4 from "../../assets/boda-ana-cecilia-juan-carlos/mng4.jpg";
import imgMng5 from "../../assets/boda-ana-cecilia-juan-carlos/mng5.jpg";

import imgConf from "../../assets/boda-ana-cecilia-juan-carlos/confirmacion.jpg";

import deco1 from "../../assets/boda-ana-cecilia-juan-carlos/deco/1.png";
import deco2 from "../../assets/boda-ana-cecilia-juan-carlos/deco/2.png";
import deco3 from "../../assets/boda-ana-cecilia-juan-carlos/deco/3.png";
import deco4 from "../../assets/boda-ana-cecilia-juan-carlos/deco/4.png";

import icono1 from "../../assets/boda-ana-cecilia-juan-carlos/iconos/1.png";
import icono2 from "../../assets/boda-ana-cecilia-juan-carlos/iconos/2.png";
import icono3 from "../../assets/boda-ana-cecilia-juan-carlos/iconos/3.png";
import icono4 from "../../assets/boda-ana-cecilia-juan-carlos/iconos/4.png";
// import regalo from "../../assets/boda-ana-cecilia-juan-carlos/iconos/regalo.png";
import imgDresscode from "../../assets/boda-ana-cecilia-juan-carlos/dresscode.png";
import imgRecepcion from "../../assets/boda-ana-cecilia-juan-carlos/recepcion.png";
import imgIglesia from "../../assets/boda-ana-cecilia-juan-carlos/iglesia.png";
import iconoSobre from "../../assets/boda-ana-cecilia-juan-carlos/iconos/sobre.png";
import adorno from "../../assets/boda-ana-cecilia-juan-carlos/adorno.png";

import sobreIntro from "../../assets/boda-ana-cecilia-juan-carlos/sobre.png";
import sello from "../../assets/boda-ana-cecilia-juan-carlos/sello.png";
// import fondoVer from "../../assets/boda-ana-cecilia-juan-carlos/fondo-ver.png";

import { AccessTimeRounded, LocationOnOutlined } from "@mui/icons-material";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import { useSnackbar } from "../../context/snackbarContext";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";

import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineConnector from "@mui/lab/TimelineConnector";

const INVITATION_ID = 9;
// 🎨 FONDOS

const BG_MAIN = "#FBF8F4"; // Papel algodón
const BG_SECTION = "#F3EBDD"; // Beige cálido
const BG_ACCENT = "#EFE4D2"; // Papel artesanal

// 🖋 TEXTOS

const TEXT_PRIMARY = "#6C4A32"; // Café profundo
// const TEXT_DARK = "#6C4A32"; // Café cuero

// 🎯 BOTONES

const BUTTON_PRIMARY = "#B8672F"; // Terracota
// const BUTTON_HOVER = "#9F582C";

// 🌿 BOTÁNICOS

const BOTANICAL = "#6E7552"; // Verde olivo
const BOTANICAL_LIGHT = "#9AA187"; // Verde salvia

// ✨ DETALLES

const GOLD = "#B79255"; // Dorado envejecido
const BORDER = "#D8C9B5"; // Bordes suaves

// ✨ TÍTULOS

const TITLE_COLOR = "#6C4A32";

const MAIN_TYPO = "alex-brush-regular";
const SECONDARY_TYPO = "dm-serif-display-regular";
const BODY_TYPO = "manrope-400";

const COUNTDOWN_DATE = new Date(2026, 9, 15);
const RSVP_DATE_LINE = new Date(2026, 8, 20);

const eventCards: EventCardProps[] = [
  {
    eventName: "Ceremonia",
    date: new Date(2025, 10, 6, 16, 30, 0),
    locationName: "Nuestra Señora de la Candelaria",
    address: "Calle Ignacio Zaragoza 19, Col. Villa de Seris, Hermosillo, Son.",
    size: 12,
    color: TEXT_PRIMARY,
    mainTypo: SECONDARY_TYPO,
    bodyTypo: BODY_TYPO,
    href: "https://maps.app.goo.gl/rAhyH3Xrk8dkh9gu9",
    colorButton: BUTTON_PRIMARY,
    colorIcon: BUTTON_PRIMARY,
    fontSize: "2rem",
    bgColor: "white",
    borderSquare: true,
    icon: imgIglesia,
  },
  {
    bgColor: "white",
    eventName: "Recepción",
    date: new Date(2026, 10, 6, 19, 0, 0),
    locationName: "Hacienda Jesusita",
    address: "Av. San Antonio 109, Col. Palo Verde, Hermosillo, Son.",
    size: 12,
    color: TEXT_PRIMARY,
    mainTypo: SECONDARY_TYPO,
    bodyTypo: BODY_TYPO,
    href: "https://maps.app.goo.gl/KETwTtphm37dDZ1D7",
    colorButton: BUTTON_PRIMARY,
    colorIcon: TEXT_PRIMARY,
    fontSize: "2rem",
    borderSquare: true,
    icon: imgRecepcion,
  },
];
const godParents = [
  {
    title: "Velacion",
    names: ["Nidia Ozuna y Antonio Peraza"],
  },
  {
    names: ["Rosa Robles y Noe Rios"],
  },
];
const URL_SONG = `${URL_REPO}canciones/cancion.mp3`;
const giftListData: GiftListProps = {
  title: "Luvia de Sobres",

  mainTypo: MAIN_TYPO,
  bodyTypo: BODY_TYPO,
  textColor: TEXT_PRIMARY,
  bgColor: BG_SECTION,
  showEnvelope: true,
  envelopeMainTypo: SECONDARY_TYPO,
  envelopeFontSize: "1.5rem",
  envelopePhrase:
    "En la recepción habrá un espacio asignado para sus buenos deseos",
  secondPhrase:
    "Para quienes prefieran la comodidad digital, les compartimos nuestros datos:",
  envelopeTitleColor: TEXT_PRIMARY,
  bankIconStart: iconoSobre,
  bankDetails: [
    {
      numbers: [
        {
          numberType: "N. Tarjeta",
          number: "4152 3144 7707 7930",
        },
      ],
      bank: "BBVA",
      name: "Ana Cecilia V",
      textColor: TEXT_PRIMARY,
      bodyTypo: BODY_TYPO,
      bgColor: "white",
      outlineColor: true,
      mainTypo: MAIN_TYPO,
    },
    {
      numbers: [
        {
          numberType: "CLABE",
          number: "638180000152044125",
        },
      ],
      bank: "Nu México",
      name: "Ana Cecilia V",
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

  colorPrimary: BUTTON_PRIMARY, // Hora

  colorTitle: TITLE_COLOR,

  colorBody: TEXT_PRIMARY,

  fontSize: "2.5rem",

  bgColor: BG_ACCENT,
  events: [
    {
      eventName: "Ceremonia Religiosa",
      date: new Date(2025, 10, 16, 16, 30, 0),
      icon: icono1,
      iconSize: "100px",
    },
    {
      eventName: "Ceremonia Civil",
      date: new Date(2025, 10, 16, 19, 0, 0),
      icon: icono2,
      iconSize: "100px",
    },
    {
      eventName: "Cóctel ",
      date: new Date(2025, 10, 16, 19, 30, 0),
      icon: icono3,
      iconSize: "100px",
    },
    {
      eventName: "Recepción",
      date: new Date(2025, 10, 16, 20, 0, 0),
      icon: icono4,
      iconSize: "100px",
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
    fontFamily: "Manrope",
    borderColor: "rgba(122,95,79,.55)",
    color: TEXT_PRIMARY,
  },
};

const miniGallery = [imgMng1, imgMng2, imgMng3, imgMng4, imgMng5];

const introSealPosition = {
  top: "65%",
  left: "50%",
  width: "55px",
  height: "55px",
  transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
  bottom: "5px",
  right: "-15px",
  width: "110px",
  height: "100px",
  opacity: ".9",
  // transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
  top: "5px",
  left: "10px",
  width: "70px",
  height: "90px",
  opacity: ".9",
  transform: "rotate(20deg)",
};

const WeddingAnaCeciliaJuanCarlos = () => {
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
  const { showSnackbar } = useSnackbar();

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
    document.title = "Boda Ana Cecila & Juan Carlos";
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
      <MusicFabPlayer
        ref={musicRef}
        src={URL_SONG}
        backgroundColor={TEXT_PRIMARY}
      />

      <InvitationIntro
        open={showIntro}
        onEnter={handleEnter}
        musicRef={musicRef}
        title="Una celebración está por comenzar"
        brideName="Ana Cecila"
        groomName="Juan Carlos"
        ampersonSymbol="&"
        fontSizeNames="2rem"
        namesTypo={MAIN_TYPO}
        ampersonTypo={MAIN_TYPO}
        guestTypo={BODY_TYPO}
        bodyTypo={BODY_TYPO}
        backgroundColor={BG_MAIN}
        primaryColor={TEXT_PRIMARY}
        envelopeImg={sobreIntro}
        sealImg={sello}
        sealPosition={introSealPosition}
        bottomRightCornerImg={deco3}
        topLeftCornerImg={deco2}
        bottomRightCornerPosition={introBottomRightCornerPosition}
        topLeftCornerPosition={introTopLeftCornerPosition}
        guestName={guest ? guest.fullName : ""}
        guestCount={invitedGuests}
      />

      {/* INVITACIÓN */}
      <Box
        sx={{
          opacity: showInvitation ? 1 : 0,

          filter: showInvitation ? "blur(0px)" : "blur(20px)",

          transform: showInvitation ? "scale(1)" : "scale(1.03)",

          transition: "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <CoverInline
          ourWeddingStart={true}
          weddingDate="15.Octubre.2026"
          bgImage={imgPortada}
          brideName="Ana Cecila"
          symbolr={"&"}
          groomName={"Juan Carlos"}
          className={MAIN_TYPO}
          bgSize="cover"
          overlay={true}
          fontSize="2.5rem"
          verticalPosition="top"
          ampersonClassName={MAIN_TYPO}
          bgPositionY="40%"
        ></CoverInline>

        {/* FRASE */}

        <Fade triggerOnce>
          <Grid container spacing={2} p={2}>
            <Grid
              size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              px={3}
              mt={2}
            >
              <Typography
                className={`${SECONDARY_TYPO} italic`}
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    md: "2rem",
                  },
                  lineHeight: 1.6,
                  color: TITLE_COLOR,
                }}
              >
                Seremos nuestro 4-9-10 porque “Dos siempre valen más que uno,
                porque juntos logran más.<br></br> Y si uno cae, el otro está
                ahí para levantarlo”.<br></br>
                Eclesiastés 4:9-10
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                src={`${adorno}`}
                sx={{
                  width: 200,
                  mb: 2,
                }}
              />
            </Grid>
          </Grid>
        </Fade>
        <ImageMiddle
          bgPosition="center"
          height="70vh"
          bgImage={imgCp1}
          bgPositionY="30%"
        ></ImageMiddle>
        {/* INVITACIÓN */}

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: 760,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: -30,
              zIndex: 0,
              opacity: 0.95,
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={deco2}
                style={{
                  height: 140,
                  transform: "scale(-1) rotate(220deg)",
                }}
              />
            </Fade>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: -5,
              right: { xs: -20, sm: -40, md: -20 },
              zIndex: 0,
              opacity: 0.95,
            }}
          >
            <Fade direction="left" triggerOnce>
              <img
                src={deco3}
                style={{
                  height: 150,
                  transform: "rotate(-40deg)",
                }}
              />
            </Fade>
          </Box>

          <Grid container spacing={2} px={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{
                    borderColor: BOTANICAL,
                    borderStyle: "solid",
                    borderWidth: "1.5px",
                    opacity: 0.8,
                  }}
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
                          Con la bendición de Dios y el amor de nuestros padres,<br></br>
                        tenemos la dicha de compartir con ustedes este momento tan especial.
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                      <Fade direction="up">
                        <Typography
                          sx={{ color: TEXT_PRIMARY, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Ana Peraza y César Villalpando
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
                        component="img"
                        src={`${adorno}`}
                        sx={{
                          width: 180,
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                      <Fade direction="up">
                        <Typography
                          sx={{ color: TEXT_PRIMARY, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          {" "}
                          Yanet Robles y Carlos Bustamante
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

                          maxWidth: 300,
                          // whiteSpace:"nowrap"
                        }}
                      >
                        Les invitamos a celebrar el inicio de nuestra vida juntos.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <CountDown
          eventDate={COUNTDOWN_DATE}
          bgImage={imgContador}
          typoHeader={MAIN_TYPO}
          typoCountdown={SECONDARY_TYPO}
          fontSize="2.5rem"
          marginTop="10px"
          padding="1em"
          alignItems="start"
        ></CountDown>
        <Box
          sx={{
            background: BG_MAIN,
            py: { xs: 8, md: 12 },
            px: 3,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: 10,
              zIndex: 0,
              opacity: 0.9,
              transform: "rotate(70deg)",
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={deco1}
                style={{
                  height: 180,
                  transform: " rotate(-10deg)",
                }}
              />
            </Fade>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80%",
              right: -20,
              zIndex: 0,
              opacity: 0.8,
              transform: "rotate(-70deg)",
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={deco4}
                style={{
                  height: 70,
                  transform: " rotate(-10deg)",
                }}
              />
            </Fade>
          </Box>
          {/* Título */}
          <Fade direction="up" triggerOnce={true}>
            <Typography
              className={SECONDARY_TYPO}
              textAlign="center"
              sx={{
                color: TEXT_PRIMARY,
                fontSize: { xs: 34, md: 42 },
                letterSpacing: ".22em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Padrinos
            </Typography>

            <Typography
              className={BODY_TYPO}
              textAlign="center"
              sx={{
                // color: TEXT_PRIMARY,
                fontWeight: 300,
                fontSize: 14,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Con mucho cariño agradecemos a quienes nos acompañan como padrinos
              en este momento tan especial.
            </Typography>
          </Fade>
          <Grid container spacing={1} pt={4}>
            {godParents.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box textAlign="center">
                  <Fade direction="up" triggerOnce={true}>
                    <Typography
                      translate="no"
                      className={SECONDARY_TYPO}
                      sx={{
                        color: BUTTON_PRIMARY,
                        textTransform: "uppercase",
                        letterSpacing: ".20em",
                        fontSize: 18,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {item.names.map((n, i) => (
                      <Typography
                        key={i}
                        className={MAIN_TYPO}
                        sx={{
                          mt: 1,

                          color: TITLE_COLOR,
                          fontSize: "2rem",
                          fontWeight: 300,
                          lineHeight: 1.8,
                        }}
                      >
                        {n}
                      </Typography>
                    ))}

                    <Box
                      component="img"
                      src={`${adorno}`}
                      sx={{
                        width: 180,
                        mb: 2,
                      }}
                    />
                  </Fade>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <div
          style={{
            backgroundColor: BG_ACCENT,
            padding: "50px 20px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: BG_ACCENT,
              paddingTop: 4,
              px: 3,
              paddingBottom: 1,
            }}
          >
            <Grid></Grid>
            {eventCards.map((e, i) => (
              <Grid key={i} py={2}>
                <Card
                  elevation={0}
                  sx={{
                    maxWidth: 380,
                    mx: "auto",
                    borderRadius: "24px",
                    border: `1px solid ${BORDER}`,
                    backgroundColor: BG_MAIN,
                    overflow: "visible",
                    boxShadow: "0 10px 35px rgba(63,44,35,.08)",
                    pt: 3,
                    pb: 3,
                    px: 3,
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {/* Ilustración */}

                  <Box
                    component="img"
                    src={e.icon}
                    alt="Iglesia"
                    sx={{
                      width: "75%",
                      maxWidth: 210,
                      display: "block",
                      mx: "auto",

                      mb: 2,
                    }}
                  />

                  {/* Título */}

                  <Typography
                    sx={{
                      fontFamily: "DM Serif Display",
                      color: TITLE_COLOR,
                      fontSize: 28,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    {e.eventName}
                  </Typography>

                  {/* Lugar */}

                  <Typography
                    sx={{
                      mt: 2,
                      color: TEXT_PRIMARY,
                      fontSize: 17,
                      fontWeight: 500,
                    }}
                  >
                    {e.locationName}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      //   color: TEXT_PRIMARY,
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {e.address}
                  </Typography>

                  {/* Hora */}

                  <Typography
                    sx={{
                      mt: 1,
                      color: BUTTON_PRIMARY,
                      fontFamily: "DM Serif Display",
                      fontSize: 28,
                    }}
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                  >
                    <AccessTimeRounded sx={{ mr: 1, mt: 0.5 }} />
                    {dayjs(e.date).format("hh:mm")}
                  </Typography>

                  {/* Separador */}

                  <Box
                    component="img"
                    src={`${adorno}`}
                    sx={{
                      width: 180,
                      mb: 2,
                    }}
                  />

                  {/* Botón */}

                  <Button
                    href={e.href}
                    variant="outlined"
                    startIcon={<LocationOnOutlined />}
                    sx={{
                      borderRadius: "30px",
                      px: 4,
                      py: 1,
                      textTransform: "none",
                      color: BUTTON_PRIMARY,
                      borderColor: BUTTON_PRIMARY,
                      fontWeight: 600,

                      "&:hover": {
                        backgroundColor: BUTTON_PRIMARY,
                        color: "#fff",
                        borderColor: BUTTON_PRIMARY,
                      },
                    }}
                  >
                    Ver ubicación
                  </Button>
                </Card>
              </Grid>
            ))}
          </Box>
          {/* SEPARADOR */}
          <Fade triggerOnce direction="up">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              // py={2}
            >
              <Box
                component="img"
                src={`${adorno}`}
                sx={{
                  width: 200,
                }}
              />
            </Box>
          </Fade>
          <Fade triggerOnce direction="up">
            {/* CALENDARIO */}
            <Box>
              <Typography
                textAlign={"center"}
                className={`${SECONDARY_TYPO}`}
                sx={{
                  color: BUTTON_PRIMARY,
                  fontSize: "1.2rem",
                  letterSpacing: ".04em",
                  mt: 2,
                  mb: 1,
                  fontStyle: "italic",
                }}
              >
                No queremos que te pierdas este día.
              </Typography>
              <Box display={"flex"} justifyContent={"center"} mt={2}>
                <CalendarButton
                  title="Boda de Ana Cecilia & Juan Carlos"
                  startDate="20261015T220000"
                  endDate="20261016T020000"
                  location="Hacienda Jesusita"
                  // fileName="boda-valentina-sebastian"
                  buttonProps={calendarButtonProps}
                />
              </Box>
            </Box>
          </Fade>
        </div>
        <ImageMiddle
          bgPosition="center"
          height="70vh"
          bgImage={imgCp2}
          bgPositionY="30%"
        ></ImageMiddle>
        <div
          style={{
            backgroundColor: BG_ACCENT,
            padding: "50px 20px",
            position: "relative",
          }}
        >
          <Grid
            container
            spacing={2}
            display={"flex"}
            alignItems={"center"}
            padding={4}
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Fade direction="up" triggerOnce={true}>
                <Typography
                  variant="h4"
                  style={{
                    fontSize: timelineData.fontSize
                      ? timelineData.fontSize
                      : "2rem",
                  }}
                  color={timelineData.colorTitle}
                  textAlign={"center"}
                  className={`${timelineData.mainTypo}`}
                >
                  {t("timeline.title")}
                </Typography>
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Fade direction="up" triggerOnce={true}>
                <Typography
                  color={timelineData.colorBody}
                  textAlign={"center"}
                  className={`${timelineData?.bodyTypo}`}
                >
                  Acompáñanos en cada instante de esta celebración.
                </Typography>
              </Fade>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Timeline
                sx={{
                  p: 0,
                  m: 0,
                  "& .MuiTimelineItem-root:before": {
                    display: "none",
                  },
                }}
              >
                {timelineData.events?.map((item, index) => (
                  <TimelineItem
                    sx={{
                      minHeight: 200,

                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    {/* Quitamos el espacio del lado izquierdo */}
                    <TimelineOppositeContent
                      sx={{
                        flex: 0,
                        p: 0,
                        m: 0,
                      }}
                    />

                    {/* Icono + Línea */}
                    <TimelineSeparator
                      sx={{
                        minWidth: "120px",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.eventName}
                        sx={{
                          width: item.iconSize,
                          display: "block",
                          mb: 1,
                        }}
                      />

                      {index !== timelineData.events!.length - 1 && (
                        <TimelineConnector
                          sx={{
                            bgcolor: GOLD,
                            width: "2px",
                            borderRadius: "10px",
                            minHeight: 70,
                            opacity: 0.7,
                          }}
                        />
                      )}
                    </TimelineSeparator>

                    {/* Contenido */}
                    <TimelineContent
                      sx={{
                        textAlign: "center",
                        pl: 2,
                        pb: 6,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: MAIN_TYPO,
                          fontSize: "38px",
                          color: BUTTON_PRIMARY,
                          lineHeight: 1,
                        }}
                      >
                        {dayjs(item.date).format("hh:mm A")}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontFamily: BODY_TYPO,
                          fontSize: "24px",
                          fontWeight: 600,
                          color: TITLE_COLOR,
                        }}
                      >
                        {item.eventName}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              left: -100,
              zIndex: 1,
              opacity: 0.95,
              transform: "rotate(80deg)",
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={deco2}
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
              bottom: "-5%",
              right: -25,
              zIndex: 1,
              opacity: 0.95,
              transform: "rotate(-10deg)",
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={deco3}
                style={{
                  height: 180,
                  transform: "rotate(-30deg)",
                }}
              />
            </Fade>
          </Box>
        </div>
        <ImageMiddle
          bgImage={imgCp3}
          height="80vh"
          bgPositionY="40%"
        ></ImageMiddle>
        <Box
          sx={{
            background: BG_MAIN,
            paddingTop: 6,
            paddingX: 2,
            position: "relative",
          }}
        >
          <Fade triggerOnce={true} direction="right">
           
          </Fade>
          {/* ---------- TITULO ---------- */}

          <Grid container spacing={4} justifyContent="center" p={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,.05)",
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
                        color: TITLE_COLOR,
                      }}
                    >
                      Código de Vestimenta
                    </Typography>
                    <Fade triggerOnce={true} direction="up">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        py={2}
                      >
                        <Box
                          component="img"
                          src={`${adorno}`}
                          sx={{
                            width: 200,
                            m: 1,
                          }}
                        />
                      </Box>
                    </Fade>
                  </Fade>
                </Grid>
                <Fade triggerOnce={true} direction="up">
                  <Box
                    component="img"
                    src={imgDresscode}
                    sx={{
                      height: { xs: "40vh", sm: "30vh", md: "50vh" },
                      maxHeight: 300,
                      mt: 3,
                      mb: 4,
                    }}
                  />
                </Fade>
                <Typography
                  className={BODY_TYPO}
                  textAlign="center"
                  sx={{
                    textTransform: "uppercase",
                    // letterSpacing: ".35em",
                    color: BUTTON_PRIMARY,
                    fontSize: "1.5rem",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Western
                </Typography>
                <Typography
                  className={BODY_TYPO}
                  textAlign="center"
                  sx={{
                    textTransform: "uppercase",
                    // letterSpacing: ".35em",
                    color: BUTTON_PRIMARY,
                    fontSize: "1.5rem",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Vaquero Elegante
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}></Grid>
          </Grid>
        </Box>
        
        <Box bgcolor={BG_ACCENT} px={3} py={2}>
          <Grid container spacing={2} padding={1} paddingBottom={0}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                <Paper
                  elevation={0}
                  sx={{
                    maxWidth: 380,
                    mx: "auto",
                    borderRadius: "24px",
                    border: `1px solid ${BORDER}`,
                    backgroundColor: BG_MAIN,
                    overflow: "visible",
                    boxShadow: "0 10px 35px rgba(63,44,35,.08)",
                    pt: 3,
                    pb: 3,
                    px: 3,
                    textAlign: "center",
                    position: "relative",
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

                        fontSize: "2.5rem",
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
                        fontSize: "1rem",
                        color: giftListData.textColor,
                        textAlign: "center",
                        lineHeight: 1.9,
                        mb: 5,
                        mt: 5,
                      }}
                    >
                      Para quienes deseen obsequiarnos un presente, contaremos
                      con un buzón de sobres el día del evento <br></br>O bien,
                      puedes hacer una transferencia a nuestra cuenta bancaria
                    </Typography>

                    {/* Tarjeta bancaria */}

                    {giftListData.bankDetails?.map((bank, index) => (
                      <Paper
                        key={index}
                        elevation={0}
                        sx={{
                          bgcolor: bank.bgColor,
                          border: `1px solid ${BORDER}`,
                          borderRadius: "12px",
                          p: { xs: 2.5, sm: 4 },
                          width: "100%",
                          maxWidth: "100%",
                          boxSizing: "border-box",
                          // border: "1.5px solid rgba(190,170,130,.45)",
                          boxShadow: "0 10px 25px rgba(0,0,0,.05)",
                          mt: 2,
                        }}
                      >
                        <Stack
                          spacing={2}
                          alignItems="center"
                          sx={{ width: "100%", minWidth: 0 }}
                        >
                          <Typography
                            className={BODY_TYPO}
                            sx={{
                              letterSpacing: ".18em",
                              fontSize: "1.5rem",
                              color: BUTTON_PRIMARY,
                            }}
                          >
                            {bank.bank}
                          </Typography>
                          <Typography
                            className={BODY_TYPO}
                            sx={{
                              letterSpacing: ".18em",
                              fontSize: "1rem",
                              color: TEXT_PRIMARY,
                            }}
                          >
                            {bank.numbers[0].numberType}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 0.25,
                              width: "100%",
                              maxWidth: "100%",
                              minWidth: 0,
                            }}
                          >
                            <Typography
                              className={BODY_TYPO}
                              sx={{
                                fontSize: {
                                  xs: "clamp(0.78rem, 3.5vw, 1.25rem)",
                                  sm: "1.65rem",
                                  md: "1.9rem",
                                },
                                letterSpacing: { xs: "0.01em", sm: "0.04em" },
                                whiteSpace: "nowrap",
                                color: TEXT_PRIMARY,
                                textAlign: "center",
                                lineHeight: 1.1,
                                minWidth: 0,
                              }}
                            >
                              {bank.numbers[0].number}
                            </Typography>
                            <IconButton
                              size="small"
                              aria-label="Copiar número de tarjeta"
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  bank.numbers[0].number.trim(),
                                );
                                showSnackbar("Número copiado", "success");
                              }}
                              sx={{ flexShrink: 0, p: { xs: 0.35, sm: 0.75 } }}
                            >
                              <ContentCopyIcon
                                sx={{
                                  color: TEXT_PRIMARY,
                                  fontSize: { xs: "1rem", sm: "1.35rem" },
                                }}
                              />
                            </IconButton>
                          </Box>

                          <Typography
                            className={BODY_TYPO}
                            sx={{
                              fontSize: "1rem",
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
        <ImageMiddle
          bgPosition="center"
          height="70vh"
          bgImage={imgConf}
          bgPositionY="35%"
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
                xs: "90vw",
                sm: "90vw",
                md: "400px",
                l: "400px",
              },
              background: BUTTON_PRIMARY,
              borderRadius: "180px 180px 0 0",
              px: 4,
              py: 6,
              textAlign: "center",
              boxShadow: `0px 18px 40px ${BOTANICAL_LIGHT}`,
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
                {guest ? guest.totalAssigned : invitedGuests}
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
                  mt: 2,
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
              hidePhoneNumberInput={true}
            ></RSVPForm>
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
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              p: 4,
              textAlign: "center",
              height: "100%",
              boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            }}
          >
            <Fade triggerOnce={true} direction="up">
              <Typography
                className={BODY_TYPO}
                sx={{
                  color: TEXT_PRIMARY,
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
                  fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                  },
                  letterSpacing: ".1em",
                  mb: 2,
                  mt: 3,
                  color: TITLE_COLOR,
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
                  bgcolor: BOTANICAL,
                  opacity: 0.45,
                }}
              />

              <Box
                sx={{
                  width: 8,
                  height: 8,
                  border: `1.5px solid ${BOTANICAL}`,
                  transform: "rotate(45deg)",
                }}
              />

              <Box
                sx={{
                  width: 55,
                  height: "1px",
                  bgcolor: BOTANICAL,
                  opacity: 0.45,
                }}
              />
            </Box>
            <Fade triggerOnce={true} direction="up">
              <Typography
                className={MAIN_TYPO}
                sx={{
                  fontSize: "2.5rem",
                  color: TITLE_COLOR,
                  // color: "#fff",
                }}
              >
                Gracias
              </Typography>
            </Fade>
          </Box>
        </Box>

        <div style={{ padding: "10px 10px" }}>
          <div style={{ height: 50 }}></div>
          <Gallery photos={miniGallery}></Gallery>
        </div>
        <FooterInvites bgColor={"white"} color={TEXT_PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default WeddingAnaCeciliaJuanCarlos;

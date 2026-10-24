import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import formal from "./../../assets/iconos/dresscode/formal.svg";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from "@mui/material/Grid2";
import FooterInvites from "../../components/Footer/FooterInvites";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar as faCalendarRegular } from "@fortawesome/free-regular-svg-icons";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { Fade } from "react-awesome-reveal";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import dayjs from "dayjs";
import CustomizedTimeline, {
  CustomizedTimelineProps,
} from "../../components/TimeLine/Timeline";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";

const INVITATION_ID = 51;
const MEDIA_KEY = "boda-vianey-y-alberto";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";
const BG_MAIN = "#FCFBF8";
// const BG_SECTION = "#F2F1EC";
const BG_ACCENT = "#A6A998";
const BG_CARD = "#f2f1e9";
// Textos
const TEXT_PRIMARY = "#6F6F6F";
const TEXT_DARK = "#555555";

// Botones
const BUTTON_PRIMARY = "#A6A998";

// Detalles
const CHAMPAGNE = "#CFC8BA";

// Títulos
const TITLE_COLOR = "#777777";
const MAIN_TYPO = "alex-brush-regular";
const SECONDARY_TYPO = "dm-serif-display-regular-italic";
const BODY_TYPO = "pt-serif-caption-regular to-upper";
const URL_SONG = `${URL_REPO}canciones/AThousandYears-ChristinaPerri.mp3`;
const COUNTDOWN_DATE = new Date(2027, 1, 13);
const RSVP_DATE_LINE = new Date(2027, 0, 31);

const introSealPosition = {
  top: "60%",
  left: "50%",
  width: "75px",
  height: "75px",
  transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
  bottom: "-15px",
  right: "10px",
  width: "110px",
  height: "110px",
  transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
  top: "-10px",
  left: "15px",
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

const godparents = [
  {
    names: ["María Jesús Gámez Ramírez y Filiberto Gámez Domínguez"],
  },
  {
    names: ["Claudia Mendivil Félix y Rodolfo Gamez Félix"],
  },
];

const WeddingVianneyAlberto = () => {
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

  const eventCards: EventCardProps[] = [
    {
      eventName: "Ceremonia Religiosa",
      date: new Date(2027, 1, 13, 19, 0, 0),
      locationName: "Parroquia nuestra Señora del Carmen",
      address: "Calle Jesús García 17, Col del Razo, Hermosillo, Son.",
      size: 12,
      color: TEXT_PRIMARY,
      mainTypo: MAIN_TYPO,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/e7LWxcETpMncdFzz5",
      colorButton: BUTTON_PRIMARY,
      colorIcon: BUTTON_PRIMARY,
      fontSize: "4rem",
      bgColor: BG_CARD,
      borderSquare: true,
      image: assetUrl("church"),
    },
    {
      eventName: "Recepción",
      date: new Date(2027, 1, 13, 21, 0, 0),
      locationName: "Hacienda Jesusita",
      address: "Av. San Antonio 109, Seccion 562, Palo Verde, Hermosillo, Son.",
      size: 12,
      color: TEXT_PRIMARY,
      mainTypo: MAIN_TYPO,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/KETwTtphm37dDZ1D7",
      colorButton: BUTTON_PRIMARY,
      colorIcon: BUTTON_PRIMARY,
      fontSize: "4rem",
      bgColor: BG_CARD,
      borderSquare: true,
      image: assetUrl("reception"),
    },
  ];

  const giftListData: GiftListProps = {
    title: "Mesa de regalos",
    mainPhrase:
      "Lo más valioso para nosotros es contar con tu compañía. Si deseas consentirnos con un regalo, aquí encontrarás algunas opciones.",
    items: [
      {
        number: "60024483",
        link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60024483",
        icon: assetUrl("icon", 1),
      },
    ],
    fontSize: "3rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    bgColor: BG_MAIN,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase:
      "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase:
      "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: assetUrl("icon", 8),
    iconSize:"70PX",
    bankDetails: [
      {
        numbers: [
          {
            numberType: "Tarjeta",
            number: "4152314557382366 ",
          },
        ],
        bank: "BBVA Bancomer",
        name: "Alberto Mendivil",
        color: TEXT_PRIMARY,
        bodyTypo: BODY_TYPO,
        bgColor: "white",
        outlineColor: true,
      },
    ],
  };

  const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: BG_MAIN,
    colorTitle: BG_MAIN,
    colorBody: BG_MAIN,
    fontSize: "50px",
    bgColor: BG_ACCENT,
    events: [
      {
        eventName: "Ceremonia Religiosa",
        date: new Date(2026, 9, 9, 19, 0, 0),
        icon: assetUrl("icon", 0),
      },
      {
        eventName: "Recepcion",
        date: new Date(2026, 9, 9, 21, 0, 0),
        icon: assetUrl("icon", 3),
      },
      {
        eventName: "Vals",
        date: new Date(2026, 9, 9, 21, 30, 0),
        icon: assetUrl("icon", 5),
      },
      {
        eventName: "Cena",
        date: new Date(2026, 9, 9, 22, 0, 0),
        icon: assetUrl("icon", 4),
      },
      
      {
        eventName: "Liga y Ramo",
        date: new Date(2026, 9, 9, 23, 0, 0),
        icon: assetUrl("icon", 9),
      },
      {
        eventName: "Tanda",
        date: new Date(2026, 9, 9, 23, 30, 0),
        icon: assetUrl("icon", 6),
      },
    ],
  };

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
    document.title = "Boda Vianney & Alberto";
  }, []);

  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: "auto",
      }}
    >
      <MusicFabPlayer
        ref={musicRef}
        src={URL_SONG}
        backgroundColor={BUTTON_PRIMARY}
      />

      {/* INTRO */}
      <InvitationIntro
        open={showIntro}
        onEnter={handleEnter}
        musicRef={musicRef}
        title="Una celebración está por comenzar"
        brideName="Vianney Idalia"
        groomName="Alberto "
        ampersonSymbol="&"
        namesTypo={MAIN_TYPO}
        ampersonTypo={MAIN_TYPO}
        guestTypo={BODY_TYPO}
        bodyTypo={BODY_TYPO}
        backgroundColor={BG_MAIN}
        primaryColor={TEXT_PRIMARY}
        envelopeImg={assetUrl("envelope")}
        sealImg={assetUrl("seal")}
        sealPosition={introSealPosition}
        // bottomRightCornerImg={assetUrl("ornament")}
        // topLeftCornerImg={assetUrl("ornament")}
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
          weddingDate="13 de Febrero, 2027"
          bgImage={assetUrl("cover")}
          brideName="Vianney Idalia"
          symbolr={"&"}
          groomName={"Alberto "}
          className={MAIN_TYPO}
          bgSize="cover"
          overlay={true}
          fontSize="2.5rem"
          verticalPosition="bottom"
          ampersonClassName={MAIN_TYPO}
          bodyTypoClassName={BODY_TYPO}
        ></CoverInline>
        <div
          style={{
            backgroundColor: BG_CARD,
            backgroundPosition: "bottom",
            padding: "50px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            padding={2}
            sx={{
              height: "25vh",
              width: "80vw",
              // backgroundImage: `url("${assetUrl("background", 1)}")`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              boxShadow: `8px 8px 8px ${CHAMPAGNE}`,
              position: "relative",
            }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid
              container
              spacing={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={1}
            >
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                display={"flex"}
                justifyContent={"center"}
              >
                <Fade direction="up" triggerOnce={true}>
                  <Typography
                    className={BODY_TYPO}
                    textAlign={"center"}
                    sx={{ fontSize: "1rem", fontStyle: "italic!important" }}
                  >
                    "Eres la respuesta a todo lo que alguna vez le pedí a la
                    vida"
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </div>
         <ImageMiddle bgPosition="30%" height="70vh" bgImage={assetUrl("middle-image")} bgPositionY="30%"></ImageMiddle> 
      
        <div
          style={{
            // backgroundImage: `url("${assetUrl("background", 0)}")`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            padding: "50px 20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Grid container spacing={2} padding={2} justifyContent={"center"}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography textAlign={"center"} className={`${BODY_TYPO}`}>
                      Deseamos compartir con ustedes la alegría de nuestra unión{" "}
                      <br></br>COn la bendición de Dios y el apoyo incondicional
                      de nuestros padres
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                  <Fade direction="up">
                    <Typography
                      sx={{ color: TITLE_COLOR, fontSize: "1.5rem" }}
                      variant="h4"
                      textAlign={"center"}
                      className={SECONDARY_TYPO}
                    >
                      Idalia Gamez Ramirez{" "}
                    </Typography>
                    <Typography
                      sx={{ color: TITLE_COLOR, fontSize: "1.5rem" }}
                      variant="h4"
                      textAlign={"center"}
                      className={SECONDARY_TYPO}
                    >
                      Leopoldo Rosas Mendivil{" "}
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                  <Fade direction="up">
                    <Grid
                      size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Divider
                        sx={{
                          width: 90,
                          mx: "auto",
                          my: 3,
                          borderColor: TEXT_DARK,
                          borderBottomWidth: 2,
                        }}
                      />
                    </Grid>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                  <Fade direction="up">
                    <Typography
                      sx={{ color: TITLE_COLOR, fontSize: "1.5rem" }}
                      variant="h4"
                      textAlign={"center"}
                      className={SECONDARY_TYPO}
                    >
                      Maria Argelia Félix Gaxiola
                    </Typography>
                    <Typography
                      sx={{ color: TITLE_COLOR, fontSize: "1.5rem" }}
                      variant="h4"
                      textAlign={"center"}
                      className={SECONDARY_TYPO}
                    >
                      Humberto Mendivil Félix{" "}
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography textAlign={"center"} className={`${BODY_TYPO}`}>
                      Queremos invitarles a celebrar con nosotros este momento
                      tan especial
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <CountDown
          eventDate={COUNTDOWN_DATE}
          bgImage={assetUrl("background", 0)}
          typoHeader={SECONDARY_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
          marginTop="50px"
          padding="1em"
          alignItems="end"
        ></CountDown>

        <Box
          sx={{
            backgroundColor: BG_ACCENT,
            py: { xs: 8, md: 10 },
            px: 3,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              className={MAIN_TYPO}
              sx={{
                fontSize: { xs: 52, md: 64 },
                color: BG_MAIN,
                textAlign: "center",
                lineHeight: 1,
              }}
            >
              Padrinos
            </Typography>

            <Stack spacing={5} alignItems="center">
              {godparents.map((item, index) => (
                <>
                  <Divider
                    sx={{
                      width: 70,
                      mx: "auto",
                      my: 3,
                      borderColor: BG_MAIN,
                      borderBottomWidth: 2,
                    }}
                  />
                  <Typography
                    key={index}
                    className={BODY_TYPO}
                    sx={{
                      color: "#020202",

                      textAlign: "center",
                      fontWeight: 400,
                      letterSpacing: 0.3,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.names}
                  </Typography>
                </>
              ))}
            </Stack>
          </Container>
        </Box>

        <div style={{ backgroundColor: "white" }}>
          <Grid container spacing={2} padding={4}>
            {eventCards.map((item, index) => (
                 <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} justifyContent={"center"} display={"flex"}>
              <Card
                key={index}
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: 420,
                  overflow: "hidden",
                  borderRadius: "22px",
                  backgroundColor: BG_CARD,
                  border: "1px solid rgba(80, 80, 70, 0.08)",
                  boxShadow: "0 8px 30px rgba(40, 40, 30, 0.08)",
                }}
              >
                {/* IMAGEN */}
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1.25 / 1",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.eventName}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                {/* CONTENIDO */}
                <Box
                  sx={{
                    px: { xs: 3, sm: 4 },
                    pt: 3.5,
                    pb: 3.5,
                    textAlign: "center",
                  }}
                >
                  {/* TÍTULO */}
                  <Typography
                    className={MAIN_TYPO}
                    sx={{
                      fontSize: {
                        xs: "2.1rem",
                        sm: "2.4rem",
                      },
                      lineHeight: 0.95,
                      color: "#777773",
                      mb: 2.5,
                    }}
                  >
                    {item.eventName}
                  </Typography>

                  {/* FECHA */}
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1.2 }}
                  >
                    <FontAwesomeIcon
                      fontSize={"20px"}
                      color={item.color}
                      icon={faCalendarRegular}
                    />

                    <Typography
                      className={BODY_TYPO}
                      sx={{
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "#686861",
                        textTransform: "uppercase",
                      }}
                    >
                      {dayjs(item.date).format("dddd DD MMMM YYYY")}
                    </Typography>
                  </Stack>

                  {/* DIVISOR */}
                  <Box
                    sx={{
                      width: 32,
                      height: 1,
                      backgroundColor: "#B7B8AC",
                      mx: "auto",
                      my: 2,
                    }}
                  />

                  {/* HORA */}
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.8}
                    sx={{ mb: 2.5 }}
                  >
                    <AccessTimeIcon
                      sx={{
                        fontSize: 15,
                        color: "#85857D",
                      }}
                    />

                    <Typography
                      className={BODY_TYPO}
                      sx={{
                        letterSpacing: "0.1em",
                        color: "#686861",
                      }}
                    >
                      {dayjs(item.date).format("hh:mm A")}
                    </Typography>
                  </Stack>

                  {/* IGLESIA */}
                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      lineHeight: 1.45,
                      color: "#383833",
                      textTransform: "uppercase",
                      maxWidth: 290,
                      mx: "auto",
                    }}
                  >
                    {item.locationName}
                  </Typography>

                  {/* DIRECCIÓN */}
                  <Typography
                    className={BODY_TYPO}
                    sx={{
                      mt: 1,

                      lineHeight: 1.45,
                      color: "#696961",
                      maxWidth: 300,
                      mx: "auto",
                    }}
                  >
                    {item.address}
                  </Typography>

                  {/* UBICACIÓN */}
                  {item.href && (
                    <Button
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      disableElevation
                      startIcon={
                        <LocationOnOutlinedIcon sx={{ fontSize: 15 }} />
                      }
                      sx={{
                        mt: 2.5,
                        px: 2.8,
                        py: 0.9,
                        borderRadius: "50px",
                        backgroundColor: "#A9ADA0",
                        color: "#FFFFFF",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "#999E93",
                        },
                      }}
                    >
                      Ver ubicación
                    </Button>
                  )}
                </Box>
              </Card>
              </Grid>
            ))}
          </Grid>
          <Box padding={4}>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: TITLE_COLOR,
                fontSize: "1.2rem",
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
                title="Boda de Vianney y Alberto"
                startDate="20270213T170000"
                endDate="20270214T020000"
                location="Parroquia nuestra Señora del Carmen/Hacienda Jesusita"
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>
        <CustomizedTimeline {...timelineData}></CustomizedTimeline>
        <ImageMiddle bgPosition="30%" height="70vh" bgImage={assetUrl("middle-image", 1)} bgPositionY="30%"></ImageMiddle>

        <div style={{ backgroundColor: BG_MAIN }}>
          <Grid container spacing={2} padding={2} paddingBottom={0}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                <GiftList {...giftListData}></GiftList>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Box
          sx={{
            backgroundColor: BG_ACCENT,
            position: "relative",
            maxWidth: "750px",
            mx: "auto",
            px: { xs: 2, md: 4 },
            py: 6,
          }}
        >
          {/* Flor superior izquierda */}

          {/* Flor inferior derecha */}

          {/* Tarjeta */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              p: { xs: 3, md: 5 },

              background: "rgba(255,255,255)",
              backdropFilter: "blur(6px)",
              border: `1px solid ${CHAMPAGNE}`,
              boxShadow: "0 15px 40px rgba(183,202,218,.18)",
            }}
          >
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
              fontSize="2.5rem"
            />
          </Box>
        </Box>
        <div
          style={{
            // backgroundImage: `url("${assetUrl("background", 0)}")`,
            // backgroundSize: "cover",
            // backgroundPosition: "right",
            padding: "50px 20px",
          }}
        >
          <Box
            padding={2}
            bgcolor={"rgb(250,250,250,.8)"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid container spacing={2} paddingBottom={0}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Box
                  sx={{
                    backgroundColor: BG_MAIN,
                    py: { xs: 2, md: 10 },
                    px: 1,
                  }}
                >
                  <Container maxWidth="sm">
                    <Typography
                      sx={{
                        fontFamily: "'Alex Brush', cursive",
                        fontSize: { xs: "2.5rem", md: 64 },
                        color: TITLE_COLOR,
                        textAlign: "center",
                        lineHeight: 1,
                      }}
                    >
                      Código de Vestimenta
                    </Typography>

                    <Divider
                      sx={{
                        width: 70,
                        mx: "auto",
                        my: 3,
                        borderColor: CHAMPAGNE,
                        borderBottomWidth: 2,
                      }}
                    />

                    <Paper
                      elevation={0}
                      sx={{
                        backgroundColor: BG_CARD,
                        borderRadius: 1,
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Stack spacing={4} alignItems="center">
                        <img
                          src={formal}
                          alt="Código de vestimenta"
                          style={{
                            width: 150,
                          }}
                        />

                        <Grid container spacing={4} width="100%">
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <Stack spacing={1} alignItems="center">
                              <Typography
                                sx={{
                                  fontWeight: 600,
                                  letterSpacing: 2,
                                  color: TEXT_DARK,
                                }}
                              >
                                MUJERES
                              </Typography>

                              <Typography
                                sx={{
                                  color: TEXT_PRIMARY,
                                  fontSize: 18,
                                }}
                              >
                                Formal
                              </Typography>

                              <Typography
                                sx={{
                                  color: TEXT_PRIMARY,
                                  fontSize: 14,
                                  textAlign: "center",
                                  fontStyle: "italic",
                                  lineHeight: 1.7,
                                }}
                              >
                                Agradecemos evitar el color blanco.
                              </Typography>
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, sm: 6 }}>
                            <Stack spacing={1} alignItems="center">
                              <Typography
                                sx={{
                                  fontWeight: 600,
                                  letterSpacing: 2,
                                  color: TEXT_DARK,
                                }}
                              >
                                HOMBRES
                              </Typography>

                              <Typography
                                sx={{
                                  color: TEXT_PRIMARY,
                                  fontSize: 18,
                                }}
                              >
                                Formal o Vaquero
                              </Typography>

                              
                            </Stack>
                          </Grid>
                        </Grid>
                      </Stack>
                    </Paper>
                  </Container>
                </Box>
              </Grid>
            
              
            </Grid>
          </Box>

          <div style={{ height: 100 }}></div>
          <Box
            component="section"
            sx={{
              mt:2,
              width: "100%",
              px: { xs: 2.5, sm: 4 },
              py: { xs: 7, sm: 9 },
              backgroundColor: BG_CARD,
              textAlign: "center",
            }}
          >
          <Typography
              className={SECONDARY_TYPO}
                sx={{
              
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                 
                  mb: 2,
                }}
              >
                Gracias por ser parte de este día
              </Typography>
          
            {/* FOTO */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 430,
                mx: "auto",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={assetUrl("gallery")}
                alt="Novios"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>
          
            {/* TEXTO */}
            <Box
              sx={{
                maxWidth: 430,
                mx: "auto",
                mt: { xs: 4, sm: 5 },
              }}
            >
              
              <Typography
          className={MAIN_TYPO}
                sx={{
                 
                  fontSize: { xs: "2rem", sm: "2.3rem" },
                  lineHeight: 1.15,
                  color:TEXT_DARK ,
                }}
              >
                Y así comienza nuestro
                <br />
                para siempre.
              </Typography>
          
              {/* Detalle */}
            
            </Box>
          </Box>
        </div>
        <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default WeddingVianneyAlberto;

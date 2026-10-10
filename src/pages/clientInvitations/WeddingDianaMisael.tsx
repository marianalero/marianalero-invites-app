import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";
import WithoutKids, {
  WithoutKidsProps,
} from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from "@mui/material/Grid2";
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Typography } from "@mui/material";

import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import MiniGallery from "../../components/MiniGallery/MiniGallery";
import { Fade } from "react-awesome-reveal";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";


import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import dayjs from "dayjs";
import { t } from "i18next";
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import Cover from "../../components/Cover/CoverImage/Cover";


const INVITATION_ID = 48;
const BG_MAIN = "#FFFFFF";
// const BG_SECTION = "#F5F9FB";

const PRIMARY = "#8CC4E3";
const PRIMARY_DARK = "#42677B";

// const TEXT_PRIMARY = "#42677B";
// const TEXT_SECONDARY = "#7A8E99";

// const ACCENT = "#8CC4E3";
const BORDER = "#C7DDE8";

const WHITE = "#FFFFFF";
const BLACK = "#1F2529";

const OVERLAY = "rgba(140, 196, 227, 0.45)";
const MAIN_TYPO = "pinyon-script-regular";
const SECONDARY_TYPO = "the-seasons";
const BODY_TYPO = "lora";
const MEDIA_KEY = "invitacion-diana-veronica-eliel-misael";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";
const URL_SONG = `${URL_REPO}canciones/EnVivoEnDirecto.mp3`;
const COUNTDOWN_DATE = new Date(2026, 10, 21);
const RSVP_DATE_LINE = new Date(2026, 10, 11);

const eventCards: EventCardProps[] = [
  {
    bgColor: "white",
    eventName: "Ceremonia y Recepción",
    date: new Date(2026, 11, 5, 17, 0, 0),
    locationName: "Agave Victoria Jardin de Eventos",
    address:
      "Profesora lucrecia Ruiz de Ayon, Hermosa 316, 83106 Hermosillo, Son.",
    size: 12,
    color: PRIMARY_DARK,
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    href: "https://www.google.com/maps/search/?api=1&query=Agave%20Victoria%20Jard%C3%ADn%20de%20Eventos%4029.1488264%2C-110.9596725",
    colorButton: PRIMARY,
    colorIcon: PRIMARY,
    fontSize: "2rem",
    borderSquare: true,
  },
];

const giftListBase: Omit<GiftListProps, "items"> = {
  title: " ",
  fontSize: "1.5rem",
  mainPhrase: "Si su deseo es hacernos algún obsequio, compartimos las opciones",

  mainTypo: MAIN_TYPO,
  bodyTypo: BODY_TYPO,
  color: PRIMARY_DARK,
  bgColor: "#FFFFFF",
  showEnvelope: true,
  envelopeMainTypo: MAIN_TYPO,
  envelopeFontSize: "1.8rem",
  envelopePhrase:
    "Tendremos un buzón de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
  secondPhrase:
    "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
  envelopeTitleColor: PRIMARY_DARK,
  bankDetails: [
    {
      numbers: [
        {
          numberType: "Tarjeta",
          number: "4152314000465362",
        },
      ],
      bank: "BBVA",
      name: "Diana Medina",
      color: PRIMARY,
      bodyTypo: BODY_TYPO,
      bgColor: "white",
      outlineColor: true,
    },
  ],
};

const dresscode: DressCodeProps = {
  mainTypo: MAIN_TYPO,
  bodyTypo: BODY_TYPO,
  color: PRIMARY,
  type: 2,
  title: "Formal",
  fontSize: "2rem",
  omitColorsLabel:"Por favor, evita los tonos blanco y rojo."
};

const withOutKids: WithoutKidsProps = {
  bodyTypo: BODY_TYPO,
  subtitle2: "no niños",
};

const qoute: QouteProps = {
  qoute:
    "Dos historias, un mismo camino y una promesa que vamos a cumplir para siempre",
  bodyTypo: BODY_TYPO,
  italic: true,
  fontsize: "1.5rem",
};

const timelineEvents = [
  {
    eventName: "Recepción",
    date: new Date(2025, 10, 16, 17, 0, 0),
    iconIndex: 0,
  },
  {
    eventName: "Ceremonia Religiosa",
    date: new Date(2025, 10, 16, 17, 30, 0),
    iconIndex: 1,
  },
  {
    eventName: "Sesión de fotografías",
    date: new Date(2025, 10, 16, 18, 30, 0),
    iconIndex: 2,
  },
  {
    eventName: "Vals",
    date: new Date(2025, 10, 16, 19, 30, 0),
    iconIndex: 3,
  },
  {
    eventName: "Cena",
    date: new Date(2025, 10, 16, 20, 0, 0),
    iconIndex: 4,
  },
  {
    eventName: "Baile",
    date: new Date(2025, 10, 16, 20, 30, 0),
    iconIndex: 5,
  },
  {
    eventName: "Fin del evento",
    date: new Date(2025, 10, 16, 23, 30, 0),
    iconIndex: 6,
  },
];

const introSealPosition = {
  top: "60%",
  left: "50%",
  width: "60px",
  height: "60px",
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
    borderColor: PRIMARY_DARK,
    color: PRIMARY_DARK,
  },
};

const WeddingDianaMisael = () => {
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
  const [cloudAssets, setCloudAssets] = useState<InvitationAsset[]>([]);
  const musicRef = useRef<MusicFabPlayerHandle>(null);

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

  const galleryImages = cloudAssets
    .filter((asset) => asset.assetKind === "mini-gallery")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((asset) => asset.secureUrl);

  const giftListData: GiftListProps = {
    ...giftListBase,
    
    bankIconStart: assetUrl("icon", 7),
  };

  const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: "white",
    colorTitle: "white",
    colorBody: "white",
    fontSize: "50px",
    bgColor: PRIMARY,
    events: timelineEvents.map((event) => ({
      eventName: event.eventName,
      date: event.date,
      icon: assetUrl("icon", event.iconIndex),
    })),
  };

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
    document.title = "Invitacion de Boda";
  }, []);

  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: "auto",
        color: BLACK,
      }}
    >
      <MusicFabPlayer ref={musicRef} src={URL_SONG} backgroundColor={PRIMARY} />

      {/* INTRO */}
      <InvitationIntro
        open={showIntro}
        onEnter={handleEnter}
        musicRef={musicRef}
        title="Una celebración está por comenzar"
        brideName="Diana Veronica"
        groomName="Eliel Misael"
        ampersonSymbol="&"
        namesTypo={MAIN_TYPO}
        ampersonTypo={MAIN_TYPO}
        guestTypo={BODY_TYPO}
        bodyTypo={BODY_TYPO}
        backgroundColor={BG_MAIN}
        primaryColor={PRIMARY}
        envelopeImg={assetUrl("envelope")}
        sealImg={assetUrl("seal")}
        sealPosition={introSealPosition}
        bottomRightCornerImg={assetUrl("ornament")}
        topLeftCornerImg={assetUrl("ornament")}
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
        <Cover
          ourWeddingStart={true}
          
          weddingDate="21 de Noviembre, 2026"
          bgImage={assetUrl("cover")}
          brideName="Diana Veronica"
          symbolr={"Y"}
          groomName={"Eliel Misael"}
          className={MAIN_TYPO}
          bgSize="cover"
          overlay={true}
          fontSize="3rem"
          verticalPosition="bottom"
          ampersonClassName={MAIN_TYPO}
        ></Cover>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 2)}")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            padding: "50px 20px",
          }}
        >
          <Box
            padding={2}
            bgcolor={OVERLAY}
            display={"flex"}
            justifyContent={"center"}
          >
            <Qoute {...qoute}></Qoute>
          </Box>
        </div>
        <ImageMiddle
          bgPosition="30%"
          height="70vh"
          bgImage={assetUrl("middle-image")}
          bgPositionY="30%"
        ></ImageMiddle>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 3)}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{
                    borderColor: BORDER,
                    borderStyle: "solid",
                    borderWidth: "1.5px",
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
                          Deseamos compartir con ustedes la alegría de nuestra
                          unión, con la bendición de Dios y nuestros padres:
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                      <Fade direction="up">
                        <Typography
                        translate="no"
                          sx={{ color: PRIMARY_DARK, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Juan Pablo Medina Mazon
                        </Typography>
                        <Typography
                        translate="no"
                          sx={{ color: PRIMARY_DARK, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Veronica Villanueva Salazar
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                      <Fade direction="up">
                        <Typography
                        translate="no"
                          sx={{ color: PRIMARY_DARK, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Y
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                      <Fade direction="up">
                        <Typography
                        translate="no"
                          sx={{ color: PRIMARY_DARK, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Marco Polo Guerrero Germán
                        </Typography>
                        <Typography
                        translate="no"
                          sx={{ color: PRIMARY_DARK, fontSize: "1.5rem" }}
                          variant="h4"
                          textAlign={"center"}
                          className={MAIN_TYPO}
                        >
                          Olga Lidia Mendivil Félix
                        </Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                      <Fade direction="up">
                        <Typography
                          textAlign={"center"}
                          className={`${BODY_TYPO}`}
                        >
                          Será un honor compartir este día con ustedes.
                        </Typography>
                      </Fade>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
        <CountDown
          eventDate={COUNTDOWN_DATE}
          bgImage={assetUrl("background", 1)}
          typoHeader={MAIN_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
          marginTop="30px"
          padding="1em"
          alignItems="center"
          height="40vh"
        ></CountDown>
        <Grid
          container
          spacing={2}
          sx={{ backgroundColor: PRIMARY }}
          padding={2}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box padding={2}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: "1.5px",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  padding={2}
                  justifyContent={"center"}
                  sx={{ color: WHITE }}
                >
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Fade direction="up">
                      <Typography
                        mt={2}
                        sx={{ fontSize: "2rem" }}
                        textAlign={"center"}
                        className={`${MAIN_TYPO}`}
                      >
                        Padrinos
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid
                    size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
                    display={"flex"}
                    justifyContent={"center"}
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
                          bgcolor: WHITE,
                          opacity: 0.45,
                        }}
                      />

                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          border: `1.5px solid ${WHITE}`,
                          transform: "rotate(45deg)",
                        }}
                      />

                      <Box
                        sx={{
                          width: 55,
                          height: "1px",
                          bgcolor: WHITE,
                          opacity: 0.45,
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Patricia Guerrero
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Leobardo Valenzuela
                      </Typography>
                    </Fade>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Karen Amado
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Josue Molina
                      </Typography>
                    </Fade>
                  </Grid>
                   <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Dulce Medina

                      </Typography>
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                    Francisco Jaime
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Diana Larumbe
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1rem" }}
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                        Moisés Morales
                      </Typography>
                    </Fade>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 2)}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 20px",
          }}
        >
          <Grid container spacing={2} padding={4}>
            {eventCards.map((item, index) => (
              <EventCard key={index} {...item}></EventCard>
            ))}
          </Grid>
          <Box>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: PRIMARY_DARK,
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
                title="Boda de Diana Veronica & Eliel Misael "
                startDate="20261021T180000"
                endDate="20261121T235900"
                location="Agave Victoria Jardin de Eventos"
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 0)}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 20px",
          }}
        >
          <Grid
            container
            spacing={2}
            display={"flex"}
            alignItems={"center"}
            padding={4}
            sx={{ backgroundColor: OVERLAY }}
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
                  {t("timeline.subtitle")}
                </Typography>
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Timeline position="alternate">
                {timelineData.events?.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
                      <Fade direction="up" triggerOnce={true}>
                        <img
                          className="intinerario-icon"
                          src={item.icon}
                          height="60"
                        />
                      </Fade>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector
                        sx={{ backgroundColor: timelineData.colorPrimary }}
                      />
                      <TimelineDot
                        sx={{ backgroundColor: timelineData.colorPrimary }}
                      ></TimelineDot>
                      <TimelineConnector
                        sx={{ backgroundColor: timelineData.colorPrimary }}
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Fade direction="up" triggerOnce={true}>
                        <Typography
                          sx={{
                            color: timelineData.colorPrimary,
                            fontSize: "24px",
                          }}
                          className={`${SECONDARY_TYPO}`}
                          variant="subtitle1"
                          component="span"
                        >
                          {dayjs(item.date).format("hh:mm A")}
                        </Typography>
                      </Fade>
                      <Fade direction="up" triggerOnce={true}>
                        <Typography
                          sx={{ color: timelineData.colorPrimary }}
                          className={`${SECONDARY_TYPO}`}
                        >
                          {item.eventName}{" "}
                        </Typography>
                      </Fade>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 2)}")`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            padding: "50px 20px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container spacing={2} padding={2} paddingBottom={0}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                <GiftList {...giftListData}></GiftList>
              </Box>
            </Grid>
          </Grid>
          {/* GALERÍA */}
        <MiniGallery
                            images={galleryImages}
                             backgroundColor={OVERLAY}
                            spacing={2}
                            gap={3}
                            imageHeightDesktop={580}
                            imageHeightMobile={260}
                            objectFit="cover"
                            />
        </div>
        <RSVPForm
          guest={guest || undefined}
          dateLine={RSVP_DATE_LINE}
          textColor={"white"}
          colorButton={"white"}
          bgColor={PRIMARY}
          mainTypo={MAIN_TYPO}
          bodyTypo={BODY_TYPO}
          count={invitedGuests}
          color={"white"}
          guestId={guestId}
          invitationId={INVITATION_ID}
          qrActive={false}
          numberInWords={true}
          fontSize="2rem"
          transparencyButton={true}
        ></RSVPForm>
        <div
          style={{
            backgroundImage: `url("${assetUrl("background", 3)}")`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            padding: "50px 20px",
          }}
        >
          <Box
            padding={2}
            bgcolor={"rgb(250,250,250,.8)"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              borderColor: PRIMARY,
              borderStyle: "solid",
              borderWidth: "1.5px",
            }}
          >
            <Grid container spacing={2} padding={2} paddingBottom={0}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <DressCode {...dresscode}></DressCode>
              </Grid>

              <Grid
                    size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    display={"flex"}
                    justifyContent={"center"}
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
                          bgcolor: PRIMARY,
                          
                        }}
                      />

                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          border: `1.5px solid ${PRIMARY}`,
                          transform: "rotate(45deg)",
                        }}
                      />

                      <Box
                        sx={{
                          width: 55,
                          height: "1px",
                          bgcolor: PRIMARY,
                          
                        }}
                      />
                    </Box>
                  </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                display={"flex"}
                justifyContent={"center"}
              >
                <WithoutKids {...withOutKids} />
              </Grid>
            </Grid>
          </Box>

         
            {/* CIERRE */}
<Box
  component="section"
  sx={{
    mt:2,
    width: "100%",
    px: { xs: 2.5, sm: 4 },
    py: { xs: 7, sm: 9 },
    backgroundColor: BG_MAIN,
    textAlign: "center",
  }}
>
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

    <Typography
className={MAIN_TYPO}
      sx={{
       
        fontSize: { xs: "2rem", sm: "2.3rem" },
        lineHeight: 1.15,
        color: PRIMARY_DARK,
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
        <FooterInvites bgColor={"white"} color={PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default WeddingDianaMisael;

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
import { Box, Button, IconButton, Paper, Stack, Typography } from "@mui/material";

import RSVPForm from "../../components/RSVP/RSVPForm";
import { Fade } from "react-awesome-reveal";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";

import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";

import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import dayjs from "dayjs";
import i18n from "../../i18n";
import Gallery from "../../components/GalleryV2/Gallery";

const INVITATION_ID = 45;
const MEDIA_KEY = "invitacion-elizabeth-miguel";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";


// 🎨 BACKGROUNDS
const BG_MAIN = "#F3EEE5"; // Marfil cálido, más presente
const BG_SECTION = "#E5DED1"; // Beige piedra para separar secciones
const BG_OLIVE = "#59634F"; // Verde olive profundo

// 🖋 TEXTOS
const TEXT_PRIMARY = "#252621"; // Negro cálido
const TEXT_SECONDARY = "#5B5B52"; // Gris oliva cálido

// ✨ DORADO / CHAMPAGNE
const GOLD_PRIMARY = "#A8895B"; // Champagne oscuro / dorado viejo
const BUTTON_PRIMARY = "#A8895B";

// 🌿 OLIVE
const OLIVE_PRIMARY = "#59634F";
const OLIVE_DARK = "#414A3A";
const OLIVE_LIGHT = "#89917F";

// ✨ DETALLES
const BORDER_COLOR = "#C9BEAB";
const SHADOW_COLOR = "rgba(35, 35, 30, 0.12)";

// ✨ TÍTULOS
const TITLE_COLOR = "#A8895B";
const TITLE_ON_OLIVE = "#F3EEE5"


const MAIN_TYPO = "pinyon-script-regular ";
const SECONDARY_TYPO = "dm-sans-500 to-upper letter-spacing-25em";
const BODY_TYPO = "dm-sans-500";
const URL_SONG = `${URL_REPO}canciones/Unchained-Melody.mp3`;

const COUNTDOWN_DATE = new Date(2026, 9, 24);
const RSVP_DATE_LINE = new Date(2026, 9, 10);

const calendarButtonProps = {
  variant: "outlined" as const,
  sx: {
    borderRadius: "999px",
    px: 4,
    py: 1.5,
    textTransform: "none",
    fontFamily: "Inter",
    borderColor: TITLE_ON_OLIVE,
    color: TITLE_ON_OLIVE,
  },
};

const godParents = [
  {
    title: "Arras",
    names: ["Miguel Hernández Camacho", "Rosario Salazar Espinoza"],
  },
  {
    title: "Lazo",
    names: [
      "Dulce Ximena Hernández Salazar",
      "Pahola Marely Hernández Salazar",
    ],
  },
];

const colorPalette = [
  "#A85F3F",
  "#5A2630",
  "#25483E",
  "#FFA735",
  "#C28A48",
];

const WeddingEliMiguel = () => {
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
      bgColor: "white",
      eventName: "Ceremonia  - Recepción",
      date: new Date(2026, 10, 6, 16, 0, 0),
      endDate :  new Date(2026, 10, 6, 23, 0, 0),
      locationName: "Casa Parotta",
      address: "Ponciano Arriaga, Constitucion, 83150 Hermosillo, Son.",
      size: 12,
      color: TEXT_PRIMARY,
      mainTypo: SECONDARY_TYPO,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/VeGRnXQ6iFzxzKfW8",
      colorButton: BUTTON_PRIMARY,
      colorIcon: TEXT_PRIMARY,
      fontSize: "2rem",
      borderSquare: true,
    },
  ];

  const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    fontSize: "1.5rem",
    mainPhrase:
      "Si su deseo es hacernos algún obsequio compartimos las opciones",
    giftIcon: assetUrl("icon", 0),
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_PRIMARY,
    bgColor: "#FFFFFF",
    showEnvelope: true,
    envelopeMainTypo: SECONDARY_TYPO,
    envelopeFontSize: "1.5rem",
    envelopePhrase:
      "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase:
      "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: assetUrl("icon", 0),
    bankDetails: [
      {
        numbers: [
          {
            numberType: "Cuenta",
            number: "152 667 7937",
          },
          {
            numberType: "CLABE",
            number: "012 180 01526677937 9",
          },
        ],
        bank: "BBVA Bancomer",
        name: " Elizabeth Salazar",
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
    colorPrimary: OLIVE_DARK,
    colorTitle:OLIVE_DARK,
    colorBody:OLIVE_DARK,
    fontSize: "50px",
    bgColor: BG_SECTION,
    events: [
      {
        eventName: "Llegada de invitados",
        date: new Date(2025, 10, 16, 16, 40, 0),
        icon: assetUrl("icon", 2),
      },
      {
        eventName: "Ceremonia civil",
        date: new Date(2025, 10, 16, 17, 0, 0),
        icon: assetUrl("icon", 3),
      },
      {
        eventName: "Ceremonia religiosa",
        date: new Date(2025, 10, 16, 17, 30, 0),
        icon: assetUrl("icon", 4),
      },
      {
        eventName: "Brindis",
        date: new Date(2025, 10, 16, 17, 45, 0),
        icon: assetUrl("icon", 5),
      },
      {
        eventName: "Sesión de fotos",
        date: new Date(2025, 10, 16, 18, 5, 0),
        icon: assetUrl("icon", 6),
      },
      {
        eventName: "Cóctel",
        date: new Date(2025, 10, 16, 18, 45, 0),
        icon: assetUrl("icon", 7),
      },
      {
        eventName: "Cena",
        date: new Date(2025, 10, 16, 19, 0, 0),
        icon: assetUrl("icon", 8),
      },
      {
        eventName: "Primer baile",
        date: new Date(2025, 10, 16, 20, 0, 0),
        icon: assetUrl("icon", 9),
      },
      {
        eventName: "Pastel",
        date: new Date(2025, 10, 16, 21, 0, 0),
        icon: assetUrl("icon", 10),
      },
      {
        eventName: "Fiesta",
        date: new Date(2025, 10, 16, 21, 20, 10),
        icon: assetUrl("icon", 11),
      },
      {
        eventName: "Despedida",
        date: new Date(2025, 10, 16, 23, 0, 11),
        icon: assetUrl("icon", 12),
      },
    ],
  };

  const galleryImages = cloudAssets
    .filter((asset) => asset.assetKind === "gallery")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((asset) => asset.secureUrl);

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
    document.title = "Boda Elizabeth & Miguel";
  }, []);

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
      <EnvelopeIntro
        open={showIntro}
        onEnter={handleEnter}
        musicRef={musicRef}
        sealImage={assetUrl("seal")}
        envelopeColor={BG_MAIN}
        overlayColor={OLIVE_DARK}
        envelopeHighlight={OLIVE_DARK}
        shadowColor={OLIVE_DARK}
      />

      {/* INVITACIÓN */}
      <Box>
        <CoverInline
          ourWeddingStart={true}
          weddingDate="24.OCTUBRE.26"
          bgImage={assetUrl("middle-image", 4)}
          brideName="Elizabeth "
          symbolr={"y"}
          groomName={"Miguel"}
          className={MAIN_TYPO}
          bgSize="cover"
          overlay={true}
          fontSize="3.8rem"
          verticalPosition="bottom"
          ampersonClassName={MAIN_TYPO}
          bgPositionY="40%"
        ></CoverInline>
         <Box
      component="section"
      sx={{
        backgroundColor: BG_MAIN,
        px: { xs: 2.5, sm: 4 },
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* IMÁGENES */}
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
          src={assetUrl("middle-image",0)}
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
          src={assetUrl("middle-image",1)}
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

      {/* FRASE */}
      <Box
        sx={{
          maxWidth: 390,
          mx: "auto",
          mt: 10,
          textAlign: "center",
        }}
      >
        <Typography
        className={MAIN_TYPO}
          sx={{
           
            fontSize: {
              xs: "28px",
              sm: "32px",
            },
            lineHeight: 1.25,
            fontWeight: 400,
            color: OLIVE_DARK,
          }}
        >
          “Y cuando el tiempo sea correcto,
          <br />
          Dios hará que las cosas sucedan.”
        </Typography>

        <Typography
        className={SECONDARY_TYPO}
          sx={{
            mt: 2,
           
            fontSize: "12px",
            letterSpacing: "1.5px",
            color: OLIVE_PRIMARY,
          }}
        >
          ISAÍAS 60:22
        </Typography>
      </Box>
    </Box>
        <ImageMiddle
          bgPosition="30%"
          height="70vh"
          bgImage={assetUrl("middle-image", 2)}
          bgPositionY="70%"
        ></ImageMiddle>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box padding={2} bgcolor={BG_SECTION}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{
                  borderColor: OLIVE_LIGHT,
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
                        Con la bendición de nuestros padres
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: OLIVE_DARK, fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={MAIN_TYPO}
                      >
                        Guadalupe Espinoza García
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
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${GOLD_PRIMARY}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />
                </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: OLIVE_DARK, fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={MAIN_TYPO}
                      >
                        {" "}
                        Reyna Guadalupe Alcalá vazquez{" "}
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
                      Tenemos el honor de invitarlos a la celebración de nuestra
                      unión
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </div> */}

        <CountDown
          eventDate={COUNTDOWN_DATE}
          bgImage={assetUrl("background", 0)}
          typoHeader={MAIN_TYPO}
          typoCountdown={SECONDARY_TYPO}
          fontSize="2.3rem"
          marginTop="30px"
          padding="1em"
          alignItems="end"
        ></CountDown>
        <Box
          sx={{
            background: BG_MAIN,
            py: { xs: 8, md: 12 },
            px: 3,
          }}
        >
          {/* Título */}
          <Fade direction="up" triggerOnce={true}>
            <Typography
              className={MAIN_TYPO}
              textAlign="center"
              sx={{
                color: TITLE_COLOR,
                fontSize: { xs: 34, md: 42 },
                
                mb: 2,
              }}
            >
              Padrinos
            </Typography>

            <Typography
              className={BODY_TYPO}
              textAlign="center"
              sx={{
                color: TEXT_PRIMARY,
                fontWeight: 300,
                
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Con mucho cariño agradecemos a quienes nos acompañan como padrinos
              en este momento tan especial.
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
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${GOLD_PRIMARY}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />
                </Box>
          </Fade>
          <Grid container spacing={6}>
            {godParents.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box textAlign="center">
                  <Fade direction="up" triggerOnce={true}>
                    <Typography
                      translate="no"
                      className={SECONDARY_TYPO}
                      sx={{
                        color: TITLE_COLOR,
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

                          color: OLIVE_DARK,
                          fontSize: 24,
                          fontWeight: 300,
                          lineHeight: 1.8,
                        }}
                      >
                        {n}
                      </Typography>
                    ))}

                    <Box
                      sx={{
                        width: 80,
                        height: 2,
                        background: BORDER_COLOR,
                        mx: "auto",
                        mt: 2,
                      }}
                    />
                  </Fade>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ backgroundColor: OLIVE_PRIMARY, padding: "50px 20px" }}>
          <Grid container spacing={2} padding={4}>
            {eventCards.map((item, index) => (
                 <Box key={index}
        sx={{
          maxWidth: 390,
          mx: "auto",
          backgroundColor: BG_MAIN,
          px: { xs: 4, sm: 5 },
          py: 5,
          textAlign: "center",
        }}
      >
        {/* TÍTULO */}
        <Typography
        className={MAIN_TYPO}
          sx={{
            
            fontSize: {
              xs: "2rem",
              sm: "3rem",
            },
            lineHeight: 1.05,
            fontWeight: 400,
            color: TEXT_PRIMARY,
          }}
        >
          Ceremonia
          <br />
          <Box
            component="span"
            sx={{
              fontFamily: "inherit",
            }}
          >
            y Recepción
          </Box>
        </Typography>

        {/* VENUE */}
        <Typography
         className={SECONDARY_TYPO}
          sx={{
            mt: 3,
            fontSize: "16px",
            fontWeight: 500,
            color: BG_OLIVE,
          }}
        >
           {item.locationName}
        </Typography>

        {/* DIRECCIÓN */}
        <Typography
         className={BODY_TYPO}
          sx={{
            mt: 2,
            fontSize: "14px",
            lineHeight: 1.55,
            color: TEXT_SECONDARY,
          }}
        >
         {item.address}
        </Typography>

        {/* HORA */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.7}
          sx={{
            mt: 2.5,
          }}
        >
          <AccessTimeIcon
            sx={{
              fontSize: 21,
              color: TEXT_PRIMARY,
            }}
          />

          <Typography
          className={SECONDARY_TYPO}
            sx={{
              fontSize: "14px",
              color: TEXT_PRIMARY,
            }}
          >
            {`${dayjs(item.date).locale(i18n.language).format("hh:mm A")} - ${dayjs(item.endDate).locale(i18n.language).format("hh:mm A")}`}
          </Typography>
        </Stack>

        {/* BOTÓN */}
        <Button
        href={item.href}
          variant="contained"
          disableElevation
          endIcon={
            <LocationOnOutlinedIcon
              sx={{
                fontSize: 18,
              }}
            />
          }
          sx={{
            mt: 3,
            minWidth: 188,
            height: 40,
            borderRadius: "24px",
            backgroundColor: GOLD_PRIMARY,
            color: BG_MAIN,
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,

            "&:hover": {
              backgroundColor: GOLD_PRIMARY,
            },
          }}
        >
          Ver ubicación
        </Button>
      </Box>
            ))}
          </Grid>
          <Box>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: TITLE_ON_OLIVE,
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
                title="Boda de Elizabeth & Miguel"
                startDate="20261024T164000"
                endDate="20261024T230000"
                location="San Carlos,Son"
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
            color: TITLE_COLOR,
          }}
        >
          El Gran Día
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
                    backgroundColor: BORDER_COLOR,
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
                    backgroundColor: OLIVE_PRIMARY,
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
                    color: OLIVE_PRIMARY,
                  }}
                >
                  {time}
                </Typography>

                <Typography
                    className={SECONDARY_TYPO}
                  sx={{
                    mt: 0.8,
                    fontSize: "14px",
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
          bgPosition="80%"
          height="80vh"
          bgImage={assetUrl("middle-image", 3)}
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
                  border: `1px solid ${BORDER_COLOR}`,
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
                        color: TITLE_COLOR,
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
                    src={assetUrl("icon",1)}
                    sx={{
                      height: { xs: "20vh", sm: "30vh", md: "50vh" },
                      maxHeight: 300,
                      mt: 3,
                      mb: 4,
                    }}
                  />
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
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${GOLD_PRIMARY}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />
                </Box>

                <Typography
                  className={BODY_TYPO}
                  sx={{
                    fontSize: "1rem",
                    color: TEXT_PRIMARY,
                    textAlign: "center",
                    lineHeight: 1.9,
                    mb: 5,
                  }}
                >
                  Te sugerimos esta paleta de colores
                </Typography>
                <Fade triggerOnce={true} direction="up">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: { xs: 0.5, md: 1 },
                    }}
                  >
                    {colorPalette.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: { xs: 28, sm: 34, md: 40 },
                          height: { xs: 28, sm: 34, md: 40 },
                          borderRadius: "50%",
                          bgcolor: item,
                        }}
                      />
                    ))}
                  </Box>
                </Fade>
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
                          src={assetUrl("icon", 0)}
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
          height="50vh"
          bgImage={assetUrl("cover")}
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
              background: OLIVE_LIGHT,
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
              bgColor={OLIVE_LIGHT}
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
                   backgroundColor: "#FFFFFF",
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
                      color:OLIVE_DARK,
                      fontSize: {
                        xs: "2rem",
                        md: "2.5rem",
                      },
                      letterSpacing: ".18em",
                      mb: 5,
                      mt: 5,
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
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      border: `1.5px solid ${GOLD_PRIMARY}`,
                      transform: "rotate(45deg)",
                    }}
                  />

                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      bgcolor: GOLD_PRIMARY,
                      opacity: 0.45,
                    }}
                  />
                </Box>

                  <Typography
                  className={MAIN_TYPO}
                    sx={{
                      color:TEXT_PRIMARY,
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
       
          <div style={{ height: 50 }}></div>
          <Gallery
                  images={galleryImages}
                   bgMain={BG_MAIN} 
                   titleColor={OLIVE_PRIMARY} 
                   bodyColor={TEXT_PRIMARY} 
                   title={"Nuestros momentos"} 
                   subtitle={"Un pedacito de nuestra historia."}
                   mainTypo={MAIN_TYPO}
                   bodyTypo={BODY_TYPO}
                   
                   />
        <Box
  component="section"
  sx={{
    backgroundColor: BG_OLIVE,
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
        color: TITLE_ON_OLIVE,
        m: 0,
      }}
    >
      El amor nos unió,
      <br />
      la vida nos hizo familia
      <br />
      y hoy celebramos
      <br />
      nuestro sí.
    </Typography>
  </Box>

  <Box
    sx={{
      width: 45,
      height: "1px",
      backgroundColor: TITLE_ON_OLIVE,
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
      color: TITLE_ON_OLIVE,
    }}
  >
    Elizabeth Y Miguel
  </Typography>

  <Typography
  className={BODY_TYPO}
    sx={{
      mt: 2,
     
      fontSize: ".8rem",
      letterSpacing: "3px",
      color: TITLE_ON_OLIVE,
    }}
  >
    2026
  </Typography>
</Box>
        <FooterInvites bgColor={"white"} color={TEXT_PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default WeddingEliMiguel;

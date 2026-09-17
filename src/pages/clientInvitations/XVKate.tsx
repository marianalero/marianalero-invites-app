import { Fade } from "react-awesome-reveal";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import CustomizedTimeline, {
  CustomizedTimelineProps,
} from "../../components/TimeLine/Timeline";
import Grid from "@mui/material/Grid2";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";

import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import RSVPForm from "../../components/RSVP/RSVPForm";

import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import CalendarButton from "../../components/CalendarButton/CalendarButton";
import dayjs from "dayjs";
import EditorialCountdown from "../../components/EditorialCountdown";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import { URL_REPO } from "../../config";
    const URL_SONG = `${URL_REPO}canciones/Deadtome.mp3`;
const BG_MAIN = "#F5F0E8"; // Marfil cálido
const BG_SECTION = "#eee0dc"; // Nude rosado
const BG_ACCENT = "#641D2B"; // Guinda protagonista
const BG_DARK = "#3D111B"; // Vino profundo
// 🖋 TEXTOS

const TEXT_PRIMARY = "#21191A"; // Espresso

// ✨ ACENTOS

const GOLD = "#B99A62"; // Champagne gold
const GOLD_LIGHT = "#D8C39A"; // Champagne claro

// 🎯 BOTONES

const BUTTON_PRIMARY = "#641D2B"; // Guinda

const MAIN_TYPO = "alex-brush-regular";
const SECOND_TYPO = "playfair-display-400";
const BODY_TYPO = "lora";

const COUNTDOWN_DATE = new Date(2026, 9, 10);
const RSVP_DATE_LINE = new Date(2026, 9, 1);
const MEDIA_KEY = "xv-kate";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";
const INVITATION_ID = 41;

const introSealPosition = {
  top: "70%",
  left: "50%",
  width: "75px",
  height: "75px",
  transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
  bottom: "-30px",
  right: "10px",
  width: "110px",
  height: "110px",
  transform: "rotate(180deg)",
};

const introTopLeftCornerPosition = {
  top: "-35px",
  left: "20px",
  width: "110px",
  height: "110px",
  transform: "rotate(30deg)",
};

const calendarButtonProps = {
  variant: "outlined" as const,
  sx: {
    borderRadius: "999px",
    px: 4,
    py: 1.5,
    textTransform: "none",
    fontFamily: BODY_TYPO,
    borderColor: BG_DARK,
    color: BG_DARK,
  },
};

const PeopleGroup = (title: string, names: string[]) => (
  <Stack
    spacing={1}
    alignItems="center"
    sx={{
      width: "100%",
      textAlign: "center",
      mt: 2,
    }}
  >
    <Typography
      className={BODY_TYPO}
      sx={{
        fontSize: "0.65rem",
        fontWeight: 600,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: GOLD,
        mb: 0.5,
      }}
    >
      {title}
    </Typography>

    <Stack spacing={0.3}>
      {names.map((name) => (
        <Typography
          className={SECOND_TYPO}
          key={name}
          sx={{
            fontSize: {
              xs: "1.05rem",
              sm: "1.2rem",
            },
            fontWeight: 400,
            lineHeight: 1.35,
            color: TEXT_PRIMARY,
          }}
        >
          {name}
        </Typography>
      ))}
    </Stack>
  </Stack>
);
const XVKate = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);
  const [cloudAssets, setCloudAssets] = useState<InvitationAsset[]>([]);

  const musicRef = useRef<MusicFabPlayerHandle>(null);

  useEffect(() => {
    getAssets(MEDIA_KEY).then(setCloudAssets).catch(() => setCloudAssets([]));
  }, []);

  const assetUrl = (kind: string, index = 0) =>
    cloudAssets
      .filter((asset) => asset.assetKind === kind)
      .sort((a, b) => a.sortOrder - b.sortOrder)[index]?.secureUrl ?? EMPTY_ASSET;

  const eventCards: EventCardProps[] = [
    {
      eventName: "Misa de Acción de Gracias",
      date: new Date(2026, 9, 10, 16, 0, 0),
      locationName: "Templo Expiatorio",
      address: " Gral. Antonio Villarreal 23, Colonia Country Club",
      size: 6,
      color: GOLD,
      icon: assetUrl("church"),
      mainTypo: `${SECOND_TYPO}`,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/6ruirdydo7X2tnXp6",
      fontSize: "45px",
      colorButton: BUTTON_PRIMARY,
      bgColor: BG_MAIN,
      priest: "Pbro. Francisco Javier Arriola Merlos",
      iconSize: "100px",
    },
    {
      eventName: "Recepción",
      date: new Date(2026, 9, 10, 19, 0, 0),
      locationName: "Hacienda Las Minitas",
      address:
        "Calle Cerro los Molinos 97, Colonia Las Minitas, entre Camino del Seri y Carretera 26",
      size: 6,
      color: GOLD,
      icon: assetUrl("reception"),
      mainTypo: `${SECOND_TYPO}`,
      bodyTypo: BODY_TYPO,
      fontSize: "45px",
      href: "https://maps.app.goo.gl/1YF2Yc1Y2YsvWXCAA",
      colorButton: BUTTON_PRIMARY,
      bgColor: BG_MAIN,
      iconSize: "70px",
    },
  ];
  const timelineData: CustomizedTimelineProps = {
    position: "right",
    mainTypo: MAIN_TYPO,
    bodyTypo: SECOND_TYPO,
    colorPrimary: GOLD_LIGHT,
    colorTitle: GOLD_LIGHT,
    colorBody: GOLD_LIGHT,
    bgColor: "rgb(100, 29, 43,.5)",
    fontSize: "38px",
    events: [
      {
        eventName: "Misa de Acción de Gracias",
        date: new Date(2026, 0, 31, 16, 0, 0),
        icon: assetUrl("icon", 2),
      },
      {
        eventName: "Recepción",
        date: new Date(2026, 0, 31, 19, 0, 0),
        icon: assetUrl("icon", 3),
      },
      {
        eventName: "Nuestro Vals",
        date: new Date(2026, 0, 31, 21, 0, 0),
        icon: assetUrl("icon", 4),
      },
      {
        eventName: "Cena",
        date: new Date(2026, 0, 31, 22, 0, 0),
        icon: assetUrl("icon", 5),
      },
      {
        eventName: "Fin del evento",
        date: new Date(2026, 1, 1, 1, 0, 0),
        icon: assetUrl("icon", 6),
      },
    ],
  };
  const galleryPhotos = [0, 1, 2].map((index) => assetUrl("gallery", index));

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
    document.title = "XV Kate Alejandra";
  }, []);
  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <MusicFabPlayer
        ref={musicRef}
        src={URL_SONG}
        backgroundColor={TEXT_PRIMARY}
        startTime={3}
      />
      <InvitationIntro
        open={showIntro}
        onEnter={handleEnter}
        musicRef={musicRef}
        title="Te invito a celebrar mis XV años"
        fontSizeNames="2.5rem"
        brideName="Kate"
        groomName="Alejandra"
        ampersonSymbol=""
        namesTypo={MAIN_TYPO}
        ampersonTypo={MAIN_TYPO}
        guestTypo={BODY_TYPO}
        bodyTypo={BODY_TYPO}
        backgroundColor={BG_MAIN}
        primaryColor={TEXT_PRIMARY}
        envelopeImg={assetUrl("envelope")}
        sealImg={assetUrl("seal")}
        sealPosition={introSealPosition}
        topLeftCornerImg={""}
        bottomRightCornerImg={""}
        bottomRightCornerPosition={introBottomRightCornerPosition}
        topLeftCornerPosition={introTopLeftCornerPosition}
        
        guestCount={1}
      />
      <Box
        sx={{
          opacity: showInvitation ? 1 : 0,

          filter: showInvitation ? "blur(0px)" : "blur(20px)",

          transform: showInvitation ? "scale(1)" : "scale(1.03)",

          transition: "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <CoverSimple
          bgImage={assetUrl("cover")}
          bgImage2={assetUrl("cover")}
          weddingDate="10.10.2026"
          subtitle="Mis XV años"
          brideName="Kate Alejandra"
          symbolr={""}
          groomName={""}
          className={MAIN_TYPO}
          textColor={"white"}
          hideText={false}
          ourWeddingStart={true}
          overlay={true}
          bgPosition="40%"
        ></CoverSimple>

        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            minHeight: {
              xs: "520px",
              sm: "600px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",

            backgroundImage: `url(${assetUrl("gallery", 3)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },
            py: {
              xs: 8,
              sm: 10,
              md: 12,
            },
          }}
        >
          
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "620px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            {/* Frase introductoria */}
            <Typography
              className={BODY_TYPO}
              sx={{
                
                lineHeight: 1.9,
                color: TEXT_PRIMARY,
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Con gratitud a Dios y mucha alegría, celebramos los 15 años de nuestra hija Kate Alejandra.
            </Typography>

            {/* Separador */}
            <Box
              sx={{
                width: {
                  xs: "180px",
                  sm: "230px",
                },
                height: "auto",
                mx: "auto",
                my: 3,
                 display:"flex",
                justifyContent:"center"
              }}
            >
              <Box
                component="img"
                src={assetUrl("ornament")}
                alt=""
                sx={{
                  display: "block",
                  width: "120px",
                  height: "auto",
                }}
              />
            </Box>

            {/* Frase principal */}
            <Typography
              className={BODY_TYPO}
              sx={{
               
                lineHeight: 1.9,
                color: TEXT_PRIMARY,
                fontWeight: 400,
              }}
            >
              Damos gracias a Dios por estos quince años llenos de amor, alegría y bendiciones. Le pedimos que continúe guiando sus pasos, iluminando sus sueños y acompañándola siempre en cada etapa de su vida.
            </Typography>
 <Box
              sx={{
                width: {
                  xs: "180px",
                  sm: "230px",
                },
                height: "auto",
                mx: "auto",
                my: 3,
                display:"flex",
                justifyContent:"center"
              }}
            >
              <Box
                component="img"
                src={assetUrl("ornament")}
                alt=""
                sx={{
                  display: "block",
                  width: "130px",
                  height: "auto",
                }}
              />
            </Box>
            {/* <Typography
              className={BODY_TYPO}
              sx={{
               
                lineHeight: 1.9,
                color: TEXT_PRIMARY,
                fontWeight: 400,
              }}
            >
              Con el corazón lleno de emoción y gratitud, queremos compartir
              este momento tan especial junto a nuestros familiares y amigos,
              <br></br>
              agradeciendo profundamente su presencia y cariño en la vida de
              nuestra hija.
            </Typography> */}

            {/* Separador */}
           <Box 
           height={120}>

           </Box>
          </Box>
        </Box>
        <ImageMiddle
          bgPosition="30%"
          height="70vh"
          bgImage={assetUrl("middle-image")}
        ></ImageMiddle>
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            backgroundColor: BG_MAIN,
            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },
            py: {
              xs: 8,
              sm: 10,
              md: 12,
            },
          }}
        >
          {/* Decoración superior */}
          <Box
            sx={{
              width: {
                xs: "180px",
                sm: "230px",
              },
              height: "auto",
              mx: "auto",
              my: 3,
            }}
          >
            <Box
              component="img"
              src={assetUrl("ornament")}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>

          {/* Contenedor */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 620,
              mx: "auto",
            }}
          >
            {/* Encabezado */}
            <Stack alignItems="center" spacing={1.2} mb={5}>
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                  },
                  fontWeight: 400,
                  color: TEXT_PRIMARY,
                  textAlign: "center",
                }}
              >
                Con amor
              </Typography>

              <Typography
                className={BODY_TYPO}
                sx={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                Familia
              </Typography>
            </Stack>

            {/* PADRES */}

            {PeopleGroup("Sus padres", [
              "Betzabé Minerva Flores Orante",
              "Clayde  Eduardo Navarro Soto",
            ])}

            {PeopleGroup("Y sus hermanos", [
              "Ricardo Arath Navarro Flores",
              "Brenda Melissa Navarro Flores",
            ])}

            {PeopleGroup("Sus padrinos", [
              "Brenda Alicia Orantes Arenas",
              "Rafael Muñiz Razo",
            ])}
          </Box>

          {/* Decoración inferior */}
          <Box
            sx={{
              width: {
                xs: "180px",
                sm: "230px",
              },
              height: "auto",
              mx: "auto",
              my: 3,
            }}
          >
            <Box
              component="img"
              src={assetUrl("ornament")}
              alt=""
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
        <Box
  sx={{
    bgcolor: BG_SECTION,
    position: "relative",
    overflow: "hidden",
    
  }}
>
  {/* Cenefa decorativa superior */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "95px",

      backgroundImage: `url(${assetUrl("ornament", 3)})`,
      backgroundRepeat: "repeat-x",
      backgroundPosition: "top left",
      backgroundSize: "100px auto",

      opacity: 0.95,
      zIndex: 1,
      pointerEvents: "none",
      mb:5
    }}
  />
<Box
    sx={{
      position: "relative",
      zIndex: 1,

      pt: {
        xs: "115px",
        sm: "125px",
      },

      pb: {
        xs: 8,
        sm: 10,
      },
    }}
  >
  <EditorialCountdown
    eventDate={COUNTDOWN_DATE}
    background={{ color: BG_SECTION }}
    title={{
      fontFamily: '"Playfair Display"',
      color: BUTTON_PRIMARY,
      fontSize: "1.8rem",
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: "uppercase",
    }}
    number={{
      fontFamily: '"Playfair Display"',
      color: BUTTON_PRIMARY,
      fontSize: "3.6rem",
      fontWeight: 500,
    }}
    label={{
      fontFamily: '"Lora"',
      color: TEXT_PRIMARY,
      fontSize: ".72rem",
      fontWeight: 400,
      letterSpacing: ".12em",
      textTransform: "uppercase",
    }}
    divider={{
      color: GOLD,
    }}
    responsive={{
      numberSize: "2.2rem",
      labelSize: ".65rem",
      columnGap: 2,
    }}
  />
  </Box>
</Box>  
       

        <ImageMiddle
          bgPosition="50%"
          height="70vh"
          bgImage={assetUrl("middle-image", 1)}
        ></ImageMiddle>
        <Box
          component="section"
          sx={{
            width: "100%",
            backgroundColor: BG_SECTION,
            px: 3,
            py: {
              xs: 8,
              sm: 10,
            },
          }}
        >
          {/* Título */}
          <Stack alignItems="center" spacing={1} mb={5}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                },
                color: TEXT_PRIMARY,
              }}
            >
              Celebremos juntos
            </Typography>

            <Box
              sx={{
                width: {
                  xs: "180px",
                  sm: "230px",
                },
                height: "auto",
                mx: "auto",
                my: 3,
              }}
            >
              <Box
                component="img"
                src={assetUrl("ornament")}
                alt=""
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Stack>

          {/* Cards */}
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={{
              xs: 4,
              md: 5,
            }}
            justifyContent="center"
            alignItems="center"
          >
            {eventCards.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 330,
                  minHeight: 470,
                  mx: "auto",
                  px: {
                    xs: 3,
                    sm: 4,
                  },
                  py: 4.5,

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",

                  backgroundColor: BG_MAIN,

                  border: `1px solid ${GOLD}`,

                  // Arco superior
                  borderTopLeftRadius: "165px",
                  borderTopRightRadius: "165px",

                  overflow: "hidden",
                }}
              >
                {/* Arco decorativo interior */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    right: 12,
                    height: 150,

                    border: `1px solid ${GOLD}`,
                    borderBottom: "none",

                    borderTopLeftRadius: "150px",
                    borderTopRightRadius: "150px",

                    opacity: 0.55,
                    pointerEvents: "none",
                  }}
                />

                {/* Contenido */}
                <Stack
                  alignItems="center"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* ICONO */}
                  <Box
                    component="img"
                    src={item.icon}
                    alt=""
                    sx={{
                      width: "auto",
                      height: item.iconSize,
                      objectFit: "contain",
                      mt: 1,
                      mb: 3,
                    }}
                  />

                  {/* TÍTULO */}
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: {
                        xs: "1.8rem",
                        sm: "2rem",
                      },
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: BG_ACCENT,
                      textAlign: "center",
                      lineHeight: 1.35,
                      maxWidth: 260,
                    }}
                  >
                    {item.eventName}
                  </Typography>

                  {/* Línea */}
                  <Box
                    sx={{
                      width: 55,
                      height: "1px",
                      backgroundColor: GOLD,
                      my: 2.5,
                    }}
                  />

                  {/* FECHA */}
                  <Typography
                    sx={{
                      fontFamily: '"Lora", serif',
                      fontWeight: 700,
                      color: BUTTON_PRIMARY,
                      textAlign: "center",
                      lineHeight: 1.6,
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.locationName}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Lora", serif',

                      color: TEXT_PRIMARY,
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.address}
                  </Typography>

                  {/* HORA */}
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontFamily: '"Lora", serif',

                      color: TEXT_PRIMARY,
                      textAlign: "center",
                    }}
                  >
                    {dayjs(item.date).format("hh:mm")}
                  </Typography>
                  {item.priest && (
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontFamily: '"Lora", serif',
                        fontSize: "0.95rem",
                        color: TEXT_PRIMARY,
                        textAlign: "center",
                      }}
                    >
                      <b>Celebrada por:</b> {item.priest}
                    </Typography>
                  )}

                  {/* BOTÓN */}
                  <Button
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LocationOnOutlinedIcon />}
                    sx={{
                      mt: 2,
                      pt: 1.1,
                      pb: 1.1,
                      px: 3,

                      minWidth: 175,

                      borderRadius: "30px",

                      backgroundColor: BG_ACCENT,
                      color: "#FFFFFF",

                      fontFamily: '"Lora", serif',
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",

                      "&:hover": {
                        backgroundColor: "#4D1620",
                      },

                      "& .MuiSvgIcon-root": {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    VER UBICACIÓN
                  </Button>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box p={2}>
            <Typography
              textAlign={"center"}
              className={`${BODY_TYPO}`}
              sx={{
                color: BG_DARK,
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
                title="XV Kate Alejandra"
                startDate="20261010T160000"
                endDate="20261011T010000"
                location="Templo Expiatorio/Hacienda las minitas"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            minHeight: {
              xs: "520px",
              sm: "600px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",

            backgroundImage: `url(${assetUrl("gallery", 4)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },
            py: {
              xs: 8,
              sm: 10,
              md: 12,
            },
          }}
        >
          <CustomizedTimeline {...timelineData}></CustomizedTimeline>
        </Box>

        <ImageMiddle
          bgPosition="50%"
          height="70vh"
          bgImage={assetUrl("middle-image", 2)}
        ></ImageMiddle>
         <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: "650px",
          sm: "720px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: BG_SECTION,
        px: {
          xs: 3,
          sm: 5,
        },
        py: {
          xs: 8,
          sm: 10,
        },
      }}
    >
      {/* ✦ Decoración superior */}
      

      {/* Contenido */}
      <Stack
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        {/* TÍTULO */}
        <Typography
        className={MAIN_TYPO}
          sx={{
           
            fontSize: {
              xs: "2.5rem",
              sm: "2.5rem",
            },
            fontWeight: 400,
            color: BG_DARK,
            lineHeight: 1.2,
          }}
        >
          Código Vestimenta
        </Typography>

        {/* Subtítulo */}
        <Typography
          sx={{
            mt: 1.5,
            fontFamily: '"Lora", serif',
           
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            // color: GOLD,
          }}
        >
          Vestimenta formal
        </Typography>
         <Typography
          sx={{
            mt: 1.5,
            fontFamily: '"Lora", serif',
           
          
            // color: GOLD,
          }}
        >
          Para mantener la armonía y esencia de nuestra celebración, les pedimos amablemente evitar los tonos beige, guinda y dorado.
        </Typography>


        {/* ANTIFAZ */}
        <Box
          sx={{
            width: {
              xs: "280px",
              sm: "360px",
            },
            mt: {
              xs: 4,
              sm: 5,
            },
            mb: {
              xs: 3,
              sm: 4,
            },
          }}
        >
          <Box
            component="img"
            src={assetUrl("ornament", 2)}
            alt="Antifaz decorativo"
            sx={{
              display: "block",
              width: "100%",
              height: "auto",

              // Si el PNG tiene un poco de espacio alrededor,
              // ayuda a integrarlo visualmente.
              filter: "drop-shadow(0 8px 12px rgba(61, 17, 27, 0.12))",
            }}
          />
        </Box>

        {/* FRASE */}
        <Typography
          sx={{
            maxWidth: 450,
            fontFamily: '"Playfair Display", serif',
            
            fontStyle: "italic",
            lineHeight: 1.6,
            color: BG_ACCENT,
          }}
        >
          ¿Te animas a darle un toque de misterio a la noche?
        </Typography>

        {/* TEXTO */}
        <Typography
          sx={{
            maxWidth: 400,
            mt: 2,
            fontFamily: '"Lora", serif',
           
            lineHeight: 1.8,
            color: TEXT_PRIMARY,
          }}
        >
         Trae tu antifaz (opcional)
        </Typography>

        {/* SEPARADOR */}
         <Box
                    sx={{
                      width: 100,
                      height: "1px",
                      backgroundColor: GOLD,
                      my: 2.5,
                    }}
                  />
      </Stack>

      {/* ✦ Detalles decorativos muy sutiles */}
      
    </Box>
        <div
          style={{
            backgroundColor: BG_DARK,
            padding: "50px 20px",
          }}
        >
          <Grid container justifyContent="center" padding={2} bgcolor={BG_MAIN}>
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
                    <Stack
                      spacing={3}
                      alignItems="center"
                      textAlign="center"
                      p={2}
                    >
                      <Typography
                        fontSize={"2.5rem"}
                        className={MAIN_TYPO}
                        color={BUTTON_PRIMARY}
                      >
                        Lluvia de sobres
                      </Typography>
                      <Box
                        sx={{
                          width: {
                            xs: "180px",
                            sm: "230px",
                          },
                          height: "auto",
                          mx: "auto",
                          my: 3,
                          display:"flex",
                          justifyContent:"center"
                        }}
                      >
                        <Box
                          component="img"
                          src={assetUrl("ornament")}
                          alt=""
                          sx={{
                            display: "block",
                            width: "70%",
                            height: "auto",
                          }}
                        />
                      </Box>
                      <Typography
                        maxWidth={650}
                        className={BODY_TYPO}
                        lineHeight={1.5}
                        color={TEXT_PRIMARY}
                      >
                        Tu presencia será el regalo más valioso para mí.
                        <br />
                        Si además deseas obsequiarme un detalle, con mucho
                        cariño agradeceré que sea en sobre.
                      </Typography>
                      <Box
                        component="img"
                        src={assetUrl("icon", 7)}
                        alt="Sobre"
                        sx={{
                          width: { xs: 150, md: 200 },
                        }}
                      />
                    </Stack>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
         <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            minHeight: {
              xs: "520px",
              sm: "600px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexDirection:"column",

            backgroundImage: `url(${assetUrl("gallery", 3)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },
            py: {
              xs: 8,
              sm: 10,
              md: 12,
            },
          }}
        >       
        <RSVPForm
          textColor={TEXT_PRIMARY}
          colorButton={TEXT_PRIMARY}
          bgColor={"rgb(245, 240, 232,.8)"}
          mainTypo={MAIN_TYPO}
          bodyTypo={BODY_TYPO}
          count={1}
          color={BUTTON_PRIMARY}
          
          invitationId={INVITATION_ID}
          qrActive={false}
          classButtonName="btn-gold"
          dateLine={RSVP_DATE_LINE}
          fontSize="2.5rem"
          numberInWords
          
        ></RSVPForm>
      

       <Paper
        elevation={0}
        sx={{
            width: "100%",
            maxWidth: 470,
            bgcolor: "rgb(245, 240, 232,.8)",
            p: { xs: 4, md: 5 },
            borderRadius: 0,
            boxShadow: "0 18px 45px rgba(0,0,0,.08)",
            position: "relative",
            overflow: "hidden",
            mt:3,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        }}
    >
        {/* Título */}
        <Grid paddingBottom={2}>
          <Fade direction="up">
            <Adornment image={assetUrl("ornament")} width={"150px"} />
          </Fade>
        </Grid>
         <Typography
            className={SECOND_TYPO}
            sx={{
                color:TEXT_PRIMARY,
                textAlign: "center",
                
                lineHeight: 1.9,
                mb: 2,
                          
                            fontSize:"1rem",
            }}
        >
            
      
              Con mucho cariño, hemos decidido que esta celebración sea exclusivamente para adultos. Agradecemos tu comprensión y esperamos disfrutar contigo de una velada inolvidable.
        </Typography>
         <Box
         sx={{
           display:"flex",
       
            justifyContent:"center"
         }}
          >
        <Box
                component="img"
                src={assetUrl("ornament")}
                alt="AJA"
                sx={{
                    width: { xs: 150, sm: 250, md: 350 },
                    mb: { xs: 1.5, md: 2 },
                    opacity:.8
                }}
                />
                </Box>   
        </Paper>
          
        
        </Box>        
          <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: BG_ACCENT,
        color:GOLD_LIGHT,
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: {
          xs: 8,
          sm: 10,
          md: 12,
        },
        overflow: "hidden",
      }}
    >
      {/* Título */}
      <Stack
        alignItems="center"
        spacing={1}
        sx={{
          mb: {
            xs: 4,
            sm: 5,
          },
          px:2
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
           color:GOLD_LIGHT,
            fontWeight: 400,
          
            textAlign: "center",
          }}
        >
 Gracias por acompañarnos a celebrar estos quince años de vida de nuestra hija Kate Alejandra.
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
           color:GOLD_LIGHT,
            fontWeight: 400,
          
            textAlign: "center",
            fontStyle:"italic"
          }}
        >
         
         ¡Está fiesta no te la puedes perder!
        </Typography>
          <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
           
            fontWeight: 400,
           color:GOLD_LIGHT,
            textAlign: "center",
          }}
        >
Los esperamos para bailar, celebrar y disfrutar esta gran noche.        </Typography>
        
      </Stack>

      {/* Galería */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          mx: "auto",

          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
          },

          gap: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },
        }}
      >
        {galleryPhotos.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              aspectRatio: "2 / 3",

              overflow: "hidden",

              borderRadius: {
                xs: "14px",
                sm: "18px",
              },

              backgroundColor: "#E8D8D2",

              boxShadow: "0 4px 15px rgba(33, 25, 26, 0.08)",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Kate Alejandra XV - fotografía ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                display: "block",

                objectFit: "cover",

                transition: "transform 0.5s ease",

                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            />
          </Box>
        ))}
      </Box>
      <Grid paddingBottom={2} mt={3}>
          <Fade direction="up">
            <Adornment image={assetUrl("ornament")} width={"150px"} />
          </Fade>
        </Grid>
    </Box>
       
        <div style={{ height: 100 }}></div>
        
        <FooterInvites bgColor={BG_MAIN} color={TEXT_PRIMARY}></FooterInvites>
      </Box>
    </div>
  );
};
export default XVKate;

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { GiftListProps } from "../../models/component/giftList";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from "@mui/material/Grid2";
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, {
  MusicFabPlayerHandle,
} from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Button, Paper,Typography } from "@mui/material";

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

import dayjs from "dayjs";
import { t } from "i18next";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { GOLD } from "./XVCamilaFernanda";

const INVITATION_ID = 50;
const MEDIA_KEY = "boda-berenice-y-franco";
const EMPTY_ASSET =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";

const BG_MAIN = "#F8F3EB"; // Marfil cálido
const BG_SECTION = "#E8D8C8"; // Nude suave
const BG_ACCENT = "#F1E7DC"; // Beige crema


// 🖋 TEXTOS
const TEXT_PRIMARY = "#514239"; // Café cálido
const TEXT_SECONDARY = "#8B7462"; // Café topo


// ✨ DORADO / BRONCE
const GOLD_PRIMARY = "#A77C55"; // Bronce suave
const BUTTON_PRIMARY = "#A77C55"; // Botones principales

// 🤎 NUDE / BEIGE
const TAUPE_PRIMARY = "#B99B86"; // Topo rosado

// ✨ DETALLES
const BORDER_COLOR = "#DCCABB"; // Bordes beige
const SHADOW_COLOR = "rgba(81, 66, 57, 0.12)";

// ✨ TÍTULOS
const TITLE_COLOR = "#8B7462"; // Café topo
const TITLE_ON_DARK = "#F8F3EB"; // Marfil sobre fotografía oscura


const MAIN_TYPO = "eyesome";
const SECONDARY_TYPO = "cormorant-garamond-400 italic";
const BODY_TYPO = "montserrat-400 ";
const URL_SONG = `${URL_REPO}canciones/Unconditionally-KatyPerryPiano.mp3`;

const COUNTDOWN_DATE = new Date(2026, 10, 28);
const RSVP_DATE_LINE = new Date(2026, 10, 10);
const BG_GRADIENT_ROMANTIC =
  "linear-gradient(180deg, #DCC5B2 0%, #EDE0D4 50%, #F8F3EB  100%)";
const calendarButtonProps = {
  variant: "outlined" as const,
  sx: {
   mt: 1,
        px: 1.2,
        py: 0.4,
        borderRadius: "24px",
        borderColor: BORDER_COLOR,
        color: TEXT_SECONDARY,
    
       
        fontWeight: 400,
        textTransform: "none",
        whiteSpace: "nowrap",
        "& .MuiButton-startIcon": {
          mr: 0.5,
        },
        "&:hover": {
          borderColor: GOLD_PRIMARY,
          backgroundColor: BG_ACCENT,
        },
  },
};


const WeddingBerenice = () => {
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
      eventName: "Ceremonia Religiosa",
      date: new Date(2026, 10, 6, 17, 0, 0),
      image:assetUrl("church"),
      locationName: "Catedral Metropolitana de Hermosillo",
      address: "Blvr. Miguel Hidalgo S/N, Centro Norte, Hermosillo, Son.",
      size: 12,
      color: TEXT_PRIMARY,
      mainTypo: SECONDARY_TYPO,
      bodyTypo: BODY_TYPO,
      href: "https://maps.app.goo.gl/wN371npwWRjtWaxQ7",
      colorButton: BUTTON_PRIMARY,
      colorIcon: TEXT_PRIMARY,
      fontSize: "2rem",
      borderSquare: true,
    },
    {
      bgColor: "white",
      image:assetUrl("reception"),
      eventName: "Civil  - Recepción",
      date: new Date(2026, 10, 6, 20, 0, 0),
      locationName: "El Jito Eventos",
      address: "Cjon. Rosales S/N, El Jito, 83280 Hermosillo, Son.",
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
    giftIcon: assetUrl("icon", 7),
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
    bankIconStart: assetUrl("icon", 7),
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
    colorPrimary: BUTTON_PRIMARY ,
    colorTitle:BUTTON_PRIMARY ,
    colorBody:BUTTON_PRIMARY ,
    fontSize: "50px",
    bgColor: BG_SECTION,
    events: [
      {
        eventName: "Ceremonia religiosa",
        date: new Date(2025, 10, 16, 17, 0, 0),
        icon: assetUrl("icon", 0),
      },
      {
        eventName: "Ceremonia Civil",
        date: new Date(2025, 10, 16, 20, 0, 0),
        icon: assetUrl("icon", 1),
      },
      {
        eventName: "Coctel de Bienvenida",
        date: new Date(2025, 10, 16, 20, 30, 0),
        icon: assetUrl("icon", 2),
      },
      {
        eventName: "Recepción",
        date: new Date(2025, 10, 16, 21, 0, 0),
        icon: assetUrl("icon", 3),
      },
      {
        eventName: "Vals",
        date: new Date(2025, 10, 16, 22, 0, 0),
        icon: assetUrl("icon", 4),
      },
      {
        eventName: "Cena",
        date: new Date(2025, 10, 16, 20, 30, 0),
        icon: assetUrl("icon", 5),
      },
      {
        eventName: "Fin del evento",
        date: new Date(2025, 10, 16, 2, 0, 0),
        icon: assetUrl("icon", 6),
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
    document.title = "Boda Berenice y César";
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
        envelopeColor={TAUPE_PRIMARY}
        overlayColor={BG_SECTION }
        envelopeHighlight={BG_SECTION }
        shadowColor={BG_SECTION }
      />

      {/* INVITACIÓN */}
      <Box>
        <CoverInline
          ourWeddingStart={true}
          weddingDate="28.NOV.26"
          bgImage={assetUrl("cover", 0)}
          brideName="Berenice"
          symbolr={"&"}
          groomName={"César"}
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
        background: BG_GRADIENT_ROMANTIC,
        px: { xs: 2.5, sm: 4 },
        py: 8,
        overflow: "hidden",
        position:"relative"
      }}
    >
      {/* IMÁGENES */}
    <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: -55,
              zIndex: 0,
              opacity: 0.75,
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={assetUrl("ornament")}
                style={{
                  height: 190,
                  transform: "rotate(130deg)",
                }}
              />
            </Fade>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              right: -55,
              zIndex: 0,
              opacity: 0.75,
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={assetUrl("ornament",1)}
                style={{
                  height: 190,
                  transform: "rotate(-90deg)",
                }}
              />
            </Fade>
          </Box>

      {/* FRASE */}
      <Box
        sx={{
          maxWidth: 390,
          mx: "auto",
          mt: 12,
          mb:12,
          textAlign: "center",
        }}
      >
        <Typography
        className={SECONDARY_TYPO}
          sx={{
           
            fontSize: {
              xs: "28px",
              sm: "32px",
            },
            lineHeight: 1.25,
            fontWeight: 400,
            color: TEXT_PRIMARY ,
          }}
        >
         Elegirnos cada día nos trajo hasta aquí, y hoy decidimos seguir caminando juntos con un ‘sí’ ante Dios para toda la vida.
        </Typography>

      </Box>
    </Box>
        <ImageMiddle
          bgPosition="50%"
          height="45vh"
          bgImage={assetUrl("middle-image", 0)}
          bgPositionY="50%"
        ></ImageMiddle>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box padding={2}  sx={{ background: BG_MAIN }}>
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
                        Con la bendición de Dios y nuestros padres
                      </Typography>
                    </Fade>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: TEXT_SECONDARY , fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                         Concepción Morales Luna y Rigoberto Franco Peraza
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
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // py: 2,
    // px: 3,
  }}
>
  <Box
    component="img"
    src={assetUrl("ornament",2)}
    alt=""
    aria-hidden="true"
    sx={{
      display: "block",
      width: "100%",
      maxWidth: 250,
      height: "auto",
      objectFit: "contain",
      opacity: 0.8,
    }}
  />
</Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                    <Fade direction="up">
                      <Typography
                        sx={{ color: TEXT_SECONDARY, fontSize: "1.5rem" }}
                        variant="h4"
                        textAlign={"center"}
                        className={SECONDARY_TYPO}
                      >
                     
                        César Castro Salmerón y Monserrat Ortiz García
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
        
        <div style={{ backgroundColor: BG_ACCENT , padding: "50px 20px" }}>
          <Grid container spacing={2} padding={4}>
            {eventCards.map((item, index) => (
                <Box
                key={index}
  sx={{
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: 2,
    alignItems: "center",
    mb: 3,
  }}
>
  {/* Fotografía */}
  <Box
    component="img"
    src={item.image}
    alt={item.eventName}
    sx={{
      width: "120px",
      height: 200,
      objectFit: "cover",
      borderRadius: "2px",
    }}
  />

  {/* Información del evento */}
  <Box sx={{ minWidth: 0 }}>
    

    <Typography
    className={BODY_TYPO}
      sx={{
      
        fontSize: ".8rem",
        letterSpacing: "0.16em",
        color: TITLE_COLOR,
        textTransform: "uppercase",
        mb: 0.5,
      }}
    >
      {item.eventName}
    </Typography>

    <Typography
    className={SECONDARY_TYPO}
      sx={{
        
        fontSize: "1.5rem",
        fontWeight: 600,
        color: TEXT_PRIMARY,
        lineHeight: 1.2,
        mb: 0.5,
      }}
    >
      {item.locationName}
    </Typography>

    <Typography
    className={BODY_TYPO}
      sx={{
      
        fontSize: "1rem",
        color: TEXT_SECONDARY,
        lineHeight: 1.6,
        whiteSpace: "pre-line",
      }}
    >
      {item.address}
      {"\n"}
      {dayjs(item.date).format("hh:mm a")}
    </Typography>

    <Button
      component="a"
      className={BODY_TYPO}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<LocationOnOutlinedIcon />}
      variant="outlined"
      
      sx={{
        mt: 1,
        px: 1.2,
        py: 0.4,
        borderRadius: "24px",
        borderColor: BORDER_COLOR,
        color: TEXT_SECONDARY,
        
       
        fontWeight: 400,
        textTransform: "none",
        whiteSpace: "nowrap",
        "& .MuiButton-startIcon": {
          mr: 0.5,
        },
        "&:hover": {
          borderColor: GOLD_PRIMARY,
          backgroundColor: BG_ACCENT,
        },
      }}
    >
      Ver en Google Maps
    </Button>
  </Box>
</Box>
            ))}
          </Grid>
          <Box>
            <Typography
              textAlign={"center"}
              className={`${SECONDARY_TYPO}`}
              sx={{
                color: TITLE_COLOR ,
                fontSize: "1.5rem",
                
                textTransform: "uppercase",
                mb: 1,
                fontStyle: "italic",
              }}
            >
              No queremos que te pierdas este día
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <CalendarButton
                title="Boda de Berenice & César"
                startDate="20261128T170000"
                endDate="20261128T20000"
                location="Catedral de Hermosillo/EL Jito"
                // fileName="boda-valentina-sebastian"
                buttonProps={calendarButtonProps}
              />
            </Box>
          </Box>
        </div>
      <div style={{backgroundImage: `url(${assetUrl("background",1)})`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgb(248, 243, 224,.5)", boxShadow: `8px 8px 8px ${SHADOW_COLOR}`}} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={timelineData.colorBody} textAlign={"center"} className={`${timelineData?.bodyTypo}`}>{t("timeline.subtitle")}</Typography>
            </Fade>
           
           </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline position="alternate">
                {
                timelineData.events?.map((item,index) => (
               
                  <TimelineItem key={index}>
                     
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={item.icon} height="60"/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector  sx={{backgroundColor:timelineData.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:timelineData.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"24px"}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary}} className={`${SECONDARY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
       
   
                </Timeline>
            </Grid>	
      </Grid>
        </div>
        {/* <ImageMiddle
          bgPosition="80%"
          height="80vh"
          bgImage={assetUrl("middle-image", 1)}
          bgPositionY="50%"
        ></ImageMiddle>
         */}
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
                   
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                   <Box
            sx={{
              position: "absolute",
              top: "60%",
              left: -55,
              zIndex: 0,
              opacity: 0.75,
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={assetUrl("ornament")}
                style={{
                  height: 190,
                  transform: "rotate(130deg)",
                }}
              />
            </Fade>
          </Box>
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
                          src={assetUrl("icon", 8)}
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
                    Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, contaremos con un buzón de sobres el día del evento. <br></br>
                   
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        
        </div>
        <ImageMiddle
         bgPosition="80%"
          height="80vh"

          bgImage={assetUrl("middle-image",1)}
          bgPositionY="50%"
        ></ImageMiddle>
        <Box
        
          display="flex"
          justifyContent="center"
          sx={{
            py: 8,
             background: BG_GRADIENT_ROMANTIC ,
          }}
          position={"relative"}
        >
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              right: -55,
              zIndex: 0,
              opacity: 0.75,
            }}
          >
            <Fade direction="right" triggerOnce>
              <img
                src={assetUrl("ornament",1)}
                style={{
                  height: 190,
                  transform: "rotate(-20deg)",
                }}
              />
            </Fade>
          </Box>
          <Box
            sx={{
              width: {
                xs: "88%",
                sm: 340,
              },
              background: "inherit" ,
              // borderRadius: "180px 180px 0 0",
              px: 4,
              py: 6,
              textAlign: "center",
              boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
            }}
          >
            <Typography
            className={BODY_TYPO}
              sx={{
                
                color: TEXT_PRIMARY,
                
                
                
                lineHeight: 1.8,
              }}
            >
              Hemos
          
              Reservado
            </Typography>

            <Typography
            className={SECONDARY_TYPO}
              sx={{
                mr:3,
                color: TEXT_PRIMARY,
                fontSize: {
                  xs: "6rem",
                  md: "7rem",
                },
                
                m: 2,
              }}
            >
              {guest ? guest.totalAssigned : invitedGuests}
            </Typography>

            <Typography
            marginTop={4}
            className={BODY_TYPO}
              sx={{
                
                color: TEXT_PRIMARY,
                

                
              }}
            >
              Lugares para
           
              celebrar juntos
            </Typography>
            <Typography
            className={MAIN_TYPO}
              sx={{
                
                color: TEXT_PRIMARY,
                
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
              textColor={TEXT_PRIMARY}
              colorButton={TEXT_PRIMARY}
              bgColor={"transparent" }
              mainTypo={SECONDARY_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              color={TEXT_PRIMARY}
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
                  //  boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
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
                      color:GOLD_PRIMARY ,
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
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // py: 2,
    // px: 3,
  }}
>
  <Box
    component="img"
    src={assetUrl("ornament",2)}
    alt=""
    aria-hidden="true"
    sx={{
      display: "block",
      width: "100%",
      maxWidth: 250,
      height: "auto",
      objectFit: "contain",
      opacity: 0.8,
    }}
  />
</Box>

                  <Typography
                  className={MAIN_TYPO}
                    sx={{
                      color:GOLD,
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
               <Box
  component="section"
  sx={{
    backgroundColor: TAUPE_PRIMARY  ,
    px: { xs: 3, sm: 5 },
    py: { xs: 3, sm: 11 },
    textAlign: "center",
  }}
>
          <Box
  sx={{
    position: "relative",
    width: "100%",
    maxWidth: 420,
    height: 390,
    mx: "auto",
    my: 4,
    backgroundColor: TAUPE_PRIMARY,
  }}
>
  {/* Fotografía 1 */}
  <Box
    component="img"
    src={galleryImages[1]}
    alt=""
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "58%",
      height: 180,
      objectFit: "cover",
      borderRadius: "18px",
      boxShadow: "0 4px 14px rgba(81,66,57,0.08)",
    }}
  />

  {/* Fotografía 2 */}
  <Box
    component="img"
    src={galleryImages[0]}
    alt=""
    sx={{
      position: "absolute",
      top: 105,
      right: 0,
      width: "58%",
      height: 180,
      objectFit: "cover",
      borderRadius: "18px",
      boxShadow: "0 4px 14px rgba(81,66,57,0.08)",
    }}
  />

  {/* Fotografía 3 */}
  <Box
    component="img"
    src={galleryImages[2]}
    alt=""
    sx={{
      position: "absolute",
      top: 210,
      left: 0,
      width: "58%",
      height: 180,
      objectFit: "cover",
      borderRadius: "18px",
      boxShadow: "0 4px 14px rgba(81,66,57,0.08)",
    }}
  />
</Box>

  <Box sx={{ maxWidth: 360, mx: "auto" }}>
    <Typography
     className={SECONDARY_TYPO}
      component="p"
      sx={{
       
        fontSize: { xs: "31px", sm: "36px" },
        fontWeight: 400,
        lineHeight: 1.25,
        color: TITLE_ON_DARK ,
        m: 0,
      }}
    >
      El amor nos trajo hasta aquí; compartirlo contigo lo hace aún más especial
    </Typography>
  </Box>

  <Box
    sx={{
      width: 45,
      height: "1px",
      backgroundColor: TITLE_ON_DARK ,
      mx: "auto",
      my: 4,
      opacity: 0.7,
    }}
  />

  <Typography
  className={MAIN_TYPO}
    sx={{
      
      fontSize: { xs: "2.5rem", sm: "3.5rem" },
      fontWeight: 400,
      lineHeight: 1,
      color: TITLE_ON_DARK ,
    }}
  >
    Berenice & César 
  </Typography>

  <Typography
  className={BODY_TYPO}
    sx={{
      mt: 2,
     
      fontSize: ".8rem",
      letterSpacing: "3px",
      color: TITLE_ON_DARK ,
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
export default WeddingBerenice;

import { Fade } from "react-awesome-reveal";


import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect,  useRef, useState } from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";

import EditorialCountdown from "../../components/EditorialCountdown";
import { getAssets } from "../../services/mediaApiClient";
import type { InvitationAsset } from "../../models/invitationAsset";
import CustomButton from "../../components/CustomButton/CustomButton";
import CalendarButton from "../../components/CalendarButton/CalendarButton";


import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";

import RSVPSimple from "../../components/RSVP/RSVPSimple";
import {
  AccessTimeRounded,
} from "@mui/icons-material";
import dayjs from "dayjs";
import { useSnackbar } from "../../context/snackbarContext";
export const BG_MAIN = "#F6EFE7"; // Marfil cálido - fondo principal
export const BG_SECTION = "#FFFCF8"; // Marfil claro - tarjetas y secciones
export const BG_ALT = "#EDE2D7"; // Beige nude - secciones alternas
export const BG_ACCENT = "#E8D3C580"; // Nude translúcido - bloques decorativos


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#B9846A"; // Caramelo - color principal
export const PRIMARY_DARK = "#80634F"; // Café suave - acentos oscuros
export const PRIMARY_LIGHT = "#E8D3C5"; // Beige nude - detalles claros


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";
export const IVORY = "#F6EFE7";
export const BEIGE = "#E8D3C5";

export const TEXT_PRIMARY = "#80634F"; // Café suave
export const TEXT_SECONDARY = "#9A8170"; // Taupe cálido

export const GOLD = "#C7A982"; // Dorado beige sutil
export const BORDER = "#E2D3C5"; // Beige claro
export const DIVIDER = "#D8C4B3"; // Nude medio


// =========================
// Effects
// =========================

export const SHADOW =
  "0px 10px 30px rgba(128,99,79,.10)";

export const MAGIC_GLOW =
  "0 0 30px rgba(185,132,106,.18)";

export const STORY_DIVIDER = "#D8C4B3";
const MAIN_TYPO = "boheme-floral";
const SECOND_TYPO = "playfair-display-400 ";
const BODY_TYPO = "raleway-400";

const MEDIA_KEY = "baby-shower-amelia";
const EMPTY_ASSET = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";


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
const COUNTDOWN_DATE = new Date(2026, 10, 27);

const INVITATION_ID = 56;
const bankDetails = [
     {
      numbers: [
         {
          numberType: "Tarjeta",
          number: "4153 3139 7610 0987",
        },
        
        
      ],
      bank: "BBVA ",
      name: "Alejandra Manzanares ",
   
    },
    
];
const BabyShowerAmelia = () => {
  
  const { showSnackbar } = useSnackbar();
  
  const [showIntro, setShowIntro] = useState(true);
  const [cloudAssets, setCloudAssets] = useState<InvitationAsset[]>([]);

  useEffect(() => {
    getAssets(MEDIA_KEY).then(setCloudAssets).catch(() => setCloudAssets([]));
    
  }, []);

  const assetUrl = (kind: string, index = 0) =>
    cloudAssets.filter((asset) => asset.assetKind === kind)[index]?.secureUrl ?? EMPTY_ASSET;

  const eventCards: EventCardProps[] = [
    { eventName: "", date: new Date(2026, 3, 11, 17, 0, 0),
      endDate: new Date(2026, 3, 11, 21, 0, 0),
     locationName: "Jardín Lucrecia",
     address: "Av. Lucrecia Ruiz de Ayón 49-b, San Luis Rey, 83106 Hermosillo, Son.", 
     size: 6, color: PRIMARY_DARK,
      icon: assetUrl("reception",0), 
      iconSize: "180px",
       mainTypo: MAIN_TYPO, 
       bodyTypo: BODY_TYPO, 
       href: "https://maps.app.goo.gl/aktrznGBPV4C38qm8", 
       fontSize: "45px",
        colorButton: PRIMARY,
         bgColor: BG_MAIN },
  ];

 
   const musicRef = useRef<MusicFabPlayerHandle>(null);
   const URL_SONG = `${URL_REPO}canciones/TerenceBlanchar -MaBelleEvangeline.mp3`;
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
      <EnvelopeIntro
        open={showIntro}
        onEnter={handleEnter}
        // musicRef={musicRef}
        sealImage={assetUrl("seal")}
        envelopeColor={BG_ACCENT}
        overlayColor={BG_SECTION}
        envelopeHighlight={PRIMARY_LIGHT}
        shadowColor={SHADOW}
      ></EnvelopeIntro>
     <Box
      component="section"
      sx={{
        minHeight: "80svh",
        width: "100%",
        position: "relative",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: BG_ALT,

        px: { xs: 2, sm: 3 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* ========================================= */}
      {/* CONTENIDO */}
      {/* ========================================= */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          width: "100%",
          maxWidth: "430px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",
        }}
      >
        {/* ========================================= */}
        {/* MIS XV AÑOS */}
        {/* ========================================= */}


        {/* ========================================= */}
        {/* ARCO + FOTO + FLORES */}
        {/* ========================================= */}

        <Box
          sx={{
            position: "relative",
            
            width: {
              xs: "82vw",
              sm: "330px",
              md: "360px",
            },

            aspectRatio: "0.70",

            mb: 1,
          }}
        >
          {/* ===================================== */}
          {/* FLORES */}
          {/* ===================================== */}

          <Box
            component="img"
            src={assetUrl("ornament",0)}
            alt=""
            sx={{
              position: "absolute",

              /*
               * Hacemos que la ilustración sea
               * ligeramente más grande que el arco
               */
              top: "-40%",
              left: "55px",

              width: "calc(50% + 70px)",
              height: "calc(100% + 70px)",

              objectFit: "contain",

              zIndex: 4,

              pointerEvents: "none",

              /*
               * Importante:
               * las flores no deben afectar
               * la foto
               */
            }}
          />

          {/* ===================================== */}
          {/* ARCO EXTERIOR */}
          {/* ===================================== */}

          <Box
            sx={{
              position: "absolute",

              inset: 0,
              bgcolor:BG_MAIN,
              border: `1px solid ${GOLD}`,

              borderRadius: "180px 180px 0 0",

              zIndex: 2,

              pointerEvents: "none",
            }}
          />

          {/* ===================================== */}
          {/* SEGUNDO ARCO */}
          {/* ===================================== */}

          <Box
            sx={{
              position: "absolute",

              inset: "6px",

              border: `1px solid ${GOLD}`,

              borderRadius: "174px 174px 0 0",

              zIndex: 2,

              pointerEvents: "none",
            }}
          />

            
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "46%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: 2.5,
            gap: 0.75,
          }}
        >
        <Typography
  className={SECOND_TYPO}
  sx={{
    fontSize: {
      xs: "2.2rem",
      md: "2.4rem",
    },
    lineHeight: 1.05,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TEXT_PRIMARY,
  }}
>
  BABY SHOWER
</Typography>
        <Typography
        className={MAIN_TYPO}
          component="h1"
          sx={{
            fontSize: {
              xs: "5rem",
              sm: "5rem",
              md: "5.2rem",
            },

            fontWeight: 400,

            lineHeight: 0.85,

            color: PRIMARY,

            whiteSpace: "nowrap",
          }}
        >
         Amelia
</Typography>
        {/* ========================================= */}
        {/* ORNAMENTO */}
        {/* ========================================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 45,
              height: "1px",

              backgroundColor: GOLD,

              opacity: 0.7,
            }}
          />

          <Box
            sx={{
              width: 6,
              height: 6,

              border: `1px solid ${GOLD}`,

              transform: "rotate(45deg)",
            }}
          />

          <Box
            sx={{
              width: 45,
              height: "1px",

              backgroundColor: GOLD,

              opacity: 0.7,
            }}
          />
        </Box>

        {/* ========================================= */}
        {/* FECHA */}
        {/* ========================================= */}
<Typography
  className={BODY_TYPO}
  sx={{
    fontSize: {
      xs: "1.15rem",
      md: "1.3rem",
    },

    fontWeight: 500,
    letterSpacing: "0.2em",
    color: TEXT_PRIMARY,
    textTransform: "uppercase",
  }}
>
  27.11.2026
</Typography>
        </Box>
       
      </Box>
    </Box>
    </Box>

    

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
                // mt: 6,
                // mb: 6,
                // borderColor: PRIMARY,
                // borderWidth: "2px",
                // borderStyle: "solid",
                // px: 3,
                // py: 3,
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
                  <Box
                    component="img"
                    src={assetUrl("ornament", 6)}
                    sx={{
                      width: { xs: 150, md: 250 },
                    
                    }}
                  />
                </Fade>
              </div>
             
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "calc(3% - 100px)",
                  left: "calc(5% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={assetUrl("ornament")} style={{ width: "100px" }} />
                </Fade>
              </div> */}

              <Grid container spacing={2} justifyContent="center" mb={3}>
               
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${SECOND_TYPO} italic`}
                      mb={2}
                      lineHeight={1.5}
                    >
                     Antes de conocerte, ya eras el sueño más bonito de nuestros corazones.
                    </Typography>

                    <Typography
                      className={BODY_TYPO}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: TEXT_PRIMARY,
                      }}
                    >
                     Entre ilusiones, sueños y mucho amor, esperamos la llegada de nuestra pequeña <i> Amelia.</i>
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${BODY_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                    >
                     Hoy queremos compartir esta alegría y celebrar junto a quienes más queremos.
                    </Typography>

                    <Typography
                     className={`${SECOND_TYPO} italic`}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: TEXT_PRIMARY,
                      }}
                    >
                    Con amor, sus papás:
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO}`}
                      sx={{
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: TEXT_PRIMARY,
                      }}
                    >
                      Alejandra y Luis Fernando
                    </Typography>
                  </Fade>
                </Grid>
               </Grid>
            </Box>
             <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <Typography
          className={BODY_TYPO}
          sx={{
            fontWeight: 500,
            letterSpacing: "0.4em",
            color: TEXT_SECONDARY,
          }}
        >
          VIERNES
        </Typography>

        <Typography
          className={SECOND_TYPO}
          sx={{
            fontSize: {
              xs: "7rem",
              md: "8rem",
            },
            lineHeight: 0.95,
            color: PRIMARY_DARK,
          }}
        >
          27
        </Typography>

        <Typography
          className={BODY_TYPO}
          sx={{
            fontSize: "0.95rem",
            fontWeight: 500,
            letterSpacing: "0.35em",
            color: TEXT_PRIMARY,
             mt: 2,
          }}
        >
          NOVIEMBRE
        </Typography>

        <Typography
          className={BODY_TYPO}
          sx={{
            
            letterSpacing: "0.3em",
            color: TEXT_SECONDARY,
            mt: 0.5,
          }}
        >
          2026
        </Typography>
      </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
           background: `
  repeating-linear-gradient(
    90deg,
    #F8F2EB 0px,
    #F8F2EB 16px,
    #EFE4D9 16px,
    #EFE4D9 32px
  )
`,
          padding: "50px 20px",
          position: "relative",
          backgroundPosition: "end",
        }}
      >
       
       <Box
       sx={{
        backgroundImage:`url(${assetUrl("background",1)})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
       }}
       >
        
<EditorialCountdown
          eventDate={COUNTDOWN_DATE}
          title={{
            visibility:"hidden",
             fontSize: "0rem",
              dateFormat: "DD [de] MMMM YYYY",
          }}
          number={{
            fontFamily: '"Cormorant Garamond"',
            color: PRIMARY_DARK,
            fontSize: "3.6rem",
            fontWeight: 500,
          }}
          label={{
            fontFamily: '"Montserrat"',
            color: TEXT_PRIMARY,
            fontSize: ".72rem",
            fontWeight: 400,
            letterSpacing: ".12em",
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
       </Box>
                  
       

        
      </div>
       <Box
 id="ubicacion"
  component="section"
  sx={{
    
    position: "relative",
    minHeight: "70svh",
    overflow: "hidden",
    background: BG_SECTION,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, md: 4 },
    py: { xs: 8, md: 12 },
  }}
>
  {/* Decoración sutil de fondo */}

  
 
  <Stack
    sx={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: 500,
      alignItems: "center",
    }}
  >
    {eventCards.map((item, index) => (
      <Box
        key={index}
        sx={{
          width: "100%",
          maxWidth: 470,
          height:"50vh",
          backgroundImage:`url(${assetUrl("ornament",1)})`,
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          mt:2,
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          // boxShadow:
          //   "0 20px 45px rgba(80, 70, 70, 0.13)",

          // border: "1px solid rgba(113, 128, 120, 0.06)",

          // Si solo habrá una ubicación,
          // podemos dejarla completamente recta.
          borderRadius: 0,
        }}
      >
        {/* FOTO */}
        {/* <Box
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
        </Box> */}
        
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
              fontSize: {
                xs: "0.75rem",
                md: "0.8rem",
              },
              lineHeight: 1.65,
              
              maxWidth: 200,
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
                                mt:1,
                                fontSize: 20,
                                color: PRIMARY,
                              }}
                            />
            
                            <Typography
                            mt={1}
                            fontSize={"1rem"}
                              className={BODY_TYPO}
                              sx={{
                                color: TEXT_PRIMARY,
                                letterSpacing: ".05em",
                              }}
                            >
              {dayjs(item.date).format("hh:mm a")} - {dayjs(item.endDate).format("hh:mm a")}
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
  </Stack>
   <Box mt={2}>
                  <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                      No queremos que te pierdas este día
                      </Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                      <CalendarButton
                          title="Baby Shower Amelia"
                          startDate="20261128T173000"
                          endDate="20261128T021000"
                          location="Jardín Lucrecia"
                          
                          // fileName="boda-valentina-sebastian"
                          buttonProps={calendarButtonProps}
                          />
                  </Box>
              </Box>
             
</Box>
       
      <div
        style={{
          background: `
  repeating-linear-gradient(
    90deg,
    #F8F2EB 0px,
    #F8F2EB 16px,
    #EFE4D9 16px,
    #EFE4D9 32px
  )
`,
          //  backgroundImage:`url(${assetUrl("background")})`,
          // backgroundSize:"contain",
          // backgroundRepeat:"no-repeat",
          // backgroundPosition:"80% 30%",
          padding: "50px 20px",
        }}
      >
       
              
             
              
<Box
 sx={{
            bgcolor: BG_SECTION,
            borderRadius: 0,
            p: { xs: 2.5, sm: 4 },
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            border: "1.5px solid rgba(190,170,130,.45)",
            boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            mt: 2,
          }}
>
  <Container maxWidth="md" >
    <Stack spacing={3} alignItems="center" textAlign="center" p={2}>
      <Typography
        fontSize="3.5rem"
        className={MAIN_TYPO}
        color={TEXT_PRIMARY}
      >
        Regalo Sugerido
      </Typography>

      <Box
        component="img"
        src={assetUrl("ornament", 2)}
        alt="Sobre"
        sx={{
          width: { xs: 120, md: 110 },
        }}
      />
                     <Typography
                         variant="body1"
                            className={BODY_TYPO}
                        align="center"
                        sx={{fontSize: '1.25rem',color: PRIMARY_DARK }}

                        >
                            
                            $350 
                        </Typography>
                 
     

       {bankDetails?.map((bank, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            bgcolor: BG_ACCENT,
            borderRadius: 0,
            p: { xs: 2.5, sm: 4 },
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            border: "1.5px solid rgba(190,170,130,.45)",
            boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            mt: 2,
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            sx={{ width: "100%", minWidth: 0 }}
          >
            <Box
              component="img"
              src={assetUrl("icon", index == 0 ? 14 :12)}
              alt="Datos bancarios"
              sx={{ height: 40 }}
            />

            {bank.numbers?.map((num, numberIndex) => (
              <Box
                key={`${num.numberType}-${numberIndex}`}
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  className={BODY_TYPO}
                  sx={{
                    letterSpacing: ".18em",
                    fontSize: "1rem",
                    color: TEXT_PRIMARY,
                  }}
                >
                  {num.numberType}
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
                      letterSpacing: {
                        xs: "0.01em",
                        sm: "0.04em",
                      },
                      overflowWrap: "anywhere",
                      color: TEXT_PRIMARY,
                      textAlign: "center",
                      lineHeight: 1.1,
                      minWidth: 0,
                    }}
                  >
                    {num.number}
                  </Typography>

                  <IconButton
                    size="small"
                    aria-label={`Copiar ${num.numberType}`}
                    onClick={() => {
                      navigator.clipboard
                        .writeText(String(num.number).trim())
                        .then(() => {
                          showSnackbar("Número copiado", "success");
                        })
                        .catch(() => {
                          showSnackbar(
                            "No se pudo copiar el número",
                            "error",
                          );
                        });
                    }}
                    sx={{
                      flexShrink: 0,
                      p: { xs: 0.35, sm: 0.75 },
                    }}
                  >
                    <ContentCopyIcon
                      sx={{
                        color: TEXT_PRIMARY,
                        fontSize: {
                          xs: "1rem",
                          sm: "1.35rem",
                        },
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Typography
              className={BODY_TYPO}
              sx={{
                fontSize: "1rem",
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
    </Stack>
  </Container>

            </Box>
         <Box
          
          sx={{
            bgcolor: BG_SECTION,
            borderRadius: 0,
            p: { xs: 3, sm: 4 },
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            border: "1.5px solid rgba(190,170,130,.45)",
            boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            mt: 2,
          }}

        >
        
          <RSVPSimple 
                                colorButton={PRIMARY}
                                bgColor={"transparent"}
                                mainTypo={SECOND_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={4}
                                // dateLine={new Date(2025, 8, 30)}
                                color={PRIMARY_DARK}
                                invitationId={INVITATION_ID}
                                qrActive={false} 
                                textColor={PRIMARY_DARK} 
                                fontSize="1.5rem"                          
                                >
                                
                            </RSVPSimple>
        </Box>
      </div>

     
       <Box
      component="section"
      sx={{
        width: "100%",
        background: BG_MAIN,
        px: { xs: 3, sm: 4 },
        py: { xs: 9, md: 12 },

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* FRASE */}
      <Box
        sx={{
          maxWidth: "390px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          className={SECOND_TYPO}
          sx={{
            fontSize: {
              xs: "1.5rem",
              md: "1.8rem",
            },
            lineHeight: 1.5,
            color: TEXT_PRIMARY,
            fontStyle: "italic",
          }}
        >
          Contamos los días para este momento
          tan especial.
        </Typography>

        {/* DETALLE DECORATIVO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            my: 1,
          }}
        >
          <Box
            sx={{
              width: 35,
              height: "1px",
              backgroundColor: GOLD,
              opacity: 0.7,
            }}
          />

          <Box
            sx={{
              width: 7,
              height: 7,
              border: `1px solid ${GOLD}`,
              transform: "rotate(45deg)",
            }}
          />

          <Box
            sx={{
              width: 35,
              height: "1px",
              backgroundColor: GOLD,
              opacity: 0.7,
            }}
          />
        </Box>

        {/* CIERRE */}
        <Typography
          className={MAIN_TYPO}
          sx={{
            fontSize: {
              xs: "3.2rem",
              md: "3.8rem",
            },
            lineHeight: 1.2,
            color: PRIMARY,
          }}
        >
          Te esperamos!
        </Typography>
      </Box>
    </Box>


     
      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
    </div>
  );
};
export default  BabyShowerAmelia;

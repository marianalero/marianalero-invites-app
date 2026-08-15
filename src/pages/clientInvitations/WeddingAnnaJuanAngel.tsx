
import { GiftListProps } from "../../models/component/giftList";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { URL_REPO } from "../../config";
import { Box, CircularProgress, Divider, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import CustomButton from "../../components/CustomButton/CustomButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Grid from '@mui/material/Grid2';
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import dayjs from "dayjs";
import { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Timeline from "@mui/lab/Timeline";
import FooterInvites from "../../components/Footer/FooterInvites";

// 🎨 FONDOS
const BG_MAIN = "#F5F1E8";       // Marfil
const BG_SECTION = "#E5D1D0";    // Rosa empolvado
const BG_ACCENT = "#A3ADA3";     // Salvia


// 🖋 TEXTOS
const TEXT_PRIMARY = "#718078";  // Salvia grisáceo
const TEXT_DARK = "#59635E";     // Salvia profundo


// 🎯 BOTONES
const BUTTON_PRIMARY = "#89968E";


// ✨ DETALLES
const CHAMPAGNE = "#C7BFAF";


// ✨ TÍTULOS
const TITLE_COLOR = "#718078";


// 🐎 ESTILO
const MAIN_TYPO = "edwardian";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "manrope-400";
const URL_IMAGES = `${URL_REPO}boda/boda-ana-juan-angel/`;

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Civil y Recepción",
        date: new Date(2026, 10, 28, 21, 0, 0),
        locationName: "Jardín Casa Encantada",
        address: "Avenida San Rafael German, C.P. 83300, El Saucito",
        size: 12,
        color: CHAMPAGNE,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/4T9rcyQJTLfc7rSC8",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        image: `${URL_IMAGES}jardin.jpg`,
    },
    
];

const giftListData: GiftListProps = {
    title: "",
    titleColor : TITLE_COLOR,
    mainPhrase:"Para nosotros lo mas importante es su presencia, pero si deseas hacernos un obsequio",
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_DARK,
    bgColor: BG_SECTION,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tendremos un buzón de sobres el día del evento",
    secondPhrase: "O bien, puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TITLE_COLOR,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "CLABE INTERBANCARIA",
                    number: "014760606356755894",
                }
            ],
            bank: "Santander",
            name: "Juan Angel Cordova Salcido,Anna Cordoca Moras",
            textColor: CHAMPAGNE,
            bodyTypo: BODY_TYPO,
            bgColor: BG_MAIN,
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};

const dresscode:DressCodeProps = {
        fontSize:"3rem",
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:3,
        title:"FORMAL",
        image: `${URL_IMAGES}dresscode.png`,
      imageSize:"200px"
    
    }
const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: TEXT_PRIMARY,
    colorTitle: TEXT_PRIMARY,
    colorBody: TEXT_PRIMARY,
    fontSize: "3rem",
    bgColor: BG_ACCENT,
    events: [
         {
            eventName: "Recepción",
            date: new Date(2026, 9, 9, 16, 0, 0),
            icon: `${URL_IMAGES}iconos/9.png`,
        },
        {
            eventName: "Comida",
            date: new Date(2026, 9, 9, 16, 30, 0),
            icon: `${URL_IMAGES}iconos/10.png`,
        },
        {
            eventName: "Vals Novios",
            date: new Date(2026, 9, 9, 17, 30, 0),
            icon: `${URL_IMAGES}iconos/11.png`,
        },
        {
            eventName: "Fin del evento",
            date: new Date(2026, 9, 9, 21, 0, 0),
            icon: `${URL_IMAGES}iconos/12.png`,
        },
        // {
        //     eventName: "Posboda",
        //     date: new Date(2026, 10, 15, 15, 0, 0),
        //     icon: `${URL_IMAGES}iconos/8.svg`,
        // },
    ],
};

const WeddingAnnaJuanAngel  = () => { 
    const [isLoading, setIsLoading] = useState(true);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        let isMounted = true;
        const coverSource = isSmallScreen
            ? `${URL_IMAGES}portada.png`
            : `${URL_IMAGES}portada-horz.png`;
        const initialImages = [
            coverSource,
            `${URL_IMAGES}monograma1.png`,
            `${URL_IMAGES}sobre.png`,
        ];

        const finishLoading = () => {
            if (isMounted) setIsLoading(false);
        };

        // Solo portada, monograma y sobre bloquean la entrada. El resto se
        // descarga progresivamente después, sin saturar conexiones 4G/5G.
        const timeout = window.setTimeout(finishLoading, 3000);
        const preloadImage = (src: string) => new Promise<void>((resolve) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = src;
        });

        Promise.all(initialImages.map(preloadImage)).finally(() => {
            window.clearTimeout(timeout);
            finishLoading();
        });

        return () => {
            isMounted = false;
            window.clearTimeout(timeout);
        };
    }, [isSmallScreen]);


    const handleConfirm =async ( )=> {
       
       
            window.open(`https://wa.me/+526629366579?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20de%20Anna y Juan Angel`, '_blank');

        
    }

    if (isLoading) {
        return (
            <Box
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    backgroundColor: BG_MAIN,
                    color: TEXT_PRIMARY,
                }}
            >
                <CircularProgress size={34} thickness={3} sx={{ color: TEXT_PRIMARY }} />
                <Typography className={SECONDARY_TYPO} sx={{ fontSize: "1.25rem", letterSpacing: "0.08em" }}>
                    Cargando invitación…
                </Typography>
            </Box>
        );
    }

    return (
        <div
            style={{
                backgroundColor: BG_MAIN,
                maxWidth: "100%",
                overflowY: "auto",
            }}
        >
            <div style={{
                backgroundImage: isSmallScreen ? `URL(${URL_IMAGES}portada.png)` : `URL(${URL_IMAGES}portada-horz.png)`,
                backgroundSize:"cover",
                height:"70vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
               
            
            }}>
               
                
                <Box p={4}
                sx={{
                   display:"flex",
                   justifyContent:"center",
                   alignItems:"center",
                   flexDirection: "column",
                }}
                > 
               
                <Fade  direction="up" triggerOnce={true}>
                    <Box 
                    component="img"
                    src={`${URL_IMAGES}monograma1.png`}
                    alt="Imagen 2"
                    sx={{
                       

                        width: isSmallScreen ? "80vw" : "30vh",
                        height: "auto",
            
                    }}
                />
                   </Fade>
                    <Fade>
                      <Box
                      p={2}
                      sx={{
                        background:" rgba(237, 215, 184,.18)",
backdropFilter: "blur(12px)",
border: "1px solid rgba(255,255,255,.25)",
width: isSmallScreen ? "80vw" : "70vw",
                      }}
                      >
                        <Typography
                          className={SECONDARY_TYPO}
                          align="center"
                            sx={{
                            
                              fontStyle: "italic!important",
                              fontSize: {
                                xs: "1rem",
                                sm: "1.5rem",
                                md: "2rem",
                              },
                              lineHeight: 1.45,
                              color: TEXT_DARK,
                              whiteSpace: "nowrap",
                              
                            }}
                          >
                              “Dios nos ha concedido el privilegio de conocernos<br></br>
                               y con la
                              bendición de nuestras familias,<br></br> hoy queremos compartir con
                              ustedes<br></br> la alegría de nuestra unión”
                          </Typography>
                      </Box>
                    </Fade>
                    <Box>
                        <Fade direction="up" triggerOnce={true}>
                          

            
                    <Typography 
                      
                      mt={3}  
                      paddingX={1} 
                      fontSize={"2.8rem"} 
                      textAlign={"center"} 
                      sx={{
                        color:TITLE_COLOR,
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        overflow: "visible",
                        lineHeight: 1.15,
                      }} 
                      className={MAIN_TYPO} 
                    >
                      28  Noviembre, 2026
                      </Typography>
           

                   
                    </Fade>
                    </Box>
                    
                </Box>
            </div>

             
              <Box
                component="section"
                sx={{
                    position: "relative",
                    
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 4, md: 12 },
                    px: { xs: 2, md: 2 },

                    // Fondo editorial, sin repetir las flores de portada
                    background: `
                        radial-gradient(
                            circle at 12% 18%,
                            rgba(199, 178, 148, 0.22) 0%,
                            rgba(199, 178, 148, 0) 30%
                        ),
                        radial-gradient(
                            circle at 88% 25%,
                            rgba(229, 213, 204, 0.45) 0%,
                            rgba(229, 213, 204, 0) 34%
                        ),
                        radial-gradient(
                            circle at 15% 85%,
                            rgba(163, 173, 163, 0.22) 0%,
                            rgba(163, 173, 163, 0) 32%
                        ),
                        radial-gradient(
                            circle at 90% 85%,
                            rgba(199, 178, 148, 0.20) 0%,
                            rgba(199, 178, 148, 0) 35%
                        ),
                        #AEB8B0
                        `,
                }}
                >
                {/* Textura decorativa */}
                <Box
                    sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.18,
                    pointerEvents: "none",

                    backgroundImage: `
                        repeating-linear-gradient(
                        0deg,
                        rgba(80, 70, 60, 0.025) 0px,
                        rgba(80, 70, 60, 0.025) 1px,
                        transparent 1px,
                        transparent 4px
                        )
                    `,
                    }}
                />

                {/* Pequeños detalles orgánicos de fondo */}
                <Box
                    sx={{
                    position: "absolute",
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background: "rgba(163, 173, 163, 0.10)",
                    filter: "blur(70px)",
                    top: "-80px",
                    left: "-100px",
                    }}
                />

                <Box
                    sx={{
                    position: "absolute",
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background: "rgba(199, 178, 148, 0.12)",
                    filter: "blur(80px)",
                    bottom: "-100px",
                    right: "-100px",
                    }}
                />

      {/* CONTENIDO */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 720,
          alignItems: "center",
        }}
      >
       
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 570,

            // Altura proporcional a la composición
            // En móvil la tarjeta se extiende por debajo del sobre; esta altura
            // evita que el contenedor de la escena la recorte.
            height: { 
               xs: 460,
    sm: 560,
    md: 620,
             },
          }}
        >
          {/* SOBRE */}
          <Box
            component="img"
            src={`${URL_IMAGES}sobre.png`}
            alt=""
            sx={{
              position: "absolute",
              width: { xs: "92%", sm: "88%", md: "84%" },
              left: "50%",
              top: { xs: 5, md: 0 },
              transform: "translateX(-50%)",

              display: "block",
              zIndex: 1,

              filter: `
                drop-shadow(0 20px 25px rgba(70, 58, 48, 0.13))
              `,
            }}
          />

          {/* TARJETA */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 3,

              width:{
    xs:"78%",
    sm:"82%",
    md:"84%"
},

              left: { xs: "50%", md: "50%" },
              top: { xs: "10vh", md: "10vh" },

              transform: "translateX(-50%)",

              // El papel deja de ser una imagen con proporción fija: el fondo
              // acompaña la altura real del contenido de la tarjeta.
              backgroundColor: BG_MAIN,
              backgroundImage: `url(${URL_REPO}demos/marfil-ver.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              filter: `
                drop-shadow(
                  0 18px 24px rgba(70, 58, 48, 0.16)
                )
              `,
            }}
          >
            {/* CONTENIDO DE LA TARJETA */}
            <Stack
              sx={{
                px: { xs: 2, sm: 4, md: 5 },
                py: { xs: 1, sm: 4, md: 5 },

                alignItems: "center",
                textAlign: "center",
                color: TEXT_PRIMARY,
              }}
            >
              {/* MONOGRAMA */}
             {/* <Box
                component="img"
                src={`${URL_IMAGES}monograma1.png`}
                alt="AJA"
                sx={{
                    width: { xs: 48, sm: 55, md: 62 },
                    mb: { xs: 1.5, md: 2 },
                }}
                /> */}

              {/* NOMBRES */}
              <Typography
              className={SECONDARY_TYPO}
                sx={{
                  mt:2,
                  fontSize: {
                    xs: "1.15rem",
                    sm: "1.35rem",
                    md: "1.55rem",
                  },
                  lineHeight: 1.1,
                  color: TEXT_DARK,
                  mb: 2,
                }}
              >
                ANNA <span style={{ fontSize:"1.5rem", marginRight:5, color:CHAMPAGNE}} className={MAIN_TYPO}>Y</span>  JUAN ANGEL
              </Typography>

              {/* Separador */}
              <Box
                sx={{
                  width: 42,
                  height: "1px",
                  backgroundColor: CHAMPAGNE,
                  opacity: 0.8,
                  mb: { xs: 2, md: 2.5 },
                }}
              />

              {/* FRASE */}
              

              {/* PADRES */}
              <Typography
                className={BODY_TYPO}
                sx={{
                  
                  mb: 1.5,
                 
                  fontSize: {
                     xs: "0.6rem",
                    sm: "0.65rem",
                    md: "0.72rem",
                  },
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: TEXT_PRIMARY,
                  whiteSpace:"nowrap"
                }}
              >
                En compañía de nuestros padres:
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                  columnGap: { xs: 1, md: 2 },
                }}
              >
                {/* Familia 1 */}
                <Stack
                  spacing={0.1}
                  alignItems="center"
                  sx={{
                    pr: { xs: 0.3, md: 1.5 },
                    borderRight: `1px solid ${CHAMPAGNE}`,
                    minWidth: 0,
                  }}
                >
                  <Typography
                   className={SECONDARY_TYPO}
                    sx={{
                      
                      
                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      whiteSpace:"nowrap",
                      fontSize: "clamp(8px, 1.3vw, .78rem)",
                    }}
                  >
                    María del Carmen Moras De Córdova
                  </Typography>

                  <Typography
                   className={SECONDARY_TYPO}
                    sx={{
                      
                      fontSize: "clamp(8px, 1.3vw, .78rem)",
                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      whiteSpace:"nowrap"
                    }}
                  >
                    Juan Miguel Córdova Limón †
                  </Typography>
                </Stack>

                {/* Familia 2 */}
                <Stack
                  spacing={0.25}
                  alignItems="center"
                  sx={{
                    pl: { xs: 0.8, md: 1.5 },
                    minWidth: 0,
                  }}
                >
                  <Typography
                   className={SECONDARY_TYPO}
                    sx={{
                  
                      fontSize: "clamp(8px, 1.3vw, .78rem)",

                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      whiteSpace:"nowrap"
                    }}
                  >
                    Gpe. Alfonsina Salcido De Córdova
                  </Typography>

                  <Typography
                   className={SECONDARY_TYPO}
                    sx={{
                    
                      fontSize: "clamp(8px, 1.3vw, .78rem)",

                      lineHeight: 1.25,
                      color: TEXT_DARK,
                      whiteSpace:"nowrap"
                    }}
                  >
                    Alejandro Córdova Salcido
                  </Typography>
                </Stack>
              </Box>

              {/* INVITACIÓN FORMAL */}
              <Typography
              className={BODY_TYPO}
                sx={{
                  mt: { xs: 2.5, md: 3.5 },
                  
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.65rem",
                    md: "0.72rem",
                  },
                  lineHeight: 1.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: TEXT_PRIMARY,
                  maxWidth: 300,
                  whiteSpace:"nowrap"
                }}
              >
                Tenemos el honor de invitarlos a la<br></br> celebración de nuestro
                matrimonio el día
              </Typography>

              {/* FECHA */}
             <Box
  sx={{
    width: "100%",
    maxWidth: 280,
    mt: { xs: 2.5, md: 3.5 },
    color: TEXT_DARK,
  }}
>
  {/* FECHA */}
  <Typography
   className={SECONDARY_TYPO}
    sx={{
  
      fontSize: {
        xs: "0.9rem",
        sm: "0.96rem",
        md: "0.1rem",
      },
      lineHeight: 1.2,
      textAlign: "center",
      mb: 0.8,
    }}
  >
    Sábado 28 de Noviembre, 2026
  </Typography>

  {/* Línea superior */}
  <Box
    sx={{
      width: "100%",
      height: ".5px",
      backgroundColor: CHAMPAGNE,
      opacity: 0.65,
    }}
  />

  {/* Información */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      minHeight: 62,
    }}
  >
    {/* HORA */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRight: `1px solid ${CHAMPAGNE}`,
        opacity: 0.85,
      }}
    >
      <Typography
      className={BODY_TYPO}
        sx={{

          fontSize: {
            xs: "0.72rem",
            sm: "0.78rem",
            md: "0.82rem",
          },
          lineHeight: 1.35,
          whiteSpace: "pre-line",
        }}
      >
        {"15:45\nHRS"}
      </Typography>
    </Box>

    {/* LUGAR */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 1,
      }}
    >
      <Typography
      className={BODY_TYPO}
        sx={{
      
          fontSize: {
            xs: "0.62rem",
            sm: "0.68rem",
            md: "0.72rem",
          },
          lineHeight: 1.35,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        JARDÍN<br></br> CASA ENCANTADA
      </Typography>
    </Box>
  </Box>
</Box>
            </Stack>
          </Box>

          {/* SELLO */}
          {/* <Box
            component="img"
            src={`${URL_IMAGES}sello .png`}
            alt=""
            sx={{
              position: "absolute",
              zIndex: 5,

              width: { xs: 80, sm: 92, md: 112 },

              left: { xs: "20vw", md: "10vw" },
              top: { xs: "20vh", md: "10vh" },

              transform: "translateX(-50%)",

              filter: `
                drop-shadow(0 7px 8px rgba(60, 50, 40, 0.18))
              `,
            }}
          /> */}
        </Box>
      </Stack>
    </Box>
 <Box
 id="ubicacion"
  component="section"
  sx={{
    backgroundImage: `url(${URL_IMAGES}fondo1.png)`,
    backgroundSize:"cover",
    position: "relative",
    minHeight: "70svh",
    overflow: "hidden",
    backgroundColor: BG_SECTION,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, md: 4 },
    py: { xs: 8, md: 12 },
  }}
>
  {/* Decoración sutil de fondo */}
  <Box
    sx={{
      position: "absolute",
      width: 340,
      height: 340,
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.16)",
      filter: "blur(90px)",
      top: "-120px",
      right: "-100px",
      pointerEvents: "none",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(163, 173, 163, 0.10)",
      filter: "blur(90px)",
      bottom: "-120px",
      left: "-100px",
      pointerEvents: "none",
    }}
  />

 
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

          backgroundColor: BG_MAIN,

          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          boxShadow:
            "0 20px 45px rgba(80, 70, 70, 0.13)",

          border: "1px solid rgba(113, 128, 120, 0.06)",

          // Si solo habrá una ubicación,
          // podemos dejarla completamente recta.
          borderRadius: 0,
        }}
      >
        {/* FOTO */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt="Jardín Casa Encantada"
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: "4 / 3",
              objectFit: "cover",
              objectPosition: "center 38%",
            }}
          />
        </Box>

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
            className={SECONDARY_TYPO}
            sx={{
              fontSize: {
                xs: "1.65rem",
                md: "1.9rem",
              },
              lineHeight: 1.1,
              color: TEXT_DARK,
            }}
          >
            Jardín Casa Encantada
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
              
              maxWidth: 330,
            }}
          >
            Avenida San Rafael German, El Saucito
            <br />
            C.P. 83300
          </Typography>

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
</Box>
            <div style={{backgroundImage: isSmallScreen ? `url("${URL_IMAGES}fondo2.png")` : `url("${URL_IMAGES}itinerario-horz.png")`, backgroundSize: "cover", backgroundPosition: "bottom", padding: "20px 20px 50px 20px", height:"650px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography  style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2.5rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>Itinerario</Typography>
            </Fade>
            </Grid>	
           
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline>
                {
                timelineData.events?.map((item,index) => (
               
                  <TimelineItem key={index}>
                     
                        <TimelineOppositeContent
                            sx={{
                              m: 'auto 0',
                            }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={item.icon} height="80" loading="lazy" alt=""/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:timelineData.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:timelineData.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"1rem"}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary,fontSize:"1rem",whiteSpace:"nowrap"}} className={`${SECONDARY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
    
                </Timeline>
            </Grid>	
      </Grid>
       </div>
       <Box bgcolor={BG_ACCENT} padding={4}>
                <Box bgcolor={BG_MAIN} 
                sx={{
                   backgroundImage: isSmallScreen? `URL(${URL_REPO}demos/marfil-ver.png)` : `URL(${URL_REPO}demos/marfil-hor.png)`,
                   backgroundSize:"cover",
                   border:"1px solid rgba(160,150,140,.15)",
                   boxShadow:"0 10px 30px rgba(60,60,60,.08)"
                }}
                    >
                        <DressCode {...dresscode}></DressCode>
                    </Box>
                     
            </Box>
 
           <Box
              component="section"
              sx={{
                  position: "relative",
                  minHeight: "50svh",
                  overflow: "hidden",
                  backgroundColor: BG_MAIN,
                  backgroundImage:  isSmallScreen ? `URL(${URL_REPO}demos/marfil-ver.png)` : `URL(${URL_REPO}demos/marfil-hor.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 3, md: 5 },
                  py: { xs: 10, md: 12 },
              }}
          >
              {/* Decoraciones */}
            

              <Stack
                  spacing={3}
                  alignItems="center"
                  textAlign="center"
                  sx={{
                      position: "relative",
                      zIndex: 2,
                      maxWidth: 420,
                  }}
              >
                  {/* Título */}
                  <Typography
                      className={MAIN_TYPO}
                      sx={{
                          color: TEXT_PRIMARY,
                          fontSize: {
                              xs: "2.5rem",
                              md: "3.3rem",
                          },
                          lineHeight: .9,
                      }}
                  >
                      Confirmación de asistencia
                  </Typography>

                 

                  {/* Texto */}
                  <Typography
                      className={BODY_TYPO}
                      sx={{
                          
                          fontSize: {
                              xs: "1rem",
                              md: "1.3rem",
                          },
                          lineHeight: 1.8,
                          maxWidth: 360,
                      }}
                  >
                      Esperamos contar con ustedes<br /> para celebrar este día tan especial,<br /> por lo que agradeceremos
                      <br />
                     
                     
                  </Typography>

                  {/* Botón */}
                  <Box sx={{ pt: 1 }}>
                      <CustomButton
                          label="Confirmar aquí"
                          icon={<WhatsAppIcon />}
                          bgColor={BUTTON_PRIMARY}
                          color="white"
                          onClick={handleConfirm}
                      />
                  </Box>

                  {/* Separador */}
                  <Box
                      sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          mt: 2,
                          mb: 1,
                      }}
                  >
                      <Divider sx={{ flex: 1 }} />

                      <Typography
                          sx={{
                              mx: 2,
                              color: CHAMPAGNE,
                              fontSize: "1rem",
                          }}
                      >
                          ✦ 
                      </Typography>

                      <Divider sx={{ flex: 1 }} />
                  </Box>

                  {/* Restricciones */}

                  <Stack
                      spacing={1.5}
                      alignItems="center"
                  >
                      <Typography
                          className={SECONDARY_TYPO}
                          sx={{
                              
                              fontSize: "1rem",
                              fontStyle: "italic",
                          }}
                      >
                          *Respetuosamente no niños
                      </Typography>

                 
                  </Stack>

                
              
              </Stack>
          </Box>
            
           
             
             <Box
    component="section"
    sx={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
         backgroundImage: `url(${URL_IMAGES}fondo1.png)`,
    backgroundSize:"cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 8,
    }}
>
    <Paper
        elevation={0}
        sx={{
            width: "100%",
            maxWidth: 470,
            bgcolor: BG_MAIN,
            p: { xs: 4, md: 5 },
            borderRadius: 0,
            boxShadow: "0 18px 45px rgba(0,0,0,.08)",
            position: "relative",
            overflow: "hidden",
        }}
    >
        {/* Título */}

       

        {/* Frase principal */}

        <Typography
            className={BODY_TYPO}
            sx={{
                color: giftListData.textColor,
                textAlign: "center",
                
                lineHeight: 1.9,
                mb: 3,
                            whiteSpace: "nowrap",
                            fontSize:".8rem",
            }}
        >
            Para nosotros lo mas importante es su presencia,<br></br> 
            pero si desean hacernos un obsequio tendremos <br></br> 
            un buzón de sobres el día del evento
                
        </Typography>

        {/* Sobre */}

        

        {/* Segunda frase */}

        <Typography
            className={BODY_TYPO}
            sx={{
              fontSize:".8rem",
                color: giftListData.textColor,
                textAlign: "center",
                lineHeight: 1.9,
                mb: 5,
                whiteSpace:"nowrap"
            }}
        >
           O bien, pueden hacer una transferencia<br></br> a nuestra cuenta bancaria
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
                    boxShadow: "0 10px 25px rgba(0,0,0,.05)",
                }}
            >
                <Stack
                    spacing={2}
                    alignItems="center"
                >
                    <Box
                        component="img"
                        src={`${URL_IMAGES}santander.svg`}
                        sx={{
                            height: 40,
                            
                        }}
                    />

                    <Typography
                        className={BODY_TYPO}
                        sx={{
                            letterSpacing: ".18em",
                            fontSize: ".82rem",
                            color: TEXT_PRIMARY,
                        }}
                    >
                        {bank.numbers[0].numberType}
                    </Typography>

                    <Typography
                        className={SECONDARY_TYPO}
                        sx={{
                            fontSize: {
                              xs: "1.65rem",
                              sm: "1.9rem",
                            },
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap",
                            color: TEXT_DARK,
                            // letterSpacing: ".04em",
                            textAlign: "center",
                            lineHeight: 1.1,
                        }}
                    >
                        {bank.numbers[0].number}
                    </Typography>

                    <Typography
                        className={BODY_TYPO}
                        sx={{
                            fontSize: ".9rem",
                            color: TEXT_PRIMARY,
                            opacity: .85,
                            textAlign: "center",
                        }}
                    >
                        Juan Angel Cordova Salcido<br></br>
                        Anna Cordova Moras
                    </Typography>

                    <CustomButton
                        label="Copiar CLABE"
                        bgColor={BUTTON_PRIMARY}
                        color="white"
                        onClick={() =>
                            navigator.clipboard.writeText(bank.numbers[0].number)
                        }
                    />
                </Stack>
            </Paper>
        ))}

        <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{
        mt: 6,
        width: "100%",
    }}
>
    <Typography
        className={MAIN_TYPO}
        sx={{
            fontSize: "2.5rem",
            color: TEXT_PRIMARY,
            lineHeight: .9,
        }}
    >
        Muchas gracias
    </Typography>

    <Box
        component="img"
        src={`${URL_IMAGES}monograma1.png`}
        sx={{
            width: 130,
            objectFit: "contain",
        }}
    />
</Stack>

       
    </Paper>
</Box>
            <div style={{height:100}}></div>
              <FooterInvites bgColor={BG_MAIN} color={BUTTON_PRIMARY}></FooterInvites>
        </div>
    )
}

export default WeddingAnnaJuanAngel;

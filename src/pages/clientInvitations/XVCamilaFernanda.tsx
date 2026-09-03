import { Fade } from "react-awesome-reveal";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";

import Grid from "@mui/material/Grid2";
import { Box,  Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import {  useMemo, useState } from "react";

import Adornment from "../../components/Adornment/Adornment";


import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import fondo from "../../assets/xv-camila-fernanda/fondo.png";
import sello from "../../assets/xv-camila-fernanda/sello.png";

import castillo from "../../assets/xv-camila-fernanda/deco/6.png";
import zapatilla from "../../assets/xv-camila-fernanda/deco/7.png";
import corona from "../../assets/xv-camila-fernanda/deco/8.png";
import moño from "../../assets/xv-camila-fernanda/deco/9.png";
import carruaje from "../../assets/xv-camila-fernanda/deco/10.png";
import recepcion from "../../assets/xv-camila-fernanda/deco/11.png";
import iglesia from "../../assets/xv-camila-fernanda/deco/12.png";
import sobre from "../../assets/xv-camila-fernanda/deco/13.png";
// =========================
// Backgrounds
// =========================

export const BG_MAIN = "#FCFBF7";          // Fondo principal (marfil)
export const BG_SECTION = "#FFFFFF";       // Tarjetas / secciones
export const BG_ALT = "#F7F4EF";           // Secciones alternas
export const BG_ACCENT = "#AFC7E810";      // Azul muy tenue para bloques

// =========================
// Primary Palette
// =========================

export const PRIMARY = "#AFC7E8";          // Azul Cenicienta
export const PRIMARY_DARK = "#6E8FB7";     // Azul profundo
export const PRIMARY_LIGHT = "#DCEAF8";    // Azul claro

// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";
export const IVORY = "#FCFBF7";
export const BEIGE = "#E8DCCB";

export const TEXT_PRIMARY = "#4A4A4A";
export const TEXT_SECONDARY = "#777777";

export const GOLD = "#C7A96B";
export const BORDER = "#E8DCCB";   // Borde del papel

export const SHADOW =
  "0px 10px 30px rgba(110,143,183,.10)";
export const DIVIDER = "#E6DED1";
export const MAGIC_GLOW =
"0 0 30px rgba(175,199,232,.35)";
export const STORY_DIVIDER = "#D8E3F0";
const MAIN_TYPO = "parisienne-regular";
const SECOND_TYPO = "pt-serif-caption-regular to-upper";
const BODY_TYPO = "montserat-regular to-upper";
const URL_IMAGES = `${URL_REPO}xv/xv-regina/`;

const eventCards: EventCardProps[] = [
  {
    eventName: "Misa Religiosa",
    date: new Date(2026, 3, 11, 18, 0, 0),
    locationName: "Parroquia Santa Eduwiges",
    address: "C. Israel González S/N, Modelo, 83190 Hermosillo, Son.",
    size: 6,
    color: TEXT_PRIMARY,
    icon: iglesia,
    iconSize: "180px",
    mainTypo: `${MAIN_TYPO}`,
    bodyTypo: BODY_TYPO,
    href: "https://maps.app.goo.gl/zzzeXucMCxJ7MUAp7",
    fontSize: "45px",
    colorButton: PRIMARY,
    bgColor: BG_MAIN,
  },
  {
    eventName: "Recepción",
    date: new Date(2026, 3, 11, 20, 0, 0),

    locationName: "La Cascada Eventos",
    address: "Blvd. Jesús García Morales 335, San Isidro, Hermosillo, Son.",
    size: 6,
    color: TEXT_PRIMARY,
    icon: recepcion,
    iconSize: "180px",
    mainTypo: `${MAIN_TYPO}`,
    bodyTypo: BODY_TYPO,
    fontSize: "45px",
    href: "https://maps.app.goo.gl/YbuLDso9EFq8zJMo8",
    colorButton: PRIMARY,
    bgColor: BG_MAIN,
  },
];

const giftListData: GiftListProps = {
  mainTypo: `${MAIN_TYPO}`,
  bodyTypo: BODY_TYPO,
  color: TEXT_PRIMARY,
  bgColor: BG_ACCENT,
  showEnvelope: true,
  bankIconEnd: sobre,
  envelopePhrase:
    "Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal !Gracias!",

};
const dresscode: DressCodeProps = {
  mainTypo: `${MAIN_TYPO}`,
  bodyTypo: BODY_TYPO,
  color: TEXT_PRIMARY,
  type: 1,
  title: "Formal",
  fontSize: "2rem",
  omitColorsLabel: "Color azul reservado para la quinceañera.",
};



const XVCamilaFernanda = () => {
  const [searchParams] = useSearchParams();
  const invitedGuests: number = useMemo(() => {
    const num = Number(searchParams.get("number"));
    return isNaN(num) ? 1 : num;
  }, [searchParams]);
  const [showIntro, setShowIntro] = useState(true);
    //  const musicRef = useRef<MusicFabPlayerHandle>(null);
    const handleEnter = () => {
            // musicRef.current?.play();
            setTimeout(() => {
                setShowIntro(false);
            }, ENVELOPE_OPEN_MS);
        };
 const handleConfirmed = (name: string, confirmText: string, phoneNumber: string, totalConfirmed: string, companionNames?: string) => {
        console.log("Confirmado:", name, confirmText, phoneNumber, totalConfirmed, companionNames);
        if(confirmText == "Asistiré"){
            // window.open(`https://wa.me/+526625017752?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20Quinceañera%20%20de%20Briana.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');

        }else{
            // window.open(`https://wa.me/+526625017752?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20Quinceañera%20de%20Briana.Mi nombre es: ${name}`, '_blank');

        }
  };



  return (
    <div
      style={{
        backgroundColor: BG_MAIN,
        maxWidth: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        color:TEXT_PRIMARY
      }}
    >
       <EnvelopeIntro
                open={showIntro}
                onEnter={handleEnter}
                // musicRef={musicRef}
                sealImage={sello}
                envelopeColor={BG_MAIN}

                overlayColor={PRIMARY_DARK}

                envelopeHighlight={PRIMARY_LIGHT}

                shadowColor={SHADOW}>

      </EnvelopeIntro>
      <div
        style={{
          padding: "50px 20px",
          height:"100vh"
        }}
      >
        <Grid
          container
          justifyContent="center"
          // bgcolor={"rgb(169, 193, 186,.5)"}
         height="calc(100vh - 50px)"
        >
          <Grid
            size={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <Fade direction="left" triggerOnce={true}>
                  
                  <Typography
                    variant="h1"
                    className={`${MAIN_TYPO}`}
                    translate="no"
                    align="center"
                    sx={{
                      fontSize: "5rem",
                      lineHeight: 1.5,
                      color: PRIMARY,
                      fontFeatureSettings: '"liga" 0, "locl" 0',
                    }}
                  >
                    Camila<br></br> Fernanda
                  </Typography>
                  <Typography
                    
                    className={`${SECOND_TYPO}`}
                    translate="no"
                    align="center"
                    sx={{
                      fontSize: "1.5rem",
                      lineHeight: 2,
                      color: PRIMARY_DARK,
                      fontFeatureSettings: '"liga" 0, "locl" 0',
                    }}
                  >
                    Mis XV años
                  </Typography>
                  <Typography
                    
                    className={`${BODY_TYPO}`}
                    translate="no"
                    align="center"
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 2,
                      color: PRIMARY,
                      fontFeatureSettings: '"liga" 0, "locl" 0',
                    }}
                  >
                    28 · NOVIEMBRE · 2026
                  </Typography>
                </Fade>
              </div>
            
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% - 300px)",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={castillo} style={{ width: "100vw" }} />
                </Fade>
              </div>
              
              
            </div>
          </Grid>
        </Grid>
      </div>

     <Box p={2}>
      <Typography>
        Hoy, al cumplir mis XV años, abro las puertas a una nueva etapa de mi vida, llena de sueños, ilusiones y nuevos comienzos.

        Con mucha emoción, deseo compartir esta noche con las personas que hacen mi vida especial.

        Será un honor que me acompañes a celebrar este momento inolvidable.
      </Typography>
     </Box>

      {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle> */}
      <div
        style={{
          backgroundImage: `url("${URL_IMAGES}fondo4.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
      >
        <Grid container justifyContent="center" padding={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              textAlign="center"
              sx={{
                width: "100%",
                mt: 6,
                mb: 6,
                borderColor: PRIMARY,
                borderWidth: "2px",
                borderStyle: "solid",
                px: 3,
                py: 3,
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco con opacidad
                backdropFilter: "blur(5px)", // Efecto de desenfoque para mejorar la legibilidad
              }}
            >
              <Grid container spacing={2} justifyContent="center" mb={3}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography className={`${BODY_TYPO}`}>
                      Deseamos compartir con ustedes la alegría de celebrar un
                      momento muy especial
                    </Typography>
                    <Grid container justifyContent="center" sx={{ m: 4 }}>
                      <Grid>
                        <Fade direction="up">
                          <Adornment
                            image={`${URL_IMAGES}adornos2.png`}
                            width={"250px"}
                          />
                        </Fade>
                      </Grid>
                    </Grid>
                    <Typography className={BODY_TYPO}>
                      Con la bendición de Dios y el apoyo incondicional de mis
                      padres
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO} tex-`}
                      sx={{
                        fontSize: "2rem",
                        lineHeight: 2,
                        color: TEXT_PRIMARY,
                      }}
                    >
                      Marco Antonio Favela Espinoza
                    </Typography>
                  </Fade>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO}`}
                      translate="no"
                      sx={{
                        fontSize: "2rem",
                        lineHeight: 2,
                        color: TEXT_PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                      Sara Beatriz Esquer Bay
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography className={BODY_TYPO} sx={{ mt: 2 }}>
                      Tenemos el honor de invitarlos a la celebración de mis XV
                      años.
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" sx={{ mt: 4 }}>
                <Grid>
                  <Fade direction="up">
                    <Adornment
                      image={`${URL_IMAGES}adornos2.png`}
                      width={"250px"}
                    />
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundColor: BG_ACCENT,
          padding: "50px 20px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            transform: "translate(-50%, -50%) scale(-1)",
          }}
        >
          <Fade direction="right" triggerOnce={true}>
            <img src={`${URL_IMAGES}5.png`} style={{ width: "300px" }} />
          </Fade>
        </div>
        <Box
          sx={{
            backgroundColor: BG_MAIN,
          }}
        >
          <CountDownSimple
            eventDate={new Date(2026, 5, 20)}
            typoHeader={MAIN_TYPO}
            typoCountdown={BODY_TYPO}
            fontSize="2rem"
            bgColor="transparent"
            circleBgColor={TEXT_PRIMARY}
            circleTextColor="white"
            primaryColor={TEXT_PRIMARY}
            secondarColor={TEXT_PRIMARY}
          ></CountDownSimple>
        </Box>
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        paddingX={"20px"}
        paddingY={"50px"}
        bgcolor={BG_SECTION}
      >
        {/* Texto inicial */}
        <Grid size={12} textAlign="center" sx={{ width: "100%" }}>
          <Fade direction="up">
            <Typography className={BODY_TYPO} sx={{ fontSize: "1rem" }}>
              Por qué me han acompañado en mi camino y deseo que sigan siendo
              parte de mi historia.
            </Typography>
          </Fade>
        </Grid>
        <Grid size={12}>
          <Box textAlign="center" sx={{ width: "100%" }}>
            <Box>
              {/* Título */}
              <Fade direction="up">
                <Typography
                  variant="h3"
                  className={`${MAIN_TYPO}`}
                  sx={{ fontSize: "2.5rem", color: TEXT_SECONDARY }}
                >
                  Mis Padrinos
                </Typography>
              </Fade>

              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ mb: 2 }}
              >
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography variant="h5" className={MAIN_TYPO}>
                      Ana María Vélez Navarro
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography variant="h5" className={MAIN_TYPO}>
                      Eleazar Navarro Jiménez
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>

              <Grid container justifyContent="center" sx={{ mt: 4 }}>
                <Grid>
                  <Fade direction="up">
                    <Adornment
                      image={`${URL_IMAGES}adornos2.png`}
                      width={"250px"}
                    />
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(${URL_IMAGES}fondo.png)`,
          padding: "50px 20px",
        }}
      >
        <Grid container spacing={2} padding={2} justifyContent={"center"}>
          {eventCards.map((item, index) => (
            <EventCard key={index} {...item}></EventCard>
          ))}
        </Grid>
      </div>



      <Box
        sx={{
          position: "relative",
          backgroundColor: BG_MAIN,
          py: 10,
          overflow: "visible", // 👈 clave para que se salgan
        }}
      >
        {/* 🌸 Flor esquina superior izquierda */}
        <Box
          component="img"
          src={`${URL_IMAGES}4.png`}
          sx={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: { xs: "30vh", md: "200px" },
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* 🌸 Flor esquina inferior derecha */}
        <Box
          component="img"
          src={`${URL_IMAGES}4.png`}
          sx={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: { xs: "30vh", md: "200px" },
            transform: "scaleX(-1)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* 📦 Contenido */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: 2,
          }}
        >
          <GiftList {...giftListData} />
        </Box>
      </Box>

       <RSVPExcel 
            textColor="white" 
            bgImage={`${URL_IMAGES}fondo.png`} 
            qrActive={false} mainTypo={MAIN_TYPO} 
            bodyTypo={BODY_TYPO} 
            count={invitedGuests} 
            color={"white"} 
            colorButton={PRIMARY} 
            invitationId={0} 
            bgColor={""} 
            confirmed={handleConfirmed}
            hidePhoneNumberInput={true}
            transparencyButton={true}
            ></RSVPExcel> 
      <div
        style={{
          backgroundImage: `url(${URL_IMAGES}fondo.png)`,
          padding: "50px 20px",
        }}
      >
        <Box sx={{ backgroundColor: BG_MAIN }}>
          <DressCode {...dresscode}></DressCode>
          <Grid paddingBottom={2}>
            <Fade direction="up">
              <Adornment image={`${URL_IMAGES}adornos2.png`} width={"250px"} />
            </Fade>
          </Grid>
          <WithoutKids subtitle2="NO NIÑOS"></WithoutKids>
        </Box>
      </div>

      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
      
    </div>
  );
};
export default XVCamilaFernanda;

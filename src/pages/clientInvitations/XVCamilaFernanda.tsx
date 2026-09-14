import { Fade } from "react-awesome-reveal";
import DressCode, {
  DressCodeProps,
} from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from "@mui/material/Grid2";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

import Adornment from "../../components/Adornment/Adornment";

import WithoutKids from "../../components/WithOutKids/WithoutKids";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import fondo from "../../assets/xv-camila-fernanda/fondo.png";
import fondo2 from "../../assets/xv-camila-fernanda/fondo2.png";
import fondoHorz from "../../assets/xv-camila-fernanda/fondo-horz.png";
import sello from "../../assets/xv-camila-fernanda/sello.png";

import separador from "../../assets/xv-camila-fernanda/deco/17.png";
import zapatilla from "../../assets/xv-camila-fernanda/deco/7.png";
import corona from "../../assets/xv-camila-fernanda/deco/8.png";
import moño from "../../assets/xv-camila-fernanda/deco/9.png";
import carruaje from "../../assets/xv-camila-fernanda/deco/10.png";
import recepcion from "../../assets/xv-camila-fernanda/deco/11.png";
import iglesia from "../../assets/xv-camila-fernanda/deco/12.png";
import sobre from "../../assets/xv-camila-fernanda/deco/13.png";
import reloj from "../../assets/xv-camila-fernanda/deco/14.png";

import destellos from "../../assets/xv-camila-fernanda/deco/16.png";
import EditorialCountdown from "../../components/EditorialCountdown";
import f1 from "../../assets/xv-camila-fernanda/flores/1.png";
import f2 from "../../assets/xv-camila-fernanda/flores/2.png";
import f3 from "../../assets/xv-camila-fernanda/flores/3.png";
import f4 from "../../assets/xv-camila-fernanda/flores/4.png";
import f5 from "../../assets/xv-camila-fernanda/flores/5.png";
import f6 from "../../assets/xv-camila-fernanda/flores/6.png";
export const BG_MAIN = "#f8f5ee"; // Crema cálido

export const BG_SECTION = "#FCFAF6"; // Marfil claro

export const BG_ALT = "#E5EEF1"; // Azul niebla suave

export const BG_ACCENT = "#3F6F9314"; // Azul tenue para bloques


// =========================
// Primary Palette
// =========================

export const PRIMARY = "#3F6F93"; // Azul principal

export const PRIMARY_DARK = "#294F70"; // Azul profundo

export const PRIMARY_LIGHT = "#B8D3E2"; // Azul acuarela


// =========================
// Neutral Palette
// =========================

export const WHITE = "#FFFFFF";

export const IVORY = "#F8F5EE";

export const BEIGE = "#E9DED0";

export const TEXT_PRIMARY = "#55534F";

export const TEXT_SECONDARY = "#817B73";

export const GOLD = "#C6A15F";

export const BORDER = "#E4D9CB";

export const SHADOW = "0px 10px 30px rgba(41,79,112,.10)";

export const DIVIDER = "#D8E2E5";

export const MAGIC_GLOW = "0 0 30px rgba(63,111,147,.22)";

export const STORY_DIVIDER = "#C7DCE7";

const MAIN_TYPO = "parisienne-regular";
const SECOND_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "montserat-regular to-upper";

const eventCards: EventCardProps[] = [
  {
    eventName: "Misa Religiosa",
    date: new Date(2026, 3, 11, 17, 0, 0),
    locationName: "Parroquia de los Sagrados Corazones de Jesús y María",
    address: "Circuito de las Misiones Sur, Colonia Bachoco",
    size: 6,
    color: PRIMARY_DARK,
    icon: iglesia,
    iconSize: "180px",
    mainTypo: `${MAIN_TYPO}`,
    bodyTypo: BODY_TYPO,
    href: "https://maps.app.goo.gl/1oZ4r57ZKDQYFuaGA",
    fontSize: "45px",
    colorButton: PRIMARY,
    bgColor: BG_MAIN,
  },
  {
    eventName: "Recepción",
    date: new Date(2026, 3, 11, 20, 0, 0),

    locationName: "Hotel Araiza Inn",
    address: "Blvd. Fco. Eusebio Kino 353, Lomas Pitic.",
    size: 6,
    color: PRIMARY_DARK,
    icon: recepcion,
    iconSize: "180px",
    mainTypo: `${MAIN_TYPO}`,
    bodyTypo: BODY_TYPO,
    fontSize: "45px",
    href: "https://maps.app.goo.gl/NzZRisdB9mEdvab2A",
    colorButton: PRIMARY,
    bgColor: BG_MAIN,
  },
];

const dresscode: DressCodeProps = {
  mainTypo: `${MAIN_TYPO}`,
  bodyTypo: BODY_TYPO,
  color: PRIMARY_DARK,
  type: 1,
  title: "Formal",
  fontSize: "2rem",
  omitColorsLabel: "Color azul reservado para la quinceañera.",
};

const COUNTDOWN_DATE = new Date(2026, 10, 28);
const RSVP_DATE_LINE = new Date(2026, 10, 10);

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
  const handleConfirmed = (
    name: string,
    confirmText: string,
    phoneNumber: string,
    totalConfirmed: string,
    companionNames?: string,
  ) => {
    console.log(
      "Confirmado:",
      name,
      confirmText,
      phoneNumber,
      totalConfirmed,
      companionNames,
    );
    if (confirmText == "Asistiré") {
      // window.open(`https://wa.me/+526625017752?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20Quinceañera%20%20de%20Briana.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');
    } else {
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
        color: TEXT_PRIMARY,
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
        shadowColor={SHADOW}
      ></EnvelopeIntro>
<Box
  sx={{
    height: { xs: "70svh", md: "100vh" },
    px: { xs: 2, sm: 2.5 },
    pt: { xs: 4, sm: 6 },
    pb: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage: `url("${fondoHorz}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
  }}
>
  <Box
    sx={{
      position: "relative",
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >

    {/* ========================= */}
    {/* FLOR SUPERIOR */}
    {/* ========================= */}

    {/* <Box
      sx={{
        position: "absolute",
        top: { xs: 0, sm: 10 },
        left: { xs: "-5px", sm: "4%" },
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Fade direction="up" triggerOnce>
        <img
          src={f1}
          alt=""
          style={{
            width: "120px",
            height: "auto",
            display: "block",
          }}
        />
      </Fade>
    </Box> */}


    {/* ========================= */}
    {/* CONTENIDO */}
    {/* ========================= */}

    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: { xs: 0, sm: 1 },
        top:"30%"
      }}
    >

      <Fade direction="up" triggerOnce>

        <Typography
          variant="h1"
          className={`${MAIN_TYPO}`}
          translate="no"
          align="center"
          sx={{
            fontSize: {
              xs: "3.7rem",
              sm: "4.6rem",
              md: "5.1rem",
            },
            lineHeight: 0.92,
            color: PRIMARY_DARK,
            fontFeatureSettings: '"liga" 0, "locl" 0',
          }}
        >
          Camila
          <br />
          Fernanda
        </Typography>

        <Typography
          className={`${SECOND_TYPO}`}
          translate="no"
          align="center"
          sx={{
            mt: 1.2,
            fontSize: {
              xs: "1.25rem",
              sm: "1.45rem",
            },
            lineHeight: 1.2,
            color: PRIMARY,
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
            mt: 0.5,
            fontSize: "0.95rem",
            lineHeight: 1.8,
            letterSpacing: "0.04em",
            color: PRIMARY,
            fontFeatureSettings: '"liga" 0, "locl" 0',
          }}
        >
          28 · NOVIEMBRE · 2026
        </Typography>

      </Fade>


      {/* ========================= */}
      {/* SEPARADOR */}
      {/* ========================= */}
<Fade direction="up" triggerOnce>
      <Box
        sx={{
          width: { xs: "170px", sm: "200px" },
          mt: { xs: 2, sm: 2.5 },
          mb: 1,
          opacity: 0.9,
        }}
      >
        <img
          src={f6}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            transform:"rotate(-40deg)"
          }}
        />
      </Box>
</Fade>

      {/* ========================= */}
      {/* BOUQUET INFERIOR */}
      {/* ========================= */}

     

    </Box>

  </Box>
</Box>

      <Box
        p={2}
        sx={{
          backgroundColor:BG_ALT
          // backgroundImage: `url("${fondoHorz}")`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <Grid container p={2}>
           {/* <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={f6}
              sx={{
                width: { xs: 150, md: 65 },
                mb: 3,
                mt: 3,
                transform:"rotate(-40deg)"
              }}
            />
          </Grid> */}
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
            mt={4}
            mb={4}
          >
            <Typography
              textAlign="center"
              className={`${SECOND_TYPO} italic`}
              fontSize="1.5rem"
              mb={4}
              lineHeight={1.55}
              maxWidth={"85%"}
              color={PRIMARY}
            >
              Hoy, al cumplir mis XV años, abro las puertas a una nueva etapa de
              mi vida, llena de sueños, ilusiones y nuevos comienzos. Con mucha
              emoción, deseo compartir esta noche con las personas que hacen mi
              vida especial. Será un honor que me acompañes a celebrar este
              momento inolvidable.
            </Typography>
          </Grid>
           
        </Grid>
      </Box>

      {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle> */}
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
                  top: "calc(35% - 150px)",
                  left: "calc(45% - 150px)",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f1} style={{ width: "150px" }} />
                </Fade>
              </div>
              {/* <div
                style={{
                  position: "absolute",
                  top: "calc(5% - 100px)",
                  right: "calc(10% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={destellos} style={{ width: "100px" }} />
                </Fade>
              </div> */}
              <div
                style={{
                  position: "absolute",
                  bottom: "calc(0% - 150px)",
                  right: "calc(0% - 150px)",
                  transform: "translate(-50%, -50%) rotate(-20deg)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f5} style={{ width: "150px" }} />
                </Fade>
              </div>
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "calc(10% - 100px)",
                  left: "calc(5% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={destellos} style={{ width: "100px" }} />
                </Fade>
              </div> */}

              <Grid container spacing={2} justifyContent="center" mb={3}>
                
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${SECOND_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                    >
                      Con el amor y la guía de quienes<br></br> han acompañado
                      cada paso de mi vida...
                    </Typography>

                    <Typography
                      className={BODY_TYPO}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: PRIMARY_DARK,
                      }}
                    >
                      Mis Padres
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
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                      Gloriela Portillo
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO} tex-`}
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                      &
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
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                      Iván Meza
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={SECOND_TYPO}
                      sx={{ mt: 2 }}
                      lineHeight={1.5}
                    >
                      Con inmenso amor, agradecen el honor de acompañarnos en
                      este día tan especial.
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url("${fondo2}")`,
          backgroundSize: "cover",

          padding: "50px 20px",
          position: "relative",
          backgroundPosition: "end",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={reloj}
              sx={{
                height: { xs: 100, md: 120 },
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            display="flex"
            justifyContent="center"
            mt={2}
          >
            <Typography
              className={`${SECOND_TYPO} italic`}
              translate="no"
              align="center"
              sx={{
                fontSize: "1.3rem",
                lineHeight: 1.2,
                color: "#8F97A5",
                fontFeatureSettings: '"liga" 0, "locl" 0',
              }}
            >
              Cada día nos acerca a una noche inolvidable.
            </Typography>
          </Grid>
        </Grid>

        <EditorialCountdown
          eventDate={COUNTDOWN_DATE}
          title={{
            fontFamily: '"Parisienne"',
            color: PRIMARY_DARK,
            fontSize: "1.8rem",
            fontWeight: 700,
            lineHeight: 1.5,
            dateFormat: "DD MMMM YYYY",
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
      </div>
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
              {/* <div
                style={{
                  position: "absolute",
                  top: "calc(15% - 100px)",
                  left: "calc(25% - 100px)",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={destellos} style={{ width: "100px" }} />
                </Fade>
              </div> */}
              <div
                style={{
                  position: "absolute",
                  top: "calc(5% - 100px)",
                  right: "calc(10% - 100px)",
                  transform: "scale(-1,1)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f3} style={{ width: "100px" }} />
                </Fade>
              </div>
              
              <div
                style={{
                  position: "absolute",
                  bottom: "calc(10% - 150px)",
                  left: "calc(15% - 150px)",
             
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f4} style={{ width: "150px" }} />
                </Fade>
              </div>

              <Grid container spacing={2} justifyContent="center" mb={3}>
             
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={`${SECOND_TYPO}`}
                      mb={2}
                      lineHeight={1.5}
                    >
                      Con especial cariño
                    </Typography>

                    <Typography
                      className={BODY_TYPO}
                      sx={{
                        mb: 2,
                        mt: 2,
                        color: PRIMARY_DARK,
                      }}
                    >
                      Mis Padrinos
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
                        lineHeight: 1,
                        color: PRIMARY,
                      }}
                    >
                      Ruth Nohemi Meza
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      variant="h1"
                      className={`${MAIN_TYPO} tex-`}
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: 1,
                        color:PRIMARY,
                      }}
                    >
                      &
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
                        lineHeight: 1,
                        color: PRIMARY,
                        fontFeatureSettings: '"liga" 0, "locl" 0',
                      }}
                    >
                      José Ramón Alcaraz
                    </Typography>
                  </Fade>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                  <Fade direction="up">
                    <Typography
                      className={SECOND_TYPO}
                      sx={{ mt: 2 }}
                      lineHeight={1.5}
                    >
                      Gracias por acompañarme<br></br> en este momento tan
                      especial.
                    </Typography>
                  </Fade>
                </Grid>
               
              </Grid>

            
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url("${fondo}")`,
          backgroundSize: "cover",
          padding: "50px 20px",
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Fade direction="up">
            <Typography
              textAlign={"center"}
              className={`${SECOND_TYPO} italic`}
              sx={{ mt: 2 }}
              lineHeight={1.5}
              fontSize={"1.5rem"}
              color={PRIMARY_DARK}
            >
              Acompáñame en cada momento de esta celebración
            </Typography>
          </Fade>
        </Grid>
        <Grid container spacing={2} padding={2} justifyContent={"center"}>
          {eventCards.map((item, index) => (
            <EventCard key={index} {...item}></EventCard>
          ))}
        </Grid>
      </div>

      <div
        style={{
          backgroundColor: BG_ALT,
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
              }}
            >
              
              <div
                style={{
                  position: "absolute",
                  top: "calc(-5% - 100px)",
                  right: "calc(5% - 100px)",
                  transform: "rotate(-15deg)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f6} style={{ width: "200px" }} />
                </Fade>
              </div>
              
        

              <Box>
                <Container maxWidth="md">
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Typography
                      fontSize={"2rem"}
                      className={MAIN_TYPO}
                      color={PRIMARY_DARK}
                    >
                      Lluvia de sobres
                    </Typography>

                    <Typography
                      maxWidth={650}
                      className={BODY_TYPO}
                      lineHeight={1.5}
                      color={TEXT_PRIMARY}
                    >
                      Tu presencia será el regalo más valioso para mí.
                      <br />
                      Si además deseas obsequiarme un detalle, con mucho cariño
                      agradeceré que sea en sobre.
                    </Typography>
                    <Box
                      component="img"
                      src={sobre}
                      alt="Sobre"
                      sx={{
                        width: { xs: 90, md: 110 },
                      }}
                    />
                  </Stack>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Box bgcolor={BG_SECTION}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          
          <div
            style={{
              position: "absolute",
              bottom: "calc(10% - 100px)",
              left: "calc(15% - 100px)",
              transform: "scale(-1,1) rotate(70deg)",
              zIndex:2
            }}
          >
            <Fade direction="up" triggerOnce={true}>
              <img src={f6} style={{ width: "200px" }} />
            </Fade>
          </div>
          
          <RSVPExcel
            dateLine={RSVP_DATE_LINE}
            textColor={TEXT_PRIMARY}
            qrActive={false}
            mainTypo={MAIN_TYPO}
            bodyTypo={BODY_TYPO}
            count={invitedGuests}
            color={PRIMARY}
            colorButton={PRIMARY}
            invitationId={0}
            bgColor={BG_ACCENT}
            confirmed={handleConfirmed}
            hidePhoneNumberInput={true}
            transparencyButton={true}
          ></RSVPExcel>
        </Box>
      </Box>

      <div
        style={{
          backgroundImage: `url(${fondo2})`,
          padding: "50px 20px",
          position:"relative"
        }}
      >
         <div
                style={{
                  position: "absolute",
                  bottom: "calc(25% - 152px)",
                  right: "calc(22% - 152px)",
                  transform: "rotate(-50deg)",
                }}
              >
                <Fade direction="up" triggerOnce={true}>
                  <img src={f2} style={{ width: "152px" }} />
                </Fade>
              </div>
        <Box sx={{ backgroundColor: BG_ALT }}>
          <DressCode {...dresscode}></DressCode>
          <Grid paddingBottom={2}>
            <Fade direction="up">
              <Adornment image={`${destellos}`} width={"100px"} />
            </Fade>
          </Grid>
          <WithoutKids
            bodyTypo={SECOND_TYPO}
            textColor={TEXT_PRIMARY}
            subtitle2="NO NIÑOS"
          ></WithoutKids>
        </Box>
      </div>

      <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
    </div>
  );
};
export default XVCamilaFernanda;

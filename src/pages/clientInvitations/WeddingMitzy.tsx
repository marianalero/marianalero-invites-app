import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { GiftListProps } from "../../models/component/giftList";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, IconButton, Paper, Stack, Typography,  } from "@mui/material";


import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import MiniGallery from "../../components/MiniGallery/MiniGallery";
import { Fade } from "react-awesome-reveal";
import  { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import dayjs from "dayjs";
import { t } from "i18next";


import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import CustomButton from "../../components/CustomButton/CustomButton";
import EnvelopeIntro from "../../components/EnvelopeIntro/EnvelopeIntro";
import { ENVELOPE_OPEN_MS } from "../../components/EnvelopeIntro/animations";
import Gallery from "../../components/Gallery/Gallert";

import imgPortada from "../../assets/boda-mitzia-jhovanny/portada.jpg";
import imgEnmedio from "../../assets/boda-mitzia-jhovanny/enmedio.jpg";
import imgEnmedio2 from "../../assets/boda-mitzia-jhovanny/enmedio2.jpg";
import imgEnmedio3 from "../../assets/boda-mitzia-jhovanny/enmedio3.jpg";
import imgFondo1 from "../../assets/boda-mitzia-jhovanny/fondo1.png";
import imgFondo2 from "../../assets/boda-mitzia-jhovanny/fondo2.png";
import imgContador from "../../assets/boda-mitzia-jhovanny/contador.jpg";
import imgItinerario from "../../assets/boda-mitzia-jhovanny/itinerario.jpg";
import imgIglesia from "../../assets/boda-mitzia-jhovanny/iglesia.jpeg";
import imgRecepcion from "../../assets/boda-mitzia-jhovanny/recepcion.jpeg";
import imgSello from "../../assets/boda-mitzia-jhovanny/sello.png";
import imgHombres from "../../assets/boda-mitzia-jhovanny/hombres.png";
import imgMujeres from "../../assets/boda-mitzia-jhovanny/mujeres.png";
import imgG2 from "../../assets/boda-mitzia-jhovanny/g2.jpg";
import imgM1 from "../../assets/boda-mitzia-jhovanny/m1.jpg";
import imgM2 from "../../assets/boda-mitzia-jhovanny/m2.jpg";
import imgM3 from "../../assets/boda-mitzia-jhovanny/m3.jpg";
import icono1 from "../../assets/boda-mitzia-jhovanny/iconos/1.png";
import icono2 from "../../assets/boda-mitzia-jhovanny/iconos/2.png";
import icono3 from "../../assets/boda-mitzia-jhovanny/iconos/3.png";
import icono7 from "../../assets/boda-mitzia-jhovanny/iconos/7.png";
import icono8 from "../../assets/boda-mitzia-jhovanny/iconos/8.png";
import icono10 from "../../assets/boda-mitzia-jhovanny/iconos/10.png";
import mesa7 from "../../assets/boda-mitzia-jhovanny/mesa/7.png";
import mesa8 from "../../assets/boda-mitzia-jhovanny/mesa/8.png";
import mesa51 from "../../assets/boda-mitzia-jhovanny/mesa/51.png";

const INVITATION_ID = 34;
// 🎨 BACKGROUNDS
const BG_MAIN = "#FCFBF8";      // Blanco cálido (base de toda la invitación)
const BG_SECTION = "#F7F3EC";   // Beige muy sutil para separar secciones


// 🖋 TEXTOS
const TEXT_PRIMARY = "#1F1F1F"; // Negro suave (menos agresivo que #000)

// 🎯 BOTONES
const BUTTON_PRIMARY = "#A7863D"; // Dorado mate elegante

// ✨ DETALLES
const BORDER_COLOR = "#D8CCB8";   // Beige/dorado muy tenue
const DECORATION = "#A7863D";     // Dorado para líneas, iconos y detalles
const SHADOW_COLOR = "rgba(26, 26, 26, 0.08)"; // Sombra muy ligera

// ✨ Títulos
const TITLE_COLOR = "#A7863D";    // Dorado editorial

// 🔗 Enlaces
// const LINK_COLOR = "#8E6F2E";

// 🖱 Hover

const MAIN_TYPO = "pinyon-script-regular ";
const SECONDARY_TYPO = "bonodi-moda-regular to-upper letter-spacing-25em";
const BODY_TYPO = "inter-regular";
const URL_SONG = `${URL_REPO}canciones/Photograph-Ed Sheeran.mp3`;
// const SONGS_BY_ID: Record<number, string> = {

//     1: "AThousandYears-ChristinaPerri.mp3",
//     2: "L-O-V-E.mp3",
//     3: "Photograph-Ed Sheeran.mp3",
//     4: "TeddySwims-LoseControl.mp3",
//     5: "ThisWillBe.mp3",
//     6: "HaroldyElena-Por-Siempre.mp3",
// };
const COUNTDOWN_DATE = new Date(2026, 10, 6);
const RSVP_DATE_LINE = new Date(2026, 9, 28);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia",
        date: new Date(2025, 10, 6, 12, 0, 0),
        locationName: "Parroquia Medalla Milagrosa ",
        address: "Av Villa del Mar, Villas de Miramar, Guaymas, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/A3Kfq5advC1bnbur8?g_st=ac",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "2rem",
        bgColor: "white",
        borderSquare: true,
        icon: imgIglesia
    },
    {
        bgColor: "white",
        eventName: "Recepción",
        date: new Date(2026, 10, 6, 16, 0, 0),
        locationName: " Jardin Quinta Got, San Carlos, Son",
        address: "Av. A 1265, Sector ranchitos, San Carlos, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/BLLHhXG4Eu1FaRtZ8",
        colorButton: BUTTON_PRIMARY,
        colorIcon: TEXT_PRIMARY,
        fontSize: "2rem",
        borderSquare: true,
        icon: imgRecepcion
    },
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    fontSize: "1.5rem",
    mainPhrase: "Si su deseo es hacernos algún obsequio compartimos las opciones",
    items: [
        {
            link: "https://www.amazon.com.mx/wedding/guest-view/YB2G0H03RN60",
            icon: mesa8,
        },
        {
            link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60026387	",
            number: "60026387",
            icon: mesa7,
        },
    ],
    giftIcon: icono10,
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: TEXT_PRIMARY,
    bgColor: "#FFFFFF",
    showEnvelope: true,
    envelopeMainTypo: SECONDARY_TYPO,
    envelopeFontSize: "1.5rem",
    envelopePhrase: "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase: "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: mesa51,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "N. Tarjeta",
                    number: "4152314051913500",
                },
            ],
            bank: "BBVA",
            name: "Mitzia Alejandra Oceguera osuna ",
            textColor: TEXT_PRIMARY,
            bodyTypo: BODY_TYPO,
            bgColor: "white",
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};


const qoute: QouteProps = {
    qoute: "Lo que Dios unió, que el amor lo conserve por siempre",
    bodyTypo: MAIN_TYPO,
    italic: true,
    fontsize: "2rem",
};

const timelineData: CustomizedTimelineProps = {
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    colorPrimary: "white",
    colorTitle: "white",
    colorBody: "white",
    fontSize: "50px",
    bgColor: TEXT_PRIMARY,
    events: [
        {
            eventName: "Ceremonia Religiosa",
            date: new Date(2025, 10, 16, 12, 0, 0),
            icon: icono1,
        },
        {
            eventName: "Cóctel  de bienvenida",
            date: new Date(2025, 10, 16, 16, 0, 0),
            icon: icono2,
        },
        {
            eventName: "Boda civil",
            date: new Date(2025, 10, 16, 17, 0, 0),
            icon: icono3,
        },
        {
            eventName: "Cena",
            date: new Date(2025, 10, 16, 18, 0, 0),
            icon: icono7,
        },
        {
            eventName: "Fiesta",
            date: new Date(2025, 10, 16, 18, 45, 0),
            icon: icono8,
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
        fontFamily: "Inter",
        borderColor: TEXT_PRIMARY,
        color: TEXT_PRIMARY,
    },
};

const galleryImages = [
    imgG2,
];

const miniGallery = [
    imgM1,
    imgM3,
    imgM2,
];


const godParents = [
  {
    title: "Velacion",
    names: [" Diana Carolina López Miranda ", "Luis Ernesto Estrada Corrales"],
  },
  {
    title: "Lazo",
    names: ["Laura Cristina Herrera Franco ", " Carlos Aarón Torres Chávez"],
  },
  {
    title: "Arras",
    names: ["Erika Lorena Oceguera Osuna ", " Jorge Luis Felix Figueroa"],
  },
  {
    title: "Biblia y Rosario",
    names: ["Karina Ballesteros Díaz", " Jesús José Arce Galván "],
  },
  {
    title: "Ramo",
    names: ["Diana Lizeth Sánchez Fierros"],
  },
];

const WeddingMitzy  = () => {
    const [searchParams] = useSearchParams();

    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    // const songUrl = useMemo(() => {
    //     const songId = Number(searchParams.get("song"));
    //     const fileName = SONGS_BY_ID[songId] ?? SONGS_BY_ID[1];
    //     return `${URL_SONG}${encodeURIComponent(fileName)}`;
    // }, [searchParams]);

    // INTRO STATES
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
        document.title = "Boda Mitzia & Jhovanny";
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
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={TEXT_PRIMARY}/>

            {/* INTRO */}
            <EnvelopeIntro
                open={showIntro}
                onEnter={handleEnter}
                musicRef={musicRef}
                sealImage={imgSello}
                envelopeColor="#0F0F0F"

                overlayColor="#000"

                envelopeHighlight="rgba(255,255,255,.04)"

                shadowColor="rgba(0,0,0,.50)"

                // title="Una celebración está por comenzar"

                // brideName="Mitzia"
                // groomName="Jhovanny"
                // ampersonSymbol="y"

                // namesTypo={SECONDARY_TYPO}
                // ampersonTypo={MAIN_TYPO}
                // guestTypo={BODY_TYPO}
                // bodyTypo={BODY_TYPO}

                // backgroundColor="#F8F6F2"
                // primaryColor={TEXT_PRIMARY}

                // envelopeImg={`${URL_IMAGES_DEMOS}black-envelope.png`}
                // sealImg={`${URL_IMAGES}seal.png`}

                // sealPosition={introSealPosition}
                // bottomRightCornerImg={`${URL_IMAGES_DEMOS}white-flowers/4.png`}
                // topLeftCornerImg={`${URL_IMAGES_DEMOS}white-flowers/4.png`}
                // bottomRightCornerPosition={introBottomRightCornerPosition}
                // topLeftCornerPosition={introTopLeftCornerPosition}

                // guestName={guest ? guest.fullName : ""}
                // guestCount={invitedGuests}
            />

            {/* INVITACIÓN */}
            <Box>

            <CoverInline 
                ourWeddingStart={true}
                weddingDate="06. Noviembre.2026"
                bgImage={imgPortada}
                brideName="Mitzia" 
                symbolr={"y"} 
                groomName={"Jhovanny"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="3.8rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
               bgPositionY="40%"
                >
            </CoverInline>
              <div style={{backgroundColor:BG_SECTION, padding: "50px 20px" }}>
                <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}   display={"flex"}  justifyContent={"center"}>
           
                 <Qoute 
               {...qoute}>
            </Qoute>
           
            </Box>
            </div>
            <ImageMiddle bgPosition="30%" height="50vh" bgImage={imgEnmedio} bgPositionY="70%"></ImageMiddle>
              <div style={{backgroundImage: `url("${imgFondo1}")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:DECORATION,borderStyle:"solid",borderWidth:"1.5px" , opacity: 0.8,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegria de nuestra union, con la bendicion de Dios y nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO}>Alma Lorena Osuna Chávez </Typography>
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Alfredo Oceguera Mendoza</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Box
                                            sx={{
                                              width: 42,
                                              height: "1px",
                                              backgroundColor: DECORATION,
                                              opacity: 0.8,
                                              mb: { xs: 2, md: 2.5 },
                                            }}
                                          />
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO} > Irma Hernandez Vargas </Typography>
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Jose Moises Arce Saucedo</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}}  display={"flex"} justifyContent={"center"} >
                               <Typography
                               align="center"
                                          className={BODY_TYPO}
                                            sx={{
                                              mt: { xs: 2.5, md: 3.5 },
                                              
                                             
                                              lineHeight: 1.5,
                                              letterSpacing: "0.08em",
                                              textTransform: "uppercase",
                                              color: TEXT_PRIMARY,
                                              maxWidth: 300,
                                              // whiteSpace:"nowrap"
                                            }}
                                          >
                                            Tenemos el honor de invitarlos a la celebración de nuestra union
                                          </Typography>
                            
                        </Grid>
                            
                        </Grid>
                       
                
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
            <ImageMiddle bgPosition="center" height="50vh" bgImage={imgEnmedio2} bgPositionY="50%"></ImageMiddle>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={imgContador}
                typoHeader={MAIN_TYPO}
                typoCountdown={SECONDARY_TYPO} 
                fontSize="1.8rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>
            <Box
            sx={{
                background: BG_MAIN,
                py: { xs: 8, md: 12 },
                px: 3,
            }}
            >
            {/* Título */}
            <Typography
                className={SECONDARY_TYPO}
                textAlign="center"
                sx={{
                
                color: TITLE_COLOR,
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
              
                color: TEXT_PRIMARY,
                fontWeight: 300,
                fontSize: 14,
                maxWidth: 500,
                mx: "auto",
                
                }}
            >
                Con mucho cariño agradecemos a quienes nos acompañan como padrinos en
                este momento tan especial.
            </Typography>
             <Box
                        sx={{
                        width: 80,
                        height: 2,
                        background: BORDER_COLOR,
                        mx: "auto",
                        mb:8,
                        mt: 2,
                        }}
                    />

            <Grid container spacing={6}>
                {godParents.map((item, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box textAlign="center">
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

                        {item.names.map((n,i) =>(
                    <Typography
                    key={i}
                    className={MAIN_TYPO}
                        sx={{
                        mt: 1,
                      
                        color: TEXT_PRIMARY,
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
                    </Box>
                </Grid>
                ))}
            </Grid>
            </Box>
            <div style={{backgroundColor:BG_SECTION, padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <Box>
                <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="Boda de Mitzya & Sebastian"
                        startDate="20261205T180000"
                        endDate="20261206T020000"
                        location="San Carlos,Son"
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
                          <div style={{backgroundImage: `url("${imgItinerario}")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgb(0,0,0,.5)"}}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: timelineData.fontSize ? timelineData.fontSize :"2rem"}} color={timelineData.colorTitle} textAlign={"center"} className={`${timelineData.mainTypo}`}>{t("timeline.title")}</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={timelineData.colorBody} textAlign={"center"} className={`${timelineData?.bodyTypo}`}>Acompáñanos en cada instante
de esta celebración.</Typography>
            </Fade>
           
           </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                
                <Timeline>
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
                            <Typography translate="no" sx={{color:timelineData.colorPrimary,fontSize:"22px",}} className={`${SECONDARY_TYPO}`} variant="subtitle1" component="span">
                            {dayjs(item.date).format("hh:mm A")}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography  sx={{color:timelineData.colorPrimary}} className={`${BODY_TYPO}`}>{item.eventName} </Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
       
   
                </Timeline>
            </Grid>	
      </Grid>
        </div>
          <Box
      sx={{
        background: BG_MAIN,
        py: { xs: 8, md: 12 },
        px: 3,
      }}
    >
      {/* ---------- TITULO ---------- */}

      <Typography
        textAlign="center"
        sx={{
          fontFamily: "Pinyon Script",
          fontSize: { xs: 48, md: 70 },
          color: TITLE_COLOR,
        }}
      >
        Código de Vestimenta
      </Typography>

      <Typography
        textAlign="center"
        sx={{
          fontFamily: "Bodoni Moda",
          textTransform: "uppercase",
          letterSpacing: ".35em",
          color: TEXT_PRIMARY,
          fontSize: "1.5rem",
            mt:2,
            mb:2

        }}
      >
        Formal de día
      </Typography>

      {/* <Typography
        textAlign="center"
        sx={{
          mt: 5,
          fontFamily: "Inter",
          color: TEXT_PRIMARY,
          maxWidth: 650,
          mx: "auto",
          lineHeight: 1.8,
        }}
      >
        Agradecemos evitar prendas con brillos y los colores:
      </Typography> */}

      {/* ----------- COLORES ----------- */}

      {/* <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        mt={3}
        mb={7}
        flexWrap="wrap"
      >
        {forbiddenColors.map((item) => (
          <Stack
            key={item.label}
            alignItems="center"
            spacing={1}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                bgcolor: item.color,
                border: `1px solid ${item.border ?? item.color}`,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 13,
                color: TEXT_PRIMARY,
              }}
            >
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack> */}

      {/* ----------- CARDS ----------- */}

      <Grid container spacing={4} justifyContent="center">

        {/* MUJERES */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              border: `1px solid ${BORDER_COLOR}`,
            //   borderRadius: 4,
              p: 4,
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                color: TITLE_COLOR,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                fontSize: 22,
              }}
            >
              Mujeres
            </Typography>

            <Box
              component="img"
               src={imgMujeres}
              sx={{
                width: "100%",
                maxWidth: 300,
                mt: 3,
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                color: TEXT_PRIMARY,
                lineHeight: 2,
                mb: 4,
              }}
            >
              • Vestido largo
           
              • Sin brillos
             
              • Evitar blanco, beige,
              
              negro y rojo
            </Typography>

            <CustomButton
              label="Ver inspiración"
              href="https://pin.it/6vkcAqPZe"
              bgColor={BUTTON_PRIMARY}
              color="#FFF"
              width="220px"
            />
          </Box>
        </Grid>

        {/* HOMBRES */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              border: `1px solid ${BORDER_COLOR}`,
              
              p: 4,
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bodoni Moda",
                color: TITLE_COLOR,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                fontSize: 22,
              }}
            >
              Hombres
            </Typography>

            <Box
              component="img"
              src={imgHombres}
              sx={{
                width: "100%",
                maxWidth: 300,
                mt: 3,
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                color: TEXT_PRIMARY,
                lineHeight: 2,
                mb: 4,
              }}
            >
              • Traje
              
              • Corbata o moño
            </Typography>

            <CustomButton
              label="Ver inspiración"
              href="https://pin.it/6HhybIupA"
              bgColor={BUTTON_PRIMARY}
              color="#FFF"
              width="220px"
            />
          </Box>
        </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <Box
    sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        backgroundColor: BG_MAIN,
        display: "flex",
        justifyContent: "center",
    }}
>
    <Box
        sx={{
            width: "100%",
            maxWidth: 520,
            bgcolor: BUTTON_PRIMARY,
            borderRadius: "260px 260px 0 0",
            px: { xs: 4, md: 7 },
            py: { xs: 8, md: 10 },
            color: "#fff",
            textAlign: "center",
            boxShadow: SHADOW_COLOR,
        }}
    >
        

        <Typography
            sx={{
                fontFamily: "Bonodi",
                fontStyle: "italic",
                fontSize: {
                    xs: ".95rem",
                    md: "1.1rem",
                },
                lineHeight: 2.2,
                opacity: .95,
            }}
        >
            Adoramos a los pequeños,<br></br>
            
            sin embargo esta celebración
            
            está destinada<br></br>     
            
            exclusivamente para adultos.<br></br>
            
            ¡Agradecemos su comprensión!
        </Typography>
            <Typography
            sx={{
                fontFamily: "Bonodi",
                fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                },
                letterSpacing: ".18em",
                mb: 5,
                mt:5
            }}
        >
            NO NIÑOS
        </Typography>
        <Box
            sx={{
                width: 120,
                height: "1px",
                bgcolor: "rgba(255,255,255,.35)",
                mx: "auto",
                my: 5,
            }}
        />

        <Typography
            sx={{
                fontFamily: "Pinyon Script",
                fontSize: "2.5rem",
                color: "#fff",
            }}
        >
            Gracias
        </Typography>
    </Box>
</Box>
              </Grid>
      </Grid>
    </Box>
            <div style={{backgroundImage: `url("${imgFondo2}")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat", }}>
            <Grid container spacing={2} padding={1} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: "100%",
                                maxWidth: 470,
                                bgcolor: "white",
                                p: { xs: 4, md: 5 },
                                borderRadius: 0,
                                boxShadow: "0 18px 45px rgba(0,0,0,.08)",
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
                                    
                                    lineHeight: 1.9,
                                    mb: 2,
                                            
                                                fontSize:"2.5rem",
                                }}
                            >
                                
                            {giftListData.title}
                                    
                            </Typography>
                        

                           

                            {/* Segunda frase */}

                            <Typography
                                className={BODY_TYPO}
                                sx={{
                                fontSize:".8rem",
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    lineHeight: 1.9,
                                    mb: 5,
                                    
                                    
                                }}
                            >
                            Para quienes deseen obsequiarnos un presente, contaremos con un buzón de sobres el día del evento <br></br>
                            Asimismo, podrán realizar una transferencia bancaria o elegir un regalo de nuestras mesas.
                                </Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        >
                                        <Box
                                            component="img"
                                            src={icono10}
                                            sx={{
                                            height: "100px",
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                            fontSize: ".8rem",
                                            color: giftListData.textColor,
                                            textAlign: "center",
                                            lineHeight: 1.9,
                                           
                                            mb: 5,
                                            }}
                                        >
                                            EFECTIVO
                                        </Typography>
                                        </Box>
                                        

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
                                            src={mesa51}
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
                                            className={BODY_TYPO}
                                            sx={{
                                                fontSize: {
                                                xs: "1.65rem",
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
                                            {bank.numbers[0].number}
                                            <IconButton
                                            onClick={() => {
                                            navigator.clipboard.writeText(bank.numbers[0].number.trim());
                                        
                                            }}
                                        >
                                        <ContentCopyIcon sx={{color: TEXT_PRIMARY}} />
                                        </IconButton>
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
                                            {bank.name}
                                        </Typography>

                                        
                                    </Stack>
                                </Paper>
                            ))}

                         {/* Frase principal */}

                            {/* <Typography
                                className={BODY_TYPO}
                                sx={{
                                    color: giftListData.textColor,
                                    textAlign: "center",
                                    
                                    lineHeight: 1.9,
                                    mb: 3,
                                            
                                                fontSize:".8rem",
                                }}
                            >
                                Para nosotros lo mas importante es su presencia,<br></br> 
                                pero si desean hacernos un obsequio tendremos estas opciones<br></br> 
                            
                                    
                            </Typography> */}

                            {/* Sobre */}

                            {giftListData.items?.map((item, index) => (
                                <Paper
                                    key={index}
                                    elevation={0}
                                    
                                    sx={{
                                        bgcolor: giftListData.bgColor,
                                        borderRadius: "0",
                                        p: 4,
                                        border: "1.5px solid rgba(190,170,130,.45)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,.05)",
                                        mb:2,
                                        mt:2
                                    }}
                                >
                                    <Stack
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Box
                                            component="img"
                                            src={item.icon}
                                            sx={{
                                                height: 40,
                                                
                                            }}
                                        />

                                        <Typography
                                            className={BODY_TYPO}
                                            sx={{
                                                fontSize: {
                                                xs: "1.65rem",
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
                                            {item.number}
                                        </Typography>

                                        <CustomButton
                                            label="Ver mesa de regalos"
                                            bgColor={BUTTON_PRIMARY}
                                            color="white"
                                            href={item.link}
                                        />

                                    
                                        
                                    </Stack>
                                </Paper>
                            ))}
                        
                        </Paper>
                    </Box>
                    
                </Grid>
               </Grid>
                <MiniGallery
                    images={miniGallery}
                     backgroundColor="rgb(250,250,250,.8)"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
                    </div>
            <ImageMiddle bgPosition="center" height="50vh" bgImage={imgEnmedio3} bgPositionY="50%"></ImageMiddle>
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
                    background: BUTTON_PRIMARY,
                    borderRadius: "180px 180px 0 0",
                    px: 4,
                    py: 6,
                    textAlign: "center",
                    boxShadow: `0px 18px 40px ${SHADOW_COLOR}`,
                    }}
                >
                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
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
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        fontSize: {
                        xs: "6rem",
                        md: "7rem",
                        },
                        lineHeight: 1,
                        my: 2,
                    }}
                    >
                    {invitedGuests}
                    </Typography>

                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        letterSpacing: ".18em",
                        fontSize: ".9rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                    }}
                    >
                    Lugares para
                    <br />
                    celebrar juntos
                    </Typography>
                    <Typography
                    sx={{
                        fontFamily: "Bodoni Moda",
                        color: "#FFF",
                        letterSpacing: ".18em",
                        fontSize: "2rem",
                        textTransform: "uppercase",
                        lineHeight: 1.8,
                        mt:2
                    }}
                    >
                    CONFIRMA TU ASISTENCIA
                    </Typography>
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
                        >
                            
            </RSVPForm>
                </Box>
                
                </Box>
            
          
                        <div style={{backgroundImage: `url("${imgFondo2}")`, backgroundSize: "cover", backgroundPosition: "right", padding: "10px 10px" }}>

                    
                        
            <div style={{height:50}}></div>
                  <Gallery photos={galleryImages}>
                
            </Gallery>
         </div>
            <FooterInvites bgColor={"white"} color={TEXT_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingMitzy;
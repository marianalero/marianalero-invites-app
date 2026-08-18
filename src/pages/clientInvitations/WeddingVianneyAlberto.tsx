import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import formal from './../../assets/iconos/dresscode/formal.svg';
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Container, Divider, Paper, Stack, Typography,  } from "@mui/material";


import RSVPForm from "../../components/RSVP/RSVPForm";
import { Fade } from "react-awesome-reveal";
import CoverInline from "../../components/Cover/CoverImage/CoverInline";

import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";
import Gallery from "../../components/Gallery/Gallert";
import EventCardImage from "../../components/EventCard/EventCardImage";

const INVITATION_ID = 9;
const BG_MAIN = "#FCFBF8";
const BG_SECTION = "#F2F1EC";
const BG_ACCENT = "#A6A998";
const BG_CARD ="#f2f1e9"
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
const URL_IMAGES = `${URL_REPO}boda/boda-vianney-alberto/`;
const URL_SONG = `${URL_REPO}canciones/AThousandYears-ChristinaPerri.mp3`;
const COUNTDOWN_DATE = new Date(2027, 1, 13,);
const RSVP_DATE_LINE = new Date(2027, 0, 31);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Religiosa",
        date: new Date(2027, 1, 13, 17, 0, 0),
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
        image: `${URL_IMAGES}iglesia.jpg`,
    },
    {
        eventName: "Recepción",
        date: new Date(2027, 1, 13, 17, 0, 0),
        locationName: "Hacienda Jesusita",
        address: "Av. San Antonio 109, Seccion 562, Palo Verde, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/FkAiYStqEi99qrPQA",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "4rem",
        bgColor: BG_CARD,
        borderSquare: true, 
        image: `${URL_IMAGES}recepcion.jpg`,
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
            icon: `${URL_IMAGES}mesa/7.png`,
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
    envelopePhrase: "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase: "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: `${URL_IMAGES}iconos (17)/7.svg`,
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


const withOutKids: WithoutKidsProps = {
    bodyTypo: BODY_TYPO,
    subtitle2: "no niños",
};


// const timelineData: CustomizedTimelineProps = {
    
//     mainTypo: MAIN_TYPO,
//     bodyTypo: BODY_TYPO,
//     colorPrimary: CHAMPAGNE,
//     colorTitle: CHAMPAGNE,
//     colorBody: CHAMPAGNE,
//     fontSize: "50px",
//     bgColor: BG_ACCENT,
//     events: [
//         {
//             eventName: "Cóctel  de bienvenida",
//             date: new Date(2026, 9, 9, 17, 0, 0),
//             icon: `${URL_IMAGES}iconos (17)/2.svg`,
//         },
//         {
//             eventName: "Nupcias",
//             date: new Date(2026, 9, 9, 17, 30, 0),
//             icon: `${URL_IMAGES}iconos (17)/4.svg`,
//         },
//         {
//             eventName: "Fotos",
//             date: new Date(2026, 9, 9, 18, 0, 0),
//             icon: `${URL_IMAGES}iconos (17)/5.svg`,
//         },
//         {
//             eventName: "Cena",
//             date: new Date(2026, 9, 9, 18, 30, 0),
//             icon: `${URL_IMAGES}iconos (17)/6.svg`,
//         },
//         {
//             eventName: "Inicio de fiesta",
//             date: new Date(2026, 9, 9, 19, 30, 0),
//             icon: `${URL_IMAGES}iconos (17)/8.svg`,
//         },
//     ],
// };

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

const galleryImages = [
    `${URL_IMAGES}galeria1.jpg`,
    `${URL_IMAGES}galeria2.jpg`,
    `${URL_IMAGES}galeria3.jpg`,
];

const godparents= [
  {
    names: ["María Jesús Gámez Ramírez y Filiberto Gámez Domínguez"],
  },
  {
    names: ["Claudia Mendivil Félix y Rodolfo Gamez Félix"],
  },
];

const WeddingVianneyAlberto  = () => {
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
        document.title = "Boda Avielisse & Oskar";
    }, []);

    return (
           <div
            style={{
                backgroundColor: BG_MAIN,
                maxWidth: "100%",
                overflowY: "auto",
            }}
        >
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={BUTTON_PRIMARY}/>

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

                envelopeImg={`${URL_REPO}demos/black-envelope.png`}
                sealImg={`${URL_IMAGES}seal.png`}

                sealPosition={introSealPosition}
                // bottomRightCornerImg={`${URL_IMAGES}demos/white-flowers/4.png`}
                // topLeftCornerImg={`${URL_IMAGES}demos/white-flowers/4.png`}
                bottomRightCornerPosition={introBottomRightCornerPosition}
                topLeftCornerPosition={introTopLeftCornerPosition}

                guestName={guest ? guest.fullName : ""}
                guestCount={invitedGuests}
            />

            {/* INVITACIÓN */}
            <Box
                sx={{
                    opacity: showInvitation ? 1 : 0,

                    filter: showInvitation
                        ? "blur(0px)"
                        : "blur(20px)",

                    transform: showInvitation
                        ? "scale(1)"
                        : "scale(1.03)",

                    transition:
                        "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
            >

            <CoverInline 
                ourWeddingStart={true}
                weddingDate="13 de Febrero, 2027"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Vianney Idalia" 
                symbolr={"&"} 
                groomName={"Alberto "} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="2.5rem"
               verticalPosition="top"
               ampersonClassName={MAIN_TYPO}
               bodyTypoClassName={BODY_TYPO}
                >
            </CoverInline>
              <div style={{backgroundColor: BG_CARD, backgroundPosition: "bottom", padding: "50px 20px" , display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Box padding={2}  sx={{ height:"25vh", width: "80vw", backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: `8px 8px 8px ${CHAMPAGNE}`,position:"relative"}}  display={"flex"}  justifyContent={"center"}>
                
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={1} > 
                        
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1rem", fontStyle: "italic!important" }} >"Eres la respuesta a todo lo que alguna vez le pedí a la vida"</Typography>
                            </Fade>		
                        </Grid>	
                 </Grid>
            </Box>
      </div>     
            {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpg`} bgPositionY="30%"></ImageMiddle> */}
            <Box
                height={"100vh"}
                bgcolor="lightgray"
            ></Box>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    
               
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegría de nuestra unión <br></br>COn la bendición de Dios y el apoyo incondicional de nuestros padres</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TITLE_COLOR, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Idalia Gamez Ramirez  </Typography>
                                <Typography sx={{color:TITLE_COLOR, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Leopoldo Rosas Mendivil </Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
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
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TITLE_COLOR, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO} >Maria Argelia Félix Gaxiola</Typography>
                            <Typography sx={{color:TITLE_COLOR, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Humberto Mendivil Félix </Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros este momento tan especial</Typography>
                            </Fade>
                        </Grid>
                            
                        </Grid>

                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={SECONDARY_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>

            <Box
    sx={{
        backgroundColor: BG_MAIN,
        py: { xs: 8, md: 10 },
        px: 3,
    }}
>
    <Container maxWidth="sm">

        <Typography
            sx={{
                fontFamily: "'Alex Brush', cursive",
                fontSize: { xs: 52, md: 64 },
                color: TITLE_COLOR,
                textAlign: "center",
                lineHeight: 1,
            }}
        >
            Padrinos
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

        <Stack spacing={5} alignItems="center">
        {
            godparents.map((item,index) => (
            <Typography
            key={index}
            className={BODY_TYPO}
                sx={{
                    color: TEXT_DARK,
                    
                    textAlign: "center",
                    fontWeight: 400,
                    letterSpacing: 0.3,
                    lineHeight: 1.8,
                }}
            >
                {item.names}
            </Typography>

    
            ))
        }
        </Stack>

    </Container>
</Box>
      

            <div style={{backgroundColor:"white"}}>
            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <Box padding={4}>
                <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:TITLE_COLOR, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="Boda de Vianney y Alberto"
                        startDate="20270213T170000"
                        endDate="20270214T020000"
                        location="Salón Manglares, San Carlos, Son."
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgPositionY="30%"></ImageMiddle> */}
              
            <div style={{backgroundColor:BG_MAIN}}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
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
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>

                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} display={"flex"} justifyContent={"center"}  >
                <Grid container spacing={2}  paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
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

                                                <Typography
                                                    sx={{
                                                        color: TEXT_PRIMARY,
                                                        fontSize: 14,
                                                        textAlign: "center",
                                                        fontStyle: "italic",
                                                        lineHeight: 1.7,
                                                    }}
                                                >
                                                    De preferencia, vestimenta formal.
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                    </Grid>

                                </Stack>
                            </Paper>

                        </Container>
                    </Box>
                </Grid>
               
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                    <Box 
                        component="img" 
                        src={`${URL_IMAGES}flores/6.png`} 
                        alt="Description" 
                        sx={{ 
                            height: { xs: 120, md: 150 }, 
                
                            opacity:.8,
                            transform: "rotate(270deg)",
                    }}
                        />
                        </Fade>
                 
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <WithoutKids {...withOutKids} /> 
                    </Grid>
                      

               </Grid>
               </Box>
                           
            <div style={{height:100}}></div>
                 <Gallery photos={galleryImages}></Gallery>
         </div>
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingVianneyAlberto;
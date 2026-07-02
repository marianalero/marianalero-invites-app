import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";


import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Typography,  } from "@mui/material";


import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import { Fade } from "react-awesome-reveal";

import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";

import CalendarButton from "../../components/CalendarButton/CalendarButton";
import { getGuestById } from "../../services/guestApiClient";
import { Guest } from "../../models/guest";

import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import Adornment from "../../components/Adornment/Adornment";
import Cover from "../../components/Cover/CoverImage/Cover";

const INVITATION_ID = 9;
// 🌸 BACKGROUNDS
const BG_MAIN = "#FDFBF9";
const BG_SECTION = "#F7F2EE";
const BG_ACCENT = "#EFC6CF";

// 🖋 TEXTOS
const TEXT_PRIMARY = "#98AE9D";
// const TEXT_DARK = "#6F5B53";

// 🎯 BOTONES
const BUTTON_PRIMARY = "#D6B5A7";
// const BUTTON_HOVER = "#C8A191";

// // 🌿 COLORES DE APOYO
// const ACCENT_GREEN = "#BCCDBF";
// const ACCENT_GREEN_DARK = "#98AE9D";
// const ACCENT_GOLD = "#CDB295";

// ✨ DETALLES
const BORDER_COLOR = "#E8DDD5";
const SHADOW_COLOR = "rgba(143,123,114,.15)";

// ✨ TÍTULOS
const TITLE_COLOR = "#C4A29A";

// 🐎 ESTILO

const MAIN_TYPO = "alex-brush-regular";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "montserrat-400";
const URL_IMAGES = `${URL_REPO}xv/xv-evany/`;
const URL_SONG = `${URL_REPO}canciones/ramon-ayala-mi-tesoro.mp3`;
const COUNTDOWN_DATE = new Date(2026, 10, 13);
const RSVP_DATE_LINE = new Date(2026, 9, 20);

const eventCards: EventCardProps[] = [
    {
        eventName: "Misa",
        date: new Date(2026, 10, 13, 18, 0, 0),
        locationName: "Parroquia Nuestra señora del Rosario de Fátima",
        address: "Calle Guadalupe Victoria, San Benito, 83190 Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/FTEe2ZXxo17mFptM6",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        icon: `${URL_IMAGES}iglesia.png`,
    },
    {
        eventName: "Recepción",
        date: new Date(2026, 10, 13, 21, 0, 0),
        locationName: "Campestre Monsal",
        address: "Carretera 26, Km2.8, San José de las Minitas",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/FKtKC7UmKPpxsNuZ9",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
    
        icon: `${URL_IMAGES}recepcion.png`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    color: TEXT_PRIMARY,
    bgColor: BG_MAIN,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal !Gracias!",
    envelopeTitleColor: TEXT_PRIMARY,
    bankIconStart: `${URL_IMAGES}sobre.png`,
};


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
        borderColor: BG_MAIN,
        color: BG_MAIN,
    },
};

// const galleryImages = [
//     `${URL_IMAGES}galeria1.JPEG`,
//     `${URL_IMAGES}galeria2.JPG`,
//     `${URL_IMAGES}galeria3.JPEG`,
// ];

    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Color verde reservado para la quinceañera",
        omitColorsText: "No color rojo",
    }
   
// const padrinos = [
//         "Icela Grijalva García y Javier Valdez Ruiz",
//         "Claudina Valenzuela y Daniel Grijalva García",
//         "Lucrecia figueroa Lugo y Juan Luis Coronado amescua ",
//         "Gianelly Maldonado Araujo y José Alberto Baca Rey",
//         "Karely Berenice Fourcade Othon y Luis Donaldo Coronado Rey",
//       ]

const XVEvany  = () => {
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
        document.title = "XV Evany";
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

                brideName="Brandon"
                groomName="Alejandra"
                ampersonSymbol="&"

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}

                envelopeImg={`${URL_IMAGES}sobre-intro.png`}
                sealImg={`${URL_IMAGES}sello.png`}

                sealPosition={introSealPosition}
                bottomRightCornerImg={`${URL_IMAGES}flores/5.png`}
                topLeftCornerImg={`${URL_IMAGES}flores/5.png`}
                bottomRightCornerPosition={introBottomRightCornerPosition}
                topLeftCornerPosition={introTopLeftCornerPosition}

                guestName={guest ? guest.fullName : ""}
                guestCount={guest ? guest.totalAssigned : invitedGuests}
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

            <Cover 
            bgImage={`${URL_IMAGES}portada.jpeg`}
            bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="13.11.2026"
                 subtitle="Mis XV años"
                  brideName="Evany"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                fontSize="4rem"
                verticalPosition="top"
                margin="60px"

                  >
            </Cover>
               <Box></Box>
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6}> 
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                             <Box
                    sx={{
                        backgroundImage: `url("${URL_IMAGES}marfil-hor.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50px",
                        position: "relative",
                    }}
                ></Box>
                            <Fade direction="up" triggerOnce={true}>
                                <Box
                    component="img"
                    src={`${URL_IMAGES}ChatGPT Image 29 jun 2026, 01_14_53 p.m..png`}
                    sx={{
                    
                    height: 120,
                    
                    }}
                />
                            </Fade>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >"frase"</Typography>
                            </Fade>		
                        </Grid>	
                 </Grid>
           
                    <Box
                    sx={{
                        backgroundColor: "lightgrey",
                        height: "50vh",
                    }}></Box>
            {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.JPEG`} bgPositionY="30%"></ImageMiddle> */}
        <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

                                <Grid container justifyContent="center" padding={2}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Box
                textAlign="center"
                sx={{
                    width: "100%",
                    mt: 6,
                    mb: 6,
                }}
                >
                <Grid container spacing={2} justifyContent="center" mb={3}>
                    <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                    <Fade direction="up" >
                    {/* <Typography  className={`${BODY_TYPO}`} >
                        Deseamos compartir con ustedes la alegría de celebrar un momento muy especial
                    </Typography> */}
                    <Grid container justifyContent="center" sx={{ m: 4 }}>
                        
                    <Grid>
                        <Fade direction="up" >
                        <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
                    
                        </Fade>
                    </Grid>
                    </Grid>
                    <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>
                    </Fade>
                    </Grid>


                    <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                    <Fade direction="up" >
                    <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                        sx={{fontSize: "2rem" ,lineHeight:2, color: TITLE_COLOR }}
                    >
                        Rosario Aglahee Coronado Rey
                    </Typography>
                    </Fade>
                    </Grid>

                    <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                    <Fade direction="up" >
                    <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                        sx={{  fontSize: "2rem",lineHeight:2 , color: TITLE_COLOR,fontFeatureSettings: '"liga" 0, "locl" 0', }}
                    >
                   David Isidro Grijalva García 
                    </Typography>
                    </Fade>
                    </Grid>
                </Grid>
                
                <Grid container justifyContent="center">
                    <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                    <Fade direction="up" >
                    <Typography
                        className={BODY_TYPO}
                        sx={{ mt: 2 }}
                    >
                        Tenemos el honor de invitarlos a la celebración de mis XV años.
                    </Typography>
                    </Fade>
                    </Grid>
                
                </Grid>
                <Grid container justifyContent="center" sx={{ mt: 4 }}>
                        
                    <Grid>
                        <Fade direction="up" >
                            <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
                    
                        </Fade>
                    </Grid>
                    </Grid>
                </Box>
            </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={`${URL_IMAGES}contador.JPEG`}
                typoHeader={SECONDARY_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>
      

            <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <Box>
                <Typography textAlign={"center"} className={`${SECONDARY_TYPO}`} sx={{color:BG_MAIN, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="XV Evany"
                        startDate="20261113T190000"
                        endDate="20261114T020000"
                        location="Parroquia Nuestra señora del Rosario de Fátima/Campestre Monsal"
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            <ImageMiddle bgPosition="40%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.JPEG`} bgPositionY="50%"></ImageMiddle>
                
            <div style={{backgroundColor:BG_SECTION, padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}
         
            sx={{
                background: "#fff",
                border: `1px solid ${BORDER_COLOR}`,
                borderRadius: "26px",
                p: 1,
                boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}
        >
                 
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
            
                    </div>
            
                    <Box
                        sx={{
                            backgroundColor: BG_MAIN,
                            position: "relative",
                            maxWidth: "750px",
                            mx: "auto",
                            px: { xs: 2, md: 4 },
                            py: 6,
                        }}
                    >
                         <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Typography textAlign={"center"} className={MAIN_TYPO} sx={{color:TITLE_COLOR, fontSize: "2.5rem"}} >¡Confirma tu asistencia!</Typography>
                         </Grid>
                          <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} marginTop={2}>
                         <Fade direction="up" >
                    <Box 
                        component="img" 
                        src={`${URL_IMAGES}adornos/7.png`} 
                        alt="Description" 
                        sx={{ 
                            height: { xs: 40, md: 60 }, 
                
                            opacity:.8,
                            
                    }}
                        />
                        </Fade>
                 
                    </Grid>
                            <RSVPForm
                            hideTitle={true}
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
                                fontSize="3rem"
                            />
                           
                        </Box>
                               <ImageMiddle bgPosition="50%" height="70vh" bgImage={`${URL_IMAGES}enmedio3.JPEG`} bgPositionY="50%"></ImageMiddle>
                        <Box
    sx={{
        py: 10,
        px: 3,
        backgroundColor: BG_MAIN,
        textAlign: "center"
    }}
>
<Box  sx={{backgroundColor:BG_MAIN}} >
                  <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/7.png`} width={"250px"} />
              
                </Fade>
              </Grid>
          {/* <WithoutKids subtitle2="NO NIÑOS" bodyTypo={BODY_TYPO} ></WithoutKids> */}
              </Box>

</Box>
            
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default XVEvany;
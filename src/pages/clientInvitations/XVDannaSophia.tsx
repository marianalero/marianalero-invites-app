import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";


import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";

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
// 🎨 FONDOS
const BG_MAIN = "#FAF8F4";      // Marfil
const BG_SECTION = "#F3EEE8";   // Crema ligeramente más cálido
const BG_ACCENT = "#22385C";    // Azul marino principal

// 🖋 TEXTOS
const TEXT_PRIMARY = "#2E4368"; // Azul marino para títulos y texto importante
// const TEXT_DARK = "#6B625C"; // Gris cálido (opcional)

// 🎯 BOTONES
const BUTTON_PRIMARY = "#2E4368"; // Azul marino

// ✨ DETALLES
const ACCENT_GOLD = "#C8A96B";    // Champagne dorado

const SHADOW_COLOR = "rgba(34,56,92,.12)";

// ✨ TÍTULOS
const TITLE_COLOR = "#2E4368";

// 🐎 ESTILO

const MAIN_TYPO = "great-vibes-regular";
const SECONDARY_TYPO = "dm-serif-display-regular";
const BODY_TYPO = "libre-baskerville to-upper";
const URL_IMAGES = `${URL_REPO}xv/xv-danna-sophia/`;
const URL_SONG = `${URL_IMAGES}cancion.mp3`;
const COUNTDOWN_DATE = new Date(2026, 8, 5);
const RSVP_DATE_LINE = new Date(2026, 7, 15);

const eventCards: EventCardProps[] = [
    {
        eventName: "Misa",
        date: new Date(2026, 8, 5, 16, 0, 0),
        locationName: "Parroquia Santa Eduwiges",
        address: "C. Israel González S/N, Modelo, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/FTEe2ZXxo17mFptM6",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        borderSquare: true,
        icon: `${URL_IMAGES}iglesia.png`,
        iconSize: "200px",
    },
    {
        eventName: "Recepción",
        date: new Date(2026, 8, 5, 21, 0, 0),
        locationName: "Casas Nool",
        address: "Haciendas Real del Catorce, 83310 El Real del Catorce, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/xKMXFc8TbB1BuD8LA?g_st=iw",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        borderSquare: true,
        icon: `${URL_IMAGES}recepcion.png`,
        iconSize: "200px",
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
    bankIconEnd: `${URL_IMAGES}iconos-sobre.png`,
};


const introSealPosition = {
    top: "70%",
    left: "50%",
    width: "70px",
    height: "70px",
    transform: "translate(-50%, -50%)",
};

const introBottomRightCornerPosition = {
    bottom: "-60px",
    right: "-40px",
    width: "150px",
    height: "200px",
    transform: "rotate(270deg)",
};

const introTopLeftCornerPosition = {
    top: "-50px",
    left: "-80px",
    width: "200px",
    height: "200px",
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
  
//     `${URL_IMAGES}galeria2.jpg`,

// ];

    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:TITLE_COLOR,
        type:1,
        title:"Formal",
        omitColorsLabel:"Color azul  marino y rey reservado para la quinceañera",
        // omitColorsText: "No color rojo",
        fontSize:"2.5rem",
    }
   
const padrinos = [
        "padrino 1",
        "padrino 2",
       
      ]

const XVDannaSophia  = () => {
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
        document.title = "XV Danna Sophia";
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

                title="Te invito a celebrar mis XV años"

                brideName=""
                groomName="Danna Sophia"
                ampersonSymbol=""

                namesTypo={MAIN_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor={BG_MAIN}
                primaryColor={TEXT_PRIMARY}
                
                envelopeImg={`${URL_IMAGES}envelope.png`}
                sealImg={`${URL_IMAGES}seal.png`}

                sealPosition={introSealPosition}
                bottomRightCornerImg={`${URL_IMAGES}flores/1.png`}
                topLeftCornerImg={``}
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
            bgImage={`${URL_IMAGES}portada.jpg`}
            bgImage2={`${URL_IMAGES}portada.jpg`}
                  weddingDate="05 Septiembre, 2026 "
                 subtitle="Mis XV años"
                  brideName="Danna Sophia"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                fontSize="4rem"
                verticalPosition="center"
                margin="60px"

                  >
            </Cover>
                <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px 20px" }}>
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6}> 
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                             <Box
                    sx={{
                        backgroundColor:BG_ACCENT,
                        p: 1,
                        boxShadow: `0 15px 35px ${SHADOW_COLOR}`,
                        position: "relative",
                        
                    }}
                >
                           <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6}> 
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                                <Box
                                    component="img"
                                    src={`${URL_IMAGES}flores/3.png`}
                                    sx={{
                                    
                                    height: 100,
                                    
                                    }}
                                />
                            </Fade>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1rem", fontStyle: "italic!important", color: BG_MAIN }} >Frase</Typography>
                            </Fade>		
                        </Grid>	
                        </Grid>
                        </Box>
                 </Grid>
                 </Grid>
           
              
            {/* <ImageMiddle bgPosition="50%" height="90vh" bgImage={`${URL_IMAGES}enmedio1.jpg`} bgPositionY="50%"></ImageMiddle> */}
            <Box
                sx={{
                    height: "90vh",
                    backgroundColor:"lightgray",
                }}
                ></Box>
        {/* <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px 20px" }}> */}

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
                        
                  
                    </Grid>
                    <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mi madre</Typography>
                    </Fade>
                    </Grid>


                    <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                    <Fade direction="up" >
                    <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                        sx={{fontSize: "2.5rem" ,lineHeight:2, color: TITLE_COLOR }}
                    >
                     Yunelly Quihuis 
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
                            <Box
                                component="img"
                                src={`${URL_IMAGES}flores/4.png`}
                                alt="Description"
                                sx={{
                                    height: { xs: 150, md: 150 },
                                    // opacity: .8,
                                   
                                }}
                            />
                      
                    
                        </Fade>
                    </Grid>
                    </Grid>
                </Box>
            </Grid>
            </Grid>
            {/* </div> */}
            </div>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={SECONDARY_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"
                marginTop="30px"
                padding="1em"
                alignItems="end"
                >  
            </CountDown>
            <Box
                component="section"
                sx={{
                    py: { xs: 7, md: 10 },
                    px: 3,
                    textAlign: "center",
                    backgroundColor: BG_SECTION,
                }}
            >
               

                <Typography
                    className={BODY_TYPO}
                    sx={{
                       
                        fontSize: { xs: ".9rem", md: "1rem" },
                        
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        mb: { xs: 5, md: 6 },
                    }}
                >
                    Gracias por acompañarme en este día tan especial
                </Typography>
                <Typography
                    className={MAIN_TYPO}
                    sx={{
                        
                        fontSize: { xs: "2.5rem", md: "2.7rem" },
                        color: TITLE_COLOR,
                        mb: 4,
                    }}
                >
                    Mis padrinos
                </Typography>
                <Box
                    sx={{
                        maxWidth: 520,
                        mx: "auto",
                    }}
                >
                    {padrinos.map((name, index) => (
                        <Box key={name}>
                            <Typography
                            className={`${SECONDARY_TYPO} to-upper`}
                                sx={{
                                    
                                    fontSize: { xs: "1rem", md: "1.55rem" },
                                     
                                    lineHeight: 1.4,
                                }}
                            >
                                {name}
                            </Typography>

                            {index < padrinos.length - 1 && (
                                <Typography
                                    sx={{
                                        my: { xs: 2.2, md: 2.8 },
                                        color: ACCENT_GOLD,
                                        fontSize: "1rem",
                                    }}
                                >
                                   <Box
                                    component="img"
                                    src={`${URL_IMAGES}flores/4.png`}
                                    alt="Description"
                                    height={50}
                                   >

                                   </Box>
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`,backgroundPosition: "center",backgroundSize: "cover", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} position="relative" >
                   
                
                     
            {eventCards
                .map((item,index) => (   
                     <Box display={"flex"} justifyContent={"center"} marginBottom={4}
                sx={{
                   
                    boxShadow: `0 15px 35px ${SHADOW_COLOR}`
                }}
                >
                   
                
                   <EventCard key={index} {...item}></EventCard>
                   </Box>       
                ))
            }
            </Grid>
            <Box>
                <Typography textAlign={"center"} className={`${SECONDARY_TYPO}`} sx={{color:BG_MAIN, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                <Box display={"flex"} justifyContent={"center"}>
                    <CalendarButton
                        title="XV Danna Sophia"
                        startDate="20260905T190000"
                        endDate="20260905T020000"
                        location="Parroquia Nuestra señora del Rosario de Fátima/Campestre Monsal"
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            <Box
                sx={{
                height: "90vh",
                backgroundColor:"lightgray",
                }}
            >

            </Box>
            {/* <ImageMiddle bgPosition="50%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgPositionY="50%"></ImageMiddle> */}
                
            <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} position="relative" >
                     <Box 
                    component="img"
                    src={`${URL_IMAGES}flores/4.png`}
                    alt="Description"
                    sx={{
                        height: { xs: 150, md: 250 },
                        // opacity:.8,
           
                        top: { xs: "-20%", md: 0 },
                        left: { xs: "15%", md: 0 },
                       
                        position:"absolute",
                        zIndex:1
                    }}
                    

                    />
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}
         
            sx={{
               
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
                            backgroundImage: `url("${URL_IMAGES}fondo3.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            maxWidth: "750px",
                            mx: "auto",
                            px: { xs: 2, md: 4 },
                            py: 6,
                        }}
                    >
                      
                            <RSVPForm
                            hideTitle={false}
                            dateLine={RSVP_DATE_LINE}
                            guest={guest || undefined}
                            textColor={BG_MAIN}
                            colorButton={BUTTON_PRIMARY}
                            bgImage={`${URL_IMAGES}fondo3.png`}
                            mainTypo={MAIN_TYPO}
                            bodyTypo={BODY_TYPO}
                            count={invitedGuests}
                            color={BG_MAIN}
                            guestId={guestId}
                            invitationId={INVITATION_ID}
                            qrActive={false}
                            numberInWords={true}
                            fontSize="2.5rem" 
                            bgColor={""}                            />
                           
                        </Box>
                        <Box 
                            sx={{
                                height: "60vh",
                                backgroundColor:"lightgray",
                            }}
                        >
                        </Box>
                               {/* <ImageMiddle bgPosition="50%" height="100vh" bgImage={`${URL_IMAGES}galeria1.jpg`} bgPositionY="50%"></ImageMiddle> */}
                        <Box
                            sx={{
                                py: 10,
                                px: 3,
                                backgroundColor: BG_SECTION,
                                textAlign: "center"
                            }}
                        >
                        <Box  sx={{backgroundColor:BG_SECTION}} >
                  <DressCode {...dresscode}></DressCode>
                    <Grid paddingBottom={2} >
                    
                            <Adornment image={`${URL_IMAGES}flores/4.png`} width={"150px"} />
                    
                    
                    </Grid>
        
              </Box>

            </Box>
            <div style={{height: "50px"}}></div>
            {/* <Gallery photos={galleryImages}></Gallery> */}


            
            <FooterInvites bgColor={"white"} color={BUTTON_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default XVDannaSophia;
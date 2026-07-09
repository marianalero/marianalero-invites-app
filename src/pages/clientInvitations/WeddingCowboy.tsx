import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";



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
import Gallery from "../../components/Gallery/Gallert";
import Cover from "../../components/Cover/CoverImage/Cover";
import GiftList2 from "../../components/Gifts/GiftList2";
import { GiftListProps } from "../../models/component/giftList";

const INVITATION_ID = 9;
// 🎨 FONDOS
const BG_MAIN = "#FCFBF8";      // Cream - papel marfil
const BG_SECTION = "#F3E2D1";   // Buttermilk - beige cálido
const BG_ACCENT = "#D9A17C";    // Biscotti - acento terracota suave

// 🖋 TEXTOS
const TEXT_PRIMARY = "#8A5A3C"; // Cinnamon suave / café elegante
const TEXT_DARK = "#5F3926";    // Café profundo para contraste

// 🎯 BOTONES
const BUTTON_PRIMARY = "#B66A35"; // Cinnamon más marcado


// ✨ DETALLES
const BORDER_COLOR = "#D7B89A";
const SHADOW_COLOR = "rgba(138, 90, 60, .18)";

// ✨ Títulos
const TITLE_COLOR = "#9B6543";

// 🐎 ESTILO

const MAIN_TYPO = "alex-brush-regular";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "montserrat-400";
const URL_IMAGES = `${URL_REPO}boda/boda-brandon-alejandra/`;
const URL_SONG = `${URL_REPO}canciones/Photograph-Ed Sheeran.mp3`;
const COUNTDOWN_DATE = new Date(2026, 9, 21);
const RSVP_DATE_LINE = new Date(2026, 8, 5);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Religiosa",
        date: new Date(2026, 9, 21, 19, 0, 0),
        locationName: "Parroquia de Nuestra Señora de Fátima",
        address: "Calle Guadalupe Victoria, San Benito, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/F29L1JgcmY4dx8uT8",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        icon: `${URL_IMAGES}iglesia.png`,
    },
    {
        eventName: "Recepción",
        date: new Date(2026, 9, 21, 21, 0, 0),
        locationName: "Huerta de Pavlo",
        address: "Huerta de Pavlo 40 C, Mónaco Privada Residencial, Marsella Residencial, Hermosillo, Son.",
        size: 12,
        color: TEXT_PRIMARY,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/7BkbAebMw7GSXfgx7",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
    
        icon: `${URL_IMAGES}adornos/3.png`,
    },
    
];

const giftListData: GiftListProps = {
        titleColor: TEXT_PRIMARY,
        envelopeTitleColor: TEXT_PRIMARY,
        title: "Mesa de Regalos",
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51953337",
                icon: `${URL_REPO}demos/logos-cafe/7.svg`,
            },
             {
                link: "https://www.amazon.com.mx/wedding/share/maraijose",
                icon: `${URL_REPO}demos/logos-cafe/8.svg`,
            }
        ],
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        textColor: "#020202", 
        fontSize: "2.5rem",
        envelopeFontSize: "2.5rem",
        bgColor: BG_SECTION, 
        cardColor: BG_MAIN,
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
        bankIconEnd: `${URL_IMAGES}sobre.png`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "CLABE",
                    number: "XXXXXXXXXXXXXXXX",
                    },
                {
                    numberType: "Cuenta",
                    number: "XXXXXXXXX",
                }
                ],
                bank: "BBVA",
                name: "Elena Marai Lerma",
                textColor: "white",
                bodyTypo: BODY_TYPO,
                bgColor: BG_ACCENT,
                mainTypo: SECONDARY_TYPO,
                fontSize: "1.5rem",
            }
            
        ],
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

const galleryImages = [
    `https://marianalero.github.io/Invitacion/images/DSC_9771.JPG`,
    `https://marianalero.github.io/Invitacion/images/DSC_9988.jpg`,
    // `https://marianalero.github.io/Invitacion/images/DSC_9877.JPG`,
];

const omitColors = ["#E6D4C5", "#A95E3B", "#053424","#899870"]; // Colores a omitir en el código de vestimenta


const WeddingCowboy  = () => {
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
        document.title = "Boda Brandon y Alejandra";
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

                brideName="Elena Marai"
                groomName="Jose Carlos"
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
                // bottomRightCornerImg={`${URL_IMAGES}flores/5.png`}
                // topLeftCornerImg={`${URL_IMAGES}flores/5.png`}
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
                ourWeddingStart={true}
                weddingDate="21 de Octubre 2026"
                bgImage={`https://marianalero.github.io/Invitacion/images/DSC_9636.JPG`}
                brideName="Elena Marai" 
                symbolr={"&"} 
                groomName={"Jose Carlos"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="3rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
               bodyTypoClassName={BODY_TYPO}
                >
            </Cover>
                
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6}> 
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                                <Box
                    component="img"
                    src={`${URL_IMAGES}adornos/2.png`}
                    sx={{
                    
                    height: 120,
                    
                    }}
                />
                            </Fade>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >"No fuiste ni antes ni después , fuiste a tiempo. A tiempo para que me enamorara de ti.
"</Typography>
                            </Fade>		
                        </Grid>	
                 </Grid>
           
   
            <ImageMiddle bgPosition="50%" height="70vh" bgImage={`https://marianalero.github.io/Invitacion/images/DSC_9888.JPG`} bgPositionY="50%"></ImageMiddle>
              <div style={{backgroundColor:BG_SECTION,  padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Fade direction="up" >
                        <Box
                            component="img"
                            src={`${URL_IMAGES}adornos/8.png`}
                            sx={{
                                height: { xs: 120, md: 150 },
                            }}
                        ></Box>
                    </Fade>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    
               
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegria de nuestra union, con la bendicion nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_DARK, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO}> María Elena Rodriguez Moreno</Typography>
                                <Typography sx={{color:TEXT_DARK, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Jesus Lerma Luna</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}adornos/6.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        height: { xs: 40, md: 80 }, 

                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_DARK, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO} >Mercedes Gil</Typography>
                            <Typography sx={{color:TEXT_DARK, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Ramon Madrid </Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros este momento tan especial</Typography>
                            </Fade>
                        </Grid>

                            
                        </Grid>

                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"end"}>
                    <Fade direction="up" >
                        <Box
                            component="img"
                            src={`${URL_IMAGES}adornos/8.png`}
                            sx={{
                                height: { xs: 120, md: 150 },
                                transform: "rotate(180deg)",
                            }}
                        ></Box>
                    </Fade>
                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={COUNTDOWN_DATE}
                bgImage={`https://marianalero.github.io/Invitacion/images/anillo.jpeg`}
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
                        title="Boda de Elena Marai y Jose Carlos"
                        startDate="20261021T210000"
                        endDate="20261022T020000"
                        location="Huerta de Pavlo 40 C, Mónaco Privada Residencial, Marsella Residencial, Hermosillo, Son."
                        
                        // fileName="boda-valentina-sebastian"
                        buttonProps={calendarButtonProps}
                        />
                </Box>
            </Box>
 

            </div>
            <ImageMiddle bgPosition="50%" height="35vh" bgImage={`https://marianalero.github.io/Invitacion/images/DSC_9786.JPG`} bgPositionY="50%"></ImageMiddle>
                
            <div style={{backgroundColor:BG_SECTION,  backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={0} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}
         
            sx={{
                // // background: "#fff",
                // border: `1px solid ${BORDER_COLOR}`,
                // borderRadius: "26px",
                // p: 1,
                // boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}
        >
                 
                        <GiftList2 {...giftListData}></GiftList2>
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
                               <ImageMiddle bgPosition="50%" height="70vh" bgImage={`https://marianalero.github.io/Invitacion/images/DSC_9877.JPG`} bgPositionY="50%"></ImageMiddle>
                        <Box
    sx={{
        py: 10,
        px: 3,
        backgroundColor: BG_MAIN,
        textAlign: "center"
    }}
>

    <Typography
    className={MAIN_TYPO}
        sx={{

            color: TEXT_PRIMARY,
            fontSize: { xs: "3.2rem", md: "4.5rem" }
        }}
    >
        Código de Vestimenta
    </Typography>

    <Typography
        sx={{
            mt: 1,
            color: TITLE_COLOR,
            letterSpacing: 4,
            fontFamily: BODY_TYPO,
            textTransform: "uppercase",
            mb: 4,
            lineHeight: 1.2,
        }}
    >
        Formal · Western Vaquero
    </Typography>

    <Box
        component="img"
        src={`${URL_IMAGES}adornos/1.png`}
        sx={{
            width: 180,
            mb: 6
        }}
    />

    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2,1fr)"
            },
            gap: 4,
            maxWidth: 900,
            mx: "auto"
        }}
    >

        {/* MUJERES */}

        <Box
            sx={{
                background: "#fff",
                border: `1px solid ${BORDER_COLOR}`,
                borderRadius: "26px",
                p: 4,
                boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}
        >

            <Typography
                sx={{
                    mb: 3,
                    fontFamily: BODY_TYPO,
                    fontSize: "1.3rem",
                    color: TEXT_PRIMARY,
                    letterSpacing: 2,
                    textTransform: "uppercase"
                }}
            >
                Mujeres
            </Typography>

            <Box
                component="img"
                src={`${URL_IMAGES}codigo vestimenta.png`}
                sx={{
                    width: "100%",
                    maxWidth: 290,
                    display: "block",
                    mx: "auto"
                }}
            />

           <Box 
                component="img" 
                src={`${URL_IMAGES}adornos/6.png`} 
                alt="Description" 
                sx={{ 
                    height: { xs: 50, md: 80 }, 

                }}
             />
            <Typography>Vestido largo o corto elegante</Typography>
            <Typography>Botas vaqueras</Typography>
            <Typography>Sombrero opcional</Typography>

        </Box>

        {/* HOMBRES */}

        <Box
            sx={{
                background: "#fff",
                border: `1px solid ${BORDER_COLOR}`,
                borderRadius: "26px",
                p: 4,
                boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}
        >

            <Typography
                sx={{
                    mb: 3,
                    fontFamily: BODY_TYPO,
                    fontSize: "1.3rem",
                    color: TEXT_PRIMARY,
                    letterSpacing: 2,
                    textTransform: "uppercase"
                }}
            >
                Hombres
            </Typography>

            <Box
                component="img"
                src={`${URL_IMAGES}codigo-vestimenta hombres.png`}
                sx={{
                    width: "100%",
                    maxWidth: 290,
                    display: "block",
                    mx: "auto"
                }}
            />

          <Box 
                component="img" 
                src={`${URL_IMAGES}adornos/6.png`} 
                alt="Description" 
                sx={{ 
                    height: { xs: 50, md: 80 }, 

                }}
             />

            <Typography>Camisa de vestir</Typography>
            <Typography>Pantalón de mezclilla o vestir</Typography>
            <Typography>Botas vaqueras</Typography>
            <Typography>Sombrero opcional</Typography>

        </Box>

        <Box 
        sx={{
                background: "#fff",
                border: `1px solid ${BORDER_COLOR}`,
                borderRadius: "26px",
                p: 4,
                boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}
            >
                
                <Box 
                component="img" 
                src={`${URL_IMAGES}adornos/6.png`} 
                alt="Description" 
                sx={{ 
                    height: { xs: 50, md: 80 }, 

                }}
             />
             <Typography className={`${SECONDARY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem",  mb:1,}}>Omitir colores:</Typography>
             <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                marginTop={2}
             >
                <div
                    style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "lightgray",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    }}
                ></div>
                    {omitColors.map((item, index) => (
                    <div
                    key={index}
                    style={{
                        backgroundColor: item,
                        borderRadius: "50%",
                        height: "40px",
                        width: "40px",
                    }}
                    ></div>
                ))}
             </Box>

            </Box>

    </Box>

</Box>
                        <div style={{backgroundColor:BG_SECTION, padding: "50px 20px" }}>

                    <Box padding={2} 
                    
                    display={"flex"} 
                    justifyContent={"center"} 
                    sx={{
                background: "#fff",
                border: `1px solid ${BORDER_COLOR}`,
                borderRadius: "26px",
                p: 4,
                boxShadow: `0 15px 35px ${SHADOW_COLOR}`
            }}>
                <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
              
                </Grid>
               
                  
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                           <Fade direction="up" >
                       <Typography textAlign={"center"} className={`${SECONDARY_TYPO}`} sx={{color:TEXT_PRIMARY, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>Para disfrutar plenamente de esta celebración,
hemos decidido que nuestro evento sea un evento sin niños.

</Typography>
                      </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                        <Fade>
                    <Typography 
                        textAlign={"center"} 
                        className={`${BODY_TYPO}`} 
                        sx={{  letterSpacing:"2px",  mb:1,fontStyle:"italic!important"}}>
                           Agradecemos de corazón su comprensión.
                        </Typography>
                        </Fade>
                    </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                         <Fade direction="up" >
                    <Box 
                        component="img" 
                        src={`${URL_IMAGES}adornos/7.png`} 
                        alt="Description" 
                        sx={{ 
                            height: { xs: 50, md: 70 }, 
                
                            opacity:.8,
                            
                    }}
                        />
                        </Fade>
                 
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
export default WeddingCowboy;
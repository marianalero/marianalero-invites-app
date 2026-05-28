import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Typography,  } from "@mui/material";


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
import InvitationIntro from "../../components/Intro/InvitationIntro/InvitationIntro";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const WeddingBWDemo  = () => {
    const [searchParams] = useSearchParams();

    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const INVITATION_ID = 0;

    // INTRO STATES
    const [showIntro, setShowIntro] = useState(true);
    const [showInvitation, setShowInvitation] = useState(false);

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
        document.title = "Invitacion de Boda";
    }, []);

    const COLOR_PRIMARY = "#1A1A1A";
    const MAIN_TYPO = "playfair-display-400 to-upper";
    const SECONDARY_TYPO = "the-seasons";
    const BODY_TYPO = "lora";

    const URL_IMAGES = `${URL_REPO}demos/`;
    const URL_SONG = `${URL_REPO}canciones/Athousandyears-ChristinaPerri-Sax.mp3`;

        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 11, 5, 18, 0, 0),
                locationName: "Iglesia San Juan De Capistrano",
                address: "Calz. San Bernardino 52, Seminario, Hermosillo, Son.",
                size: 12,
                color: COLOR_PRIMARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/rutM2huWpbQgHH7y7",
                colorButton: COLOR_PRIMARY,
                colorIcon: COLOR_PRIMARY,
                fontSize:"2rem",
                bgColor:"white",
                borderSquare:true,
            
            },
            {
                bgColor:"white",
                eventName: "Recepción",
                date: new Date(2026, 11, 5, 20, 0, 0),
                locationName: "El Jito Eventos",
                address: "Cjon. Rosales S/N, El Jito, Hermosillo, Son.",
                size: 12,
                color: COLOR_PRIMARY,     
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/GAw8VVfjyR5yCkfP8",
                colorButton: COLOR_PRIMARY,
                
                colorIcon: COLOR_PRIMARY,fontSize:"2rem",
                borderSquare:true,
            },
    ];
    
    const giftListData: GiftListProps = {
        title:"Sugerencias de regalos",
        
        fontSize:"1.5rem",
        mainPhrase: "Si su deseo es hacernos algún obsequio compartimos las opciones",
        items: [
            {
                link: "https://ejemplo.com/mesa-de-regalos",
                icon: `${URL_IMAGES}liverpool-negro.png`,
            }
        ],
        giftIcon: `${URL_IMAGES}/iconos/14.svg`,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopeMainTypo: "playfair-display-400",
        envelopeFontSize:"1.5rem",
        envelopePhrase:"Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
        envelopeTitleColor:COLOR_PRIMARY,
        bankIconStart: `${URL_IMAGES}iconos/13.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "0000 0000 0000 0000",
                    },
                
                ],
                bank: "BANCO",
                name: "Valentina Martínez López",
                color: COLOR_PRIMARY,
                bodyTypo: BODY_TYPO,
                bgColor:"white",
                outlineColor:true,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:"Formal",
        fontSize:"2rem",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
        subtitle2:"no niños"
    }
    
    const qoute:QouteProps ={
            qoute: "El amor nos unió en un solo camino, y queremos recorrerlo junto a ti en este día especial",
            bodyTypo: BODY_TYPO,
            italic:true,
            fontsize:"1.5rem",
    }
    const timelineData: CustomizedTimelineProps = {
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: "white",
                colorTitle: "white",
                colorBody: "white",
                fontSize:"50px",
                bgColor: COLOR_PRIMARY, 
                events: [
                    {
                        eventName: "Ceremonia Civil",
                        date: new Date(2025, 10, 16, 19, 0, 0),
                        icon: `${URL_IMAGES}iconos/1.svg`,
                    },
                    {
                        eventName: "Cóctel  de bienvenida",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: "Primer baile",
                        date: new Date(2025, 10, 16, 21, 20, 0),
                        icon: `${URL_IMAGES}iconos/7.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 21, 30, 0),
                        icon: `${URL_IMAGES}iconos/6.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 16, 2, 0, 0),
                        icon: `${URL_IMAGES}iconos/just-married.svg`,
                    },
                ],
    };


    return (
           <div
            style={{
                backgroundColor: "white",
                maxWidth: "100%",
                overflowY: "auto",
            }}
        >

            {/* INTRO */}
            <InvitationIntro
                open={showIntro}
                onEnter={handleEnter}
                musicRef={musicRef}

                title="Una celebración está por comenzar"

                brideName="Valentina"
                groomName="Sebastian"
                ampersonSymbol="&"

                namesTypo={SECONDARY_TYPO}
                ampersonTypo={MAIN_TYPO}
                guestTypo={BODY_TYPO}
                bodyTypo={BODY_TYPO}

                backgroundColor="#F8F6F2"
                primaryColor={COLOR_PRIMARY}

                envelopeImg={`${URL_IMAGES}black-envelope.png`}
                sealImg={`${URL_IMAGES}seal.png`}

                sealPosition={{
                    top: "60%",
                    left: "50%",
                    width: "75px",
                    height: "75px",
                    transform: "translate(-50%, -50%)",
                }}

                guestName="Familia González"
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

            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_PRIMARY}/>
            <CoverInline 
                ourWeddingStart={true}
                weddingDate="5 de diciembre, 2026"
                bgImage={`${URL_IMAGES}demoBW1.jpg`}
                brideName="Valentina" 
                symbolr={"&"} 
                groomName={"Sebastian"} 
                className={SECONDARY_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="2rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
                >
            </CoverInline>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "bottom", padding: "50px 20px" }}>
                <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}   display={"flex"}  justifyContent={"center"}>
           
                 <Qoute 
               {...qoute}>
            </Qoute>
           
            </Box>
            </div>
            <ImageMiddle bgPosition="30%" height="50vh" bgImage={`${URL_IMAGES}demoBW2.jpg`} bgPositionY="30%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:COLOR_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegria de nuestra union, con la bendicion de Dios y nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"}>Mariana López de Herrera</Typography>
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Ricardo Herrera Gómez</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"}className={"playfair-display-400"} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"} >Gabriela Torres</Typography>
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Alejandro Mendoza Ruiz</Typography>
                            </Fade>
                        </Grid>	
                            
                        </Grid>
                       
                
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={new Date(2026,11,5)}
                bgImage={`${URL_IMAGES}demoBW4.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="1.8rem"
                marginTop="30px"
                padding="1em"
                alignItems="end"
                >  
            </CountDown>
            <Grid container spacing={2} sx={{backgroundColor:"#020202"}} padding={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2}  >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:"white",borderStyle:"solid",borderWidth:"1.5px" ,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} sx={{color:"white"}} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography sx={{fontSize: "2rem"}} textAlign={"center"} className={`${MAIN_TYPO}`} >Padrinos</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:"white", fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"}>Paola Castillo</Typography>
                                <Typography sx={{color:"white", fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Javier Vega</Typography>
                            </Fade >
                        </Grid>	
                        
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:"white", fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"} >Claudia Navarro</Typography>
                            <Typography sx={{color:"white", fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Fernando Salinas</Typography>
                            </Fade>
                        </Grid>	
                            
                        </Grid>
                       
                
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <Box>
                <Typography textAlign={"center"} className={`${BODY_TYPO}`} sx={{color:COLOR_PRIMARY, fontSize:"1.2rem", letterSpacing:"2px", textTransform:"uppercase", mb:1,fontStyle:"italic"}}>
                    No queremos que te pierdas este día
                    </Typography>
                           <Box
  sx={{
    mt: 5,
    display: "flex",
    justifyContent: "center",

    "& add-to-calendar-button": {
       "--btn-background": "transparent",
  "--btn-hover-background": COLOR_PRIMARY,

  "--btn-text": COLOR_PRIMARY,
  "--btn-hover-text": "#ffffff",
"--btn-border-width": "1px",
  "--btn-border": COLOR_PRIMARY,
  "--btn-hover-border": COLOR_PRIMARY,

  "--btn-border-radius": "999px",

  "--btn-padding-x": "22px",
  "--btn-padding-y": "12px",

  "--btn-font-weight": "500",

  "--btn-shadow": "none",
  "--btn-hover-shadow": "none",
  "--btn-active-shadow": "none",

      "--font": BODY_TYPO,

      display: "block",
    },
  }}
>
  <AddToCalendarButton
    name="Boda de Valentina & Sebastian"
    startDate="2026-12-05"
    startTime="18:00"
    endDate="2026-12-06"
    endTime="02:00"
    timeZone="America/Hermosillo"
    options={["Apple", "Google"]}
    language="es"
    label="Agregar al calendario"
  />
</Box>
            </Box>
 

            </div>
                          <div style={{backgroundImage: `url("${URL_IMAGES}demoBW3.jpg")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgb(0,0,0,.5)"}}>
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
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
                <MiniGallery
                    images={[
                        `${URL_IMAGES}demoBW1.jpg`,
                        `${URL_IMAGES}demoBW2.jpg`,
                        `${URL_IMAGES}demoBW3.jpg`,
                    ]}
                     backgroundColor="rgb(250,250,250,.8)"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
                    </div>
            <RSVPForm 
            
            dateLine={new Date(2026,10,5)}
                textColor={"white"}
                colorButton={"white"} 
                bgColor={"#020202"} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                color={"white"}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
                numberInWords={true}
                fontSize="2rem"
                transparencyButton={true}
            >
                
            </RSVPForm>
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>

            <DressCode {...dresscode}></DressCode>

                 <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4} width={"50%"} height={"1.5px"} bgcolor={COLOR_PRIMARY}></Box>
                        
                 
                    </Grid>
               </Grid>
                              <WithoutKids {...withOutKids} /> 
            <div style={{height:100}}></div>
                <Typography variant="body1" textAlign={"center"} className={`${BODY_TYPO}`} >
                    IMAGENES 
Foto de <a href="https://unsplash.com/es/@dazmanov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Azmanov</a> en <a href="https://unsplash.com/es/fotos/un-hombre-y-una-mujer-sentados-en-los-escalones-de-un-edificio-lVraV5Eqn6Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
               
                Foto de <a href="https://unsplash.com/es/@mrsrachelmcdermott?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rachel McDermott</a> en <a href="https://unsplash.com/es/fotos/mujer-con-anillo-de-bodas-con-hombre-de-la-mano-fAIklKagBcw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                     </Typography>
         </div>
            <FooterInvites bgColor={"white"} color={COLOR_PRIMARY}></FooterInvites>
            </Box>
          
        </div>
    )
}
export default WeddingBWDemo;
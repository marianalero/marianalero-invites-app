import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions, useMediaQuery } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

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
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";

const WeddingDaniaSergio  = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 20;
    const [open, setOpen] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
            musicRef.current?.play()
         };
    
        useEffect(() => {
           handleClickOpen()
        }, []);
    useEffect(() => {
        document.title = "Boda Dania Margarita & Sergio Andrés";
    }, []);
    const BG_MAIN = "#F4F1EA";        // Fondo principal (beige elegante)
    const BG_SECTION = "#E8E1D5";     // Secciones suaves (beige más profundo)
    const BG_ACCENT = "#6E7F5F";      // Secciones especiales (verde olivo)

    // 🖋 TEXTOS
    const TEXT_PRIMARY = "#1A1A1A";   // Texto principal (negro elegante)
    const TEXT_SECONDARY = "#556B4F"; // Texto secundario (verde olivo oscuro)
    const TEXT_LIGHT = "#F4F1EA";     // Texto sobre fondos oscuros

    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#6E7F5F"; 

    // ✨ DETALLES
    const BORDER_COLOR = "#DCD2C3";   // Bordes suaves

    // ✒️ TIPOGRAFÍA
    const MAIN_TYPO = "gistesy";         // Elegante para nombres
    const BODY_TYPO = "montserrat-400";     // Limpia para texto
    const SECOND_TYPO = "playfair-display-400"; // Elegante para subtítulos
    const URL_IMAGES = `${URL_REPO}boda/boda-dania-sergio/`;
    const URL_SONG = `${URL_REPO}canciones/Everyday-AcousticInstrumental.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 9, 3, 13, 30, 0),
                locationName: "Santísima Trinidad",
                address: "Bv. Justo Sierra, Periodista, Hermosillo, Son.",
                size: 12,
                color: TEXT_PRIMARY,
                mainTypo:  SECOND_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/W9i11nBnxvpGSpvt6",
                colorButton: TEXT_PRIMARY,
                colorIcon: TEXT_SECONDARY,
                fontSize:"2rem",
                bgColor:"white",
                borderSquare:true,
                classButtonName:"btn-gold",
            
            },
            {
                
                bgColor:"white",
                eventName: "Recepción",
                date: new Date(2025, 9, 3, 21, 0, 0),
                locationName: "Finca la Estampida",
                address: "83305 Campestre, La Finca, 83305 San Pedro el Saucito, Son.",
                size: 12,
                color: TEXT_PRIMARY,     
                mainTypo: SECOND_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/MwL2gUj9bWNmZYRN6",
                colorButton: TEXT_PRIMARY,
                
                colorIcon: TEXT_SECONDARY,fontSize:"2rem",
                borderSquare:true,
                 classButtonName:"btn-gold",
            },
    ];
    
    const giftListData: GiftListProps = {
        title:"Sugerencias de regalos",
        
        fontSize:"3rem",
        mainPhrase: "Si su deseo es hacernos algún obsequio compartimos las opciones",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51848836",
                icon: `${URL_IMAGES}adornos (16)/7.png`,
            }
        ],
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: TEXT_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopeMainTypo: MAIN_TYPO,
        envelopeFontSize:"3rem",
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
        envelopeTitleColor:TEXT_PRIMARY,
        bankIconEnd: `${URL_IMAGES}iconos/17.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "4152313700809077",
                    },
                
                ],
                bank: "BANORTE",
                name: "Dania Margarita Torres Martinez",
                color: TEXT_PRIMARY,
                bodyTypo: BODY_TYPO,
                bgColor:"white",
                outlineColor:true,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: SECOND_TYPO,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal - Elegante",
        fontSize:"1.6rem",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
        subtitle2:"no niños"
    }
    
    
    const timelineData: CustomizedTimelineProps = {
                mainTypo: SECOND_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: "white",
                colorTitle: "white",
                colorBody: "white",
                fontSize:"50px",
                bgColor: TEXT_PRIMARY, 
                events: [
                    {
                        eventName: "Ceremonia Religiosa",
                        date: new Date(2025, 10, 16, 13, 30, 0),
                        icon: `${URL_IMAGES}iconos/1.svg`,
                    },
                    {
                        eventName: "Cóctel",
                        date: new Date(2025, 10, 16, 21, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: "Recepción",
                        date: new Date(2025, 10, 16, 21, 45, 0),
                        icon: `${URL_IMAGES}iconos/6.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 22, 30, 0),
                        icon: `${URL_IMAGES}iconos/7.svg`,
                    },
                   
                ],
    };

    const sponsors:PairSponsors[] = [
                        {
                            sponsorOne: { name: "Carmen Martinez  y Jose Luis Contreras" },
                        },
                        {
                            sponsorOne: { name: "Martha Martinez  y Sergio Moreno" },
                        },
                        {
                            sponsorOne: { name: "Hilda Elisa Onuma  y Eduardo Solano" },
                        },
                        {
                            sponsorOne: { name: "Cristina Corona  y Ismael Platt" },
                        },
                        {
                            sponsorOne: { name: "Ana Sofía Burruel  y German Flores" },
                        },
                        
    ];

    const galleryPhotos = [
        // `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria2.jpg`,
        //  `${URL_IMAGES}galeria3.jpg`,
          `${URL_IMAGES}galeria4.jpg`,
        //    `${URL_IMAGES}galeria5.jpg`,
    ];

    return (
        <div style={{backgroundColor:BG_MAIN ,maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={BUTTON_PRIMARY }/>
            <CoverInline 
                ourWeddingStart={true}
                weddingDate="05.12.26"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Dania" 
                symbolr={"y"} 
                groomName={"Sergio"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="4rem"
               verticalPosition="top"
               ampersonClassName={MAIN_TYPO}
                bgPosition="60%"
                >
            </CoverInline>
              <div style={{ padding: "50px 20px" }}>
                <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}   display={"flex"}  justifyContent={"center"}>
           
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} sx={{backgroundColor:BG_ACCENT, borderColor: BORDER_COLOR, borderStyle: "solid", borderWidth: "1.5px"}}> 
                        
                          
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography color={TEXT_LIGHT} className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1rem", fontStyle: "italic!important" }} >"El destino nos presentó, pero nosotros elegimos amarnos todos los días"</Typography>
                            </Fade>		
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <img src={`${URL_IMAGES}adornos (16)/44.png`} width="300"/>
                            </Fade>		
                        </Grid>
                 </Grid>
            </Box>
            </div>
            <ImageMiddle bgPosition="50%" height="60vh" bgImage={`${URL_IMAGES}enmedio1.jpg`} bgPositionY="50%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:TEXT_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegría de nuestra unión, con la bendición de Dios y nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"}>Margarita Martínez Sortillón</Typography>
                                <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Daniel Torres Ramírez</Typography>
                                <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Armando Martínez Sortillón</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"}className={"playfair-display-400"} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"} >Maria Cristina Onuma Reyna</Typography>
                            <Typography sx={{color:TEXT_SECONDARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Sergio Corona Gómez</Typography>
                            </Fade>
                        </Grid>	
                         <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography textAlign={"center"} >Junto con nuestras familias te invitamos a ser parte de esta celebración</Typography>
                            </Fade>
                            </Grid>
                            
                        </Grid>
                       
                
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={new Date(2026,9,3)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={SECOND_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="1.8rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>
            <div style={{ 
            position: "relative", 
            backgroundColor: BG_ACCENT,
            overflow: "hidden" 
            }}>

            {/* 🌿 Hoja superior derecha */}
            <Fade direction="up" triggerOnce={true}>
            <img 
                src={`${URL_IMAGES}hojas/4.png`}
                style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: isSmallScreen ? "200px" : "180px",
                opacity: 0.9,
                pointerEvents: "none",
                transform: isSmallScreen ? "rotate(20deg)" : "rotate(0deg)"
                }}
            />
            </Fade>
            {/* 🌿 Hoja inferior izquierda */}
            <Fade direction="up" triggerOnce={true}>
            <img 
            src={`${URL_IMAGES}hojas/4.png`}
            style={{
            position: "absolute",
            bottom: "-150px",
            left: "-20px",
            width: "200px",
            opacity: 0.85,
            pointerEvents: "none"
            }}
        />
            </Fade>
            <WeddingSponsor 
                headerFontSize="3rem" 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                sponsors={sponsors} 
                height={"60vh"} 
                color={TEXT_LIGHT} 
            />

            </div>
               <MiniGallery
                    images={[
                        `${URL_IMAGES}galeria5.jpg`,
                        `${URL_IMAGES}galeria1.jpg`,
                        `${URL_IMAGES}galeria3.jpg`,
                    ]}
                     backgroundColor={BG_SECTION}
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />

            <div style={{backgroundImage: `url("${URL_IMAGES}fondo3.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>
             
                          <div style={{backgroundImage: `url("${URL_IMAGES}itinerario.jpg")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgba(0,0,0,.5)", borderColor: BORDER_COLOR, borderStyle: "solid", borderWidth: "1.5px"}}>
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
                            <Typography sx={{color:timelineData.colorPrimary,fontSize:"24px"}} className={`${SECOND_TYPO}`} variant="subtitle1" component="span">
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
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
                
                    </div>
                    <ImageMiddle bgPosition="50%" height="60vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgPositionY="50%"></ImageMiddle>
           <div
            style={{
                position: "relative",
                minHeight: "100vh", // 🔥 pantalla completa
                width: "100%",
                backgroundColor: BG_ACCENT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "40px 20px"
            }}
            >

            {/* 🌿 Hoja arriba derecha */}
            <img
                src={`${URL_IMAGES}hojas/5.png`}
                style={{
                position: "absolute",
                top: "-40px",
                right: "-30px",
                width: "220px",
                opacity: 0.9,
                pointerEvents: "none",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))"
                }}
            />

            {/* 🌿 Hoja abajo izquierda */}
            <img
                src={`${URL_IMAGES}hojas/1.png`}
                style={{
                position: "absolute",
                bottom: "-50px",
                left: "-30px",
                width: "240px",
                opacity: 0.85,
                pointerEvents: "none",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
                transform: "rotate(-180deg)"
                }}
            />
             {/* 🌿 Hoja abajo izquierda */}
            

            {/* 🌿 Hoja lateral (detalle pro) */}
            {/* <img
                src={`${URL_IMAGES}hojas/3.png`}
                style={{
                position: "absolute",
                top: "30%",
                left: "-60px",
                width: "200px",
                opacity: 0.6,
                pointerEvents: "none"
                }}
            /> */}

            <RSVPForm
                dateLine={new Date(2026,8,21)}
                textColor={TEXT_LIGHT}
                colorButton={TEXT_LIGHT}
                bgColor="transparent" // 👈 importante
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                count={invitedGuests}
                color={TEXT_LIGHT}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
                numberInWords={true}
                fontSize="3rem"
                transparencyButton={true}
                classButtonName={"btn-gold"}
                
            />

            </div>
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>
              <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >        
            <DressCode {...dresscode}></DressCode>

                <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                    <Fade direction="up" triggerOnce={true}>
                        <img src={`${URL_IMAGES}adornos (16)/44.png`} width="300"/>
                    </Fade>
                    </Grid>
                </Grid>
                              <WithoutKids {...withOutKids} /> 
                              </Box>   
            <div style={{height:100}}></div>
          
                     <Gallery photos={galleryPhotos}></Gallery>
         </div>
            <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                            </Box>
                             <Box display={"flex"} justifyContent={"center"}>
                            <CustomButton borderColor={TEXT_PRIMARY} bgColor={"#ffffff"} color={TEXT_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
                            </Box>
                             
                            
                        
                         </DialogContent>
                         <DialogActions>
                         
                        
                         </DialogActions>
                     </Dialog>   
        </div>
    )
}
export default WeddingDaniaSergio;
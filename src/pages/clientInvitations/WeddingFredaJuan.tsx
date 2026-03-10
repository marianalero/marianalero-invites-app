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
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
import MiniGallery from "../../components/MiniGallery/MiniGallery";
import Gallery from "../../components/Gallery/Gallert";
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

const WeddingFredaJuan  = () => {
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
        document.title = "Boda Fedra Edlyn & Juan Pablo";
    }, []);
    const COLOR_PRIMARY = "#1A1A1A";
    const MAIN_TYPO = "playfair-display-400 to-upper";
    const SECONDARY_TYPO = "the-seasons";
    const BODY_TYPO = "lora";
    const COLOR_BG ="#F7F3EB";
    
    const URL_IMAGES = `${URL_REPO}boda/boda-fedra-edlyn-juan-pablo/`;
    const URL_SONG = `${URL_REPO}canciones/Everyday-AcousticInstrumental.mp3`;
   
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
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51938530",
                icon: `${URL_IMAGES}liverpool.svg`,
            }
        ],
        giftIcon: `${URL_IMAGES}regalo.svg`,
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopeMainTypo: "playfair-display-400",
        envelopeFontSize:"1.5rem",
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
        envelopeTitleColor:COLOR_PRIMARY,
        bankIconStart: `${URL_IMAGES}sobre.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "5264246831634521",
                    },
                
                ],
                bank: "BANORTE",
                name: "Fedra Edlyn Aguilar López",
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
            qoute: "Dos corazones, un solo amor. Celebra con nosotros nuestro matrimonio.",
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
                        icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    {
                        eventName: "Cóctel  de bienvenida",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                    {
                        eventName: "Primer baile",
                        date: new Date(2025, 10, 16, 21, 20, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 21, 40, 0),
                        icon: `${URL_IMAGES}iconos/6.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 16, 2, 0, 0),
                        icon: `${URL_IMAGES}iconos/9.svg`,
                    },
                ],
    };

    const galleryPhotos = [
        `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}enmedio2.jpg`,
    ];

    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_PRIMARY}/>
            <CoverInline 
                ourWeddingStart={true}
                weddingDate="05.12.26"
                bgImage={`${URL_IMAGES}galeria2.jpg`}
                brideName="Fedra Edlyn" 
                symbolr={"&"} 
                groomName={"Juan Pablo"} 
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
            <ImageMiddle bgPosition="30%" height="50vh" bgImage={`${URL_IMAGES}galeria1.jpg`} bgPositionY="30%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo1.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:COLOR_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegría de nuestra unión, con la bendición de Dios y nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"}>Fedra Isela López Ruiz</Typography>
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Jorge Humberto Aguilar Veloz</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"}className={"playfair-display-400"} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={"playfair-display-400"} >Elba Elizabeth Jara Molina</Typography>
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={"playfair-display-400"}>Martín Preciado García</Typography>
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
                bgImage={`${URL_IMAGES}contador-bn.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="1.8rem"
                marginTop="30px"
                padding="1em"
                alignItems="start"
                >  
            </CountDown>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>
              <ImageMiddle bgPosition="50%" height="30vh" bgImage={`${URL_IMAGES}galeria6.jpg`} bgSize="contain"></ImageMiddle>
                          <div style={{backgroundImage: `url("${URL_IMAGES}galeria5.jpg")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

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
                        `${URL_IMAGES}portada.jpg`,
                        `${URL_IMAGES}enmedio.jpg`,
                        `${URL_IMAGES}galeria3.jpg`,
                    ]}
                     backgroundColor="rgb(250,250,250,.8)"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
                    </div>
            <RSVPForm 
            bgImage={`${URL_IMAGES}confirmacion.jpg`}
            dateLine={new Date(2026,10,5)}
                textColor={"white"}
                colorButton={"white"} 
                bgColor={COLOR_BG} 
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
                     <Gallery photos={galleryPhotos}></Gallery>
         </div>
            <FooterInvites bgColor={COLOR_BG} color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                             <Typography variant="h4" className={MAIN_TYPO} sx={{color:COLOR_PRIMARY}}>Bienvenidos</Typography>
                            </Box>
                             <Box display={"flex"} justifyContent={"center"}>
                            <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"} color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
                            </Box>
                             
                            
                        
                         </DialogContent>
                         <DialogActions>
                         
                        
                         </DialogActions>
                     </Dialog>   
        </div>
    )
}
export default WeddingFredaJuan;
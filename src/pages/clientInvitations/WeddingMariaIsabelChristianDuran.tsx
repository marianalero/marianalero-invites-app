import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Box, Typography,  Paper } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import RSVPForm from "../../components/RSVP/RSVPForm";

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
import Gallery from "../../components/Gallery/Gallert";
import EventCardImage from "../../components/EventCard/EventCardImage";
import GiftList2 from "../../components/Gifts/GiftList2";
import { GiftListProps } from "../../models/component/giftList";
import InvitationWelcomeModal from "../../components/InvitationWelcomeModal/InvitationWelcomeModal";


const WeddingMariaIsabelChristianDuran  = () => {
    const invitationConfig = {
    isMultilanguage: true, // o false
        language: "es", // idioma base
        selectableLanguages: [
            { code: "es", label: "Español" },
            { code: "de", label: "Deutsch" },
        ],
    };
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
    
        const handleEnter = () => {
            setOpen(false);
            musicRef.current?.play()
         };
    
        useEffect(() => {
           handleClickOpen()
        }, []);
    useEffect(() => {
        document.title = "Boda Maria Isabel & Christian Duran";
    }, []);
    const COLOR_PRIMARY = "#C65A2E";
    const COLOR_THIRD = "#8C1C2B";
    const COLOR_FOURTH = "#6E7F3F";
    const COLOR_TEXT = "#1A1A1A";
    const MAIN_TYPO = "pinyon-script-regular";
    const SECONDARY_TYPO = "the-seasons";
    const BODY_TYPO = "lora";
    const COLOR_BG ="#F7F3EB";
    
    const URL_IMAGES = `${URL_REPO}boda/boda-maria-isabel-christian/`;
    const URL_SONG = `${URL_REPO}canciones/ZhannaStelmakh-BeautifulThings-InstrumentalViolinVersion.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                image : `${URL_IMAGES}recepcion.jpeg`,
                eventName: t("events.ceremonyReception"),
                date: new Date(2026, 10, 14, 18, 0, 0),
                locationName: "Casa Arias",
                address: "Calz. San Bernardino 52, Seminario, Hermosillo, Son.",
                size: 12,
                color: COLOR_PRIMARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/rutM2huWpbQgHH7y7",
                colorButton: COLOR_THIRD,
                colorIcon: COLOR_PRIMARY,
                fontSize:"1.9rem",
                bgColor:"white",
                borderSquare:true,

            
            }
    ];
    

    const giftListData: GiftListProps = {
            
            mainTypo: MAIN_TYPO,
            bodyTypo: BODY_TYPO,
            textColor: "white", 
            fontSize: "2rem",
            envelopeFontSize: "2rem",
            bgColor: "#FAF7F2", 
            cardColor: COLOR_PRIMARY,
            showEnvelope:true,
            envelopePhrase:t("gifts.giftMessage"),
            bankIconEnd: `${URL_IMAGES}iconos/11.svg`,
            bankDetails: [
                {
                    numbers: [
                    {
                        numberType: t("gifts.card"),
                        number: "5264246831634521",
                    },
                ],
                bank: t("banks.bbvaDebitMexico"),
                name: "Maria Isabel Ramos Nevarez",
                    textColor: COLOR_FOURTH,
                    bodyTypo: BODY_TYPO,
                    bgColor: "#FAF7F2",
                    mainTypo: SECONDARY_TYPO,
                    fontSize: "1.5rem", 
                    outlineColor: true,  
                },
                {
                    numbers: [
                    {
                        numberType: t("gifts.number"),
                        number: "DE24 7539 0000 0001 2175 42",
                    },
                ],
                bank: t("banks.volksbankGerman"),
                name: "Christian Duran Maury",
                    textColor: COLOR_FOURTH,
                    bodyTypo: BODY_TYPO,
                    bgColor: "#FAF7F2",
                    mainTypo: SECONDARY_TYPO,
                    fontSize: "1.5rem",
                    outlineColor: true,  
                }
                ,
                
            ],
        };
  
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:t("dresscode.formal"),
        fontSize:"2.3rem",
        description:t("isabel&christian.dresscodeDetail"),
        omitColorsLabel:t("dresscode.omit"),
        omitColorsText :t("isabel&christian.dresscodeColors"),
    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
        hideSubtitle:true,
        title:t("isabel&christian.noKidsMessage"),
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
                        eventName: t("timeline.religiousCeremony"),
                        date: new Date(2025, 10, 16, 17, 0, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: t("timeline.cocktail"),
                        date: new Date(2025, 10, 16, 18, 0, 0),
                        icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    // {
                    //     eventName: "Recepción",
                    //     date: new Date(2025, 10, 16, 21, 0, 0),
                    //     icon: `${URL_IMAGES}iconos/4.svg`,
                    // },
                    {
                        eventName: t("timeline.dinner"),
                        date: new Date(2025, 10, 16, 19, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: t("timeline.end"),
                        date: new Date(2025, 10, 16, 23, 0, 0),
                        icon: `${URL_IMAGES}iconos/12.svg`,
                    },
                ],
    };

    const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria2.jpg`,
        `${URL_IMAGES}galeria3.jpg`,
    ];

    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto", color: COLOR_TEXT}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_PRIMARY}/>
            <CoverInline 
                ourWeddingStart={true}
                weddingDate="14.11.26"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Isabel Ramos" 
                symbolr={"y"} 
                groomName={"Christian Duran"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="2.2rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
                >
            </CoverInline>
              <div style={{backgroundColor:"#fae9e9", backgroundPosition: "bottom", padding: "50px 20px" }}>
                <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}   display={"flex"}  justifyContent={"center"}>
           
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} sx={{backgroundColor:"rgb(255,255,255)"}}> 
                        
                           <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <img src={`${URL_IMAGES}adorno2.svg`} width="250"/>
                            </Fade>		
                        </Grid>
                           	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1rem", fontStyle: "italic!important" }} >{ `"${t("isabel&christian.quote")}"`}</Typography>
                            </Fade>		
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            
                            </Fade>		
                        </Grid>	
                     
                     
                 </Grid>
            </Box>
            </div>
            <ImageMiddle bgPosition="30%" height="60vh" bgImage={`${URL_IMAGES}enmedio.jpg`} bgPositionY="80%"></ImageMiddle>
              <div style={{backgroundColor:"#F5EFE6", padding: "50px 20px" }}>
         
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    {/* <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} > */}
                   
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >{t("isabel&christian.introductionLine")}</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.8rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO}>Maria Isabel Nevarez Reta</Typography>
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.8rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Gamaliel Ramos Alcantar</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.8rem"}}  variant="h4" textAlign={"center"}className={MAIN_TYPO} >{t("isabel&christian.and")}</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.8rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO} >Maria Estela Duran Maury</Typography>
                            <Typography sx={{color:COLOR_PRIMARY, fontSize: "1.8rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Stefan Eckstein</Typography>
                            </Fade>
                        </Grid>	
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >{t("isabel&christian.inviteCelebrate")}</Typography>
                            </Fade>
                            </Grid>
                        </Grid>
                       
                
                   
                    {/* </Box> */}
                </Grid>
            </Grid>
            </div>
            <CountDownSimple 
            bgImage={`url(${URL_IMAGES}fondo2.png)`}
            bgVertical={`url(${URL_IMAGES}fondo2.png)`}
                eventDate={new Date(2026, 10, 14)}
               format="dddd DD MMMM"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_PRIMARY}
                circleBgColor={"#F5EFE6"}
                
                >  
            </CountDownSimple>
           <ImageMiddle bgPosition="50%" height="80vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>

            <div style={{backgroundColor:"#F5EFE6" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            </div>
                          <div style={{backgroundImage: `url("${URL_IMAGES}contador.jpg")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:"rgb(198, 90, 46,.8)"}}>
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
            <div style={{backgroundColor:COLOR_PRIMARY }}>
           {/* <img src={`${URL_IMAGES}1.png`} style={{width: "100%", borderRadius:2, position: "absolute", left:"100px"}} /> */}
                        <GiftList2 {...giftListData}></GiftList2>
          
                {/* <img src={`${URL_IMAGES}2.png`} style={{width: "100%", borderRadius:2, position: "absolute", left:"100px"}} /> */}
                    </div>
            <RSVPForm 
                bgImage={`${URL_IMAGES}confirmacion.jpg`}
                dateLine={new Date(2026,3,30)}
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
                fontSize="2.5rem"
                transparencyButton={true}
            >
                
            </RSVPForm>
                        
              <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >        
                <DressCode {...dresscode}></DressCode>
                  {/* <img src={`${URL_IMAGES}3.png`} style={{width: "100%", borderRadius:2, position: "absolute", left:"100px"}} /> */}
                <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                                <img src={`${URL_IMAGES}adorno2.svg`} width="300"/>
                            </Fade>		
                        </Grid>
                </Grid>
                              <WithoutKids {...withOutKids} /> 
                            
                        <Grid container spacing={2} padding={2} display="flex" justifyContent="center">
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                <Fade direction="up"  triggerOnce={true}>
                                    <Paper sx={{ padding:2, backgroundColor: COLOR_BG, mb: 4 }}>
                                    {/* Título */}
                                    <Grid container justifyContent="center" textAlign="center" mb={2}>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                            <Typography variant="h4" sx={{ color: COLOR_PRIMARY, fontSize: 40 }} className={MAIN_TYPO}>
                                            {t("lodging.title")}
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, mt: 1 }} className={BODY_TYPO}>
                                            {t("lodging.lodgingMessage")}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    {/* Tarjeta */}
                                    <Grid container justifyContent="center">
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                            <Box sx={{ p: 3, backgroundColor: "white", borderRadius:1 }} gap={1}>
                                            
                                            <Typography variant="h4" align="center" className={MAIN_TYPO} sx={{ mb: 1, color:COLOR_PRIMARY }}>
                                              Hotel Royal Palace
                                            </Typography>
                                            <img src={`${URL_IMAGES}home-royale.png`} style={{width: "100%", borderRadius:2}} />
                                            <Typography sx={{ mt: 1 }} className={BODY_TYPO} align="center">{t("lodging.reservationsAt")}</Typography>

                                            <Typography sx={{ mt: 1, mb: 1 }} align="center" className={BODY_TYPO}> <Link style={{color:COLOR_THIRD}} color={COLOR_THIRD} to="https://royalpalace.com.mx/our-rooms/" target="_blank" rel="noopener noreferrer">https://royalpalace.com.mx/our-rooms/</Link></Typography>

                                   

                                            
                                        <Box display="flex" justifyContent="center">
                                        <   CustomButton href={"https://maps.app.goo.gl/qsW7QbV2Yk4HAwaD6"} bgColor={COLOR_FOURTH} color={'white'} label={t("events.location")} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />

                                        </Box>

                                    </Box>
                                 </Grid>
                            </Grid>
                        </Paper>
                     </Fade>
                    </Grid>
               </Grid>
                </Box>   
                        
            <div style={{height:100}}></div>

                     <Gallery photos={galleryPhotos}></Gallery>
         
            <FooterInvites bgColor={COLOR_BG} color={COLOR_PRIMARY}></FooterInvites>
            <InvitationWelcomeModal
            open={open}
            onEnter={handleEnter}
            onClose={handleEnter}
            isMultilanguage={invitationConfig.isMultilanguage}
            language={invitationConfig.language}
            selectableLanguages={invitationConfig.selectableLanguages}
            color={COLOR_PRIMARY}
           
/>
        </div>
    )
}
export default WeddingMariaIsabelChristianDuran;
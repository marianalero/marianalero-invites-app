import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";

import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";

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
import ImageCircle from "../../components/ImgCircle/ImgCircle";
import Gallery from "../../components/Gallery/Gallert";
import Adornment from "../../components/Adornment/Adornment";

const WeddingCarlos  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestType: string = useMemo(() => {
        return searchParams.get("g") || "cj";
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
        document.title = "Boda Carlos Jaudiel & Carlos Mario";
    }, []);
    // 🎨 BACKGROUNDS
    const BG_MAIN = "#F2EADD";        // Beige principal
    const BG_SECTION = "#E8DFCF";     // Beige suave
    const BG_ACCENT = "#D6C7B2";      // Arena

    // 🖋 TEXTOS
const TEXT_PRIMARY = "#3E3A36";   // Café oscuro elegante (principal)
const TEXT_SECONDARY = "#7A6F63"; // Café suave (secundario)
    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#8C7B6A";  

  
    const MAIN_TYPO = "great-vibes-regular";
    const SECONDARY_TYPO = "dm-serif-display-regular";
    const BODY_TYPO = "lora";
    const COLOR_BG ="#F7F3EB";

    const URL_IMAGES = `${URL_REPO}boda/boda-carlos-jaudiel-carlos-mario/`;
    const URL_SONG = `${URL_REPO}canciones/AThousandYears-ChristinaPerri-Violin.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Civil",
                icon: `${URL_IMAGES}civil.png`,
                date: new Date(2025, 11, 5, 20, 0, 0),
                locationName: "Jardín Hotel Araiza Hermosillo",
                address: "Blvd. Francisco Eusebio Kino 353, Lomas del Pitic, 83010 Hermosillo, Son.",
                size: 12,
                color: TEXT_PRIMARY,
                mainTypo: SECONDARY_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/Fhef3TDznVauZZLx5",
                colorButton: BUTTON_PRIMARY,
                colorIcon: BUTTON_PRIMARY,
                fontSize:"2rem",
                bgColor:"white",
                borderSquare:true,
            
            },
            {
                icon: `${URL_IMAGES}recepcion.png`,
                bgColor:"white",
                eventName: "Recepción",
                date: new Date(2026, 11, 5, 21, 0, 0),
                locationName: "Centro De Convenciones Hotel Araiza Hermosillo",
                address: "Blvd. Francisco Eusebio Kino 353, Lomas del Pitic, 83010 Hermosillo, Son.",
                size: 12,
                color: TEXT_PRIMARY,     
                mainTypo: SECONDARY_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/Fhef3TDznVauZZLx5",
                colorButton: BUTTON_PRIMARY,
                
                colorIcon: BUTTON_PRIMARY,fontSize:"2rem",
                borderSquare:true,
            },
    ];
    
    const giftListData: GiftListProps = {      
  
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: TEXT_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopeMainTypo: MAIN_TYPO,
        envelopeTitleColor:TEXT_PRIMARY,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo o si lo prefieres puedes hacer transferencia bancaria a la siguiente cuenta:",
        bankIconStart: `${URL_IMAGES}iconos2/14.svg`,
        bankDetails: guestType === "cm" ? [

            {
                numbers :[ 
                    {
                    numberType: "Cuenta",
                    number: "124 272 9199 ",
                    },
                    {
                    numberType: "Tarjeta",
                    number: "4152 3141 4541 4820",
                    }
                
                ],
                bank: "BBVA Bancomer",
                name: "Carlos Mario Gastélum Lugo",
                color: TEXT_SECONDARY,
                bodyTypo: BODY_TYPO,
                bgColor:"white",
                outlineColor:true,
                concept:"Regalo boda Carlos y Jaudiel"
                
            }
            ] :
            [
            {
                numbers :[ 
                    {
                    numberType: "CLABE",
                    number: "1277 6001 3443 688859",
                    },
                    {
                    numberType: "Tarjeta",
                    number: "4027 6658 5394 6375",
                    }
                
                ],
                bank: "Banco Azteca",
                name: "Carlos Jaudiel Lugo",
                color: TEXT_SECONDARY,
                bodyTypo: BODY_TYPO,
                bgColor:"white",
                outlineColor:true,
                concept:"Regalo boda Carlos y Jaudiel"
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Etiqueta Rigurosa",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    
    
    const timelineData: CustomizedTimelineProps = {
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: "white",
                colorTitle: "white",
                colorBody: "white",
                fontSize:"50px",
                bgColor: TEXT_PRIMARY, 
                events: [
                    {
                        eventName: "Cóctel",
                        date: new Date(2025, 10, 16, 19, 30, 0),
                        icon: `${URL_IMAGES}iconos2/5.svg`,
                    },
                    {
                        eventName: "Ceremonia Civil",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos2/4.svg`,
                    },
                    
                    {
                        eventName: "Recepción",
                        date: new Date(2025, 10, 16, 21, 0, 0),
                        icon: `${URL_IMAGES}iconos2/6.svg`,
                    },
                    {
                        eventName: "Vals",
                        date: new Date(2025, 10, 16, 22, 0, 0),
                        icon: `${URL_IMAGES}iconos2/7.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 22, 30, 0),
                        icon: `${URL_IMAGES}iconos2/9.svg`,
                    },
                    {
                        eventName: "Todos a bailar",
                        date: new Date(2025, 10, 16, 23, 0, 0),
                        icon: `${URL_IMAGES}iconos2/10.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 17, 2, 0, 0),
                        icon: `${URL_IMAGES}iconos2/12.svg`,
                    },
                ],
    };

    const sponsors:PairSponsors[] = [
            {
                sponsorOne: {name:"Brianna Elizabeth Lugo López"},
                sponsorTwo: {name:"Lizbeth Regina Cuevas Acosta"},
            },
            {
                sponsorOne: {name:"Alejandra Quiñonez Esquer"},
                sponsorTwo: {name:"María Lucía Escalante Molina"},
            },
           
        ];
    const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria2.jpg`,
        `${URL_IMAGES}galeria3.jpg`,
        `${URL_IMAGES}galeria4.jpeg`,
        
    ];

    return (
        <div style={{backgroundColor:BG_MAIN,maxWidth: '100%',overflowY:"auto", color:TEXT_PRIMARY}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={BUTTON_PRIMARY}/>
            <CoverInline 
                ourWeddingStart={true}
                weddingDate="03.07.26"
                bgImage={`${URL_IMAGES}PORTADA.jpeg`}
                brideName="Carlos Jaudiel" 
                symbolr={"&"} 
                groomName={"Carlos Mario"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="2.2rem"
               verticalPosition="bottom"
               ampersonClassName={MAIN_TYPO}
               bgPosition="40%"
                >
            </CoverInline>
            
                <Box padding={2} bgcolor={"rgb(250,250,250,.8)"}   display={"flex"}  justifyContent={"center"}>
           
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={4} sx={{backgroundColor:BG_SECTION}}> 
                        
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} justifyContent={"center"} display={"flex"}>
                            <Fade direction="up" triggerOnce={true} > <ImageCircle  imgSrc={`${URL_IMAGES}REDONDA1.jpg`} /></Fade>
               
                        </Grid>
                         <Grid size={{xs:12,sm:12,md:12,lg:12}} justifyContent={"center"} display={"flex"}>
                            <Fade direction="up" triggerOnce={true} > <ImageCircle  imgSrc={`${URL_IMAGES}REDONDA.jpg`} /></Fade>
               
                        </Grid>
                          
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.2rem", fontStyle: "italic!important" }} >"Mi refugio, mi fuerza, mi inspiración, tu mejor diseño: nuestra vida juntos" ¡Gracias!</Typography>
                            </Fade>		
                        </Grid>	
                        
                           	
                     
                 </Grid>
            </Box>
          
            <ImageMiddle bgPosition="50%" height="60vh" bgImage={`${URL_IMAGES}enmedio.jpg`} bgPositionY="30%"></ImageMiddle>
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            
            <Grid container spacing={2} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box padding={2}   bgcolor={"white"}>
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:TEXT_PRIMARY,borderStyle:"solid",borderWidth:"1.5px" ,}} >
                       
                       <Grid container spacing={2} padding={2} justifyContent={"center"} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegría de nuestra unión, con la bendición de Dios y nuestros padres</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO}>Luz de Lourdes Lugo López</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"}className={MAIN_TYPO} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}} variant="h4" textAlign={"center"} className={MAIN_TYPO} >Olivia Lugo Chang (&#8224;)</Typography>
                            <Typography sx={{color:TEXT_PRIMARY, fontSize: "1.5rem"}}  variant="h4" textAlign={"center"} className={MAIN_TYPO}>Carlos Ramón Gastélum Almada</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Te invitamos a celebrar con nosotros este día tan especial</Typography>
                            </Fade>
                            </Grid>
                             <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                       <Adornment  image={`${URL_IMAGES}adornos/42.png`} width={"200px"} />
                    </Grid>
                        </Grid>
                    
                   
           
                          
                       
                
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            </div>
            <CountDown 
                eventDate={new Date(2026,6,3)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={SECONDARY_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="1.8rem"
                marginTop="30px"
                padding="1em"
                alignItems="end"
                >  
            </CountDown>
            <WeddingSponsor 
            headerName="Testigos"
             bgColor={"white"}
             headerFontSize="45px" 
             mainTypo={MAIN_TYPO} 
             bodyTypo={BODY_TYPO} 
             sponsors={sponsors} 
             height={"60vh"} 
             color={TEXT_PRIMARY} 
             addormentEnd={`${URL_IMAGES}adornos/42.png`}
             addormentWidth="200px"
             ></WeddingSponsor>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>
              <ImageMiddle bgPosition="50%" height="50vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>
                          <div style={{backgroundColor:BG_ACCENT, padding: "50px 20px" }}>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
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
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "left", padding: "50px 20px", backgroundRepeat:"no-repeat" }}>
            <Grid container spacing={2} padding={2} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
                
                    </div>
            <RSVPForm 
           
            dateLine={new Date(2026,4,31)}
                textColor={"white"}
                colorButton={BUTTON_PRIMARY}
                bgColor={BG_ACCENT} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                color={"white"}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
                numberInWords={true}
                fontSize="2rem"
                
            >
                
            </RSVPForm>
                        <div style={{backgroundImage: `url("${URL_IMAGES}fondo2.png")`, backgroundSize: "cover", backgroundPosition: "right", padding: "50px 20px" }}>
              <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} >        
            <DressCode {...dresscode}></DressCode>

                <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                       <Adornment  image={`${URL_IMAGES}adornos/42.png`} width={"200px"} />
                    </Grid>
                </Grid>
                              <WithoutKids {...withOutKids} /> 
                               
                              </Box>  
               <Box padding={2} bgcolor={"rgb(250,250,250,.8)"} marginTop={"10%"} >   
                                    <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                     <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1rem" }} >Queremos que estén 100% con nosotros y que nuestro fotógrafo tenga la mejor toma sin un mar de celulares. ¡Después les compartimos todo!</Typography>
                    </Grid>
                </Grid>    
                                     </Box>
            <div style={{height:100}}></div>
           
                     <Gallery photos={galleryPhotos}></Gallery>
         </div>
            <FooterInvites bgColor={COLOR_BG} color={TEXT_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                             <Typography variant="h4" className={MAIN_TYPO} sx={{color:TEXT_PRIMARY}}>Bienvenidos</Typography>
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
export default WeddingCarlos;
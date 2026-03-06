import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";
import Cover from "../../components/Cover/CoverImage/Cover";
import Introduction from "../../components/Introduction/Introduction";
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
    const COLOR_SECONDARY = "#D8CBB3";
    const COLOR_TREE = "#CFC1A7";
    const MAIN_TYPO = "playfair-display-400 to-upper";
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
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/rutM2huWpbQgHH7y7",
                colorButton: COLOR_SECONDARY,
                colorIcon: COLOR_TREE,
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
                color: COLOR_TREE,     
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/GAw8VVfjyR5yCkfP8",
                colorButton: COLOR_SECONDARY,
                
                colorIcon: COLOR_TREE,fontSize:"2rem",
                borderSquare:true,
            },
    ];
    
    const giftListData: GiftListProps = {
        fontSize:"2rem",
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51938530",
                icon: `${URL_IMAGES}liverpool.svg`,
            }
        ],
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_TREE, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
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
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_TREE,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_TREE,
        type:1,
        title:"Formal",
        fontSize:"2rem",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    
    const qoute:QouteProps ={
            qoute: "Dos corazones, un solo amor. Celebra con nosotros nuestro matrimonio.",
            bodyTypo: BODY_TYPO,
            bgColor: COLOR_BG,
            italic:true,
            fontsize:"1.5rem",
    }
    // const timelineData: CustomizedTimelineProps = {
    //             mainTypo: MAIN_TYPO,
    //             bodyTypo: BODY_TYPO,
    //             colorPrimary: COLOR_TREE,
    //             colorTitle: COLOR_TREE,
    //             colorBody: COLOR_TREE,
    //             fontSize:"50px",
    //             bgColor: COLOR_BG2, 
    //             events: [
    //                 {
    //                     eventName: "Ceremonia Civil",
    //                     date: new Date(2025, 10, 16, 19, 0, 0),
    //                     icon: `${URL_IMAGES}iconos/3.svg`,
    //                 },
    //                 {
    //                     eventName: "Cóctel  de bienvenida",
    //                     date: new Date(2025, 10, 16, 20, 0, 0),
    //                     icon: `${URL_IMAGES}iconos/4.svg`,
    //                 },
    //                 {
    //                     eventName: "Primer baile",
    //                     date: new Date(2025, 10, 16, 21, 20, 0),
    //                     icon: `${URL_IMAGES}iconos/5.svg`,
    //                 },
    //                 {
    //                     eventName: "Cena",
    //                     date: new Date(2025, 10, 16, 21, 40, 0),
    //                     icon: `${URL_IMAGES}iconos/6.svg`,
    //                 },
    //                 {
    //                     eventName: "Fin del evento",
    //                     date: new Date(2025, 10, 16, 2, 0, 0),
    //                     icon: `${URL_IMAGES}iconos/9.svg`,
    //                 },
    //             ],
    // };

    const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}galeria5.jpg`,
        `${URL_IMAGES}galeria6.jpg`,
    ];

    return (
        <div style={{backgroundColor:COLOR_BG,maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="05.12.26"
                bgImage={`${URL_IMAGES}enmedio3.jpg`}
                brideName="Fedra Edlyn" 
                symbolr={"&"} 
                groomName={"Juan Pablo"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="3rem"
               
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="50%" height="100vh" bgImage={`${URL_IMAGES}enmedio.jpg`} bgPositionY="30%"></ImageMiddle>

            <Grid container spacing={2} padding={4} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} sx={{borderColor:COLOR_SECONDARY,borderStyle:"solid",borderWidth:"1.5px"}}>
                       <Introduction
                            brideFather="Jorge Humberto Aguilar Veloz"
                            brideMother="Fedra Isela López Ruiz"
                            groomFather="Martín Preciado García"
                            groomMother="Elba Elizabeth Jara Molina"
                            mainTypo={MAIN_TYPO}
                            bodyTypo={BODY_TYPO}
                            color={COLOR_PRIMARY}
                        
                            amperson="&"
                            fontSize="1.5rem"
                        >
                        </Introduction>
                    </Box>
                    
                </Grid>
            </Grid>
            
            <CountDown 
                eventDate={new Date(2026,11,5)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="1.5rem"
                marginTop="30px"
                >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
              <ImageMiddle bgPosition="50%" height="50vh" bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>
            {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}
        
            
            <Grid container spacing={2} padding={4} paddingBottom={0} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                        <GiftList {...giftListData}></GiftList>
                    </Box>
                    
                </Grid>
               </Grid>
                <MiniGallery
                    images={[
                        `${URL_IMAGES}portada.jpg`,
                        `${URL_IMAGES}galeria2.jpg`,
                        `${URL_IMAGES}galeria3.jpg`,
                    ]}
                     backgroundColor="#F7F3EB"
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
            <RSVPForm 
            bgImage={`${URL_IMAGES}confirmacion.jpg`}
            dateLine={new Date(2026,10,5)}
                textColor={"white"}
                colorButton={COLOR_SECONDARY} 
                bgColor={COLOR_BG} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                color={"white"}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>

                 <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                    <Box display={"flex"} justifyContent={"center"} marginBottom={4} width={"50%"} height={"1.5px"} bgcolor={COLOR_SECONDARY}></Box>
                        
                 
                    </Grid>
               </Grid>
                              <WithoutKids {...withOutKids} /> 
            <div style={{height:100}}></div>
                     <Gallery photos={galleryPhotos}></Gallery>
         
            <FooterInvites bgColor={COLOR_BG} color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
                             <Typography variant="h4" className={MAIN_TYPO} sx={{color:COLOR_TREE}}>Bienvenidos</Typography>
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
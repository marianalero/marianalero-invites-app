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
import EventCardImage from "../../components/EventCard/EventCardImage";
import Gallery from "../../components/Gallery/Gallert";
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPFormV2 from "../../components/RSVP/RSVPFormV2";
const WeddingCendyAdrian  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 11;
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
        document.title = "Boda Cendy & Adrian";
    }, []);
    const COLOR_PRIMARY = "#192338";
    const COLOR_SECONDARY = "#1e2e4f";
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "roboto-400 to-upper";
    const COLOR_BG ="rgb(240, 243, 250)";
    const URL_IMAGES = `${URL_REPO}boda/boda-cendy-adrian/`;
    const URL_SONG = `${URL_REPO}canciones/CalumScott-Biblical.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2026, 2, 7, 17, 0, 0),
                locationName: "Catedral Metropolitana de Hermosillo",
                address: "Blvr. Miguel Hidalgo S/N, Centro Norte, Hermosillo, Son.",
                size: 6,
                color: COLOR_SECONDARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/cZnwKoApSPgcT1rD9",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_SECONDARY,
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 7, 20, 0, 0),
                locationName: "Antigua Hacienda las Palmas",
                address: "Fabrica de Los Ángeles #15, Tronconal, El Alamito Buenavista, Son.",
                size: 6,
                color: COLOR_SECONDARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/2rGGv4ZUsH2MzWLW8",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_SECONDARY,
            },
    ];
    
    const giftListData: GiftListProps = {
       
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_SECONDARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Su presencia en este día tan especial es todo lo que deseamos. Quienes deseen honrarnos con un obsequio, les agradeceremos de corazón su generosidad en un sobre.",
     
        bankIconEnd: `${URL_IMAGES}iconos/sobre.png`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "4169161484289680",
                    },
                ],
                bank: "BanCoppel",
                name: "Cendy Abril Aguilar",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_SECONDARY,
                
            },
             {
                numbers :[ 
                    {
                    numberType: "Zelle",
                    number: "(520) 456-6762",
                    },
                ],
                bank: "",
                name: "Adrian Gonzalez",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_SECONDARY,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_SECONDARY,
        type:2,
        title:"Formal",
        omitColorsLabel:"Omitir colores de los novios",
        omitColors:["#dcccb3","#dcccb3"]   

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        `${URL_IMAGES}enmedio.jpeg`,
        `${URL_IMAGES}galeria3.jpeg`,
        `${URL_IMAGES}galeria4.jpeg`,
       `${URL_IMAGES}galeria5.jpeg`,
    ];
    const qoute:QouteProps ={
            qoute: " En medio de la vida te encontré, y supe que eras tú, y hoy te elijo para seguir creciendo, aprendiendo y celebrando juntos cada momento.",
            bodyTypo: BODY_TYPO,
            addormentEnd:`${URL_IMAGES}adornos.svg`
    }
    const timelineData: CustomizedTimelineProps = {
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: COLOR_PRIMARY,
                colorTitle: COLOR_PRIMARY,
                colorBody: COLOR_PRIMARY,
                fontSize:"50px",
                bgColor:COLOR_BG, 
                events: [
                    {
                        eventName: "Misa ",
                        date: new Date(2025, 10, 16, 17, 0, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: "Cocktail",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 21, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: "Vals",
                        date: new Date(2025, 10, 16, 22, 0, 0),
                        icon: `${URL_IMAGES}iconos/6.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 16, 2, 0, 0),
                        icon: `${URL_IMAGES}iconos/8.svg`,
                    },
                ],
    };
    return (
        <div style={{backgroundColor:"#f0f0f0",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="07.03.26"
                bgImage={`${URL_IMAGES}portada.jpeg`}
                brideName="Cendy" 
                symbolr={"&"} 
                groomName={"Adrian"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="80px"
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}galeria1.jpeg`}></ImageMiddle>
         
            <Introduction
                brideFather="Estela Aguilar Lozano"
                brideMother="Angel Abril Olaje"
                groomMother="Maria Aide Gonzalez"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}adornos.svg`}
                amperson="&"
                fontSize="40px"
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2026,2,7)}
                bgImage={`${URL_IMAGES}contador.jpeg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio3.jpeg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            <RSVPFormV2 
            textColor="white"
                colorButton={COLOR_PRIMARY}     
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2026,0,7)}
                color="white"
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
                bgImage={`${URL_IMAGES}galeria3.jpeg`}
                bgColor=""
            >
                
            </RSVPFormV2>
            <DressCode {...dresscode}></DressCode>
            

             {/* <HashtagSection
                  imageSrc={`${URL_IMAGES}instagram.png`}
                  bgColor="#ffffff" 
                  hashtags={["#TeamSchweitzmanLugo"]}     bodyTypo={BODY_TYPO}           /> */}
                   <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
                              <WithoutKids {...withOutKids} /> 
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor="rgb(249, 249, 249)" color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"}>
                             <Typography variant="h2" className={MAIN_TYPO} sx={{color:COLOR_SECONDARY}}>Bienvenidos</Typography>
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
export default WeddingCendyAdrian;
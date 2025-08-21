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
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import Gallery from "../../components/Gallery/Gallert";
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import HashtagSection from "../../components/Instagram/Instagram";
import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPForm from "../../components/RSVP/RSVPForm";
const WeddingStevenArely  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 4;
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
        document.title = "Boda Steven & Arely";
    }, []);
    const COLOR_PRIMARY = "#8aaeb7";
    const COLOR_SECONDARY = "#d7ae54";
    const COLOR_TREE = "#dbbf97"
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const COLOR_BG ="rgb(215,174,84,.1)";
    const URL_IMAGES = `${URL_REPO}boda-steven-arely/`;
    const URL_SONG = `${URL_REPO}canciones/DieWithASmile.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 25, 16, 0, 0),
                locationName: "Casa Santuario",
                address: "Lote 9 y 10, P.º Villa Hermosa, San Carlos, Son.",
                size: 6,
                color: COLOR_TREE,
                image:  `${URL_IMAGES}local.jpeg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/uRtsyaQb8S7rvvY36",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE
            },
    ];
    
    const giftListData: GiftListProps = {
       
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_SECONDARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas sumar a nuestra luna de miel:",
        bankIconEnd: `${URL_IMAGES}iconos/5.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "5204 1661 9420 0996",
                    },
                ],
                bank: "Banamex",
                name: "Arely Lugo",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_TREE,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_SECONDARY,
        type:3,
        title:"Formal playero",
        image:`${URL_IMAGES}dresscode.png`,
        omitColorsLabel:"Omitir color blanco",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        `${URL_IMAGES}galeria5.jpg`,
        `${URL_IMAGES}galeria6.jpg`,
        `${URL_IMAGES}galeria7.jpg`,
        `${URL_IMAGES}galeria8.jpg`,
       `${URL_IMAGES}galeria9.jpg`,
    ];
    const qoute:QouteProps ={
            qoute: " El amor no necesita traducción, porque más allá de nuestras culturas, encontramos en él la forma perfecta de entendernos",
            bodyTypo: BODY_TYPO,
            addormentEnd:`${URL_IMAGES}adornos2.svg`
    }
    const timelineData: CustomizedTimelineProps = {
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: COLOR_TREE,
                colorTitle: COLOR_TREE,
                colorBody: COLOR_TREE,
                fontSize:"50px",
                bgColor: "rgb(215,174,84,.05)", 
                events: [
                    {
                        eventName: "Recepción ",
                        date: new Date(2025, 10, 16, 16, 0, 0),
                        icon: `${URL_IMAGES}iconos/1.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 17, 0, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: "Vals",
                        date: new Date(2025, 10, 16, 18, 30, 0),
                        icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 16, 23, 0, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                ],
    };
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="25.10.25"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Steven" 
                symbolr={"y"} 
                groomName={"Arely"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="80px"
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}galeria1.jpg`}></ImageMiddle>
         
            <Introduction
                brideFather="Rigoberto Lugo Romero (&#8224;)"
                brideMother="Maria Concepción Ibarra Corral"
                groomFather="Rana Schweitzman"
                groomMother="Harvey Schweitzman"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}adornos1.svg`}
                amperson="y"
                fontSize="40px"
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,9,11)}
                bgImage={`${URL_IMAGES}galeria2.jpg`}
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
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}galeria10.jpg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            <RSVPForm 
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor={COLOR_BG} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2025,9,15)}
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
             <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />

             <HashtagSection
                  imageSrc={`${URL_IMAGES}instagram.png`}
                  bgColor="#ffffff" 
                  hashtags={["#TeamSchweitzmanLugo"]}     bodyTypo={BODY_TYPO}           />
                   <Adornment image={`${URL_IMAGES}adornos1.svg`} width={"250px"} />
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
                             <Typography variant="h2" className={MAIN_TYPO} sx={{color:COLOR_TREE}}>Bienvenidos</Typography>
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
export default WeddingStevenArely;
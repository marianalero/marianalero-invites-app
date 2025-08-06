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
const WeddingKorinaDaniel  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
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
        document.title = "Boda Korina & Daniel";
    }, []);
    const COLOR_PRIMARY = "#ed796a";
    const COLOR_SECONDARY = "#fcd8b8";
    const COLOR_TREE = "#929292"
    const MAIN_TYPO = "alex-brush-regular ";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const COLOR_BG ="rgb(215,174,84,.05)";
    const URL_IMAGES = `${URL_REPO}boda-korina-daniel/`;
    const URL_SONG = `${URL_REPO}canciones/OneAndOnly-Adele.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Iglesia",
                date: new Date(2025, 9, 11, 14, 0, 0),
                locationName: "Parroquia San Carlos Borromeo",
                address: "Gabriel Estrada plaza comercial s/n, Caracol Turístico, San Carlos, Son.",
                size: 6,
                color: COLOR_TREE,
                image: `${URL_IMAGES}iglesia.jpg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/VUAnSLKYQJCjVtYn6",
                colorButton: COLOR_SECONDARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_PRIMARY
            },
            {
                eventName: "Civil y Recepción ",
                date: new Date(2025, 9, 11, 15, 30, 0),
                locationName: "Casa Santuario",
                address: "Lote 9 y 10, P.º Villa Hermosa, San Carlos, Son.",
                size: 6,
                color: COLOR_TREE,
                image:  `${URL_IMAGES}local.jpeg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/uRtsyaQb8S7rvvY36",
                colorButton: COLOR_SECONDARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_PRIMARY
            },
    ];
    
    const giftListData: GiftListProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_TREE, 
        showEnvelope:true,
        envelopePhrase:"Su presencia en este día tan especial es todo lo que deseamos. Quienes deseen honrarnos con un obsequio, les agradecemos de corazón su generosidad en un sobre.",
        bankIconEnd: `${URL_IMAGES}adornos.svg`
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_TREE,
        type:2,
        title:"Elegante, formal playero"
    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        `${URL_IMAGES}image3.jpeg`,
    ];
    const qoute:QouteProps ={
            qoute: "Y así, con la fe como brújula y el amor como destino, emprendemos juntos la más hermosa de las aventuras: la vida compartida.",
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
                bgColor: "rgb(215,174,84,.05)", 
                events: [
                    {
                        eventName: "Misa ",
                        date: new Date(2025, 10, 16, 14, 0, 0),
                        icon: `${URL_IMAGES}iconos/1.svg`,
                    },
                    {
                        eventName: "Civil",
                        date:new Date(2025, 10, 16, 13, 30, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: "Cocktail ",
                        date: new Date(2025, 10, 16, 16, 0, 0),
                       icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 17, 30, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                    {
                        eventName: "Vals",
                        date: new Date(2025, 10, 16, 18, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                ],
    };
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="11.10.25"
                bgImage={`${URL_IMAGES}image6.jpeg`}
                brideName="Korina" 
                symbolr={"&"} 
                groomName={"Daniel"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}image2.jpeg`}></ImageMiddle>
            <Introduction
                brideFather="Héctor Vidal"
                brideMother="Margarita Valenzuela"
                groomFather="Adiel Guerrero"
                groomMother="María del Carmen Gámez"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_TREE}
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,9,11)}
                bgImage={`${URL_IMAGES}image0.jpeg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel excelURL="https://docs.google.com/forms/d/e/1FAIpQLSfOXS6266IS8IL6lwpHbGYDuZcjZ6-aheJRCIMSF96zyqiz8g/formResponse" qrActive={false} bgImage={`${URL_IMAGES}image5.jpeg`} mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} textColor={""} bgColor={""} ></RSVPExcel>
            <DressCode {...dresscode}></DressCode>
            <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
            <WithoutKids {...withOutKids} /> 
             <HashtagSection
                  imageSrc={`${URL_IMAGES}instagram.png`}
                  bgColor="#ffffff" 
                  hashtags={["#BodaKorinayDaniel"]}     bodyTypo={BODY_TYPO}           />
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
export default WeddingKorinaDaniel;
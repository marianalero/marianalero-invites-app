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
import { IMAGES_URl } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
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
    const COLOR_PRIMARY = "#929292";
    const COLOR_SECONDARY = "#a6a998";
    const COLOR_TREE ="#777777";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const eventCards: EventCardProps[] = [
            {
                eventName: "Iglesia",
                date: new Date(2025, 10, 11, 14, 0, 0),
                locationName: "Parroquia San Carlos Borromeo",
                address: "Calle Jesús García 17, Col del Razo, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                image: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/iglesia2.jpeg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/angKKs6d62iJRnSG6",
                colorButton: COLOR_SECONDARY,
                bgColor:"#f2f1e9"
            },
            {
                eventName: "Civil y Recepción ",
                date: new Date(2025, 10, 11, 15, 30, 0),
                locationName: "Villa Toscana",
                address: "Lote 9 y 10, P.º Villa Hermosa, San Carlos, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                image: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Villa%20Toscana.jpeg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/uRtsyaQb8S7rvvY36",
                colorButton: COLOR_SECONDARY,
                bgColor:"#f2f1e9"
            },
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase: "¡Gracias por formar parte de nuestro inicio como familia!",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
        bankIconEnd: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/sobre-s3.svg",
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Elegante, formal playero"
    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04866.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04778.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04735.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04853.jpg",
    ];
    const qoute:QouteProps ={
            qoute: "Y así, con la fe como brújula y el amor como destino, emprendemos juntos la más hermosa de las aventuras: la vida compartida.",
            bodyTypo: BODY_TYPO,
    }
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={`${IMAGES_URl}/invitacion-hidai-leonardo/audio/cancion.mp3`} backgroundColor={COLOR_PRIMARY}/>
            <Cover 
                weddingDate="11.10.25"
                bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04740.jpg" 
                brideName="Korina" 
                symbolr={"&"} 
                groomName={"Daniel"} 
                className={MAIN_TYPO}
                bgSize="cover"
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgImage={"https://marianalero.github.io/Invitacion/images/DSC_9877.JPG"}></ImageMiddle>
            <Introduction
                brideFather="Héctor Vidal"
                brideMother="Margarita Valenzuela"
                groomFather="Adiel Guerrero"
                groomMother="María del Carmen Gámez"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,8,31)} 
                bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04894.jpg"
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

            {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}

            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel excelURL="https://docs.google.com/forms/d/e/1FAIpQLSfOXS6266IS8IL6lwpHbGYDuZcjZ6-aheJRCIMSF96zyqiz8g/formResponse" qrActive={false} bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04765.jpg" bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} ></RSVPExcel>
            <DressCode {...dresscode}></DressCode>
            <WithoutKids {...withOutKids} />
            {/* <Fab sx={fabStyle } color="primary" aria-label="add">
                <AddIcon />
            </Fab> */}
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
                             <Typography variant="h2" className={MAIN_TYPO}>Bienvenidos</Typography>
                            </Box>
                             <Box display={"flex"} justifyContent={"center"}>
                              <CustomButton bgColor={COLOR_PRIMARY} color={'#FFFFFF'} label={'Entrar'} onClick={handleClose}></CustomButton>
                            </Box>
                             
                            
                        
                         </DialogContent>
                         <DialogActions>
                         
                        
                         </DialogActions>
                     </Dialog>   
        </div>
    )
}
export default WeddingKorinaDaniel;
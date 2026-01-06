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

import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

import Adornment from "../../components/Adornment/Adornment";
import EventCardImage from "../../components/EventCard/EventCardImage";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import Gallery from "../../components/Gallery/Gallert";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
const WeddingSphiaLuis  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 100;
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
        document.title = "Boda Sophia & Luis Enrique";
    }, []);
    const COLOR_PRIMARY = "#d1b7a0";
    const COLOR_SECONDARY = "#e9d4c1";
    const COLOR_TREE = "#dbbf97"
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "montserrat-400";
    // const SECOND_TYPO = "the-seasons";
    const COLOR_BG ="rgb(215,174,84,.05)";
    const URL_IMAGES = `${URL_REPO}boda/boda-sophia-luis-enrique/`;
    const URL_SONG = `${URL_REPO}canciones/MinnzPiano-YouAreInLove.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2026, 1, 28, 17, 30, 0),
                locationName: "Parroquia Santa Elena de la Cruz", 
                address: "C. Real del Arco 2, Villa Satélite, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/A5KvcCm3Mxe1divK7",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px",
                image:`${URL_IMAGES}iglesia.jpg`

            },
            {
                eventName: "Recepción",
                date: new Date(2026, 1, 28, 19, 0, 0),
                locationName: "Gran Agave",
                address: "Blvd Serna y Calle El Chanate, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/oaTwHWUYr4a3sZhc7",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px",
                image:`${URL_IMAGES}recepcion.jpeg`
            },
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51647033",
                icon: `${URL_IMAGES}adornos/6.svg`,
            },
            {
                link: "https://www.amazon.com.mx/wedding/guest-view/24ZX8O7HJ7QE",
                icon: `${URL_IMAGES}adornos/7.svg`,
            }
        ],
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_TREE, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",     
        bankIconEnd: `${URL_IMAGES}sobre.svg`,
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_TREE,
        type:1,
        title:"Formal",
        omitColorsLabel :"Evitar  colores claros o plata"
    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    
    const sponsors:PairSponsors[] = [
        {
            sponsorOne: {name:"Gastón Antonio Padilla Rivera"},
            sponsorTwo: {name:"Angélica Félix Barrón"},
        },
    ];
    
    
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
                        eventName: "Ceremonia Religiosa",
                        date: new Date(2025, 10, 16, 17, 30, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: "Cocktel de bienvenida",
                        date: new Date(2025, 10, 16, 19, 0, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                    {
                        eventName: "Recepción",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    
                ],
    };

    const handleConfirmed = (name: string, confirmText: string, phoneNumber: string, totalConfirmed: string, companionNames?: string) => {
        console.log("Confirmado:", name, confirmText, phoneNumber, totalConfirmed, companionNames);
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526623945085?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20%20de%20Sophia y Luis Enrique. Mi nombre es: ${name};Número de invitados:${totalConfirmed};Nombres de acompañantes: ${companionNames}`, '_blank');

        }else{
            window.open(`https://wa.me/+526623945085?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20de%20Sophia y Luis Enrique.Mi nombre es: ${name}`, '_blank');

        }
    };

    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="28.02.26"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Sophia" 
                symbolr={"&"} 
                groomName={"Luis Enrique"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="60px"
                >
            </Cover>
             {/* <Qoute 
               {...qoute}>
            </Qoute> */}
           
         
            <Introduction
                brideMother="Teodora Meneses Mendoza"
                groomFather="Luis Enrique Padilla Rivera "
                groomMother="Guadalupe Alejandra Cooper Delgado"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}adornos/1.svg`}
                amperson="&"
                fontSize="35px"
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2026,1,28)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="45px"
                >  
            </CountDown>
             <WeddingSponsor 
             bgColor="rgb(246,237,219,.3)" 
             headerFontSize="45px" 
             mainTypo={MAIN_TYPO} 
             bodyTypo={BODY_TYPO} 
             sponsors={sponsors} 
             height={"60vh"} 
             color={COLOR_PRIMARY} 
             addormentEnd={`${URL_IMAGES}adornos/1.svg`}></WeddingSponsor>

             <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio1.jpg`}></ImageMiddle>
            <Grid container spacing={2} padding={4} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Typography sx={{color:COLOR_TREE, fontSize: "3rem"}} variant="h4" textAlign={"center"} className={`${MAIN_TYPO}`} >Lugar y Fecha</Typography>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Typography variant="body1" textAlign={"center"} className={`${BODY_TYPO}`} >Te dejamos los horarios del evento, así como un botón directo a maps para que te sea más fácil llegar al lugar.</Typography>
                </Grid>
            {eventCards
                .map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio2.jpg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor={COLOR_BG} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
                hidePhoneNumberInput={true}
                    confirmed={handleConfirmed}
            >
                
            </RSVPExcel>
            <DressCode {...dresscode}></DressCode>

                   <Adornment image={`${URL_IMAGES}adornos/1.svg`} width={"250px"} />
                              <WithoutKids {...withOutKids} /> 
            <Gallery photos={[`${URL_IMAGES}galeria1.jpg`]}>
                
            </Gallery>
            <div style={{height:100}}></div>
            
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
export default WeddingSphiaLuis;
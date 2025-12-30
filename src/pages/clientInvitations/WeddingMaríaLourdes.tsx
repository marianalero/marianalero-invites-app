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

import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPForm from "../../components/RSVP/RSVPForm";
import EventCard from "../../components/EventCard/EventCard";
const WeddingMariluMichel  = () => {
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
        document.title = "Boda María Lourdes & Francisco Michel ";
    }, []);
    const COLOR_PRIMARY = "#738b71";
    const COLOR_SECONDARY = "#d7ae54";
    const COLOR_TREE = "#dbbf97"
    const MAIN_TYPO = "alex-brush-regular";
    const BODY_TYPO = "montserrat-400";
    const COLOR_BG ="rgb(215,174,84,.1)";
    const URL_IMAGES = `${URL_REPO}boda/boda-maria-lourdes-francisco-michel/`;
    const URL_SONG = `${URL_REPO}canciones/Maluma-ADMV.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Civil y Recepción",
                date: new Date(2026, 2, 13, 19, 0, 0),
                locationName: "Luna Clara Jardin",
                address: "Arq Gustavo F. Aguilar Beltrán 70, EL CHANATE, Hermosillo, Son.",
                size: 12,
                color: COLOR_TREE,
                icon: `${URL_IMAGES}anillos3.png`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/TGDDjAx7Z9VLpg8k8",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px"
            },
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51785559",
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
        bankIconEnd: `${URL_IMAGES}iconos/10.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "Tarjeta",
                    number: "4213166181487061",
                    },
                {
                    numberType: "Cuenta",
                    number: "6515238058",
                }
                ],
                bank: "HSBC",
                name: "María Lourdes Ramirez Lugo",
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

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    
    const qoute:QouteProps ={
            qoute: "El amor nos unió en un solo camino, y queremos recorrerlo junto a ti en este día especial.",
            bodyTypo: BODY_TYPO,
            addormentEnd:`${URL_IMAGES}adornos/1.svg`,
            italic:true,
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
                        eventName: "Ceremonia Civil",
                        date: new Date(2025, 10, 16, 19, 0, 0),
                        icon: `${URL_IMAGES}iconos/3.svg`,
                    },
                    {
                        eventName: "Cocktel de bienvenida",
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
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="13.03.26"
                bgImage={`${URL_IMAGES}portada.jpeg`}
                brideName="María Lourdes" 
                symbolr={"&"} 
                groomName={"Francisco Michel"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="60px"
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle>
         
            <Introduction
                brideFather="Juan Carlos Ramírez Ramírez"
                brideMother="Silvana Elizabeth Lugo Palafox"
                groomFather="Luz alicia López García"
                groomMother=""
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}adornos/2.svg`}
                amperson="&"
                fontSize="35px"
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2026,2,13)}
                bgImage={`${URL_IMAGES}contador.jpeg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="45px"
                >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio2.jpeg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            <RSVPForm 
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor={COLOR_BG} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2026,1,14)}
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>

                   <Adornment image={`${URL_IMAGES}adornos/1.svg`} width={"250px"} />
                              <WithoutKids {...withOutKids} /> 
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
export default WeddingMariluMichel;
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
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
const WeddingGlendaJose  = () => {
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
        document.title = "Boda Glenda Francisca & José Antonio";
    }, []);
    const COLOR_PRIMARY = "#738b71";
    const COLOR_SECONDARY = "#e9d4c1";
    const COLOR_TREE = "#dbbf97"
    const MAIN_TYPO = "parisienne-regular";
    const BODY_TYPO = "montserrat-400";
    // const SECOND_TYPO = "the-seasons";
    const COLOR_BG ="rgb(215,174,84,.05)";
    const URL_IMAGES = `${URL_REPO}boda/boda-glenda-jose/`;
    const URL_SONG = `${URL_REPO}canciones/FortheFirstTime.mp3`;
    const galleryPhotos = [
       `${URL_IMAGES}galeria1.jpg`,
       `${URL_IMAGES}galeria2.jpg`,
       `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}galeria5.jpg`,
    ]
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2026, 1, 28, 17, 30, 0),
                locationName: "Parroquia Santísima Trinidad", 
                address: "Bv. Justo Sierra, Periodista, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/TjHc4Crxsk9gVxE88",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"40px",
                // image:`${URL_IMAGES}iglesia.jpg`

            },
            {
                eventName: "Recepción",
                date: new Date(2026, 1, 28, 19, 0, 0),
                locationName: "Eventos Santa Clara - Jardín del Lago",
                address: "Pvda. Deserti 20, Santa Clara, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/oZ53uBLQn9Gd6RJg6",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px",
                // image:`${URL_IMAGES}recepcion.jpeg`
            },
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51920723",
                icon: `${URL_IMAGES}liverpool.svg`,
            },          
        ],
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "white", 
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",     
        bankIconEnd: `${URL_IMAGES}sobre2.svg`,
        bankDetails: [
            {
                bank: "Banamex",
                name: "Glenda Francisca Rascón González",
                numbers : [
                    {
                        numberType: "Tarjeta",
                        number: "5204 1651 4312 6591"

                    },
                ],
                color: "white",
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_TREE,
            },
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
    
    const sponsors:PairSponsors[] = [
        {
            sponsorOne: {name:"Jesús Omar Rascón González"},
            sponsorTwo: {name:"Claudia De Yanira Moroyoqui Delgado"},
        },
        {
            sponsorOne: {name:"Lina Griselda Félix Ruiz"},
            sponsorTwo: {name:"José Guadalupe Canales Gaxiola"},
        }
    ];
    
    
    // const timelineData: CustomizedTimelineProps = {
    //             mainTypo: MAIN_TYPO,
    //             bodyTypo: BODY_TYPO,
    //             colorPrimary: COLOR_TREE,
    //             colorTitle: COLOR_TREE,
    //             colorBody: COLOR_TREE,
    //             fontSize:"50px",
    //             bgColor: "rgb(215,174,84,.05)", 
    //             events: [
    //                 {
    //                     eventName: "Ceremonia Religiosa",
    //                     date: new Date(2025, 10, 16, 17, 30, 0),
    //                     icon: `${URL_IMAGES}iconos/2.svg`,
    //                 },
    //                 {
    //                     eventName: "Cocktel de bienvenida",
    //                     date: new Date(2025, 10, 16, 19, 0, 0),
    //                     icon: `${URL_IMAGES}iconos/4.svg`,
    //                 },
    //                 {
    //                     eventName: "Recepción",
    //                     date: new Date(2025, 10, 16, 20, 0, 0),
    //                     icon: `${URL_IMAGES}iconos/3.svg`,
    //                 },
                    
    //             ],
    // };
    const qoute: QouteProps = {
        bodyTypo: BODY_TYPO,
        qoute: "Love made us one",
        italic: true,
        addormentEnd: `${URL_IMAGES}adornos/1.svg`,
    };
    const handleConfirmed = (name: string, confirmText: string, phoneNumber: string, totalConfirmed: string, companionNames?: string) => {
        console.log("Confirmado:", name, confirmText, phoneNumber, totalConfirmed, companionNames);
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526621399916?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20boda%20%20de%20Glenda Francisca y José Antonio.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');

        }else{
            window.open(`https://wa.me/+526621399916?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20de%20Glenda Francisca y José Antonio.Mi nombre es: ${name}`, '_blank');

        }
    };

    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={true}
                weddingDate="15.03.26"
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Glenda Francisca" 
                symbolr={"&"} 
                groomName={"José Antonio"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="60px"
                >
            </Cover>
             <Qoute 
             {...qoute}>
            </Qoute>
            
            <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpg`}></ImageMiddle>
         
            <Introduction
                brideMother="Elba María Rodríguez Romero"
                brideFather="Javier Rascón González"
                groomFather="Gabriela Félix Ruiz"
                groomMother="Juan Gabriel Urías Vázquez"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}adornos/2.svg`}
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
             addormentEnd={`${URL_IMAGES}adornos/2.svg`}></WeddingSponsor>

             {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio1.jpg`}></ImageMiddle> */}
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
            {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio2.jpg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor={COLOR_BG} 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2026,1,1)}
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
            <Gallery photos={galleryPhotos}>
                
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
export default WeddingGlendaJose;
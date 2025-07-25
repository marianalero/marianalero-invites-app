import { useMemo, useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import { URL_REPO } from "../../config";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Grid from '@mui/material/Grid2';
import {Box, Dialog, DialogContent, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import EventCard from "../../components/EventCard/EventCard";
import Gallery from "../../components/Gallery/Gallert";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import CustomButton from "../../components/CustomButton/CustomButton";
import HashtagSection from "../../components/Instagram/Instagram";
const WeddingFerMario = () => {
        const [searchParams] = useSearchParams();
    const invitedGuests: number = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? 1 : num;
    }, [searchParams]);
    // const guestId: number | undefined = useMemo(() => {
    //     const num = Number(searchParams.get("id"));
    //     return isNaN(num) ? undefined : num;
    // }, [searchParams]);
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
    const COLOR_PRIMARY = "#01313d";
    const MAIN_TYPO = "boheme-floral";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}boda-fernando-mario/`;
    const URL_SONG = `${URL_REPO}canciones/Unconditionally-KatyPerryPiano.mp3`;
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 10, 16, 16, 0, 0),
                locationName: "Templo Expiatorio",
                address: "Gral. Antonio Villarreal 27, Country Club, 83010 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/church2.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/JqYwMT3FxbuTsAmP8",
                colorButton: COLOR_PRIMARY,
                fontSize:"45px"
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 10, 16, 20, 0, 0),
                locationName: "\"Jardín del lago\" Eventos Santa Clara",
                address: "Pvda. Deserti 20, Santa Clara, 83284 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/cheers5.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/5vKR4xMx2d6VXat67",
                colorButton: COLOR_PRIMARY,
                fontSize:"45px"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "rgb(215,174,84,.05)", 
        events: [
            {
                eventName: "Bienvenida",
                date: new Date(2025, 10, 16, 20, 0, 0),
                icon: `${URL_IMAGES}iconos/1.svg`,
            },
            {
                eventName: "Cena",
                date:new Date(2025, 10, 16, 21, 0, 0),
                icon: `${URL_IMAGES}iconos/2.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 10, 16, 21, 30, 0),
               icon: `${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Todos a bailar",
                date: new Date(2025, 10, 16, 22, 0, 0),
                icon: `${URL_IMAGES}iconos/4.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 10, 16, 2, 0, 0),
                icon: `${URL_IMAGES}iconos/5.svg`,
            },
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo, o bien, si deseas sumar a nuestra la luna de miel:",
        bankIconEnd: `${URL_IMAGES}iconos/6.svg`,
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51641075",
                icon: `${URL_IMAGES}iconos/liverpool.svg`, 
            },
        ],
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "CLABE",
                    number: "002778701955989229",
                    },
                    {
                    numberType: "Cuenta",
                    number: "5598922",
                    },
                ],
                bank: "Banamex",
                name: "Mario Alfredo Ramos Morales",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_PRIMARY,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:"Etiqueta Rigurosa",
        omitColorsLabel:"Omitir colores de la novia",
        omitColors:[
            COLOR_PRIMARY,
            
            "#F5F5DC",
        ],
    }
    const qoute:QouteProps ={
        qoute: "Tú y yo encontramos la frecuencia perfecta del amor. Esa que late fuerte, cura heridas y nos une para siempre",
        // images: [
        //     "https://marianalero.github.io/Invitacion/images/DSC_9995.jpg",
        //     "https://marianalero.github.io/Invitacion/images/285460514_10160042584270789_1637739613758679016_n.jpg",
        // ],
        bodyTypo: BODY_TYPO,
        addormentEnd:"https://marianalero.github.io/Invitacion/images/Icons/adornos.svg",
    }
    const galleryPhotos = [
       `${URL_IMAGES}galeria1.jpg`,
       `${URL_IMAGES}galeria2.jpg`,
       `${URL_IMAGES}galeria3.jpg`,
       `${URL_IMAGES}galeria7.jpg`,
        `${URL_IMAGES}galeria10.jpg`,
    ]

     useEffect(() => {
        document.title = "Boda Fernanda y Mario";
      }, []);

      return (
         <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
             <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <CoverSimple 
                weddingDate=""
                bgImage={`https://marianalero.github.io/invites-images/boda-fernando-mario/sobre.jpg`}
                bgImage2={`https://marianalero.github.io/invites-images/boda-fernando-mario/sobre.jpg`}
                brideName="" 
                symbolr={""} 
                groomName={""} 
                className={MAIN_TYPO}
                textColor={COLOR_PRIMARY}
                hideText={true}
                >
            </CoverSimple>

            <ImageMiddle bgSize="auto" bgImage={`https://marianalero.github.io/invites-images/boda-fernando-mario/Monogram sin fondo con fecha).png`}></ImageMiddle>
             <Qoute 
               {...qoute}>
            </Qoute>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
 <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                 <Fade direction="up" >
                         <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegría de nuestra unión</Typography>
                  </Fade>
                  </Grid>
                  <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                  <Fade direction="up" >
                    <Typography variant="h2" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Fernanda & Mario</Typography>
                </Fade>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                            <Typography  textAlign={"center"} className={`${BODY_TYPO}`}>Tenemos el honor de invitarte a celebrar el inicio de nuestro matrimonio</Typography>
                            </Fade >
                </Grid>	
            </Grid>
            <CountDown 
                            eventDate={new Date(2025,10,16)} 
                            bgImage={`${URL_IMAGES}galeria4.jpg`}
                            typoHeader={MAIN_TYPO}
                            typoCountdown={BODY_TYPO} >  
            </CountDown>

            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>

            <ImageMiddle bgImage={`${URL_IMAGES}galeria6.jpg`} bgSize="contain"></ImageMiddle>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <RSVPExcel textColor="white" bgImage={`${URL_IMAGES}galeria9.jpg`} qrActive={false} mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} bgColor={""} ></RSVPExcel>

             <GiftList {...giftListData} ></GiftList>
              <ImageMiddle bgImage={`${URL_IMAGES}galeria8.jpg`} bgSize="contain"></ImageMiddle>
             <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={"https://marianalero.github.io/Invitacion/images/Icons/adornos.svg"} width={"250px"} />
            </Fade>
            <WithoutKids title="Mamá y papá merecen un día libre, por lo que el evento será únicamente para adultos." subtitle2="NO NIÑOS"
            
            />
            <HashtagSection
                  imageSrc={"https://marianalero.github.io/Invitacion/images/instagram.png"}
                  bgColor="#ffffff" 
                  hashtags={["#FerYMarioLoveStory","#TeamRamosSalazar"]}     bodyTypo={BODY_TYPO}           />
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
           
            <DialogContent >

               <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="body1" sx={{fontSize:"25px"}} >Bienvenidos</Typography>
               </Box>
                <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                 <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"}  color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>
         </div>
      )

      
    
}
export default WeddingFerMario
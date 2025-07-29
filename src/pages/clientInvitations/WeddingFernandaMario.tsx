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
import {Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
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
import { ConfirmExcel } from "../../services/guestApiClient";
import CloseIcon from '@mui/icons-material/Close';
const WeddingFerMario = () => {
        const [searchParams] = useSearchParams();
    const invitedGuests: number = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? 1 : num;
    }, [searchParams]);
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
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
    const COLOR_PRIMARY = "#146870";
    const MAIN_TYPO = "southland";
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
                fontSize:"55px"
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
                fontSize:"55px"
            },
    ];
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
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas sumar a nuestra luna de miel:",
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
        type:3,
        image: `${URL_IMAGES}dresscode.png`,
        title:"Etiqueta",
        omitColorsLabel:"Omitir colores de la novia",
        omitColors:[
            "#165668",
            "#104046",
            "#034948",
            "#005D5C"
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
      const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
           //https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/viewform?usp=pp_url&entry.516140191=mar&entry.827025270=6621&entry.1599079301=yes&entry.465259973=5

           const params = new URLSearchParams({
            'entry.516140191': name,
            'entry.827025270': phoneNumber,
            'entry.1599079301': confirmText,
            'entry.465259973': totalConfirmed.toString(),
            submit: 'Submit',
            });
            const excelURL = "https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/formResponse"
            const url = `${excelURL}?${params.toString()}`;
            const response = await ConfirmExcel(url);
            if(response){
                setOpenConfirm(true);
            }
      }
      return (
         <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
             <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <CoverSimple 
                weddingDate=""
                bgImage={`https://marianalero.github.io/invites-images/boda-fernando-mario/sobre.jpg`}
                bgImage2={`https://marianalero.github.io/invites-images/boda-fernando-mario/sobrehor.jpg`}
                brideName="" 
                symbolr={""} 
                groomName={""} 
                className={MAIN_TYPO}
                textColor={COLOR_PRIMARY}
                hideText={true}
                >
            </CoverSimple>

            <ImageMiddle bgImage={`https://marianalero.github.io/invites-images/boda-fernando-mario/galeria11.jpg`}></ImageMiddle>
             <Qoute 
               {...qoute}>
            </Qoute>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
 <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" >
                         <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con la bendición de Dios, el amor de nuestros padres y el cariño de nuestros padrinos</Typography>
                  </Fade>
                  </Grid>
                  <Grid size={{xs:5,sm:5,md:5,lg:5}} >
                  <Fade direction="up" >
                    <Typography variant="h2" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Fernanda <br></br> Salazar</Typography>
                </Fade>
                </Grid>
                <Grid size={{xs:2,sm:2,md:2,lg:2}} alignItems={"center"} display="flex" justifyContent="center">
                  <Fade direction="up" >
                    <Typography variant="h2" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}> & </Typography>
                </Fade>
                </Grid>
                <Grid size={{xs:5,sm:5,md:5,lg:5}} >
                  <Fade direction="up" >
                    <Typography variant="h2" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Mario<br></br>Ramos</Typography>
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
                            typoCountdown={BODY_TYPO}
                            format="dddd DD MMMM"
                            fontSize="65px"
                            >  
            </CountDown>

            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>

            <ImageMiddle bgImage={`${URL_IMAGES}galeria9.jpg`}></ImageMiddle>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <RSVPExcel textColor="white" bgImage={`${URL_IMAGES}galeria6.jpg`} qrActive={false} mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} bgColor={""} 
             confirmed={handleConfirm}
            >

            </RSVPExcel>

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
        <Dialog
                    open={openConfirm}
                    onClose={() => {
                        setOpenConfirm(false)
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                   
                    <DialogContent >
                        <Box display={"flex"} justifyContent={"end"}>
                            <IconButton aria-label="delete" onClick={() => {
                                setOpenConfirm(false)
                            }}>
                                <CloseIcon sx={{color:"lightgray"}} />
                            </IconButton>
                         
                       </Box>
                       <Box display={"flex"} justifyContent={"center"}>
                        <Typography variant="h3" className={MAIN_TYPO}>Confirmación enviada</Typography>
                       </Box>
                    </DialogContent>        
                </Dialog>
         </div>
      )

      
    
}
export default WeddingFerMario
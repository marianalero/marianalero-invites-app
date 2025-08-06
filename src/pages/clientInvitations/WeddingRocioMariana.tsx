import { useEffect, useMemo,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";

import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
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
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions, IconButton } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import CloseIcon from '@mui/icons-material/Close';
const WeddingRocioMariana  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
        // const musicRef = useRef<MusicFabPlayerHandle>(null);
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
            // musicRef.current?.play()
         };
    
        useEffect(() => {
           handleClickOpen()
        }, []);

          const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
            console.log(name,confirmText,phoneNumber,totalConfirmed)
           //https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/viewform?usp=pp_url&entry.516140191=mar&entry.827025270=6621&entry.1599079301=yes&entry.465259973=5

        //    const params = new URLSearchParams({
        //     'entry.516140191': name,
        //     'entry.827025270': phoneNumber,
        //     'entry.1599079301': confirmText,
        //     'entry.465259973': totalConfirmed.toString(),
        //     submit: 'Submit',
        //     });
        //     const excelURL = "https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/formResponse"
        //     const url = `${excelURL}?${params.toString()}`;
        //     const response = await ConfirmExcel(url);
        //     if(response){
        //         setOpenConfirm(true);
        //     }
      }
    useEffect(() => {
        document.title = "Boda Rocio & Mariana";
    }, []);
    const COLOR_PRIMARY = "#E07D44";
    const COLOR_SECONDARY = "#935D37";
    const COLOR_TREE = "#647A54"
    const MAIN_TYPO = "pinyon-script-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const COLOR_BG ="rgb(254,243,223,.6)";
    const URL_IMAGES = `${URL_REPO}boda-mariana-rocio/`;
    const URL_SONG = `${URL_REPO}canciones/NoHayNadieMas-Sebastian.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Civil y Recepción ",
                date: new Date(2025, 9, 31, 20, 30, 0),
                locationName: "Jardín Mayorca",
                address: "Blvd. Musaro 1132, Cerro, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                image:  `${URL_IMAGES}local.jpeg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/PahfdMoWpAzh73Xk6",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_PRIMARY
            },
    ];
    
    const giftListData: GiftListProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_SECONDARY, 
        bgColor: COLOR_BG, 
        showEnvelope:true,
        envelopePhrase:"Si deseas contribuir con un regalo, súmale kilómetros a Nuestra LUNA DE MIEL a través de una trasferencia",
        bankIconEnd: `${URL_IMAGES}/iconos/6.svg`,
        bankDetails: [
            {
                bank: "Banamex  ",
                name: "",
                color: "white",
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_PRIMARY,
                numbers: [
                    {
                        numberType: "Cuenta",
                        number: "002760702089595208"
                    }
                ]
            }
        ]
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_TREE,
        type:2,
        title:"Etiqueta rigurosa",
        omitColors :["red","white"],
        omitColorsLabel:"Colores no permitidos o similiares."
    }
    //  const withOutKids:WithoutKidsProps = {
    //     bodyTypo:BODY_TYPO,
    // }
    const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
        `${URL_IMAGES}galeria3.jpg`,
        `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}galeria5.jpg`,
        `${URL_IMAGES}portada.jpg`,
    ];
    const qoute:QouteProps ={
            qoute: "Tú,mi amor,fuiste,eres y siempre serás mi mayor SERENDIPIA",
            bodyTypo: BODY_TYPO,
            addormentStart:`${URL_IMAGES}/iconos/adornos.svg`
    }

    const timelineData: CustomizedTimelineProps = {
            mainTypo: MAIN_TYPO,
            bodyTypo: BODY_TYPO,
            colorPrimary: COLOR_SECONDARY,
            colorTitle: COLOR_SECONDARY,
            colorBody: COLOR_SECONDARY, 
            fontSize:"50px",
            bgColor: "rgb(215,174,84,.05)", 
            events: [
                {
                    eventName: "Ceremonia Civil",
                    date: new Date(2025, 10, 16, 20, 30, 0),
                    icon: `${URL_IMAGES}iconos/1.svg`,
                },
                {
                    eventName: "Entrada novias",
                    date:new Date(2025, 10, 16, 21, 0, 0),
                    icon: `${URL_IMAGES}iconos/2.svg`,
                },
                {
                    eventName: "Vals",
                    date: new Date(2025, 10, 16, 22, 0, 0),
                   icon: `${URL_IMAGES}iconos/3.svg`,
                },
                {
                    eventName: "Cena",
                    date: new Date(2025, 10, 16, 22, 30, 0),
                    icon: `${URL_IMAGES}iconos/4.svg`,
                },
                {
                    eventName: "Para terminar",
                    date: new Date(2025, 10, 16, 2, 0, 0),
                    icon: `${URL_IMAGES}iconos/5.svg`,
                },
            ],
        };
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
               <div className="overlay" style={{backgroundImage:`url('${URL_IMAGES}galeria6.jpg')`,backgroundPositionX: "50%",    height: "80vh",backgroundSize:"cover",boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)" }} >
                <div style={{display:"flex",justifyContent:"center",paddingTop:"10vh"}} >
                    <h6 className="holder pt-serif-caption-regular to-upper" style={{color:"white"}}><span>Nuestra boda</span></h6>
                </div>
                <div style={{marginTop:"15vh"}}>
                    <Typography  textAlign={"center"} color='white' typography={"h2"} className={`${MAIN_TYPO}`}>Rocio</Typography>
                    <Typography  textAlign={"center"} color='white' typography={"h4"} className={`great-vibes-regular`}>&</Typography>
                    <Typography  textAlign={"center"} color='white' typography={"h2"} className={`${MAIN_TYPO}`}>Mariana</Typography>

                </div>
                  
               </div>
            {/* <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_PRIMARY}/> */}
            {/* <Cover 
                weddingDate="31.10.25"
                bgImage={`${URL_IMAGES}galeria6.jpg`}
                brideName="Rocio" 
                symbolr={"y"} 
                groomName={"Mariana"} 
                className={MAIN_TYPO}
                bgSize="cover"
                bgPosition="90%"
                margin="120px"
                ourWeddingStart={true}
                >
            </Cover> */}
             <Grid  marginTop={4}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Typography
                    align="center"
                        variant="h3"
                        className={MAIN_TYPO}
                        sx={{color:COLOR_PRIMARY}}
                        >
                        Nuestra canción
                    </Typography>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" justifyContent="center" >
                       <audio id="audio" controls autoPlay playsInline>
                            <source src={URL_SONG} type="audio/mpeg" />
                        
                        </audio>
                </Grid>
            </Grid>
             <Qoute 
               {...qoute}>
            </Qoute>
           
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio.jpg`}></ImageMiddle>
            <Grid sx={{backgroundColor:"rgb(215,174,84,.05)"}}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Introduction
                brideFather="Samuel Valenzuela M. (&#8224;)"
                brideMother="Regina Ibarra Arellanes"
                groomFather="Mario Escobar Velázquez "
                groomMother="Rosa Armida Silva R."
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_SECONDARY}
                firstQoute="Con la Bendición de Dios y el amor de nuestros padres."
                secondQoute="⁠uniremos nuestras vidas en matrimonio "
                thirdQoute="Tenemos el gusto de invitarlos a nuestra celebración"
                amperson="y"
                
                
            >
            </Introduction>
                </Grid>
            </Grid>
            
            <CountDown 
                eventDate={new Date(2025,9,31)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO}
                fontSize="40px" >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio2.jpg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            
            <RSVPExcel textColor="white" bgImage={`${URL_IMAGES}confirmacion.jpg`} qrActive={false} mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} bgColor={""} 
             confirmed={handleConfirm}
            ></RSVPExcel>
            <DressCode {...dresscode}></DressCode>
            <Adornment image={`${URL_IMAGES}/iconos/adornos.svg`} width={"250px"} />

            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor={COLOR_BG} color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"}>
                             <Typography variant="h2" className={MAIN_TYPO} sx={{color:"#AD5A4C"}}>Bienvenidos</Typography>
                            </Box>
                             <Box display={"flex"} justifyContent={"center"}>
                            <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"} color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
                            </Box>
                             
                            
                        
                         </DialogContent>
                         <DialogActions>
                         
                        
                         </DialogActions>
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
export default WeddingRocioMariana;
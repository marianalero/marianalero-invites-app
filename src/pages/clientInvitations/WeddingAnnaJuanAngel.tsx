import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { GiftListProps } from "../../models/component/giftList";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import EventCardImage from "../../components/EventCard/EventCardImage";
import GiftList2 from "../../components/Gifts/GiftList2";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";


// 🎨 FONDOS
const BG_MAIN = "#FCFBF8";      // Cream - papel marfil
const BG_SECTION = "#F3E2D1";   // Buttermilk - beige cálido
const BG_ACCENT = "#D9A17C";    // Biscotti - acento terracota suave

// 🖋 TEXTOS
const TEXT_PRIMARY = "#8A5A3C"; // Cinnamon suave / café elegante
const TEXT_DARK = "#5F3926";    // Café profundo para contraste

// 🎯 BOTONES
const BUTTON_PRIMARY = "#B66A35"; // Cinnamon más marcado


// ✨ DETALLES

const CHMAPAGNE ="#C8A66A"

// ✨ Títulos
const TITLE_COLOR = "#9B6543";

// 🐎 ESTILO

const MAIN_TYPO = "tangerine-regular";
const SECONDARY_TYPO = "cormorant-garamond-400";
const BODY_TYPO = "manrope-400";
const URL_IMAGES = `${URL_REPO}boda/boda-ana-juan-angel/`;

const COUNTDOWN_DATE = new Date(2026, 10, 28);

const eventCards: EventCardProps[] = [
    {
        eventName: "Ceremonia Civil y Recepción",
        date: new Date(2026, 10, 28, 21, 0, 0),
        locationName: "Jardín Casa Encantada",
        address: "Avenida San Rafael German, CP 83300, El Saucito",
        size: 12,
        color: CHMAPAGNE,
        mainTypo: SECONDARY_TYPO,
        bodyTypo: BODY_TYPO,
        href: "https://maps.app.goo.gl/4T9rcyQJTLfc7rSC8",
        colorButton: BUTTON_PRIMARY,
        colorIcon: BUTTON_PRIMARY,
        fontSize: "3rem",
        bgColor: BG_MAIN,
        
        image: `${URL_IMAGES}jardin.jpg`,
    },
    
];

const giftListData: GiftListProps = {
    title: "Sugerencias de regalos",
    titleColor : TITLE_COLOR,
    
    fontSize: "1rem",
    mainTypo: MAIN_TYPO,
    bodyTypo: BODY_TYPO,
    textColor: "#020202",
    bgColor: BG_SECTION,
    showEnvelope: true,
    envelopeMainTypo: MAIN_TYPO,
    envelopeFontSize: "3rem",
    envelopePhrase: "Tendremos un buzon de sobres el dia del evento, por si deseas hacernos un regalo en efectivo.",
    secondPhrase: "O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
    envelopeTitleColor: TITLE_COLOR,
    bankIconStart: `${URL_IMAGES}sobre.svg`,
    bankDetails: [
        {
            numbers: [
                {
                    numberType: "PENDIENTE",
                    number: "PENDIENTE",
                }
            ],
            bank: "pendiente",
            name: "PENDIENTE",
            textColor: CHMAPAGNE,
            bodyTypo: BODY_TYPO,
            bgColor: BG_MAIN,
            outlineColor: true,
            mainTypo: MAIN_TYPO
        },
    ],
};

const dresscode:DressCodeProps = {
        fontSize:"35px",
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
  
    
    }


const WeddingAnnaJuanAngel  = () => { 
     const [searchParams] = useSearchParams();
const isSmallScreen = useMediaQuery('(max-width:600px)');
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);

    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log(name,phoneNumber,confirmText,totalConfirmed)
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526629366579?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20de%20Anna y Juan Angel para ${totalConfirmed} personas. Mi nombre es: ${name}`, '_blank');

        }else{
            window.open(`https://wa.me/+526629366579?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20de%20Anna y Juan Angel.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
    }

    return (
        <div
            style={{
                backgroundColor: BG_MAIN,
                maxWidth: "100%",
                overflowY: "auto",
            }}
        >
            <div style={{
                backgroundImage: `URL(${URL_REPO}demos/marfil-ver.png)`,
                backgroundSize:"cover",
                height:"70vh",
                position: "relative",
               
            
            }}>
                <Box 
                    component="img"
                    src={`${URL_IMAGES}flores/4.png`}
                    alt="Imagen 2"
                    sx={{
                        position: "absolute",
                        top: isSmallScreen ? "-2%" : "-10%",
                        left: isSmallScreen ? "-15%" : "0%",
                        width: isSmallScreen ? "50vw" : "30vh",
                        height: "auto",
                        zIndex: 1,
                        transform:"rotate(150deg)"
                    }}
                />
                <Box 
                    component="img"
                    src={`${URL_IMAGES}flores/7.png`}
                    alt="Imagen 2"
                    sx={{
                        position: "absolute",
                        bottom: isSmallScreen ? "2%" : "-10%",
                        right: isSmallScreen ? "-15%" : "0%",
                        width: isSmallScreen ? "50vw" : "30vh",
                        height: "auto",
                        zIndex: 1,
                    }}
                />
                <Box p={4}
                sx={{
                    position:"absolute",
                    top:isSmallScreen ? "20%" : "25%",
                    left:isSmallScreen ? "20%": "40%",
                }}
                > 
                    <Fade direction="up" triggerOnce={true}>
            
                    <Typography  paddingX={1} fontSize={"1.5rem"} textAlign={"center"} sx={{color:TITLE_COLOR}} className={SECONDARY_TYPO} >Nuestra boda</Typography>
           
                
                    <Typography paddingX={1} textAlign={"center"} sx={{color:TITLE_COLOR}} typography={"h2"} className={MAIN_TYPO}>
                        Anna
                    </Typography>
                    <Typography   textAlign={"center"} sx={{color:TITLE_COLOR}}typography={"h2"} className={MAIN_TYPO} >

                    &

                    </Typography>
                    <Typography sx={{color:TITLE_COLOR}} paddingX={1} textAlign={"center"} color='white' typography={"h2"} className={MAIN_TYPO}>
                    Juan Angel
                    </Typography>
                    
                    <Typography fontSize={"1.5rem"} marginTop={2} sx={{color:TITLE_COLOR}} textAlign={"center"} typography={"h6"} className={SECONDARY_TYPO}>28 Noviembre 2026</Typography>
                    </Fade>
                </Box>
            </div>

             <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6}> 
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                        <Fade direction="up" triggerOnce={true}>
                            <Box
                                component="img"
                                src={`${URL_IMAGES}flores/5.png`}
                                sx={{
                                
                                height: 120,
                                
                                }}
                            />
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} px={6}>
                        <Fade direction="up" triggerOnce={true}>
                                <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >
                                            "Dios nos ha concedido el privilegio de conocernos, y con la bendición de nuestras familias hoy queremos compartir con ustedes la alegría de nuestra unión."
                                </Typography>
                         </Fade>		
                        </Grid>	
                </Grid>
             <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} paddingBottom={6} bgcolor={BG_ACCENT}> 
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                        <Fade direction="up" triggerOnce={true}>
                            <Box
                                component="img"
                                src={`${URL_IMAGES}flores/6.png`}
                                sx={{
                                
                                height: 90,
                                
                                }}
                            />
                        </Fade>
                    </Grid>
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Deseamos compartir con ustedes la alegria de nuestra union, con la bendicion nuestros padres:</Typography>
                            </Fade>
                            </Grid>
                           <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:TEXT_DARK, fontSize: "2rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO}> María del Carmen Moras De Córdova</Typography>
                                <Typography sx={{color:TEXT_DARK, fontSize: "2rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Juan Miguel Córdova Limón +</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Box 
                                    component="img" 
                                    src={`${URL_IMAGES}flores/6.png`} 
                                    alt="Description" 
                                    sx={{ 
                                        height: { xs: 90, md: 80 }, 

                                }}
                                    />
                                    
                            
                                </Grid>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:TEXT_DARK, fontSize: "2rem"}} variant="h4" textAlign={"center"} className={SECONDARY_TYPO} >Guadalupe Alfonsina Salcido De Córdova</Typography>
                            <Typography sx={{color:TEXT_DARK, fontSize: "2rem"}}  variant="h4" textAlign={"center"} className={SECONDARY_TYPO}>Alejandro Córdova Salcido
</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                    <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Queremos invitarles a celebrar con nosotros este momento tan especial</Typography>
                            </Fade>
                        </Grid>
                </Grid>
                <Box sx={{ backgroundColor: BG_SECTION, padding:"50px 5px", position:"relative",height:"50vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <div  style={{
                        position:"absolute",
                        top: isSmallScreen ? "18%" :"10%",
                        left: isSmallScreen ?"10%" : "5%",
                        transform:"translate(-50%, -50%)"}}
                        >
                                <Fade direction="right" triggerOnce={true} >
                                    <Box component="img" src={`${URL_IMAGES}flores/8.png`} alt="" style={{width: "180px"}}  />
                                </Fade>
                            
                            </div>   
           

                    <CountDownSimple 
                        eventDate={COUNTDOWN_DATE}
                    format="dddd DD MMMM"
                        typoHeader={`${SECONDARY_TYPO}`}
                        typoCountdown={BODY_TYPO} 
                        primaryColor={CHMAPAGNE} 
                        secondarColor={TEXT_PRIMARY}
                        circleBgColor="white"
                        bgColor="transparent"
                        
                        > 
                        </CountDownSimple>
                    <div  style={{position:"absolute",top:"90%",left:"95%",transform:"translate(-50%, -50%)"}}>
                            <Fade direction="right" triggerOnce={true} >
                            <img src={`${URL_IMAGES}flores/2.png`} alt="" style={{width: "300px"}}  />
                            </Fade>
                     
                     </div>   
           
            </Box>
            <Box bgcolor={BG_ACCENT} p={4}>
                {eventCards
                            .map((item,index) => (          
                               <EventCardImage key={index} {...item}></EventCardImage>
                            ))
                        }
            </Box>
           <GiftList2 {...giftListData} ></GiftList2>
            <div style={{
                backgroundImage: `URL(${URL_REPO}demos/marfil-ver.png)`,
                backgroundSize:"cover",
                height:"auto",
                position: "relative",
               
            
            }}>
                <Box 
                    component="img"
                    src={`${URL_IMAGES}flores/8.png`}
                    alt="Imagen 2"
                    sx={{
                        position: "absolute",
                        bottom: isSmallScreen ? "-5%" : "10%",
                        left: isSmallScreen ? "-15%" : "-5%",
                        width: "auto",
                        height:  isSmallScreen ? "45vw" : "50vh",
                        zIndex: 0,
                        
                    }}
                />
                <Box 
                    component="img"
                    src={`${URL_IMAGES}flores/4.png`}
                    alt="Imagen 2"
                    sx={{
                        position: "absolute",
                        bottom: isSmallScreen ? "35%" : "25%",
                        right: isSmallScreen ? "-10%" : "0%",
                        width: "auto",
                        height:  isSmallScreen ? "50vw" : "50vh",
                        zIndex: 0,
                        transform:"rotate(300deg)"
                        
                    }}
                />
           <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
            //   dateLine={new Date(2025, 10, 8)}
              color={TEXT_PRIMARY}
              colorButton={BUTTON_PRIMARY}
              invitationId={0}
              bgColor= {"transpaerent"}
              confirmed={handleConfirm}
              fontSize={"45px"}
              hidePhoneNumberInput
            />
            
            <Box bgcolor={BG_SECTION} padding={4}>
                <Box bgcolor={BG_MAIN} borderRadius={2}
                    >
                        <DressCode {...dresscode}></DressCode>
                    </Box>
                     
            </Box>
              </div>
            <div style={{height:100}}></div>
        </div>
    )
}

export default WeddingAnnaJuanAngel;
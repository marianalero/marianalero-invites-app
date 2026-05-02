
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, Dialog, DialogContent,  Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import Adornment from "../../components/Adornment/Adornment";
import RSVPForm from "../../components/RSVP/RSVPForm";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";


const XVRegina  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const INVITATION_ID = 0;
        const [open, setOpen] = useState(false);

        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/NoCrezcasMasPista-Tercer Cielo.mp3`;
       
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
    

  
    // 🎨 BACKGROUNDS
    const BG_MAIN = "#F5F3EF";        // Fondo principal (blanco cálido)
    const BG_SECTION = "#A9C1BA";     // Secciones suaves (verde claro)
    const BG_ACCENT = "#8FA39C";      // Secciones especiales (nude)

    // 🖋 TEXTOS
    const TEXT_PRIMARY = "#4F6B64";   // Texto principal
    const TEXT_SECONDARY = "#6F8F87"; // Texto secundario
    // const TEXT_LIGHT = "#F5F3EF";     // Texto sobre fondos oscuros

    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#4F6B64"; 
    // const BUTTON_HOVER = "#6F8F87";
    // const BUTTON_TEXT = "#F5F3EF";

    // ✨ DETALLES
    // const BORDER_COLOR = "#8FA39C";   // Bordes / inputs
    // const DECORATION = "#D9D9D6";    // Líneas, iconos sutiles
    // const SHADOW_COLOR = "rgba(79, 107, 100, 0.15)";
    const MAIN_TYPO = "parisienne-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv/xv-regina/`;

    // const galleryPhotos = [
    //    `${URL_IMAGES}galeria1.jpeg`,
    //    `${URL_IMAGES}galeria2.jpeg`,
    //     `${URL_IMAGES}galeria3.jpeg`,
    // ]
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 3, 11, 18, 0, 0),
                locationName: "Parroquia Santa Eduwiges",
                address: "C. Israel González S/N, Modelo, 83190 Hermosillo, Son.",
                size: 6,
                color: TEXT_PRIMARY,
                icon: `${URL_IMAGES}iglesia.png`,
                iconSize:"180px",
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/zzzeXucMCxJ7MUAp7",
                fontSize:"45px",
                colorButton: BUTTON_PRIMARY ,
                bgColor: BG_MAIN
               
         
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 3, 11, 20, 0, 0),
               
                locationName: "La Cascada Eventos",
                address: "Blvd. Jesús García Morales 335, San Isidro, Hermosillo, Son.",
                size: 6,
                color: TEXT_PRIMARY ,
                icon:`${URL_IMAGES}recepcion.png`,
                iconSize:"180px",
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/YbuLDso9EFq8zJMo8",
                colorButton: BUTTON_PRIMARY,
                bgColor: BG_MAIN
                
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: TEXT_PRIMARY,
        colorTitle: TEXT_PRIMARY,
        colorBody: TEXT_PRIMARY, 
        bgColor: BG_SECTION, 
        fontSize:"38px",
        events: [
            // {
            //     eventName: "Misa",
            //     date: new Date(2026, 0, 31, 17, 0, 0),
            //     icon:`${URL_IMAGES}iconos/15.svg`,
            // },
            {
                eventName: "Recepción",
                date: new Date(2026, 3, 11, 20, 0, 0),
                icon:`${URL_IMAGES}iconos/16.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2026,  3, 11 ,21,0,0),
                icon:`${URL_IMAGES}iconos/22.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2026,  3, 11 ,21,30,0),
                icon:`${URL_IMAGES}iconos/23.svg`,
            },
      
            {
                eventName: "Fin del evento",
                date: new Date(2026,  3, 12,1,0,0),
                icon:`${URL_IMAGES}iconos/25.svg`,
            },
        ],
    };
    const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: TEXT_PRIMARY, 
        bgColor: BG_ACCENT , 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/26.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal !Gracias!",
        // secondPhrase:"O bien puedes realizar transferencia o depósito a la siguiente cuenta:",
        // bankDetails: [
        //     {
        //         bank: "BBVA",
        //         name: "María Fernanda Ochoa Hernández",
        //         numbers : [
        //             {
        //                 numberType: "Tarjeta",
        //                 number: "4152313942041596"

        //             },
        //         ],
        //         color: "white",
        //         bodyTypo: BODY_TYPO,
        //         bgColor: COLOR_PRIMARY,
        //     },
        // ],
              
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
        fontSize:"2rem",
        omitColorsLabel:"Color verde reservado para la quinceañera."
    }
   
     const qoute:QouteProps ={
            bodyTypo: MAIN_TYPO,
            bgColor:BG_ACCENT ,
            fontsize:"1.5rem",
            lineheight:"1.5rem",
            addormentStart:``,
            addormentEnd:`${URL_IMAGES}adornos2.png`,
            addormentSize:"250px",
            qoute : "Al caer la noche en el cielo millones de estrellas podrás contar… cada una de ellas era un deseo que en mi corazón voy a guardar… Dicen que la vida es mas bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo la noche de mis 15 años.",
        }

    
    return (
        <div style={{backgroundColor:BG_MAIN ,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={BUTTON_PRIMARY }/>
           <div style={{backgroundImage: `url("${URL_IMAGES}portada.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>
           <Grid container justifyContent="center" bgcolor={"rgb(169, 193, 186,.5)"} height={"80vh"} >
            <Grid size={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <div style={{ position: "relative", width: "100%", height: "100%"}}>
                <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)", width:"100%"}}>
                          <Fade direction="left" triggerOnce={true} >
                      
                      <Typography variant="h1" className={`${BODY_TYPO}`} translate="no"  align="center"
                            sx={{  fontSize: "1.5rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
                        >
                        Mis XV años
                        </Typography>
                        <Typography variant="h1" className={`${MAIN_TYPO}`} translate="no"  align="center"
                            sx={{  fontSize: "3rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
                        >
                        Regina Favela Esquer
                        </Typography>
                        <Typography variant="h1" className={`${BODY_TYPO}`} translate="no"  align="center"
                            sx={{  fontSize: "1.5rem",lineHeight:2 , color: BUTTON_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
                        >
                        20.06.2026
                        </Typography>
                
                       

                     </Fade>
                     </div>
                 <div  style={{position:"absolute",top:"10%",left:"20%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}4.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
                     <div  style={{position:"absolute",top:"90%",left:"20%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}4.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
                     <div  style={{position:"absolute",top:"10%",left:"80%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}4.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
                     <div  style={{position:"absolute",top:"90%",left:"80%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}4.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
              </div>
                
            </Grid>
            </Grid>
            </div>
           
           <Qoute 
               {...qoute}>
            </Qoute>
           
              {/* <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle> */}
     <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            mt: 6,
            mb: 6,
            borderColor: BUTTON_PRIMARY,
            borderWidth: "2px",
            borderStyle: "solid",
            px: 3,
            py: 3,
             backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco con opacidad
             backdropFilter: "blur(5px)", // Efecto de desenfoque para mejorar la legibilidad
            
          }}
        >
          <Grid container spacing={2} justifyContent="center" mb={3}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography  className={`${BODY_TYPO}`} >
                Deseamos compartir con ustedes la alegría de celebrar un momento muy especial
              </Typography>
              <Grid container justifyContent="center" sx={{ m: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                <Adornment image={`${URL_IMAGES}adornos2.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>
              </Fade>
            </Grid>


            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2rem" ,lineHeight:2, color: TEXT_PRIMARY }}
              >
                  Marco Antonio Favela Espinoza
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                sx={{  fontSize: "2rem",lineHeight:2 , color: TEXT_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
              >
               Sara Beatriz Esquer Bay
              </Typography>
              </Fade>
            </Grid>
          </Grid>
           
          <Grid container justifyContent="center">
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Fade direction="up" >
              <Typography
                className={BODY_TYPO}
                sx={{ mt: 2 }}
              >
                Tenemos el honor de invitarlos a la celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
        
          </Grid>
           <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
        </Box>
      </Grid>
    </Grid>
    </div>
          <div style={{ backgroundColor: BG_ACCENT, padding:"50px 20px", position:"relative" }}>
            <div  style={{position:"absolute",top:"20%",left:"15%",transform:"translate(-50%, -50%) scale(-1)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}5.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>   
            <Box sx={
              {
                backgroundColor: BG_MAIN
                
              }
            } >

               <CountDownSimple 
          eventDate={new Date(2026, 5, 20)}
          
          typoHeader={MAIN_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
          bgColor="transparent"
          circleBgColor={TEXT_PRIMARY}
          circleTextColor="white"
           primaryColor={TEXT_PRIMARY}
            secondarColor={TEXT_PRIMARY}              
                >  
            </CountDownSimple>
            </Box>
           
            </div>
            <Grid container spacing={2} justifyContent="center" paddingX={"20px"} paddingY={"50px"} bgcolor={BG_SECTION}>
      {/* Texto inicial */}
      <Grid size={12} textAlign="center" sx={{ width: "100%" }}>
         <Fade direction="up" >
        <Typography
          className={BODY_TYPO}
          sx={{ fontSize: "1rem" }}
        >
          Por qué me han acompañado en mi camino y deseo que sigan siendo parte
          de mi historia.
        </Typography>
        </Fade>
      </Grid>
            <Grid size={12}>
         
        <Box
          textAlign="center"
          sx={{ width: "100%",  }}
        >
          <Box>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "2.5rem", color: TEXT_SECONDARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

          
      
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2,}}>

              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="h5" className={MAIN_TYPO}>
                        Ana María Vélez Navarro
                      </Typography>
                    </Fade>
              </Grid>
               <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="h5" className={MAIN_TYPO}>
                        Eleazar Navarro Jiménez
                      </Typography>
                    </Fade>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.png`} width={"250px"} />
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
            </Grid>
            </Grid>
           <div style={{ backgroundImage: `url(${URL_IMAGES}fondo.png)`, padding:"50px 20px" }}>
            <Grid container spacing={2} padding={2} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <Box
              sx={{
                position: "relative",
                backgroundColor: BG_MAIN,
                py: 10,
                overflow: "visible", // 👈 clave para que se salgan
              }}
            >
              {/* 🌸 Flor esquina superior izquierda */}
              <Box
                component="img"
                src={`${URL_IMAGES}4.png`}
                sx={{
                  position: "absolute",
                  top: "-60px",
                  left: "-60px",
                  width: { xs: "30vh", md: "200px" },
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* 🌸 Flor esquina inferior derecha */}
              <Box
                component="img"
                src={`${URL_IMAGES}4.png`}
                sx={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-60px",
                  width: { xs: "30vh", md: "200px" },
                  transform: "scaleX(-1)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* 📦 Contenido */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  px: 2,
                }}
              >
                <GiftList {...giftListData} />
              </Box>
            </Box>
             
           
            <RSVPForm 
                dateLine={new Date(2026,4,20)}
                textColor={TEXT_SECONDARY}
                    colorButton={TEXT_SECONDARY } 
                    bgColor={BG_SECTION } 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    color={TEXT_PRIMARY }
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                    fontSize="2rem"
                   
                >
                
            </RSVPForm>
            <div style={{ backgroundImage: `url(${URL_IMAGES}fondo.png)`, padding:"50px 20px" }}>
              <Box  sx={{backgroundColor:BG_MAIN}} >
                  <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.png`} width={"250px"} />
              
                </Fade>
              </Grid>
          <WithoutKids subtitle2="no niños" ></WithoutKids>
              </Box>
          
           
            </div>
 
            <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
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
                 <CustomButton borderColor={TEXT_PRIMARY} bgColor={"#ffffff"}  color={TEXT_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>

        </div>
    )
}
export default XVRegina;



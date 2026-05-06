
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Grid from '@mui/material/Grid2';
import { Box, Card, CardContent, Dialog, DialogContent,  Typography } from "@mui/material";
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


import Gallery from "../../components/Gallery/Gallert";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Cover from "../../components/Cover/CoverImage/Cover";



const XVJoely  = () => {
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
       const URL_SONG = `${URL_REPO}canciones/TaylorSwift-Style.mp3`;
       
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
    const BG_MAIN = "#F8F5F0";      // marfil elegante
    const BG_SECTION = "#E8F5E9";   // verde claro floral
    const BG_ACCENT = "#006847";    // verde bandera (secciones fuertes)

    // 🖋 TEXTOS
    const TEXT_PRIMARY = "#004D35";   // verde oscuro (lectura principal)

    const TEXT_LIGHT = "#FFFFFF";     // texto sobre fondos oscuros

    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#006847"; // verde bandera

    // ✨ ACENTOS
    const GOLD = "#C8A75D";       // dorado principal

    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "lora to-upper";
    const URL_IMAGES = `${URL_REPO}xv/xv-joely/`;

   
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
                bgColor: BG_SECTION,
               classButtonName:"btn-gold",
         
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 3, 11, 20, 0, 0),
               
                locationName: "Salón 2 de la Unidad Social Sección 54",
                address: "Gabriela Mistral s/n Col.Periodista",
                size: 6,
                color: TEXT_PRIMARY ,
                icon:`${URL_IMAGES}recepcion.png`,
                iconSize:"180px",
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/uzQb9bVGzScQeo6YA",
                colorButton: BUTTON_PRIMARY,
                bgColor: BG_SECTION,
                classButtonName:"btn-gold",
                
                
            },
    ];
    // const timelineData: CustomizedTimelineProps = {
    //     mainTypo: MAIN_TYPO,
    //     bodyTypo: BODY_TYPO,
    //     colorPrimary: TEXT_PRIMARY,
    //     colorTitle: TEXT_PRIMARY,
    //     colorBody: TEXT_PRIMARY, 
    //     bgColor: BG_SECTION, 
    //     fontSize:"38px",
    //     events: [
    //         // {
    //         //     eventName: "Misa",
    //         //     date: new Date(2026, 0, 31, 17, 0, 0),
    //         //     icon:`${URL_IMAGES}iconos/15.svg`,
    //         // },
    //         {
    //             eventName: "Recepción",
    //             date: new Date(2026, 3, 11, 20, 0, 0),
    //             icon:`${URL_IMAGES}iconos/16.svg`,
    //         },
    //         {
    //             eventName: "Vals",
    //             date: new Date(2026,  3, 11 ,21,0,0),
    //             icon:`${URL_IMAGES}iconos/22.svg`,
    //         },
    //         {
    //             eventName: "Cena",
    //             date: new Date(2026,  3, 11 ,21,30,0),
    //             icon:`${URL_IMAGES}iconos/23.svg`,
    //         },
      
    //         {
    //             eventName: "Fin del evento",
    //             date: new Date(2026,  3, 12,1,0,0),
    //             icon:`${URL_IMAGES}iconos/25.svg`,
    //         },
    //     ],
    // };
    const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: GOLD, 
        bgColor: BG_SECTION, 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}sobre.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal !Gracias!",
        
              
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
        fontSize:"3rem",
        omitColorsLabel:"Color verde reservado para la quinceañera."
    }
   
     
      const padrinos = [
        "Rocio Morales Cruz",
        "Christopher Enríquez Ríos",
        "Lizbeth G. Long Castro",
        "José Ramón Morales Cruz",
        "Denisse Morales Cruz",
        "Ricardo Fernández Rodríguez",
        "Verónica Melendrez Rodríguez",
        "Ricardo Amavizca Álvarez",
        "Hilda Félix Serrano",
        "José Mercado Reyes",
        "Karla Aimé Félix Villegas",
        "Daniel Meranza Castillón",
        "Daniel Alejandro Meranza Castillón",
       
      ]

      const galleryImages = [
        `${URL_IMAGES}galeria1.jpeg`,
        `${URL_IMAGES}galeria2.jpeg`,
        `${URL_IMAGES}galeria3.jpeg`,
        `${URL_IMAGES}galeria4.jpeg`,
        `${URL_IMAGES}galeria5.jpeg`,
        `${URL_IMAGES}galeria6.jpeg`,
      ]
    
    return (
        <div style={{backgroundColor:BG_MAIN ,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={BUTTON_PRIMARY }/>
          <Cover 
            bgImage={`${URL_IMAGES}portada.jpeg`}
            bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="06.06.2026"
                 subtitle="Mis XV años"
                  brideName="Joely Patricia"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                fontSize="5rem"
                verticalPosition="top"
                margin="80px"

                  >
            </Cover>
           
           <Grid container justifyContent="center" padding={2} bgcolor={"white"}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} padding={4} textAlign="center">
              <Fade direction="up" >
                <Adornment image={`${URL_IMAGES}corona.png`} width={"100px"} />
              
                </Fade>
               <Fade direction="up" >
              <Typography
              align="center"
                className={MAIN_TYPO}
                sx={{ mt: 2 }}
                fontSize={"1.8rem"}
              >
                Este dia sera muy especial para mi… y no seria lo mismo sin ti.<br></br> Acompañame a celebrar mis xv años, a crear recuerdos que nunca vamos a olvidar
              </Typography>
              </Fade>
                
              </Grid>
            </Grid>

       
      
           
              <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio1.jpeg`}></ImageMiddle>

                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            mt: 6,
            mb: 6,
            
           
            px: 3,
            py: 3,
             
            
          }}
        >
          <Grid container spacing={2} justifyContent="center" mb={3}>
            <Grid container justifyContent="center">
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Fade direction="up" >
                            <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>

              </Fade>
            </Grid>
        
          </Grid>
            <Grid>
                <Fade direction="up" >
                <Adornment image={`${URL_IMAGES}adornos/9.png`} width={"250px"} />
              
                </Fade>
              </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2rem" ,lineHeight:2, color: TEXT_PRIMARY }}
              >
                  Joel Alberto Félix Serrano
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                sx={{  fontSize: "2rem",lineHeight:2 , color: TEXT_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
              >
              Ivonne Patricia Morales Cruz

              </Typography>
              </Fade>
            </Grid>
          </Grid>
           
          
           <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/7.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
        </Box>
      </Grid>
    </Grid>

          <div style={{ backgroundColor: BG_ACCENT, padding:"50px 20px", position:"relative" }}>
            <div  style={{position:"absolute",top:"20%",left:"25%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}adornos/6.png`}  style={{width: "200px"}} />
                         </Fade>
                     
                     </div>   
                     <div  style={{position:"absolute",top:"80%",left:"75%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}adornos/10.png`}  style={{width: "200px"}} />
                         </Fade>
                     
                     </div>   
           
               <CountDownSimple 
               bgImage={`${URL_IMAGES}contador.png`}
          eventDate={new Date(2026, 5, 6)}
          
          typoHeader={MAIN_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
          bgColor="transparent"
          circleBgColor={TEXT_LIGHT}
          circleTextColor={GOLD}
           primaryColor={TEXT_LIGHT}
            secondarColor={TEXT_LIGHT}              
                >  
            </CountDownSimple>
           
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
              sx={{ fontSize: "2.5rem", color: GOLD }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

          
      
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2,}}>

             {
              padrinos.map((padrino,index) => (
                 <Grid key={index} size={{ xs: 12,md:6,lg:4}}>
                    <Fade direction="up" >  
                      <Typography variant="body1" className={BODY_TYPO} sx={{color:TEXT_PRIMARY}}>
                        {padrino}
                      </Typography>
                    </Fade>
              </Grid>
              ))
            }
              
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/9.png`} width={"250px"} />
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

            
          <Grid container justifyContent="center" sx={{ mt: 4 }} bgcolor={BG_ACCENT} paddingTop={8} >
            <Grid size={{xs:12,sm:12,md:8,lg:6}} textAlign="center">
               <Fade direction="up" triggerOnce={true} >
             <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center"
              mt={4} 
              mb={4}> 
                <Box sx={{
                  width: "100%",
                  maxWidth: 400,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                }}>
                </Box>  
                <Card sx={{
                  width: "90%",
                  maxWidth: 350,
                
                  textAlign: "center",
                  boxShadow: 3,
                  position: "relative",
                  overflow: "visible",
                  mt: -6, // sube un poco la tarjeta para que se una con el sobre
                  backgroundImage: `url("${URL_IMAGES}texturaverde.jpg")`,
                  backgroundSize: "cover",
                }}> 
                  <Box component="img" src={`${URL_IMAGES}sello2.png`} alt="Sello" sx={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -40,
                          left: "50%",
                          transform: "translateX(-50%)",
                  }} />
                <CardContent sx={{padding:0, paddingTop:4}}>
                     <RSVPForm 
                dateLine={new Date(2026,4,20)}
                textColor={TEXT_PRIMARY}
                    colorButton={BUTTON_PRIMARY} 
                    bgColor={"transparent" } 

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
              
                </CardContent>
              </Card>
            </Box>
            </Fade>
            </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }} >
              <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingX={4} paddingY={4}  >
                <Fade direction="up" triggerOnce={true} >
                            <Box
              sx={{
                position: "relative",
                backgroundColor: BG_SECTION,
                py: 10,
                overflow: "visible", 
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: 1,
                // 👈 clave para que se salgan
              }}
            >
            
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
                </Fade>
              </Grid>
            </Grid>
            
            <ImageMiddle bgPosition="80%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpeg`}></ImageMiddle>
            <div style={{ backgroundImage: `url(${URL_IMAGES}fondo.png)`, padding:"50px 20px" }}>
              <Box  sx={{backgroundColor:BG_MAIN}} >
                  <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/7.png`} width={"250px"} />
              
                </Fade>
              </Grid>
          <WithoutKids subtitle2="NO NIÑOS" bodyTypo={BODY_TYPO} ></WithoutKids>
              </Box>
          
           
            </div>
            <div style={{height:"100px"}}></div>
            <Gallery photos={galleryImages}></Gallery>
 
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
export default XVJoely;



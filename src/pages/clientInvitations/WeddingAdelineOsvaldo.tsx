
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Grid from '@mui/material/Grid2';
import { Box, CircularProgress, Dialog, DialogContent, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
const WeddingAdelineOsvaldo  = () => {
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
        document.title = "Boda Adilene & Osvaldo ";
    }, []);
    
    const COLOR_PRIMARY = "#c69f58";
    const MAIN_TYPO = "tangerine-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}boda-adeline-osvaldo/`;
    const URL_SONG = `${URL_REPO}canciones/Athousandyears-ChristinaPerri-Sax.mp3`;
    const BG_COLOR ="rgba(244, 240, 215, 0.5)"
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const imageList = [
        `${URL_IMAGES}portada.png`,
        `${URL_IMAGES}contador.png`,
    ];
     useEffect(() => {
            imageList.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // si falla, igual contamos
            });
        }, []);
    
      const handleImageLoad = () => {
        loadedCountRef.current += 1;
        if (loadedCountRef.current === imageList.length) {
          setIsLoading(false); // cuando todas las imágenes han cargado
        }
      };

      const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
         if(confirmText == "Asistiré"){
            // window.open(`https://wa.me/+526621157641?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20quinceañera%20de%20Alexia para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            // window.open(`https://wa.me/+526621157641?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20quinceañera%20de%20Alexia.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
      }
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia religiosa",
                date: new Date(2026, 9, 4, 12, 30, 0),
                locationName: "Parroquia Santísima Trinidad",
                address: "Bv. Justo Sierra, Periodista, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/LFvRJkhvYa99WwSy9",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName: `btn-gold`
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 9, 4, 21, 0, 0),
                locationName: "Corsega Salón de Eventos ",
                address: "C. Revolución 40, Centro, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/6.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/LFvRJkhvYa99WwSy9",
                colorButton: COLOR_PRIMARY,
                classButtonName: `btn-gold`
               
            },
    ];
  
    const giftListData: GiftListProps = {
        envelopePhrase:"Tu presencia es nuestro mejor regalo, pero si lo deseas tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        bankIconEnd: `${URL_IMAGES}iconos/8.png`,
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope: true,
    };

  
    const sponsors:PairSponsors[] = [
            {
                sponsorOne: { name: "" },
            },
            {
                sponsorOne: { name: "" },
            },
            {
                sponsorOne: { name: "" },
            },
        ];
    if (isLoading) {
            return (
            <Box
                sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                flexDirection: "column"
                }}
            >
                <CircularProgress sx={{ color: COLOR_PRIMARY }} />
                <Box mt={2} sx={{ fontFamily: "Montserrat" }}>
                    Cargando invitación...
                </Box>
            </Box>
            );
    }
    return (
        <div style={{backgroundColor:"#ffffff",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <CoverSimple 
                  weddingDate="06.12.2025"
                  bgImage={`${URL_IMAGES}portada.png`}
                  bgImage2={`${URL_IMAGES}portada.png`}
                  brideName="Adeline"
                  symbolr={"&"}
                  groomName={"Osvaldo"}
                  className={MAIN_TYPO}
                  textColor={COLOR_PRIMARY}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={false}
                  fontSize="80px"
                  >
            </CoverSimple>
         
                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            mt: 6,
            mb: 6,
          }}
        >
          <Grid container spacing={2} justifyContent="center" mb={3}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography className={`${BODY_TYPO}`} sx={{ lineHeight:2, fontStyle:"italic!important"}} >
                Por el amor que nos une, con la presencia de Dios entre nosotros,la compañia de nuestros amados hijos:
                 <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY, textTransform:'none'}}> 
              Osvaldo y Stephanie 
              </Typography>
                
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography className={`${BODY_TYPO}`} sx={{ lineHeight:2, fontStyle:"italic!important"}} >
               y el apoyo incondicional de nuestros padres
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:5,md:5,lg:5}}>
                <Fade direction="up" >
              <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY}}> 
               Leticia Trujillo Jiménez
              </Typography>
                <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY}}> 
             Julio González Bañuelos 
              </Typography>
              </Fade>
            </Grid>
            <Grid size={{xs:12,sm:2,md:2,lg:2}}>
                <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY}}> 
                &
              </Typography>
            </Grid>
             <Grid  size={{xs:12,sm:5,md:5,lg:5}}>
                <Fade direction="up" >
              <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY}}> 
              Martína  montoya Acosta
              </Typography>
              
                <Typography variant="h5" className={`${MAIN_TYPO}`}  sx={{ fontSize: 40,lineHeight:2, color:COLOR_PRIMARY}}> 
             Fidel Medina Armenta 
              </Typography>
              </Fade>
            </Grid>
             <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Fade direction="up" >
              <Typography
                className={BODY_TYPO}
                sx={{ mt: 2 ,lineHeight:2, fontStyle:"italic!important"}}
              >
               Tenemos el honor de invitarte a celebrar el inicio de nuestro matrimonio


              </Typography>
              </Fade>
            </Grid>
        
  
          </Grid>

        
        </Box>
      </Grid>
    </Grid>
            <CountDownSimple 
                eventDate={new Date(2025, 11, 6)}
                bgImage={`url('${URL_IMAGES}horz.png')`}
                typoHeader={`${MAIN_TYPO} `}
                typoCountdown={BODY_TYPO} 
                primaryColor={"black"} 
                secondarColor={"black"}
                circleBgColor={COLOR_PRIMARY}
                circleTextColor="white"
                 >  
            </CountDownSimple>
            <WeddingSponsor bgColor={BG_COLOR} headerFontSize="60px" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} sponsors={sponsors} height={"60vh"} color={COLOR_PRIMARY} addormentEnd={`${URL_IMAGES}adornos2.svg`}></WeddingSponsor>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
        

            {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           
             <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2025, 9, 18)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={BG_COLOR}
              confirmed={handleConfirm}
              classButtonName="btn-gold"
            />
            {/* <DressCode {...dresscode}></DressCode> */}
            
           
           <WithoutKids hideTitle={true} bodyTypo={BODY_TYPO} title="" subtitle="Respetuosamente" subtitle2=" NO niños"></WithoutKids>
           <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />

            </Fade>
            <div style={{height:100}}></div>

            <FooterInvites bgColor={"#f8f8f8"} color={COLOR_PRIMARY}></FooterInvites>
              <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
           
            <DialogContent >

               <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="body1" sx={{fontSize:"25px"}}  >Bienvenidos</Typography>
               </Box>
                <Box display={"flex"} justifyContent={"center"} marginTop={2}>
                 <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"}  color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
               </Box>
                
               
           
            </DialogContent>
        </Dialog>
        </div>
    )
}
export default WeddingAdelineOsvaldo;



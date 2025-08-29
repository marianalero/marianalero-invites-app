
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import WithoutKids from "../../components/WithOutKids/WithoutKids";
const XVValeria  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const [open, setOpen] = useState(false);
        const [openConfirm, setOpenConfirm] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/Valentina-CarlaMorrison.mp3`;
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
    

    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
           //https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/viewform?usp=pp_url&entry.516140191=mar&entry.827025270=6621&entry.1599079301=yes&entry.465259973=5

          //  const params = new URLSearchParams({
          //   'entry.516140191': name,
          //   'entry.827025270': phoneNumber,
          //   'entry.1599079301': confirmText,
          //   'entry.465259973': totalConfirmed.toString(),
          //   submit: 'Submit',
          //   });
          //   const excelURL = "https://docs.google.com/forms/d/e/1FAIpQLScaQvy8raY7qipxend2dAeyJwXw0SpLqSu5eL1Te8f22vG_Zg/formResponse"
          //   const url = `${excelURL}?${params.toString()}`;
          //   const response = await ConfirmExcel(url);
          //   if(response){
          //       setOpenConfirm(true);
          //   }
      }
    const COLOR_PRIMARY = "#F5A5B5";
    const MAIN_TYPO = "alex-brush-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv-valeria-ruiz/`;
    const BG_COLOR ="rgb(253,231,233,.5)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 5, 14, 17, 0, 0),
                locationName: "Iglesia San Juan De Capistrano",
                address: "Calz. San Bernardino 52, Seminario, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/Iglesia%20Oro%20rosa.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/MmvoR1jSqPMuLgZE9",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 5, 14, 21, 0, 0),
                endDate: new Date(2026, 5, 15, 2, 0, 0),
                locationName: "Jardin Luna Clara",
                address: "Arq. Gustavo F. Aguilar Beltrán 70 El Chanate",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/corona%202.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/V7a9PDtgkhth6AVe7",
                colorButton: COLOR_PRIMARY,
               
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        events: [
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,21,0,0),
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/iconos-susan/2.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 9, 18,21,50,0),
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/iconos-susan/3.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,22,15,0),
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/iconos-susan/6.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`https://marianalero.github.io/invitacion-xv-susan/images/iconos-susan/10.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal"
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentStart:`https://marianalero.github.io/invitacion-xv-susan/images/adorno%20azul%20(1)/1.svg`,
        addormentEnd:`https://marianalero.github.io/invitacion-xv-susan/images/adorno%20azul%20(1)/2.svg`,
        qoute : "Gracias Señor por los padres que me diste, por encomendarles la bendición de darme la vida, la misión de formarme y verme crecer; la dicha de compartir mis triunfos, sueños y esperanzas. El desafío de formar mi carácter para enriquecer mi espírutu, por haberme bendecido con el privilegio de ser su hija.",
    }

    
    return (
        <div style={{backgroundColor:"#FFEAEF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <div  style={{backgroundPositionX: "50%",    height: "80vh",backgroundSize:"cover", backgroundColor: "rgb(245, 165, 181)", display:"flex", justifyContent: "center", alignItems:"center" }} >
               
               <div>
                <div style={{display:"flex",justifyContent:"center"}} >
                      <Fade direction="up" >
                    <img style={{width:"100vw"}} src={`${URL_IMAGES}Logo.png`} alt="corona" />
                    </Fade>
                </div>
                
               </div>
                
                  
               </div>
            <Qoute 
               {...qoute}>
            </Qoute>
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
              <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2}} >
                Mis Personas Favoritas
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer eso posible!</Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2 }}>
                Mis Papás
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 30 ,lineHeight:2, color:COLOR_PRIMARY}}
              >
                 Vielcka Azucena López Mendivil 
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 30,lineHeight:2 , color:COLOR_PRIMARY}}
              >
                 Miguel Ángel Ruiz Saavedra 

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
                Tenemos el honor de invitarlos a la Celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
        
          </Grid>
        </Box>
      </Grid>
    </Grid>
            <CountDownSimple 
                eventDate={new Date(2025, 8, 13)}
               
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={"black"} 
                secondarColor={"black"}
                circleBgColor="white"
                bgImage={`url('https://marianalero.github.io/invitacion-xv-susan/images/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(12).png')`} >  
            </CountDownSimple>
    <Grid container spacing={2} justifyContent="center" paddingX={2}>
      {/* Texto inicial */}
      <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6 }}>
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

      {/* Bloque principal */}
      <Grid size={12}>
         <Fade direction="up" >
        <Box
          textAlign="center"
          sx={{ width: "100%", mt: 6 }}
        >
          <Box sx={{ mt: 6, mb: 6 }}>
            {/* Título */}
            <Typography
              variant="h3" className={`${BODY_TYPO}`}
              sx={{ fontSize: "1.5rem", color: "black" }}
            >
              Mis Padrinos
            </Typography>

            {/* Imagen superior */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid>
                <img src="https://marianalero.github.io/invitacion-xv-susan/images/adorno%20azul%20(1)/1.svg" width={200} />
              </Grid>
            </Grid>

            {/* Primera fila de nombres */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{ color: COLOR_PRIMARY,  }}
                >
                  Alicia Sánchez López 
                </Typography>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY,fontFamily:MAIN_TYPO}}
                >
                Mario Armando Gastélum Rivera 
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h3" className={`${BODY_TYPO}`}
              sx={{ fontSize: "1.5rem", color: "black" }}
            >
             Hermano chambelan
            </Typography>

            {/* Segunda fila de nombres */}
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY, }}
                >
                 Hidalgo Aquiles Ruiz López 
                </Typography>
              </Grid>
              
            </Grid>

            {/* Imagen inferior */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid>
                <img src="https://marianalero.github.io/invitacion-xv-susan/images/adorno%20azul%20(1)/2.svg" width={200} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Fade>
      </Grid>
    </Grid>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
        

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

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
              dateLine={new Date(2025, 8, 7)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={"white"}
              confirmed={handleConfirm}
            />
            {/* <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo> */}
            <DressCode {...dresscode}></DressCode>
            {/* <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos/27.png`} width={"150px"} />

            </Fade> */}
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
            <div style={{height:100}}></div>

            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
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
export default XVValeria;



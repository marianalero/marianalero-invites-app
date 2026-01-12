
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";

import Grid from '@mui/material/Grid2';
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";

import WithoutKids from "../../components/WithOutKids/WithoutKids";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import RSVPForm from "../../components/RSVP/RSVPForm";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";


const XVDaliaElizabeth  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const INVITATION_ID = 13;
        const [open, setOpen] = useState(false);
     
        const musicRef = useRef<MusicFabPlayerHandle>(null);
        const COLOR_PRIMARY = "#E86975";    
        const COLOR_SECONDARY = "#f4d8d5";

        const MAIN_TYPO = "alex-brush-regular";
        const SECOND_TYPO = "the-seasons";
        const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const URL_IMAGES = `${URL_REPO}xv/xv-dalia/`;
        const URL_SONG = `${URL_REPO}canciones/UnMundoIdeal-Piano.mp3`;
        const BG_COLOR ="rgb(251,243,220,0.5)";
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
    
  
        const eventCards: EventCardProps[] = [
          {
                eventName: "Misa Religiosa",
                date: new Date(2025, 8, 19, 16, 0, 0),
                locationName: "Iglesia Jesús Médico",
                address: "Los pinos 87 Aguacaliente , sección pinos 22230 , tijuana bc",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/Iglesia%20Oro%20rosa.svg`,
                mainTypo:`${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/hWgQ5W8tymx551KWA",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName:"rose-gold-btn",
            },      
    ];

    const eventCards2: EventCardProps[] = [
            {
                eventName: "Recepcion",
                date: new Date(2025, 9, 25 , 18, 0, 0),
               
                locationName: "Aqua-Rio Salones",
                address: "Paseo de los héroes 9547. Zona urbana rio tijuana 22100, Tijuana , BC",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.png`,
                mainTypo:  `${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"55px",
                href: "https://maps.app.goo.gl/Td8e6a3Nu8qt1hGY8",
                colorButton: COLOR_PRIMARY,
                classButtonName:"rose-gold-btn",

            },
    ];



    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: "white",
        colorTitle:"white",
        colorBody: "white",
        bgColor: COLOR_SECONDARY, 
        events: [
            {
                eventName: "Misa",
                date: new Date(2025,  8, 19,16,0,0),
                icon:`${URL_IMAGES}iconos/1.png`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,18,0,0),
                icon:`${URL_IMAGES}iconos/2.png`,
            },
            {
                eventName: "Entrada Quinceañera",
                date: new Date(2025,  8, 19,19,0,0),
                icon:`${URL_IMAGES}iconos/3.png`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 8, 19,19,30,0),
                icon: `${URL_IMAGES}iconos/4.png`,
            },
            {
                eventName: "Vals , brindis , corte de  pastel ",
                date: new Date(2025, 8, 19,21,0,0),
                icon: `${URL_IMAGES}iconos/5.png`,
            }
            ,
            {
                eventName: "Fin del evento",
                date: new Date(2025, 8, 19,2,0,0),
                icon: `${URL_IMAGES}iconos/6.png`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/11.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, tendremos una caja para sobres el día del evento por si deseas hacerme un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Colores reservados para la quinceañera",
        omitColorsText:"Dorado y Champagne",
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentEnd:`${URL_IMAGES}adornos.png`,
        qoute:"La vida es mas bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo este dia tan especial  de mis XV años, ya que hay momentos que se guardan en el corazon para siempre, le doy gracias a Dios por cumplir este sueño",
    }

  const galleryPhotos = [
        `${URL_IMAGES}galeria7.jpg`,
    ];
    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_SECONDARY}/>
            <div  style={{backgroundImage:`url('${URL_IMAGES}portada.jpg')`,backgroundPositionX: "50%",    height: "80vh",backgroundSize:"cover",boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)", display: "flex", alignItems: "center" , justifyContent: "center"  }} >
              <div style={{marginTop:"15vh"}}>
               
                <div >
                    <Typography  textAlign={"center"} color='white' typography={"h2"} className={`${MAIN_TYPO}`}>Dalia Elizabeth</Typography>
                 

                </div>
                 <div style={{display:"flex",justifyContent:"center", alignItems:"center"}} >
                    <h2 className="holder pt-serif-caption-regular to-upper" style={{color:"white"}}><span>MIS XV AÑOS</span></h2>
                </div>
                <div style={{display:"flex",justifyContent:"center",paddingTop:"10vh"}} >
                    <h3 className="holder pt-serif-caption-regular to-upper" style={{color:"white"}}><span>28.02.26</span></h3>
                </div>
              </div>
                
               </div>
            <Qoute 
               {...qoute}>
            </Qoute>
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpg`} bgSize="contain"></ImageMiddle>
                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}} padding={0}>
       
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
              <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2, color: COLOR_PRIMARY}} >
                Mi Persona Favorita
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer esto posible!</Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 30,lineHeight:2,color: COLOR_PRIMARY}} >
                Mi Madre
              </Typography>
              </Fade>
            </Grid>
           
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 40 ,lineHeight:2, color: COLOR_PRIMARY}}
              >
                ⁠Daniela E. Flores
              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />
              
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
                Tenemos el honor de invitarte a la Celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
        
          </Grid>
          
        </Box>

      </Grid>
    </Grid>
            <CountDown 
                eventDate={new Date(2026, 1, 28)}
                fontSize="40px"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                bgImage={`${URL_IMAGES}contador.jpg`} >  
            </CountDown>
    <Grid container spacing={2} justifyContent="center" paddingX={2} bgcolor={BG_COLOR}>
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
          <Grid size={12}>
         
        <Box
          textAlign="center"
          sx={{ width: "100%", mt: 2 }}
        >
          <Box sx={{ mt: 2, mb: 2 }}>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "3rem", color: COLOR_PRIMARY }}
            >
              Mi Padre
            </Typography>
            </Fade>
            


            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                 
                >
                Erick Ciprian
                </Typography>
                </Fade>
              </Grid>

            </Grid>

          </Box>
        </Box>
     
      </Grid>
      {/* Bloque principal */}
      <Grid size={12}>
         
        <Box
          textAlign="center"
          sx={{ width: "100%", }}
        >
          <Box sx={{ mt: 2, mb: 2 }}>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "3rem", color: COLOR_PRIMARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>
            


            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                 
                >
                Leonardo Hurtado & Lorena Gómez de Hurtado
                </Typography>
                </Fade>
              </Grid>

            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
           
          </Box>
        </Box>
     
      </Grid>
    </Grid>
    <ImageMiddle bgImage={`${URL_IMAGES}galeria3.jpg`} bgSize="contain"></ImageMiddle>
   <div style={{backgroundImage:`url('${URL_IMAGES}fondo2.jpg')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px", paddingBottom:"70px"  }} >
          
          <Box display={"flex"} justifyContent={"center"} padding={4}>
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
          </Box>
            
             <ImageMiddle bgImage={`${URL_IMAGES}galeria5.jpg`} bgSize="contain"></ImageMiddle>

              <Box display={"flex"} justifyContent={"center"} padding={4}>
             {
                eventCards2.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            } 
              </Box>
           
          
              <ImageMiddle bgImage={`${URL_IMAGES}galeria4.jpg`} bgSize="contain"></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>
             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
   </div>
            

             <RSVPForm 
                textColor={"white"}
                    colorButton={COLOR_PRIMARY} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2026,1,12)}
                    color={"white"}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                   bgImage={`${URL_IMAGES}galeria1.jpg`}
                   classButtonName="rose-gold-btn"
                   bgPosition="75%"
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos.png`} width={"250px"} />

            </Fade>
             
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           
            <div style={{height:100}}></div>
          <Gallery photos={galleryPhotos} ></Gallery>
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
     
        </div>
    )
}
export default XVDaliaElizabeth;



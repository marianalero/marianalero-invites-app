
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";
import { ConfirmExcel } from "../../services/guestApiClient";
import RSVPForm from "../../components/RSVP/RSVPForm";

const XVRenataIsabela  = () => {
      const [searchParams] = useSearchParams();
      const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
      const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const [open, setOpen] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/AThousandYears-ChristinaPerri.mp3`;
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
    
    const COLOR_PRIMARY = "#F5A5B5";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv-karla-ximena/`;
    const BG_COLOR ="rgb(243, 234, 217,.5)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 2, 13, 19, 0, 0),
                locationName: "Parroquia San José ",
                address: "Blvd. Agustín de Vildósola # 144, Colonia Pedregal de la Villa",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/Iglesia%20Oro%20rosa.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/N1aznkod7ybKxzLK8",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19, 21, 0, 0),
               
                locationName: "Salón 1 de la Unidad Social Sección 54",
                address: "Av. Salvador Díaz Mirón #76, Colonia Periodista ",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `https://marianalero.github.io/invitacion-xv-susan/images/corona%202.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/iAc6dTHJUDZrkmot5",
                colorButton: COLOR_PRIMARY,
               
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: "black",
        colorTitle: "black",
        colorBody: "black",
        bgColor: "#ffeae8", 
        events: [
            {
                eventName: "Misa",
                date: new Date(2025, 8, 19,19,0,0),
                icon:`${URL_IMAGES}iconos/1.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,21,0,0),
                icon:`${URL_IMAGES}iconos/2.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025,  8, 19,22,20,0),
                icon:`${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 8, 19,2,0,0),
                icon: `${URL_IMAGES}iconos/4.svg`,
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
        addormentStart:`${URL_IMAGES}adornos.svg`,
        
        qoute : "Al caer la noche en el cielo millones de estrellas podrás contar… cada una de ellas era un deseo que en mi corazón voy a guardar… Dicen que la vida es más bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo la noche de mis 15 años.",
    }

  const galleryPhotos = [
        `${URL_IMAGES}galeria(1).jpg`,
        `${URL_IMAGES}galeria(3).jpg`,
        `${URL_IMAGES}galeria(7).jpg`,
        `${URL_IMAGES}galeria(6).jpg`,
    ];
    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpg`}
            bgImage2={`${URL_IMAGES}portada.jpg`}
                  weddingDate="19.09.2025"
                 subtitle="Mis XV años"
                  brideName="Karla Ximena"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
            <Qoute 
               {...qoute}>
            </Qoute>
             <ImageMiddle bgImage={`${URL_IMAGES}galeria(5).jpg`} bgSize="contain"></ImageMiddle>
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
              <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2, color: COLOR_PRIMARY}} >
                Mis Personas Favoritas
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer eso posible!</Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2 , color:COLOR_PRIMARY}}>
                Mis Papás
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2}}
              >
                 Martha Marina Corrales
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 35,lineHeight:2 , }}
              >
                Luis Carlos Onuma 


              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
              
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
            <CountDown 
                eventDate={new Date(2029, 2, 15)}
                
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

      {/* Bloque principal */}
      <Grid size={12}>
         
        <Box
          textAlign="center"
          sx={{ width: "100%", mt: 6 }}
        >
          <Box sx={{ mt: 6, mb: 6 }}>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "2rem", color: COLOR_PRIMARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>
            {/* Imagen superior */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>

            {/* Primera fila de nombres */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                 
                >
                 Alba Berrellez <br></br> Jesús Tadeo Onuma
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Alejandra Onuma <br></br> Javier Cariaga

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                
                >
               
                 Kathya Onuma <br></br> Pedro Rocha

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Blanca Corrales<br></br> Mario Alberto Corrales

                </Typography>
                </Fade>
              </Grid>

                <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                  Ana Dolores Acuña<br></br> Julio César García 

                </Typography>
                </Fade>
              </Grid>
            </Grid>

           
          </Box>
        </Box>
     
      </Grid>
    </Grid>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
          <ImageMiddle bgImage={`${URL_IMAGES}galeria(4).jpg`} bgSize="contain"></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           
            <RSVPForm
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2026, 1, 28)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={"rgb(243, 234, 217,.5)"}
            />
            {/* <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo> */}
            <DressCode {...dresscode}></DressCode>
            {/* <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos/27.png`} width={"150px"} />

            </Fade> */}
             
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
export default XVRenataIsabela;




import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, CircularProgress, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";

const XVAlexia  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const [open, setOpen] = useState(false);
        const [openConfirm, setOpenConfirm] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/LanaDelRey-SayYesToHeaven.mp3`;
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
         if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526621157641?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20quinceañera%20de%20Alexia para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            window.open(`https://wa.me/+526621157641?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20quinceañera%20de%20Alexia.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
      }
    const COLOR_PRIMARY = "#267763";
    const MAIN_TYPO = "pinyon-script-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv/xv-alexia/`;
    const BG_COLOR ="rgb(251,243,232,.5)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa",
                date: new Date(2025, 8, 19, 20, 0, 0),
                locationName: "Parroquia Santa Edwviges",
                address: "C. Israel González S/N, Modelo, 83190 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/qTqQrrg7uq6ipH6P7",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold"
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19, 21, 0, 0),
               
                locationName: "Campestre Monsal",
                address: "Carr. 26 Km 2.8, San JOSE DE LAS MINITAS, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon:`${URL_IMAGES}iconos/8.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/CHMkPmuDBaAsGMnm6",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: "white",
        colorTitle: "white",
        colorBody: "white",
        bgColor: COLOR_PRIMARY, 
        fontSize:"45px",
        events: [
            {
                eventName: "Misa",
                date: new Date(2025, 8, 19,20,0,0),
                icon:`${URL_IMAGES}iconos/11.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,21,0,0),
                icon:`${URL_IMAGES}iconos/12.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025,  8, 19,22,0,0),
                icon:`${URL_IMAGES}iconos/14.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 8, 19,22,30,0),
                icon: `${URL_IMAGES}iconos/13.svg`,
            }
            ,
            {
                eventName: "Fin del evento",
                date: new Date(2025, 8, 19,2,0,0),
                icon: `${URL_IMAGES}iconos/15.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/iconos.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal-Formal Vaquero",
        omitColorsLabel:"Color reservado para la quinceañera:",
        omitColorsText:"Verde esmeralda"
    }
    

  const galleryPhotos = [
        `${URL_IMAGES}alexia casual-5.jpg`,
        `${URL_IMAGES}alexia casual-9.jpg`,
       `${URL_IMAGES}alexia casual-17.jpg`,
        `${URL_IMAGES}alexia casual-25.jpg`,
         `${URL_IMAGES}enmedio.jpg`,
      
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
     useEffect(() => {
        galleryPhotos.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad; // si falla, igual contamos
        });
    }, []);

    const handleImageLoad = () => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current === galleryPhotos.length) {
      setIsLoading(false); // cuando todas las imágenes han cargado
    }
  };

     // Loader
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
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpg`}
            bgImage2={`${URL_IMAGES}portada.jpg`}
                  weddingDate="08.11.2025"
                 subtitle="Mis XV años"
                  brideName="Alexia"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
            <Grid container spacing={2} justifyContent="center" pb={3}  bgcolor={BG_COLOR}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} paddingY={2} paddingX={3}>
               <Fade direction="up" >
              <Typography align="center" variant="body1" className={`${MAIN_TYPO}`} sx={{ fontSize: 24 ,lineHeight:"2rem"}} >
               Hace 15 años nació una niña hermosa y llena de alegría enviada por Dios para ser criada y formada como el más grande tesoro <br></br>
               Agradezco a mis papas por todo el amor que me han dado, por apoyarme y aconsejarme.<br></br>
                Hay momento en la vida que soñamos y esperamos; y uno de esos momento ha llegado <br></br>
                Acompáñame a celebrar este capituló de mi vida con amor y recuerdos inolvidables. <br></br>
                
              </Typography>
          
              </Fade>
            </Grid>
            <Grid paddingBottom={2}>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
             <ImageMiddle bgImage={`${URL_IMAGES}alexia casual-33.jpg`} bgSize="cover" bgPosition=""></ImageMiddle>
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
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2 , color:COLOR_PRIMARY}}>
                Mis Padres
              </Typography>
              </Fade>
            </Grid>
             <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2, color:COLOR_PRIMARY}}
              >
                Luis E. Galaz
              </Typography>
              </Fade>
            </Grid>
             <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2, color:COLOR_PRIMARY}}
              >
                y
              </Typography>
              </Fade>
            </Grid>


            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 35,lineHeight:2, color:COLOR_PRIMARY }}
              >
                Jeovana Norzagaray


              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
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
                eventDate={new Date(2025, 10, 8)}
                format="dddd DD MMMM"
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
            <Grid container justifyContent="center">
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
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
                 Joel Valenzuela y Sonia Sotelo
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Armando Norzagaray y Patricia Leon
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                
                >
               
              Rocio Norzagaray y Carlos Galaz

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Julia Norzagaray y Julián Galaz

                </Typography>
                </Fade>
              </Grid>

                <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
                 Ana Elsa Galaz y Aaron Fimbres

                </Typography>
                </Fade>
              </Grid>
            
            </Grid>

           
          </Box>
          <Box sx={{ mt: 6, mb: 6 }}>
            {/* Título */}
            <Fade direction="up" >
            <Typography
              variant="h3" className={`${MAIN_TYPO}`}
              sx={{ fontSize: "2rem", color: COLOR_PRIMARY }}
            >
              Chambelan
            </Typography>
            </Fade>
              <Grid container justifyContent="center">
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
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
                 Paul Galaz
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
          <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpg`} bgSize="contain"></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           <DressCode {...dresscode}></DressCode>
            <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2025, 10, 3)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={"rgb(243, 234, 217,.5)"}
              confirmed={handleConfirm}
            />
            {/* <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo> */}
            
            
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />

            </Fade>
             
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
                        <Typography variant="h4" className={MAIN_TYPO} sx={{color:COLOR_PRIMARY}}>Confirmación enviada</Typography>
                       </Box>
                    </DialogContent>        
                </Dialog>
        </div>
    )
}
export default XVAlexia;



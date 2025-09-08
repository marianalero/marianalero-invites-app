
import { Fade } from "react-awesome-reveal";
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
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Gallery from "../../components/Gallery/Gallert";
import { ConfirmExcel } from "../../services/guestApiClient";

const XVKarla  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const [open, setOpen] = useState(false);
        const [openConfirm, setOpenConfirm] = useState(false);
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
    

    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
        //    https://docs.google.com/forms/d/e/1FAIpQLSeG1_3rXwcGoL0yDzhVTaCU_09jJahIiAIH59PrQh0ZHxZYig/viewform?usp=pp_url&entry.516140191=MARIAN&entry.827025270=666&entry.1599079301=SI&entry.465259973=2
           const params = new URLSearchParams({
            'entry.516140191': name,
            'entry.827025270': phoneNumber,
            'entry.1599079301': confirmText,
            'entry.465259973': totalConfirmed.toString(),
            submit: 'Submit',
            });
            const excelURL = "https://docs.google.com/forms/d/e/1FAIpQLSeG1_3rXwcGoL0yDzhVTaCU_09jJahIiAIH59PrQh0ZHxZYig/formResponse"
            const url = `${excelURL}?${params.toString()}`;
            const response = await ConfirmExcel(url);
            if(response){
                setOpenConfirm(true);
            }
      }
    const COLOR_PRIMARY = "#F5A5B5";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv-karla-ximena/`;
    const BG_COLOR ="rgb(243, 234, 217,.5)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2025, 8, 19, 18, 30, 0),
                locationName: "Parroquia San Francisco de Asís",
                address: "Calle Guadalupe Victoria S/N, Balderrama, Hermosillo, Son.",
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
               
                locationName: "Salón 1 SNTE 54",
                address: "Gabriela Mistral s/n esquina Román Yocupicio Col. Pitic",
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
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "rgb(243, 234, 217,.5)", 
        events: [
            {
                eventName: "Misa",
                date: new Date(2025, 8, 19,18,30,0),
                icon:`${URL_IMAGES}iconos/1.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,21,0,0),
                icon:`${URL_IMAGES}iconos/2.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025,  8, 19,22,0,0),
                icon:`${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 8, 19,22,30,0),
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
        
        qoute : "Hay momentos inolvidables que se guardan en el corazón para siempre por esa razón quiero que compartas conmigo este día tan especial, Gracias a Dios y a mis Padres",
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
                eventDate={new Date(2025, 8, 19)}
                
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
           
            <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2025, 8, 16)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={"rgb(243, 234, 217,.5)"}
              confirmed={handleConfirm}
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
export default XVKarla;



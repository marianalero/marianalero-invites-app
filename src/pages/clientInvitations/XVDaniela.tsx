
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
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
import Gallery from "../../components/Gallery/Gallert";

const XVDaniela  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const [open, setOpen] = useState(false);
        const [openConfirm, setOpenConfirm] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/UnMundoIdeal-RicardoMontanerYMichelle.mp3`;
       
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
        //    //https://docs.google.com/forms/d/e/1FAIpQLSeDkAx0v5Yb7caV0zSy-nURm1rCZ0bBFvTK0SPqogNvrJ55mg/viewform?usp=pp_url&entry.516140191=mariana&entry.827025270=662145561&entry.1599079301=si&entry.465259973=2
        //    const params = new URLSearchParams({
        //     'entry.516140191': name,
        //     'entry.827025270': phoneNumber,
        //     'entry.1599079301': confirmText,
        //     'entry.465259973': totalConfirmed.toString(),
        //     submit: 'Submit',
        //     });
        //     const excelURL = "https://docs.google.com/forms/d/e/1FAIpQLSeDkAx0v5Yb7caV0zSy-nURm1rCZ0bBFvTK0SPqogNvrJ55mg/formResponse"
        //     const url = `${excelURL}?${params.toString()}`;
        //     const response = await ConfirmExcel(url);
        //     if(response){
        //         setOpenConfirm(true);
        //     }
      }
    const COLOR_PRIMARY = "#F5A5B5";
    const MAIN_TYPO = "tangerine-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv-danilela-liz/`;
    const BG_COLOR ="rgb(243, 234, 217,.5)"
    const galleryPhotos = [
       `${URL_IMAGES}galeria1.jpg`,
       `${URL_IMAGES}galerai2.jpg`,
       `${URL_IMAGES}galeria3.jpg`,
       `${URL_IMAGES}galeria4.jpg`,
        `${URL_IMAGES}galeria5.jpg`,
         `${URL_IMAGES}galeria6.jpg`,
          `${URL_IMAGES}galeria7.jpg`,
    ]
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2025, 9, 18, 19, 0, 0),
                locationName: "Parroquia Santa Eduwiges",
                address: "C. Israel González S/N, Modelo, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/8.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/AfWnpx8PekJyPDzV7",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19, 21, 0, 0),
               
                locationName: "Salon de eventos Antigua Hermosillo",
                address: "Calle Jesús García 64, Centro, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon:`${URL_IMAGES}iconos/9.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/LnPQAiWhdTmrhdtT7",
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
        fontSize:"38px",
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
                date: new Date(2025,  8, 19,22,30,0),
                icon:`${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025,  8, 19,2,0,0),
                icon:`${URL_IMAGES}iconos/6.svg`,
            },
        ],
    };
    const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/7.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal"
    }
   

    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
                bgImage={`${URL_IMAGES}portada.jpg`}
                bgImage2={`${URL_IMAGES}portada.jpg`}
                  weddingDate="18.10.2025"
                 subtitle="Mis XV años"
                  brideName="Daniela Lizbeth"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"white"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={false}
                
                  >
            </CoverSimple>
            <Grid container spacing={2} justifyContent="center" mb={3}  bgcolor={BG_COLOR}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} paddingY={2} paddingX={3}>
               <Fade direction="up" >
              <Typography align="center" variant="body1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:"3rem"}} >
               Hace 15 años nació una niña hermosa y llena de alegría enviada por Dios para ser criada y formada como el más grande tesoro <br></br>
                Hay momento en la vida que soñamos y esperamos,uno de esos momento ah llegado <br></br>
                Acompáñame a celebrar este capituló de mi vida con amor y recuerdos inolvidables. <br></br>
                Agradezco a mis papas por todo el amor que me han dado por apoyarme y aconsejarme.<br></br>
              </Typography>
          
              </Fade>
            </Grid>
            <Grid paddingBottom={2}>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
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
              <Typography variant="h6" className={`${BODY_TYPO} tex-`}
                sx={{lineHeight:2}}
              >
                Mis Padres
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2 , color:COLOR_PRIMARY }}
              >
                Daniel Robles lara 
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 35,lineHeight:2 , color:COLOR_PRIMARY }}
              >
             Yazmin Irasema Avila Pacheco


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
           <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
              
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
              sx={{ fontSize: "3rem", color: COLOR_PRIMARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>
            {/* Imagen superior */}
            <Grid container justifyContent="center" sx={{ }}>
                
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
                José Luis  Robles lara  <br></br> Virginia María Columba Pozos Mejia
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
              dateLine={new Date(2025, 9, 4)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={BG_COLOR}
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
export default XVDaniela;



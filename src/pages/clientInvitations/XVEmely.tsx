
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, Card, CardContent, Dialog, DialogContent,  Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import CustomButton from "../../components/CustomButton/CustomButton";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import Gallery from "../../components/Gallery/Gallert";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import RSVPForm from "../../components/RSVP/RSVPForm";

const XVEmely  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const INVITATION_ID = 14;
        const [open, setOpen] = useState(false);

        const musicRef = useRef<MusicFabPlayerHandle>(null);
       const URL_SONG = `${URL_REPO}canciones/MaBelleEvangeline.mp3`;
       
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
    const URL_IMAGES = `${URL_REPO}xv/xv-emely/`;
    const BG_COLOR ="rgb(243, 234, 217,.5)"
    const galleryPhotos = [
       `${URL_IMAGES}galeria65.jpeg`,
       `${URL_IMAGES}enmedio.jpeg`,
    ]
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 0, 31, 17, 0, 0),
                locationName: "Parroquia de la Resurrección",
                address: "Av. Colonizadores 72, Las Quintas, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/m5aguydPdyEVxibk8",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold"
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 0, 31, 20, 0, 0),
               
                locationName: "SNTE 28",
                address: "Zona Administrativa Federal, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon:`${URL_IMAGES}iconos/8.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/dQA28vhdwEuSnEW28",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold"
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
                date: new Date(2026, 0, 31, 17, 0, 0),
                icon:`${URL_IMAGES}iconos/12.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 0, 31, 20, 0, 0),
                icon:`${URL_IMAGES}iconos/13.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2026,  0, 31,21,0,0),
                icon:`${URL_IMAGES}iconos/17.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2026,  0, 31,21,30,0),
                icon:`${URL_IMAGES}iconos/18.svg`,
            },
            // {
            //     eventName: "Fin del evento",
            //     date: new Date(2026,  1, 1,2,0,0),
            //     icon:`${URL_IMAGES}iconos/6.svg`,
            // },
        ],
    };
    const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/11.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien puedes realizar transferencia o depósito a la siguiente cuenta:",
        bankDetails: [
            {
                bank: "BBVA",
                name: "María Fernanda Ochoa Hernández",
                numbers : [
                    {
                        numberType: "Tarjeta",
                        number: "4152313942041596"

                    },
                ],
                color: "white",
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_PRIMARY,
            },
        ],
              
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Color rosa reservado para la quinceañera",
    }
   

    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
                bgImage={`${URL_IMAGES}portada.jpeg`}
                bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="31.01.2026"
                 subtitle="Mis XV años"
                  brideName="Emely Solano "
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"white"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
            <Grid container spacing={2} justifyContent="center"  bgcolor={BG_COLOR}>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} paddingY={2} paddingX={3}>
               <Fade direction="up" >
              <Typography align="center" variant="body1" className={`${MAIN_TYPO}`} sx={{ fontSize: 30 ,lineHeight:"3rem"}} >
               "Hay momentos inolvidables que se guardan en el corazón para siempre por esa razón quiero que compartas conmigo este día tan especial.<br></br>
              Con la bendición de Dios y el amor de mi familia,<br></br>
              te invito a celebrar uno de los días más importantes de mi vida."
              </Typography>
          
              </Fade>
            </Grid>
            <Grid paddingBottom={3}>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpeg`}></ImageMiddle>
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
               Fernanda Ochoa
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 35,lineHeight:2 , color:COLOR_PRIMARY }}
              >
             Erick Solano(&#8224;)


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
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
        </Box>
      </Grid>
       <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >     
              <Fade direction="up"  triggerOnce={true}>  
                 <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4}>
      {/* Sobre (solo mitad superior) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        
      </Box>

      {/* Tarjeta */}
      <Card
        sx={{
          width: "90%",
          maxWidth: 350,
          p: 3,
          pt: 6,
          textAlign: "center",
          boxShadow: 3,
          position: "relative",
          overflow: "visible",
          mt: -6, // sube un poco la tarjeta para que se una con el sobre
          backgroundColor: "white",
        }}
      >
        {/* Sello */}
        <Box
          component="img"
           src={`${URL_IMAGES}2.png`}
          alt="Sello"
          sx={{
            width: 80,
            height: 80,
            position: "absolute",
            top: -40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <CardContent>
          <Box
          component="img"
          src={`${URL_IMAGES}padre.jpeg`} 
          alt="Sobre"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, mt:2 }}>
            Hija mía, aunque no pueda tomarte de la mano, desde el cielo cuido cada uno de tus pasos.
            Estoy orgulloso de ti y viviré por siempre en tu corazón.
          </Typography>

        </CardContent>
      </Card>
    </Box>  
    </Fade>   
        </Grid>
    </Grid>
            <CountDownSimple 
                eventDate={new Date(2026, 0, 31)}
               
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_PRIMARY}
                circleBgColor="white"
                bgImage={`url('${URL_IMAGES}contador.png')`} >  
            </CountDownSimple>
            <Grid container spacing={2} justifyContent="center" paddingX={2} bgcolor={BG_COLOR}>
              {/* Texto inicial */}
              <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6 }}>
                <Fade direction="up" >
                <Typography
                  className={BODY_TYPO}
                  sx={{ fontSize: "1rem", fontStyle: "italic!important" }}
                >
                  Queridos padrinos y madrinas, gracias por ser parte de este momento tan especial en mi vida.
                    Han sido fundamentales para que este sueño se hiciera realidad.
                  Los llevaré siempre en mi corazón.

                </Typography>
                </Fade>
              </Grid>
              <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
              
            </Grid>
            <div style={{backgroundImage:`url('${URL_IMAGES}fondo.jpg')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px" }}>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
             </div>
            <ImageMiddle bgPosition="50%" height="70vh" bgImage={`${URL_IMAGES}galeria4.jpeg`}></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           
            <RSVPForm 
                textColor={COLOR_PRIMARY}
                    colorButton={COLOR_PRIMARY} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    color={COLOR_PRIMARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                   classButtonName="btn-gold"
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
              
                </Fade>
              </Grid>
          
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
export default XVEmely;



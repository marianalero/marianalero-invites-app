
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
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import Gallery from "../../components/Gallery/Gallert";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import RSVPForm from "../../components/RSVP/RSVPForm";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import MiniGallery from "../../components/MiniGallery/MiniGallery";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";


const XVKimberly  = () => {
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
       const URL_SONG = `${URL_REPO}canciones/Yellow-ColdPlay.mp3`;
       
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
    

  
    const COLOR_PRIMARY = "#ec959d";
    const COLOR_SECONDARY = "#f7c1b5";
    const COLOR_THREE = "#f3bfc3";
    const MAIN_TYPO = "parisienne-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv/xv-kimberly/`;
    const BG_COLOR ="rgb(252,236,223,0.6)"
    const galleryPhotos = [
       `${URL_IMAGES}galeria1.jpeg`,
       `${URL_IMAGES}galeria2.jpeg`,
        `${URL_IMAGES}galeria3.jpeg`,
    ]
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 3, 11, 17, 0, 0),
                locationName: "Iglesia San Juan De Capistrano",
                address: "Calz. San Bernardino 52, Seminario, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/9.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/UEy9AtE6UmnMZVVe6",
                fontSize:"45px",
                colorButton: COLOR_SECONDARY,
         
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 3, 11, 20, 0, 0),
               
                locationName: "Salon Las Cascadas",
                address: "Los Molinos 97, Las Minitas, 83285 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon:`${URL_IMAGES}iconos/10.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/rpiFrF3X8ohWPrpD9",
                colorButton: COLOR_SECONDARY,
                
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_THREE,
        colorTitle: COLOR_THREE,
        colorBody: COLOR_THREE, 
        bgColor: BG_COLOR, 
        fontSize:"38px",
        events: [
            {
                eventName: "Misa",
                date: new Date(2026, 0, 31, 17, 0, 0),
                icon:`${URL_IMAGES}iconos/15.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 3, 11, 20, 0, 0),
                icon:`${URL_IMAGES}iconos/16.svg`,
            },
            {
                eventName: "Fotografías",
                date: new Date(2026,  3, 11 ,20,30,0),
                icon:`${URL_IMAGES}iconos/17.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2026,  3, 11 ,21,0,0),
                icon:`${URL_IMAGES}iconos/22.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2026,  3, 11 ,22,0,0),
                icon:`${URL_IMAGES}iconos/23.svg`,
            },
            {
                eventName: "Baile y fiesta",
                date: new Date(2026,  3, 11 ,22,30,0),
                icon:`${URL_IMAGES}iconos/24.svg`,
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
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/26.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
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
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        fontSize:"2rem",
    }
   
     const qoute:QouteProps ={
            bodyTypo: MAIN_TYPO,
            bgColor:BG_COLOR,
            fontsize:"1.5rem",
            lineheight:"1.5rem",
            addormentStart:``,
            addormentEnd:`${URL_IMAGES}adorno.png`,
            addormentSize:"250px",
            qoute : "Al caer la noche en el cielo millones de estrellas podrás contar… cada una de ellas era un deseo que en mi corazón voy a guardar… Dicen que la vida es mas bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo la noche de mis 15 años.",
        }

    
    return (
        <div style={{backgroundColor:"#FFFFFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
                bgImage={`${URL_IMAGES}portada.jpeg`}
                bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="11.04.2026"
                 subtitle="Mis XV años"
                  brideName="Kimberly Mayrin"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"white"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
           <Qoute 
               {...qoute}>
            </Qoute>
              <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle>
     <div style={{backgroundImage: `url("${URL_IMAGES}fondo4.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

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
              <Typography  className={`${BODY_TYPO}`} >
                Deseamos compartir con ustedes la alegría de celebrar un momento muy especial
              </Typography>
              <Grid container justifyContent="center" sx={{ m: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>
              </Fade>
            </Grid>


            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2rem" ,lineHeight:2, color: COLOR_PRIMARY }}
              >
                  Marina Perez Bracamontes
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                sx={{  fontSize: "2rem",lineHeight:2 , color: COLOR_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
              >
               Martin Alvarez Delgadillo 
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
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
              
                </Fade>
              </Grid>
            </Grid>
        </Box>
      </Grid>
    </Grid>
    </div>
            <CountDown 
                eventDate={new Date(2026,3,11)}
                bgImage={`${URL_IMAGES}contador.jpeg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"
                padding="0 0 0 0"
                alignItems="start"
                >  
            </CountDown>
            <Grid container spacing={2} justifyContent="center" paddingX={"20px"} paddingY={"50px"} bgcolor={BG_COLOR}>
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
              sx={{ fontSize: "2.5rem", color: COLOR_SECONDARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

          
      
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2,}}>

              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                        Manuela de Jesús Perez Bracamontes & Francisco Javier Sámano Herrera
                      </Typography>
                    </Fade>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
            </Grid>
            </Grid>
            <MiniGallery
                    images={[
                        `${URL_IMAGES}mini1.jpeg`,
                        `${URL_IMAGES}mini2.jpeg`,
                        `${URL_IMAGES}mini3.jpeg`,
                    ]}
                     backgroundColor={COLOR_THREE}
                    spacing={8}
                    gap={6}
                    imageHeightDesktop={580}
                    imageHeightMobile={260}
                    />
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
           
            <ImageMiddle bgPosition="50%" height="70vh" bgImage={`${URL_IMAGES}enmedio2.jpeg`}></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           
            <RSVPForm 
                dateLine={new Date(2026,3,1)}
                textColor={COLOR_PRIMARY}
                    colorButton={COLOR_SECONDARY} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    color={COLOR_PRIMARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                    fontSize="2rem"
                   
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
              
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
export default XVKimberly;



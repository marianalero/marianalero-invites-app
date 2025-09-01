
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
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
import RSVPForm from "../../components/RSVP/RSVPForm";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
const WeddingAngelicaJose  = () => {
      const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 5;
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
        document.title = "Boda Angelica & Jose Alberto";
    }, []);
    
    const COLOR_PRIMARY = "#898989";
    const MAIN_TYPO = "tangerine-regular";
    const BODY_TYPO = "pt-serif-caption-regular";
    const URL_IMAGES = `${URL_REPO}boda-angelica-jose/`;
    const URL_SONG = `${URL_REPO}canciones/QueSuerteTenerte-Fonseca.mp3`;
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
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia religiosa",
                date: new Date(2026, 9, 4, 17, 0, 0),
                locationName: "Parroquia San Pedro Apóstol",
                address: "Carretera a Ures No. 48, San Pedro El Saucito",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/7.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/gvCi1WA8cRassK9JA",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName: `btn-silver`
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 9, 4, 20, 0, 0),
                locationName: "CASA GALA",
                address: "Zacatecas 3, San Pedro El Saucito, San Pedro el Saucito, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}iconos/8.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/3dzNc2Q5NYYharUD8",
                colorButton: COLOR_PRIMARY,
                classButtonName: `btn-silver`
               
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
                eventName: "Ceremonia religiosa",
                date: new Date(2025, 9, 18,17,0,0),
                icon: `${URL_IMAGES}iconos/2.svg`,
            },
            {
                eventName: "Recepción ",
                date: new Date(2025, 9, 18,20,0,0),
                icon:  `${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Cena ",
                date: new Date(2025, 9, 18,22,0,0),
                icon: `${URL_IMAGES}iconos/4.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 9, 18,2,0,0),
                icon: `${URL_IMAGES}iconos/6.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase:"Tu presencia es nuestro mejor regalo, pero si lo deseas contamos con mesa de regalos en:",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51751531",
                icon: `${URL_IMAGES}adornos/6.svg`
            },
        ],
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope: false,
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal"
    }
  
    const sponsors:PairSponsors[] = [
            {
                sponsorOne: { name: "Sra. Bianca De Paz y Sr. Victor Paz" },
            },
            {
                sponsorOne: { name: "Sra. Margarita Aguirre y Sr. Manuel Galaz" },
            },
            {
                sponsorOne: { name: "Sra. Monica Vindiola y Sr. Pablo Ramos" },
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
        <div style={{backgroundColor:"#f8f8f8",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <CoverSimple 
                  weddingDate="4.10.2025"
                  bgImage={`${URL_IMAGES}portada.png`}
                  bgImage2={`${URL_IMAGES}portada.png`}
                  brideName="Angelica"
                  symbolr={"&"}
                  groomName={"Jose Alberto"}
                  className={MAIN_TYPO}
                  textColor={COLOR_PRIMARY}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={false}
                
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
                Por el amor que nos une, con la presencia de Dios entre nosotros y la compañía de nuestros amados hijos: Yngrint y José Luis
              </Typography>
               <Typography  className={`${BODY_TYPO}`} sx={{ lineHeight:2}} >
               Nosotros:
              </Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 55,lineHeight:2, color:COLOR_PRIMARY}}> 
                Angelica
              </Typography>
                <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 55,lineHeight:2, color:COLOR_PRIMARY}}> 
                &
              </Typography>
                <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 55,lineHeight:2, color:COLOR_PRIMARY}}> 
               Jose Alberto
              </Typography>
              </Fade>
            </Grid>
             <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Fade direction="up" >
              <Typography
                className={BODY_TYPO}
                sx={{ mt: 2 ,lineHeight:2, fontStyle:"italic!important"}}
              >
                 Deseamos compartir la alegría de nuestra renovación de votos matrimoniales con motivo del 25 Aniversario, es por ello que queremos estar rodeados de nuestros seres más queridos, será un honor contar con su presencia.


              </Typography>
              </Fade>
            </Grid>
        
  
          </Grid>

        
        </Box>
      </Grid>
    </Grid>
            <CountDownSimple 
                eventDate={new Date(2025, 9, 4)}
               
                typoHeader={`${MAIN_TYPO} `}
                typoCountdown={BODY_TYPO} 
                primaryColor={"black"} 
                secondarColor={"black"}
                circleBgColor={COLOR_PRIMARY}
                circleTextColor="white"
                bgImage={`url('${URL_IMAGES}contador.png')`} >  
            </CountDownSimple>
            <WeddingSponsor headerFontSize="60px" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} sponsors={sponsors} height={"60vh"} color={COLOR_PRIMARY} addormentEnd={`${URL_IMAGES}adornos/5.svg`}></WeddingSponsor>
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
           
            <RSVPForm 
                textColor="white"
                    colorButton={COLOR_PRIMARY} 
                    bgColor={"#BABABA"} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2025,8,30)}
                    color={"white"}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                    classButtonName="btn-silver"
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos/5.svg`} width={"150px"} />

            </Fade>
           
           <WithoutKids hideTitle={true} bodyTypo={BODY_TYPO} title="" subtitle="Respetuosamente" subtitle2=" NO niños"></WithoutKids>
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
export default WeddingAngelicaJose;



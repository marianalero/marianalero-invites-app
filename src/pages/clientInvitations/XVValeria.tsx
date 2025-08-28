
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
import { Box, Typography } from "@mui/material";
import { URL_REPO } from "../../config";

const XVValeria  = () => {
    // const [searchParams] = useSearchParams();
    // const invitedGuests: number | undefined = useMemo(() => {
    //     const num = Number(searchParams.get("number"));
    //     return isNaN(num) ? undefined : num;
    // }, [searchParams]);
    // const guestId: number | undefined = useMemo(() => {
    //     const num = Number(searchParams.get("id"));
    //     return isNaN(num) ? undefined : num;
    // }, [searchParams]);
    // const INVITATION_ID = 1;
    const COLOR_PRIMARY = "#b86b77";
    const COLOR_SECONDARY= "#929292";
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
                icon: `${URL_IMAGES}/iconos/6.png`,
                mainTypo:`${MAIN_TYPO} text-rose-gold`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/MmvoR1jSqPMuLgZE9",
                fontSize:"45px",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-silver"
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 5, 14, 21, 0, 0),
                endDate: new Date(2026, 5, 15, 2, 0, 0),
                locationName: "Jardin Luna Clara",
                address: "Arq. Gustavo F. Aguilar Beltrán 70 El Chanate",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}/iconos/7.png`,
                mainTypo:  `${MAIN_TYPO} text-rose-gold`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/V7a9PDtgkhth6AVe7",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-silver"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: BG_COLOR, 
        events: [
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,21,0,0),
                icon: `${URL_IMAGES}/iconos/2.png`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 9, 18,21,50,0),
                icon: `${URL_IMAGES}/iconos/3.png`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,22,15,0),
                icon: `${URL_IMAGES}/iconos/4.png`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO} text-rose-gold`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}/iconos/5.png`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO} text-rose-gold`,
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
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
             <div  style={{backgroundImage:`url('${URL_IMAGES}portada.png')`,backgroundPositionX: "50%",    height: "80vh",backgroundSize:"cover", backgroundColor: BG_COLOR, display:"flex", justifyContent: "center", alignItems:"center" }} >
               
               <div>
                <div style={{display:"flex",justifyContent:"center"}} >
                      <Fade direction="up" >
                    <h6 className="holder pt-serif-caption-regular to-upper" style={{color:COLOR_SECONDARY}}><span>MIS XV AÑOS</span></h6>
                    </Fade>
                </div>
                <div style={{marginTop:"20px"}}>
                   <Fade direction="up" >
                    <Typography  textAlign={"center"} variant="h1" className={`${MAIN_TYPO} text-rose-gold`}>Valentina</Typography>
                    <Typography  textAlign={"center"}  variant="h1"  className={`${MAIN_TYPO} text-rose-gold`}>Ruiz</Typography>

                </Fade>
                </div>
                <div style={{display:"flex",justifyContent:"center",}} >
                   <Fade direction="up" >
                    <h6 className="holder pt-serif-caption-regular to-upper" style={{color:COLOR_SECONDARY}}>13.09.25</h6>
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
              <Typography variant="h1" className={`${MAIN_TYPO} text-silver`} sx={{ fontSize: 38 ,lineHeight:2}} >
                Mis Personas Favoritas
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer eso posible!</Typography>
              </Fade>
            </Grid>
  
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} text-silver`}  sx={{ fontSize: 38,lineHeight:2 }}>
                Mis Papás
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}
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
                bgColor={BG_COLOR}
                typoHeader={`${MAIN_TYPO} text-rose-gold`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white"
                bgImage={`url('${URL_IMAGES}contador.png')`} >  
            </CountDownSimple>
    <Grid container spacing={2} justifyContent="center" paddingX={2} sx={{bgcolor:"#fbfbfc"}} >
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
              variant="h3" className={`${BODY_TYPO} text-silver`}
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
              variant="h3" className={`${BODY_TYPO} text-silver`}
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

            <GiftList {...giftListData} ></GiftList>
            {/* <RSVPForm 
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor="rgb(215,174,84,.05)" 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2025,8,20)}
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            ></RSVPForm> */}
            {/* <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo> */}
            <DressCode {...dresscode}></DressCode>
            {/* <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos/27.png`} width={"150px"} />

            </Fade> */}
           
            <div style={{height:100}}></div>

            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
        </div>
    )
}
export default XVValeria;
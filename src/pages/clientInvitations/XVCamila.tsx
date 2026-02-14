
import { Fade } from "react-awesome-reveal";
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
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";

import RSVPForm from "../../components/RSVP/RSVPForm";
import InvitationWelcomeModal from "../../components/InvitationWelcomeModal/InvitationWelcomeModal";

const XVCamila  = () => {
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
       const URL_SONG = `${URL_REPO}canciones/Espejito-Espejito.mp3`;
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
    
    const COLOR_PRIMARY = "#C48A9A";
    const COLOR_SECONDARY = "#9E9E9E";
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "lora";
    const URL_IMAGES = `${URL_REPO}xv/xv-camila/`;
    const BG_COLOR ="rgb(249, 238, 241)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 2, 20, 19, 0, 0),
                locationName: "Parroquia Santa Eduwiges",
                address: "C. Israel González S/N, Modelo, Hermosillo, Son.",
                size: 6,
                color: "white",
                icon: `${URL_IMAGES}iconos/9.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/CxGg2yXusDTtTeze7",
                fontSize:"3.5rem",
                colorButton: "white",
                classButtonName:"btn-silver",
                
                textColor:COLOR_SECONDARY
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 20, 21, 0, 0),
               
                locationName: "Salon Las Cascadas",
                address: "Los Molinos 97, Las Minitas, Hermosillo, Son.",
                size: 6,
                color: "white",
                icon: `${URL_IMAGES}iconos/10.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"4rem",
                href: "https://maps.app.goo.gl/Y6TfuqLdCVQ8VnA39",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-silver",
                textColor:COLOR_SECONDARY
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_SECONDARY,
        colorTitle: COLOR_SECONDARY,
        colorBody: COLOR_SECONDARY,
        bgColor: "#F3DCE1", 
        fontSize: "3.5rem",
        events: [
            {
                eventName: "Misa",
                date: new Date(2026, 2, 20,19,0,0),
                icon:`${URL_IMAGES}iconos/15.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 20,21,0,0),
                icon:`${URL_IMAGES}iconos/16.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2026, 2, 20,22,20,0),
                icon:`${URL_IMAGES}iconos/21.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2026, 2, 21,2,0,0),
                icon: `${URL_IMAGES}iconos/24.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
      fontSize: "3.5rem",
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}iconos/7.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo para nosotros. Si deseas tener un detalle adicional, que sea en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        
        fontSize:"3.5rem",
    }
    const qoute:QouteProps ={
        bodyTypo: BODY_TYPO,
        bgColor:BG_COLOR,
        fontsize:"1.5rem",
        lineheight:"2rem",
        addormentStart:`${URL_IMAGES}adornos/31.png`,
        addormentSize:"180px",
        italic:true,
        qoute : "pendiente de frase",
    }

    
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpeg`}
            bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="20.03.2026"
                 subtitle="Mis XV años"
                  brideName="Camila"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"#FFFFFF"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                fontSize="6rem"
                  >
            </CoverSimple>
            <Qoute 
               {...qoute}>
            </Qoute>
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpeg`} bgSize="contain"></ImageMiddle>
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
                    <Adornment image={`${URL_IMAGES}adornos/33.png`} width={"150px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <Typography className={BODY_TYPO}>Con la bendición de Dios y el apoyo incondicional de mis padres</Typography>
              </Fade>
            </Grid>


            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2.5rem" ,lineHeight:2, color: COLOR_PRIMARY }}
              >
                  Gladys del Carmen Aguirre López 
              </Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`} translate="no" 
                sx={{  fontSize: "2.5rem",lineHeight:2 , color: COLOR_PRIMARY,fontFeatureSettings: '"liga" 0, "locl" 0', }}
              >
                {"O\u0073car"} Francisco Miranda Moreno
              </Typography>
              </Fade>
            </Grid>
          </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/32.png`} width={"150px"} />
              
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
        </Box>
      </Grid>
    </Grid>
            <CountDown 
                eventDate={new Date(2026, 2, 13)}
                fontSize="2rem"
                typoHeader={`${BODY_TYPO} to-upper`}
                typoCountdown={BODY_TYPO} 
                bgImage={`${URL_IMAGES}contador.jpeg`} >  
            </CountDown>
    <Grid container spacing={2} justifyContent="center" padding={2} bgcolor={BG_COLOR}>
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

      {/* Bloque principal */}
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
              sx={{ fontSize: "3.5rem", color: COLOR_PRIMARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

            <Grid container justifyContent="center" sx={{ mt: 2 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/32.png`} width={"150px"} />
                </Fade>
              </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                 
                >
                Mariana López Mendívil
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
             Cosme Enrique Aguirre Ayala (&#8224;)

                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                
                >
               
              Zaira Mariana Aguirre López 
                </Typography>
                </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}
                  
                >
               
               Alan López López 


                </Typography>
                </Fade>
              </Grid>

                <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                        Ernestina Lorena García Bueras  
                      </Typography>
                    </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                        Francisco Rogelio Moreno Bueras
                      </Typography>
                    </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                        Marlenn Jackelinn Hernández Duarte
                      </Typography>
                    </Fade>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="body1" className={BODY_TYPO}>
                       Marco Antonio Navarro Urquidez
                      </Typography>
                    </Fade>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                <Typography variant="body1" className={MAIN_TYPO} sx={{ fontSize: "3.5rem", color: COLOR_PRIMARY }}>
                    Chambelan
                </Typography>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                 <Fade direction="up" >
                <Typography
                  variant="body1" className={BODY_TYPO}>
                    Juan Daniel Fuentes Moreno
                    </Typography>
                </Fade>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/33.png`} width={"150px"} />
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Grid>
    </Grid>
            <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 0" }}>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>
          <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpeg`} bgSize="contain"></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <div style={{backgroundImage: `url("${URL_IMAGES}1-horz.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px" }}>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              
             </Grid>
           </div>
            <RSVPForm
            fontSize="4rem"
            bgImage={`${URL_IMAGES}confirmacion.jpeg`}
              textColor={"white"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2026, 1, 28)}
              color={"white"}
              colorButton={"white"}
              invitationId={0}
              bgColor={"rgb(243, 234, 217,.5)"}
              guestId={guestId}
              classButtonName="btn-silver"
            />
              <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 0" }}>
            <DressCode {...dresscode}></DressCode>
          <Grid container justifyContent="center">  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adornos/32.png`} width={"150px"} />
                </Fade>
              </Grid>
            </Grid>
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           </div>
            <div style={{height:100}}></div>
        
            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
        <InvitationWelcomeModal
            open={open}
            onEnter={handleClose}
            onClose={handleClose}
            isMultilanguage={false}
            language={"es"}
            color={COLOR_PRIMARY}
           
/>
        
        </div>
    )
}
export default XVCamila;


export const FloralDivider = ({ color = "#CFCFD1", width = 300 }) => (
  <svg
    width={width}
    height="50"
    viewBox="0 0 300 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 25 C40 5, 80 5, 110 25 
         C140 45, 160 45, 190 25 
         C220 5, 260 5, 290 25"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="150" cy="25" r="3" fill={color} />
  </svg>
);
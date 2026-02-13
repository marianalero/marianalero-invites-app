
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
import Gallery from "../../components/Gallery/Gallert";
import RSVPForm from "../../components/RSVP/RSVPForm";
import InvitationWelcomeModal from "../../components/InvitationWelcomeModal/InvitationWelcomeModal";

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
    
    const COLOR_PRIMARY = "#C97A8A";
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "lora";
    const URL_IMAGES = `${URL_REPO}xv/xv-renata-isabela/`;
    const BG_COLOR ="rgb(255, 234, 232)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 2, 13, 19, 0, 0),
                locationName: "Parroquia San José",
                address: "Blvd. Agustín de Vildósola # 144, Colonia Pedregal de la Villa",
                size: 6,
                color: "white",
                icon: `${URL_IMAGES}iconos/9.svg`,
                mainTypo:`${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/yqXczqb9Gf5XktZb6",
                fontSize:"3.5rem",
                colorButton: "white",
                classButtonName:"btn-silver",
                bgColor:"#2d2d2d",
                textColor:"#FFFFFF"
                
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 13, 21, 0, 0),
               
                locationName: "Salón 1 de la Unidad Social Sección 54",
                address: "Gabriela Mistral s/n esquina Román Yocupicio ",
                size: 6,
                color: "white",
                icon: `${URL_IMAGES}iconos/10.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"4rem",
                href: "https://maps.app.goo.gl/LYQfXCyeL7ouJS5HA",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-silver",
                bgColor:"#2d2d2d",
                textColor:"#FFFFFF"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: "black",
        colorTitle: "black",
        colorBody: "black",
        bgColor: "#ffeae8", 
        fontSize: "3.5rem",
        events: [
            {
                eventName: "Misa",
                date: new Date(2025, 8, 19,19,0,0),
                icon:`${URL_IMAGES}iconos/15.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 8, 19,21,0,0),
                icon:`${URL_IMAGES}iconos/16.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025,  8, 19,22,20,0),
                icon:`${URL_IMAGES}iconos/21.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 8, 19,2,0,0),
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
        envelopePhrase:"Tu presencia es el mejor regalo para nosotros. Si deseas tener un detalle adicional, el día del evento habrá una caja para sobres.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Color rosa reservado para la quinceañera",
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
        qoute : "Al caer la noche en el cielo millones de estrellas podrás contar… cada una de ellas era un deseo que en mi corazón voy a guardar… Dicen que la vida es más bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo la noche de mis 15 años.",
    }

  const galleryPhotos = [
        `${URL_IMAGES}enemdio3.jpeg`,
    ];
    
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.jpeg`}
            bgImage2={`${URL_IMAGES}portada.jpeg`}
                  weddingDate="13.03.2026"
                 subtitle="Mis XV años"
                  brideName="Renata Isabela"
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
             <ImageMiddle bgImage={`${URL_IMAGES}enmedio1.jpeg`} bgSize="contain"></ImageMiddle>
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
                Oscar Francisco Miranda Moreno
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
          <Gallery photos={galleryPhotos} ></Gallery>
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
export default XVRenataIsabela;




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
const XVMelanie  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const [open, setOpen] = useState(false);
        const [openConfirm, setOpenConfirm] = useState(false);
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
    

    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
         if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526623377802?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20quinceañera%20de%Melanie Samadhi para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            window.open(`https://wa.me/+526623377802?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20quinceañera%20de%20Melanie Samadhi.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
      }
    const COLOR_PRIMARY = "#8bac67";
    const COLOR_SECONDARY = "#769a8c";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}xv-melanie/`;
    const BG_COLOR ="rgb(248,243,205,.4)"
    const BG_COLOR_2 ="rgb(218,229,199,.5)"
        const eventCards: EventCardProps[] = [
            // {
            //     eventName: "Misa Religiosa",
            //     date: new Date(2026, 5, 14, 17, 0, 0),
            //     locationName: "Iglesia San Juan De Capistrano",
            //     address: "Calz. San Bernardino 52, Seminario, Hermosillo, Son.",
            //     size: 6,
            //     color: COLOR_PRIMARY,
            //     icon: `https://marianalero.github.io/invitacion-xv-susan/images/Iglesia%20Oro%20rosa.svg`,
            //     mainTypo:`${MAIN_TYPO}`,
            //     bodyTypo: BODY_TYPO,
            //     href: "https://maps.app.goo.gl/MmvoR1jSqPMuLgZE9",
            //     fontSize:"45px",
            //     colorButton: COLOR_PRIMARY,
                
            // },
            {
                eventName: "Recepción",
                date: new Date(2026, 5, 14, 21, 0, 0),
                endDate: new Date(2026, 5, 15, 2, 0, 0),
                locationName: "Salón Golden",
                address: "Plaza NOVA, Blvd. Luis Donaldo Colosio Murrieta 870-15, La Manga, 83320 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}recepcion.svg`,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/Cx7vDPThcX7HJEcD6",
                colorButton: COLOR_PRIMARY,
               
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_SECONDARY,
        colorTitle: COLOR_SECONDARY,
        colorBody: COLOR_SECONDARY, 
        bgColor: BG_COLOR_2,
        events: [
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,21,0,0),
                icon:`${URL_IMAGES}iconos/3.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 9, 18,22,0,0),
                icon: `${URL_IMAGES}iconos/6.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,22,30,0),
                icon: `${URL_IMAGES}iconos/7.svg`,
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 9, 18,2,0,0),
                icon: `${URL_IMAGES}iconos/8.svg`,
            }
        ],
    };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconEnd: `${URL_IMAGES}iconos/9.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel: "COLORES RESERVADOS",
        omitColorsText:"Verde en todos sus tonos"
    }
    const qoute:QouteProps ={
        bodyTypo: MAIN_TYPO,
        bgColor:BG_COLOR,
        fontsize:"2rem",
        lineheight:"2rem",
        addormentStart:``,
        addormentEnd:`${URL_IMAGES}iconos/10.svg`,
        addormentSize:"70px",
        qoute : "Al caer la noche en el cielo millones de estrellas podrás contar… cada una de ellas era un deseo que en mi corazón voy a guardar… Dicen que la vida es mas bella si podemos cumplir lo que soñamos y mi sueño es que compartas conmigo la noche de mis 15 años.",
    }

    
    return (
        <div style={{backgroundColor:"#FFF",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_PRIMARY}/>
             <CoverSimple 
            bgImage={`${URL_IMAGES}portada.png`}
            bgImage2={`${URL_IMAGES}horz.png`}
                  weddingDate="10.10.2025"
                 subtitle="Mis XV años"
                  brideName="Melanie Samadhi"
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
              <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2, color: COLOR_SECONDARY}} >
                Mis Personas Favoritas
              </Typography>
              <Typography className={BODY_TYPO}>¡Gracias por hacer eso posible!</Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
            {/* <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />

            </Fade> */}
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2, color: COLOR_SECONDARY }}>
                Mis Papás
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />

            </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2, color:COLOR_PRIMARY}}
              >
                 Guadalupe Fimbres 
              </Typography>
              </Fade>
            </Grid>
        <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: 35 ,lineHeight:2, color:COLOR_PRIMARY}}
              >
                 &
              </Typography>
              </Fade>
            </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
              <Fade direction="up" >
              <Typography  variant="h1" className={`${MAIN_TYPO}`}
                sx={{  fontSize: 35,lineHeight:2 , color:COLOR_PRIMARY}}
              >
                 Ramses León

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
                eventDate={new Date(2025, 9, 10)}
               
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={"black"} 
                secondarColor={"black"}
                circleBgColor={BG_COLOR_2}
                bgImage={`url('${URL_IMAGES}contador.png')`} >  
            </CountDownSimple>
            <div style={{backgroundImage:`url('${URL_IMAGES}fondo.png')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"contain",paddingTop:"70px" }}>
  <Grid container spacing={2} justifyContent="center" paddingX={2} sx={{backgroundColor: BG_COLOR_2}}>
      {/* Texto inicial */}
      <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6, }}>
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
              variant="h3" className={`${BODY_TYPO}`}
              sx={{ fontSize: "1.5rem", color: "black" }}
            >
              Mis Padrinos
            </Typography>

            {/* Imagen superior */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid>
                <img src={`${URL_IMAGES}iconos/10.svg`} height={80} />
              </Grid>
            </Grid>

            {/* Primera fila de nombres */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 3 }}>
              <Grid size={{ xs: 12,md:12,lg:12}} >
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{ color: COLOR_PRIMARY,  }}
                >
                 Graciela Loreto Quiroz 
                </Typography>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY,fontFamily:MAIN_TYPO}}
                >
                Kiara López & David Fimbres

                </Typography>
              </Grid>
               <Grid size={{ xs: 12,md:12,lg:12}}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY,fontFamily:MAIN_TYPO}}
                >
                Ivet Saricza León & Francisco Javier Cohen 

                </Typography>
              </Grid>
              <Grid size={{ xs: 12,md:12,lg:12}}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY,fontFamily:MAIN_TYPO}}
                >
                Anna galaz & Aaron Fimbres

                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h3" className={`${BODY_TYPO}`}
              sx={{ fontSize: "1.5rem", color: "black" }}
            >
            Chambelan
            </Typography>

            {/* Segunda fila de nombres */}
            <Grid container spacing={2} justifyContent="center">
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h4" className={MAIN_TYPO}
                  sx={{  color: COLOR_PRIMARY, }}
                >
                  Bruno Aaron León Castro
                </Typography>
              </Grid>
              
            </Grid>

            {/* Imagen inferior */}
            {/* <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid>
                <img src="https://marianalero.github.io/invitacion-xv-susan/images/adorno%20azul%20(1)/2.svg" width={200} />
              </Grid>
            </Grid> */}
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
        
            </div>
  

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
              dateLine={new Date(2025, 8, 25)}
              color={COLOR_SECONDARY}
              colorButton={COLOR_SECONDARY}
              invitationId={0}
              bgColor={BG_COLOR}
              confirmed={handleConfirm}
            />
            {/* <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo> */}
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}iconos/10.svg`} width={"70px"} />

            </Fade>
             
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
          <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />

            </Fade>
            </Grid>
            <div style={{height:100}}></div>

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
export default XVMelanie;



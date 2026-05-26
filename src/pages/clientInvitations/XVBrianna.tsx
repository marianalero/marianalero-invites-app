
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Grid from '@mui/material/Grid2';
import { Box,  Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useMemo} from "react";

import Adornment from "../../components/Adornment/Adornment";
;
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import RSVPExcel from "../../components/RSVP/RSVPExcel";



const XVBriana  = () => {
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);

    // 🌌 BASE
    const BG_MAIN = "#0A1A33";        // Más profundo (menos saturado = más lujo)
    const BG_SECTION = "#0F274D";     // Para bloques internos
    const BG_ACCENT = "#1C3D73";      // Hover / detalles

    // 🖋 TEXTOS
    const TEXT_PRIMARY = "#FDFCF9";   // Blanco cálido (no blanco puro)
    const TEXT_SECONDARY = "#E6D3A3"; // Dorado más fino (menos amarillo)


    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#E6D3A3";

    // ✨ DETALLES

    // ✨ DETALLES

    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "cinzel-400";
    const URL_IMAGES = `${URL_REPO}xv/xv-briana/`;

  
        const eventCards: EventCardProps[] = [
            
            {
                eventName: "Recepción",
                date: new Date(2026, 5, 20, 19, 0, 0),
               
                locationName: "KOVA eventos",
                address: "Blvd. Camino del Seri & Bv. de las Quintas, Col. la Verbena, 83291 Hermosillo, Son.",
                size: 6,
                color: TEXT_PRIMARY ,
                icon:`${URL_IMAGES}recepcion.png`,
                iconSize:"180px",
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/7pa6D2pAo6qH8DTq9",
                colorButton: BUTTON_PRIMARY,
                bgColor: BG_MAIN
                
            },
    ];
   
    const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: TEXT_PRIMARY, 
        bgColor: BG_ACCENT , 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}sobre.svg`,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal !Gracias!",
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
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
        fontSize:"2rem",
   
    }

    const handleConfirmed = (name: string, confirmText: string, phoneNumber: string, totalConfirmed: string, companionNames?: string) => {
        console.log("Confirmado:", name, confirmText, phoneNumber, totalConfirmed, companionNames);
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+5266200000?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20Quinceañera%20%20de%20Briana.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');

        }else{
            window.open(`https://wa.me/+5266200000?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20Quinceañera%20de%20Briana.Mi nombre es: ${name}`, '_blank');

        }
    };

   
    return (
        <div style={{backgroundColor:BG_MAIN ,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
          
           <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px",minHeight:"80vh",}}>
           
            <Grid container justifyContent="center"  height={"80vh"} >
              <Grid size={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <div style={{ position: "relative", width: "100%", height: "100%"}}>

                  <div  style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)", width:"100%"}}>
                          <Fade direction="left" triggerOnce={true} >
              
                            {/* XV grande atrás */}
                            <Typography
                              sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "200px",
                                fontFamily: "Cinzel",
                                color: TEXT_PRIMARY,
                                opacity: 0.08,
                                pointerEvents: "none",
                              }}
                            >
                              XV
                            </Typography>

                            {/* Nombre */}
                            <Typography
                              align="center"
                              sx={{
                                fontFamily: "Great Vibes",
                                fontSize: "64px",
                                color: TEXT_PRIMARY,
                                textShadow: "0 0 20px rgba(255,255,255,0.2)",
                                mb: 2,
                              }}
                            >
                              Briana Cristina
                            </Typography>
                            <Typography
                            align="center"
                              sx={{
                                fontFamily: "Cinzel",
                                color: TEXT_SECONDARY,
                                letterSpacing: 2,
                                mb: 2,
                              }}
                            >
                              20 DE JUNIO 2026
                            </Typography>


                            {/* Línea decorativa */}
                            <Box
                              sx={{
                                width: 120,
                                height: 1,
                                background: TEXT_SECONDARY,
                                mx: "auto",
                                mb: 2,
                                opacity: 0.6,
                              }}
                            />
                          </Fade>
                  </div>
                   <div  style={{position:"absolute",top:"10%",left:"20%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}elementos/1.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
                     <div  style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(-1, 1)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}elementos/2.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>   
                     <div  style={{position:"absolute",top:"85%",left:"80%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}elementos/3.png`}  style={{width: "200px"}} />
                         </Fade>
                     
                     </div>    
              </div>
            </Grid>
          </Grid>
          
            </div>
           
          
     <div style={{backgroundColor:BG_SECTION , padding: "50px 20px" }}>

                        <Grid container justifyContent="center" padding={2}>
      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            mt: 6,
            mb: 6,
            borderColor: BUTTON_PRIMARY,
            borderWidth: "2px",
            borderStyle: "solid",
            px: 3,
            py: 3,
            //  backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo blanco con opacidad
             backdropFilter: "blur(5px)", // Efecto de desenfoque para mejorar la legibilidad
            
          }}
        >
          <Grid container spacing={2} justifyContent="center" mb={3} color={TEXT_PRIMARY}>
            
            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography  className={`${BODY_TYPO}`} translate="no">
                “Será una noche especial para mi, y me encantaría que la disfrutes conmigo”

              </Typography>
             
              </Fade>
            </Grid>
             <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"200px"} />
              
                </Fade>
              </Grid>
<Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              
             
              <Typography className={BODY_TYPO}>Con el apoyo incondicional de mi madre</Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                sx={{fontSize: "2rem" ,lineHeight:2, color: BUTTON_PRIMARY }}
              >
                 Ana Cristina Hoyos Meza 

              </Typography>
              </Fade>
            </Grid>

           
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
    </div>
         

               <CountDown 
               bgImage={`${URL_IMAGES}contador.png`}
          eventDate={new Date(2026, 5, 20)}
          
          typoHeader={MAIN_TYPO}
          typoCountdown={BODY_TYPO}
          fontSize="2rem"
     
                 
                >  
            </CountDown>
  
            <Grid container spacing={2} justifyContent="center" paddingX={"20px"} paddingY={"50px"} bgcolor={BG_SECTION} color={TEXT_PRIMARY}>
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
              sx={{ fontSize: "2.5rem", color: TEXT_SECONDARY }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

          
      
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2,}}>

              <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="h5" className={MAIN_TYPO}>
                        Jorge Alberto Hoyos Figueroa
                      </Typography>
                    </Fade>
              </Grid>
               <Grid size={{ xs: 12,md:12,lg:12}}>
                    <Fade direction="up" >
                      <Typography variant="h5" className={MAIN_TYPO}>
                        María Cristina Meza González
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
            <Box sx={{backgroundColor:BG_MAIN, py: 10}}>
           <div style={{ backgroundImage: `url(${URL_IMAGES}elementos/2.png)`, backgroundSize: "contain",backgroundRepeat: "repeat", padding:"50px 20px" }}>
            <Grid container spacing={2} padding={2} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            </div>

            </Box>

            <Box
              sx={{
                position: "relative",
                backgroundColor: BG_ACCENT,
                py: 10,
                overflow: "visible", // 👈 clave para que se salgan
              }}
            >
              {/* 🌸 Flor esquina superior izquierda */}
              <Box
                component="img"
                src={`${URL_IMAGES}elementos/4.png`}
                sx={{
                  position: "absolute",
                  top: "-60px",
                  left: "-60px",
                  width: { xs: "30vh", md: "200px" },
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* 🌸 Flor esquina inferior derecha */}
              <Box
                component="img"
                src={`${URL_IMAGES}elementos/4.png`}
                sx={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-60px",
                  width: { xs: "30vh", md: "200px" },
                  transform: "scaleX(-1)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* 📦 Contenido */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  px: 2,
                }}
              >
                <GiftList {...giftListData} />
              </Box>
            </Box>
             
           
            <RSVPExcel 
            textColor="white" 
            bgImage={`${URL_IMAGES}fondo.png`} 
            qrActive={false} mainTypo={MAIN_TYPO} 
            bodyTypo={BODY_TYPO} 
            count={invitedGuests} 
            color={"white"} 
            colorButton={BUTTON_PRIMARY} 
            invitationId={0} 
            bgColor={""} 
            confirmed={handleConfirmed}
            hidePhoneNumberInput={true}
            transparencyButton={true}
            ></RSVPExcel> 
            
              <Box  sx={{backgroundColor:BG_SECTION, color:TEXT_PRIMARY, paddingY:5, paddingX:2, marginTop:5}}>
                  <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"250px"} />
              
                </Fade>
              </Grid>
          {/* <WithoutKids subtitle2="NO NIÑOS" ></WithoutKids> */}
              </Box>
          
           
          
 
            <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
              

        </div>
    )
}
export default XVBriana;



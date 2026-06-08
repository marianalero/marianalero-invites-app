
import { Fade } from "react-awesome-reveal";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Grid from '@mui/material/Grid2';
import { Backdrop, Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Adornment from "../../components/Adornment/Adornment";

import RSVPExcel from "../../components/RSVP/RSVPExcel";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";




const XVCamila2  = () => {
      const [searchParams] = useSearchParams();
  const [isLoadingInvitation, setIsLoadingInvitation] = useState(true);
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);

    const BG_MAIN = "#F8F4EE";
    const BG_SECTION = "#F1E7DB";
    const BG_ACCENT = "#7A1525";

    // 🖋 TEXTOS
    const TEXT_PRIMARY = "#3B2A28";
    const TEXT_SECONDARY = "#C4A46A";

    // 🎯 BOTONES
    const BUTTON_PRIMARY = "#7A1525";
    const BUTTON_TEXT = "#FFFFFF";

    // ✨ DETALLES
    const GOLD_LIGHT = "#E1C89A";

    const MAIN_TYPO = "gistesy";
    const SECONDARY_TYPO = "cormorant-garamond-400";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}xv/xv-camila-2/`;

    const invitationImages = useMemo(
      () => [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}flores/1.png`,
        `${URL_IMAGES}flores/2.png`,
        `${URL_IMAGES}flores/3.png`,
        `${URL_IMAGES}flores/5.png`,
        `${URL_IMAGES}sello.png`,
        `${URL_IMAGES}adorno.png`,
        `${URL_IMAGES}adorno2.png`,
        `${URL_IMAGES}marfil-hor.png`,
        `${URL_IMAGES}marfil-ver.png`,
        `${URL_IMAGES}horz.png`,
        `${URL_IMAGES}cruz.png`,
        `${URL_IMAGES}corona.png`,
        `${URL_IMAGES}sobre2.png`,
      ],
      [URL_IMAGES]
    );

    useEffect(() => {
      let isMounted = true;

      const preloadImage = (src: string) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = src;
        });

      Promise.all(invitationImages.map(preloadImage)).finally(() => {
        if (isMounted) {
          setIsLoadingInvitation(false);
        }
      });

      return () => {
        isMounted = false;
      };
    }, [invitationImages]);

  
        const eventCards: EventCardProps[] = [
            {
                eventName: "Misa",
                date: new Date(2026, 6, 4, 19, 0, 0),
               textColor: TEXT_PRIMARY,
                locationName: "Parroquia Santisima Trinidad",
                address: "Bv. Justo Sierra, Periodista, Hermosillo, Son.",
                size: 6,
                color: BUTTON_PRIMARY ,
                icon:`${URL_IMAGES}cruz.png`,
                iconSize:"180px",
                mainTypo:  `${SECONDARY_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/M3W3uohiMFzYYpNg8?g_st=ic",
                colorButton: BUTTON_PRIMARY,
                bgColor: BG_MAIN,
                classButtonName:"btn-gold",
                borderSquare:true
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 6, 4, 19, 0, 0),
               textColor: TEXT_PRIMARY,
                locationName: "Unidad Social de la Sección 54 del SNTE",
                address: "Esquina con, Calle Róman Yocupicio, Salvador Díaz Mirón 98, Periodista, Hermosillo, Son.",
                size: 6,
                color: BUTTON_PRIMARY ,
                icon:`${URL_IMAGES}corona.png`,
                iconSize:"180px",
                mainTypo:  `${SECONDARY_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/D23LSpwynZej1urt8?g_st=ic",
                colorButton: BUTTON_PRIMARY,
                bgColor: BG_MAIN,
                classButtonName:"btn-gold",
                borderSquare:true
            },
    ];
   
    
    
    const sponsors = [
        {
            name: "Jesús Alfonso Salazar Campoy",
            name2: "Alma Rosa Salazar Campoy",
        },
        {
            name: "Alfonso Siqueiros Miranda",
            name2: "Rosa María Angulo Cota",
        },
        {
            name: "Jesús Manuel García Güido",
            name2: "María Eunise Álvarez Villavicencio",
        }
        
    ];


    const handleConfirmed = (name: string, confirmText: string, phoneNumber: string, totalConfirmed: string, companionNames?: string) => {
        console.log("Confirmado:", name, confirmText, phoneNumber, totalConfirmed, companionNames);
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+5200000?text=Hola,Mi nombre es ${name}%20y%20confirmo%20mi%20asistencia%20para%20la%20Quinceañera%20%20de%20Briana.%0ANúmero de invitados:${totalConfirmed}%0AAcompañantes: ${companionNames}`, '_blank');

        }else{
            window.open(`https://wa.me/+52000000?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20Quinceañera%20de%20Briana.Mi nombre es: ${name}`, '_blank');

        }
    };

   
    return (
      <>
      <Backdrop
        open={isLoadingInvitation}
        sx={{
          zIndex: (theme) => theme.zIndex.modal + 1,
          color: BUTTON_TEXT,
          backgroundColor: "rgba(122, 21, 37, 0.92)",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress sx={{ color: GOLD_LIGHT }} size={56} />
        <Typography
          sx={{
            fontFamily: BODY_TYPO,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Cargando invitacion...
        </Typography>
      </Backdrop>
      {!isLoadingInvitation && (
      <div style={{backgroundColor:BG_MAIN ,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
          
           <div style={{backgroundImage: `url("${URL_IMAGES}fondo.png")`, backgroundSize: "cover", backgroundPosition: "center", padding: "50px 20px",minHeight:"80vh",}}>
           
           <Box sx={{backgroundColor: `rgba(255,255,255,0.15)`}}></Box>
            <Grid container justifyContent="center"  height={"80vh"} >
              <Grid size={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <div style={{ position: "relative", width: "100%", height: "100%",backgroundColor: `rgb(122, 21, 37, 0.9)`}}>

                  <div  style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)", width:"100%", padding:"20px", borderRadius:"16px"}}>
                          <Fade direction="left" triggerOnce={true} >
              
                            
                              <Typography
                              align="center"
                              sx={{
                                fontFamily:SECONDARY_TYPO,
                                fontSize: "1.5rem",
                                color: TEXT_SECONDARY,
                                textShadow: "0 0 20px rgba(255,255,255,0.2)",
                                mb: 2,
                              }}
                            >
                              MIS XV AÑOS
                            </Typography>
                            {/* Nombre */}
                            <Typography
                              className="foil-text-Gistesy"
                              align="center"
                              sx={{
                                fontFamily: MAIN_TYPO,
                                fontSize: {
                                  xs: "6rem",
                                  md: "6rem",
                                },
                                mb: 2,
                               
                                lineHeight: "normal",
                              }}
                            >
                              Camila 
                            </Typography>
                            <Typography
                            align="center"
                              sx={{
                                fontFamily:BODY_TYPO,
                                color: TEXT_SECONDARY,
                                letterSpacing: 2,
                                mt: 4,
                              }}
                            >
                              04 DE JULIO 2026
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
                               <img src={`${URL_IMAGES}flores/1.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>    
                    
                     <div  style={{position:"absolute",top:"95%",left:"90%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/5.png`}  style={{width: "250px"}} />
                         </Fade>
                     
                     </div>    
              </div>
            </Grid>
          </Grid>
          
            </div>
       <div style={{backgroundColor: BG_ACCENT, backgroundPosition: "bottom", padding: "50px 20px" }}>
                <Box padding={2}  sx={{backgroundImage:`url("${URL_IMAGES}marfil-hor.png")`, backgroundSize: "contain", boxShadow: "20px 20px 8px rgba(0, 0, 0, 0.1)"}}  display={"flex"}  justifyContent={"center"}>
           
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} > 
                        
                          <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <img src={`${URL_IMAGES}sello.png`} height="100"/>
                            </Fade>		
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", fontStyle: "italic!important" }} >Gracias por compartir con nosotros este momento tan especial. No celebramos solo quince años, celebramos cada sonrisa, cada aprendizaje y cada sueño que ha acompañado este camino.</Typography>
                            </Fade>		
                        </Grid>	
                       
                      
                           	
                     
                 </Grid>
            </Box>
      </div>     
          
     <div style={{
      // backgroundColor: BG_SECTION,
      backgroundImage: `url(${URL_IMAGES}marfil-ver.png)`,
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      padding: "50px 20px" 
      }}>

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
            background: "rgba(255, 255, 255, 0.5)",
            // borderRadius: "32px",
            
          }}
        >
          <Grid container spacing={2} justifyContent="center" mb={3} color={TEXT_PRIMARY}>
            
          
             <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"150px"} />
              
                </Fade>
              </Grid>
<Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              
             
              <Typography className={BODY_TYPO}>Con el apoyo incondicional de mis padres</Typography>
              </Fade>
            </Grid>

            <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
              <Typography variant="h1" className={`${SECONDARY_TYPO} text-gold`}
                sx={{fontSize: "1.8rem" ,lineHeight:1, color: TEXT_SECONDARY }}
              >
                  Noé Siqueiros Miranda

              </Typography>
              </Fade>
            </Grid>
              <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
               <Fade direction="up" >
                
              <Typography variant="h1" className={`${SECONDARY_TYPO} text-gold`}
                sx={{fontSize: "1.8rem" ,lineHeight:1, color: TEXT_SECONDARY }}
              >
                  María Mercedes Salazar Campoy 

              </Typography>
              </Fade>
            </Grid>

           
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Fade direction="up" >
              <Typography
                className={BODY_TYPO}
                sx={{ mt: 2 }}
              >
                Tenemos el honor de invitarte a la celebración de mis XV años.
              </Typography>
              </Fade>
            </Grid>
            <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno2.png`} width={"150px"} />
              
                </Fade>
              </Grid>
            
          </Grid>
           
        </Box>
      </Grid>
    </Grid>
    </div>
         
<div style={{ backgroundColor: BG_ACCENT, padding:"50px 20px", position:"relative",height:"50vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div  style={{position:"absolute",top:"10%",left:"15%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/3.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>   
           

              <CountDownSimple 
                eventDate={new Date(2026, 6, 4)}
               format="dddd DD MMMM"
                typoHeader={`${SECONDARY_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={GOLD_LIGHT} 
                secondarColor={GOLD_LIGHT}
                circleBgColor="white"
                bgColor="transparent"
                
                 > 
                 </CountDownSimple>
   <div  style={{position:"absolute",top:"90%",left:"95%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/2.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>   
           
            </div>
            {/* //Seccion de padrinos */}
            <Grid container spacing={2} justifyContent="center" paddingX={"20px"} paddingY={"50px"} sx={{ color: TEXT_PRIMARY , backgroundImage: `url(${URL_IMAGES}marfil-ver.png)`, backgroundSize: "contain", backgroundRepeat: "repeat", borderRadius:"16px" }}>
      {/* Texto inicial */}
       <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno.png`} width={"150px"} />
                </Fade>
              </Grid>
            </Grid>
      
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
              variant="h3" className={`${MAIN_TYPO} text-gold `}
              sx={{ fontSize: "3rem" }}
            >
              Mis Padrinos
            </Typography>
            </Fade>

          
          
              {
                sponsors.map((sponsor, index) => (
                  <Fade direction="up" >
                    <Grid key={index} container spacing={2} justifyContent="center" sx={{ mb: 2, mt: 4, color: GOLD_LIGHT, backgroundColor: BG_ACCENT, borderRadius:"8px", py:2 }}>
                      <Grid size={{ xs: 12,md:6,lg:4}} display={"flex"} justifyContent={"center"}>
                        
                          <Typography variant="h5" className={SECONDARY_TYPO} lineHeight={1} letterSpacing={1.5}> 
                            {sponsor.name}
                          </Typography>
                        
                      </Grid>
                      <Grid size={{ xs: 12,md:6,lg:4}} display={"flex"} justifyContent={"center"}>
                          <Typography variant="h5" className={SECONDARY_TYPO} lineHeight={1} letterSpacing={1.5}> 
                            {sponsor.name2}
                          </Typography>
                      </Grid>
                  </Grid>
                  </Fade>
                ))
              }
             
           
          </Box>
        </Box>
     
            </Grid>
             <Grid container justifyContent="center" sx={{ mt: 4 }}>  
              <Grid>
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}adorno2.png`} width={"150px"} />
                </Fade>
              </Grid>
            </Grid>
            </Grid>
           
           <div style={{ backgroundImage: `url(${URL_IMAGES}horz.png)`, backgroundSize: "contain",backgroundRepeat: "repeat", padding:"50px 20px",position:"relative" }}>
               <div  style={{position:"absolute",top:"0%",left:"15%",transform:"translate(-50%, -50%)", zIndex:1}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/5.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div>   
            <Grid container spacing={2} padding={2} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (      
                  <Box key={index} sx={{width:"100%", display:"flex", justifyContent:"center", bgImage: `url(${URL_IMAGES}marfil-ver.png)`, backgroundSize: "contain", backgroundRepeat: "repeat", padding:"20px", borderRadius:"16px"  }}>    
                   <EventCard key={index} {...item}></EventCard>
                    </Box>
                ))
            }
            </Grid>
            <div  style={{position:"absolute",bottom:"-20%",left:"95%",transform:"translate(-50%, -50%)", zIndex:1}}>
                         <Fade direction="right" triggerOnce={true} >
                               <img src={`${URL_IMAGES}flores/5.png`}  style={{width: "300px"}} />
                         </Fade>
                     
                     </div> 
            </div>

           

            <Box
              sx={{
                position: "relative",
                backgroundColor: BG_ACCENT,
                px: 4,
                py: 10,
                overflow: "visible", // 👈 clave para que se salgan
              }}
            >
              {/* 🌸 Flor esquina superior izquierda */}
              <Box
                component="img"
                src={`${URL_IMAGES}sello.png`}
                sx={{
                  position: "absolute",
                  top: "8%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: "100px", md: "100px" },
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* 🌸 Flor esquina inferior derecha */}
              <Box
                component="img"
                src={`${URL_IMAGES}flores/5.png`}
                sx={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-90px",
                  width: { xs: "30vh", md: "200px" },
                  // transform: "scaleX(-1)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />
                <Box
                component="img"
                src={`${URL_IMAGES}flores/2.png`}
                sx={{
                  position: "absolute",
                  bottom: "50%",
                  right: "70%",
                  width: { xs: "30vh", md: "200px" },
                  // transform: "scaleX(-1)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />



              {/* 📦 Contenido */}
            
                <Box padding={2}  sx={{
                  backgroundImage:`url("${URL_IMAGES}marfil-hor.png")`, 
                  backgroundSize: "contain", boxShadow: "20px 20px 8px rgba(0, 0, 0, 0.1)"}}  display={"flex"}  justifyContent={"center"}>
           
                 <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} > 
                         <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={`${MAIN_TYPO} text-gold`}  textAlign={"center"}  sx={{fontSize:"4rem",lineHeight:"normal"}} >
                              Lluvia de sobres
                            </Typography>
                            </Fade>		
                        </Grid>	
                         <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <Typography className={BODY_TYPO}  textAlign={"center"}  sx={{fontSize:"1.3rem", }} >
                              Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, el efectivo será ideal ¡Gracias!
                            </Typography>
                            </Fade>		
                        </Grid>	
                          <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Fade direction="up" triggerOnce={true}>
                            <img src={`${URL_IMAGES}sobre2.png`} height="100"/>
                            </Fade>		
                        </Grid>
                       
                       
                      
                           	
                     
                 </Grid>
            </Box>
            <Box mt={5}>
               <Card sx={{
                  width: "100%",
                  
                  borderRadius: "0px",
                  textAlign: "center",
                 
                  position: "relative",
                  overflow: "visible",
                 
                  backgroundImage: `url("${URL_IMAGES}marfil-ver.png")`,
                  backgroundSize: "cover",
                  boxShadow: "20px 20px 8px rgba(0, 0, 0, 0.1)"
                }}> 
                  <Box component="img" src={`${URL_IMAGES}sello.png`} alt="Sello" sx={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -40,
                          left: "50%",
                          transform: "translateX(-50%)",
                  }} />
                <CardContent sx={{padding:0, paddingTop:6}}>
                      <RSVPExcel 
            textColor={TEXT_PRIMARY} 
  
            qrActive={false} mainTypo={`${MAIN_TYPO} text-gold`} 
            bodyTypo={BODY_TYPO} 
            count={invitedGuests} 
            color={TEXT_PRIMARY} 
            colorButton={BUTTON_PRIMARY} 
            invitationId={0} 
            bgColor={""} 
            confirmed={handleConfirmed}
            hidePhoneNumberInput={true}
            transparencyButton={true}
            classButtonName={"btn-gold"}
            ></RSVPExcel> 
              
                </CardContent>
              </Card>
            </Box>
              
            </Box>
                  
              
            <FooterInvites bgColor={BG_SECTION} color={TEXT_PRIMARY}></FooterInvites>
              

        </div>
          )}
          </>
    )
}
export default XVCamila2;



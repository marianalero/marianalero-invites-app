import { Box, Button, CircularProgress, Paper, Typography, useMediaQuery } from "@mui/material";

import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";

import CustomButton from "../../components/CustomButton/CustomButton";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const JuanPablo = () => {
    
    const COLOR_SECONDARY = "#FFD447";
    const COLOR_PRIMARY = "#0057B8";
    const MAIN_TYPO = "genty-sans-regular";
    const BODY_TYPO = "montserrat-400 to-upper";
    const URL_IMAGES = `${URL_REPO}otros/juan-pablo/`;

     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}4.png`,
        `${URL_IMAGES}1.png`,
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}3.png`,
        `${URL_IMAGES}2.png`,

    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const isSmallScreen = useMediaQuery('(max-width:600px)');
   

    useEffect(() => {
        document.title = "Juan Pablo";
    }, []);
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

  
  
    // Loader
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

    return(
          <div style={{backgroundColor:"#FAF9F6",maxWidth: '100%',overflowY:"auto",color:"#2F2F2F"}}>
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}portada.png` : `${URL_IMAGES}portada.png`}')`,backgroundPositionX: "50%", minHeight:isSmallScreen ? "60vh" : "100vh", width:"100vw", backgroundSize:"cover",display:"grid",position: "relative", backgroundRepeat:"no-repeat" }} >
                 
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     
                     <div  style={{position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}drsimi1.png`}  style={{width: "60vw", marginTop:"30px"}}/>
                         </Fade>
                     
                     </div>
                    
                    
                     <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)",    width: "100%"}}>
                          <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"center"} variant="h3"  className={`${MAIN_TYPO}`} sx={{color:COLOR_PRIMARY,zIndex: 2,}}>JUAN PABLO</Typography>
                         <Typography  textAlign={"center"} variant="body1" fontWeight={800} color="#020202"  className={`${BODY_TYPO}`} sx={{color:"#020202",zIndex: 2, fontSize: '1.25rem'}}>CUMPLE</Typography>
                       

                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"80%",left:"50%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}doce2.png`}  style={{width: "40vw"}} />
                         </Fade>
                     
                     </div>
                </div>
                
               </div>
               <div  style={{position: "relative",backgroundImage: `url('${URL_IMAGES}fondo.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" ,paddingTop: "10vh"}} >
                     
                     
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                        
                        <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1rem', }} fontWeight={800} color="#020202">
                         Con mucha alegría y una enorme dosis de emoción,<br></br> queremos invitarte a celebrar un día muy especial junto a nosotros .

                            </Typography>
                         </Fade>

                        </Grid>
                      
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                             <Paper
                                elevation={0}
                                sx={{
                                border: '3px solid #0057B8',
                                borderRadius: '24px',
                                p: 3,
                                backgroundColor: '#f4f8ff',
                                textAlign: 'center',
                                }}
                            >
                                <Typography
                                sx={{
                                    color: '#0057B8',
                                    fontWeight: 800,
                                    letterSpacing: 2,
                                    fontSize: '1rem',
                                }}
                                >
                                FECHA
                                </Typography>

                                <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: '1.4rem',
                                    color: '#222',
                                    mt: 1,
                                }}
                                >
                                16 MAYO 2026
                                </Typography>
                            </Paper>
                        </Fade>
                    </Grid>
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                             <Paper
                                elevation={0}
                                sx={{
                                border: '3px solid #00A859',
                                borderRadius: '24px',
                                p: 3,
                                backgroundColor: '#f4fff8',
                                textAlign: 'center',
                                }}
                            >
                                <Typography
                                sx={{
                                    color: '#00A859',
                                    fontWeight: 800,
                                    letterSpacing: 2,
                                    fontSize: '1rem',
                                }}
                                >
                                HORA
                                </Typography>

                                <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: '1.4rem',
                                    color: '#222',
                                    mt: 1,
                                }}
                                >
                                5:00 PM
                                </Typography>
                            </Paper>
                         </Fade>

                        </Grid>
                        </Grid>
                        </div>
                         <div  style={{position: "relative",backgroundImage: `url('${URL_IMAGES}fondo.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" ,}} >
                        <Grid container spacing={2} justifyContent="center" padding={2}>
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Paper
                                elevation={0}
                                sx={{
                                border: '3px solid #FFD447',
                                borderRadius: '24px',
                                p: 3,
                                backgroundColor: '#fffaf0',
                                textAlign: 'center',
                                }}
                            >
                                <Typography
                                sx={{
                                    color: '#c48b00',
                                    fontWeight: 800,
                                    letterSpacing: 2,
                                    fontSize: '1rem',
                                }}
                                >
                                LUGAR
                                </Typography>

                                <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: '1.4rem',
                                    color: '#222',
                                    mt: 1,
                                }}
                                >
                                Play and Win
                                </Typography>
                                <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: '1.4rem',
                                    color: '#222',
                                    mt: 1,
                                }}
                                >
                               Blvd. Paseo Rio Sonora 556 Norte Interior, Plaza Rio Sonora
                                </Typography>
                                <Button
                                variant="contained"
                                startIcon={<LocationOnRoundedIcon />}
                                href="https://maps.app.goo.gl/wuVbSL5mMAwx5ng97"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#0057B8',
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 1,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: '0 8px 20px rgba(0,87,184,0.25)',
                                    '&:hover': {
                                    backgroundColor: '#00479a',
                                    },
                                }}
                                >
                                Ver ubicación
                                </Button>
                            </Paper>
                         </Fade>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                             <Paper
                                elevation={0}
                                sx={{
                                    backgroundColor: '#FFF4D6',
                                    border: '3px dashed #FFD447',
                                    borderRadius: '30px',
                                    p: 4,
                                    textAlign: 'center',
                                    mb: 5,
                                }}
                                >
                                <LocalHospitalIcon
                                    sx={{
                                    fontSize: 45,
                                    color: '#00A859',
                                    mb: 1,
                                    }}
                                />

                                <Typography
                                    sx={{
                                    color: '#0057B8',
                                    fontWeight: 900,
                                    fontSize: '1.2rem',
                                    mb: 1,
                                    }}
                                >
                                    INDICACIONES DEL DR. SIMI
                                </Typography>

                                <Typography
                                    sx={{
                                    color: '#555',
                                    lineHeight: 1.8,
                                    }}
                                >
                                    Esta fiesta es sorpresa 🤫
                                    <br />
                                    Ayúdanos a guardar el secreto
                                    <br />
                                    para sorprender al festejado 💚
                                </Typography>
                                </Paper>
                         </Fade>
                        </Grid>

                    </Grid>
            </div>
              <div  style={{position: "relative",backgroundImage: `url('${URL_IMAGES}fondo.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" ,paddingTop: "10vh"}} >

              <Grid container spacing={2} justifyContent="center" padding={2}>

                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            fontSize={"2rem"}
                            className={MAIN_TYPO}
                            sx={{  fontWeight: 'bold', color:COLOR_SECONDARY }}
                        >
                            Regalo Sugerido
                        </Typography>
                         
                         </Fade>
                        
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                           <VaccinesIcon
                                    sx={{
                                    fontSize: 45,
                                    color: '#00A859',
                                    mb: 1,
                                    }}
                                />
                         </Fade>
                         </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign={"center"}  >
                     <Typography
                         variant="body1"
                            className={BODY_TYPO}
             
                        sx={{fontSize: '1.25rem'}}
                        fontWeight={800}
                            color="#020202"

                        >
                            
                       Indicaciones del Dr. Simi:<br></br>
                            Lluvia de sobre
                        </Typography>
                    </Grid>
                   
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingY={2} >
                         <Fade direction="up"  triggerOnce={true}>

                         </Fade>
                    </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                            <Fade direction="up"  triggerOnce={true}>
                                <CustomButton
                                onClick={() => window.open("https://wa.me/1234567890?text=Quiero confirmar mi asistencia a la fiesta de Juan Pablo", "_blank")}
                                color={"white"}
                                bgColor={"#00A859"} label={"CONFIRMAR ASISTENCIA"}                                >

                                </CustomButton>
                            </Fade>
            </Grid>

                 <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                                sx={{
                                color: '#999',
                                fontSize: '0.8rem',
                                mt: 4,
                                lineHeight: 1.8,
                                }}
                            >
                                Recetado por el Dr. Simi 💊
                                <br />
                                La diversión está científicamente comprobada.
                            </Typography>
                         </Fade>
                        </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingX={2} >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '50px', fontWeight: 'bold', color:COLOR_SECONDARY,marginTop:"20px" }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                </Grid>
                
              </Grid>
              
              </div>
               <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_SECONDARY}></FooterInvites>
              
          </div>
    )
}
export default JuanPablo;
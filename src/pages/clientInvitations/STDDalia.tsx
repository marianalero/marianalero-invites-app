import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import Adornment from "../../components/Adornment/Adornment";
const STDDalia = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#f4d8d5";
    const COLOR_SECONDARY = "#E86975";
    const MAIN_TYPO = "alex-brush-regular";
    const SECOND_TYPO = "the-seasons";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}save-the-dates/xv-dalia/`;
    const BG_COLOR ="rgb(251,243,220,0.5)";
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}portada.png`,
        `${URL_IMAGES}14.png`,
        `${URL_IMAGES}15.png`,
        `${URL_IMAGES}16.png`,
        `${URL_IMAGES}17.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "Save the Date - Dalia";
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
          <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
           <Box
                sx={{
                    // bgcolor: "#f2eadd", // fondo beige
                    backgroundImage:`url('${URL_IMAGES}fondo.png')`,
                    backgroundSize: "cover",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    paddingTop:4,
                    paddingBottom:4,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                     <Fade direction="up"  triggerOnce={true}>
                    <Typography
                        align="center"
                        variant="h6"
                        className="the-seasons"
                        sx={{
                            fontSize: isSmallScreen ? "40px" : "50px",
                        color: "white", // color similar al ejemplo
                        marginBottom: 2,
                        }}
                    >
                        SAVE <span className={MAIN_TYPO} style={{ fontStyle: "normal", fontSize:"60px" }}>the</span> DATE
                    </Typography>
                    </Fade>
                    <Box 
                    sx={{
                        padding:2,
                        backgroundColor:"#f2d0cc",
                        borderTopLeftRadius: "50% 30%",
                    borderTopRightRadius: "50% 30%",
                                  width: isSmallScreen ? "80vw" : "30vw",
                    }}
                    >   
                        {/* Imagen con borde tipo arco */}
                          <Fade direction="up"  triggerOnce={true}>
                        <Box
                            sx={{
                            borderTopLeftRadius: "50% 30%",
                            borderTopRightRadius: "50% 30%",
                            overflow: "hidden",
                            height: "50vh",
                            backgroundColor: "#f2d0cc", // fondo blanco para la imagen
                            }}
                        >
                            <img
                            src={`${URL_IMAGES}portada.jpg`} // reemplaza con tu imagen
                            alt="Save the date"
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition:"25% 80%" }}
                            />
                        </Box>
                        </Fade>
                    </Box>
                    <Box mb={2} mt={2}>

                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h2" className={MAIN_TYPO} sx={{  color: "white", }}>
                             
                                Dalia Elizabeth
                            </Typography>
                         </Fade>

                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h5" className={SECOND_TYPO} sx={{ color: "white",}}>
                             
                                MIS XV AÑOS
                            </Typography>
                         </Fade>

                     
                    </Box>
                    
                </div>
            </Box>
            
            
               <div  style={{backgroundColor:BG_COLOR, backgroundSize:"cover", }} >
                
                     <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", paddingTop:8, paddingBottom:8}}>
                        
                                <Box
                                    sx={{
                                    
                                        color: "white",

                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    >
                                    <Grid container direction="column" alignItems="center" spacing={1}>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2}>
                                        <Fade direction="up"  triggerOnce={true}>
                                        <Typography
                                        className={SECOND_TYPO}
                                        sx={{
                        
                                            color: COLOR_SECONDARY,
                                            fontSize: '50px',
                                        }}
                                        >
                                        28 <Box component="span" className={MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>de</Box> Febrero
                                        </Typography>
                                        </Fade>
                                        <Fade direction="up"  triggerOnce={true} >
                                        <Typography
                                        marginTop={1}
                                        className={SECOND_TYPO}
                                        sx={{
                                
                                            color: COLOR_SECONDARY,
                                            fontSize: '50px',
                                        }}
                                        >
                                        <Box component="span" className={MAIN_TYPO} sx={{ fontFamily: MAIN_TYPO, color: COLOR_SECONDARY }}>del</Box> 2026
                                        </Typography>
                                        </Fade>
                                        </Grid>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                            <Fade direction="up" >
                                                <Typography align="center" variant="body1" sx={{ letterSpacing: 2, color:"black",marginTop:2}} className={BODY_TYPO}>Tijuana , BC</Typography>

                                            </Fade>
                                        </Grid>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                            <Fade direction="up" >
                                                <Typography align="center" variant="body1" sx={{ letterSpacing: 2, color:"black",marginTop:2}} className={BODY_TYPO}>Invitación formal próximamente</Typography>

                                            </Fade>
                                        </Grid>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}} justifyContent={"center"} display={"flex"}>
                                            <Fade direction="up" >
                                                <Adornment image={`${URL_IMAGES}adornos2.svg`} width={"250px"} />
                                            </Fade>
                                        </Grid>
                                    </Grid>
                                    </Box>
                              
                    </Box>
                  
              

               </div>
              
             
             
                
               <FooterInvites bgColor="#fff4de" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default STDDalia;
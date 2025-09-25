import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
const STDDalia = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#f4d8d5";
    const COLOR_SECONDARY = "#d2a7a0";
    const MAIN_TYPO = "alex-brush-regular";
    const SECOND_TYPO = "the-seasons";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const URL_IMAGES = `${URL_REPO}save-the-dates/xv-dalia/`;
    const BG_COLOR ="#f2eadd";
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
                    <Typography
                        align="center"
                        variant="h6"
                        className="the-seasons"
                        sx={{
                            fontSize: isSmallScreen ? "40px" : "50px",
                        color: COLOR_SECONDARY, // color similar al ejemplo
                        }}
                    >
                        SAVE <span className={MAIN_TYPO} style={{ fontStyle: "normal" }}>the</span> DATE
                    </Typography>
                    <Box 
                    sx={{
                        padding:2,
                        backgroundColor:"#f2d0cc",
                        borderTopLeftRadius: "50% 30%",
                    borderTopRightRadius: "50% 30%",
                                  width: "80vw",
                    }}
                    >   
                        {/* Imagen con borde tipo arco */}
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
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Box>
                    </Box>
                    <Box>

                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h2" className={MAIN_TYPO} sx={{  color:COLOR_SECONDARY }}>
                             
                                Dalia Elizabeth
                            </Typography>
                         </Fade>

                         <Fade direction="up"  triggerOnce={true} >
                             <Typography variant="h5" className={SECOND_TYPO} sx={{ color:COLOR_SECONDARY}}>
                             
                                MIS XV AÑOS
                            </Typography>
                         </Fade>

                     
                    </Box>
                    
                </div>
            </Box>
            
            
               <div  style={{backgroundColor:BG_COLOR,  minHeight: "50vh",backgroundSize:"cover"}} >
                
                     
                    <Grid container spacing={2} sx={{pt:4, pb:4}} >
                                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                     <Box
                        sx={{
                         
                            color: "white",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >
                        <Grid container direction="column" alignItems="center" spacing={1}>
                            {/* Mes */}
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Typography align="center" variant="h5" sx={{ letterSpacing: 2,color:"black" }} className={BODY_TYPO}>
                                Febrero
                            </Typography>
                            </Grid>

                            {/* Día con separadores */}
                            <Grid
                            size={{xs:12,sm:12,md:12,lg:12}}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                            >
                            <Typography variant="h5" sx={{ letterSpacing: 2, color:"black" }} className={BODY_TYPO}>
                                Sábado
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid #d2a7a0",
                                height: "30px",
                                color:COLOR_PRIMARY
                                }}
                            />

                            <Typography
                                variant="h3"
                                sx={{ fontWeight: "bold", mx: 1 , color:"black"}}
                                className={SECOND_TYPO}
                            >
                                28 
                            </Typography>

                            <Box
                                sx={{
                                borderLeft: "1px solid #d2a7a0",
                                height: "30px",
                                }}
                            />

                            <Typography variant="h5" sx={{ letterSpacing: 2, color:"black", minWidth: isSmallScreen ? "60px" : "60px" }} className={BODY_TYPO}>
                            2026
                            </Typography>
                            </Grid>

                            {/* Año */}
                            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                            <Typography align="center" variant="h5" sx={{ letterSpacing: 2, color:"black" }} className={BODY_TYPO}>Tijuana , BC</Typography>
                            </Grid>
                        </Grid>
                        </Box>
                  </Grid>
                    </Grid>
              

               </div>
               <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpg`} bgSize="contain"></ImageMiddle>
                <div style={{height:100}}></div>                
             
             
                
               <FooterInvites bgColor="#fff4de" color={COLOR_PRIMARY}></FooterInvites>
               
          </div>
    )
}
export default STDDalia;
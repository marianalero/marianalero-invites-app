import { Box, Button, CircularProgress,  Stack,  Typography, useMediaQuery } from "@mui/material";
import { URL_REPO, } from "../../config";
import { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid2';




// 🖋 TEXTOS
const TEXT_PRIMARY = "#F3F3F3";

// 🎯 BOTONES
const BUTTON_PRIMARY = "#B31B34";

// ✨ DETALLES
const URL_IMAGES = `${URL_REPO}otros/mariana-30/`;
const MAIN_TYPO = "cinzel-decorative-bold";    
const BODY_TYPO = "raleway-italic-400 to-upper";
const SECONDARY_TYPO = "allura-regular";
const Mariana30 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const imageList = [
        `${URL_IMAGES}fondo.png`,
        `${URL_IMAGES}3.png`,
        `${URL_IMAGES}4.png`,
        `${URL_IMAGES}dresscode2.png`,
        `${URL_IMAGES}rip2 - copia.png`,
    ];
     useEffect(() => {
            document.title = "30 Mariana";
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
            <CircularProgress sx={{ color: BUTTON_PRIMARY }} />
            <Box mt={2} sx={{ fontFamily: "Montserrat" }}>
                Cargando invitación...
            </Box>
        </Box>
        );
    }

  return (
    <div style={{width:"100%", backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}fondo.png` : `${URL_IMAGES}fondo.png`}')`,backgroundPosition: "50% 0", minHeight: "100vh", backgroundSize:"cover", display:"flex", alignItems: "center", justifyContent: "center", position: "relative", padding: isSmallScreen ? "10vh 0 8vh" : "12vh 0" }} >
        {/* <Box 
            component="img"
            src={`${URL_IMAGES}adornos/1.png`}
            alt="Imagen 2"
            sx={{
                position: "absolute",
                top: isSmallScreen ? "2%" : "20%",
                left: isSmallScreen ? "5%" : "10%",
                width: isSmallScreen ? "30vw" : "80%",
                height: "auto",
                zIndex: 1,
            }}
        />
        <Box 
            component="img"
            src={`${URL_IMAGES}adornos/2.png`}
            alt="Imagen 2"
            sx={{
                position: "absolute",
                top: isSmallScreen ? "2%" : "20%",
                right: isSmallScreen ? "0%" : "10%",
                width: isSmallScreen ? "35vw" : "80%",
                height: "auto",
                zIndex: 1,
            }}
        /> */}
        <Grid container spacing={2} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                 <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>

                    Con un poco de drama… <br></br>y muchas historias que no se pueden contar completas…<br></br>anunciamos el final de una era
               </Typography>
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                <Box
                    component="img"
                    src={`${URL_IMAGES}4.png`}
                    alt="Imagen 2"
                    sx={{
                        width: isSmallScreen ? "30vh" : "50vh",
                        height: "auto",
                    }}
                />
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>
                   IN MEMORIAM
                </Typography>
            </Grid>    
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3} mb={2}>
                <Typography textAlign={"center"}   className={MAIN_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? "2rem" : "4rem"}}>
                   RIP 20'S
                </Typography>
            </Grid>  
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                 <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>

                    CON PROFUNDO DOLOR...<br></br>
                    DESPEDIMOS MIS 20'S.<br></br>
                    MURIERON JÓVENES...<br></br>
                     Y ENDEUDADOS.<br></br>
                    PERO DE SUS CENIZAS...<br></br>
                    RENACE ALGO MEJOR.<br></br>
                     y al inicio de algo nuevo.
               </Typography>
            </Grid>  
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                <Box
                    component="img"
                    src={`${URL_IMAGES}3.png`}
                    alt="Imagen 2"
                    sx={{
                        width: isSmallScreen ? "30vh" : "50vh",
                        height: "auto",
                    }}
                />
            </Grid>  
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3} mb={2}>
                <Typography textAlign={"center"}   className={SECONDARY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? "4rem" : "6rem"}}>
                   Mariana
                </Typography>
            </Grid>  
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3}>
                    <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>
                        Porque algunas etapas no terminan... se despiden con estilo.
                </Typography>  
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} >

               <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-end"
                    spacing={1}
                >
                    <Typography
                    className={MAIN_TYPO}
                        sx={{
                          
                            fontSize: { xs: "7rem", md: "10rem" },
                            fontWeight: 700,
                            lineHeight: 0.75,
                            color:TEXT_PRIMARY,
                            letterSpacing: "-0.08em",
                        }}
                    >
                        18
                    </Typography>

                    <Typography
                        className={SECONDARY_TYPO}
                        sx={{
                           
                            fontSize: { xs: "3rem", md: "4.8rem" },
                            fontWeight: 400,
                            color:TEXT_PRIMARY,
                            lineHeight: 1,
                            mb: 1.5, 
                            letterSpacing: "-0.04em",
                        }}
                    >
                        julio
                    </Typography>
                    
                </Stack>
                <Typography 
                        className={BODY_TYPO}
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2.5rem" },
                            fontWeight: 400,
                            color:TEXT_PRIMARY,
                            lineHeight: 1,
                            mb: 1.5, 
                            mt: 1.5,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        8:00 PM
                    </Typography>
           </Grid>

         
             <Grid size={{xs:12,sm:12,md:6,lg:6}} display={"flex"} justifyContent={"center"} paddingX={3}>
                <Box
                    sx={{
                        width: isSmallScreen ? "90vw" : "35vw",
                        py: 4,
                        px: 3,
                        
                       // Transparencia
                        background: "rgba(255, 255, 255, 0.05)",

                        // Desenfoque
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Grid container spacing={2} sx={{width: isSmallScreen ? "90vw" : "30vw", display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Box
                            component="img"
                            src={`${URL_REPO}otros/mariana-30/dresscode2.png`}
                            alt="Imagen 2"
                            sx={{
                                height: isSmallScreen ? "15vh" : "30vh",
                                width: "auto",
                            }}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{width: isSmallScreen ? "90vw" : "30vw", display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Typography textAlign={"center"} fontWeight={800}  className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem", fontWeight: "800!important"}}>
                            El negro será el color de la noche.
                        </Typography>
                        <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".7rem" : "1.3rem"}}>
                            Por favor, viste únicamente de este color.<br></br>(Puede ser solo la camiseta)
                        </Typography>
                        <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".7rem" : "1.3rem"}}>
                            Si quieres llevar el luto con mucho estilo,<br></br> mira esto:
                        </Typography>
                        <Button
                            variant="outlined"
                            href="https://mx.pinterest.com/marianalerma/mariana-the-rebirth/"
                            startIcon={
                                <Box
                                    component="img"
                                    src={`${URL_IMAGES}pinterest.png`}
                                    sx={{ width: 20, height: 20 }}
                                />
                            }
                            sx={{
                                mt: 2,
                                px: 3,
                                py: 1.2,
                                borderRadius: "999px",
                                borderColor: "#B31B34",
                                color: "#F3F3F3",
                                backgroundColor: "rgba(179,27,52,.08)",
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: ".95rem",
                                backdropFilter: "blur(8px)",
                                transition: ".3s",

                                "&:hover": {
                                    backgroundColor: "#B31B34",
                                    borderColor: "#B31B34",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 0 18px rgba(179,27,52,.45)",
                                },
                            }}
                        >
                            Ver inspiración
                        </Button>
                    </Grid>
                    
                </Box>
              
            </Grid>
              <Grid size={{xs:12,sm:12,md:6,lg:6}} display={"flex"} justifyContent={"center"} paddingX={3}>
                <Box
                    sx={{
                        width: isSmallScreen ? "90vw" : "35vw",
                        py: 4,
                        px: 3,
                        
                       // Transparencia
                            background: "rgba(255, 255, 255, 0.05)",

                            // Desenfoque
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Grid container spacing={2} sx={{width: isSmallScreen ? "90vw" : "30vw", display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Box
                            component="img"
                            src={`${URL_REPO}otros/mariana-30/rip2 - copia.png`}
                            alt="Imagen 2"
                            sx={{
                                height: isSmallScreen ? "15vh" : "30vh",
                                width: "auto",
                            }}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{width: isSmallScreen ? "90vw" : "30vw", display:"flex", alignItems: "center", justifyContent: "center"}}>
                        <Typography textAlign={"center"} fontWeight={800}  className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>
                            Casa Rodríguez Lerma
                        </Typography>
                        <br></br>
                        <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>
                        Etchojoa #1110, Col.Misioneros
                        </Typography>
                    </Grid>
                    
                </Box>
              
            </Grid>         
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3} >
              <Typography textAlign={"center"}   className={MAIN_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? "1rem" : "1.3rem"}}>
                30 años. Nueva década. Misma loca, versión mejorada.
            </Typography>
            </Grid>
             <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"} paddingX={3} >
            <Typography textAlign={"center"}   className={BODY_TYPO}  sx={{color:TEXT_PRIMARY, fontSize: isSmallScreen ? ".8rem" : "1.3rem"}}>
                          ¡Te espero para celebrar juntos el comienzo de una nueva década!
            </Typography>
            </Grid>
        </Grid>
        
    </div>
  );
}
export default Mariana30;

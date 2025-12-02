import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";

import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import FooterInvites from "../../components/Footer/FooterInvites";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
const Silvia60 = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const COLOR_PRIMARY = "#ffffff";
    const COLOR_SECONDARY = "#a00a2e";
    const COLOR_THIRD = "#255e3c";
    const MAIN_TYPO = "berkshire-swash-regular";
    const BODY_TYPO = "roboto-400";
    const URL_IMAGES = `${URL_REPO}otros/posada-tdr/`;
   const SECON_MAIN_TYPO = "gistesy";
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}2.png`,
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders

    useEffect(() => {
        document.title = "Posada TDR";
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
    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
         if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526621190486?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20Posada TDR para ${totalConfirmed} personas. Mi nombre es: ${name}`, '_blank');

        }else{
            window.open(`https://wa.me/+526621190486?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20Posada TDR. Mi nombre es: ${name}`, '_blank');

        }
    }
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
              <div  style={{backgroundImage: `url('${isSmallScreen ? `${URL_IMAGES}2.png` : `${URL_IMAGES}hor.png`}')`,backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     
                     <div  style={{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                             <Typography  textAlign={"center"}  typography={"h3"} className={`berkshire-swash-regular`}  sx={{color:COLOR_PRIMARY}}>Posada</Typography>
                         </Fade>
                     
                     </div>
                     <div  style={{position:"absolute",top:"55%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h1"} className={`berkshire-swash-regular`}  sx={{color:COLOR_PRIMARY}}>TDR</Typography>
                     </Fade>
                     </div>
                    <div  style={{position:"absolute",top:"40%",left:"20%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="right" triggerOnce={true}>
                        <img src={`${URL_IMAGES}adornos/3.png`} alt="TDR" style={{height:"7vh"}}/>
                     </Fade>
                     </div>
                    <div  style={{position:"absolute",top:"35%",left:"85%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                        <img src={`${URL_IMAGES}adornos/4.png`} alt="TDR" style={{height:"10vh"}}/>
                     </Fade>
                     </div>
                     <div  style={{position:"absolute",top:"90%",left:"75%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="left" triggerOnce={true}>
                        <img src={`${URL_IMAGES}adornos/3.png`} alt="TDR" style={{height:"10vh"}}/>
                     </Fade>
                     </div>
                    <div  style={{position:"absolute",top:"85%",left:"25%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                            <Fade direction="right" triggerOnce={true}>
                        <img src={`${URL_IMAGES}adornos/4.png`} alt="TDR" style={{height:"7vh"}}/>
                     </Fade>
                     </div>
        
                </div>
                
               </div>
               <div  style={{backgroundColor:"white",backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"10px" }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                          <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                            <img src={`${URL_IMAGES}adornos/5.png`}style={{width:"100%"}}></img>
                          </Grid>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' }}>
                             
                                Nos complace invitarle a nuestra posada anual de la empresa. Acompáñenos a celebrar juntos un año de logros.
                            </Typography>
                         </Fade>

                        </Grid>
                         
                    
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
                           <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} sx={{ mb: 4 }} >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={MAIN_TYPO}
                        sx={{
                      
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                            lineHeight:1,
                        }}
                        >
                        12 <Box component="span"  className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>de</Box> Diciembre
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                         className={MAIN_TYPO}
                        marginTop={2}
                        sx={{
                    
                            color: COLOR_SECONDARY,
                            fontSize: '50px',
                        }}
                        >
                        <Box component="span" className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY }}>del</Box> 2025
                        </Typography>
                        </Fade>
                    </Grid>

                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_THIRD }} >
                        <b>4 PM</b> a <b>8 PM</b>
                        </Typography>
                        </Fade>
                    </Grid>
                        </Grid>
                        </Box>
                  </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                            <div style={{backgroundImage:`url(${URL_IMAGES}adornos/1.png)`,backgroundSize:"cover",width: `calc(100vw - 50px)`, paddingTop: "30%",height: `calc(100vw - 50px)`, paddingLeft: "15%", paddingRight: "15%",}}>
                                    <EventCardSimple  classButtonName="btn-gold" bodyTypo={BODY_TYPO} textColor={COLOR_PRIMARY} eventName="" mainTypo={MAIN_TYPO} locationName="Salón de eventos El Palmar" address="Simón Bley #223 casi esquina con Progreso" color={COLOR_PRIMARY} href={"https://maps.app.goo.gl/Tib967GBK2w2SHae9"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                            </div>
                     </Fade>
                     </Grid>
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up"  triggerOnce={true}>
                                <RSVPExcel
                                textColor={COLOR_THIRD}
                                qrActive={false}
                                mainTypo={MAIN_TYPO}
                                bodyTypo={BODY_TYPO}
                                count={2}
                                dateLine={undefined}
                                color={COLOR_THIRD}
                                colorButton={COLOR_SECONDARY}
                                invitationId={0}
                                bgColor={"rgb(243, 234, 217,.5)"}
                                confirmed={handleConfirm}
                                hideLabelAssignedPeople={true}
                                hidePhoneNumberInput={true}
                                ></RSVPExcel>
                            </Fade>
                     </Grid>    
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={3}>
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '50px', fontWeight: 'bold', color:COLOR_THIRD }}
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
export default Silvia60;
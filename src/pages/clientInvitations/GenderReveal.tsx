import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl,  IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Adornment from "../../components/Adornment/Adornment";
import { EventCardSimple } from "../../components/EventCard/EventCardSimple";
import { URL_REPO } from "../../config";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import FooterInvites from "../../components/Footer/FooterInvites";
import { CreateGuestParameters } from "../../models/parameters/createGuestParameters";
import { CreateAndConfirm } from "../../services/guestApiClient";
const GenderReveal = () => {
    const COLOR_THIRD = "#5771a2";
    const COLOR_SECONDARY = "#d7727a";
    const COLOR_PRIMARY = "#ad7f57";
    const MAIN_TYPO = "gistesy";
    const BODY_TYPO = "roboto-400";
    const URL_IMAGES = `${URL_REPO}gender-reveal/`;
    const numnerOfGuests = 6; // Número de invitados que se pueden seleccionar
     // Lista de imágenes a precargar
    const imageList = [
        `${URL_IMAGES}4.png`,
        `${URL_IMAGES}22.png`,
        `${URL_IMAGES}23.png`,
        `${URL_IMAGES}3.png`,
        `${URL_IMAGES}2.png`,
        `${URL_IMAGES}adornos.png`
    ];
    const [isLoading, setIsLoading] = useState(true);
    const loadedCountRef = useRef(0); // contador que no dispara renders
    const [name, setName] = useState("");
    const [totalConfirmed, setTotalConfirmed] = useState(1);
    const [openConfirm, setOpenConfirm] = useState(false);

    const handleSend = async () => {
            const createParam: CreateGuestParameters ={
            fullName: name,
            rsvpStatus: 2,
            totalConfirmed: totalConfirmed,
            totalAssigned: totalConfirmed,
            invitationId: 2,
            }
            const response = await CreateAndConfirm(createParam);
           if(response){
            setName("");
            setTotalConfirmed(1);
                setOpenConfirm(true);
            }
        };
  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // si falla, igual contamos
    });
    document.title = "Revelación de género";
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
          <div style={{backgroundColor:"#fefef7",maxWidth: '100%',overflowY:"auto",}}>
              <div  style={{backgroundImage:`url('${URL_IMAGES}4.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                
                <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                     <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"left"}  typography={"h1"} className={`${MAIN_TYPO}`} sx={{color:COLOR_PRIMARY,zIndex: 2,position: "relative"}}>¿Boy</Typography>

                     </Fade>
                     <div  style={{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,}}>
                         <Fade direction="right" triggerOnce={true}>
                               <img src={`${URL_IMAGES}22.png`}  style={{width: "100vw"}}/>
                         </Fade>
                     
                     </div>
                     <Fade direction="left" triggerOnce={true}>
                         <Typography  textAlign={"center"}  typography={"h2"} className={`great-vibes-regular`}  sx={{color:COLOR_PRIMARY}}>or</Typography>
                     </Fade>
                    <div  style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"}}>
                         <Fade direction="left" triggerOnce={true} >
                               <img src={`${URL_IMAGES}23.png`}  style={{width: "100vw"}} />
                         </Fade>
                     
                     </div>
                     <Fade direction="left" triggerOnce={true} >
                        <Typography  textAlign={"right"}  typography={"h1"} className={`${MAIN_TYPO}`}  sx={{color:COLOR_PRIMARY}}>Girl?</Typography>

                     </Fade>
                      <Fade direction="up" triggerOnce={true} >
                        <Typography style={{paddingTop:"10vh"}}  textAlign={"center"}  typography={"h4"} sx={{color:COLOR_PRIMARY, fontFamily: `'DM Serif Display', serif`,}}>Baby Rodríguez Lerma</Typography>

                     </Fade>
                </div>
                
               </div>
               <div  style={{backgroundImage:`url('${URL_IMAGES}3.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover", }} >
                
                     <Grid container spacing={2} justifyContent="center" padding={2}>
                       
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY  }}>
                             Pronto habrá una nueva sonrisa iluminando nuestras vidas
                            </Typography>
                         </Fade>
                       
              

                   
                        </Grid>
                         <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' ,color:COLOR_PRIMARY}}>
                                    Queremos invitarlos para que nos acompañen a descrubir el género de nuestro bebé
                                </Typography>
                            </Fade>
                    </Grid>
                    
                     <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2}>
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        sx={{
                            fontFamily: `'DM Serif Display', serif`,
                            color: COLOR_PRIMARY,
                            fontSize: '50px',
                        }}
                        >
                        31 <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_PRIMARY }}>de</Box> Agosto
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                        marginTop={1}
                        sx={{
                            fontFamily: `'DM Serif Display', serif`,
                            color: COLOR_PRIMARY,
                            fontSize: '50px',
                        }}
                        >
                        <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_PRIMARY }}>del</Box> 2025
                        </Typography>
                        </Fade>
                    </Grid>

                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY }} >
                        <b>5 PM</b> a <b>9 PM</b>
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} padding={2}  >
                          <Fade direction="up"  triggerOnce={true}>
                    <EventCardSimple bodyTypo={BODY_TYPO} textColor={COLOR_PRIMARY} eventName="Lugar:" mainTypo="dm-serif-display-regular" locationName="Eventos Nube Rosa" address="Blvd. De Los Puentes Manzana 5 L32, Haciendas Real del Catorce, El Real del Catorce, Son." color={"#dfad87"} href={"https://maps.app.goo.gl/ZBi8PQ5YT2g3x4hS6"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                     </Fade>
                     </Grid>
                    
                    
                    </Grid>
               </div>
                <div  style={{backgroundImage:`url('${URL_IMAGES}2.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover",}} >
              <Grid container spacing={2} justifyContent="center" padding={2}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                     <Fade direction="up"  triggerOnce={true}>
                        <Adornment image={`${URL_IMAGES}adornos.png`} width={"350"}/>
                     </Fade>
                        
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Grid container spacing={2} justifyContent="center">
                        
                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center"  padding={2}>
                             <Fade direction="up"  triggerOnce={true}>
                                <Typography
                                    className={BODY_TYPO}
                                    sx={{ fontSize: '1rem', color:COLOR_SECONDARY }}
                                    >
                                    Si crees que soy niña vestir de color rosa y traer toallitas 
                                </Typography>
                             </Fade>
                        
                        </Grid>

                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center"  padding={2}>
                            <Fade direction="up"  triggerOnce={true}>
                                <Typography
                                    className={BODY_TYPO}
                                    sx={{ fontSize: '1rem', color:COLOR_THIRD }}
                                    >
                                    Si crees que soy niño vestir de color azul y traer pañales(e3)
                                </Typography>
                             </Fade>
                        
                         
                        </Grid>
                    </Grid>
                </Grid>
               
                 <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                        <Grid container spacing={2} padding={4} >
                             <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                    <Fade direction="up"  triggerOnce={true} >
                             <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_PRIMARY  }}>
                            Por favor ayúdanos confirmando tu asistencia.
                            </Typography>
                    </Fade>
                       
                        
                </Grid>
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                       
                                     <TextField
                            required
                            id="name"
                            label="Nombre"
                            sx={{
                                minWidth:300,
                                 '& label.Mui-focused': {
                                color: COLOR_PRIMARY, // Borde en focus
                                },
                                '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor:COLOR_PRIMARY, // Borde en focus
                                },
                                },
                                '& .MuiInputLabel-root': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '0 4px',
                                    borderRadius: '4px',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                },
                            }}
                            value={name}
                            onChange={(e) => setName(
                                 e.target.value
                                )}
                            
                            />
                        </Grid>
         
                           <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} justifyContent={"center"}>
                            <FormControl >
                              
                                        <InputLabel sx={{color:"#757575",
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '0 4px',
                                            borderRadius: '4px',
                                        }} id="demo-simple-select-label">Número de asistentes</InputLabel>

                                    
                                
                                    <Select<number>
                                        label="Número de asistentes"
                                        labelId="guests"
                                        id="guests"
                                        value={totalConfirmed}
                                        onChange={(e) => setTotalConfirmed(
                                            Number(e.target.value)
                                        )}
                                        sx={{
                                            minWidth: 300,
                                            color: COLOR_PRIMARY,
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: COLOR_PRIMARY, // borde normal
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: COLOR_PRIMARY,
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor:COLOR_PRIMARY,
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: COLOR_PRIMARY,
                                            },
                                        }}
                                    >
                                        {Array.from({ length: numnerOfGuests ? 6 : 0}, (_, index) => (
                                            <MenuItem key={index + 1} value={index + 1}
                                                sx={{
                                                    '&.Mui-selected': {
                                                        color: '#fff',
                                                        backgroundColor: `${COLOR_PRIMARY}!important`,
                                                    },
                                                    '&.Mui-selected:hover': {
                                                        backgroundColor: COLOR_PRIMARY,
                                                    },
                                                    '&:hover': {
                                                        backgroundColor: COLOR_PRIMARY,
                                                        color: "white",
                                                    },
                                                }}
                                            >
                                                {index + 1}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    </FormControl>
                            </Grid>
                            
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <CustomButton bgColor={COLOR_PRIMARY} color={'#FFFFFF'} label={'Confirmar'} onClick={handleSend}></CustomButton>
                        </Grid>
                        </Grid>
                                          
                </Box>
            </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" >
                         <Fade direction="up"  triggerOnce={true}>
                            <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '50px', fontWeight: 'bold', color:COLOR_PRIMARY }}
                        >
                            ¡Te esperamos!
                        </Typography>
                         </Fade>
                        
                </Grid>
              </Grid>
              </div>
               <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
               <Dialog
               sx={{
                paddingTop:0
               }}
                    open={openConfirm}
                    onClose={() => {
                        setOpenConfirm(false)
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >            
                    <DialogContent >
                    
                    <Box display={"flex"} justifyContent={"center"}>
                        <Typography variant="body1" className={BODY_TYPO}>Confirmación enviada</Typography>
                    </Box>
                    </DialogContent>        
                </Dialog>
          </div>
    )
}
export default GenderReveal;
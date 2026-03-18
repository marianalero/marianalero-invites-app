import { useEffect, useMemo,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList2 from "../../components/Gifts/GiftList2";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";
import Cover from "../../components/Cover/CoverImage/Cover";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { GiftListProps } from "../../models/component/giftList";
import { Fade } from "react-awesome-reveal";
const WeddingFlorMariaCruzRoberto  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
   
    const [open, setOpen] = useState(false);
        
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
            
         };
    
        useEffect(() => {
           handleClickOpen()
        }, []);
    useEffect(() => {
        document.title = "Boda Flor de María & Cruz Roberto";
    }, []);
    const COLOR_PRIMARY = "#6B5E53";
    const COLOR_SECONDARY = "#4A4038";
    const COLOR_TREE = "#dbbf97"
    const COLOR_FOUR = "#7A826B";
    const MAIN_TYPO = "southland";
    const SECOND_TYPO = "noto-serif-display-400";
    const BODY_TYPO = "montserrat-400";
    const COLOR_BG ="rgb(250, 247, 242)";
    const URL_IMAGES = `${URL_REPO}boda/boda-flor-de-maria-cruz-roberto/`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2026, 9, 2, 14, 0, 0),
                locationName: "Parroquia de Nuestra Señora del Rosario de Fátima",
                address: "Calle Guadalupe Victoria, San Benito, Hermosillo, Son.",
                size: 12,
                color: COLOR_TREE,
                icon: `${URL_IMAGES}anillos3.png`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/Vkx1a7WxxyXkmRT88",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px"
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 9, 2, 18, 0, 0),
                locationName: "Jardín Ferraris",
                address: "Blvd. Agustín G. del Campo, Quinta Emilia, Hermosillo, Son.",
                size: 12,
                color: COLOR_TREE,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/8sRHdVuNxpgxDM4G6",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_TREE,fontSize:"50px"

            }
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51953337",
                icon: `${URL_IMAGES}liverpool.svg`,
            }
        ],
        mainTypo: SECOND_TYPO,
        bodyTypo: BODY_TYPO,
        textColor: "white", 
        fontSize: "1.5rem",
        envelopeFontSize: "1.5rem",
        bgColor: "#FAF7F2", 
        cardColor: COLOR_FOUR,
        showEnvelope:true,
        envelopePhrase:"Tendremos un buzón de sobres el día del evento, por si deseas hacernos un regalo en efectivo.",
        secondPhrase:"O bien, si deseas puedes hacer una transferencia a nuestra cuenta bancaria:",
        bankIconEnd: `${URL_IMAGES}10.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "CLABE",
                    number: "012 760 014973963174",
                    },
                {
                    numberType: "Cuenta",
                    number: "149 739 6317",
                }
                ],
                bank: "BBVA",
                name: "Flor de María Barceló Galaz",
                textColor: COLOR_PRIMARY,
                bodyTypo: BODY_TYPO,
                bgColor: "#FAF7F2",
                mainTypo: SECOND_TYPO,
                fontSize: "1.5rem",
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: SECOND_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:"Formal",
        fontSize:"1.5rem",

    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    
    const qoute:QouteProps ={   
            qoute: "Elegirnos cada día nos trajo hasta aquí, y hoy decidimos seguir caminando juntos con un ‘sí’ ante Dios para toda la vida.",
            bodyTypo: SECOND_TYPO,
            italic:true,
            color: COLOR_SECONDARY,
            addoormentLine:true,
            bgColor: "rgb(242, 237, 221,.5)",
    }
  
    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log('Confirmación recibida:', confirmText, phoneNumber, name, totalConfirmed);
         if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+5200000?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20de%20Flor%20de%20María%20y%20Cruz%20Roberto%20para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            window.open(`https://wa.me/+520000?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20de%20Flor%20de%20María%20y%20Cruz%20Roberto.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
      }
    return (
        <div style={{backgroundColor:"#F2EADD",maxWidth: '100%',overflowY:"auto",color:"#2B2B2B"}}>

            <Cover 
                ourWeddingStart={true}
                weddingDate="02.10.26"
                bgImage={`${URL_IMAGES}portada.png`}
                brideName="Flor de María" 
                symbolr={"&"} 
                groomName={"Cruz Roberto"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="5rem"
                bgPositionY="55%"
                >
            </Cover>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="50%" height="100vh" bgImage={`${URL_IMAGES}enmedio1.png`} bgPositionY="20%"></ImageMiddle>
         
            <Grid container spacing={2}  bgcolor={"#F2EADD"} display={"flex"} alignItems={"center"} justifyContent="center" >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent="center" >
                    <Grid container spacing={2} padding={4} justifyContent={"center"} >
 <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" >
                         <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con la bendición de Dios, y de nuestros padres</Typography>
                  </Fade>
                  </Grid>
                  
                 <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_SECONDARY, fontSize: "1rem"}} fontWeight={400} variant="h4" textAlign={"center"} className={SECOND_TYPO}>Emperatriz Galaz Valencia</Typography>
                                <Typography sx={{color:COLOR_SECONDARY, fontSize: "1rem"}} fontWeight={400} variant="h4" textAlign={"center"} className={SECOND_TYPO}>Jaime Barceló Durazo</Typography>
                            </Fade >
                        </Grid>	
                       
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:COLOR_SECONDARY, fontSize: "1rem"}} fontWeight={400} variant="h4" textAlign={"center"}className={SECOND_TYPO} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:COLOR_SECONDARY, fontSize: "1rem"}} fontWeight={400} variant="h4" textAlign={"center"} className={SECOND_TYPO} >María Azucena Barceló Durazo</Typography>
                            <Typography sx={{color:COLOR_SECONDARY, fontSize: "1rem"}} fontWeight={400} variant="h4" textAlign={"center"} className={SECOND_TYPO}>Cruz Montaño Durazo</Typography>
                            </Fade>
                        </Grid>	
                        
                </Grid>
                </Grid>	
            </Grid>
                    
                
         
            
            <CountDown 
                eventDate={new Date(2026,9,2)}
                bgImage={`${URL_IMAGES}contador.png`}
                typoHeader={SECOND_TYPO}
                typoCountdown={BODY_TYPO} 
                fontSize="2rem"

                >  
            </CountDown>
            <Grid container spacing={2} padding={4} bgcolor={"rgb(198, 180, 156,.5)"} >
            {eventCards
                .map((item,index) => (          
                //    <EventCard key={index} {...item}></EventCard>
                 <Grid key={index} size={{xs:12,sm:12,md:6,lg:6}} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={4} >   
                <Box
                    sx={{
                        backgroundColor: "#FAF7F2",
                        borderRadius: "16px",
                        p: { xs: 3, md: 4 },
                        textAlign: "center",
                        maxWidth: "420px",
                        width: "100%",
                        boxShadow: "0px 10px 25px rgba(107, 94, 83, 0.12)",
                        border: "1px solid rgba(107, 94, 83, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 18px 40px rgba(107, 94, 83, 0.18)",
                        },
                    }}
                    >
                    {/* Título */}
                    <Typography
                        className={SECOND_TYPO}
                        sx={{
                        fontWeight: 700,
                        color: "#6B5E53",
                        fontSize: "1.5rem",
                        
                        mb: 1,
                        }}
                    >
                        {item.eventName}
                    </Typography>

                    {/* Hora */}
                    <Typography
                        className={BODY_TYPO}
                        sx={{
                        
                        color: "#2B2B2B",
                        fontSize: "16px",
                        mb: 1,
                        }}
                    >
                        {item.date?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>

                    {/* Lugar */}
                    <Typography
                        className={SECOND_TYPO}
                        sx={{
                        
                        fontWeight: 600,
                        color: "#2B2B2B",
                        fontSize: "1rem",
                        mb: 1,
                        }}
                    >
                        {item.locationName}
                    </Typography>

                    {/* Dirección */}
                    <Typography
                        className={BODY_TYPO}
                        sx={{
            
                        color: "#8C8175",
                       
                        mb: 2,
                        }}
                    >
                        {item.address}
                    </Typography>

                    {/* Línea */}
                    <Box
                        sx={{
                        height: "1px",
                        backgroundColor: "rgba(107, 94, 83, 0.2)",
                        my: 2,
                        }}
                    />

                      <CustomButton href={item.href} bgColor={item.colorButton} color={'white'} label={"Ver Ubicación"} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />
                    </Box>
                    </Grid>
                ))
            }
            
            </Grid>
             

            <ImageMiddle bgPosition="40%" height="100vh" bgImage={`${URL_IMAGES}enmedio2.png`} bgPositionY="25%"></ImageMiddle>
            <GiftList2 {...giftListData} ></GiftList2>
           
           <Grid container spacing={2} padding={2} display={"flex"} alignItems={"center"} justifyContent="center" bgcolor={"rgb(214, 199, 176)"} >
                <Grid size={{xs:12,sm:12,md:6,lg:6}} display={"flex"} alignItems={"center"} justifyContent="center">
                    <Box
                    sx={{
                        backgroundColor: "#FAF7F2",
                        borderRadius: "16px",
                        p: { xs: 3, md: 4 },
                        textAlign: "center",
                        maxWidth: "420px",
                        width: "100%",
                        boxShadow: "0px 10px 25px rgba(107, 94, 83, 0.12)",
                        border: "1px solid rgba(107, 94, 83, 0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 18px 40px rgba(107, 94, 83, 0.18)",
                        },
                    }}
                    display={"flex"}
                    alignItems="center"
                    justifyContent="center"
                    >
                        <RSVPExcel
                        textColor={"black"}
                        qrActive={false}
                        mainTypo={SECOND_TYPO}
                        bodyTypo={BODY_TYPO}
                        count={invitedGuests}
                        dateLine={new Date(2026, 8, 1)}
                        color={COLOR_PRIMARY}
                        colorButton={COLOR_PRIMARY}
                        invitationId={0}
                        bgColor={"#FAF7F2"}
                        confirmed={handleConfirm}
                        fontSize="1.5rem"
                        />
                </Box>
                </Grid>
            </Grid>
            <DressCode {...dresscode}></DressCode>

                  <Grid container spacing={2} padding={4} >
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                        <Box display={"flex"} justifyContent={"center"} marginBottom={2} width={"50%"} height={".5px"} bgcolor={COLOR_PRIMARY}></Box>
                    </Grid>
                    </Grid>
                              <WithoutKids {...withOutKids} /> 
            <div style={{height:100}}></div>
         
            <FooterInvites bgColor="rgb(249, 249, 249)" color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"}>
                             <Typography variant="h5" className={SECOND_TYPO} sx={{color:COLOR_TREE}}>Bienvenidos</Typography>
                            </Box>
                             <Box display={"flex"} justifyContent={"center"}>
                            <CustomButton borderColor={COLOR_PRIMARY} bgColor={"#ffffff"} color={COLOR_PRIMARY} label={'Entrar'} onClick={handleClose}></CustomButton>
                            </Box>
                             
                            
                        
                         </DialogContent>
                         <DialogActions>
                         
                        
                         </DialogActions>
                     </Dialog>   
        </div>
    )
}
export default WeddingFlorMariaCruzRoberto;
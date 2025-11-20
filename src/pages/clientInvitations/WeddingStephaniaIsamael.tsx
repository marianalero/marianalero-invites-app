import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import WithoutKids, { WithoutKidsProps } from "../../components/WithOutKids/WithoutKids";
import Cover from "../../components/Cover/CoverImage/Cover";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Grid from '@mui/material/Grid2';
import EventCardImage from "../../components/EventCard/EventCardImage";
import Gallery from "../../components/Gallery/Gallert";
import FooterInvites from "../../components/Footer/FooterInvites";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";
import { URL_REPO } from "../../config";
import { Dialog, DialogContent, Box, Typography, DialogActions, Paper } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import Adornment from "../../components/Adornment/Adornment";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPForm from "../../components/RSVP/RSVPForm";
import { Fade } from "react-awesome-reveal";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
const WeddingStephaniaIsamael  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const INVITATION_ID = 100;
    const [open, setOpen] = useState(false);
        const musicRef = useRef<MusicFabPlayerHandle>(null);
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
    useEffect(() => {
        document.title = "Boda Stephania & Ismael";
    }, []);
    const COLOR_PRIMARY = "#354d3f";
    const COLOR_SECONDARY = "#738b71";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "roboto-400 to-upper";
    const SECON_MAIN_TYPO = "noto-serif-display-400";
    const COLOR_BG ="rgb(218,228,217,.4)";
    const URL_IMAGES = `${URL_REPO}boda/boda-stephania-ismael/`;
    const URL_SONG = `${URL_REPO}canciones/Eagles-LoveWillKeepUsAlive.mp3`;
   
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2026, 2, 21, 17, 30, 0),
                locationName: "Arquidiócesis de Hermosillo Templo Expiatorio",
                address: " Gral. Antonio Villarreal 27, Country Club, Hermosillo, Sonora.",
                size: 6,
                color: COLOR_SECONDARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/6nxF7g6U5hUA8Z9q6",
                colorButton: COLOR_PRIMARY,
                bgColor:COLOR_BG,
                colorIcon: COLOR_SECONDARY,
                image: `${URL_IMAGES}iglesia.jpg`,
                fontSize:"35px"
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 2, 21, 19, 0, 0),
                locationName: "Quinta Julieta",
                address: "Real del Asis, Real del Catorce, Hermosillo, Sonora. (Lote 22 Manzana 6 – para informar en la entrada de caseta).",
                size: 6,
                color: COLOR_SECONDARY,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/3Fx7Fk5jbNHn9BNE7",
                colorButton: COLOR_PRIMARY,
                image: `${URL_IMAGES}recepcion.jpg`,
                colorIcon: COLOR_SECONDARY,
                fontSize:"40px",
                bgColor:COLOR_BG,
            },
    ];
    
    const giftListData: GiftListProps = {
        mainPhrase:"El regalo más valioso es tu presencia en nuestro gran día, pero si deseas acompañarnos también con un detalle, hemos preparado estas opciones con mucho cariño:",
        items: [
            {
                icon: `${URL_IMAGES}6.svg`,
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51729428",
            },
        ],
        fontSize:"3rem",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_SECONDARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja de sobres  si desean hacer un regalo en efectivo.",
        
        bankIconEnd: `${URL_IMAGES}iconos/10.svg`,
        bankDetails: [
            {
                numbers :[ 
                    {
                    numberType: "No. de tarjeta",
                    number: "4152 3137 9597 1931",
                    },
                    {
                    numberType: "Cuenta",
                    number: "118 014 6129",
                    },
                    {
                    numberType: "CLABE",
                    number: " 012 760 01180146129 1",
                    },
                ],
                bank: "BBVA",
                name: "Stephania Galeana Valenzuela",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_SECONDARY,
                
            },
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_SECONDARY,
        type:2,
        title:"Formal",
        description:"Mujeres: Vestido largo. Hombres: Traje y corbata.",
       
         

    }
     const withOutKids:WithoutKidsProps = {
        hideTitle:true,
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        `${URL_IMAGES}galeria1.jpg`,
    ];
    const qoute:QouteProps ={
            qoute: "Un sí lleno de amor, una promesa para siempre y el deseo de celebrarlo contigo.",
            bodyTypo: BODY_TYPO,
            addormentEnd:`${URL_IMAGES}1.svg`
    }
    const timelineData: CustomizedTimelineProps = {
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                colorPrimary: "rgb(218,228,217)",
                colorTitle:"rgb(218,228,217)",
                colorBody: "rgb(218,228,217)",
                fontSize:"50px",
                bgColor:COLOR_PRIMARY, 
                events: [
                    {
                        eventName: "Ceremonia religiosa ",
                        date: new Date(2025, 10, 16, 17, 30, 0),
                        icon: `${URL_IMAGES}iconos/2.svg`,
                    },
                    {
                        eventName: "Coctel",
                        date: new Date(2025, 10, 16, 19, 0, 0),
                        icon: `${URL_IMAGES}iconos/4.svg`,
                    },
                    {
                        eventName: "Cena",
                        date: new Date(2025, 10, 16, 20, 0, 0),
                        icon: `${URL_IMAGES}iconos/5.svg`,
                    },
                    {
                        eventName: "Fiesta",
                        date: new Date(2025, 10, 16, 21, 0, 0),
                        icon: `${URL_IMAGES}iconos/7.svg`,
                    },
                    {
                        eventName: "Fin del evento",
                        date: new Date(2025, 10, 16, 2, 0, 0),
                        icon: `${URL_IMAGES}iconos/9.svg`,
                    },
                ],
    };

    const sponsors:PairSponsors[] = [
                {
                    sponsorOne: { name: "Elsy Barrios y Carlos Valenzuela" },
                  
                },
                {
                    sponsorOne: { name: "Lizbeth Martínez y Ricardo Nava" },
       
                }
            ];
    return (
        <div style={{backgroundColor:"#f0f0f0",maxWidth: '100%',overflowY:"auto",}}>
            <MusicFabPlayer ref={musicRef}  src={URL_SONG} backgroundColor={COLOR_SECONDARY}/>
            <Cover 
                ourWeddingStart={false}
                weddingDate=""
                bgImage={`${URL_IMAGES}portada.jpg`}
                brideName="Stephania" 
                symbolr={"&"} 
                groomName={"Ismael"} 
                className={MAIN_TYPO}
                bgSize="cover"
                overlay={true}
                fontSize="80px"
                bgPosition="40%"

                >
            </Cover>
            <Grid container spacing={2} justifyContent="center" padding={2}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} sx={{ mt: 4 }} >
                    <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={BODY_TYPO}
                        >
                            Tenemos el honor de invitarlos a acompañarnos en la celebración de nuestra unión en matrimonio y compartir juntos este día tan especial
                        </Typography>
                        </Fade>
                    </Grid>

            <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2} >
                         <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        className={MAIN_TYPO}
                        sx={{
                      
                            color: COLOR_SECONDARY,
                            fontSize: '60px',
                            lineHeight:1,
                        }}
                        >
                        21 <Box component="span"  className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY, fontSize:"40px" }}>de</Box> Marzo
                        </Typography>
                        </Fade>
                          <Fade direction="up"  triggerOnce={true} >
                        <Typography
                         className={MAIN_TYPO}
                        marginTop={2}
                        sx={{
                    
                            color: COLOR_SECONDARY,
                            fontSize: '60px',
                        }}
                        >
                        <Box component="span" className={SECON_MAIN_TYPO} sx={{  color: COLOR_SECONDARY, fontSize:"40px" }}>del</Box> 2026
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" paddingY={2}  >
                    <Fade direction="up"  triggerOnce={true}>
                        <Typography
                        variant="h6"
                        className={SECON_MAIN_TYPO}
                        style={{color:COLOR_PRIMARY}}
                        >
                        Hermosillo, Sonora.
                        </Typography>
                        </Fade>
                    </Grid>
             </Grid>
              <ImageMiddle bgPosition="50%" height="50vh" bgImage={`${URL_IMAGES}enmedio.jpg`}></ImageMiddle>
             <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgPosition="40%" height="80vh" bgImage={`${URL_IMAGES}enmedio2.jpg`}></ImageMiddle>
         
           <Grid container spacing={2} padding={4} justifyContent={"center"} >
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" >
                         <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con la bendición de Dios y el amor de nuestros padres</Typography>
                  </Fade>
                  </Grid>
                  {/* <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                           <Adornment image={`${URL_IMAGES}1.svg`} width={"250px"} />
                </Fade >
                </Grid>	 */}
                  <Grid size={{xs:12,sm:12,md:5,lg:5}} >
                  <Fade direction="up" >
                     <Typography variant="h4" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Roxana Valenzuela Loreto</Typography>
                    <Typography variant="h4" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Manuel Salvador Galeana Núñez(&#8224;)</Typography>
                </Fade>
                </Grid>
                <Grid size={{xs:12,sm:12,md:2,lg:2}} alignItems={"center"} display="flex" justifyContent="center">
                  <Fade direction="up" >
                    <Typography variant="h4" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}> & </Typography>
                </Fade>
                </Grid>
                <Grid size={{xs:12,sm:12,md:5,lg:5}} >
                  <Fade direction="up" >
                     <Typography variant="h4" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Laura Angelica Enciso Echeveste</Typography>
                    <Typography variant="h4" align="center" sx={{color:COLOR_PRIMARY}} className={MAIN_TYPO}>Ismael Martínez Pineda</Typography>
                </Fade>
                </Grid>
                
            </Grid> 
            {/* <Introduction
                brideFather="Manuel Salvador Galeana Núñez(&#8224;)"
                brideMother="Roxana Valenzuela Loreto "
                groomMother="Laura Angelica Enciso Echeveste"
                groomFather="Ismael Martínez Pineda"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment={`${URL_IMAGES}1.svg`}
                amperson="&"
                fontSize="40px"
                
            >
            </Introduction> */}
            <CountDown 
                eventDate={new Date(2026,2,21)}
                bgImage={`${URL_IMAGES}contador.jpg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                title="Nos casamos en:"
                >  
            </CountDown>
            <WeddingSponsor 
                        headerFontSize="45px"
                            sponsors={sponsors}
                            mainTypo={MAIN_TYPO}
                            bodyTypo={BODY_TYPO}
                            height="50vh"
                            color={COLOR_PRIMARY}
                            addorment={`${URL_IMAGES}1.svg`}
                            bgColor={COLOR_BG}
                            
                        >
                        </WeddingSponsor>
            <Grid container spacing={2} padding={4} >
            {eventCards
                .map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>
            <ImageMiddle bgPosition="60%" height="100vh" bgImage={`${URL_IMAGES}enmedio3.jpg`}></ImageMiddle>
            <GiftList {...giftListData} ></GiftList>
            
            <RSVPForm 
            textColor={COLOR_SECONDARY}
                colorButton={COLOR_PRIMARY}     
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2026,0,21)}
                color={COLOR_SECONDARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}          
                bgColor={COLOR_BG}
                
            >
                
            </RSVPForm>
          
            <DressCode {...dresscode}></DressCode>
            
                   <Adornment image={`${URL_IMAGES}1.svg`} width={"250px"} />
                              <WithoutKids {...withOutKids} /> 
                                <Grid container spacing={2} padding={2} display="flex" justifyContent="center">
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Fade direction="up"  triggerOnce={true}>
                <Paper sx={{ padding:2, backgroundColor: COLOR_BG, mb: 4 }}>
                {/* Título */}
                <Grid container justifyContent="center" textAlign="center" mb={2}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Typography variant="h4" sx={{ color: COLOR_PRIMARY, fontSize: 40 }} className={MAIN_TYPO}>
                    Hospedaje
                    </Typography>
                    <Typography sx={{ fontSize: 14, mt: 1 }} className={BODY_TYPO}>
                    Queremos que disfruten este día sin preocupaciones. Si necesitan
                    hospedaje, les sugerimos:
                    </Typography>
                </Grid>
                </Grid>

                {/* Tarjeta */}
                <Grid container justifyContent="center">
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <Box sx={{ p: 3, backgroundColor: "white", borderRadius:1 }} gap={1}>
                        
                    <Typography variant="h6" align="center" className={SECON_MAIN_TYPO} sx={{ mb: 1, color:COLOR_PRIMARY }}>
                        Hotel Fiesta Americana
                    </Typography>
                        <img src={`${URL_IMAGES}hotel.jpg`} style={{width: "100%", borderRadius:2}} />
                    <Typography sx={{ mt: 1 }} className={BODY_TYPO} align="center">Reservaciones:</Typography>

                    <Typography sx={{ mt: 1 }}  className={BODY_TYPO}>Teléfono: <br /> 800 504 5000</Typography>

                    <Typography  sx={{ mt: 1 }} className={BODY_TYPO}>Contacto:  <br />Jesus Quijada</Typography>

                    <Typography sx={{ mt: 1 }} className={BODY_TYPO}>
                        Correo:
                        <br />
                       ventas2fahe@posadas.com
        
                    </Typography>
                     <Typography sx={{ mb: 1 ,mt: 1}} className={BODY_TYPO}>
                        Celular:
                        <br />
                      6622004751
            
                    </Typography>

                    <Box display="flex" justifyContent="center">
                    <CustomButton href={""} bgColor={COLOR_SECONDARY} color={'white'} label={'Ver ubicación'} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />

                    </Box>

                    </Box>
                </Grid>
                </Grid>

                {/* Nota final */}
                <Grid container justifyContent="center" textAlign="center" mt={3}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Typography sx={{ fontSize: 15 }} className={BODY_TYPO}>
                    Mencionando que tienen tarifa preferencial por la boda de Stephania e Ismael
                    </Typography>
                </Grid>
                </Grid>
            </Paper>
            </Fade>
            </Grid>
            </Grid>
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor="rgb(249, 249, 249)" color={COLOR_PRIMARY}></FooterInvites>
             <Dialog
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="alert-dialog-title"
                         aria-describedby="alert-dialog-description"
                     >
                        
                         <DialogContent >
             
                            <Box display={"flex"} justifyContent={"center"}>
                             <Typography variant="h2" className={MAIN_TYPO} sx={{color:COLOR_SECONDARY}}>Bienvenidos</Typography>
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
export default WeddingStephaniaIsamael;
import { useEffect, useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import { useSearchParams } from "react-router-dom";
import Adornment from "../../components/Adornment/Adornment";

import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import { URL_REPO } from "../../config";

import Grid from '@mui/material/Grid2';
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import { Typography } from "@mui/material";

const CivilWeddingKarolMario  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? 1 : num;
    }, [searchParams]);
    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log(name,phoneNumber,confirmText,totalConfirmed)
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526622816125?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20civil%20de%20Karol Denisse y Mario Anwar para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            window.open(`https://wa.me/+526622816125?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20civil%20de%20Karol Denisse y Mario Anwar.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
    }
    const COLOR_PRIMARY = "#899c35";
    const MAIN_TYPO = "great-vibes-regular";
    // const MAIN_TYPO_TWO = "noto-serif-display-400";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}boda/boda-karol-mario/`;
  
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Civil",
                date: new Date(2025, 10, 15, 16, 0, 0),
                locationName: "Ubicación:",
                address: "Blvd. Real de catorce, entre Real de Asis y Real de Ures, Manzana 06, Lote 28.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}/iconos-civil/13.svg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/TQifhqQFJZQAtfuR8?g_st=ipc",
                colorButton: COLOR_PRIMARY,
                fontSize:"35px"
            }
            
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "#E6EDCA", 
        fontSize:"35px",
        events: [
            {
                eventName: "Boda civil",
                date: new Date(2025, 9, 18,16,0,0),
                icon:  `${URL_IMAGES}/iconos-civil/14.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,17,0,0),
                icon: `${URL_IMAGES}/iconos-civil/15.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,19,0,0),
                icon:  `${URL_IMAGES}/iconos-civil/17.svg`,
            },
            {
                eventName: "After",
                date: new Date(2025, 9, 18,22,0,0),
                icon:  `${URL_IMAGES}/iconos-civil/18.svg`,
            },
            
            {
                eventName: "Fin del evento",
                date: new Date(2025, 9, 18,3,0,0),
                icon:  `${URL_IMAGES}/iconos-civil/19.svg`,
            },
        ],
    };
    const giftListData: GiftListProps = {
        fontSize:"35px",
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo o si lo prefieres puedes hacer transferencia bancaria a la siguiente cuenta:",
        // bankIconStart: `${URL_IMAGES}/iconos-civil/iconos-civil17.svg`,
        items: [
            {
                link: "https://www.amazon.com.mx/wedding/share/karolyanwar",
                icon: `${URL_IMAGES}amazon.svg`,
            }
        ],
        bankDetails: [
            {
                numbers: [
                    {
                        numberType: "Tarjeta",
                        number: "4152 3142 7791 3334",
                    }
                ],
                
                bank: "BBVA",
                name: "Karol Denisse Melendrez Vasquez",
                color: '#FFFFFF',
                bodyTypo: BODY_TYPO,
                bgColor: COLOR_PRIMARY,
                
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        fontSize:"35px",
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:3,
        title:"Vestimenta vaquera",
        image:`${URL_IMAGES}/iconos-civil/Dress-code-forma.png`,
    
    }


     useEffect(() => {
        document.title = "Boda Civil Karol Denisse & Mario Anwar";
      }, []);
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto"}}>
        
        <div  style={{backgroundImage: `url('${URL_IMAGES}contador.jpeg')`,backgroundPositionX: "50%",    minHeight: "60vh",backgroundSize:"cover",display:"grid",position: "relative" }} >
                        
                        <div style={{marginTop:"10vh" ,paddingLeft:"5vw", paddingRight:"5vw",position: "relative"}}>
                             
                            
                             <div  style={{position:"absolute",top:"15%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,width:"100vw"}}>
                                    <Fade direction="left" triggerOnce={true}>
                                 <Typography  textAlign={"center"}  typography={"h3"} className={MAIN_TYPO}  sx={{color:"white"}}>Karol  Denisse</Typography>
                                  <Typography  textAlign={"center"}  typography={"h3"} className={MAIN_TYPO}  sx={{color:"white"}}>Y</Typography>
                                   <Typography  textAlign={"center"}  typography={"h3"} className={MAIN_TYPO}  sx={{color:"white"}}>Mario Anwar</Typography>
                             </Fade>
                             </div>

                              <div  style={{position:"absolute",top:"80%",left:"50%",transform:"translate(-50%, -50%)",zIndex: 1,width:"100vw"}}>
                                    <Fade direction="left" triggerOnce={true}>
                                 <Typography  textAlign={"center"}  typography={"h3"} className={MAIN_TYPO}  sx={{color:"white"}}>16.11.25</Typography>
                                
                             </Fade>
                             </div>
                          
                            
                
                        </div>
                        
                       </div>
             
          <Grid container spacing={2} padding={4} justifyContent={"center"} >
 <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" >
                         <Typography  textAlign={"center"} className={`${BODY_TYPO}`} >Con gran ilusión,<br></br>
                            <Typography  variant="h4" align="center" sx={{color:COLOR_PRIMARY,textTransform:"none", marginTop:2}} className={MAIN_TYPO}>Karol  Denisse & MarioAnwar</Typography> <br></br>
                            tenemos el honor de invitarte a compartir con nosotros
                            el día en que uniremos nuestras vidas en matrimonio civil.
                        </Typography>
                  </Fade>
                  </Grid>
                  <Grid size={{xs:5,sm:5,md:5,lg:5}} >
                 
                </Grid>
                
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                            <Typography  textAlign={"center"} className={`${BODY_TYPO}`}>Agradecemos tu presencia en este momento tan especial.</Typography>
                            </Fade >
                </Grid>	
            </Grid>
        
         
           
            
             <CountDownSimple 
   
                fontSize="40px"
                eventDate={new Date(2025, 10, 16)}
                bgColor={"rgb(209,181,146,.2)"}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_PRIMARY}
                circleBgColor="white" >  
            </CountDownSimple>     
        

            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2025, 10, 8)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor= {"#E6EDCA"}
              confirmed={handleConfirm}
              fontSize={"45px"}
            />
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
            </Fade>
          
           
            <div style={{height:100}}></div>
         
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
        </div>
    )
}
export default CivilWeddingKarolMario;

import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";

import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import { Box, Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useMemo, useRef } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";

import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import Gallery from "../../components/Gallery/Gallert";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import RSVPForm from "../../components/RSVP/RSVPForm";
import GiftList2 from "../../components/Gifts/GiftList2";
import { GiftListProps } from "../../models/component/giftList";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
  
// 🎨 BACKGROUNDS
const BG_MAIN = "#F7F3EE";      // Perla
const BG_SECTION = "#FCF8F4";   // Marfil
const BG_ACCENT = "#6E1C23";    // Rojo quemado

// 🖋 TEXTOS
const TEXT_PRIMARY = "#6E1C23";
const TEXT_LIGHT = "#FFFFFF";

// ✨ ACENTOS
const GOLD = "#C8A24B";
const GOLD_LIGHT = "#E7CB80";

// 🎯 BOTONES
const BUTTON_PRIMARY = "#6E1C23";

const MAIN_TYPO = "alex-brush-regular";
const SECOND_TYPO ="cormorant-garamond-600"
const BODY_TYPO = "montserrat-400 ";
const URL_IMAGES = `${URL_REPO}xv/xv-michelle-centeno/`;
const galleryPhotos = [
       `${URL_IMAGES}image3.jpeg`,
       `${URL_IMAGES}image4.jpeg`,
]

const eventCards: EventCardProps[] = [
            {
                eventName: "Misa Religiosa",
                date: new Date(2026, 0, 31, 18, 30, 0),
                locationName: "Parroquia San Francisco de Asís",
                address: "Calle Guadalupe Victoria S/N, Balderrama, Hermosillo, Son..",
                size: 6,
                color: GOLD,
                icon: `${URL_IMAGES}cards/14.png`,
                mainTypo:`${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/cKEVUrVSYRt6bHXr8",
                fontSize:"45px",
                colorButton: BUTTON_PRIMARY,
                bgColor:BG_MAIN
                // classButtonName:"btn-gold"
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 0, 31, 21, 0, 0),
               
                locationName: "Salon de Eventos El Mezquite",
                address: "Lázaro Cárdenas, Arco Iris, Hermosillo, Son.",
                size: 6,
                color: GOLD,
                icon:`${URL_IMAGES}cards/13.png`,
                mainTypo:  `${SECOND_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"45px",
                href: "https://maps.app.goo.gl/KTTVoScwtosXccRF8",
                colorButton: BUTTON_PRIMARY,
              bgColor:BG_MAIN
                // classButtonName:"btn-gold"
            },
    ];
const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: TEXT_PRIMARY,
        colorTitle: TEXT_PRIMARY,
        colorBody: TEXT_PRIMARY, 
        bgColor: BG_SECTION, 
        fontSize:"38px",
        events: [
            {
                eventName: "Misa",
                date: new Date(2026, 0, 31, 18, 30, 0),
                icon:`${URL_IMAGES}iconos/17.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2026, 0, 31, 21, 0, 0),
                icon:`${URL_IMAGES}iconos/23.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2026,  0, 31,22,0,0),
                icon:`${URL_IMAGES}iconos/24.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2026,  0, 31,22,30,0),
                icon:`${URL_IMAGES}iconos/25.svg`,
            },
            // {
            //     eventName: "Fin del evento",
            //     date: new Date(2026,  1, 1,2,0,0),
            //     icon:`${URL_IMAGES}iconos/6.svg`,
            // },
        ],
    };
const giftListData: GiftListProps = {
        
        mainTypo: `${MAIN_TYPO} text-gold`,
        bodyTypo: BODY_TYPO,
        textColor: TEXT_LIGHT, 
        bgColor:BG_ACCENT, 
        showEnvelope:true,
        bankIconEnd:`${URL_IMAGES}cards/15.png`,
        cardColor: BG_ACCENT,
        envelopePhrase:"Tu presencia es el mejor regalo, pero si deseas hacerme un obsequio, tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
        // secondPhrase:"O bien puedes realizar transferencia o depósito a la siguiente cuenta:",
        // bankDetails: [
        //     {
        //         bank: "BBVA",
        //         name: "María Fernanda Ochoa Hernández",
        //         numbers : [
        //             {
        //                 numberType: "Tarjeta",
        //                 number: "4152313942041596"

        //             },
        //         ],
        //         color: "white",
        //         bodyTypo: BODY_TYPO,
        //         bgColor: TEXT_PRIMARY,
        //     },
        // ],
              
    };

    
const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:TEXT_PRIMARY,
        type:1,
        title:"Formal",
        omitColorsLabel:"Favor de no utilizar el color rojo y azul marino",
    }

const godparents= [
  "Ariadna Castro - Mauricio Gutiérrez",
  "Alegría Centeno L. - Eliseo Cadena V.",
  "Francisca Pacheco - Leonel Rivera",
  "Ariadna Salazar",
  "Lorenia Landeros",
  "Verónica Campoy - Germán Monge",
  "Rubi Cruz - Jonathan Cruz",
  "Ariadna Salazar"

];
const URL_SONG = `${URL_IMAGES}cancione.mp3`;   
const INVITATION_ID = 9;
const XVMichelle  = () => {
      const musicRef = useRef<MusicFabPlayerHandle>(null);
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);


    
    return (
        <div style={{backgroundColor:BG_MAIN,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={TEXT_PRIMARY}/>
            <CoverSimple 
                bgImage={`${URL_IMAGES}image0.jpeg`}
                bgImage2={`${URL_IMAGES}image0.jpeg`}
                  weddingDate="02.10.2026"
                 subtitle="Mis XV años"
                  brideName="Michelle Centeno"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={"white"}
                  hideText={false}
                  ourWeddingStart={true}
                overlay={true}
                
                  >
            </CoverSimple>
            <Grid container spacing={2} justifyContent="center"  bgcolor={BG_MAIN}>
              <Grid pb={0} pt={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}deco/4.png`} width={"150px"} />
              
                </Fade>
              </Grid>
            <Grid  size={{xs:12,sm:12,md:12,lg:12}} p={2}>
               <Fade direction="up" >
              <Typography align="center" variant="body1" className={`${SECOND_TYPO}`} sx={{ fontSize: "1rem" ,lineHeight:"1.5rem", fontStyle:"italic!important"}} >
               Gracias por estar aquí y acompañarme en uno de los días más importantes y especiales de mi vida.<br></br>
               Me hace muy feliz poder compartir mis XV años con las personas que quiero y que forman parte de mi vida.<br></br>
                Gracias por hacer este día todavía más bonito y por crear conmigo recuerdos que voy a guardar siempre en mi corazón. <br></br>
               Los quiero muchísimo.
              </Typography>
          
              </Fade>
            </Grid>
            <Grid pb={2} pt={0} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}deco/4.png`} width={"150px"} />
              
                </Fade>
              </Grid>
            </Grid>
              <ImageMiddle bgPosition="30%" height="70vh" bgImage={`${URL_IMAGES}image1.jpeg`}></ImageMiddle>
       <Grid
  container
  justifyContent="center"
  sx={{
    bgcolor: BG_ACCENT,
    color: TEXT_LIGHT,
    py: { xs: 8, md: 12 },
    px: 3,
  }}
>
  <Grid size={{ xs: 12, md: 8, lg: 6 }}>
    <Box textAlign="center">

      {/* Título */}
      <Fade direction="up">
        <>
          <Typography
            className={MAIN_TYPO}
            sx={{
              fontSize: { xs: "2.8rem", md: "3.5rem",lineHeight:1 },
              color: TEXT_LIGHT,
              mb: 1,
            }}
          >
            Mis Personas Favoritas
          </Typography>

          <Fade direction="up">
          <Box mt={4} mb={4}>
            <Adornment
              image={`${URL_IMAGES}deco/2.png`}
              width="180px"
            />
          </Box>
        </Fade>

          <Typography
            className={BODY_TYPO}
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 300,
              lineHeight: 1.5,
              maxWidth: 500,
              mx: "auto",
              mb: 6,
              color: TEXT_LIGHT,
            }}
          >
            ¡Gracias por hacer esto posible!
          </Typography>
        </>
      </Fade>

      {/* Padres */}
      <Fade direction="up">
        <>
          <Typography
            className={BODY_TYPO}
            sx={{
              color: GOLD,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              fontSize: ".9rem",
              mb: 4,
            }}
          >
            Mis Padres
          </Typography>

          <Typography
            className={MAIN_TYPO}
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              lineHeight: 1.4,
              color: TEXT_LIGHT,
            }}
          >
            Cristal Edhiam
            <br />
            Centeno Landeros
          </Typography>

          <Box
            sx={{
              width: 40,
              height: "1px",
              bgcolor: GOLD,
              mx: "auto",
              my: 4,
            }}
          />

          <Typography
            className={MAIN_TYPO}
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              lineHeight: 1.4,
              color: TEXT_LIGHT,
            }}
          >
            Alan Osvaldo
            <br />
            Camacho Campoy
          </Typography>
        </>
      </Fade>

      {/* Mensaje */}
      <Fade direction="up">
        <Typography
          className={BODY_TYPO}
          sx={{
            mt: 7,
            maxWidth: 520,
            mx: "auto",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: TEXT_LIGHT,
          }}
        >
          Tenemos el honor de invitarlos a celebrar conmigo
          <br />
          este día tan especial.
        </Typography>
      </Fade>

      {/* Adorno */}
      <Fade direction="up">
        <Box mt={6}>
          <Adornment
            image={`${URL_IMAGES}deco/2.png`}
            width="180px"
          />
        </Box>
      </Fade>

    </Box>
  </Grid>
</Grid>
            
            <CountDownSimple 
                eventDate={new Date(2026, 9, 2)}
                
                typoHeader={`${MAIN_TYPO} text-gold `}
                typoCountdown={BODY_TYPO} 
                primaryColor={GOLD} 
                secondarColor={GOLD_LIGHT}
                circleBgColor="transparent"
                bgImage={`url('${URL_IMAGES}fondo.png')`} 
                format="DD MMMM YYYY"
                >  
            </CountDownSimple>
            <Grid container spacing={2} justifyContent="center" paddingX={2} bgcolor={BG_SECTION}>
              {/* Texto inicial */}
              <Grid size={12} textAlign="center" sx={{ width: "100%", mt: 6 }}>
                 <Fade direction="up" >
                <Typography
                  className={MAIN_TYPO}
                  sx={{ fontSize: {
   xs:"2.8rem",
   md:"3.4rem"
},
color: TEXT_PRIMARY
}}
                >
                  Mis padrinos

                </Typography>
                </Fade>
                <Fade direction="up" >
                <Typography
                mt={2}
                  className={BODY_TYPO}
                  sx={{ maxWidth:420,mx:"auto",lineHeight:2,fontSize:"1rem",fontStyle: "italic!important" }}
                >
                  Queridos padrinos y madrinas, gracias por ser parte de este momento tan especial en mi vida.
                  Han sido fundamentales para que este sueño se hiciera realidad.
                  Los llevaré siempre en mi corazón.

                </Typography>
                </Fade>
              </Grid>
              <Grid>
                {
                            
                            godparents.map((item,index) => (
                                <Box
                                key={index}
                                sx={{
                                    
                                    px: 3,
                                    py: 1,
                                    textAlign: "center",
                                    
                                    overflow: "hidden",
                                    mb: 1,
                                }}
                                >
                                {/* Rama decorativa */}
                                
                                {/* Nombres */}
                                <Typography
                                className={SECOND_TYPO}
                                    sx={{
                                        
                                    lineHeight: 1.8,
                                    fontSize: "1.2rem",
                                    fontStyle:"italic!important"
                                    }}
                                >
                                    {item}
                                </Typography>

                                <Box
                                                        sx={{
                                                        width: 120,
                                                        height: 2,
                                                        background: GOLD_LIGHT,
                                                        mx: "auto",
                                                        mt: 2,
                                                        }}
                                                    />
                                </Box>
                            ))
                        }
              </Grid>
            
              
            </Grid>
            <div style={{backgroundColor:BG_ACCENT, minHeight: "100vh",paddingTop:"70px" }}>
            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
             </div>
            <ImageMiddle bgPosition="50%" height="70vh" bgImage={`${URL_IMAGES}image2.jpeg`}></ImageMiddle>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

             <Grid container spacing={2} justifyContent="center" padding={4}>
              <Grid size={{ xs: 12 }}>
                 <GiftList2 {...giftListData} ></GiftList2>
              </Grid>
              
             </Grid>
           
            <RSVPForm 
                textColor={TEXT_PRIMARY}
                    colorButton={TEXT_PRIMARY} 
                    bgColor={BG_SECTION} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    color={TEXT_PRIMARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                   classButtonName="btn-gold"
                   dateLine={new Date(2026,8,13)}
                >
                
            </RSVPForm>
            <DressCode {...dresscode}></DressCode>
            <Grid paddingBottom={2} >
                <Fade direction="up" >
                    <Adornment image={`${URL_IMAGES}deco/2.png`} width={"150px"} />
              
                </Fade>
              </Grid>
          
            <WithoutKids></WithoutKids>
            
            <div style={{height:100}}></div>
                       <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor={BG_MAIN} color={TEXT_PRIMARY}></FooterInvites>
              

        </div>
    )
}
export default XVMichelle;



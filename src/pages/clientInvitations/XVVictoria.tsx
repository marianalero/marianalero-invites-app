
import { Fade } from "react-awesome-reveal";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";

import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Grid from '@mui/material/Grid2';
import { Box,Typography } from "@mui/material";
import { URL_REPO } from "../../config";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../components/MusicFabPlayer/MusicFabPlayer";

import WithoutKids from "../../components/WithOutKids/WithoutKids";
import CoverSimple from "../../components/Cover/CoverSimple/CoverSimple";
import Adornment from "../../components/Adornment/Adornment";
import RSVPForm from "../../components/RSVP/RSVPForm";
import InvitationWelcomeModal from "../../components/InvitationWelcomeModal/InvitationWelcomeModal";
import { t } from "i18next";
import EventCard from "../../components/EventCard/EventCard";
import CountDownSimple from "../../components/CountDown/CountDownSimple/CountDownSimple";
import { LodgingAccordion } from "../../components/LodgingAccordion/LodgingAccordion";


const XVVictoria  = () => {
  const invitationConfig = {
  isMultilanguage: false, // o false
  language: "en" as "es" | "en" // idioma base
};
      const [searchParams] = useSearchParams();
        const invitedGuests: number = useMemo(() => {
            const num = Number(searchParams.get("number"));
            return isNaN(num) ? 1 : num;
        }, [searchParams]);
        const guestId: number | undefined = useMemo(() => {
                const num = Number(searchParams.get("id"));
                return isNaN(num) ? undefined : num;
            }, [searchParams]);
        const INVITATION_ID = 100;
        const [open, setOpen] = useState(false);
     
        const musicRef = useRef<MusicFabPlayerHandle>(null);
       
       const COLOR_PRIMARY = "#2E5E4E";
       const COLOR_SECONDARY = "#F3C6D3";
        const MAIN_TYPO = "great-vibes-regular";
        const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const URL_IMAGES = `${URL_REPO}xv/xv-victoria/`;
        const URL_SONG = `${URL_REPO}canciones/WhoKnowsWhatLoveIs.mp3`;
        const BG_COLOR ="rgb(251,246,240,.5)";
            const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleEnter  = () => {
          console.log("handleEnter");
            setOpen(false);
            musicRef.current?.play()
         };
    
        useEffect(() => {
           handleClickOpen()
        }, []);
    
  
        const eventCards: EventCardProps[] = [
            {
                eventName: t("events.reception"),
                date: new Date(2025, 9, 25 , 21, 0, 0),
                icon: `${URL_IMAGES}recepcion.svg`,
                locationName: "The Venue",
                address: "871 District Pl Chula Vista, CA 91914",
                size: 6,
                color: COLOR_PRIMARY,
                mainTypo:  `${MAIN_TYPO}`,
                bodyTypo: BODY_TYPO,
                fontSize:"55px",
                href: "https://maps.app.goo.gl/ngyAxdPa2kYWBkz48",
                colorButton: COLOR_PRIMARY,
                classButtonName:"btn-gold",

            },
    ];
    // const timelineData: CustomizedTimelineProps = {
    //     mainTypo: MAIN_TYPO,
    //     bodyTypo: BODY_TYPO,
    //     colorPrimary: "white",
    //     colorTitle:"white",
    //     colorBody: "white",
    //     bgColor: COLOR_PRIMARY, 
    //     events: [
           
    //         {
    //             eventName: "Recepción",
    //             date: new Date(2025, 8, 19,21,0,0),
    //             icon:`${URL_IMAGES}iconos/14.svg`,
    //         },
    //         {
    //             eventName: "Vals",
    //             date: new Date(2025,  8, 19,22,30,0),
    //             icon:`${URL_IMAGES}iconos/12.svg`,
    //         },
    //         {
    //             eventName: "Cena",
    //             date: new Date(2025, 8, 19,22,30,0),
    //             icon: `${URL_IMAGES}iconos/13.svg`,
    //         }
    //     ],
    // };
    const giftListData: GiftListProps = {
        mainTypo: `${MAIN_TYPO}`,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        bankIconStart:`${URL_IMAGES}sobre.png`,
        envelopePhrase: t("gifts.envelope"),
    };
    const dresscode:DressCodeProps = {
        mainTypo:`${MAIN_TYPO}`,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Semi Formal",
        description:"Dress nicely as if you’re going to a wedding reception or fancy dinner. Avoid jeans, sneakers and very casual clothes, but you don’t need a full length gown or tux.",
        omitColorsLabel:"Reserved colors: Hunter Green",

    }
    // const qoute:QouteProps ={
    //     bodyTypo: MAIN_TYPO,
    //     bgColor:BG_COLOR,
    //     fontsize:"2rem",
    //     lineheight:"2rem",
    //     addormentEnd:`${URL_IMAGES}adornos2.svg`,
        
    //     qoute : "Hay momentos inolvidables que se guardan en el corazón para siempre por esa razón quiero que compartas conmigo este día tan especial, Gracias a Dios y a mis Padres",
    // }

//   const galleryPhotos = [
//         `${URL_IMAGES}galeria(1).jpg`,
//         `${URL_IMAGES}galeria(3).jpg`,
//         `${URL_IMAGES}galeria(7).jpg`,
//         `${URL_IMAGES}galeria(6).jpg`,
//     ];
    
    return (
        <div style={{backgroundColor:"#ffffff",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
           <MusicFabPlayer ref={musicRef}  src={`${URL_SONG}`} backgroundColor={COLOR_SECONDARY}/>
            <CoverSimple 
            bgImage={`${URL_IMAGES}portada.png`}
            bgImage2={`${URL_IMAGES}portada.png`}
            subtitle=""
                  weddingDate="16.05.2026"
                  brideName="Victoria de la Vega"
                  symbolr={""}
                  groomName={""}
                  className={MAIN_TYPO}
                  textColor={COLOR_PRIMARY}
                  hideText={true}
                  ourWeddingStart={false}
                overlay={false}
                  >
            </CoverSimple>
            {/* <div style={{backgroundImage:`url('${URL_IMAGES}fondo-verde.png')`,maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}> */}
                        <Grid container justifyContent="center" padding={2}>
                <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                  <Box
                    textAlign="center"
                    sx={{
                      width: "100%",
                      mt: 6,
                      mb: 6,
                    }}
                  >
                    <Grid container spacing={2} justifyContent="center" mb={3}>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                        <Fade direction="up" >
                        <Typography variant="h1" className={`${MAIN_TYPO}`} sx={{ fontSize: 38 ,lineHeight:2, color: COLOR_PRIMARY}} >
                            My favorite people
                        </Typography>
                        <Typography className={BODY_TYPO}>Thank you for making this possible!</Typography>
                        </Fade>
                      </Grid>
            
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                          <Fade direction="up" >
                        <Typography variant="h1" className={`${MAIN_TYPO}`}  sx={{ fontSize: 38,lineHeight:2 , color:COLOR_PRIMARY}}>
                          My Parents
                        </Typography>
                        </Fade>
                      </Grid>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                        <Fade direction="up" >
                              <Adornment image={`${URL_IMAGES}adornos/8.svg`} width={"250px"} />
                        
                          </Fade>
                      </Grid>
                      <Grid  size={{xs:12,sm:12,md:12,lg:12}}>
                        <Fade direction="up" >
                        <Typography variant="h1" className={`${MAIN_TYPO} tex-`}
                          sx={{fontSize: 40 ,lineHeight:2, color: COLOR_SECONDARY}}
                        >
                          Raul & Monica De La Vega

                        </Typography>
                        </Fade>
                      </Grid>
                    </Grid>
                      <Grid container justifyContent="center" sx={{ mt: 4 }}>
                          
                        <Grid>
                          <Fade direction="up" >
                              <Adornment image={`${URL_IMAGES}adornos/8.svg`} width={"250px"} />
                        
                          </Fade>
                        </Grid>
                      </Grid>
                    <Grid container justifyContent="center">
                      <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                                      <Fade direction="up" >
                        <Typography
                          className={BODY_TYPO}
                          sx={{ mt: 2 }}
                        >
                          We are honored to invite you to the celebration of my 15th birthday.
                        </Typography>
                        </Fade>
                      </Grid>
                  
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            {/* </div> */}
            <CountDownSimple 
                eventDate={new Date(2026, 4, 16)}
               format="dddd DD MMMM"
                typoHeader={`${MAIN_TYPO}`}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_PRIMARY}
                circleBgColor="white"
                bgColor=""
                bgImage={`url('${URL_IMAGES}contador.png')`} 
                bgVertical={`url('${URL_IMAGES}contador-ver.png')`}
                >  
            </CountDownSimple>
  
   <div style={{backgroundImage:`url('${URL_IMAGES}fondo.jpeg')`,backgroundPositionX: "50%",    minHeight: "100vh",backgroundSize:"cover",paddingTop:"70px" }}>
          <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
         
             <Grid size={{ xs: 12 }} padding={4}>
            {/* <CustomizedTimeline {...timelineData} ></CustomizedTimeline> */}
            <Box sx={{boxShadow: 3,borderRadius: 1, backgroundColor: "white"}} >
              <Grid container spacing={2} justifyContent="center" >
              <Grid size={{ xs: 12 }}>
                 <GiftList {...giftListData} ></GiftList>
              </Grid>
              <Grid size={{ xs: 12 }} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={2} >
                  <img src={`${URL_IMAGES}zelle.jpeg`} alt="Gift List" style={{ maxWidth: '100%', height: 'auto' }} />
              </Grid>
             </Grid>

            </Box>
            </Grid>
             
   </div>
            
            {/* <div style={{backgroundImage:`url('${URL_IMAGES}fondo.png')`,backgroundPositionX: "50%",    minHeight: "70vh",backgroundSize:"cover", paddingTop:"70px" }}> */}
               <RSVPForm 
                textColor={COLOR_PRIMARY}
                    colorButton={COLOR_PRIMARY} 
                    bgColor={BG_COLOR} 
                    mainTypo={MAIN_TYPO} 
                    bodyTypo={BODY_TYPO} 
                    count={invitedGuests}
                    dateLine={new Date(2026,4,1)}
                    color={COLOR_PRIMARY}
                    guestId={guestId}
                    invitationId={INVITATION_ID}
                    qrActive={false}
                    hidePhoneNumberInput={true}
                   
                >
                
            </RSVPForm>
            {/* </div> */}
            
            <LodgingAccordion
            title={t("lodging.title")}
            description={t("lodging.subtitle")}
            fontFamilyTitle={MAIN_TYPO}
            fontFamilyBody={BODY_TYPO}
            primaryColor={COLOR_PRIMARY}
            secondaryColor={"black"}
            dividerColor="rgba(20, 164, 109, 0.15)"
            buttonColor={COLOR_SECONDARY}
            options={[
              {
                name: "Hampton Inn Chula Vista Eastlake",
                distance: "2424 Fenton St, Chula Vista, CA, Estados Unidos",
                mapUrl: "https://www.hilton.com/en/hotels/sanhxhx-hampton-chula-vista-eastlake/?SEO_id=GMB-AMER-HX-SANHXHX&y_source=1_MTQ2MTg5MjEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
              },
              {
                name: "SpringHill Suites Chula Vista Eastlake",
                distance: "870 District Pl, Chula Vista, CA, Estados Unidos",
                mapUrl: "https://www.marriott.com/en-us/hotels/sansu-springhill-suites-chula-vista-eastlake/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
              },
              {
                name: "Homewood Suites by Hilton Chula Vista Eastlake",
                distance: "2424 Fenton St, Chula Vista, CA, Estados Unidos",
                mapUrl: "https://www.hilton.com/en/hotels/sanethw-homewood-suites-chula-vista-eastlake/?SEO_id=GMB-AMER-HG-SANETHW&y_source=1_MTQ2MTg5ODYtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
              },
              {
                name: "Ayres Hotel San Diego South - Chula Vista",
                distance: "1710 Millenia Ave, Chula Vista, CA 91915, Estados Unidos",
                mapUrl: "https://www.ayreshotels.com/ayres-hotel-san-diego-south-chula-vista"
              }
            ]}
          />

            
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
              <Adornment image={`${URL_IMAGES}adornos/8.svg`} width={"250px"} />

            </Fade>
             
           <WithoutKids   bodyTypo={BODY_TYPO}></WithoutKids>
           
            <div style={{height:100}}></div>
            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
  <InvitationWelcomeModal
            open={open}
            onEnter={handleEnter}
            isMultilanguage={invitationConfig.isMultilanguage}
            language={invitationConfig.language}
            color={COLOR_PRIMARY}
           
/>
     
        </div>
    )
}
export default XVVictoria;



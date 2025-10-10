import { useEffect, useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import { useSearchParams } from "react-router-dom";
import Adornment from "../../components/Adornment/Adornment";
import CountDown from "../../components/CountDown/CountDownImage/CountDown";
import Cover from "../../components/Cover/CoverImage/Cover";
import DressCode, { DressCodeProps } from "../../components/DressCode/DressCode";
import EventCard from "../../components/EventCard/EventCard";
import { EventCardProps } from "../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../components/Footer/FooterInvites";
import Gallery from "../../components/Gallery/Gallert";
import GiftList, { GiftListProps } from "../../components/Gifts/GiftList";
import Introduction from "../../components/Introduction/Introduction";
import Qoute, { QouteProps } from "../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../components/TimeLine/Timeline";
import { PairSponsors } from "../../components/WeddingSponsor/models/Sponsors";
import WeddingSponsor from "../../components/WeddingSponsor/WeddingSponsor";
import WithoutKids from "../../components/WithOutKids/WithoutKids";
import RSVPExcel from "../../components/RSVP/RSVPExcel";
import { URL_REPO } from "../../config";
import ImageMiddle from "../../components/ImageMiddle/ImageMiddle";
import Grid from '@mui/material/Grid2';

const WeddingKarolMario  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? 1 : num;
    }, [searchParams]);
    const handleConfirm =async ( name:string,confirmText:string, phoneNumber:string, totalConfirmed:string)=> {
        console.log(name,phoneNumber,confirmText,totalConfirmed)
        if(confirmText == "Asistiré"){
            window.open(`https://wa.me/+526622816125?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20para%20la%20boda%20de%20Karol Denisse y Mario Anwar para ${totalConfirmed} personas. Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }else{
            window.open(`https://wa.me/+526622816125?text=Hola,%20no%20podre%20mi%20asistir%20a%20la%20boda%20de%20Karol Denisse y Mario Anwar.Mi nombre es: ${name},teléfono:${phoneNumber}`, '_blank');

        }
    }
    const COLOR_PRIMARY = "#08979D";
    const BG_COLOR = "rgb(203, 235, 236,.5)";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "montserrat-400";
    const URL_IMAGES = `${URL_REPO}boda/boda-karol-mario/`;
    const sponsors:PairSponsors[] = [
            {
                sponsorOne: { name: "Aurora Amelia Martinez Vasquez y German Lopez Salcido" },
              
            },
            {
                sponsorOne: { name: "Lolita Amelia Ramirez Vasquez y Ramses Acosta Ramirez" },
   
            }
        ];
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 10, 15, 19, 0, 0),
                locationName: "Catedral Metropolitana de Hermosillo",
                address: "Blvd. Miguel Hidalgo s/n, Centro Norte.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: `${URL_IMAGES}/iconos/7.svg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/omtKnLUWVrzrTYQp7",
                colorButton: COLOR_PRIMARY,
                fontSize:"40px"
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18, 21, 0, 0),
                locationName: "Casa Arias",
                address: "Av Aquiles Serdán 17, Centro, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon:`${URL_IMAGES}/iconos/6.svg`,
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/EmrX3WzGsrD8xaDa9",
                colorButton: COLOR_PRIMARY,
                fontSize:"40px"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: BG_COLOR, 
        fontSize:"40px",
        events: [
            {
                eventName: "Ceremonia religiosa",
                date: new Date(2025, 9, 18,19,0,0),
                icon:  `${URL_IMAGES}/iconos/11.svg`,
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,21,0,0),
                icon: `${URL_IMAGES}/iconos/13.svg`,
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,21,30,0),
                icon:  `${URL_IMAGES}/iconos/15.svg`,
            },
            {
                eventName: "Vals",
                date: new Date(2025, 9, 18,22,0,0),
                icon:  `${URL_IMAGES}/iconos/14.svg`,
            },
            
            {
                eventName: "Fin del evento",
                date: new Date(2025, 9, 18,2,0,0),
                icon:  `${URL_IMAGES}/iconos/16.svg`,
            },
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo o si lo prefieres puedes hacer transferencia bancaria a la siguiente cuenta:",
        // bankIconStart: `${URL_IMAGES}/iconos/iconos17.svg`,
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
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:"Etiqueta",
        omitColorsLabel:"Evitar color blanco o similares."
    }
    const qoute:QouteProps ={
        qoute: "El amor verdadero no se busca, se encuentra. Y nosotros nos encontramos para nunca separarnos.",
        bodyTypo: BODY_TYPO,
        addormentEnd:`${URL_IMAGES}adornos.svg`
    }


    const galleryPhotos = [
       `${URL_IMAGES}image00002.jpeg`,
       `${URL_IMAGES}image00003.jpeg`,
       `${URL_IMAGES}image00001.jpeg`,
       `${URL_IMAGES}image00006.jpeg`,
    `${URL_IMAGES}image00007.jpeg`,
       `${URL_IMAGES}image00008.jpeg`,
       `${URL_IMAGES}image00011.jpeg`,
    ]

     useEffect(() => {
        document.title = "Boda Karol Denisse & Mario Anwar";
      }, []);
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto"}}>
        
            <Cover 
                weddingDate="15.11.25"
                bgImage={`${URL_IMAGES}portada.jpeg`}
                brideName="Karol Denisse"
                symbolr={"&"}
                groomName={"Mario Anwar"}
                className={MAIN_TYPO}
                ourWeddingStart={true} overlay={true}           
                bgPosition="30%"     >
            </Cover>
            <Qoute 
               {...qoute}>
            </Qoute>
        
            <ImageMiddle bgImage={`${URL_IMAGES}enmedio.jpeg`}></ImageMiddle>
            <Introduction
                brideFather="Hector Enrique Melendrez "
                brideMother="Josefina Guadalupe Vasquez Romo"
                groomMother="Ilse María de Lourdes Gonzalez Morillas"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                fontSize="30px"
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,10,15)} 
                bgImage={`${URL_IMAGES}contador.jpeg`}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} >  
            </CountDown>
           
            <WeddingSponsor 
            headerFontSize="45px"
                sponsors={sponsors}
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                height="50vh"
                color={COLOR_PRIMARY}
                addorment={`${URL_IMAGES}adornos.svg`}
                bgColor="rgb(215,174,84,.05)"
                
            >
            </WeddingSponsor>

            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>
            <ImageMiddle bgImage={`${URL_IMAGES}enmedio2.jpeg`}></ImageMiddle>
            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVPExcel
              textColor={"black"}
              qrActive={false}
              mainTypo={MAIN_TYPO}
              bodyTypo={BODY_TYPO}
              count={invitedGuests}
              dateLine={new Date(2025, 9, 25)}
              color={COLOR_PRIMARY}
              colorButton={COLOR_PRIMARY}
              invitationId={0}
              bgColor={BG_COLOR}
              confirmed={handleConfirm}
              
            />
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={`${URL_IMAGES}adornos.svg`} width={"250px"} />
            </Fade>
            <WithoutKids/>
           
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
        </div>
    )
}
export default WeddingKarolMario;
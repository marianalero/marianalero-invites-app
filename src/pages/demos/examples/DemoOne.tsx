import CountDown from "../../../components/CountDown/CountDown";
import Cover from "../../../components/Cover/Cover";
import DressCode, { DressCodeProps } from "../../../components/DressCode/DressCode";
import EventCard from "../../../components/EventCard/EventCard";
import { EventCardProps } from "../../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../../components/Gifts/GiftList";
import Introduction from "../../../components/Introduction/Introduction";
import Qoute, { QouteProps } from "../../../components/Qoute/Qoute";
import RSVP from "../../../components/RSVP/RSVP";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../../components/TimeLine/Timeline";
import { PairSponsors } from "../../../components/WeddingSponsor/models/Sponsors";
import WeddingSponsor from "../../../components/WeddingSponsor/WeddingSponsor";
import Grid from '@mui/material/Grid2';
import WithoutKids from "../../../components/WithOutKids/WithoutKids";
import Adornment from "../../../components/Adornment/Adornment";
import ImageMiddle from "../../../components/ImageMiddle/ImageMiddle";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Fade } from "react-awesome-reveal";
const DemoOne  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const COLOR_PRIMARY = "#0E6655";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "montserrat-400";
    const sponsors:PairSponsors[] = [
            {
                sponsorOne: { name: "Mariana Lerma" },
                sponsorTwo: { name: "Hector Rodriguez" },
            },
        ];
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 9, 18,11,0,0),
                locationName: "Parroquia Nuestra Señora del Rosario de Fátima",
                address: "Calle Guadalupe Victoria, San Benito, 83190 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/church2.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href:"https://maps.app.goo.gl/angKKs6d62iJRnSG6",
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,17,0,0),
                locationName: "Parroquia Nuestra Señora del Rosario de Fátima",
                address: "Calle Guadalupe Victoria, San Benito, 83190 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/cheers5.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href:"https://maps.app.goo.gl/angKKs6d62iJRnSG6",
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "rgb(215,174,84,.05)", 
        events: [
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,17,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/bebida.svg",
            },
            {
                eventName: "Vals",
                date: new Date(2025, 9, 18,19,15,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/vals4.svg",
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,20,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/comida.svg",
            },
            {
                eventName: "Todos a bailar",
                date: new Date(2025, 9, 18,21,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/bailar.svg",
            },
            {
                eventName: "Fin del evento",
                date: new Date(2025, 9, 18,2,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/finevento.svg",
            },
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase: "Agradecemos mucho todo su amor y apoyo al iniciar esta etapa de formar nuestro hogar.",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: "#0E6655", 
        bgColor: "#FFFFFF", 
        bankIcon: "https://marianalero.github.io/Invitacion/images/Icons/sobre.svg",
        items: [
            {
                link: "https://www.amazon.com/example-item1",
                icon: "https://marianalero.github.io/invitacion-andrea-david/images/adornos/4.svg", 
            },
            {
                link: "https://www.etsy.com/example-item2",
                icon: "https://marianalero.github.io/invitacion-andrea-david/images/adornos/4.svg",
            },
        ],
        bankDetails: [
            {
                type: "CLABE",
                number: "123456789012",
                bank: "BBVA",
                name: "Juan Pérez",
                color: COLOR_PRIMARY,
                bodyTypo: BODY_TYPO,
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:2,
        title:"Etiqueta Rigurosa"
    }
    const qoute:QouteProps ={
        qoute : "No fuiste ni antes ni después , fuiste a tiempo. A tiempo para que me enamorara de ti.",
        images : [
            "https://marianalero.github.io/Invitacion/images/DSC_9995.jpg",
            "https://marianalero.github.io/Invitacion/images/285460514_10160042584270789_1637739613758679016_n.jpg",
        ]
    }

    const fabStyle = {
        position: 'fixed',
        bottom: 16,
        right: 16,
      };
      
    return (
        <div style={{backgroundColor:"white"}}>
            <Cover 
                weddingDate="21.10.22"
                bgImage="https://marianalero.github.io/Invitacion/images/DSC_9633.jpg" 
                brideName="Elena Marai" 
                symbolr={"&"} 
                groomName={"Jose Carlos"} 
                className={MAIN_TYPO}
                >
            </Cover>
            <Qoute 
               {...qoute}>
            </Qoute>
            <ImageMiddle bgImage={"https://marianalero.github.io/Invitacion/images/DSC_9877.JPG"}></ImageMiddle>
            <Introduction
                brideFather="Jesus Lerma Luna"
                brideMother="María Elena Rodríguez Moreno"
                groomFather="Ramon Madrid"
                groomMother="Mercedes Gil"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,9,18)} 
                bgImage="https://marianalero.github.io/Invitacion/images/DSC_9633.jpg"
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} >  
            </CountDown>
           
            <WeddingSponsor 
                sponsors={sponsors}
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                height="50vh"
                color={COLOR_PRIMARY}
                addorment="https://marianalero.github.io/Invitacion/images/Icons/adorno123.svg"
            >
            </WeddingSponsor>

            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVP bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025,9,1)} color={COLOR_PRIMARY} ></RSVP>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={"https://marianalero.github.io/Invitacion/images/Icons/adorno123.svg"} width={"250px"} />
            </Fade>
            <WithoutKids/>
            <Fab sx={fabStyle } color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <div style={{height:100}}></div>
            <FooterInvites></FooterInvites>
        </div>
    )
}
export default DemoOne;
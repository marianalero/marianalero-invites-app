import DressCode, { DressCodeProps } from "../../../components/DressCode/DressCode";
import EventCard from "../../../components/EventCard/EventCard";
import { EventCardProps } from "../../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../../components/Gifts/GiftList";
import Introduction from "../../../components/Introduction/Introduction";
import Qoute, { QouteProps } from "../../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import WithoutKids from "../../../components/WithOutKids/WithoutKids";
import Adornment from "../../../components/Adornment/Adornment";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import CountDownSimple from "../../../components/CountDown/CountDownSimple/CountDownSimple";
import CoverSimple from "../../../components/Cover/CoverSimple/CoverSimple";
import RSVPDemo from "../../../components/RSVP/RSVPDemo";

const DemoTree  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const COLOR_PRIMARY = "#c69f58";
    const COLOR_SECONDARY= "#d5b36f";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
    const BG_COLOR ="rgba(244, 240, 215, 0.5)"
        const eventCards: EventCardProps[] = [
            {
                eventName: "Ceremonia Civil Recepción",
                date: new Date(2026, 5, 14, 17, 0, 0),
                locationName: "The Rustic Garden",
                address: "Calle Las Moras #17, La Victoria Hermosillo, Sonora.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/invitacion-pricila-eduardo/images/iconos-pricila/1.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/qk5eheggwTdz4CUv5",
                colorButton: COLOR_PRIMARY,
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary: COLOR_PRIMARY,
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: BG_COLOR, 
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
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo o si lo prefieres puedes hacer transferencia bancaria a la siguiente cuenta:",
        items: [
            {
                link: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/liverpool.png",
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/liverpool.png",
            },
        ],
        bankDetails: [
            {
                numbers:[
                    {
                        numberType: "CLABE",
                        number: "123456789012",
                    }
                ],
               
                bank: "BBVA",
                name: "Juan Pérez",
                color: COLOR_PRIMARY,
                bodyTypo: BODY_TYPO,
                bgColor:BG_COLOR,
            }
            
        ],
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Formal"
    }
    const qoute:QouteProps ={
        bodyTypo: BODY_TYPO,
        bgColor:"rgb(209, 185, 137,.5)",
        qoute : "Cuando te das cuenta de que quieres pasar el resto de tu vida con alguien, deseas que el resto de tu vida empiece lo antes posible",
    }
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto", overflowX: "hidden"}}>
            <CoverSimple 
                weddingDate="21.10.22"
                bgImage="https://marianalero.github.io/invitacion-pricila-eduardo/images/portada/portada%20beig-dorado.png" 
                bgImage2="https://marianalero.github.io/invitacion-pricila-eduardo/images/portada/portada beig-dorado (1200 x 800 px).png" 
                brideName="Pricila" 
                symbolr={"&"} 
                groomName={"Eduardo"} 
                className={MAIN_TYPO}
                textColor={COLOR_PRIMARY}
                >
            </CoverSimple>
            <Qoute 
               {...qoute}>
            </Qoute>
                        <Introduction
                brideMother="Yolanda Acuña Monge"
                groomFather="Olivia Molina Noriega"
                groomMother="Rosario Grijalva Rendón"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
                adornment="https://marianalero.github.io/invitacion-pricila-eduardo/images/adornos/adornos%20(4).svg"
            >
            </Introduction>
            <CountDownSimple 
                eventDate={new Date(2025, 4, 12)}
                bgColor={BG_COLOR}
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} 
                primaryColor={COLOR_PRIMARY} 
                secondarColor={COLOR_SECONDARY}
                circleBgColor="white" >  
            </CountDownSimple>

            <Grid container spacing={2} padding={4} justifyContent={"center"} >
            {
                eventCards.map((item,index) => (          
                   <EventCard key={index} {...item}></EventCard>
                ))
            }
            </Grid>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVPDemo qrActive={false} colorButton={COLOR_PRIMARY} bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={COLOR_PRIMARY} invitationId={0} textColor={"black"} ></RSVPDemo>
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={"https://marianalero.github.io/invitacion-pricila-eduardo/images/adornos/adornos%20(4).svg"} width={"250px"} />
            </Fade>
            <WithoutKids/>
            <div style={{height:100}}></div>

            <FooterInvites bgColor={BG_COLOR} color={COLOR_PRIMARY}></FooterInvites>
        </div>
    )
}
export default DemoTree;
import CountDown from "../../../components/CountDown/CountDownImage/CountDown";
import Cover from "../../../components/Cover/CoverImage/Cover";
import DressCode, { DressCodeProps } from "../../../components/DressCode/DressCode";
import { EventCardProps } from "../../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../../components/Gifts/GiftList";
import Introduction from "../../../components/Introduction/Introduction";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../../components/TimeLine/Timeline";
import Grid from '@mui/material/Grid2';
import WithoutKids, { WithoutKidsProps } from "../../../components/WithOutKids/WithoutKids";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import Gallery from "../../../components/Gallery/Gallert";
import EventCardImage from "../../../components/EventCard/EventCardImage";
import RSVPDemo from "../../../components/RSVP/RSVPDemo";
const DemoOne  = () => {
    const [searchParams] = useSearchParams();
    const invitedGuests: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const COLOR_PRIMARY = "#929292";
    const COLOR_SECONDARY = "#a6a998";
    const COLOR_TREE ="#777777";
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "pt-serif-caption-regular to-upper";
        const eventCards: EventCardProps[] = [
            {
                eventName: "Iglesia",
                date: new Date(2025, 12, 9, 11, 0, 0),
                locationName: "Parroquia Nuestra Señora del Carmen",
                address: "Calle Jesús García 17, Col del Razo, Hermosillo, Son.",
                size: 6,
                color: COLOR_TREE,
                image: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/iglesia2.jpeg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/angKKs6d62iJRnSG6",
                colorButton: COLOR_SECONDARY,
                bgColor:"#f2f1e9"
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 12, 9, 17, 0, 0),
                locationName: "Villa Toscana",
                address: "Quintero Arce 280, Puerta Grande, Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                image: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Villa%20Toscana.jpeg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/angKKs6d62iJRnSG6",
                colorButton: COLOR_SECONDARY,
                bgColor:"#f2f1e9"
            },
    ];
    const timelineData: CustomizedTimelineProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        colorPrimary:"#000000", 
        colorTitle: COLOR_PRIMARY,
        colorBody: COLOR_PRIMARY, 
        bgColor: "rgb(249, 249, 249)", 
        events: [
            {
                eventName: "Sesión de fotos",
                date: new Date(2025, 9, 18,14,0,0),
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/camara.svg"
            },
            {
                eventName: "Ceremonia Religiosa",
                date: new Date(2025, 9, 18,17,15,0),
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/iglesia-s2.svg",
            },
            {
                eventName: "Recepción",
                date: new Date(2025, 9, 18,20,30,0),
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/cheers-s2.svg",
            },
            {
                eventName: "Vals novios",
                date: new Date(2025, 9, 18,21,30,0),
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/vals-s2.svg",
            },
            {
                eventName: "Cena",
                date: new Date(2025, 9, 18,21,45,0),
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/dinner-s3.svg",
            },
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase: "¡Gracias por formar parte de nuestro inicio como familia!",
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: COLOR_PRIMARY, 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase:"Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo.",
        bankIconEnd: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/sobre-s3.svg",
        items: [
            {
                link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51028009",
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/liverpool.png", 
            },
        ]
    };
    const dresscode:DressCodeProps = {
        mainTypo: MAIN_TYPO,
        bodyTypo:BODY_TYPO,
        color:COLOR_PRIMARY,
        type:1,
        title:"Etiqueta Rigurosa"
    }
     const withOutKids:WithoutKidsProps = {
        bodyTypo:BODY_TYPO,
    }
    const galleryPhotos = [
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04866.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04778.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04735.jpg",
        "https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04853.jpg",
    ]
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
            <Cover 
                weddingDate="09.12.22"
                bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04740.jpg" 
                brideName="Selene Alejandra" 
                symbolr={"&"} 
                groomName={"Juan Carlos"} 
                className={MAIN_TYPO}
                bgSize="cover"
                >
            </Cover>
            <Introduction
                brideFather="Sandra González Saavedra"
                brideMother="Rosa Icela Guerrero Mendoza"
                groomFather="Francisco Morales Zepeda"
                groomMother="Carlos Renato Ung Navarro"
                mainTypo={MAIN_TYPO}
                bodyTypo={BODY_TYPO}
                color={COLOR_PRIMARY}
            >
            </Introduction>
            <CountDown 
                eventDate={new Date(2025,9,18)} 
                bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04894.jpg"
                typoHeader={MAIN_TYPO}
                typoCountdown={BODY_TYPO} >  
            </CountDown>
            <Grid container spacing={2} padding={4} >
            {
                eventCards.map((item,index) => (          
                   <EventCardImage key={index} {...item}></EventCardImage>
                ))
            }
            </Grid>

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVPDemo bgImage="https://marianalero.github.io/invitacion-selene-juan-carlos/images/UNI04765.jpg" bgColor="rgb(215,174,84,.05)" mainTypo={MAIN_TYPO} bodyTypo={BODY_TYPO} count={invitedGuests} dateLine={new Date(2025, 9, 1)} color={"white"} colorButton={COLOR_PRIMARY} invitationId={0} ></RSVPDemo>
            <DressCode {...dresscode}></DressCode>
            <WithoutKids {...withOutKids} />
            {/* <Fab sx={fabStyle } color="primary" aria-label="add">
                <AddIcon />
            </Fab> */}
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
                       <FooterInvites bgColor="rgb(249, 249, 249)" color={COLOR_PRIMARY}></FooterInvites>

        </div>
    )
}
export default DemoOne;
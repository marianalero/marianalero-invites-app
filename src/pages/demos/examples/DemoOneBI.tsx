import CountDown from "../../../components/CountDown/CountDownImage/CountDown";
import Cover from "../../../components/Cover/CoverImage/Cover";
import DressCode, { DressCodeProps } from "../../../components/DressCode/DressCode";
import EventCard from "../../../components/EventCard/EventCard";
import { EventCardProps } from "../../../components/EventCard/models/EventCardProps";
import FooterInvites from "../../../components/Footer/FooterInvites";
import GiftList, { GiftListProps } from "../../../components/Gifts/GiftList";Adornment
import Introduction from "../../../components/Introduction/Introduction";
import Qoute, { QouteProps } from "../../../components/Qoute/Qoute";
import CustomizedTimeline, { CustomizedTimelineProps } from "../../../components/TimeLine/Timeline";
import { PairSponsors } from "../../../components/WeddingSponsor/models/Sponsors";
import WeddingSponsor from "../../../components/WeddingSponsor/WeddingSponsor";
import Grid from '@mui/material/Grid2';
import WithoutKids from "../../../components/WithOutKids/WithoutKids";
import ImageMiddle from "../../../components/ImageMiddle/ImageMiddle";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Gallery from "../../../components/Gallery/Gallert";
import RSVPForm from "../../../components/RSVP/RSVPForm";
// import RSVPDemo from "../../../components/RSVP/RSVPDemo";
import { IMAGES_URl } from "../../../config";
import MusicFabPlayer, { MusicFabPlayerHandle } from "../../../components/MusicFabPlayer/MusicFabPlayer";
import Adornment from "../../../components/Adornment/Adornment";
import { useTranslation } from "react-i18next";
import InvitationWelcomeModal from "../../../components/InvitationWelcomeModal/InvitationWelcomeModal";
const DemoOneBI  = () => {

const invitationConfig = {
  isMultilanguage: true, // o false
  language: "es" as "es" | "en" // idioma base
};
  // 🔹 2. Traducciones normales
  const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const invitedGuests: number = useMemo(() => {
        const num = Number(searchParams.get("number"));
        return isNaN(num) ? 1 : num;
    }, [searchParams]);
    const guestId: number | undefined = useMemo(() => {
        const num = Number(searchParams.get("id"));
        return isNaN(num) ? undefined : num;
    }, [searchParams]);
    const [open, setOpen] = useState(true);

    const musicRef = useRef<MusicFabPlayerHandle>(null);
    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleEnter = () => {
        setOpen(false);
        musicRef.current?.play(); // 🎵 AQUÍ
        };
    useEffect(() => {
       handleClickOpen()
    }, []);

    const COLOR_PRIMARY = "#0E6655";
    const INVITATION_ID = 1;
    const MAIN_TYPO = "great-vibes-regular";
    const BODY_TYPO = "montserrat-400";
    const sponsors:PairSponsors[] = [
            {
                sponsorOne: { name: "Mayra Alvarez" },
                sponsorTwo: { name: "Juan Madrid Gil" },
            },
        ];
        const eventCards: EventCardProps[] = [
            {
                eventName: t("events.ceremony"),
                date: new Date(2025, 9, 18, 11, 0, 0),
                locationName: "Parroquia Nuestra Señora del Rosario de Fátima",
                address: "Calle Guadalupe Victoria, San Benito, 83190 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/church2.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/angKKs6d62iJRnSG6",
                colorButton: COLOR_PRIMARY,
            },
            {
                eventName: t("events.reception"),
                date: new Date(2025, 9, 18, 17, 0, 0),
                locationName: "Parroquia Nuestra Señora del Rosario de Fátima",
                address: "Calle Guadalupe Victoria, San Benito, 83190 Hermosillo, Son.",
                size: 6,
                color: COLOR_PRIMARY,
                icon: "https://marianalero.github.io/Invitacion/images/Icons/cheers5.svg",
                mainTypo: MAIN_TYPO,
                bodyTypo: BODY_TYPO,
                href: "https://maps.app.goo.gl/angKKs6d62iJRnSG6",
                colorButton: COLOR_PRIMARY,
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
                eventName: t("timeline.reception"),
                date: new Date(2025, 9, 18,17,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/bebida.svg",
            },
            {
                eventName: t("timeline.waltz"),
                date: new Date(2025, 9, 18,19,15,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/vals4.svg",
            },
            {
                eventName: t("timeline.dinner"),
                date: new Date(2025, 9, 18,20,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/comida.svg",
            },
            {
                eventName: t("timeline.party"),
                date: new Date(2025, 9, 18,21,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/Icons/bailar.svg",
            },
            {
                eventName: t("timeline.end"),
                date: new Date(2025, 9, 18,2,0,0),
                icon: "https://marianalero.github.io/Invitacion/images/finevento.svg",
            },
        ],
    };
    const giftListData: GiftListProps = {
        mainPhrase: t("gifts.mainPhrase"),
        mainTypo: MAIN_TYPO,
        bodyTypo: BODY_TYPO,
        color: "#0E6655", 
        bgColor: "#FFFFFF", 
        showEnvelope:true,
        envelopePhrase: t("gifts.envelope"),
        bankIconStart: "https://marianalero.github.io/Invitacion/images/Icons/sobre.svg",
        items: [
            {
                link: "https://www.amazon.com/example-item1",
                icon: "https://marianalero.github.io/invitacion-andrea-david/images/adornos/4.svg", 
            },
            {
                link: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/liverpool.png",
                icon: "https://marianalero.github.io/invitacion-selene-juan-carlos/images/Icons/liverpool.png",
            },
        ],
        bankDetails: [
            {
                numbers: [
                    {
                        numberType: "CLABE",
                        number: "123456789012",
                    }
                ],
                
                bank: "BBVA",
                name: "Elena Maraí Lerma Rodríguez",
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
        title: t("dresscode.formal")
    }
    const qoute:QouteProps ={
        qoute: t("quote.main"),
        images: [
            "https://marianalero.github.io/Invitacion/images/DSC_9995.jpg",
            "https://marianalero.github.io/Invitacion/images/285460514_10160042584270789_1637739613758679016_n.jpg",
        ],
        bodyTypo: BODY_TYPO,
        addormentStart:"https://marianalero.github.io/Invitacion/images/Icons/adorno123.svg"
    }
    const galleryPhotos = [
        "https://marianalero.github.io/Invitacion/images/DSC_9786.JPG",
        "https://marianalero.github.io/Invitacion/images/DSC_9988.jpg",
        "https://marianalero.github.io/Invitacion/images/DSC_9771.JPG",
        "https://marianalero.github.io/Invitacion/images/DSC_9815.jpg",
    ]

     useEffect(() => {
        document.title = "Boda Elena Marai & Jose Carlos";
      }, []);
    return (
        <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto"}}>
            <MusicFabPlayer ref={musicRef}  src={`${IMAGES_URl}/invitacion-hidai-leonardo/audio/cancion.mp3`} backgroundColor={COLOR_PRIMARY}/>
            <Cover 
                weddingDate="18.10.25"
                bgImage="https://marianalero.github.io/Invitacion/images/DSC_9636.JPG"
                brideName="Elena Marai"
                symbolr={"&"}
                groomName={"Jose Carlos"}
                className={MAIN_TYPO}
                ourWeddingStart={true} overlay={true}                >
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
                bgImage="https://marianalero.github.io/Invitacion/images/anillo.jpeg"
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

            <CustomizedTimeline {...timelineData} ></CustomizedTimeline>

            <GiftList {...giftListData} ></GiftList>
            <RSVPForm 
            textColor="black"
                colorButton={COLOR_PRIMARY} 
                bgColor="rgb(215,174,84,.05)" 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2026,11,31)}
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            >
                
            </RSVPForm>
            {/* <RSVPDemo 
                colorButton={COLOR_PRIMARY} 
                bgColor="rgb(215,174,84,.05)" 
                mainTypo={MAIN_TYPO} 
                bodyTypo={BODY_TYPO} 
                count={invitedGuests}
                dateLine={new Date(2025,9,1)}
                color={COLOR_PRIMARY}
                guestId={guestId}
                invitationId={INVITATION_ID}
                qrActive={false}
            >
            </RSVPDemo> */}
            <DressCode {...dresscode}></DressCode>
            <Fade direction="up" >
            <Adornment image={"https://marianalero.github.io/Invitacion/images/Icons/adorno123.svg"} width={"250px"} />
            </Fade>
            <WithoutKids/>
            {/* <Fab sx={fabStyle } color="primary" aria-label="add">
                <AddIcon />
            </Fab> */}
            <div style={{height:100}}></div>
            <Gallery photos={galleryPhotos} ></Gallery>
            <FooterInvites bgColor="rgb(215,174,84,.05)" color={COLOR_PRIMARY}></FooterInvites>
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
export default DemoOneBI;
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import 'dayjs/locale/de';
import CustomButton from '../CustomButton/CustomButton';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card, CardContent, Typography } from '@mui/material';
import { EventCardProps } from './models/EventCardProps';
import { Fade } from 'react-awesome-reveal';
import ProButton from '../CustomButton/GoldButton';
import { useTranslation } from 'react-i18next';


const EventCard  = (props:EventCardProps) => {
    const { t, i18n } = useTranslation();
    const localizedDate = dayjs(props.date).locale(i18n.language);
    const localizedEndDate = props.endDate ? dayjs(props.endDate).locale(i18n.language) : null;

    return( 
   
            <Grid size={{xs:12,sm:props.size,md:props.size,lg:props.size}}>
                <Fade direction="up" triggerOnce={true}>
                    <Card 
                        elevation={0} 
                        sx={{ 
                            bgcolor : props.bgColor ? props.bgColor : "transparent",
                            border:"1px solid rgb(215, 174, 84, .2)",
                            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                            borderRadius: props.borderSquare ? "0px" : "16px",
                        }}>		
                        <CardContent>
                            <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={3}>			
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography variant='h4'  style={{color:props.color, fontSize:props.fontSize ? props.fontSize : "2rem"}} textAlign={"center"} className={props.mainTypo} >{props.eventName}</Typography>
                                </Grid>
                                {
                                    props.icon && (
                                         <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                            <img src={props.icon} height={props.iconSize ? props.iconSize : "120"} />
                                        </Grid>
                                    )
                                }
                               
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography sx={{color: props.textColor ? props.textColor : "black"}}  textAlign={"center"} className={props.bodyTypo} fontWeight={600}>{props.locationName}</Typography>
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography sx={{color: props.textColor ? props.textColor : "black"}}   textAlign={"center"} className={props.bodyTypo} >{props.address}</Typography>
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography sx={{color: props.textColor ? props.textColor : "black"}}     textAlign={"center"} className={props.bodyTypo}> <AccessTimeIcon></AccessTimeIcon>  {localizedDate.format("hh:mm A")} { localizedEndDate ? `- ${localizedEndDate.format("hh:mm A")}` : "" }</Typography>
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}}  display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                    {
                                        props.classButtonName ? (
                                            <ProButton href={props.href} className={props.classButtonName} label={t("events.location")} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />
                                        ) : (
                                            <CustomButton href={props.href} bgColor={props.colorButton} color={'white'} label={t("events.location")} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />

                                        )
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>			
                </Fade>	
            </Grid>

    )
}
export default EventCard;
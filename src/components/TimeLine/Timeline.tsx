import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Event } from '../EventCard/models/EventCardProps';
import dayjs from 'dayjs';
import { Fade } from 'react-awesome-reveal';
export interface CustomizedTimelineProps {
    mainTypo?:string;
    bodyTypo?:string;
    colorPrimary:string;
    colorTitle?:string;
    colorBody?:string;
    bgColor?:string;
    events?:Event[];
    fontSize?:string;
}
const CustomizedTimeline = (props:CustomizedTimelineProps) =>{
    return (
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:props.bgColor}}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
              <Typography variant='h4' style={{fontSize: props.fontSize ? props.fontSize :"2rem"}} color={props.colorTitle} textAlign={"center"} className={`${props.mainTypo}`}>El Gran Día</Typography>
            </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
            <Fade direction="up" triggerOnce={true}>
                <Typography color={props.colorBody} textAlign={"center"} className={`${props?.bodyTypo}`}>No te pierdas ningún momento</Typography>
            </Fade>
           
           </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Timeline position="alternate">
                {
                props.events?.map((item,index) => (
               
                  <TimelineItem key={index}>
                     
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            >
                            <Fade direction="up" triggerOnce={true} >
                              <img className="intinerario-icon" src={item.icon} height="60"/>
                            </Fade>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector  sx={{backgroundColor:props.colorPrimary}} />
                        <TimelineDot sx={{backgroundColor:props.colorPrimary}}>
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:props.colorPrimary}}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                          <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:props.colorPrimary}}  variant="subtitle1" component="span">
                            {item.eventName}
                            </Typography>
                            </Fade>
                            <Fade direction="up" triggerOnce={true} >
                            <Typography sx={{color:props.colorPrimary}}> {dayjs(item.date).format("hh:mm A")}</Typography>
                            </Fade>
                        </TimelineContent>
                    </TimelineItem>
                   
                ))
            }
       
   
      </Timeline>
      </Grid>	
      </Grid>
    );
  }

  export default CustomizedTimeline;
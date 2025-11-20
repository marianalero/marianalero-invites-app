import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import CustomButton from '../CustomButton/CustomButton';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card, CardContent, CardMedia, Paper, Typography, useMediaQuery } from '@mui/material';
import { EventCardProps } from './models/EventCardProps';
import { Fade } from 'react-awesome-reveal';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar as faCalendarRegular } from "@fortawesome/free-regular-svg-icons";
const EventCardImage  = (props:EventCardProps) => {
 const isSmallScreen = useMediaQuery('(max-width:600px)');
    return( 
   
            <Grid size={{xs:12,sm:props.size,md:props.size,lg:props.size}}>
                <Fade direction="up" triggerOnce={true}>
                    <Card 
                        elevation={0} 
                        sx={{ 
                            border:"1px solid rgb(215, 174, 84, .2)",
                            boxShadow:2
                        }}>	
                        {
                            props.image &&(
                                 <CardMedia
                            sx={{ height: 350 }}
                            image={props.image}
                            />	    
                            )
                        }
                         
                        <CardContent>
                            <Grid container spacing={2} display={"flex"}  alignItems={"center"} padding={2} bgcolor={props.bgColor} sx={{borderRadius:1}}>	
                                <Grid size={{xs:12,sm:12,md:12,lg:12}}  >
                                    <Typography variant='h3'  style={{color:props.color,fontSize:props.fontSize ? props.fontSize : "2rem"}} textAlign={"center"} className={props.mainTypo} >{props.eventName}</Typography>
                                </Grid>		
                                { isSmallScreen ? 
                                (
                                    <Grid size={{xs:12,sm:5,md:5,lg:5}} display="flex"  justifyContent={"center"} alignItems={"center"}>
                                        <FontAwesomeIcon fontSize={"20px"} color={props.color} icon={faCalendarRegular} />
                                        <Typography marginLeft={1} variant='body1'  style={{color:props.color}} textAlign={"center"} className={props.bodyTypo} >{dayjs(props.date).format("dddd D MMMM YYYY").toLocaleUpperCase()}</Typography>
                                    </Grid>
                                )
                                :
                                (
                                    <Grid size={{xs:12,sm:5,md:5,lg:5}} display="flex"  justifyContent={"center"} alignItems={"center"}>
                                    <FontAwesomeIcon fontSize={"20px"} color={props.color} icon={faCalendarRegular} />
                                        <Typography  marginLeft={2} variant='body1' style={{color:props.color}} textAlign={"center"} className={props.bodyTypo} >{dayjs(props.date).format("dddd D MMMM YYYY").toLocaleUpperCase()}</Typography>
                                    </Grid>
                                )

                                }
                                
                                <Grid size={{xs:12,sm:2,md:2,lg:2}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                    <Paper sx={{
                                        borderRadius:"50%",
                                        bgcolor:props.colorIcon ? props.colorIcon : props.color,
                                        height: isSmallScreen ? 30 : 50,
                                        width:isSmallScreen ? 30 : 50,
                                        display:"flex" ,
                                        justifyContent:"center",
                                        alignItems:'center' 
                                    }}
                                        elevation={0} >
                                         <FavoriteBorderRoundedIcon sx={{color:"white"}} />
                                    </Paper>
                                 
                                </Grid>
                                { isSmallScreen ? 
                                (
                                <Grid size={{xs:12,sm:5,md:5,lg:5}} display="flex" justifyContent={"center"}  alignItems={"center"}>
                                    <AccessTimeIcon style={{color:props.color}} ></AccessTimeIcon> 
                                    <Typography sx={{marginLeft:"2px"}} variant='body1' style={{color:props.color}}  textAlign={"center"} className={props.bodyTypo}>  {dayjs(props.date).format("hh:mm A")}</Typography>
                                </Grid>
                                )
                                :
                                (
                                      <Grid size={{xs:12,sm:5,md:5,lg:5}} display="flex"  justifyContent={"center"} alignItems={"center"}>
                                    <AccessTimeIcon style={{color:props.color}} ></AccessTimeIcon> 
                                    <Typography  marginLeft={2} variant='body1' style={{color:props.color}}  textAlign={"center"} className={props.bodyTypo}>  {dayjs(props.date).format("hh:mm A")}</Typography>
                                </Grid>
                                )

                                }
                             
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography  variant='body1'  textAlign={"center"} className={props.bodyTypo} fontWeight={700}><b>{props.locationName}</b></Typography>
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Typography   variant='body1' textAlign={"center"} className={props.bodyTypo} >{props.address}</Typography>
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                </Grid>
                                <Grid size={{xs:12,sm:12,md:12,lg:12}}  display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                    <CustomButton href={props.href} bgColor={props.colorButton} color={'white'} label={'Ver ubicación'} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>			
                </Fade>	
            </Grid>

    )
}
export default EventCardImage;
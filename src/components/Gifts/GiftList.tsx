import { IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import BankCard from './BankCard';
import { GiftItem } from './models/gifItem';
import { BankAccount } from './models/bankAccount';
import { Fade } from 'react-awesome-reveal';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
export interface GiftListProps {
    mainPhrase?:string;
    items?:GiftItem[]
    mainTypo:string;
    bodyTypo:string;
    color:string;
    bgColor?:string;
    bankDetails?:BankAccount[];
    bankIconStart?:string;
    bankIconEnd?:string;
    showEnvelope:boolean;
    envelopePhrase?:string;
}


const GiftList = (props:GiftListProps) =>{
    return (
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:props.bgColor}}>
             <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" triggerOnce={true}>
                <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`}>Mesa de regalos</Typography>
                </Fade>
            </Grid>	
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Typography variant='body1'  textAlign={"center"} className={`${props.bodyTypo}`}>{props.mainPhrase}</Typography>
            </Grid>	
            { props.items && props.items?.length === 1 &&
            (
                
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                        <Paper elevation={0} sx={{display:"column",justifyItems:"center"}}>
                        <img width="175px" src={props.items[0].icon}/>	
                        <Typography variant='body1' textAlign={"center"} className={`${props.bodyTypo}`}>
                            Clic <a style={{color:props.color}} href={props.items[0].link}>aquí</a> para ir a
                            nuestra mesa de regalos
                                
                        </Typography>
                        </Paper>
                    </Grid>

            )
            }
            { props.items && props.items?.length > 1 &&
            (           
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={'flow'} justifyItems={'center'} >
                      
                           
                        {props.items?.map((item, index) => (
                            <Paper elevation={2} key={index} sx={{
                                border:"1px solid rgb(215, 174, 84, .2)",
                                boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                                marginBottom:2,
                                display:'flex',
                                padding:2,
                                alignItems:'center',justifyContent:'space-between'
                                }}  >
                            
                                  <img style={{width:"175px"}} src={item.icon}/>	
                               
                                 <IconButton href={item.link}>
                                    <KeyboardArrowRightRoundedIcon sx={{color:props.color}} />
                                </IconButton>
                          </Paper>
                        ))}
                          
                        
                      
                    </Grid>
           
            )}
            { props.showEnvelope &&
            (
               
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
                     <Fade direction="up" triggerOnce={true} >
                        <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`}>Lluvia de sobres</Typography>
                        <div style={{display:"block", justifyItems:"center"}}>
                         { props.bankIconStart &&
                        (
                            <img height="60px" src={props.bankIconEnd}/>	
                        )}
                      
                        <Typography variant='body1' textAlign={"center"} className={`${props.bodyTypo}`} >{props.envelopePhrase}</Typography>
                        
                        { props.bankIconEnd &&
                        (
                            <img height="60px" src={props.bankIconEnd}/>	
                        )}
                          </div>
                        </Fade>
                </Grid>
           
            )}
            { props.bankDetails &&
            (           
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                      
                        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} >
                        {props.bankDetails?.map((item, index) => (
                           <BankCard key={index} type={item.type} number={item.number} bank={item.bank} name={item.name} color={props.color} bodyTypo={props.bodyTypo}></BankCard>
                        ))}
                        </Grid>
                    </Grid>
           
            )}
           
	    </Grid>
    )
}

export default GiftList;
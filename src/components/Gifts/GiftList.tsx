import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CustomButton from '../CustomButton/CustomButton';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BankCard from './BankCard';
import { GiftItem } from './models/gifItem';
import { BankAccount } from './models/bankAccount';
import { Fade } from 'react-awesome-reveal';
export interface GiftListProps {
    mainPhrase?:string;
    items?:GiftItem[]
    mainTypo:string;
    bodyTypo:string;
    color:string;
    bgColor?:string;
    bankDetails?:BankAccount[];
    bankIcon?:string
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
                        <Paper elevation={6}>
                        <img width="175px" src={props.items[0].icon}/>	
                        <Typography variant='body1' color={props.color} textAlign={"center"} className={`${props.bodyTypo}`}>
                            Clic <a style={{color:props.color}} href={props.items[0].link}>aquí</a> para ir a
                            nuestra mesa de regalos
                                
                        </Typography>
                        </Paper>
                    </Grid>

            )
            }
            { props.items && props.items?.length > 1 &&
            (           
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                      
                        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} justifyContent={"center"} >
                        {props.items?.map((item, index) => (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} key={index} display={"inline-flex"}  justifyContent={"center"}>
                                  <img width="175px" src={item.icon}/>	
                                 <CustomButton href={item.link} bgColor={props.color} color={'white'} label={'Ir a mesa regalos'} icon={<CardGiftcardIcon></CardGiftcardIcon>} />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
           
            )}
            { props.bankIcon &&
            (
               
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                     <Fade direction="up" triggerOnce={true} >
                        <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`}>Lluvia de sobres</Typography>
                        <div style={{display:"flex", justifyContent:"center"}}>
                        <img height="60px" src={props.bankIcon}/>	
                        </div>
                        <Typography variant='body1' textAlign={"center"} className={`${props.bodyTypo}`} >Tendremos una caja para sobres el día del evento por si deseas hacernos un regalo en efectivo o si lo prefieres puedes hacer transferencia bancaria a la siguiente cuenta:</Typography>
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
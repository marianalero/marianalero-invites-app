import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import formal from './../../assets/iconos/dresscode/formal.svg';
import etiqueta from './../../assets/iconos/dresscode/etiqueta.svg';
import { Fade } from 'react-awesome-reveal';
export interface DressCodeProps
{
    mainTypo?:string;
    bodyTypo?:string;
    color:string;
    type:number;
    title:string;
    description?:string;
    image?:string;
}

const DressCode  = (props:DressCodeProps) => 
{
    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" triggerOnce={true}>
                <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`}>Código de vestimenta</Typography>
                <Typography textAlign={"center"} variant='subtitle1' fontWeight={400}>{props.title}</Typography>
                <Typography variant='body1'>{props.description}</Typography>
                </Fade>
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                
               { props.type == 1 &&
                   <img src={formal} height="100" />
               }
               { props.type == 2 &&
                   <img src={etiqueta} height="100" />
               }
               { props.type == 3 &&
                   <img src={props.image} height="100" />
               }
            </Grid>
        </Grid>
    )
}

export default DressCode;
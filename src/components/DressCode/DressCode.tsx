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
    omitColors?:string[];
    omitColorsLabel?:string;
}

const DressCode  = (props:DressCodeProps) => 
{
    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" triggerOnce={true}>
                <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`}>Código de vestimenta</Typography>
                <Typography  className={props.bodyTypo} textAlign={"center"} variant='subtitle1' fontWeight={400}>{props.title}</Typography>
                <Typography className={props.bodyTypo} variant='body1'>{props.description}</Typography>
                </Fade>
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                
               { props.type == 1 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={formal} height="100" />
                   </Fade>
               }
               { props.type == 2 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={etiqueta} height="100" />
                   </Fade>
               }
               { props.type == 3 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={props.image} height="100" />
                   </Fade>
               }
            </Grid>
            
                    { props.omitColors && (
                        <><Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Typography className={props.bodyTypo} textAlign={"center"} variant='subtitle1' fontWeight={400}>{props.omitColorsLabel}</Typography>
                </Grid><Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={1}>
                        <div style={{ backgroundColor: "#FFFFFF", borderColor: "lightgray", borderStyle: "solid", borderWidth: 1, borderRadius: "50%", height: "40px", width: "40px" }}></div>

                        {props.omitColors.map((item, index) => (
                            <div key={index} style={{ backgroundColor: item, borderRadius: "50%", height: "40px", width: "40px" }}></div>
                        ))}

                    </Grid></>
                        )
                    }
              
        </Grid>
    )
}

export default DressCode;
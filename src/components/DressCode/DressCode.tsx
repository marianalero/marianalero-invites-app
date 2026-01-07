import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import formal from './../../assets/iconos/dresscode/formal.svg';
import etiqueta from './../../assets/iconos/dresscode/etiqueta.svg';
import { Fade } from 'react-awesome-reveal';
import { t } from 'i18next';
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
    omitColorsText?:string;
    fontWeight?:string;
    fontSize?:string;
}

const DressCode  = (props:DressCodeProps) => 
{
    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                <Fade direction="up" triggerOnce={true}>
                <Typography variant='h3' color={props.color} textAlign={"center"} className={`${props.mainTypo}`} sx={{fontSize: props.fontSize ? props.fontSize : "3rem"}}>{t("dresscode.title")}</Typography>
                <Typography  className={props.bodyTypo} textAlign={"center"} variant='subtitle1' fontWeight={props.fontWeight ? props.fontWeight:400}>{props.title}</Typography>
                <Typography className={props.bodyTypo} variant='body1' textAlign={"center"}>{props.description}</Typography>
                </Fade>
            </Grid>
            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                
               { props.type == 1 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={formal} height="150" />
                   </Fade>
               }
               { props.type == 2 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={etiqueta} height="150" />
                   </Fade>
               }
               { props.type == 3 &&
                    <Fade direction="up" triggerOnce={true}>
                   <img src={props.image} style={{height:"40vh"}}/>
                   </Fade>
               }
            </Grid>
            
                    {props.omitColorsLabel && (
  <>
    <Grid 
      container 
      size={{xs:12,sm:12,md:12,lg:12}}
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Typography 
        className={props.bodyTypo} 
        textAlign="center" 
        variant="subtitle1" 
        fontWeight={400}
      >
        {props.omitColorsLabel}
      </Typography>
        
         
    </Grid>
    
  {props.omitColorsText && (
    <Grid 
      container 
      size={{xs:12,sm:12,md:12,lg:12}}
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
            <Typography variant='body2'
              className={props.bodyTypo}  
              >
              {props.omitColorsText}
            </Typography>
            </Grid>
          )}
    <Grid
  container
   size={{xs:12,sm:12,md:12,lg:12}}
  display="flex"
  alignItems="center"
  justifyContent="center"
  gap={1}
>
  {props.omitColors && props.omitColors.length > 0 && (
    <>
      {/* Primer círculo blanco */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "lightgray",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: "50%",
          height: "40px",
          width: "40px",
        }}
      ></div>

      {/* Colores de props.omitColors */}
      {props.omitColors.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item,
            borderRadius: "50%",
            height: "40px",
            width: "40px",
          }}
        ></div>
      ))}
    </>
  )}
</Grid>
  </>
)}
              
        </Grid>
    )
}

export default DressCode;
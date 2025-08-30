import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Fade } from 'react-awesome-reveal';
export interface WithoutKidsProps
{
    bodyTypo?:string;
    title?:string;
    subtitle?:string;
    subtitle2?:string;
        hideTitle?:boolean;
}

const WithoutKids  = (props:WithoutKidsProps) => 
    {
        return(
            <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                     <Fade direction="up" triggerOnce={true} >
                        {!props.hideTitle && (
                        <Typography  className={props.bodyTypo} textAlign={"center"} variant='subtitle1' fontWeight={400}> {props.title ? props.title : "¡Mamá y papá merecen un día libre!"} </Typography>
                        )}
                    <Typography  className={props.bodyTypo} textAlign={"center"} variant='body1'> {props.subtitle ? props.subtitle : "Respetuosamente"} <b>{props.subtitle2 ? props.subtitle2 : "sin niños"}</b></Typography>
                      </Fade>
                </Grid>
            </Grid>
        )
    }
    
    export default WithoutKids;
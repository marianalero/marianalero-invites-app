import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Fade } from 'react-awesome-reveal';
const WithoutKids  = () => 
    {
        return(
            <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                     <Fade direction="up" triggerOnce={true} >
                    <Typography textAlign={"center"} variant='subtitle1' fontWeight={400}>¡Mamá y papá merecen un día libre!</Typography>
                    <Typography textAlign={"center"} variant='body1'>Respetusamente <b>sin niños</b></Typography>
                      </Fade>
                </Grid>
            </Grid>
        )
    }
    
    export default WithoutKids;
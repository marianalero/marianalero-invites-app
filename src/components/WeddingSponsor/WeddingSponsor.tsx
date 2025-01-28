import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { WeddingSponsorProps } from "./models/Sponsors";


const WeddingSponsor  = (props:WeddingSponsorProps) => {

    return(
        <Grid container spacing={1} display={"flex"} alignItems={"center"} padding={2} >			
						<Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Typography  sx={{color:props.color}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`} >Padrinos</Typography>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                            <img src={props.addorment} height="100" />
                        </Grid>
                        {
                            props.sponsors?.map((item,index) => (
                                <Grid key={index} size={{xs:12,sm:12,md:12,lg:12}} >
                                <Typography textAlign={"center"} className={`${props.bodyTypo}`}>{item.sponsorOne?.name}</Typography>
                                <Typography  textAlign={"center"} className={`${props.bodyTypo}`}>{item.sponsorTwo?.name}</Typography>
                                </Grid>	
                            ))
                        }	
		</Grid>
    )
}
export default WeddingSponsor;
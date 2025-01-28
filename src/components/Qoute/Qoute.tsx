import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ImageCircle from "../ImgCircle/ImgCircle";

export interface QouteProps {
    qoute:string;
    images?:string[]
}

const Qoute  = (props:QouteProps) => {

    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} minHeight={"30vh"} >
            
            {props.images?.map((img, index) => (
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <ImageCircle key={index} imgSrc={img} />
                </Grid>
            ))}
            
            
			<Grid size={{xs:12,sm:12,md:12,lg:12}}>
							
                <Typography typography={"body"}  textAlign={"center"} >{props.qoute}</Typography>
                <Typography typography={"body"}  textAlign={"center"} ><strong> &mdash; Marai & Jose Carlos</strong></Typography>
            
            </Grid>
		</Grid>
    )
}
export default Qoute;
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ImageCircle from "../ImgCircle/ImgCircle";
import { Fade } from "react-awesome-reveal";

export interface QouteProps {
    qoute:string;
    images?:string[]
}

const Qoute  = (props:QouteProps) => {

    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} minHeight={"30vh"} >
            
            {props.images?.map((img, index) => (
                
                <Grid size={{xs:12,sm:12,md:12,lg:12}} key={index} justifyContent={"center"} display={"flex"}>
                     <Fade direction="up" triggerOnce={true} > <ImageCircle  imgSrc={img} /></Fade>
               
                </Grid>
            ))}
            
            
			<Grid size={{xs:12,sm:12,md:12,lg:12}}>
            <Fade direction="up" triggerOnce={true}>
            <Typography typography={"body"}  textAlign={"center"} >{props.qoute}</Typography>
            <Typography typography={"body"}  textAlign={"center"} ><strong> &mdash; Marai & Jose Carlos</strong></Typography>
            </Fade>		
               
            
            </Grid>
		</Grid>
    )
}
export default Qoute;
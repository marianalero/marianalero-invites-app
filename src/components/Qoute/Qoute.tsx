import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ImageCircle from "../ImgCircle/ImgCircle";
import { Fade } from "react-awesome-reveal";
import Adornment from "../Adornment/Adornment";

export interface QouteProps {
    qoute:string;
    images?:string[];
    bgColor?:string;
    textColor?:string;
    bodyTypo:string;
    addormentStart?:string;
    addormentEnd?:string;
    fontsize?:string;
    lineheight?:string;
}

const Qoute  = (props:QouteProps) => {

    return(
        <Grid container
        spacing={2}
        display={"flex"}
        alignItems={"center"}
        padding={4}
        minHeight={"30vh"} 
        sx={{
            bgcolor : props.bgColor ? props.bgColor : "white",
            color : props.textColor ? props.textColor : "black"
        }}            
        >
            
            {props.images?.map((img, index) => (
                
                <Grid size={{xs:12,sm:12,md:12,lg:12}} key={index} justifyContent={"center"} display={"flex"}>
                     <Fade direction="up" triggerOnce={true} > <ImageCircle  imgSrc={img} /></Fade>
               
                </Grid>
            ))}
            
            {
                props.addormentStart &&(
                
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} justifyContent={"center"} display={"flex"}>
                        <Fade direction="up" >
                            <Adornment image={props.addormentStart} width={"250px"} />
                        </Fade>
                    </Grid>
                
                )
            }
			<Grid size={{xs:12,sm:12,md:12,lg:12}}>
            <Fade direction="up" triggerOnce={true}>
            <Typography className={props.bodyTypo}  textAlign={"center"}  sx={{fontSize: props.fontsize ? props.fontsize : "1rem", lineHeight: props.lineheight ? props.lineheight : "1.5rem"}} >{`"${props.qoute}"`}</Typography>
            </Fade>		
            </Grid>
            {
                props.addormentEnd &&(
                
                    <Grid size={{xs:12,sm:12,md:12,lg:12}} justifyContent={"center"} display={"flex"}>
                        <Fade direction="up" >
                            <Adornment image={props.addormentEnd} width={"250px"} />
                        </Fade>
                    </Grid>

                )
            }
          
            
            
		</Grid>
    )
}
export default Qoute;
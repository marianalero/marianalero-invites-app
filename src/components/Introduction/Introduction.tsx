import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import Adornment from "../Adornment/Adornment";

export interface IntroductionProps {
    mainPhrase?:string;
    images?:string[]
    mainTypo?:string;
    bodyTypo?:string;
    brideFather?:string;
    groomFather?:string;
    brideMother?:string;
    groomMother?:string;
    color:string;
    adornment?:string;
}

const Introduction  = (props:IntroductionProps) => {

    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={3} minHeight={"50vh"}>			
						<Grid size={{xs:12,sm:12,md:12,lg:12}} >
                        <Fade direction="up" >
                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >Deseamos compartir con ustedes la alegría de nuestra unión</Typography>
                        </Fade>
                        </Grid>	
                        
                            {
                                props.adornment && (
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                <Fade direction="up" >
                                    <Adornment image={props.adornment} width={"250px"} />                                                            
                                </Fade>
                                </Grid>	
                                )
                            }


                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`}>Con la bendición de Dios y el apoyo incondicional de nuestros padres</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:props.color}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideMother}</Typography>
                                <Typography sx={{color:props.color}}  variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideFather}</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:props.color}}  variant="h4" textAlign={"center"}className={`${props.mainTypo}`} >&</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:props.color}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`} >{props.groomMother}</Typography>
                            <Typography sx={{color:props.color}}  variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.groomFather}</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >Junto con nuestras familias te invitamos a ser parte de esta linda unión </Typography>
                            </Fade>
                        </Grid>		
                         {
                                props.adornment && (
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                <Fade direction="up" >
                                    <Adornment image={props.adornment} width={"250px"} />                                                            
                                </Fade>
                                </Grid>	
                                )
                            }	
		</Grid>
    )
}
export default Introduction;
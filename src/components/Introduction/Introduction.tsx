import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Fade } from "react-awesome-reveal";
import Adornment from "../Adornment/Adornment";
import { t } from "i18next";

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
    amperson?:string;
    firstQoute?:string;
    secondQoute?:string;
    thirdQoute?:string;
    fontSize?:string;
}

const Introduction  = (props:IntroductionProps) => {

    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={3} minHeight={"50vh"}>			
						<Grid size={{xs:12,sm:12,md:12,lg:12}} >
                        <Fade direction="up" >
                            {props.firstQoute ? 
                            (
                                 <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >{props.firstQoute}</Typography>
                            )
                            :(
                                <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >{t("introduction.line1")}</Typography>

                            )}
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
                                {props.secondQoute ? 
                            (
                                 <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >{props.secondQoute}</Typography>
                            )
                            :(
                             <Typography  textAlign={"center"} className={`${props.bodyTypo}`}>{t("introduction.line2")}</Typography>

                            )}
                           
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:props.color, fontSize: props.fontSize ? props.fontSize : "40px"}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideMother}</Typography>
                                <Typography sx={{color:props.color, fontSize: props.fontSize ? props.fontSize : "40px"}}  variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideFather}</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                                <Typography sx={{color:props.color, fontSize: props.fontSize ? props.fontSize : "40px"}}  variant="h4" textAlign={"center"}className={`${props.mainTypo}`} >{props.amperson ? props.amperson :"&"}</Typography>
                            </Fade >
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Fade direction="up" >
                            
                            <Typography sx={{color:props.color, fontSize: props.fontSize ? props.fontSize : "40px"}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`} >{props.groomMother}</Typography>
                            <Typography sx={{color:props.color, fontSize: props.fontSize ? props.fontSize : "40px"}}  variant="h4" textAlign={"center"} className={`${props.mainTypo}`}>{props.groomFather}</Typography>
                            </Fade>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" >
                                 {props.thirdQoute ? 
                            (
                                 <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >{props.thirdQoute}</Typography>
                            )
                            :(
                                <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >{t("introduction.line3")}</Typography>

                            )}
                           
                          
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
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { WeddingSponsorProps } from "./models/Sponsors";
import Adornment from "../Adornment/Adornment";
import { Fade } from "react-awesome-reveal";
import { t } from "i18next";


const WeddingSponsor  = (props:WeddingSponsorProps) => {

    return(
        <Grid container spacing={1} display={"flex"} alignItems={"center"} paddingTop={8} paddingBottom={8} sx={{bgcolor:props.bgColor}} paddingX={2} >			
						<Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Fade direction="up" triggerOnce={true}>
                                <Typography  sx={{color:props.color, fontSize: props.headerFontSize ? props.headerFontSize : "2rem"}} variant="h4" textAlign={"center"} className={`${props.mainTypo}`} >{t("weddingSponsors")}</Typography>
                            </Fade>
                       </Grid>	
                       {
                        props.addorment && (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <Fade direction="up" triggerOnce={true} >
                                    <Adornment image={props.addorment} width={"250px"} />
                                </Fade>
                            </Grid>
                        )
                       }
                       
                        {
                            props.sponsors?.map((item,index) => (
                                <Grid key={index} container size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                        {
                                            item.title && (
                                                <Fade direction="up" triggerOnce={true} >
                                                    <Typography  sx={{ fontSize: "1rem",fontWeight:600, marginTop:4,fontStyle:"italic!important"}} variant="body1" textAlign={"center"} className={`${props.bodyTypo}`} >{item.title}</Typography>
                                                </Fade>
                                            )
                                        }
                                    </Grid>
                                    <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                        <Fade direction="up" triggerOnce={true} >
                                            <Typography textAlign={"center"} className={`${props.bodyTypo}`}>{item.sponsorOne?.name}</Typography>
                                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`}>{item.sponsorTwo?.name}</Typography>
                                        </Fade>
                                    </Grid>
                                </Grid>
                            ))
                        }	
                        {
                        props.addormentEnd && (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <Fade direction="up" triggerOnce={true} >
                                    <Adornment image={props.addormentEnd} width={"250px"} />
                                </Fade>
                            </Grid>
                        )
                       }
		</Grid>
    )
}
export default WeddingSponsor;
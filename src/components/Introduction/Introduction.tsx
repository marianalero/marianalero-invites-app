import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

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
}

const Introduction  = (props:IntroductionProps) => {

    return(
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>			
						<Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >Deseamos compartir con ustedes la alegría de nuestra unión</Typography>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`}>Con la bendición de Dios y el apoyo incondicional de nuestros padres</Typography>
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Typography sx={{color:props.color}} variant="h5" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideMother}</Typography>
                            <Typography sx={{color:props.color}}  variant="h5" textAlign={"center"} className={`${props.mainTypo}`}>{props.brideFather}</Typography>
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                            <Typography sx={{color:props.color}}  variant="h4" textAlign={"center"}className={`${props.mainTypo}`} >&</Typography>
                            
                        </Grid>	
                        <Grid size={{xs:12,sm:4,md:4,lg:4}} >
                             {/* <Image src="./images/iconos-andrea/3.svg" /> */}
                            <Typography sx={{color:props.color}} variant="h5" textAlign={"center"} className={`${props.mainTypo}`} >{props.groomMother}</Typography>
                            <Typography sx={{color:props.color}}  variant="h5" textAlign={"center"} className={`${props.mainTypo}`}>{props.groomFather}</Typography>
                        </Grid>	
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Typography  textAlign={"center"} className={`${props.bodyTypo}`} >Junto con nuestras familias te invitamos a ser parte de esta linda unión </Typography>
                        </Grid>			
		</Grid>
    )
}
export default Introduction;
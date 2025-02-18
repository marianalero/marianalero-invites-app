
import Grid from '@mui/material/Grid2';
interface AdornmentProps {
    image?: string; // Asumiendo que es una URL
    width: string; // Opcional
  }
const Adornment = (props:AdornmentProps) => {
    {
        return(
            <Grid container spacing={0} display={"flex"} alignItems={"center"} padding={0}>
              <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                    <img src={props.image} width={props.width} />
                </Grid>
            </Grid>
        )
    }
};
export default Adornment;
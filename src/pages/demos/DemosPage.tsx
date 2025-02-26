import { Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderHome from '../../layouts/headerHome';
import demo1 from './../../assets/1.svg';
const DemosPage  = () => {
    return (
        <><HeaderHome></HeaderHome>
        <Grid container spacing={2} display={"flex"} alignItems={"center"}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Typography typography={"h4"} color='primary' textAlign={"center"} className='cinzel-400'>Demos</Typography>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4 }}>

                <div className="d-flex justify-center">
                    <img src={demo1} />
                </div>

                <Typography typography={"h4"} color='primary' textAlign={"center"}>Demo1</Typography>
                <div className="d-flex justify-center">    
                    <Button href="/demos/1"> Ver Demo </Button>
                </div>
            
            </Grid>
        </Grid></>
    )
}
export default DemosPage;
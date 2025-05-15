import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderHome from '../../layouts/headerHome';
import demo1 from './../../assets/1.svg';
import demo3 from './../../assets/3.svg';
import CustomButton from "../../components/CustomButton/CustomButton";
const DemosPage  = () => {
    return (
        <><HeaderHome></HeaderHome>
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Typography typography={"h2"} color='primary' textAlign={"center"} className='cinzel-400'>Demos</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12,  md: 6, lg: 6}}  display={"flex"} justifyContent={"center"} gap={3}>

                <div className="justify-items-center align-items">
                    <img src={demo1} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Demo 1</Typography>
                 <CustomButton  bgColor="#a41423" color="white"label="Ver Demo"  href="/demos/1"/>
                </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}  display={"flex"} justifyContent={"center"} gap={3}>
                <div className="justify-items-center align-items">
                    <img  src={demo3} height={300} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Demo 2</Typography>
                    <CustomButton bgColor="#a41423" label="Ver Demo"  color="white"  href="/demos/2"/>

                </div>
            </Grid>
        </Grid></>
    )
}
export default DemosPage;
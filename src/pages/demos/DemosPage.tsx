import { Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HeaderHome from '../../layouts/headerHome';
import demo1 from './../../assets/3.png';
import demo2 from './../../assets/2.png';
import demo3 from './../../assets/1.png';
import Footer from "../../components/Footer/Footer";

const DemosPage  = () => {
    return (
        <><HeaderHome></HeaderHome>
          <Container maxWidth="md">
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} minHeight={"100vh"}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Typography typography={"h2"} color='primary' textAlign={"center"} className='cinzel-400'>Modelos</Typography>
            </Grid>
            <Grid size={{ xs: 6, sm: 6,  md: 6, lg: 4}}  display={"flex"} justifyContent={"center"} gap={3}>

                <div className="justify-items-center align-items">
                    <img src={demo1} height={300}/>
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Clasico 1</Typography>
                <Button variant="contained" color= "primary"
                            href="/demos/1"
                            sx={{
                    
                            borderRadius:8,
                            }}
                        >
                      Ver Modelo
                    </Button>
                </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 4 }}  display={"flex"} justifyContent={"center"} gap={3}>
                <div className="justify-items-center align-items">
                    <img  src={demo2} height={300} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Clasico 2</Typography>
                    <Button variant="contained"color= "primary"
                            href="/demos/2"
                            sx={{
                    
                            borderRadius:8,
                            }}
                        >
                      Ver Modelo
                    </Button>

                </div>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 4 }}  display={"flex"} justifyContent={"center"} gap={3}>
                <div className="justify-items-center align-items">
                    <img  src={demo3} height={300} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Clásico</Typography>
                        <Typography className="dm-serif-display-regular" typography={"body1"} color='primary' textAlign={"center"}>*Sin fotografías</Typography>
                        <Button variant="contained" color= "primary"
                            href="/demos/3"
                            sx={{
                    
                            borderRadius:8,
                            }}
                        >
                         Ver Modelo
                    </Button>

                </div>
            </Grid>
             <Grid size={{ xs: 6, sm: 6, md: 6, lg: 4 }}  display={"flex"} justifyContent={"center"} gap={3}>
                <div className="justify-items-center align-items">
                    <img  src={demo3} height={300} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Basico</Typography>                        <Button variant="contained" color= "primary"
                            href="/demos/3"
                            sx={{
                    
                            borderRadius:8,
                            }}
                        >
                         Ver Modelo
                    </Button>

                </div>
            </Grid>
        </Grid>
        </Container>
        <Footer />
        </>
    )
}
export default DemosPage;
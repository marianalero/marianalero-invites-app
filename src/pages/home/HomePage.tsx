import { Box, Typography ,Button, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {Image } from 'react-bootstrap';
import HeaderHome from '../../layouts/headerHome';
import slide3 from './../../assets/slides/prinicpal.png';
import logo from './../../assets/logos/2.png';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <><HeaderHome></HeaderHome>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"} paddingX={4} paddingY={4}>
                <Grid size={{xs:12,sm:6,md:6,lg:6}}>
                    <Typography typography={"h4"} color='primary' textAlign={"center"} className='cinzel-400'>Tu evento, tu estilo</Typography>
                    <div className='d-flex justify-center'>
                    <Image className='logo-home' src={logo} rounded  />
                    </div>
                    <div className='d-flex justify-center'>
                    <Button sx={{width:"200px",marginTop:2}} href='/demos' variant='contained' color='primary'>Ver Modelos</Button>
                    </div>
                </Grid>
                <Grid size={{xs:12,sm:6,md:6,lg:6}} display={"flex"} justifyContent={"center"}>
                  <Image src={slide3} style={{height: isSmallScreen ? "50vh" : "calc(100vh - 100px)"}}></Image>
                </Grid>
            </Grid>
        </Box>
        <Footer></Footer>
        </>
    )
}
export default Home;
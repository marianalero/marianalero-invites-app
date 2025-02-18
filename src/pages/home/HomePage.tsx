import { Box, Typography ,Button} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Carousel } from 'react-bootstrap';
import HeaderHome from '../../layouts/headerHome';
import slide1 from './../../assets/slides/1.png';
import slide2 from './../../assets/slides/2.png';
import slide3 from './../../assets/slides/3.png';

const Home = () => {
    return (
        <><HeaderHome></HeaderHome>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"} >
                <Grid size={{xs:12,sm:6,md:6,lg:6}}>
                    <Typography typography={"h4"} color='primary' textAlign={"center"} className='cinzel-400'>Tu evento, tu estilo</Typography>
                    <Typography typography={"h2"} color='primary'  textAlign={"center"} className='dm-serif-display-regular'>MarianaLero</Typography>
                    <Typography typography={"subtitle"}  textAlign={"center"}>Invitaciones digitales</Typography>
                    <div className='d-flex justify-center'>
                    <Button sx={{width:"200px",marginTop:2}} href='/demos' variant='contained' color='primary'>Ver Demo</Button>
                    </div>
                </Grid>
                <Grid size={{xs:12,sm:6,md:6,lg:6}}>
                    <Carousel>
                        <Carousel.Item className='d-flex justify-center'>
                            <img src={slide1} className='slide-img'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide2} className='slide-img'/>      
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={slide3} className='slide-img'/>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
            </Grid>
        </Box></>
    )
}
export default Home;
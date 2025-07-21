import { Button, Container, Typography,Card, CardMedia, CardContent } from "@mui/material";
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
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={2} minHeight={"100vh"} gap={2}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} padding={1}>
                <Typography typography={"h2"} color='primary' textAlign={"center"} className='cinzel-400'>Modelos</Typography>
            </Grid>     
          <Grid size={{ xs: 6, sm: 6,  md: 6, lg: 4}}  padding={1}>
            <Card
                sx={{
                    maxWidth: 250,
                    textAlign: 'center',
                    backgroundColor: '#f2eadd',
                    overflow: 'visible'
                }}
                elevation={0}
                >
                <CardMedia
                    component="img"
                    image={demo1}
                    alt={"Elena Marai y Jose Carlos"}
                    sx={{
                    width: '100%',
                    borderRadius: '16px',
                    }}
                />
                <CardContent sx={
                    {
                        padding:"0px"
                    }
                }>
                    <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Cinzel',
                        fontWeight: 'bold',
                        color: '#a41423',
                        mt: 2
                    }}
                    >
                   Modelo Memorias
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Montserrat',
                        color: '#a41423',
                        mb: 2
                    }}
                    >
               Elena Marai y Jose Carlos
                    </Typography>
                    <Button
                    variant="contained"
                    href={"/demos/1?number=2"}
                    sx={{
                        backgroundColor: '#a41423',
                        color: '#fff',
                        borderRadius: 8,
                        textTransform: 'none',
                        px: 3,
                        fontFamily: 'Montserrat',
                        '&:hover': {
                        backgroundColor: '#b3151d'
                        }
                    }}
                    >
                    Ver Modelo
                    </Button>
                </CardContent>
                </Card>
          </Grid>
          <Grid size={{ xs: 6, sm: 6,  md: 6, lg: 4}}  padding={1}>
            <Card
                elevation={0}
                sx={{
                    maxWidth: 250,
                    textAlign: 'center',
                    backgroundColor: '#f2eadd',
                    borderRadius: 4,
                   
                    overflow: 'visible'
                }}
                >
                <CardMedia
                    component="img"
                    image={demo2}
                    alt={"Selene y Juan Carlos"}
                    sx={{
                    width: '100%',
                    borderRadius: '16px',
                    }}
                />
                <CardContent sx={
                    {
                        padding:"0px"
                    }
                }>
                    <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Cinzel',
                        fontWeight: 'bold',
                        color: '#a41423',
                        mt: 2
                    }}
                    >
                   Modelo Memorias
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Montserrat',
                        color: '#a41423',
                        mb: 2
                    }}
                    >
               Selene y Juan Carlos
                    </Typography>
                    <Button
                    variant="contained"
                    href={"/demos/2?number=2"}
                    sx={{
                        backgroundColor: '#a41423',
                        color: '#fff',
                        borderRadius: 8,
                        textTransform: 'none',
                        px: 3,
                        fontFamily: 'Montserrat',
                        '&:hover': {
                        backgroundColor: '#b3151d'
                        }
                    }}
                    >
                    Ver Modelo
                    </Button>
                </CardContent>
                </Card>
          </Grid>         
           <Grid size={{ xs: 6, sm: 6,  md: 6, lg: 4}}  padding={1}>
            <Card
                 elevation={0}
                sx={{
                    maxWidth: 250,
                    textAlign: 'center',
                    backgroundColor: '#f2eadd',
                    borderRadius: 4,
  
                    overflow: 'visible'
                }}
                >
                <CardMedia
                    component="img"
                    image={demo3}
                    alt={"Selene y Juan Carlos"}
                    sx={{
                    width: '100%',
                    borderRadius: '16px',

                    }}
                />
                <CardContent sx={
                    {
                        padding:"0px"
                    }
                }>
                    <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Cinzel',
                        fontWeight: 'bold',
                        color: '#a41423',
                        mt: 2
                    }}
                    >
                   Modelo Memorias
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Montserrat',
                        color: '#a41423',
                        mb: 2
                    }}
                    >
              Sin fotografías
                    </Typography>
                    <Button
                    variant="contained"
                    href={"/demos/3?number=2"}
                    sx={{
                        backgroundColor: '#a41423',
                        color: '#fff',
                        borderRadius: 8,
                        textTransform: 'none',
                        px: 3,
                        fontFamily: 'Montserrat',
                        '&:hover': {
                        backgroundColor: '#b3151d'
                        }
                    }}
                    
                    >
                    Ver Modelo
                    </Button>
                </CardContent>
                </Card>
          </Grid>        
      </Grid>
            {/* <Grid size={{ xs: 6, sm: 6,  md: 6, lg: 4}}  display={"flex"} justifyContent={"center"} gap={3}>

                <div className="justify-items-center align-items">
                    <img src={demo1} height={300}/>
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Memorias</Typography>
                    <Typography className="dm-serif-display-regular" typography={"body1"} color='primary' textAlign={"center"}>Elena Marai y Jose Carlos</Typography>

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
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Memorias</Typography>
                    <Typography className="dm-serif-display-regular" typography={"body1"} color='primary' textAlign={"center"}>Selene y Juan Carlos</Typography>
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
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Memorias</Typography>
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
                <div className="d-flex justify-center align-items">
                    <img  src={demo3} height={300} />
                    <Typography className="dm-serif-display-regular" typography={"h4"} color='primary' textAlign={"center"}>Modelo Esencia</Typography>                        <Button variant="contained" color= "primary"
                            href="/demos/3"
                            sx={{
                    
                            borderRadius:8,
                            }}
                        >
                         Ver Modelo
                    </Button>

                </div>
            </Grid> */}
        </Container>
        <Footer />
        </>
    )
}
export default DemosPage;
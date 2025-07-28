import { Box, Typography } from "@mui/material";
import CoverSimple from "../../../components/Cover/CoverSimple/CoverSimple";
import Grid from '@mui/material/Grid2';
import Adornment from "../../../components/Adornment/Adornment";
import { EventCardSimple } from "../../../components/EventCard/EventCardSimple";
const BabyShower = () => {
     const COLOR_PRIMARY = "#e8797f";
    const COLOR_SECONDARY = "#6e4d46";
    const MAIN_TYPO = "southland";
    const BODY_TYPO = "montserrat-400";
    return(
          <div style={{backgroundColor:"white",maxWidth: '100%',overflowY:"auto",}}>
             <CoverSimple 
                weddingDate=""
                bgImage={`https://marianalero.github.io/baby-shower-alondra/images/2.png`}
                bgImage2={`https://marianalero.github.io/baby-shower-alondra/images/hor.png`}
                brideName="" 
                symbolr={""} 
                groomName={""} 
                className={MAIN_TYPO}
                textColor={COLOR_PRIMARY}
                hideText={true}
                >
            </CoverSimple>
             <Grid container spacing={2} justifyContent="center" paddingTop={2}>
          <Adornment image={"https://marianalero.github.io/baby-shower-alondra/images/9.png"} width={"250px"} />

          <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
            <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_SECONDARY  }}>
              ¡Una hermosa princesa está a punto de llegar!
            </Typography>
          </Grid>

          <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
            <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem' ,color:COLOR_SECONDARY}}>
              Te invitamos a celebrerar con nosotros esta fecha tan especial.
            </Typography>
          </Grid>

          <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center" marginTop={2}>
            <Typography
              sx={{
                fontFamily: `'DM Serif Display', serif`,
                color: COLOR_PRIMARY,
                fontSize: '50px',
              }}
            >
              5 <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_SECONDARY }}>de</Box> Dic
            </Typography>

            <Typography
            marginTop={1}
              sx={{
                fontFamily: `'DM Serif Display', serif`,
                color: '#e8797f',
                fontSize: '50px',
              }}
            >
              <Box component="span" sx={{ fontFamily: MAIN_TYPO, color: COLOR_SECONDARY }}>del</Box> 2024
            </Typography>
          </Grid>

          <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
            <Typography className={BODY_TYPO} sx={{ fontSize: '1.25rem',color:COLOR_SECONDARY }} >
              <b>5 PM</b> a <b>9 PM</b>
            </Typography>
          </Grid>
           <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                <Adornment image={"https://marianalero.github.io/baby-shower-alondra/images/10.png"} width={"250px"} />

           </Grid>
        </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                    <EventCardSimple bodyTypo={BODY_TYPO} textColor={COLOR_SECONDARY} eventName="Lugar:" mainTypo="dm-serif-display-regular" locationName="Jardín Lucrecia" address="Av. Lucrecia Ruiz de Ayón 49-B, San Luis Rey, Hermosillo, Son." color={"#dfad87"} href={"https://maps.app.goo.gl/2peNHQFJ1jNvhSwB7"} colorButton={COLOR_PRIMARY} ></EventCardSimple>
                </Grid>
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
                        <Typography
                            className={MAIN_TYPO}
                            sx={{ fontSize: '80px', fontWeight: 'bold' }}
                        >
                            ¡Te esperamos!
                        </Typography>
                        </Grid>

                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center">
                        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                            <img src="https://marianalero.github.io/baby-shower-alondra//images/adornos/7.svg" height="35px" alt="Icono 1" />
                            <Typography className="texto" sx={{ ml: 1, fontWeight: 'bold' }}>
                            $300
                            </Typography>
                        </Box>
                        </Grid>

                        <Grid size={{xs:6,sm:6,md:6,lg:6}} textAlign="center">
                        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                            <img
                            src="https://marianalero.github.io/baby-shower-alondra//images/adornos/9.svg"
                            height="30px"
                            alt="Icono 2"
                            style={{ marginRight: '4px' }}
                            />
                            <Typography className="texto" sx={{ fontWeight: 'bold' }}>
                            $500
                            </Typography>
                        </Box>
                        </Grid>
                    </Grid>
                </Grid>
              </Grid>
              <div style={{height:"200px"}}></div>
          </div>
    )
}
export default BabyShower;
import { Box,Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { EventCardProps } from "./models/EventCardProps";
import CustomButton from "../CustomButton/CustomButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ProButton from "../CustomButton/GoldButton";
export const EventCardSimple = (props:EventCardProps) => {

  return (
    <Box sx={{ mt: 2.5, mb: 2.5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
          <Typography className={props.bodyTypo} sx={{ fontSize: '1.25rem',color:props.textColor }}>
           {props.eventName}
          </Typography>
        </Grid>

        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
          <Typography
            sx={{
              fontSize: '30px',
              fontFamily: props.mainTypo,
              color: props.color,
            }}
          >
            {props.locationName}
          </Typography>

          <Typography className={props.bodyTypo} sx={{ fontSize: '1.1rem',color:props.textColor }}>
           {props.address}
          </Typography>
        </Grid>

        <Grid size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
          {
                                        props.classButtonName ? (
                                            <ProButton href={props.href} className={props.classButtonName} label={'Ver ubicación'} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />
                                        ) : (
                                             <CustomButton href={props.href} bgColor={props.colorButton} color={'white'} label={'Ver ubicación'} icon={<LocationOnOutlinedIcon></LocationOnOutlinedIcon>} />
                                        )
                                    }
        

        </Grid>
      </Grid>
    </Box>
  );
};

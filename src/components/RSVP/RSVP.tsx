import { Box, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { RSVPType } from './RSVPType';

const RSVP  = (props:RSVPType) => {
    const [radioValue, setRadioValue] = React.useState('yes');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
      };
    const handleSend =()=> {
        
    }
    return( 
        <Grid container spacing={1} padding={4} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Typography textAlign={"center"} variant='h3' className={props.mainTypo} sx={{color:props.color}} >Confirma tu asistencia!</Typography>
                <Typography textAlign={"center"} variant='body1' className={props.bodyTypo}>Por favor ayúdanos confirmando tu asistencia antes del {dayjs(props.dateLine).format("DD MMMM")}.</Typography>
                <Typography textAlign={"center"} variant='body1' className={props.bodyTypo}>Esta invitación es valida por {(props.count && props.count === 1) ? '1 pase': `${props.count} pases`} </Typography>
            </Grid>
            
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                        <Grid container spacing={2} padding={4} >
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                <Typography textAlign={"center"} variant='body1' className={props.bodyTypo}>¿Asistiras?</Typography>
                                <RadioGroup 
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={radioValue}
                                onChange={handleChange}
                            >
                                <FormControlLabel 
                                    value="yes" 
                                    control=
                                    {
                                    <Radio sx={{
                                        color:props.color,
                                        '&.Mui-checked': {
                                            color: props.color,
                                        },

                                    }} />

                                    }
                                    label="Sí" 
                                />
                                <FormControlLabel 
                                    value="no" 
                                    control=
                                    {
                                    <Radio sx={{
                                        color:props.color,
                                        '&.Mui-checked': {
                                            color: props.color,
                                        },

                                    }} />

                                    }
                                    label="No" 
                                />

                            </RadioGroup>
                        </Grid>
                     
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <TextField
                            required
                            id="name"
                            label="Nombre"
                            sx={{
                                "&:hover:not(.Mui-focused,.Mui-disabled) .MuiOutlinedInput-notchedOutline" :{
                                    borderColor:"black"
                                }
                            }}
                            />
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <TextField
                            id="name"
                            label="Teléfono"
                            fullWidth={true}
                            />
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <CustomButton bgColor={props.color} color={'#FFFFFF'} label={'Enviar'} onClick={handleSend}></CustomButton>
                        </Grid>
                        </Grid>
                                          
                </Box>
            </Grid>
        </Grid>
    )
}
export default RSVP;

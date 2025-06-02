import { Box, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { RSVPType } from './RSVPType';
import { Fade } from 'react-awesome-reveal';
import { Confirm, CreateAndConfirm, getGuestById } from '../../services/guestApiClient';
import { Guest } from '../../models/guest';
import { CreateGuestParameters } from '../../models/createGuestParameters';

const RSVP  = (props:RSVPType) => {
    const [guest, setGuest] = useState<Guest>({
    id: 0,
    fullName: '',
    isConfirmed: false,
    phoneNumber: '',
    totalConfirmed: 1,
    totalAssigned: 1,
    invitationId: props.invitationId,
    qrCodeToken: '',
    registeredAttendance: false,
    });
    useEffect(() => {
    const fetchGuest = async () => {
        console.log(props)
        if(props.guestId){
            const response = await getGuestById(props.guestId);
            setGuest(response);
            
        }
        else
        {
            updateGuest({
                totalAssigned:props.count
            })
        }
    };
    fetchGuest();
  }, [props]);

    const [radioValue, setRadioValue] = React.useState('yes');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };
    const handleSend =async ()=> {
         console.log("send")
          try {
        if (!guest || !guest.id) {
    
        const createParam: CreateGuestParameters ={
            fullName: guest.fullName,
            isConfirmed: radioValue == "yes",
            totalConfirmed: guest.totalConfirmed,
            totalAssigned: guest.totalAssigned,
            invitationId: props.invitationId,
            phoneNumber: guest.phoneNumber,
            }
            const response = await CreateAndConfirm(createParam);
            console.log(response)
        }else{
       
            const updated = await Confirm({
                guestId: guest.id,
                totalConfirmed: guest.totalConfirmed,
                isConfirmed: radioValue == "yes",
                totalAssigned: guest.totalAssigned,
            });
            console.log(updated)
        
        
        }
       } catch (error) {
            console.error(error);
    }
    }
    const updateGuest = (newData: Partial<Guest>) => {
        setGuest((prevData) => ({ ...prevData, ...newData }));
    };
    const RenderForm = () =>{
        return(
        <Grid container spacing={1} padding={4} sx={{bgcolor: props.bgColor}} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" triggerOnce={true}>
                <Typography textAlign={"center"} variant='h3' className={props.mainTypo} sx={{color:props.color}} >Confirma tu asistencia!</Typography>
                <Typography textAlign={"center"} variant='body1' className={props.bodyTypo}>Por favor ayúdanos confirmando tu asistencia antes del {dayjs(props.dateLine).format("DD MMMM")}.</Typography>
                <Typography textAlign={"center"} variant='body1' className={props.bodyTypo}>Esta invitación es valida por {(props.count && props.count === 1) ? '1 pase': `${props.count} pases`} </Typography>
                </Fade>
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
                                <Typography  textAlign={"center"} variant='body1' className={props.bodyTypo}>¿Asistiras?</Typography>
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
                                minWidth:300,
                                 '& label.Mui-focused': {
                                color: props.colorButton, // Borde en focus
                                },
                                '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: props.colorButton, // Borde en focus
                                },
                                },
                            }}
                            value={guest.fullName}
                            onChange={(e) => updateGuest({
                                    fullName: e.target.value
                                })}
                            
                            />
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <TextField
                            id="name"
                            label="Teléfono"
                            fullWidth={true}
                            sx={{
                                minWidth:300,
                                 '& label.Mui-focused': {
                                color: props.colorButton, // Borde en focus
                                },
                                '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: props.colorButton, // Borde en focus
                                },
                                },
                            }}
                            value={guest.phoneNumber}
                            onChange={(e) => updateGuest({
                                    phoneNumber: e.target.value
                                })}
                            
                            />
                     
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <Select<number>
                                labelId="guests"
                                id="guests"
                                value={guest.totalConfirmed}
                                onChange={(e) =>  updateGuest({
                                    totalConfirmed: Number(e.target.value)
                                })}
                                sx={{
                                    minWidth:300,
                                    color: props.colorButton,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: props.colorButton, // borde normal
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: props.colorButton,
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: props.colorButton,
                                    },
                                    '& .MuiSvgIcon-root': {
                                    color: props.colorButton,
                                    },
                                }}
                                >
                                {Array.from({ length: guest.totalAssigned }, (_, index) => (
                                    <MenuItem key={index + 1} value={index + 1} 
                                    sx={{
                                        '&.Mui-selected': {
                                            color: '#fff',
                                            backgroundColor: `${props.colorButton}!important`,
                                        },
                                        '&.Mui-selected:hover': {
                                            backgroundColor: props.colorButton,
                                        },
                                        '&:hover': {
                                            backgroundColor: props.colorButton,
                                            color: "white",
                                        },
                                    }}      
                                    >
                                    {index + 1}
                                    </MenuItem>
                                ))}
                                </Select>
                        </Grid>
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <CustomButton bgColor={props.colorButton} color={'#FFFFFF'} label={'Enviar'} onClick={handleSend}></CustomButton>
                        </Grid>
                        </Grid>
                                          
                </Box>
            </Grid>
        </Grid>

        );
    }
    return ( 
        <>
         { props.bgImage !== undefined ? (     
          <div style={{backgroundImage:`url('${props.bgImage}')`}} className='cover-container'>
            {RenderForm()}
          </div>
        ) :
        (
            RenderForm()
        )}
       </>
    )
}
export default RSVP;

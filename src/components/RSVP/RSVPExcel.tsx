import { Box, Dialog, DialogContent, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { RSVPType } from './RSVPType';
import { Fade } from 'react-awesome-reveal';
import CloseIcon from '@mui/icons-material/Close';
import './rsvp.css';
const RSVPDemo  = (props:RSVPType) => {
    const [radioValue, setRadioValue] = React.useState('yes');
    const [name, setName] =  useState<string>('');
    const [totalConfirmed, setTotalConfirmed] = useState<number>(1);
    const [phoneNumber, setPhoneNumber] =  useState<string>('');
    const [open, setOpen] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };

    const handleSend =async ()=> {
    let confirmText = '';
    if (radioValue === 'yes') {
      confirmText = 'Asistiré';
    } else {
      confirmText = 'No Asistiré';
    }

    const params = new URLSearchParams({
    'entry.516140191': name,
    'entry.827025270': phoneNumber,
    'entry.1599079301': confirmText,
    'entry.465259973': totalConfirmed.toString(),
    submit: 'Submit',
    });

     const url = `${props.excelURL}?${params.toString()}`;
   
    try {
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        redirect: 'follow',
        referrer: 'no-referrer',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setOpen(true);

    } catch (err) {
      console.error(err);
    }

    }

    const handleClose = () => {
        setOpen(false);
        setName("");
        setPhoneNumber("");
        setTotalConfirmed(0)

     };
     const RenderForm = () =>{
        return(
        <Grid container spacing={1} padding={2} sx={{bgcolor: props.bgColor,
        }}  >
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" triggerOnce={true}>
          
                <Typography textAlign={"center"} variant='h3' className={props.mainTypo} sx={{color:props.color}} >Confirma tu asistencia!</Typography>
                

               
                    <div>
                    <Typography textAlign={"center"} variant='body1' className={props.bodyTypo} sx={{color:props.color}}>Hemos reservado {(props.count && props.count === 1) ? '1 lugar' : `${props.count} lugares`} para ti. </Typography>
                    <Typography textAlign={"center"} variant='body1' className={props.bodyTypo} sx={{color:props.color}}>Por favor ayúdanos confirmando tu asistencia antes del {dayjs(props.dateLine).format("DD MMMM")}.</Typography></div>
              
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
                                <Typography  textAlign={"center"} variant='body1' className={props.bodyTypo} sx={{color:props.color}}>¿Asistiras?</Typography>
                                <RadioGroup 
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={radioValue}
                                onChange={handleChange}
                            >
                                <FormControlLabel 
                                    sx={{color:props.color}}
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
                                 sx={{color:props.color}}
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
                                '& .MuiInputLabel-root': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '0 4px',
                                    borderRadius: '4px',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                },
                            }}
                            value={name}
                            onChange={(e) => setName(
                                 e.target.value
                                )}
                            
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
                                '& .MuiInputLabel-root': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '0 4px',
                                    borderRadius: '4px',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                },
                            }}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(
                                    e.target.value
                                )}
                            
                            />
                     
                        </Grid>

                           <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} justifyContent={"center"}>
                            <FormControl >
                              
                                        <InputLabel sx={{color:"#757575",
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '0 4px',
                                            borderRadius: '4px',
                                        }} id="demo-simple-select-label">Número de asistentes</InputLabel>

                                    
                                
                                    <Select<number>
                                        label="Número de asistentes"
                                        labelId="guests"
                                        id="guests"
                                        value={totalConfirmed}
                                        onChange={(e) => setTotalConfirmed(
                                            Number(e.target.value)
                                        )}
                                        sx={{
                                            minWidth: 300,
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
                                        {Array.from({ length: props.count ? props.count : 0}, (_, index) => (
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
                                    </FormControl>
                            </Grid>
                            
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <CustomButton bgColor={props.colorButton} color={'#FFFFFF'} label={'Enviar'} onClick={handleSend}></CustomButton>
                        </Grid>
                        </Grid>
                                          
                </Box>
            </Grid>
             <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
           
            <DialogContent >
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton aria-label="delete" onClick={handleClose}>
                        <CloseIcon sx={{color:props.color}} />
                    </IconButton>
                 
               </Box>
               <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h3" className={props.mainTypo}>Confirmación enviada</Typography>
               </Box>
            </DialogContent>        
        </Dialog>
        </Grid>

        );
    }
    return ( 
        <>
         { props.bgImage !== undefined ? (     
          <div className="fondo-con-overlay" style={{backgroundImage:`url('${props.bgImage}')`, backgroundSize:"cover"}}>
     
            {RenderForm()}
          </div>
        ) :
        (
            RenderForm()
        )}
       </>
    )
}
export default RSVPDemo;

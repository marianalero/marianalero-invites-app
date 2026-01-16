import { Box, Dialog, DialogContent, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { RSVPType } from './RSVPType';
import { Fade } from 'react-awesome-reveal';
import { Confirm, CreateAndConfirm, getGuestById } from '../../services/guestApiClient';
import { Guest } from '../../models/guest';
import { CreateGuestParameters } from '../../models/parameters/createGuestParameters';
import ConfirmQR from './ConfirmQR';
import './rsvp.css';
import CloseIcon from '@mui/icons-material/Close';
import ProButton from '../CustomButton/GoldButton';
import { t } from 'i18next';
const RSVPForm  = (props:RSVPType) => {
    console.log("RSVP FORM RENDERED", props.dateLine);
    const [errorName, setErrorName] = useState(false);
    const [guest, setGuest] = useState<Guest>({
    id: 0,
    fullName: '',
    rsvpStatus: 1,
    phoneNumber: '',
    totalConfirmed: 1,
    totalAssigned: 1,
    invitationId: props.invitationId,
    qrCodeToken: '',
    registeredAttendance: false,
    companion:'',
    });
    useEffect(() => {
       if (props.dateLine && props.dateLine < new Date()) {
       setDisabledRSVP(true);
      
    } else {
        setDisabledRSVP(false);
      
    }
    const fetchGuest = async () => {

        if( props.guestId && props.guestId > 0 ){
           
            const response = await getGuestById(props.guestId,props.invitationId);
            setGuest(response);
            if(response.totalConfirmed == 0){
                updateGuest({
                totalConfirmed:1
                })
            }
            
        }
        else
        {
            updateGuest({
                totalAssigned:props.count == 0 ? 1 : props.count,
                totalConfirmed:props.count == 0 ? 1 : props.count
            })
        }
    };
    fetchGuest();
  }, [props]);
    const [disabledForm, setDisabledForm] = React.useState(false)
    const [disabledRSVP, setDisabledRSVP] = React.useState(false)
    const [radioValue, setRadioValue] = React.useState('yes');
    const [open, setOpen] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisabledForm(false);
        const value = (event.target as HTMLInputElement).value;
        if(value == 'no'){
            setDisabledForm(true);
            updateGuest({
                totalConfirmed:0
            })
        }
        setRadioValue(value);
    };
    const handleSend =async ()=> {
        if(guest.fullName.trim() === "") {
            setErrorName(true);
        } else {
            setErrorName(false);
          try {
        if (!guest || !guest.id) {
    
        const createParam: CreateGuestParameters ={
            fullName: guest.fullName,
            rsvpStatus: radioValue == "yes"? 2 : 3,
            totalConfirmed: guest.totalConfirmed,
            totalAssigned: guest.totalAssigned,
            invitationId: props.invitationId,
            phoneNumber: guest.phoneNumber,
            companion: guest.companion
            }
            const response = await CreateAndConfirm(createParam);
            setGuest(response);
        }else{
       
            const response = await Confirm({
                guestId: guest.id,
                totalConfirmed: guest.totalConfirmed,
                rsvpStatus: radioValue == "yes"? 2 : 3,
                totalAssigned: guest.totalAssigned,
                phoneNumber: guest.phoneNumber,
                companion: guest.companion,
                invitationId: props.invitationId,
            });

            if(!response.state.hasError){
                const guestResponse = response.result;
                setGuest({
                id: guestResponse.id ?? 0,
                fullName: guestResponse.fullName ?? '',
                rsvpStatus: guestResponse.rsvpStatus,
                totalConfirmed: guestResponse.totalConfirmed ?? 0,
                totalAssigned: guestResponse.totalAssigned ?? 0,
                invitationId: guestResponse.invitationId ?? 0,
                phoneNumber: guestResponse.phoneNumber,
                companion: guestResponse.companion,
                registeredAttendance: guestResponse.registeredAttendance ?? false,
                });
            }
            
        
        
        }
        setOpen(true);
        } catch (error) {
            console.error(error);

        }
    }
    }
    const updateGuest = (newData: Partial<Guest>) => {
        setGuest((prevData) => ({ ...prevData, ...newData }));
    };
    const handleClose = () => {
        setOpen(false);
     };
    const RenderForm = () =>{
        return(
        <Grid container spacing={1} padding={4} sx={{bgcolor: props.bgImage ? "transparent" : props.bgColor}} >
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                <Fade direction="up" triggerOnce={true}>
                {!props.guestId ? (
                <Typography textAlign={"center"} variant='h3' className={props.mainTypo} sx={{color:props.color}} >{t("RSVP.title")}</Typography>
                ):(
                    <Typography textAlign={"center"} variant='h3' className={props.mainTypo} sx={{color:props.color}} >Hola, {guest.fullName}</Typography>

                )
                }

       {disabledRSVP ? (
            <Typography textAlign="center" variant="body1" className={props.bodyTypo}  sx={{color:props.textColor}}>
              {t("RSVP.dateLineEnd")}
            </Typography>
        ) : (
        guest && guest.rsvpStatus === 2 ? (
            <div>
            <Typography textAlign="center" variant="body1" className={props.bodyTypo}  sx={{color:props.textColor}}>
                {t("RSVP.successMessage")}
            </Typography>
            <Typography textAlign="center" variant="body1" className={props.bodyTypo} sx={{color:props.textColor}}>
                {t("RSVP.rsvpConfirmedMessage", { count: guest.totalConfirmed })}
            </Typography>
            </div>
        ) : guest && guest.rsvpStatus === 3 ? (
            <div>
                <Typography textAlign="center" variant="body1" className={props.bodyTypo} sx={{color:props.textColor}}>
                 {t("RSVP.notAttendingMessage")}
                </Typography>
                <Typography textAlign="center" variant="body1" className={props.bodyTypo} sx={{color:props.textColor}}>
                   {t("RSVP.updateResponseMessage", { date: dayjs(props.dateLine).format("DD [de] MMMM") })}
                </Typography>
            </div>
        ) : (
            <div>
            <Typography textAlign="center" variant="body1" className={props.bodyTypo}  sx={{color:props.textColor}}>
                {guest.totalAssigned === 1 ? t("RSVP.placesReserved") : t("RSVP.placesReserved_plural", { count: guest.totalAssigned })}
            </Typography>
            {props.dateLine && (
                 <Typography textAlign="center" variant="body1" className={props.bodyTypo} sx={{color:props.textColor}}>
               {t("RSVP.dateLineStart")} {dayjs(props.dateLine).format("DD [de] MMMM")}.
            </Typography>
            )
            }
           
            </div>
        )
        )}

                
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
                                <Typography  textAlign={"center"} variant='body1' className={props.bodyTypo}  sx={{color:props.textColor}}> {t("RSVP.willYouAttend")}</Typography>
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
                                    label={t("RSVP.Yes")} 
                                    disabled={disabledRSVP}
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
                                    label={t("RSVP.No")}
                                    disabled={disabledRSVP}
                                />

                            </RadioGroup>
                        </Grid>
                     {!props.guestId && (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <TextField
                            error={errorName}
                            helperText={errorName ? "El nombre es requerido" : ""}
                            required
                            id="name"
                            label={t("RSVP.namePlaceholder")}
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
                            value={guest.fullName}
                            onChange={(e) => updateGuest({
                                    fullName: e.target.value
                                })}
                            disabled={disabledRSVP}
                             slotProps={{ inputLabel: { shrink: true } }} 
                            />
                        </Grid>
                        )

                     }
                    {
                        !props.hidePhoneNumberInput &&(
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                            <TextField
                            id="name"
                            label={t("RSVP.phonePlaceholder")}
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
                            value={guest.phoneNumber ?? ''}
                            onChange={(e) => updateGuest({
                                    phoneNumber: e.target.value
                                })}
                            slotProps={{ inputLabel: { shrink: true } }} 
                            disabled={disabledRSVP}
                            />
                     
                        </Grid>
                        )
                    }
                        
                        { !disabledForm && (
                            <>
                            {
                                guest.totalAssigned > 1 &&
                                (
                                       <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} justifyContent={"center"}>
                                  <FormControl >
                                                                
                                        <InputLabel sx={{color:"#757575",
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '0 4px',
                                            borderRadius: '4px',
                                            }} 
                                            id="demo-simple-select-label">{t("RSVP.placesReserved")}</InputLabel>
                                  
                                                               
                                    <Select<number>
                                        label={t("RSVP.placesReserved")}
                                        labelId="guests"
                                        id="guests"
                                        value={guest.totalConfirmed}
                                        onChange={(e) => updateGuest({
                                            totalConfirmed: Number(e.target.value)
                                        })}
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
                                        disabled={disabledRSVP}
                                    >
                                        {Array.from({ length: guest.totalAssigned }, (_, index) => (
                                            <MenuItem key={index + 1} value={index + 1}
                                                sx={{
                                                    '&.Mui-selected': {
                                                        color: `black`,
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
                                )
                            }
                            {
                                guest.totalConfirmed > 1 &&
                                (
                                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={"flex"} justifyContent={"center"}>
                                        <TextField
                                            disabled={disabledRSVP}
                                            id="companion"
                                            label={t("RSVP.companionPlaceholder")}
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
                                            value={guest.companion ?? ''}
                                            onChange={(e) => updateGuest({
                                                    companion: e.target.value
                                                })}
                                            slotProps={{ inputLabel: { shrink: true } }} 
                                            />
                                
                                </Grid>
                                )}
                            </>
                        )}
                        
                        {!disabledRSVP && (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>
                                {
                                        props.classButtonName ? (
                                            <ProButton  onClick={handleSend} className={props.classButtonName} label={t("send")} />
                                        ) : (
                                            <CustomButton  bgColor={props.colorButton} color={'#FFFFFF'} label={t("send")} onClick={handleSend}></CustomButton>
                                        )
                                    }
                             
                            </Grid>
                        )}
                        
                        </Grid>
                                          
                </Box>
            </Grid>
        </Grid>

        );
    }
    return ( 
        <div>
         { props.bgImage !== undefined ? (     
          <div style={{backgroundImage:`url('${props.bgImage}')`, backgroundPositionX: props.bgPosition ? props.bgPosition : 'center'}} className="fondo-con-overlay" >
            {
               (guest && (guest.rsvpStatus == 1 || guest.rsvpStatus == 3 )) || !props.qrActive? (
                      RenderForm()
                ):(
                    <ConfirmQR guest={guest} bgColor={props.bgColor}></ConfirmQR>
                )
            }
          </div>
        ) :
        (
            (guest && (guest.rsvpStatus == 1 || guest.rsvpStatus == 3 )) || !props.qrActive? (
                      RenderForm()
                ):(
                      <ConfirmQR guest={guest} mainTypo={props.mainTypo} bodyTypo={props.bodyTypo} colorPrimary={props.color} bgColor={props.bgColor}></ConfirmQR>
                )
        )}
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
                        <Typography variant="h3" className={props.mainTypo}>{t("RSVP.successSend")}</Typography>
                       </Box>
                   
                        
                       
                   
                    </DialogContent>
                </Dialog>
       </div>
    )
}
export default RSVPForm;

import { Dialog, DialogTitle, DialogContent, TextField, DialogActions,Button } from "@mui/material"
import {useEffect, useState } from "react";
import { Guest } from "../../../../models/guest";
import { createGuest, getGuestById, updateGuest } from "../../../../services/guestApiClient";
import { getInvitationIdFromToken } from "../../../../services/authService";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
  id?:number
}

const CreateGuestDialog =({ open, onClose, onCreated,id=0 }: Props) => {
    const invitationId:number = Number.parseInt(getInvitationIdFromToken().toString());
  const emptyGuest: Guest = {
      id: 0,
      fullName: '',
      totalConfirmed: 0,
      totalAssigned: 0,
      invitationId: 0,
      registeredAttendance: false
  };
    const [guest, setGuest] = useState<Guest>(emptyGuest);
    const [errorName, setErrorName] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);
    const fetchGuests = async () =>  {

    const res = await getGuestById(id,invitationId);
    setGuest(res);
  };

    useEffect(() => {
      if(id>0){
        fetchGuests();
      }
     
    }, []);
    const handleCreateSave = async () => {
      if (!validateGuest()) {
        return;
      }else{
        if(id>0)
          {
          await updateGuest( {
                    guestId:id,
                    fullName: guest.fullName,
                    totalAssigned: guest.totalAssigned,
                    phoneNumber: guest.phoneNumber
            });
          }else{
            await createGuest( {
                    fullName: guest.fullName,
                    rsvpStatus: 1,
                    totalConfirmed: 0,
                    totalAssigned: guest.totalAssigned,
                    invitationId: invitationId,
                    phoneNumber: guest.phoneNumber
            });
          }
      
        onCreated();
      }
      

    };

    const validateGuest = () => {
      setErrorName(false);
      setErrorNumber(false);
      if (!guest.fullName) {
        setErrorName(true);
        return false;
      }

      if (guest.totalAssigned <= 0) {
        setErrorNumber(true);
        return false;
      }
      return true;
    }
  const updateData = (newData: Partial<Guest>) => {
    setGuest((prevData) => ({ ...prevData, ...newData }));
  };
    return (
      <Dialog open={open} onClose={() => onClose()} >
        <DialogTitle> {id> 0 ? "Editar" : "Crear"} Invitado</DialogTitle>
        <DialogContent>
          <TextField
          error={errorName}
            fullWidth
            label="Nombre"
            margin="dense"
            value={guest?.fullName}
           slotProps={{ inputLabel : {shrink: true} }}
            onChange={(e) => updateData({fullName: e.target.value})}
            helperText={errorName ? "El nombre es requerido" : ""}
          />
        <TextField
            error={errorNumber}
            type="number"
            fullWidth
            label="Número de Invitados"
            margin="dense"
            value={guest?.totalAssigned}
           slotProps={{ inputLabel : {shrink: true} }}
            onChange={(e) => updateData({totalAssigned: Number.parseInt(e.target.value)})}
            helperText={errorNumber ? "El número de invitados debe ser mayor a 0" : ""}
            
          />
           <TextField
            fullWidth
            label="Número de Telefono"
            margin="dense"
            slotProps={{ inputLabel : {shrink: true} }}
            value={guest?.phoneNumber}
            onChange={(e) => updateData({phoneNumber: e.target.value})}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancelar</Button>
          <Button variant="contained" onClick={handleCreateSave}>Crear</Button>
        </DialogActions>
      </Dialog>
    )

}
export default CreateGuestDialog;


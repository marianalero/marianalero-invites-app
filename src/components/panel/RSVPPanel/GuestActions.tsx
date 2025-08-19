import { Box, IconButton, Tooltip } from "@mui/material";
import { Guest } from "../../../models/guest";
import { useState } from "react";
import CreateGuestDialog from "./Dialog/CreateGuestDialog";
import SystemSecurityUpdateGoodRoundedIcon from '@mui/icons-material/SystemSecurityUpdateGoodRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import { Confirm, DeleteGuest } from "../../../services/guestApiClient";
import { RSVPSTATUS } from "../../../constants/rsvpStatus";
import { useSnackbar } from "../../../context/snackbarContext";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
interface GuestActionsProps {
    guest:Guest;
    link:string;
    refresh: () => void;
}

const GuestActions: React.FC<GuestActionsProps> = ({ guest, link,refresh }) => {
  const [openCreated, setOpenCreated] = useState(false);
   const { showSnackbar } = useSnackbar();
  const handleCreated = () => {
    setOpenCreated(false);
    showSnackbar('Invitado actualizado exitosamente', 'info')
    refresh();
  };

  const confirmGuest =async () =>{
    await Confirm({
      guestId: guest.id,
      rsvpStatus: RSVPSTATUS.Confirmed,
      totalConfirmed: guest.totalAssigned,
      totalAssigned: guest.totalAssigned,
      invitationId:guest.invitationId
    });
    showSnackbar('Se confirmo la asistencia correctamente', 'success')
    refresh();
  }

  const deleteGuest =async () =>{
    await DeleteGuest(guest.id);
    showSnackbar("Invitado eliminado correctamente", 'success')
    refresh();
  }

  return (
    <>
      <Box display="flex" gap={2}>
        <Tooltip title="Generar link">
          <span>
          <IconButton disabled={!link}  onClick={() => {
                      navigator.clipboard.writeText(`${link}?id=${guest.id}`);
                      showSnackbar('Link copiado en portapaples', 'success')
                      }}>
            <InsertLinkRoundedIcon color="primary"/>
        </IconButton>
        </span>
        </Tooltip>
        <Tooltip title="Editar" >
            <IconButton  onClick={() => setOpenCreated(true)} >
                <ModeEditOutlineRoundedIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Confirmar">
            <span>
              <IconButton onClick={() => confirmGuest()} disabled={guest.rsvpStatus == RSVPSTATUS.Confirmed} >
                <SystemSecurityUpdateGoodRoundedIcon />
            </IconButton>
            </span>
            
         </Tooltip>
        <Tooltip title="Eliminar">
            <IconButton onClick={() => deleteGuest()} >
                <DeleteOutlineRoundedIcon />
            </IconButton>
        </Tooltip>
      
       
      
      </Box>
      {openCreated && (
        <CreateGuestDialog
          open={openCreated}
          onClose={() => setOpenCreated(false)}
          onCreated={handleCreated}
          id={guest.id}
        />
      )}
      
    </>
  );
};

export default GuestActions;


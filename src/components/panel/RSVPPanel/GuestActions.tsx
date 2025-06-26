import { Box, IconButton, Tooltip } from "@mui/material";
import { Guest } from "../../../models/guest";
import { useState } from "react";
import CreateGuestDialog from "./Dialog/CreateGuestDialog";
import SystemSecurityUpdateGoodRoundedIcon from '@mui/icons-material/SystemSecurityUpdateGoodRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import { Confirm } from "../../../services/guestApiClient";
import { RSVPSTATUS } from "../../../constants/rsvpStatus";
interface GuestActionsProps {
    guest:Guest;
    link:string;
    refresh: () => void;
}

const GuestActions: React.FC<GuestActionsProps> = ({ guest, link,refresh }) => {
  const [openCreated, setOpenCreated] = useState(false);

  const handleCreated = () => {
    setOpenCreated(false);
    refresh();
  };

  const confirmGuest =async () =>{
    await Confirm({
      guestId: guest.id,
      rsvpStatus: RSVPSTATUS.Confirmed,
      totalConfirmed: guest.totalAssigned,
      totalAssigned: guest.totalAssigned,
    });
    refresh();
  }

  return (
    <>
      <Box display="flex" gap={2}>
        <Tooltip title="Generar link">
        <IconButton  onClick={() => {
                      navigator.clipboard.writeText(   link+guest.id);
                      }}>
            <InsertLinkRoundedIcon color="primary"/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Editar" >
            <IconButton  onClick={() => setOpenCreated(true)} >
                <ModeEditOutlineRoundedIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Confirmar">
            <IconButton onClick={() => confirmGuest()} >
                <SystemSecurityUpdateGoodRoundedIcon />
            </IconButton>
         </Tooltip>
        {/* <Tooltip title="Eliminar">
            <IconButton >
                <DeleteRoundedIcon />
            </IconButton>
        </Tooltip>
       */}
       
      
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
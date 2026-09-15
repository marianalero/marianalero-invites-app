import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { Invitation } from "../../../models/invitation";
import CreateInvitationModal from "./Dialog/CreateInvitationDialog";
import InvitationMediaDialog from "./Dialog/InvitationMediaDialog";
interface InvitationActionsProps {
    invitation:Invitation;
    refresh: () => void;
}

const InvitationActions: React.FC<InvitationActionsProps> = ({ invitation,refresh }) => {
  const [openCreated, setOpenCreated] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  const handleCreated = () => {
    setOpenCreated(false);
    refresh();
  };
  return (
    <>
      <Box display="flex" gap={2}>
        <Tooltip title="Editar" >
            <IconButton  onClick={() => setOpenCreated(true)} >
                <ModeEditOutlineRoundedIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Gestionar imágenes">
            <IconButton onClick={() => setOpenMedia(true)}>
                <AddPhotoAlternateRoundedIcon />
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
        <CreateInvitationModal
          open={openCreated}
          onClose={() => setOpenCreated(false)}
          handleCreate={handleCreated}
          id={invitation.id}
        />
      )}
      {openMedia && (
        <InvitationMediaDialog invitation={invitation} open={openMedia} onClose={() => setOpenMedia(false)} />
      )}
    </>
  );
};

export default InvitationActions;

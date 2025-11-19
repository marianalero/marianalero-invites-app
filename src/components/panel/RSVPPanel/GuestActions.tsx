import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { Guest } from "../../../models/guest";
import { useState } from "react";
import CreateGuestDialog from "./Dialog/CreateGuestDialog"
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import { Confirm, DeleteGuest } from "../../../services/guestApiClient";
import { RSVPSTATUS } from "../../../constants/rsvpStatus";
import { useSnackbar } from "../../../context/snackbarContext";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import EventBusyRoundedIcon from '@mui/icons-material/EventBusyRounded';
import GuestAnswersModal from "./Dialog/GuestAnswersModal";
interface GuestActionsProps {
    guest:Guest;
    link:string;
    refresh: () => void;
    questions:boolean;
}

const GuestActions: React.FC<GuestActionsProps> = ({ guest, link,refresh }) => {
  const [openCreated, setOpenCreated] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmStatus, setOpenConfirmStatus] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openAnswers, setOpenAnswers] = useState(false);
   const { showSnackbar } = useSnackbar();
  const handleCreated = () => {
    setOpenCreated(false);
    showSnackbar('Invitado actualizado exitosamente', 'info')
    refresh();
  };

  const confirmGuest =async (status:RSVPSTATUS) =>{
    await Confirm({
      guestId: guest.id,
      rsvpStatus: status,
      totalConfirmed: guest.totalAssigned,
      totalAssigned: guest.totalAssigned,
      invitationId:guest.invitationId
    });
    showSnackbar('Se confirmo la asistencia correctamente', 'success')
    setOpenConfirmStatus(false);
    setOpenRemove(false);
    refresh();
  }

  const deleteGuest =async () =>{
    await DeleteGuest(guest.id);
    showSnackbar("Invitado eliminado correctamente", 'success')
    setOpenConfirmDelete(false);
    refresh();
  }
  const handleOpenAnswers = () => {
    setOpenAnswers(true);
  };
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
        {
          guest.rsvpStatus !== RSVPSTATUS.Confirmed ? (
            <Tooltip title="Confirmar asistencia">
              <span>
                <IconButton onClick={() => setOpenConfirmStatus(true)}  >
                  <EventAvailableRoundedIcon />
                </IconButton>
              </span>
            </Tooltip>
          ) :(
            <Tooltip title="Quitar asistencia">
              <span>
                <IconButton onClick={() => setOpenRemove(true)}  >
                  <EventBusyRoundedIcon />
                </IconButton>
              </span>
            </Tooltip>

          )
        }
       
        <Tooltip title="Eliminar Invitado">
            <IconButton onClick={() => setOpenConfirmDelete(true)} >
                <DeleteOutlineRoundedIcon />
            </IconButton>
        </Tooltip>
      <Button variant="outlined" onClick={() => handleOpenAnswers()}>
        Ver respuestas
      </Button>
       
      
      </Box>
      {openCreated && (
        <CreateGuestDialog
          open={openCreated}
          onClose={() => setOpenCreated(false)}
          onCreated={handleCreated}
          id={guest.id}
        />
      )}
       <ConfirmModal
        open={openConfirmDelete}
        title="¿Estás seguro?"
        description="Esta acción eliminará al invitado de manera permanente."
        confirmText="Eliminar"
        cancelText="Cancelar"
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={deleteGuest}
      />

        {/* Modal para marcar asistencia */}
        <ConfirmModal
          open={openConfirmStatus}
          title="Confirmar asistencia"
          description="¿Deseas marcar como asistente a este invitado?"
          confirmText="Marcar asistencia"
          cancelText="Cancelar"
          onClose={() => setOpenConfirmStatus(false)}
          onConfirm={ () => confirmGuest(RSVPSTATUS.Confirmed) }
        />

        {/* Modal para quitar asistencia */}
        <ConfirmModal
          open={openRemove}
          title="Quitar asistencia"
          description="¿Estás seguro de que deseas quitar la asistencia de este invitado?"
          confirmText="Quitar asistencia"
          cancelText="Cancelar"
          onClose={() => setOpenRemove(false)}
          onConfirm={ () => confirmGuest(RSVPSTATUS.NotConfirmed) }
        />

        {openAnswers && (
          <GuestAnswersModal
            open={openAnswers}
            onClose={() => setOpenAnswers(false)}
            guestId={guest.id}
          />
        )}
      
    </>
  );
};

export default GuestActions;


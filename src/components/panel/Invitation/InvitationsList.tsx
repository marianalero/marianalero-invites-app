import { Button, Box,Switch } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import CreateInvitationModal from './Dialog/CreateInvitationDialog';
import { changeStatus, getInvitations } from '../../../services/invitationApiClient';
import { Invitation } from '../../../models/invitation';
import { GridColDef } from '@mui/x-data-grid';
import DataGridCustom from '../../DataGridCustom/DataGridCustom';
import InvitationActions from './InvitationActions';
import { useSnackbar } from '../../../context/snackbarContext';
import dayjs from 'dayjs';

export default function InvitationsList() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [open, setOpen] = useState(false);
  const { showSnackbar } = useSnackbar();
  // const [loading, setLoading] = useState(true);

  const fetchInvitations = async () => {
    const res = await getInvitations();
    setInvitations(res);
  };

  useEffect(() => {
    fetchInvitations();
  }, []);

//   const handleDelete = async (id: number) => {
//     await axios.delete(`/api/users/${id}`);
//     fetchInvitations();
//   };

  const handleCreated = () => {
    setOpen(false);
    fetchInvitations(); 
    showSnackbar('Invitación creada exitosamente', 'success')
  };
  const handleChangeStatus =async (id:number,checked:boolean) => {
      await changeStatus(id,checked ? 1 : 2)
  }

const invitationColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'brideName', headerName: 'Novia', flex: 2 },
  { field: 'groomName', headerName: 'Novio', flex: 2 },
  { field: 'eventDate', headerName: 'Fecha Evento', flex: 2,
    valueFormatter:(value) =>(
      dayjs(value).format("DD MMMM YYYY")
    )
   },
  { field: 'expirationDate', headerName: 'Fecha de Expiración', flex: 2,
    valueFormatter:(value) =>(
      value ? dayjs(value).format("DD MMMM YYYY") : ""
    )
   },
  { field: 'statusId', headerName: 'Activo', flex: 2 ,
     renderCell: (params) => (
        <Switch
                    sx={{gap:2}}
                      checked={params.row.statusId==1 ? true: false}
                      onChange={(e) => handleChangeStatus(params.row.id, e.target.checked)}
                    />
    ),
  },
  {
      field: "actions",
      headerName: "",
      type: "actions",
      width:250,
      renderCell: (params) => (
        <InvitationActions invitation={params.row}  refresh={() => getInvitations() } />
      ),
    }, 
];


  return (
    <Box>
      <Box display="flex" justifyContent="end" mb={2}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
        >
          Nueva Invitación
        </Button>
      </Box>

        <DataGridCustom rows={invitations} columns={invitationColumns}></DataGridCustom>

    {open && (
        <CreateInvitationModal open={open} onClose={() => setOpen(false)} handleCreate={handleCreated} ></CreateInvitationModal>
    )}
    </Box>
  );
}


import { Alert, Button, Snackbar, TextField, useMediaQuery, useTheme,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { getGuests } from '../../../services/guestApiClient';
import { getInvitationIdFromToken } from '../../../services/authService';
import { Guest } from '../../../models/guest';
import DataGridCustom from '../../DataGridCustom/DataGridCustom';
import { Add } from '@mui/icons-material';
import UploadGuestsDialog from './UploadGuestsDialog';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import Grid from '@mui/material/Grid2';
import RsvpStatusChip from './RSVPStatus';
import CreateGuestDialog from './Dialog/CreateGuestDialog';
import { getInvitationById } from '../../../services/invitationApiClient';
import { Invitation } from '../../../models/invitation';
import GuestActions from './GuestActions';
export default function RegisterGuest() {
  const [guests, setGuest] = useState<Guest[]>([]);
  const [invitation, setInvitation] = useState<Invitation>();
  const invitationId:string =getInvitationIdFromToken() ? getInvitationIdFromToken()?.toString() : "";
  const [open, setOpen] = useState(false);
  const [openCreated, setOpenCreated] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const filteredRows = useMemo(() => {
        return guests.filter(row =>
          row.fullName.toLowerCase().includes(search.toLowerCase())
        );
  }, [search, guests]);
  
  const fetchGuests = async () =>  {

    const res = await getGuests(Number.parseInt(invitationId));
    setGuest(res.guests);
  };

  const fetchInvitation = async () =>  {
    const res = await getInvitationById(Number.parseInt(invitationId));
    setInvitation(res);
  };

  useEffect(() => {
    fetchGuests();
    fetchInvitation();
  }, []);

  const handleUpload = () => {
    setOpen(false);
    fetchGuests(); 
    setShowSnackbar(true);
  };
  const handleCreated = () => {
    setOpenCreated(false);
    fetchGuests(); 
    setShowSnackbar(true);
  };
const columns: GridColDef[] = !isMobile  ? [
  { field: 'fullName', headerName: 'Nombre', flex: 2 },
  { field: 'phoneNumber', headerName: 'Teléfono', flex: 2 },
  { field: 'rsvpStatus', headerName: 'Confirmación', flex: 2 ,
    renderCell: (params) => (
        <RsvpStatusChip statusId={params.row.rsvpStatus} />
    ),
    },
    { field: 'totalAssigned', headerName: 'Asignados', flex: 2,  width:10,},
    { field: 'totalConfirmed', headerName: 'Confirmados', flex: 2 ,  width:10, },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      width:250,
      renderCell: (params) => (
        <GuestActions guest={params.row} link={invitation ? invitation.link : ""} refresh={() => fetchGuests() } />
      ),
    },
] : [
   { field: 'fullName', headerName: 'Nombre', flex: 2 },
   { field: 'rsvpStatus', headerName: 'Confirmación', flex: 2 ,
    renderCell: (params) => (
        <RsvpStatusChip statusId={params.row.rsvpStatus} />
    ),
   },
    { field: 'totalConfirmed', headerName: 'N° Confirmados', flex: 2 },
   
];

  return (
    <Grid container>
       <Grid size={{xs:12,sm:12,md:6,lg:6}} mb={2}>
              <TextField
                size="small"
                variant="outlined"
                label="Buscar por nombre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              </Grid>
       <Grid size={{xs:12,sm:12,md:6,lg:6}} mb={2} display="flex" justifyContent={"end"} gap={2}> 

                    <Button
                          variant="contained"
                          startIcon={<Add />}
                          onClick={() => setOpenCreated(true)}
                      >
                          Nuevo Invitado
                      </Button>
                      <Button
                          variant="contained"
                          startIcon={<FileUploadRoundedIcon />}
                          onClick={() => setOpen(true)}
                      >
                              cargar Invitados
                          </Button>
            </Grid>
       
             <Grid size={{xs:12,sm:12,md:12,lg:12}} mb={2}>
      <DataGridCustom rows={filteredRows} columns={columns}  height={"calc(100vh - 180px)"}></DataGridCustom>

             </Grid>
      
      <Snackbar
                open={showSnackbar}
                autoHideDuration={4000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Alert onClose={() => setShowSnackbar(false)} severity="success" variant="filled">
                  Invitado creado exitosamente
                </Alert>
              </Snackbar>
        {open && (

          <UploadGuestsDialog open={open} onClose={()=> setOpen(false)} onCreated={handleUpload} ></UploadGuestsDialog>
        )

        }
         {openCreated && (

          <CreateGuestDialog open={openCreated} onClose={()=> setOpenCreated(false)} onCreated={handleCreated} ></CreateGuestDialog>
        )

        }

    </Grid>
  );
}


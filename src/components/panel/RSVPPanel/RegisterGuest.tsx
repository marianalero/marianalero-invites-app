import { Box, Button, FormControl, InputLabel, Menu, MenuItem,  Select,  SelectChangeEvent,  TextField, useMediaQuery, useTheme,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { exportGuestsToExcel, getGuests } from '../../../services/guestApiClient';
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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useSnackbar } from '../../../context/snackbarContext';
import GenerateGenericLinks from './Dialog/GenerateGenericLinks';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import StatsCards, { StatsCardsProps } from './StatsCards';
export default function RegisterGuest() {
  const [guests, setGuest] = useState<Guest[]>([]);
  const [invitation, setInvitation] = useState<Invitation>();
  const invitationId:string =getInvitationIdFromToken() ? getInvitationIdFromToken()?.toString() : "";
  const [open, setOpen] = useState(false);
  const [openCreated, setOpenCreated] = useState(false);
  const { showSnackbar } = useSnackbar();
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 const [openLinks, setOpenLinks] = useState(false);
  const [loading,setLoading] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [stats, setStats] = useState<StatsCardsProps>();
  const [age, setAge] = useState('0');
  const filteredRows = useMemo(() => {
  return guests.filter(row => {
    const rsvp = Number(age); // lo convertimos a número solo una vez

    const matchesAge = rsvp === 0 || row.rsvpStatus === rsvp;
    const matchesSearch = !search || row.fullName.toLowerCase().includes(search.toLowerCase());
    
    return matchesAge && matchesSearch;
  });
}, [search, guests, age]);
  
  const fetchGuests = async () =>  {
    
    const res = await getGuests(Number.parseInt(invitationId));
    setGuest(res.guests);
    setStats(
    {
        totalAssigned: res.total,
        totalConfirmed: res.totalConfirmed,
        totalNotConfirmed: res.totalNotConfirmed,
        totalWithoutResponse: res.totalWithoutResponse,
    }
    );
    
  };

  const fetchInvitation = async () =>  {
    const res = await getInvitationById(Number.parseInt(invitationId));

    setInvitation(res);
  };

  useEffect(() => {
    setLoading(true);
    fetchGuests();
    fetchInvitation();
    setLoading(false);
  }, []);

  const handleUpload = () => {
    setOpen(false);
    fetchGuests(); 
     showSnackbar('Archivo cargado exitosamente', 'success')
  };
  const handleCreated = () => {
    setLoading(true);
    setOpenCreated(false);
    fetchGuests(); 
    showSnackbar('Invitado creado exitosamente', 'success')
    setLoading(false);
  };

  const download = async () => {
    // setLoadingDownload(true);

     await exportGuestsToExcel(Number.parseInt(invitationId), Number(age) !== 0 ? Number(age) :undefined);
  //  setLoadingDownload(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);

   

  };
const columns: GridColDef[] = !isMobile  ? [
  { field: 'fullName', headerName: 'Nombre', flex: 2, minWidth:250 },
   { field: 'companion', headerName: 'Acompañante(s)', flex: 2 , minWidth:150 },
  { field: 'phoneNumber', headerName: 'Teléfono', flex: 2 , minWidth:100 },
  { field: 'rsvpStatus', headerName: 'Confirmación', flex: 2 , minWidth:150 ,
    renderCell: (params) => (
        <RsvpStatusChip statusId={params.row.rsvpStatus} />
    ),
    },
    { field: 'totalConfirmed', headerName: 'Confirmados', flex: 2 ,  minWidth:100, valueGetter: (_,row) => `${row.totalConfirmed}/${row.totalAssigned}` },
    {
      field: "actions",
      headerName: "",
      type: "actions",
     width: invitation?.hasQuestions ? 300 : 220,
      renderCell: (params) => (
        <GuestActions  guest={params.row} link={invitation ? invitation.link : ""} refresh={() => fetchGuests() } questions={invitation?.hasQuestions ?? false} />
      ),
    },
] : [
   { field: 'fullName', headerName: 'Nombre', flex: 2, minWidth:150 },
   { field: 'rsvpStatus', headerName: 'Confirmación', flex: 2 , minWidth:100 ,
    renderCell: (params) => (
        <RsvpStatusChip statusId={params.row.rsvpStatus} />
    ),
   },
   { field: 'totalConfirmed', headerName: 'Confirmados', flex: 2 ,  minWidth:100, valueGetter: (_,row) => `${row.totalConfirmed}/${row.totalAssigned}` },
   {
      field: "actions",
      headerName: "",
      type: "actions",
      width:invitation?.hasQuestions ?  180 : 140,
      renderCell: (params) => (
        <GuestActions guest={params.row} link={invitation ? invitation.link : ""} refresh={() => fetchGuests() } questions={invitation?.hasQuestions ?? false} />
      ),
    },
];

  return (
  <Box>
    <Box sx={{ mb: { xs: 3, md: 5 } }}>
      <StatsCards {...stats} />
    </Box>

    <Box
      sx={{
        borderRadius: "30px",
        bgcolor: "rgba(255,255,255,.55)",
        border: "1px solid rgba(200,173,120,.28)",
        boxShadow: "0 20px 50px rgba(75,45,35,.08)",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          p: { xs: 2, md: 3 },
          alignItems: "center",
          borderBottom: "1px solid rgba(200,173,120,.22)",
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "999px",
                bgcolor: "#fff",
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="confirmation-select-label">Confirmación</InputLabel>
            <Select
              labelId="confirmation-select-label"
              value={age}
              label="Confirmación"
              onChange={handleChange}
              sx={{
                borderRadius: "999px",
                bgcolor: "#fff",
              }}
            >
              <MenuItem value={0}>Todos</MenuItem>
              <MenuItem value={1}>Sin responder</MenuItem>
              <MenuItem value={2}>Asistirá</MenuItem>
              <MenuItem value={3}>No asistirá</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Button
            fullWidth
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            sx={{
              borderRadius: "999px",
              py: 1.1,
              bgcolor: "#a41423",
              color: "#fff",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 12px 26px rgba(164,20,35,.18)",
              "&:hover": {
                bgcolor: "#7f0f1b",
              },
            }}
          >
            Acciones
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            variant="menu"
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: "18px",
                border: "1px solid rgba(200,173,120,.28)",
                boxShadow: "0 18px 40px rgba(75,45,35,.12)",
              },
            }}
          >
            <MenuItem onClick={() => setOpenCreated(true)}>
              <Add color="primary" sx={{ mr: 1 }} /> Nuevo invitado
            </MenuItem>

            <MenuItem onClick={() => setOpen(true)}>
              <FileUploadRoundedIcon color="primary" sx={{ mr: 1 }} /> Cargar invitados
            </MenuItem>

            <MenuItem
              onClick={() => {
                download();
                setAnchorEl(null);
              }}
            >
              <CloudDownloadIcon color="primary" sx={{ mr: 1 }} /> Descargar Excel
            </MenuItem>

            <MenuItem onClick={() => setOpenLinks(true)}>
              <InsertLinkRoundedIcon color="primary" sx={{ mr: 1 }} /> Links genéricos
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>

      <Box
        sx={{
          // bgcolor: "#fff",
          p: 0,
        }}
      >
        <DataGridCustom
          rows={filteredRows}
          columns={columns}
          height="calc(100vh - 360px)"
          loading={loading}
        />
      </Box>
    </Box>

    {open && (
      <UploadGuestsDialog
        open={open}
        onClose={() => setOpen(false)}
        onCreated={handleUpload}
      />
    )}

    {openCreated && (
      <CreateGuestDialog
        open={openCreated}
        onClose={() => setOpenCreated(false)}
        onCreated={handleCreated}
      />
    )}

    {openLinks && (
      <GenerateGenericLinks
        open={openLinks}
        onClose={() => setOpenLinks(false)}
        link={invitation?.link}
        onSave={() => {}}
      />
    )}
  </Box>
);
}


import { Button, FormControl, InputLabel, Menu, MenuItem,  Select,  SelectChangeEvent,  TextField, Typography, useMediaQuery, useTheme,
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
    console.log(res);
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
    console.log(age)
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
      width:500,
      renderCell: (params) => (
        <GuestActions guest={params.row} link={invitation ? invitation.link : ""} refresh={() => fetchGuests() } questions={invitation?.hasQuestions ?? false} />
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
      width:500,
      renderCell: (params) => (
        <GuestActions guest={params.row} link={invitation ? invitation.link : ""} refresh={() => fetchGuests() } questions={invitation?.hasQuestions ?? false} />
      ),
    },
];

  return (
    <Grid container>
      <Grid size={{xs:12,sm:12,md:12,lg:12}}>
         <StatsCards {...stats} />
      </Grid>
       <Grid size={{xs:12,sm:12,md:6,lg:6}} mb={2}>
              <TextField
                size="small"
                variant="outlined"
                label="Buscar por nombre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth={true}
              />
              </Grid>
              <Grid size={{xs:12,sm:12,md:6,lg:6}} mb={2} display="flex" justifyContent={"end"} gap={2} paddingLeft={2}> 
                <FormControl fullWidth  size="small">
                  <InputLabel id="demo-simple-select-label">Confirmación</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    
                  >
                    <MenuItem value={0}>Todos</MenuItem>
                    <MenuItem value={1}>Sin Responder</MenuItem>
                    <MenuItem value={2}>Asistirá</MenuItem>
                    <MenuItem value={3}>No Asistirá</MenuItem>
                  </Select>
                </FormControl>
                    <Button
                    fullWidth={true}
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                    variant='contained'
                  >
                    Acciones
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      variant='menu'
                    >
                    <MenuItem  onClick={() => setOpenCreated(true)}>
                      <Typography ><Add color='primary'/> Nuevo Invitado</Typography> </MenuItem>
                    <MenuItem   onClick={() => setOpen(true)}> <Typography ><FileUploadRoundedIcon color='primary' /> Cargar Invitados</Typography> </MenuItem>
                    <MenuItem onClick={() => {download(); setAnchorEl(null)}}> <Typography ><CloudDownloadIcon color='primary'/> Descargar Excel</Typography></MenuItem>
                    <MenuItem onClick={() => setOpenLinks(true)}> <Typography ><InsertLinkRoundedIcon color='primary'/> Links Genericos</Typography></MenuItem>
                    </Menu>
            </Grid>
       
             <Grid size={{xs:12,sm:12,md:12,lg:12}} mb={2}>

              <DataGridCustom rows={filteredRows} columns={columns}  height={"calc(100vh - 180px)"} loading={loading}></DataGridCustom>
             </Grid>
        {open && (

          <UploadGuestsDialog open={open} onClose={()=> setOpen(false)} onCreated={handleUpload} ></UploadGuestsDialog>
        )

        }
         {openCreated && (

          <CreateGuestDialog open={openCreated} onClose={()=> setOpenCreated(false)} onCreated={handleCreated} ></CreateGuestDialog>
        )

        }
        {openLinks && (
        <GenerateGenericLinks
          open={openLinks}
          onClose={() => setOpenLinks(false)}
          link={invitation?.link} onSave={function (): void {
          } }        />
      )}

    </Grid>
  );
}


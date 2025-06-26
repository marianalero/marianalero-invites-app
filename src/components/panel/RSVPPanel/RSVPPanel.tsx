import { Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { getGuests } from '../../../services/guestApiClient';
import { getInvitationIdFromToken } from '../../../services/authService';
import { Guest } from '../../../models/guest';
import StatsCards, { StatsCardsProps } from './StatsCards';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GuestTable from './GuestTable';

export default function RSVPPanel() {
  const [guests, setGuest] = useState<Guest[]>([]);
    const invitationId:string =getInvitationIdFromToken() ? getInvitationIdFromToken()?.toString() : "";
    const [stats, setStats] = useState<StatsCardsProps>();
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

  useEffect(() => {
    fetchGuests();
  }, []);

const columnsConfirmed: GridColDef[] = [
  { field: 'fullName', headerName: 'Nombre', flex: 2 },
  { field: 'phoneNumber', headerName: 'Teléfono', flex: 2 },
    { field: 'totalAssigned', headerName: 'N° Asignados', flex: 2 },
    { field: 'totalConfirmed', headerName: 'N° Confirmados', flex: 2 },
];
const columnsNotConfirmed: GridColDef[] = [
  { field: 'fullName', headerName: 'Nombre', flex: 2 },
  { field: 'phoneNumber', headerName: 'Teléfono', flex: 2 },
    { field: 'totalAssigned', headerName: 'N° Asignados', flex: 2 },
];
const columns: GridColDef[] = [
  { field: 'fullName', headerName: 'Nombre', flex: 2 },
  { field: 'phoneNumber', headerName: 'Teléfono', flex: 2 },
    { field: 'totalAssigned', headerName: 'N° Asignados', flex: 2 },
    { field: 'totalConfirmed', headerName: 'N° Confirmados', flex: 2 },
];
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
        <StatsCards {...stats} />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Confirmados" value="1" />
              <Tab label="No Asistirán" value="2" />
              <Tab label="Sin respuesta" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <GuestTable 
              guests={guests.filter(row => row.rsvpStatus == 2)} 
              showActions={false}
              columns={columnsConfirmed}

             >
            </GuestTable>
          </TabPanel>
          <TabPanel value="2">
            <GuestTable 
              guests={guests.filter(row => row.rsvpStatus == 3)} 
              showActions={false}
              columns={columnsNotConfirmed}
             >
            </GuestTable>
          </TabPanel>
          <TabPanel value="3">
           <GuestTable 
              guests={guests.filter(row => row.rsvpStatus == 1)} 
              showActions={false}
              columns={columns}
             >
            </GuestTable>
          </TabPanel>
        </TabContext>
    </Box>
  );
}


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
    const [loading,setLoading] = useState<boolean>(false)
  const fetchGuests = async () =>  {
    setLoading(true);
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
     setLoading(false);
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

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
  <Box>
    <Box sx={{ mb: 4 }}>
      <StatsCards {...stats} />
    </Box>

    <TabContext value={value}>
      <Box
        sx={{
          borderRadius: "28px",
          bgcolor: "rgba(255,255,255,.42)",
          border: "1px solid rgba(200,173,120,.35)",
          boxShadow: "0 20px 50px rgba(75,45,35,.08)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 3 },
            pt: 2,
            borderBottom: "1px solid rgba(200,173,120,.35)",
            
          }}
        >
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: 1,
              },
              "& .MuiTab-root": {
                minHeight: "auto",
                px: 2.5,
                py: 1.2,
                mb: 2,
                borderRadius: "999px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                textTransform: "none",
                color: "#7d5f55",
                bgcolor: "rgba(255,255,255,.45)",
                border: "1px solid rgba(200,173,120,.28)",
              },
              "& .Mui-selected": {
                bgcolor: "#a41423",
                color: "#fff !important",
                borderColor: "#a41423",
                boxShadow: "0 12px 26px rgba(164,20,35,.18)",
              },
            }}
          >
            <Tab label="Confirmados" value="2" />
            <Tab label="No asistirán" value="3" />
            <Tab label="Sin respuesta" value="1" />
          </TabList>
        </Box>

        <TabPanel value="1" sx={{ p: { xs: 2, md: 3 } }}>
          <GuestTable
            guests={guests.filter((row) => row.rsvpStatus == 2)}
            showActions={false}
            columns={columnsConfirmed}
            status={3}
            loading={loading}
          />
        </TabPanel>

        <TabPanel value="2" sx={{ p: { xs: 2, md: 3 } }}>
          <GuestTable
            guests={guests.filter((row) => row.rsvpStatus == 3)}
            showActions={false}
            columns={columnsNotConfirmed}
            status={2}
            loading={loading}
          />
        </TabPanel>

        <TabPanel value="3" sx={{ p: { xs: 2, md: 3 } }}>
          <GuestTable
            loading={loading}
            guests={guests.filter((row) => row.rsvpStatus == 1)}
            showActions={false}
            columns={columns}
            status={1}
          />
        </TabPanel>
      </Box>
    </TabContext>
  </Box>
);
}


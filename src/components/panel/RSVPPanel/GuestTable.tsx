import { Box,  Button,  TextField,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridCustom from '../../DataGridCustom/DataGridCustom';
import { Guest } from '../../../models/guest';
import { exportGuestsToExcel } from '../../../services/guestApiClient';
import { getInvitationIdFromToken } from '../../../services/authService';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
export interface GuestTableProps {
    guests:Guest[];
    showActions: boolean; 
    handleCreated?:() => void;
    columns:GridColDef[];
    status:number;
    loading:boolean;
}

const GuestTable= (props:GuestTableProps) => {
  const [search, setSearch] = useState('');
  const invitationId:string =getInvitationIdFromToken() ? getInvitationIdFromToken()?.toString() : "";
   const filteredRows = useMemo(() => {
      return props.guests.filter(row =>
        row.fullName.toLowerCase().includes(search.toLowerCase())
      );
    }, [search, props.guests]);
 
  const download = async () => {
     await exportGuestsToExcel(Number.parseInt(invitationId),props.status);

  };
  return (
    <Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          size="small"
          variant="outlined"
          label="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{width:"50%"}}
        />
         <Button
            variant="contained"
            startIcon={<CloudDownloadIcon />}
            onClick={() => download()}
           >
             Descargar Excel
        </Button>
      </Box>
        <DataGridCustom loading={props.loading} rows={filteredRows} columns={props.columns} height={"calc(100vh - 120px)"}></DataGridCustom>

        
    </Box>
  );
}

export default GuestTable;


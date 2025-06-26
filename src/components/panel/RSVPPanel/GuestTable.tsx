import { Box,  TextField,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataGridCustom from '../../DataGridCustom/DataGridCustom';
import { Guest } from '../../../models/guest';

export interface GuestTableProps {
    guests:Guest[];
    showActions: boolean; 
    handleCreated?:() => void;
    columns:GridColDef[]
}

const GuestTable= (props:GuestTableProps) => {
  const [search, setSearch] = useState('');

   const filteredRows = useMemo(() => {
      return props.guests.filter(row =>
        row.fullName.toLowerCase().includes(search.toLowerCase())
      );
    }, [search, props.guests]);

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
        
      </Box>
        <DataGridCustom rows={filteredRows} columns={props.columns} height={"calc(100vh - 120px)"}></DataGridCustom>

        
    </Box>
  );
}

export default GuestTable;


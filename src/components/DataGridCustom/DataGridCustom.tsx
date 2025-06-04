// src/components/StyledTable.tsx
import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface StyledTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  height?: number;
}

const DataGridCustom: React.FC<StyledTableProps> = ({ rows, columns, height = 400 }) => {
  return (
    <Box
      sx={{
        height,
        // backgroundColor: '#ffffff',
        padding: 2,
        borderRadius: 2,
        // '& .MuiDataGrid-columnHeaders': {
        //   backgroundColor: '#ffffff',
        //   color: '#a41423',
        //   fontWeight: 'bold',
        // },
        // '& .MuiDataGrid-cell': {
        //   color: '#3a2e2e',
        // },
        // '& .MuiDataGrid-row:nth-of-type(odd)': {
        //   backgroundColor: '#ffffff',
        // },
        // '& .MuiDataGrid-row:nth-of-type(even)': {
        //   backgroundColor: '#ffffff',
        // },
        // '& .MuiDataGrid-footerContainer': {
        //   backgroundColor: '#ffffff',
        //   borderTop: '1px solid #d8c8a8',
        // },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridCustom;

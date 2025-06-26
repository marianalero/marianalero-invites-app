// src/components/StyledTable.tsx
import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface StyledTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  height?: string;
}

const DataGridCustom: React.FC<StyledTableProps> = ({ rows, columns, height = 400 }) => {
  return (
    <Box
      sx={{
        height,
      }}
    >
      <DataGrid
        disableColumnMenu
        disableColumnResize
        disableColumnSelector
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        disableMultipleRowSelection
      />
    </Box>
  );
};

export default DataGridCustom;

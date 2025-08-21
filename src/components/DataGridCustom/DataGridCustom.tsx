// src/components/StyledTable.tsx
import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface StyledTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  height?: string;
  loading?:boolean;
}

const DataGridCustom: React.FC<StyledTableProps> = ({ rows, columns, height = 400,loading = false }) => {
  return (
    <Box
      sx={{
        height,
      }}
    >
      <DataGrid
        loading={loading}
        disableColumnMenu
        disableColumnResize
        disableColumnSelector
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        disableMultipleRowSelection
        pageSizeOptions={[5, 10, 25, 50]} // 👈 aquí defines las opciones
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } }, // 👈 valor inicial
        }}
        localeText={{
          noRowsLabel:"No se encontraron registos",
          paginationRowsPerPage: 'Filas por página', 
          paginationDisplayedRows:({ from, to, count }) => `${from} - ${to} de ${
            count === -1 ? `más de ${to}` : count
            }`,
      }}
      />
    </Box>
  );
};

export default DataGridCustom;

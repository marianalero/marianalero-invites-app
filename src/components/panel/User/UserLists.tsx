import { IconButton, Button, Box,
  Tooltip,
  TextField
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import CreateUserDialog from './Dialog/CreateUserDialog';
import { deleteUser, getUsers } from '../../../services/userService';
import { User } from '../../../models/user';
import { GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataGridCustom from '../../DataGridCustom/DataGridCustom';
import { Add } from '@mui/icons-material';
import { useSnackbar } from '../../../context/snackbarContext';
export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [openCreate, setOpenCreate] = useState(false);
  const { showSnackbar } = useSnackbar();
  const [search, setSearch] = useState('');

    const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Nombre', flex: 2 },
    { field: 'email', headerName: 'Email', flex: 2 },
    { field: 'role', headerName: 'Rol', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Editar">
            <IconButton onClick={() => handleEdit(params.row.id)} size="small" color="primary">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton onClick={() => handleDelete(params.row.id)} size="small" color="primary">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];
  
  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (id: number) => {
    setEditId(id);
    setOpenCreate(true);
  };
  const handleDelete = async (id: number) => {
    await deleteUser(id);
    fetchUsers();
  };

 
  const handleUserCreated = () => {
    setOpenCreate(false);
    fetchUsers(); 
    showSnackbar('Usuario creado exitosamente', 'success')
  };

   const filteredRows = useMemo(() => {
    return users.filter(row =>
      row.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);
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
          startIcon={<Add />}
          onClick={() => setOpenCreate(true)}
        >
          Nuevo Usuario
        </Button>
      </Box>

       <DataGridCustom rows={filteredRows} columns={columns} />

    {openCreate && (
        <CreateUserDialog open={openCreate} onClose={() => {setOpenCreate(false);setEditId(null)}} onUserCreated={handleUserCreated} id={editId}></CreateUserDialog>
    )}
    </Box>
  );
}

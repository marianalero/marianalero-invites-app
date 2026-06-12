import {
  IconButton,
  Button,
  Box,
  Tooltip,
  TextField,
  Typography,
  Chip,
  InputAdornment,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CreateUserDialog from "./Dialog/CreateUserDialog";
import { deleteUser, getUsers } from "../../../services/userService";
import { User } from "../../../models/user";
import { GridColDef } from "@mui/x-data-grid";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DataGridCustom from "../../DataGridCustom/DataGridCustom";
import { Add } from "@mui/icons-material";
import { useSnackbar } from "../../../context/snackbarContext";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [openCreate, setOpenCreate] = useState(false);
  const { showSnackbar } = useSnackbar();
  const [search, setSearch] = useState("");

  const actionButtonSx = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    bgcolor: "#fff",
    border: "1px solid rgba(200,173,120,.28)",
    color: "#a41423",
    "&:hover": {
      bgcolor: "rgba(164,20,35,.06)",
      transform: "translateY(-1px)",
    },
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nombre", flex: 2, minWidth: 220 },
    { field: "email", headerName: "Email", flex: 2, minWidth: 260 },
    {
      field: "role",
      headerName: "Rol",
      flex: 1,
      minWidth: 140,
      renderCell: (params) => {
        const isAdmin = params.row.role === "admin";

        return (
          <Chip
            label={isAdmin ? "Admin" : "Cliente"}
            size="small"
            sx={{
              borderRadius: "999px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              bgcolor: isAdmin ? "#fbecef" : "#fff8e8",
              color: isAdmin ? "#a41423" : "#b28a3b",
              border: "1px solid rgba(200,173,120,.22)",
            }}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 140,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Box display="flex" gap={1} justifyContent="center" width="100%">
          <Tooltip title="Editar">
            <IconButton
              onClick={() => handleEdit(params.row.id)}
              size="small"
              sx={actionButtonSx}
            >
              <EditRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar">
            <IconButton
              onClick={() => handleDelete(params.row.id)}
              size="small"
              sx={{
                ...actionButtonSx,
                color: "#b44d5f",
                "&:hover": {
                  bgcolor: "#fdf6f7",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <DeleteOutlineRoundedIcon fontSize="small" />
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
    showSnackbar("Usuario eliminado correctamente", "success");
  };

  const handleUserCreated = () => {
    setOpenCreate(false);
    setEditId(null);
    fetchUsers();
    showSnackbar(
      editId ? "Usuario actualizado exitosamente" : "Usuario creado exitosamente",
      "success"
    );
  };

  const filteredRows = useMemo(() => {
    return users.filter((row) => {
      const value = search.toLowerCase();

      return (
        row.name.toLowerCase().includes(value) ||
        row.email.toLowerCase().includes(value) ||
        row.role?.toLowerCase().includes(value)
      );
    });
  }, [search, users]);

  return (
    <Box>
      <Box
        sx={{
          borderRadius: "30px",
          bgcolor: "rgba(255,255,255,.55)",
          border: "1px solid rgba(200,173,120,.28)",
          boxShadow: "0 20px 50px rgba(75,45,35,.08)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 3 },
            display: "flex",
            gap: 2,
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            borderBottom: "1px solid rgba(200,173,120,.22)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: "1.7rem",
                lineHeight: 1,
                mb: 0.5,
              }}
            >
              Usuarios
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                fontSize: ".86rem",
              }}
            >
              {filteredRows.length} usuarios registrados
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Buscar usuario"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                width: { xs: "100%", sm: 320 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                  bgcolor: "#fff",
                  fontFamily: "Montserrat, sans-serif",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "#bdaa8c" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => {
                setEditId(null);
                setOpenCreate(true);
              }}
              sx={{
                borderRadius: "999px",
                px: 3,
                bgcolor: "#a41423",
                color: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                textTransform: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 12px 26px rgba(164,20,35,.18)",
                "&:hover": {
                  bgcolor: "#7f0f1b",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Nuevo usuario
            </Button>
          </Box>
        </Box>

        <DataGridCustom rows={filteredRows} columns={columns} />
      </Box>

      {openCreate && (
        <CreateUserDialog
          open={openCreate}
          onClose={() => {
            setOpenCreate(false);
            setEditId(null);
          }}
          onUserCreated={handleUserCreated}
          id={editId}
        />
      )}
    </Box>
  );
}
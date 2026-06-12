import { Button, Box, Switch, Typography, Chip, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CreateInvitationModal from "./Dialog/CreateInvitationDialog";
import {
  changeStatus,
  getInvitations,
} from "../../../services/invitationApiClient";
import { Invitation } from "../../../models/invitation";
import { GridColDef } from "@mui/x-data-grid";
import DataGridCustom from "../../DataGridCustom/DataGridCustom";
import InvitationActions from "./InvitationActions";
import { useSnackbar } from "../../../context/snackbarContext";
import dayjs from "dayjs";

export default function InvitationsList() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [open, setOpen] = useState(false);
  const { showSnackbar } = useSnackbar();

  const fetchInvitations = async () => {
    const res = await getInvitations();
    setInvitations(res);
  };

  useEffect(() => {
    fetchInvitations();
  }, []);

  const handleCreated = () => {
    setOpen(false);
    fetchInvitations();
    showSnackbar("Invitación creada exitosamente", "success");
  };

  const handleChangeStatus = async (id: number, checked: boolean) => {
    await changeStatus(id, checked ? 1 : 2);
    fetchInvitations();
    showSnackbar(
      checked ? "Invitación activada" : "Invitación desactivada",
      "success"
    );
  };

  const invitationColumns: GridColDef[] = [
    {
  field: "id",
  headerName: "ID",
  width: 95,
  align: "center",
  headerAlign: "center",
  renderCell: (params) => (
    <Tooltip title="Copiar ID">
      <Chip
        label={`#${params.value}`}
        size="small"
        onClick={() => {
          navigator.clipboard.writeText(params.value.toString());
          showSnackbar("ID copiado", "success");
        }}
        sx={{
          borderRadius: "999px",
          bgcolor: "#f2eadd",
          color: "#a41423",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          border: "1px solid rgba(200,173,120,.28)",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#eadfcd",
          },
        }}
      />
    </Tooltip>
  ),
},
    { field: "name", headerName: "Nombre", flex: 2, minWidth: 220 },
    {
      field: "eventDate",
      headerName: "Fecha evento",
      flex: 1.5,
      minWidth: 170,
      valueFormatter: (value) => dayjs(value).format("DD MMMM YYYY"),
    },
    {
      field: "expirationDate",
      headerName: "Expiración",
      flex: 1.5,
      minWidth: 170,
      valueFormatter: (value) =>
        value ? dayjs(value).format("DD MMMM YYYY") : "Sin fecha",
    },
    {
      field: "statusId",
      headerName: "Estado",
      flex: 1,
      minWidth: 160,
      renderCell: (params) => {
        const active = params.row.statusId === 1;

        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, height: "100%" }}>
            <Switch
              checked={active}
              onChange={(e) =>
                handleChangeStatus(params.row.id, e.target.checked)
              }
            />

            <Chip
              label={active ? "Activa" : "Inactiva"}
              size="small"
              sx={{
                borderRadius: "999px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                bgcolor: active ? "#f6fbf7" : "#fbecef",
                color: active ? "#4d7c57" : "#b44d5f",
                border: "1px solid rgba(200,173,120,.22)",
              }}
            />
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      width: 220,
      renderCell: (params) => (
        <InvitationActions
          invitation={params.row}
          refresh={fetchInvitations}
        />
      ),
    },
  ];

  return (
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
            Invitaciones
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#7d5f55",
              fontSize: ".86rem",
            }}
          >
            {invitations.length} invitaciones registradas
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
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
          Nueva invitación
        </Button>
      </Box>

      <DataGridCustom rows={invitations} columns={invitationColumns} />

      {open && (
        <CreateInvitationModal
          open={open}
          onClose={() => setOpen(false)}
          handleCreate={handleCreated}
        />
      )}
    </Box>
  );
}
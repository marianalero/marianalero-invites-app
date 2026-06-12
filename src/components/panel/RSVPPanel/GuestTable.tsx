import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataGridCustom from "../../DataGridCustom/DataGridCustom";
import { Guest } from "../../../models/guest";
import { exportGuestsToExcel } from "../../../services/guestApiClient";
import { getInvitationIdFromToken } from "../../../services/authService";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export interface GuestTableProps {
  guests: Guest[];
  showActions: boolean;
  handleCreated?: () => void;
  columns: GridColDef[];
  status: number;
  loading: boolean;
}

const GuestTable = (props: GuestTableProps) => {
  const [search, setSearch] = useState("");
  const invitationId: string = getInvitationIdFromToken()
    ? getInvitationIdFromToken()?.toString()
    : "";

  const filteredRows = useMemo(() => {
    return props.guests.filter((row) =>
      row.fullName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, props.guests]);

  const download = async () => {
    await exportGuestsToExcel(Number.parseInt(invitationId), props.status);
  };

  return (
    <Box>
      {/* Actions */}
      <Box
        sx={{
          mb: 2.5,
          display: "flex",
          gap: 2,
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
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
            Invitados
          </Typography>

          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#7d5f55",
              fontSize: ".86rem",
            }}
          >
            {filteredRows.length} registros encontrados
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
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", sm: 280 },
              "& .MuiOutlinedInput-root": {
                borderRadius: "999px",
                bgcolor: "#fff",
                fontFamily: "Montserrat, sans-serif",
                pr: 1,
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
            startIcon={<CloudDownloadIcon />}
            onClick={download}
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
            Descargar Excel
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <Box
        sx={{
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: "#fff",
          border: "1px solid rgba(200,173,120,.25)",
          boxShadow: "0 16px 40px rgba(75,45,35,.06)",
        }}
      >
        <DataGridCustom
          loading={props.loading}
          rows={filteredRows}
          columns={props.columns}
          height="calc(100vh - 300px)"
        />
      </Box>
    </Box>
  );
};

export default GuestTable;
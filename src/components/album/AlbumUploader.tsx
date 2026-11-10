import { Box, Button, Dialog, IconButton, LinearProgress, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import type { AlbumIdentity } from "./albumVisualIdentity";
import { onAccent } from "./albumVisualIdentity";
import { uploadSummary } from "./albumFormat";

export type AlbumUploadStatus = "pending" | "uploading" | "done" | "error";

export interface AlbumUploadEntry {
  id: string;
  file: File;
  previewUrl: string;
  status: AlbumUploadStatus;
  progress: number;
  error?: string;
}

interface Props {
  open: boolean;
  identity: AlbumIdentity;
  entries: AlbumUploadEntry[];
  busy: boolean;
  finished: boolean;
  onClose: () => void;
  onStart: () => void;
  onRetry: (id: string) => void;
}

export default function AlbumUploader({ open, identity, entries, busy, finished, onClose, onStart, onRetry }: Props) {
  const done = entries.filter((entry) => entry.status === "done").length;
  const failed = entries.filter((entry) => entry.status === "error").length;
  const hasPending = entries.some((entry) => entry.status === "pending");

  return (
    <Dialog
      open={open}
      onClose={busy ? undefined : onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{ paper: { sx: { borderRadius: { xs: 0, sm: "28px" }, m: { xs: 0, sm: 2 }, bgcolor: identity.background } } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2.5, pt: 2 }}>
        <Typography className={identity.bodyClass} sx={{ fontWeight: 700, color: identity.text }}>
          Subir fotos y videos
        </Typography>
        <IconButton aria-label="Cerrar" onClick={onClose} disabled={busy}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Box sx={{ px: 2.5, pb: 2.5, display: "grid", gap: 1.25, maxHeight: "70vh", overflow: "auto" }}>
        {entries.map((entry) => (
          <Box key={entry.id} sx={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 1.25, alignItems: "center" }}>
            {entry.file.type.startsWith("video") ? (
              <Box component="video" src={entry.previewUrl} muted sx={{ width: 72, height: 72, objectFit: "cover", borderRadius: "14px", bgcolor: "#000" }} />
            ) : (
              <Box component="img" src={entry.previewUrl} alt="" sx={{ width: 72, height: 72, objectFit: "cover", borderRadius: "14px" }} />
            )}
            <Box>
              <Typography className={identity.bodyClass} sx={{ fontSize: ".88rem", color: identity.text }} noWrap>
                {entry.file.name}
              </Typography>
              <Typography className={identity.bodyClass} sx={{ fontSize: ".78rem", opacity: 0.7 }}>
                {statusLabel(entry.status, entry.error)}
              </Typography>
              {entry.status === "uploading" && <LinearProgress variant="determinate" value={entry.progress} sx={{ mt: 0.6, borderRadius: 99 }} />}
              {entry.status === "error" && (
                <Button onClick={() => onRetry(entry.id)} size="small" sx={{ textTransform: "none", px: 0, color: identity.accent }}>
                  Reintentar
                </Button>
              )}
            </Box>
          </Box>
        ))}
        {(finished || (done + failed > 0 && !hasPending)) && (
          <Typography className={identity.bodyClass} sx={{ color: identity.text, pt: 1 }}>
            {uploadSummary(done, failed)}
          </Typography>
        )}
        <Button
          onClick={hasPending ? onStart : onClose}
          disabled={busy || entries.length === 0}
          variant="contained"
          className={identity.bodyClass}
          sx={{
            mt: 1,
            minHeight: 48,
            borderRadius: "999px",
            textTransform: "none",
            boxShadow: "none",
            bgcolor: identity.accent,
            color: onAccent(identity.accent),
            "&:hover": { bgcolor: identity.accent, filter: "brightness(0.94)", boxShadow: "none" },
          }}
        >
          {busy ? "Subiendo…" : hasPending ? "Subir" : "Listo"}
        </Button>
      </Box>
    </Dialog>
  );
}

function statusLabel(status: AlbumUploadStatus, error?: string) {
  if (status === "pending") return "Pendiente";
  if (status === "uploading") return "Subiendo";
  if (status === "done") return "Completado";
  return error || "No se pudo subir";
}

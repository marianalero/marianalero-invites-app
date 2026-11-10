import { Box, LinearProgress, Snackbar, Typography } from "@mui/material";
import MuiAlert, { type AlertColor } from "@mui/material/Alert";
import { uploadProgressLabel, uploadResultLabel } from "./albumFormat";

export type AlbumUploadStatus = "queued" | "uploading" | "done" | "oversized" | "failed";

export interface AlbumUploadJob {
  id: string;
  file: File;
  status: AlbumUploadStatus;
  progress: number;
  notice?: string;
}

interface Props {
  jobs: AlbumUploadJob[];
  aboveFab?: boolean;
  onDismiss: () => void;
}

export default function AlbumUploadNotice({ jobs, aboveFab = false, onDismiss }: Props) {
  const accepted = jobs.filter((job) => job.status !== "oversized");
  const oversized = jobs.filter((job) => job.status === "oversized" && job.notice);
  const uploading = accepted.some((job) => job.status === "queued" || job.status === "uploading");
  const done = accepted.filter((job) => job.status === "done").length;
  const progress = accepted.length
    ? Math.round(accepted.reduce((sum, job) => sum + (job.status === "queued" ? 0 : job.status === "uploading" ? job.progress : 100), 0) / accepted.length)
    : 0;
  const headline = uploading ? uploadProgressLabel(accepted.length) : uploadResultLabel(done);
  const open = Boolean(headline) || oversized.length > 0;
  const severity: AlertColor = oversized.length > 0 ? "warning" : uploading ? "info" : "success";

  return (
    <Snackbar
      open={open}
      autoHideDuration={uploading ? null : 6000}
      onClose={(_, reason) => {
        if (reason === "clickaway" || uploading) return;
        onDismiss();
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        bottom: {
          xs: aboveFab ? "calc(92px + env(safe-area-inset-bottom, 0px))" : "calc(16px + env(safe-area-inset-bottom, 0px))",
          md: 24,
        },
        left: { xs: "12px !important", sm: "50%" },
        right: { xs: "12px !important", sm: "auto" },
        width: { xs: "auto", sm: "min(420px, calc(100% - 32px))" },
        transform: { xs: "none !important", sm: "translateX(-50%)" },
      }}
    >
      <MuiAlert
        severity={severity}
        variant="filled"
        onClose={uploading ? undefined : onDismiss}
        sx={{ width: "100%", alignItems: "flex-start", boxShadow: "0 12px 32px rgba(20, 16, 14, 0.22)", "& .MuiAlert-message": { width: "100%" } }}
      >
        {headline && (
          <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.35 }}>
            {headline}
          </Typography>
        )}
        {uploading && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mt: headline ? 1 : 0, borderRadius: 99, bgcolor: "rgba(255,255,255,.28)", "& .MuiLinearProgress-bar": { bgcolor: "#fff" } }}
          />
        )}
        {oversized.length > 0 && (
          <Box sx={{ mt: headline || uploading ? 1 : 0, maxHeight: "30vh", overflow: "auto" }}>
            {oversized.map((job) => (
              <Typography key={job.id} variant="body2" sx={{ lineHeight: 1.35, overflowWrap: "anywhere" }}>
                {job.notice}
              </Typography>
            ))}
          </Box>
        )}
      </MuiAlert>
    </Snackbar>
  );
}

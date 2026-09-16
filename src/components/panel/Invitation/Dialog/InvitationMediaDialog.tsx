import { useEffect, useMemo, useState } from "react";
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from "@mui/material";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import type { Invitation } from "../../../../models/invitation";
import type { InvitationAsset } from "../../../../models/invitationAsset";
import { deleteInvitationAsset, getAssets, uploadInvitationAsset } from "../../../../services/mediaApiClient";
import { useSnackbar } from "../../../../context/snackbarContext";

const assetKinds = [["cover", "Portada"], ["cover-desktop", "Portada horizontal"], ["background", "Fondo"], ["middle-image", "Imagen intermedia"], ["gallery", "Galería"], ["mini-gallery", "Mini galería"], ["icon", "Icono"], ["ornament", "Adorno"], ["seal", "Sello"], ["envelope", "Sobre"], ["og", "Vista previa social"], ["reception", "Recepción"], ["church", "Iglesia"], ["civil", "Civil"]] as const;

interface Props { invitation: Invitation; open: boolean; onClose: () => void; }

function normalizeMediaKey(value: string) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function suggestedMediaKey(invitation: Invitation) {
  try {
    const pathname = new URL(invitation.link).pathname.split("/").filter(Boolean).pop();
    if (pathname) return normalizeMediaKey(pathname);
  } catch { /* A link can be a relative route or empty. */ }
  return normalizeMediaKey(invitation.link || invitation.name);
}

export default function InvitationMediaDialog({ invitation, open, onClose }: Props) {
  const { showSnackbar } = useSnackbar();
  const initialMediaKey = useMemo(() => suggestedMediaKey(invitation), [invitation]);
  const [mediaKey, setMediaKey] = useState(initialMediaKey);
  const [assets, setAssets] = useState<InvitationAsset[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [assetKind, setAssetKind] = useState<(typeof assetKinds)[number][0]>("gallery");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const refreshAssets = async (key = mediaKey) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) { setAssets([]); return; }
    setLoadingAssets(true);
    try { setAssets(await getAssets(key)); } catch { setAssets([]); } finally { setLoadingAssets(false); }
  };

  useEffect(() => {
    if (!open) return;
    setMediaKey(initialMediaKey); setFiles([]); setProgress(0); refreshAssets(initialMediaKey);
  }, [open, initialMediaKey]);

  const handleUpload = async () => {
    const key = normalizeMediaKey(mediaKey);
    if (!files.length || !key) { showSnackbar("Indica una clave de medios y selecciona al menos una imagen.", "warning"); return; }
    setUploading(true); setProgress(0);
    try {
      const sortOrder = assets.filter((asset) => asset.assetKind === assetKind).length;
      for (const [index, file] of files.entries()) {
        await uploadInvitationAsset({
          file,
          mediaKey: key,
          invitationId: invitation.id,
          assetKind,
          sortOrder: sortOrder + index,
          onProgress: (fileProgress) => setProgress(Math.round(((index + fileProgress / 100) / files.length) * 100)),
        });
      }
      setFiles([]); setProgress(100); await refreshAssets(key); showSnackbar(`${files.length} imagen${files.length === 1 ? "" : "es"} cargada${files.length === 1 ? "" : "s"} en Cloudinary.`, "success");
    } catch (error) {
      showSnackbar(error instanceof Error ? error.message : "No fue posible cargar la imagen.", "error");
    } finally { setUploading(false); }
  };

  const handleDelete = async (asset: InvitationAsset) => {
    if (!window.confirm(`¿Eliminar permanentemente la imagen “${asset.assetKind}”?`)) return;
    setDeletingId(asset.id);
    try {
      await deleteInvitationAsset(asset.id);
      await refreshAssets();
      showSnackbar("Imagen eliminada de Cloudinary.", "success");
    } catch {
      showSnackbar("No fue posible eliminar la imagen.", "error");
    } finally { setDeletingId(null); }
  };

  return <Dialog open={open} onClose={uploading ? undefined : onClose} fullWidth maxWidth="md">
    <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#a41423" }}><AddPhotoAlternateRoundedIcon /> Medios · {invitation.name}</DialogTitle>
    <Divider />
    <DialogContent sx={{ pt: 3 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>La clave identifica la carpeta de Cloudinary y no depende del ID de la invitación.</Typography>
      <TextField fullWidth label="Clave de medios" value={mediaKey} disabled={uploading} onChange={(event) => setMediaKey(normalizeMediaKey(event.target.value))} helperText="Ejemplo: xv-michelle-centeno" sx={{ mb: 2 }} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, alignItems: "center" }}>
        <FormControl fullWidth><InputLabel id="asset-kind-label">Tipo de imagen</InputLabel><Select labelId="asset-kind-label" label="Tipo de imagen" value={assetKind} disabled={uploading} onChange={(event) => setAssetKind(event.target.value as typeof assetKind)}>{assetKinds.map(([value, label]) => <MenuItem key={value} value={value}>{label}</MenuItem>)}</Select></FormControl>
        <Button component="label" variant="outlined" disabled={uploading} sx={{ height: 56, textTransform: "none" }}>{files.length ? `${files.length} imagen${files.length === 1 ? "" : "es"} seleccionada${files.length === 1 ? "" : "s"}` : "Seleccionar imágenes"}<input hidden multiple type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => setFiles(Array.from(event.target.files ?? []))} /></Button>
      </Box>
      {uploading && <Box sx={{ mt: 2 }}><LinearProgress variant="determinate" value={progress} /><Typography variant="caption">Subiendo {progress}%</Typography></Box>}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}><Typography variant="subtitle1">Imágenes cargadas {loadingAssets ? "· actualizando…" : `(${assets.length})`}</Typography><Button size="small" onClick={() => refreshAssets()} disabled={loadingAssets || uploading}>Actualizar</Button></Box>
      <Box sx={{ mt: 1.5, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 1.5 }}>
        {assets.map((asset) => <Box key={asset.id} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden" }}><Box component="img" src={asset.secureUrl} alt={asset.assetKind} sx={{ width: "100%", aspectRatio: "1", display: "block", objectFit: "cover" }} /><Box sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 0.5 }}><Chip size="small" label={asset.assetKind} /><Box><IconButton size="small" aria-label="Copiar URL" onClick={() => navigator.clipboard.writeText(asset.secureUrl)}><ContentCopyRoundedIcon fontSize="small" /></IconButton><IconButton size="small" color="error" aria-label="Eliminar imagen" disabled={deletingId === asset.id} onClick={() => handleDelete(asset)}><DeleteOutlineRoundedIcon fontSize="small" /></IconButton></Box></Box></Box>)}
        {!loadingAssets && assets.length === 0 && <Typography variant="body2" color="text.secondary">Aún no hay imágenes para esta clave.</Typography>}
      </Box>
    </DialogContent>
    <DialogActions><Button startIcon={<CloseRoundedIcon />} onClick={onClose} disabled={uploading}>Cerrar</Button><Button variant="contained" onClick={handleUpload} disabled={!files.length || !mediaKey || uploading}>{files.length > 1 ? `Subir ${files.length} imágenes` : "Subir imagen"}</Button></DialogActions>
  </Dialog>;
}

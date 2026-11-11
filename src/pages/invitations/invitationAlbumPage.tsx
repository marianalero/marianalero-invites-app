import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Grid from "@mui/material/Grid2";
import ResponsiveLayout from "../../layouts/headerPanel";
import FeaturePageFrame, { burgundyButtonSx } from "../../components/panel/Invitation/features/FeaturePageFrame";
import AlbumQrPanel from "../../components/album/AlbumQrPanel";
import { formatAlbumDate, momentLabel } from "../../components/album/albumFormat";
import { deleteAlbumItem, getManagedAlbum, readApiError } from "../../services/albumApiClient";
import { getInvitationById } from "../../services/invitationApiClient";
import { useSnackbar } from "../../context/snackbarContext";
import type { Invitation } from "../../models/invitation";
import type { ManagedAlbum, ManagedAlbumItem } from "../../models/album";

export default function InvitationAlbumPage() {
  const { id } = useParams();
  const invitationId = Number(id);
  const { showSnackbar } = useSnackbar();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [album, setAlbum] = useState<ManagedAlbum | null>(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState<ManagedAlbumItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    const [invitationData, albumData] = await Promise.all([
      getInvitationById(invitationId),
      getManagedAlbum(invitationId),
    ]);
    setInvitation(invitationData);
    setAlbum(albumData);
  };

  useEffect(() => {
    if (!invitationId) return;
    let cancelled = false;
    load()
      .catch((error) => {
        if (!cancelled) showSnackbar(readApiError(error, "No se pudo cargar el álbum."), "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [invitationId, showSnackbar]);

  const confirmDelete = async () => {
    if (!pending || !album) return;
    setDeleting(true);
    try {
      await deleteAlbumItem(invitationId, pending.id);
      setAlbum({
        ...album,
        items: album.items.filter((item) => item.id !== pending.id),
        totalItems: pending.isExpired ? album.totalItems : Math.max(0, album.totalItems - 1),
      });
      showSnackbar("Momento eliminado.", "success");
      setPending(null);
    } catch (error) {
      showSnackbar(readApiError(error, "No se pudo eliminar el momento."), "error");
    } finally {
      setDeleting(false);
    }
  };

  const publicUrl = album?.publicPath ? `${window.location.origin}${album.publicPath}` : "";

  return (
    <ResponsiveLayout>
      <Grid container spacing={2} padding={2}>
        <Grid size={12}>
          {loading ? (
            <Box sx={{ display: "grid", placeItems: "center", minHeight: 240 }}>
              <CircularProgress sx={{ color: "#a41423" }} />
            </Box>
          ) : (
            <FeaturePageFrame
              invitationName={invitation?.name}
              title="Álbum"
              subtitle="Revisa los momentos compartidos y elimina los que no deban quedarse."
              backTo={`/invitations/${invitationId}/features`}
              backLabel="Volver a funcionalidades"
              action={album?.featureEnabled && publicUrl ? (
                <Button sx={burgundyButtonSx} onClick={() => navigator.clipboard.writeText(publicUrl).then(() => showSnackbar("Enlace copiado.", "success"))}>
                  Copiar enlace
                </Button>
              ) : undefined}
            >
              {!album?.featureEnabled ? (
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55" }}>
                  El álbum está desactivado. Actívalo en Funcionalidades para consultarlo y administrarlo.
                </Typography>
              ) : !album.mediaKey ? (
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55" }}>
                  Esta invitación todavía no tiene una clave de medios. El álbum público usa la misma clave de la carpeta de Cloudinary.
                </Typography>
              ) : (
                <Box>
                  {publicUrl && album.mediaKey && (
                    <AlbumQrPanel albumUrl={publicUrl} slug={album.mediaKey} />
                  )}
                  <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#3a2a25", mb: 2 }}>
                    {momentLabel(album.totalItems)}
                    {album.expiresAt ? ` · Disponible hasta ${formatAlbumDate(album.expiresAt)}` : " · El plazo de un mes empieza con el primer momento."}
                  </Typography>
                  {album.items.length === 0 ? (
                    <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55" }}>
                      Todavía no hay momentos en este álbum.
                    </Typography>
                  ) : (
                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 1.5 }}>
                      {album.items.map((item) => (
                        <Box key={item.id} sx={{ borderRadius: "18px", overflow: "hidden", bgcolor: "#fff", border: "1px solid rgba(200,173,120,.28)" }}>
                          {item.resourceType === "video" ? (
                            <Box component="video" src={item.secureUrl} preload="none" controls playsInline sx={{ width: "100%", aspectRatio: "1", objectFit: "cover", bgcolor: "#111", display: "block" }} />
                          ) : (
                            <Box component="img" src={item.secureUrl} alt="" sx={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                          )}
                          <Box sx={{ p: 1.2, display: "flex", justifyContent: "space-between", gap: 1, alignItems: "center" }}>
                            <Box>
                              <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontSize: ".78rem", color: "#3a2a25" }}>
                                {formatAlbumDate(item.createdAt)}
                              </Typography>
                              <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontSize: ".75rem", color: "#7d5f55" }}>
                                {item.isExpired ? "Expirado" : `Hasta ${formatAlbumDate(item.expiresAt)}`}
                              </Typography>
                            </Box>
                            <IconButton aria-label="Eliminar momento" color="error" onClick={() => setPending(item)}>
                              <DeleteOutlineRoundedIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
            </FeaturePageFrame>
          )}
        </Grid>
      </Grid>
      <Dialog open={pending != null} onClose={deleting ? undefined : () => setPending(null)}>
        <DialogTitle sx={{ fontFamily: "Montserrat, sans-serif" }}>Eliminar momento</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55" }}>
            Se eliminará de Cloudinary y del álbum. Esta acción no se puede deshacer.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPending(null)} disabled={deleting} sx={{ textTransform: "none" }}>Cancelar</Button>
          <Button onClick={confirmDelete} disabled={deleting} color="error" sx={{ textTransform: "none" }}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </ResponsiveLayout>
  );
}

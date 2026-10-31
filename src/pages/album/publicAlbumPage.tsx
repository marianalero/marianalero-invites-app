import { useCallback, useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Fab, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seo from "../../components/Seo/Seo";
import AlbumHeader from "../../components/album/AlbumHeader";
import AlbumGallery from "../../components/album/AlbumGallery";
import AlbumLightbox from "../../components/album/AlbumLightbox";
import AlbumUploader, { type AlbumUploadEntry } from "../../components/album/AlbumUploader";
import { AlbumEmptyState, AlbumExpiredState, AlbumUnavailable } from "../../components/album/AlbumStates";
import { getAlbumIdentity, onAccent } from "../../components/album/albumVisualIdentity";
import { coupleNames, momentLabel } from "../../components/album/albumFormat";
import { getPublicAlbum, readApiError, uploadAlbumFile } from "../../services/albumApiClient";
import type { PublicAlbum } from "../../models/album";

const MAX_IMAGE_BYTES = 12 * 1024 * 1024;
const MAX_VIDEO_BYTES = 80 * 1024 * 1024;
const MAX_BATCH = 15;
const ACCEPT = "image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm,.jpg,.jpeg,.png,.webp,.mp4,.mov,.webm";

export default function PublicAlbumPage() {
  const { slug = "" } = useParams();
  const identity = getAlbumIdentity(slug);
  const inputRef = useRef<HTMLInputElement>(null);
  const headerButton = useRef<HTMLButtonElement | null>(null);
  const [album, setAlbum] = useState<PublicAlbum | null>(null);
  const [missing, setMissing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [entries, setEntries] = useState<AlbumUploadEntry[]>([]);
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showFab, setShowFab] = useState(false);

  const refresh = useCallback(async () => {
    const latest = await getPublicAlbum(slug).catch(() => null);
    if (latest) setAlbum(latest);
  }, [slug]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setMissing(false);
    getPublicAlbum(slug)
      .then((data) => {
        if (!cancelled) setAlbum(data);
      })
      .catch(() => {
        if (!cancelled) setMissing(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    const node = headerButton.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setShowFab(!entry.isIntersecting), { threshold: 0.6 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [album, loading]);

  const openPicker = () => inputRef.current?.click();

  const onFiles = (list: FileList | null) => {
    const selected = Array.from(list ?? []).slice(0, MAX_BATCH);
    if (!selected.length) return;
    const next = selected.map((file) => {
      const problem = validateFile(file);
      return {
        id: `${file.name}-${file.size}-${crypto.randomUUID()}`,
        file,
        previewUrl: URL.createObjectURL(file),
        status: problem ? "error" as const : "pending" as const,
        progress: 0,
        error: problem,
      };
    });
    setEntries((current) => [...current, ...next]);
    setFinished(false);
    setUploaderOpen(true);
    if (inputRef.current) inputRef.current.value = "";
  };

  const uploadOne = useCallback(async (entry: AlbumUploadEntry) => {
    setEntries((current) => current.map((item) => item.id === entry.id ? { ...item, status: "uploading", progress: 0, error: undefined } : item));
    try {
      const created = await uploadAlbumFile(slug, entry.file, (progress) => {
        setEntries((current) => current.map((item) => item.id === entry.id ? { ...item, progress } : item));
      });
      setEntries((current) => current.map((item) => item.id === entry.id ? { ...item, status: "done", progress: 100 } : item));
      setAlbum((current) => current ? {
        ...current,
        items: [created, ...current.items.filter((item) => item.id !== created.id)],
        totalItems: current.items.some((item) => item.id === created.id) ? current.totalItems : current.totalItems + 1,
      } : current);
    } catch (error) {
      const message = readApiError(error, "No se pudo subir el archivo.");
      setEntries((current) => current.map((item) => item.id === entry.id ? { ...item, status: "error", error: message } : item));
      if (axios.isAxiosError(error) && (error.response?.status === 409 || error.response?.status === 404)) {
        await refresh();
      }
    }
  }, [refresh, slug]);

  const startUpload = async () => {
    const queue = entries.filter((entry) => entry.status === "pending");
    if (!queue.length) return;
    setBusy(true);
    for (const entry of queue) {
      await uploadOne(entry);
    }
    setBusy(false);
    setFinished(true);
    await refresh();
  };

  const retry = async (id: string) => {
    const entry = entries.find((item) => item.id === id);
    if (!entry) return;
    setBusy(true);
    setFinished(false);
    await uploadOne({ ...entry, status: "pending", error: undefined });
    setBusy(false);
    setFinished(true);
    await refresh();
  };

  const closeUploader = () => {
    if (busy) return;
    entries.forEach((entry) => URL.revokeObjectURL(entry.previewUrl));
    setEntries([]);
    setFinished(false);
    setUploaderOpen(false);
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", bgcolor: identity.background }}>
        <CircularProgress sx={{ color: identity.accent }} />
      </Box>
    );
  }

  if (missing || !album) return <AlbumUnavailable identity={identity} />;

  const names = coupleNames(album.brideName, album.groomName);
  const canUpload = !album.isExpired;

  return (
    <Box className={identity.bodyClass} sx={{ minHeight: "100vh", bgcolor: identity.background, color: identity.text, overflowX: "hidden" }}>
      <Seo title={`Álbum · ${names}`} description="Comparte tus momentos con nosotros" image={album.headerImageUrl ?? undefined} />
      <AlbumHeader
        identity={identity}
        names={names}
        quote={album.quote}
        headerImageUrl={album.headerImageUrl}
        expiresAt={album.expiresAt}
        expired={album.isExpired}
        showUpload={canUpload}
        uploadRef={(node) => { headerButton.current = node; }}
        onUpload={openPicker}
      />
      {album.isExpired ? (
        <AlbumExpiredState identity={identity} />
      ) : album.items.length === 0 ? (
        <AlbumEmptyState identity={identity} onUpload={openPicker} />
      ) : (
        <>
          <Typography className={identity.bodyClass} sx={{ textAlign: "center", mb: 2, letterSpacing: "0.04em" }}>
            {momentLabel(album.totalItems)}
          </Typography>
          <AlbumGallery items={album.items} identity={identity} onOpen={setActiveIndex} />
        </>
      )}
      <AlbumLightbox items={album.items} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
      <AlbumUploader
        open={uploaderOpen}
        identity={identity}
        entries={entries}
        busy={busy}
        finished={finished}
        onClose={closeUploader}
        onStart={startUpload}
        onRetry={retry}
      />
      <input ref={inputRef} hidden multiple type="file" accept={ACCEPT} onChange={(event) => onFiles(event.target.files)} />
      {canUpload && (
        <Fab
          aria-label="Subir fotos y videos"
          onClick={openPicker}
          sx={{
            display: { xs: showFab ? "flex" : "none", md: "none" },
            position: "fixed",
            right: 20,
            bottom: 24,
            bgcolor: identity.accent,
            color: onAccent(identity.accent),
            "&:hover": { bgcolor: identity.accent },
          }}
        >
          <AddRoundedIcon />
        </Fab>
      )}
    </Box>
  );
}

function validateFile(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const video = ["mp4", "mov", "webm"].includes(extension);
  const image = ["jpg", "jpeg", "png", "webp"].includes(extension);
  if (!video && !image) return "Usa una foto JPG, PNG o WEBP, o un video MP4, MOV o WEBM.";
  if (file.size > (video ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES)) return video ? "El video supera 80 MB." : "La foto supera 12 MB.";
  return undefined;
}

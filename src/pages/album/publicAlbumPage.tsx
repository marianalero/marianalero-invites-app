import { useCallback, useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Fab, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seo from "../../components/Seo/Seo";
import AlbumHeader from "../../components/album/AlbumHeader";
import AlbumGallery from "../../components/album/AlbumGallery";
import AlbumLightbox from "../../components/album/AlbumLightbox";
import AlbumUploadNotice, { type AlbumUploadJob } from "../../components/album/AlbumUploadNotice";
import { AlbumEmptyState, AlbumExpiredState, AlbumUnavailable } from "../../components/album/AlbumStates";
import { getAlbumIdentity, onAccent } from "../../components/album/albumVisualIdentity";
import { albumTitle, momentLabel, oversizeLabel } from "../../components/album/albumFormat";
import { prepareAlbumImage } from "../../components/album/prepareAlbumImage";
import { getPublicAlbum, uploadAlbumFile } from "../../services/albumApiClient";
import type { PublicAlbum, PublicAlbumItem } from "../../models/album";

const MAX_IMAGE_BYTES = 12 * 1024 * 1024;
const MAX_VIDEO_BYTES = 80 * 1024 * 1024;
const UPLOAD_SLOTS = 2;
const ACCEPT = "image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm,.jpg,.jpeg,.png,.webp,.mp4,.mov,.webm";

export default function PublicAlbumPage() {
  const { slug = "" } = useParams();
  const identity = getAlbumIdentity(slug);
  const inputRef = useRef<HTMLInputElement>(null);
  const headerButton = useRef<HTMLButtonElement | null>(null);
  const jobsRef = useRef<AlbumUploadJob[]>([]);
  const drainingRef = useRef(false);
  const slugRef = useRef(slug);
  const [album, setAlbum] = useState<PublicAlbum | null>(null);
  const [missing, setMissing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [jobs, setJobs] = useState<AlbumUploadJob[]>([]);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    slugRef.current = slug;
  }, [slug]);

  const publishJobs = useCallback(() => {
    setJobs(jobsRef.current.map((job) => ({ ...job })));
  }, []);

  const syncAlbum = useCallback(async (keepLocal: boolean) => {
    const latest = await getPublicAlbum(slugRef.current).catch(() => null);
    if (!latest) return;
    setAlbum((current) => {
      if (!current || !keepLocal) return latest;
      const known = new Set(latest.items.map((item) => item.id));
      const localOnly = current.items.filter((item) => !known.has(item.id));
      return {
        ...latest,
        items: [...localOnly, ...latest.items],
        totalItems: latest.totalItems + localOnly.length,
      };
    });
  }, []);

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

  const addCreated = useCallback((created: PublicAlbumItem) => {
    setAlbum((current) => current ? {
      ...current,
      items: [created, ...current.items.filter((item) => item.id !== created.id)],
      totalItems: current.items.some((item) => item.id === created.id) ? current.totalItems : current.totalItems + 1,
    } : current);
  }, []);

  const drain = useCallback(async () => {
    if (drainingRef.current) return;
    drainingRef.current = true;

    const runSlot = async () => {
      for (;;) {
        const next = jobsRef.current.find((job) => job.status === "queued");
        if (!next) return;
        next.status = "uploading";
        next.progress = 0;
        next.notice = undefined;
        publishJobs();
        try {
          const file = isVideoFile(next.file) ? next.file : await prepareAlbumImage(next.file);
          const problem = sizeProblem(next.file.name, file);
          if (problem) {
            next.status = "oversized";
            next.notice = problem;
          } else {
            const created = await uploadAlbumFile(slugRef.current, file, (progress) => {
              if (next.status !== "uploading" || next.progress === progress) return;
              next.progress = progress;
              publishJobs();
            });
            next.status = "done";
            next.progress = 100;
            addCreated(created);
          }
        } catch (error) {
          next.status = "failed";
          next.notice = undefined;
          if (axios.isAxiosError(error) && (error.response?.status === 409 || error.response?.status === 404)) {
            await syncAlbum(false);
          }
        }
        publishJobs();
      }
    };

    try {
      await Promise.all(Array.from({ length: UPLOAD_SLOTS }, () => runSlot()));
    } finally {
      drainingRef.current = false;
      if (jobsRef.current.some((job) => job.status === "queued")) {
        void drain();
        return;
      }
      if (jobsRef.current.some((job) => job.status === "done")) {
        void syncAlbum(true);
      }
    }
  }, [addCreated, publishJobs, syncAlbum]);

  const enqueue = (list: FileList | null) => {
    const selected = Array.from(list ?? []);
    if (inputRef.current) inputRef.current.value = "";
    if (!selected.length) return;

    const running = jobsRef.current.some((job) => job.status === "queued" || job.status === "uploading");
    if (!running) jobsRef.current = [];

    const next = selected.flatMap((file) => {
      const problem = classifyFile(file);
      if (problem === "skip") return [];
      return [{
        id: crypto.randomUUID(),
        file,
        status: problem ? "oversized" as const : "queued" as const,
        progress: 0,
        notice: problem || undefined,
      }];
    });
    if (!next.length) return;
    jobsRef.current = [...jobsRef.current, ...next];
    publishJobs();
    void drain();
  };

  const dismissNotice = () => {
    if (jobsRef.current.some((job) => job.status === "queued" || job.status === "uploading")) return;
    jobsRef.current = [];
    setJobs([]);
  };

  const openPicker = () => inputRef.current?.click();

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", bgcolor: identity.background }}>
        <CircularProgress sx={{ color: identity.accent }} />
      </Box>
    );
  }

  if (missing || !album) return <AlbumUnavailable identity={identity} />;

  const names = albumTitle(album.name);
  const canUpload = !album.isExpired;
  const hasItems = album.items.length > 0;

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
        showUpload={canUpload && hasItems}
        uploadRef={(node) => { headerButton.current = node; }}
        onUpload={openPicker}
      />
      {album.isExpired ? (
        <AlbumExpiredState identity={identity} />
      ) : !hasItems ? (
        <AlbumEmptyState identity={identity} onBrowse={openPicker} onFiles={enqueue} />
      ) : (
        <>
          <Typography className={identity.bodyClass} sx={{ textAlign: "center", mb: 2, letterSpacing: "0.04em" }}>
            {momentLabel(album.totalItems)}
          </Typography>
          <AlbumGallery items={album.items} identity={identity} onOpen={setActiveIndex} />
        </>
      )}
      <AlbumLightbox items={album.items} index={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
      <AlbumUploadNotice jobs={jobs} aboveFab={showFab} onDismiss={dismissNotice} />
      <input
        ref={inputRef}
        multiple
        type="file"
        accept={ACCEPT}
        onChange={(event) => enqueue(event.target.files)}
        style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}
      />
      {canUpload && hasItems && (
        <Fab
          aria-label="Subir fotos y videos"
          onClick={openPicker}
          sx={{
            display: { xs: showFab ? "flex" : "none", md: "none" },
            position: "fixed",
            right: 20,
            bottom: "calc(24px + env(safe-area-inset-bottom, 0px))",
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

function classifyFile(file: File) {
  const video = isVideoFile(file);
  const image = isImageFile(file);
  if (!video && !image) return "skip" as const;
  if (video && file.size > MAX_VIDEO_BYTES) return oversizeLabel(file.name, "80 MB");
  return undefined;
}

function sizeProblem(originalName: string, file: File) {
  const video = isVideoFile(file);
  if (file.size > (video ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES)) {
    return oversizeLabel(originalName, video ? "80 MB" : "12 MB");
  }
  return undefined;
}

function extensionOf(file: File) {
  return file.name.split(".").pop()?.toLowerCase() ?? "";
}

function isVideoFile(file: File) {
  return ["mp4", "mov", "webm"].includes(extensionOf(file));
}

function isImageFile(file: File) {
  return ["jpg", "jpeg", "png", "webp"].includes(extensionOf(file));
}

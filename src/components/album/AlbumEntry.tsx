import { useEffect, useState } from "react";
import { getPublicAlbum } from "../../services/albumApiClient";
import AlbumSection from "./AlbumSection";
import type { AlbumSectionConfig } from "./albumSectionConfig";

interface Props {
  mediaKey: string;
  config?: AlbumSectionConfig;
}

export default function AlbumEntry({ mediaKey, config }: Props) {
  const [visible, setVisible] = useState(false);
  const albumUrl = `${window.location.origin}/invitacion/${mediaKey}/album`;

  useEffect(() => {
    let cancelled = false;
    getPublicAlbum(mediaKey)
      .then(() => {
        if (!cancelled) setVisible(true);
      })
      .catch(() => {
        if (!cancelled) setVisible(false);
      });
    return () => {
      cancelled = true;
    };
  }, [mediaKey]);

  if (!visible) return null;

  return <AlbumSection config={config} albumUrl={albumUrl} />;
}

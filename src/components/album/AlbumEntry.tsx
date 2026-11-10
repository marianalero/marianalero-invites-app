import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getPublicAlbum } from "../../services/albumApiClient";
import { getAlbumIdentity, onAccent } from "./albumVisualIdentity";

interface Props {
  mediaKey: string;
}

export default function AlbumEntry({ mediaKey }: Props) {
  const [visible, setVisible] = useState(false);
  const identity = getAlbumIdentity(mediaKey);

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

  return (
    <Box component="section" sx={{ textAlign: "center", px: 2, py: 4 }}>
      <Button
        component={RouterLink}
        to={`/invitacion/${mediaKey}/album`}
        variant="outlined"
        className={identity.bodyClass}
        sx={{
          minHeight: 48,
          px: 3,
          borderRadius: "999px",
          textTransform: "none",
          borderColor: identity.accent,
          color: identity.text,
          "&:hover": { borderColor: identity.accent, bgcolor: `${identity.accent}14` },
        }}
      >
        <Box component="span" sx={{ color: onAccent(identity.background) === "#FFFFFF" ? identity.text : identity.accent }}>
          Ver álbum
        </Box>
      </Button>
    </Box>
  );
}

import { Box, Button, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const panelCardSx = {
  borderRadius: "30px",
  bgcolor: "rgba(255,255,255,.72)",
  border: "1px solid rgba(200,173,120,.28)",
  boxShadow: "0 20px 50px rgba(75,45,35,.08)",
};

export const panelTitleSx = {
  fontFamily: "'DM Serif Display', serif",
  color: "#a41423",
  fontSize: { xs: "1.7rem", md: "2rem" },
  lineHeight: 1.1,
};

export const panelSubtitleSx = {
  fontFamily: "Montserrat, sans-serif",
  color: "#7d5f55",
  fontSize: ".92rem",
};

export const burgundyButtonSx = {
  borderRadius: "999px",
  px: 3,
  bgcolor: "#a41423",
  color: "#fff",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 12px 26px rgba(164,20,35,.18)",
  "&:hover": { bgcolor: "#7f0f1b" },
};

interface FeaturePageFrameProps {
  invitationName?: string;
  title: string;
  subtitle: string;
  backTo: string;
  backLabel: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function FeaturePageFrame({
  invitationName,
  title,
  subtitle,
  backTo,
  backLabel,
  action,
  children,
}: FeaturePageFrameProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ ...panelCardSx, p: { xs: 2, md: 3 } }}>
      <Button
        startIcon={<ArrowBackRoundedIcon />}
        onClick={() => navigate(backTo)}
        sx={{
          mb: 2,
          color: "#7d5f55",
          fontFamily: "Montserrat, sans-serif",
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        {backLabel}
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          alignItems: { xs: "stretch", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          mb: 3,
        }}
      >
        <Box>
          {invitationName && (
            <Typography sx={{ ...panelSubtitleSx, mb: 0.5 }}>{invitationName}</Typography>
          )}
          <Typography sx={panelTitleSx}>{title}</Typography>
          <Typography sx={{ ...panelSubtitleSx, mt: 0.75 }}>{subtitle}</Typography>
        </Box>
        {action}
      </Box>
      {children}
    </Box>
  );
}

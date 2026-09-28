import { ReactNode } from "react";
import { Box, Button, Chip, Switch, Typography } from "@mui/material";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  detail?: string;
  actionLabel?: string;
  onConfigure?: () => void;
  configureDisabled?: boolean;
  showSwitch?: boolean;
  switchChecked?: boolean;
  switchDisabled?: boolean;
  onSwitch?: (checked: boolean) => void;
  comingSoon?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  detail,
  actionLabel,
  onConfigure,
  configureDisabled,
  showSwitch,
  switchChecked,
  switchDisabled,
  onSwitch,
  comingSoon,
}: FeatureCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        p: 2.5,
        borderRadius: "24px",
        bgcolor: "#fff",
        border: "1px solid rgba(200,173,120,.28)",
        boxShadow: "0 10px 30px rgba(75,45,35,.05)",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", width: "100%" }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "14px",
            bgcolor: "#f8f4ec",
            color: "#a41423",
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#3a2a25" }}>
            {title}
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55", fontSize: ".9rem", mt: 0.4 }}>
            {description}
          </Typography>
          {detail && (
            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#3a2a25", fontSize: ".86rem", mt: 1 }}>
              {detail}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
        {showSwitch && (
          <Switch
            checked={switchChecked}
            disabled={switchDisabled}
            onChange={(_, checked) => onSwitch?.(checked)}
            color="primary"
          />
        )}
        {comingSoon && (
          <Chip
            label="Próximamente"
            size="small"
            sx={{
              bgcolor: "#f2eadd",
              color: "#7d5f55",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
            }}
          />
        )}
        {actionLabel && (
          <Button
            variant="outlined"
            disabled={configureDisabled}
            onClick={onConfigure}
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              borderColor: "rgba(164,20,35,.35)",
              color: "#a41423",
              whiteSpace: "nowrap",
            }}
          >
            {actionLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
}

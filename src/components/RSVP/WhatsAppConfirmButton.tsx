import { Box, Button } from "@mui/material";
import { buildWhatsAppUrl } from "../../models/confirmation";
import { RSVPType } from "./RSVPType";
import { InvitationFeatures } from "../../models/invitationFeatures";

interface WhatsAppConfirmButtonProps {
  features: InvitationFeatures;
  rsvp: RSVPType;
}

export default function WhatsAppConfirmButton({ features, rsvp }: WhatsAppConfirmButtonProps) {
  const href = buildWhatsAppUrl(features.whatsAppCountryCode, features.whatsAppPhone);
  const label = features.whatsAppButtonLabel || "Confirmar asistencia por WhatsApp";
  if (!href) return null;

  return (
    <Box display="flex" justifyContent="center" py={4} sx={{ bgcolor: rsvp.bgImage ? "transparent" : rsvp.bgColor }}>
      <Button
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={rsvp.classButtonName}
        sx={{
          minWidth: 220,
          borderRadius: 8,
          color: "#fff",
          background: rsvp.colorButton,
          fontWeight: 500,
          textTransform: "none",
          px: 3,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          "&:hover": { background: rsvp.color, color: "#fff" },
        }}
      >
        {label}
      </Button>
    </Box>
  );
}

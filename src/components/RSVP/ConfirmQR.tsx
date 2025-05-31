
import { Box, Button, Typography } from "@mui/material";
import { Guest } from "../../models/guest"
import { QRCodeCanvas } from 'qrcode.react';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useRef, useState } from "react";
type ConfirmQRProps = {
  guest: Guest;
};

const ConfirmQR  = ({ guest }: ConfirmQRProps) => {
      const qrRef = useRef<HTMLCanvasElement>(null);
    const qrValue = guest.qrCodeToken || `Invitado-${guest.id}`;
    const [copied, setCopied] = useState(false);
    const qrLink = `http://localhost:5173/qr/${guest.qrCodeToken}`;
 const handleDownload = () => {
    const canvas = qrRef.current;
    if (!canvas) return;

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `QR-${guest.fullName}.png`;
    link.href = url;
    link.click();
  };
  return (
     <Box textAlign="center" p={4}>
      <Typography variant="h4" gutterBottom>
        ¡Gracias por confirmar tu asistencia, {guest.fullName}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este es tu código QR para presentar el día del evento:
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <QRCodeCanvas
          value={qrValue}
          size={256}
          ref={qrRef}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Descargar QR
      </Button>
       <Button
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            onClick={() => {
            navigator.clipboard.writeText(qrLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            }}
        >
            {copied ? "¡Copiado!" : "Copiar enlace"}
        </Button>
    </Box>
  );

}
export default ConfirmQR
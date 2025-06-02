
import { Box, Typography } from "@mui/material";
import { Guest } from "../../models/guest"
import { QRCodeCanvas } from 'qrcode.react';

import { useRef } from "react";
type ConfirmQRProps = {
  guest: Guest;
  mainTypo?:string;
  bodyTypo?:string;
  colorPrimary?:string;
  bgColor?:string;
};

const ConfirmQR  = ({ guest,mainTypo,bodyTypo,colorPrimary }: ConfirmQRProps) => {
      const qrRef = useRef<HTMLCanvasElement>(null);
    const qrValue = guest.qrCodeToken || `Invitado-${guest.id}`;
 
//  const handleDownload = () => {
//     const canvas = qrRef.current;
//     if (!canvas) return;

//     const url = canvas.toDataURL('image/png');
//     const link = document.createElement('a');
//     link.download = `QR-${guest.fullName}.png`;
//     link.href = url;
//     link.click();
//   };
  return (
     <Box textAlign="center" p={4}>
      <Typography variant="h4" gutterBottom className={mainTypo} sx={{color:colorPrimary}}>
        ¡Gracias por confirmar tu asistencia, {guest.fullName}!
      </Typography>
      <Typography variant="body1" gutterBottom className={bodyTypo}>
        Este es tu código QR para presentar el día del evento:
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <QRCodeCanvas
          value={qrValue}
          size={256}
          ref={qrRef}
        />
      </Box>
      {/* <Button variant="contained" color="primary" onClick={handleDownload}>
        Descargar QR
      </Button> */}
     
    </Box>
  );

}
export default ConfirmQR
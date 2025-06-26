
import { Dialog, DialogTitle, DialogContent, DialogActions,Button, Typography, useTheme, useMediaQuery, Box, IconButton } from "@mui/material"
import { useState } from "react";
import { uploadGuestExcel } from "../../../services/guestApiClient";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
}

const UploadGuestsDialog =({ open, onClose, onCreated, }: Props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [uploadResult, setUploadResult] = useState<string | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectedFile(e.target.files[0]);
      setUploadResult(null);
    }
    };

    const handleUpload = async () => {
    if (!selectedFile) return;

    try {
        setLoading(true);
        const result = await uploadGuestExcel(selectedFile);
        setUploadResult(`✔️ ${result.message} (${result.total} registros agregados)`);
    } catch (error) {
        setUploadResult('❌ Error al subir el archivo.');
    } finally {
        setLoading(false);
    }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
          Cargar Invitados desde Excel
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Button
            variant="contained"
            component="label"
            fullWidth
            startIcon={<CloudUploadIcon />}
            sx={{
              backgroundColor: '#a41423',
              '&:hover': { backgroundColor: '#b3151d' },
              textTransform: 'none',
              fontSize: isMobile ? 14 : 16,
            }}
          >
            {selectedFile ? 'Cambiar Archivo' : 'Selecciona un Archivo'}
            <input hidden type="file" accept=".xlsx" onChange={handleFileChange} />
          </Button>

          {selectedFile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              bgcolor="#f4ebd7"
              px={2}
              py={1}
              borderRadius={1}
              border="1px solid #ccc"
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '85%',
                }}
              >
                {selectedFile.name}
              </Typography>
              <IconButton onClick={() => setSelectedFile(null)} size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          )}

          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
            fontSize={isMobile ? 11 : 13}
          >
            Asegúrate que el archivo tenga columnas: <strong>Nombre</strong> y <strong>Número de invitados</strong>
          </Typography>
        </Box>
      </DialogContent>
         {uploadResult ? (
           <Button onClick={() => onCreated()}>Cerrar</Button>
        ): (
        <DialogActions>
          <Button onClick={() => onClose()}>Cancelar</Button>
          <Button loading={loading} variant="contained" onClick={handleUpload}>Subir</Button>
        </DialogActions>
        )}
       
        </Dialog>
    )
}

export default UploadGuestsDialog;
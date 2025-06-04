// src/components/invitations/CreateInvitationModal.tsx
import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { CreateInvitationParameters } from '../../../models/parameters/createInvitationParameters';
import { User } from '../../../models/user';
import { getUsers } from '../../../services/userService';
import { createInvitation } from '../../../services/invitationApiClient';

interface CreateInvitationModalProps {
  open: boolean;
  onClose: () => void;
  handleCreate: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CreateInvitationModal: React.FC<CreateInvitationModalProps> = ({ open, onClose, handleCreate }) => {
  const [formData, setFormData] = useState<CreateInvitationParameters>({
    eventDate: new Date(),
    deadlineDate: new Date(),
    userId: 0,
    groomName: '',
    brideName: '',
    quote: '',
    expirationDate: undefined,
    qrActive: false,
  });

  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error('Error al cargar usuarios', err);
      }
    };
    loadUsers();
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.brideName) newErrors.brideName = 'Requerido';
    if (!formData.groomName) newErrors.groomName = 'Requerido';
    if (!formData.deadlineDate) newErrors.deadlineDate = 'Requerido';
    if (!formData.eventDate) newErrors.eventDate = 'Requerido';
    if (!formData.userId) newErrors.userId = 'Seleccione un usuario';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof CreateInvitationParameters, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (validate()) {
    await createInvitation(formData)
      handleCreate();
    }
  };

  const handleClose = () => {
    setFormData({
      eventDate: new Date(),
      deadlineDate: new Date(),
      userId: 0,
      groomName: '',
      brideName: '',
      quote: '',
      expirationDate: undefined,
      qrActive: false,
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>Crear Invitación</Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>Usuario</InputLabel>
          <Select
            value={formData.userId}
            label="Usuario"
            onChange={(e) => handleChange('userId', parseInt(e.target.value.toString()))}
            error={!!errors.userId}
          >
            {users.map(user => (
              <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Nombre del Novio"
          value={formData.groomName}
          onChange={(e) => handleChange('groomName', e.target.value)}
          margin="normal"
          error={!!errors.groomName}
          helperText={errors.groomName}
        />

        <TextField
          fullWidth
          label="Nombre de la Novia"
          value={formData.brideName}
          onChange={(e) => handleChange('brideName', e.target.value)}
          margin="normal"
          error={!!errors.brideName}
          helperText={errors.brideName}
        />

        <DatePicker
          label="Fecha del Evento"
          value={dayjs(formData.eventDate)}
          onChange={(date) => handleChange('eventDate', date?.toDate() ?? new Date())}
        />

        <DatePicker
          label="Fecha límite"
          value={dayjs(formData.eventDate)}
          onChange={(date) => handleChange('deadlineDate', date?.toDate() ?? new Date())}
        />

        <DatePicker
          label="Fecha de expiración"
          value={formData.expirationDate ? dayjs(formData.expirationDate) : null}
          onChange={(date) => handleChange('expirationDate', date?.toDate())}
        />

        <TextField
          fullWidth
          label="Frase (opcional)"
          value={formData.quote ?? ''}
          onChange={(e) => handleChange('quote', e.target.value)}
          margin="normal"
        />

        <FormControlLabel
          control={
            <Switch
              checked={formData.qrActive ?? false}
              onChange={(e) => handleChange('qrActive', e.target.checked)}
            />
          }
          label="QR Activo"
        />

        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">Crear</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateInvitationModal;

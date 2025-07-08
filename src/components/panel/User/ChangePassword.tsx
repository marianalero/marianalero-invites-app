import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { changePassword } from '../../../services/userService';
import { DialogProps } from '../../../models/component/dialogProps';
import PasswordInput from '../../PasswordInput/PasswordInput';

const ChangePasswordForm: React.FC<DialogProps> = ({ open, onClose, onSave}: DialogProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      return setError('La nueva contraseña debe tener al menos 6 caracteres.');
    }

    if (newPassword !== confirmPassword) {
      return setError('Las contraseñas no coinciden.');
    }

    setError('');
    await changePassword(currentPassword,newPassword);
    onSave()
  };

  return (
    <Dialog open={open} onClose={() => onClose()}>
        <DialogTitle>Cambiar contraseña</DialogTitle>
        <DialogContent>
        <PasswordInput value={currentPassword} onChange={(v) => setCurrentPassword(v)}  label="Contraseña Actual"/>
        <PasswordInput value={newPassword} onChange={(v) => setNewPassword(v)}  label="Nueva contraseña"/>
        <PasswordInput value={confirmPassword} onChange={(v) => setConfirmPassword(v)} label="Confirmar nueva contraseña"/>
      {error && (
        <Typography color="error" mt={1} mb={2}>
          {error}
        </Typography>
      )}

     </DialogContent>
            <DialogActions>
              <Button onClick={() => onClose()}>Cancelar</Button>
              <Button variant="contained" onClick={handleSubmit}> Guardar nueva contraseña</Button>
            </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordForm;
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions,Button } from "@mui/material"
import { User } from "../../../models/user";
import { CreateUser } from "../../../services/userService";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onUserCreated: () => void;
  id?:number;
}

const CreateUserDialog =({ open, onClose, onUserCreated }: Props) => {
  const emptyUser: User = {
  id: 0,
  name: '',
  email: '',
  role: 'cliente',
  };
  const [newUser, setNewUser] = useState<User>(emptyUser);
  const [newPassword, setNewPassword] = useState('');


    const handleCreateSave = async () => {
        if (newUser && newPassword) {
            await CreateUser( {
                name: newUser.name,
                email: newUser.email,
                password: newPassword,
            });
        onUserCreated();
        }
    };

  const updateData = (newData: Partial<User>) => {
    setNewUser((prevData) => ({ ...prevData, ...newData }));
  };
    return (
      <Dialog open={open} onClose={() => onClose()}>
        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Nombre"
            margin="dense"
            value={newUser?.name}
            onChange={(e) => updateData({name: e.target.value})}
          />
          <TextField
            fullWidth
            label="Email"
            margin="dense"
            value={newUser?.email}
            onChange={(e) => updateData({ email: e.target.value })}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="dense"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancelar</Button>
          <Button variant="contained" onClick={handleCreateSave}>Crear</Button>
        </DialogActions>
      </Dialog>
    )

}
export default CreateUserDialog;


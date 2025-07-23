import { Dialog, DialogTitle, DialogContent, TextField, DialogActions,Button } from "@mui/material"
import { User } from "../../../../models/user";
import { CreateUser, getUserById, UpdateUser } from "../../../../services/userService";
import { useEffect, useState } from "react";
import PasswordInput from "../../../PasswordInput/PasswordInput";

interface Props {
  open: boolean;
  onClose: () => void;
  onUserCreated: () => void;
  id?:number | null;
}

const CreateUserDialog =({ open, onClose, onUserCreated,id }: Props) => {
  const emptyUser: User = {
  id: 0,
  name: '',
  email: '',
  role: 'cliente',
  };
  const [userModel, setUserModel] = useState<User>(emptyUser);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {

     if(id){
      fetchUserById()
     }
  }, []);

  const fetchUserById = async () =>  {
  
      const res = await getUserById(id ?? 0);
      setUserModel(
        {
          id: res.id,
          name: res.name,
          email: res.email,
          role: res.role,
          }
      )
    };

    const handleCreateSave = async () => {
     
        if (!id) {

            await CreateUser( {
                name: userModel.name,
                email: userModel.email,
                password: newPassword,
            });
            onUserCreated();
        }else{
          await UpdateUser( {
                name: userModel.name,
                email: userModel.email,
                id:userModel.id,
                password: newPassword,
            });
          onUserCreated();
          setUserModel(emptyUser);
        }
    };

  const updateData = (newData: Partial<User>) => {
    setUserModel((prevData) => ({ ...prevData, ...newData }));
  };
    return (
      <Dialog open={open} onClose={() => {onClose()}}>
        <DialogTitle>{id ? "Editar": "Crear"} Usuario</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Nombre"
            margin="dense"
            value={userModel?.name}
            onChange={(e) => updateData({name: e.target.value})}
          />
          <TextField
            fullWidth
            label="Email"
            margin="dense"
            value={userModel?.email}
            onChange={(e) => updateData({ email: e.target.value })}
          />
          <PasswordInput value={newPassword}  onChange={(value) => setNewPassword(value)}  label={ id ? "Cambiar contraseña" : "Contraseña"}/>

         
        </DialogContent>
        <DialogActions>
          <Button onClick={() =>{onClose();}}>Cancelar</Button>
          <Button variant="contained" onClick={handleCreateSave}>{id ? "Editar": "Crear"}</Button>
        </DialogActions>
      </Dialog>
    )

}
export default CreateUserDialog;


import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { User } from "../../../../models/user";
import {
  CreateUser,
  getUserById,
  UpdateUser,
} from "../../../../services/userService";
import { useEffect, useState } from "react";
import PasswordInput from "../../../PasswordInput/PasswordInput";

interface Props {
  open: boolean;
  onClose: () => void;
  onUserCreated: () => void;
  id?: number | null;
}

const emptyUser: User = {
  id: 0,
  name: "",
  email: "",
  role: "cliente",
};

const CreateUserDialog = ({ open, onClose, onUserCreated, id }: Props) => {
  const [userModel, setUserModel] = useState<User>(emptyUser);
  const [newPassword, setNewPassword] = useState("");
  const isEdit = Boolean(id);

  useEffect(() => {
    if (id && open) {
      fetchUserById();
    }

    if (!id && open) {
      setUserModel(emptyUser);
      setNewPassword("");
    }
  }, [id, open]);

  const fetchUserById = async () => {
    const res = await getUserById(id ?? 0);

    setUserModel({
      id: res.id,
      name: res.name,
      email: res.email,
      role: res.role,
    });
  };

  const handleCreateSave = async () => {
    if (!id) {
      await CreateUser({
        name: userModel.name,
        email: userModel.email,
        password: newPassword,
      });

      onUserCreated();
      return;
    }

    await UpdateUser({
      name: userModel.name,
      email: userModel.email,
      id: userModel.id,
      password: newPassword,
    });

    onUserCreated();
    setUserModel(emptyUser);
    setNewPassword("");
  };

  const updateData = (newData: Partial<User>) => {
    setUserModel((prevData) => ({ ...prevData, ...newData }));
  };

  const handleClose = () => {
    setUserModel(emptyUser);
    setNewPassword("");
    onClose();
  };

  return (
    <Dialog
  open={open}
  onClose={(_, reason) => {
    if (reason === "backdropClick") return;
    if (reason === "escapeKeyDown") return;
  }}
  disableEscapeKeyDown
  fullWidth
  maxWidth="sm"
  PaperProps={{
    sx: {
      borderRadius: "34px",
      bgcolor: "#f8f4ec",
      background:
        "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 100%)",
      border: "1px solid rgba(200,173,120,.35)",
      boxShadow: "0 30px 80px rgba(75,45,35,.18)",
      overflow: "hidden",
      maxHeight: "90vh",
    },
  }}
>
      <DialogTitle
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            px: { xs: 3, md: 4 },
            pt: { xs: 3, md: 4 },
            pb: 3,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#a41423",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 26px rgba(164,20,35,.18)",
                flexShrink: 0,
              }}
            >
              {isEdit ? <EditRoundedIcon /> : <PersonAddAltRoundedIcon />}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#a41423",
                  fontSize: { xs: "2rem", md: "2.4rem" },
                  lineHeight: 1,
                }}
              >
                {isEdit ? "Editar usuario" : "Nuevo usuario"}
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  fontFamily: "Montserrat, sans-serif",
                  color: "#7d5f55",
                  fontSize: ".92rem",
                  lineHeight: 1.6,
                }}
              >
                {isEdit
                  ? "Actualiza la información y acceso de este usuario."
                  : "Crea un nuevo acceso para administrar invitaciones."}
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={handleClose}
            sx={{
              color: "#a41423",
              bgcolor: "rgba(255,255,255,.45)",
              border: "1px solid rgba(200,173,120,.35)",
              "&:hover": {
                bgcolor: "rgba(164,20,35,.06)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider sx={{ borderColor: "rgba(200,173,120,.35)" }} />

      <DialogContent
        sx={{
          px: { xs: 3, md: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
          }}
        >
          <TextField
            fullWidth
            label="Nombre"
            value={userModel?.name}
            onChange={(e) => updateData({ name: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "18px",
                bgcolor: "#fff",
              },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            value={userModel?.email}
            onChange={(e) => updateData({ email: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "18px",
                bgcolor: "#fff",
              },
            }}
          />

          <PasswordInput
            value={newPassword}
            onChange={(value) => setNewPassword(value)}
            label={isEdit ? "Cambiar contraseña" : "Contraseña"}
          />

          {isEdit && (
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                fontSize: ".82rem",
                lineHeight: 1.6,
              }}
            >
              Deja la contraseña vacía si no deseas modificarla.
            </Typography>
          )}
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          px: { xs: 3, md: 4 },
          pb: { xs: 3, md: 4 },
          pt: 0,
          gap: 1.5,
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Button
          onClick={handleClose}
          fullWidth
          sx={{
            borderRadius: "999px",
            py: 1.2,
            color: "#a41423",
            border: "1px solid rgba(164,20,35,.35)",
            bgcolor: "rgba(255,255,255,.42)",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "rgba(164,20,35,.06)",
            },
          }}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={handleCreateSave}
          fullWidth
          sx={{
            borderRadius: "999px",
            py: 1.2,
            bgcolor: "#a41423",
            color: "#fff",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "0 12px 26px rgba(164,20,35,.18)",
            "&:hover": {
              bgcolor: "#7f0f1b",
              transform: "translateY(-1px)",
            },
          }}
        >
          {isEdit ? "Guardar cambios" : "Crear usuario"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateUserDialog;
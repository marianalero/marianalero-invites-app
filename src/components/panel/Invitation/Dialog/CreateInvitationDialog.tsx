import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  IconButton,
  Divider,
  Autocomplete,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddLinkRoundedIcon from "@mui/icons-material/AddLinkRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { CreateInvitationParameters } from "../../../../models/parameters/createInvitationParameters";
import { User } from "../../../../models/user";
import {
  createInvitation,
  getInvitationById,
  updateInvitation,
} from "../../../../services/invitationApiClient";
import { getUsers } from "../../../../services/userService";
import { InvitationFormData } from "../../../../models/invitationFormData";
import Grid from "@mui/material/Grid2";
interface CreateInvitationModalProps {
  open: boolean;
  onClose: () => void;
  handleCreate: () => void;
  id?: number;
}

const emptyFormData: InvitationFormData = {
  eventDate: new Date(),
  deadlineDate: new Date(),
  userId: 0,
  groomName: "",
  brideName: "",
  quote: "",
  expirationDate: undefined,
  qrActive: false,
  statusId: 1,
  link: undefined,
  name: "",
};

const CreateInvitationModal: React.FC<CreateInvitationModalProps> = ({
  open,
  onClose,
  handleCreate,
  id = 0,
}) => {
  const [formData, setFormData] = useState<InvitationFormData>(emptyFormData);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isEdit = id > 0;

  useEffect(() => {
    const loadInvitation = async () => {
      if (isEdit && open) {
        try {
          const data = await getInvitationById(id);

          setFormData({
            eventDate: new Date(data.eventDate),
            deadlineDate: new Date(data.deadlineDate),
            userId: data.userId,
            groomName: data.groomName,
            brideName: data.brideName,
            quote: data.quote ?? "",
            expirationDate: data.expirationDate
              ? new Date(data.expirationDate)
              : undefined,
            qrActive: data.qrActive ?? false,
            statusId: data.statusId ?? 1,
            link: data.link ?? undefined,
            name: data.name,
          });
        } catch (err) {
          console.error("Error al cargar la invitación", err);
        }
      }

      if (!isEdit && open) {
        setFormData(emptyFormData);
        setSelectedUser(null);
        setErrors({});
      }
    };

    loadInvitation();
  }, [id, isEdit, open]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error al cargar usuarios", err);
      }
    };

    if (open) {
      loadUsers();
    }
  }, [open]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Requerido";
    if (!formData.deadlineDate) newErrors.deadlineDate = "Requerido";
    if (!formData.eventDate) newErrors.eventDate = "Requerido";

    if (!isEdit && !formData.userId) {
      newErrors.userId = "Seleccione un usuario";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    field: keyof CreateInvitationParameters,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      if (isEdit) {
        await updateInvitation({
          eventDate: formData.eventDate,
          deadlineDate: formData.deadlineDate,
          expirationDate: formData.expirationDate,
          groomName: formData.groomName,
          brideName: formData.brideName,
          link: formData.link,
          id,
          name: formData.name,
        });
      } else {
        await createInvitation({
          eventDate: formData.eventDate,
          deadlineDate: formData.deadlineDate,
          expirationDate: formData.expirationDate,
          groomName: formData.groomName,
          brideName: formData.brideName,
          link: formData.link,
          userId: formData.userId,
          statusId: 1,
          name: formData.name,
        });
      }

      handleCreate();
    } catch (err) {
      console.error("Error al guardar la invitación", err);
    }
  };

  const handleClose = () => {
    setFormData(emptyFormData);
    setSelectedUser(null);
    setErrors({});
    onClose();
  };

  return (
    <Dialog
  open={open}
  onClose={(_, reason) => {
    if (reason === "backdropClick") return;
  }}
  disableEscapeKeyDown
  fullWidth
  maxWidth="sm"
  PaperProps={{
    sx: {
      borderRadius: "34px",
      bgcolor: "#f8f4ec",
      background: "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 100%)",
      border: "1px solid rgba(200,173,120,.35)",
      boxShadow: "0 30px 80px rgba(75,45,35,.18)",
      overflow: "hidden",
      maxHeight: "90vh",
    },
  }}
>
      <DialogTitle sx={{ p: 0 }}>
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
              {isEdit ? <EditRoundedIcon /> : <AddLinkRoundedIcon />}
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
                {isEdit ? "Editar invitación" : "Nueva invitación"}
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
                  ? "Actualiza los datos principales de esta invitación."
                  : "Crea una nueva invitación y asígnala a un usuario."}
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
      overflowY: "auto",
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: ".78rem",
          fontWeight: 700,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "#bdaa8c",
        }}
      >
        Información general
      </Typography>

      {!isEdit && (
        <Autocomplete
          options={[...users].sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedUser}
          clearOnEscape
          autoHighlight
          openOnFocus
          selectOnFocus
          blurOnSelect
          getOptionLabel={(option) =>
            `${option.name} ${option.email ? `- ${option.email}` : ""}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_, value) => {
            setSelectedUser(value);
            handleChange("userId", value?.id ?? 0);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Usuario"
              placeholder="Buscar usuario"
              error={!!errors.userId}
              helperText={errors.userId}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "18px",
                  bgcolor: "#fff",
                },
              }}
            />
          )}
        />
      )}

      <TextField
        fullWidth
        label="Nombre de la invitación"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "18px",
            bgcolor: "#fff",
          },
        }}
      />

      <Typography
        sx={{
          mt: 2,
          fontFamily: "Montserrat, sans-serif",
          fontSize: ".78rem",
          fontWeight: 700,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "#bdaa8c",
        }}
      >
        Configuración
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <DatePicker
            label="Fecha del evento"
            value={dayjs(formData.eventDate)}
            onChange={(date) =>
              handleChange("eventDate", date?.toDate() ?? new Date())
            }
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!errors.eventDate,
                helperText: errors.eventDate,
                sx: {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    bgcolor: "#fff",
                  },
                },
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DatePicker
            label="Fecha límite"
            value={dayjs(formData.deadlineDate)}
            onChange={(date) =>
              handleChange("deadlineDate", date?.toDate() ?? new Date())
            }
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!errors.deadlineDate,
                helperText: errors.deadlineDate,
                sx: {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    bgcolor: "#fff",
                  },
                },
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <DatePicker
            label="Fecha de expiración"
            value={
              formData.expirationDate ? dayjs(formData.expirationDate) : null
            }
            onChange={(date) => handleChange("expirationDate", date?.toDate())}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    bgcolor: "#fff",
                  },
                },
              },
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 0.5,
          p: 2,
          borderRadius: "24px",
          bgcolor: "rgba(255,255,255,.42)",
          border: "1px solid rgba(200,173,120,.35)",
        }}
      >
        <TextField
          fullWidth
          label="Link"
          placeholder="https://marianalero-invites.com/..."
          value={formData.link ?? ""}
          onChange={(e) => handleChange("link", e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "18px",
              bgcolor: "#fff",
            },
          }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={formData.qrActive ?? false}
              onChange={(e) => handleChange("qrActive", e.target.checked)}
            />
          }
          label="QR activo"
          sx={{
            m: 0,
            color: "#7d5f55",
            fontFamily: "Montserrat, sans-serif",
          }}
        />
      </Box>
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
          }}
        >
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
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
          {isEdit ? "Guardar cambios" : "Crear invitación"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateInvitationModal;
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { RSVPType } from "./RSVPType";
import { CreateGuestParameters } from "../../models/parameters/createGuestParameters";
import { CreateAndConfirm } from "../../services/guestApiClient";
import CustomButton from "../CustomButton/CustomButton";
import Grid from '@mui/material/Grid2';

const RSVPSimple = (props:RSVPType) => {
  const numberOfGuests = 6;

  const [name, setName] = useState("");
  const [totalConfirmed, setTotalConfirmed] = useState(1);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [errorName, setErrorName] = useState(false);

  const resetForm = () => {
    setName("");
    setTotalConfirmed(1);
    setErrorName(false);
  };

  const handleSend = async () => {
    if (name.trim() === "") {
      setErrorName(true);
    } else {
      setErrorName(false);
      const createParam: CreateGuestParameters = {
        fullName: name,
        rsvpStatus: 2,
        totalConfirmed,
        totalAssigned: totalConfirmed,
        invitationId: props.invitationId,
      };

      const response = await CreateAndConfirm(createParam);
      if (response) {
        resetForm();
        setOpenConfirm(true);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenConfirm(false);
    resetForm(); // 👈 limpia todo al cerrar el modal
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch", } , backgroundColor:props.bgColor, borderRadius:"8px"}}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} padding={4}>
          <Grid  size={{xs:12,sm:12,md:12,lg:12}} textAlign="center">
            <Fade direction="up" triggerOnce>
              <Typography
                className={props.bodyTypo}
                sx={{ fontSize: "1.25rem", color: props.textColor }}
              >
                Por favor ayúdanos confirmando tu asistencia.
              </Typography>
            </Fade>
          </Grid>

          {/* Nombre */}
          <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" justifyContent="center">
            <TextField
              error={errorName}
              helperText={errorName ? "El nombre es requerido" : ""}
              required
              id="name"
              label="Nombre"
              sx={{
                minWidth: 300,
                "& label.Mui-focused": { color: props.colorButton },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: props.colorButton },
                },
                "& .MuiInputLabel-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "0 4px",
                  borderRadius: "4px",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          {/* Número de asistentes */}
          <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" justifyContent="center">
            <FormControl>
              <InputLabel
                sx={{
                  color: "#757575",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "0 4px",
                  borderRadius: "4px",
                }}
                id="guests-label"
              >
                Número de asistentes
              </InputLabel>
              <Select<number>
                labelId="guests-label"
                id="guests"
                value={totalConfirmed}
                onChange={(e) => setTotalConfirmed(Number(e.target.value))}
                sx={{
                  minWidth: 300,
                  color: props.colorButton,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: props.colorButton,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: props.colorButton,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: props.colorButton,
                  },
                  "& .MuiSvgIcon-root": {
                    color: props.colorButton,
                  },
                }}
              >
                {Array.from({ length: numberOfGuests }, (_, index) => (
                  <MenuItem
                    key={index + 1}
                    value={index + 1}
                    sx={{
                      "&.Mui-selected": {
                        color: "#fff",
                        backgroundColor: `${props.colorButton}!important`,
                      },
                      "&.Mui-selected:hover": { backgroundColor: props.colorButton },
                      "&:hover": { backgroundColor: props.colorButton, color: "white" },
                    }}
                  >
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Botón confirmar */}
          <Grid size={{xs:12,sm:12,md:12,lg:12}} display="flex" justifyContent="center">
            <CustomButton
              bgColor={props.colorButton}
              color="#FFFFFF"
              label="Confirmar"
              onClick={handleSend}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Diálogo de confirmación */}
      <Dialog
        sx={{ paddingTop: 0 }}
        open={openConfirm}
        onClose={handleCloseDialog}
      >
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <Typography variant="body1" className={props.bodyTypo}>
              Confirmación enviada
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RSVPSimple;

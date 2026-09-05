import { Box, Stack } from "@mui/material";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TextInput from "../../../components/TextInput/TextInput";
import type { FontPreviewFormProps } from "../types";

const FontPreviewForm = ({
  name,
  onNameChange,
  onSubmit,
}: FontPreviewFormProps) => {
  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", sm: "center" }}
      >
        <Box sx={{ flex: 1, "& .MuiTextField-root": { minWidth: "100%" } }}>
          <TextInput
            label="Nombre"
            placeholder="Ej. Mariana & Héctor"
            value={name}
            onChange={onNameChange}
            color="#a41423"
          />
        </Box>
        <CustomButton
          bgColor="#a41423"
          color="#fff"
          label="Actualizar vista"
          onClick={onSubmit}
          width="200px"
        />
      </Stack>
    </Box>
  );
};

export default FontPreviewForm;

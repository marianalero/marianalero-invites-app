import Grid from "@mui/material/Grid2";
import ResponsiveLayout from "../../layouts/headerPanel";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import FeaturePageFrame, { burgundyButtonSx } from "../../components/panel/Invitation/features/FeaturePageFrame";
import { Invitation } from "../../models/invitation";
import { ConfirmationMethod } from "../../models/invitationFeatures";
import { DEFAULT_WHATSAPP_BUTTON } from "../../models/confirmation";
import {
  getInvitationById,
  getInvitationFeatures,
  readApiError,
  updateConfirmation,
} from "../../services/invitationApiClient";
import { useSnackbar } from "../../context/snackbarContext";

const COUNTRY_CODES = ["+52", "+1", "+34", "+54", "+57", "+56", "+51", "+593", "+502", "+503"];

const OPTIONS: { value: ConfirmationMethod; title: string; description: string }[] = [
  {
    value: "form",
    title: "Formulario en la invitación",
    description: "Los invitados confirmarán dentro de la invitación.",
  },
  {
    value: "whatsapp",
    title: "Confirmación por WhatsApp",
    description: "Los invitados confirmarán mediante WhatsApp.",
  },
  {
    value: "none",
    title: "Sin confirmación",
    description: "Esta invitación no solicitará RSVP.",
  },
];

export default function ConfirmationSettingsPage() {
  const { id } = useParams();
  const invitationId = Number(id);
  const { showSnackbar } = useSnackbar();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [method, setMethod] = useState<ConfirmationMethod>("form");
  const [countryCode, setCountryCode] = useState("+52");
  const [phone, setPhone] = useState("");
  const [buttonLabel, setButtonLabel] = useState(DEFAULT_WHATSAPP_BUTTON);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!invitationId) return;
    let cancelled = false;
    Promise.all([getInvitationById(invitationId), getInvitationFeatures(invitationId)])
      .then(([invitationData, features]) => {
        if (cancelled) return;
        setInvitation(invitationData);
        const current = features.confirmationMethod;
        setMethod(current === "whatsapp" || current === "none" ? current : "form");
        const storedCode = features.whatsAppCountryCode || "+52";
        setCountryCode(storedCode);
        setPhone(features.whatsAppPhone || "");
        setButtonLabel(features.whatsAppButtonLabel || DEFAULT_WHATSAPP_BUTTON);
      })
      .catch((error) => {
        if (!cancelled) showSnackbar(readApiError(error, "No se pudo cargar la confirmación."), "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [invitationId, showSnackbar]);

  const countryOptions = COUNTRY_CODES.includes(countryCode) ? COUNTRY_CODES : [countryCode, ...COUNTRY_CODES];

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    try {
      await updateConfirmation(invitationId, {
        method,
        whatsAppCountryCode: countryCode,
        whatsAppPhone: phone,
        whatsAppButtonLabel: buttonLabel,
      });
      showSnackbar("Método de confirmación guardado.", "success");
    } catch (error) {
      showSnackbar(readApiError(error, "No se pudo guardar la confirmación."), "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <ResponsiveLayout>
      <Grid container spacing={2} padding={2}>
        <Grid size={12}>
          {loading ? (
            <Box sx={{ display: "grid", placeItems: "center", minHeight: 240 }}>
              <CircularProgress sx={{ color: "#a41423" }} />
            </Box>
          ) : (
            <FeaturePageFrame
              invitationName={invitation?.name}
              title="Confirmación de asistencia"
              subtitle="Elige cómo recibirán la confirmación los invitados."
              backTo={`/invitations/${invitationId}/features`}
              backLabel="Volver a funcionalidades"
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2, maxWidth: 720 }}>
                <RadioGroup value={method} onChange={(event) => setMethod(event.target.value as ConfirmationMethod)}>
                  {OPTIONS.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio sx={{ color: "#a41423", "&.Mui-checked": { color: "#a41423" } }} />}
                      sx={{
                        alignItems: "flex-start",
                        mx: 0,
                        mb: 1,
                        p: 1.5,
                        borderRadius: "18px",
                        border: "1px solid rgba(200,173,120,.28)",
                        bgcolor: method === option.value ? "#fff" : "transparent",
                      }}
                      label={
                        <Box>
                          <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#3a2a25" }}>
                            {option.title}
                          </Typography>
                          <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55", fontSize: ".88rem" }}>
                            {option.description}
                          </Typography>
                        </Box>
                      }
                    />
                  ))}
                </RadioGroup>

                {method === "whatsapp" && (
                  <Box sx={{ display: "grid", gap: 2, p: 2, borderRadius: "20px", bgcolor: "#fff", border: "1px solid rgba(200,173,120,.28)" }}>
                    <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#3a2a25" }}>
                      Número de WhatsApp
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1.5, flexDirection: { xs: "column", sm: "row" } }}>
                      <TextField
                        select
                        label="Código"
                        value={countryCode}
                        onChange={(event) => setCountryCode(event.target.value)}
                        sx={{ minWidth: 120 }}
                      >
                        {countryOptions.map((code) => (
                          <MenuItem key={code} value={code}>{code}</MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        fullWidth
                        required
                        label="Número"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value.replace(/[^\d\s()-]/g, ""))}
                      />
                    </Box>
                    <TextField
                      label="Texto del botón"
                      value={buttonLabel}
                      onChange={(event) => setButtonLabel(event.target.value)}
                      helperText="Así se verá el botón en la invitación."
                    />
                  </Box>
                )}

                <Box>
                  <Button type="submit" variant="contained" disabled={saving} sx={burgundyButtonSx}>
                    {saving ? "Guardando..." : "Guardar"}
                  </Button>
                </Box>
              </Box>
            </FeaturePageFrame>
          )}
        </Grid>
      </Grid>
    </ResponsiveLayout>
  );
}

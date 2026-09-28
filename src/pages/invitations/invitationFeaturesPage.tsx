import Grid from "@mui/material/Grid2";
import ResponsiveLayout from "../../layouts/headerPanel";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import TableRestaurantRoundedIcon from "@mui/icons-material/TableRestaurantRounded";
import { Box, CircularProgress } from "@mui/material";
import FeaturePageFrame from "../../components/panel/Invitation/features/FeaturePageFrame";
import FeatureCard from "../../components/panel/Invitation/features/FeatureCard";
import { Invitation } from "../../models/invitation";
import { InvitationFeatures } from "../../models/invitationFeatures";
import { confirmationMethodLabel } from "../../models/confirmation";
import {
  getInvitationById,
  getInvitationFeatures,
  readApiError,
  setQuestionsEnabled,
} from "../../services/invitationApiClient";
import { useSnackbar } from "../../context/snackbarContext";

export default function InvitationFeaturesPage() {
  const { id } = useParams();
  const invitationId = Number(id);
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [features, setFeatures] = useState<InvitationFeatures | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!invitationId) return;
    let cancelled = false;
    setLoading(true);
    Promise.all([getInvitationById(invitationId), getInvitationFeatures(invitationId)])
      .then(([invitationData, featureData]) => {
        if (cancelled) return;
        setInvitation(invitationData);
        setFeatures(featureData);
      })
      .catch((error) => {
        if (!cancelled) showSnackbar(readApiError(error, "No se pudieron cargar las funcionalidades."), "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [invitationId, showSnackbar]);

  const questionsApplicable = features?.questionsApplicable ?? (features?.confirmationMethod !== "whatsapp" && features?.confirmationMethod !== "none");

  const handleQuestions = async (enabled: boolean) => {
    if (!features) return;
    const previous = features;
    setFeatures({ ...features, questions: enabled });
    try {
      const updated = await setQuestionsEnabled(invitationId, enabled);
      setFeatures(updated);
    } catch (error) {
      setFeatures(previous);
      showSnackbar(readApiError(error, "No se pudo actualizar las preguntas."), "error");
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
          ) : !features ? (
            <FeaturePageFrame
              title="Funcionalidades"
              subtitle="No se pudieron cargar las funcionalidades de esta invitación."
              backTo="/invitations"
              backLabel="Volver a invitaciones"
            >
              <Box />
            </FeaturePageFrame>
          ) : (
            <FeaturePageFrame
              invitationName={invitation?.name}
              title="Funcionalidades"
              subtitle="Administra las funcionalidades disponibles para esta invitación."
              backTo="/invitations"
              backLabel="Volver a invitaciones"
            >
              <Box sx={{ display: "grid", gap: 2 }}>
                <FeatureCard
                  icon={<EventAvailableRoundedIcon />}
                  title="Confirmación de asistencia"
                  description="Configura cómo recibirás las confirmaciones."
                  detail={confirmationMethodLabel(features.confirmationMethod)}
                  actionLabel="Configurar"
                  onConfigure={() => navigate(`/invitations/${invitationId}/features/confirmation`)}
                />
                <FeatureCard
                  icon={<QuizRoundedIcon />}
                  title="Preguntas personalizadas"
                  description={
                    questionsApplicable
                      ? "Agrega preguntas al formulario de confirmación."
                      : "Disponible cuando la confirmación es por formulario en la invitación."
                  }
                  showSwitch
                  switchChecked={Boolean(features.questions)}
                  switchDisabled={!questionsApplicable}
                  onSwitch={handleQuestions}
                  actionLabel="Configurar"
                  configureDisabled={!questionsApplicable}
                  onConfigure={() => navigate(`/invitations/${invitationId}/features/questions`)}
                />
                <FeatureCard
                  icon={<QrCode2RoundedIcon />}
                  title="Pase QR"
                  description="Genera un pase digital para los invitados."
                  showSwitch
                  switchChecked={false}
                  switchDisabled
                  comingSoon
                />
                <FeatureCard
                  icon={<PhotoLibraryRoundedIcon />}
                  title="Álbum de fotos"
                  description="Permite a los invitados compartir fotos y videos del evento."
                  showSwitch
                  switchChecked={false}
                  switchDisabled
                  comingSoon
                />
                <FeatureCard
                  icon={<TableRestaurantRoundedIcon />}
                  title="Organizador de mesas"
                  description="Asigna invitados a mesas."
                  showSwitch
                  switchChecked={false}
                  switchDisabled
                  comingSoon
                />
              </Box>
            </FeaturePageFrame>
          )}
        </Grid>
      </Grid>
    </ResponsiveLayout>
  );
}

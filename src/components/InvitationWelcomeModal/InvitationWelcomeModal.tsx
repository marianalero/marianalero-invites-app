import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { useTranslation } from "react-i18next";

type Language = "es" | "en";

interface InvitationWelcomeModalProps {
  open: boolean;
  isMultilanguage: boolean;
  hasLanguageSelected: boolean;

  // 🎨 colores personalizables
  primaryColor: string;
  secondaryColor: string;
  textColor?: string;

  onEnter: () => void;
  onSelectLanguage: (lang: Language) => void;
}

const InvitationWelcomeModal = ({
  open,
  isMultilanguage,
  hasLanguageSelected,
  primaryColor,
  secondaryColor,
  textColor = "#000",
  onEnter,
  onSelectLanguage,
}: InvitationWelcomeModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open}>
      <DialogContent>
        <Box textAlign="center">
          <Typography sx={{ fontSize: 25, color: textColor }}>
            {t("welcome")}
          </Typography>

          {isMultilanguage && !hasLanguageSelected ? (
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              mt={3}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
            >
              <CustomButton
                label={t("spanish")}
                borderColor={primaryColor}
                bgColor="#ffffff"
                color={primaryColor}
                onClick={() => onSelectLanguage("es")}
              />

              <CustomButton
                label={t("english")}
                borderColor={primaryColor}
                bgColor="#ffffff"
                color={primaryColor}
                onClick={() => onSelectLanguage("en")}
              />
            </Box>
          ) : (
            <Box mt={3}>
              <CustomButton
                label={t("enter")}
                borderColor={primaryColor}
                bgColor={primaryColor}
                color={secondaryColor}
                onClick={onEnter}
              />
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};


export default InvitationWelcomeModal;

// src/components/InvitationWelcomeModal.tsx
import { Dialog, DialogContent, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import CustomButton from "../CustomButton/CustomButton";

type InvitationWelcomeModalProps = {
  open: boolean;
  onEnter: () => void;
  onClose?: () => void;
  isMultilanguage: boolean;
  language: "es" | "en";
  color: string;
};

 const InvitationWelcomeModal = ({
  open,
  onEnter,
  onClose,
  isMultilanguage,
  language,
  color,
}: InvitationWelcomeModalProps) => {
  const { t } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState(false);

  useEffect(() => {
    if (!isMultilanguage) {
      i18n.changeLanguage(language);
      setLanguageSelected(true);
    }
  }, [isMultilanguage, language]);

  const handleSelectLanguage = (lang: "es" | "en") => {
    i18n.changeLanguage(lang);
    setLanguageSelected(true);
    // Cerrar modal automáticamente después de seleccionar idioma si es multilanguage
    if (isMultilanguage && onClose) {
      setTimeout(() => onClose(), 300);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <Box textAlign="center">
          <Typography sx={{ fontSize: 25 }}>
            {t("welcome")}
          </Typography>

          {/* Selector de idioma */}
          {isMultilanguage && !languageSelected && (
            <Box
              display="flex"
              gap={2}
              mt={3}
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <CustomButton
                label="Español"
                borderColor={color}
                bgColor="#ffffff"
                color={color}
                onClick={() => handleSelectLanguage("es")}
              />

              <CustomButton
                label="Inglés"
                borderColor={color}
                bgColor="#ffffff"
                color={color}
                onClick={() => handleSelectLanguage("en")}
              />
            </Box>
          )}

          {/* Botón Entrar */}
          {(languageSelected || !isMultilanguage) && (
            <Box mt={3}>
              <CustomButton
                label={t("enter")}
                borderColor={color}
                bgColor={color}
                color="#ffffff"
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

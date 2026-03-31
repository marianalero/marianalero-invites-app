// src/components/InvitationWelcomeModal.tsx
import { Dialog, DialogContent, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import CustomButton from "../CustomButton/CustomButton";

type SelectableLanguage = {
  code: string;
  label: string;
};

type InvitationWelcomeModalProps = {
  open: boolean;
  onEnter: () => void;
  onClose?: () => void;
  isMultilanguage: boolean;
  language: string;
  selectableLanguages?: SelectableLanguage[];
  color: string;
};

const DEFAULT_SELECTABLE_LANGUAGES: SelectableLanguage[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

 const InvitationWelcomeModal = ({
  open,
  onEnter,
  onClose,
  isMultilanguage,
  language,
  selectableLanguages,
  color,
}: InvitationWelcomeModalProps) => {
  const { t } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState(false);
  const languages = selectableLanguages?.length
    ? selectableLanguages
    : DEFAULT_SELECTABLE_LANGUAGES;

  useEffect(() => {
    if (!isMultilanguage) {
      i18n.changeLanguage(language);
      setLanguageSelected(true);
    }
  }, [isMultilanguage, language]);

  const handleSelectLanguage = (lang: string) => {
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
              {languages.map((lang) => (
                <CustomButton
                  key={lang.code}
                  label={lang.label}
                  borderColor={color}
                  bgColor="#ffffff"
                  color={color}
                  onClick={() => handleSelectLanguage(lang.code)}
                />
              ))}
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

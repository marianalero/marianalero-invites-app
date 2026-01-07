// src/hooks/useInvitationLanguage.ts
import { useEffect } from "react";
import i18n from "../i18n";

type Language = "es" | "en";

type Props = {
  isMultilanguage: boolean;
  defaultLanguage: Language;
};

const STORAGE_KEY = "invitation-language";

export const useInvitationLanguage = ({
  isMultilanguage,
  defaultLanguage,
}: Props) => {
  useEffect(() => {
    const storedLang = localStorage.getItem(STORAGE_KEY) as Language | null;

    // 1️⃣ Si ya hay idioma guardado → respetarlo SIEMPRE
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      return;
    }

    // 2️⃣ Si NO es multilenguaje → idioma fijo
    if (!isMultilanguage) {
      i18n.changeLanguage(defaultLanguage);
      return;
    }

    // 3️⃣ Multilenguaje y sin idioma → NO tocar idioma
    // El modal se encarga
  }, [isMultilanguage, defaultLanguage]);
};

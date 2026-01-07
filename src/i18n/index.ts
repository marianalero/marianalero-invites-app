import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: "es",              // 👈 FORZADO
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: "es",
    fallbackLng: "es",

    // 🔴 CLAVE DEL FIX
    detection: {
      order: [],
    },

    interpolation: {
      escapeValue: false,
    },
  });


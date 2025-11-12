import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/assets/data/languages/en.json";
import es from "@/assets/data/languages/es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: navigator.language.startsWith("es") ? "es" : "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;

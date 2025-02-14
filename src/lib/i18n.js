"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: "uz", 
    interpolation: { escapeValue: false },
    resources: {
      uz: {
        translation: require("../../public/locales/uz.json"),
      },
      ru: {
        translation: require("../../public/locales/ru.json"),
      },
    },
  });

export default i18n;

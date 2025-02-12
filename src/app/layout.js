"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../lib/i18n";
import "./globals.css";

export default function RootLayout({ children }) {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <html lang={language}>
      <body>
        <nav className="p-4 flex justify-between bg-gray-200">
          <div>{t("welcome")}</div>
          <div>
            <button onClick={() => changeLanguage("uz")} className="mr-2">
              🇺🇿 UZ
            </button>
            <button onClick={() => changeLanguage("ru")}>🇷🇺 RU</button>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

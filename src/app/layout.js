"use client";

import { useTranslation } from "react-i18next";
import "../lib/i18n";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [selectedText, setSelectedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      const text = window.getSelection().toString();
      if (text) {
        setSelectedText(text);
      }
    };
    const changeLang = async () => {
      const lang = localStorage.getItem("lang") || "uz";
      await i18n.changeLanguage(lang);
    };

    changeLang();

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [i18n]);
  const speakText = () => {
    if (!selectedText) {
      alert("Iltimos, matnni belgilang!");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(selectedText);

    if (selectedText.match(/[а-яА-ЯёЁ]/)) {
      utterance.lang = "ru-RU";
    } else {
      utterance.lang = "uz-UZ";
    }

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };
  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  return (
    <html lang={i18n.language}>
      <head>
        <link rel="stylesheet" href="/fonts/all.min.css" />
        <title>Sector Technology</title>
      </head>
      <body>
        <header className="sticky top-0 z-10 bg-[#fff] shadow-[0_5px_30px_0_#00000026]">
          <TopHeader />
          <MainHeader />
          <hr />
          <BottomHeader />
        </header>
        <main>{children}</main>
        <Sidebar
          speakText={speakText}
          stopSpeaking={stopSpeaking}
          isSpeaking={isSpeaking}
        />
        <Footer />
      </body>
    </html>
  );
}

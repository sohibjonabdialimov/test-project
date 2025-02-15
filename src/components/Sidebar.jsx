"use client";

import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import rus from "../assets/icons/rus.svg";
import uzb from "../assets/icons/uz.svg";
import save from "../assets/icons/save.svg";
import chart from "../assets/icons/chart.svg";
import share from "../assets/icons/share.svg";
import chat from "../assets/icons/chat.svg";
import right from "../assets/icons/right.svg";
import top from "../assets/icons/top.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ speakText, stopSpeaking, isSpeaking, setOpenChat, openChat }) {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || i18n.language || "uz";
    }
    return "uz";
  });
  const pathname = usePathname();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = localStorage.getItem("lang") || "uz";
      i18n.changeLanguage(lang);
      setLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <aside className="fixed rounded-sm w-12 bottom-2 right-0 h-[73dvh] bg-[#fafafaff] shadow-[0px_10px_36px_0_#0000001A] ">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="py-2">
            <Image width={47} height={15} src={logo} alt="logo" />
          </div>
          <div className="px-1">
            <div
              onClick={() => changeLanguage("uz")}
              className={`flex flex-col cursor-pointer gap-1 items-center p-2 rounded-[5px] ${
                language == "uz" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <Image src={uzb} alt="Uzbek flag" />
              <p className="text-[#555555] text-xs font-normal">Uz</p>
            </div>
            <div
              onClick={() => changeLanguage("ru")}
              className={`flex cursor-pointer flex-col gap-1 items-center p-2 rounded-[5px] ${
                language == "ru" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <Image src={rus} alt="Russian flag" />
              <p className="text-[#555555] text-xs font-normal">Ru</p>
            </div>
          </div>
          <div className="w-full flex justify-center flex-col items-center gap-4 mt-6">
            <div className="group relative w-[34px] h-[34px] hover:bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer">
              <Image width={18} height={18} src={save} alt="save" />
              <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t("save")}
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
            <div className="relative group w-[34px] h-[34px] hover:bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer">
              <Image width={20} height={20} src={chart} alt="chart" />
              <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t("chart")}
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
            <div className="relative group w-[34px] h-[34px] hover:bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer">
              <Image width={22} height={22} src={share} alt="share" />
              <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t("share")}
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
            <div onClick={() => setOpenChat(!openChat)} className="relative group w-[34px] h-[34px] bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer">
              <Image width={14} height={14} src={chat} alt="chat" />
              <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t("open_chat")}
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
            <div
              onClick={isSpeaking ? stopSpeaking : speakText}
              className="relative group w-[34px] h-[34px] hover:bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer"
            >
              <i
                className={`fa-solid ${
                  isSpeaking ? "fa-volume-xmark" : "fa-volume-high"
                }`}
              ></i>
              <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {t("voice")}
                <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center gap-4 pb-3">
          <div className="relative group w-[34px] h-[34px] hover:bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer">
            <Image width={20} height={20} src={right} alt="right" />
            <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {t("secret")}
              <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
          <div
            onClick={scrollToTop}
            className="relative group w-[34px] h-[34px] bg-[#EEEEEEFF] rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image width={10} height={14} src={top} alt="top" />
            <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {t("top")}
              <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

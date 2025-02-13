"use client";

import Image from "next/image";
import logo from "../assets/icons/s_logo.svg";
import rus from "../assets/icons/rus.svg";
import uzb from "../assets/icons/uz.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Sidebar() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  return (
    <aside className="fixed rounded-md w-12 bottom-0 right-0 h-[73dvh] bg-[#fafafaff] shadow-[0px_10px_36px_0_#0000001A] ">
      <div className="py-2">
        <Image src={logo} alt="logo" />
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
    </aside>
  );
}

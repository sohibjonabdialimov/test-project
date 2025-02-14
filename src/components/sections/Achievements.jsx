"use client";

import { useState } from "react";
import "./sections.css";
import { useTranslation } from "react-i18next";
export default function Achievements() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      style={{ boxShadow: "0 7px 10px 0 rgba(0, 0, 0, 0.07)" }}
      className="category w-[1400px] mx-auto mb-16"
    >
      <div className="p-6 bg-white rounded-lg">
        <p className="text-[#333333] text-lg font-normal">
        {t("achievement_main_text")}
        </p>
        <h2 className="text-[26px] leading-[32px] font-bold text-center mb-4 mt-1">
        {t("achievement_title")}
        </h2>

        <ul
          className={`achievement_list pb-5 relative text-[#333333] overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[500px] opacity-100" : "max-h-[150px] opacity-75"
          }`}
        >
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-90"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_1")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-75"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_2")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-60"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_3")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-45"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_4")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-30"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_5")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-15"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_6")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-15"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_7")}
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-15"}`}>
            <p className="text-[#333333] text-base">
            {t("achievement_text_8")}
            </p>
          </li>
        </ul>
        <hr/>

        <button className="text-[#0054AE] mt-2 text-base font-normal border-[#0054AE] border-b-[1px] border-dashed" onClick={() => setExpanded(!expanded)} type="button">
        {expanded ? t("close") : t("open")}
        </button>
      </div>
    </section>
  );
}

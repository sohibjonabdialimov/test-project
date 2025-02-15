"use client";

import Image from "next/image";
import Link from "next/link";
import uzb from "../assets/icons/uz.svg";
import { useTranslation } from "react-i18next";
import CustomSelect from "./ui/CustomSelect";

export default function BottomHeader() {
  const { t } = useTranslation();
  return (
    <nav className="w-[1400px] mx-auto px-3 flex justify-between items-center h-[60px] gap-[50px]">
      <div className="flex items-center gap-3">
        <div className="flex items-center cursor-pointer justify-center gap-3 bg-[#0054AE] text-[#fff] rounded-[9px] p-[8px_20px]">
          <i className="fa-solid fa-bars"></i>
          <p className="font-arial text-sm font-bold">{t("product_catalog")}</p>
        </div>

        <div className="flex items-center px-3 rounded-[10px] gap-5">
          <div className="cursor-pointer flex items-center gap-2">
            <Image width={20} height={24} src={uzb} alt="Uzbek flag" />
            <p className="text-[#333333] text-sm font-arial font-bold">
              {t("footer_4_2")}
            </p>
          </div>
          <div className="cursor-pointer hover:opacity-50 transition-opacity">
            <p className="text-[#333333] text-sm font-arial font-bold">
              +9999999999
            </p>
          </div>
        </div>
      </div>

      <ul className="flex justify-between items-center">
        <li className="px-6">
          <CustomSelect
            options={[
              { value: "option1", label: t("buyers") },
              { value: "option2", label: t("buyers") },
              { value: "option3", label: t("buyers") },
            ]}
            defaultValue="option1"
            onChange={(value) => console.log("Tanlangan:", value)}
          />
        </li>
        <li className="px-6">
          <CustomSelect
            options={[
              { value: "option1", label: t("services") },
              { value: "option2", label: t("services") },
              { value: "option3", label: t("services") },
            ]}
            defaultValue="option1"
            onChange={(value) => console.log("Tanlangan:", value)}
          />
        </li>
        <li className="px-6">
          <CustomSelect
            options={[
              { value: "option1", label: t("about") },
              { value: "option2", label: t("about") },
              { value: "option3", label: t("about") },
            ]}
            defaultValue="option1"
            onChange={(value) => console.log("Tanlangan:", value)}
          />
        </li>
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/">
            <p className="text-sm text-[#333333] font-arial font-medium text-center">
              {t("online_chat")}
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

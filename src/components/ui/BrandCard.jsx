"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function BrandCard({ item }) {
  const { t } = useTranslation();
  return (
    <>
      {item.id == 6 ? (
        <div style={{ boxShadow: "0 12px 24px rgba(44, 39, 56, 0.02)" }} className="group cursor-pointer rounded-[10px] flex items-center justify-center shadow-sm bg-[#FFFFFF] relative gap-3 p-3">
          <p className="group-hover:underline text-[#0054AE] text-sm font-normal">{t("all_brand")}</p>
          <i className="fa-solid fa-arrow-right text-base text-[#333333]"></i>
        </div>
      ) : (
        <div style={{ boxShadow: "0 12px 24px rgba(44, 39, 56, 0.02)" }} className="cursor-pointer rounded-[10px] bg-[#FFFFFF] relative flex items-center justify-center p-3">
          <Image
            src={item.img}
            alt={"Brands"}
            width={150}
            height={100}
            className="rounded-md"
          />
        </div>
      )}
    </>
  );
}

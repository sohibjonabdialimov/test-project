"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ExtraSection() {
  const { t } = useTranslation();
  return (
    <article className="w-[25dvw]">
      <div
        style={{ boxShadow: "0 7px 20px 0 #00000012" }}
        className="mb-12 border-b-[6px] border-b-[#0054AE]"
      >
        <div className="flex items-center gap-4 py-6 px-5 bg-[#fff] rounded-[10px]">
          <h1 className="text-[26px] leading-[32px] font-normal text-[#555555]">
            {t("news")}
          </h1>
          <i className="fa-solid fa-angle-right text-[#555555] text-xs"></i>
        </div>
        <div className="bg-[#fafafaff] py-6 px-5">
          <Link
            href={"/"}
            className="inline-block hover:underline text-sm text-[#333333] font-normal mb-3"
          >
            {t("news_info_1")}
          </Link>
          <div className="flex items-center gap-4">
            <i className="fa-regular fa-clock text-[#A3A3A3] text-sm"></i>
            <p className="text-[#A3A3A3] text-xs">{t("news_date_1")}</p>
          </div>
        </div>
        <div className="bg-[#fff] py-6 px-5 rounded-[10px]">
          <Link
            href={"/"}
            className="inline-block hover:underline text-sm text-[#333333] font-normal mb-3"
          >
            {t("news_info_2")}
          </Link>
          <div className="flex items-center gap-4">
            <i className="fa-regular fa-clock text-[#A3A3A3] text-sm"></i>
            <p className="text-[#A3A3A3] text-xs">{t("news_date_2")}</p>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0 7px 20px 0 #00000012" }}
        className="mb-12 border-b-[6px] border-b-[#0054AE]"
      >
        <div className="py-6 px-5 bg-[#fff] rounded-[10px]">
          <h1 className="text-[26px] leading-[32px] font-normal text-[#555555]">
            {t("our_projects")}
          </h1>
        </div>
        <ul className="bg-[#fafafaff] py-6 px-7">
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">snr.systems</span>
            </Link>
          </li>
          <li>
            <Link
              className="group flex gap-2 items-center text-sm text-[#333333] font-normal"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">
                {t("our_project_info")}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        style={{ boxShadow: "0 7px 20px 0 #00000012" }}
        className="border-b-[6px] border-b-[#0054AE]"
      >
        <div className="py-6 px-5 bg-[#fff] rounded-[10px]">
          <h1 className="text-[26px] leading-[32px] font-normal text-[#555555]">
            {t("how_to_work")}
          </h1>
        </div>
        <ul className="bg-[#fafafaff] py-6 px-7">
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_1")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_2")}</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_3")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_4")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_5")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_6")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_7")}</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center group text-sm text-[#333333] font-normal"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span className="group-hover:underline">{t("work_8")}</span>
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

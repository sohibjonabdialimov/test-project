"use client";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0054AE] text-[#fff]">
      <div className="footer_content w-[1400px] mx-auto grid grid-cols-4 pt-10 pb-12">
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">{t("footer_1_1")}</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              {t("footer_1_2")}
            </Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_1_3")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_1_4")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_1_5")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_1_6")}</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">{t("footer_2_1")}</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              {t("footer_2_2")}
            </Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_2_3")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_2_4")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_2_5")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_2_6")}</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">{t("footer_3_1")}</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              {t("footer_3_2")}
            </Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_3_3")}</Link>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>{t("footer_3_4")}</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">{t("footer_4_1")}</h3>
          </li>
          <li>
            <p className="text-sm font-normal">
              {t("footer_4_2")}
            </p>
          </li>
          <li>
            <p className="text-sm font-normal">+998 999999999</p>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>sectortechnology.uz</Link>
          </li>
          <li>
            <p className="text-sm font-normal">{t("footer_4_3")}</p>
          </li>
        </ul>
      </div>
      <div className="w-[1400px] mx-auto flex items-center py-8">
        <p className="text-sm font-normal">© 2022–2025 sectortechnology.uz</p>
        <div className="flex-1 flex justify-center items-center gap-20">
          <Image
            className="cursor-pointer transition-opacity hover:opacity-70"
            src={icon1}
            alt="icon 1"
          />
          <Image
            className="cursor-pointer transition-opacity hover:opacity-70"
            src={icon2}
            alt="icon 2"
          />
          <Image
            className="cursor-pointer transition-opacity hover:opacity-70"
            src={icon3}
            alt="icon 3"
          />
        </div>
        <div className="justify-items-end pr-5 flex flex-col items-end">
          <Link
            href={"/"}
            className="text-sm font-normal inline-block hover:underline"
          >
            {t("footer_b_1")}
          </Link>
          <Link
            href={"/"}
            className="text-sm font-normal inline-block hover:underline"
          >
            {t("footer_b_2")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

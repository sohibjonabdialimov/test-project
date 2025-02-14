import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function TopHeader() {
  const { t } = useTranslation();
  return (
    <div className="w-full shadow-lg p-4 bg-[#0054AE] h-[40px] flex justify-center items-center">
      <Link className="flex items-center gap-1 text-[#fff] text-sm font-normal font-second" href={"/"}>
      {t("header_alert")}
        <span className="underline">{t("header_alert_login")}</span>
        <i className="fa-solid fa-arrow-right text-sm font-normal pt-1"></i>
      </Link>
    </div>
  );
}

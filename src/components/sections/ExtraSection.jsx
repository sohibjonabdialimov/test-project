"use client";

import Link from "next/link";

export default function ExtraSection() {
  return (
    <article className="w-[25dvw]">
      <div
        style={{ boxShadow: "0 7px 20px 0 #00000012" }}
        className="mb-12 border-b-[6px] border-b-[#0054AE]"
      >
        <div className="flex items-center gap-4 py-6 px-5 bg-[#fff] rounded-[10px]">
          <h1 className="text-[26px] leading-[32px] font-normal text-[#555555]">
            Новости{" "}
          </h1>
          <i className="fa-solid fa-angle-right text-[#555555] text-xs"></i>
        </div>
        <div className="bg-[#fafafaff] py-6 px-5">
          <Link
            href={"/"}
            className="inline-block hover:underline text-sm text-[#333333] font-normal mb-3"
          >
            Новая серия сварочных аппаратов SNR- FS-60x уже на складе
          </Link>
          <div className="flex items-center gap-4">
            <i className="fa-regular fa-clock text-[#A3A3A3] text-sm"></i>
            <p className="text-[#A3A3A3] text-xs">18 апреля 2024 г.</p>
          </div>
        </div>
        <div className="bg-[#fff] py-6 px-5 rounded-[10px]">
          <Link
            href={"/"}
            className="inline-block hover:underline text-sm text-[#333333] font-normal mb-3"
          >
            Читайте статью: Что такое PoE и для чего он нужен?
          </Link>
          <div className="flex items-center gap-4">
            <i className="fa-regular fa-clock text-[#A3A3A3] text-sm"></i>
            <p className="text-[#A3A3A3] text-xs">29 марта 2024 г.</p>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0 7px 20px 0 #00000012" }}
        className="mb-12 border-b-[6px] border-b-[#0054AE]"
      >
        <div className="py-6 px-5 bg-[#fff] rounded-[10px]">
          <h1 className="text-[26px] leading-[32px] font-normal text-[#555555]">
            Наши проекты
          </h1>
        </div>
        <ul className="bg-[#fafafaff] py-6 px-7">
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>snr.systems</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Конфигураторы</span>
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
            Как мы работаем
          </h1>
        </div>
        <ul className="bg-[#fafafaff] py-6 px-7">
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Способы оплаты</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Условия доставки</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Гарантийное обслуживание</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Возврат товара</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Вопросы и ответы</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Техническая поддержка</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal mb-3"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>База знаний</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline text-sm text-[#333333] font-normal"
              href={"/"}
            >
              <i className="fa-solid fa-angle-right text-[#333333] text-xs"></i>
              <span>Конфигураторы</span>
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

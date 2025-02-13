"use client";

import { useState } from "react";
import "./sections.css";
export default function Achievements() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      style={{ boxShadow: "0 7px 10px 0 rgba(0, 0, 0, 0.07)" }}
      className="category w-[1400px] mx-auto mb-16"
    >
      <div className="p-6 bg-white rounded-lg">
        <p className="text-[#333333] text-lg font-normal">
          Компания «НАГ» – надежный и честный партнер, предлагающий компаниям
          телеком-отрасли, промышленности и бизнесу эффективные решения и
          оборудование для решения широкого круга задач. Мы осуществляем оптовую
          и розничную продажу компонентов и программно-аппаратных комплексов
          (ПАК) для развертывания сетевой инфраструктуры, ее модернизации и
          масштабирования.
        </p>
        <h2 className="text-[26px] leading-[32px] font-bold text-center mb-4 mt-1">
          Наши достижения
        </h2>

        <ul
          className={`achievement_list pb-5 relative text-[#333333] overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[500px] opacity-100" : "max-h-[150px] opacity-75"
          }`}
        >
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-80"}`}>
            <p className="text-[#333333] text-base">
              На нашем официальном сайте мы продаём оборудование, как под
              собственными торговыми марками, так и разработанное ведущими
              международными производителями телекоммуникационного оборудования.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-60"}`}>
            <p className="text-[#333333] text-base">
              В магазине «NAG» насчитывается более тысячи брендов и свыше 20
              тысяч наименований товаров.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-40"}`}>
            <p className="text-[#333333] text-base">
              Собственная торговая марка SNR включает широкий ассортимент
              оборудования и комплектующих для развертывания проводных сетей
              передачи данных, систем безопасности и видеонаблюдения,
              беспроводных сетей и ЦОД.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-20"}`}>
            <p className="text-[#333333] text-base">
              Дочерняя компания «НАГТЕХ», созданная несколько лет назад,
              разрабатывает и производит телекоммуникационное оборудование,
              способное заместить дорогие зарубежные аналоги.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-80"}`}>
            <p className="text-[#333333] text-base">
              На нашем официальном сайте мы продаём оборудование, как под
              собственными торговыми марками, так и разработанное ведущими
              международными производителями телекоммуникационного оборудования.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-60"}`}>
            <p className="text-[#333333] text-base">
              В магазине «NAG» насчитывается более тысячи брендов и свыше 20
              тысяч наименований товаров.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-80"}`}>
            <p className="text-[#333333] text-base">
              На нашем официальном сайте мы продаём оборудование, как под
              собственными торговыми марками, так и разработанное ведущими
              международными производителями телекоммуникационного оборудования.
            </p>
          </li>
          <li className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-60"}`}>
            <p className="text-[#333333] text-base">
              В магазине «NAG» насчитывается более тысячи брендов и свыше 20
              тысяч наименований товаров.
            </p>
          </li>
        </ul>
        <hr/>

        <button className="text-[#0054AE] mt-2 text-base font-normal" onClick={() => setExpanded(!expanded)} type="button">
        {expanded ? "Скрыть" : "Показать полный текст"}
        </button>
      </div>
    </section>
  );
}

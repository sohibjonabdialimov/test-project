"use client";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0054AE] text-[#fff]">
      <div className="footer_content w-[1400px] mx-auto grid grid-cols-4 pt-10 pb-12">
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2 ">КОМПАНИЯ NAG</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              О компании
            </Link>
          </li>
          <li>
            <Link href={"/"}>Новости</Link>
          </li>
          <li>
            <Link href={"/"}>Контакты</Link>
          </li>
          <li>
            <Link href={"/"}>Банковские реквизиты</Link>
          </li>
          <li>
            <Link href={"/"}>Партнеры</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">ПОДДЕРЖКА</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              On-line поддержка
            </Link>
          </li>
          <li>
            <Link href={"/"}>Условия оплаты</Link>
          </li>
          <li>
            <Link href={"/"}>Условия доставки</Link>
          </li>
          <li>
            <Link href={"/"}>Гарантийное обслуживание</Link>
          </li>
          <li>
            <Link href={"/"}>Расширенная гарантия</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">ПРОЕКТЫ</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              snr.systems
            </Link>
          </li>
          <li>
            <Link href={"/"}>NAG.conference</Link>
          </li>
          <li>
            <Link href={"/"}>Конфигураторы</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-sm uppercase mb-2">Ваш офис</h3>
          </li>
          <li>
            <Link className="text-sm font-normal" href={"/"}>
              Ташкент
            </Link>
          </li>
          <li>
            <Link href={"/"}>+998 999999999</Link>
          </li>
          <li>
            <Link href={"/"}>sectortechnology.uz</Link>
          </li>
          <li>
            <Link href={"/"}>Ташкент, Chilonzor</Link>
          </li>
        </ul>
      </div>
      <div className="w-[1400px] mx-auto flex items-center py-8">
        <p className="text-sm font-normal">© 2022–2025 sectortechnology.uz</p>
        <div className="flex-1 flex justify-center items-center gap-20">
          <Image className="cursor-pointer transition-opacity hover:opacity-70" src={icon1} alt="icon 1" />
          <Image className="cursor-pointer transition-opacity hover:opacity-70" src={icon2} alt="icon 2" />
          <Image className="cursor-pointer transition-opacity hover:opacity-70" src={icon3} alt="icon 3" />
        </div>
        <div className="justify-items-end pr-5">
          <p className="text-sm font-normal">Политика конфиденциальности</p>
          <p className="text-sm font-normal">Политика обработки персональных данных</p>
        </div>
      </div>
    </footer>
  );
}

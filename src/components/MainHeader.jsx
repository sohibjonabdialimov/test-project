"use client";

import Image from "next/image";
import logo from "../assets/icons/logo.svg";
import sale from "../assets/icons/sale.svg";
import save from "../assets/icons/save.svg";
import chart from "../assets/icons/chart.svg";
import user from "../assets/icons/user.svg";
import shopping from "../assets/icons/shopping.svg";
import Link from "next/link";

export default function MainHeader() {
  return (
    <nav className="w-[1400px] mx-auto px-3 flex justify-between items-center h-[67px] gap-[50px]">
      <Link href="/">
        <Image width={173} height={56} src={logo} alt="logo" />
      </Link>

      <div className="flex items-center border border-[#EEEEEE] px-3 py-1 bg-[#F5F5F5] flex-1 rounded-[10px]">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Введите поисковый запрос"
          className="w-full outline-none bg-[#F5F5F5] p-[6px_15px]"
        />
        <i className="fa-solid fa-magnifying-glass text-[#0054AE]"></i>
      </div>

      <ul className="flex justify-between items-center">
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/sale">
            <Image width={20} height={20} src={sale} alt="sale" />
            <p className="text-sm text-[#333333] font-arial font-normal text-center">
              Аксии
            </p>
          </Link>
        </li>
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/sale">
            <Image width={18} height={18} src={save} alt="save" />
            <p className="text-sm text-[#333333] font-arial font-normal text-center">
              Избранное
            </p>
          </Link>
        </li>
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/sale">
            <Image width={20} height={20} src={chart} alt="chart" />
            <p className="text-sm text-[#333333] font-arial font-normal text-center">
              Сравнить
            </p>
          </Link>
        </li>
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/sale">
            <Image width={23} height={23} src={user} alt="user" />
            <p className="text-sm text-[#333333] font-arial font-normal text-center">
              Кабинет
            </p>
          </Link>
        </li>
        <li className="px-6">
          <Link className="flex items-center flex-col gap-[1px]" href="/sale">
            <Image width={21} height={21} src={shopping} alt="shopping" />
            <p className="text-sm text-[#333333] font-arial font-normal text-center">
              Корзина
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-full shadow-lg p-4 bg-[#0054AE] h-[40px] flex justify-center items-center">
      <Link className="flex items-center gap-1 text-[#fff] text-sm font-normal font-second" href={"/"}>
        Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста,
        <span className="underline">авторизуйтесь</span>
        <i className="fa-solid fa-arrow-right text-sm font-normal pt-1"></i>
      </Link>
    </div>
  );
}

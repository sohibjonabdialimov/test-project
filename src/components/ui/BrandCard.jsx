"use client";

import Image from "next/image";
export default function BrandCard({ item }) {
  return (
    <>
      {item.id == 6 ? (
        <div style={{ boxShadow: "0 12px 24px rgba(44, 39, 56, 0.02)" }} className="rounded-[10px] flex items-center justify-center shadow-sm bg-[#FFFFFF] relative gap-3">
          <p className="text-[#0054AE] text-sm font-normal">Все бренды</p>
          <i className="fa-solid fa-arrow-right text-base text-[#333333]"></i>
        </div>
      ) : (
        <div style={{ boxShadow: "0 12px 24px rgba(44, 39, 56, 0.02)" }} className="rounded-[10px] bg-[#FFFFFF] relative flex items-center justify-center">
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

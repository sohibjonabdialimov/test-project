"use client";

import Image from "next/image";
import "./ui.css";
export default function CategoryCard({ id, name, count, image }) {
  return (
    <>
      {id == 12 ? (
        <div className="final_bg rounded-[10px] shadow-md bg-[#FFFFFF] relative">
          <div className="relative p-[20px_30px] w-[150px] h-[100px]">
            <i className="fa-solid fa-arrow-right text-xl"></i>
          </div>
          <div className="py-3 px-5 flex flex-col justify-between">
            <h2 className="mt-2 text-[#333333] text-sm font-semibold leading-[20px] mb-[1.24rem]">
              {name}
            </h2>
            <p className="absolute text-[#A3A3A3] text-sm font-normal bottom-1.5">
              {count}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg_url rounded-[10px] shadow-md bg-[#FFFFFF] relative">
          <div className="relative w-[150px] h-auto">
            <Image
              src={image}
              alt={name}
              width={150}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="py-3 px-5 flex flex-col justify-between">
            <h2 className="mt-2 text-[#333333] text-sm font-semibold leading-[20px] mb-[1.24rem]">
              {name}
            </h2>
            <p className="absolute text-[#A3A3A3] text-sm font-normal bottom-1.5">
              {count}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

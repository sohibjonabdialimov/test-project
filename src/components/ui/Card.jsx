"use client";

import Image from "next/image";
import layer from "../../assets/icons/layer.svg";
import save from "../../assets/icons/save.svg";
import charts from "../../assets/icons/chart.svg";
import shopping from "../../assets/icons/blue_shopping.svg";
import { useTranslation } from "react-i18next";
export default function Card({
  title,
  description,
  image,
  code,
  count,
  price,
}) {
  const { t } = useTranslation();
  return (
    <div className="border rounded-lg p-2">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-md aspect-square"
        />
        <div className="absolute top-1.5 left-0 border-[1px] border-[#6AB04C] rounded-[5px] bg-[#F3F9F1] p-[2px_10px]">
          <p className="text-[#6AB04C] font-medium text-sm text-center">
            {t("new")}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-1 calc_height pt-3 pb-5">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-normal text-[#3B3B3B] w-[90%]">
            {description}
          </h3>
          <Image
            className="cursor-pointer"
            src={layer}
            alt={"Layer icon"}
            width={17}
            height={15}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs font-normal text-[#929292]">{code}</p>
            <Image
              className="cursor-pointer"
              src={layer}
              alt={"Layer icon"}
              width={17}
              height={15}
            />
          </div>
          <p className="text-[#0054AE] text-sm font-normal mb-6">
            {t("exist")}: {count}
          </p>
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-[#3B3B3B] text-[19px] font-medium">
              {price} {t("money")}
            </h4>
            <Image
              className="aspect-square cursor-pointer"
              src={save}
              alt={"Save icon"}
              width={20}
              height={20}
            />
            <Image
              className="aspect-square cursor-pointer"
              src={charts}
              alt={"Chart icon"}
              width={20}
              height={20}
            />
            <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#F5F5F5] cursor-pointer">
              <Image
                className="aspect-square"
                src={shopping}
                alt={"Shopping icon"}
                width={18.6}
                height={18.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

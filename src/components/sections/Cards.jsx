"use client";

import { useState } from "react";
import Card from "../ui/Card";
import cardsData from "@/data/cards.json";
import { useTranslation } from "react-i18next";
const filterData = [
  { id: 1, name: "Рекомендуем" },
  { id: 2, name: "Новинки" },
  { id: 3, name: "Акции" },
  { id: 4, name: "Товары со скидкой" },
  { id: 5, name: "Популярное" },
];
export default function Cards() {
  const [selected, setSelected] = useState(1);
  const { i18n } = useTranslation();
  let lang = i18n.language;
  return (
    <div
      style={{ boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)" }}
      className="w-[75dvw] bg-[#fff] rounded-[10px] p-[0_15px]"
    >
      <div className="px-8">
        <div className="flex justify-between items-center gap-2 pt-2 border-b-[1px] border-b-[##EEEEEEFF]">
          {filterData.map((item) => {
            return (
              <h4
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`border-b-[5px] hover:border-b-inherit cursor-pointer px-6 py-2 ${
                  selected === item.id
                    ? "border-b-[#0054AE] text-[#0054AE]"
                    : "border-b-transparent text-[#333333]"
                }`}
              >
                {item.name}
              </h4>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 pb-14 pt-7 gap-5">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title[lang]}
            description={card.description[lang]}
            count={card.count[lang]}
            image={card.image}
            code={card.code}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}

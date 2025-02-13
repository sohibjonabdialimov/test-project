"use client";

import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";
import b5 from "../../assets/images/b5.png";
import BrandCard from "../ui/BrandCard";
const data = [
  { id: 1, img: b1 },
  { id: 2, img: b2 },
  { id: 3, img: b3 },
  { id: 4, img: b4 },
  { id: 5, img: b5 },
  { id: 6, img: null },
];
export default function Brands() {

  return (
    <section className="category w-[1400px] mx-auto mb-16">
      <h2 className="text-[#333333] text-[32px] leading-8 font-arial mb-8 font-bold">
        Популярные бренды
      </h2>
      <div className="grid grid-cols-6 justify-between gap-10">
        {data.map((item) => (
          <BrandCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

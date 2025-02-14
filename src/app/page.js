"use client";

import Category from "@/components/sections/Category";
import Brands from "@/components/sections/Brands";
import Achievements from "@/components/sections/Achievements";
import dynamic from "next/dynamic";
import ExtraSection from "@/components/sections/ExtraSection";
import Cards from "@/components/sections/Cards";
const Hero = dynamic(() => import("../components/sections/Hero"));

export default function HomePage() {
  return (
    <div className="py-12">
      <Hero />
      <Category />
      <Brands />
      <div className="w-[1400px] mx-auto flex gap-7 mb-24">
        <ExtraSection />
        <Cards />
      </div>
      <Achievements />
    </div>
  );
}

"use client";

// import TextToSpeech from "@/components/TextToSpeech";
import { useTranslation } from "react-i18next";
import Category from "@/components/sections/Category";
import Brands from "@/components/sections/Brands";
import Achievements from "@/components/sections/Achievements";
import dynamic from "next/dynamic";
import ExtraSection from "@/components/sections/ExtraSection";
import Cards from "@/components/sections/Cards";
const Hero = dynamic(() => import("../components/sections/Hero"));
const TextToSpeech = dynamic(() => import("../components/TextToSpeech"), {
  ssr: false,
});

export default function HomePage() {
  const { t } = useTranslation();
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

      <div className="mb-64"></div>
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <p>{t("description")}</p>
      <TextToSpeech />
    </div>
  );
}

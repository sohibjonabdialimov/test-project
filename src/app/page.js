"use client";

import TextToSpeech from "@/components/TextToSpeech";
import Card from "@/components/ui/Card";
import { useTranslation } from "react-i18next";
import cardsData from "@/data/cards.json";
import Hero from "@/components/sections/Hero";
import Category from "@/components/sections/Category";

export default function HomePage() {
  const { i18n, t } = useTranslation();
  let lang = i18n.language;

  return (
    <div className="py-12">
      <Hero />
      <Category />
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <p>{t("description")}</p>
      <TextToSpeech />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title[lang]}
            description={card.description[lang]}
            image={card.image}
          />
        ))}
      </main>
    </div>
  );
}

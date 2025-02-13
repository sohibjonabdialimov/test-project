import category from "@/data/category.json";
import { useTranslation } from "react-i18next";
import CategoryCard from "../ui/CategoryCard";

export default function Category() {
  const { i18n } = useTranslation();
  let lang = i18n.language;
  return (
    <section className="catrgory w-[1400px] mx-auto">
      <h2 className="text-[#333333] text-[32px] leading-8 font-arial my-5 font-bold">Популярные категории</h2>
      <div className="grid grid-cols-6">
        {category.map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name[lang]}
            count={item.count[lang]}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function CategoryCard({ name, count, image }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <div>
        <Image src={image} alt={name} width={300} height={200} className="rounded-md" />
      </div>
      <div>
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{count}</p>
      </div>
    </div>
  );
}

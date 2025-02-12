"use client";

import Image from "next/image";

export default function Card({ title, description, image }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <Image src={image} alt={title} width={300} height={200} className="rounded-md" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

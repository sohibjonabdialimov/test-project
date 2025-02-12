"use client";
import { useState } from "react";

const TextToSpeech = () => {
  const [selectedText, setSelectedText] = useState("");

  // Foydalanuvchi tanlagan matnni olish
  const getSelectedText = () => {
    const text = window.getSelection().toString();
    setSelectedText(text);
  };

  // Tanlangan matnni ovoz chiqarish
  const speakText = () => {
    if (!selectedText) {
      alert("Iltimos, matnni belgilang!");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(selectedText);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Matnni tanlab ovoz chiqarish</h2>
      <p className="border p-4 my-2" onMouseUp={getSelectedText}>
        Ushbu paragraflardan bir qismini tanlang va tugmani bosing. 
        Next.js bilan SpeechSynthesis API ishlashini tekshirish uchun.
      </p>
      <button
        onClick={speakText}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Ovoz chiqarish
      </button>
    </div>
  );
};

export default TextToSpeech;

"use client";
import { useState } from "react";

const TextToSpeech = () => {
  const [selectedText, setSelectedText] = useState("");

  const getSelectedText = () => {
    const text = window.getSelection().toString();
    setSelectedText(text);
  };
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
        On our news site and in classrooms across the world, News Decoder
        informs, connects and empowers young people to be engaged citizens and
        changemakers locally, nationally and globally.
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

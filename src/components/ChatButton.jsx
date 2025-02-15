"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChatButton({ openChat, setOpenChat }) {
  const { t } = useTranslation();
  const [value, setValue] = useState(null);
  console.log(openChat);
  
  return (
    <div
      style={{ boxShadow: "10px 5px 20px 8px rgba(0, 0, 0, 0.3)" }}
      className={`fixed bottom-0 right-10 z-20 w-[20rem] bg-white shadow-lg rounded-lg border border-gray-200 ${
        openChat ? "flex flex-col" : "hidden"
      }`}
    >
      <div
        onClick={() => {
          setOpenChat(false);
        }}
        className="absolute -top-0 -left-12 bg-[#e5e5e57a] cursor-pointer border-[1.5px] border-[#333333] w-[35px] h-[35px] flex justify-center items-center rounded-full"
      >
        <button type="button">
          <i className="fa-solid fa-xmark text-[#333333]"></i>
        </button>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-linear1 to-linear2 text-white p-3 rounded-t-lg">
        <h4>{t("chatbot_title")}</h4>
        <span className="text-[#b3aeae] font-normal text-xs">
          {t("chatbot_op")}
        </span>
      </div>

      <div className="p-4 space-y-3 h-60 overflow-y-auto flex flex-col">
        <div className="bg-gray-200 text-sm p-2 rounded-lg justify-end">
          {t("chatbot_hello")}
        </div>
        <div className="self-end bg-blue-500 text-sm text-white p-2 rounded-lg inline-block">
          {t("chatbot_user")}
        </div>
      </div>

      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t("chatbot_text")}
          className="flex-1 p-2 border rounded-md outline-none"
        />
        <button
          className={`ml-2 bg-blue-600 text-white p-2 w-[40px] aspect-square rounded-full ${
            value ? "bg-blue-600" : "bg-[#d8d7d77a]"
          }`}
        >
          <i className="fa-solid fa-arrow-up "></i>
        </button>
      </div>
    </div>
  );
}

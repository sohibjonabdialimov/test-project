"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./chatbot.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import EmojiPicker from "emoji-picker-react";

const countries = [
  { code: "uz", name: "Uzbekistan", dialCode: "+998", flag: "uz" },
  { code: "us", name: "United States", dialCode: "+1", flag: "um" },
  { code: "ru", name: "Russia", dialCode: "+7", flag: "ru" },
  { code: "tr", name: "Turkey", dialCode: "+90", flag: "tr" },
];

const schema = z.object({
  email: z.string().email("Valid email required"),
  isAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

export default function ChatButton({ openChat, setOpenChat }) {
  const { t } = useTranslation();
  const [isClick, setIsClick] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNumberFocus, setIsNumberFocus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [file, setFile] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      console.log("File selected:", selectedFile.name);
    }
    console.log(file);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.code === e.target.value);
    setSelectedCountry(country);
    setPhoneNumber(country.dialCode);
    setPhoneNumber("");

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(
          country.dialCode.length,
          country.dialCode.length
        );
      }
    }, 0);
  };

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const dialCode = selectedCountry.dialCode.replace(/\D/g, "");
    let number = rawValue.startsWith(dialCode)
      ? rawValue.slice(dialCode.length)
      : rawValue;

    setPhoneNumber(number);
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div
      style={{ boxShadow: "10px 5px 20px 8px rgba(0, 0, 0, 0.3)" }}
      className={`fixed bottom-0 right-10 z-20 w-[20rem] bg-white shadow-lg rounded-tr-[30px] rounded-tl-xl ${
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
      <div className="rounded-tr-[30px] rounded-tl-xl relative overflow-hidden flex flex-col bg-gradient-to-r from-linear1 to-linear2 text-[#F0F1F1FF] p-3 rounded-t-lg">
        <h4>{t("chatbot_title")}</h4>
        <span className="text-[#b3aeae] font-normal text-xs">
          {t("chatbot_op")}
        </span>
        <div className="absolute -top-5 -right-10 w-[60px] h-[60px] rounded-full bg-[#18C139FF]"></div>
      </div>

      <div className="p-4 space-y-3 h-72 overflow-y-auto flex flex-col">
        <p className="text-center text-[#88919BFF] mb-3">12.02.2025</p>
        <div className="relative self-end bg-[#18C139FF] text-sm mb-6 text-white p-3 pr-16 rounded-xl inline-block">
          <p>Здравствуйте!</p>
          <div className="absolute bottom-1 right-1.5 flex items-center gap-1 text-[#fff9]">
            <p className="text-xs">22:31</p>
            <i className="fa-solid fa-check text-xs"></i>
          </div>
        </div>
        <p className="text-center text-[#88919BFF] mb-3">
          Представьтесь в чате
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md border-t-[3px] border-[#18C139FF]"
          noValidate
        >
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-[#88919BFF] focus:border-[#18C139FF]"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 text-[#88919BFF] focus:text-[#18C139FF]"
            >
              Ваше имя
            </label>
            {nameValue ? (
              <i className="fa-solid fa-check absolute right-2 top-3 text-[#18C139FF]"></i>
            ) : null}
          </div>

          <label
            htmlFor="phone"
            className={`block text-[#88919BFF] text-sm mb-1 ${
              isNumberFocus ? "text-[#18C139FF]" : "text-[#88919BFF]"
            }`}
          >
            Ваш телефон
          </label>
          <div className="relative w-full mb-3">
            <div className="flex items-center border-0 border-b-2 border-[#88919BFF] overflow-hidden">
              <select
                id="phone"
                onFocus={() => setIsNumberFocus(true)}
                onBlur={() => setIsNumberFocus(false)}
                className="px-3 py-2 bg-white border-none outline-none"
                onChange={handleCountryChange}
                value={selectedCountry.code}
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag}
                  </option>
                ))}
              </select>

              <input
                ref={inputRef}
                onFocus={() => setIsNumberFocus(true)}
                onBlur={() => setIsNumberFocus(false)}
                type="tel"
                id="phone"
                name="phone"
                value={selectedCountry.dialCode + phoneNumber}
                onChange={handlePhoneChange}
                className="w-full py-2 px-4 outline-none"
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="email"
              {...register("email")}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder=" "
              className={`pt-3 focus: pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 
                ${
                  !isClick && !errors.email
                    ? "border-[#88919BFF] focus:border-[#18C139FF]"
                    : ""
                }
                ${
                  !errors.email && isClick
                    ? "border-[#18C139FF] focus:border-[#18C139FF]"
                    : ""
                }
                ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
            />
            <label
              htmlFor="email"
              className={`absolute duration-300 top-3 -z-1 origin-0 
                ${!isClick && !emailFocus ? "text-gray-500" : ""}
                ${emailFocus && !isClick ? "text-[#18C139FF]" : ""}
                ${!errors.email && isClick ? "text-[#18C139FF]" : ""}
                ${errors.email ? "text-red-500" : ""}`}
            >
              Ваш e-mail
            </label>
            {errors.email ? (
              <i className="fa-solid fa-circle-exclamation absolute right-2 top-3 text-red-500"></i>
            ) : null}
            {!errors.email && isClick ? (
              <i className="fa-solid fa-check absolute right-2 top-3 text-[#18C139FF]"></i>
            ) : null}
          </div>

          <button
            onClick={() => {
              setIsClick(true);
            }}
            type="primary"
            htmlType="submit"
            className="bg-green-500 w-full py-2 text-white rounded-md hover:bg-green-600 transition"
          >
            Отправить
          </button>
        </form>
        <div>
          <p className="text-[#9aa4ae] pl-[50px] text-[13px] mb-[2px]">
            Чеблыков Максим
          </p>
          <div className="flex gap-2 items-center justify-start">
            <div className="w-[35px] h-[35px] rounded-full bg-[#E8E8EAFF] flex justify-center items-end overflow-hidden">
              <i className="fa-solid fa-user text-[#BFC0C5FF] text-2xl"></i>
            </div>
            <div className="chat_text relative  bg-[#F1F0F0FF] text-sm text-[#333] p-3 pr-16 rounded-xl inline-block">
              <p>Здравствуйте!</p>
              <div className="absolute bottom-1 right-1.5 flex items-center gap-1 text-[#66666699]">
                <p className="text-xs">11:31</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative self-end bg-[#18C139FF] text-sm mb-6 text-white p-3 pr-16 rounded-xl inline-block">
          <p>Здравствуйте!</p>
          <div className="absolute bottom-1 right-1.5 flex items-center gap-1 text-[#fff9]">
            <p className="text-xs">22:31</p>
            <i className="fa-solid fa-check text-xs"></i>
          </div>
        </div>
      </div>

      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("chatbot_text")}
          className="flex-1 p-2 border rounded-md outline-none"
        />
        <button
          disabled={!message}
          className={`ml-2 text-white p-2 w-[40px] aspect-square rounded-full ${
            message ? "bg-blue-600" : "bg-[#d8d7d77a]"
          }`}
        >
          <i className="fa-solid fa-arrow-up "></i>
        </button>
      </div>
      <div className="flex items-center p-2 border-t relative">
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <label className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer">
          <i className="fa-solid fa-paperclip"></i>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        <button
          onClick={() => setShowPicker(!showPicker)}
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <i className="fa-regular fa-face-smile"></i>
        </button>
        {showPicker && (
          <div className="absolute bottom-full mb-2 right-0">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import { Button, Checkbox } from "antd";
import { ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const countries = [
  { code: "uz", name: "Uzbekistan", dialCode: "+998", flag: "🇺🇿" },
  { code: "us", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "ru", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "tr", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
];

export default function ChatButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const inputRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const validateInputs = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email required";
    if (!phoneNumber.trim() || phoneNumber.length < 7) newErrors.phone = "Valid phone required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("Siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirishingiz kerak!");
      return;
    }
    if (validateInputs()) {
      console.log("Form submitted", { name, email, phoneNumber });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md border-t-4 border-green-500">
      {/* Name Input */}
      <div className="relative mb-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full border-b-2 p-2 outline-none ${
            errors.name ? "border-red-500" : "border-gray-300 focus:border-green-500"
          }`}
          placeholder="Ваше имя"
        />
        {errors.name ? (
          <ExclamationCircleOutlined className="absolute right-2 top-3 text-red-500" />
        ) : name ? (
          <CheckCircleOutlined className="absolute right-2 top-3 text-green-500" />
        ) : null}
      </div>

      {/* Email Input */}
      <div className="relative mb-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border-b-2 p-2 outline-none ${
            errors.email ? "border-red-500" : "border-gray-300 focus:border-green-500"
          }`}
          placeholder="Ваш e-mail"
        />
        {errors.email ? (
          <ExclamationCircleOutlined className="absolute right-2 top-3 text-red-500" />
        ) : email ? (
          <CheckCircleOutlined className="absolute right-2 top-3 text-green-500" />
        ) : null}
      </div>

      {/* Phone Input */}
      <div className="relative mb-5">
        <div className="flex items-center border-b-2">
          <select
            className="px-3 py-2 border-r border-gray-300 bg-white"
            onChange={(e) => setSelectedCountry(countries.find((c) => c.code === e.target.value))}
            value={selectedCountry.code}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode}
              </option>
            ))}
          </select>
          <input
            ref={inputRef}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
            className="w-full py-2 px-4 outline-none"
            placeholder="Ваш телефон"
          />
        </div>
        {errors.phone ? (
          <ExclamationCircleOutlined className="absolute right-2 top-3 text-red-500" />
        ) : phoneNumber ? (
          <CheckCircleOutlined className="absolute right-2 top-3 text-green-500" />
        ) : null}
      </div>

      {/* Agreement Checkbox */}
      <div className="flex items-center mb-4">
        <Checkbox checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} />
        <label className="ml-2 text-gray-600 text-sm">
          Я даю <a href="#" className="text-blue-500">согласие</a> на обработку персональных данных
        </label>
      </div>

      {/* Submit Button */}
      <Button type="primary" htmlType="submit" className="bg-green-500 w-full py-2 text-white rounded-md hover:bg-green-600 transition">
        Отправить
      </Button>
    </form>
  );
}

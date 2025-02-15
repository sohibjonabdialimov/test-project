"use client";

import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="relative w-40" ref={selectRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent text-gray-700 text-sm font-medium py-2 pl-3 pr-8 cursor-pointer flex justify-between items-center"
      >
        <span>{options.find((opt) => opt.value === selected)?.label}</span>

        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <ul
        className={`absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className="px-4 py-2 text-gray-700 text-sm cursor-pointer hover:bg-gray-200 transition-colors"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

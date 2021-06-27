import React from "react";

export const TInput = ({ type, value, placeholder, className, onChange }) => {
  const Class =
    className +
    " px-3 py-2 rounded-lg text-sm font-medium text-black bg-white outline-none border-2 border-gray-300 focus:border-PColor transition-all";
  return (
    <input
      type={type}
      className={Class}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export const NInput = ({ value, placeholder, className, onChange }) => {
  const Class =
    className +
    " px-3 py-2 rounded-lg text-sm font-medium text-black bg-white outline-none border-2 border-gray-300 focus:border-PColor transition-all";
  return (
    <input
      type="number"
      className={Class}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

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

export const InputLabel = ({
  label,
  type,
  value,
  placeholder,
  className,
  onChange,
}) => {
  const Class =
    className +
    " w-full px-3 py-2 rounded-lg text-sm font-medium text-black bg-white outline-none border-2 border-gray-300 focus:border-PColor transition-all";
  return (
    <div>
      <label className="block mb-2 text-sm text-PColor">{label}</label>
      <input
        type={type}
        className={Class}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const InputFile = ({ label, value, text, className, onChange }) => {
  return (
    <div className={className}>
      <label className="block mb-2 text-sm text-PColor">{label}</label>
      <label className="w-full flex flex-col items-center px-2 py-4 bg-white text-gray-400 rounded-lg shadow-md tracking-wide border cursor-pointer hover:bg-white hover:text-PColor">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">{text}</span>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

export const Checkbox = ({ text, className, checked }) => {
  return (
    <div className={className}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="h-5 w-5 text-PColor cursor-pointer outline-none rounded-md"
          checked={checked}
        />
        <span className="ml-2 font-bold text-PColor">{text}</span>
      </label>
    </div>
  );
};

import React from "react";

export const PButton = ({ children, className, onClick }) => {
  const Class =
    className +
    " px-8 py-2 whitespace-nowrap rounded-3xl text-sm font-medium text-white bg-PColor focus:outline-none border-2 border-PColor transition-all";
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
};

export const HButton = ({ children, className, onClick }) => {
  const Class =
    className +
    " px-8 py-2 whitespace-nowrap rounded-3xl text-sm font-medium text-PColor bg-white focus:outline-none border-2 border-PColor transition-all";
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
};

export const SButton = ({ children, className, onClick }) => {
  const Class =
    className +
    " px-8 py-2 whitespace-nowrap rounded-3xl text-sm font-medium text-white bg-SColor focus:outline-none border-2 border-SColor transition-all";
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
};

export const TButton = ({ children, className, onClick }) => {
  const Class =
    className +
    " px-4 sm:px-8 py-2 whitespace-nowrap rounded-3xl text-sm font-medium text-white bg-TColor focus:outline-none border-2 border-TColor transition-all";
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
};

export const TButtonMin = ({ children, className, onClick }) => {
  const Class =
    className +
    " px-4 py-1 whitespace-nowrap rounded-3xl text-sm font-medium text-white bg-TColor focus:outline-none border-2 border-TColor transition-all";
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const PLink = ({ children, className, to, onClick }) => {
  const Class =
    className +
    " px-8 py-2 rounded-3xl text-sm font-medium text-white bg-PColor focus:outline-none border-2 border-PColor transition-all";
  return (
    <Link className={Class} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export const HLink = ({ children, className, to, onClick }) => {
  const Class =
    className +
    " px-8 py-2 rounded-3xl text-sm font-medium text-PColor bg-white focus:outline-none border-2 border-PColor transition-all";
  return (
    <Link className={Class} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export const SLink = ({ children, className, to, onClick }) => {
  const Class =
    className +
    " px-8 py-2 rounded-3xl text-sm font-medium text-white bg-SColor focus:outline-none border-2 border-SColor transition-all";
  return (
    <Link className={Class} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export const TLink = ({ children, className, to, onClick }) => {
  const Class =
    className +
    " px-8 py-2 rounded-3xl text-sm font-medium text-white bg-TColor focus:outline-none border-2 border-TColor transition-all";
  return (
    <Link className={Class} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export const TextLink = ({ children, className, to, onClick }) => {
  const Class =
    className +
    " text-sm font-medium text-PColor focus:outline-none hover:text-TColor transition-all";
  return (
    <Link className={Class} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

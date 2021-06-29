import React from "react";
import { TButton } from "../Dcomponents/Button";

function Bid({ time, price, number }) {
  return (
    <div className="flex">
      <div className="px-4 sm:px-6 py-2 bg-AColor rounded-3xl w-full sm:w-auto">
        <h6 className="hidden sm:block text-white text-sm">
          <span className="font-bold">Time left: </span> {time}{" "}
          <span className="font-bold ml-3">High bid: </span> {price}
          <span className="font-bold ml-3">N° bids: </span> {number}
        </h6>
        <h6 className="sm:hidden block-inline text-white text-sm">
          <span className="font-bold">Time: </span>
          {time}
          <span className="font-bold ml-1">Bid: </span> {price}
        </h6>
      </div>
      <TButton className="ml-1 font-bold px-0">Place Bid</TButton>
    </div>
  );
}

export default Bid;

import React from "react";
import { TButton } from "../Dcomponents/Button";

function Bid({ time, price, number }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="px-6 py-2 bg-AColor rounded-3xl">
        <h6 className="text-white text-sm">
          <span className="font-bold">Time left: </span> {time}{" "}
          <span className="font-bold ml-3">High bid: </span> {price}
          <span className="font-bold ml-3">N° bids: </span> {number}
        </h6>
      </div>
      <TButton className="mx-auto sm:ml-4 mt-4 sm:mt-0">Place Bid</TButton>
    </div>
  );
}

export default Bid;

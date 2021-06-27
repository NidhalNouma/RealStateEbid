import React from "react";
import { PButton } from "../Dcomponents/Button";
import { TInput } from "../Dcomponents/Input";

function Filter({ close }) {
  return (
    <div className="pb-2">
      <div className="p-2 rounded-lg border-2 border-PColor">
        <Minmax type={"Price"} />
        <Minmax type={"Beds"} />
        <Minmax type={"Baths"} />
        <div className="flex w-full items-center justify-center pt-2">
          <PButton onClick={close}>Done</PButton>
        </div>
      </div>
    </div>
  );
}

export default Filter;

function Minmax({ type }) {
  return (
    <div className="mb-2 flex items-end justify-center">
      <div>
        <h2 className="my-1 font-bold text-PColor">{type}</h2>
        <TInput className="mr-2" placeholder={`Min ${type}`} type="number" />
      </div>
      <TInput placeholder={`Max ${type}`} type="number" />
    </div>
  );
}

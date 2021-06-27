import React from "react";
import { PButton } from "../Dcomponents/Button";

function Filter({ close }) {
  return (
    <div className="pb-2">
      <div className="p-2 rounded-lg border-2 border-PColor">
        <div className="flex w-full items-center justify-center">
          <PButton onClick={close}>Done</PButton>
        </div>
      </div>
    </div>
  );
}

export default Filter;

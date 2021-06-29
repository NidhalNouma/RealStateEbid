import React, { useContext, useEffect } from "react";
import { PButton, TextButton } from "../Dcomponents/Button";
import { TInput } from "../Dcomponents/Input";
import { Propr, Filters } from "../Hooks/Product";

function Filter({ close, f, setF }) {
  const p = useContext(Propr);

  useEffect(() => {
    Filters(p, f);
  }, [f]);

  return (
    <div className="pb-2">
      <div className="p-2 rounded-lg border-2 border-PColor">
        <Minmax
          type={"Price"}
          m={f.price}
          setMax={(v) =>
            setF((pf) => {
              return { ...pf, price: { ...pf.price, max: v } };
            })
          }
          setMin={(v) =>
            setF((pf) => {
              return { ...pf, price: { ...pf.price, min: v } };
            })
          }
        />
        <Minmax
          type={"Beds"}
          m={f.beds}
          setMax={(v) =>
            setF((pf) => {
              return { ...pf, beds: { ...pf.beds, max: v } };
            })
          }
          setMin={(v) =>
            setF((pf) => {
              return { ...pf, beds: { ...pf.beds, min: v } };
            })
          }
        />
        <Minmax
          type={"Baths"}
          m={f.baths}
          setMax={(v) =>
            setF((pf) => {
              return { ...pf, baths: { ...pf.baths, max: v } };
            })
          }
          setMin={(v) =>
            setF((pf) => {
              return { ...pf, baths: { ...pf.baths, min: v } };
            })
          }
        />
        <div className="flex w-full items-center justify-around pt-2">
          <TextButton
            onClick={() =>
              setF({
                baths: { min: "", max: "" },
                beds: { min: "", max: "" },
                price: { min: "", max: "" },
              })
            }
          >
            Reset
          </TextButton>
          <PButton onClick={close}>Done</PButton>
        </div>
      </div>
    </div>
  );
}

export default Filter;

function Minmax({ type, m, setMax, setMin }) {
  return (
    <div className="mb-2 flex items-end justify-center">
      <div className="w-5/12 mr-2">
        <h2 className="my-1 font-bold text-PColor">{type}</h2>
        <TInput
          className="w-full"
          placeholder={`Min ${type}`}
          type="number"
          value={m.min}
          onChange={(e) => {
            if (checkNumber(e.target.value)) setMin(e.target.value);
          }}
        />
      </div>
      <TInput
        className="w-5/12"
        placeholder={`Max ${type}`}
        type="number"
        value={m.max}
        onChange={(e) => {
          if (checkNumber(e.target.value)) setMax(e.target.value);
        }}
      />
    </div>
  );
}

function checkNumber(v) {
  if (v < 0) return false;
  if (parseInt(v) === NaN) return false;
  return true;
}

import React from "react";
import { TButtonMin } from "../Dcomponents/Button";
import { Link } from "react-router-dom";

import imgHouse from "../Assets/house.jpg";

function CardHome({ p, time, to }) {
  console.log(p);
  const img = p.Media ? p.Media[0].MediaURL : null;
  return (
    <div>
      <Link to={to}>
        <div className="relative">
          <img
            src={img ? img : imgHouse}
            onError={(e) => (e.target.src = imgHouse)}
            alt="home Img"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-2 left-1.5 px-3 py-2 bg-AColor rounded-3xl">
            <h6 className="text-white text-sm">
              <span className="font-bold">Time: </span> {time}{" "}
              <span className="font-bold ml-3">Bid: </span> {p.ListPrice}
            </h6>
          </div>
        </div>
      </Link>
      <h3 className="line-clamp-2 font-bold text-PColor text-base my-1">
        {p.TaxLegalDescription}
      </h3>
      <p className="line-clamp-2 mb-1 text-tiny">{p.SyndicationRemarks}</p>
      <div className="flex items-center justify-between">
        <span className="text-TColor text-sm">{p.UnparsedAddress}</span>
        <TButtonMin className="px-1">Place Bid</TButtonMin>
      </div>
    </div>
  );
}

export default CardHome;

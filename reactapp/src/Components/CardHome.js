import React from "react";
import { TButtonMin } from "../Dcomponents/Button";
import { Link } from "react-router-dom";

function CardHome({ title, description, img, location, time, bid, to }) {
  return (
    <div>
      <Link to={to}>
        <div className="relative">
          <img src={img} alt="home Img" />
          <div className="absolute bottom-2 left-1.5 px-3 py-2 bg-AColor rounded-3xl">
            <h6 className="text-white text-sm">
              <span className="font-bold">Time: </span> {time}{" "}
              <span className="font-bold ml-3">Bid: </span> {bid}
            </h6>
          </div>
        </div>
      </Link>
      <h3 className="font-bold text-PColor text-base my-1">{title}</h3>
      <p className="line-clamp-2 mb-1 text-tiny">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-TColor text-sm">{location}</span>
        <TButtonMin className="px-1">Place Bid</TButtonMin>
      </div>
    </div>
  );
}

export default CardHome;

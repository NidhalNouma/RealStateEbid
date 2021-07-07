import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const Propr = createContext(null);

export const PropFn = function () {
  const [p, setP] = useState(null);
  const [ap, setAP] = useState(null);

  return { p, setP, ap, setAP };
};

export const Search = function (p, s) {
  if (s.length === 0 || p.ap === null) return;
  s = s.toLowerCase();
  const r = p.ap.filter((i) => {
    let name = i.TaxLegalDescription;
    if (name && search(name, s)) return i;
    name = i.UnparsedAddress;
    if (name && search(name, s)) return i;

    return null;
  });

  p.setP(r);
};

export const Filters = function (p, f) {
  if (!f || p.ap === null) return;
  const r = p.ap.filter((i) => {
    let baths = i.BathroomsTotalInteger;
    let beds = i.BedroomsTotal;
    let price = i.ListPrice;

    if (baths && filterm(f.baths, baths))
      if (beds && filterm(f.beds, beds))
        if (price && filterm(f.price, price)) return i;

    return null;
  });

  p.setP(r);
};
// const URL = "https://api-demo.mlsgrid.com/v2/Property";
let URL = "https://api-demo.mlsgrid.com/v2/Property";
const query = "?$filter=OriginatingSystemName%20eq%20%27actris%27%20and%20StandardStatus+eq+Enums.StandardStatus%27Active%27%20and%20MlgCanView%20eq%20true&$expand=Media,PropertyRooms,PropertyUnitTypes"
URL = URL + query;
const TOKEN = "Bearer 41a797c94788d67990a87056dba42aacd54ca19b";

export const GetAll = function (p) {
  const get = async () => {
    try {
      const req = await axios.get(URL, {
        headers: {
          Authorization: TOKEN,
          // 'Content-Encoding': 'gzip,deflate',
          // 'Access-Control-Allow-Origin': '*',
        },
        // params: {
        //   $filter:
        //     "OriginatingSystemName eq 'actris' and ModificationTimestamp gt 2020-12-30T23:59:59.99Z",
        //   $expend: "Media,PropertyRooms,PropertyUnitTypes",
        // },
      });
      const data = req.data.value;
      if (p && p.p === null) p.setP(data);
      if (p && p.ap === null) p.setAP(data);
    } catch (e) {
      console.error(e);
    }

    // console.log(req.data.value);
  };

  get();

  return { get };
};

function search(name, s) {
  name = name.toLowerCase();
  if (name.indexOf(s) !== -1) {
    return true;
  }
  return false;
}

function filterm(f, n) {
  if (f.min && f.min >= 0 && n < f.min) return false;
  if (f.max && f.max > 0 && n > f.max) return false;
  if (f.max && f.max > 0 && n > f.max) return false;
  if (f.min && f.min >= 0 && n < f.min) return false;
  return true;
}

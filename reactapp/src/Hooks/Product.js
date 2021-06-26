import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api-demo.mlsgrid.com/v2/Property";
const URL1 =
  "https://api-demo.mlsgrid.com/v2/Property?$filter=OriginatingSystemName%20eq%20%27actris%27%20and%20ModificationTimestamp%20gt%202020-12-30T23:59:59.99Z&$expand=Media,PropertyRooms,PropertyUnitTypes";
const TOKEN = "Bearer 41a797c94788d67990a87056dba42aacd54ca19b";

export const GetAll = function () {
  const [p, setP] = useState(null);

  const get = async () => {
    try {
      const req = await axios.get(URL1, {
        headers: { Authorization: TOKEN },
        //   params: {
        //     $filter:
        //       "OriginatingSystemName%20eq%20%27actris%27%20and%20ModificationTimestamp%20gt%202020-12-30T23:59:59.99Z",
        //     $expend: "Media,PropertyRooms,PropertyUnitTypes",
        //   },
      });
      setP(req.data.value);
    } catch (e) {
      console.error(e);
    }

    // console.log(req.data.value);
  };

  useEffect(() => {
    get();
  }, []);

  return { p, get };
};

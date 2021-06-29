import React, { useContext, useState, useEffect } from "react";
import NavBarL from "../Components/NavBarL";
import CardHome from "../Components/CardHome";
import { AdHome, AdHomeMob } from "../Components/AdHome";
import BeatLoader from "react-spinners/BeatLoader";

import { GetAll, Propr } from "../Hooks/Product";

function Home() {
  const p = useContext(Propr);
  const [f, setF] = useState({
    baths: { min: "", max: "" },
    beds: { min: "", max: "" },
    price: { min: "", max: "" },
  });

  useEffect(() => {
    if (p.ap === null) {
      GetAll(p);
    }
  }, []);

  return (
    <div className="mx-4 md:mx-6 lg:mx-10">
      <NavBarL showSearch={true} f={f} setF={setF} />
      <div className="mt-6 flex justify-between">
        {p.p ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {p.p.map((i, ii) => {
              if (window.innerWidth < 840 && ii % 3 === 0 && ii !== 0)
                return (
                  <div key={ii} className="block sm:hidden h-64">
                    <AdHomeMob />
                  </div>
                );
              return <CardHome key={ii} p={i} time="6 days" />;
            })}
          </div>
        ) : (
          <div className="mx-auto mt-24">
            <BeatLoader
              color={"#903749"}
              loading={true}
              // css={override}
              size={30}
            />
          </div>
        )}
        <div className="ml-6 hidden sm:block">
          <AdHome />
          <AdHome />
          <AdHome />
          <AdHome />
          <AdHome />
          <AdHome />
        </div>
      </div>
      <div className="my-6"></div>
    </div>
  );
}

export default Home;

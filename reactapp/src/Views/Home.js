import React from "react";
import NavBarL from "../Components/NavBarL";
import CardHome from "../Components/CardHome";
import { AdHome, AdHomeMob } from "../Components/AdHome";
import BeatLoader from "react-spinners/BeatLoader";

import { GetAll } from "../Hooks/Product";

function Home() {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const { p } = GetAll();

  return (
    <div className="mx-4 md:mx-6 lg:mx-10">
      <NavBarL showSearch={true} />
      <div className="mt-6 flex justify-between">
        {p ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {p.map((i, ii) => {
              if (ii % 3 === 0 && ii !== 0)
                return (
                  <div className="block sm:hidden h-64">
                    <AdHomeMob />
                  </div>
                );
              return <CardHome key={ii} p={i} />;
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

import React from "react";
import NavBarL from "../Components/NavBarL";
import CardHome from "../Components/CardHome";
import AdHome from "../Components/AdHome";

function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="mx-10">
      <NavBarL />
      <div className="mt-6 flex justify-between">
        <div className="grid grid-cols-3 gap-8">
          {arr.map((i) => (
            <CardHome
              title="Test"
              description="Cupidatat aliqua incididunt laboris aliquip enim minim commodo anim et elit esse consectetur irure. Sunt minim dolore sunt aute esse velit sunt nisi in."
              location="Locust Valley, NY 11560"
              time="6 days"
              bid="$130,000.00"
              img="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg"
              to="/p/abz"
            />
          ))}
        </div>
        <div className="ml-6">
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

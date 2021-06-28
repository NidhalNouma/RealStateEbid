import React, { useState } from "react";
import NavBarL from "../Components/NavBarL";
import ImageGallery from "../Components/ImageGallery";
import { AdProp, AdHome } from "../Components/AdHome";
import Table from "../Components/Table";
import Bid from "../Components/Bid";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Prop(props) {
  const [p, setP] = useState(props.location ? props.location.p : null);
  console.log(p);

  return (
    <div className="mx-4 md:mx-6 lg:mx-10">
      <div>
        <NavBarL />
      </div>
      <div className="hidden sm:block py-4 w-full sticky top-0 z-10 bg-whiteTr">
        <Bid time="7 days" price="1,000,000.00" number="14" />
      </div>
      <div className="flex">
        <div>
          <ImageGallery images={images} className="mt-4" />
          <div className="mt-2 mb-4">
            <h1 className="text-PColor font-bold text-lg">House Title</h1>
          </div>
          <div className="block sm:hidden py-4 w-full sticky top-0 z-10 bg-whiteTr">
            <Bid time="7 days" price="1,000,000.00" number="14" />
          </div>
          <AdProp />
          <div className="block sm:flex my-8">
            <Table />
            <Table />
          </div>
          <AdProp />
          <div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovere d the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et
              Malorum” (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, “Lorem
              ipsum dolor sit amet..”, comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from “de
              Finibus Bonorum et Malorum” by Cicero are also reproduced i n
              their exact original form, accompanied by English versions from
              the 1914 translation by H. Rackham.
            </p>
          </div>
          <div className="mb-12"></div>
        </div>
        <div className="hidden sm:block ml-8 mt-4">
          <AdHome />
          <AdHome />
          <AdHome />
          <AdHome />
          <AdHome />
        </div>
      </div>
    </div>
  );
}

export default Prop;

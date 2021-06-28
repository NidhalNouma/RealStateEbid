import React from "react";
import NavBarL from "../Components/NavBarL";
import SignUpForm from "../Components/SignUpForm";

function GetStarted() {
  return (
    <div className="mx-4 md:mx-6 lg:mx-10 flex flex-col">
      <NavBarL />
      <div className="w-full">
        <div className="lg:w-5/12 my-8 mx-auto flex items-center justify-center border-PColor border-2 rounded-lg">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;

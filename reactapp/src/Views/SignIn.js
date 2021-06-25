import React from "react";
import NavBarL from "../Components/NavBarL";
import SignIn_img from "../Assets/SignIn-img.png";
import SignInForm from "../Components/SignInForm";

function SignIn() {
  return (
    <div className="mx-10 h-screen flex flex-col">
      <NavBarL />

      <div className="flex items-center justify-between mt-auto">
        <img src={SignIn_img} className="max-h-35/4h max-w-1/2" />
        <div className="w-5/12 m-8 flex items-center justify-center border-PColor border-2 rounded-lg">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

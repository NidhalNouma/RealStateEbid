import React from "react";
import NavBarL from "../Components/NavBarL";
import SignIn_img from "../Assets/SignIn-img.png";
import SignInForm from "../Components/SignInForm";

function SignIn() {
  return (
    <div className="mx-4 md:mx-6 lg:mx-10 h-screen flex flex-col">
      <NavBarL />

      <div className="block lg:flex items-center justify-between lg:mt-auto my-auto">
        <img
          src={SignIn_img}
          className="max-h-35/4h max-w-1/2 hidden lg:block"
        />
        <div className="lg:w-5/12 m-8 flex items-center justify-center border-PColor border-2 rounded-lg">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

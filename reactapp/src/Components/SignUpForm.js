import React from "react";
import { PButton } from "../Dcomponents/Button";
import { InputLabel, InputFile, Checkbox } from "../Dcomponents/Input";
import { TextLink } from "../Dcomponents/Links";
import routes from "../Constant/routes";

function SignInForm() {
  return (
    <div class="flex items-center bg-white w-11/12 md:w-9/12">
      <div class="container mx-auto">
        <div class="w-full mx-auto my-10">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-PColor">Sign up</h1>
            <p class="text-gray-500 dark:text-gray-400">
              Sign up to get an account
            </p>
          </div>
          <div class="m-7">
            <InputLabel
              label="User name"
              type="text"
              placeholder="user name"
              className="mb-4"
            />
            <InputLabel
              label="First name"
              type="text"
              placeholder="first name"
              className="mb-4"
            />
            <InputLabel
              label="Last name"
              type="text"
              placeholder="last name"
              className="mb-4"
            />
            <InputLabel
              label="Email Address"
              type="email"
              placeholder="email"
              className="mb-4"
            />
            <InputLabel
              label="Password"
              type="password"
              placeholder="password"
              className="mb-4"
            />
            <InputLabel
              label="Confirm password"
              type="password"
              placeholder="confirm password"
              className="mb-4"
            />
            <InputLabel
              label="Realtor email"
              type="email"
              placeholder="realtor email"
              className="mb-4"
            />
            <InputLabel
              label="Broker email"
              type="email"
              placeholder="broker email"
              className="mb-4"
            />
            <InputFile
              className="mb-4"
              label="Preapproved letter"
              text="Select a file"
            />
            <div className="mb-4 flex justify-between items-start flex-col">
              <TextLink className="mb-1">Terms and condition</TextLink>
              <TextLink>Privacy Policy</TextLink>
            </div>
            <Checkbox className="mb-4" text="I agree" />
            <div class="mb-6 flex items-center justify-center">
              <PButton>Sign up</PButton>
            </div>
            <p class="text-sm text-center text-gray-400">
              You have an account?{" "}
              <TextLink to={routes.signIn}>Sign in</TextLink>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

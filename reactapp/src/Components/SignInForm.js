import React from "react";
import { PButton } from "../Dcomponents/Button";
import { InputLabel } from "../Dcomponents/Input";
import { TextLink } from "../Dcomponents/Links";
import routes from "../Constant/routes";

function SignInForm() {
  return (
    <div class="flex items-center bg-white w-11/12 md:w-9/12">
      <div class="container mx-auto">
        <div class="w-full mx-auto my-10">
          <div class="text-center mb-6">
            <h1 class="my-3 text-3xl font-semibold text-PColor">Sign in</h1>
            <p class="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <InputLabel
            label="Email Address"
            type="email"
            placeholder="email"
            className="mb-6"
          />
          <InputLabel
            label="Password"
            type="password"
            placeholder="password"
            className="mb-6"
          />
          <div class="mb-6 flex items-center justify-between">
            <TextLink>Forgot password?</TextLink>
            <PButton>Sign in</PButton>
          </div>
          <p class="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?{" "}
            <TextLink to={routes.getStarted}>Sign up</TextLink>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

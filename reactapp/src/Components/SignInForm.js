import React from "react";
import { PButton } from "../Dcomponents/Button";

function SignInForm() {
  return (
    <div class="flex items-center bg-white w-11/12 md:w-9/12">
      <div class="container mx-auto">
        <div class="w-full mx-auto my-10">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-PColor">Sign in</h1>
            <p class="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div class="m-7">
            <form action="">
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm text-PColor">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <div class="flex justify-between mb-2">
                  <label
                    for="password"
                    class="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6 flex items-center justify-between">
                <a
                  href="#!"
                  class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </a>
                <PButton>Sign in</PButton>
              </div>
              <p class="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="#!"
                  class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Sign up
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

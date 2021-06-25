import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import routes from "../Constant/routes";

import { Disclosure } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { PLink, HLink } from "../Dcomponents/Links";

const navigation = [
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBarL() {
  return (
    <div className="sticky top-0 z-10">
      <Disclosure as="nav" className="bg-whiteTr">
        {({ open }) => (
          <div>
            <div className="">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to={routes.home}>
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? "text-gray-500 " : "text-PColor ",
                            "px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <SearchIcon className="block h-6 w-6" aria-hidden="true" />
                  <div className="mx-2"></div>
                  <HLink to={routes.getStarted}>Get Started</HLink>
                  <div className="mx-1"></div>
                  <PLink to={routes.signIn}>Sign In</PLink>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default NavBarL;

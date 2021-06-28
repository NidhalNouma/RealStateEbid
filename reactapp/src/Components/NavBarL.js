import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import routes from "../Constant/routes";

import { Disclosure } from "@headlessui/react";
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";
import { PLink, HLink } from "../Dcomponents/Links";

import SearchBox from "./SearchBox";
// import Filter from "./Filter";
import FilterP from "./FilterP";

const navigation = [
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBarL({ showSearch = false }) {
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <div id="navbar" className="sticky top-0 z-20">
      <Disclosure as="nav" className="bg-whiteTr">
        {({ open }) => (
          <div>
            <div className="">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Link to={routes.home}>
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-PColor hover:text-TColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                      {/* <img
                        className="block lg:hidden h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      /> */}
                      <img
                        className="hidden sm:block h-8 w-auto"
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
                            item.current ? "text-TColor " : "text-PColor ",
                            "px-3 py-2 rounded-md text-sm font-medium hover:text-TColor"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {showSearch && (
                    <div>
                      <button
                        className="mr-2"
                        onClick={() => setFilter(!filter)}
                      >
                        <AdjustmentsIcon
                          className="block h-6 w-6 cursor-pointer"
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        className={search ? "opacity-0" : "opacity-1"}
                        onClick={() => setSearch(!search)}
                      >
                        <SearchIcon
                          className="block h-6 w-6 cursor-pointer"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  )}
                  <div className="mx-0 sm:mx-2"></div>
                  <HLink className="hidden sm:block" to={routes.getStarted}>
                    Get Started
                  </HLink>
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
                        ? "text-TColor"
                        : "text-PColor hover:text-TColor",
                      "block px-3 py-1 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="py-2"></div>
                <HLink to={routes.getStarted}>Get Started</HLink>
                <div className="py-2"></div>
              </div>
            </Disclosure.Panel>
            {filter && (
              <div className="w-11/12 sm:w-9/12 lg:w-3/6 mx-auto">
                <FilterP filter={filter} close={() => setFilter(false)} />
              </div>
            )}
            {search && (
              <div className="w-11/12 sm:w-9/12 lg:w-3/6 mx-auto">
                <SearchBox close={() => setSearch(false)} />
              </div>
            )}
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default NavBarL;

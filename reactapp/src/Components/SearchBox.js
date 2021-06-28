import React, { useState } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";

function SearchBox({ close }) {
  const [search, setSearch] = useState("");
  return (
    <div className="pb-2 focInput">
      <div className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg mx-auto flex items-center justify-between">
        <input
          autoFocus={true}
          className="w-9/12 text-sm focus:outline-none"
          //   type="search"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <button>
            <SearchIcon
              className={
                (search.length > 0 ? "text-PColor" : "text-gray-300") +
                " block h-6 w-6 cursor-pointer hover:text-PColor"
              }
              aria-hidden="true"
            />
          </button>
          <button className="ml-2" onClick={close}>
            <XIcon
              className={
                "block h-7 w-7 cursor-pointer hover:text-PColor " +
                (search.length === 0 ? "text-PColor" : "text-gray-300")
              }
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;

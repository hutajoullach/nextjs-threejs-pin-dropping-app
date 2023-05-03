import { useMemo } from "react";

import { searchMenuList } from "../../constants";
import SearchMenu from "./search-menu";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] bg-white px-4 py-[3px] shadow-sm transition hover:shadow-md md:w-auto">
      <ul className="flex list-none flex-row items-center justify-between">
        <li
          onMouseOver={() => {}}
          className="flex flex-row items-center gap-2 text-sm text-gray-600"
        >
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">test text</span>
        </li>
        <li className="flex flex-row items-center gap-2 pl-5 text-sm text-gray-600">
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">test text</span>
        </li>
        <li className="flex flex-1 flex-row items-center gap-2 pl-5 text-sm text-gray-600">
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">test text</span>
        </li>
      </ul>

      <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
        <SearchMenu searchMenuList={searchMenuList} />
      </div>
    </div>
  );
};

export default Search;

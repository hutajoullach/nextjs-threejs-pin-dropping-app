import { useCallback, useMemo, useState } from "react";

import { searchMenuList, searchTab } from "../../constants";
import SearchMenu from "./search-menu";

import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

const Search = () => {
  const [activeSearchTab, setActiveSearchTab] = useState(searchTab.tabCenter);

  const toggleSearchTab = useCallback(
    (hoveredTab: string) => {
      setActiveSearchTab(hoveredTab);
    },
    [setActiveSearchTab]
  );

  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] bg-white px-1 py-[3px] shadow-sm transition hover:shadow-md md:w-auto">
      <ul className="flex list-none flex-row items-center justify-between">
        <li
          onMouseOver={() => toggleSearchTab(searchTab.tabLeft)}
          className="text-sm text-gray-600"
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-rose-500 p-1 text-white">
                <BiSearch size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.tabLeft}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.tabLeft && (
            <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
              <SearchMenu searchMenuList={searchMenuList} />
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.tabCenter)}
          className="text-sm text-gray-600"
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-rose-500 p-1 text-white">
                <BiSearch size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.tabCenter}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.tabCenter && (
            <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
              <SearchMenu searchMenuList={searchMenuList} />
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.tabRight)}
          className="flex flex-1 flex-row items-center gap-2 pl-5 text-sm text-gray-600"
        >
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">
            {searchTab.tabRight}
          </span>
          {activeSearchTab === searchTab.tabRight && (
            <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
              <SearchMenu searchMenuList={searchMenuList} />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Search;

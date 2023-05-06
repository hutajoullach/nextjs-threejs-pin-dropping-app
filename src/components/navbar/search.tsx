import { useCallback, useMemo, useState } from "react";

import { searchMenuList, searchTab } from "../../constants";
import SearchMenu from "./search-menu";

import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

const Search = () => {
  const [activeSearchTab, setActiveSearchTab] = useState(searchTab.tabCenter);

  const toggleSearchTab = useCallback(
    (hoveredTab: string, mouseEvent: string) => {
      if (mouseEvent === "enter") setActiveSearchTab(hoveredTab);

      if (mouseEvent === "leave") setActiveSearchTab("");
    },
    [setActiveSearchTab]
  );

  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] bg-white px-1 py-[3px] shadow-sm transition hover:shadow-md md:w-auto">
      <ul className="flex list-none flex-row items-center justify-between gap-2">
        <li
          onMouseOver={() => toggleSearchTab(searchTab.tabLeft, "enter")}
          onMouseLeave={() => toggleSearchTab(searchTab.tabLeft, "leave")}
          className="text-sm text-gray-600"
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-300 p-1 text-white">
                <BiSearch size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.tabLeft}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.tabLeft && (
            <div className="absolute left-1/2 top-[36px] -translate-x-1/2 transform bg-transparent p-3">
              <div className="overflow-hidden rounded-xl bg-white text-sm shadow-md">
                <SearchMenu searchMenuList={searchMenuList} />
              </div>
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.tabCenter)}
          className="text-sm text-gray-600"
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-0.5 hover:text-white group-hover:from-green-400 group-hover:to-blue-600">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-300 p-1 text-white">
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
          className="text-sm text-gray-600"
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 group-hover:from-teal-300 group-hover:to-lime-300">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-300 p-1 text-white">
                <BiSearch size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.tabRight}
              </span>
            </div>
          </div>
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

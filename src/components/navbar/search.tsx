import { useCallback, useState } from "react";

import {
  searchTab,
  hotspotSearchMenuList,
  globalApiSearchMenuList,
  exploreSearchMenuList,
} from "../../constants";
import SearchMenu from "./search-menu";

import { GoGlobe, GoRocket, GoSquirrel } from "react-icons/go";
import {
  GiWorld,
  GiPlanetConquest,
  GiPeriscope,
  GiCrowNest,
  GiConqueror,
  GiSeaCreature,
  GiPlesiosaurus,
} from "react-icons/gi";
// import { motion } from "framer-motion";

const Search = () => {
  const [activeSearchTab, setActiveSearchTab] = useState("");

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
          onMouseOver={() => toggleSearchTab(searchTab.left.name, "enter")}
          onMouseLeave={() => toggleSearchTab(searchTab.left.name, "leave")}
          className="text-sm text-gray-600"
          key={searchTab.left.name}
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-800 p-1 text-white">
                <GiConqueror size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.left.name}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.left.name && (
            <div className="sm:-translate-x-1/5 absolute left-0 top-[36px] transform bg-transparent py-3 sm:left-auto md:-translate-x-1/3">
              <div className="overflow-hidden rounded-xl bg-white text-sm shadow-md">
                <SearchMenu
                  searchMenuList={hotspotSearchMenuList}
                  searchTabDesc={searchTab.left}
                />
              </div>
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.center.name, "enter")}
          onMouseLeave={() => toggleSearchTab(searchTab.center.name, "leave")}
          className="text-sm text-gray-600"
          key={searchTab.center.name}
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-0.5 hover:text-white group-hover:from-green-400 group-hover:to-blue-600">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-800 p-1 text-white">
                <GiWorld size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.center.name}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.center.name && (
            <div className="absolute left-0 top-[36px] transform bg-transparent py-3 sm:left-auto sm:-translate-x-1/3 md:-translate-x-1/3">
              <div className="overflow-hidden rounded-xl bg-white text-sm shadow-md">
                <SearchMenu
                  searchMenuList={globalApiSearchMenuList}
                  searchTabDesc={searchTab.center}
                />
              </div>
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.right.name, "enter")}
          onMouseLeave={() => toggleSearchTab(searchTab.right.name, "leave")}
          className="text-sm text-gray-600"
          key={searchTab.right.name}
        >
          <div className="group flex flex-row rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 hover:text-white group-hover:from-teal-300 group-hover:to-lime-300">
            <div className="flex flex-row gap-1 rounded-full bg-white px-2 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              <div className="rounded-full bg-slate-800 p-1 text-white">
                <GiPeriscope size={18} />
              </div>
              <span className="flex items-center justify-center font-semibold">
                {searchTab.right.name}
              </span>
            </div>
          </div>
          {activeSearchTab === searchTab.right.name && (
            <div className="absolute left-0 top-[36px] transform bg-transparent py-3 sm:left-auto sm:-translate-x-3/4 md:-translate-x-1/3">
              <div className="overflow-hidden rounded-xl bg-white text-sm shadow-md">
                <SearchMenu
                  searchMenuList={exploreSearchMenuList}
                  searchTabDesc={searchTab.right}
                />
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Search;

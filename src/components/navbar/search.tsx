import { useCallback, useMemo, useState } from "react";

import { searchMenuList, searchTab } from "../../constants";
import SearchMenu from "./search-menu";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [activeSearchTab, setActiveSearchTab] = useState(searchTab.tab2);

  const toggleSearchTab = useCallback(
    (hoveredTab: string) => {
      setActiveSearchTab(hoveredTab);
    },
    [setActiveSearchTab]
  );

  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] bg-white px-4 py-[3px] shadow-sm transition hover:shadow-md md:w-auto">
      <ul className="flex list-none flex-row items-center justify-between">
        <li
          onMouseOver={() => toggleSearchTab(searchTab.tab1)}
          className="flex flex-row items-center gap-2 text-sm text-gray-600"
        >
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          {activeSearchTab === searchTab.tab1 && (
            <>
              <span className="hidden font-semibold sm:block">test text</span>
              <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
                <SearchMenu searchMenuList={searchMenuList} />
              </div>
            </>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.tab2)}
          className="flex flex-row items-center gap-2 pl-5 text-sm text-gray-600"
        >
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">test text</span>
          {activeSearchTab === searchTab.tab2 && (
            <div className="absolute top-[47px] overflow-hidden rounded-xl bg-white text-sm shadow-md">
              <SearchMenu searchMenuList={searchMenuList} />
            </div>
          )}
        </li>

        <li
          onMouseOver={() => toggleSearchTab(searchTab.tab3)}
          className="flex flex-1 flex-row items-center gap-2 pl-5 text-sm text-gray-600"
        >
          <div className="rounded-full bg-rose-500 p-1 text-white">
            <BiSearch size={23} />
          </div>
          <span className="hidden font-semibold sm:block">test text</span>
          {activeSearchTab === searchTab.tab3 && (
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

import { useCallback } from "react";
import { useRouter } from "next/router";

import { IconType } from "react-icons";

type MenuItemProps = {
  id: string;
  title: string;
  icon: IconType;
  url: string;
};

const MenuItem = ({ id, title, icon: Icon, url }: MenuItemProps) => {
  return (
    <>
      <li key={id} className="flex items-center text-sm hover:text-gray-700">
        <a
          target="_blank"
          href={`${url}`}
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <Icon size={21} />
          <span>{title}</span>
        </a>
      </li>
    </>
  );
};

type SearchMenuProps = {
  searchMenuList: { id: string; title: string; icon: IconType; url: string }[];
  searchTabDesc: { name: string; title: string; desc: string };
};

const SearchMenu = ({ searchMenuList, searchTabDesc }: SearchMenuProps) => {
  const router = useRouter();

  return (
    <div className="flex w-screen flex-col px-8 py-6 sm:w-96">
      <div className="flex flex-col justify-start gap-1 px-3 pb-4">
        <h3 className="text-sm font-semibold text-blue-900">
          {searchTabDesc.title}
        </h3>
        <span>{searchTabDesc.desc}</span>
      </div>
      {/* <hr /> */}
      <div className="flex justify-evenly gap-4 pb-1">
        <ul className="space-y-3 text-sm font-semibold text-gray-500">
          {searchMenuList.map((list, index) => (
            <>
              {index < 3 && (
                <MenuItem
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  icon={list.icon}
                  url={list.url}
                />
              )}
            </>
          ))}
        </ul>

        <ul className="space-y-3 text-sm font-semibold text-gray-500">
          {searchMenuList.map((list, index) => (
            <>
              {index >= 3 && index <= 6 && (
                <MenuItem
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  icon={list.icon}
                  url={list.url}
                />
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchMenu;

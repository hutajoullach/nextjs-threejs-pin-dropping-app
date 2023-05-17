import { useCallback } from "react";
import { useRouter } from "next/router";

import { IconType } from "react-icons";

type MenuItemProps = {
  onClick: () => void;
  id: string;
  title: string;
  icon: IconType;
};

const MenuItem = ({ onClick, id, title, icon: Icon }: MenuItemProps) => {
  return (
    <>
      <li
        onClick={onClick}
        className="flex items-center gap-8 text-base hover:text-gray-700"
        key={id}
      >
        <Icon size={21} />
        <span>{title}</span>
      </li>
    </>
  );
};

type SearchMenuProps = {
  searchMenuList: { id: string; title: string; icon: IconType }[];
  searchTabDesc: { name: string; title: string; desc: string };
};

const SearchMenu = ({ searchMenuList, searchTabDesc }: SearchMenuProps) => {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push("/").catch((err) => console.error(err));
    },
    [router]
  );

  return (
    <div className="flex w-screen flex-col px-8 py-4 sm:w-96">
      <div className="flex flex-col justify-start gap-1 px-3 pb-4">
        <h3 className="text-sm font-semibold text-blue-900">
          {searchTabDesc.title}
        </h3>
        <span>{searchTabDesc.desc}</span>
      </div>
      {/* <hr /> */}
      <div className="flex justify-evenly pb-1">
        <ul className="space-y-3 text-sm font-semibold text-gray-500">
          {searchMenuList.map((list, index) => (
            <>
              {index < 3 && (
                <MenuItem
                  key={list.id}
                  onClick={() => handleClick}
                  id={list.id}
                  title={list.title}
                  icon={list.icon}
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
                  onClick={() => handleClick}
                  id={list.id}
                  title={list.title}
                  icon={list.icon}
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

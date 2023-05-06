import { useCallback } from "react";
import { useRouter } from "next/router";

type MenuItemProps = {
  onClick: () => void;
  id: string;
  title: string;
};

const MenuItem = ({ onClick, id, title }: MenuItemProps) => {
  return (
    <li onClick={onClick} key={id} className="hover:text-gray-700">
      {title}
    </li>
  );
};

type SearchMenuProps = {
  searchMenuList: { id: string; title: string; icon: string }[];
};

const SearchMenu = ({ searchMenuList }: SearchMenuProps) => {
  const router = useRouter();

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  }, []);

  return (
    <div className="flex cursor-pointer flex-col items-center px-8 py-4">
      <ul className="space-y-3 text-sm font-semibold text-gray-500">
        {searchMenuList.map((list) => (
          <MenuItem
            onClick={() => handleClick}
            id={list.id}
            title={list.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchMenu;

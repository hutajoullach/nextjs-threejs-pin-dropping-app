import { useCallback, useState } from "react";

type MenuItemProps = {
  onClick: () => void;
  label: string;
};

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <li onClick={onClick} className="hover:text-gray-700">
      {label}
    </li>
  );
};

const SearchMenu = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center px-8 py-4">
      <ul className="space-y-3 text-sm font-semibold text-gray-500">
        <MenuItem onClick={() => {}} label="label 1" />
        <MenuItem onClick={() => {}} label="label 2" />
        <MenuItem onClick={() => {}} label="label 3" />
      </ul>
    </div>
  );
};

export default SearchMenu;

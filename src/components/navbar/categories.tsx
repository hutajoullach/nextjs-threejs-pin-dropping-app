import { usePathname, useSearchParams } from "next/navigation";

import { categories } from "../../constants";
import theme from "../../styles/styles";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div
      className={`${theme.h.categoriesBar} ${theme.top.categoriesBar} ${theme.bg.categoriesBarBackground}`}
    >
      <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
        {/* {categories.map((item) => (
        <CategoryBox 
          key={item.label}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        />
      ))} */}
      </div>
    </div>
  );
};

export default Categories;

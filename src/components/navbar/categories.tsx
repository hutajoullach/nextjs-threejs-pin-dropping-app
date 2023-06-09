import { usePathname, useSearchParams } from "next/navigation";

import { categories } from "../../constants";
import theme from "../../styles/styles";
import CategoryBox from "../category-box";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div
      className={`${theme.h.categoriesBar} ${theme.top.categoriesBar} ${theme.bg.categoriesBarBackground} flex justify-center`}
    >
      <div className="flex flex-row items-center justify-between gap-2 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

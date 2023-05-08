import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import theme from "../styles/styles";

import qs, { ParsedQuery } from "query-string";
import { IconType } from "react-icons";

type CategoryBoxProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // let currentQuery = {};

    let currentQuery: Record<string, string> = {};

    // if (params) {
    //   currentQuery = qs.parse(params.toString());
    // }

    if (params) {
      currentQuery = qs.parse(params.toString()) as Record<string, string>;
    }

    // const updatedQuery: any = {
    //   ...currentQuery,
    //   category: label,
    // };

    const updatedQuery: Record<string, string> = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border px-3 py-1 transition hover:border-neutral-800 hover:text-neutral-800
        ${selected ? "border-2" : "border-2"}
        ${selected ? "border-neutral-800" : "border-neutral-500"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={21} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;

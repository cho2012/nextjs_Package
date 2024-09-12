import Link from "next/link";

import React from "react";

interface Props {
  item: { title: string; url: string };
  index: number;
  setSelectedPageNum: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedPageNum: number | undefined;
}

const HeaderNav: React.FC<Props> = ({
  item,
  index,
  setSelectedPageNum,
  selectedPageNum,
}) => {
  return (
    <Link
      href={item.url}
      key={index}
      onClick={() => {
        setSelectedPageNum(index);
      }}
    >
      <div
        className={`border-b-2 ${
          selectedPageNum === index ? "border-red-400" : "border-white"
        } hover:border-red-400`}
      >
        {" "}
        <div className="py-1">{item.title}</div>
      </div>
    </Link>
  );
};

export default HeaderNav;

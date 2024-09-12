"use client";
import { menu } from "@/constants";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import Image from "next/image";
import Ai from "@/app/image/ai.png";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  type MenuItem = {
    title: string;
    url: string;
  };

  const array: MenuItem[] = [
    { title: "Modal", url: "/content/modal" },
    { title: "Research", url: "/content/research" },
    { title: "Innovation", url: "/content/innovation" },
    { title: "Admissions + Aid", url: "/content/admissions-aid" },
    { title: "Campus", url: "/content/campus" },
    { title: "Life", url: "/content/life" },
    { title: "News", url: "/content/news" },
    { title: "Alumni", url: "/content/alumni" },
    { title: "About", url: "/content/about" },
    { title: "Tongle", url: "/content/tongle" },
  ];

  const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]];

  const block: MenuItem[][] = [];

  function loof({ rowSize: size }: { rowSize: number }) {
    for (let i = 0; i < array.length; i += size) {
      const items: MenuItem[] = [];
      for (let j = 0; j < size; j += 1) {
        items.push(array[i + j]);
      }
      block.push(items);
    }
    console.log(block);
  }

  loof({ rowSize: 3 });

  return (
    <footer className="bg-white text-black h-[150px] p-[30px] flex items-center  gap-[100px]">
      <Image
        src={Ai}
        alt={""}
        className="w-[50px] border-black border-[1px]"
      ></Image>
      <div className="text-[25px] text-[#9bffad] ">the mint case</div>
      <div className="flex gap-[15px]  font-[50]  ">
        {block.map((item, index) => (
          <div className="flex flex-col" key={index}>
            {item.map(
              (subItem, index) =>
                subItem && (
                  <div
                    key={index}
                    className="border-l-[1px] pl-[15px] flex justify-end"
                  >
                    <Link href={subItem.url}>{subItem.title}</Link>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import BigUserIcon from "../../icon/biguserIcon";
import React, { useContext, useState } from "react";
import { menu } from "@/constants";
import { IoMenu } from "react-icons/io5";
import HeaderNav from "./headerNav";
import ModlieNav from "./mobileNav";
import { UserContext } from "@/utils/userContext";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [selectedPageNum, setSelectedPageNum] = useState<number | undefined>();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const userData = useContext(UserContext);

  console.log(userData);

  return (
    <header className="relative h-[70px] border-b flex bg-white text-black ">
      <div className="w-[1200px] mx-auto flex itens-center">
        <Link
          className="text-[2rem] flex items-center mx-8"
          onClick={() => setShowMobileMenu(false)}
          href={"/"}
        >
          AI
        </Link>
        <div className=" hidden w-[800px] font-[50] justify-around xl:flex  mx-auto items-center">
          {menu.map((item, index) => (
            <HeaderNav
              key={index}
              item={item}
              index={index}
              selectedPageNum={selectedPageNum}
              setSelectedPageNum={setSelectedPageNum}
            />
          ))}
        </div>
        <div className="flex items-center">
          <div className="mx-8 font-[50] whitespace-nowrap">
            {userData?.user?.name ? (
              <div className="">{userData?.user?.name}</div>
            ) : (
              <div className="gap-[10px] flex whitespace-nowrap">
                <div className="font-bold">sign in</div>&<div>sign up</div>
              </div>
            )}
          </div>
          <div
            className="mx-8"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <IoMenu size={50} className="flex mx-8 xl:hidden items-center" />
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="absolute flex flex-col xl:hidden top-20 left-4 text-xl  bg-white">
          {menu.map((item, index) => (
            <ModlieNav
              key={index}
              item={item}
              index={index}
              setShowMobileMenu={setShowMobileMenu}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

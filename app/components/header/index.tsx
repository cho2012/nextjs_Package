"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { menu } from "@/constants";
import { IoMenu } from "react-icons/io5";
import HeaderNav from "./headerNav";
import ModlieNav from "./mobileNav";
import { UserContext } from "@/utils/userContext";
import DropdownMenu, { MenuType } from "../dropdownMenu";
import Title from "../title";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [selectedPageNum, setSelectedPageNum] = useState<number | undefined>();

  const 유즈스테이트 = useState<number>();

  const 첫번째 = 유즈스테이트[0];
  const 두번째 = 유즈스테이트[1];

  const 배열 = ["일", "이", "삼"];

  const [...나머지] = 배열;

  console.log(첫번째, 두번째);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const userData = useContext(UserContext);
  const mainColor = "#ffffff";

  return (
    <header className="relative h-[70px] border-b flex bg-white text-black ">
      <div className="w-[1200px] mx-auto flex itens-center">
        <Link
          className="text-[2rem] flex items-center mx-8"
          onClick={() => setShowMobileMenu(false)}
          href={"/"}
        >
          <Title />
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
              <DropdownMenu menu={userMenu} bgColor={mainColor}>
                <div className="">{userData?.user?.name}</div>
              </DropdownMenu>
            ) : (
              <div className="gap-[10px] flex whitespace-nowrap">
                <Link className="font-bold" href={"/auth/login"}>
                  sign in
                </Link>
                &<Link href={"/auth/register"}>sign up</Link>
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

const userMenu: MenuType[] = [
  { title: "Log out", func: "logout" },
  { title: "User Info", url: "/userInfo" },
];

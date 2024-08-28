"use client";
import React, { ReactNode, useState } from "react";
import "./dropDownMenu.module.css";
import { useRouter } from "next/navigation";

const alignType = {
  left: "",
  right: 0,
};

const funcs = {
  logout: () => {
    console.log("Log out!");
  },
};

export type MenuType = {
  title?: string;
  icon?: JSX.Element;
  url?: string;
  func?: "logout";
};
interface Props {
  children: ReactNode;
  menu: Array<MenuType>;
  align?: "left" | "right";
  textColor?: string;
  bgColor?: string;
}

const DropdownMenu: React.FC<Props> = ({
  children,
  menu,
  align,
  textColor,
  bgColor,
}) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const closeHandle = () => {
    setShowMenu(false);
  };

  const meunItemHandle = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      {/* 메뉴를 제외한 드롭다운 */}
      {showMenu && (
        <div
          style={{
            zIndex: "10",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={closeHandle}
        ></div>
      )}
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        style={{ position: "relative" }}
      >
        {children}
        <div style={{ position: "relative" }}>
          {showMenu && (
            <div
              style={{
                position: "absolute",
                left: align ? alignType[align] : "",
                right: 0,
                top: 0,
                backgroundColor: bgColor ? bgColor : "",
                color: textColor ? textColor : "",
                minWidth: "6rem",
                padding: "4px",
                zIndex: "10",
                boxShadow: "3px 3px 4px 4px rgba(100,100,100, .2)",
              }}
            >
              {menu.map((item, index) =>
                item.icon || item.title ? (
                  <div
                    onClick={() => {
                      if (item.url) meunItemHandle(item.url);
                      if (item.func) funcs[item.func]();
                    }}
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                    className="menu-item"
                  >
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{ borderBottom: "solid 0.5px #bcbcbc" }}
                  ></div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

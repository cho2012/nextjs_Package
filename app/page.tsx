import { AiFillAndroid } from "react-icons/ai";
import DropdownMenu, { MenuType } from "./components/dropdownMenu";

import { FaMapPin } from "react-icons/fa";
import BigUserIcon from "./icon/biguserIcon";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-white text-black">
        <div>
          <div className="flex gap-6">
            {headerNav.map((item, index) => (
              <DropdownMenu menu={menus} key={index}>
                <div>
                  <BigUserIcon />
                </div>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const headerNav = ["USER"];

const menus: MenuType[] = [
  {
    title: "go to Hello",
    icon: <FaMapPin />,
    url: "/hello",
  },
  {},
  { title: "go to world", icon: <AiFillAndroid />, url: "/world" },
  {},
  { title: "logout", func: "logout" },
];

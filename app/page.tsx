import { AiFillAndroid } from "react-icons/ai";
import DropdownMenu from "./components/dropdownMenu";
import OldButton from "./components/oldbutton";
import { FaMapPin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-white text-black">
        <div>
          <div className="flex gap-6">
            {headerNav.map((item, index) => (
              <DropdownMenu menu={menus} align={"left"} key={index}>
                <div style={{ paddingInline: "10px" }}> {item}</div>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const headerNav = ["USER"];

const menus = [
  { title: "menu 1", icon: <FaMapPin /> },
  { title: "menu 2", icon: <AiFillAndroid /> },
  { title: "menu 3" },
];

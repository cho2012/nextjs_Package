import { AiFillAndroid } from "react-icons/ai";
import DropdownMenu from "./components/dropdownMenu";
import OldButton from "./components/oldbutton";
import { FaMapPin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-6">
          {headerNav.map((item, index) => (
            <DropdownMenu menu={menus} key={index}>
              <OldButton padX="12px" bgColor="light" rounded="md">
                {item}
              </OldButton>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
}

const headerNav = ["header", "slider", "benner", "contents", "footer"];

const menus = [
  { title: "menu 1", icon: <FaMapPin /> },
  { title: "menu 2", icon: <AiFillAndroid /> },
  { title: "menu 3" },
];

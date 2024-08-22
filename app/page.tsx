// import Button from "./button/page";

import React from "react";
import { CJYButton } from "@cho.edu.coding/next-ui-kit";
import OldButton from "./components/oldbutton";
import DropdownMenu from "./components/dropdownMenu";

export default function Home() {
  return (
    <div className="  inline-block m-10">
      <OldButton bgColor="deep" padX="md" padY="md">
        click
      </OldButton>
      <div className=" text-black">
        <DropdownMenu />
      </div>
    </div>
  );
}

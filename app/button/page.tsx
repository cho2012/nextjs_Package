import React from "react";
import OldButton from "../components/oldbutton";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  return (
    <div>
      <OldButton bgColor="deep" padX="">
        click
      </OldButton>
    </div>
  );
};

export default Page;

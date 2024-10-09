import { UserContext } from "@/utils/userContext";
import React, { useContext } from "react";

interface Props {}

const Title: React.FC<Props> = ({}) => {
  const titlech = useContext(UserContext);

  return <div>{titlech?.title}</div>;
};

export default Title;

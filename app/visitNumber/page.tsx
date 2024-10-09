"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "@/utils/userContext";

interface Props {}

const VisitNumber: React.FC<Props> = ({}) => {
  const ctx = useContext(UserContext);

  return (
    <div>
      <div>VisitNumber</div>
      <div>
        <input
          className="text-black"
          onChange={(e) => ctx?.setVisitNum(Number(e.currentTarget.value))}
          type="text"
        />
      </div>
    </div>
  );
};

export default VisitNumber;

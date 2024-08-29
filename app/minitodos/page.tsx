"use client";
import React, { useState } from "react";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const [inputField, setInputfield] = useState<string | undefined>();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputfield(e.currentTarget.value);
        }}
        value={inputField}
        className="text-violet-700"
      />
    </div>
  );
};

export default Page;

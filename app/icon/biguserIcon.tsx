import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

const BigUserIcon: React.FC<Props> = ({ size = 31, fill }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 100 100"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="50" fill="white" />
      <circle cx="50" cy="35" r="15" fill="#D9D9D9" />
      <circle cx="50.5" cy="74.5" r="22.5" fill="#D9D9D9" />
      <ellipse cx="50" cy="75.5" rx="50" ry="23.5" fill="#D9D9D9" />
    </svg>
  );
};

export default BigUserIcon;

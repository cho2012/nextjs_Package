import React, { ReactNode } from "react";

const redius = {
  sm: "2px",
  md: "4px",
  lg: "6px",
  full: "2000px",
};
const colorSet = {
  deep: "#520922",
  dark: "#980c28",
  main: "#20a1d8",
  light: "#20dbd8",
};

const padVal = {
  1: "2px",
  2: "4px",
  3: "6px",
  4: "8px",
  5: "10px",
  6: "12px",
};

type ColorSet = typeof colorSet;

type Rounded = typeof redius;

type PaddingVal = typeof padVal;

type BgColorSet = keyof ColorSet | (string & {});

type BgRounded = keyof Rounded | (string & {});

type BtnPadding = keyof PaddingVal | (string & {});

interface Props {
  children: ReactNode;
  paddingX?: BtnPadding;
  paddingY?: string;
  bgColor?: BgColorSet;
  bgOpacity?: string;
  rounded?: BgRounded;
}

const Button: React.FC<Props> = ({
  children,
  bgColor,
  paddingX,
  paddingY,
  bgOpacity,
  rounded,
}) => {
  const getBgColor = (color: BgColorSet) => {
    return color in colorSet ? colorSet[color as keyof ColorSet] : color;
  };

  const getRounded = (round: BgRounded) => {
    return round in redius ? redius[round as keyof Rounded] : round;
  };

  const getPadding = (padding: BtnPadding) => {
    return padding in padVal ? padVal[padding as keyof PaddingVal] : padding;
  };

  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor ? getBgColor(bgColor) : undefined,
        opacity: bgOpacity,
        paddingInline: paddingX ? getPadding(paddingX) : undefined,
        paddingBlock: paddingY,
        borderRadius: rounded ? getRounded(rounded) : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Button;

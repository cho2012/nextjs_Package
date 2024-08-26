import { colorSet } from "@/set/color";
import React, { ReactNode } from "react";
import { paddingX, paddingY } from "@/set/padding";
import { redius } from "@/set/redius";

type RoundedSetType = keyof typeof redius;
type BgRoundedType = RoundedSetType | (string & {});

type ColorSetType = keyof typeof colorSet;
type BgColorType = ColorSetType | (string & {});

type PaddingXType = keyof typeof paddingX;
type PadXType = PaddingXType | (string & {});

type PaddingYType = keyof typeof paddingY;
type PadYType = PaddingYType | (string & {});

interface Props {
  children: ReactNode;
  bgColor?: BgColorType;
  padX?: PadXType;
  padY?: PadYType;
  rounded?: BgRoundedType;
}
const OldButton: React.FC<Props> = ({
  children,
  bgColor,
  padX,
  padY,
  rounded,
}) => {
  const getBgRedius = (redi: BgRoundedType) => {
    return redi in redius ? redius[redi as RoundedSetType] : redi;
  };

  const getBgColor = (color: BgColorType) => {
    return color in colorSet ? colorSet[color as ColorSetType] : color;
  };

  const getPaddingX = (paddX: PadXType) => {
    return paddX in paddingX ? paddingX[paddX as PaddingXType] : paddX;
  };

  const getPaddingY = (paddY: PadYType) => {
    return paddY in paddingY ? paddingY[paddY as PaddingYType] : paddY;
  };
  return (
    <div
      style={{
        display: "inline",
        borderRadius: rounded ? getBgRedius(rounded) : undefined,
        backgroundColor: bgColor ? getBgColor(bgColor) : undefined,
        paddingInline: padX ? getPaddingX(padX) : undefined,
        paddingBlock: padY ? getPaddingY(padY) : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default OldButton;

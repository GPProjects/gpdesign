import { SIZES, STATUS, THEME } from "../../../constants/const";

import React from "react";
import { IconTypes } from "../../Foundations/Icons/Icon";

interface ButtonPropsBase {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  iconLeftType?: IconTypes;
  iconRightType?: IconTypes;
  id?: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: (e: React.MouseEvent) => void;
  theme?: THEME;
  size?: Extract<SIZES, "l" | "m" | "s">;
  tag?: "a" | "button";
  underline?: boolean;
  status?: STATUS;
  uppercase?: boolean;
  [key: string]: any;
}

// Variante per bottoni SOLO icona
interface IconButtonProps extends ButtonPropsBase {
  isOnlyIcon: true;
  "aria-label": string;
  children?: never;
  iconLeft?: string;
  iconRight?: string;
}

interface RegularButtonProps extends ButtonPropsBase {
  isOnlyIcon?: false;
  "aria-label"?: string;
}
type ValidIconButtonProps = IconButtonProps &
  (
    | { iconLeft: string; iconRight?: never }
    | { iconRight: string; iconLeft?: never }
    | { iconLeft: string; iconRight: string }
  );

export type ButtonProps = RegularButtonProps | ValidIconButtonProps;

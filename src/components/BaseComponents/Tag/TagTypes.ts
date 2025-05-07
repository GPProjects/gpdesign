import { THEME, SIZES, STATUS } from "../../../constants/const";
import { IconTypes } from "../../Foundations/Icons/Icon";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  iconLeft?: string;
  iconRight?: string;
  iconLeftType?: IconTypes;
  iconRightType?: IconTypes;
  size?: Extract<SIZES, "l" | "m" | "s" | "xs">;
  status?: STATUS;
  theme?: Extract<THEME, "primary" | "secondary">;
  customColor?: boolean;
  [key: string]: any;
}

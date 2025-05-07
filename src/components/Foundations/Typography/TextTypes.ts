import { COLORS } from "../../../constants/const";
import { TYPOGRAPHY_VARIANTS } from "./Typography";

export interface TextProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
  color?: COLORS;
  debugMode?: boolean;
  id?: string;
  italic?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  type?: TYPOGRAPHY_VARIANTS;
  underline?: boolean;
  weight?: "700" | "600" | "400" | "500" | "300";
  [key: string]: any;
}

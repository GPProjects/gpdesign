import { SPACING } from "../../../constants/const";
import { ColorName } from "../../../styles/types";

export interface FlexProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  pointer?: boolean;
  flex?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gap?: SPACING;
  bg?: ColorName;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "space-between";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: "wrap" | "nowrap";
  radius?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "max";
  shadow?: "sm" | "normal" | "md" | "lg" | "xl" | "2xl" | "3xl" | "focus";
  border?:
    | "100"
    | "200"
    | "300"
    | "default"
    | "muted"
    | "danger"
    | "success"
    | "warning"
    | "info";
  tag?: keyof JSX.IntrinsicElements;
  w?: "full" | "100" | "auto" | "fit-content";
  h?: "full" | "100" | "auto" | "fit-content";
  position?: "relative" | "sticky" | "absolute" | "fixed";
  s?: { [key: string]: string | number | null };
  m?: { [key: string]: string | number | null };
  l?: { [key: string]: string | number | null };
  xl?: { [key: string]: string | number | null };
  [key: string]: any;
}

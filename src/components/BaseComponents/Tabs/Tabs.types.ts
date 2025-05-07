import { SIZES } from "../../../constants/const";

export interface TabsProps {
  arrayChildren: TabsItem[];
  className?: string;
  debugMode?: boolean;
  disabled?: boolean;
  id?: string;
  size?: Extract<SIZES, "m" | "s">;
  fullWidth?: boolean;
  selectedElement?: number;
  onClick?: (args: { index: number; item: TabsItem }) => void;
}

export interface TabsItem {
  text: string;
  id: string;
  number?: number;
  disabled?: boolean;
}

import { STATUS } from "../../../constants/const";
import { IconTypes } from "../../Foundations/Icons/Icon";

export interface ListItemProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id: string;
  status?: STATUS;
  icon?: string;
  iconType?: IconTypes;
  caption?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, id: string) => void;
  [key: string]: any;
}

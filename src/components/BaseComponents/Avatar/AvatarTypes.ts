import { SIZES } from "../../../constants/const";

export interface AvatarProps {
  "aria-label": string;
  className?: string;
  debugMode?: boolean;
  id?: string;
  size?: SIZES;
  src?: string;
  [key: string]: any;
}

import { STATUS } from "../../../constants/const";

export interface HintProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  showIcon?: boolean;
  status?: STATUS;
  [key: string]: any;
}

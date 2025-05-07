import { STATUS } from "../../../constants/const";

export interface AlertProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  closeIcon?: boolean;
  onClose?: () => void;
  status?: STATUS;
  caption?: string;
  showBackground?: boolean;
  [key: string]: any;
}

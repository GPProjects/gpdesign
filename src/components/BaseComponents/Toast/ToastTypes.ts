import { SIZES, STATUS } from "../../../constants/const";

export interface ToastProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  onClose: () => void;
  status?: STATUS;
  size?: Extract<SIZES, "m" | "s">;
  isOpen: boolean;
  fixedPosition?: boolean;
  automaticClose?: boolean;
  [key: string]: any;
}

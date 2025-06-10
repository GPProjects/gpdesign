import { STATUS } from "../../../constants/const";

export interface RadioboxPropsBase {
  before?: boolean;
  checked?: string;
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  disabled?: boolean;
  error?: boolean;
  handleChange?: (idValue: string) => void;
  hint?: string;
  hintShowIcon?: boolean;
  hintStatus?: STATUS;
  id: string;
  status?: STATUS;
  vertical?: boolean;
  [key: string]: any;
}

interface NoChildrenProps extends RadioboxPropsBase {
  "aria-label": string;
  children?: never;
}

interface RegularRadioxProps extends RadioboxPropsBase {
  "aria-label"?: string;
  children: React.ReactNode;
}

export type RadioboxProps = RegularRadioxProps | NoChildrenProps;

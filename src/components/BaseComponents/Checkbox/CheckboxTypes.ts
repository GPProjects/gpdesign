import { STATUS } from "../../../constants/const";

interface CheckboxPropsBase {
  before?: boolean;
  checked?: boolean;
  className?: string;
  debugMode?: boolean;
  disabled?: boolean;
  error?: boolean;
  handleChange?: (id: string, value: boolean) => void;
  hint?: string;
  hintShowIcon?: boolean;
  hintStatus?: STATUS;
  id: string;
  status?: STATUS;
  vertical?: boolean;
  [key: string]: any;
}

interface NoChildrenProps extends CheckboxPropsBase {
  "aria-label": string;
  children?: never;
}

interface RegularCheckboxProps extends CheckboxPropsBase {
  "aria-label"?: string;
  children: React.ReactNode;
}

export type CheckboxProps = RegularCheckboxProps | NoChildrenProps;

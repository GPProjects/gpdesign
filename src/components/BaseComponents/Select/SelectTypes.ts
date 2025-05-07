import { STATUS } from "../../../constants/const";
import { HintProps } from "../Hint/HintTypes";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  caption?: string;
  className?: string;
  debugMode?: boolean;
  disabled?: boolean;
  error?: boolean;
  handleChange?: (value: string) => void;
  hint?: string;
  hintShowIcon?: boolean;
  hintStatus?: STATUS;
  id: string;
  label?: React.ReactNode;
  options: Option[];
  placeholder: string;
  status?: STATUS;
  value?: string;
  [key: string]: any;
}

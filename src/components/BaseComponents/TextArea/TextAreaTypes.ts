import { STATUS } from "../../../constants/const";

export interface TextAreaProps {
  caption?: React.ReactNode;
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
  placeholder: string;
  status?: STATUS;
  value?: string;
  [key: string]: any;
}

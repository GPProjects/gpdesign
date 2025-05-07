import { STATUS } from "../../../constants/const";

export interface TextFieldProps {
  autoComplete?: boolean;
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
  placeholder: string;
  status?: STATUS;
  type?: string;
  value?: string;
  [key: string]: any;
}

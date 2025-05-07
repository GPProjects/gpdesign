import React from "react";
import { STATUS } from "../../../constants/const";
import { HintProps } from "../Hint/HintTypes";

export interface InputSearchProps {
  caption?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  error?: boolean;
  handleChange?: (value: string) => void;
  hint?: React.ReactNode;
  hintShowIcon?: boolean;
  hintStatus?: STATUS;
  id: string;
  label?: React.ReactNode;
  onSubmit?: (value: string) => void;
  placeholder: string;
  status?: STATUS;
  value?: string;
  [key: string]: any;
}

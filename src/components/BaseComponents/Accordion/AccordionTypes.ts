import { IconTypes } from "../../Foundations/Icons/Icon";

export interface AccordionProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  isOpen?: boolean;
  icon?: string;
  iconType?: IconTypes;
  headerContent: React.ReactNode | string;
  disabled?: boolean;
  withSwitch?: boolean;
  [key: string]: any;
}

import { SIZES } from "../../../constants/const";

interface DialogPropsBase {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
  size?: Extract<SIZES, "l" | "m" | "s">;
  title: string | React.ReactNode;
}

// Variante per Dialog con footer
export interface DialogFooterProps extends DialogPropsBase {
  footer: true;
  cancelText: string;
  onSubmit: () => void;
  submitText: string;
}

interface DialogNoFooterProps extends DialogPropsBase {
  footer: false;
}

export type DialogProps = DialogFooterProps | DialogNoFooterProps;

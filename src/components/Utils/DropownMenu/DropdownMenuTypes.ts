export interface DropdownMenuProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
  automaticClose?: boolean;
  header: () => React.ReactNode;
  position?: "bottom" | "right" | "left" | "top";
  [key: string]: any;
}

export interface OverlayProps {
  children?: React.ReactNode;
  className?: string;
  debugMode?: boolean;
  id?: string;
  isOpen?: boolean;
  closeOnClick?: boolean;
  onClose?: () => void;
}

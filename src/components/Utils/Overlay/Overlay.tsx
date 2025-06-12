import { OverlayProps } from "./OverlayTypes";
import styles from "./Overlay.module.scss";
import { useEffect, useState } from "react";

const Overlay = (props: OverlayProps) => {
  const {
    className,
    children,
    id,
    debugMode,
    isOpen = false,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Overlay ${id}`, props);
  }

  // States

  const [open, setOpen] = useState(isOpen);
  const [unmountBlockScrollRemove, setUnmountBlockScrollRemove] =
    useState(true);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  // Se esiste un'altro overlay in pagina già aperto aka se esiste già la classe 'overlay-open',
  // non aggiunge nuovamente né poi la toglie alla chiusura (se ne occuperà il componente già aperto per primo)
  useEffect(() => {
    if (open) {
      const hasClass = document.body.classList.contains("overlay-open");
      if (hasClass) {
        setUnmountBlockScrollRemove(false);
      } else {
        document.body.classList.add("overlay-open");
        setUnmountBlockScrollRemove(true);
      }
    } else {
      if (unmountBlockScrollRemove) {
        document.body.classList.remove("overlay-open");
      }
    }
  }, [open]);

  useEffect(() => {
    if (unmountBlockScrollRemove) {
      return () => {
        document.body.classList.remove("overlay-open");
      };
    }
  }, []);

  // Styles
  const wrapperClassNames = [
    "sv-overlay",
    styles["overlay"],
    open && styles["open"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassNames} id={id} data-testid={id} {...otherProps}>
      {children}
    </div>
  );
};

Overlay.displayName = "Overlay";

export default Overlay;

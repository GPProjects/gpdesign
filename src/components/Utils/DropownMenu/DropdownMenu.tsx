import { DropdownMenuProps } from "./DropdownMenuTypes";
import styles from "./DropdownMenu.module.scss";
import { useEffect, useRef, useState } from "react";
import { useOutsideAlerter } from "../../../helpers/hook.helpers";

const DropdownMenu = (props: DropdownMenuProps) => {
  const {
    className,
    children,
    id,
    debugMode,
    isOpen,
    onClose,
    automaticClose = true,
    header,
    position = "bottom",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`DropdownMenu ${id}`, props);
  }

  // State
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  // Handlers

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Ref
  const boxRef = useRef<HTMLDivElement>(null);

  // Accessibility navigation
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        const firstItem = boxRef.current?.querySelector(
          '[role="menuitem"]'
        ) as HTMLElement;
        firstItem?.focus();
      }, 0);
    } else {
      const button = boxRef.current?.querySelector(
        '[aria-haspopup="menu"]'
      ) as HTMLElement;
      button?.focus();
    }
  }, [open]);

  const handleKeyDownMenu = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = boxRef.current?.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    );
    if (!items || items.length === 0) return;

    const itemsArray = Array.from(items) as HTMLElement[];
    const activeElement = document.activeElement;
    const currentIndex = itemsArray.findIndex((item) => item === activeElement);

    if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % itemsArray.length;
      itemsArray[nextIndex]?.focus();
    }

    if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
      e.preventDefault();
      const prevIndex =
        (currentIndex - 1 + itemsArray.length) % itemsArray.length;
      itemsArray[prevIndex]?.focus();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
    }
  };

  // Close outside handler
  useOutsideAlerter(boxRef, handleClose, automaticClose);

  // Styles
  const wrapperClassNames = [
    "gp-dropdown-menu-container",
    styles["dropdown-menu-container"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const dropdownClassNames = [
    "gp-dropdown",
    styles["dropdown"],
    position && styles[`position-${position}`],
    open && styles["open"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClassNames}
      id={id}
      data-testid={id}
      onKeyDown={handleKeyDownMenu}
      ref={boxRef}
      {...otherProps}
    >
      {header()}
      {open && (
        <div role="menu" className={dropdownClassNames}>
          {children}
        </div>
      )}
    </div>
  );
};

DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;

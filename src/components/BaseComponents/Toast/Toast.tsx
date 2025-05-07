import { STATUS, COLORS, SIZES } from "../../../constants/const";
import { ToastProps } from "./ToastTypes";
import { Body } from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Toast.module.scss";
import { Row } from "../../Utils/Flex/FlexContainers";
import { useEffect, useRef, useState } from "react";

const Toast = (props: ToastProps) => {
  const {
    className,
    children,
    id,
    status = STATUS.INFO,
    debugMode,
    onClose,
    size = SIZES.S,
    fixedPosition = true,
    automaticClose = true,
    isOpen = false,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Toast ${id}`, props);
  }

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [open, setOpen] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  // Handlers
  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      onClose && onClose();
    }, 500);
  };

  // Effects
  useEffect(() => {
    setOpen(isOpen);
    setClosing(false);

    if (automaticClose && isOpen) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOpen, automaticClose]);

  // Styling
  let icon = "faCircleInfo";
  switch (status) {
    case STATUS.SUCCESS:
      icon = "faCircleCheck";
      break;
    case STATUS.WARNING:
      icon = "faTriangleExclamation";
      break;
    case STATUS.DANGER:
      icon = "faTriangleExclamation";
      break;
    case STATUS.INFO:
      icon = "faCircleInfo";
      break;
  }

  const color =
    COLORS[`${status}200` as keyof typeof COLORS] || COLORS.textMuted;

  const wrapperClassNames = [
    "gp-toast-container",
    styles["toast-container"],
    status && styles[status],
    size && styles[`size-${size}`],
    fixedPosition && styles["fixed-position"],
    closing ? styles["fade-out"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    open && (
      <div
        className={wrapperClassNames}
        id={id}
        role={status === STATUS.DANGER ? "alert" : "status"}
        data-testid={id}
        {...otherProps}
      >
        <Icon
          iconName={icon}
          color={color}
          className={styles["icon-status"]}
          aria-hidden="true"
          focusable="false"
        />

        <Row justify="space-between" flex={1}>
          <Body
            tag={typeof children === "string" ? "p" : "div"}
            color={color}
            weight="600"
            style={{ lineHeight: 1 }}
          >
            {children}
          </Body>

          <Icon
            iconName="faXmark"
            color={color}
            onClick={handleClose}
            className={styles["icon-close"]}
            role="button"
            tabIndex={0}
            aria-label="Close Icon"
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClose();
              }
            }}
          />
        </Row>
      </div>
    )
  );
};

Toast.displayName = "Toast";

export default Toast;

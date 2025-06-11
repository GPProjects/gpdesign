import { useEffect, useRef } from "react";
import { DialogProps, DialogFooterProps } from "./DialogTypes";
import { Row } from "../../Utils/Flex/FlexContainers";
import { HeadingSmall } from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Dialog.module.scss";
import { THEME, SIZES, SPACING } from "../../../constants/const";
import Button from "../Button/Button";

// Type guard
function isDialogFooterProps(props: DialogProps): props is DialogFooterProps {
  return props.footer === true;
}

const Dialog = (props: DialogProps) => {
  const {
    className,
    children,
    id,
    debugMode,
    isOpen = false,
    onClose,
    size = SIZES.M,
    title,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Dialog ${id}`, props);
  }

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose?.();

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen, onClose]);

  // Styles
  const classNames = [
    "gp-dialog-container",
    styles["dialog-container"],
    size && styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <dialog ref={dialogRef} className={classNames} {...otherProps}>
      <Row justify="space-between" className="gp-p-16">
        <HeadingSmall
          tag={typeof title === "string" ? "h2" : "div"}
          style={{ lineHeight: 1 }}
        >
          {title}
        </HeadingSmall>

        <Icon
          iconName="faXmark"
          onClick={() => dialogRef.current?.close()}
          className={styles["icon-close"]}
          role="button"
          tabIndex={0}
          aria-label="Close Icon"
          onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              dialogRef.current?.close();
            }
          }}
        />
      </Row>

      <div className="gp-p-16 dialog-content">{children}</div>

      {isDialogFooterProps(props) && (
        <Row justify="end" className="gp-p-16" gap={SPACING.SP_8}>
          <Button
            onClick={() => dialogRef.current?.close()}
            theme={THEME.SECONDARY}
          >
            {props.cancelText}
          </Button>
          <Button onClick={props.onSubmit}>{props.submitText}</Button>
        </Row>
      )}
    </dialog>
  );
};

export default Dialog;

import { STATUS, COLORS, SPACING } from "../../../constants/const";
import { AlertProps } from "./AlertTypes";
import { Body, BodySmall } from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Alert.module.scss";
import { Column } from "../../Utils/Flex/FlexContainers";

const Alert = (props: AlertProps) => {
  const {
    className,
    children,
    id,
    status = STATUS.INFO,
    debugMode,
    closeIcon,
    onClose,
    showBackground = true,
    caption,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Alert ${id}`, props);
  }

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
    "gp-alert-container",
    styles["alert-container"],
    status && styles[status],
    showBackground && styles["show-background"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClassNames}
      data-testid={id}
      id={id}
      role={
        status === STATUS.DANGER || status === STATUS.WARNING
          ? "alert"
          : "status"
      }
      {...otherProps}
    >
      <Icon
        className={styles["icon-custom"]}
        iconName={icon}
        color={color}
        aria-hidden="true"
        focusable="false"
      />

      <Column gap={SPACING.SP_4} flex={1}>
        <Body
          tag={typeof children === "string" ? "p" : "div"}
          color={showBackground ? color : COLORS.textDefault}
          weight={showBackground ? "600" : "400"}
          style={{ lineHeight: 1 }}
        >
          {children}
        </Body>
        {caption && (
          <BodySmall
            tag={typeof children === "string" ? "span" : "div"}
            color={showBackground ? color : COLORS.textMuted}
            style={{ lineHeight: 1 }}
          >
            {caption}
          </BodySmall>
        )}
      </Column>

      {closeIcon && (
        <Icon
          className={styles["close-icon"]}
          iconName="faXmark"
          color={COLORS.textMuted}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          aria-label="Close Icon"
          onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
            if (e.key === "Enter" || e.key === " ") onClose?.();
          }}
        />
      )}
    </div>
  );
};

Alert.displayName = "Alert";

export default Alert;

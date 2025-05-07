import { STATUS, COLORS } from "../../../constants/const";
import { HintProps } from "./HintTypes";
import { BodySmall } from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Hint.module.scss";

const Hint = (props: HintProps) => {
  const {
    className = "",
    children,
    id,
    status,
    debugMode,
    showIcon = true,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Hint ${id}`, props);
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
    "gp-hint-container",
    styles["hint-container"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClassNames}
      id={id}
      data-testid={id}
      role="status"
      {...otherProps}
    >
      {showIcon && (
        <Icon
          iconName={icon}
          color={color}
          aria-hidden="true"
          focusable="false"
        />
      )}
      <BodySmall tag={typeof children === "string" ? "p" : "div"} color={color}>
        {children}
      </BodySmall>
    </div>
  );
};

Hint.displayName = "Hint";

export default Hint;

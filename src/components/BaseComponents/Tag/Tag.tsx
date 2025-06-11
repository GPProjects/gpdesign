import { COLORS, SIZES, THEME } from "../../../constants/const";
import { TagProps } from "./TagTypes";
import Text from "../../Foundations/Typography/Text";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Tag.module.scss";

const Tag = (props: TagProps) => {
  const {
    children,
    className = "",
    customColor,
    debugMode,
    iconLeft,
    iconRight,
    iconLeftType,
    iconRightType,
    id,
    size = SIZES.M,
    theme = THEME.PRIMARY,
    status,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Tag ${id}`, props);
  }

  const classNames = [
    "gp-tag-container",
    styles["tag-container"],
    size && styles[`size-${size}`],
    theme && styles[theme],
    status && styles[status],
    customColor && styles[`custom`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={id} className={classNames} data-testid={id} {...otherProps}>
      {iconLeft && (
        <Icon
          iconName={iconLeft}
          className={styles["icon-custom"]}
          type={iconLeftType}
          aria-hidden="true"
          focusable="false"
        />
      )}
      <Text
        tag={typeof children === "string" ? "p" : "div"}
        weight={size === SIZES.M ? "700" : size === SIZES.XS ? "400" : "600"}
      >
        {children}
      </Text>
      {iconRight && (
        <Icon
          iconName={iconRight}
          className={styles["icon-custom"]}
          type={iconRightType}
          aria-hidden="true"
          focusable="false"
        />
      )}
    </div>
  );
};

Tag.displayName = "Tag";

export default Tag;

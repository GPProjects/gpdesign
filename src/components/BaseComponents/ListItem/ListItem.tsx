import { COLORS, SPACING } from "../../../constants/const";
import { ListItemProps } from "./ListItemTypes";
import {
  BodyExtraSmall,
  BodySmall,
} from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./ListItem.module.scss";
import { Column, Row } from "../../Utils/Flex/FlexContainers";

const ListItem = (props: ListItemProps) => {
  const {
    className,
    children,
    id,
    status,
    debugMode,
    icon,
    iconType,
    caption,
    selected,
    disabled,
    onClick,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`ListItem ${id}`, props);
  }

  // HandleKey Down
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " " || e.code === "Space") {
      e.preventDefault();
      if (onClick) {
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>, id);
      }
    }
  };

  const color =
    COLORS[`${status}200` as keyof typeof COLORS] || COLORS.textDefault;
  const colorIcon =
    COLORS[`${status}200` as keyof typeof COLORS] || COLORS.textMuted;

  const wrapperClassNames = [
    "gp-list-item-container",
    styles["list-item-container"],
    selected && styles["selected"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Row
      tabIndex={0}
      align={caption ? "start" : "center"}
      gap={SPACING.SP_4}
      aria-selected={selected || undefined}
      aria-disabled={disabled || undefined}
      pointer
      className={wrapperClassNames}
      id={id}
      data-testid={id}
      onKeyDown={handleKeyDown}
      onClick={
        onClick && !disabled
          ? (e: React.MouseEvent<HTMLDivElement>) => onClick(e, id)
          : undefined
      }
      {...otherProps}
    >
      {icon && <Icon iconName={icon} color={colorIcon} />}
      <Column>
        <BodySmall
          tag={typeof children === "string" ? "p" : "div"}
          color={color}
          weight={caption ? "600" : "400"}
          style={{ lineHeight: 1 }}
        >
          {children}
        </BodySmall>
        {caption && (
          <BodyExtraSmall
            tag={typeof caption === "string" ? "p" : "div"}
            color={COLORS.textMuted}
          >
            {caption}
          </BodyExtraSmall>
        )}
      </Column>
    </Row>
  );
};

ListItem.displayName = "ListItem";

export default ListItem;

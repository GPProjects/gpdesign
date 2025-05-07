import React from "react";
import { TextProps } from "./TextTypes";
import styles from "./Text.module.scss";
import { COLORS } from "../../../constants/const";

const Text = React.memo((props: TextProps) => {
  const {
    align,
    children,
    className = "",
    color = COLORS.textDefault,
    debugMode,
    id,
    italic,
    tag = "p",
    type,
    weight,
    underline,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Text ${id}`, props);
  }

  const Tag = tag as React.ElementType;

  const classNames = [
    "gp-text-element",
    styles["text-element"],
    align && styles[align],
    underline && styles["underline"],
    italic && styles["italic"],
    weight && styles[`w${weight}`],
    type && styles[type],
    color && `gp-color-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classNames} id={id} data-testid={id} {...otherProps}>
      {children}
    </Tag>
  );
});

Text.displayName = "Text";

export default Text;

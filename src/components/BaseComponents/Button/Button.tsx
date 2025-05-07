import React from "react";
import { ButtonProps } from "./Button.types";
import { SIZES, THEME } from "../../../constants/const";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Button.module.scss";

const Button = (props: ButtonProps) => {
  const {
    children,
    className = "",
    debugMode,
    disabled,
    iconLeft,
    iconRight,
    iconLeftType,
    iconRightType,
    id,
    isLoading,
    loadingText = "Loading...",
    size = SIZES.M,
    tag = "button",
    theme = THEME.PRIMARY,
    status,
    onClick,
    underline,
    uppercase,
    ...otherProps
  } = props;

  const isOnlyIcon = !!(!children && (iconLeft || iconRight));
  const Tag = tag as keyof JSX.IntrinsicElements;

  if (debugMode) {
    console.log(`Button ${id}`, props);
  }

  const classNames = [
    "gp-button-element",
    styles["button-element"],
    styles[`size-${size}`],
    theme && styles[theme],
    status && styles[status],
    isOnlyIcon && styles["only-icon"],
    disabled && styles["disabled"],
    isLoading && styles["loading"],
    underline && styles["underline"],
    uppercase && styles["uppercase"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      data-testid={id}
      className={classNames}
      disabled={disabled}
      id={id}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      {...otherProps}
    >
      {isLoading ? (
        loadingText
      ) : (
        <>
          {iconLeft && (
            <Icon
              iconName={iconLeft}
              className={styles["icon-custom"]}
              type={iconLeftType}
            />
          )}
          {children}
          {iconRight && (
            <Icon
              iconName={iconRight}
              className={styles["icon-custom"]}
              type={iconRightType}
            />
          )}
        </>
      )}
    </Tag>
  );
};

export default Button;

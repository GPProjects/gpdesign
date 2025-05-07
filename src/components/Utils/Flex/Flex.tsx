import React from "react";
import styles from "./Flex.module.scss";
import { FlexProps } from "./FlexTypes";

const Flex = React.forwardRef((props: FlexProps, ref) => {
  const {
    children,
    className = "",
    debugMode,
    id,
    tag = "div",
    pointer,
    flex,
    gap,
    wrap,
    direction,
    justify,
    align,
    radius,
    shadow,
    border,
    w,
    h,
    bg,
    position,
    s = {},
    m = {},
    l = {},
    xl = {},
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Flex ${id}`, props);
  }

  const Tag = tag as React.ElementType;

  // Costruisci classi dinamiche per media query
  const responsiveStylesClasses = [
    ...Object.entries(s).map(([k, v]) => styles[`s-${k}-${v}`]),
    ...Object.entries(m).map(([k, v]) => styles[`m-${k}-${v}`]),
    ...Object.entries(l).map(([k, v]) => styles[`l-${k}-${v}`]),
    ...Object.entries(xl).map(([k, v]) => styles[`xl-${k}-${v}`]),
    ...Object.entries(s).map(([k, v]) => `gp-s-${k}-${v}`),
    ...Object.entries(m).map(([k, v]) => `gp-m-${k}-${v}`),
    ...Object.entries(l).map(([k, v]) => `gp-l-${k}-${v}`),
    ...Object.entries(xl).map(([k, v]) => `gp-xl-${k}-${v}`),
  ];

  const classNames = [
    "gp-container-element",
    styles["container-element"],
    gap && styles[`gap-${gap}`],
    wrap && styles[`wrap-${wrap}`],
    justify && styles[`justify-${justify}`],
    align && styles[`align-${align}`],
    direction && styles[direction],
    flex && styles[`flex-${flex}`],
    radius && `gp-radius-${radius}`,
    shadow && `gp-shadow-${shadow}`,
    border && `gp-border-${border}`,
    w && `gp-w-${w}`,
    h && `gp-h-${h}`,
    position && `gp-position-${position}`,
    pointer && `gp-cursor-pointer`,
    bg && `gp-bg-${bg}`,
    ...responsiveStylesClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classNames}
      id={id}
      data-testid={id}
      {...otherProps}
    >
      {children}
    </Tag>
  );
});

Flex.displayName = "Flex";

export default Flex;

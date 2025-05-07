import { COLORS, SPACING } from "../../../constants/const";
import { AccordionProps } from "./AccordionTypes";
import { Body } from "../../Foundations/Typography/Typography";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Accordion.module.scss";
import { Row } from "../../Utils/Flex/FlexContainers";
import React, { useEffect, useState } from "react";
import Switch from "../Switch/Switch";

const Accordion = (props: AccordionProps) => {
  const {
    className,
    children,
    id,
    debugMode,
    icon,
    iconType = "solid",
    headerContent,
    isOpen = false,
    disabled,
    withSwitch,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Accordion ${id}`, props);
  }

  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  // Keyboard accessibility
  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  const wrapperClassNames = [
    "gp-accordion-container",
    styles["accordion-container"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentWrapperClassNames = [
    "gp-accordion-content-wrapper",
    styles["accordion-content-wrapper"],
    open && styles["open"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClassNames = [
    "gp-accordion-content",
    styles["accordion-content"],
    open && styles["open"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headerClassNames = [
    "gp-accordion-header",
    styles["accordion-header"],
    open && styles["open"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassNames} id={id} data-testid={id} {...otherProps}>
      <Row
        id={`${id}-header`}
        align="center"
        pointer={!disabled}
        gap={SPACING.SP_8}
        bg={COLORS.bgWhite}
        className={headerClassNames}
        onClick={disabled ? undefined : () => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        aria-disabled={disabled}
        onKeyDown={onKeyDown}
      >
        {icon && <Icon iconName={icon} type={iconType} />}
        <Row align="center" justify="space-between" flex={1}>
          <Body tag={typeof headerContent === "string" ? "p" : "div"}>
            {headerContent}
          </Body>
          {withSwitch ? (
            <Switch aria-label={`${id} Accordion switch`} checked={open} />
          ) : (
            <Icon
              iconName={open ? "faAngleUp" : "faAngleDown"}
              className={styles["accordion-icon"]}
              aria-hidden="true"
              focusable="false"
            />
          )}
        </Row>
      </Row>

      <div
        className={contentWrapperClassNames}
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-header`}
        aria-hidden={!open}
      >
        <div className={contentClassNames}>{children}</div>
      </div>
    </div>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;

import { TabsItem, TabsProps } from "./Tabs.types";
import { SIZES } from "../../../constants/const";
import styles from "./Tabs.module.scss";
import { useEffect, useRef, useState } from "react";
import { Column, Row } from "../../Utils/Flex/FlexContainers";

const Tabs = (props: TabsProps) => {
  const {
    arrayChildren = [],
    className = "",
    debugMode,
    disabled,
    id,
    size = SIZES.M,
    selectedElement,
    onClick,
    fullWidth,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Tabs ${id}`, props);
  }

  const [activeElement, setActiveElement] = useState<number>(0);

  const tabsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedElement !== undefined) {
      setActiveElement(selectedElement);
    } else {
      setActiveElement(0);
    }
  }, [selectedElement]);

  const handleClick = ({ index, item }: { index: number; item: TabsItem }) => {
    if (onClick) {
      onClick({ index, item });
    }
    setActiveElement(index);
  };
  // Handle keyboard events
  const focusTab = (start: number, direction: 1 | -1) => {
    let i = start;
    const len = arrayChildren.length;
    do {
      i = (i + direction + len) % len;
      if (!arrayChildren[i].disabled) {
        setActiveElement(i);
        onClick?.({ index: i, item: arrayChildren[i] });
        tabsRef.current[i]?.focus();
        break;
      }
    } while (i !== start);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    item: TabsItem,
    index: number
  ) => {
    if (item.disabled) return;
    if (disabled) return;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTab(index, 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTab(index, -1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(-1, 1); // from -1 to 0
        break;
      case "End":
        e.preventDefault();
        focusTab(arrayChildren.length, -1); // from length to last
        break;
    }
  };

  // Styles
  const wrapperClassNames = [
    "gp-tabs-wrapper",
    styles["tabs-wrapper"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const tabItemClassNames = [
    "gp-tab-item",
    styles["tab-item"],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Row
      data-testid={id}
      className={wrapperClassNames}
      id={id}
      role="tablist"
      aria-disabled={disabled || undefined}
      {...otherProps}
    >
      {arrayChildren.length > 0 &&
        arrayChildren.map((item: TabsItem, index: number) => (
          <Column
            w={fullWidth ? "100" : "auto"}
            key={`${index}${item.id}`}
            align="center"
          >
            <div
              className={`${tabItemClassNames}  ${
                index === activeElement && styles["active"]
              } ${item.disabled && styles["disabled"]}`}
              role="tab"
              onClick={
                item.disabled ? undefined : () => handleClick({ item, index })
              }
              aria-selected={index === activeElement}
              aria-controls={`tabpanel-${index}`}
              aria-disabled={item.disabled || disabled || undefined}
              id={`tab-${item.id}`}
              tabIndex={index === activeElement ? 0 : -1}
              ref={(el: HTMLDivElement | null) => (tabsRef.current[index] = el)}
              onKeyDown={(e: React.KeyboardEvent) =>
                handleKeyDown(e, item, index)
              }
            >
              {item.text}
              {item.number !== undefined && (
                <span className={styles["number"]}>{item.number}</span>
              )}
            </div>
            <div
              className={`${styles["underline"]} ${
                index === activeElement && styles["active"]
              }`}
            ></div>
          </Column>
        ))}
    </Row>
  );
};

Tabs.displayName = "Tabs";

export default Tabs;

import { useEffect, useState } from "react";
import { SwitchProps } from "./SwitchTypes";
import styles from "./Switch.module.scss";

const Switch = (props: SwitchProps) => {
  const {
    checked,
    className = "",
    debugMode,
    disabled = false,
    handleChange,
    id,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Switch ${id}`, props);
  }

  const [selected, setSelected] = useState<boolean>(false);

  const onSwitchChange = () => {
    if (handleChange) {
      handleChange(!selected);
    }
    setSelected((prev) => !prev);
  };

  useEffect(() => {
    if (checked !== undefined) {
      setSelected(checked);
    }
  }, [checked]);

  const toggleClassNames = [
    "gp-checkbox-input-toggle",
    styles["checkbox-input-toggle"],
    selected && styles["selected"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const circleClassNames = [
    "gp-circle-toggle",
    styles["circle-toggle"],
    selected && styles["selected"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={toggleClassNames}
      data-testid={id}
      id={id}
      aria-checked={selected}
      aria-disabled={disabled}
      disabled={disabled}
      role="switch"
      onClick={onSwitchChange}
      {...otherProps}
    >
      <span className={circleClassNames} />
    </button>
  );
};

export default Switch;

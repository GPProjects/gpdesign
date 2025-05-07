import { useEffect, useState } from "react";
import { CheckboxProps } from "./CheckboxTypes";
import { STATUS } from "../../../constants/const";
import Hint from "../Hint/Hint";
import { Body } from "../../Foundations/Typography/Typography";
import { Column } from "../../Utils/Flex/FlexContainers";
import styles from "./Checkbox.module.scss";

const Checkbox = (props: CheckboxProps) => {
  const {
    before,
    checked,
    children,
    className = "",
    debugMode,
    disabled = false,
    error,
    handleChange,
    hint,
    hintShowIcon,
    hintStatus,
    id,
    status,
    vertical,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Checkbox ${id}`, props);
  }

  const [selected, setSelected] = useState(false);

  const onInputChange = () => {
    if (handleChange) {
      handleChange(id, !selected);
    }
    setSelected((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // For handle enter key to set the checkbox button when focused
    if (e.key === "Enter") {
      setSelected((prev) => !prev);
      if (handleChange) {
        handleChange(id, !selected);
      }
    }
  };

  useEffect(() => {
    if (checked) {
      setSelected(checked);
    }
  }, [checked]);

  const wrapperClassNames = [
    "gp-checkbox-wrapper",
    styles["checkbox-wrapper"],
    disabled && styles["disabled"],
    vertical && styles["vertical"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "gp-checkbox-input",
    styles["checkbox-input"],
    disabled && styles["disabled"],
    vertical && styles["vertical"],
    (status || error) && (error ? styles["danger"] : status && styles[status]),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Column
      align={vertical ? "center" : "start"}
      className={`gp-checkbox-container ${className} ${styles["checkbox-container"]}`}
    >
      <div className={wrapperClassNames}>
        {before && children && (
          <Body
            htmlFor={id}
            onClick={disabled ? null : onInputChange}
            tag={typeof children === "string" ? "p" : "div"}
          >
            {children}
          </Body>
        )}
        <input
          className={inputClassNames}
          data-testid={id}
          id={id}
          checked={selected}
          onChange={onInputChange}
          aria-disabled={disabled}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          type="checkbox"
          aria-describedby={hint ? `hint-${id}` : undefined}
          {...otherProps}
        />
        {!before && children && (
          <Body
            htmlFor={id}
            onClick={disabled ? undefined : onInputChange}
            tag={typeof children === "string" ? "p" : "div"}
          >
            {children}
          </Body>
        )}
      </div>
      {hint && (
        <Hint
          id={`hint-${id}`}
          status={error ? STATUS.DANGER : hintStatus}
          showIcon={hintShowIcon}
        >
          {hint}
        </Hint>
      )}
    </Column>
  );
};

export default Checkbox;

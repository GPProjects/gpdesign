import { useEffect, useState } from "react";
import { RadioboxProps } from "./RadioboxTypes";
import { STATUS } from "../../../constants/const";
import Hint from "../Hint/Hint";
import { Body } from "../../Foundations/Typography/Typography";
import styles from "./Radiobox.module.scss";
import { Column } from "../../Utils/Flex/FlexContainers";

const RadioBox = (props: RadioboxProps) => {
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
    console.log(`Radiobox ${id}`, props);
  }

  const [selected, setSelected] = useState<string | undefined>(checked);

  const onRadioChange = (value: string) => {
    setSelected(value);
    if (handleChange) {
      handleChange(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // For handle enter key to set the radio button when focused
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      setSelected(input.id);
      if (handleChange) {
        handleChange(input.id);
      }
    }
  };

  useEffect(() => {
    if (checked) {
      setSelected(checked);
    }
  }, [checked]);

  const wrapperClassNames = [
    "gp-radiobox-wrapper",
    styles["radiobox-wrapper"],
    disabled && styles["disabled"],
    vertical && styles["vertical"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "gp-radiobox-input",
    styles["radiobox-input"],
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
      className={`gp-radiobox-container ${className}  ${styles["radiobox-container"]}`}
    >
      <div className={wrapperClassNames}>
        {before && children && (
          <Body
            htmlFor={id}
            onClick={disabled ? null : () => onRadioChange(id)}
            tag={typeof children === "string" ? "p" : "div"}
          >
            {children}
          </Body>
        )}
        <input
          className={inputClassNames}
          data-testid={id}
          id={id}
          checked={selected === id}
          onChange={(e) => onRadioChange(e.target.id)}
          aria-disabled={disabled}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          type="radio"
          aria-describedby={hint ? `hint-${id}` : undefined}
          {...otherProps}
        />
        {!before && children && (
          <Body
            htmlFor={id}
            onClick={disabled ? null : () => onRadioChange(id)}
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

export default RadioBox;

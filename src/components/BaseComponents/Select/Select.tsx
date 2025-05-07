import React, { useEffect, useState } from "react";
import { Option, SelectProps } from "./SelectTypes";
import { Body, BodySmall } from "../../Foundations/Typography/Typography";
import { COLORS, STATUS } from "../../../constants/const";
import Hint from "../Hint/Hint";
import Icon from "../../Foundations/Icons/Icon";
import styles from "./Select.module.scss";

const Select = (props: SelectProps) => {
  const {
    caption,
    className,
    debugMode,
    disabled,
    error,
    handleChange,
    hint,
    hintShowIcon,
    hintStatus,
    id,
    label,
    options,
    placeholder,
    status,
    value = "",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Select ${id}`, props);
  }

  const [internalValue, setInternalValue] = useState<string>("");
  const [internalOptions, setInternalOptions] = useState<Option[]>(options);

  // Effects
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Effects
  useEffect(() => {
    const emptyOption = {
      label: "",
      value: "",
    };
    const newArray = [...options, emptyOption];
    setInternalOptions(newArray);
  }, [options]);

  // Handlers
  const onChange = (e: React.ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value;
    setInternalValue(val);
    if (handleChange) {
      handleChange(val);
    }
  };

  const wrapperClassNames = [
    "gp-select-wrapper",
    styles["select-wrapper"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClassNames = [
    "gp-select-container",
    styles["select-container"],
    disabled && styles["disabled"],
    (status || error) && (error ? styles["danger"] : status && styles[status]),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const selectClassNames = [
    "gp-select-input",
    styles["select-input"],
    disabled && styles["disabled"],
    (status || error) && (error ? styles["danger"] : status && styles[status]),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassNames}>
      {label && (
        <Body
          className={`select-label ${className}`}
          htmlFor={id}
          weight="600"
          tag={typeof label === "string" ? "p" : "div"}
        >
          {label}
        </Body>
      )}
      {caption && (
        <BodySmall
          tag={typeof caption === "string" ? "p" : "div"}
          id={`caption-${id}`}
          color={COLORS.textMuted}
        >
          {caption}
        </BodySmall>
      )}
      <div className={containerClassNames}>
        <select
          className={selectClassNames}
          id={id}
          data-testid={id}
          aria-label={placeholder}
          aria-invalid={error}
          value={internalValue}
          onChange={onChange}
          disabled={disabled}
          aria-disabled={disabled}
          aria-labelledby={caption ? `caption-${id}` : undefined}
          aria-describedby={hint ? `hint-${id}` : undefined}
          {...otherProps}
        >
          {internalOptions.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!internalValue && (
          <Body
            className={styles["placeholder-select"]}
            color={disabled ? COLORS.disabled : COLORS.textMuted}
          >
            {placeholder}
          </Body>
        )}
        <Icon
          className={styles["arrowicon-select"]}
          iconName="faAngleDown"
          color={disabled ? COLORS.disabled : COLORS.textDefault}
        />
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
    </div>
  );
};

Select.displayName = "Select";

export default Select;

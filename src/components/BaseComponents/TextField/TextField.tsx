import React, { useEffect, useState } from "react";
import { TextFieldProps } from "./TextFieldTypes";
import { Body, BodySmall } from "../../Foundations/Typography/Typography";
import { COLORS, STATUS } from "../../../constants/const";
import Hint from "../Hint/Hint";
import styles from "./TextField.module.scss";

const TextField = (props: TextFieldProps) => {
  const {
    autoComplete,
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
    placeholder,
    status,
    type = "text",
    value = "",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Text field ${id}`, props);
  }

  const [internalValue, setInternalValue] = useState<string>("");

  // Effects
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Handlers
  const onChange = (e: React.ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value;
    setInternalValue(val);
    if (handleChange) {
      handleChange(val);
    }
  };

  const wrapperClassNames = [
    "gp-text-field-wrapper",
    styles["text-field-wrapper"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "gp-text-field-container",
    styles["text-field-container"],
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
          className={`text-field-label ${className}`}
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
      <input
        className={inputClassNames}
        id={id}
        data-testid={id}
        aria-label={placeholder}
        aria-invalid={error}
        aria-disabled={disabled}
        placeholder={placeholder}
        value={internalValue}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete ? "on" : "off"}
        type={type}
        aria-labelledby={caption ? `caption-${id}` : undefined}
        aria-describedby={hint ? `hint-${id}` : undefined}
        {...otherProps}
      />
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

TextField.displayName = "TextField";

export default TextField;

import React, { useEffect, useState } from "react";
import { TextAreaProps } from "./TextAreaTypes";
import { Body, BodySmall } from "../../Foundations/Typography/Typography";
import { COLORS, STATUS } from "../../../constants/const";
import Hint from "../Hint/Hint";
import styles from "./TextArea.module.scss";

const TextArea = (props: TextAreaProps) => {
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
    placeholder,
    status,
    value = "",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Text area ${id}`, props);
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
    "gp-text-area-wrapper",
    styles["text-area-wrapper"],
    disabled && styles["disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "gp-text-area-container",
    styles["text-area-container"],
    disabled && styles["disabled"],
    (status || error) && (error ? styles["danger"] : status && styles[status]),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassNames}>
      <div>
        {label && (
          <Body
            className={`text-area-label ${className}`}
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
      </div>
      <textarea
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

TextArea.displayName = "TextArea";

export default TextArea;

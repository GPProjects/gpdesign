import { useEffect, useState } from "react";
import { InputSearchProps } from "./InputSearchTypes";
import TextField from "../TextField/TextField";
import Icon from "../../Foundations/Icons/Icon";
import { COLORS, STATUS } from "../../../constants/const";
import { Body, BodySmall } from "../../Foundations/Typography/Typography";
import Hint from "../Hint/Hint";
import styles from "./InputSearch.module.scss";

const InputSearch = (props: InputSearchProps) => {
  const {
    caption,
    className,
    debugMode,
    error,
    handleChange,
    hint,
    hintShowIcon,
    hintStatus,
    id,
    label,
    onSubmit,
    placeholder,
    status,
    value = "",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Input search field ${id}`, props);
  }

  const [internalValue, setInternalValue] = useState<string>("");

  const wrapperClassNames = [
    "gp-search-input-container",
    styles["search-input-container"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClassNames = [
    "gp-search-input-wrapper",
    styles["search-input-wrapper"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Effects
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Handlers
  const onChange = (val: string) => {
    setInternalValue(val);
    if (handleChange) {
      handleChange(val);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(internalValue);
    }
  };

  const onReset = () => {
    setInternalValue("");
    if (handleChange) {
      handleChange("");
    }
    if (onSubmit) {
      onSubmit("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // For handle enter key to set the radio button when focused
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={wrapperClassNames}>
      {label && (
        <Body
          className={`search-input-label ${className}`}
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
      <div className={inputClassNames}>
        <TextField
          className={`search-input ${className}`}
          id={id}
          placeholder={placeholder}
          handleChange={onChange}
          value={internalValue}
          onKeyDown={handleKeyDown}
          error={error}
          status={status}
          aria-labelledby={caption ? `caption-${id}` : undefined}
          aria-describedby={hint ? `hint-${id}` : undefined}
          {...otherProps}
        />
        <Icon
          className={styles["icon-left-search"]}
          iconName="faMagnifyingGlass"
          color={COLORS.textMuted}
        />

        {internalValue && (
          <Icon
            onClick={onReset}
            className={styles["icon-right-search"]}
            iconName="faXmark"
            color={COLORS.textMuted}
          />
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
    </div>
  );
};

InputSearch.displayName = "InputSearch";

export default InputSearch;

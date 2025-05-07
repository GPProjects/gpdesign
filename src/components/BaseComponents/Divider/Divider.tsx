import styles from "./Divider.module.scss";

interface Props {
  className?: string;
  debugMode?: boolean;
  id?: string;
  [key: string]: any;
}

const Divider = (props: Props) => {
  const { className, id, debugMode, ...otherProps } = props;

  if (debugMode) {
    console.log(`Divider ${id}`, props);
  }

  const wrapperClassNames = [
    "gp-divider-container",
    styles["divider-container"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      data-testid={id}
      className={wrapperClassNames}
      id={id}
      {...otherProps}
    />
  );
};

Divider.displayName = "Divider";

export default Divider;

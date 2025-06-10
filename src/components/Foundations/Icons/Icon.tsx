import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import styles from "./Icon.module.scss";
import { SIZES } from "../../../constants/const";

export type IconTypes = "solid" | "regular" | "brands";

export interface IconProps {
  color?: string;
  className?: string;
  debugMode?: boolean;
  iconName: string;
  id?: string;
  size?: Extract<SIZES, "l" | "m" | "s">;
  type?: IconTypes;
  [key: string]: any;
}

const Icon = (props: IconProps) => {
  const {
    color,
    className = "",
    debugMode,
    iconName,
    id,
    size = SIZES.M,
    type = "solid",
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Icon ${id}`, props);
  }

  const iconSolid = (SolidIcons as any)[iconName];
  const iconRegular = (RegularIcons as any)[iconName];
  const iconBrand = (BrandIcons as any)[iconName];

  if (!iconSolid && !iconRegular && !iconBrand) {
    console.warn(`Icon "${iconName}" not found.`);
    return null;
  }

  let icon = iconSolid;
  switch (type) {
    case "solid":
      icon = iconSolid;
      break;
    case "regular":
      icon = iconRegular;
      break;
    case "brands":
      icon = iconBrand;
      break;
  }

  const classNames = [
    "gp-icon-element",
    styles["icon-element"],
    color && `gp-color-${color}`,
    size && styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <FontAwesomeIcon
      data-testid={id}
      id={id}
      className={classNames}
      icon={icon}
      {...otherProps}
    />
  );
};

export default Icon;

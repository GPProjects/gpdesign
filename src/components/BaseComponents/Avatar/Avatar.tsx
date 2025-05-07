import { SIZES, RADIUS } from "../../../constants/const";
import { AvatarProps } from "./AvatarTypes";
import Placeholder from "./assets/w-user.png";
import Flex from "../../Utils/Flex/Flex";
import styles from "./Avatar.module.scss";

const Avatar = (props: AvatarProps) => {
  const {
    className = "",
    debugMode,
    id,
    size = SIZES.M,
    src,
    placeholder = Placeholder,
    ...otherProps
  } = props;

  if (debugMode) {
    console.log(`Avatar ${id}`, props);
  }

  const classNames = [
    "gp-avatar-container",
    styles["avatar-container"],
    size && styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Flex
      data-testid={id}
      id={id}
      className={classNames}
      radius={RADIUS.MAX}
      border="100"
      style={{ backgroundImage: `url(${src || placeholder})` }}
      role="img"
      {...otherProps}
    />
  );
};

Avatar.displayName = "Avatar";

export default Avatar;

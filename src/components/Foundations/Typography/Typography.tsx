import React from "react";
import Text from "./Text";
import { TextProps } from "./TextTypes";

export const TYPOGRAPHY_VARIANTS = {
  DisplayLarge: "display-large",
  DisplaySmall: "display-small",
  HeadingLarge: "heading-large",
  HeadingMedium: "heading-medium",
  HeadingSmall: "heading-small",
  Body: "body",
  BodySmall: "body-small",
  BodyExtraSmall: "body-extra-small",
} as const;

export type TYPOGRAPHY_VARIANTS =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

const createTypographyComponent = (
  variantKey: keyof typeof TYPOGRAPHY_VARIANTS
) => {
  const variant = TYPOGRAPHY_VARIANTS[variantKey];

  const TypographyComponent = React.memo(({ type, ...props }: TextProps) => {
    return <Text type={variant} {...props} />;
  });

  TypographyComponent.displayName = variantKey;

  return TypographyComponent;
};

// Exporta tutti i componenti tipografici
export const DisplayLarge = createTypographyComponent("DisplayLarge");
export const DisplaySmall = createTypographyComponent("DisplaySmall");
export const HeadingLarge = createTypographyComponent("HeadingLarge");
export const HeadingMedium = createTypographyComponent("HeadingMedium");
export const HeadingSmall = createTypographyComponent("HeadingSmall");
export const Body = createTypographyComponent("Body");
export const BodySmall = createTypographyComponent("BodySmall");
export const BodyExtraSmall = createTypographyComponent("BodyExtraSmall");

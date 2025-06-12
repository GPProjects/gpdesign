export const SIZES = {
  XL: "xl",
  L: "l",
  M: "m",
  S: "s",
  XS: "xs",
} as const;

export type SIZES = (typeof SIZES)[keyof typeof SIZES];

export const STATUS = {
  DANGER: "danger",
  INFO: "info",
  WARNING: "warning",
  SUCCESS: "success",
} as const;

export type STATUS = (typeof STATUS)[keyof typeof STATUS];

export const THEME = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

export type THEME = (typeof THEME)[keyof typeof THEME];

export const RADIUS = {
  XXS: "xxs", // 2px
  XS: "xs", // 4px
  S: "s", // 8px
  M: "m", // 16px
  L: "l", // 24px
  XL: "xl", // 32px
  MAX: "max",
} as const;

export type RADIUS = (typeof RADIUS)[keyof typeof RADIUS];

export const SHADOWS = {
  SM: "sm",
  NORMAL: "normal",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
  "3XL": "3xl",
  FOCUS: "focus",
} as const;

export type SHADOWS = (typeof SHADOWS)[keyof typeof SHADOWS];

export const SPACING = {
  SP_0: "0",
  SP_1: "1", // 1px
  SP_2: "2", // 2px
  SP_4: "4", // 4px
  SP_6: "6", // 6px
  SP_8: "8", // 8px
  SP_10: "10", // 10px
  SP_12: "12", // 12px
  SP_14: "14", // 14px
  SP_16: "16", // 16px
  SP_20: "20", // 20px
  SP_24: "24", // 24px
  SP_28: "28", // 28px
  SP_32: "32", // 32px
  SP_36: "36", // 36px
  SP_40: "40", // 40px
  SP_48: "48", // 48px
  SP_64: "64", // 64px
  SP_72: "72", // 72px
  SP_80: "80", // 80px
  SP_96: "96", // 96px
  SP_128: "128", // 128px
  SP_256: "256", // 256px
  SP_320: "320", // 320px
} as const;

export type SPACING = (typeof SPACING)[keyof typeof SPACING];

export const COLORS = {
  accent100: "accent100",
  accent200: "accent200",
  accent300: "accent300",
  border100: "border100",
  border200: "border200",
  border300: "border300",
  danger100: "danger100",
  danger200: "danger200",
  danger300: "danger300",
  info100: "info100",
  info200: "info200",
  info300: "info300",
  success100: "success100",
  success200: "success200",
  success300: "success300",
  warning100: "warning100",
  warning200: "warning200",
  warning300: "warning300",
  white: "white",
  textDefault: "text-default",
  textMuted: "text-muted",
  bgDisabled: "bg-disabled",
  bgWhite: "bg-white",
  bgHover: "bg-hover",
  disabled: "disabled",
  black: "black",
} as const;

export type COLORS = (typeof COLORS)[keyof typeof COLORS];

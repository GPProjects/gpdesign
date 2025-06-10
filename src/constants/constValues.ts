export const RADIUS_VALUES = {
  XXS: "0.125rem", // 2px
  XS: "0.25rem", // 4px
  SM: "0.5rem", // 8px
  MD: "1rem", // 16px
  L: "1.5rem", // 24px
  XL: "2rem", // 32px
  MAX: "100%",
} as const;

export type RADIUS = (typeof RADIUS_VALUES)[keyof typeof RADIUS_VALUES];

export const SHADOWS_VALUES = {
  SM: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  NORMAL:
    "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
  MD: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
  LG: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 8px 16px rgba(0, 0, 0, 0.15)",
  XL: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 8px 16px rgba(0, 0, 0, 0.15)",
  "2XL":
    "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 16px 32px rgba(0, 0, 0, 0.15)",
  "3XL":
    "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 24px 48px rgba(0, 0, 0, 0.15)",
  FOCUS: "0px 0px 0px 3px rgba(0, 131, 235, 0.4)",
} as const;

export type SHADOWS = (typeof SHADOWS_VALUES)[keyof typeof SHADOWS_VALUES];

export const SPACING_VALUES = {
  SP_0: "0rem",
  SP_1: "0.0625rem", // 1px
  SP_2: "0.125rem", // 2px
  SP_4: "0.25rem", // 4px
  SP_6: "0.375rem", // 6px
  SP_8: "0.5rem", // 8px
  SP_10: "0.625rem", // 10px
  SP_12: "0.75rem", // 12px
  SP_14: "0.875rem", // 14px
  SP_16: "1rem", // 16px
  SP_20: "1.25rem", // 20px
  SP_24: "1.5rem", // 24px
  SP_28: "1.75rem", // 28px
  SP_32: "2rem", // 32px
  SP_36: "2.25rem", // 36px
  SP_40: "2.5rem", // 40px
  SP_48: "3rem", // 48px
  SP_64: "4rem", // 64px
  SP_72: "4.5rem", // 72px
  SP_80: "5rem", // 80px
  SP_96: "6rem", // 96px
  SP_128: "8rem", // 128px
  SP_256: "16rem", // 256px
  SP_320: "20rem", // 320px
} as const;

export type SPACING = (typeof SPACING_VALUES)[keyof typeof SPACING_VALUES];

export const COLORS_VALUES = {
  accent100: "#ffb3d9",
  accent200: "#d1006a",
  accent300: "#690035",
  border100: "#DDDDDD",
  border200: "#A6A6A6",
  border300: "#5E5E5E",
  danger100: "#FFEAEC",
  danger200: "#DC260D",
  danger300: "#9F1300",
  info100: "#E9F5FF",
  info200: "#0078D6",
  info300: "#005396",
  success100: "#E3FFEC",
  success200: "#038939",
  success300: "#006529",
  warning100: "#FFF6EA",
  warning200: "#CF4B00",
  warning300: "#903900",
  white: "#FFFFFF",
  textDefault: "#111111",
  textMuted: "#525252",
  bgDisabled: "#F7F7F7",
  bgWhite: "#FFFFFF",
  bgHover: "#F2F2F3",
  disabled: "#757575",
  black: "#000",
} as const;

export type COLORS = (typeof COLORS_VALUES)[keyof typeof COLORS_VALUES];
